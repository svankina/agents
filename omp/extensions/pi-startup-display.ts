import { homedir } from "node:os";
import path from "node:path";
import type { ExtensionAPI, ExtensionContext } from "@oh-my-pi/pi-coding-agent";
import {
	truncateToWidth,
	visibleWidth,
	wrapTextWithAnsi,
} from "@oh-my-pi/pi-tui";

const WIDGET_KEY = "pi-startup-display";
const CTRL_O = "\x0f";

interface ThemeLike {
	bold(text: string): string;
	fg(color: "customMessageLabel" | "muted", text: string): string;
}

interface StartupResources {
	contextFiles: readonly string[];
	extensions: readonly { readonly name: string; readonly path: string }[];
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
	if (entries.length === 0) return [fit("  None", width)];
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

	#section(name: string, entries: readonly string[], width: number): string[] {
		return [
			fit(this.theme.fg("customMessageLabel", `[${name}]`), width),
			"",
			...wrapEntries(entries, width).map((line) =>
				this.theme.fg("muted", line),
			),
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
					"escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o more",
				),
				width,
			),
			"",
			...this.#wrap(
				this.theme.fg(
					"muted",
					"Press ctrl+o to show full startup help and discovered resource paths.",
				),
				width,
			),
			"",
			...this.#section("Context", this.resources.contextFiles, width),
			"",
			...this.#section(
				"Extensions",
				this.resources.extensions.map((extension) => extension.name),
				width,
			),
		].map((line) => fit(line, width));
	}

	#renderExpanded(width: number): string[] {
		if (width === 0) return [];
		const help = [
			"escape interrupts the current response",
			"ctrl+c clears input; ctrl+d exits when input is empty",
			"/ opens commands; ! runs shell commands",
			"ctrl+o toggles startup help and expandable transcript details",
		];
		return [
			fit(this.theme.bold(`omp v${this.version}`), width),
			"",
			fit(this.theme.bold("Startup help"), width),
			"",
			...help.flatMap((line) =>
				this.#wrap(this.theme.fg("muted", `  ${line}`), width),
			),
			"",
			...this.#section("Context", this.resources.contextFiles, width),
			"",
			...this.#section(
				"Extensions",
				this.resources.extensions.map(
					(extension) => `${extension.name} — ${extension.path}`,
				),
				width,
			),
		].map((line) => fit(line, width));
	}
}

function extensionDisplayName(extensionPath: string): string {
	const parsed = path.parse(extensionPath);
	if (parsed.name !== "index" && parsed.name !== "extension")
		return parsed.base;
	let packageDir = parsed.dir;
	if (path.basename(packageDir) === "src")
		packageDir = path.dirname(packageDir);
	return path.basename(packageDir) || parsed.base;
}

async function discoverStartupResources(
	api: ExtensionAPI,
	ctx: ExtensionContext,
): Promise<StartupResources> {
	const [contextResult, extensionResult] = await Promise.allSettled([
		api.pi.discoverContextFiles(ctx.cwd),
		api.pi.discoverSessionExtensionPaths({}, ctx.cwd, api.pi.settings),
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

	return {
		contextFiles,
		extensions: extensionPaths.map((extensionPath) => ({
			name: extensionDisplayName(extensionPath),
			path: abbreviateHome(extensionPath),
		})),
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

	const install = async (ctx: ExtensionContext): Promise<void> => {
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

	api.on("session_start", async (_event, ctx) => install(ctx));
	api.on("session_switch", async (_event, ctx) => install(ctx));
	api.on("before_agent_start", () => clear());
	api.on("session_shutdown", () => clear());
}
