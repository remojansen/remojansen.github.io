import { Terminal } from '@xterm/xterm';
import * as THREE from 'three';

/**
 * TerminalText - Renders terminal text to a texture with CRT effects
 *
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

declare class TerminalText {
    mesh: THREE.Mesh;
    private staticMaterial;
    private dynamicMaterial;
    private texture;
    private noiseTexture;
    private canvas;
    private ctx;
    private staticRenderTarget;
    private staticScene;
    private staticCamera;
    private staticMesh;
    private burnInRenderTargets;
    private burnInCurrentIndex;
    private burnInMaterial;
    private burnInScene;
    private burnInCamera;
    private burnInMesh;
    private burnInAmount;
    private lastFrameTime;
    private readonly minBurnInFadeTime;
    private readonly maxBurnInFadeTime;
    private text;
    private fontColor;
    private backgroundColor;
    private charWidth;
    private charHeight;
    private cols;
    private rows;
    private fontLoaded;
    private cursorCol;
    private cursorRow;
    private cursorVisible;
    private cursorBlinking;
    private cursorBlinkState;
    private cursorBlinkInterval;
    private readonly CURSOR_BLINK_RATE;
    private selectionStart;
    private selectionEnd;
    private selectionViewportY;
    private screenScaling;
    private totalFontScaling;
    private totalMargin;
    private windowScaling;
    private devicePixelRatio;
    private logicalWidth;
    private logicalHeight;
    private onGridSizeChangeCallback;
    private videoElement;
    private videoTexture;
    private isPlayingVideo;
    private originalTexture;
    constructor(width: number, height: number);
    /**
     * Load the Terminus font from embedded base64
     */
    private loadFont;
    /**
     * Calculate font metrics based on configuration
     */
    private calculateFontMetrics;
    /**
     * Set the terminal text content
     */
    setText(text: string): void;
    /**
     * Set the cursor position
     */
    setCursorPosition(col: number, row: number): void;
    /**
     * Set cursor visibility
     */
    setCursorVisible(visible: boolean): void;
    /**
     * Enable or disable cursor blinking
     */
    setCursorBlinking(blinking: boolean): void;
    private startCursorBlink;
    private stopCursorBlink;
    /**
     * Reset cursor blink state
     */
    resetCursorBlink(): void;
    /**
     * Set text selection range (in absolute buffer coordinates)
     */
    setSelection(start: {
        col: number;
        row: number;
    } | null, end: {
        col: number;
        row: number;
    } | null, viewportY?: number): void;
    /**
     * Update the viewport offset for selection rendering
     */
    updateSelectionViewport(viewportY: number): void;
    /**
     * Clear the current selection
     */
    clearSelection(): void;
    /**
     * Get the current selection range
     */
    getSelection(): {
        start: {
            col: number;
            row: number;
        } | null;
        end: {
            col: number;
            row: number;
        } | null;
    };
    /**
     * Convert pixel coordinates to grid position
     */
    pixelToGrid(pixelX: number, pixelY: number): {
        col: number;
        row: number;
    };
    private isCellSelected;
    private render;
    /**
     * Update the terminal size
     */
    updateSize(width: number, height: number): void;
    /**
     * Set the font color
     */
    setFontColor(hex: string): void;
    /**
     * Set the background color
     */
    setBackgroundColor(hex: string): void;
    /**
     * Set the screen curvature amount
     */
    setScreenCurvature(curvature: number): void;
    /**
     * Set the RGB shift amount (chromatic aberration)
     */
    setRgbShift(amount: number): void;
    /**
     * Set the bloom intensity
     */
    setBloom(intensity: number): void;
    /**
     * Set the brightness level
     */
    setBrightness(level: number): void;
    /**
     * Set the ambient light glow
     */
    setAmbientLight(amount: number): void;
    /**
     * Set the chroma color amount
     */
    setChromaColor(amount: number): void;
    /**
     * Set the flickering intensity
     */
    setFlickering(amount: number): void;
    /**
     * Set the horizontal sync distortion amount
     */
    setHorizontalSync(amount: number): void;
    /**
     * Set the jitter amount (random pixel displacement)
     */
    setJitter(amount: number): void;
    /**
     * Set the static noise intensity
     */
    setStaticNoise(amount: number): void;
    /**
     * Set the glowing line (scanning beam) intensity
     */
    setGlowingLine(amount: number): void;
    /**
     * Set the burn-in (phosphor persistence) intensity
     */
    setBurnIn(amount: number): void;
    private calculateBurnInFadeTime;
    /**
     * Set the rasterization mode
     */
    setRasterizationMode(mode: number): void;
    /**
     * Set the rasterization intensity
     */
    setRasterizationIntensity(intensity: number): void;
    /**
     * Set the virtual resolution (for rasterization patterns)
     */
    setVirtualResolution(cols: number, rows: number): void;
    /**
     * Update the time uniform for animated effects
     */
    updateTime(time: number): void;
    /**
     * Render the static pass and burn-in accumulation to render targets
     */
    renderStaticPass(renderer: THREE.WebGLRenderer): void;
    /**
     * Play a video with CRT effects
     */
    playVideo(videoUrl: string): Promise<void>;
    /**
     * Stop video playback and restore terminal display
     */
    stopVideo(): void;
    /**
     * Check if video is currently playing
     */
    isVideoPlaying(): boolean;
    /**
     * Get the video element (for external control)
     */
    getVideoElement(): HTMLVideoElement | null;
    /**
     * Dispose of resources
     */
    dispose(): void;
    /**
     * Get the current cursor position
     */
    getCursorPosition(): {
        col: number;
        row: number;
    };
    /**
     * Get the number of columns in the terminal grid
     */
    getCols(): number;
    /**
     * Get the number of rows in the terminal grid
     */
    getRows(): number;
    /**
     * Get the terminal grid dimensions
     */
    getGridSize(): {
        cols: number;
        rows: number;
    };
    /**
     * Set a callback to be notified when grid size changes
     */
    onGridSizeChange(callback: (cols: number, rows: number) => void): void;
}

/**
 * CRT Terminal Settings
 * Configuration options for the CRT terminal renderer
 */
interface CRTTerminalSettings {
    /**
     * The container element to render into
     */
    container: HTMLElement;
    /**
     * Font color in hex format (default: "#0ccc68" - green)
     */
    fontColor?: string;
    /**
     * Background color in hex format (default: "#000000" - black)
     */
    backgroundColor?: string;
    /**
     * Screen curvature amount, 0-1 (default: 0.3)
     */
    screenCurvature?: number;
    /**
     * RGB shift/chromatic aberration amount, 0-0.01 (default: 0)
     */
    rgbShift?: number;
    /**
     * Bloom intensity, 0-1 (default: 0.5538)
     */
    bloom?: number;
    /**
     * Brightness level, 0-1 (default: 0.5)
     */
    brightness?: number;
    /**
     * Ambient light glow, 0-1 (default: 0.2)
     */
    ambientLight?: number;
    /**
     * Chroma color amount (0 = monochrome, 1 = full color) (default: 0)
     */
    chromaColor?: number;
    /**
     * Flickering intensity, 0-1 (default: 0.1)
     */
    flickering?: number;
    /**
     * Horizontal sync distortion, 0-1 (default: 0.08)
     */
    horizontalSync?: number;
    /**
     * Jitter amount (random pixel displacement), 0-1 (default: 0.1997)
     */
    jitter?: number;
    /**
     * Static noise intensity, 0-1 (default: 0.1198)
     */
    staticNoise?: number;
    /**
     * Glowing line (scanning beam) intensity, 0-1 (default: 0.2)
     */
    glowingLine?: number;
    /**
     * Burn-in (phosphor persistence) intensity, 0-1 (default: 0.2517)
     */
    burnIn?: number;
    /**
     * Rasterization mode: 0=none, 1=scanline, 2=pixel, 3=subpixel (default: 1)
     */
    rasterizationMode?: number;
    /**
     * Rasterization intensity, 0-1 (default: 0.5)
     */
    rasterizationIntensity?: number;
}
/**
 * Default settings for CRT terminal
 */
declare const DEFAULT_SETTINGS: Required<Omit<CRTTerminalSettings, "container">>;

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

declare class CRTTerminal {
    private container;
    private scene;
    private camera;
    private renderer;
    private terminalText;
    private terminalFrame;
    private animationFrameId;
    private connector;
    private settings;
    private disposed;
    constructor(options: CRTTerminalSettings);
    /**
     * Apply the current settings to the terminal renderer
     */
    private applySettings;
    /**
     * Handle window resize events
     */
    private handleResize;
    /**
     * Animation loop
     */
    private animate;
    /**
     * Attach an XTerm.js terminal instance to this CRT renderer
     *
     * This creates a connector that syncs the XTerm buffer to the CRT display.
     * The XTerm terminal should be fully configured before attaching.
     *
     * @param xterm The XTerm.js Terminal instance to attach
     */
    attachXTerm(xterm: Terminal): void;
    /**
     * Detach the currently attached XTerm instance
     */
    detachXTerm(): void;
    /**
     * Get the current grid size (columns and rows)
     */
    getGridSize(): {
        cols: number;
        rows: number;
    };
    /**
     * Get the TerminalText renderer (for advanced usage)
     */
    getTerminalText(): TerminalText;
    /**
     * Get the Three.js renderer (for advanced usage)
     */
    getRenderer(): THREE.WebGLRenderer;
    /**
     * Get the Three.js scene (for advanced usage)
     */
    getScene(): THREE.Scene;
    /**
     * Get the Three.js camera (for advanced usage)
     */
    getCamera(): THREE.OrthographicCamera;
    /**
     * Focus the attached XTerm terminal for keyboard input
     */
    focus(): void;
    /**
     * Dispose of all resources
     */
    dispose(): void;
}

export { CRTTerminal, type CRTTerminalSettings, DEFAULT_SETTINGS };
