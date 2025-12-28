/**
 * Minesweeper - Classic puzzle game
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
 * Play reveal sound - satisfying click
 */
function playRevealSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sine";
		oscillator.frequency.setValueAtTime(800, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(
			600,
			ctx.currentTime + 0.05,
		);

		gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.05);
	} catch {
		// Audio not available
	}
}

/**
 * Play flag sound - marking a cell
 */
function playFlagSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "triangle";
		oscillator.frequency.setValueAtTime(500, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(
			700,
			ctx.currentTime + 0.1,
		);

		gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.1);
	} catch {
		// Audio not available
	}
}

/**
 * Play cascade sound - when multiple cells reveal
 */
function playCascadeSound(): void {
	try {
		const ctx = getAudioContext();
		const notes = [600, 700, 800, 900];

		notes.forEach((freq, i) => {
			const oscillator = ctx.createOscillator();
			const gainNode = ctx.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(ctx.destination);

			oscillator.type = "sine";
			oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.03);

			gainNode.gain.setValueAtTime(0, ctx.currentTime + i * 0.03);
			gainNode.gain.linearRampToValueAtTime(
				0.08,
				ctx.currentTime + i * 0.03 + 0.01,
			);
			gainNode.gain.exponentialRampToValueAtTime(
				0.01,
				ctx.currentTime + i * 0.03 + 0.08,
			);

			oscillator.start(ctx.currentTime + i * 0.03);
			oscillator.stop(ctx.currentTime + i * 0.03 + 0.08);
		});
	} catch {
		// Audio not available
	}
}

/**
 * Play explosion sound - hitting a mine
 */
function playExplosionSound(): void {
	try {
		const ctx = getAudioContext();

		// Create noise burst for explosion effect
		const bufferSize = ctx.sampleRate * 0.3;
		const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
		const data = buffer.getChannelData(0);

		for (let i = 0; i < bufferSize; i++) {
			data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
		}

		const noise = ctx.createBufferSource();
		noise.buffer = buffer;

		const gainNode = ctx.createGain();
		const filter = ctx.createBiquadFilter();

		filter.type = "lowpass";
		filter.frequency.setValueAtTime(1000, ctx.currentTime);
		filter.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.3);

		noise.connect(filter);
		filter.connect(gainNode);
		gainNode.connect(ctx.destination);

		gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

		noise.start(ctx.currentTime);
		noise.stop(ctx.currentTime + 0.3);
	} catch {
		// Audio not available
	}
}

/**
 * Play win sound - celebratory
 */
function playWinSound(): void {
	try {
		const ctx = getAudioContext();
		const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

		notes.forEach((freq, i) => {
			const oscillator = ctx.createOscillator();
			const gainNode = ctx.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(ctx.destination);

			oscillator.type = "sine";
			oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);

			gainNode.gain.setValueAtTime(0, ctx.currentTime + i * 0.15);
			gainNode.gain.linearRampToValueAtTime(
				0.15,
				ctx.currentTime + i * 0.15 + 0.02,
			);
			gainNode.gain.exponentialRampToValueAtTime(
				0.01,
				ctx.currentTime + i * 0.15 + 0.2,
			);

			oscillator.start(ctx.currentTime + i * 0.15);
			oscillator.stop(ctx.currentTime + i * 0.15 + 0.2);
		});
	} catch {
		// Audio not available
	}
}

// ============================================
// Game Types and State
// ============================================

interface Cell {
	isMine: boolean;
	isRevealed: boolean;
	isFlagged: boolean;
	adjacentMines: number;
}

interface MinesweeperState {
	width: number;
	height: number;
	mineCount: number;
	grid: Cell[][];
	cursorX: number;
	cursorY: number;
	running: boolean;
	gameOver: boolean;
	won: boolean;
	firstMove: boolean;
	flagsPlaced: number;
	revealedCount: number;
	startTime: number;
	elapsedTime: number;
}

/**
 * Initialize the game grid
 */
function initGrid(state: MinesweeperState): void {
	state.grid = [];
	for (let y = 0; y < state.height; y++) {
		state.grid[y] = [];
		for (let x = 0; x < state.width; x++) {
			state.grid[y][x] = {
				isMine: false,
				isRevealed: false,
				isFlagged: false,
				adjacentMines: 0,
			};
		}
	}
	state.firstMove = true;
	state.flagsPlaced = 0;
	state.revealedCount = 0;
	state.gameOver = false;
	state.won = false;
	state.startTime = 0;
	state.elapsedTime = 0;
}

/**
 * Place mines after first click (ensures first click is safe)
 */
function placeMines(
	state: MinesweeperState,
	safeX: number,
	safeY: number,
): void {
	let minesPlaced = 0;

	while (minesPlaced < state.mineCount) {
		const x = Math.floor(Math.random() * state.width);
		const y = Math.floor(Math.random() * state.height);

		// Don't place mine on safe cell or adjacent to it
		const dx = Math.abs(x - safeX);
		const dy = Math.abs(y - safeY);
		if (dx <= 1 && dy <= 1) continue;

		if (!state.grid[y][x].isMine) {
			state.grid[y][x].isMine = true;
			minesPlaced++;
		}
	}

	// Calculate adjacent mine counts
	for (let y = 0; y < state.height; y++) {
		for (let x = 0; x < state.width; x++) {
			if (!state.grid[y][x].isMine) {
				let count = 0;
				for (let dy = -1; dy <= 1; dy++) {
					for (let dx = -1; dx <= 1; dx++) {
						const ny = y + dy;
						const nx = x + dx;
						if (
							ny >= 0 &&
							ny < state.height &&
							nx >= 0 &&
							nx < state.width &&
							state.grid[ny][nx].isMine
						) {
							count++;
						}
					}
				}
				state.grid[y][x].adjacentMines = count;
			}
		}
	}
}

/**
 * Reveal a cell and cascade if empty
 */
function revealCell(state: MinesweeperState, x: number, y: number): void {
	if (
		x < 0 ||
		x >= state.width ||
		y < 0 ||
		y >= state.height ||
		state.grid[y][x].isRevealed ||
		state.grid[y][x].isFlagged
	) {
		return;
	}

	const cell = state.grid[y][x];
	cell.isRevealed = true;
	state.revealedCount++;

	if (cell.isMine) {
		state.gameOver = true;
		state.won = false;
		playExplosionSound();
		// Reveal all mines
		for (let cy = 0; cy < state.height; cy++) {
			for (let cx = 0; cx < state.width; cx++) {
				if (state.grid[cy][cx].isMine) {
					state.grid[cy][cx].isRevealed = true;
				}
			}
		}
		return;
	}

	// If empty cell, cascade reveal
	if (cell.adjacentMines === 0) {
		playCascadeSound();
		for (let dy = -1; dy <= 1; dy++) {
			for (let dx = -1; dx <= 1; dx++) {
				if (dx !== 0 || dy !== 0) {
					revealCell(state, x + dx, y + dy);
				}
			}
		}
	}

	// Check win condition
	const totalCells = state.width * state.height;
	const nonMineCells = totalCells - state.mineCount;
	if (state.revealedCount >= nonMineCells) {
		state.gameOver = true;
		state.won = true;
		playWinSound();
	}
}

/**
 * Toggle flag on a cell
 */
function toggleFlag(state: MinesweeperState, x: number, y: number): void {
	const cell = state.grid[y][x];
	if (cell.isRevealed) return;

	if (cell.isFlagged) {
		cell.isFlagged = false;
		state.flagsPlaced--;
	} else {
		cell.isFlagged = true;
		state.flagsPlaced++;
	}
	playFlagSound();
}

/**
 * Get display character for a cell
 */
function getCellChar(cell: Cell, showCursor: boolean): string {
	if (showCursor) {
		return "▶";
	}

	if (cell.isFlagged) return "⚑";
	if (!cell.isRevealed) return "■";
	if (cell.isMine) return "✱";
	if (cell.adjacentMines === 0) return "·";
	return cell.adjacentMines.toString();
}

/**
 * Render the minesweeper game
 */
function renderMinesweeper(
	ctx: CommandContext,
	state: MinesweeperState,
	isFirstFrame: boolean,
): void {
	const lines: string[] = [];

	// Header - use fixed width like chess
	const headerWidth = 34;

	// Header
	const title = "MINESWEEPER";
	const titlePadding = Math.floor((headerWidth - title.length) / 2);
	const titlePaddingRight = headerWidth - title.length - titlePadding;
	lines.push(`╔${"═".repeat(headerWidth)}╗`);
	lines.push(
		`║${" ".repeat(titlePadding)}${title}${" ".repeat(titlePaddingRight)}║`,
	);
	lines.push(`╚${"═".repeat(headerWidth)}╝`);

	// Status line
	const minesLeft = state.mineCount - state.flagsPlaced;
	const timeStr = `Time: ${Math.floor(state.elapsedTime)}s`;
	const minesStr = `Mines: ${minesLeft}`;
	lines.push(`${timeStr}    ${minesStr}`);
	lines.push("");

	// Top border - each cell is 2 chars wide (char + space), plus borders
	const gridWidth = state.width * 2 + 1;
	lines.push(`┌${"─".repeat(gridWidth)}┐`);

	// Create a grid for rendering
	for (let y = 0; y < state.height; y++) {
		let row = "│ ";
		for (let x = 0; x < state.width; x++) {
			const cell = state.grid[y][x];
			const isCursor = x === state.cursorX && y === state.cursorY;
			const char = getCellChar(cell, isCursor);
			row += `${char} `;
		}
		row += "│";
		lines.push(row);
	}

	// Bottom border
	lines.push(`└${"─".repeat(gridWidth)}┘`);

	// Instructions/status
	const STATUS_WIDTH = 60;
	let statusLine: string;
	if (state.gameOver) {
		if (state.won) {
			statusLine = "  YOU WIN! Press R to restart, Q to quit";
		} else {
			statusLine = "  GAME OVER! Press R to restart, Q to quit";
		}
	} else {
		statusLine = "  ↑↓←→ = Move | SPACE = Reveal | F = Flag | R = Restart";
	}
	lines.push(statusLine.padEnd(STATUS_WIDTH));
	lines.push("  Q = Quit".padEnd(STATUS_WIDTH));

	// Always clear on first frame, then use cursor positioning
	if (isFirstFrame) {
		ctx.terminal.clear();
	}

	// Move cursor to top-left and clear each line as we write
	ctx.terminal.write("\x1b[H");

	for (const line of lines) {
		// Pad each line to ensure it overwrites any previous content
		ctx.terminal.writeln(line.padEnd(STATUS_WIDTH));
	}
}

/**
 * Reset game state
 */
function resetGame(state: MinesweeperState): void {
	initGrid(state);
	state.cursorX = Math.floor(state.width / 2);
	state.cursorY = Math.floor(state.height / 2);
}

/**
 * Minesweeper game command handler
 */
export async function minesweeperCommand(ctx: CommandContext): Promise<void> {
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln(
			"minesweeper: error - terminal does not support game input",
		);
		ctx.terminal.writeln("This game requires keyboard input capture.");
		return;
	}

	if (ctx.terminal.startGameMusic) {
		ctx.terminal.startGameMusic();
	}

	if (ctx.terminal.hideCursor) {
		ctx.terminal.hideCursor();
	}

	// Game constants
	const GAME_WIDTH = 16;
	const GAME_HEIGHT = 12;
	const MINE_COUNT = 25;
	const FRAME_DELAY = 50;

	// Initialize game state
	const state: MinesweeperState = {
		width: GAME_WIDTH,
		height: GAME_HEIGHT,
		mineCount: MINE_COUNT,
		grid: [],
		cursorX: Math.floor(GAME_WIDTH / 2),
		cursorY: Math.floor(GAME_HEIGHT / 2),
		running: true,
		gameOver: false,
		won: false,
		firstMove: true,
		flagsPlaced: 0,
		revealedCount: 0,
		startTime: 0,
		elapsedTime: 0,
	};

	initGrid(state);

	// Key handler
	const keyHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
	) => {
		if (eventType !== "keydown") return;

		// Navigation
		if (
			(key === "ArrowUp" ||
				key === "w" ||
				key === "W" ||
				keyCode === 38 ||
				keyCode === 87) &&
			!state.gameOver
		) {
			state.cursorY = Math.max(0, state.cursorY - 1);
		}
		if (
			(key === "ArrowDown" ||
				key === "s" ||
				key === "S" ||
				keyCode === 40 ||
				keyCode === 83) &&
			!state.gameOver
		) {
			state.cursorY = Math.min(state.height - 1, state.cursorY + 1);
		}
		if (
			(key === "ArrowLeft" ||
				key === "a" ||
				key === "A" ||
				keyCode === 37 ||
				keyCode === 65) &&
			!state.gameOver
		) {
			state.cursorX = Math.max(0, state.cursorX - 1);
		}
		if (
			(key === "ArrowRight" ||
				key === "d" ||
				key === "D" ||
				keyCode === 39 ||
				keyCode === 68) &&
			!state.gameOver
		) {
			state.cursorX = Math.min(state.width - 1, state.cursorX + 1);
		}

		// Reveal cell
		if (
			(key === " " || keyCode === 32 || key === "Enter" || keyCode === 13) &&
			!state.gameOver
		) {
			if (state.firstMove) {
				state.firstMove = false;
				state.startTime = Date.now();
				placeMines(state, state.cursorX, state.cursorY);
			}
			playRevealSound();
			revealCell(state, state.cursorX, state.cursorY);
		}

		// Flag cell
		if ((key === "f" || key === "F" || keyCode === 70) && !state.gameOver) {
			if (!state.firstMove) {
				toggleFlag(state, state.cursorX, state.cursorY);
			}
		}

		// Restart
		if (key === "r" || key === "R" || keyCode === 82) {
			resetGame(state);
		}

		// Quit
		if (key === "q" || key === "Q" || keyCode === 81) {
			state.running = false;
		}
	};

	ctx.terminal.setKeyHandler(keyHandler);

	// Clear terminal before starting game loop
	ctx.terminal.clear();

	let isFirstFrame = true;

	// Game loop
	while (state.running) {
		// Update timer
		if (!state.firstMove && !state.gameOver) {
			state.elapsedTime = (Date.now() - state.startTime) / 1000;
		}

		renderMinesweeper(ctx, state, isFirstFrame);
		isFirstFrame = false;

		await sleep(FRAME_DELAY);
	}

	// Clean up
	ctx.terminal.clearKeyHandler();
	if (ctx.terminal.stopGameMusic) {
		ctx.terminal.stopGameMusic();
	}
	if (ctx.terminal.showCursor) {
		ctx.terminal.showCursor();
	}
	ctx.terminal.clear();

	if (state.won) {
		ctx.terminal.writeln(`Congratulations! You cleared the minefield!`);
		ctx.terminal.writeln(`Time: ${Math.floor(state.elapsedTime)} seconds`);
	} else {
		ctx.terminal.writeln("Better luck next time!");
	}
	ctx.terminal.writeln("");
}
