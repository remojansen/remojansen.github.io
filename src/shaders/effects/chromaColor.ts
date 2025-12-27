/**
 * Chroma Color Effect
 * Ported from ShaderTerminal.qml convertWithChroma function
 *
 * Controls the balance between monochrome and colored terminal output.
 * At 0, the terminal is fully monochrome (green phosphor style).
 * At 1, original colors are preserved.
 */

export const chromaColorGLSL = /* glsl */ `
/**
 * Convert RGB to greyscale using luminance weights
 * MUST match QML ShaderLibrary.qml rgb2grey exactly:
 *   dot(v, vec3(0.21, 0.72, 0.04))
 * @param color - Input RGB color
 * @return Greyscale value
 */
float rgb2grey(vec3 v) {
    return dot(v, vec3(0.21, 0.72, 0.04));
}

/**
 * Apply chroma color conversion
 * Matches QML convertWithChroma function exactly:
 *   chromaColor != 0: fontColor.rgb * mix(vec3(rgb2grey(inColor)), inColor, chromaColor)
 *   chromaColor == 0: fontColor.rgb * rgb2grey(inColor)
 * @param inColor - Input color from text texture
 * @param fontColor - Terminal phosphor color (e.g., green)
 * @param chromaAmount - Color preservation amount (0 = mono, 1 = full color)
 * @return Converted color
 */
vec3 convertWithChroma(vec3 inColor, vec3 fontColor, float chromaAmount) {
    float grey = rgb2grey(inColor);
    if (chromaAmount > 0.0) {
        return fontColor * mix(vec3(grey), inColor, chromaAmount);
    } else {
        return fontColor * grey;
    }
}
`;

export default chromaColorGLSL;
