/**
 * Static Noise Effect
 * Ported from ShaderTerminal.qml dynamicShader (lines 294-296)
 *
 * Adds random noise grain to the image, simulating the visual noise
 * present in analog video signals and old CRT monitors.
 *
 * In the original QML:
 * - Samples noise texture at time-varying positions
 * - Intensity decreases towards screen edges (using distance from center)
 * - noise value can be boosted by horizontalSync distortion
 *
 * Default value: 0.12 (from ApplicationSettings.qml)
 */

export const staticNoiseGLSL = /* glsl */ `
/**
 * Apply static noise effect to add grain to the color
 * Ported from QML fragment shader:
 *   float noiseVal = noiseTexel.a;
 *   color += noiseVal * noise * (1.0 - distance * 1.3);
 *
 * The noise texture is sampled using sampleScreenNoise() and we use the .a channel
 *
 * @param noiseTexel - Noise texel sampled with sampleScreenNoise(coords, time)
 * @param staticNoise - Static noise intensity (0-1, default 0.12)
 * @param distanceFromCenter - Distance from screen center (0-0.5 range typically)
 * @param horizontalSyncBoost - Extra noise from horizontal sync distortion (distortionScale * 7.0)
 * @return Noise contribution to add to the color
 */
float calculateStaticNoise(vec4 noiseTexel, float staticNoise, float distanceFromCenter, float horizontalSyncBoost) {
    if (staticNoise <= 0.0 && horizontalSyncBoost <= 0.0) {
        return 0.0;
    }
    
    // Get noise value from alpha channel
    float noiseVal = noiseTexel.a;
    
    // Calculate total noise amount (can be boosted by horizontal sync)
    // From QML: noise += distortionScale * 7.0;
    float totalNoise = staticNoise + horizontalSyncBoost;
    
    // Apply distance falloff - noise is less intense at edges
    // The 1.3 multiplier makes the falloff more aggressive
    float distanceFalloff = 1.0 - distanceFromCenter * 1.3;
    distanceFalloff = max(distanceFalloff, 0.0);
    
    // Calculate noise contribution
    return noiseVal * totalNoise * distanceFalloff;
}

/**
 * Apply static noise to the final color
 * This adds the noise as additional brightness to the font color
 *
 * @param baseColor - The base terminal color
 * @param fontColor - The font color (noise is tinted with this)
 * @param noiseTexel - Noise texel sampled with sampleScreenNoise(coords, time)
 * @param staticNoise - Static noise intensity (0-1)
 * @param distanceFromCenter - Distance from screen center
 * @param horizontalSyncBoost - Extra noise from horizontal sync (distortionScale * 7.0)
 * @return Color with static noise applied
 */
vec3 applyStaticNoise(vec3 baseColor, vec3 fontColor, vec4 noiseTexel, float staticNoise, float distanceFromCenter, float horizontalSyncBoost) {
    float noiseContribution = calculateStaticNoise(noiseTexel, staticNoise, distanceFromCenter, horizontalSyncBoost);
    
    // Add noise as font-colored brightness
    return baseColor + fontColor * noiseContribution;
}
`;

export default staticNoiseGLSL;
