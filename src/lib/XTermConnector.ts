/**
 * XTermConnector - Minimal bridge between xterm.js and TerminalText renderer
 *
 * This connector provides a simple interface to sync XTerm.js buffer content,
 * cursor position, and selection to the CRT renderer. It does NOT handle
 * keyboard input, shell emulation, or any application-specific logic.
 *
 * Users are expected to handle their own XTerm input/output logic.
 */

import type { Terminal } from "@xterm/xterm";
import type { TerminalText } from "./TerminalText";

export class XTermConnector {
	private xterm: Terminal;
	private terminalText: TerminalText;
	private disposed: boolean = false;

	// Selection state
	private isSelecting: boolean = false;
	private selectionStart: { col: number; row: number } | null = null;

	constructor(xterm: Terminal, terminalText: TerminalText) {
		this.xterm = xterm;
		this.terminalText = terminalText;

		// Initial sync
		this.syncBuffer();
		this.syncCursor();

		// Listen for scroll events to update the renderer
		this.xterm.onScroll(() => {
			if (!this.disposed) {
				this.syncBuffer();
				this.syncCursor();
			}
		});

		// Listen for cursor changes
		this.xterm.onCursorMove(() => {
			if (!this.disposed) {
				this.syncCursor();
			}
		});

		// Listen for data/writes to update display
		this.xterm.onWriteParsed(() => {
			if (!this.disposed) {
				this.syncBuffer();
				this.syncCursor();
			}
		});
	}

	/**
	 * Sync the XTerm buffer content to the TerminalText renderer
	 */
	syncBuffer(): void {
		const buffer = this.xterm.buffer.active;
		const lines: string[] = [];

		const totalLines = buffer.length;
		const viewportStart = buffer.viewportY;
		const rows = this.xterm.rows;

		// Update selection viewport offset
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

		this.terminalText.setText(lines.join("\n"));
	}

	/**
	 * Sync the cursor position to the TerminalText renderer
	 */
	syncCursor(): void {
		const buffer = this.xterm.buffer.active;

		// Check if viewport is scrolled away from cursor
		const cursorActualLine = buffer.baseY + buffer.cursorY;
		const viewportStart = buffer.viewportY;
		const viewportEnd = viewportStart + this.xterm.rows - 1;
		const isScrolledAway =
			cursorActualLine < viewportStart || cursorActualLine > viewportEnd;

		if (isScrolledAway) {
			this.terminalText.setCursorVisible(false);
		} else {
			this.terminalText.setCursorVisible(true);
			const cursorCol = buffer.cursorX;
			const cursorRowInViewport = cursorActualLine - viewportStart;
			this.terminalText.setCursorPosition(cursorCol, cursorRowInViewport);
		}
	}

	/**
	 * Manually trigger a full sync (buffer + cursor)
	 * Call this after writing to XTerm or on resize
	 */
	sync(): void {
		this.syncBuffer();
		this.syncCursor();
	}

	/**
	 * Setup mouse selection handlers on a container element
	 * This enables text selection in the terminal
	 */
	setupMouseSelection(container: HTMLElement): void {
		container.addEventListener("mousedown", (event: MouseEvent) => {
			if (event.button !== 0) return;

			const rect = container.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			const gridPos = this.terminalText.pixelToGrid(x, y);

			const viewportY = this.xterm.buffer.active.viewportY;
			const absPos = { col: gridPos.col, row: gridPos.row + viewportY };

			this.isSelecting = true;
			this.selectionStart = absPos;

			this.terminalText.setSelection(absPos, absPos, viewportY);

			event.preventDefault();
		});

		container.addEventListener("mousemove", (event: MouseEvent) => {
			if (!this.isSelecting || !this.selectionStart) return;

			const rect = container.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			const gridPos = this.terminalText.pixelToGrid(x, y);

			const viewportY = this.xterm.buffer.active.viewportY;
			const absPos = { col: gridPos.col, row: gridPos.row + viewportY };

			this.terminalText.setSelection(this.selectionStart, absPos, viewportY);
		});

		container.addEventListener("mouseup", (event: MouseEvent) => {
			if (event.button !== 0) return;

			if (this.isSelecting && this.selectionStart) {
				const rect = container.getBoundingClientRect();
				const x = event.clientX - rect.left;
				const y = event.clientY - rect.top;
				const gridPos = this.terminalText.pixelToGrid(x, y);

				const viewportY = this.xterm.buffer.active.viewportY;
				const absPos = { col: gridPos.col, row: gridPos.row + viewportY };

				// Single click (no drag) - clear selection
				if (
					absPos.col === this.selectionStart.col &&
					absPos.row === this.selectionStart.row
				) {
					this.terminalText.clearSelection();
				} else {
					this.terminalText.setSelection(
						this.selectionStart,
						absPos,
						viewportY,
					);
					this.copySelectionToClipboard();
				}
			}

			this.isSelecting = false;
			this.selectionStart = null;

			this.xterm.focus();
		});

		container.addEventListener("mouseleave", () => {
			this.isSelecting = false;
			this.selectionStart = null;
		});

		// Wheel scrolling
		container.addEventListener(
			"wheel",
			(event: WheelEvent) => {
				const lines =
					Math.sign(event.deltaY) *
					Math.max(1, Math.floor(Math.abs(event.deltaY) / 50));
				this.xterm.scrollLines(lines);
				this.sync();
				event.preventDefault();
			},
			{ passive: false },
		);
	}

	/**
	 * Copy current selection to clipboard
	 */
	private copySelectionToClipboard(): void {
		const selection = this.terminalText.getSelection();
		if (!selection.start || !selection.end) return;

		const buffer = this.xterm.buffer.active;

		let startRow = selection.start.row;
		let startCol = selection.start.col;
		let endRow = selection.end.row;
		let endCol = selection.end.col;

		// Normalize selection
		if (startRow > endRow || (startRow === endRow && startCol > endCol)) {
			[startRow, endRow] = [endRow, startRow];
			[startCol, endCol] = [endCol, startCol];
		}

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

			if (row === startRow) lineStart = startCol;
			if (row === endRow) lineEnd = endCol + 1;

			selectedLines.push(lineText.slice(lineStart, lineEnd));
		}

		const selectedText = selectedLines.join("\n");

		if (selectedText) {
			navigator.clipboard.writeText(selectedText).catch((err) => {
				console.warn("Could not copy to clipboard:", err);
			});
		}
	}

	/**
	 * Get the underlying XTerm instance
	 */
	getXTerm(): Terminal {
		return this.xterm;
	}

	/**
	 * Get the TerminalText renderer
	 */
	getTerminalText(): TerminalText {
		return this.terminalText;
	}

	/**
	 * Dispose of resources and event listeners
	 */
	dispose(): void {
		this.disposed = true;
	}
}
