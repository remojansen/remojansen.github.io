/**
 * Cool Retro Term - Web Application Entry Point
 *
 * This is the application-specific entry point for remojansen.github.io
 * It uses the cool-retro-term-webgl library and adds:
 * - Custom shell emulator with virtual filesystem
 * - Boot sequence with BIOS animation
 * - Background and game music
 * - Built-in games (pong, snake, tetris, matrix)
 * - CV display and other custom commands
 */

import * as THREE from "three";
import { TerminalFrame, TerminalText } from "cool-retro-term-renderer";
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

async function runScene(): Promise<void> {
	const container = document.getElementById("container");

	if (!container) {
		throw new Error("Container element not found");
	}

	// Create the scene
	const scene = new THREE.Scene();

	// Create orthographic camera for 2D rendering
	const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
	camera.position.z = 1;

	// Setup audio
	const audioControls = setupAudio(camera);

	// Create the renderer
	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setClearColor(0x000000);
	container.appendChild(renderer.domElement);

	// Create the terminal text
	const terminalText = new TerminalText(window.innerWidth, window.innerHeight);
	terminalText.mesh.position.z = 0;
	scene.add(terminalText.mesh);

	// Create the terminal frame
	const terminalFrame = new TerminalFrame(
		window.innerWidth,
		window.innerHeight,
	);
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

	// Handle window resize
	window.addEventListener("resize", () => {
		renderer.setSize(window.innerWidth, window.innerHeight);
		terminalFrame.updateSize(window.innerWidth, window.innerHeight);
		terminalText.updateSize(window.innerWidth, window.innerHeight);
		const gridSize = terminalText.getGridSize();
		if (gridSize.cols > 0 && gridSize.rows > 0) {
			xtermAdapter.resize(gridSize.cols, gridSize.rows);
		}
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
