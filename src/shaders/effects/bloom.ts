/**
 * Bloom Effect
 * Ported from ShaderTerminal.qml staticShader (lines 487-492)
 *
 * Adds a glow effect from bright areas of the screen.
 *
 * In the original QML, this uses a SEPARATE pre-blurred texture (bloomSource)
 * created by Qt's FastBlur with radius 32. For the web version, we simulate
 * this with a multi-tap blur approximation.
 *
 * QML code:
 *   vec4 bloomFullColor = texture2D(bloomSource, txt_coords);
 *   vec3 bloomColor = bloomFullColor.rgb;
 *   float bloomAlpha = bloomFullColor.a;
 *   bloomColor = convertWithChroma(bloomColor);
 *   finalColor += clamp(bloomColor * bloom * bloomAlpha, 0.0, 0.5);
 *
 * Note: bloom uniform is set as appSettings.bloom * 2.5 in QML
 */

export const bloomGLSL = /* glsl */ `
/**
 * Multi-tap blur to approximate the pre-blurred bloom source texture
 * The original QML uses Qt's FastBlur with radius 32.
 * We use a larger kernel to better approximate this.
 *
 * @param tex - Source texture sampler
 * @param coords - Texture coordinates (already curved)
 * @param resolution - Screen resolution for proper texel sizing
 * @return Blurred color approximating bloomSource
 */
vec4 getBloomSourceSample(sampler2D tex, vec2 coords, vec2 resolution) {
    vec2 texelSize = 1.0 / resolution;
    vec4 bloom = vec4(0.0);
    float totalWeight = 0.0;
    
    // 13-tap blur pattern to approximate FastBlur radius 32
    // Using larger offsets with gaussian-like weights
    const float offsets[5] = float[5](0.0, 4.0, 8.0, 12.0, 16.0);
    const float weights[5] = float[5](0.20, 0.18, 0.14, 0.10, 0.06);
    
    for (int i = 0; i < 5; i++) {
        float offset = offsets[i];
        float weight = weights[i];
        
        // Sample in cross pattern
        vec2 offsetX = vec2(offset * texelSize.x, 0.0);
        vec2 offsetY = vec2(0.0, offset * texelSize.y);
        
        // Clamp coordinates to prevent sampling outside bounds
        vec2 sampleCoordsPX = clamp(coords + offsetX, 0.0, 1.0);
        vec2 sampleCoordsNX = clamp(coords - offsetX, 0.0, 1.0);
        vec2 sampleCoordsPY = clamp(coords + offsetY, 0.0, 1.0);
        vec2 sampleCoordsNY = clamp(coords - offsetY, 0.0, 1.0);
        
        if (i == 0) {
            bloom += texture2D(tex, coords) * weight;
            totalWeight += weight;
        } else {
            bloom += texture2D(tex, sampleCoordsPX) * weight;
            bloom += texture2D(tex, sampleCoordsNX) * weight;
            bloom += texture2D(tex, sampleCoordsPY) * weight;
            bloom += texture2D(tex, sampleCoordsNY) * weight;
            totalWeight += weight * 4.0;
        }
    }
    
    if (totalWeight > 0.0) {
        bloom /= totalWeight;
    }
    
    // Return with alpha = 1.0 (in QML the bloomSource has alpha from the original)
    return vec4(bloom.rgb, 1.0);
}

/**
 * Apply bloom effect to the final color
 * Matches QML exactly:
 *   vec4 bloomFullColor = texture2D(bloomSource, txt_coords);
 *   vec3 bloomColor = bloomFullColor.rgb;
 *   float bloomAlpha = bloomFullColor.a;
 *   bloomColor = convertWithChroma(bloomColor);
 *   finalColor += clamp(bloomColor * bloom * bloomAlpha, 0.0, 0.5);
 *
 * @param baseColor - The base terminal color
 * @param tex - Source texture for bloom sampling
 * @param coords - Texture coordinates (already curved via txt_coords)
 * @param resolution - Screen resolution
 * @param bloom - Bloom intensity (already multiplied by 2.5 in uniform)
 * @param fontColor - Font color for chroma conversion
 * @param chromaColor - Chroma color mixing amount
 * @return Color with bloom applied
 */
vec3 applyBloom(vec3 baseColor, sampler2D tex, vec2 coords, vec2 resolution, float bloom, vec3 fontColor, float chromaColor) {
    if (bloom <= 0.0) {
        return baseColor;
    }
    
    // Get blurred color (simulating bloomSource)
    vec4 bloomFullColor = getBloomSourceSample(tex, coords, resolution);
    vec3 bloomColor = bloomFullColor.rgb;
    float bloomAlpha = bloomFullColor.a;
    
    // Apply convertWithChroma to bloom color
    float grey = dot(bloomColor, vec3(0.21, 0.72, 0.04));
    vec3 convertedBloom;
    if (chromaColor > 0.0) {
        convertedBloom = fontColor * mix(vec3(grey), bloomColor, chromaColor);
    } else {
        convertedBloom = fontColor * grey;
    }
    
    // Add bloom contribution with clamping (exactly as QML)
    vec3 bloomContribution = clamp(convertedBloom * bloom * bloomAlpha, 0.0, 0.5);
    
    return baseColor + bloomContribution;
}
`;

export default bloomGLSL;
