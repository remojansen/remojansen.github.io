/**
 * Conway's Game of Life - Cellular automaton simulation
 */

import type { CommandContext, KeyHandler } from "./ShellEmulator";
import { sleep } from "./ShellEmulator";

// ============================================
// Sound Effects using Web Audio API
// ============================================

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
	if (!audioContext) {
		audioContext = new (
			window.AudioContext ||
			(window as typeof window & { webkitAudioContext: typeof AudioContext })
				.webkitAudioContext
		)();
	}
	return audioContext;
}

/**
 * Play a soft ambient tone based on population
 */
function playLifeSound(population: number, maxPopulation: number): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		// Frequency based on population ratio
		const ratio = population / maxPopulation;
		const freq = 200 + ratio * 400;

		oscillator.type = "sine";
		oscillator.frequency.setValueAtTime(freq, ctx.currentTime);

		// Very quiet ambient sound
		gainNode.gain.setValueAtTime(0.02 * ratio, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.1);
	} catch {
		// Audio not available
	}
}

/**
 * Play cell toggle sound
 */
function playToggleSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sine";
		oscillator.frequency.setValueAtTime(440, ctx.currentTime);

		gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.05);
	} catch {
		// Audio not available
	}
}

/**
 * Play pattern load sound
 */
function playPatternSound(): void {
	try {
		const ctx = getAudioContext();
		const notes = [523.25, 659.25, 783.99]; // C5, E5, G5

		notes.forEach((freq, i) => {
			const oscillator = ctx.createOscillator();
			const gainNode = ctx.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(ctx.destination);

			oscillator.type = "sine";
			oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.05);

			gainNode.gain.setValueAtTime(0, ctx.currentTime + i * 0.05);
			gainNode.gain.linearRampToValueAtTime(
				0.1,
				ctx.currentTime + i * 0.05 + 0.01,
			);
			gainNode.gain.exponentialRampToValueAtTime(
				0.01,
				ctx.currentTime + i * 0.05 + 0.1,
			);

			oscillator.start(ctx.currentTime + i * 0.05);
			oscillator.stop(ctx.currentTime + i * 0.05 + 0.1);
		});
	} catch {
		// Audio not available
	}
}

// ============================================
// Game Types and State
// ============================================

interface GameOfLifeState {
	width: number;
	height: number;
	grid: boolean[][];
	nextGrid: boolean[][];
	cursorX: number;
	cursorY: number;
	running: boolean;
	paused: boolean;
	generation: number;
	population: number;
	speed: number; // ms between generations
	editing: boolean; // true when in edit mode
	needsRender: boolean; // true when screen needs to be redrawn
}

/**
 * Famous patterns to load
 */
const PATTERNS: { [key: string]: { name: string; cells: [number, number][] } } =
	{
		glider: {
			name: "Glider",
			cells: [
				[1, 0],
				[2, 1],
				[0, 2],
				[1, 2],
				[2, 2],
			],
		},
		blinker: {
			name: "Blinker",
			cells: [
				[0, 1],
				[1, 1],
				[2, 1],
			],
		},
		toad: {
			name: "Toad",
			cells: [
				[1, 0],
				[2, 0],
				[3, 0],
				[0, 1],
				[1, 1],
				[2, 1],
			],
		},
		beacon: {
			name: "Beacon",
			cells: [
				[0, 0],
				[1, 0],
				[0, 1],
				[3, 2],
				[2, 3],
				[3, 3],
			],
		},
		pulsar: {
			name: "Pulsar",
			cells: [
				// Top left quadrant pattern (repeated with symmetry)
				[2, 0],
				[3, 0],
				[4, 0],
				[8, 0],
				[9, 0],
				[10, 0],
				[0, 2],
				[5, 2],
				[7, 2],
				[12, 2],
				[0, 3],
				[5, 3],
				[7, 3],
				[12, 3],
				[0, 4],
				[5, 4],
				[7, 4],
				[12, 4],
				[2, 5],
				[3, 5],
				[4, 5],
				[8, 5],
				[9, 5],
				[10, 5],
				[2, 7],
				[3, 7],
				[4, 7],
				[8, 7],
				[9, 7],
				[10, 7],
				[0, 8],
				[5, 8],
				[7, 8],
				[12, 8],
				[0, 9],
				[5, 9],
				[7, 9],
				[12, 9],
				[0, 10],
				[5, 10],
				[7, 10],
				[12, 10],
				[2, 12],
				[3, 12],
				[4, 12],
				[8, 12],
				[9, 12],
				[10, 12],
			],
		},
		gliderGun: {
			name: "Gosper Glider Gun",
			cells: [
				[24, 0],
				[22, 1],
				[24, 1],
				[12, 2],
				[13, 2],
				[20, 2],
				[21, 2],
				[34, 2],
				[35, 2],
				[11, 3],
				[15, 3],
				[20, 3],
				[21, 3],
				[34, 3],
				[35, 3],
				[0, 4],
				[1, 4],
				[10, 4],
				[16, 4],
				[20, 4],
				[21, 4],
				[0, 5],
				[1, 5],
				[10, 5],
				[14, 5],
				[16, 5],
				[17, 5],
				[22, 5],
				[24, 5],
				[10, 6],
				[16, 6],
				[24, 6],
				[11, 7],
				[15, 7],
				[12, 8],
				[13, 8],
			],
		},
		spaceship: {
			name: "Lightweight Spaceship",
			cells: [
				[1, 0],
				[4, 0],
				[0, 1],
				[0, 2],
				[4, 2],
				[0, 3],
				[1, 3],
				[2, 3],
				[3, 3],
			],
		},
		rpentomino: {
			name: "R-Pentomino",
			cells: [
				[1, 0],
				[2, 0],
				[0, 1],
				[1, 1],
				[1, 2],
			],
		},
	};

/**
 * Initialize empty grid
 */
function initGrid(state: GameOfLifeState): void {
	state.grid = [];
	state.nextGrid = [];
	for (let y = 0; y < state.height; y++) {
		state.grid[y] = [];
		state.nextGrid[y] = [];
		for (let x = 0; x < state.width; x++) {
			state.grid[y][x] = false;
			state.nextGrid[y][x] = false;
		}
	}
	state.generation = 0;
	state.population = 0;
}

/**
 * Count alive neighbors for a cell
 */
function countNeighbors(state: GameOfLifeState, x: number, y: number): number {
	let count = 0;
	for (let dy = -1; dy <= 1; dy++) {
		for (let dx = -1; dx <= 1; dx++) {
			if (dx === 0 && dy === 0) continue;

			// Wrap around edges (toroidal)
			const nx = (x + dx + state.width) % state.width;
			const ny = (y + dy + state.height) % state.height;

			if (state.grid[ny][nx]) count++;
		}
	}
	return count;
}

/**
 * Advance to next generation
 */
function nextGeneration(state: GameOfLifeState): void {
	let newPopulation = 0;

	for (let y = 0; y < state.height; y++) {
		for (let x = 0; x < state.width; x++) {
			const neighbors = countNeighbors(state, x, y);
			const alive = state.grid[y][x];

			// Conway's rules:
			// 1. Any live cell with 2 or 3 neighbors survives
			// 2. Any dead cell with exactly 3 neighbors becomes alive
			// 3. All other cells die or stay dead
			if (alive) {
				state.nextGrid[y][x] = neighbors === 2 || neighbors === 3;
			} else {
				state.nextGrid[y][x] = neighbors === 3;
			}

			if (state.nextGrid[y][x]) newPopulation++;
		}
	}

	// Swap grids
	const temp = state.grid;
	state.grid = state.nextGrid;
	state.nextGrid = temp;

	state.generation++;
	state.population = newPopulation;
}

/**
 * Load a pattern at cursor position
 */
function loadPattern(state: GameOfLifeState, patternKey: string): void {
	const pattern = PATTERNS[patternKey];
	if (!pattern) return;

	// Clear grid first
	for (let y = 0; y < state.height; y++) {
		for (let x = 0; x < state.width; x++) {
			state.grid[y][x] = false;
		}
	}

	// Find pattern bounds
	let maxX = 0,
		maxY = 0;
	for (const [px, py] of pattern.cells) {
		if (px > maxX) maxX = px;
		if (py > maxY) maxY = py;
	}

	// Center the pattern
	const offsetX = Math.floor((state.width - maxX) / 2);
	const offsetY = Math.floor((state.height - maxY) / 2);

	// Place pattern cells
	let pop = 0;
	for (const [px, py] of pattern.cells) {
		const x = (offsetX + px + state.width) % state.width;
		const y = (offsetY + py + state.height) % state.height;
		state.grid[y][x] = true;
		pop++;
	}

	state.population = pop;
	state.generation = 0;
	playPatternSound();
}

/**
 * Randomize the grid
 */
function randomize(state: GameOfLifeState, density: number = 0.3): void {
	let pop = 0;
	for (let y = 0; y < state.height; y++) {
		for (let x = 0; x < state.width; x++) {
			state.grid[y][x] = Math.random() < density;
			if (state.grid[y][x]) pop++;
		}
	}
	state.population = pop;
	state.generation = 0;
	playPatternSound();
}

/**
 * Toggle a cell
 */
function toggleCell(state: GameOfLifeState, x: number, y: number): void {
	state.grid[y][x] = !state.grid[y][x];
	if (state.grid[y][x]) {
		state.population++;
	} else {
		state.population--;
	}
	playToggleSound();
}

/**
 * Render the Game of Life
 */
function renderGameOfLife(
	ctx: CommandContext,
	state: GameOfLifeState,
	isFirstFrame: boolean,
): void {
	const lines: string[] = [];

	// Header
	const headerWidth = state.width + 2;
	const title = "GAME OF LIFE";
	const titlePadding = Math.floor((headerWidth - title.length) / 2);
	const titlePaddingRight = headerWidth - title.length - titlePadding;
	lines.push(`╔${"═".repeat(headerWidth)}╗`);
	lines.push(
		`║${" ".repeat(titlePadding)}${title}${" ".repeat(titlePaddingRight)}║`,
	);
	lines.push(`╚${"═".repeat(headerWidth)}╝`);

	// Status line - pad to fixed width to avoid ghosting
	const genStr = `Gen: ${state.generation}`;
	const popStr = `Pop: ${state.population}`;
	const speedStr = `Speed: ${state.speed}ms`;
	const modeStr = state.editing
		? "[EDIT]"
		: state.paused
			? "[PAUSED]"
			: "[RUN]";
	const statusContent = `${genStr}  ${popStr}  ${speedStr}  ${modeStr}`;
	lines.push(statusContent.padEnd(headerWidth + 2));

	// Top border
	lines.push(`┌${"─".repeat(state.width)}┐`);

	// Game grid
	for (let y = 0; y < state.height; y++) {
		let row = "│";
		for (let x = 0; x < state.width; x++) {
			const isCursor =
				state.editing && x === state.cursorX && y === state.cursorY;
			if (isCursor) {
				row += state.grid[y][x] ? "◉" : "◎";
			} else {
				row += state.grid[y][x] ? "█" : " ";
			}
		}
		row += "│";
		lines.push(row);
	}

	// Bottom border
	lines.push(`└${"─".repeat(state.width)}┘`);

	// Instructions - pad to fixed width
	const STATUS_WIDTH = 70;
	let statusLine: string;
	if (state.editing) {
		statusLine =
			"  ↑↓←→ = Move | SPACE = Toggle | E = Run | C = Clear | R = Random";
	} else {
		statusLine =
			"  SPACE = Pause | E = Edit | +/- = Speed | 1-8 = Patterns | Q = Quit";
	}
	lines.push(statusLine.padEnd(STATUS_WIDTH));

	// Pattern key legend
	lines.push(
		"  Patterns: 1=Glider 2=Blinker 3=Toad 4=Beacon 5=Pulsar 6=Gun 7=Ship 8=R".padEnd(
			STATUS_WIDTH,
		),
	);

	if (isFirstFrame) {
		ctx.terminal.clear();
	}

	// Build the entire frame as a single string to reduce flickering
	let frame = "\x1b[H"; // Move cursor to home position
	for (let i = 0; i < lines.length; i++) {
		frame += `${lines[i]}\x1b[K\r\n`; // Clear to end of line after each line
	}

	// Write the entire frame at once
	ctx.terminal.write(frame);
}

/**
 * Game of Life command handler
 */
export async function gameOfLifeCommand(ctx: CommandContext): Promise<void> {
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln("life: error - terminal does not support game input");
		ctx.terminal.writeln("This simulation requires keyboard input capture.");
		return;
	}

	if (ctx.terminal.hideCursor) {
		ctx.terminal.hideCursor();
	}

	// Game constants
	const GAME_WIDTH = 60;
	const GAME_HEIGHT = 20; // Reduced to fit header
	const MIN_SPEED = 50;
	const MAX_SPEED = 500;

	// Initialize game state
	const state: GameOfLifeState = {
		width: GAME_WIDTH,
		height: GAME_HEIGHT,
		grid: [],
		nextGrid: [],
		cursorX: Math.floor(GAME_WIDTH / 2),
		cursorY: Math.floor(GAME_HEIGHT / 2),
		running: true,
		paused: true,
		generation: 0,
		population: 0,
		speed: 100,
		editing: true,
		needsRender: true,
	};

	initGrid(state);

	// Start with a glider pattern
	loadPattern(state, "glider");

	let lastGenTime = Date.now();

	// Key handler
	const keyHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
	) => {
		if (eventType !== "keydown") return;

		// Quit
		if (key === "q" || key === "Q" || keyCode === 81) {
			state.running = false;
			return;
		}

		// Toggle edit/run mode
		if (key === "e" || key === "E" || keyCode === 69) {
			state.editing = !state.editing;
			if (!state.editing) {
				state.paused = false;
			} else {
				state.paused = true;
			}
			state.needsRender = true;
			return;
		}

		// In edit mode
		if (state.editing) {
			// Navigation
			if (
				key === "ArrowUp" ||
				key === "w" ||
				key === "W" ||
				keyCode === 38 ||
				keyCode === 87
			) {
				state.cursorY = (state.cursorY - 1 + state.height) % state.height;
				state.needsRender = true;
			}
			if (
				key === "ArrowDown" ||
				key === "s" ||
				key === "S" ||
				keyCode === 40 ||
				keyCode === 83
			) {
				state.cursorY = (state.cursorY + 1) % state.height;
				state.needsRender = true;
			}
			if (
				key === "ArrowLeft" ||
				key === "a" ||
				key === "A" ||
				keyCode === 37 ||
				keyCode === 65
			) {
				state.cursorX = (state.cursorX - 1 + state.width) % state.width;
				state.needsRender = true;
			}
			if (
				key === "ArrowRight" ||
				key === "d" ||
				key === "D" ||
				keyCode === 39 ||
				keyCode === 68
			) {
				state.cursorX = (state.cursorX + 1) % state.width;
				state.needsRender = true;
			}

			// Toggle cell
			if (key === " " || keyCode === 32 || key === "Enter" || keyCode === 13) {
				toggleCell(state, state.cursorX, state.cursorY);
				state.needsRender = true;
			}

			// Clear grid
			if (key === "c" || key === "C" || keyCode === 67) {
				initGrid(state);
				state.needsRender = true;
			}

			// Randomize
			if (key === "r" || key === "R" || keyCode === 82) {
				randomize(state);
				state.needsRender = true;
			}
		} else {
			// In run mode

			// Pause/resume
			if (key === " " || keyCode === 32) {
				state.paused = !state.paused;
				state.needsRender = true;
			}

			// Speed control
			if (key === "+" || key === "=" || keyCode === 187 || keyCode === 107) {
				state.speed = Math.max(MIN_SPEED, state.speed - 25);
				state.needsRender = true;
			}
			if (key === "-" || key === "_" || keyCode === 189 || keyCode === 109) {
				state.speed = Math.min(MAX_SPEED, state.speed + 25);
				state.needsRender = true;
			}
		}

		// Pattern loading (works in both modes)
		const patternKeys: { [key: string]: string } = {
			"1": "glider",
			"2": "blinker",
			"3": "toad",
			"4": "beacon",
			"5": "pulsar",
			"6": "gliderGun",
			"7": "spaceship",
			"8": "rpentomino",
		};

		if (patternKeys[key]) {
			loadPattern(state, patternKeys[key]);
			state.needsRender = true;
		}
	};

	ctx.terminal.setKeyHandler(keyHandler);
	ctx.terminal.clear();

	let isFirstFrame = true;
	const maxPopulation = state.width * state.height;

	// Game loop
	while (state.running) {
		const now = Date.now();

		// Advance generation if not paused and enough time has passed
		if (!state.paused && !state.editing && now - lastGenTime >= state.speed) {
			nextGeneration(state);
			lastGenTime = now;
			state.needsRender = true;

			// Play ambient sound based on population
			if (state.generation % 5 === 0) {
				playLifeSound(state.population, maxPopulation);
			}
		}

		// Only render when something has changed
		if (state.needsRender) {
			renderGameOfLife(ctx, state, isFirstFrame);
			isFirstFrame = false;
			state.needsRender = false;
		}

		await sleep(16); // ~60 FPS check rate, but only renders when needed
	}

	// Clean up
	ctx.terminal.clearKeyHandler();
	if (ctx.terminal.showCursor) {
		ctx.terminal.showCursor();
	}
	ctx.terminal.clear();

	ctx.terminal.writeln(`Final generation: ${state.generation}`);
	ctx.terminal.writeln(`Final population: ${state.population}`);
	ctx.terminal.writeln("");
}
