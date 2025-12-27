/**
 * Donut - Spinning 3D ASCII donut with shading
 * Inspired by the famous donut.c by Andy Sloane
 */

import type { CommandContext, KeyHandler } from "./ShellEmulator";
import { sleep } from "./ShellEmulator";

/**
 * ASCII characters ordered by brightness (darkest to brightest)
 * Used to simulate lighting/shadows on the 3D surface
 */
const LUMINANCE_CHARS = ".,-~:;=!*#$@";

interface DonutState {
	// Rotation angles
	rotationA: number; // Rotation around X axis
	rotationB: number; // Rotation around Z axis
	// Screen dimensions
	width: number;
	height: number;
	// Rotation speeds
	speedA: number;
	speedB: number;
	// Game state
	running: boolean;
	paused: boolean;
}

/**
 * Render the spinning donut frame
 * Uses a z-buffer for hidden surface removal and luminance for shading
 */
function renderDonut(state: DonutState): string[] {
	const { width, height, rotationA, rotationB } = state;

	// Output buffer and z-buffer
	const output: string[] = new Array(width * height).fill(" ");
	const zBuffer: number[] = new Array(width * height).fill(0);

	// Precompute sines and cosines
	const sinA = Math.sin(rotationA);
	const cosA = Math.cos(rotationA);
	const sinB = Math.sin(rotationB);
	const cosB = Math.cos(rotationB);

	// Torus parameters
	const R1 = 1; // Radius of the tube
	const R2 = 2; // Distance from center to tube center
	const K2 = 5; // Distance from viewer to donut

	// K1 is calculated based on screen size to fit the donut
	const K1 = (width * K2 * 3) / (8 * (R1 + R2));

	// Iterate over theta (around the tube) and phi (around the torus)
	// theta goes around the cross-section of the tube
	// phi goes around the whole torus
	for (let theta = 0; theta < 6.28; theta += 0.07) {
		const sinTheta = Math.sin(theta);
		const cosTheta = Math.cos(theta);

		for (let phi = 0; phi < 6.28; phi += 0.02) {
			const sinPhi = Math.sin(phi);
			const cosPhi = Math.cos(phi);

			// 3D coordinates of a point on the torus surface
			// First, a circle of radius R1 centered at (R2, 0, 0)
			const circleX = R2 + R1 * cosTheta;
			const circleY = R1 * sinTheta;

			// Rotate around Y axis by phi (this creates the torus)
			// Then rotate around X axis by A and Z axis by B
			const x =
				circleX * (cosB * cosPhi + sinA * sinB * sinPhi) -
				circleY * cosA * sinB;
			const y =
				circleX * (sinB * cosPhi - sinA * cosB * sinPhi) +
				circleY * cosA * cosB;
			const z = K2 + cosA * circleX * sinPhi + circleY * sinA;

			// Inverse of z for perspective projection
			const oneOverZ = 1 / z;

			// Project to 2D screen coordinates
			const xp = Math.floor(width / 2 + K1 * oneOverZ * x);
			const yp = Math.floor(height / 2 - (K1 * oneOverZ * y) / 2); // Divide by 2 because chars are taller than wide

			// Only render if on screen
			if (xp >= 0 && xp < width && yp >= 0 && yp < height) {
				const idx = xp + yp * width;

				// Z-buffer check - only draw if closer than what's already there
				if (oneOverZ > zBuffer[idx]) {
					zBuffer[idx] = oneOverZ;

					// Calculate luminance based on surface normal
					// The normal vector at each point on the torus surface
					// is used to determine how much light hits that point
					// Light source is behind and above the viewer
					const luminance =
						cosPhi * cosTheta * sinB -
						cosA * cosTheta * sinPhi -
						sinA * sinTheta +
						cosB * (cosA * sinTheta - cosTheta * sinA * sinPhi);

					// Map luminance (-sqrt(2) to +sqrt(2)) to character index
					if (luminance > 0) {
						const luminanceIndex = Math.floor(
							luminance * (LUMINANCE_CHARS.length - 1),
						);
						const clampedIndex = Math.min(
							luminanceIndex,
							LUMINANCE_CHARS.length - 1,
						);
						output[idx] = LUMINANCE_CHARS[clampedIndex];
					}
				}
			}
		}
	}

	// Convert output buffer to array of lines
	const lines: string[] = [];
	for (let y = 0; y < height; y++) {
		lines.push(output.slice(y * width, (y + 1) * width).join(""));
	}

	return lines;
}

/**
 * Render the full frame with borders and info
 */
function renderFrame(
	ctx: CommandContext,
	state: DonutState,
	isFirstFrame: boolean,
): void {
	const lines: string[] = [];

	// Header
	lines.push("╔════════════════════════════════════════════════════════════╗");
	lines.push("║                     3D SPINNING DONUT                      ║");
	lines.push("╚════════════════════════════════════════════════════════════╝");

	// Render the donut
	const donutLines = renderDonut(state);

	// Add borders around the donut display
	lines.push(`┌${"─".repeat(state.width)}┐`);
	for (const line of donutLines) {
		lines.push(`│${line}│`);
	}
	lines.push(`└${"─".repeat(state.width)}┘`);

	// Status line - pad to ensure consistent width (must cover longest line)
	const STATUS_WIDTH = 70;
	let statusLine: string;
	if (state.paused) {
		statusLine = "  PAUSED - Press P to continue, Q to quit";
	} else {
		statusLine =
			"  ←→ = Speed  |  ↑↓ = Tilt  |  P = Pause  |  R = Reset  |  Q = Quit";
	}
	lines.push(statusLine.padEnd(STATUS_WIDTH));

	// Rotation info
	const rotADeg = ((state.rotationA * 180) / Math.PI) % 360;
	const rotBDeg = ((state.rotationB * 180) / Math.PI) % 360;
	const infoLine = `  Rotation: X=${rotADeg.toFixed(0)}° Z=${rotBDeg.toFixed(0)}°  Speed: ${(state.speedB * 100).toFixed(0)}%`;
	lines.push(infoLine.padEnd(STATUS_WIDTH));

	// Only clear on first frame
	if (isFirstFrame) {
		ctx.terminal.clear();
	}

	// Build complete frame as single string to avoid flickering
	// Use \x1b[H to move cursor to home position
	let frame = "\x1b[H";
	for (const line of lines) {
		frame += line + "\r\n";
	}
	
	// Write entire frame at once
	ctx.terminal.write(frame);
}

/**
 * Donut command handler
 */
export async function donutCommand(ctx: CommandContext): Promise<void> {
	// Check if key handler is available
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln("donut: error - terminal does not support input");
		ctx.terminal.writeln("This animation requires keyboard input capture.");
		return;
	}

	// Hide cursor during animation
	if (ctx.terminal.hideCursor) {
		ctx.terminal.hideCursor();
	}

	// Animation constants - reduced height to fit in terminal without scrolling
	const DISPLAY_WIDTH = 60;
	const DISPLAY_HEIGHT = 20;
	const FRAME_DELAY = 50; // ~20 FPS

	// Initialize state
	const state: DonutState = {
		rotationA: 0,
		rotationB: 0,
		width: DISPLAY_WIDTH,
		height: DISPLAY_HEIGHT,
		speedA: 0.04,
		speedB: 0.02,
		running: true,
		paused: false,
	};

	// Set up key handler
	const keyHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
	) => {
		if (eventType !== "keydown") return;

		// Q to quit
		if (key === "q" || key === "Q" || keyCode === 81) {
			state.running = false;
		}
		// P to pause/unpause
		if (key === "p" || key === "P" || keyCode === 80) {
			state.paused = !state.paused;
		}
		// R to reset rotation
		if (key === "r" || key === "R" || keyCode === 82) {
			state.rotationA = 0;
			state.rotationB = 0;
		}
		// Left/Right arrows to adjust horizontal rotation speed
		if (key === "ArrowLeft" || keyCode === 37) {
			state.speedB = Math.max(-0.1, state.speedB - 0.01);
		}
		if (key === "ArrowRight" || keyCode === 39) {
			state.speedB = Math.min(0.1, state.speedB + 0.01);
		}
		// Up/Down arrows to adjust vertical rotation speed
		if (key === "ArrowUp" || keyCode === 38) {
			state.speedA = Math.min(0.1, state.speedA + 0.01);
		}
		if (key === "ArrowDown" || keyCode === 40) {
			state.speedA = Math.max(-0.1, state.speedA - 0.01);
		}
	};

	ctx.terminal.setKeyHandler(keyHandler);

	// Clear screen once at start
	ctx.terminal.clear();

	// Track first frame for initialization
	let isFirstFrame = true;

	// Animation loop
	while (state.running) {
		if (!state.paused) {
			// Update rotation angles
			state.rotationA += state.speedA;
			state.rotationB += state.speedB;
		}

		// Render frame
		renderFrame(ctx, state, isFirstFrame);
		isFirstFrame = false;

		await sleep(FRAME_DELAY);
	}

	// Clean up
	ctx.terminal.clearKeyHandler();
	if (ctx.terminal.showCursor) {
		ctx.terminal.showCursor();
	}
	ctx.terminal.clear();
	ctx.terminal.writeln("Donut animation ended.");
	ctx.terminal.writeln("");
}
