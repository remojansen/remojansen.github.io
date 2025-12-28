/**
 * Memory Game - Classic card matching game
 * Find all matching pairs in the shortest time possible
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
 * Play card flip sound
 */
function playFlipSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sine";
		oscillator.frequency.setValueAtTime(800, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1);

		gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.1);
	} catch {
		// Audio not available
	}
}

/**
 * Play match found sound
 */
function playMatchSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sine";
		oscillator.frequency.setValueAtTime(523.25, ctx.currentTime);
		oscillator.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
		oscillator.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);

		gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.3);
	} catch {
		// Audio not available
	}
}

/**
 * Play no match sound
 */
function playNoMatchSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sawtooth";
		oscillator.frequency.setValueAtTime(200, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);

		gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.2);
	} catch {
		// Audio not available
	}
}

/**
 * Play victory sound
 */
function playVictorySound(): void {
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
			gainNode.gain.linearRampToValueAtTime(0.15, ctx.currentTime + i * 0.15 + 0.02);
			gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.15 + 0.25);

			oscillator.start(ctx.currentTime + i * 0.15);
			oscillator.stop(ctx.currentTime + i * 0.15 + 0.25);
		});
	} catch {
		// Audio not available
	}
}

// ============================================
// Game Types and State
// ============================================

interface Card {
	symbol: string;
	revealed: boolean;
	matched: boolean;
}

interface MemoryState {
	// Grid dimensions
	rows: number;
	cols: number;
	// Cards array
	cards: Card[];
	// Currently selected card indices
	firstSelection: number | null;
	secondSelection: number | null;
	// Cursor position
	cursorRow: number;
	cursorCol: number;
	// Game stats
	moves: number;
	matchesFound: number;
	totalPairs: number;
	startTime: number;
	elapsedTime: number;
	// Game state
	running: boolean;
	gameOver: boolean;
	waitingForFlip: boolean;
}

// Card symbols (using box drawing and special characters for retro look)
const CARD_SYMBOLS = [
	"♠", "♥", "♦", "♣",
	"★", "●", "■", "▲",
	"♪", "☼", "◆", "○",
	"△", "□", "◇", "♩",
	"⬟", "⬢",
];

/**
 * Shuffle an array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

/**
 * Initialize the game cards
 */
function initializeCards(rows: number, cols: number): Card[] {
	const totalCards = rows * cols;
	const numPairs = totalCards / 2;

	// Select symbols for pairs
	const selectedSymbols = CARD_SYMBOLS.slice(0, numPairs);

	// Create pairs
	const symbols = [...selectedSymbols, ...selectedSymbols];

	// Shuffle
	const shuffledSymbols = shuffleArray(symbols);

	// Create cards
	return shuffledSymbols.map((symbol) => ({
		symbol,
		revealed: false,
		matched: false,
	}));
}

/**
 * Format time in MM:SS format
 */
function formatTime(seconds: number): string {
	const mins = Math.floor(seconds / 60);
	const secs = Math.floor(seconds % 60);
	return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

/**
 * Render the memory game
 */
function renderMemory(
	ctx: CommandContext,
	state: MemoryState,
	isFirstFrame: boolean,
): void {
	const lines: string[] = [];

	// Card dimensions
	const cardWidth = 5;
	const cardHeight = 3;

	// Header
	const headerWidth = state.cols * (cardWidth + 1) + 1;
	const title = "MEMORY GAME";
	const titlePadding = Math.floor((headerWidth - title.length) / 2);
	const titlePaddingRight = headerWidth - title.length - titlePadding;

	lines.push(`╔${"═".repeat(headerWidth)}╗`);
	lines.push(`║${" ".repeat(titlePadding)}${title}${" ".repeat(titlePaddingRight)}║`);
	lines.push(`╚${"═".repeat(headerWidth)}╝`);

	// Stats line
	const movesStr = `Moves: ${state.moves}`;
	const pairsStr = `Pairs: ${state.matchesFound}/${state.totalPairs}`;
	const timeStr = `Time: ${formatTime(state.elapsedTime)}`;
	const statsLine = `${movesStr}  ${pairsStr}  ${timeStr}`;
	const statsPadding = Math.floor((headerWidth - statsLine.length) / 2);
	lines.push(`${" ".repeat(Math.max(0, statsPadding))}${statsLine}`);
	lines.push("");

	// Render cards in a grid
	for (let row = 0; row < state.rows; row++) {
		// Each card is 3 lines tall
		const cardLines: string[] = ["", "", ""];

		for (let col = 0; col < state.cols; col++) {
			const cardIndex = row * state.cols + col;
			const card = state.cards[cardIndex];
			const isSelected = state.cursorRow === row && state.cursorCol === col;
			const isFirstSelected = state.firstSelection === cardIndex;
			const isSecondSelected = state.secondSelection === cardIndex;

			// Determine card appearance
			let topBorder: string;
			let middleLine: string;
			let bottomBorder: string;

			if (card.matched) {
				// Matched cards - show with dimmed border
				topBorder = "┌───┐";
				middleLine = `│ ${card.symbol} │`;
				bottomBorder = "└───┘";
			} else if (card.revealed || isFirstSelected || isSecondSelected) {
				// Revealed card
				topBorder = "╔═══╗";
				middleLine = `║ ${card.symbol} ║`;
				bottomBorder = "╚═══╝";
			} else {
				// Hidden card
				topBorder = "╔═══╗";
				middleLine = "║ ? ║";
				bottomBorder = "╚═══╝";
			}

			// Add cursor highlight
			if (isSelected && !state.gameOver) {
				topBorder = `>${topBorder.slice(1, -1)}<`;
				bottomBorder = `>${bottomBorder.slice(1, -1)}<`;
			}

			cardLines[0] += topBorder + " ";
			cardLines[1] += middleLine + " ";
			cardLines[2] += bottomBorder + " ";
		}

		lines.push(cardLines[0]);
		lines.push(cardLines[1]);
		lines.push(cardLines[2]);
	}

	lines.push("");

	// Status line
	let statusLine: string;
	if (state.gameOver) {
		statusLine = `  CONGRATULATIONS! Completed in ${formatTime(state.elapsedTime)} with ${state.moves} moves!`;
		lines.push(statusLine);
		lines.push("  Press SPACE to play again, Q to quit");
	} else {
		statusLine = "  ↑↓←→ = Move cursor  |  SPACE/ENTER = Flip card  |  Q = Quit";
		lines.push(statusLine);
	}

	// Clear and render
	if (isFirstFrame) {
		ctx.terminal.clear();
	}

	// Build the entire frame as a single string to reduce flickering
	let frame = "\x1b[H"; // Move cursor to home position
	for (const line of lines) {
		frame += `${line}\x1b[K\r\n`; // Clear to end of line after each line
	}

	// Write the entire frame at once
	ctx.terminal.write(frame);
}

/**
 * Memory game command handler
 */
export async function memoryCommand(ctx: CommandContext): Promise<void> {
	// Check if key handler is available
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln("memory: error - terminal does not support game input");
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
	const ROWS = 4;
	const COLS = 4;
	const FRAME_DELAY = 100;

	// Initialize game state
	const state: MemoryState = {
		rows: ROWS,
		cols: COLS,
		cards: initializeCards(ROWS, COLS),
		firstSelection: null,
		secondSelection: null,
		cursorRow: 0,
		cursorCol: 0,
		moves: 0,
		matchesFound: 0,
		totalPairs: (ROWS * COLS) / 2,
		startTime: Date.now(),
		elapsedTime: 0,
		running: true,
		gameOver: false,
		waitingForFlip: false,
	};

	// Set up key handler
	const keyHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
	) => {
		if (eventType !== "keydown") return;

		// Don't process movement if waiting for cards to flip back
		if (state.waitingForFlip && key !== "q" && key !== "Q" && keyCode !== 81) {
			return;
		}

		// Q to quit
		if (key === "q" || key === "Q" || keyCode === 81) {
			state.running = false;
			return;
		}

		// Space to restart after game over
		if ((key === " " || keyCode === 32) && state.gameOver) {
			// Reset game
			state.cards = initializeCards(ROWS, COLS);
			state.firstSelection = null;
			state.secondSelection = null;
			state.cursorRow = 0;
			state.cursorCol = 0;
			state.moves = 0;
			state.matchesFound = 0;
			state.startTime = Date.now();
			state.elapsedTime = 0;
			state.gameOver = false;
			state.waitingForFlip = false;
			return;
		}

		if (state.gameOver) return;

		// Arrow keys for movement
		if (key === "ArrowUp" || keyCode === 38) {
			state.cursorRow = Math.max(0, state.cursorRow - 1);
		}
		if (key === "ArrowDown" || keyCode === 40) {
			state.cursorRow = Math.min(state.rows - 1, state.cursorRow + 1);
		}
		if (key === "ArrowLeft" || keyCode === 37) {
			state.cursorCol = Math.max(0, state.cursorCol - 1);
		}
		if (key === "ArrowRight" || keyCode === 39) {
			state.cursorCol = Math.min(state.cols - 1, state.cursorCol + 1);
		}

		// Space or Enter to flip card
		if (key === " " || keyCode === 32 || key === "Enter" || keyCode === 13) {
			const cardIndex = state.cursorRow * state.cols + state.cursorCol;
			const card = state.cards[cardIndex];

			// Can't flip already matched or currently revealed cards
			if (card.matched || card.revealed) return;
			if (state.firstSelection === cardIndex) return;

			playFlipSound();

			if (state.firstSelection === null) {
				// First card selection
				state.firstSelection = cardIndex;
				card.revealed = true;
			} else if (state.secondSelection === null) {
				// Second card selection
				state.secondSelection = cardIndex;
				card.revealed = true;
				state.moves++;

				// Check for match
				const firstCard = state.cards[state.firstSelection];
				if (firstCard.symbol === card.symbol) {
					// Match found!
					firstCard.matched = true;
					card.matched = true;
					state.matchesFound++;
					playMatchSound();

					// Reset selections
					state.firstSelection = null;
					state.secondSelection = null;

					// Check for win
					if (state.matchesFound === state.totalPairs) {
						state.gameOver = true;
						playVictorySound();
					}
				} else {
					// No match - will flip back after delay
					state.waitingForFlip = true;
					playNoMatchSound();
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
		// Update elapsed time
		if (!state.gameOver) {
			state.elapsedTime = (Date.now() - state.startTime) / 1000;
		}

		// Handle flipping cards back after no match
		if (state.waitingForFlip && state.firstSelection !== null && state.secondSelection !== null) {
			// Render with revealed cards
			renderMemory(ctx, state, isFirstFrame);
			isFirstFrame = false;

			// Wait a bit to show the cards
			await sleep(800);

			// Flip cards back
			state.cards[state.firstSelection].revealed = false;
			state.cards[state.secondSelection].revealed = false;
			state.firstSelection = null;
			state.secondSelection = null;
			state.waitingForFlip = false;
		}

		// Render game
		renderMemory(ctx, state, isFirstFrame);
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
	ctx.terminal.writeln("");
}
