/**
 * Flickering Effect
 * Ported from ShaderTerminal.qml dynamicShader (lines 131-150, 316)
 *
 * Simulates power fluctuations in old CRT monitors by modulating
 * the overall screen brightness using a noise texture sampled
 * at time-varying coordinates.
 *
 * In the original QML:
 * - Vertex shader: samples noise at time-based coords, calculates brightness
 * - Fragment shader: multiplies final color by brightness
 *
 * The effect creates subtle flickering that mimics the unstable power
 * supplies of vintage CRT monitors.
 */

export const flickeringGLSL = /* glsl */ `
/**
 * Calculate flickering brightness based on noise texture and time
 * Ported from QML vertex shader:
 *   vec4 initialNoiseTexel = texture2D(noiseSource, coords);
 *   brightness = 1.0 + (initialNoiseTexel.g - 0.5) * flickering;
 *
 * @param initialNoiseTexel - Noise texel sampled with sampleInitialNoise(time)
 * @param flickeringAmount - Flickering intensity (0-1, typically ~0.1)
 * @return Brightness multiplier (1.0 = normal, varies based on noise)
 */
float calculateFlickeringBrightness(vec4 initialNoiseTexel, float flickeringAmount) {
    if (flickeringAmount <= 0.0) {
        return 1.0;
    }
    
    // Use the green channel of the noise texture for brightness variation
    // This creates brightness variations around 1.0
    // At flickering=0.1, brightness ranges from ~0.95 to ~1.05
    float brightness = 1.0 + (initialNoiseTexel.g - 0.5) * flickeringAmount;
    
    return brightness;
}

/**
 * Apply flickering effect to final color
 * Ported from QML fragment shader:
 *   finalColor *= brightness;
 *
 * @param color - The input color to apply flickering to
 * @param initialNoiseTexel - Noise texel sampled with sampleInitialNoise(time)
 * @param flickeringAmount - Flickering intensity (0-1)
 * @return Color with flickering applied
 */
vec3 applyFlickering(vec3 color, vec4 initialNoiseTexel, float flickeringAmount) {
    float brightness = calculateFlickeringBrightness(initialNoiseTexel, flickeringAmount);
    return color * brightness;
}
`;

export default flickeringGLSL;
