/**
 * Screen Curvature Effect
 * Ported from ShaderTerminal.qml staticShader and dynamicShader
 *
 * Applies barrel distortion to simulate the curved glass of CRT monitors.
 *
 * QML has two coordinate transformation functions:
 * 1. staticShader: curvatureCoords with complex clamping formula
 * 2. dynamicShader: barrel() which just applies distortion
 *
 * We implement both to match the original exactly.
 *
 * ASPECT RATIO FIX:
 * The original QML code works with a near-square terminal window (or the terminal
 * content aspect ratio matches the window). In the web version with arbitrary aspect
 * ratios, we need to adjust the curvature calculation to maintain proper circular
 * distortion rather than elliptical. We pass resolution as a uniform to compute
 * the aspect ratio correction.
 */

export const screenCurvatureGLSL = /* glsl */ `
// Utility functions from ShaderLibrary.qml
float sum2(vec2 v) {
    return v.x + v.y;
}

float min2(vec2 v) {
    return min(v.x, v.y);
}

/**
 * Check if coordinates are within screen bounds
 * From QML: min2(step(0.0, v) - step(1.0, v))
 * @param v - Texture coordinates
 * @return 1.0 if in screen, 0.0 if outside
 */
float isInScreen(vec2 v) {
    return min2(step(0.0, v) - step(1.0, v));
}

/**
 * Barrel distortion for dynamicShader with aspect ratio correction
 * From QML dynamicShader barrel() function:
 *   float distortion = dot(cc, cc) * screenCurvature;
 *   return (v - cc * (1.0 + distortion) * distortion);
 *
 * This returns raw distorted coordinates WITHOUT clamping.
 * Used for: burn-in sampling, rasterization coordinates
 * 
 * Aspect ratio correction: We normalize the cc vector by aspect ratio
 * when computing distortion magnitude, but apply the original cc for offset.
 * This maintains proper circular curvature on wide/tall screens.
 *
 * @param v - Input texture coordinates
 * @param cc - Center offset (vec2(0.5) - v)
 * @param curvature - Curvature amount (0 = flat, higher = more curved)
 * @return Distorted coordinates (may be outside 0-1 range)
 */
vec2 barrel(vec2 v, vec2 cc, float curvature) {
    if (curvature <= 0.0) {
        return v;
    }
    // Apply aspect ratio correction for proper circular distortion
    // When width > height, we need to reduce the X component's contribution
    // to get circular rather than elliptical curvature
    float aspectRatio = resolution.x / resolution.y;
    vec2 ccCorrected = cc;
    if (aspectRatio > 1.0) {
        // Wide screen: reduce X contribution
        ccCorrected.x /= aspectRatio;
    } else {
        // Tall screen: reduce Y contribution
        ccCorrected.y *= aspectRatio;
    }
    float distortion = dot(ccCorrected, ccCorrected) * curvature;
    return v - cc * (1.0 + distortion) * distortion;
}

/**
 * Static shader curvature with coordinate clamping and aspect ratio correction
 * From QML staticShader:
 *   float distortion = dot(cc, cc) * screenCurvature;
 *   vec2 curvatureCoords = (qt_TexCoord0 - cc * (1.0 + distortion) * distortion);
 *   vec2 txt_coords = -2.0 * curvatureCoords + 3.0 * step(vec2(0.0), curvatureCoords) * curvatureCoords 
 *                     - 3.0 * step(vec2(1.0), curvatureCoords) * curvatureCoords;
 *
 * The clamping formula ensures coordinates stay within bounds for texture sampling.
 * 
 * @param coords - Input texture coordinates  
 * @param cc - Center offset (vec2(0.5) - coords)
 * @param curvature - Curvature amount
 * @return Clamped distorted coordinates for texture sampling
 */
vec2 applyStaticCurvature(vec2 coords, vec2 cc, float curvature) {
    if (curvature <= 0.0) {
        return coords;
    }
    // Apply aspect ratio correction for proper circular distortion
    float aspectRatio = resolution.x / resolution.y;
    vec2 ccCorrected = cc;
    if (aspectRatio > 1.0) {
        ccCorrected.x /= aspectRatio;
    } else {
        ccCorrected.y *= aspectRatio;
    }
    float distortion = dot(ccCorrected, ccCorrected) * curvature;
    vec2 curvatureCoords = coords - cc * (1.0 + distortion) * distortion;
    // QML clamping formula - keeps coordinates in valid range
    return -2.0 * curvatureCoords + 3.0 * step(vec2(0.0), curvatureCoords) * curvatureCoords 
           - 3.0 * step(vec2(1.0), curvatureCoords) * curvatureCoords;
}

/**
 * Get raw curvature coordinates (before clamping) with aspect ratio correction
 * Used for calculating reflectionMask
 */
vec2 getRawCurvatureCoords(vec2 coords, vec2 cc, float curvature) {
    if (curvature <= 0.0) {
        return coords;
    }
    // Apply aspect ratio correction for proper circular distortion
    float aspectRatio = resolution.x / resolution.y;
    vec2 ccCorrected = cc;
    if (aspectRatio > 1.0) {
        ccCorrected.x /= aspectRatio;
    } else {
        ccCorrected.y *= aspectRatio;
    }
    float distortion = dot(ccCorrected, ccCorrected) * curvature;
    return coords - cc * (1.0 + distortion) * distortion;
}

/**
 * Calculate reflection mask for screen bounds
 * From QML staticShader:
 *   float reflectionMask = sum2(step(vec2(0.0), curvatureCoords) - step(vec2(1.0), curvatureCoords));
 *   reflectionMask = clamp(reflectionMask, 0.0, 1.0);
 *
 * @param curvatureCoords - Raw curvature coordinates (before clamping)
 * @return 1.0 inside screen, 0.0 outside, fractional at edges
 */
float calculateReflectionMask(vec2 curvatureCoords) {
    float mask = sum2(step(vec2(0.0), curvatureCoords) - step(vec2(1.0), curvatureCoords));
    return clamp(mask, 0.0, 1.0);
}
`;

export default screenCurvatureGLSL;
