/**
 * Arkanoid game - Classic brick breaker game
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
 * Play paddle hit sound - short bounce
 */
function playPaddleHitSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sine";
		oscillator.frequency.setValueAtTime(440, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(
			220,
			ctx.currentTime + 0.08,
		);

		gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.08);
	} catch {
		// Audio not available
	}
}

/**
 * Play brick hit sound - satisfying crunch
 */
function playBrickHitSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "square";
		oscillator.frequency.setValueAtTime(600, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(
			200,
			ctx.currentTime + 0.1,
		);

		gainNode.gain.setValueAtTime(0.12, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.1);
	} catch {
		// Audio not available
	}
}

/**
 * Play brick destroyed sound - higher pitch
 */
function playBrickDestroySound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sawtooth";
		oscillator.frequency.setValueAtTime(800, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(
			1200,
			ctx.currentTime + 0.05,
		);
		oscillator.frequency.exponentialRampToValueAtTime(
			400,
			ctx.currentTime + 0.15,
		);

		gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.15);
	} catch {
		// Audio not available
	}
}

/**
 * Play wall bounce sound - subtle click
 */
function playWallBounceSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sine";
		oscillator.frequency.setValueAtTime(300, ctx.currentTime);

		gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.05);
	} catch {
		// Audio not available
	}
}

/**
 * Play ball launch sound
 */
function playLaunchSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "triangle";
		oscillator.frequency.setValueAtTime(220, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(
			440,
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
 * Play life lost sound - descending tone
 */
function playLifeLostSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sawtooth";
		oscillator.frequency.setValueAtTime(400, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(
			100,
			ctx.currentTime + 0.4,
		);

		gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.4);
	} catch {
		// Audio not available
	}
}

/**
 * Play level complete sound - ascending arpeggio
 */
function playLevelCompleteSound(): void {
	try {
		const ctx = getAudioContext();
		const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

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
		const notes = [392, 349.23, 329.63, 261.63]; // G4, F4, E4, C4

		notes.forEach((freq, i) => {
			const oscillator = ctx.createOscillator();
			const gainNode = ctx.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(ctx.destination);

			oscillator.type = "sawtooth";
			oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);

			gainNode.gain.setValueAtTime(0, ctx.currentTime + i * 0.15);
			gainNode.gain.linearRampToValueAtTime(
				0.1,
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

interface Brick {
	x: number;
	y: number;
	width: number;
	hits: number; // Number of hits remaining (0 = destroyed)
	color: string; // Character to display
}

interface ArkanoidState {
	// Game dimensions (in characters)
	width: number;
	height: number;
	// Paddle
	paddleX: number;
	paddleWidth: number;
	// Ball position and velocity
	ballX: number;
	ballY: number;
	ballVX: number;
	ballVY: number;
	// Bricks
	bricks: Brick[];
	// Score and lives
	score: number;
	lives: number;
	level: number;
	// Game state
	running: boolean;
	paused: boolean;
	gameOver: boolean;
	won: boolean;
	ballLaunched: boolean;
}

/**
 * Create bricks for a level
 */
function createBricks(level: number, width: number): Brick[] {
	const bricks: Brick[] = [];
	const brickWidth = 5;
	const brickRows = Math.min(3 + level, 6); // More rows as level increases
	const bricksPerRow = Math.floor((width - 4) / (brickWidth + 1));
	const startX = Math.floor((width - bricksPerRow * (brickWidth + 1)) / 2) + 1;

	// Different brick patterns based on level
	const colors = ["█", "▓", "▒", "░"];

	for (let row = 0; row < brickRows; row++) {
		for (let col = 0; col < bricksPerRow; col++) {
			// Higher rows have more hits
			const hits = Math.min(brickRows - row, 3);
			bricks.push({
				x: startX + col * (brickWidth + 1),
				y: 3 + row,
				width: brickWidth,
				hits: hits,
				color: colors[Math.min(hits - 1, colors.length - 1)],
			});
		}
	}

	return bricks;
}

/**
 * Reset ball to paddle
 */
function resetBall(state: ArkanoidState): void {
	state.ballX = state.paddleX + Math.floor(state.paddleWidth / 2);
	state.ballY = state.height - 3;
	state.ballVX = 0;
	state.ballVY = 0;
	state.ballLaunched = false;
}

/**
 * Launch the ball
 */
function launchBall(state: ArkanoidState): void {
	if (!state.ballLaunched) {
		state.ballVX = (Math.random() - 0.5) * 1.5;
		state.ballVY = -1;
		state.ballLaunched = true;
		playLaunchSound();
	}
}

/**
 * Get brick character based on hits remaining
 */
function getBrickChar(brick: Brick): string {
	if (brick.hits <= 0) return " ";
	if (brick.hits === 1) return "░";
	if (brick.hits === 2) return "▓";
	return "█";
}

/**
 * Render the arkanoid game
 */
function renderArkanoid(
	ctx: CommandContext,
	state: ArkanoidState,
	isFirstFrame: boolean,
): void {
	const lines: string[] = [];

	// Header
	const headerWidth = state.width;
	const title = "ARKANOID";
	const titlePadding = Math.floor((headerWidth - title.length) / 2);
	const titlePaddingRight = headerWidth - title.length - titlePadding;
	lines.push(`╔${"═".repeat(headerWidth)}╗`);
	lines.push(
		`║${" ".repeat(titlePadding)}${title}${" ".repeat(titlePaddingRight)}║`,
	);
	lines.push(`╚${"═".repeat(headerWidth)}╝`);

	// Score line
	const scoreText = `Score: ${state.score}`;
	const livesText = `Lives: ${"♥".repeat(state.lives)}`;
	const levelText = `Level: ${state.level}`;
	const infoLine = `${scoreText}  ${levelText}  ${livesText}`;
	const infoPadding = state.width - infoLine.length;
	lines.push(`${infoLine}${" ".repeat(Math.max(0, infoPadding))}`);

	// Top border
	lines.push(`┌${"─".repeat(state.width)}┐`);

	// Game area
	for (let y = 0; y < state.height; y++) {
		let line = "│";
		for (let x = 0; x < state.width; x++) {
			let char = " ";

			// Check for bricks
			for (const brick of state.bricks) {
				if (
					brick.hits > 0 &&
					y === brick.y &&
					x >= brick.x &&
					x < brick.x + brick.width
				) {
					char = getBrickChar(brick);
					break;
				}
			}

			// Paddle
			if (
				y === state.height - 2 &&
				x >= state.paddleX &&
				x < state.paddleX + state.paddleWidth
			) {
				char = "═";
			}

			// Ball
			if (Math.round(state.ballX) === x && Math.round(state.ballY) === y) {
				char = "●";
			}

			line += char;
		}
		line += "│";
		lines.push(line);
	}

	// Bottom border
	lines.push(`└${"─".repeat(state.width)}┘`);

	// Status line
	let statusLine: string;
	if (state.gameOver) {
		if (state.won) {
			statusLine = "  YOU WIN! Press SPACE to play again, Q to quit";
		} else {
			statusLine = "  GAME OVER! Press SPACE to restart, Q to quit";
		}
	} else if (state.paused) {
		statusLine = "  PAUSED - Press P to continue";
	} else if (!state.ballLaunched) {
		statusLine = "  Press SPACE to launch ball  |  ←/→ = Move  |  Q = Quit";
	} else {
		statusLine = "  ←/→ = Move paddle  |  P = Pause  |  Q = Quit";
	}
	lines.push(statusLine.padEnd(state.width + 2));

	// Render
	if (isFirstFrame) {
		ctx.terminal.clear();
	}

	ctx.terminal.write("\x1b[H");

	for (const line of lines) {
		ctx.terminal.writeln(line);
	}
}

/**
 * Check collision between ball and a brick
 */
function checkBrickCollision(
	state: ArkanoidState,
	brick: Brick,
): { hit: boolean; side: "top" | "bottom" | "left" | "right" | null } {
	if (brick.hits <= 0) return { hit: false, side: null };

	const ballX = Math.round(state.ballX);
	const ballY = Math.round(state.ballY);

	// Check if ball is within brick bounds
	if (ballY === brick.y && ballX >= brick.x && ballX < brick.x + brick.width) {
		// Determine which side was hit based on velocity
		if (state.ballVY > 0) {
			return { hit: true, side: "top" };
		}
		return { hit: true, side: "bottom" };
	}

	// Check side collisions (ball at same height as brick)
	if (ballY === brick.y) {
		if (ballX === brick.x - 1 && state.ballVX > 0) {
			return { hit: true, side: "left" };
		}
		if (ballX === brick.x + brick.width && state.ballVX < 0) {
			return { hit: true, side: "right" };
		}
	}

	return { hit: false, side: null };
}

/**
 * Arkanoid game command handler
 */
export async function arkanoidCommand(ctx: CommandContext): Promise<void> {
	// Check if key handler is available
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln(
			"arkanoid: error - terminal does not support game input",
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
	const GAME_WIDTH = 50;
	const GAME_HEIGHT = 22;
	const PADDLE_WIDTH = 8;
	const INITIAL_LIVES = 3;
	const FRAME_DELAY = 50;

	// Initialize game state
	const state: ArkanoidState = {
		width: GAME_WIDTH,
		height: GAME_HEIGHT,
		paddleX: Math.floor(GAME_WIDTH / 2) - Math.floor(PADDLE_WIDTH / 2),
		paddleWidth: PADDLE_WIDTH,
		ballX: 0,
		ballY: 0,
		ballVX: 0,
		ballVY: 0,
		bricks: createBricks(1, GAME_WIDTH),
		score: 0,
		lives: INITIAL_LIVES,
		level: 1,
		running: true,
		paused: false,
		gameOver: false,
		won: false,
		ballLaunched: false,
	};

	resetBall(state);

	// Key state
	const keys = {
		arrowLeft: false,
		arrowRight: false,
	};

	// Set up key handler
	const keyHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
	) => {
		const isDown = eventType === "keydown";

		// Arrow keys for paddle
		if (key === "ArrowLeft" || keyCode === 37) {
			keys.arrowLeft = isDown;
		}
		if (key === "ArrowRight" || keyCode === 39) {
			keys.arrowRight = isDown;
		}

		// Only handle these on keydown
		if (isDown) {
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
			// Space to launch ball or restart
			if (key === " " || keyCode === 32) {
				if (state.gameOver) {
					// Restart game
					state.bricks = createBricks(1, GAME_WIDTH);
					state.score = 0;
					state.lives = INITIAL_LIVES;
					state.level = 1;
					state.gameOver = false;
					state.won = false;
					state.paddleX =
						Math.floor(GAME_WIDTH / 2) - Math.floor(PADDLE_WIDTH / 2);
					resetBall(state);
				} else if (!state.ballLaunched) {
					launchBall(state);
				}
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
		if (!state.paused && !state.gameOver) {
			// Move paddle
			const paddleSpeed = 2;
			if (keys.arrowLeft && state.paddleX > 0) {
				state.paddleX = Math.max(0, state.paddleX - paddleSpeed);
			}
			if (keys.arrowRight && state.paddleX < state.width - state.paddleWidth) {
				state.paddleX = Math.min(
					state.width - state.paddleWidth,
					state.paddleX + paddleSpeed,
				);
			}

			// If ball not launched, keep it on paddle
			if (!state.ballLaunched) {
				state.ballX = state.paddleX + Math.floor(state.paddleWidth / 2);
				state.ballY = state.height - 3;
			} else {
				// Update ball position
				state.ballX += state.ballVX;
				state.ballY += state.ballVY;

				// Ball collision with walls
				if (state.ballX <= 0 || state.ballX >= state.width - 1) {
					state.ballVX = -state.ballVX;
					state.ballX = Math.max(0, Math.min(state.width - 1, state.ballX));
					playWallBounceSound();
				}

				// Ball collision with ceiling
				if (state.ballY <= 0) {
					state.ballVY = Math.abs(state.ballVY);
					state.ballY = 0;
					playWallBounceSound();
				}

				// Ball collision with paddle
				if (
					state.ballY >= state.height - 3 &&
					state.ballY <= state.height - 2 &&
					state.ballX >= state.paddleX - 1 &&
					state.ballX <= state.paddleX + state.paddleWidth
				) {
					state.ballVY = -Math.abs(state.ballVY);
					// Add some angle based on where it hit the paddle
					const hitPos = (state.ballX - state.paddleX) / state.paddleWidth;
					state.ballVX = (hitPos - 0.5) * 2.5;
					state.ballY = state.height - 3;
					playPaddleHitSound();
				}

				// Ball collision with bricks
				for (const brick of state.bricks) {
					const collision = checkBrickCollision(state, brick);
					if (collision.hit) {
						brick.hits--;
						state.score += 10 * state.level;

						// Play appropriate sound
						if (brick.hits <= 0) {
							playBrickDestroySound();
						} else {
							playBrickHitSound();
						}

						// Reflect ball based on collision side
						if (collision.side === "top" || collision.side === "bottom") {
							state.ballVY = -state.ballVY;
						} else {
							state.ballVX = -state.ballVX;
						}
						break; // Only one collision per frame
					}
				}

				// Ball falls below paddle
				if (state.ballY >= state.height - 1) {
					state.lives--;
					if (state.lives <= 0) {
						state.gameOver = true;
						state.won = false;
						playGameOverSound();
					} else {
						playLifeLostSound();
						resetBall(state);
					}
				}

				// Check for level completion
				const remainingBricks = state.bricks.filter((b) => b.hits > 0);
				if (remainingBricks.length === 0) {
					state.level++;
					playLevelCompleteSound();
					if (state.level > 5) {
						// Won the game!
						state.gameOver = true;
						state.won = true;
					} else {
						// Next level
						state.bricks = createBricks(state.level, GAME_WIDTH);
						resetBall(state);
					}
				}
			}
		}

		// Render game
		renderArkanoid(ctx, state, isFirstFrame);
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
