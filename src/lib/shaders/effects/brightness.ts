/**
 * Brightness Effect
 * Ported from ShaderTerminal.qml staticShader
 *
 * Controls the overall screen brightness.
 * In QML: Utils.lint(0.5, 1.5, appSettings.brightness)
 * This maps a 0-1 input to a 0.5-1.5 brightness multiplier.
 */

export const brightnessGLSL = /* glsl */ `
/**
 * Apply brightness adjustment to color
 * @param color - Input color
 * @param brightness - Brightness value (0-1 maps to 0.5-1.5 multiplier)
 * @return Brightness-adjusted color
 */
vec3 applyBrightness(vec3 color, float brightness) {
    // Map 0-1 to 0.5-1.5 range (matches QML Utils.lint behavior)
    float brightnessMultiplier = mix(0.5, 1.5, brightness);
    return color * brightnessMultiplier;
}
`;

export default brightnessGLSL;
