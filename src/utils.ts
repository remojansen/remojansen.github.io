/**
 * Utility functions ported from utils.js
 */

export interface Color {
	r: number;
	g: number;
	b: number;
	a: number;
}

/**
 * Clamp a value between min and max
 */
export function clamp(x: number, min: number, max: number): number {
	if (x <= min) return min;
	if (x >= max) return max;
	return x;
}

/**
 * Linear interpolation between a and b by factor t
 * lint(a, b, t) = (1 - t) * a + t * b
 */
export function lint(a: number, b: number, t: number): number {
	return (1 - t) * a + t * b;
}

/**
 * Mix two colors by alpha factor
 * alpha = 1 means 100% c1, alpha = 0 means 100% c2
 */
export function mixColors(c1: Color, c2: Color, alpha: number): Color {
	return {
		r: c1.r * alpha + c2.r * (1 - alpha),
		g: c1.g * alpha + c2.g * (1 - alpha),
		b: c1.b * alpha + c2.b * (1 - alpha),
		a: c1.a * alpha + c2.a * (1 - alpha),
	};
}

/**
 * Parse a hex color string to Color object
 */
export function hexToColor(hex: string): Color {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	if (!result) {
		return { r: 1, g: 1, b: 1, a: 1 };
	}
	return {
		r: Number.parseInt(result[1], 16) / 255,
		g: Number.parseInt(result[2], 16) / 255,
		b: Number.parseInt(result[3], 16) / 255,
		a: 1,
	};
}

/**
 * Convert Color to THREE.js compatible array [r, g, b]
 */
export function colorToVec3(color: Color): [number, number, number] {
	return [color.r, color.g, color.b];
}

/**
 * Convert Color to THREE.js compatible array [r, g, b, a]
 */
export function colorToVec4(color: Color): [number, number, number, number] {
	return [color.r, color.g, color.b, color.a];
}
