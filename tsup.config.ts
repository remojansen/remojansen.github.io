import { defineConfig } from "tsup";

export default defineConfig([
	// Library build - ESM + CJS + DTS for npm package
	{
		entry: ["src/lib/index.ts"],
		format: ["esm", "cjs"],
		outDir: "dist/lib",
		dts: true,
		bundle: true,
		external: ["three", "@xterm/xterm"],
		platform: "browser",
		clean: true,
		treeshake: true,
	},
	// App build - IIFE for direct browser use (remojansen.github.io)
	{
		entry: ["src/app/index.ts"],
		format: ["iife"],
		outDir: "dist",
		bundle: true,
		noExternal: [/.*/],
		platform: "browser",
		minify: true,
		globalName: "CoolRetroTerm",
	},
]);
