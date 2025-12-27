/**
 * CRTTerminal - Main class for cool-retro-term-webgl
 *
 * This class encapsulates the Three.js scene, shaders, and rendering pipeline
 * for creating a CRT terminal effect. It accepts an XTerm.js terminal instance
 * and renders its output with authentic CRT visual effects.
 *
 * @example
 * ```typescript
 * import { CRTTerminal } from 'cool-retro-term-webgl';
 * import { Terminal } from '@xterm/xterm';
 *
 * const container = document.getElementById('terminal');
 * const crt = new CRTTerminal({ container });
 *
 * const xterm = new Terminal();
 * crt.attachXTerm(xterm);
 *
 * xterm.write('Hello, World!');
 * ```
 */

import type { Terminal } from "@xterm/xterm";
import * as THREE from "three";
import { TerminalFrame } from "./TerminalFrame";
import { TerminalText } from "./TerminalText";
import { type CRTTerminalSettings, DEFAULT_SETTINGS } from "./types";
import { XTermConnector } from "./XTermConnector";

export class CRTTerminal {
	private container: HTMLElement;
	private scene: THREE.Scene;
	private camera: THREE.OrthographicCamera;
	private renderer: THREE.WebGLRenderer;
	private terminalText: TerminalText;
	private terminalFrame: TerminalFrame;
	private animationFrameId: number | null = null;
	private connector: XTermConnector | null = null;
	private settings: Required<Omit<CRTTerminalSettings, "container">>;
	private disposed: boolean = false;

	constructor(options: CRTTerminalSettings) {
		this.container = options.container;
		this.settings = { ...DEFAULT_SETTINGS, ...options };

		// Create the Three.js scene
		this.scene = new THREE.Scene();

		// Create orthographic camera for 2D rendering
		this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
		this.camera.position.z = 1;

		// Create the renderer
		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.setSize(
			this.container.clientWidth,
			this.container.clientHeight,
		);
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setClearColor(0x000000);
		this.container.appendChild(this.renderer.domElement);

		// Create the terminal text renderer
		this.terminalText = new TerminalText(
			this.container.clientWidth,
			this.container.clientHeight,
		);
		this.terminalText.mesh.position.z = 0;
		this.scene.add(this.terminalText.mesh);

		// Create the terminal frame
		this.terminalFrame = new TerminalFrame(
			this.container.clientWidth,
			this.container.clientHeight,
		);
		this.terminalFrame.mesh.position.z = 0.1;
		this.scene.add(this.terminalFrame.mesh);

		// Apply initial settings
		this.applySettings();

		// Handle window resize
		window.addEventListener("resize", this.handleResize);

		// Start the animation loop
		this.animate();
	}

	/**
	 * Apply the current settings to the terminal renderer
	 */
	private applySettings(): void {
		const s = this.settings;
		this.terminalText.setFontColor(s.fontColor);
		this.terminalText.setBackgroundColor(s.backgroundColor);
		this.terminalText.setScreenCurvature(s.screenCurvature);
		this.terminalText.setRgbShift(s.rgbShift);
		this.terminalText.setBloom(s.bloom);
		this.terminalText.setBrightness(s.brightness);
		this.terminalText.setAmbientLight(s.ambientLight);
		this.terminalText.setChromaColor(s.chromaColor);
		this.terminalText.setFlickering(s.flickering);
		this.terminalText.setHorizontalSync(s.horizontalSync);
		this.terminalText.setJitter(s.jitter);
		this.terminalText.setStaticNoise(s.staticNoise);
		this.terminalText.setGlowingLine(s.glowingLine);
		this.terminalText.setBurnIn(s.burnIn);
		this.terminalText.setRasterizationMode(s.rasterizationMode);
		this.terminalText.setRasterizationIntensity(s.rasterizationIntensity);

		this.terminalFrame.setScreenCurvature(s.screenCurvature);
	}

	/**
	 * Handle window resize events
	 */
	private handleResize = (): void => {
		if (this.disposed) return;

		const width = this.container.clientWidth;
		const height = this.container.clientHeight;

		this.renderer.setSize(width, height);
		this.terminalText.updateSize(width, height);
		this.terminalFrame.updateSize(width, height);

		// Resize XTerm to match the new grid size
		if (this.connector) {
			const gridSize = this.terminalText.getGridSize();
			if (gridSize.cols > 0 && gridSize.rows > 0) {
				this.connector.getXTerm().resize(gridSize.cols, gridSize.rows);
				this.connector.sync();
			}
		}
	};

	/**
	 * Animation loop
	 */
	private animate = (): void => {
		if (this.disposed) return;

		this.animationFrameId = requestAnimationFrame(this.animate);

		// Update time for dynamic shader effects
		this.terminalText.updateTime(performance.now());

		// Render static pass first (to render target)
		this.terminalText.renderStaticPass(this.renderer);

		// Render the main scene
		this.renderer.render(this.scene, this.camera);
	};

	/**
	 * Attach an XTerm.js terminal instance to this CRT renderer
	 *
	 * This creates a connector that syncs the XTerm buffer to the CRT display.
	 * The XTerm terminal should be fully configured before attaching.
	 *
	 * @param xterm The XTerm.js Terminal instance to attach
	 */
	attachXTerm(xterm: Terminal): void {
		if (this.connector) {
			this.connector.dispose();
		}

		// Resize XTerm to match the terminal grid size
		const gridSize = this.terminalText.getGridSize();
		if (gridSize.cols > 0 && gridSize.rows > 0) {
			xterm.resize(gridSize.cols, gridSize.rows);
		}

		// Create the connector
		this.connector = new XTermConnector(xterm, this.terminalText);

		// Setup mouse selection on the container
		this.connector.setupMouseSelection(this.container);

		// Listen for grid size changes and resize XTerm accordingly
		this.terminalText.onGridSizeChange((cols, rows) => {
			if (cols > 0 && rows > 0 && this.connector) {
				this.connector.getXTerm().resize(cols, rows);
				this.connector.sync();
			}
		});

		// Initial sync
		this.connector.sync();
	}

	/**
	 * Detach the currently attached XTerm instance
	 */
	detachXTerm(): void {
		if (this.connector) {
			this.connector.dispose();
			this.connector = null;
		}
	}

	/**
	 * Get the current grid size (columns and rows)
	 */
	getGridSize(): { cols: number; rows: number } {
		return this.terminalText.getGridSize();
	}

	/**
	 * Get the TerminalText renderer (for advanced usage)
	 */
	getTerminalText(): TerminalText {
		return this.terminalText;
	}

	/**
	 * Get the Three.js renderer (for advanced usage)
	 */
	getRenderer(): THREE.WebGLRenderer {
		return this.renderer;
	}

	/**
	 * Get the Three.js scene (for advanced usage)
	 */
	getScene(): THREE.Scene {
		return this.scene;
	}

	/**
	 * Get the Three.js camera (for advanced usage)
	 */
	getCamera(): THREE.OrthographicCamera {
		return this.camera;
	}

	/**
	 * Focus the attached XTerm terminal for keyboard input
	 */
	focus(): void {
		if (this.connector) {
			this.connector.getXTerm().focus();
		}
	}

	/**
	 * Dispose of all resources
	 */
	dispose(): void {
		this.disposed = true;

		// Stop animation loop
		if (this.animationFrameId !== null) {
			cancelAnimationFrame(this.animationFrameId);
			this.animationFrameId = null;
		}

		// Remove event listeners
		window.removeEventListener("resize", this.handleResize);

		// Dispose connector
		if (this.connector) {
			this.connector.dispose();
			this.connector = null;
		}

		// Dispose Three.js resources
		this.terminalText.dispose();
		this.terminalFrame.dispose();
		this.renderer.dispose();

		// Remove renderer from DOM
		if (this.renderer.domElement.parentNode) {
			this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
		}
	}
}
