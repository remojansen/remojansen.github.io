/**
 * Pong game - Classic arcade game with AI opponent
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
 * Play paddle hit sound - classic pong blip
 */
function playPaddleHitSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "square";
		oscillator.frequency.setValueAtTime(440, ctx.currentTime);

		gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.1);
	} catch {
		// Audio not available
	}
}

/**
 * Play wall bounce sound - higher pitched blip
 */
function playWallBounceSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "square";
		oscillator.frequency.setValueAtTime(220, ctx.currentTime);

		gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.08);
	} catch {
		// Audio not available
	}
}

/**
 * Play score sound - ascending tone for player, descending for CPU
 */
function playScoreSound(playerScored: boolean): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sine";
		
		if (playerScored) {
			// Ascending happy tone
			oscillator.frequency.setValueAtTime(330, ctx.currentTime);
			oscillator.frequency.setValueAtTime(440, ctx.currentTime + 0.1);
			oscillator.frequency.setValueAtTime(550, ctx.currentTime + 0.2);
		} else {
			// Descending sad tone
			oscillator.frequency.setValueAtTime(330, ctx.currentTime);
			oscillator.frequency.setValueAtTime(280, ctx.currentTime + 0.1);
			oscillator.frequency.setValueAtTime(220, ctx.currentTime + 0.2);
		}

		gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.3);
	} catch {
		// Audio not available
	}
}

/**
 * Play game over sound
 */
function playGameOverSound(playerWon: boolean): void {
	try {
		const ctx = getAudioContext();
		
		if (playerWon) {
			// Victory fanfare
			const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
			notes.forEach((freq, i) => {
				const oscillator = ctx.createOscillator();
				const gainNode = ctx.createGain();

				oscillator.connect(gainNode);
				gainNode.connect(ctx.destination);

				oscillator.type = "sine";
				oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);

				gainNode.gain.setValueAtTime(0, ctx.currentTime + i * 0.12);
				gainNode.gain.linearRampToValueAtTime(0.15, ctx.currentTime + i * 0.12 + 0.02);
				gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.12 + 0.2);

				oscillator.start(ctx.currentTime + i * 0.12);
				oscillator.stop(ctx.currentTime + i * 0.12 + 0.2);
			});
		} else {
			// Defeat sound
			const notes = [392, 349.23, 329.63, 261.63]; // G4, F4, E4, C4
			notes.forEach((freq, i) => {
				const oscillator = ctx.createOscillator();
				const gainNode = ctx.createGain();

				oscillator.connect(gainNode);
				gainNode.connect(ctx.destination);

				oscillator.type = "sawtooth";
				oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);

				gainNode.gain.setValueAtTime(0, ctx.currentTime + i * 0.15);
				gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + i * 0.15 + 0.02);
				gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.15 + 0.2);

				oscillator.start(ctx.currentTime + i * 0.15);
				oscillator.stop(ctx.currentTime + i * 0.15 + 0.2);
			});
		}
	} catch {
		// Audio not available
	}
}

// ============================================
// Game Types and State
// ============================================

interface PongState {
	// Game dimensions (in characters)
	width: number;
	height: number;
	// Paddle positions (Y coordinate of top of paddle)
	leftPaddleY: number;
	rightPaddleY: number;
	paddleHeight: number;
	// Ball position and velocity
	ballX: number;
	ballY: number;
	ballVX: number;
	ballVY: number;
	// Score
	leftScore: number;
	rightScore: number;
	// Game state
	running: boolean;
	paused: boolean;
	gameOver: boolean;
	winner: string;
}

/**
 * Reset ball to center
 */
function resetBall(state: PongState): void {
	state.ballX = Math.floor(state.width / 2);
	state.ballY = Math.floor(state.height / 2);
	// Randomize direction
	state.ballVX = Math.random() > 0.5 ? 1 : -1;
	state.ballVY = (Math.random() - 0.5) * 1.5;
}

/**
 * Render the pong game - builds the entire frame as a single string for efficiency
 */
function renderPong(
	ctx: CommandContext,
	state: PongState,
	isFirstFrame: boolean,
): void {
	// Build the entire frame as an array of lines
	const lines: string[] = [];

	// Header - width matches game area (state.width + 2 for borders)
	const headerWidth = state.width;
	const pongTitle = "PONG";
	const pongPadding = Math.floor((headerWidth - pongTitle.length) / 2);
	const pongPaddingRight = headerWidth - pongTitle.length - pongPadding;
	lines.push(`╔${"═".repeat(headerWidth)}╗`);
	lines.push(
		`║${" ".repeat(pongPadding)}${pongTitle}${" ".repeat(pongPaddingRight)}║`,
	);
	lines.push(`╚${"═".repeat(headerWidth)}╝`);

	// Score line
	const scoreLeft = `CPU: ${state.leftScore}`;
	const scoreRight = `Player: ${state.rightScore}`;
	const scorePadding = state.width - scoreLeft.length - scoreRight.length;
	lines.push(
		`${scoreLeft}${" ".repeat(Math.max(0, scorePadding))}${scoreRight}`,
	);

	// Top border
	lines.push(`┌${"─".repeat(state.width)}┐`);

	// Game area
	for (let y = 0; y < state.height; y++) {
		let line = "│";
		for (let x = 0; x < state.width; x++) {
			// Left paddle
			if (
				x === 1 &&
				y >= state.leftPaddleY &&
				y < state.leftPaddleY + state.paddleHeight
			) {
				line += "█";
			}
			// Right paddle
			else if (
				x === state.width - 2 &&
				y >= state.rightPaddleY &&
				y < state.rightPaddleY + state.paddleHeight
			) {
				line += "█";
			}
			// Ball
			else if (Math.round(state.ballX) === x && Math.round(state.ballY) === y) {
				line += "●";
			}
			// Center line
			else if (x === Math.floor(state.width / 2) && y % 2 === 0) {
				line += "┊";
			}
			// Empty space
			else {
				line += " ";
			}
		}
		line += "│";
		lines.push(line);
	}

	// Bottom border
	lines.push(`└${"─".repeat(state.width)}┘`);

	// Status line - pad to fixed width to overwrite previous content
	let statusLine: string;
	if (state.gameOver) {
		statusLine = `  GAME OVER! ${state.winner} WINS! Press SPACE to restart, Q to quit`;
	} else if (state.paused) {
		statusLine = "  PAUSED - Press P to continue";
	} else {
		statusLine = "  ↑/↓ = Move paddle  |  P = Pause  |  Q = Quit";
	}
	// Pad to ensure we overwrite previous content
	lines.push(statusLine.padEnd(state.width + 2));

	// Only clear on first frame, then use cursor positioning
	if (isFirstFrame) {
		ctx.terminal.clear();
	}

	// Write all lines - terminal.write with ANSI codes to move cursor home
	// \x1b[H moves cursor to home (top-left)
	// \x1b[J clears from cursor to end of screen (optional)
	ctx.terminal.write("\x1b[H"); // Move cursor to top-left

	for (const line of lines) {
		ctx.terminal.writeln(line);
	}
}

/**
 * Pong game command handler
 */
export async function pongCommand(ctx: CommandContext): Promise<void> {
	// Check if key handler is available
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln("pong: error - terminal does not support game input");
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
	const GAME_WIDTH = 60;
	const GAME_HEIGHT = 20;
	const PADDLE_HEIGHT = 4;
	const WIN_SCORE = 5;
	const FRAME_DELAY = 80; // ms between frames

	// Initialize game state
	const state: PongState = {
		width: GAME_WIDTH,
		height: GAME_HEIGHT,
		leftPaddleY: Math.floor(GAME_HEIGHT / 2) - Math.floor(PADDLE_HEIGHT / 2),
		rightPaddleY: Math.floor(GAME_HEIGHT / 2) - Math.floor(PADDLE_HEIGHT / 2),
		paddleHeight: PADDLE_HEIGHT,
		ballX: Math.floor(GAME_WIDTH / 2),
		ballY: Math.floor(GAME_HEIGHT / 2),
		ballVX: 1,
		ballVY: 0.5,
		leftScore: 0,
		rightScore: 0,
		running: true,
		paused: false,
		gameOver: false,
		winner: "",
	};

	// Key state (only for player - right paddle)
	const keys = {
		arrowUp: false,
		arrowDown: false,
	};

	// Set up key handler - tracks both keydown and keyup for smooth movement
	const keyHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
	) => {
		const isDown = eventType === "keydown";

		// Arrow keys for right paddle (player)
		if (key === "ArrowUp" || keyCode === 38) {
			keys.arrowUp = isDown;
		}
		if (key === "ArrowDown" || keyCode === 40) {
			keys.arrowDown = isDown;
		}

		// Only handle these on keydown
		if (isDown) {
			// Q to quit
			if (key === "q" || key === "Q" || keyCode === 81) {
				state.running = false;
			}
			// P to pause/unpause
			if (key === "p" || key === "P" || keyCode === 80) {
				state.paused = !state.paused;
			}
			// Space to restart after game over
			if ((key === " " || keyCode === 32) && state.gameOver) {
				resetBall(state);
				state.leftScore = 0;
				state.rightScore = 0;
				state.gameOver = false;
				state.winner = "";
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
			// AI for left paddle - track the ball with some delay/imperfection
			const paddleCenter = state.leftPaddleY + state.paddleHeight / 2;
			const targetY = state.ballY;

			// Only move if ball is coming towards AI (moving left)
			if (state.ballVX < 0) {
				// Add some reaction delay - AI moves slower than perfect tracking
				if (
					paddleCenter < targetY - 0.5 &&
					state.leftPaddleY < state.height - state.paddleHeight
				) {
					state.leftPaddleY += 0.8; // Slightly slower than ball
				} else if (paddleCenter > targetY + 0.5 && state.leftPaddleY > 0) {
					state.leftPaddleY -= 0.8;
				}
			} else {
				// When ball moving away, slowly return to center
				const centerY = state.height / 2 - state.paddleHeight / 2;
				if (state.leftPaddleY < centerY - 1) {
					state.leftPaddleY += 0.3;
				} else if (state.leftPaddleY > centerY + 1) {
					state.leftPaddleY -= 0.3;
				}
			}

			// Clamp AI paddle position
			state.leftPaddleY = Math.max(
				0,
				Math.min(state.height - state.paddleHeight, state.leftPaddleY),
			);

			// Player controls right paddle
			if (keys.arrowUp && state.rightPaddleY > 0) {
				state.rightPaddleY--;
			}
			if (
				keys.arrowDown &&
				state.rightPaddleY < state.height - state.paddleHeight
			) {
				state.rightPaddleY++;
			}

			// Update ball position
			state.ballX += state.ballVX;
			state.ballY += state.ballVY;

			// Ball collision with top/bottom walls
			if (state.ballY <= 0 || state.ballY >= state.height - 1) {
				state.ballVY = -state.ballVY;
				state.ballY = Math.max(0, Math.min(state.height - 1, state.ballY));
				playWallBounceSound();
			}

			// Ball collision with left paddle
			if (state.ballX <= 2 && state.ballX >= 1) {
				if (
					state.ballY >= state.leftPaddleY &&
					state.ballY < state.leftPaddleY + state.paddleHeight
				) {
					state.ballVX = Math.abs(state.ballVX); // Ensure ball goes right
					// Add some angle based on where it hit the paddle
					const hitPos = (state.ballY - state.leftPaddleY) / state.paddleHeight;
					state.ballVY = (hitPos - 0.5) * 2;
					playPaddleHitSound();
				}
			}

			// Ball collision with right paddle
			if (state.ballX >= state.width - 3 && state.ballX <= state.width - 2) {
				if (
					state.ballY >= state.rightPaddleY &&
					state.ballY < state.rightPaddleY + state.paddleHeight
				) {
					state.ballVX = -Math.abs(state.ballVX); // Ensure ball goes left
					// Add some angle based on where it hit the paddle
					const hitPos =
						(state.ballY - state.rightPaddleY) / state.paddleHeight;
					state.ballVY = (hitPos - 0.5) * 2;
					playPaddleHitSound();
				}
			}

			// Ball out of bounds - scoring
			if (state.ballX <= 0) {
				state.rightScore++;
				if (state.rightScore >= WIN_SCORE) {
					state.gameOver = true;
					state.winner = "PLAYER";
					playGameOverSound(true);
				} else {
					playScoreSound(true);
					resetBall(state);
				}
			}
			if (state.ballX >= state.width - 1) {
				state.leftScore++;
				if (state.leftScore >= WIN_SCORE) {
					state.gameOver = true;
					state.winner = "CPU";
					playGameOverSound(false);
				} else {
					playScoreSound(false);
					resetBall(state);
				}
			}
		}

		// Render game
		renderPong(ctx, state, isFirstFrame);
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
	ctx.terminal.writeln("");
}
