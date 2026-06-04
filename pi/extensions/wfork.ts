import { spawnSync } from "node:child_process";
import * as crypto from "node:crypto";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

// Fork the current pi session into Warp. Delivery modes (PI_WFORK_MODE):
//   window  new window via warp://launch
//   pane    xdotool split-pane keyboard sim (X11 + Warp focused)
//   split   native warp://action/split_pane deep link (Warp builds that support it)
//   auto    default: pane when invoked from Warp with xdotool, else window

type Direction = "l" | "r" | "u" | "d";
const directions: Direction[] = ["l", "r", "u", "d"];
const dirName: Record<Direction, string> = { l: "left", r: "right", u: "up", d: "down" };
const defaultSplitKeys: Record<Direction, string> = {
	l: "ctrl+shift+Left",
	r: "ctrl+shift+D",
	u: "ctrl+shift+Up",
	d: "ctrl+shift+E",
};

function shellQuote(value: string): string {
	return `'${value.replace(/'/g, `'"'"'`)}'`;
}

function writeTempFile(prefix: string, content: string): string {
	const dir = path.join(os.tmpdir(), "pi-forks");
	fs.mkdirSync(dir, { recursive: true });
	const file = path.join(
		dir,
		`${prefix}-${Date.now()}-${crypto.randomBytes(4).toString("hex")}.txt`,
	);
	fs.writeFileSync(file, content, "utf8");
	return file;
}

// Shell line that forks this session, run in cwd.
function forkCommandLine(cwd: string, sessionFile: string): string {
	return `cd ${shellQuote(cwd)} && exec pi --fork ${shellQuote(sessionFile)}`;
}

function parseDirection(args: string): Direction | null {
	const arg = args.trim().toLowerCase();
	if (!arg) return "r";
	if (arg === "left") return "l";
	if (arg === "right") return "r";
	if (arg === "up") return "u";
	if (arg === "down") return "d";
	return directions.includes(arg as Direction) ? (arg as Direction) : null;
}

function getSplitKeys(direction: Direction): string {
	return (
		process.env[`PI_WFORK_SPLIT_KEYS_${direction.toUpperCase()}`] ??
		(direction === "r" ? process.env.PI_WFORK_SPLIT_KEYS : undefined) ??
		defaultSplitKeys[direction]
	);
}

function hasXdotool(): boolean {
	return (
		spawnSync("xdotool", ["--version"], { stdio: "ignore", timeout: 1_000 })
			.status === 0
	);
}

function inWarp(): boolean {
	return (
		process.env.TERM_PROGRAM === "WarpTerminal" ||
		!!process.env.WARP_TERMINAL_SESSION_UUID ||
		!!process.env.WARP_IS_LOCAL_SHELL_SESSION ||
		!!process.env.WARP_SESSION_ID
	);
}

function openUrl(url: string): boolean {
	return (
		spawnSync("xdg-open", [url], { stdio: "ignore", timeout: 5_000 }).status === 0
	);
}

// --- window: warp://launch with a launch config that runs `pi --fork` ---
function launchWindow(cwd: string, sessionFile: string): boolean {
	const name = `pi-wfork-${crypto.randomBytes(4).toString("hex")}`;
	const launchDir = path.join(
		process.env.XDG_DATA_HOME ?? path.join(os.homedir(), ".local/share"),
		"warp-terminal",
		"launch_configurations",
	);
	fs.mkdirSync(launchDir, { recursive: true });
	const file = path.join(launchDir, `${name}.yaml`);
	fs.writeFileSync(
		file,
		[
			"---",
			`name: ${name}`,
			"windows:",
			"  - tabs:",
			'      - title: "pi fork"',
			"        layout:",
			`          cwd: ${cwd}`,
			"          commands:",
			`            - exec: pi --fork ${sessionFile}`,
			"",
		].join("\n"),
		"utf8",
	);
	const ok = openUrl(`warp://launch/${encodeURIComponent(name)}`);
	setTimeout(() => {
		try {
			fs.rmSync(file, { force: true });
		} catch {}
	}, 3_000);
	return ok;
}

// --- split: native warp://action/split_pane deep link ---
function launchSplit(cwd: string, sessionFile: string, direction: Direction): boolean {
	const scheme = process.env.PI_WFORK_SCHEME ?? "warp";
	const cmd = `cd ${shellQuote(cwd)} && pi --fork ${shellQuote(sessionFile)}`;
	return openUrl(
		`${scheme}://action/split_pane?direction=${dirName[direction]}&command=${encodeURIComponent(cmd)}`,
	);
}

// --- pane: xdotool split-pane keyboard simulation (best-effort, X11) ---
function launchPane(cwd: string, sessionFile: string, direction: Direction): boolean {
	if (!inWarp() || !hasXdotool()) return false;
	const forkScript = writeTempFile(
		"warp-fork",
		["#!/usr/bin/env bash", "set -euo pipefail", forkCommandLine(cwd, sessionFile), ""].join("\n"),
	);
	fs.chmodSync(forkScript, 0o700);
	const commandFile = writeTempFile("warp-command", `exec ${shellQuote(forkScript)}`);
	const splitKeys = getSplitKeys(direction);
	const splitDelay = process.env.PI_WFORK_SPLIT_DELAY ?? "0.5";
	const submitDelay = process.env.PI_WFORK_SUBMIT_DELAY ?? "0.2";
	const settleDelay = process.env.PI_WFORK_SETTLE_DELAY ?? "0.8";
	const script = [
		`window="$(xdotool getactivewindow 2>/dev/null || true)"`,
		`if [ -n "$window" ]; then xdotool key --window "$window" --clearmodifiers ${shellQuote(splitKeys)}; else xdotool key --clearmodifiers ${shellQuote(splitKeys)}; fi`,
		`sleep ${shellQuote(splitDelay)}`,
		`xdotool type --delay 0 --file ${shellQuote(commandFile)}`,
		`sleep ${shellQuote(submitDelay)}`,
		"xdotool key --clearmodifiers Return",
		`sleep ${shellQuote(settleDelay)}`,
	].join("\n");
	try {
		return (
			spawnSync("bash", ["-lc", script], { stdio: "ignore", timeout: 12_000 })
				.status === 0
		);
	} finally {
		fs.rmSync(commandFile, { force: true });
	}
}

function resolveMode(): "window" | "pane" | "split" {
	const mode = (process.env.PI_WFORK_MODE ?? "auto").toLowerCase();
	if (mode === "window" || mode === "pane" || mode === "split") return mode;
	return inWarp() && hasXdotool() ? "pane" : "window";
}

export default function wforkExtension(pi: ExtensionAPI) {
	pi.registerCommand("warpfork", {
		description:
			"Fork this session into Warp (pane in Warp by default; PI_WFORK_MODE=window to force a window): /warpfork [l|r|u|d]",
		getArgumentCompletions: (prefix: string) => {
			const normalized = prefix.trim().toLowerCase();
			return directions
				.filter((direction) => direction.startsWith(normalized))
				.map((direction) => ({ value: direction, label: direction }));
		},
		handler: async (args, ctx) => {
			const direction = parseDirection(args);
			if (!direction) {
				ctx.ui.notify("Usage: /warpfork [l|r|u|d]", "error");
				return;
			}
			const sessionFile = ctx.sessionManager.getSessionFile();
			if (!sessionFile) {
				ctx.ui.notify(
					"Current session has no session file yet; send a message first, then try /warpfork.",
					"warning",
				);
				return;
			}

			const mode = resolveMode();
			let ok = false;
			if (mode === "pane") ok = launchPane(ctx.cwd, sessionFile, direction);
			else if (mode === "split") ok = launchSplit(ctx.cwd, sessionFile, direction);
			else ok = launchWindow(ctx.cwd, sessionFile);

			if (ok) {
				ctx.ui.notify(`Forked session into a Warp ${mode}`, "info");
				return;
			}
			ctx.ui.notify(
				`Could not open Warp (${mode} mode). Try /warpfork with PI_WFORK_MODE=window, or run: ${forkCommandLine(ctx.cwd, sessionFile)}`,
				"warning",
			);
		},
	});
}
