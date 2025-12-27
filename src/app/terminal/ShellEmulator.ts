/**
 * ShellEmulator - A flexible mock shell for the web terminal
 *
 * This emulates a shell prompt without using a real shell process.
 * Commands can be synchronous or asynchronous, and can print output
 * progressively before returning control to the terminal.
 */

// Import game commands from separate modules
import { arkanoidCommand } from "./arkanoid";
import { cvCommand } from "./cv";
import { donutCommand } from "./donut";
import { matrixCommand } from "./matrix";
import { pongCommand } from "./pong";
import { snakeCommand } from "./snake";
import { spaceInvadersCommand } from "./space-invaders";
import { tetrisCommand } from "./tetris";

/**
 * Key handler function type for games and interactive apps
 * @param key - The key string (e.g., "ArrowUp", "a")
 * @param keyCode - The numeric key code
 * @param eventType - "keydown" or "keyup"
 * @param ctrlKey - Whether Ctrl key is held
 */
export type KeyHandler = (
	key: string,
	keyCode: number,
	eventType: "keydown" | "keyup",
	ctrlKey?: boolean,
) => void;

/**
 * Terminal interface - allows commands to interact with the terminal
 */
export interface TerminalIO {
	/** Write text to the terminal (does not include newline) */
	write(text: string): void;
	/** Write a line to the terminal (includes newline) */
	writeln(text: string): void;
	/** Clear the terminal screen */
	clear(): void;
	/** Set a key handler for capturing raw keyboard input (for games) */
	setKeyHandler?(handler: KeyHandler): void;
	/** Clear the key handler */
	clearKeyHandler?(): void;
	/** Hide the cursor (for games/full-screen apps) */
	hideCursor?(): void;
	/** Show the cursor */
	showCursor?(): void;
	/** Get terminal size in columns and rows */
	getSize?(): { cols: number; rows: number };
	/** Play a video file with CRT effects */
	playVideo?(url: string): Promise<void>;
	/** Stop video playback */
	stopVideo?(): void;
	/** Get the video element for external control */
	getVideoElement?(): HTMLVideoElement | null;
	/** Start game music (loops) */
	startGameMusic?(): void;
	/** Stop game music */
	stopGameMusic?(): void;
}

/**
 * Command context passed to command handlers
 */
export interface CommandContext {
	/** The full command string */
	command: string;
	/** Parsed arguments (command name is args[0]) */
	args: string[];
	/** Terminal IO for writing output */
	terminal: TerminalIO;
}

/**
 * Command handler function type
 * Can be synchronous (returns void) or asynchronous (returns Promise<void>)
 * The command writes output via ctx.terminal and control returns to shell when done
 */
export type CommandHandler = (ctx: CommandContext) => void | Promise<void>;

/**
 * Command registry - maps command names to handlers
 */
const commandRegistry: Map<string, CommandHandler> = new Map();

/**
 * Virtual file system entry
 */
interface FileEntry {
	/** File name */
	name: string;
	/** Whether this is a directory */
	isDirectory: boolean;
	/** File size in bytes (for display) */
	size: number;
	/** File permissions string (for ls -l) */
	permissions: string;
	/** Last modified date string */
	modified: string;
	/** File content (for regular files) - can be string or async loader */
	content?: string | (() => Promise<string>);
	/** Parent directory path */
	parent: string;
}

/**
 * Virtual file system - maps file paths to entries
 */
const virtualFileSystem: Map<string, FileEntry> = new Map();

/**
 * Current working directory (always starts and ends without /)
 */
let currentDirectory = "";

/**
 * Resolve a path relative to current directory
 * Handles . .. and absolute paths (starting with ~ or /)
 */
function resolvePath(path: string): string {
	// Empty path means current directory
	if (!path || path === ".") {
		return currentDirectory;
	}

	// Handle home directory (~ is the root in our virtual FS)
	if (path === "~" || path === "/") {
		return "";
	}

	// Start from root if path starts with ~ or /
	let basePath: string;
	let pathToProcess: string;

	if (path.startsWith("~/")) {
		basePath = "";
		pathToProcess = path.slice(2);
	} else if (path.startsWith("/")) {
		basePath = "";
		pathToProcess = path.slice(1);
	} else {
		basePath = currentDirectory;
		pathToProcess = path;
	}

	// Split path into components
	const baseComponents = basePath ? basePath.split("/") : [];
	const pathComponents = pathToProcess.split("/").filter((c) => c.length > 0);

	// Process each component
	for (const component of pathComponents) {
		if (component === ".") {
		} else if (component === "..") {
			// Go up one level
			if (baseComponents.length > 0) {
				baseComponents.pop();
			}
		} else {
			baseComponents.push(component);
		}
	}

	return baseComponents.join("/");
}

/**
 * Get files in a specific directory
 */
function getFilesInDirectory(dirPath: string): FileEntry[] {
	const files: FileEntry[] = [];
	for (const [_path, entry] of virtualFileSystem.entries()) {
		if (entry.parent === dirPath) {
			files.push(entry);
		}
	}
	return files;
}

/**
 * Check if a path is a valid directory
 */
function isValidDirectory(path: string): boolean {
	if (path === "") return true; // Root is always valid
	return (
		virtualFileSystem.has(path) &&
		(virtualFileSystem.get(path)?.isDirectory ?? false)
	);
}

/**
 * Initialize the virtual file system with default files
 */
function initFileSystem(): void {
	// Root level directories
	virtualFileSystem.set("Documents", {
		name: "Documents",
		isDirectory: true,
		size: 4096,
		permissions: "drwxr-xr-x",
		modified: "Dec 24 12:00",
		parent: "",
	});
	virtualFileSystem.set("Videos", {
		name: "Videos",
		isDirectory: true,
		size: 4096,
		permissions: "drwxr-xr-x",
		modified: "Dec 21 14:20",
		parent: "",
	});
	virtualFileSystem.set("Programs", {
		name: "Programs",
		isDirectory: true,
		size: 4096,
		permissions: "drwxr-xr-x",
		modified: "Dec 25 00:00",
		parent: "",
	});

	// Files in Documents directory
	virtualFileSystem.set("Documents/license.txt", {
		name: "license.txt",
		isDirectory: false,
		size: 35147,
		permissions: "-rw-r--r--",
		modified: "Dec 24 12:00",
		parent: "Documents",
		content: async () => {
			const response = await fetch("assets/content/license.txt");
			if (!response.ok) {
				throw new Error("Could not load license file");
			}
			return await response.text();
		},
	});
	virtualFileSystem.set("Documents/mvp.txt", {
		name: "mvp.txt",
		isDirectory: false,
		size: 2048,
		permissions: "-rw-r--r--",
		modified: "Dec 25 00:00",
		parent: "Documents",
		content: async () => {
			const response = await fetch("assets/content/mvp.txt");
			if (!response.ok) {
				throw new Error("Could not load mvp file");
			}
			return await response.text();
		},
	});

	// Files in Videos directory
	virtualFileSystem.set("Videos/interview.mp4", {
		name: "interview.mp4",
		isDirectory: false,
		size: 15728640, // ~15MB placeholder
		permissions: "-rw-r--r--",
		modified: "Dec 25 00:00",
		parent: "Videos",
	});

	// Files in Programs directory
	virtualFileSystem.set("Programs/cv", {
		name: "cv",
		isDirectory: false,
		size: 8192,
		permissions: "-rwxr-xr-x",
		modified: "Dec 25 00:00",
		parent: "Programs",
	});
	virtualFileSystem.set("Programs/pong", {
		name: "pong",
		isDirectory: false,
		size: 4096,
		permissions: "-rwxr-xr-x",
		modified: "Dec 25 00:00",
		parent: "Programs",
	});
	virtualFileSystem.set("Programs/snake", {
		name: "snake",
		isDirectory: false,
		size: 4096,
		permissions: "-rwxr-xr-x",
		modified: "Dec 25 00:00",
		parent: "Programs",
	});
	virtualFileSystem.set("Programs/tetris", {
		name: "tetris",
		isDirectory: false,
		size: 8192,
		permissions: "-rwxr-xr-x",
		modified: "Dec 25 00:00",
		parent: "Programs",
	});
	virtualFileSystem.set("Programs/matrix", {
		name: "matrix",
		isDirectory: false,
		size: 4096,
		permissions: "-rwxr-xr-x",
		modified: "Dec 25 00:00",
		parent: "Programs",
	});
	virtualFileSystem.set("Programs/donut", {
		name: "donut",
		isDirectory: false,
		size: 4096,
		permissions: "-rwxr-xr-x",
		modified: "Dec 27 00:00",
		parent: "Programs",
	});
	virtualFileSystem.set("Programs/space-invaders", {
		name: "space-invaders",
		isDirectory: false,
		size: 8192,
		permissions: "-rwxr-xr-x",
		modified: "Dec 27 00:00",
		parent: "Programs",
	});
	virtualFileSystem.set("Programs/arkanoid", {
		name: "arkanoid",
		isDirectory: false,
		size: 8192,
		permissions: "-rwxr-xr-x",
		modified: "Dec 27 00:00",
		parent: "Programs",
	});
}

// Initialize the file system
initFileSystem();

/**
 * Get the shell prompt string
 */
function getPrompt(): string {
	const dirDisplay = currentDirectory ? `~/${currentDirectory}` : "~";
	return `guest@remojansen.com ${dirDisplay} $ `;
}

/**
 * Register a command handler
 *
 * @param name - The command name (e.g., "help", "ls", "echo")
 * @param handler - The function to handle the command
 */
export function registerCommand(name: string, handler: CommandHandler): void {
	commandRegistry.set(name.toLowerCase(), handler);
}

/**
 * Unregister a command handler
 *
 * @param name - The command name to unregister
 */
export function unregisterCommand(name: string): void {
	commandRegistry.delete(name.toLowerCase());
}

/**
 * Check if a command is registered
 *
 * @param name - The command name to check
 */
export function hasCommand(name: string): boolean {
	return commandRegistry.has(name.toLowerCase());
}

/**
 * Parse command string into arguments (handles quoted strings)
 */
function parseArgs(command: string): string[] {
	const args: string[] = [];
	let current = "";
	let inQuote = false;
	let quoteChar = "";

	for (const char of command) {
		if (inQuote) {
			if (char === quoteChar) {
				inQuote = false;
			} else {
				current += char;
			}
		} else {
			if (char === '"' || char === "'") {
				inQuote = true;
				quoteChar = char;
			} else if (char === " " || char === "\t") {
				if (current.length > 0) {
					args.push(current);
					current = "";
				}
			} else {
				current += char;
			}
		}
	}

	if (current.length > 0) {
		args.push(current);
	}

	return args;
}

/**
 * Run a command asynchronously
 *
 * @param command - The command string entered by the user
 * @param terminal - Terminal IO interface for writing output
 * @returns Promise that resolves when command completes
 */
export async function runCommand(
	command: string,
	terminal: TerminalIO,
): Promise<void> {
	const trimmedCommand = command.trim();

	// If no command was typed, just show prompt
	if (trimmedCommand === "") {
		terminal.write(getPrompt());
		return;
	}

	// Parse command into arguments
	const args = parseArgs(trimmedCommand);
	if (args.length === 0) {
		terminal.write(getPrompt());
		return;
	}

	let commandName = args[0].toLowerCase();

	// Check if this is a path-based command (starts with ./)
	if (args[0].startsWith("./")) {
		// Extract the path after ./ using original case (e.g., "./Programs/tetris" -> "Programs/tetris")
		const pathAfterDotSlash = args[0].slice(2);

		// Resolve the full path to check if the file exists
		const executablePath = resolvePath(pathAfterDotSlash);

		// Check if the executable exists at the resolved path
		const file = virtualFileSystem.get(executablePath);
		const isExecutable =
			file && !file.isDirectory && file.permissions.includes("x");

		if (!isExecutable) {
			terminal.writeln(`zsh: no such file or directory: ${args[0]}`);
			terminal.write(getPrompt());
			return;
		}

		// Use the base executable name for command lookup (e.g., "./tetris")
		commandName = `./${file.name}`;
	}

	const handler = commandRegistry.get(commandName);

	if (handler) {
		// Create context for the command
		const ctx: CommandContext = {
			command: trimmedCommand,
			args,
			terminal,
		};

		try {
			// Execute the command (may be sync or async)
			await handler(ctx);
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : String(error);
			terminal.writeln(`Error: ${errorMessage}`);
		}
	} else {
		// Unknown command
		terminal.writeln(`${commandName}: command not found`);
	}

	// Show prompt after command completes
	terminal.write(getPrompt());
}

/**
 * Sleep utility for commands that need delays
 */
export function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Get the initial terminal output (just the prompt)
 */
export function getInitialOutput(): string {
	return getPrompt();
}

// ============================================
// Built-in Commands
// ============================================

// Help command
registerCommand("help", (ctx) => {
	ctx.terminal.writeln("Available commands:");
	ctx.terminal.writeln("  help     - Show this help message");
	ctx.terminal.writeln("  clear    - Clear the terminal screen");
	ctx.terminal.writeln("  cd       - Change directory");
	ctx.terminal.writeln("  ls       - List directory contents");
	ctx.terminal.writeln("  cat      - Display file contents");
	ctx.terminal.writeln("  ffplay   - Play video files");
});

// CD command - change directory
registerCommand("cd", (ctx) => {
	// No argument - go to home directory
	if (ctx.args.length < 2) {
		currentDirectory = "";
		return;
	}

	const targetPath = ctx.args[1];

	// Handle special cases
	if (targetPath === "~" || targetPath === "/") {
		currentDirectory = "";
		return;
	}

	if (targetPath === "-") {
		// In a real shell this would go to previous directory
		// For simplicity, just go home
		currentDirectory = "";
		return;
	}

	// Resolve the path
	const resolvedPath = resolvePath(targetPath);

	// Check if the resolved path is a valid directory
	if (!isValidDirectory(resolvedPath)) {
		ctx.terminal.writeln(`cd: ${targetPath}: No such file or directory`);
		return;
	}

	currentDirectory = resolvedPath;
});

// Clear command
registerCommand("clear", (ctx) => {
	ctx.terminal.clear();
});

// LS command - list files from virtual file system
registerCommand("ls", (ctx) => {
	// Parse flags and path argument
	const hasLongFormat =
		ctx.args.includes("-l") ||
		ctx.args.includes("-la") ||
		ctx.args.includes("-al");

	// Find the path argument (skip flags)
	let targetDir = currentDirectory;
	for (let i = 1; i < ctx.args.length; i++) {
		if (!ctx.args[i].startsWith("-")) {
			targetDir = resolvePath(ctx.args[i]);
			break;
		}
	}

	// Check if target is a valid directory
	if (targetDir !== "" && !isValidDirectory(targetDir)) {
		// Check if it's a file
		const file = virtualFileSystem.get(targetDir);
		if (file && !file.isDirectory) {
			if (hasLongFormat) {
				ctx.terminal.writeln(
					`${file.permissions}  1 ghost ghost ${file.size.toString().padStart(8)} ${file.modified} ${file.name}`,
				);
			} else {
				ctx.terminal.writeln(file.name);
			}
			return;
		}
		ctx.terminal.writeln(
			`ls: cannot access '${ctx.args[1] || targetDir}': No such file or directory`,
		);
		return;
	}

	// Get files in the target directory
	const files = getFilesInDirectory(targetDir);

	if (files.length === 0) {
		// Empty directory, don't print anything
		return;
	}

	// Check for -l flag
	if (hasLongFormat) {
		const totalSize =
			files.reduce((sum, f) => sum + (f.isDirectory ? 4 : 1), 0) * 4;
		ctx.terminal.writeln(`total ${totalSize}`);
		for (const file of files) {
			const displayName = file.isDirectory ? `${file.name}/` : file.name;
			ctx.terminal.writeln(
				`${file.permissions}  1 ghost ghost ${file.size.toString().padStart(8)} ${file.modified} ${displayName}`,
			);
		}
	} else {
		const displayNames = files.map((f) =>
			f.isDirectory ? `${f.name}/` : f.name,
		);
		ctx.terminal.writeln(displayNames.join("  "));
	}
});

// Cat command - read files from virtual file system
registerCommand("cat", async (ctx) => {
	if (ctx.args.length < 2) {
		ctx.terminal.writeln("cat: missing file operand");
		return;
	}

	const inputPath = ctx.args[1];
	const resolvedPath = resolvePath(inputPath);
	const file = virtualFileSystem.get(resolvedPath);

	if (!file) {
		ctx.terminal.writeln(`cat: ${inputPath}: No such file or directory`);
		return;
	}

	if (file.isDirectory) {
		ctx.terminal.writeln(`cat: ${inputPath}: Is a directory`);
		return;
	}

	if (file.content === undefined) {
		ctx.terminal.writeln(`cat: ${inputPath}: Unable to read file`);
		return;
	}

	try {
		// Handle async content loaders
		const content =
			typeof file.content === "function" ? await file.content() : file.content;

		const lines = content.split("\n");

		// Check if content has @@@ markers for pauses
		const hasDelimiters = lines.some((line) => line.trim() === "@@@");

		if (hasDelimiters) {
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
					ctx.terminal.writeln(line);
				}

				// Wait 500ms before the next batch (unless this is the last batch)
				if (i < batches.length - 1) {
					await sleep(500);
				}
			}
		} else {
			// No delimiters, print all lines immediately
			for (const line of lines) {
				ctx.terminal.writeln(line);
			}
		}
	} catch (_error) {
		ctx.terminal.writeln(`cat: ${inputPath}: Error reading file`);
	}
});

// Matrix command - animated matrix effect (runs until Ctrl+C or Q)
registerCommand("./matrix", matrixCommand);

// ============================================
// FFPlay - Video Player with CRT Effects
// ============================================

/**
 * Map of video files to their actual URLs
 */
const videoFiles: Map<string, string> = new Map([
	["Videos/interview.mp4", "assets/video/interview.webm"],
	["interview.mp4", "assets/video/interview.webm"],
]);

/**
 * ffplay command - play video files with CRT effects
 */
registerCommand("ffplay", async (ctx) => {
	// Check if video playback is supported
	if (!ctx.terminal.playVideo || !ctx.terminal.stopVideo) {
		ctx.terminal.writeln("ffplay: error - video playback not supported");
		return;
	}

	// Check for arguments
	if (ctx.args.length < 2) {
		ctx.terminal.writeln("ffplay: missing file operand");
		ctx.terminal.writeln("Usage: ffplay <filename>");
		return;
	}

	const inputPath = ctx.args[1];
	const resolvedPath = resolvePath(inputPath);

	// Check if file exists in virtual filesystem
	const file = virtualFileSystem.get(resolvedPath);
	if (!file) {
		ctx.terminal.writeln(`ffplay: ${inputPath}: No such file or directory`);
		return;
	}

	// Check if it's a video file
	const videoUrl = videoFiles.get(resolvedPath);
	if (!videoUrl) {
		ctx.terminal.writeln(`ffplay: ${inputPath}: Not a supported video format`);
		return;
	}

	// Check if key handler is available for stop control
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln(
			"ffplay: error - terminal does not support input capture",
		);
		return;
	}

	// Show instructions and wait for Enter to start
	ctx.terminal.writeln(`Playing: ${inputPath}`);
	ctx.terminal.writeln("");
	ctx.terminal.writeln("Controls:");
	ctx.terminal.writeln("  SPACE    - Pause/Resume");
	ctx.terminal.writeln("  F        - Forward 10 seconds");
	ctx.terminal.writeln("  B        - Backward 10 seconds");
	ctx.terminal.writeln("  Q / ESC  - Stop playback");
	ctx.terminal.writeln("");
	ctx.terminal.writeln("Press ENTER to start playback...");

	// Wait for Enter key
	let _startConfirmed = false;
	let cancelled = false;

	// Store reference to setKeyHandler before entering Promise (already validated above)
	const setKeyHandler = ctx.terminal.setKeyHandler;

	const waitForEnter = new Promise<void>((resolve) => {
		const enterHandler: KeyHandler = (
			key: string,
			keyCode: number,
			eventType: "keydown" | "keyup",
		) => {
			if (eventType !== "keydown") return;

			// Enter to start
			if (key === "Enter" || keyCode === 13) {
				_startConfirmed = true;
				ctx.terminal.clearKeyHandler?.();
				resolve();
			}
			// Q or Escape to cancel
			if (
				key === "q" ||
				key === "Q" ||
				keyCode === 81 ||
				key === "Escape" ||
				keyCode === 27
			) {
				cancelled = true;
				ctx.terminal.clearKeyHandler?.();
				resolve();
			}
		};

		setKeyHandler(enterHandler);
	});

	await waitForEnter;

	if (cancelled) {
		ctx.terminal.writeln("");
		ctx.terminal.writeln("Playback cancelled.");
		return;
	}

	// Hide cursor during playback
	if (ctx.terminal.hideCursor) {
		ctx.terminal.hideCursor();
	}

	// Clear terminal for video display
	ctx.terminal.clear();

	let stopped = false;

	// Set up key handler to stop video
	const keyHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
		ctrlKey?: boolean,
	) => {
		if (eventType !== "keydown") return;

		// Q to quit
		if (key === "q" || key === "Q" || keyCode === 81) {
			stopped = true;
			ctx.terminal.stopVideo?.();
		}
		// Escape to quit
		if (key === "Escape" || keyCode === 27) {
			stopped = true;
			ctx.terminal.stopVideo?.();
		}
		// Ctrl+C to quit
		if ((key === "c" || key === "C") && ctrlKey) {
			stopped = true;
			ctx.terminal.stopVideo?.();
		}
		// Space to pause/play
		if (key === " " || keyCode === 32) {
			const video = ctx.terminal.getVideoElement?.();
			if (video) {
				if (video.paused) {
					video.play();
				} else {
					video.pause();
				}
			}
		}
		// F to forward 10 seconds
		if (key === "f" || key === "F" || keyCode === 70) {
			const video = ctx.terminal.getVideoElement?.();
			if (video) {
				video.currentTime = Math.min(video.currentTime + 10, video.duration);
			}
		}
		// B to backward 10 seconds
		if (key === "b" || key === "B" || keyCode === 66) {
			const video = ctx.terminal.getVideoElement?.();
			if (video) {
				video.currentTime = Math.max(video.currentTime - 10, 0);
			}
		}
	};

	ctx.terminal.setKeyHandler(keyHandler);

	try {
		// Play the video
		await ctx.terminal.playVideo(videoUrl);
	} catch (error) {
		if (!stopped) {
			const errorMessage =
				error instanceof Error ? error.message : String(error);
			ctx.terminal.writeln(`ffplay: error playing video: ${errorMessage}`);
		}
	}

	// Clean up
	ctx.terminal.clearKeyHandler();
	if (ctx.terminal.showCursor) {
		ctx.terminal.showCursor();
	}

	if (!stopped) {
		ctx.terminal.writeln("");
		ctx.terminal.writeln("Playback finished.");
	}
});

// CV command - displays CV information
registerCommand("./cv", cvCommand);

// ============================================
// Game Commands (imported from separate modules)
// ============================================

// Pong game - classic arcade game with AI opponent
registerCommand("./pong", pongCommand);

// Snake game - classic snake game
registerCommand("./snake", snakeCommand);

// Tetris game - classic falling blocks puzzle
registerCommand("./tetris", tetrisCommand);

// Donut - spinning 3D ASCII donut with shading
registerCommand("./donut", donutCommand);

// Space Invaders - classic alien shooter
registerCommand("./space-invaders", spaceInvadersCommand);

// Arkanoid - classic brick breaker
registerCommand("./arkanoid", arkanoidCommand);

/**
 * Get tab completions for a partial path
 * @param partialInput - The current input being typed (may include command)
 * @returns Object with completions array and the prefix to replace
 */
export function getTabCompletions(partialInput: string): {
	completions: string[];
	prefix: string;
	isCommand: boolean;
} {
	const args = parseArgs(partialInput);

	// If no args or just typing the first word, complete commands
	if (args.length === 0) {
		return { completions: [], prefix: "", isCommand: true };
	}

	// Get the last argument (the one being typed)
	const lastArg = args[args.length - 1];

	// Check if we're completing the command itself (first arg) or a path argument
	const isCompletingCommand = args.length === 1 && !partialInput.endsWith(" ");

	if (isCompletingCommand) {
		// If it starts with ./, treat it as a path completion, not command completion
		if (lastArg.startsWith("./")) {
			// Complete file/directory paths for executable-style paths
			const pathAfterDotSlash = lastArg.slice(2);

			// Determine the directory to search and the partial filename
			let searchDir: string;
			let partialName: string;

			if (pathAfterDotSlash.includes("/")) {
				// Path contains directory separator (e.g., "./Programs/te")
				const lastSlash = pathAfterDotSlash.lastIndexOf("/");
				const dirPart = pathAfterDotSlash.slice(0, lastSlash);
				partialName = pathAfterDotSlash.slice(lastSlash + 1);
				searchDir = resolvePath(dirPart);
			} else {
				// No directory separator - search current directory (e.g., "./te")
				searchDir = currentDirectory;
				partialName = pathAfterDotSlash;
			}

			// Get files in the search directory
			const files = getFilesInDirectory(searchDir);

			// Filter by partial name (case-insensitive for better UX)
			const matchingFiles = files.filter((f) =>
				f.name.toLowerCase().startsWith(partialName.toLowerCase()),
			);

			// Build the prefix that includes the directory path
			let dirPrefix = "./";
			if (pathAfterDotSlash.includes("/")) {
				const lastSlash = pathAfterDotSlash.lastIndexOf("/");
				dirPrefix = `./${pathAfterDotSlash.slice(0, lastSlash + 1)}`;
			}

			const completions = matchingFiles.map((f) =>
				f.isDirectory ? `${dirPrefix}${f.name}/` : `${dirPrefix}${f.name}`,
			);

			return {
				completions: completions.sort(),
				prefix: lastArg,
				isCommand: true,
			};
		}

		// Complete command names
		const matchingCommands: string[] = [];
		for (const cmdName of commandRegistry.keys()) {
			if (cmdName.startsWith(lastArg.toLowerCase())) {
				matchingCommands.push(cmdName);
			}
		}
		return {
			completions: matchingCommands.sort(),
			prefix: lastArg,
			isCommand: true,
		};
	}

	// Complete file/directory paths
	const pathToComplete = partialInput.endsWith(" ") ? "" : lastArg;

	// Determine the directory to search and the partial filename
	let searchDir: string;
	let partialName: string;

	if (pathToComplete.includes("/")) {
		// Path contains directory separator
		const lastSlash = pathToComplete.lastIndexOf("/");
		const dirPart = pathToComplete.slice(0, lastSlash + 1);
		partialName = pathToComplete.slice(lastSlash + 1);

		// Resolve the directory path
		if (dirPart === "/" || dirPart === "~/") {
			searchDir = "";
		} else if (dirPart.startsWith("~/")) {
			searchDir = dirPart.slice(2, -1); // Remove ~/ and trailing /
		} else if (dirPart.startsWith("./")) {
			const resolved = resolvePath(dirPart.slice(0, -1));
			searchDir = resolved;
		} else {
			const resolved = resolvePath(dirPart.slice(0, -1));
			searchDir = resolved;
		}
	} else {
		// No directory separator - search current directory
		searchDir = currentDirectory;
		partialName = pathToComplete;
	}

	// Get files in the search directory
	const files = getFilesInDirectory(searchDir);

	// Filter by partial name (case-sensitive)
	const matchingFiles = files.filter((f) => f.name.startsWith(partialName));

	// Format completions with directory suffix
	// If pathToComplete includes a directory, we need to preserve that prefix
	// so that completion.slice(prefix.length) works correctly
	let dirPrefix = "";
	if (pathToComplete.includes("/")) {
		const lastSlash = pathToComplete.lastIndexOf("/");
		dirPrefix = pathToComplete.slice(0, lastSlash + 1);
	}

	const completions = matchingFiles.map((f) =>
		f.isDirectory ? `${dirPrefix}${f.name}/` : `${dirPrefix}${f.name}`,
	);

	return {
		completions: completions.sort(),
		prefix: pathToComplete,
		isCommand: false,
	};
}

export { getPrompt };
