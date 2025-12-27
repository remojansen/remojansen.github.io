/**
 * Terminal Frame Shader
 * Ported from TerminalFrame.qml
 *
 * This shader renders the CRT frame with:
 * - Screen curvature distortion (inverse of text curvature)
 * - Frame shadow (logarithmic curve approximation)
 * - Screen shadow
 * - Vignette effect
 *
 * Note: The frame uses distortCoordinates which ADDS distortion,
 * while the text uses barrel which SUBTRACTS. They are inverses.
 *
 * ASPECT RATIO FIX:
 * The curvature calculation needs to account for aspect ratio to maintain
 * proper circular distortion on wide/tall screens rather than elliptical.
 */

export const terminalFrameVertexShader = /* glsl */ `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const terminalFrameFragmentShader = /* glsl */ `
precision mediump float;

uniform float screenCurvature;
uniform float screenShadowCoeff;
uniform float frameShadowCoeff;
uniform vec4 frameColor;
uniform vec2 margin;
uniform vec2 resolution;

varying vec2 vUv;

// Utility functions from ShaderLibrary.qml
float max2(vec2 v) {
    return max(v.x, v.y);
}

float min2(vec2 v) {
    return min(v.x, v.y);
}

float prod2(vec2 v) {
    return v.x * v.y;
}

float sum2(vec2 v) {
    return v.x + v.y;
}

// Distort coordinates to simulate CRT screen curvature
// QML: return (coords + cc * (1.0 + dist) * dist)
// This is the INVERSE of barrel distortion - it expands outward
// With aspect ratio correction for proper circular distortion
vec2 distortCoordinates(vec2 coords) {
    vec2 cc = coords - vec2(0.5);
    
    // Apply aspect ratio correction for proper circular distortion
    float aspectRatio = resolution.x / resolution.y;
    vec2 ccCorrected = cc;
    if (aspectRatio > 1.0) {
        // Wide screen: reduce X contribution
        ccCorrected.x /= aspectRatio;
    } else {
        // Tall screen: reduce Y contribution  
        ccCorrected.y *= aspectRatio;
    }
    
    float dist = dot(ccCorrected, ccCorrected) * screenCurvature;
    return coords + cc * (1.0 + dist) * dist;
}

// Logarithm clamped to positive values
vec2 positiveLog(vec2 x) {
    return clamp(log(x), vec2(0.0), vec2(100.0));
}

void main() {
    vec2 staticCoords = vUv;
    
    // Apply distortion and margin scaling
    // QML: coords = distortCoordinates(staticCoords) * (vec2(1.0) + margin * 2.0) - margin
    vec2 coords = distortCoordinates(staticCoords) * (vec2(1.0) + margin * 2.0) - margin;

    // Vignette effect - darkens corners
    vec2 vignetteCoords = staticCoords * (1.0 - staticCoords.yx);
    float vignette = pow(prod2(vignetteCoords) * 15.0, 0.25);

    vec3 color = frameColor.rgb * vec3(1.0 - vignette);
    float alpha = 0.0;

    // Frame shadow using logarithmic curves
    float frameShadow = max2(
        positiveLog(-coords * frameShadowCoeff + vec2(1.0)) + 
        positiveLog(coords * frameShadowCoeff - (vec2(frameShadowCoeff) - vec2(1.0)))
    );
    frameShadow = max(sqrt(frameShadow), 0.0);
    color *= frameShadow;
    
    // Alpha calculation for frame edges
    // QML: alpha = sum2(1.0 - step(vec2(0.0), coords) + step(vec2(1.0), coords))
    alpha = sum2(1.0 - step(vec2(0.0), coords) + step(vec2(1.0), coords));
    alpha = clamp(alpha, 0.0, 1.0);
    alpha *= mix(1.0, 0.9, frameShadow);

    // Screen shadow effect
    float screenShadow = 1.0 - prod2(
        positiveLog(coords * screenShadowCoeff + vec2(1.0)) * 
        positiveLog(-coords * screenShadowCoeff + vec2(screenShadowCoeff + 1.0))
    );
    alpha = max(0.8 * screenShadow, alpha);

    gl_FragColor = vec4(color * alpha, alpha);
}
`;
