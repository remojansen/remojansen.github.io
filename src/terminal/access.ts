/**
 * access - Easter egg command that asks for a password
 *
 * Features:
 * - Pretends to be a cluster/node access command
 * - Asks for password input
 * - Plays different videos based on password
 * - If password is "please" -> plays gotcha.webm
 * - Otherwise -> plays magic-word.webm (Jurassic Park reference)
 */

import type { CommandContext, KeyHandler } from "./ShellEmulator";

/**
 * access command - Easter egg password prompt
 */
export async function accessCommand(ctx: CommandContext): Promise<void> {
	// Handle --help flag
	if (ctx.args.includes("--help") || ctx.args.includes("-h")) {
		ctx.terminal.writeln("Usage: access <cluster> <node>");
		ctx.terminal.writeln("");
		ctx.terminal.writeln(
			"Connect to a remote cluster node with secure authentication.",
		);
		ctx.terminal.writeln("");
		ctx.terminal.writeln("Arguments:");
		ctx.terminal.writeln("  cluster    The cluster identifier to connect to");
		ctx.terminal.writeln("  node       The specific node within the cluster");
		ctx.terminal.writeln("");
		ctx.terminal.writeln("Options:");
		ctx.terminal.writeln("  --help, -h Show this help message");
		ctx.terminal.writeln("");
		ctx.terminal.writeln("Examples:");
		ctx.terminal.writeln("  access main program");
		ctx.terminal.writeln("  access main security");
		return;
	}

	// Check if video playback is supported
	if (!ctx.terminal.playVideo || !ctx.terminal.stopVideo) {
		ctx.terminal.writeln("access: error - video playback not supported");
		return;
	}

	// Check if key handler is available for password input
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln(
			"access: error - terminal does not support input capture",
		);
		return;
	}

	// We ignore the arguments (cluster, node) - it's an easter egg
	// Just proceed to ask for password

	ctx.terminal.writeln("Connecting to secure system...");
	ctx.terminal.writeln("");
	ctx.terminal.write("Password: ");

	// Capture password input
	let password = "";
	let inputComplete = false;
	let cancelled = false;

	const passwordHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
		ctrlKey?: boolean,
	) => {
		if (eventType !== "keydown") return;

		// Enter to submit password
		if (key === "Enter" || keyCode === 13) {
			inputComplete = true;
			return;
		}

		// Escape or Ctrl+C to cancel
		if (
			key === "Escape" ||
			keyCode === 27 ||
			((key === "c" || key === "C") && ctrlKey)
		) {
			cancelled = true;
			inputComplete = true;
			return;
		}

		// Backspace to delete
		if (key === "Backspace" || keyCode === 8) {
			if (password.length > 0) {
				password = password.slice(0, -1);
				// Erase the asterisk: move back, write space, move back
				ctx.terminal.write("\b \b");
			}
			return;
		}

		// Only accept printable characters
		if (key.length === 1 && !ctrlKey) {
			password += key;
			// Show asterisk for each character
			ctx.terminal.write("*");
		}
	};

	ctx.terminal.setKeyHandler(passwordHandler);

	// Wait for password input
	await new Promise<void>((resolve) => {
		const checkComplete = () => {
			if (inputComplete) {
				resolve();
			} else {
				setTimeout(checkComplete, 50);
			}
		};
		checkComplete();
	});

	ctx.terminal.clearKeyHandler?.();
	ctx.terminal.writeln(""); // New line after password

	if (cancelled) {
		ctx.terminal.writeln("");
		ctx.terminal.writeln("Access cancelled.");
		return;
	}

	// Determine which video to play based on password
	const videoUrl =
		password === "please"
			? "assets/video/gotcha.webm"
			: "assets/video/magic-word.webm";

	// Hide cursor during playback
	ctx.terminal.hideCursor?.();

	// Clear terminal for video display
	ctx.terminal.clear();

	let stopped = false;

	// Set up key handler - Q or Escape to quit
	const videoKeyHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
	) => {
		if (eventType !== "keydown") return;

		// Q to quit
		if (key === "q" || key === "Q" || keyCode === 81) {
			stopped = true;
			ctx.terminal.stopVideo?.();
		}
		// Escape to quit
		if (key === "Escape" || keyCode === 27) {
			stopped = true;
			ctx.terminal.stopVideo?.();
		}
	};

	ctx.terminal.setKeyHandler(videoKeyHandler);

	// Start video playback
	const playVideo = ctx.terminal.playVideo;

	// Start the video - don't await, we'll handle looping via the video element
	playVideo(videoUrl).catch(() => {
		// Ignore errors - video was stopped
	});

	// Wait a moment for the video element to be created
	await new Promise((resolve) => setTimeout(resolve, 100));

	// Get the video element and set up seamless looping by rewinding
	const video = ctx.terminal.getVideoElement?.();
	if (video) {
		video.loop = true; // Use native loop for seamless playback
	}

	// Wait until user stops the video
	await new Promise<void>((resolve) => {
		const checkStopped = () => {
			if (stopped) {
				resolve();
			} else {
				setTimeout(checkStopped, 100);
			}
		};
		checkStopped();
	});

	// Clean up
	ctx.terminal.clearKeyHandler?.();
	ctx.terminal.showCursor?.();
}
