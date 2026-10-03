/**
 * Checkout lock: one agent process edits a Git checkout at a time.
 *
 * The first edit/write/ast_edit into a checkout claims `<git-dir>/agent-checkout.lock`
 * for this OMP process. Edits from another live OMP process are blocked until the
 * holder's edited files are committed or reverted, or the holder exits. The lock is
 * per checkout, so a linked worktree (`agent-worktree new`) has its own lock.
 */
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";

export const description =
	"Gives each Git checkout to one agent while it has uncommitted edits there.";

export const LOCK_NAME = "agent-checkout.lock";
const GUARD_WAIT_MS = 5_000;
const GUARD_STALE_MS = 10_000;

interface Checkout {
	top: string;
	lockPath: string;
}

export interface Holder {
	pid: number;
	start: string;
	session: string;
	since: string;
	branch: string;
}

interface Held {
	checkout: Checkout;
	edited: Set<string>;
}

// Shared by every session in this OMP process, including in-process subagents,
// which act for the same agent and must not block one another.
const held = new Map<string, Held>();

function git(cwd: string, args: string[]): string | undefined {
	const result = Bun.spawnSync(["git", "-C", cwd, ...args], {
		stdout: "pipe",
		stderr: "ignore",
	});
	return result.exitCode === 0 ? result.stdout.toString() : undefined;
}

function findCheckout(file: string): Checkout | undefined {
	let dir = file;
	while (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
		const parent = path.dirname(dir);
		if (parent === dir) return undefined;
		dir = parent;
	}
	const out = git(dir, ["rev-parse", "--show-toplevel", "--absolute-git-dir"]);
	const [top, gitDir] = out?.trimEnd().split("\n") ?? [];
	if (!top || !gitDir) return undefined;
	return { top, lockPath: path.join(gitDir, LOCK_NAME) };
}

/** Process start time in clock ticks; with the PID it identifies one process. */
export function processStart(pid: number): string | undefined {
	try {
		const stat = fs.readFileSync(`/proc/${pid}/stat`, "utf8");
		return stat.slice(stat.lastIndexOf(")") + 2).split(" ")[19];
	} catch {
		return undefined;
	}
}

export function readHolder(lockPath: string): Holder | undefined {
	let text: string;
	try {
		text = fs.readFileSync(lockPath, "utf8");
	} catch {
		return undefined;
	}
	const fields = new Map(
		text
			.split("\n")
			.filter((line) => line.includes("="))
			.map((line) => [line.slice(0, line.indexOf("=")), line.slice(line.indexOf("=") + 1)]),
	);
	const pid = Number(fields.get("pid"));
	if (!Number.isInteger(pid) || pid <= 0) return undefined;
	return {
		pid,
		start: fields.get("start") ?? "",
		session: fields.get("session") ?? "",
		since: fields.get("since") ?? "",
		branch: fields.get("branch") ?? "",
	};
}

/** Serializes lock-file decisions between processes for a few milliseconds. */
function withGuard<T>(lockPath: string, fn: () => T): T {
	const guard = `${lockPath}.guard`;
	const deadline = Date.now() + GUARD_WAIT_MS;
	for (;;) {
		try {
			fs.mkdirSync(guard);
			break;
		} catch (error) {
			if ((error as NodeJS.ErrnoException).code !== "EEXIST") throw error;
		}
		try {
			if (Date.now() - fs.statSync(guard).mtimeMs > GUARD_STALE_MS) fs.rmdirSync(guard);
		} catch {}
		if (Date.now() > deadline) throw new Error(`checkout lock guard ${guard} stayed busy`);
		Bun.sleepSync(10);
	}
	try {
		return fn();
	} finally {
		fs.rmdirSync(guard);
	}
}

function claim(checkout: Checkout, session: string): Held | Holder {
	const mine = held.get(checkout.lockPath);
	if (mine) return mine;
	return withGuard(checkout.lockPath, () => {
		const holder = readHolder(checkout.lockPath);
		if (holder && holder.pid !== process.pid && processStart(holder.pid) === holder.start)
			return holder;
		const branch = git(checkout.top, ["rev-parse", "--abbrev-ref", "HEAD"])?.trim() ?? "";
		const body = [
			`pid=${process.pid}`,
			`start=${processStart(process.pid) ?? ""}`,
			`session=${session}`,
			`since=${new Date().toISOString()}`,
			`branch=${branch}`,
			`checkout=${checkout.top}`,
			"",
		].join("\n");
		const temporary = `${checkout.lockPath}.${process.pid}.tmp`;
		fs.writeFileSync(temporary, body);
		fs.renameSync(temporary, checkout.lockPath);
		const entry = { checkout, edited: new Set<string>() };
		held.set(checkout.lockPath, entry);
		return entry;
	});
}

function dirtyPaths(top: string): Set<string> {
	const out = git(top, ["status", "--porcelain=v1", "-z", "--untracked-files=all"]) ?? "";
	const entries = out.split("\0");
	const dirty = new Set<string>();
	for (let i = 0; i < entries.length; i++) {
		const entry = entries[i];
		if (!entry) continue;
		dirty.add(path.join(top, entry.slice(3)));
		if (entry[0] === "R" || entry[0] === "C") i++;
	}
	return dirty;
}

/** Releases every checkout whose files edited by this process are all clean. */
export function releaseFinished(): void {
	for (const [lockPath, entry] of held) {
		if (!fs.existsSync(path.dirname(lockPath))) {
			held.delete(lockPath);
			continue;
		}
		const dirty = dirtyPaths(entry.checkout.top);
		if ([...entry.edited].some((file) => dirty.has(file))) continue;
		withGuard(lockPath, () => {
			if (readHolder(lockPath)?.pid === process.pid) fs.rmSync(lockPath, { force: true });
		});
		held.delete(lockPath);
	}
}

const strings = (value: unknown): string[] =>
	(Array.isArray(value) ? value : [value]).filter(
		(item): item is string => typeof item === "string" && item.length > 0,
	);

/** Local filesystem paths a mutating tool call targets. Globs resolve to their base directory. */
function targets(toolName: string, input: Record<string, unknown>, cwd: string): string[] {
	let raw: string[];
	if (toolName === "edit") raw = strings(input.paths ?? input.path);
	else if (toolName === "write") raw = strings(input.path);
	else if (toolName === "ast_edit")
		raw = strings(input.paths).map((p) => {
			const parts = p.split("/");
			const glob = parts.findIndex((part) => /[*?[{]/.test(part));
			return glob === -1 ? p : parts.slice(0, glob).join("/") || ".";
		});
	else return [];
	return raw
		.filter((p) => !/^[a-z][a-z0-9+.-]*:\/\//i.test(p))
		.map((p) =>
			path.resolve(cwd, p === "~" || p.startsWith("~/") ? path.join(os.homedir(), p.slice(1)) : p),
		);
}

function blockedReason(checkout: Checkout, holder: Holder): string {
	return [
		`Checkout ${checkout.top} is in use by another agent: OMP session ${holder.session || "unknown"}`,
		`(pid ${holder.pid}, branch ${holder.branch || "unknown"}) has uncommitted edits there since ${holder.since}.`,
		"Do not edit this checkout. Create a worktree with",
		`\`agent-worktree new <name> --repo ${checkout.top}\` and edit, verify, and commit there.`,
		`The lock clears when that agent commits or exits; only the user removes ${checkout.lockPath} by hand.`,
	].join(" ");
}

export default function checkoutLock(pi: ExtensionAPI) {
	pi.setLabel("Checkout Lock");

	pi.on("tool_call", (event, ctx) => {
		for (const file of targets(event.toolName, event.input, ctx.cwd)) {
			const checkout = findCheckout(file);
			if (!checkout) continue;
			const result = claim(checkout, ctx.sessionManager.getSessionId());
			if (!("edited" in result)) return { block: true, reason: blockedReason(checkout, result) };
			if (event.toolName !== "ast_edit") result.edited.add(file);
		}
	});

	pi.on("tool_result", (event, ctx) => {
		if (event.toolName === "ast_edit") {
			const details = event.details as
				| { fileReplacements?: Array<{ path: string; count: number }> }
				| undefined;
			for (const { path: file, count } of details?.fileReplacements ?? []) {
				if (count <= 0) continue;
				const absolute = path.resolve(ctx.cwd, file);
				const checkout = findCheckout(absolute);
				if (checkout) held.get(checkout.lockPath)?.edited.add(absolute);
			}
		}
		if (event.toolName === "bash" && held.size) releaseFinished();
	});

	pi.on("agent_end", (event) => {
		if (!event.willContinue && held.size) releaseFinished();
	});
}
