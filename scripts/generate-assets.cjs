const fs = require("node:fs");
const path = require("node:path");

const assetsDir = path.join(__dirname, "..", "assets");
const outputDir = path.join(__dirname, "..", "src", "lib", "assets");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

// Generate font.ts
const fontPath = path.join(
	assetsDir,
	"fonts",
	"modern-terminus",
	"TerminusTTF-4.46.0.ttf",
);
const fontBase64 = fs.readFileSync(fontPath).toString("base64");
const fontContent = `// Auto-generated - do not edit manually
// Run: npm run generate-assets
export const TERMINUS_FONT_BASE64 = "data:font/ttf;base64,${fontBase64}";
`;
fs.writeFileSync(path.join(outputDir, "font.ts"), fontContent);
console.log("Generated font.ts");

// Generate noise.ts
const noisePath = path.join(assetsDir, "images", "allNoise512.png");
const noiseBase64 = fs.readFileSync(noisePath).toString("base64");
const noiseContent = `// Auto-generated - do not edit manually
// Run: npm run generate-assets
export const NOISE_TEXTURE_BASE64 = "data:image/png;base64,${noiseBase64}";
`;
fs.writeFileSync(path.join(outputDir, "noise.ts"), noiseContent);
console.log("Generated noise.ts");

console.log("Asset generation complete!");
