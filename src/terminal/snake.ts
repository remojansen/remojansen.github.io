/**
 * Snake game - Classic arcade snake game
 */

import type { CommandContext, KeyHandler } from "./ShellEmulator";
import { sleep } from "./ShellEmulator";

interface SnakeSegment {
	x: number;
	y: number;
}

interface SnakeState {
	// Game dimensions (in characters)
	width: number;
	height: number;
	// Snake body (head is first element)
	snake: SnakeSegment[];
	// Current direction
	direction: "up" | "down" | "left" | "right";
	// Next direction (queued from input)
	nextDirection: "up" | "down" | "left" | "right";
	// Food position
	foodX: number;
	foodY: number;
	// Score
	score: number;
	highScore: number;
	// Game state
	running: boolean;
	paused: boolean;
	gameOver: boolean;
	// Speed (frames per move)
	speed: number;
	frameCount: number;
}

/**
 * Spawn food at a random location not occupied by the snake
 */
function spawnFood(state: SnakeState): void {
	let x: number, y: number;
	let attempts = 0;
	const maxAttempts = 1000;

	do {
		x = Math.floor(Math.random() * state.width);
		y = Math.floor(Math.random() * state.height);
		attempts++;
	} while (
		attempts < maxAttempts &&
		state.snake.some((seg) => seg.x === x && seg.y === y)
	);

	state.foodX = x;
	state.foodY = y;
}

/**
 * Reset snake game state
 */
function resetSnakeGame(
	state: SnakeState,
	width: number,
	height: number,
	initialSpeed: number,
): void {
	state.snake = [
		{ x: Math.floor(width / 2), y: Math.floor(height / 2) },
		{ x: Math.floor(width / 2) - 1, y: Math.floor(height / 2) },
		{ x: Math.floor(width / 2) - 2, y: Math.floor(height / 2) },
	];
	state.direction = "right";
	state.nextDirection = "right";
	state.score = 0;
	state.gameOver = false;
	state.paused = false;
	state.speed = initialSpeed;
	state.frameCount = 0;
	spawnFood(state);
}

/**
 * Update high score if current score is higher
 */
function updateHighScore(state: SnakeState): void {
	if (state.score > state.highScore) {
		state.highScore = state.score;
		try {
			localStorage.setItem("snake_high_score", state.highScore.toString());
		} catch {
			// Ignore localStorage errors
		}
	}
}

/**
 * Render the snake game - builds the entire frame as a single string for efficiency
 */
function renderSnake(
	ctx: CommandContext,
	state: SnakeState,
	isFirstFrame: boolean,
): void {
	// Build the entire frame as an array of lines
	const lines: string[] = [];

	// Header - width matches game area (state.width + 2 for borders)
	const headerWidth = state.width;
	const snakeTitle = "SNAKE";
	const snakePadding = Math.floor((headerWidth - snakeTitle.length) / 2);
	const snakePaddingRight = headerWidth - snakeTitle.length - snakePadding;
	lines.push(`╔${"═".repeat(headerWidth)}╗`);
	lines.push(
		`║${" ".repeat(snakePadding)}${snakeTitle}${" ".repeat(snakePaddingRight)}║`,
	);
	lines.push(`╚${"═".repeat(headerWidth)}╝`);

	// Score line
	const scoreStr = `Score: ${state.score}`;
	const highScoreStr = `High: ${state.highScore}`;
	const scorePadding = state.width - scoreStr.length - highScoreStr.length;
	lines.push(
		`${scoreStr}${" ".repeat(Math.max(2, scorePadding))}${highScoreStr}`,
	);

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

	// Place food
	grid[state.foodY][state.foodX] = "◆";

	// Place snake
	for (let i = 0; i < state.snake.length; i++) {
		const seg = state.snake[i];
		if (
			seg.x >= 0 &&
			seg.x < state.width &&
			seg.y >= 0 &&
			seg.y < state.height
		) {
			if (i === 0) {
				// Head
				grid[seg.y][seg.x] = "@";
			} else {
				// Body
				grid[seg.y][seg.x] = "█";
			}
		}
	}

	// Game area
	for (let y = 0; y < state.height; y++) {
		lines.push(`│${grid[y].join("")}│`);
	}

	// Bottom border
	lines.push(`└${"─".repeat(state.width)}┘`);

	// Status line - use consistent width to clear previous content
	const STATUS_WIDTH = 50;
	let statusLine: string;
	if (state.gameOver) {
		statusLine = "  GAME OVER! Press SPACE to restart, Q to quit";
	} else if (state.paused) {
		statusLine = "  PAUSED - Press P to continue";
	} else {
		statusLine = "  ↑↓←→/WASD = Move  |  P = Pause  |  Q = Quit";
	}
	// Pad to ensure we overwrite previous content
	lines.push(statusLine.padEnd(STATUS_WIDTH));

	// Only clear on first frame, then use cursor positioning
	if (isFirstFrame) {
		ctx.terminal.clear();
	}

	// Write all lines - terminal.write with ANSI codes to move cursor home
	ctx.terminal.write("\x1b[H"); // Move cursor to top-left

	for (const line of lines) {
		ctx.terminal.writeln(line);
	}
}

/**
 * Snake game command handler
 */
export async function snakeCommand(ctx: CommandContext): Promise<void> {
	// Check if key handler is available
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln("snake: error - terminal does not support game input");
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
	const GAME_WIDTH = 40;
	const GAME_HEIGHT = 20;
	const INITIAL_SPEED = 6; // Lower = faster
	const MIN_SPEED = 2;
	const FRAME_DELAY = 50; // ms between frames

	// Try to load high score from localStorage
	let savedHighScore = 0;
	try {
		const saved = localStorage.getItem("snake_high_score");
		if (saved) savedHighScore = parseInt(saved, 10);
	} catch {
		// Ignore localStorage errors
	}

	// Initialize game state
	const state: SnakeState = {
		width: GAME_WIDTH,
		height: GAME_HEIGHT,
		snake: [
			{ x: Math.floor(GAME_WIDTH / 2), y: Math.floor(GAME_HEIGHT / 2) },
			{ x: Math.floor(GAME_WIDTH / 2) - 1, y: Math.floor(GAME_HEIGHT / 2) },
			{ x: Math.floor(GAME_WIDTH / 2) - 2, y: Math.floor(GAME_HEIGHT / 2) },
		],
		direction: "right",
		nextDirection: "right",
		foodX: 0,
		foodY: 0,
		score: 0,
		highScore: savedHighScore,
		running: true,
		paused: false,
		gameOver: false,
		speed: INITIAL_SPEED,
		frameCount: 0,
	};

	// Spawn initial food
	spawnFood(state);

	// Key state for continuous input (like Pong)
	const keys = {
		arrowUp: false,
		arrowDown: false,
		arrowLeft: false,
		arrowRight: false,
	};

	// Set up key handler - tracks both keydown and keyup for responsive input
	const keyHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
	) => {
		const isDown = eventType === "keydown";

		// Track key state for continuous input
		if (
			key === "ArrowUp" ||
			key === "w" ||
			key === "W" ||
			keyCode === 38 ||
			keyCode === 87
		) {
			keys.arrowUp = isDown;
		}
		if (
			key === "ArrowDown" ||
			key === "s" ||
			key === "S" ||
			keyCode === 40 ||
			keyCode === 83
		) {
			keys.arrowDown = isDown;
		}
		if (
			key === "ArrowLeft" ||
			key === "a" ||
			key === "A" ||
			keyCode === 37 ||
			keyCode === 65
		) {
			keys.arrowLeft = isDown;
		}
		if (
			key === "ArrowRight" ||
			key === "d" ||
			key === "D" ||
			keyCode === 39 ||
			keyCode === 68
		) {
			keys.arrowRight = isDown;
		}

		// Direction changes only on keydown - prevent 180 degree turns
		if (isDown) {
			if (
				(key === "ArrowUp" ||
					key === "w" ||
					key === "W" ||
					keyCode === 38 ||
					keyCode === 87) &&
				state.direction !== "down"
			) {
				state.nextDirection = "up";
			}
			if (
				(key === "ArrowDown" ||
					key === "s" ||
					key === "S" ||
					keyCode === 40 ||
					keyCode === 83) &&
				state.direction !== "up"
			) {
				state.nextDirection = "down";
			}
			if (
				(key === "ArrowLeft" ||
					key === "a" ||
					key === "A" ||
					keyCode === 37 ||
					keyCode === 65) &&
				state.direction !== "right"
			) {
				state.nextDirection = "left";
			}
			if (
				(key === "ArrowRight" ||
					key === "d" ||
					key === "D" ||
					keyCode === 39 ||
					keyCode === 68) &&
				state.direction !== "left"
			) {
				state.nextDirection = "right";
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
			// Space to restart after game over
			if ((key === " " || keyCode === 32) && state.gameOver) {
				resetSnakeGame(state, GAME_WIDTH, GAME_HEIGHT, INITIAL_SPEED);
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
			// Process key state every frame for responsive input
			if (keys.arrowUp && state.direction !== "down") {
				state.nextDirection = "up";
			} else if (keys.arrowDown && state.direction !== "up") {
				state.nextDirection = "down";
			} else if (keys.arrowLeft && state.direction !== "right") {
				state.nextDirection = "left";
			} else if (keys.arrowRight && state.direction !== "left") {
				state.nextDirection = "right";
			}

			state.frameCount++;

			// Move snake at speed interval
			if (state.frameCount >= state.speed) {
				state.frameCount = 0;

				// Update direction
				state.direction = state.nextDirection;

				// Calculate new head position
				const head = state.snake[0];
				let newX = head.x;
				let newY = head.y;

				switch (state.direction) {
					case "up":
						newY--;
						break;
					case "down":
						newY++;
						break;
					case "left":
						newX--;
						break;
					case "right":
						newX++;
						break;
				}

				// Check wall collision
				if (
					newX < 0 ||
					newX >= state.width ||
					newY < 0 ||
					newY >= state.height
				) {
					state.gameOver = true;
					updateHighScore(state);
				} else {
					// Check self collision
					for (const segment of state.snake) {
						if (segment.x === newX && segment.y === newY) {
							state.gameOver = true;
							updateHighScore(state);
							break;
						}
					}

					if (!state.gameOver) {
						// Add new head
						state.snake.unshift({ x: newX, y: newY });

						// Check food collision
						if (newX === state.foodX && newY === state.foodY) {
							// Eat food - don't remove tail (snake grows)
							state.score += 10;
							spawnFood(state);
							// Increase speed every 50 points
							if (state.score % 50 === 0 && state.speed > MIN_SPEED) {
								state.speed--;
							}
						} else {
							// Remove tail (normal move)
							state.snake.pop();
						}
					}
				}
			}
		}

		// Render game
		renderSnake(ctx, state, isFirstFrame);
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
		ctx.terminal.writeln("🏆 NEW HIGH SCORE!");
	}
	ctx.terminal.writeln("");
}
