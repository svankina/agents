import { execFileSync, spawn } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, test } from "bun:test";
import safeQuit, {
	inspectRepository,
	SAFEQUIT_WRAP_UP_PROMPT,
	messageText,
	readLinuxProcessIdentity,
	spawnTerminalCloser,
} from "../extensions/safequit";

const temporaryDirectories: string[] = [];

function temporaryDirectory(): string {
	const directory = mkdtempSync(path.join(tmpdir(), "safequit-test-"));
	temporaryDirectories.push(directory);
	return directory;
}

function git(cwd: string, ...args: string[]): string {
	return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
}

function initializeRepository(): string {
	const repository = temporaryDirectory();
	git(repository, "init");
	git(repository, "config", "user.email", "safequit@example.test");
	git(repository, "config", "user.name", "Safe Quit Test");
	return repository;
}

function commitFile(repository: string, name: string, content: string): void {
	Bun.write(path.join(repository, name), content);
	git(repository, "add", name);
	git(repository, "commit", "-m", `Add ${name}`);
}

afterEach(() => {
	for (const directory of temporaryDirectories.splice(0)) {
		rmSync(directory, { force: true, recursive: true });
	}
});

describe("inspectRepository", () => {
	test("allows a directory outside Git", async () => {
		expect(await inspectRepository(temporaryDirectory())).toEqual({ ready: true, issues: [] });
	});

	test("requires every local change to be committed", async () => {
		const repository = initializeRepository();
		await Bun.write(path.join(repository, "draft.txt"), "not committed\n");

		const dirty = await inspectRepository(repository);
		expect(dirty.ready).toBe(false);
		expect(dirty.issues).toContain("The working tree still has uncommitted or untracked changes.");

		commitFile(repository, "draft.txt", "committed\n");
		expect((await inspectRepository(repository)).ready).toBe(true);
	});

	test("requires a configured remote branch to be pushed", async () => {
		const repository = initializeRepository();
		const remote = temporaryDirectory();
		git(remote, "init", "--bare");
		commitFile(repository, "first.txt", "first\n");
		git(repository, "remote", "add", "origin", remote);

		const noUpstream = await inspectRepository(repository);
		expect(noUpstream.ready).toBe(false);
		expect(noUpstream.issues.some(issue => issue.includes("has no upstream"))).toBe(true);

		git(repository, "push", "--set-upstream", "origin", "HEAD");
		expect((await inspectRepository(repository)).ready).toBe(true);

		commitFile(repository, "second.txt", "second\n");
		const ahead = await inspectRepository(repository);
		expect(ahead.ready).toBe(false);
		expect(ahead.issues.some(issue => issue.includes("1 commit(s) ahead"))).toBe(true);
	});
});

test("registers /sq as the short safequit command", () => {
	const commandNames: string[] = [];
	safeQuit({
		setLabel: () => {},
		registerCommand: (name: string) => commandNames.push(name),
		on: () => {},
	} as unknown as Parameters<typeof safeQuit>[0]);

	expect(commandNames).toEqual(["safequit", "sq"]);
});

test("wrap-up prompt requires cleanup of every process the agent launched", () => {
	expect(SAFEQUIT_WRAP_UP_PROMPT).toContain(
		"stop every process, service, watcher, GUI, and background job you launched",
	);
});

test("messageText reads only text content", () => {
	expect(
		messageText({
			content: [
				{ type: "thinking", text: "hidden" },
				{ type: "text", text: "done" },
				{ type: "image", data: "ignored" },
				{ type: "text", text: "<safequit-ready/>" },
			],
		}),
	).toBe("done\n<safequit-ready/>");
});

test(
	"terminal closer waits for OMP and then signals the same shell process",
	async () => {
		// This integration test exercises the watcher's real /proc polling and awaits
		// process exits directly; fake timers cannot drive the detached Bun process.
		const shell = spawn("bash", ["-c", "trap 'exit 0' HUP; read -r _"], {
			stdio: ["pipe", "ignore", "ignore"],
		});
		const omp = spawn("cat", [], { stdio: ["pipe", "ignore", "ignore"] });
		const parent = readLinuxProcessIdentity(shell.pid);
		expect(parent).toBeDefined();
		if (!parent) throw new Error("test shell disappeared before inspection");

		const { promise, resolve } = Promise.withResolvers<void>();
		shell.once("exit", () => resolve());

		try {
			spawnTerminalCloser(omp.pid, parent, 2_000);
			omp.stdin.end();
			await promise;
		} finally {
			shell.kill("SIGKILL");
			omp.kill("SIGKILL");
		}
	},
	5_000,
);
