/**
 * Rasterization Effect
 * Ported from ShaderLibrary.qml (lines 3-56)
 *
 * Creates visible scan lines or pixel grid patterns to simulate
 * the discrete pixel structure of CRT monitors.
 *
 * Four modes available:
 * - 0: No rasterization
 * - 1: Scanline - horizontal lines only
 * - 2: Pixel - square pixel grid
 * - 3: Subpixel - RGB subpixel pattern (like LCD)
 *
 * Default: varies by profile
 */

export const rasterizationGLSL = /* glsl */ `
#define RASTERIZATION_INTENSITY 0.30
#define RASTERIZATION_BRIGHTBOOST 0.30
#define SUBPIXELS 3.0

// Subpixel offsets for RGB pattern
const vec3 subpixelOffsets = vec3(3.141592654) * vec3(1.0/2.0, 1.0/2.0 - 2.0/3.0, 1.0/2.0 - 4.0/3.0);

/**
 * Apply scanline rasterization (horizontal lines)
 * Creates alternating bright/dark horizontal bands
 *
 * @param screenCoords - Screen texture coordinates (0-1)
 * @param texel - Input color
 * @param virtualResolution - Virtual resolution for line spacing
 * @param intensity - Effect intensity (0-1)
 * @return Rasterized color
 */
vec3 applyScanlineRasterization(vec2 screenCoords, vec3 texel, vec2 virtualResolution, float intensity) {
    // Calculate high and low brightness versions
    vec3 pixelHigh = ((1.0 + RASTERIZATION_BRIGHTBOOST) - (0.2 * texel)) * texel;
    vec3 pixelLow  = ((1.0 - RASTERIZATION_INTENSITY) + (0.1 * texel)) * texel;
    
    // Calculate position within virtual pixel (centered, -1 to 1)
    vec2 coords = fract(screenCoords * virtualResolution) * 2.0 - vec2(1.0);
    
    // Mask based on vertical position (creates horizontal lines)
    float mask = 1.0 - abs(coords.y);
    
    // Mix between low and high based on mask
    vec3 rasterizationColor = mix(pixelLow, pixelHigh, mask);
    
    // Blend with original based on intensity
    return mix(texel, rasterizationColor, intensity);
}

/**
 * Apply pixel rasterization (square grid)
 * Creates a grid of square pixels with darker edges
 *
 * @param screenCoords - Screen texture coordinates (0-1)
 * @param texel - Input color
 * @param virtualResolution - Virtual resolution for pixel spacing
 * @param intensity - Effect intensity (0-1)
 * @return Rasterized color
 */
vec3 applyPixelRasterization(vec2 screenCoords, vec3 texel, vec2 virtualResolution, float intensity) {
    // Calculate high and low brightness versions
    vec3 pixelHigh = ((1.0 + RASTERIZATION_BRIGHTBOOST) - (0.2 * texel)) * texel;
    vec3 pixelLow  = ((1.0 - RASTERIZATION_INTENSITY) + (0.1 * texel)) * texel;
    
    // Calculate position within virtual pixel (centered, -1 to 1)
    vec2 coords = fract(screenCoords * virtualResolution) * 2.0 - vec2(1.0);
    
    // Square the coordinates for rounded corners
    coords = coords * coords;
    
    // Mask based on both x and y (creates square pattern)
    float mask = 1.0 - coords.x - coords.y;
    
    // Mix between low and high based on mask
    vec3 rasterizationColor = mix(pixelLow, pixelHigh, mask);
    
    // Blend with original based on intensity
    return mix(texel, rasterizationColor, intensity);
}

/**
 * Apply subpixel rasterization (RGB subpixel pattern)
 * Creates visible RGB subpixels like an LCD display
 *
 * @param screenCoords - Screen texture coordinates (0-1)
 * @param texel - Input color
 * @param virtualResolution - Virtual resolution for subpixel spacing
 * @param intensity - Effect intensity (0-1)
 * @return Rasterized color
 */
vec3 applySubpixelRasterization(vec2 screenCoords, vec3 texel, vec2 virtualResolution, float intensity) {
    // Calculate angular frequency for subpixel pattern
    vec2 omega = vec2(3.141592654) * vec2(2.0) * virtualResolution;
    vec2 angle = screenCoords * omega;
    
    // Calculate RGB subpixel factors using phase-shifted sine waves
    vec3 xfactors = (SUBPIXELS + sin(angle.x + subpixelOffsets)) / (SUBPIXELS + 1.0);
    
    // Apply subpixel modulation
    vec3 result = texel * xfactors;
    
    // Calculate high and low brightness versions
    vec3 pixelHigh = ((1.0 + RASTERIZATION_BRIGHTBOOST) - (0.2 * result)) * result;
    vec3 pixelLow  = ((1.0 - RASTERIZATION_INTENSITY) + (0.1 * result)) * result;
    
    // Calculate position within virtual pixel for scanline effect
    vec2 coords = fract(screenCoords * virtualResolution) * 2.0 - vec2(1.0);
    float mask = 1.0 - abs(coords.y);
    
    // Mix between low and high based on mask
    vec3 rasterizationColor = mix(pixelLow, pixelHigh, mask);
    
    // Blend with original based on intensity
    return mix(texel, rasterizationColor, intensity);
}

/**
 * Apply rasterization effect based on mode
 *
 * @param screenCoords - Screen texture coordinates (0-1)
 * @param texel - Input color
 * @param virtualResolution - Virtual resolution for pattern spacing
 * @param intensity - Effect intensity (0-1, automatically reduced at high resolutions)
 * @param mode - Rasterization mode: 0=none, 1=scanline, 2=pixel, 3=subpixel
 * @return Rasterized color
 */
vec3 applyRasterization(vec2 screenCoords, vec3 texel, vec2 virtualResolution, float intensity, int mode) {
    if (mode == 0 || intensity <= 0.0) {
        return texel;
    }
    
    if (mode == 1) {
        return applyScanlineRasterization(screenCoords, texel, virtualResolution, intensity);
    } else if (mode == 2) {
        return applyPixelRasterization(screenCoords, texel, virtualResolution, intensity);
    } else if (mode == 3) {
        return applySubpixelRasterization(screenCoords, texel, virtualResolution, intensity);
    }
    
    return texel;
}
`;

export default rasterizationGLSL;
