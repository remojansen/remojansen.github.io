/**
 * Glowing Line Effect
 * Ported from ShaderTerminal.qml dynamicShader (lines 212-215, 298-299)
 *
 * Simulates a scanning electron beam moving down the screen,
 * creating a bright horizontal line that sweeps vertically.
 * This mimics the visible scan line on some CRT monitors.
 *
 * In the original QML:
 * - Function randomPass() creates the moving line
 * - Uses smoothstep for smooth edges
 * - Moves based on: time * 0.00015
 * - Wraps around continuously using fract()
 * - The uniform glowingLine is already multiplied by 0.2: appSettings.glowingLine * 0.2
 *
 * Usage in QML: color += randomPass(coords * virtualResolution) * glowingLine;
 * Note: coords here is the jittered/hsync-distorted coordinates
 */

export const glowingLineGLSL = /* glsl */ `
/**
 * Calculate the glowing line (scanning beam) intensity
 * Exact port from QML:
 *   float randomPass(vec2 coords){
 *       return fract(smoothstep(-120.0, 0.0, coords.y - (virtualResolution.y + 120.0) * fract(time * 0.00015)));
 *   }
 *
 * @param coords - Already scaled coordinates (coords * virtualResolution from caller)
 * @param virtualResolutionY - Virtual screen height for line positioning
 * @param time - Current time value
 * @return Line intensity (0-1)
 */
float randomPass(vec2 coords, float virtualResolutionY, float time) {
    // Calculate the position of the scanning line
    float linePosition = (virtualResolutionY + 120.0) * fract(time * 0.00015);
    
    // Flip Y coordinate: WebGL has Y=0 at bottom, QML has Y=0 at top
    // This ensures the scan line moves top-to-bottom like in QML
    float flippedY = virtualResolutionY - coords.y;
    
    // Calculate distance from the line
    float distFromLine = flippedY - linePosition;
    
    // Use smoothstep to create a soft glow around the line
    float lineIntensity = smoothstep(-120.0, 0.0, distFromLine);
    
    // Wrap the result to create continuous scanning
    return fract(lineIntensity);
}

/**
 * Calculate glowing line contribution for the color accumulator
 * From QML: color += randomPass(coords * virtualResolution) * glowingLine;
 *
 * @param coords - Dynamic coordinates (after hsync distortion, before/same as jitter base)
 * @param virtualResolution - Virtual screen resolution
 * @param time - Current time value
 * @param glowingLine - Glowing line intensity (already multiplied by 0.2 in uniform)
 * @return Line contribution to add to color accumulator
 */
float calculateGlowingLineContribution(vec2 coords, vec2 virtualResolution, float time, float glowingLine) {
    if (glowingLine <= 0.0) {
        return 0.0;
    }
    vec2 scaledCoords = coords * virtualResolution;
    return randomPass(scaledCoords, virtualResolution.y, time) * glowingLine;
}
`;

export default glowingLineGLSL;
