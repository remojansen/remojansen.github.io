/**
 * Flappy Bird - Classic arcade game where you guide a bird through pipes
 */

import type { CommandContext, KeyHandler } from "./ShellEmulator";
import { sleep } from "./ShellEmulator";

// ============================================
// Sound Effects using Web Audio API
// ============================================

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
	if (!audioContext) {
		audioContext = new (window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
	}
	return audioContext;
}

/**
 * Play flap/jump sound
 */
function playFlapSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sine";
		oscillator.frequency.setValueAtTime(400, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1);

		gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.1);
	} catch {
		// Audio not available
	}
}

/**
 * Play score sound - when passing through pipes
 */
function playScoreSound(): void {
	try {
		const ctx = getAudioContext();
		const notes = [523.25, 659.25]; // C5, E5

		notes.forEach((freq, i) => {
			const oscillator = ctx.createOscillator();
			const gainNode = ctx.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(ctx.destination);

			oscillator.type = "sine";
			oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);

			gainNode.gain.setValueAtTime(0, ctx.currentTime + i * 0.1);
			gainNode.gain.linearRampToValueAtTime(0.12, ctx.currentTime + i * 0.1 + 0.02);
			gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.15);

			oscillator.start(ctx.currentTime + i * 0.1);
			oscillator.stop(ctx.currentTime + i * 0.1 + 0.15);
		});
	} catch {
		// Audio not available
	}
}

/**
 * Play game over sound - crash/death
 */
function playGameOverSound(): void {
	try {
		const ctx = getAudioContext();

		// Create noise burst for crash effect
		const bufferSize = ctx.sampleRate * 0.2;
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
		filter.frequency.setValueAtTime(800, ctx.currentTime);
		filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);

		noise.connect(filter);
		filter.connect(gainNode);
		gainNode.connect(ctx.destination);

		gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

		noise.start(ctx.currentTime);
		noise.stop(ctx.currentTime + 0.2);

		// Add descending tone
		const notes = [300, 250, 200, 150];
		notes.forEach((freq, i) => {
			const oscillator = ctx.createOscillator();
			const gain = ctx.createGain();

			oscillator.connect(gain);
			gain.connect(ctx.destination);

			oscillator.type = "sawtooth";
			oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);

			gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.1);
			gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + i * 0.1 + 0.02);
			gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.15);

			oscillator.start(ctx.currentTime + i * 0.1);
			oscillator.stop(ctx.currentTime + i * 0.1 + 0.15);
		});
	} catch {
		// Audio not available
	}
}

/**
 * Play high score sound - celebratory
 */
function playHighScoreSound(): void {
	try {
		const ctx = getAudioContext();
		const notes = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50]; // C5, E5, G5, C6, G5, C6

		notes.forEach((freq, i) => {
			const oscillator = ctx.createOscillator();
			const gainNode = ctx.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(ctx.destination);

			oscillator.type = "sine";
			oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);

			gainNode.gain.setValueAtTime(0, ctx.currentTime + i * 0.1);
			gainNode.gain.linearRampToValueAtTime(0.12, ctx.currentTime + i * 0.1 + 0.02);
			gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.15);

			oscillator.start(ctx.currentTime + i * 0.1);
			oscillator.stop(ctx.currentTime + i * 0.1 + 0.15);
		});
	} catch {
		// Audio not available
	}
}

// ============================================
// Game Types and State
// ============================================

interface Pipe {
	x: number;
	gapY: number; // Center of the gap
	scored: boolean;
}

interface FlappyState {
	// Game dimensions (in characters)
	width: number;
	height: number;
	// Bird position and velocity
	birdY: number;
	birdVelocity: number;
	// Pipes
	pipes: Pipe[];
	// Score
	score: number;
	highScore: number;
	// Game state
	running: boolean;
	paused: boolean;
	gameOver: boolean;
	started: boolean; // Whether the game has started (first flap)
	// Frame counter for pipe spawning
	frameCount: number;
}

// Game constants
const GRAVITY = 0.4;
const FLAP_STRENGTH = -2.5;
const PIPE_WIDTH = 6;
const PIPE_GAP = 8; // Vertical gap size for bird to pass through
const PIPE_SPACING = 25; // Horizontal distance between pipes
const PIPE_SPEED = 1;
const BIRD_X = 10; // Fixed X position of bird
const FRAME_DELAY = 50; // ms between frames

/**
 * Spawn a new pipe at the right edge of the screen
 */
function spawnPipe(state: FlappyState): void {
	// Random gap position (ensuring it's not too close to top/bottom)
	const minGapY = Math.floor(PIPE_GAP / 2) + 2;
	const maxGapY = state.height - Math.floor(PIPE_GAP / 2) - 2;
	const gapY = Math.floor(Math.random() * (maxGapY - minGapY)) + minGapY;

	state.pipes.push({
		x: state.width,
		gapY,
		scored: false,
	});
}

/**
 * Reset flappy bird game state
 */
function resetFlappyGame(state: FlappyState, width: number, height: number): void {
	state.birdY = Math.floor(height / 2);
	state.birdVelocity = 0;
	state.pipes = [];
	state.score = 0;
	state.gameOver = false;
	state.paused = false;
	state.started = false;
	state.frameCount = 0;

	// Spawn initial pipe
	spawnPipe(state);
}

/**
 * Update high score if current score is higher
 */
function updateHighScore(state: FlappyState): void {
	if (state.score > state.highScore) {
		state.highScore = state.score;
		try {
			localStorage.setItem("flappybird_high_score", state.highScore.toString());
		} catch {
			// Ignore localStorage errors
		}
	}
}

/**
 * Check collision between bird and pipes or boundaries
 */
function checkCollision(state: FlappyState): boolean {
	// Check ceiling/floor collision
	if (state.birdY <= 0 || state.birdY >= state.height - 1) {
		return true;
	}

	// Check pipe collision
	for (const pipe of state.pipes) {
		// Check if bird is horizontally within pipe
		if (BIRD_X >= pipe.x - 1 && BIRD_X <= pipe.x + PIPE_WIDTH) {
			// Check if bird is outside the gap
			const gapTop = pipe.gapY - Math.floor(PIPE_GAP / 2);
			const gapBottom = pipe.gapY + Math.floor(PIPE_GAP / 2);

			if (state.birdY <= gapTop || state.birdY >= gapBottom) {
				return true;
			}
		}
	}

	return false;
}

/**
 * Render the flappy bird game
 */
function renderFlappy(ctx: CommandContext, state: FlappyState, isFirstFrame: boolean): void {
	const lines: string[] = [];

	// Header
	const headerWidth = state.width;
	const title = "FLAPPY BIRD";
	const titlePadding = Math.floor((headerWidth - title.length) / 2);
	const titlePaddingRight = headerWidth - title.length - titlePadding;
	lines.push(`╔${"═".repeat(headerWidth)}╗`);
	lines.push(`║${" ".repeat(titlePadding)}${title}${" ".repeat(titlePaddingRight)}║`);
	lines.push(`╚${"═".repeat(headerWidth)}╝`);

	// Score line
	const scoreStr = `Score: ${state.score}`;
	const highScoreStr = `High: ${state.highScore}`;
	const scorePadding = state.width - scoreStr.length - highScoreStr.length;
	lines.push(`${scoreStr}${" ".repeat(Math.max(2, scorePadding))}${highScoreStr}`);

	// Top border
	lines.push(`┌${"─".repeat(state.width)}┐`);

	// Create a grid for efficient rendering
	const grid: string[][] = [];
	for (let y = 0; y < state.height; y++) {
		grid[y] = [];
		for (let x = 0; x < state.width; x++) {
			grid[y][x] = " ";
		}
	}

	// Draw pipes
	for (const pipe of state.pipes) {
		const gapTop = pipe.gapY - Math.floor(PIPE_GAP / 2);
		const gapBottom = pipe.gapY + Math.floor(PIPE_GAP / 2);

		for (let x = Math.max(0, pipe.x); x < Math.min(state.width, pipe.x + PIPE_WIDTH); x++) {
			// Draw top pipe
			for (let y = 0; y < gapTop; y++) {
				if (x === pipe.x || x === pipe.x + PIPE_WIDTH - 1) {
					grid[y][x] = "│";
				} else if (y === gapTop - 1) {
					grid[y][x] = "█";
				} else {
					grid[y][x] = "█";
				}
			}
			// Draw pipe cap (top)
			if (gapTop > 0 && gapTop - 1 < state.height) {
				grid[gapTop - 1][x] = "▄";
			}

			// Draw bottom pipe
			for (let y = gapBottom; y < state.height; y++) {
				if (x === pipe.x || x === pipe.x + PIPE_WIDTH - 1) {
					grid[y][x] = "│";
				} else {
					grid[y][x] = "█";
				}
			}
			// Draw pipe cap (bottom)
			if (gapBottom < state.height) {
				grid[gapBottom][x] = "▀";
			}
		}
	}

	// Draw bird
	const birdY = Math.round(state.birdY);
	if (birdY >= 0 && birdY < state.height && BIRD_X >= 0 && BIRD_X < state.width) {
		grid[birdY][BIRD_X] = "●";
	}

	// Game area
	for (let y = 0; y < state.height; y++) {
		lines.push(`│${grid[y].join("")}│`);
	}

	// Bottom border
	lines.push(`└${"─".repeat(state.width)}┘`);

	// Status line
	const STATUS_WIDTH = 50;
	let statusLine: string;
	if (state.gameOver) {
		statusLine = "  GAME OVER! Press SPACE to restart, Q to quit";
	} else if (state.paused) {
		statusLine = "  PAUSED - Press P to continue";
	} else if (!state.started) {
		statusLine = "  Press SPACE to flap  |  P = Pause  |  Q = Quit";
	} else {
		statusLine = "  SPACE = Flap  |  P = Pause  |  Q = Quit";
	}
	lines.push(statusLine.padEnd(STATUS_WIDTH));

	// Only clear on first frame
	if (isFirstFrame) {
		ctx.terminal.clear();
	}

	// Move cursor to top-left and render
	ctx.terminal.write("\x1b[H");

	for (const line of lines) {
		ctx.terminal.writeln(line);
	}
}

/**
 * Flappy Bird game command handler
 */
export async function flappyBirdCommand(ctx: CommandContext): Promise<void> {
	// Check if key handler is available
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln("flappybird: error - terminal does not support game input");
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
	const GAME_WIDTH = 50;
	const GAME_HEIGHT = 20;

	// Try to load high score from localStorage
	let savedHighScore = 0;
	try {
		const saved = localStorage.getItem("flappybird_high_score");
		if (saved) savedHighScore = parseInt(saved, 10);
	} catch {
		// Ignore localStorage errors
	}

	// Initialize game state
	const state: FlappyState = {
		width: GAME_WIDTH,
		height: GAME_HEIGHT,
		birdY: Math.floor(GAME_HEIGHT / 2),
		birdVelocity: 0,
		pipes: [],
		score: 0,
		highScore: savedHighScore,
		running: true,
		paused: false,
		gameOver: false,
		started: false,
		frameCount: 0,
	};

	// Spawn initial pipe
	spawnPipe(state);

	// Track if flap was pressed this frame
	let flapPressed = false;

	// Set up key handler
	const keyHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
	) => {
		if (eventType !== "keydown") return;

		// Space to flap
		if (key === " " || keyCode === 32) {
			if (state.gameOver) {
				resetFlappyGame(state, GAME_WIDTH, GAME_HEIGHT);
			} else if (!state.paused) {
				flapPressed = true;
				if (!state.started) {
					state.started = true;
				}
			}
		}

		// Arrow Up or W to flap (alternative)
		if (key === "ArrowUp" || key === "w" || key === "W" || keyCode === 38 || keyCode === 87) {
			if (!state.gameOver && !state.paused) {
				flapPressed = true;
				if (!state.started) {
					state.started = true;
				}
			}
		}

		// Q to quit
		if (key === "q" || key === "Q" || keyCode === 81) {
			state.running = false;
		}

		// P to pause/unpause
		if (key === "p" || key === "P" || keyCode === 80) {
			if (!state.gameOver) {
				state.paused = !state.paused;
			}
		}
	};

	ctx.terminal.setKeyHandler(keyHandler);

	// Clear screen once at start
	ctx.terminal.clear();

	// Track first frame
	let isFirstFrame = true;

	// Game loop
	while (state.running) {
		if (!state.paused && !state.gameOver && state.started) {
			// Handle flap
			if (flapPressed) {
				state.birdVelocity = FLAP_STRENGTH;
				playFlapSound();
				flapPressed = false;
			}

			// Apply gravity
			state.birdVelocity += GRAVITY;
			state.birdY += state.birdVelocity;

			// Update pipes
			for (const pipe of state.pipes) {
				pipe.x -= PIPE_SPEED;

				// Check if bird passed the pipe
				if (!pipe.scored && pipe.x + PIPE_WIDTH < BIRD_X) {
					pipe.scored = true;
					state.score++;
					playScoreSound();
				}
			}

			// Remove off-screen pipes
			state.pipes = state.pipes.filter((pipe) => pipe.x + PIPE_WIDTH > -1);

			// Spawn new pipes
			state.frameCount++;
			if (state.frameCount >= PIPE_SPACING) {
				state.frameCount = 0;
				spawnPipe(state);
			}

			// Check collision
			if (checkCollision(state)) {
				state.gameOver = true;
				updateHighScore(state);
				playGameOverSound();
			}
		} else if (!state.started) {
			// Bird hovers before game starts
			state.birdY = Math.floor(state.height / 2) + Math.sin(Date.now() / 200) * 0.5;

			// Handle flap to start
			if (flapPressed) {
				flapPressed = false;
			}
		}

		// Reset flap pressed each frame
		flapPressed = false;

		// Render game
		renderFlappy(ctx, state, isFirstFrame);
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
	ctx.terminal.writeln(`Final Score: ${state.score}`);
	if (state.score === state.highScore && state.score > 0) {
		ctx.terminal.writeln("NEW HIGH SCORE!");
		playHighScoreSound();
	}
	ctx.terminal.writeln("");
}
