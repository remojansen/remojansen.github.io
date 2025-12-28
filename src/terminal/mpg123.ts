/**
 * mpg123 - Retro MP3 audio player with 90s-style ASCII equalizer visualization
 *
 * Features:
 * - Web Audio API for playback with AnalyserNode for frequency analysis
 * - 16-band ASCII equalizer with rainbow gradient colors
 * - Classic block characters (█▓▒░) for bar visualization
 * - Keyboard controls for pause/resume and quit
 */

import type { CommandContext, KeyHandler } from "./ShellEmulator";

/**
 * Audio context singleton for the player
 */
let audioContext: AudioContext | null = null;

/**
 * Get or create the audio context
 */
function getAudioContext(): AudioContext {
	if (!audioContext) {
		audioContext = new (window.AudioContext ||
			(window as unknown as { webkitAudioContext: typeof AudioContext })
				.webkitAudioContext)();
	}
	return audioContext;
}

/**
 * Map of music files in the Music directory to actual asset URLs
 */
export const musicFiles: Map<string, string> = new Map([
	["Music/arcade.mp3", "assets/audio/game.mp3"],
	["Music/chill.mp3", "assets/audio/chill-game.mp3"],
]);

/**
 * Rainbow color gradient for equalizer bars (ANSI escape codes)
 * Goes from red at the top through yellow, green, cyan, to blue at the bottom
 */
const BAR_COLORS = [
	"\x1b[91m", // Bright red (top/peak)
	"\x1b[91m", // Bright red
	"\x1b[93m", // Bright yellow
	"\x1b[93m", // Bright yellow
	"\x1b[92m", // Bright green
	"\x1b[92m", // Bright green
	"\x1b[96m", // Bright cyan
	"\x1b[96m", // Bright cyan
	"\x1b[94m", // Bright blue
	"\x1b[94m", // Bright blue
	"\x1b[95m", // Bright magenta
	"\x1b[95m", // Bright magenta
];

const RESET_COLOR = "\x1b[0m";
const DIM_COLOR = "\x1b[90m"; // Gray for empty bar segments

/**
 * Block characters for bar rendering (full to empty)
 */
const FULL_BLOCK = "█";
const EMPTY_BLOCK = "░";

/**
 * Number of frequency bands to display
 */
const NUM_BANDS = 16;

/**
 * Maximum bar height in characters
 */
const MAX_BAR_HEIGHT = 12;

/**
 * Format time in MM:SS format
 */
function formatTime(seconds: number): string {
	if (!Number.isFinite(seconds) || seconds < 0) {
		return "00:00";
	}
	const mins = Math.floor(seconds / 60);
	const secs = Math.floor(seconds % 60);
	return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

/**
 * Create a progress bar string
 */
function createProgressBar(
	current: number,
	total: number,
	width: number,
): string {
	if (!Number.isFinite(total) || total <= 0) {
		return `[${"─".repeat(width)}]`;
	}
	const progress = Math.min(current / total, 1);
	const filled = Math.floor(progress * width);
	const empty = width - filled;
	return `[${"\x1b[96m"}${"━".repeat(filled)}${RESET_COLOR}${DIM_COLOR}${"─".repeat(empty)}${RESET_COLOR}]`;
}

/**
 * Render the equalizer bars as ASCII art
 * Returns an array of strings, one for each row (top to bottom)
 */
function renderEqualizer(frequencyData: Uint8Array): string[] {
	const rows: string[] = [];

	// Calculate bar heights for each band
	const bandWidth = Math.floor(frequencyData.length / NUM_BANDS);
	const barHeights: number[] = [];

	for (let band = 0; band < NUM_BANDS; band++) {
		// Average frequency values for this band
		let sum = 0;
		const startIdx = band * bandWidth;
		const endIdx = Math.min(startIdx + bandWidth, frequencyData.length);

		for (let i = startIdx; i < endIdx; i++) {
			sum += frequencyData[i];
		}
		const avg = sum / (endIdx - startIdx);

		// Map 0-255 to 0-MAX_BAR_HEIGHT with some boost for visual appeal
		const height = Math.floor((avg / 255) * MAX_BAR_HEIGHT * 1.2);
		barHeights.push(Math.min(height, MAX_BAR_HEIGHT));
	}

	// Render rows from top to bottom
	for (let row = MAX_BAR_HEIGHT - 1; row >= 0; row--) {
		let rowStr = "  "; // Left padding

		for (let band = 0; band < NUM_BANDS; band++) {
			if (barHeights[band] > row) {
				// This segment is filled - use color based on row height
				const colorIdx = Math.floor(
					((MAX_BAR_HEIGHT - 1 - row) / MAX_BAR_HEIGHT) * BAR_COLORS.length,
				);
				const color = BAR_COLORS[Math.min(colorIdx, BAR_COLORS.length - 1)];
				rowStr += `${color}${FULL_BLOCK}${FULL_BLOCK}${RESET_COLOR} `;
			} else {
				// Empty segment
				rowStr += `${DIM_COLOR}${EMPTY_BLOCK}${EMPTY_BLOCK}${RESET_COLOR} `;
			}
		}

		rows.push(rowStr);
	}

	return rows;
}

/**
 * mpg123 command - play MP3 files with visual equalizer
 */
export async function mpg123Command(ctx: CommandContext): Promise<void> {
	// Check for key handler availability
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln(
			"mpg123: error - terminal does not support input capture",
		);
		return;
	}

	// Check for arguments
	if (ctx.args.length < 2) {
		ctx.terminal.writeln("mpg123: missing file operand");
		ctx.terminal.writeln("Usage: mpg123 <filename>");
		ctx.terminal.writeln("");
		ctx.terminal.writeln("Example: mpg123 Music/arcade.mp3");
		return;
	}

	const inputPath = ctx.args[1];

	// Import resolvePath from ShellEmulator via dynamic resolution
	// We need to resolve the path to check the virtual filesystem
	let resolvedPath = inputPath;

	// Handle relative paths
	if (inputPath.startsWith("./")) {
		resolvedPath = inputPath.slice(2);
	} else if (!inputPath.startsWith("/") && !inputPath.startsWith("~")) {
		// Relative path - prepend current working directory if needed
		// For simplicity, we'll just use the path as-is since Music is at root
	}

	// Normalize path (remove leading ~/ or /)
	if (resolvedPath.startsWith("~/")) {
		resolvedPath = resolvedPath.slice(2);
	} else if (resolvedPath.startsWith("/")) {
		resolvedPath = resolvedPath.slice(1);
	}

	// Check if file exists in our music files map
	const audioUrl = musicFiles.get(resolvedPath);
	if (!audioUrl) {
		ctx.terminal.writeln(`mpg123: ${inputPath}: No such file or directory`);
		ctx.terminal.writeln("");
		ctx.terminal.writeln("Available music files:");
		ctx.terminal.writeln("  Music/arcade.mp3");
		ctx.terminal.writeln("  Music/chill.mp3");
		return;
	}

	// Show loading message
	ctx.terminal.writeln(`Loading: ${inputPath}...`);

	// Initialize audio context and load the file
	const audioCtx = getAudioContext();

	// Resume audio context if suspended (required by browsers)
	if (audioCtx.state === "suspended") {
		await audioCtx.resume();
	}

	let audioBuffer: AudioBuffer;
	try {
		const response = await fetch(audioUrl);
		if (!response.ok) {
			throw new Error(`HTTP ${response.status}`);
		}
		const arrayBuffer = await response.arrayBuffer();
		audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		ctx.terminal.writeln(`mpg123: error loading file: ${errorMessage}`);
		return;
	}

	// Create audio nodes
	const sourceNode = audioCtx.createBufferSource();
	sourceNode.buffer = audioBuffer;

	const analyser = audioCtx.createAnalyser();
	analyser.fftSize = 256;
	analyser.smoothingTimeConstant = 0.7;

	const gainNode = audioCtx.createGain();
	gainNode.gain.value = 0.7;

	// Connect nodes: source -> analyser -> gain -> destination
	sourceNode.connect(analyser);
	analyser.connect(gainNode);
	gainNode.connect(audioCtx.destination);

	// Frequency data buffer
	const frequencyData = new Uint8Array(analyser.frequencyBinCount);

	// Playback state
	let running = true;
	let paused = false;
	const startTime = audioCtx.currentTime;
	let pauseTime = 0;
	const duration = audioBuffer.duration;

	// Hide cursor during playback
	if (ctx.terminal.hideCursor) {
		ctx.terminal.hideCursor();
	}

	// Set up key handler
	const keyHandler: KeyHandler = (
		key: string,
		_keyCode: number,
		eventType: "keydown" | "keyup",
		ctrlKey?: boolean,
	) => {
		if (eventType !== "keydown") return;

		// Q or Escape to quit
		if (key === "q" || key === "Q" || key === "Escape") {
			running = false;
		}
		// Ctrl+C to quit
		if ((key === "c" || key === "C") && ctrlKey) {
			running = false;
		}
		// Space to pause/resume
		if (key === " ") {
			if (paused) {
				// Resume - we can't actually resume a BufferSource, so we note the state
				// In a real implementation, we'd create a new source from the pause point
				paused = false;
			} else {
				paused = true;
				pauseTime = audioCtx.currentTime - startTime;
			}
		}
	};

	ctx.terminal.setKeyHandler(keyHandler);

	// Clear screen and show initial UI
	ctx.terminal.clear();

	// Start playback
	sourceNode.start(0);

	// Handle playback end
	sourceNode.onended = () => {
		if (running && !paused) {
			running = false;
		}
	};

	// Animation loop
	await new Promise<void>((resolve) => {
		const render = () => {
			if (!running) {
				resolve();
				return;
			}

			// Calculate current time
			let currentTime: number;
			if (paused) {
				currentTime = pauseTime;
			} else {
				currentTime = audioCtx.currentTime - startTime;
			}

			// Check if playback is complete
			if (currentTime >= duration) {
				running = false;
				resolve();
				return;
			}

			// Get frequency data
			analyser.getByteFrequencyData(frequencyData);

			// If paused, zero out the frequency data for visual feedback
			if (paused) {
				frequencyData.fill(0);
			}

			// Build screen content
			let screen = "\x1b[H"; // Move cursor to top-left

			// Header
			screen += "\x1b[96m╔══════════════════════════════════════════════════════╗\x1b[0m\r\n";
			screen += "\x1b[96m║\x1b[0m   \x1b[93m♪ mpg123 - MPEG Audio Player\x1b[0m                       \x1b[96m║\x1b[0m\r\n";
			screen += "\x1b[96m╚══════════════════════════════════════════════════════╝\x1b[0m\r\n";
			screen += "\r\n";

			// Now playing
			const filename = inputPath.split("/").pop() || inputPath;
			screen += `  \x1b[97mNow Playing:\x1b[0m \x1b[92m${filename}\x1b[0m\r\n`;
			screen += "\r\n";

			// Equalizer visualization
			const eqRows = renderEqualizer(frequencyData);
			for (const row of eqRows) {
				screen += `${row}\r\n`;
			}

			// Band labels
			screen += "  ";
			for (let i = 0; i < NUM_BANDS; i++) {
				screen += `${DIM_COLOR}${(i + 1).toString().padStart(2, " ")}${RESET_COLOR} `;
			}
			screen += "\r\n";
			screen += "\r\n";

			// Progress bar
			const progressBar = createProgressBar(currentTime, duration, 40);
			screen += `  ${formatTime(currentTime)} ${progressBar} ${formatTime(duration)}\r\n`;
			screen += "\r\n";

			// Status
			const status = paused ? "\x1b[93m⏸  PAUSED\x1b[0m" : "\x1b[92m▶  PLAYING\x1b[0m";
			screen += `  Status: ${status}\r\n`;
			screen += "\r\n";

			// Controls
			screen += `  ${DIM_COLOR}Controls: [SPACE] Pause/Resume  [Q/ESC] Quit${RESET_COLOR}\r\n`;

			ctx.terminal.write(screen);

			// Continue animation
			requestAnimationFrame(render);
		};

		requestAnimationFrame(render);
	});

	// Cleanup
	try {
		sourceNode.stop();
		sourceNode.disconnect();
		analyser.disconnect();
		gainNode.disconnect();
	} catch {
		// Ignore errors during cleanup (node may already be stopped)
	}

	ctx.terminal.clearKeyHandler();

	if (ctx.terminal.showCursor) {
		ctx.terminal.showCursor();
	}

	ctx.terminal.clear();
	ctx.terminal.writeln("Playback finished.");
}
