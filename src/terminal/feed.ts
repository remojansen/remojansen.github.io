/**
 * Feed command - Load and display RSS feed from dev.to
 * Shows a list of posts, allows selection with arrow keys and Enter,
 * then displays the post content as markdown in cat-style output
 */

import type { CommandContext, KeyHandler } from "./ShellEmulator";
import { sleep } from "./ShellEmulator";

// ============================================
// Types
// ============================================

interface FeedItem {
	title: string;
	link: string;
	pubDate: string;
	description: string;
	content: string;
}

interface FeedState {
	items: FeedItem[];
	selectedIndex: number;
	scrollOffset: number;
	running: boolean;
	viewingPost: boolean;
	currentPost: FeedItem | null;
	postLines: string[];
	postScrollOffset: number;
	maxVisibleItems: number;
	maxVisibleLines: number;
	needsClear: boolean;
}

// ============================================
// RSS Parsing
// ============================================

/**
 * Parse RSS feed XML and extract items
 */
function parseRSSFeed(xmlText: string): FeedItem[] {
	const parser = new DOMParser();
	const doc = parser.parseFromString(xmlText, "text/xml");
	const items: FeedItem[] = [];

	const itemElements = doc.querySelectorAll("item");

	for (const item of itemElements) {
		const title = item.querySelector("title")?.textContent || "Untitled";
		const link = item.querySelector("link")?.textContent || "";
		const pubDate = item.querySelector("pubDate")?.textContent || "";
		const description = item.querySelector("description")?.textContent || "";
		// dev.to uses content:encoded for full content
		const content =
			item.getElementsByTagName("content:encoded")[0]?.textContent ||
			description;

		items.push({
			title,
			link,
			pubDate,
			description,
			content,
		});
	}

	return items;
}

/**
 * Format date for display
 */
function formatDate(dateStr: string): string {
	try {
		const date = new Date(dateStr);
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, "0");
		const day = date.getDate().toString().padStart(2, "0");
		return `${year}-${month}-${day}`;
	} catch {
		return dateStr.slice(0, 10);
	}
}

// ============================================
// HTML to Markdown Conversion
// ============================================

/**
 * Convert HTML content to terminal-friendly markdown
 */
function htmlToMarkdown(html: string): string {
	// Create a temporary DOM element to parse HTML
	const temp = document.createElement("div");
	temp.innerHTML = html;

	let result = "";

	function processNode(node: Node, indent = ""): string {
		let output = "";

		if (node.nodeType === Node.TEXT_NODE) {
			const text = node.textContent || "";
			// Collapse whitespace but preserve single spaces
			output += text.replace(/\s+/g, " ");
		} else if (node.nodeType === Node.ELEMENT_NODE) {
			const el = node as Element;
			const tagName = el.tagName.toLowerCase();

			switch (tagName) {
				case "h1":
					output += "\n\n═══════════════════════════════════════════\n";
					output += `  ${processChildren(node, indent).trim().toUpperCase()}`;
					output += "\n═══════════════════════════════════════════\n\n";
					break;

				case "h2":
					output += "\n\n───────────────────────────────────────────\n";
					output += `  ${processChildren(node, indent).trim()}`;
					output += "\n───────────────────────────────────────────\n\n";
					break;

				case "h3":
				case "h4":
				case "h5":
				case "h6":
					output += `\n\n  ## ${processChildren(node, indent).trim()}\n\n`;
					break;

				case "p":
					output += `\n${processChildren(node, indent).trim()}\n`;
					break;

				case "br":
					output += "\n";
					break;

				case "strong":
				case "b":
					output += `**${processChildren(node, indent).trim()}**`;
					break;

				case "em":
				case "i":
					output += `_${processChildren(node, indent).trim()}_`;
					break;

				case "code":
					// Inline code
					if (el.parentElement?.tagName.toLowerCase() !== "pre") {
						output += `\`${processChildren(node, indent).trim()}\``;
					} else {
						output += processChildren(node, indent);
					}
					break;

				case "pre": {
					output += "\n┌─────────────────────────────────────────┐\n";
					const codeContent = processChildren(node, "│ ")
						.trim()
						.split("\n")
						.map((line) => `│ ${line}`)
						.join("\n");
					output += codeContent;
					output += "\n└─────────────────────────────────────────┘\n";
					break;
				}

				case "ul":
					output += "\n";
					for (const child of el.children) {
						if (child.tagName.toLowerCase() === "li") {
							output += `  • ${processChildren(child, `${indent}    `).trim()}\n`;
						}
					}
					break;

				case "ol": {
					output += "\n";
					let num = 1;
					for (const child of el.children) {
						if (child.tagName.toLowerCase() === "li") {
							output += `  ${num}. ${processChildren(child, `${indent}     `).trim()}\n`;
							num++;
						}
					}
					break;
				}

				case "a": {
					const href = el.getAttribute("href") || "";
					const text = processChildren(node, indent).trim();
					if (href && text !== href) {
						output += `${text} (${href})`;
					} else if (href) {
						output += href;
					} else {
						output += text;
					}
					break;
				}

				case "blockquote": {
					output += "\n";
					const quoteLines = processChildren(node, indent)
						.trim()
						.split("\n")
						.map((line) => `  │ ${line}`)
						.join("\n");
					output += quoteLines;
					output += "\n";
					break;
				}

				case "img": {
					const alt = el.getAttribute("alt") || "image";
					output += `[Image: ${alt}]`;
					break;
				}

				case "hr":
					output += "\n─────────────────────────────────────────\n";
					break;

				case "div":
				case "article":
				case "section":
				case "span":
				case "figure":
				case "figcaption":
					output += processChildren(node, indent);
					break;

				default:
					output += processChildren(node, indent);
			}
		}

		return output;
	}

	function processChildren(node: Node, indent: string): string {
		let output = "";
		for (const child of node.childNodes) {
			output += processNode(child, indent);
		}
		return output;
	}

	result = processNode(temp);

	// Clean up excessive newlines
	result = result.replace(/\n{3,}/g, "\n\n");
	result = result.trim();

	return result;
}

/**
 * Word-wrap text to fit terminal width
 */
function wrapText(text: string, maxWidth: number): string[] {
	const lines: string[] = [];
	const paragraphs = text.split("\n");

	for (const paragraph of paragraphs) {
		// Preserve empty lines
		if (paragraph.trim() === "") {
			lines.push("");
			continue;
		}

		// Check if this is a special line (code block border, header, etc.)
		if (
			paragraph.startsWith("┌") ||
			paragraph.startsWith("└") ||
			paragraph.startsWith("│") ||
			paragraph.startsWith("═") ||
			paragraph.startsWith("─") ||
			paragraph.startsWith("  │") ||
			paragraph.startsWith("  •") ||
			paragraph.match(/^\s+\d+\./)
		) {
			lines.push(paragraph);
			continue;
		}

		// Word wrap regular text
		const words = paragraph.split(" ");
		let currentLine = "";

		for (const word of words) {
			if (currentLine.length === 0) {
				currentLine = word;
			} else if (currentLine.length + 1 + word.length <= maxWidth) {
				currentLine += ` ${word}`;
			} else {
				lines.push(currentLine);
				currentLine = word;
			}
		}

		if (currentLine.length > 0) {
			lines.push(currentLine);
		}
	}

	return lines;
}

// ============================================
// Rendering
// ============================================

/**
 * Render the feed list
 */
function renderFeedList(
	ctx: CommandContext,
	state: FeedState,
	isFirstFrame: boolean,
): void {
	const lines: string[] = [];

	// Header
	lines.push(
		"╔═══════════════════════════════════════════════════════════════╗",
	);
	lines.push(
		"║                    DEV.TO FEED READER                         ║",
	);
	lines.push(
		"╚═══════════════════════════════════════════════════════════════╝",
	);
	lines.push("");

	if (state.items.length === 0) {
		lines.push("  No posts found.");
	} else {
		// Calculate visible items
		const visibleItems = state.items.slice(
			state.scrollOffset,
			state.scrollOffset + state.maxVisibleItems,
		);

		for (let i = 0; i < visibleItems.length; i++) {
			const item = visibleItems[i];
			const actualIndex = state.scrollOffset + i;
			const isSelected = actualIndex === state.selectedIndex;
			const date = formatDate(item.pubDate);

			// Truncate title if too long
			const maxTitleLen = 50;
			let title = item.title;
			if (title.length > maxTitleLen) {
				title = `${title.slice(0, maxTitleLen - 3)}...`;
			}

			const prefix = isSelected ? " ▶ " : "   ";
			const line = `${prefix}${date}  ${title}`;
			lines.push(line);
		}

		// Scroll indicator
		if (state.items.length > state.maxVisibleItems) {
			const scrollInfo = `  [${state.selectedIndex + 1}/${state.items.length}]`;
			lines.push("");
			lines.push(scrollInfo);
		}
	}

	lines.push("");
	lines.push("───────────────────────────────────────────────────────────────");
	lines.push("  ↑↓ = Navigate  |  ENTER = Read post  |  Q = Quit");

	// Render
	if (isFirstFrame) {
		ctx.terminal.clear();
	}

	let frame = "\x1b[H";
	for (const line of lines) {
		frame += `${line}\x1b[K\r\n`;
	}
	ctx.terminal.write(frame);
}

/**
 * Render the post content (cat-style with paged output)
 */
function renderPost(
	ctx: CommandContext,
	state: FeedState,
	isFirstFrame: boolean,
): void {
	if (!state.currentPost) return;

	const lines: string[] = [];

	// Header
	lines.push(
		"╔═══════════════════════════════════════════════════════════════╗",
	);

	// Title (may need multiple lines)
	const titleLines = wrapText(state.currentPost.title, 61);
	for (const titleLine of titleLines) {
		const padding = 63 - titleLine.length;
		const leftPad = Math.floor(padding / 2);
		const rightPad = padding - leftPad;
		lines.push(`║${" ".repeat(leftPad)}${titleLine}${" ".repeat(rightPad)}║`);
	}

	lines.push(
		"╚═══════════════════════════════════════════════════════════════╝",
	);

	const dateStr = formatDate(state.currentPost.pubDate);
	lines.push(`  Published: ${dateStr}`);
	lines.push("");
	lines.push("───────────────────────────────────────────────────────────────");
	lines.push("");

	// Content
	const visibleLines = state.postLines.slice(
		state.postScrollOffset,
		state.postScrollOffset + state.maxVisibleLines,
	);

	for (const line of visibleLines) {
		lines.push(line);
	}

	// Footer
	lines.push("");
	lines.push("───────────────────────────────────────────────────────────────");

	const scrollInfo =
		state.postLines.length > state.maxVisibleLines
			? `  [Line ${state.postScrollOffset + 1}-${Math.min(state.postScrollOffset + state.maxVisibleLines, state.postLines.length)}/${state.postLines.length}]`
			: "";

	lines.push(
		`  ↑↓/PgUp/PgDn = Scroll  |  B = Back to list  |  Q = Quit${scrollInfo}`,
	);

	// Render
	if (isFirstFrame) {
		ctx.terminal.clear();
	}

	let frame = "\x1b[H";
	for (const line of lines) {
		frame += `${line}\x1b[K\r\n`;
	}
	ctx.terminal.write(frame);
}

// ============================================
// Feed Command
// ============================================

/**
 * Feed command handler
 */
export async function feedCommand(ctx: CommandContext): Promise<void> {
	// Check if key handler is available
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln("feed: error - terminal does not support input");
		return;
	}

	// Hide cursor
	ctx.terminal.hideCursor?.();

	// Get terminal size
	const size = ctx.terminal.getSize?.() || { cols: 80, rows: 24 };
	const maxVisibleItems = Math.max(5, size.rows - 10);
	const maxVisibleLines = Math.max(5, size.rows - 12);

	// Initialize state
	const state: FeedState = {
		items: [],
		selectedIndex: 0,
		scrollOffset: 0,
		running: true,
		viewingPost: false,
		currentPost: null,
		postLines: [],
		postScrollOffset: 0,
		maxVisibleItems,
		maxVisibleLines,
		needsClear: false,
	};

	// Show loading message
	ctx.terminal.clear();
	ctx.terminal.writeln("Loading feed from dev.to/remojansen...");

	// Fetch the feed
	try {
		// Use a CORS proxy or fetch directly if allowed
		const feedUrl = "https://dev.to/feed/remojansen";
		const response = await fetch(feedUrl);

		if (!response.ok) {
			throw new Error(`HTTP ${response.status}`);
		}

		const xmlText = await response.text();
		state.items = parseRSSFeed(xmlText);

		if (state.items.length === 0) {
			ctx.terminal.writeln("No posts found in the feed.");
			ctx.terminal.showCursor?.();
			return;
		}
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		ctx.terminal.writeln(`feed: error loading feed - ${errorMessage}`);
		ctx.terminal.writeln("");
		ctx.terminal.writeln("Note: CORS may block direct feed access.");
		ctx.terminal.writeln("The feed URL is: https://dev.to/feed/remojansen");
		ctx.terminal.showCursor?.();
		return;
	}

	// Set up key handler
	const keyHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
	) => {
		if (eventType !== "keydown") return;

		// Q to quit
		if (key === "q" || key === "Q" || keyCode === 81) {
			state.running = false;
			return;
		}

		if (state.viewingPost) {
			// Post view controls
			if (key === "b" || key === "B" || keyCode === 66) {
				// Back to list
				state.viewingPost = false;
				state.currentPost = null;
				state.postLines = [];
				state.postScrollOffset = 0;
				state.needsClear = true;
				return;
			}

			// Scroll controls
			if (key === "ArrowUp" || keyCode === 38) {
				state.postScrollOffset = Math.max(0, state.postScrollOffset - 1);
			}
			if (key === "ArrowDown" || keyCode === 40) {
				const maxOffset = Math.max(
					0,
					state.postLines.length - state.maxVisibleLines,
				);
				state.postScrollOffset = Math.min(
					maxOffset,
					state.postScrollOffset + 1,
				);
			}
			if (key === "PageUp" || keyCode === 33) {
				state.postScrollOffset = Math.max(
					0,
					state.postScrollOffset - state.maxVisibleLines,
				);
			}
			if (key === "PageDown" || keyCode === 34) {
				const maxOffset = Math.max(
					0,
					state.postLines.length - state.maxVisibleLines,
				);
				state.postScrollOffset = Math.min(
					maxOffset,
					state.postScrollOffset + state.maxVisibleLines,
				);
			}
			if (key === "Home" || keyCode === 36) {
				state.postScrollOffset = 0;
			}
			if (key === "End" || keyCode === 35) {
				state.postScrollOffset = Math.max(
					0,
					state.postLines.length - state.maxVisibleLines,
				);
			}
		} else {
			// List view controls
			if (key === "ArrowUp" || keyCode === 38) {
				state.selectedIndex = Math.max(0, state.selectedIndex - 1);
				// Adjust scroll if needed
				if (state.selectedIndex < state.scrollOffset) {
					state.scrollOffset = state.selectedIndex;
				}
			}
			if (key === "ArrowDown" || keyCode === 40) {
				state.selectedIndex = Math.min(
					state.items.length - 1,
					state.selectedIndex + 1,
				);
				// Adjust scroll if needed
				if (state.selectedIndex >= state.scrollOffset + state.maxVisibleItems) {
					state.scrollOffset = state.selectedIndex - state.maxVisibleItems + 1;
				}
			}

			// Enter to select
			if (key === "Enter" || keyCode === 13) {
				const item = state.items[state.selectedIndex];
				if (item) {
					state.currentPost = item;
					state.viewingPost = true;
					state.postScrollOffset = 0;

					// Convert HTML to markdown and wrap
					const markdown = htmlToMarkdown(item.content);
					state.postLines = wrapText(markdown, size.cols - 4);
				}
			}
		}
	};

	ctx.terminal.setKeyHandler(keyHandler);

	// Main loop
	const FRAME_DELAY = 50;
	let isFirstFrame = true;

	while (state.running) {
		// Check if we need to clear the screen (e.g., when going back from post view)
		if (state.needsClear) {
			ctx.terminal.clear();
			state.needsClear = false;
			isFirstFrame = true;
		}

		if (state.viewingPost) {
			renderPost(ctx, state, isFirstFrame);
		} else {
			renderFeedList(ctx, state, isFirstFrame);
		}
		isFirstFrame = false;

		await sleep(FRAME_DELAY);
	}

	// Cleanup
	ctx.terminal.clearKeyHandler?.();
	ctx.terminal.showCursor?.();
	ctx.terminal.clear();
	ctx.terminal.writeln("");
}
