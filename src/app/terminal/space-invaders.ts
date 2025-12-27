/**
 * Space Invaders - Classic arcade alien shooter
 */

import type { CommandContext, KeyHandler } from "./ShellEmulator";
import { sleep } from "./ShellEmulator";

interface Bullet {
	x: number;
	y: number;
	direction: -1 | 1; // -1 = up (player), 1 = down (alien)
}

interface Alien {
	x: number;
	y: number;
	alive: boolean;
	type: number; // 0, 1, 2 for different alien types
}

interface Barrier {
	x: number;
	y: number;
	health: number; // 0-3, decreases when hit
}

interface SpaceInvadersState {
	// Game dimensions
	width: number;
	height: number;
	// Player
	playerX: number;
	playerY: number;
	// Aliens
	aliens: Alien[];
	alienDirection: 1 | -1; // 1 = right, -1 = left
	alienMoveTimer: number;
	alienMoveDelay: number; // Frames between alien movements
	alienDropAmount: number;
	// Bullets
	playerBullets: Bullet[];
	alienBullets: Bullet[];
	playerShootCooldown: number;
	alienShootTimer: number;
	// Barriers
	barriers: Barrier[];
	// Score and game state
	score: number;
	highScore: number;
	lives: number;
	level: number;
	running: boolean;
	paused: boolean;
	gameOver: boolean;
	victory: boolean;
	// Input state
	keys: {
		left: boolean;
		right: boolean;
		shoot: boolean;
	};
}

// Alien sprites (ASCII art)
const ALIEN_SPRITES = [
	["/oo\\", "<  >"], // Type 0 - top row
	["{@@}", "/\\/\\"], // Type 1 - middle rows
	["|--|", "/  \\"], // Type 2 - bottom row
];

const PLAYER_SPRITE = ["  ^  ", " /A\\ ", "/===\\"];

/**
 * Initialize aliens for a level
 */
function initAliens(state: SpaceInvadersState, level: number): void {
	state.aliens = [];
	const rows = Math.min(5, 4 + Math.floor(level / 3)); // Start with 4 rows, max 5
	const cols = Math.min(10, 9 + level);
	const startX = Math.floor((state.width - cols * 5) / 2);
	const startY = 1;

	for (let row = 0; row < rows; row++) {
		const type = row === 0 ? 0 : row < 3 ? 1 : 2;
		for (let col = 0; col < cols; col++) {
			state.aliens.push({
				x: startX + col * 5,
				y: startY + row * 2,
				alive: true,
				type,
			});
		}
	}

	// Increase speed with level
	state.alienMoveDelay = Math.max(5, 20 - level * 2);
}

/**
 * Initialize barriers
 */
function initBarriers(state: SpaceInvadersState): void {
	state.barriers = [];
	const barrierCount = 4;
	const spacing = Math.floor(state.width / (barrierCount + 1));

	for (let i = 0; i < barrierCount; i++) {
		const baseX = spacing * (i + 1) - 2;
		const baseY = state.height - 6;

		// Create barrier blocks (2 rows)
		for (let dx = 0; dx < 5; dx++) {
			state.barriers.push({ x: baseX + dx, y: baseY, health: 3 });
			if (dx > 0 && dx < 4) {
				state.barriers.push({ x: baseX + dx, y: baseY + 1, health: 3 });
			}
		}
	}
}

/**
 * Reset game state
 */
function resetGame(state: SpaceInvadersState): void {
	state.playerX = Math.floor(state.width / 2) - 2;
	state.playerY = state.height - 3;
	state.playerBullets = [];
	state.alienBullets = [];
	state.playerShootCooldown = 0;
	state.alienShootTimer = 0;
	state.alienDirection = 1;
	state.alienMoveTimer = 0;
	state.score = 0;
	state.lives = 3;
	state.level = 1;
	state.gameOver = false;
	state.victory = false;
	state.paused = false;

	initAliens(state, state.level);
	initBarriers(state);
}

/**
 * Move aliens
 */
function moveAliens(state: SpaceInvadersState): void {
	state.alienMoveTimer++;

	if (state.alienMoveTimer < state.alienMoveDelay) {
		return;
	}

	state.alienMoveTimer = 0;

	// Check if any alien hit the edge
	let hitEdge = false;
	for (const alien of state.aliens) {
		if (!alien.alive) continue;

		const nextX = alien.x + state.alienDirection * 2;
		if (nextX <= 0 || nextX >= state.width - 4) {
			hitEdge = true;
			break;
		}
	}

	if (hitEdge) {
		// Move down and reverse direction
		for (const alien of state.aliens) {
			if (alien.alive) {
				alien.y += state.alienDropAmount;
			}
		}
		state.alienDirection *= -1;

		// Check if aliens reached player level
		for (const alien of state.aliens) {
			if (alien.alive && alien.y >= state.playerY - 1) {
				state.gameOver = true;
				return;
			}
		}
	} else {
		// Move horizontally
		for (const alien of state.aliens) {
			if (alien.alive) {
				alien.x += state.alienDirection * 2;
			}
		}
	}

	// Speed up as fewer aliens remain
	const aliveCount = state.aliens.filter((a) => a.alive).length;
	if (aliveCount > 0) {
		const speedBoost = Math.floor((state.aliens.length - aliveCount) / 5);
		state.alienMoveDelay = Math.max(2, 20 - state.level * 2 - speedBoost);
	}
}

/**
 * Alien shooting
 */
function alienShoot(state: SpaceInvadersState): void {
	state.alienShootTimer++;

	const shootInterval = Math.max(20, 60 - state.level * 5);
	if (state.alienShootTimer < shootInterval) {
		return;
	}

	state.alienShootTimer = 0;

	// Find alive aliens and pick one to shoot
	const aliveAliens = state.aliens.filter((a) => a.alive);
	if (aliveAliens.length === 0) return;

	// Prefer bottom aliens
	const bottomAliens = aliveAliens.filter((a) => {
		return !aliveAliens.some((other) => other.x === a.x && other.y > a.y);
	});

	const shooter =
		bottomAliens[Math.floor(Math.random() * bottomAliens.length)];
	if (shooter && state.alienBullets.length < 3) {
		state.alienBullets.push({
			x: shooter.x + 2,
			y: shooter.y + 1,
			direction: 1,
		});
	}
}

/**
 * Update bullets
 */
function updateBullets(state: SpaceInvadersState): void {
	// Move player bullets
	for (let i = state.playerBullets.length - 1; i >= 0; i--) {
		const bullet = state.playerBullets[i];
		bullet.y += bullet.direction;

		// Remove if off screen
		if (bullet.y < 0) {
			state.playerBullets.splice(i, 1);
			continue;
		}

		// Check collision with aliens
		for (const alien of state.aliens) {
			if (!alien.alive) continue;

			if (
				bullet.x >= alien.x &&
				bullet.x <= alien.x + 3 &&
				bullet.y >= alien.y &&
				bullet.y <= alien.y + 1
			) {
				alien.alive = false;
				state.playerBullets.splice(i, 1);
				// Score based on alien type
				state.score += (3 - alien.type) * 10 + 10;
				break;
			}
		}

		// Check collision with barriers
		for (let j = state.barriers.length - 1; j >= 0; j--) {
			const barrier = state.barriers[j];
			if (bullet.x === barrier.x && bullet.y === barrier.y) {
				barrier.health--;
				if (barrier.health <= 0) {
					state.barriers.splice(j, 1);
				}
				state.playerBullets.splice(i, 1);
				break;
			}
		}
	}

	// Move alien bullets
	for (let i = state.alienBullets.length - 1; i >= 0; i--) {
		const bullet = state.alienBullets[i];
		bullet.y += bullet.direction;

		// Remove if off screen
		if (bullet.y >= state.height) {
			state.alienBullets.splice(i, 1);
			continue;
		}

		// Check collision with player
		if (
			bullet.y >= state.playerY &&
			bullet.y <= state.playerY + 2 &&
			bullet.x >= state.playerX &&
			bullet.x <= state.playerX + 4
		) {
			state.alienBullets.splice(i, 1);
			state.lives--;
			if (state.lives <= 0) {
				state.gameOver = true;
			}
			continue;
		}

		// Check collision with barriers
		for (let j = state.barriers.length - 1; j >= 0; j--) {
			const barrier = state.barriers[j];
			if (bullet.x === barrier.x && bullet.y === barrier.y) {
				barrier.health--;
				if (barrier.health <= 0) {
					state.barriers.splice(j, 1);
				}
				state.alienBullets.splice(i, 1);
				break;
			}
		}
	}

	// Cooldown
	if (state.playerShootCooldown > 0) {
		state.playerShootCooldown--;
	}
}

/**
 * Check for level completion
 */
function checkLevelComplete(state: SpaceInvadersState): boolean {
	return state.aliens.every((a) => !a.alive);
}

/**
 * Render the game
 */
function renderGame(
	ctx: CommandContext,
	state: SpaceInvadersState,
	isFirstFrame: boolean,
): void {
	const lines: string[] = [];

	// Header with title - single line style like Pong
	const headerWidth = state.width;
	const title = "SPACE INVADERS";
	const titlePadding = Math.floor((headerWidth - title.length) / 2);
	const titlePaddingRight = headerWidth - title.length - titlePadding;
	lines.push(`╔${"═".repeat(headerWidth)}╗`);
	lines.push(
		`║${" ".repeat(titlePadding)}${title}${" ".repeat(titlePaddingRight)}║`,
	);
	lines.push(`╚${"═".repeat(headerWidth)}╝`);

	// Score line
	const scoreStr = `Score: ${state.score}`;
	const highStr = `High: ${state.highScore}`;
	const livesStr = `Lives: ${"♥".repeat(state.lives)}${"♡".repeat(Math.max(0, 3 - state.lives))}`;
	const levelStr = `Lvl: ${state.level}`;
	const scoreLine = `${scoreStr}  ${highStr}  ${livesStr}  ${levelStr}`;
	lines.push(scoreLine.padEnd(state.width + 2));

	// Game area border
	lines.push(`┌${"─".repeat(state.width)}┐`);

	// Create game grid
	const grid: string[][] = [];
	for (let y = 0; y < state.height; y++) {
		grid[y] = new Array(state.width).fill(" ");
	}

	// Draw aliens
	for (const alien of state.aliens) {
		if (!alien.alive) continue;
		const sprite = ALIEN_SPRITES[alien.type];
		for (let row = 0; row < sprite.length; row++) {
			for (let col = 0; col < sprite[row].length; col++) {
				const x = alien.x + col;
				const y = alien.y + row;
				if (x >= 0 && x < state.width && y >= 0 && y < state.height) {
					if (sprite[row][col] !== " ") {
						grid[y][x] = sprite[row][col];
					}
				}
			}
		}
	}

	// Draw barriers
	for (const barrier of state.barriers) {
		if (barrier.y >= 0 && barrier.y < state.height) {
			const chars = ["░", "▒", "▓", "█"];
			grid[barrier.y][barrier.x] = chars[barrier.health] || "█";
		}
	}

	// Draw player
	for (let row = 0; row < PLAYER_SPRITE.length; row++) {
		for (let col = 0; col < PLAYER_SPRITE[row].length; col++) {
			const x = state.playerX + col;
			const y = state.playerY + row;
			if (x >= 0 && x < state.width && y >= 0 && y < state.height) {
				if (PLAYER_SPRITE[row][col] !== " ") {
					grid[y][x] = PLAYER_SPRITE[row][col];
				}
			}
		}
	}

	// Draw player bullets
	for (const bullet of state.playerBullets) {
		if (bullet.y >= 0 && bullet.y < state.height) {
			grid[bullet.y][bullet.x] = "│";
		}
	}

	// Draw alien bullets
	for (const bullet of state.alienBullets) {
		if (bullet.y >= 0 && bullet.y < state.height) {
			grid[bullet.y][bullet.x] = "▼";
		}
	}

	// Build game area lines
	for (let y = 0; y < state.height; y++) {
		lines.push(`│${grid[y].join("")}│`);
	}

	// Bottom border
	lines.push(`└${"─".repeat(state.width)}┘`);

	// Status line
	const STATUS_WIDTH = 70;
	let statusLine: string;
	if (state.gameOver) {
		statusLine = state.victory
			? "  VICTORY! Press SPACE to continue, Q to quit"
			: "  GAME OVER! Press SPACE to restart, Q to quit";
	} else if (state.paused) {
		statusLine = "  PAUSED - Press P to continue, Q to quit";
	} else {
		statusLine = "  ←→/AD = Move  |  SPACE = Shoot  |  P = Pause  |  Q = Quit";
	}
	lines.push(statusLine.padEnd(STATUS_WIDTH));

	// Clear on first frame
	if (isFirstFrame) {
		ctx.terminal.clear();
	}

	// Build and write complete frame
	let frame = "\x1b[H";
	for (const line of lines) {
		frame += line + "\r\n";
	}
	ctx.terminal.write(frame);
}

/**
 * Space Invaders command handler
 */
export async function spaceInvadersCommand(ctx: CommandContext): Promise<void> {
	// Check if key handler is available
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln(
			"space-invaders: error - terminal does not support game input",
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
	const GAME_WIDTH = 64;
	const GAME_HEIGHT = 20;
	const FRAME_DELAY = 33; // ~30 FPS

	// Try to load high score
	let savedHighScore = 0;
	try {
		const saved = localStorage.getItem("space_invaders_high_score");
		if (saved) savedHighScore = Number.parseInt(saved, 10);
	} catch {
		// Ignore localStorage errors
	}

	// Initialize state
	const state: SpaceInvadersState = {
		width: GAME_WIDTH,
		height: GAME_HEIGHT,
		playerX: Math.floor(GAME_WIDTH / 2) - 2,
		playerY: GAME_HEIGHT - 3,
		aliens: [],
		alienDirection: 1,
		alienMoveTimer: 0,
		alienMoveDelay: 20,
		alienDropAmount: 1,
		playerBullets: [],
		alienBullets: [],
		playerShootCooldown: 0,
		alienShootTimer: 0,
		barriers: [],
		score: 0,
		highScore: savedHighScore,
		lives: 3,
		level: 1,
		running: true,
		paused: false,
		gameOver: false,
		victory: false,
		keys: {
			left: false,
			right: false,
			shoot: false,
		},
	};

	// Initialize level
	initAliens(state, state.level);
	initBarriers(state);

	// Set up key handler
	const keyHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
	) => {
		const isDown = eventType === "keydown";

		// Movement keys
		if (
			key === "ArrowLeft" ||
			key === "a" ||
			key === "A" ||
			keyCode === 37 ||
			keyCode === 65
		) {
			state.keys.left = isDown;
		}
		if (
			key === "ArrowRight" ||
			key === "d" ||
			key === "D" ||
			keyCode === 39 ||
			keyCode === 68
		) {
			state.keys.right = isDown;
		}

		// Shoot
		if (key === " " || keyCode === 32) {
			state.keys.shoot = isDown;
		}

		// Only on keydown
		if (isDown) {
			// Q to quit
			if (key === "q" || key === "Q" || keyCode === 81) {
				state.running = false;
			}
			// P to pause
			if (key === "p" || key === "P" || keyCode === 80) {
				if (!state.gameOver) {
					state.paused = !state.paused;
				}
			}
			// Space to restart/continue after game over or victory
			if (key === " " || keyCode === 32) {
				if (state.gameOver) {
					resetGame(state);
				} else if (state.victory) {
					// Next level
					state.level++;
					state.victory = false;
					state.playerBullets = [];
					state.alienBullets = [];
					initAliens(state, state.level);
					initBarriers(state);
				}
			}
		}
	};

	ctx.terminal.setKeyHandler(keyHandler);

	// Clear screen
	ctx.terminal.clear();

	let isFirstFrame = true;

	// Game loop
	while (state.running) {
		if (!state.paused && !state.gameOver && !state.victory) {
			// Player movement
			if (state.keys.left && state.playerX > 0) {
				state.playerX--;
			}
			if (state.keys.right && state.playerX < state.width - 5) {
				state.playerX++;
			}

			// Player shooting
			if (
				state.keys.shoot &&
				state.playerShootCooldown === 0 &&
				state.playerBullets.length < 3
			) {
				state.playerBullets.push({
					x: state.playerX + 2,
					y: state.playerY - 1,
					direction: -1,
				});
				state.playerShootCooldown = 10;
			}

			// Update game
			moveAliens(state);
			alienShoot(state);
			updateBullets(state);

			// Check level complete
			if (checkLevelComplete(state)) {
				state.victory = true;
				// Update high score
				if (state.score > state.highScore) {
					state.highScore = state.score;
					try {
						localStorage.setItem(
							"space_invaders_high_score",
							state.highScore.toString(),
						);
					} catch {
						// Ignore
					}
				}
			}

			// Update high score on game over
			if (state.gameOver && state.score > state.highScore) {
				state.highScore = state.score;
				try {
					localStorage.setItem(
						"space_invaders_high_score",
						state.highScore.toString(),
					);
				} catch {
					// Ignore
				}
			}
		}

		// Render
		renderGame(ctx, state, isFirstFrame);
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
	ctx.terminal.writeln(`Final Score: ${state.score} | Level: ${state.level}`);
	if (state.score === state.highScore && state.score > 0) {
		ctx.terminal.writeln("NEW HIGH SCORE!");
	}
	ctx.terminal.writeln("");
}
