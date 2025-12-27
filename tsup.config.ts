import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/main.ts"],
	format: ["iife"],
	outDir: "dist",
	bundle: true,
	noExternal: [/.*/],
	platform: "browser",
});
