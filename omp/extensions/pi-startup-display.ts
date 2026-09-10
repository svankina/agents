import { readFile } from "node:fs/promises";
import { homedir } from "node:os";
import path from "node:path";
import type { ExtensionAPI, ExtensionContext } from "@oh-my-pi/pi-coding-agent";
import {
	truncateToWidth,
	visibleWidth,
	wrapTextWithAnsi,
} from "@oh-my-pi/pi-tui";

export const description =
	"This startup panel: context files, extensions and skills with one-line summaries.";

const WIDGET_KEY = "pi-startup-display";
const CTRL_O = "\x0f";
/** Widest name column before names start being clipped. */
const NAME_COLUMN_MAX = 26;
/** Below this the detail column is dropped instead of being shredded. */
const DETAIL_MIN_WIDTH = 12;
/** Extension sources are small; refuse to slurp anything unexpected. */
const MAX_SOURCE_BYTES = 512 * 1024;

interface ThemeLike {
	bold(text: string): string;
	fg(color: "customMessageLabel" | "muted", text: string): string;
}

interface ResourceEntry {
	readonly name: string;
	readonly description: string;
	readonly path: string;
}

interface StartupResources {
	contextFiles: readonly string[];
	extensions: readonly ResourceEntry[];
	skills: readonly ResourceEntry[];
}

function abbreviateHome(value: string): string {
	if (!path.isAbsolute(value)) return value;
	const relative = path.relative(homedir(), value);
	if (relative === "") return "~";
	if (relative.startsWith("..") || path.isAbsolute(relative)) return value;
	return `~/${relative.split(path.sep).join("/")}`;
}

function fit(line: string, width: number): string {
	if (width <= 0) return "";
	return visibleWidth(line) <= width ? line : truncateToWidth(line, width);
}

function wrapEntries(entries: readonly string[], width: number): string[] {
	if (entries.length === 0) return [fit("  none", width)];
	const available = Math.max(1, width - 2);
	const lines: string[] = [];
	let current = "";
	for (const entry of entries) {
		const next = current ? `${current}, ${entry}` : entry;
		if (current && visibleWidth(next) > available) {
			lines.push(fit(`  ${current}`, width));
			current = entry;
		} else {
			current = next;
		}
	}
	if (current) lines.push(fit(`  ${current}`, width));
	return lines;
}

/** Collapse a multi-sentence blurb to its first sentence, on one line. */
function firstSentence(text: string): string {
	const flat = text.replace(/\s+/g, " ").trim();
	const end = flat.search(/[.!?](?:\s|$)/);
	if (end < 0) return flat;
	return flat.slice(0, end);
}

class StartupDisplayWidget {
	#expanded = false;
	#cachedWidth = -1;
	#cachedLines: string[] | undefined;

	constructor(
		private readonly version: string,
		private readonly resources: StartupResources,
		private readonly theme: ThemeLike,
		private readonly requestRender: () => void,
	) {}

	setExpanded(expanded: boolean): void {
		if (this.#expanded === expanded) return;
		this.#expanded = expanded;
		this.invalidate();
		this.requestRender();
	}
	toggleExpanded(): void {
		this.setExpanded(!this.#expanded);
	}

	invalidate(): void {
		this.#cachedWidth = -1;
		this.#cachedLines = undefined;
	}

	render(termWidth: number): string[] {
		const width = Math.max(0, termWidth);
		if (this.#cachedLines && this.#cachedWidth === width)
			return this.#cachedLines;
		const lines = this.#expanded
			? this.#renderExpanded(width)
			: this.#renderConcise(width);
		this.#cachedWidth = width;
		this.#cachedLines = lines;
		return lines;
	}

	#wrap(line: string, width: number): string[] {
		if (width <= 0) return [];
		return wrapTextWithAnsi(line, width).map((part) => fit(part, width));
	}

	#header(name: string, count: number, width: number): string {
		const label = count > 0 ? `[${name} ${count}]` : `[${name}]`;
		return fit(this.theme.fg("customMessageLabel", label), width);
	}

	/**
	 * One entry per line: `name` in the foreground, one-liner (or path, when
	 * expanded) dimmed in an aligned second column.
	 */
	#entryLines(
		entries: readonly ResourceEntry[],
		width: number,
		detail: "description" | "path",
	): string[] {
		if (entries.length === 0)
			return [this.theme.fg("muted", fit("  none", width))];
		const nameWidth = Math.min(
			NAME_COLUMN_MAX,
			Math.max(...entries.map((entry) => visibleWidth(entry.name))),
		);
		const detailWidth = width - nameWidth - 4;
		return entries.map((entry) => {
			const name =
				visibleWidth(entry.name) > nameWidth
					? truncateToWidth(entry.name, nameWidth)
					: entry.name.padEnd(nameWidth);
			const text = entry[detail];
			if (!text || detailWidth < DETAIL_MIN_WIDTH)
				return fit(`  ${name.trimEnd()}`, width);
			return fit(
				`  ${name}  ${this.theme.fg("muted", fit(text, detailWidth))}`,
				width,
			);
		});
	}

	#sections(width: number, detail: "description" | "path"): string[] {
		return [
			this.#header("Context", 0, width),
			...wrapEntries(this.resources.contextFiles, width).map((line) =>
				this.theme.fg("muted", line),
			),
			"",
			this.#header("Extensions", this.resources.extensions.length, width),
			...this.#entryLines(this.resources.extensions, width, detail),
			"",
			this.#header("Skills", this.resources.skills.length, width),
			...this.#entryLines(this.resources.skills, width, detail),
		];
	}

	#renderConcise(width: number): string[] {
		if (width === 0) return [];
		return [
			fit(this.theme.bold(`omp v${this.version}`), width),
			"",
			...this.#wrap(
				this.theme.fg(
					"muted",
					"escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o paths",
				),
				width,
			),
			"",
			...this.#sections(width, "description"),
		].map((line) => fit(line, width));
	}

	#renderExpanded(width: number): string[] {
		if (width === 0) return [];
		const help = [
			"escape interrupts the current response",
			"ctrl+c clears input; ctrl+d exits when input is empty",
			"/ opens commands; ! runs shell commands",
			"ctrl+o toggles resource paths and expandable transcript details",
		];
		return [
			fit(this.theme.bold(`omp v${this.version}`), width),
			"",
			...help.flatMap((line) =>
				this.#wrap(this.theme.fg("muted", `  ${line}`), width),
			),
			"",
			...this.#sections(width, "path"),
		].map((line) => fit(line, width));
	}
}

function extensionDisplayName(extensionPath: string): string {
	const parsed = path.parse(extensionPath);
	if (parsed.name !== "index" && parsed.name !== "extension") return parsed.name;
	let packageDir = parsed.dir;
	if (path.basename(packageDir) === "src")
		packageDir = path.dirname(packageDir);
	return path.basename(packageDir) || parsed.name;
}

/**
 * One-liner for an extension, in order of authority:
 *   1. `export const description = "…"` — the convention these extensions use;
 *   2. `description` in the owning package.json (installed plugins);
 *   3. the first paragraph of the file's leading doc comment.
 * Read from source rather than the module: the module is already loaded and
 * re-importing it for a banner is not worth the side-effect risk.
 */
async function extensionDescription(extensionPath: string): Promise<string> {
	let source: string;
	try {
		source = await readFile(extensionPath, "utf8");
	} catch {
		return "";
	}
	if (source.length > MAX_SOURCE_BYTES)
		source = source.slice(0, MAX_SOURCE_BYTES);
	const declared = source.match(
		/export\s+const\s+description(?:\s*:\s*string)?\s*=\s*(["'`])((?:\\.|(?!\1)[^\\])*)\1/,
	);
	if (declared?.[2]) return firstSentence(declared[2].replace(/\\(.)/g, "$1"));
	const packaged = await packageDescription(path.dirname(extensionPath));
	if (packaged) return firstSentence(packaged);
	const block = source.match(/^\s*\/\*\*?([\s\S]*?)\*\//);
	if (!block?.[1]) return "";
	// First written line only: hand-wrapped doc comments continue into detail
	// that is rationale, not a summary, and a banner has room for neither.
	for (const line of block[1].split("\n")) {
		const text = line.replace(/^\s*\*\s?/, "").trim();
		if (text) return firstSentence(text);
	}
	return "";
}

/** `description` from the nearest package.json above an entry file. */
async function packageDescription(startDir: string): Promise<string> {
	let dir = startDir;
	for (let depth = 0; depth < 3; depth++) {
		try {
			const raw = await readFile(path.join(dir, "package.json"), "utf8");
			const parsed: unknown = JSON.parse(raw);
			const value =
				parsed && typeof parsed === "object" && "description" in parsed
					? parsed.description
					: undefined;
			return typeof value === "string" ? value : "";
		} catch {
			const parent = path.dirname(dir);
			if (parent === dir) return "";
			dir = parent;
		}
	}
	return "";
}

async function discoverStartupResources(
	api: ExtensionAPI,
	ctx: ExtensionContext,
): Promise<StartupResources> {
	const skillSettings = {
		...api.pi.settings.getGroup("skills"),
		disabledExtensions: api.pi.settings.get("disabledExtensions") ?? [],
	};
	const [contextResult, extensionResult, skillResult] = await Promise.allSettled([
		api.pi.discoverContextFiles(ctx.cwd),
		api.pi.discoverSessionExtensionPaths({}, ctx.cwd, api.pi.settings),
		api.pi.discoverSkills(ctx.cwd, undefined, skillSettings),
	]);
	const contextFiles =
		contextResult.status === "fulfilled"
			? [
					...new Set(
						contextResult.value
							.map((file) => abbreviateHome(file.path.trim()))
							.filter(Boolean),
					),
				]
			: [];
	const extensionPaths =
		extensionResult.status === "fulfilled"
			? [
					...new Set(
						extensionResult.value
							.map((extensionPath) => extensionPath.trim())
							.filter(Boolean),
					),
				]
			: [];
	const extensions = await Promise.all(
		extensionPaths.map(async (extensionPath) => ({
			name: extensionDisplayName(extensionPath),
			description: await extensionDescription(extensionPath),
			path: abbreviateHome(extensionPath),
		})),
	);
	const skills =
		skillResult.status === "fulfilled"
			? skillResult.value.skills
					.filter((skill) => !skill.hide)
					.map((skill) => ({
						name: skill.name,
						description: firstSentence(skill.description ?? ""),
						path: abbreviateHome(skill.filePath),
					}))
			: [];
	const byName = (a: ResourceEntry, b: ResourceEntry) =>
		a.name.localeCompare(b.name);

	return {
		contextFiles,
		extensions: extensions.sort(byName),
		skills: skills.sort(byName),
	};
}

export default function piStartupDisplay(api: ExtensionAPI): void {
	let activeUi: ExtensionContext["ui"] | undefined;
	let widget: StartupDisplayWidget | undefined;
	let removeInputListener: (() => void) | undefined;

	const clear = (): void => {
		removeInputListener?.();
		removeInputListener = undefined;
		activeUi?.setWidget(WIDGET_KEY, undefined);
		activeUi = undefined;
		widget = undefined;
	};

	// The widget lives in the fixed region above the editor, which the TUI
	// discards once the first turn starts. Re-emit its current content as a
	// transcript notification first, so the startup info survives in native
	// scrollback above the first user message instead of vanishing.
	const persistToTranscript = (): void => {
		if (!widget || !activeUi) return;
		const width = Math.max(20, (process.stdout.columns ?? 80) - 2);
		const lines = widget.render(width);
		if (lines.length > 0) activeUi.notify(lines.join("\n"), "info");
	};

	const mount = async (ctx: ExtensionContext): Promise<void> => {
		clear();
		if (!ctx.hasUI) return;
		const resources = await discoverStartupResources(api, ctx);
		activeUi = ctx.ui;
		ctx.ui.setWidget(
			WIDGET_KEY,
			(tui, theme) => {
				widget = new StartupDisplayWidget(
					api.pi.VERSION,
					resources,
					theme,
					() => tui.requestRender(),
				);
				return widget;
			},
			{ placement: "aboveEditor" },
		);
		removeInputListener = ctx.ui.onTerminalInput((data) => {
			if (data === CTRL_O) widget?.toggleExpanded();
			return undefined;
		});
	};

	api.on("session_start", async (_event, ctx) => mount(ctx));
	api.on("session_switch", async (_event, ctx) => mount(ctx));
	// First submission of any kind: flush the widget into the transcript before
	// the user message is echoed, so it reads in chronological order above it.
	api.on("input", () => {
		persistToTranscript();
		clear();
		return undefined;
	});
	// Fallback for prompts that bypass the editor (initial CLI message,
	// continue shortcuts, extension-sent user messages).
	api.on("before_agent_start", () => {
		persistToTranscript();
		clear();
	});
	api.on("session_shutdown", () => clear());
}
