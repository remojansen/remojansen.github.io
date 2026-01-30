/**
 * Cool Retro Term - Web Application Entry Point
 *
 * This is the application-specific entry point for remojansen.github.io
 * It uses the cool-retro-term-webgl library and adds:
 * - Custom shell emulator with virtual filesystem
 * - Boot sequence with BIOS animation
 * - Background and game music
 * - Built-in games (pong, snake, blocks, matrix)
 * - CV display and other custom commands
 */

import { TerminalFrame, TerminalText } from "cool-retro-term-renderer";
import * as THREE from "three";
import { XTermAdapter } from "./terminal/XTermAdapter";

// Audio controller interface
interface AudioControls {
	startBackgroundMusic: () => void;
	startGameMusic: () => void;
	stopGameMusic: () => void;
}

// Setup background music with Three.js Audio
function setupAudio(camera: THREE.Camera): AudioControls {
	const listener = new THREE.AudioListener();
	camera.add(listener);

	const audioLoader = new THREE.AudioLoader();

	// Background music
	const backgroundMusic = new THREE.Audio(listener);
	let bgAudioLoaded = false;
	let bgBuffer: AudioBuffer | null = null;
	let bgPlayRequested = false;

	const playBackgroundAudio = () => {
		if (listener.context.state === "suspended") {
			listener.context.resume();
		}

		if (bgAudioLoaded && bgBuffer && !backgroundMusic.isPlaying) {
			backgroundMusic.play();
			console.log("Background music started");
		}
	};

	audioLoader.load("assets/audio/background.mp3", (loadedBuffer) => {
		bgBuffer = loadedBuffer;
		backgroundMusic.setBuffer(bgBuffer);
		backgroundMusic.setLoop(true);
		backgroundMusic.setVolume(0.5);
		bgAudioLoaded = true;
		console.log("Background music loaded");

		if (bgPlayRequested) {
			playBackgroundAudio();
		}
	});

	// Game music
	const gameMusic = new THREE.Audio(listener);
	let gameAudioLoaded = false;
	let gameBuffer: AudioBuffer | null = null;

	audioLoader.load("assets/audio/game.mp3", (loadedBuffer) => {
		gameBuffer = loadedBuffer;
		gameMusic.setBuffer(gameBuffer);
		gameMusic.setLoop(true);
		gameMusic.setVolume(0.5);
		gameAudioLoaded = true;
		console.log("Game music loaded");
	});

	return {
		startBackgroundMusic: () => {
			bgPlayRequested = true;
			playBackgroundAudio();
		},
		startGameMusic: () => {
			if (listener.context.state === "suspended") {
				listener.context.resume();
			}
			if (gameAudioLoaded && gameBuffer && !gameMusic.isPlaying) {
				gameMusic.play();
				console.log("Game music started");
			}
		},
		stopGameMusic: () => {
			if (gameMusic.isPlaying) {
				gameMusic.stop();
				console.log("Game music stopped");
			}
		},
	};
}

/**
 * Calculate a font scale factor based on screen height (applied once on load)
 * This ensures games and content remain playable on smaller screens
 * Reference: 1080p (1080px height) = scale 1.0
 */
function calculateFontScale(): number {
	const screenHeight = window.innerHeight;
	const referenceHeight = 1080; // Base reference height (1080p)
	const minScale = 0.65; // Minimum scale for very small screens
	const maxScale = 1.0; // Maximum scale (no scaling up)

	// Calculate scale based on screen height ratio
	const scale = screenHeight / referenceHeight;

	// Clamp between min and max
	return Math.min(maxScale, Math.max(minScale, scale));
}

// Calculate font scale once on page load
const FONT_SCALE = calculateFontScale();
const LOGICAL_WIDTH =
	FONT_SCALE < 1.0 ? window.innerWidth / FONT_SCALE : window.innerWidth;
const LOGICAL_HEIGHT =
	FONT_SCALE < 1.0 ? window.innerHeight / FONT_SCALE : window.innerHeight;

async function runScene(): Promise<void> {
	const container = document.getElementById("container");

	if (!container) {
		throw new Error("Container element not found");
	}

	console.log(
		`Screen height: ${window.innerHeight}px, Font scale: ${FONT_SCALE.toFixed(2)}`,
	);

	// Apply CSS transform to scale the container content
	// This effectively reduces the font size for smaller screens
	if (FONT_SCALE < 1.0) {
		container.style.transform = `scale(${FONT_SCALE})`;
		container.style.transformOrigin = "top left";
		container.style.width = `${100 / FONT_SCALE}%`;
		container.style.height = `${100 / FONT_SCALE}%`;
	}

	// Create the scene
	const scene = new THREE.Scene();

	// Create orthographic camera for 2D rendering
	const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
	camera.position.z = 1;

	// Setup audio
	const audioControls = setupAudio(camera);

	// Create the renderer - use logical size for the scaled container
	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(LOGICAL_WIDTH, LOGICAL_HEIGHT);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setClearColor(0x000000);
	container.appendChild(renderer.domElement);

	// Create the terminal text with logical dimensions
	const terminalText = new TerminalText(LOGICAL_WIDTH, LOGICAL_HEIGHT);
	terminalText.mesh.position.z = 0;
	scene.add(terminalText.mesh);

	// Create the terminal frame with logical dimensions
	const terminalFrame = new TerminalFrame(LOGICAL_WIDTH, LOGICAL_HEIGHT);
	terminalFrame.mesh.position.z = 0.1;
	scene.add(terminalFrame.mesh);

	// Create xterm adapter with shell emulator
	const xtermAdapter = new XTermAdapter(terminalText, 80, 24, audioControls);

	// Sync xterm dimensions with the calculated terminal grid size
	const gridSize = terminalText.getGridSize();
	console.log(`Initial grid size: ${gridSize.cols}x${gridSize.rows}`);
	if (gridSize.cols > 0 && gridSize.rows > 0) {
		xtermAdapter.resize(gridSize.cols, gridSize.rows);
	}

	// Force a refresh after the first render frame to ensure boot prompt is visible
	requestAnimationFrame(() => {
		if (gridSize.cols > 0 && gridSize.rows > 0) {
			xtermAdapter.resize(gridSize.cols, gridSize.rows);
		}
	});

	// Listen for grid size changes and resize xterm
	terminalText.onGridSizeChange((cols, rows) => {
		console.log(`Grid size changed: ${cols}x${rows}`);
		if (cols > 0 && rows > 0) {
			xtermAdapter.resize(cols, rows);
		}
	});

	// Focus the terminal
	xtermAdapter.focus();

	// Focus on click
	container.addEventListener("click", () => {
		xtermAdapter.focus();
	});

	// Handle window resize (uses fixed FONT_SCALE calculated on load)
	const handleResize = () => {
		// In fullscreen, use the screen dimensions directly
		const isFullscreen = document.fullscreenElement !== null;
		let newLogicalWidth: number;
		let newLogicalHeight: number;

		if (isFullscreen) {
			newLogicalWidth = window.innerWidth;
			newLogicalHeight = window.innerHeight;
		} else {
			newLogicalWidth =
				FONT_SCALE < 1.0 ? window.innerWidth / FONT_SCALE : window.innerWidth;
			newLogicalHeight =
				FONT_SCALE < 1.0 ? window.innerHeight / FONT_SCALE : window.innerHeight;
		}

		renderer.setSize(newLogicalWidth, newLogicalHeight);
		terminalFrame.updateSize(newLogicalWidth, newLogicalHeight);
		terminalText.updateSize(newLogicalWidth, newLogicalHeight);
		const gridSize = terminalText.getGridSize();
		if (gridSize.cols > 0 && gridSize.rows > 0) {
			xtermAdapter.resize(gridSize.cols, gridSize.rows);
		}
	};

	window.addEventListener("resize", handleResize);
	document.addEventListener("fullscreenchange", () => {
		handleResize();
		// Refocus terminal after fullscreen change
		setTimeout(() => xtermAdapter.focus(), 100);
	});

	// Animation loop
	function animate() {
		terminalText.updateTime(performance.now());
		terminalText.renderStaticPass(renderer);
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
	}

	animate();

	console.log("Cool Retro Term Web initialized");
}

// Start the application
runScene().catch(console.error);
