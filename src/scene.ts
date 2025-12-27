// Cool Retro Term - Three.js Scene

// import Stats from "stats.js";
import * as THREE from "three";
import { TerminalFrame } from "./terminal/TerminalFrame";
import { TerminalText } from "./terminal/TerminalText";
import { XTermAdapter } from "./terminal/XTermAdapter";

// Audio controller interface
interface AudioControls {
	startBackgroundMusic: () => void;
	startGameMusic: () => void;
	stopGameMusic: () => void;
}

// Setup background music with Three.js Audio
// Returns functions to control background and game music
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
		// Resume audio context if suspended (required by browsers)
		if (listener.context.state === "suspended") {
			listener.context.resume();
		}

		if (bgAudioLoaded && bgBuffer && !backgroundMusic.isPlaying) {
			backgroundMusic.play();
			console.log("Background music started");
		}
	};

	// Load background music
	audioLoader.load("assets/audio/background.mp3", (loadedBuffer) => {
		bgBuffer = loadedBuffer;
		backgroundMusic.setBuffer(bgBuffer);
		backgroundMusic.setLoop(true);
		backgroundMusic.setVolume(0.5);
		bgAudioLoaded = true;
		console.log("Background music loaded");

		// If play was already requested before loading finished, play now
		if (bgPlayRequested) {
			playBackgroundAudio();
		}
	});

	// Game music
	const gameMusic = new THREE.Audio(listener);
	let gameAudioLoaded = false;
	let gameBuffer: AudioBuffer | null = null;

	// Load game music
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

export async function runScene(): Promise<void> {
	// Setup FPS counter
	//const stats = new Stats();
	//stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
	// document.body.appendChild(stats.dom);

	// Get the container element
	const container = document.getElementById("container");

	if (!container) {
		throw new Error("Container element not found");
	}

	// Create the scene
	const scene = new THREE.Scene();

	// Create orthographic camera for 2D rendering
	// The camera maps -1 to 1 in both x and y to fill the screen
	const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
	camera.position.z = 1;

	// Setup audio (returns functions to control background and game music)
	const audioControls = setupAudio(camera);

	// Create the renderer
	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setClearColor(0x000000); // Black background
	container.appendChild(renderer.domElement);

	// Create the terminal text (renders the text content)
	// Use window dimensions directly (not multiplied by devicePixelRatio)
	// to match QML behavior where effects scale with screen, not with pixel density
	const terminalText = new TerminalText(window.innerWidth, window.innerHeight);
	terminalText.mesh.position.z = 0; // Background layer
	scene.add(terminalText.mesh);

	// Create the terminal frame (renders CRT frame effects on top)
	const terminalFrame = new TerminalFrame(
		window.innerWidth,
		window.innerHeight,
	);
	terminalFrame.mesh.position.z = 0.1; // Foreground layer
	scene.add(terminalFrame.mesh);

	// Create xterm adapter for terminal input/output
	// This connects xterm.js (handles input) to TerminalText (renders with shaders)
	// Pass the audio controls to start music when user presses Enter and during games
	const xtermAdapter = new XTermAdapter(terminalText, 80, 24, audioControls);

	// Sync xterm dimensions with the calculated terminal grid size
	// This is needed because TerminalText calculates actual rows based on window size
	const gridSize = terminalText.getGridSize();
	console.log(`Initial grid size: ${gridSize.cols}x${gridSize.rows}`);
	if (gridSize.cols > 0 && gridSize.rows > 0) {
		xtermAdapter.resize(gridSize.cols, gridSize.rows);
	}

	// Listen for grid size changes (e.g., when font loads) and resize xterm
	terminalText.onGridSizeChange((cols, rows) => {
		console.log(`Grid size changed: ${cols}x${rows}`);
		if (cols > 0 && rows > 0) {
			xtermAdapter.resize(cols, rows);
		}
	});

	// Focus the terminal to receive keyboard input
	xtermAdapter.focus();

	// Also focus on click
	container.addEventListener("click", () => {
		xtermAdapter.focus();
	});

	// Handle window resize
	window.addEventListener("resize", () => {
		renderer.setSize(window.innerWidth, window.innerHeight);
		terminalFrame.updateSize(window.innerWidth, window.innerHeight);
		terminalText.updateSize(window.innerWidth, window.innerHeight);
		// Sync xterm dimensions with the new terminal grid size
		const gridSize = terminalText.getGridSize();
		if (gridSize.cols > 0 && gridSize.rows > 0) {
			xtermAdapter.resize(gridSize.cols, gridSize.rows);
		}
	});

	// Animation loop
	function animate() {
		// stats.begin();

		// Update time for dynamic shader effects (flickering, etc.)
		terminalText.updateTime(performance.now());

		// Render static pass first (to render target)
		// This produces the stable frameBuffer that dynamic effects sample from
		terminalText.renderStaticPass(renderer);

		// Then render the main scene (dynamic pass reads from static render target)
		requestAnimationFrame(animate);
		renderer.render(scene, camera);

		// stats.end();
	}

	animate();

	console.log("Cool Retro Term Web initialized");
}
