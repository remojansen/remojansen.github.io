/**
 * cool-retro-term-webgl
 *
 * A WebGL-based CRT terminal renderer for XTerm.js
 *
 * This library provides authentic CRT visual effects including:
 * - Screen curvature
 * - RGB shift (chromatic aberration)
 * - Bloom
 * - Flickering
 * - Horizontal sync distortion
 * - Static noise
 * - Burn-in (phosphor persistence)
 * - Scanlines (rasterization)
 * - And more...
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
 * xterm.open(document.createElement('div')); // Hidden container
 * crt.attachXTerm(xterm);
 *
 * xterm.write('Hello, World!');
 * ```
 *
 * @packageDocumentation
 */

export { CRTTerminal } from "./CRTTerminal";
export type { CRTTerminalSettings } from "./types";
export { DEFAULT_SETTINGS } from "./types";
