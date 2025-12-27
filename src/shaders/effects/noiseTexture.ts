/**
 * Noise Texture Utilities
 * Provides the noise texture sampling functions matching the QML implementation
 *
 * The QML uses allNoise512.png which is a 512x512 texture with different
 * noise values in each RGBA channel:
 * - R channel: used for horizontal sync distortion threshold
 * - G channel: used for flickering brightness and distortion frequency
 * - B channel: used for jitter X offset
 * - A channel: used for jitter Y offset and static noise
 *
 * scaleNoiseSize is calculated as:
 *   Qt.size((width * 0.75) / (noiseTexture.width * windowScaling * totalFontScaling),
 *           (height * 0.75) / (noiseTexture.height * windowScaling * totalFontScaling))
 * For simplicity, we use a reasonable approximation.
 */

export const noiseTextureGLSL = /* glsl */ `
// Noise texture sampler - loaded from allNoise512.png
uniform sampler2D noiseSource;
uniform vec2 scaleNoiseSize;

/**
 * Sample initial noise for flickering and horizontal sync
 * Uses time-based coordinates that change slowly
 * From QML: vec2 coords = vec2(fract(time/(1024.0*2.0)), fract(time/(1024.0*1024.0)));
 *
 * @param time - Current time value
 * @return vec4 noise texel (use .r for sync, .g for flickering/freq)
 */
vec4 sampleInitialNoise(float time) {
    vec2 coords = vec2(
        fract(time / (1024.0 * 2.0)),
        fract(time / (1024.0 * 1024.0))
    );
    return texture2D(noiseSource, coords);
}

/**
 * Sample noise for jitter and static noise effects
 * Uses screen coordinates with time-varying offset
 * From QML: texture2D(noiseSource, scaleNoiseSize * coords + vec2(fract(time / 51.0), fract(time / 237.0)));
 *
 * @param coords - Screen texture coordinates
 * @param time - Current time value
 * @return vec4 noise texel (use .b/.a for jitter, .a for static noise)
 */
vec4 sampleScreenNoise(vec2 coords, float time) {
    vec2 timeOffset = vec2(
        fract(time / 51.0),
        fract(time / 237.0)
    );
    return texture2D(noiseSource, scaleNoiseSize * coords + timeOffset);
}
`;

export default noiseTextureGLSL;
