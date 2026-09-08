import { expect, test } from "bun:test";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { PeerChannels } from "../omp/lib/peer-channels";
import type { PeerChannelRow } from "../omp/lib/peer-channel-ui";
import type { PeerMessage } from "../omp/lib/peers-transport";

// Storage, scheduling, restart recovery and machine permits are real. Only the
// model session boundary is replaced; these tests never contact peers or models.
interface Deferred<T> {
	promise: Promise<T>;
	resolve: (value: T) => void;
	reject: (reason: unknown) => void;
}

function deferred<T>(): Deferred<T> {
	let resolve!: (value: T) => void;
	let reject!: (reason: unknown) => void;
	const promise = new Promise<T>((yes, no) => { resolve = yes; reject = no; });
	return { promise, resolve, reject };
}

const changes = new Set<() => void>();
function changed() {
	for (const notify of changes) notify();
	changes.clear();
}

async function eventually(predicate: () => boolean, description: string): Promise<void> {
	// A deadline only bounds failures so fixture cleanup still runs. Progress is
	// event-driven; successful assertions never wait for the platform clock.
	const deadline = AbortSignal.timeout(6_000);
	while (!predicate()) {
		await new Promise<void>((resolve, reject) => {
			const notify = () => {
				deadline.removeEventListener("abort", expired);
				resolve();
			};
			const expired = () => {
				changes.delete(notify);
				reject(new Error(`Timed out waiting for ${description}`));
			};
			changes.add(notify);
			deadline.addEventListener("abort", expired, { once: true });
			if (deadline.aborted) expired();
		});
	}
}

function request(sender: string, body: string, transport = "a"): PeerMessage {
	return {
		from: `omp:${transport.repeat(32)}/${sender}`,
		to: `omp:${"f".repeat(32)}/Main`,
		senderSessionId: `session-${sender}`,
		body,
		replyTo: `correlation-${body}`,
		expectsReply: true,
		kind: "request",
	};
}

interface Call {
	directory: string;
	message: PeerMessage;
	history: string[];
	answer: Deferred<string>;
	closed: boolean;
}

async function isolated(run: (fixture: {
	root: string;
	calls: Call[];
	replies: Array<{ request: PeerMessage; answer: string }>;
	open: (receiver?: string) => Promise<{ channels: PeerChannels; rows: () => PeerChannelRow[] }>;
}) => Promise<void>) {
	const root = await mkdtemp(join(tmpdir(), "peer-channels-test-"));
	const managers: PeerChannels[] = [];
	const calls: Call[] = [];
	const replies: Array<{ request: PeerMessage; answer: string }> = [];
	try {
		await run({
			root, calls, replies,
			async open(receiver = "receiver") {
				let rows: PeerChannelRow[] = [];
				const channels = new PeerChannels({
					directory: join(root, receiver),
					permitDirectory: join(root, "permits"),
					report: next => { rows = next; changed(); },
					reply: async (message, answer) => { replies.push({ request: message, answer }); changed(); },
					worker: async (directory, _message, signal) => {
						const sessionFile = join(directory, "model-history.json");
						let history: string[];
						try { history = JSON.parse(await readFile(sessionFile, "utf8")); }
						catch (error) {
							if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
							history = [];
						}
						let call: Call | undefined;
						let abort: (() => void) | undefined;
						return {
							sessionFile,
							async run(message) {
								const answer = deferred<string>();
								call = { directory, message, history: [...history], answer, closed: false };
								abort = () => answer.reject(signal.reason);
								signal.addEventListener("abort", abort, { once: true });
								calls.push(call);
								changed();
								if (signal.aborted) abort();
								const text = await answer.promise;
								await writeFile(sessionFile, JSON.stringify([...history, message.body]));
								return text;
							},
							async close() {
								if (abort) signal.removeEventListener("abort", abort);
								if (call) call.closed = true;
								changed();
							},
						};
					},
				});
				managers.push(channels);
				await channels.start();
				return { channels, rows: () => rows };
			},
		});
	} finally {
		await Promise.all(managers.map(manager => manager.close()));
		await rm(root, { recursive: true, force: true });
	}
}

async function started(calls: Call[], body: string): Promise<Call> {
	await eventually(() => calls.some(call => call.message.body === body), `worker for ${body}`);
	return calls.find(call => call.message.body === body)!;
}

// A blocked first sender must not block another sender, nor permit its own next
// request to overtake it. Reverse completion also exercises reply correlation.
test("senders run isolated and concurrently while each sender retains FIFO and reply ownership", async () => {
	await isolated(async ({ open, calls, replies }) => {
		const { channels } = await open();
		const first = request("Alice", "alice-first");
		const next = request("Alice", "alice-next");
		const other = request("Bob", "bob-first");
		await channels.accept(first, "Alice");
		const a = await started(calls, first.body);
		await channels.accept(next, "Alice");
		await channels.accept(other, "Bob");
		const b = await started(calls, other.body);
		expect(a.closed).toBe(false);
		expect(b.directory).not.toBe(a.directory);
		expect(b.history).toEqual([]);
		expect(calls.map(call => call.message.body)).toEqual([first.body, other.body]);
		b.answer.resolve("bob-answer");
		await eventually(() => replies.length === 1, "Bob reply while Alice is blocked");
		expect(replies).toEqual([{ request: other, answer: "bob-answer" }]);
		a.answer.resolve("alice-answer");
		const a2 = await started(calls, next.body);
		expect(a.closed).toBe(true);
		expect(a2.history).toEqual([first.body]);
		a2.answer.resolve("alice-next-answer");
		await eventually(() => replies.length === 3, "all correlated replies");
		expect(replies).toEqual([
			{ request: other, answer: "bob-answer" },
			{ request: first, answer: "alice-answer" },
			{ request: next, answer: "alice-next-answer" },
		]);
	});
}, 15_000);

test("stable sender session resumes persisted history after receiver and transport restart", async () => {
	await isolated(async ({ open, calls, replies }) => {
		const before = await open();
		await before.channels.accept(request("Alice", "remember-this"), "Alice");
		const first = await started(calls, "remember-this");
		first.answer.resolve("remembered");
		await eventually(() => replies.length === 1 && first.closed, "persisted first session");
		await before.channels.close();
		const after = await open();
		const moved = request("Alice", "continue", "b");
		await after.channels.accept(moved, "Renamed Alice");
		const resumed = await started(calls, "continue");
		expect(resumed.directory).toBe(first.directory);
		expect(resumed.history).toEqual(["remember-this"]);
		resumed.answer.resolve("continued");
		await eventually(() => replies.length === 2, "reply to replacement transport");
		expect(replies[1]).toEqual({ request: moved, answer: "continued" });
	});
}, 15_000);

test("shutdown never repeats interrupted work but accepted FIFO backlog survives restart", async () => {
	await isolated(async ({ open, calls, replies }) => {
		const before = await open();
		await before.channels.accept(request("Alice", "interrupted"), "Alice");
		const interrupted = await started(calls, "interrupted");
		await before.channels.accept(request("Alice", "queued-one"), "Alice");
		await before.channels.accept(request("Alice", "queued-two"), "Alice");
		await before.channels.close();
		expect(interrupted.closed).toBe(true);
		expect(replies).toEqual([]);
		await open();
		const one = await started(calls, "queued-one");
		expect(calls.map(call => call.message.body)).toEqual(["interrupted", "queued-one"]);
		one.answer.resolve("one-done");
		const two = await started(calls, "queued-two");
		expect(one.closed).toBe(true);
		two.answer.resolve("two-done");
		await eventually(() => replies.length === 2 && two.closed, "recovered backlog replies");
		expect(calls.map(call => call.message.body)).toEqual(["interrupted", "queued-one", "queued-two"]);
		expect(replies.map(reply => reply.request.body)).toEqual(["queued-one", "queued-two"]);
	});
}, 15_000);

test("machine permits cap two receivers at four workers and preserve permit-waiting work on restart", async () => {
	await isolated(async ({ open, calls, replies }) => {
		const a = await open("receiver-a");
		const b = await open("receiver-b");
		for (let i = 0; i < 3; i++) {
			await a.channels.accept(request(`A${i}`, `a-${i}`), `A${i}`);
			await started(calls, `a-${i}`);
		}
		await b.channels.accept(request("B0", "b-0"), "B0");
		await started(calls, "b-0");
		await b.channels.accept(request("B1", "waiting-for-permit"), "B1");
		// This integration assertion crosses the real permit poll interval while
		// model gates stay shut. Fake time cannot advance kernel flock subprocesses:
		// keep this one real-clock exclusion window, not sleeps for worker progress.
		await Bun.sleep(1_250);
		expect(calls.map(call => call.message.body)).toEqual(["a-0", "a-1", "a-2", "b-0"]);
		await b.channels.close();
		expect(replies).toEqual([]);
		const restarted = await open("receiver-b");
		const waiting = await started(calls, "waiting-for-permit");
		expect(calls.filter(call => !call.closed)).toHaveLength(4);
		waiting.answer.resolve("recovered-with-permit");
		await eventually(() => replies.length === 1 && waiting.closed, "recovered permit-waiting request");
		expect(replies[0]).toEqual({ request: request("B1", "waiting-for-permit"), answer: "recovered-with-permit" });
		expect(calls.filter(call => call.message.body === "b-0")).toHaveLength(1);
		await restarted.channels.close();
	});
}, 15_000);

test("a failed model request is not retried by scheduler activity or receiver restart", async () => {
	await isolated(async ({ open, calls, replies }) => {
		const before = await open();
		await before.channels.accept(request("Alice", "fails-once"), "Alice");
		const failure = await started(calls, "fails-once");
		failure.answer.reject(new Error("model unavailable"));
		await eventually(() => failure.closed && before.rows().some(row => row.state === "error"), "failed channel termination");
		// Successful unrelated traffic provides a scheduler-progress witness without
		// depending on a sleep to establish that the failed request did not spin.
		await before.channels.accept(request("Bob", "healthy"), "Bob");
		const healthy = await started(calls, "healthy");
		healthy.answer.resolve("healthy-answer");
		await eventually(() => replies.length === 1 && healthy.closed, "healthy request completion");
		await before.channels.close();
		const after = await open();
		await after.channels.accept(request("Alice", "explicit-new-request"), "Alice");
		const fresh = await started(calls, "explicit-new-request");
		fresh.answer.resolve("fresh-answer");
		await eventually(() => replies.length === 2 && fresh.closed, "explicit recovery completion");
		expect(calls.map(call => call.message.body)).toEqual(["fails-once", "healthy", "explicit-new-request"]);
		expect(replies.map(reply => reply.request.body)).toEqual(["healthy", "explicit-new-request"]);
	});
}, 15_000);
