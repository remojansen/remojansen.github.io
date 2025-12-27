/**
 * Jitter Effect
 * Ported from ShaderTerminal.qml dynamicShader (lines 283-290)
 *
 * Adds random pixel displacement to simulate unstable video signal
 * or analog noise in old CRT monitors. The effect creates a subtle
 * "shakiness" or "wobble" in the image.
 *
 * In the original QML:
 * - Samples noise texture at time-varying coordinates
 * - Uses noise.ba channels to create 2D offset
 * - Displaces texture coordinates by jitterDisplacement
 *
 * jitterDisplacement is calculated as:
 *   Qt.size(0.007 * jitter, 0.002 * jitter)
 * where jitter is the user setting (0-1, default 0.2)
 */

export const jitterGLSL = /* glsl */ `
/**
 * Calculate jitter displacement values from jitter amount
 * Matches QML: Qt.size(0.007 * jitter, 0.002 * jitter)
 * @param jitter - Jitter amount (0-1)
 * @return vec2 with x and y displacement factors
 */
vec2 getJitterDisplacement(float jitter) {
    return vec2(0.007 * jitter, 0.002 * jitter);
}

/**
 * Apply jitter effect to texture coordinates using real noise texture
 * Ported from QML fragment shader:
 *   vec4 noiseTexel = texture2D(noiseSource, scaleNoiseSize * coords + vec2(fract(time / 51.0), fract(time / 237.0)));
 *   vec2 offset = vec2(noiseTexel.b, noiseTexel.a) - vec2(0.5);
 *   vec2 txt_coords = coords + offset * jitterDisplacement;
 *
 * @param coords - Input texture coordinates
 * @param noiseTexel - Noise texel sampled with sampleScreenNoise(coords, time)
 * @param jitter - Jitter amount (0-1, default 0.2)
 * @return Displaced texture coordinates with jitter applied
 */
vec2 applyJitter(vec2 coords, vec4 noiseTexel, float jitter) {
    if (jitter <= 0.0) {
        return coords;
    }
    
    // Use the blue and alpha channels for X and Y offset
    // Convert to offset centered around 0 (range -0.5 to 0.5)
    vec2 offset = vec2(noiseTexel.b, noiseTexel.a) - vec2(0.5);
    
    // Get displacement factors
    vec2 jitterDisplacement = getJitterDisplacement(jitter);
    
    // Apply displacement to coordinates
    return coords + offset * jitterDisplacement;
}
`;

export default jitterGLSL;
