/**
 * Tetris game - Classic falling blocks puzzle game
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
 * Play piece move sound - subtle click
 */
function playMoveSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sine";
		oscillator.frequency.setValueAtTime(200, ctx.currentTime);

		gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.03);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.03);
	} catch {
		// Audio not available
	}
}

/**
 * Play piece rotate sound
 */
function playRotateSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sine";
		oscillator.frequency.setValueAtTime(300, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(
			400,
			ctx.currentTime + 0.05,
		);

		gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.05);
	} catch {
		// Audio not available
	}
}

/**
 * Play piece lock sound - thud when piece lands
 */
function playLockSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "triangle";
		oscillator.frequency.setValueAtTime(150, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(
			80,
			ctx.currentTime + 0.1,
		);

		gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.1);
	} catch {
		// Audio not available
	}
}

/**
 * Play hard drop sound
 */
function playHardDropSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sawtooth";
		oscillator.frequency.setValueAtTime(200, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(
			60,
			ctx.currentTime + 0.15,
		);

		gainNode.gain.setValueAtTime(0.12, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.15);
	} catch {
		// Audio not available
	}
}

/**
 * Play line clear sound - satisfying sweep
 */
function playLineClearSound(lineCount: number): void {
	try {
		const ctx = getAudioContext();

		// More lines = more impressive sound
		const baseFreq = 400 + lineCount * 100;

		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "square";
		oscillator.frequency.setValueAtTime(baseFreq, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(
			baseFreq * 2,
			ctx.currentTime + 0.1,
		);
		oscillator.frequency.exponentialRampToValueAtTime(
			baseFreq * 1.5,
			ctx.currentTime + 0.2,
		);

		gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.25);

		// Tetris (4 lines) gets extra fanfare
		if (lineCount === 4) {
			const notes = [523.25, 659.25, 783.99, 1046.5];
			notes.forEach((freq, i) => {
				const osc = ctx.createOscillator();
				const gain = ctx.createGain();

				osc.connect(gain);
				gain.connect(ctx.destination);

				osc.type = "sine";
				osc.frequency.setValueAtTime(freq, ctx.currentTime + 0.1 + i * 0.08);

				gain.gain.setValueAtTime(0, ctx.currentTime + 0.1 + i * 0.08);
				gain.gain.linearRampToValueAtTime(
					0.1,
					ctx.currentTime + 0.1 + i * 0.08 + 0.02,
				);
				gain.gain.exponentialRampToValueAtTime(
					0.01,
					ctx.currentTime + 0.1 + i * 0.08 + 0.15,
				);

				osc.start(ctx.currentTime + 0.1 + i * 0.08);
				osc.stop(ctx.currentTime + 0.1 + i * 0.08 + 0.15);
			});
		}
	} catch {
		// Audio not available
	}
}

/**
 * Play level up sound
 */
function playLevelUpSound(): void {
	try {
		const ctx = getAudioContext();
		const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5

		notes.forEach((freq, i) => {
			const oscillator = ctx.createOscillator();
			const gainNode = ctx.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(ctx.destination);

			oscillator.type = "sine";
			oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);

			gainNode.gain.setValueAtTime(0, ctx.currentTime + i * 0.1);
			gainNode.gain.linearRampToValueAtTime(
				0.12,
				ctx.currentTime + i * 0.1 + 0.02,
			);
			gainNode.gain.exponentialRampToValueAtTime(
				0.01,
				ctx.currentTime + i * 0.1 + 0.15,
			);

			oscillator.start(ctx.currentTime + i * 0.1);
			oscillator.stop(ctx.currentTime + i * 0.1 + 0.15);
		});
	} catch {
		// Audio not available
	}
}

/**
 * Play game over sound
 */
function playGameOverSound(): void {
	try {
		const ctx = getAudioContext();
		const notes = [440, 392, 349.23, 329.63, 293.66, 261.63]; // A4 down to C4

		notes.forEach((freq, i) => {
			const oscillator = ctx.createOscillator();
			const gainNode = ctx.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(ctx.destination);

			oscillator.type = "sawtooth";
			oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);

			gainNode.gain.setValueAtTime(0, ctx.currentTime + i * 0.12);
			gainNode.gain.linearRampToValueAtTime(
				0.1,
				ctx.currentTime + i * 0.12 + 0.02,
			);
			gainNode.gain.exponentialRampToValueAtTime(
				0.01,
				ctx.currentTime + i * 0.12 + 0.18,
			);

			oscillator.start(ctx.currentTime + i * 0.12);
			oscillator.stop(ctx.currentTime + i * 0.12 + 0.18);
		});
	} catch {
		// Audio not available
	}
}

// ============================================
// Game Types and Constants
// ============================================

// Tetris piece shapes (each rotation is a 4x4 grid)
const TETRIS_PIECES = {
	I: [
		[
			[0, 0, 0, 0],
			[1, 1, 1, 1],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 1, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 1, 1],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
		],
	],
	O: [
		[
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
	],
	T: [
		[
			[0, 1, 0, 0],
			[1, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
		],
	],
	S: [
		[
			[0, 1, 1, 0],
			[1, 1, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[1, 1, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[1, 0, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
		],
	],
	Z: [
		[
			[1, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 1, 0],
			[0, 1, 1, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[1, 1, 0, 0],
			[1, 0, 0, 0],
			[0, 0, 0, 0],
		],
	],
	J: [
		[
			[1, 0, 0, 0],
			[1, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 1, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[1, 1, 0, 0],
			[0, 0, 0, 0],
		],
	],
	L: [
		[
			[0, 0, 1, 0],
			[1, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[1, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[1, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
		],
	],
};

const PIECE_TYPES = ["I", "O", "T", "S", "Z", "J", "L"] as const;
type PieceType = (typeof PIECE_TYPES)[number];

interface TetrisState {
	// Board dimensions
	width: number;
	height: number;
	// The board (0 = empty, string = piece type)
	board: (string | 0)[][];
	// Current piece
	currentPiece: PieceType;
	currentRotation: number;
	currentX: number;
	currentY: number;
	// Next piece
	nextPiece: PieceType;
	// Score and level
	score: number;
	lines: number;
	level: number;
	highScore: number;
	// Game state
	running: boolean;
	paused: boolean;
	gameOver: boolean;
	// Timing
	dropSpeed: number;
	frameCount: number;
	lockDelay: number;
}

/**
 * Create an empty board
 */
function createEmptyBoard(width: number, height: number): (string | 0)[][] {
	return Array.from({ length: height }, () => Array(width).fill(0));
}

/**
 * Get a random piece type
 */
function getRandomPiece(): PieceType {
	return PIECE_TYPES[Math.floor(Math.random() * PIECE_TYPES.length)];
}

/**
 * Check if a piece can move to a position
 */
function canMove(
	state: TetrisState,
	newX: number,
	newY: number,
	rotation: number,
): boolean {
	const piece = TETRIS_PIECES[state.currentPiece][rotation];

	for (let py = 0; py < 4; py++) {
		for (let px = 0; px < 4; px++) {
			if (piece[py][px]) {
				const boardX = newX + px;
				const boardY = newY + py;

				// Check bounds
				if (boardX < 0 || boardX >= state.width || boardY >= state.height) {
					return false;
				}

				// Check collision with placed pieces (only if on board)
				if (boardY >= 0 && state.board[boardY][boardX] !== 0) {
					return false;
				}
			}
		}
	}
	return true;
}

/**
 * Lock the current piece to the board
 */
function lockPiece(state: TetrisState): void {
	const piece = TETRIS_PIECES[state.currentPiece][state.currentRotation];

	for (let py = 0; py < 4; py++) {
		for (let px = 0; px < 4; px++) {
			if (piece[py][px]) {
				const boardX = state.currentX + px;
				const boardY = state.currentY + py;

				if (
					boardY >= 0 &&
					boardY < state.height &&
					boardX >= 0 &&
					boardX < state.width
				) {
					state.board[boardY][boardX] = state.currentPiece;
				}
			}
		}
	}

	playLockSound();

	// Check for completed lines
	let linesCleared = 0;
	for (let y = state.height - 1; y >= 0; y--) {
		if (state.board[y].every((cell) => cell !== 0)) {
			// Remove the line
			state.board.splice(y, 1);
			// Add empty line at top
			state.board.unshift(Array(state.width).fill(0));
			linesCleared++;
			y++; // Check same row again
		}
	}

	// Update score based on lines cleared
	if (linesCleared > 0) {
		const lineScores = [0, 100, 300, 500, 800]; // 0, 1, 2, 3, 4 lines
		state.score += lineScores[linesCleared] * state.level;
		state.lines += linesCleared;
		playLineClearSound(linesCleared);

		// Level up every 10 lines
		const newLevel = Math.floor(state.lines / 10) + 1;
		if (newLevel > state.level) {
			state.level = newLevel;
			// Increase speed (decrease drop delay)
			state.dropSpeed = Math.max(5, 30 - (state.level - 1) * 3);
			playLevelUpSound();
		}
	}

	// Update high score
	if (state.score > state.highScore) {
		state.highScore = state.score;
		try {
			localStorage.setItem("tetris_high_score", state.highScore.toString());
		} catch {
			// Ignore localStorage errors
		}
	}

	state.lockDelay = 0;
}

/**
 * Spawn a new piece
 */
function spawnNewPiece(state: TetrisState): void {
	state.currentPiece = state.nextPiece;
	state.nextPiece = getRandomPiece();
	state.currentRotation = 0;
	state.currentX = Math.floor(state.width / 2) - 2;
	state.currentY = 0;
	state.lockDelay = 0;

	// Check if new piece can be placed (game over condition)
	if (!canMove(state, state.currentX, state.currentY, state.currentRotation)) {
		state.gameOver = true;
		playGameOverSound();
	}
}

/**
 * Reset tetris game state
 */
function resetTetrisGame(
	state: TetrisState,
	width: number,
	height: number,
	initialDropSpeed: number,
): void {
	state.board = createEmptyBoard(width, height);
	state.currentPiece = getRandomPiece();
	state.nextPiece = getRandomPiece();
	state.currentRotation = 0;
	state.currentX = Math.floor(width / 2) - 2;
	state.currentY = 0;
	state.score = 0;
	state.lines = 0;
	state.level = 1;
	state.gameOver = false;
	state.paused = false;
	state.dropSpeed = initialDropSpeed;
	state.frameCount = 0;
	state.lockDelay = 0;
}

/**
 * Render the tetris game - using 2 chars per cell for wider display
 */
function renderTetris(
	ctx: CommandContext,
	state: TetrisState,
	isFirstFrame: boolean,
): void {
	const lines: string[] = [];

	// Use 2 characters per cell for wider display
	const CELL_WIDTH = 2;
	const boardDisplayWidth = state.width * CELL_WIDTH;

	// Header - wider to match board
	lines.push("╔════════════════════════════════════════════════════╗");
	lines.push("║                      TETRIS                        ║");
	lines.push("╚════════════════════════════════════════════════════╝");

	// Create display board with current piece (using 2-char cells)
	// All blocks use same character pair for consistent display
	const EMPTY_CELL = "· ";
	const FILLED_CELL = "██";
	const GHOST_CELL = "░░";

	const displayBoard: string[][] = state.board.map((row) =>
		row.map((cell) => (cell === 0 ? EMPTY_CELL : FILLED_CELL)),
	);

	// Draw current piece on display board
	const piece = TETRIS_PIECES[state.currentPiece][state.currentRotation];
	for (let py = 0; py < 4; py++) {
		for (let px = 0; px < 4; px++) {
			if (piece[py][px]) {
				const boardX = state.currentX + px;
				const boardY = state.currentY + py;
				if (
					boardY >= 0 &&
					boardY < state.height &&
					boardX >= 0 &&
					boardX < state.width
				) {
					displayBoard[boardY][boardX] = FILLED_CELL;
				}
			}
		}
	}

	// Draw ghost piece (preview of where piece will land)
	let ghostY = state.currentY;
	while (canMove(state, state.currentX, ghostY + 1, state.currentRotation)) {
		ghostY++;
	}
	if (ghostY > state.currentY) {
		for (let py = 0; py < 4; py++) {
			for (let px = 0; px < 4; px++) {
				if (piece[py][px]) {
					const boardX = state.currentX + px;
					const boardY = ghostY + py;
					if (
						boardY >= 0 &&
						boardY < state.height &&
						boardX >= 0 &&
						boardX < state.width
					) {
						if (displayBoard[boardY][boardX] === EMPTY_CELL) {
							displayBoard[boardY][boardX] = GHOST_CELL;
						}
					}
				}
			}
		}
	}

	// Render next piece preview (2 chars per cell)
	const nextPiecePreview: string[] = [];
	const nextShape = TETRIS_PIECES[state.nextPiece][0];
	for (let py = 0; py < 4; py++) {
		let row = "";
		for (let px = 0; px < 4; px++) {
			row += nextShape[py][px] ? FILLED_CELL : "  ";
		}
		nextPiecePreview.push(row);
	}

	// Top border (2 chars per cell = 20 chars for board)
	lines.push(`┌${"─".repeat(boardDisplayWidth)}┐`);

	// Build game display with side panel
	for (let y = 0; y < state.height; y++) {
		let line = `│${displayBoard[y].join("")}│`;

		// Side panel
		if (y === 0) {
			line += "   NEXT:";
		} else if (y >= 1 && y <= 4) {
			line += `   ${nextPiecePreview[y - 1]}`;
		} else if (y === 6) {
			line += `   Score: ${state.score}`;
		} else if (y === 7) {
			line += `   High:  ${state.highScore}`;
		} else if (y === 9) {
			line += `   Lines: ${state.lines}`;
		} else if (y === 10) {
			line += `   Level: ${state.level}`;
		}

		lines.push(line);
	}

	// Bottom border (2 chars per cell = 20 chars for board)
	lines.push(`└${"─".repeat(boardDisplayWidth)}┘`);

	// Status line - use consistent width to clear previous content
	const STATUS_WIDTH = 65;
	let statusLine: string;
	if (state.gameOver) {
		statusLine = "  GAME OVER! SPACE=Restart Q=Quit";
	} else if (state.paused) {
		statusLine = "  PAUSED - Press P to continue";
	} else {
		statusLine = "  ←→/AD=Move  ↑/W=Rotate  ↓/S=Drop  SPACE=HardDrop  Q=Quit";
	}
	lines.push(statusLine.padEnd(STATUS_WIDTH));

	// Only clear on first frame
	if (isFirstFrame) {
		ctx.terminal.clear();
	}

	// Write all lines
	ctx.terminal.write("\x1b[H");
	for (const line of lines) {
		ctx.terminal.writeln(line);
	}
}

/**
 * Tetris game command handler
 */
export async function tetrisCommand(ctx: CommandContext): Promise<void> {
	// Check if key handler is available
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln(
			"tetris: error - terminal does not support game input",
		);
		ctx.terminal.writeln("This game requires keyboard input capture.");
		return;
	}

	// Start game music
	if (ctx.terminal.startGameMusic) {
		ctx.terminal.startGameMusic();
	}

	// Hide cursor during game
	if (ctx.terminal.hideCursor) {
		ctx.terminal.hideCursor();
	}

	// Game constants
	const BOARD_WIDTH = 10;
	const BOARD_HEIGHT = 20;
	const INITIAL_DROP_SPEED = 30;
	const FRAME_DELAY = 33; // ~30 FPS

	// Try to load high score from localStorage
	let savedHighScore = 0;
	try {
		const saved = localStorage.getItem("tetris_high_score");
		if (saved) savedHighScore = parseInt(saved, 10);
	} catch {
		// Ignore localStorage errors
	}

	// Initialize game state
	const state: TetrisState = {
		width: BOARD_WIDTH,
		height: BOARD_HEIGHT,
		board: createEmptyBoard(BOARD_WIDTH, BOARD_HEIGHT),
		currentPiece: getRandomPiece(),
		currentRotation: 0,
		currentX: Math.floor(BOARD_WIDTH / 2) - 2,
		currentY: 0,
		nextPiece: getRandomPiece(),
		score: 0,
		lines: 0,
		level: 1,
		highScore: savedHighScore,
		running: true,
		paused: false,
		gameOver: false,
		dropSpeed: INITIAL_DROP_SPEED,
		frameCount: 0,
		lockDelay: 0,
	};

	// Key state for continuous input (like Pong)
	const keys = {
		arrowLeft: false,
		arrowRight: false,
		arrowDown: false,
		arrowUp: false,
	};

	// Track last move time for auto-repeat with initial delay
	let lastMoveTime = 0;
	const moveRepeatDelay = 150; // Initial delay before auto-repeat (ms)
	const moveRepeatRate = 50; // Rate of auto-repeat (ms)
	let isFirstRepeat = true;

	// Set up key handler - tracks both keydown and keyup for responsive input
	const keyHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
	) => {
		const isDown = eventType === "keydown";

		// Track key state for continuous movement
		if (
			key === "ArrowLeft" ||
			key === "a" ||
			key === "A" ||
			keyCode === 37 ||
			keyCode === 65
		) {
			if (isDown && !keys.arrowLeft) {
				isFirstRepeat = true;
				lastMoveTime = 0; // Allow immediate first move
			}
			keys.arrowLeft = isDown;
		}
		if (
			key === "ArrowRight" ||
			key === "d" ||
			key === "D" ||
			keyCode === 39 ||
			keyCode === 68
		) {
			if (isDown && !keys.arrowRight) {
				isFirstRepeat = true;
				lastMoveTime = 0;
			}
			keys.arrowRight = isDown;
		}
		if (
			key === "ArrowDown" ||
			key === "s" ||
			key === "S" ||
			keyCode === 40 ||
			keyCode === 83
		) {
			if (isDown && !keys.arrowDown) {
				isFirstRepeat = true;
				lastMoveTime = 0;
			}
			keys.arrowDown = isDown;
		}
		if (
			key === "ArrowUp" ||
			key === "w" ||
			key === "W" ||
			keyCode === 38 ||
			keyCode === 87
		) {
			keys.arrowUp = isDown;
		}

		// Only handle these on keydown
		if (isDown) {
			if (state.gameOver) {
				// Space to restart after game over
				if (key === " " || keyCode === 32) {
					resetTetrisGame(state, BOARD_WIDTH, BOARD_HEIGHT, INITIAL_DROP_SPEED);
				}
				// Q to quit
				if (key === "q" || key === "Q" || keyCode === 81) {
					state.running = false;
				}
				return;
			}

			// Q to quit
			if (key === "q" || key === "Q" || keyCode === 81) {
				state.running = false;
			}
			// P to pause/unpause
			if (key === "p" || key === "P" || keyCode === 80) {
				state.paused = !state.paused;
			}

			if (state.paused) return;

			// Hard drop (only on keydown, not continuous)
			if (key === " " || keyCode === 32) {
				let dropDistance = 0;
				while (
					canMove(
						state,
						state.currentX,
						state.currentY + 1,
						state.currentRotation,
					)
				) {
					state.currentY++;
					dropDistance++;
				}
				if (dropDistance > 0) {
					playHardDropSound();
				}
				state.score += dropDistance * 2; // Bonus for hard drop
				lockPiece(state);
				spawnNewPiece(state);
			}
			// Rotate clockwise (only on keydown, not continuous)
			if (
				key === "ArrowUp" ||
				key === "w" ||
				key === "W" ||
				keyCode === 38 ||
				keyCode === 87
			) {
				const newRotation = (state.currentRotation + 1) % 4;
				let rotated = false;
				if (canMove(state, state.currentX, state.currentY, newRotation)) {
					state.currentRotation = newRotation;
					rotated = true;
				} else if (
					canMove(state, state.currentX - 1, state.currentY, newRotation)
				) {
					// Wall kick left
					state.currentX--;
					state.currentRotation = newRotation;
					rotated = true;
				} else if (
					canMove(state, state.currentX + 1, state.currentY, newRotation)
				) {
					// Wall kick right
					state.currentX++;
					state.currentRotation = newRotation;
					rotated = true;
				}
				if (rotated) {
					playRotateSound();
				}
			}
		}
	};

	ctx.terminal.setKeyHandler(keyHandler);

	// Clear screen once at start
	ctx.terminal.clear();

	// Track first frame for initialization
	let isFirstFrame = true;

	// Game loop
	while (state.running) {
		if (!state.paused && !state.gameOver) {
			const now = Date.now();
			const timeSinceLastMove = now - lastMoveTime;
			const currentDelay = isFirstRepeat ? moveRepeatDelay : moveRepeatRate;

			// Process continuous key input for horizontal movement and soft drop
			if (timeSinceLastMove >= currentDelay) {
				let moved = false;

				// Left movement
				if (keys.arrowLeft && !keys.arrowRight) {
					if (
						canMove(
							state,
							state.currentX - 1,
							state.currentY,
							state.currentRotation,
						)
					) {
						state.currentX--;
						moved = true;
						playMoveSound();
					}
				}
				// Right movement
				if (keys.arrowRight && !keys.arrowLeft) {
					if (
						canMove(
							state,
							state.currentX + 1,
							state.currentY,
							state.currentRotation,
						)
					) {
						state.currentX++;
						moved = true;
						playMoveSound();
					}
				}
				// Soft drop (continuous)
				if (keys.arrowDown) {
					if (
						canMove(
							state,
							state.currentX,
							state.currentY + 1,
							state.currentRotation,
						)
					) {
						state.currentY++;
						state.score += 1; // Bonus for soft drop
						moved = true;
					}
				}

				if (moved) {
					lastMoveTime = now;
					isFirstRepeat = false;
				}
			}

			state.frameCount++;

			// Auto drop at current speed
			if (state.frameCount >= state.dropSpeed) {
				state.frameCount = 0;

				if (
					canMove(
						state,
						state.currentX,
						state.currentY + 1,
						state.currentRotation,
					)
				) {
					state.currentY++;
				} else {
					// Piece has landed
					state.lockDelay++;
					if (state.lockDelay >= 2) {
						lockPiece(state);
						spawnNewPiece(state);
					}
				}
			}
		}

		// Render game
		renderTetris(ctx, state, isFirstFrame);
		isFirstFrame = false;

		await sleep(FRAME_DELAY);
	}

	// Clean up
	ctx.terminal.clearKeyHandler();
	// Stop game music
	if (ctx.terminal.stopGameMusic) {
		ctx.terminal.stopGameMusic();
	}
	// Show cursor again
	if (ctx.terminal.showCursor) {
		ctx.terminal.showCursor();
	}
	ctx.terminal.clear();
	ctx.terminal.writeln(
		`Final Score: ${state.score} | Lines: ${state.lines} | Level: ${state.level}`,
	);
	if (state.score === state.highScore && state.score > 0) {
		ctx.terminal.writeln("NEW HIGH SCORE!");
	}
	ctx.terminal.writeln("");
}
