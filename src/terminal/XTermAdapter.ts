/**
 * XTermAdapter - Integrates xterm.js with the TerminalText renderer
 *
 * This adapter connects xterm.js (which handles input/output and terminal state)
 * to our custom TerminalText renderer (which applies CRT shader effects).
 *
 * The xterm.js terminal is used for:
 * - Handling keyboard input
 * - Managing terminal buffer state
 * - Cursor positioning
 * - Scrollback
 *
 * The output from xterm.js is extracted and rendered through our shaders.
 */

import { Terminal } from "@xterm/xterm";
import {
	getInitialOutput,
	getTabCompletions,
	type KeyHandler,
	runCommand,
	type TerminalIO,
} from "./ShellEmulator";
import type { TerminalText } from "./TerminalText";
import { isMobileDevice } from "../utils";

// Audio controls interface
interface AudioControls {
	startBackgroundMusic: () => void;
	startGameMusic: () => void;
	stopGameMusic: () => void;
}

export class XTermAdapter {
	private xterm: Terminal;
	private terminalText: TerminalText;
	private currentLine: string = "";
	private hiddenContainer: HTMLDivElement;
	private isCommandRunning: boolean = false;
	private biosComplete: boolean = false;
	private bootComplete: boolean = false;
	private audioControls: AudioControls | null = null;

	// Command history for Up/Down arrow navigation
	private commandHistory: string[] = [];
	private historyIndex: number = -1;
	private savedCurrentLine: string = ""; // Saves current line when navigating history

	// Game key handler
	private gameKeyHandler: KeyHandler | null = null;

	// Track paste cooldown to prevent rapid repeated pastes
	private lastPasteTime: number = 0;
	private static readonly PASTE_COOLDOWN_MS: number = 500;

	// Mouse selection state
	private isSelecting: boolean = false;
	private selectionStart: { col: number; row: number } | null = null;

	// Bound keyboard handler for games (so we can remove it later)
	private boundGameKeyboardHandler: ((event: KeyboardEvent) => void) | null =
		null;

	// Track if cursor is explicitly hidden (by games)
	private cursorExplicitlyHidden: boolean = false;

	// Buffer for accumulating output before rendering
	// biome-ignore lint/correctness/noUnusedPrivateClassMembers: property is used via this.outputBuffer
	private outputBuffer: string = "";

	constructor(
		terminalText: TerminalText,
		cols: number = 80,
		rows: number = 24,
		audioControls?: AudioControls,
	) {
		this.terminalText = terminalText;
		this.audioControls = audioControls || null;

		// Create a hidden container for xterm (we don't display it directly)
		this.hiddenContainer = document.createElement("div");
		this.hiddenContainer.style.position = "absolute";
		this.hiddenContainer.style.left = "-9999px";
		this.hiddenContainer.style.top = "-9999px";
		this.hiddenContainer.style.width = "800px";
		this.hiddenContainer.style.height = "600px";
		document.body.appendChild(this.hiddenContainer);

		// Get actual dimensions from TerminalText (which calculates based on screen size)
		const gridSize = terminalText.getGridSize();
		const actualCols = gridSize.cols > 0 ? gridSize.cols : cols;
		const actualRows = gridSize.rows > 0 ? gridSize.rows : rows;

		// Create xterm instance with calculated dimensions
		this.xterm = new Terminal({
			cols: actualCols,
			rows: actualRows,
			cursorBlink: false, // We handle blinking ourselves in TerminalText
			cursorStyle: "block",
			scrollback: 1000,
			fontFamily: "Terminus, monospace",
			fontSize: 12,
		});

		// Open terminal in hidden container
		this.xterm.open(this.hiddenContainer);

		// Show boot prompt first, wait for Enter to start BIOS sequence
		this.showBootPrompt();

		// Attach keyboard listener to intercept arrow keys BEFORE xterm processes them
		// This allows us to use Up/Down for command history instead of cursor movement
		// Also forwards keys to game handler when a game is running
		this.xterm.attachCustomKeyEventHandler((event: KeyboardEvent) => {
			// Block all keyboard input on mobile devices
			if (isMobileDevice()) {
				return false;
			}

			// If a game key handler is active, forward ALL keys to it (both keydown and keyup)
			if (this.gameKeyHandler) {
				// Ignore repeated keydown events from key being held - we track key state ourselves
				// This prevents event accumulation which causes input lag
				if (event.type === "keydown" && event.repeat) {
					return false;
				}
				const eventType = event.type as "keydown" | "keyup";
				this.gameKeyHandler(event.key, event.keyCode, eventType);
				return false; // Prevent xterm from processing
			}

			// Arrow Up - handle history navigation, prevent xterm from moving cursor
			if (event.key === "ArrowUp" || event.keyCode === 38) {
				if (event.type === "keydown") {
					this.handleArrowUp();
				}
				return false; // Prevent xterm from processing this key
			}

			// Arrow Down - handle history navigation, prevent xterm from moving cursor
			if (event.key === "ArrowDown" || event.keyCode === 40) {
				if (event.type === "keydown") {
					this.handleArrowDown();
				}
				return false; // Prevent xterm from processing this key
			}

			// Arrow Left/Right - block entirely to keep cursor at end of input
			// This simplifies the input model and prevents prompt editing
			if (
				event.key === "ArrowLeft" ||
				event.keyCode === 37 ||
				event.key === "ArrowRight" ||
				event.keyCode === 39
			) {
				return false; // Block cursor movement within line
			}

			// Home/End keys - block to keep cursor at end
			if (
				event.key === "Home" ||
				event.keyCode === 36 ||
				event.key === "End" ||
				event.keyCode === 35
			) {
				return false;
			}

			// Tab key - handle autocompletion
			if (event.key === "Tab" || event.keyCode === 9) {
				if (event.type === "keydown") {
					this.handleTab();
				}
				event.preventDefault();
				return false;
			}

			// Backspace - handle ourselves to protect the prompt
			if (event.key === "Backspace" || event.keyCode === 8) {
				if (event.type === "keydown") {
					this.handleBackspace();
				}
				event.preventDefault();
				return false;
			}

			// Enter key - handle command execution consistently
			if (event.key === "Enter" || event.keyCode === 13) {
				if (event.type === "keydown") {
					this.handleEnter();
				}
				event.preventDefault();
				return false; // Prevent xterm from processing this key
			}

			// Let xterm handle all other keys
			return true;
		});

		// Handle keyboard input for other keys
		this.xterm.onKey(({ key, domEvent }) => {
			// Block all keyboard input on mobile devices
			if (isMobileDevice()) {
				return;
			}
			this.handleKey(key, domEvent);
		});

		// Handle data (paste, etc.)
		this.xterm.onData((data) => {
			// Block all input on mobile devices
			if (isMobileDevice()) {
				return;
			}
			// Only handle paste events (multi-character data) when not running a command
			if (
				!this.isCommandRunning &&
				data.length > 1 &&
				!data.includes("\r") &&
				!data.includes("\n")
			) {
				this.currentLine += data;
				this.xterm.write(data);
				this.updateTerminalText();
			}
		});

		// Mouse wheel scrolling is handled natively by xterm.js
		// We just need to update our renderer when the viewport scrolls
		this.xterm.onScroll(() => {
			this.updateTerminalText();
		});

		// Enable mouse wheel scrolling on the canvas by forwarding events to xterm
		// Get the container element and forward wheel events
		const container = document.getElementById("container");
		if (container) {
			container.addEventListener(
				"wheel",
				(event: WheelEvent) => {
					// Scroll the terminal based on wheel delta
					const lines =
						Math.sign(event.deltaY) *
						Math.max(1, Math.floor(Math.abs(event.deltaY) / 50));
					this.xterm.scrollLines(lines);
					this.updateTerminalText();
					event.preventDefault();
				},
				{ passive: false },
			);

			// Enable right-click to paste from clipboard
			container.addEventListener("contextmenu", (event: MouseEvent) => {
				event.preventDefault();
				event.stopPropagation();

				// Block paste on mobile devices
				if (isMobileDevice()) {
					return;
				}

				// Ignore if boot/BIOS not complete or command running
				if (!this.bootComplete || !this.biosComplete || this.isCommandRunning) {
					return;
				}

				// Ignore if a game is running
				if (this.gameKeyHandler) {
					return;
				}

				// If there's a selection, don't paste - allow copying instead
				const selection = this.terminalText.getSelection();
				if (selection.start && selection.end) {
					return;
				}

				// Debounce: ignore rapid right-clicks within cooldown period
				const now = Date.now();
				if (now - this.lastPasteTime < XTermAdapter.PASTE_COOLDOWN_MS) {
					return;
				}
				this.lastPasteTime = now;

				navigator.clipboard.readText().then((text) => {
					if (text) {
						// Filter out newlines and carriage returns for single-line paste
						const cleanText = text.replace(/[\r\n]/g, "");
						if (cleanText.length > 0) {
							this.currentLine += cleanText;
							// Use callback to ensure text is written before updating display
							this.xterm.write(cleanText, () => {
								this.updateTerminalText();
								this.xterm.focus();
							});
						}
					}
				}).catch((err) => {
					// Clipboard access denied or not available
					console.warn("Could not read clipboard:", err);
				});
			});

			// Mouse selection handlers
			container.addEventListener("mousedown", (event: MouseEvent) => {
				// Only handle left mouse button
				if (event.button !== 0) {
					return;
				}

				// Block on mobile devices
				if (isMobileDevice()) {
					return;
				}

				// Ignore if a game is running
				if (this.gameKeyHandler) {
					return;
				}

				// Get grid position from mouse coordinates (viewport-relative)
				const rect = container.getBoundingClientRect();
				const x = event.clientX - rect.left;
				const y = event.clientY - rect.top;
				const gridPos = this.terminalText.pixelToGrid(x, y);

				// Convert to absolute buffer position
				const viewportY = this.xterm.buffer.active.viewportY;
				const absPos = { col: gridPos.col, row: gridPos.row + viewportY };

				// Start selection with absolute positions
				this.isSelecting = true;
				this.selectionStart = absPos;
				
				// Pass viewport offset to TerminalText for rendering
				this.terminalText.setSelection(absPos, absPos, viewportY);

				event.preventDefault();
			});

			container.addEventListener("mousemove", (event: MouseEvent) => {
				// Only track if we're actively selecting
				if (!this.isSelecting || !this.selectionStart) {
					return;
				}

				// Get grid position from mouse coordinates (viewport-relative)
				const rect = container.getBoundingClientRect();
				const x = event.clientX - rect.left;
				const y = event.clientY - rect.top;
				const gridPos = this.terminalText.pixelToGrid(x, y);

				// Convert to absolute buffer position
				const viewportY = this.xterm.buffer.active.viewportY;
				const absPos = { col: gridPos.col, row: gridPos.row + viewportY };

				// Update selection end with absolute position
				this.terminalText.setSelection(this.selectionStart, absPos, viewportY);
			});

			container.addEventListener("mouseup", (event: MouseEvent) => {
				// Only handle left mouse button
				if (event.button !== 0) {
					return;
				}

				if (this.isSelecting && this.selectionStart) {
					// Get final grid position (viewport-relative)
					const rect = container.getBoundingClientRect();
					const x = event.clientX - rect.left;
					const y = event.clientY - rect.top;
					const gridPos = this.terminalText.pixelToGrid(x, y);

					// Convert to absolute buffer position
					const viewportY = this.xterm.buffer.active.viewportY;
					const absPos = { col: gridPos.col, row: gridPos.row + viewportY };

					// Check if it's a single click (no drag) - clear selection
					if (
						absPos.col === this.selectionStart.col &&
						absPos.row === this.selectionStart.row
					) {
						this.terminalText.clearSelection();
					} else {
						// Finalize selection and copy to clipboard
						this.terminalText.setSelection(this.selectionStart, absPos, viewportY);
						this.copySelectionToClipboard();
					}
				}

				this.isSelecting = false;
				this.selectionStart = null;

				// Refocus terminal for keyboard input
				this.xterm.focus();
			});

			// Handle mouse leaving the container while selecting
			container.addEventListener("mouseleave", () => {
				// Don't clear selection, just stop tracking
				this.isSelecting = false;
				this.selectionStart = null;
			});
		}
	}

	/**
	 * Show the initial boot prompt (or mobile message if on mobile device)
	 */
	private showBootPrompt(): void {
		if (isMobileDevice()) {
			const mobileMessage =
				"Sorry, this site is\r\n" +
				"designed for a retro\r\n" +
				"terminal experience\r\n" +
				"that requires a\r\n" +
				"physical keyboard.\r\n" +
				"\r\n" +
				"Please visit using\r\n" +
				"a desktop or laptop\r\n" +
				"to enjoy the full\r\n" +
				"experience.";
			this.xterm.write(mobileMessage);
			this.updateTerminalText();
			return;
		}
		const bootMessage = "Press ENTER to initiate the BIOS boot sequence... ";
		this.xterm.write(bootMessage);
		this.updateTerminalText();
	}

	/**
	 * Print the BIOS boot sequence with delays at @@@ markers
	 */
	private async printBiosSequence(): Promise<void> {
		try {
			// Fetch the BIOS content
			const response = await fetch("./assets/content/bios.txt");
			if (!response.ok) {
				console.warn("Could not load BIOS content:", response.statusText);
				return;
			}

			const biosContent = await response.text();
			const lines = biosContent.split("\n");

			// Group lines into batches separated by @@@
			const batches: string[][] = [];
			let currentBatch: string[] = [];

			for (const line of lines) {
				if (line.trim() === "@@@") {
					// End current batch and start a new one
					if (currentBatch.length > 0) {
						batches.push(currentBatch);
						currentBatch = [];
					}
				} else {
					currentBatch.push(line);
				}
			}

			// Don't forget the last batch
			if (currentBatch.length > 0) {
				batches.push(currentBatch);
			}

			// Print each batch with a 500ms delay between them
			for (let i = 0; i < batches.length; i++) {
				const batch = batches[i];

				// Print all lines in this batch
				for (const line of batch) {
					this.outputBuffer += `${line}\n`;
					this.xterm.write(`${line}\r\n`);
				}
				this.updateTerminalText();

				// Wait 500ms before the next batch (unless this is the last batch)
				if (i < batches.length - 1) {
					await this.sleep(500);
				}
			}

			// Add a newline after BIOS content
			this.xterm.write("\r\n");
			this.outputBuffer += "\n";
			this.updateTerminalText();
		} catch (error) {
			console.warn("Error loading BIOS content:", error);
		}
	}

	/**
	 * Sleep utility for delays
	 */
	private sleep(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	/**
	 * Create TerminalIO interface for commands to write output
	 */
	private createTerminalIO(): TerminalIO {
		return {
			write: (text: string) => {
				this.outputBuffer += text;
				this.xterm.write(text.replace(/\n/g, "\r\n"), () => {
					this.updateTerminalText();
				});
			},
			writeln: (text: string) => {
				this.outputBuffer += `${text}\n`;
				this.xterm.write(`${text.replace(/\n/g, "\r\n")}\r\n`, () => {
					this.updateTerminalText();
				});
			},
			clear: () => {
				this.xterm.clear();
				this.outputBuffer = "";
				this.updateTerminalText();
			},
			setKeyHandler: (handler: KeyHandler) => {
				this.gameKeyHandler = handler;
				// Add global keyboard listener for game input
				this.boundGameKeyboardHandler = (event: KeyboardEvent) => {
					if (this.gameKeyHandler) {
						// Ignore repeated keydown events from key being held - we track key state ourselves
						// This prevents event accumulation which causes input lag
						if (event.type === "keydown" && event.repeat) {
							event.preventDefault();
							event.stopPropagation();
							return;
						}
						const eventType = event.type as "keydown" | "keyup";
						this.gameKeyHandler(
							event.key,
							event.keyCode,
							eventType,
							event.ctrlKey,
						);
						event.preventDefault();
						event.stopPropagation();
					}
				};
				document.addEventListener(
					"keydown",
					this.boundGameKeyboardHandler,
					true,
				);
				document.addEventListener("keyup", this.boundGameKeyboardHandler, true);
			},
			clearKeyHandler: () => {
				// Remove global keyboard listener
				if (this.boundGameKeyboardHandler) {
					document.removeEventListener(
						"keydown",
						this.boundGameKeyboardHandler,
						true,
					);
					document.removeEventListener(
						"keyup",
						this.boundGameKeyboardHandler,
						true,
					);
					this.boundGameKeyboardHandler = null;
				}
				this.gameKeyHandler = null;
			},
			hideCursor: () => {
				this.cursorExplicitlyHidden = true;
				this.terminalText.setCursorVisible(false);
			},
			showCursor: () => {
				this.cursorExplicitlyHidden = false;
				this.terminalText.setCursorVisible(true);
			},
			getSize: () => {
				return this.terminalText.getGridSize();
			},
			// Video playback methods
			playVideo: (url: string) => {
				return this.terminalText.playVideo(url);
			},
			stopVideo: () => {
				this.terminalText.stopVideo();
			},
			getVideoElement: () => {
				return this.terminalText.getVideoElement();
			},
			// Game music methods
			startGameMusic: () => {
				if (this.audioControls) {
					this.audioControls.startGameMusic();
				}
			},
			stopGameMusic: () => {
				if (this.audioControls) {
					this.audioControls.stopGameMusic();
				}
			},
		};
	}

	/**
	 * Handle Tab key - autocomplete file/directory names
	 */
	private handleTab(): void {
		// Reset cursor blink on any keypress
		this.terminalText.resetCursorBlink();

		// Ignore if boot/BIOS not complete or command running
		if (!this.bootComplete || !this.biosComplete || this.isCommandRunning) {
			return;
		}

		// Get tab completions for current input
		const { completions, prefix } = getTabCompletions(this.currentLine);

		if (completions.length === 0) {
			// No completions - do nothing (could beep in a real terminal)
			return;
		}

		if (completions.length === 1) {
			// Single completion - replace the prefix with the completion
			const completion = completions[0];
			const suffix = completion.slice(prefix.length);

			// Add a space after the completion if it's not a directory
			const addSpace = !completion.endsWith("/") ? " " : "";

			// Update currentLine first, then write to xterm
			const textToAdd = suffix + addSpace;
			this.currentLine += textToAdd;
			this.xterm.write(textToAdd);
			this.updateTerminalText();
		} else {
			// Multiple completions - find common prefix and show options
			const commonPrefix = this.findCommonPrefix(completions);

			if (commonPrefix.length > prefix.length) {
				// There's a common prefix longer than what's typed - complete to it
				const suffix = commonPrefix.slice(prefix.length);
				this.currentLine += suffix;
				this.xterm.write(suffix);
				this.updateTerminalText();
			} else {
				// Show all completions
				this.xterm.write("\r\n");

				// Format completions in columns
				const maxWidth = Math.max(...completions.map((c) => c.length)) + 2;
				const cols = Math.floor(80 / maxWidth) || 1;

				for (let i = 0; i < completions.length; i += cols) {
					const row = completions.slice(i, i + cols);
					const line = row.map((c) => c.padEnd(maxWidth)).join("");
					this.xterm.write(`${line}\r\n`);
				}

				// Redraw prompt and current input
				this.xterm.write(this.getPromptString() + this.currentLine);
				this.updateTerminalText();
			}
		}
	}

	/**
	 * Find the longest common prefix among strings
	 */
	private findCommonPrefix(strings: string[]): string {
		if (strings.length === 0) return "";
		if (strings.length === 1) return strings[0];

		let prefix = strings[0];
		for (let i = 1; i < strings.length; i++) {
			while (!strings[i].startsWith(prefix) && prefix.length > 0) {
				prefix = prefix.slice(0, -1);
			}
		}
		return prefix;
	}

	/**
	 * Get the prompt string (matches ShellEmulator.getPrompt)
	 */
	private getPromptString(): string {
		// This should match the format from ShellEmulator
		// For now, we extract it from the current line in the buffer
		const buffer = this.xterm.buffer.active;
		const line = buffer.getLine(buffer.cursorY);
		if (line) {
			const lineText = line.translateToString(true);
			const promptEnd = lineText.indexOf(" $ ");
			if (promptEnd !== -1) {
				return lineText.slice(0, promptEnd + 3);
			}
		}
		// Fallback
		return "guest@remojansen.com ~ $ ";
	}

	/**
	 * Handle Arrow Up key - navigate to previous command in history
	 */
	private handleArrowUp(): void {
		// If a game is running, don't do anything - game handles its own input
		if (this.gameKeyHandler) {
			return;
		}

		// Reset cursor blink on any keypress
		this.terminalText.resetCursorBlink();

		// Ignore if boot/BIOS not complete or command running
		if (!this.bootComplete || !this.biosComplete || this.isCommandRunning) {
			return;
		}

		this.navigateHistoryUp();
	}

	/**
	 * Handle Arrow Down key - navigate to next command in history
	 */
	private handleArrowDown(): void {
		// If a game is running, don't do anything - game handles its own input
		if (this.gameKeyHandler) {
			return;
		}

		// Reset cursor blink on any keypress
		this.terminalText.resetCursorBlink();

		// Ignore if boot/BIOS not complete or command running
		if (!this.bootComplete || !this.biosComplete || this.isCommandRunning) {
			return;
		}

		this.navigateHistoryDown();
	}

	/**
	 * Copy the current selection to clipboard
	 */
	private copySelectionToClipboard(): void {
		const selection = this.terminalText.getSelection();
		if (!selection.start || !selection.end) {
			return;
		}

		// Get the text content from xterm buffer
		const buffer = this.xterm.buffer.active;

		// Selection is already in absolute buffer coordinates
		let startRow = selection.start.row;
		let startCol = selection.start.col;
		let endRow = selection.end.row;
		let endCol = selection.end.col;

		// Normalize selection (start may be after end if selecting backwards)
		if (startRow > endRow || (startRow === endRow && startCol > endCol)) {
			[startRow, endRow] = [endRow, startRow];
			[startCol, endCol] = [endCol, startCol];
		}

		// Extract selected text using absolute row indices
		const selectedLines: string[] = [];
		for (let row = startRow; row <= endRow; row++) {
			const line = buffer.getLine(row);
			if (!line) {
				selectedLines.push("");
				continue;
			}

			const lineText = line.translateToString(true);
			let lineStart = 0;
			let lineEnd = lineText.length;

			if (row === startRow) {
				lineStart = startCol;
			}
			if (row === endRow) {
				lineEnd = endCol + 1;
			}

			selectedLines.push(lineText.slice(lineStart, lineEnd));
		}

		const selectedText = selectedLines.join("\n");

		// Copy to clipboard
		if (selectedText) {
			navigator.clipboard.writeText(selectedText).catch((err) => {
				console.warn("Could not copy to clipboard:", err);
			});
		}
	}

	/**
	 * Handle Backspace key - simple delete from end of currentLine
	 * @returns false always since we handle it ourselves
	 */
	private handleBackspace(): boolean {
		// Reset cursor blink on any keypress
		this.terminalText.resetCursorBlink();

		// Clear selection when pressing Backspace
		this.terminalText.clearSelection();

		// Ignore if boot/BIOS not complete or command running
		if (!this.bootComplete || !this.biosComplete || this.isCommandRunning) {
			return false;
		}

		// Only delete if there's something to delete
		if (this.currentLine.length > 0) {
			this.currentLine = this.currentLine.slice(0, -1);
			this.xterm.write("\b \b", () => {
				this.updateTerminalText();
			});
		}

		return false;
	}

	/**
	 * Handle Enter key - execute current command or boot sequence
	 */
	private handleEnter(): void {
		// Block all input on mobile devices
		if (isMobileDevice()) {
			return;
		}

		// Clear selection when pressing Enter
		this.terminalText.clearSelection();

		// Reset cursor blink on any keypress
		this.terminalText.resetCursorBlink();

		// If waiting for boot, start the boot sequence
		if (!this.bootComplete) {
			this.bootComplete = true;

			// Trigger the audio controls to start background music
			if (this.audioControls) {
				this.audioControls.startBackgroundMusic();
			}

			// Clear screen completely (including the boot prompt message)
			// \x1b[2J clears the entire screen, \x1b[H moves cursor to home position
			this.xterm.write("\x1b[2J\x1b[H");
			this.xterm.clear();
			this.outputBuffer = "";
			this.updateTerminalText();

			// Start BIOS sequence
			this.printBiosSequence().then(() => {
				this.biosComplete = true;
				// After BIOS, show the prompt
				const initialOutput = getInitialOutput();
				this.outputBuffer += initialOutput;
				this.xterm.write(initialOutput, () => {
					this.updateTerminalText();
				});
			});
			return;
		}

		// Ignore if BIOS not complete or command running
		if (!this.biosComplete || this.isCommandRunning) {
			return;
		}

		this.executeCommand();
	}

	/**
	 * Handle keyboard input
	 */
	private handleKey(key: string, domEvent: KeyboardEvent): void {
		const keyCode = domEvent.keyCode;

		// Reset cursor blink on any keypress (shows cursor immediately)
		this.terminalText.resetCursorBlink();

		// If boot sequence not started, ignore all input (Enter is handled separately)
		if (!this.bootComplete) {
			return;
		}

		// If BIOS sequence is not complete, ignore input
		if (!this.biosComplete) {
			return;
		}

		// If a game key handler is active, forward key to it
		// (Note: most keys are already handled by attachCustomKeyEventHandler,
		// but this catches any that slip through onKey)
		if (this.gameKeyHandler) {
			this.gameKeyHandler(key, keyCode, "keydown");
			return;
		}

		// If a command is running, ignore most input (except Ctrl+C potentially)
		if (this.isCommandRunning) {
			// TODO: Could implement Ctrl+C to cancel running commands
			return;
		}

		// Enter key is now handled by attachCustomKeyEventHandler

		// Backspace is now handled by attachCustomKeyEventHandler
		if (keyCode === 8) {
			return; // Skip - already handled
		}

		// Arrow Up/Down are handled by attachCustomKeyEventHandler

		// Page Up - scroll up one page (mouse wheel handles normal scroll)
		if (keyCode === 33) {
			this.scrollUp(this.xterm.rows);
			domEvent.preventDefault();
			return;
		}

		// Page Down - scroll down one page (mouse wheel handles normal scroll)
		if (keyCode === 34) {
			this.scrollDown(this.xterm.rows);
			domEvent.preventDefault();
			return;
		}

		// Regular printable characters - simple append to currentLine
		if (
			key.length === 1 &&
			!domEvent.ctrlKey &&
			!domEvent.altKey &&
			!domEvent.metaKey
		) {
			// Clear selection when typing
			this.terminalText.clearSelection();
			this.currentLine += key;
			this.xterm.write(key, () => {
				this.updateTerminalText();
			});
		}
	}

	/**
	 * Execute the current command asynchronously
	 */
	private async executeCommand(): Promise<void> {
		// Use currentLine as source of truth
		const command = this.currentLine;
		this.currentLine = "";

		// Add command to history if it's not empty and different from last command
		if (command.trim() !== "") {
			// Avoid duplicates at the end of history
			if (
				this.commandHistory.length === 0 ||
				this.commandHistory[this.commandHistory.length - 1] !== command
			) {
				this.commandHistory.push(command);
			}
		}

		// Reset history navigation state
		this.historyIndex = -1;
		this.savedCurrentLine = "";

		// Write newline first
		this.xterm.write("\r\n");
		this.outputBuffer += "\n";
		this.updateTerminalText();

		// Mark command as running (blocks input)
		this.isCommandRunning = true;

		try {
			// Create terminal IO for the command
			const terminalIO = this.createTerminalIO();

			// Run the command (may be async with progressive output)
			await runCommand(command, terminalIO);
		} finally {
			// Command complete, restore input
			this.isCommandRunning = false;
			this.updateTerminalText();
		}
	}

	/**
	 * Navigate to previous command in history (Up arrow)
	 */
	private navigateHistoryUp(): void {
		if (this.commandHistory.length === 0) {
			return;
		}

		// Save current line when starting to navigate
		if (this.historyIndex === -1) {
			this.savedCurrentLine = this.currentLine;
		}

		// Move to previous command (or stay at oldest)
		if (this.historyIndex < this.commandHistory.length - 1) {
			this.historyIndex++;
		}

		// Get command from history (reverse order - most recent first)
		const historyCommand =
			this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
		this.replaceCurrentLine(historyCommand);
	}

	/**
	 * Navigate to next command in history (Down arrow)
	 */
	private navigateHistoryDown(): void {
		if (this.historyIndex === -1) {
			return; // Not navigating history
		}

		this.historyIndex--;

		if (this.historyIndex === -1) {
			// Returned to current input
			this.replaceCurrentLine(this.savedCurrentLine);
			this.savedCurrentLine = "";
		} else {
			// Get command from history
			const historyCommand =
				this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
			this.replaceCurrentLine(historyCommand);
		}
	}

	/**
	 * Replace the current input line with new text
	 */
	private replaceCurrentLine(newLine: string): void {
		// Use currentLine to know how much to clear
		const clearLength = this.currentLine.length;

		// Clear current input from display
		if (clearLength > 0) {
			// Move back to start of current input
			this.xterm.write("\b".repeat(clearLength));
			// Overwrite with spaces
			this.xterm.write(" ".repeat(clearLength));
			// Move back again
			this.xterm.write("\b".repeat(clearLength));
		}

		// Write new line
		this.currentLine = newLine;
		this.xterm.write(newLine, () => {
			this.updateTerminalText();
		});
	}

	/**
	 * Scroll up in the terminal buffer
	 * @param lines Number of lines to scroll (default 1)
	 */
	private scrollUp(lines: number = 1): void {
		this.xterm.scrollLines(-lines);
		this.updateTerminalText();
	}

	/**
	 * Scroll down in the terminal buffer
	 * @param lines Number of lines to scroll (default 1)
	 */
	private scrollDown(lines: number = 1): void {
		this.xterm.scrollLines(lines);
		this.updateTerminalText();
	}

	/**
	 * Extract text content from xterm buffer and update TerminalText
	 */
	private updateTerminalText(): void {
		const buffer = this.xterm.buffer.active;
		const lines: string[] = [];

		// Get the number of lines with content
		const totalLines = buffer.length;
		const viewportStart = buffer.viewportY;
		const rows = this.xterm.rows;

		// Update selection viewport offset for proper rendering
		this.terminalText.updateSelectionViewport(viewportStart);

		// Extract visible lines from the buffer
		for (let i = 0; i < rows; i++) {
			const lineIndex = viewportStart + i;
			if (lineIndex < totalLines) {
				const line = buffer.getLine(lineIndex);
				if (line) {
					lines.push(line.translateToString(true));
				} else {
					lines.push("");
				}
			} else {
				lines.push("");
			}
		}

		// Update the terminal text renderer with current content
		const textContent = lines.join("\n");
		this.terminalText.setText(textContent);

		// Check if viewport is scrolled (not showing the current input line)
		// The cursor's actual line in the buffer is baseY + cursorY
		const cursorActualLine = buffer.baseY + buffer.cursorY;
		const viewportEnd = viewportStart + rows - 1;
		const isScrolledAway =
			cursorActualLine < viewportStart || cursorActualLine > viewportEnd;

		// Don't update cursor visibility if a game has explicitly hidden it
		if (this.cursorExplicitlyHidden) {
			return;
		}

		if (isScrolledAway) {
			// Hide cursor when scrolled away from the current input line
			this.terminalText.setCursorVisible(false);
		} else {
			// Show cursor and update its position relative to viewport
			this.terminalText.setCursorVisible(true);
			const cursorCol = buffer.cursorX;
			// Calculate cursor row relative to the current viewport
			const cursorRowInViewport = cursorActualLine - viewportStart;
			this.terminalText.setCursorPosition(cursorCol, cursorRowInViewport);
		}
	}

	/**
	 * Focus the terminal for keyboard input
	 */
	focus(): void {
		this.xterm.focus();
	}

	/**
	 * Resize the terminal
	 */
	resize(cols: number, rows: number): void {
		this.xterm.resize(cols, rows);
		this.updateTerminalText();
	}

	/**
	 * Get the xterm instance (for advanced usage)
	 */
	getXTerm(): Terminal {
		return this.xterm;
	}

	/**
	 * Check if a command is currently running
	 */
	isRunning(): boolean {
		return this.isCommandRunning;
	}

	/**
	 * Dispose of resources
	 */
	dispose(): void {
		this.xterm.dispose();
		if (this.hiddenContainer.parentNode) {
			this.hiddenContainer.parentNode.removeChild(this.hiddenContainer);
		}
	}
}
