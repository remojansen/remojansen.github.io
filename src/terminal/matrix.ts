/**
 * Matrix rain effect - animated matrix-style display
 * Runs until the user presses Ctrl+C, Q, or Escape
 */

import type { CommandContext, KeyHandler } from "./ShellEmulator";

/**
 * Matrix command handler - creates the famous "digital rain" effect
 */
export async function matrixCommand(ctx: CommandContext): Promise<void> {
	// Check if key handler is available
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln(
			"matrix: error - terminal does not support input capture",
		);
		return;
	}

	// Hide cursor during animation
	if (ctx.terminal.hideCursor) {
		ctx.terminal.hideCursor();
	}

	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()[]{}|;:,.<>?";
	// Get terminal size dynamically, fallback to defaults
	const termSize = ctx.terminal.getSize
		? ctx.terminal.getSize()
		: { cols: 80, rows: 24 };
	const width = termSize.cols;
	const height = termSize.rows;
	const TARGET_FPS = 15; // Target frames per second for matrix effect
	const FRAME_INTERVAL = 1000 / TARGET_FPS;

	let running = true;

	// Set up key handler to detect Ctrl+C or Q to quit
	const keyHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
		ctrlKey?: boolean,
	) => {
		if (eventType !== "keydown") return;

		// Q to quit
		if (key === "q" || key === "Q" || keyCode === 81) {
			running = false;
		}
		// Ctrl+C to quit
		if ((key === "c" || key === "C") && ctrlKey) {
			running = false;
		}
		// Escape key
		if (key === "Escape" || keyCode === 27) {
			running = false;
		}
	};

	ctx.terminal.setKeyHandler(keyHandler);

	// Clear screen
	ctx.terminal.clear();

	// Initialize the matrix grid
	const grid: string[][] = [];
	for (let y = 0; y < height; y++) {
		grid[y] = [];
		for (let x = 0; x < width; x++) {
			grid[y][x] = chars[Math.floor(Math.random() * chars.length)];
		}
	}

	// Use requestAnimationFrame for smooth animation
	let lastFrameTime = 0;
	let isFirstFrame = true;

	await new Promise<void>((resolve) => {
		const animate = (currentTime: number) => {
			if (!running) {
				resolve();
				return;
			}

			// Throttle to target FPS
			const elapsed = currentTime - lastFrameTime;
			if (elapsed < FRAME_INTERVAL) {
				requestAnimationFrame(animate);
				return;
			}
			lastFrameTime = currentTime - (elapsed % FRAME_INTERVAL);

			// Update grid - randomly change characters throughout
			for (let y = 0; y < height; y++) {
				for (let x = 0; x < width; x++) {
					if (Math.random() < 0.25) {
						grid[y][x] = chars[Math.floor(Math.random() * chars.length)];
					}
				}
			}

			// Clear on first frame, then use cursor positioning
			if (isFirstFrame) {
				ctx.terminal.clear();
				isFirstFrame = false;
			}

			// Move cursor to top-left and render entire screen at once
			ctx.terminal.write("\x1b[H");
			// Build entire screen as one string for faster rendering
			let screen = "";
			for (let y = 0; y < height; y++) {
				screen += `${grid[y].join("")}\r\n`;
			}
			ctx.terminal.write(screen);

			requestAnimationFrame(animate);
		};

		requestAnimationFrame(animate);
	});

	// Clean up
	ctx.terminal.clearKeyHandler();
	if (ctx.terminal.showCursor) {
		ctx.terminal.showCursor();
	}
	ctx.terminal.clear();
}
