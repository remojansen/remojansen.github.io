import { defineConfig } from "tsup";

export default defineConfig([
	// App build - IIFE for direct browser use (remojansen.github.io)
	{
		entry: ["src/app/index.ts"],
		format: ["iife"],
		outDir: "dist",
		bundle: true,
		noExternal: [/.*/],
		platform: "browser",
		clean: true,
		minify: true,
		globalName: "CoolRetroTerm",
	},
]);
