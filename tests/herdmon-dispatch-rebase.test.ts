import { test, expect } from "bun:test";
import { Database } from "bun:sqlite";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";
import { DispatchRuntime, type RequestRecord } from "../omp/plugins/herdmon-dispatch/runtime";

async function command(cwd: string, args: string[], env?: Record<string, string>) {
	const child = Bun.spawn(["git", ...args], { cwd, stdout: "pipe", stderr: "pipe", env: { ...process.env, ...env } });
	const output = `${await new Response(child.stdout).text()}${await new Response(child.stderr).text()}`.trim();
	const code = await child.exited;
	if (code) throw new Error(`git ${args.join(" ")}: ${output}`);
	return output;
}

async function fixture(conflict = false) {
	const root = mkdtempSync(join(tmpdir(), "herdmon-rebase-"));
	const repo = join(root, "repo"), worktree = join(root, "worker"), state = join(root, "state");
	await command(root, ["init", "-b", "main", repo]);
	await command(repo, ["config", "user.email", "test@example.invalid"]);
	await command(repo, ["config", "user.name", "Test"]);
	writeFileSync(join(repo, "file"), "base\n");
	await command(repo, ["add", "."]); await command(repo, ["commit", "-m", "base"]);
	const base = await command(repo, ["rev-parse", "HEAD"]);
	const workerId = "herdmon-000000000001", branch = "herdmon/r-000000000001";
	await command(repo, ["worktree", "add", "-b", branch, worktree, base]);
	writeFileSync(join(worktree, "file"), conflict ? "worker\n" : "worker\nbase\n");
	await command(worktree, ["add", "."]); await command(worktree, ["commit", "-m", "worker"]);
	const commits = [(await command(worktree, ["rev-parse", "HEAD"]))];
	if (conflict) writeFileSync(join(repo, "file"), "target\n");
	else writeFileSync(join(repo, "target"), "target\n");
	await command(repo, ["add", "."]); await command(repo, ["commit", "-m", "target"]);
	const row: RequestRecord = { id: "r", request: "r", acceptance: "a", repo, targetBranch: "main", status: "integrating", workerId, worktree, dependencies: [], commits, verification: ["old verification"], blockers: [], updatedAt: 0, base, sessionFile: null, review: "old review", integratedHead: null, verifiedHead: base, report: null, notificationPending: false };
	mkdirSync(state);
	const db = new Database(join(state, "dispatch.sqlite"), { create: true });
	db.exec("CREATE TABLE requests (id TEXT PRIMARY KEY, record TEXT NOT NULL); CREATE TABLE owner (id INTEGER PRIMARY KEY CHECK(id=1), pid INTEGER NOT NULL, identity TEXT NOT NULL)");
	db.query("INSERT INTO requests VALUES (?, ?)").run(row.id, JSON.stringify(row)); db.close();
	const api = { sendMessage() {} };
	// The runtime only needs sendMessage in these persistence-only fixtures.
	const runtime = new DispatchRuntime(state, { coordinatorSessionId: "coordinator" }, api as unknown as ExtensionAPI);
	return { root, repo, worktree, runtime, row, branch, async close() { await runtime.close(); rmSync(root, { recursive: true, force: true }); } };
}

test("rebase replaces authoritative identities, retains immutable handoff audit, and requires fresh review", async () => {
	const f = await fixture();
	try {
		const rebased = await f.runtime.rebase("r", "review before rebase");
		expect(rebased.status).toBe("ready");
		expect(rebased.review).toBeNull(); expect(rebased.verifiedHead).toBeNull();
		expect(rebased.rebase!.originalCommits).toEqual(f.row.commits);
		expect(rebased.commits).not.toEqual(f.row.commits);
		await expect(command(f.repo, ["merge-base", "--is-ancestor", f.row.commits[0], "main"])).rejects.toThrow();
		await expect(f.runtime.complete("r", "stale")).rejects.toThrow("integrating");
		await command(f.repo, ["merge", "--ff-only", f.branch]);
		await f.runtime.review("r", "fresh review"); await f.runtime.verify("r", ["true"]);
		expect((await f.runtime.complete("r", "accepted")).status).toBe("completed");
	} finally { await f.close(); }
});

test("rebase rejects an arbitrary worker branch and old records remain readable", async () => {
	const f = await fixture();
	try {
		await command(f.worktree, ["checkout", "-b", "hostile"]);
		await expect(f.runtime.rebase("r", "review")).rejects.toThrow("different worker branch");
		expect(f.runtime.records()[0].rebase).toBeUndefined();
	} finally { await f.close(); }
});

test("conflicted rebase is durably blocked and explicit recovery records its origin", async () => {
	const f = await fixture(true);
	try {
		expect((await f.runtime.rebase("r", "review")).status).toBe("blocked");
		writeFileSync(join(f.worktree, "file"), "resolved\n");
		await command(f.worktree, ["add", "file"]); await command(f.worktree, ["rebase", "--continue"], { GIT_EDITOR: "true" });
		const recovered = await f.runtime.recover("r", "resolved conflict reviewed");
		expect(recovered.status).toBe("ready"); expect(recovered.rebase!.attempts[0].recoveryNote).toBe("resolved conflict reviewed");
	} finally { await f.close(); }
});

test("already-applied rebase retains recorded commits and accepts a second no-op rebase", async () => {
	const f = await fixture();
	try {
		await command(f.repo, ["merge", "--no-ff", f.branch, "-m", "integrated worker"]);
		const first = await f.runtime.rebase("r", "already applied review");
		expect(first.commits).toEqual(f.row.commits);
		expect(first.rebase!.attempts[0].rebasedCommits).toEqual([]);
		const second = await f.runtime.rebase("r", "second no-op review");
		expect(second.commits).toEqual(f.row.commits);
		expect(second.rebase!.attempts).toHaveLength(2);
	} finally { await f.close(); }
});

test("rebase recovery rejects a same-count arbitrary replacement after conflict", async () => {
	const f = await fixture(true);
	try {
		await f.runtime.rebase("r", "review");
		await command(f.worktree, ["rebase", "--abort"]);
		await command(f.worktree, ["reset", "--hard", f.runtime.records()[0].rebase!.attempts[0].targetHead]);
		writeFileSync(join(f.worktree, "file"), "unrelated replacement\n");
		await command(f.worktree, ["add", "file"]); await command(f.worktree, ["commit", "-m", "replacement"]);
		await expect(f.runtime.recover("r", "do not accept")).rejects.toThrow();
		expect(f.runtime.records()[0].rebase!.attempts[0].pending).toBe(true);
	} finally { await f.close(); }
});

test("conflict recovery tolerates an advanced target but records the original rebase target", async () => {
	const f = await fixture(true);
	try {
		const blocked = await f.runtime.rebase("r", "review");
		const recordedTarget = blocked.rebase!.attempts[0].targetHead;
		writeFileSync(join(f.repo, "later"), "later target\n");
		await command(f.repo, ["add", "later"]); await command(f.repo, ["commit", "-m", "advance target"]);
		writeFileSync(join(f.worktree, "file"), "resolved\n");
		await command(f.worktree, ["add", "file"]); await command(f.worktree, ["rebase", "--continue"], { GIT_EDITOR: "true" });
		const recovered = await f.runtime.recover("r", "target advance inspected");
		expect(recovered.status).toBe("ready");
		expect(recovered.base).toBe(recordedTarget);
		expect(recovered.base).not.toBe(await command(f.repo, ["rev-parse", "main"]));
	} finally { await f.close(); }
});

test("a worker mutation after no-op rebase cannot be adopted by another rebase", async () => {
	const f = await fixture();
	try {
		await command(f.repo, ["merge", "--no-ff", f.branch, "-m", "integrated worker"]);
		await f.runtime.rebase("r", "already applied review");
		writeFileSync(join(f.worktree, "mutation"), "unreviewed\n");
		await command(f.worktree, ["add", "mutation"]); await command(f.worktree, ["commit", "-m", "mutation"]);
		await expect(f.runtime.rebase("r", "do not adopt")).rejects.toThrow();
		expect(f.runtime.records()[0].rebase!.attempts).toHaveLength(1);
	} finally { await f.close(); }
});

test("pending intent survives coordinator restart, invalidates stale verification, and permits only exact abort recovery", async () => {
	const f = await fixture(true);
	try {
		const blocked = await f.runtime.rebase("r", "review");
		expect(blocked.rebase!.attempts[0].pending).toBe(true);
		expect(blocked.review).toBeNull(); expect(blocked.verifiedHead).toBeNull();
		await f.runtime.close();
		const api = { sendMessage() {} };
		const resumed = new DispatchRuntime(join(f.root, "state"), { coordinatorSessionId: "coordinator" }, api as unknown as ExtensionAPI);
		try {
			expect(resumed.records()[0].rebase!.attempts[0].pending).toBe(true);
			await expect(resumed.rebase("r", "again")).rejects.toThrow();
			await command(f.worktree, ["rebase", "--abort"]);
			const recovered = await resumed.recover("r", "abort inspected");
			expect(recovered.status).toBe("ready");
			expect(recovered.review).toBeNull(); expect(recovered.verifiedHead).toBeNull();
			await expect(resumed.complete("r", "stale acceptance")).rejects.toThrow();
		} finally { await resumed.close(); }
	} finally { rmSync(f.root, { recursive: true, force: true }); }
});
