/**
 * CV command - displays CV information in various sections
 */

import type { CommandContext } from "./ShellEmulator";

// CV data interface types
interface Publication {
	title: string;
	isbn: string;
	publisher: string;
	year: string;
	role: string;
}

interface WorkExperience {
	organizations: string;
	roles: string;
	period: string;
	type: string;
	location: string;
}

interface Education {
	school: string;
	title: string;
	year: string | number;
}

interface Skill {
	name: string;
	level?: string;
	category?: string;
}

interface Hobby {
	name: string;
}

interface Language {
	name: string;
	level: string;
}

interface OSSProject {
	project: string;
	description?: string;
	url?: string;
	role?: string;
	stats?: string;
}

interface Award {
	title: string;
	year: string;
	org?: string;
	description?: string;
}

interface Social {
	url: string;
	site: string;
}

interface CVData {
	social: Social[];
	bio: string[];
	workExperience: WorkExperience[];
	education: Education[];
	skills: (Skill | string)[];
	oss: OSSProject[];
	publications: Publication[];
	awards: Award[];
	hobbies: (Hobby | string)[];
	languages: Language[];
}

// Formatting functions for CV sections
function formatWorkExperience(
	ctx: CommandContext,
	data: WorkExperience[],
): void {
	if (data.length === 0) {
		ctx.terminal.writeln("No work experience entries available.");
		return;
	}
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("            WORK EXPERIENCE");
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("");
	for (const entry of data) {
		ctx.terminal.writeln(`  ${entry.roles}`);
		ctx.terminal.writeln(`  ${entry.organizations}`);
		ctx.terminal.writeln(`  ${entry.period} | ${entry.type}`);
		ctx.terminal.writeln(`  ${entry.location}`);
		ctx.terminal.writeln("───────────────────────────────────────────");
	}
}

function formatEducation(ctx: CommandContext, data: Education[]): void {
	if (data.length === 0) {
		ctx.terminal.writeln("No education entries available.");
		return;
	}
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("               EDUCATION");
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("");
	for (const entry of data) {
		ctx.terminal.writeln(`  ${entry.title}`);
		ctx.terminal.writeln(`  ${entry.school}`);
		ctx.terminal.writeln(`  ${entry.year}`);
		ctx.terminal.writeln("───────────────────────────────────────────");
	}
}

function formatSkills(ctx: CommandContext, data: (Skill | string)[]): void {
	if (data.length === 0) {
		ctx.terminal.writeln("No skills entries available.");
		return;
	}
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("                 SKILLS");
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("");

	// Display skills - handle both string and object formats
	for (const skill of data) {
		if (typeof skill === "string") {
			ctx.terminal.writeln(`  • ${skill}`);
		} else {
			const level = skill.level ? ` (${skill.level})` : "";
			ctx.terminal.writeln(`  • ${skill.name}${level}`);
		}
	}
	ctx.terminal.writeln("");
}

/**
 * Aggregate daily stats data by month
 */
function aggregateStatsByMonth(
	data: Record<string, number>,
): Map<string, number> {
	const monthlyData = new Map<string, number>();

	for (const [dateStr, value] of Object.entries(data)) {
		// Extract year-month from date string (e.g., "2015-04-15" -> "2015-04")
		const yearMonth = dateStr.substring(0, 7);
		const current = monthlyData.get(yearMonth) || 0;
		monthlyData.set(yearMonth, current + value);
	}

	return monthlyData;
}

/**
 * Render a text-based bar chart for stats
 */
function renderStatsChart(
	ctx: CommandContext,
	monthlyData: Map<string, number>,
	projectName: string,
): void {
	const entries = Array.from(monthlyData.entries()).sort((a, b) =>
		a[0].localeCompare(b[0]),
	);

	if (entries.length === 0) {
		ctx.terminal.writeln("  No stats data available.");
		return;
	}

	// Find the maximum value for scaling
	const maxValue = Math.max(...entries.map(([, v]) => v));
	const chartWidth = 30; // Width of the bar chart in characters

	ctx.terminal.writeln("");
	ctx.terminal.writeln(`  Download Statistics (${projectName})`);
	ctx.terminal.writeln(`  ${"─".repeat(42)}`);

	// Only show last 24 months to keep it readable
	const recentEntries = entries.slice(-24);

	for (const [month, value] of recentEntries) {
		// Calculate bar length proportional to max value
		const barLength = Math.round((value / maxValue) * chartWidth);
		const bar = "█".repeat(barLength) + "░".repeat(chartWidth - barLength);

		// Format the value with K/M suffix for readability
		let valueStr: string;
		if (value >= 1000000) {
			valueStr = `${(value / 1000000).toFixed(1)}M`;
		} else if (value >= 1000) {
			valueStr = `${(value / 1000).toFixed(0)}K`;
		} else {
			valueStr = value.toString();
		}

		ctx.terminal.writeln(`  ${month} |${bar}| ${valueStr.padStart(6)}`);
	}

	ctx.terminal.writeln(`  ${"─".repeat(42)}`);

	// Calculate and show total
	const total = entries.reduce((sum, [, v]) => sum + v, 0);
	let totalStr: string;
	if (total >= 1000000) {
		totalStr = `${(total / 1000000).toFixed(1)}M`;
	} else if (total >= 1000) {
		totalStr = `${(total / 1000).toFixed(0)}K`;
	} else {
		totalStr = total.toString();
	}
	ctx.terminal.writeln(`  Total downloads: ${totalStr}`);
}

async function formatOSS(
	ctx: CommandContext,
	data: OSSProject[],
): Promise<void> {
	if (data.length === 0) {
		ctx.terminal.writeln("No open source contributions available.");
		return;
	}
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("       OPEN SOURCE CONTRIBUTIONS");
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("");
	for (const entry of data) {
		ctx.terminal.writeln(`  ${entry.project}`);
		if (entry.role) {
			ctx.terminal.writeln(`  Role: ${entry.role}`);
		}
		if (entry.description) {
			ctx.terminal.writeln(`  ${entry.description}`);
		}
		if (entry.url) {
			ctx.terminal.writeln(`  URL: ${entry.url}`);
		}

		// If stats URL is provided, fetch and display chart
		if (entry.stats) {
			try {
				// Remove leading slash if present for fetch
				const statsUrl = entry.stats.startsWith("/")
					? entry.stats.slice(1)
					: entry.stats;
				const response = await fetch(statsUrl);
				if (response.ok) {
					const statsData = await response.json();
					// The stats file has the project name as the key
					const projectKey = Object.keys(statsData)[0];
					if (projectKey && statsData[projectKey]) {
						const monthlyData = aggregateStatsByMonth(statsData[projectKey]);
						renderStatsChart(ctx, monthlyData, entry.project);
					}
				}
			} catch (_error) {
				// Silently ignore stats loading errors
			}
		}

		ctx.terminal.writeln("───────────────────────────────────────────");
	}
}

function formatPublications(ctx: CommandContext, data: Publication[]): void {
	if (data.length === 0) {
		ctx.terminal.writeln("No publications available.");
		return;
	}
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("              PUBLICATIONS");
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("");
	for (const pub of data) {
		ctx.terminal.writeln(`  "${pub.title}"`);
		ctx.terminal.writeln(`  Publisher: ${pub.publisher}`);
		ctx.terminal.writeln(`  Year: ${pub.year}`);
		ctx.terminal.writeln(`  Role: ${pub.role}`);
		if (pub.isbn && pub.isbn !== "TBD") {
			ctx.terminal.writeln(`  ISBN: ${pub.isbn}`);
		}
		ctx.terminal.writeln("───────────────────────────────────────────");
	}
}

function formatAwards(ctx: CommandContext, data: Award[]): void {
	if (data.length === 0) {
		ctx.terminal.writeln("No awards available.");
		return;
	}
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("                 AWARDS");
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("");
	for (const award of data) {
		ctx.terminal.writeln(`  ${award.title}`);
		ctx.terminal.writeln(`  Year: ${award.year}`);
		if (award.org) {
			ctx.terminal.writeln(`  Organization: ${award.org}`);
		}
		if (award.description) {
			ctx.terminal.writeln(`  ${award.description}`);
		}
		ctx.terminal.writeln("───────────────────────────────────────────");
	}
}

function formatHobbies(ctx: CommandContext, data: (Hobby | string)[]): void {
	if (!data || data.length === 0) {
		ctx.terminal.writeln("No hobbies available.");
		return;
	}
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("                 HOBBIES");
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("");
	for (const hobby of data) {
		const hobbyName = typeof hobby === "string" ? hobby : hobby.name;
		ctx.terminal.writeln(`  • ${hobbyName}`);
	}
	ctx.terminal.writeln("");
}

function formatSocial(ctx: CommandContext, data: Social[]): void {
	if (!data || data.length === 0) {
		ctx.terminal.writeln("No social links available.");
		return;
	}
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("                 SOCIAL");
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("");
	for (const social of data) {
		ctx.terminal.writeln(`  ${social.site}`);
		ctx.terminal.writeln(`  ${social.url}`);
		ctx.terminal.writeln("───────────────────────────────────────────");
	}
}

function formatBio(ctx: CommandContext, data: string[]): void {
	if (!data || data.length === 0) {
		ctx.terminal.writeln("No bio available.");
		return;
	}
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("                   BIO");
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("");

	const padding = "  ";
	const maxWidth = 80;
	const contentWidth = maxWidth - padding.length;

	for (const paragraph of data) {
		const words = paragraph.split(" ");
		let currentLine = "";

		for (const word of words) {
			if (currentLine.length === 0) {
				currentLine = word;
			} else if (currentLine.length + 1 + word.length <= contentWidth) {
				currentLine += ` ${word}`;
			} else {
				ctx.terminal.writeln(`${padding}${currentLine}`);
				currentLine = word;
			}
		}

		if (currentLine.length > 0) {
			ctx.terminal.writeln(`${padding}${currentLine}`);
		}
		ctx.terminal.writeln("");
	}
}

function formatLanguages(ctx: CommandContext, data: Language[]): void {
	if (!data || data.length === 0) {
		ctx.terminal.writeln("No languages available.");
		return;
	}
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("                LANGUAGES");
	ctx.terminal.writeln("═══════════════════════════════════════════");
	ctx.terminal.writeln("");
	for (const lang of data) {
		ctx.terminal.writeln(`  ${lang.name}`);
		ctx.terminal.writeln(`  Level: ${lang.level}`);
		ctx.terminal.writeln("───────────────────────────────────────────");
	}
}

/**
 * CV command handler - displays CV information in various sections
 */
export async function cvCommand(ctx: CommandContext): Promise<void> {
	const validArgs = [
		"--social",
		"--bio",
		"--work-experience",
		"--education",
		"--skills",
		"--oss",
		"--publications",
		"--awards",
		"--hobbies",
		"--languages",
		"--download",
		"--help",
	];

	// No argument provided
	if (ctx.args.length < 2) {
		ctx.terminal.writeln("cv: missing argument");
		ctx.terminal.writeln("Try './cv --help' for more information.");
		return;
	}

	const arg = ctx.args[1].toLowerCase();

	// Help command
	if (arg === "help" || arg === "--help" || arg === "-h") {
		ctx.terminal.writeln("Usage: ./cv [OPTION]");
		ctx.terminal.writeln("");
		ctx.terminal.writeln("Display CV information sections.");
		ctx.terminal.writeln("");
		ctx.terminal.writeln("Options:");
		ctx.terminal.writeln("  --social             Display social media links");
		ctx.terminal.writeln("  --bio                Display bio summary");
		ctx.terminal.writeln(
			"  --work-experience    Display work experience history",
		);
		ctx.terminal.writeln("  --education          Display education background");
		ctx.terminal.writeln("  --skills             Display skills");
		ctx.terminal.writeln(
			"  --oss                Display open source contributions",
		);
		ctx.terminal.writeln("  --publications       Display publications");
		ctx.terminal.writeln(
			"  --awards             Display awards and recognitions",
		);
		ctx.terminal.writeln(
			"  --hobbies            Display hobbies and interests",
		);
		ctx.terminal.writeln(
			"  --languages          Display language proficiencies",
		);
		ctx.terminal.writeln("  --download           Download CV as PDF");
		ctx.terminal.writeln("  --help               Display this help message");
		return;
	}

	// Check if argument is valid
	if (!validArgs.includes(arg)) {
		ctx.terminal.writeln(`cv: invalid option '${arg}'`);
		ctx.terminal.writeln("Try './cv --help' for more information.");
		return;
	}

	// Load CV data
	let cvData: CVData;
	try {
		const response = await fetch("assets/content/cv.json");
		if (!response.ok) {
			throw new Error("Could not load CV data");
		}
		cvData = await response.json();
	} catch (_error) {
		ctx.terminal.writeln("cv: error loading CV data");
		return;
	}

	// Display the requested section
	switch (arg) {
		case "--social":
			formatSocial(ctx, cvData.social);
			break;
		case "--bio":
			formatBio(ctx, cvData.bio);
			break;
		case "--work-experience":
			formatWorkExperience(ctx, cvData.workExperience);
			break;
		case "--education":
			formatEducation(ctx, cvData.education);
			break;
		case "--skills":
			formatSkills(ctx, cvData.skills);
			break;
		case "--oss":
			await formatOSS(ctx, cvData.oss);
			break;
		case "--publications":
			formatPublications(ctx, cvData.publications);
			break;
		case "--awards":
			formatAwards(ctx, cvData.awards);
			break;
		case "--hobbies":
			formatHobbies(ctx, cvData.hobbies);
			break;
		case "--languages":
			formatLanguages(ctx, cvData.languages);
			break;
		case "--download":
			window.open("assets/content/cv.pdf", "_blank");
			ctx.terminal.writeln("Opening CV PDF for download...");
			break;
	}
}
