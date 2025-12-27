/**
 * Burn-In Effect
 * Ported from BurnInEffect.qml and ShaderTerminal.qml (lines 302-307)
 *
 * Simulates phosphor persistence/ghosting on CRT monitors.
 * When bright content is displayed, it leaves a "ghost" that slowly fades.
 * This mimics the phosphor burn-in on old monitors.
 *
 * In the original QML:
 * - Uses a recursive shader source that accumulates previous frames
 * - Decay rate controlled by burnInFadeTime
 * - Blends accumulated ghost image with current frame using max()
 * - prevMask (previous brightness) slows decay for bright areas
 *
 * Implementation uses ping-pong buffers for frame accumulation:
 * - Two render targets swap each frame
 * - Previous frame decays over time based on frame delta
 * - Current frame blends with decayed previous using max()
 *
 * Default value: varies by profile (0.4 typical)
 */

/**
 * Burn-in accumulation shader
 * This is used in a separate pass to accumulate the burn-in buffer.
 * It reads from the previous burn-in buffer and the current terminal source,
 * then outputs the accumulated result.
 *
 * The burn-in effect shows "ghosts" of previous content that slowly fade.
 * When content moves (like a cursor), the old position shows a fading ghost.
 *
 * The decay happens every frame based on deltaTime (time since last frame).
 */
export const burnInAccumulationGLSL = /* glsl */ `
precision mediump float;

uniform sampler2D currentSource;    // Current terminal content (static pass output)
uniform sampler2D burnInSource;     // Previous accumulated burn-in
uniform float burnInTime;           // Fade time factor (1/fadeTimeMs, higher = faster fade)
uniform float deltaTime;            // Time since last frame in seconds

varying vec2 vUv;

// Convert RGB to greyscale (matches QML rgb2grey)
float rgb2grey(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
    vec2 coords = vUv;
    
    // Sample current terminal content
    vec3 txtColor = texture2D(currentSource, coords).rgb;
    float currBrightness = rgb2grey(txtColor);
    
    // Sample accumulated burn-in from previous frame
    vec4 accColor = texture2D(burnInSource, coords);
    vec3 prevColor = accColor.rgb;
    
    // Calculate decay rate per frame
    // burnInTime is 1/fadeTimeMs (0.000625 to 0.00625)
    // deltaTime is in seconds (~0.016 at 60fps)
    // 
    // Lower multiplier = slower decay = more visible burn-in ghost
    // Using 0.3 multiplier for slower, more visible ghosting
    float decayRate = 0.3 * burnInTime * deltaTime * 1000.0;
    
    // Clamp to reasonable range (max 0.1 = 10% decay per frame)
    decayRate = clamp(decayRate, 0.0, 0.1);
    
    // Calculate retention factor (how much of the previous frame to keep)
    float retention = 1.0 - decayRate;
    
    // Decay the previous accumulated color
    vec3 decayedPrev = prevColor * retention;
    
    // The result is the maximum of:
    // 1. The current content (always shows through)
    // 2. The decayed ghost from previous frames
    vec3 result = max(decayedPrev, txtColor);
    
    // Store current brightness in alpha
    gl_FragColor = vec4(result, currBrightness);
}
`;

export const burnInGLSL = /* glsl */ `
/**
 * Apply burn-in effect by sampling from accumulated burn-in buffer
 * 
 * @param currentColor - Current frame color (from static pass)
 * @param burnInColor - Accumulated burn-in color (from burn-in buffer)
 * @param burnIn - Burn-in intensity (0-1)
 * @return Blended color with burn-in ghosting
 */
vec3 applyBurnIn(vec3 currentColor, vec3 burnInColor, float burnIn) {
    if (burnIn <= 0.0) {
        return currentColor;
    }
    // Use max blend to show burn-in ghosts (matching QML)
    // The burn-in buffer already contains the accumulated/decayed ghosts
    return max(currentColor, burnInColor * burnIn);
}
`;

export default burnInGLSL;
