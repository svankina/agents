import { afterEach, expect, test } from "bun:test";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import checkoutLock, {
	LOCK_NAME,
	processStart,
	readHolder,
} from "../omp/extensions/checkout-lock";

type Handler = (event: Record<string, unknown>, ctx: unknown) => unknown;
const handlers: Record<string, Handler> = {};
checkoutLock({
	setLabel() {},
	on(name: string, handler: Handler) {
		handlers[name] = handler;
	},
} as never);

const cleanups: Array<() => void> = [];
afterEach(() => {
	for (const cleanup of cleanups.splice(0)) cleanup();
});

function git(cwd: string, ...args: string[]) {
	const result = Bun.spawnSync(["git", "-C", cwd, ...args], { stderr: "pipe" });
	if (result.exitCode !== 0) throw new Error(result.stderr.toString());
	return result.stdout.toString().trim();
}

function repo(): string {
	const dir = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), "checkout-lock-")));
	cleanups.push(() => fs.rmSync(dir, { recursive: true, force: true }));
	git(dir, "init", "-q", "-b", "master");
	git(dir, "config", "user.email", "t@example.com");
	git(dir, "config", "user.name", "t");
	fs.writeFileSync(path.join(dir, "a.txt"), "a\n");
	fs.writeFileSync(path.join(dir, "b.txt"), "b\n");
	git(dir, "add", ".");
	git(dir, "commit", "-q", "-m", "init");
	return dir;
}

const lockPath = (checkout: string) =>
	path.join(git(checkout, "rev-parse", "--absolute-git-dir"), LOCK_NAME);

function otherAgentHolds(checkout: string) {
	const child = Bun.spawn(["sleep", "60"]);
	cleanups.push(() => child.kill());
	fs.writeFileSync(
		lockPath(checkout),
		`pid=${child.pid}\nstart=${processStart(child.pid)}\nsession=other\nsince=then\nbranch=master\n`,
	);
	return child;
}

const ctx = (cwd: string) => ({ cwd, sessionManager: { getSessionId: () => "mine" } });
const edit = (cwd: string, ...paths: string[]) =>
	handlers.tool_call({ toolName: "edit", input: { paths } }, ctx(cwd)) as
		| { block: boolean; reason: string }
		| undefined;
const bashDone = (cwd: string) => handlers.tool_result({ toolName: "bash" }, ctx(cwd));

test("another live agent's checkout blocks edits; a dead holder's lock is taken over", async () => {
	const dir = repo();
	const other = otherAgentHolds(dir);
	const blocked = edit(dir, "a.txt");
	expect(blocked?.block).toBe(true);
	expect(blocked?.reason).toContain(`agent-worktree new <name> --repo ${dir}`);
	expect(readHolder(lockPath(dir))?.pid).toBe(other.pid);

	other.kill();
	await other.exited;
	expect(edit(dir, "a.txt")).toBeUndefined();
	expect(readHolder(lockPath(dir))?.pid).toBe(process.pid);
});

test("the lock lasts until this agent's edits are committed, ignoring others' dirty files", () => {
	const dir = repo();
	fs.writeFileSync(path.join(dir, "b.txt"), "someone else's change\n");
	expect(edit(dir, "a.txt")).toBeUndefined();
	fs.writeFileSync(path.join(dir, "a.txt"), "mine\n");

	bashDone(dir);
	expect(readHolder(lockPath(dir))?.pid).toBe(process.pid);

	git(dir, "commit", "-q", "-m", "mine", "--", "a.txt");
	expect(git(dir, "status", "--porcelain")).toBe("M b.txt");
	bashDone(dir);
	expect(fs.existsSync(lockPath(dir))).toBe(false);
});

test("a linked worktree has its own lock", () => {
	const dir = repo();
	const worktree = path.join(dir, ".worktrees", "feature");
	git(dir, "worktree", "add", "-q", "-b", "feature", worktree);
	otherAgentHolds(dir);
	expect(edit(dir, path.join(worktree, "a.txt"))).toBeUndefined();
	expect(readHolder(lockPath(worktree))?.pid).toBe(process.pid);
	expect(edit(dir, "a.txt")?.block).toBe(true);
});
