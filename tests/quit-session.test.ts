import { afterEach, expect, test } from "bun:test";
import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";


// These are isolated OS-process integration tests: Bun fake timers cannot drive
// the detached watcher or kernel signal delivery. The short real waits let the
// original 200ms polling watcher fire, so the non-shell regression fails pre-fix.
const temporaryDirectories: string[] = [];
const extensionPath = path.resolve(import.meta.dir, "../omp/extensions/quit-session.ts");
const supported = process.platform === "linux" && Boolean(Bun.which("python3")) && Boolean(Bun.which("bash"));

afterEach(async () => {
	for (const directory of temporaryDirectories.splice(0)) await fs.rm(directory, { recursive: true, force: true });
});

async function createRunner(): Promise<{ directory: string; runner: string }> {
	const directory = await fs.mkdtemp(path.join(os.tmpdir(), "quit-session-test-"));
	temporaryDirectories.push(directory);
	const runner = path.join(directory, "runner.mjs");
	await Bun.write(runner, `
import quitSession from ${JSON.stringify(extensionPath)};
let execute;
quitSession({
    setLabel() {},
    zod: { z: { object(value) { return value; }, boolean() { return { optional() { return this; }, describe() { return this; } }; } } },
    registerTool(tool) { execute = tool.execute; }
});
await execute("quit-test", { kill_terminal: true }, undefined, undefined, { shutdown() {} });
`);
	return { directory, runner };
}

test.skipIf(!supported)("kill_terminal closes an owned parent shell after the child exits", async () => {
	const { directory, runner } = await createRunner();
	const marker = path.join(directory, "hup");
	const shell = Bun.spawn(["bash", "-c", `
trap 'printf hup > "$3"; exit 0' HUP
"$1" "$2"
sleep 1
`, "--", process.execPath, runner, marker], { stdout: "ignore", stderr: "pipe" });
	expect(await shell.exited).toBe(0);
	expect(await Bun.file(marker).text()).toBe("hup");
}, 10000);

test.skipIf(!supported)("kill_terminal never signals an owned non-shell supervisor", async () => {
	const { directory, runner } = await createRunner();
	const supervisorPath = path.join(directory, "supervisor.mjs");
	await Bun.write(supervisorPath, `
let hup = false;
process.on("SIGHUP", () => { hup = true; });
const child = Bun.spawn([process.execPath, process.argv[2]], { stdout: "ignore", stderr: "inherit" });
const code = await child.exited;
await Bun.sleep(350);
process.stdout.write(JSON.stringify({ hup, code }));
`);
	const supervisor = Bun.spawn([process.execPath, supervisorPath, runner], { stdout: "pipe", stderr: "pipe" });
	const result = await new Response(supervisor.stdout).json();
	expect(await supervisor.exited).toBe(0);
	expect(result).toEqual({ hup: false, code: 0 });
}, 10000);
