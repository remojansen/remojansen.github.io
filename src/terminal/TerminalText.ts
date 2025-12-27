/**
 * TerminalText - Renders terminal text to a texture
 * This implements the basic text rendering from cool-retro-term
 * similar to how QMLTermWidget renders text.
 *
 * Two-Pass Rendering Architecture (matching QML):
 * ================================================
 * Pass 1 (Static): Renders to staticRenderTarget (frameBuffer equivalent)
 *   - Screen curvature
 *   - Terminal text sampling
 *   - RGB shift (chromatic aberration)
 *   - Chroma color conversion
 *   - Bloom
 *   - Brightness
 *
 * Pass 2 (Dynamic): Reads from staticRenderTarget, renders to screen
 *   - Horizontal sync distortion
 *   - Jitter
 *   - Burn-in (samples from staticRenderTarget, not flickered output)
 *   - Static noise
 *   - Glowing line
 *   - Rasterization
 *   - Flickering (applied ONLY at the end)
 *   - Ambient light
 *
 * This separation ensures flickering doesn't affect the burn-in source,
 * preventing ghosting when text is static (matching QML behavior).
 */

import * as THREE from "three";
import { bloomGLSL } from "../shaders/effects/bloom";
import { brightnessGLSL } from "../shaders/effects/brightness";
import { burnInAccumulationGLSL, burnInGLSL } from "../shaders/effects/burnIn";
import { chromaColorGLSL } from "../shaders/effects/chromaColor";
import { flickeringGLSL } from "../shaders/effects/flickering";
import { glowingLineGLSL } from "../shaders/effects/glowingLine";
import { horizontalSyncGLSL } from "../shaders/effects/horizontalSync";
import { jitterGLSL } from "../shaders/effects/jitter";
import { noiseTextureGLSL } from "../shaders/effects/noiseTexture";
import { rasterizationGLSL } from "../shaders/effects/rasterization";
import { rgbShiftGLSL } from "../shaders/effects/rgbShift";
import { screenCurvatureGLSL } from "../shaders/effects/screenCurvature";
import { staticNoiseGLSL } from "../shaders/effects/staticNoise";
import { type Color, hexToColor, mixColors } from "../utils";

/**
 * Font configuration based on Fonts.qml TERMINUS_SCALED settings
 *
 * QML calculation flow:
 * - totalFontScaling = baseFontScaling * fontScaling = 0.75 * 1.0 = 0.75
 * - For low resolution fonts: screenScaling = baseScaling * totalFontScaling = 3.0 * 0.75 = 2.25
 * - pixelSize stays at 12 (rendered small, then scaled up)
 * - lineSpacing = 1 pixel
 */
const FONT_CONFIG = {
	family: "Terminus",
	fallback: "monospace",
	pixelSize: 12, // Base pixel size for low resolution font
	baseScaling: 3.0, // Scaling factor from Fonts.qml
	baseFontScaling: 0.75, // From ApplicationSettings.qml
	fontScaling: 1.0, // User adjustable (default 1.0)
	lineSpacing: 1, // Extra pixels between lines
	fontWidth: 1.0, // Horizontal scaling
};

/**
 * Terminal settings based on ApplicationSettings.qml Monochrome Green profile
 */
const TERMINAL_SETTINGS = {
	fontColor: "#0ccc68", // Monochrome Green theme
	backgroundColor: "#000000", // Base background (gets mixed with font color)
	// QML margin calculation:
	// margin = Utils.lint(1.0, 20.0, _margin) = lerp(1, 20, 0.5) = 10.5
	// frameMargin = Utils.lint(1.0, 50.0, _frameMargin) = lerp(1, 50, 0.5) = 25.5
	// totalMargin = frameMargin + margin = 36
	// Increased _frameMargin to 0.5 to create more space between text and screen edges
	// This pushes content further from the reflection at the curved edges
	_margin: 0.5,
	_frameMargin: 0.5,
	contrast: 0.7959, // From Monochrome Green profile
	saturationColor: 0.0, // Monochrome Green has 0 saturation
};

/**
 * Linear interpolation (matches QML Utils.lint)
 */
function lint(a: number, b: number, t: number): number {
	return a + (b - a) * t;
}

/**
 * Calculate the actual background color by mixing with font color
 * This matches the QML behavior where background gets a tint of the font color
 * QML: backgroundColor = mix(_backgroundColor, saturatedColor, 0.7 + (contrast * 0.3))
 */
function calculateMixedBackgroundColor(
	baseBackground: Color,
	fontColor: Color,
	contrast: number,
	saturationColor: number,
): Color {
	// First create saturated color (mix of white and font color)
	const white: Color = { r: 1, g: 1, b: 1, a: 1 };
	const saturatedColor = mixColors(white, fontColor, saturationColor * 0.5);

	// Mix background with saturated color based on contrast
	// Higher contrast = more of the original background
	const mixFactor = 0.7 + contrast * 0.3;
	return mixColors(baseBackground, saturatedColor, mixFactor);
}

export class TerminalText {
	public mesh: THREE.Mesh;
	private staticMaterial: THREE.ShaderMaterial;
	private dynamicMaterial: THREE.ShaderMaterial;
	private texture: THREE.CanvasTexture;
	private noiseTexture: THREE.Texture;
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;

	// Two-pass rendering
	private staticRenderTarget: THREE.WebGLRenderTarget;
	private staticScene: THREE.Scene;
	private staticCamera: THREE.OrthographicCamera;
	private staticMesh: THREE.Mesh;

	// Burn-in effect (ping-pong buffers for frame accumulation)
	private burnInRenderTargets: [
		THREE.WebGLRenderTarget,
		THREE.WebGLRenderTarget,
	];
	private burnInCurrentIndex: number = 0;
	private burnInMaterial: THREE.ShaderMaterial;
	private burnInScene: THREE.Scene;
	private burnInCamera: THREE.OrthographicCamera;
	private burnInMesh: THREE.Mesh;
	private burnInAmount: number = 0.2517; // Default burn-in amount
	private lastFrameTime: number = 0; // For calculating delta time

	// Burn-in timing settings (matching QML)
	private readonly minBurnInFadeTime: number = 160; // From ApplicationSettings.qml
	private readonly maxBurnInFadeTime: number = 1600; // From ApplicationSettings.qml

	// Terminal state
	private text: string = "guest@remojansen.com ~ $ ";
	private fontColor: Color;
	private backgroundColor: Color;
	private charWidth: number = 0;
	private charHeight: number = 0;
	private cols: number = 80;
	private rows: number = 24;
	private fontLoaded: boolean = false;

	// Cursor state
	private cursorCol: number = 26;
	private cursorRow: number = 0;
	private cursorVisible: boolean = true;
	private cursorBlinking: boolean = false; // Disabled to match QML version
	private cursorBlinkState: boolean = true;
	private cursorBlinkInterval: number | null = null;
	private readonly CURSOR_BLINK_RATE: number = 530; // ms, matching typical terminal blink rate

	// Selection state (stored in absolute buffer coordinates)
	private selectionStart: { col: number; row: number } | null = null;
	private selectionEnd: { col: number; row: number } | null = null;
	private selectionViewportY: number = 0;

	// Scaling (matching QML)
	private screenScaling: number;
	private totalFontScaling: number;
	private totalMargin: number;

	// Window scaling factor (for retina/hidpi displays)
	private windowScaling: number = 1.0;

	// Device pixel ratio for high-DPI rendering
	private devicePixelRatio: number = 1.0;

	// Logical dimensions (CSS pixels, before devicePixelRatio scaling)
	private logicalWidth: number = 0;
	private logicalHeight: number = 0;

	// Callback for when grid size changes (e.g., when font loads)
	private onGridSizeChangeCallback:
		| ((cols: number, rows: number) => void)
		| null = null;

	// Video playback state
	private videoElement: HTMLVideoElement | null = null;
	private videoTexture: THREE.VideoTexture | null = null;
	private isPlayingVideo: boolean = false;
	private originalTexture: THREE.CanvasTexture | null = null;

	constructor(width: number, height: number) {
		// Store logical dimensions
		this.logicalWidth = width;
		this.logicalHeight = height;

		this.fontColor = hexToColor(TERMINAL_SETTINGS.fontColor);
		const baseBackground = hexToColor(TERMINAL_SETTINGS.backgroundColor);

		// Calculate scaling values (matching QML)
		this.totalFontScaling =
			FONT_CONFIG.baseFontScaling * FONT_CONFIG.fontScaling;
		this.screenScaling = FONT_CONFIG.baseScaling * this.totalFontScaling;

		// Device pixel ratio for high-DPI (retina) displays
		// This ensures sharp rendering on all displays
		this.devicePixelRatio = window.devicePixelRatio || 1;

		// Window scaling - use 1.0 to match QML behavior (not devicePixelRatio)
		// The QML version doesn't multiply by devicePixelRatio for the effect scaling
		this.windowScaling = 1.0;

		// Calculate margins (matching QML Utils.lint)
		const margin = lint(1.0, 20.0, TERMINAL_SETTINGS._margin);
		const frameMargin = lint(1.0, 50.0, TERMINAL_SETTINGS._frameMargin);
		this.totalMargin = frameMargin + margin;

		// Calculate mixed background color (gives the green tint like QML)
		this.backgroundColor = calculateMixedBackgroundColor(
			baseBackground,
			this.fontColor,
			TERMINAL_SETTINGS.contrast,
			TERMINAL_SETTINGS.saturationColor,
		);

		// Create canvas for text rendering at full device pixel resolution
		// This ensures sharp text on high-DPI (retina) displays
		this.canvas = document.createElement("canvas");
		this.canvas.width = width * this.devicePixelRatio;
		this.canvas.height = height * this.devicePixelRatio;

		const ctx = this.canvas.getContext("2d", { alpha: false });
		if (!ctx) {
			throw new Error("Could not get 2D context");
		}
		this.ctx = ctx;

		// Scale the context to match device pixel ratio
		this.ctx.setTransform(
			this.devicePixelRatio,
			0,
			0,
			this.devicePixelRatio,
			0,
			0,
		);

		// Create texture from canvas
		this.texture = new THREE.CanvasTexture(this.canvas);
		this.texture.minFilter = THREE.LinearFilter;
		this.texture.magFilter = THREE.NearestFilter; // Pixel-perfect for low-res fonts

		// Load noise texture (allNoise512.png) for dynamic effects
		const textureLoader = new THREE.TextureLoader();
		this.noiseTexture = textureLoader.load("/assets/images/allNoise512.png");
		this.noiseTexture.wrapS = THREE.RepeatWrapping;
		this.noiseTexture.wrapT = THREE.RepeatWrapping;
		this.noiseTexture.minFilter = THREE.LinearFilter;
		this.noiseTexture.magFilter = THREE.LinearFilter;

		// Calculate scaleNoiseSize (matches QML formula)
		const scaleNoiseSize = new THREE.Vector2(
			(width * 0.75) / (512 * this.windowScaling * this.totalFontScaling),
			(height * 0.75) / (512 * this.windowScaling * this.totalFontScaling),
		);

		// ===== TWO-PASS RENDERING SETUP =====

		// Create render target for static pass (equivalent to QML frameBuffer)
		// Use full device pixel resolution for sharp rendering on high-DPI displays
		const renderTargetWidth = width * this.devicePixelRatio;
		const renderTargetHeight = height * this.devicePixelRatio;
		this.staticRenderTarget = new THREE.WebGLRenderTarget(
			renderTargetWidth,
			renderTargetHeight,
			{
				minFilter: THREE.LinearFilter,
				magFilter: THREE.LinearFilter,
				format: THREE.RGBAFormat,
				type: THREE.UnsignedByteType,
			},
		);

		// Create scene and camera for static pass
		this.staticScene = new THREE.Scene();
		this.staticCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
		this.staticCamera.position.z = 1;

		// Create static shader material (Pass 1)
		this.staticMaterial = new THREE.ShaderMaterial({
			uniforms: {
				textTexture: { value: this.texture },
				fontColor: {
					value: new THREE.Vector3(
						this.fontColor.r,
						this.fontColor.g,
						this.fontColor.b,
					),
				},
				backgroundColor: {
					value: new THREE.Vector3(
						this.backgroundColor.r,
						this.backgroundColor.g,
						this.backgroundColor.b,
					),
				},
				chromaColor: { value: 0.0 },
				screenCurvature: { value: 0.3 },
				rgbShift: { value: 0.0 },
				bloom: { value: 0.5538 * 2.5 },
				brightness: { value: 0.5 },
				resolution: {
					value: new THREE.Vector2(renderTargetWidth, renderTargetHeight),
				},
			},
			vertexShader: terminalTextVertexShader,
			fragmentShader: staticPassFragmentShader,
			transparent: false,
		});

		// Create mesh for static pass
		const staticGeometry = new THREE.PlaneGeometry(2, 2);
		this.staticMesh = new THREE.Mesh(staticGeometry, this.staticMaterial);
		this.staticScene.add(this.staticMesh);

		// ===== BURN-IN EFFECT SETUP (Ping-Pong Buffers) =====
		// Create two render targets for ping-pong buffer accumulation
		// This mimics QML's recursive ShaderEffectSource
		this.burnInRenderTargets = [
			new THREE.WebGLRenderTarget(renderTargetWidth, renderTargetHeight, {
				minFilter: THREE.LinearFilter,
				magFilter: THREE.LinearFilter,
				format: THREE.RGBAFormat,
				type: THREE.UnsignedByteType,
			}),
			new THREE.WebGLRenderTarget(renderTargetWidth, renderTargetHeight, {
				minFilter: THREE.LinearFilter,
				magFilter: THREE.LinearFilter,
				format: THREE.RGBAFormat,
				type: THREE.UnsignedByteType,
			}),
		];

		// Create scene and camera for burn-in pass
		this.burnInScene = new THREE.Scene();
		this.burnInCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
		this.burnInCamera.position.z = 1;

		// Create burn-in accumulation shader material
		this.burnInMaterial = new THREE.ShaderMaterial({
			uniforms: {
				currentSource: { value: this.staticRenderTarget.texture },
				burnInSource: { value: this.burnInRenderTargets[1].texture },
				burnInTime: { value: this.calculateBurnInFadeTime() },
				deltaTime: { value: 0.016 }, // ~60fps default
			},
			vertexShader: terminalTextVertexShader,
			fragmentShader: burnInAccumulationShader,
			transparent: false,
		});

		// Create mesh for burn-in pass
		const burnInGeometry = new THREE.PlaneGeometry(2, 2);
		this.burnInMesh = new THREE.Mesh(burnInGeometry, this.burnInMaterial);
		this.burnInScene.add(this.burnInMesh);

		// Initialize frame timing
		this.lastFrameTime = performance.now();

		// Create dynamic shader material (Pass 2) - this is what renders to screen
		this.dynamicMaterial = new THREE.ShaderMaterial({
			uniforms: {
				// Static pass output (frameBuffer equivalent)
				frameBuffer: { value: this.staticRenderTarget.texture },
				// Burn-in accumulated buffer
				burnInSource: { value: this.burnInRenderTargets[0].texture },
				// Original text texture for burn-in (if we implement it properly later)
				textTexture: { value: this.texture },
				noiseSource: { value: this.noiseTexture },
				scaleNoiseSize: { value: scaleNoiseSize },
				fontColor: {
					value: new THREE.Vector3(
						this.fontColor.r,
						this.fontColor.g,
						this.fontColor.b,
					),
				},
				backgroundColor: {
					value: new THREE.Vector3(
						this.backgroundColor.r,
						this.backgroundColor.g,
						this.backgroundColor.b,
					),
				},
				chromaColor: { value: 0.0 },
				screenCurvature: { value: 0.3 },
				ambientLight: { value: 0.2 },
				resolution: {
					value: new THREE.Vector2(renderTargetWidth, renderTargetHeight),
				},
				time: { value: 0.0 },
				flickering: { value: 0.1 },
				horizontalSync: { value: 0.08 },
				jitter: { value: 0.1997 },
				staticNoise: { value: 0.1198 },
				glowingLine: { value: 0.2 * 0.2 },
				burnIn: { value: this.burnInAmount },
				rasterizationMode: { value: 1 }, // 0=none, 1=scanline, 2=pixel, 3=subpixel
				rasterizationIntensity: { value: 0.5 },
				virtualResolution: { value: new THREE.Vector2(80, 24) },
			},
			vertexShader: terminalTextVertexShader,
			fragmentShader: dynamicPassFragmentShader,
			transparent: false,
		});

		// Create plane geometry for main mesh (renders dynamic pass to screen)
		const geometry = new THREE.PlaneGeometry(2, 2);
		this.mesh = new THREE.Mesh(geometry, this.dynamicMaterial);

		// Calculate initial font metrics synchronously with fallback font
		// This ensures we have valid dimensions immediately
		this.calculateFontMetrics();
		this.render();

		// Load custom font asynchronously and recalculate when ready
		this.loadFont().then(() => {
			this.calculateFontMetrics();
			this.render();
		});

		// Cursor blinking disabled by default to match QML version
		// Call setCursorBlinking(true) to enable if needed
	}

	/**
	 * Load the Terminus font
	 */
	private async loadFont(): Promise<void> {
		try {
			const font = new FontFace(
				"Terminus",
				"url(/assets/fonts/modern-terminus/TerminusTTF-4.46.0.ttf)",
			);
			await font.load();
			document.fonts.add(font);
			this.fontLoaded = true;
			console.log("Terminus font loaded successfully");
		} catch (error) {
			console.warn("Could not load Terminus font, using fallback:", error);
			this.fontLoaded = false;
		}
	}

	/**
	 * Calculate font metrics based on configuration
	 *
	 * QML PreprocessedTerminal.qml calculation:
	 * - totalWidth = Math.floor(parent.width / (screenScaling * fontWidth))
	 * - totalHeight = Math.floor(parent.height / screenScaling)
	 * - margin (in terminal space) = appSettings.totalMargin / screenScaling
	 * - rawWidth = totalWidth - 2 * margin
	 * - rawHeight = totalHeight - 2 * margin
	 */
	private calculateFontMetrics(): void {
		const fontSize = FONT_CONFIG.pixelSize;
		const fontFamily = this.fontLoaded
			? `"${FONT_CONFIG.family}", ${FONT_CONFIG.fallback}`
			: FONT_CONFIG.fallback;

		this.ctx.font = `${fontSize}px ${fontFamily}`;

		// Measure character width - don't round up to avoid losing columns
		const metrics = this.ctx.measureText("M");
		this.charWidth = metrics.width * FONT_CONFIG.fontWidth;
		this.charHeight = fontSize + FONT_CONFIG.lineSpacing;

		// Calculate virtual dimensions (matching QML) - use logical dimensions, not canvas pixels
		// The canvas is at higher resolution for sharp rendering, but layout uses logical pixels
		const totalWidth = Math.floor(
			this.logicalWidth / (this.screenScaling * FONT_CONFIG.fontWidth),
		);
		const totalHeight = Math.floor(this.logicalHeight / this.screenScaling);

		// Margin in terminal coordinates - use Math.floor to match QML's integer truncation
		// QML: property int margin: appSettings.totalMargin / screenScaling
		const marginInTerminalSpace = Math.floor(
			this.totalMargin / this.screenScaling,
		);

		// Raw dimensions (usable area for text)
		const rawWidth = totalWidth - 2 * marginInTerminalSpace;
		const rawHeight = totalHeight - 2 * marginInTerminalSpace;

		// Calculate grid size - use floor to get characters that fully fit
		this.cols = Math.floor(rawWidth / this.charWidth);
		this.rows = Math.floor(rawHeight / this.charHeight);

		// Update virtual resolution uniform in dynamic shader
		this.dynamicMaterial.uniforms.virtualResolution.value.set(
			totalWidth,
			totalHeight,
		);

		console.log(
			`Terminal: total=${totalWidth}x${totalHeight}, raw=${rawWidth}x${rawHeight}, ` +
				`grid=${this.cols}x${this.rows}, char=${this.charWidth.toFixed(2)}x${this.charHeight}, ` +
				`screenScaling=${this.screenScaling.toFixed(2)}, margin=${marginInTerminalSpace}, dpr=${this.devicePixelRatio}`,
		);

		// Notify listener of grid size change
		if (this.onGridSizeChangeCallback) {
			this.onGridSizeChangeCallback(this.cols, this.rows);
		}
	}

	/**
	 * Set the terminal text content
	 */
	setText(text: string): void {
		this.text = text;
		this.render();
	}

	/**
	 * Set the cursor position
	 * @param col Column (0-indexed)
	 * @param row Row (0-indexed)
	 */
	setCursorPosition(col: number, row: number): void {
		this.cursorCol = col;
		this.cursorRow = row;
		this.render();
	}

	/**
	 * Set cursor visibility
	 * @param visible Whether the cursor should be visible
	 */
	setCursorVisible(visible: boolean): void {
		this.cursorVisible = visible;
		this.render();
	}

	/**
	 * Enable or disable cursor blinking
	 * @param blinking Whether the cursor should blink
	 */
	setCursorBlinking(blinking: boolean): void {
		this.cursorBlinking = blinking;
		if (blinking) {
			this.startCursorBlink();
		} else {
			this.stopCursorBlink();
			this.cursorBlinkState = true;
			this.render();
		}
	}

	/**
	 * Start the cursor blink timer
	 */
	private startCursorBlink(): void {
		if (this.cursorBlinkInterval !== null) {
			return; // Already blinking
		}
		this.cursorBlinkInterval = window.setInterval(() => {
			if (this.cursorBlinking) {
				this.cursorBlinkState = !this.cursorBlinkState;
				this.render();
			}
		}, this.CURSOR_BLINK_RATE);
	}

	/**
	 * Stop the cursor blink timer
	 */
	private stopCursorBlink(): void {
		if (this.cursorBlinkInterval !== null) {
			window.clearInterval(this.cursorBlinkInterval);
			this.cursorBlinkInterval = null;
		}
	}

	/**
	 * Reset cursor blink state (called when user types to show cursor immediately)
	 */
	resetCursorBlink(): void {
		this.cursorBlinkState = true;
		if (this.cursorBlinkInterval !== null) {
			this.stopCursorBlink();
			this.startCursorBlink();
		}
		this.render();
	}

	/**
	 * Set text selection range (in absolute buffer coordinates)
	 * @param start Start position (col, row) or null to clear
	 * @param end End position (col, row) or null to clear
	 * @param viewportY Current viewport Y offset for rendering
	 */
	setSelection(
		start: { col: number; row: number } | null,
		end: { col: number; row: number } | null,
		viewportY: number = 0,
	): void {
		this.selectionStart = start;
		this.selectionEnd = end;
		this.selectionViewportY = viewportY;
		this.render();
	}

	/**
	 * Update the viewport offset for selection rendering (called on scroll)
	 * @param viewportY Current viewport Y offset
	 */
	updateSelectionViewport(viewportY: number): void {
		this.selectionViewportY = viewportY;
		// No need to re-render here, render() will be called by setText()
	}

	/**
	 * Clear the current selection
	 */
	clearSelection(): void {
		this.selectionStart = null;
		this.selectionEnd = null;
		this.render();
	}

	/**
	 * Get the current selection range
	 */
	getSelection(): {
		start: { col: number; row: number } | null;
		end: { col: number; row: number } | null;
	} {
		return { start: this.selectionStart, end: this.selectionEnd };
	}

	/**
	 * Convert pixel coordinates to grid position
	 * @param pixelX X coordinate in CSS pixels
	 * @param pixelY Y coordinate in CSS pixels
	 * @returns Grid position { col, row }
	 */
	pixelToGrid(pixelX: number, pixelY: number): { col: number; row: number } {
		const marginPixels = this.totalMargin;
		const cellWidth = this.charWidth * this.screenScaling;
		const cellHeight = this.charHeight * this.screenScaling;

		const col = Math.floor((pixelX - marginPixels) / cellWidth);
		const row = Math.floor((pixelY - marginPixels) / cellHeight);

		// Clamp to valid range
		return {
			col: Math.max(0, Math.min(col, this.cols - 1)),
			row: Math.max(0, Math.min(row, this.rows - 1)),
		};
	}

	/**
	 * Check if a cell is within the current selection
	 * @param col Column in viewport coordinates
	 * @param row Row in viewport coordinates
	 */
	private isCellSelected(col: number, row: number): boolean {
		if (!this.selectionStart || !this.selectionEnd) {
			return false;
		}

		// Convert viewport row to absolute buffer row
		const absRow = row + this.selectionViewportY;

		// Normalize selection (start may be after end if selecting backwards)
		let startRow = this.selectionStart.row;
		let startCol = this.selectionStart.col;
		let endRow = this.selectionEnd.row;
		let endCol = this.selectionEnd.col;

		// Swap if selection is backwards
		if (
			startRow > endRow ||
			(startRow === endRow && startCol > endCol)
		) {
			[startRow, endRow] = [endRow, startRow];
			[startCol, endCol] = [endCol, startCol];
		}

		// Check if cell is in selection range (using absolute row)
		if (absRow < startRow || absRow > endRow) {
			return false;
		}

		if (absRow === startRow && absRow === endRow) {
			// Single row selection
			return col >= startCol && col <= endCol;
		}

		if (absRow === startRow) {
			// First row of multi-row selection
			return col >= startCol;
		}

		if (absRow === endRow) {
			// Last row of multi-row selection
			return col <= endCol;
		}

		// Middle rows are fully selected
		return true;
	}

	/**
	 * Render the terminal text to the canvas
	 */
	private render(): void {
		const { ctx, canvas } = this;
		const fontSize = FONT_CONFIG.pixelSize;
		const fontFamily = this.fontLoaded
			? `"${FONT_CONFIG.family}", ${FONT_CONFIG.fallback}`
			: FONT_CONFIG.fallback;

		// Clear with background color
		ctx.fillStyle = `rgb(${Math.floor(this.backgroundColor.r * 255)}, ${Math.floor(this.backgroundColor.g * 255)}, ${Math.floor(this.backgroundColor.b * 255)})`;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Set up text rendering
		ctx.font = `${fontSize}px ${fontFamily}`;
		ctx.textBaseline = "top";
		ctx.imageSmoothingEnabled = false;

		const lines = this.text.split("\n");
		const marginPixels = this.totalMargin;

		// Render all rows in the viewport (even empty ones)
		// This ensures the full screen is rendered properly
		for (let row = 0; row < this.rows; row++) {
			const line = row < lines.length ? lines[row] : "";
			const y = marginPixels + row * this.charHeight * this.screenScaling;

			for (let col = 0; col < this.cols; col++) {
				const x = marginPixels + col * this.charWidth * this.screenScaling;
				const char = col < line.length ? line[col] : "";
				const isSelected = this.isCellSelected(col, row);

				if (isSelected) {
					// Draw selection highlight (white block like cursor)
					const cellWidth = this.charWidth * this.screenScaling;
					const cellHeight = this.charHeight * this.screenScaling;
					ctx.fillStyle = "#ffffff";
					ctx.fillRect(x, y, cellWidth, cellHeight);

					// Draw character in background color (inverted)
					if (char) {
						ctx.fillStyle = `rgb(${Math.floor(this.backgroundColor.r * 255)}, ${Math.floor(this.backgroundColor.g * 255)}, ${Math.floor(this.backgroundColor.b * 255)})`;
						ctx.save();
						ctx.translate(x, y);
						ctx.scale(this.screenScaling, this.screenScaling);
						ctx.fillText(char, 0, 0);
						ctx.restore();
					}
				} else if (char) {
					// Draw character normally in white (shader colorizes it)
					ctx.fillStyle = "#ffffff";
					ctx.save();
					ctx.translate(x, y);
					ctx.scale(this.screenScaling, this.screenScaling);
					ctx.fillText(char, 0, 0);
					ctx.restore();
				}
			}
		}

		// Render cursor (green block, matching QML fullCursorHeight: true)
		if (
			this.cursorVisible &&
			this.cursorBlinkState &&
			this.cursorRow < this.rows
		) {
			// Calculate cursor position in pixels
			const cursorX =
				marginPixels + this.cursorCol * this.charWidth * this.screenScaling;
			const cursorY =
				marginPixels + this.cursorRow * this.charHeight * this.screenScaling;

			// Cursor dimensions (full character cell, matching QML fullCursorHeight)
			const cursorWidth = this.charWidth * this.screenScaling;
			const cursorHeight = this.charHeight * this.screenScaling;

			// Draw cursor block in white (shader will colorize to green)
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(cursorX, cursorY, cursorWidth, cursorHeight);

			// If there's a character under the cursor, redraw it in background color
			// This creates the inverted cursor effect
			if (this.cursorRow < lines.length) {
				const line = lines[this.cursorRow];
				if (this.cursorCol < line.length) {
					const charUnderCursor = line[this.cursorCol];
					ctx.fillStyle = `rgb(${Math.floor(this.backgroundColor.r * 255)}, ${Math.floor(this.backgroundColor.g * 255)}, ${Math.floor(this.backgroundColor.b * 255)})`;
					ctx.save();
					ctx.translate(cursorX, cursorY);
					ctx.scale(this.screenScaling, this.screenScaling);
					ctx.fillText(charUnderCursor, 0, 0);
					ctx.restore();
				}
			}
		}

		this.texture.needsUpdate = true;
	}

	/**
	 * Update the terminal size
	 */
	updateSize(width: number, height: number): void {
		// Store logical dimensions for layout calculations
		this.logicalWidth = width;
		this.logicalHeight = height;

		// Update device pixel ratio in case it changed (e.g., moving window between displays)
		this.devicePixelRatio = window.devicePixelRatio || 1;

		// Calculate high-resolution dimensions
		const hiResWidth = width * this.devicePixelRatio;
		const hiResHeight = height * this.devicePixelRatio;

		// Update canvas at full device pixel resolution
		this.canvas.width = hiResWidth;
		this.canvas.height = hiResHeight;
		this.ctx.setTransform(
			this.devicePixelRatio,
			0,
			0,
			this.devicePixelRatio,
			0,
			0,
		);

		// Update render target size at full resolution
		this.staticRenderTarget.setSize(hiResWidth, hiResHeight);

		// Update burn-in render targets
		this.burnInRenderTargets[0].setSize(hiResWidth, hiResHeight);
		this.burnInRenderTargets[1].setSize(hiResWidth, hiResHeight);

		// Update static material uniforms with high-res dimensions
		this.staticMaterial.uniforms.resolution.value.set(hiResWidth, hiResHeight);

		// Update dynamic material uniforms with high-res dimensions
		this.dynamicMaterial.uniforms.resolution.value.set(hiResWidth, hiResHeight);
		this.dynamicMaterial.uniforms.scaleNoiseSize.value.set(
			(hiResWidth * 0.75) / (512 * this.totalFontScaling),
			(hiResHeight * 0.75) / (512 * this.totalFontScaling),
		);
		this.calculateFontMetrics();
		this.render();
	}

	/**
	 * Set the font color
	 */
	setFontColor(hex: string): void {
		this.fontColor = hexToColor(hex);
		const colorVec = new THREE.Vector3(
			this.fontColor.r,
			this.fontColor.g,
			this.fontColor.b,
		);
		this.staticMaterial.uniforms.fontColor.value.copy(colorVec);
		this.dynamicMaterial.uniforms.fontColor.value.copy(colorVec);
	}

	/**
	 * Set the background color
	 */
	setBackgroundColor(hex: string): void {
		this.backgroundColor = hexToColor(hex);
		const colorVec = new THREE.Vector3(
			this.backgroundColor.r,
			this.backgroundColor.g,
			this.backgroundColor.b,
		);
		this.staticMaterial.uniforms.backgroundColor.value.copy(colorVec);
		this.dynamicMaterial.uniforms.backgroundColor.value.copy(colorVec);
		this.render();
	}

	/**
	 * Set the screen curvature amount
	 * @param curvature Value from 0 (flat) to 1 (maximum curvature)
	 */
	setScreenCurvature(curvature: number): void {
		this.staticMaterial.uniforms.screenCurvature.value = curvature;
		this.dynamicMaterial.uniforms.screenCurvature.value = curvature;
	}

	/**
	 * Set the RGB shift amount (chromatic aberration)
	 * @param amount Value from 0 (none) to ~0.01 (strong effect)
	 */
	setRgbShift(amount: number): void {
		this.staticMaterial.uniforms.rgbShift.value = amount;
	}

	/**
	 * Set the bloom intensity
	 * @param intensity Value from 0 (none) to 1 (maximum bloom)
	 * Note: Internally multiplied by 2.5 to match QML: appSettings.bloom * 2.5
	 */
	setBloom(intensity: number): void {
		this.staticMaterial.uniforms.bloom.value = intensity * 2.5;
	}

	/**
	 * Set the brightness level
	 * @param level Value from 0 (dim, 0.5x) to 1 (bright, 1.5x)
	 */
	setBrightness(level: number): void {
		this.staticMaterial.uniforms.brightness.value = level;
	}

	/**
	 * Set the ambient light glow
	 * @param amount Value from 0 (none) to 1 (maximum ambient glow)
	 */
	setAmbientLight(amount: number): void {
		this.dynamicMaterial.uniforms.ambientLight.value = amount;
	}

	/**
	 * Set the chroma color amount
	 * @param amount Value from 0 (monochrome) to 1 (full color)
	 */
	setChromaColor(amount: number): void {
		this.staticMaterial.uniforms.chromaColor.value = amount;
		this.dynamicMaterial.uniforms.chromaColor.value = amount;
	}

	/**
	 * Set the flickering intensity
	 * @param amount Value from 0 (none) to 1 (maximum flickering)
	 */
	setFlickering(amount: number): void {
		this.dynamicMaterial.uniforms.flickering.value = amount;
	}

	/**
	 * Set the horizontal sync distortion amount
	 * @param amount Value from 0 (none) to 1 (maximum distortion)
	 */
	setHorizontalSync(amount: number): void {
		this.dynamicMaterial.uniforms.horizontalSync.value = amount;
	}

	/**
	 * Set the jitter amount (random pixel displacement)
	 * @param amount Value from 0 (none) to 1 (maximum jitter)
	 */
	setJitter(amount: number): void {
		this.dynamicMaterial.uniforms.jitter.value = amount;
	}

	/**
	 * Set the static noise intensity
	 * @param amount Value from 0 (none) to 1 (maximum noise)
	 */
	setStaticNoise(amount: number): void {
		this.dynamicMaterial.uniforms.staticNoise.value = amount;
	}

	/**
	 * Set the glowing line (scanning beam) intensity
	 * @param amount Value from 0 (none) to 1 (maximum glow)
	 * Note: Internally multiplied by 0.2 to match QML: appSettings.glowingLine * 0.2
	 */
	setGlowingLine(amount: number): void {
		this.dynamicMaterial.uniforms.glowingLine.value = amount * 0.2;
	}

	/**
	 * Set the burn-in (phosphor persistence) intensity
	 * @param amount Value from 0 (none) to 1 (maximum burn-in)
	 */
	setBurnIn(amount: number): void {
		this.burnInAmount = amount;
		this.dynamicMaterial.uniforms.burnIn.value = amount;
		// Update burn-in fade time based on intensity
		this.burnInMaterial.uniforms.burnInTime.value =
			this.calculateBurnInFadeTime();
	}

	/**
	 * Calculate burn-in fade time based on burn-in intensity
	 * Matches QML: burnInFadeTime = 1 / Utils.lint(_minBurnInFadeTime, _maxBurnInFadeTime, burnIn)
	 * @returns Fade time factor (higher = faster fade)
	 */
	private calculateBurnInFadeTime(): number {
		// Linear interpolation between min and max fade times
		const fadeTime =
			this.minBurnInFadeTime +
			(this.maxBurnInFadeTime - this.minBurnInFadeTime) * this.burnInAmount;
		// Return 1/fadeTime (matching QML formula)
		return 1.0 / fadeTime;
	}

	/**
	 * Set the rasterization mode
	 * @param mode 0=none, 1=scanline, 2=pixel, 3=subpixel
	 */
	setRasterizationMode(mode: number): void {
		this.dynamicMaterial.uniforms.rasterizationMode.value = mode;
	}

	/**
	 * Set the rasterization intensity
	 * @param intensity Value from 0 (none) to 1 (full effect)
	 */
	setRasterizationIntensity(intensity: number): void {
		this.dynamicMaterial.uniforms.rasterizationIntensity.value = intensity;
	}

	/**
	 * Set the virtual resolution (for rasterization patterns)
	 * @param cols Number of columns
	 * @param rows Number of rows
	 */
	setVirtualResolution(cols: number, rows: number): void {
		this.dynamicMaterial.uniforms.virtualResolution.value.set(cols, rows);
	}

	/**
	 * Update the time uniform for animated effects
	 * QML TimeManager.qml loops time from 0 to 100000 over 100 seconds
	 * This matches that behavior for consistent effect timing
	 * @param time Elapsed time in milliseconds (like performance.now())
	 */
	updateTime(time: number): void {
		// Loop time from 0 to 100000 (matching QML TimeManager.qml)
		// The QML animation goes from 0 to 100000 over 100000ms duration
		this.dynamicMaterial.uniforms.time.value = time % 100000;
	}

	/**
	 * Render the static pass and burn-in accumulation to render targets
	 * This must be called each frame before the main scene renders
	 * @param renderer The WebGL renderer
	 */
	renderStaticPass(renderer: THREE.WebGLRenderer): void {
		// Calculate delta time for burn-in decay
		const currentTime = performance.now();
		const deltaTime = (currentTime - this.lastFrameTime) / 1000.0; // Convert to seconds
		this.lastFrameTime = currentTime;

		// 1. Render static pass (terminal content with curvature, bloom, etc.)
		renderer.setRenderTarget(this.staticRenderTarget);
		renderer.render(this.staticScene, this.staticCamera);

		// 2. Render burn-in accumulation pass (if burn-in is enabled)
		if (this.burnInAmount > 0) {
			// Update burn-in uniform with delta time
			this.burnInMaterial.uniforms.deltaTime.value = deltaTime;

			// Source is the previous burn-in buffer (ping-pong)
			const readIndex = this.burnInCurrentIndex;
			const writeIndex = 1 - this.burnInCurrentIndex;

			this.burnInMaterial.uniforms.burnInSource.value =
				this.burnInRenderTargets[readIndex].texture;
			this.burnInMaterial.uniforms.currentSource.value =
				this.staticRenderTarget.texture;

			// Render burn-in accumulation to the write buffer
			renderer.setRenderTarget(this.burnInRenderTargets[writeIndex]);
			renderer.render(this.burnInScene, this.burnInCamera);

			// Update dynamic material to read from the new burn-in buffer
			this.dynamicMaterial.uniforms.burnInSource.value =
				this.burnInRenderTargets[writeIndex].texture;

			// Swap buffers for next frame
			this.burnInCurrentIndex = writeIndex;
		}

		renderer.setRenderTarget(null);
	}

	/**
	 * Play a video with CRT effects
	 * @param videoUrl URL to the video file
	 * @returns Promise that resolves when video ends or is stopped
	 */
	playVideo(videoUrl: string): Promise<void> {
		return new Promise((resolve, reject) => {
			// Create video element
			this.videoElement = document.createElement("video");
			this.videoElement.src = videoUrl;
			this.videoElement.crossOrigin = "anonymous";
			this.videoElement.playsInline = true;
			this.videoElement.muted = false; // Allow audio

			// Handle video load
			this.videoElement.onloadedmetadata = () => {
				if (!this.videoElement) return;

				// Create video texture
				this.videoTexture = new THREE.VideoTexture(this.videoElement);
				this.videoTexture.minFilter = THREE.LinearFilter;
				this.videoTexture.magFilter = THREE.LinearFilter;
				this.videoTexture.format = THREE.RGBAFormat;

				// Store original texture and swap to video
				this.originalTexture = this.texture;
				this.staticMaterial.uniforms.textTexture.value = this.videoTexture;
				this.dynamicMaterial.uniforms.textTexture.value = this.videoTexture;

				// Hide cursor during video playback
				this.cursorVisible = false;

				// Mark as playing video
				this.isPlayingVideo = true;

				// Start playback
				this.videoElement.play().catch(reject);
			};

			// Handle video end
			this.videoElement.onended = () => {
				this.stopVideo();
				resolve();
			};

			// Handle errors
			this.videoElement.onerror = () => {
				this.stopVideo();
				reject(new Error("Failed to load video"));
			};

			// Load the video
			this.videoElement.load();
		});
	}

	/**
	 * Stop video playback and restore terminal display
	 */
	stopVideo(): void {
		if (this.videoElement) {
			this.videoElement.pause();
			this.videoElement.src = "";
			this.videoElement = null;
		}

		if (this.videoTexture) {
			this.videoTexture.dispose();
			this.videoTexture = null;
		}

		// Restore original texture
		if (this.originalTexture) {
			this.staticMaterial.uniforms.textTexture.value = this.originalTexture;
			this.dynamicMaterial.uniforms.textTexture.value = this.originalTexture;
			this.originalTexture = null;
		}

		// Restore cursor
		this.cursorVisible = true;

		this.isPlayingVideo = false;

		// Re-render terminal content
		this.render();
	}

	/**
	 * Check if video is currently playing
	 */
	isVideoPlaying(): boolean {
		return this.isPlayingVideo;
	}

	/**
	 * Get the video element (for external control)
	 */
	getVideoElement(): HTMLVideoElement | null {
		return this.videoElement;
	}

	/**
	 * Dispose of resources
	 */
	dispose(): void {
		this.stopCursorBlink();
		this.stopVideo();
		this.texture.dispose();
		this.noiseTexture.dispose();
		this.staticMaterial.dispose();
		this.dynamicMaterial.dispose();
		this.burnInMaterial.dispose();
		this.staticRenderTarget.dispose();
		this.burnInRenderTargets[0].dispose();
		this.burnInRenderTargets[1].dispose();
		(this.mesh.geometry as THREE.BufferGeometry).dispose();
		(this.staticMesh.geometry as THREE.BufferGeometry).dispose();
		(this.burnInMesh.geometry as THREE.BufferGeometry).dispose();
	}

	/**
	 * Get the current cursor position
	 */
	getCursorPosition(): { col: number; row: number } {
		return { col: this.cursorCol, row: this.cursorRow };
	}

	/**
	 * Get the number of columns in the terminal grid
	 */
	getCols(): number {
		return this.cols;
	}

	/**
	 * Get the number of rows in the terminal grid
	 */
	getRows(): number {
		return this.rows;
	}

	/**
	 * Get the terminal grid dimensions
	 */
	getGridSize(): { cols: number; rows: number } {
		return { cols: this.cols, rows: this.rows };
	}

	/**
	 * Set a callback to be notified when grid size changes
	 * This is useful for resizing xterm when the font loads
	 */
	onGridSizeChange(callback: (cols: number, rows: number) => void): void {
		this.onGridSizeChangeCallback = callback;
	}
}

/**
 * Vertex shader for terminal text (used by both passes)
 */
const terminalTextVertexShader = /* glsl */ `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

/**
 * Static Pass Fragment Shader (Pass 1)
 *
 * Replicates QML ShaderTerminal.qml staticShader:
 * - Screen curvature with coordinate clamping
 * - Terminal source texture sampling
 * - RGB shift (chromatic aberration)
 * - Chroma color conversion
 * - Bloom
 * - Brightness
 *
 * Output: Rendered to staticRenderTarget (frameBuffer equivalent)
 * This output is STABLE - no flickering or temporal effects here.
 */
const staticPassFragmentShader = /* glsl */ `
precision mediump float;

uniform sampler2D textTexture;
uniform vec3 fontColor;
uniform vec3 backgroundColor;
uniform float chromaColor;
uniform float screenCurvature;
uniform float rgbShift;
uniform float bloom;
uniform float brightness;
uniform vec2 resolution;

varying vec2 vUv;

// Include effect functions for static pass
${screenCurvatureGLSL}
${chromaColorGLSL}
${rgbShiftGLSL}
${bloomGLSL}
${brightnessGLSL}

void main() {
    vec2 cc = vec2(0.5) - vUv;
    
    // 1. Apply screen curvature
    vec2 curvatureCoords = getRawCurvatureCoords(vUv, cc, screenCurvature);
    vec2 txt_coords = screenCurvature > 0.0 ? applyStaticCurvature(vUv, cc, screenCurvature) : vUv;
    
    // 2. Sample terminal source texture
    vec3 txt_color = texture2D(textTexture, txt_coords).rgb;
    
    // 3. Apply RGB shift (chromatic aberration)
    if (rgbShift > 0.0) {
        txt_color = applyRgbShift(textTexture, txt_coords, rgbShift);
    }
    
    // 4. Add small value to prevent division by zero (from QML)
    txt_color += vec3(0.0001);
    float greyscale_color = rgb2grey(txt_color);
    
    // 5. Calculate reflection mask for screen bounds
    float reflectionMask = screenCurvature > 0.0 ? calculateReflectionMask(curvatureCoords) : 1.0;
    
    // 6. Apply chroma color and mix with background
    vec3 finalColor;
    if (chromaColor > 0.0) {
        vec3 foregroundColor = mix(fontColor, txt_color * fontColor / greyscale_color, chromaColor);
        finalColor = mix(backgroundColor, foregroundColor, greyscale_color * reflectionMask);
    } else {
        finalColor = mix(backgroundColor, fontColor, greyscale_color * reflectionMask);
    }
    
    // 7. Apply bloom effect
    if (bloom > 0.0) {
        finalColor = applyBloom(finalColor, textTexture, txt_coords, resolution, bloom, fontColor, chromaColor);
    }
    
    // 8. Apply brightness
    float screen_brightness = mix(0.5, 1.5, brightness);
    finalColor *= screen_brightness;
    
    gl_FragColor = vec4(finalColor, 1.0);
}
`;

/**
 * Dynamic Pass Fragment Shader (Pass 2)
 *
 * Replicates QML ShaderTerminal.qml dynamicShader:
 * - Samples from frameBuffer (static pass output)
 * - Horizontal sync distortion
 * - Jitter
 * - Burn-in (samples from stable source, not flickered output)
 * - Static noise
 * - Glowing line
 * - Rasterization
 * - Flickering (applied ONLY at the end to final output)
 * - Ambient light
 *
 * This separation ensures flickering doesn't create ghosting on static text.
 */
const dynamicPassFragmentShader = /* glsl */ `
precision mediump float;

uniform sampler2D frameBuffer;
uniform sampler2D burnInSource;
uniform sampler2D textTexture;
uniform vec3 fontColor;
uniform vec3 backgroundColor;
uniform float chromaColor;
uniform float screenCurvature;
uniform float ambientLight;
uniform vec2 resolution;

// Dynamic effect uniforms
uniform float time;
uniform float flickering;
uniform float horizontalSync;
uniform float jitter;
uniform float staticNoise;
uniform float glowingLine;
uniform float burnIn;
uniform int rasterizationMode;
uniform float rasterizationIntensity;
uniform vec2 virtualResolution;

// Noise texture uniforms
${noiseTextureGLSL}

varying vec2 vUv;

// Include effect functions for dynamic pass
${screenCurvatureGLSL}
${chromaColorGLSL}
${flickeringGLSL}
${horizontalSyncGLSL}
${jitterGLSL}
${staticNoiseGLSL}
${glowingLineGLSL}
${burnInGLSL}
${rasterizationGLSL}

void main() {
    vec2 cc = vec2(0.5) - vUv;
    float distance = length(cc);
    
    // 1. Calculate staticCoords for burn-in and rasterization
    vec2 staticCoords = screenCurvature > 0.0 ? barrel(vUv, cc, screenCurvature) : vUv;
    
    // 2. Sample initial noise for flickering and horizontal sync
    vec4 initialNoiseTexel = sampleInitialNoise(time);
    
    // 3. Calculate flickering brightness (applied at the end)
    float flickeringBrightness = calculateFlickeringBrightness(initialNoiseTexel, flickering);
    
    // 4. Calculate horizontal sync distortion parameters
    float distortionScale = getHorizontalSyncDistortionScale(initialNoiseTexel, horizontalSync);
    
    // 5. Initialize noise accumulator
    float noise = staticNoise;
    
    // 6. Start with base coordinates
    vec2 coords = vUv;
    
    // 7. Apply horizontal sync distortion
    coords = applyHorizontalSync(coords, time, initialNoiseTexel, horizontalSync);
    if (horizontalSync > 0.0) {
        noise += distortionScale * 7.0;
    }
    
    // 8. Sample screen noise for jitter and static noise
    vec4 screenNoiseTexel = sampleScreenNoise(coords, time);
    
    // 9. Apply jitter to get final sampling coordinates
    vec2 txt_coords = applyJitter(coords, screenNoiseTexel, jitter);
    
    // 10. Initialize color accumulator
    float colorAccum = 0.0001;
    
    // 11. Add static noise contribution
    if (staticNoise > 0.0 || distortionScale > 0.0) {
        float noiseVal = screenNoiseTexel.a;
        colorAccum += noiseVal * noise * (1.0 - distance * 1.3);
    }
    
    // 12. Add glowing line contribution
    if (glowingLine > 0.0) {
        colorAccum += calculateGlowingLineContribution(coords, virtualResolution, time, glowingLine);
    }
    
    // 13. Sample from frameBuffer (stable static pass output)
    // Apply jitter by sampling with jittered coordinates
    vec3 txt_color = texture2D(frameBuffer, txt_coords).rgb;
    
    // 14. Apply burn-in effect (sample from accumulated burn-in buffer)
    if (burnIn > 0.0) {
        vec3 burnInColor = texture2D(burnInSource, txt_coords).rgb;
        txt_color = applyBurnIn(txt_color, burnInColor, burnIn);
    }
    
    // 15. Add color accumulator (noise + glowing line)
    txt_color += fontColor * colorAccum;
    
    // 16. Apply rasterization
    txt_color = applyRasterization(staticCoords, txt_color, virtualResolution, rasterizationIntensity, rasterizationMode);
    
    vec3 finalColor = txt_color;
    
    // 17. Apply flickering (ONLY here at the end - this is the key difference!)
    // This ensures flickering doesn't affect the frameBuffer content
    if (flickering > 0.0) {
        finalColor *= flickeringBrightness;
    }
    
    // 18. Apply ambient light
    if (ambientLight > 0.0) {
        finalColor += vec3(ambientLight * 0.2) * (1.0 - distance) * (1.0 - distance);
    }
    
    gl_FragColor = vec4(finalColor, 1.0);
}
`;

/**
 * Burn-In Accumulation Shader
 *
 * This shader accumulates the burn-in effect using ping-pong buffers.
 * It reads from the previous burn-in buffer and the current static pass output,
 * decays the previous content, and blends with the current content using max().
 *
 * This matches the QML BurnInEffect.qml recursive shader behavior.
 */
const burnInAccumulationShader = /* glsl */ `
${burnInAccumulationGLSL}
`;
