/**
 * RGB Shift (Chromatic Aberration) Effect
 * Ported from ShaderTerminal.qml staticShader (lines 464-470)
 *
 * Simulates chromatic aberration by separating RGB channels horizontally,
 * creating the colored fringing effect seen on old CRT monitors.
 */

export const rgbShiftGLSL = /* glsl */ `
/**
 * Apply RGB shift (chromatic aberration) effect
 * @param tex - Source texture sampler
 * @param coords - Texture coordinates
 * @param shift - Shift amount (normalized, scaled by screen width)
 * @return Color with RGB channels shifted
 */
vec3 applyRgbShift(sampler2D tex, vec2 coords, float shift) {
    // Calculate horizontal displacement
    // The 12.0 multiplier matches the QML implementation
    vec2 displacement = vec2(12.0, 0.0) * shift;
    
    // Sample colors at shifted positions
    vec3 rightColor = texture2D(tex, coords + displacement).rgb;
    vec3 leftColor = texture2D(tex, coords - displacement).rgb;
    vec3 centerColor = texture2D(tex, coords).rgb;
    
    // Blend channels with asymmetric weights (from QML shader)
    // This creates a more natural chromatic aberration effect
    vec3 result;
    result.r = leftColor.r * 0.10 + rightColor.r * 0.30 + centerColor.r * 0.60;
    result.g = leftColor.g * 0.20 + rightColor.g * 0.20 + centerColor.g * 0.60;
    result.b = leftColor.b * 0.30 + rightColor.b * 0.10 + centerColor.b * 0.60;
    
    return result;
}
`;

export default rgbShiftGLSL;
