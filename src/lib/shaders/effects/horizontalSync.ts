/**
 * Horizontal Sync Effect
 * Ported from ShaderTerminal.qml dynamicShader (lines 135-156, 274-276)
 *
 * Simulates horizontal synchronization issues in old CRT monitors.
 * When the horizontal sync signal is unstable, the electron beam doesn't
 * start each scanline at the correct position, causing horizontal waviness.
 *
 * In the original QML:
 * - Vertex shader: calculates distortionScale and distortionFreq from noise
 * - Fragment shader: applies sine wave distortion to x-coordinate
 *
 * The effect creates horizontal distortion waves that move over time,
 * simulating the look of a TV with bad horizontal hold adjustment.
 */

export const horizontalSyncGLSL = /* glsl */ `
/**
 * Linear interpolation (matches Utils.lint in QML)
 * @param a - Start value
 * @param b - End value
 * @param t - Interpolation factor (0-1)
 * @return Interpolated value
 */
float lint(float a, float b, float t) {
    return (1.0 - t) * a + t * b;
}

/**
 * Calculate horizontal sync distortion parameters from noise texture
 * Ported from QML vertex shader:
 *   vec4 initialNoiseTexel = texture2D(noiseSource, coords);
 *   float randval = horizontalSyncStrength - initialNoiseTexel.r;
 *   distortionScale = step(0.0, randval) * randval * horizontalSyncStrength;
 *   distortionFreq = mix(4.0, 40.0, initialNoiseTexel.g);
 *
 * @param initialNoiseTexel - Noise texel sampled with sampleInitialNoise(time)
 * @param horizontalSync - Horizontal sync amount (0-1)
 * @return vec2(distortionScale, distortionFreq)
 */
vec2 calculateHorizontalSyncParams(vec4 initialNoiseTexel, float horizontalSync) {
    if (horizontalSync <= 0.0) {
        return vec2(0.0, 0.0);
    }
    
    // Calculate strength from horizontalSync (maps 0-1 to 0.05-0.35)
    float horizontalSyncStrength = lint(0.05, 0.35, horizontalSync);
    
    // Use the red channel of the noise texture for distortion threshold
    float noiseR = initialNoiseTexel.r;
    // Use the green channel for distortion frequency
    float noiseG = initialNoiseTexel.g;
    
    // Calculate distortion scale
    // Only apply distortion when noise is below threshold (creates intermittent effect)
    float randval = horizontalSyncStrength - noiseR;
    float distortionScale = step(0.0, randval) * randval * horizontalSyncStrength;
    
    // Calculate distortion frequency (varies between 4 and 40 based on noise)
    float distortionFreq = mix(4.0, 40.0, noiseG);
    
    return vec2(distortionScale, distortionFreq);
}

/**
 * Apply horizontal sync distortion to texture coordinates
 * Ported from QML fragment shader:
 *   float dst = sin((coords.y + time * 0.001) * distortionFreq);
 *   coords.x += dst * distortionScale;
 *
 * @param coords - Input texture coordinates
 * @param time - Current time value
 * @param initialNoiseTexel - Noise texel sampled with sampleInitialNoise(time)
 * @param horizontalSync - Horizontal sync amount (0-1)
 * @return Distorted coordinates with horizontal sync effect applied
 */
vec2 applyHorizontalSync(vec2 coords, float time, vec4 initialNoiseTexel, float horizontalSync) {
    if (horizontalSync <= 0.0) {
        return coords;
    }
    
    // Get distortion parameters
    vec2 params = calculateHorizontalSyncParams(initialNoiseTexel, horizontalSync);
    float distortionScale = params.x;
    float distortionFreq = params.y;
    
    // Calculate sine wave distortion based on y-coordinate and time
    // This creates horizontal waves that scroll vertically
    float dst = sin((coords.y + time * 0.001) * distortionFreq);
    
    // Apply distortion to x-coordinate
    coords.x += dst * distortionScale;
    
    return coords;
}

/**
 * Get the distortion scale for use in other effects (like static noise boost)
 * From QML: noise += distortionScale * 7.0;
 *
 * @param initialNoiseTexel - Noise texel sampled with sampleInitialNoise(time)
 * @param horizontalSync - Horizontal sync amount (0-1)
 * @return The distortion scale value
 */
float getHorizontalSyncDistortionScale(vec4 initialNoiseTexel, float horizontalSync) {
    vec2 params = calculateHorizontalSyncParams(initialNoiseTexel, horizontalSync);
    return params.x;
}
`;

export default horizontalSyncGLSL;
