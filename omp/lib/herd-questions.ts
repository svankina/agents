import * as fs from "node:fs";
import * as path from "node:path";
import type { Server } from "bun";
import type {
	AgentToolResult,
	ExtensionContext,
} from "@oh-my-pi/pi-coding-agent";
import type {
	AskToolDetails,
	AskToolInput,
	QuestionResult,
} from "@oh-my-pi/pi-coding-agent/tools/ask";

export type Questions = AskToolInput["questions"];

interface PendingQuestion {
	requestId: string;
	toolCallId: string;
	questions: Questions;
	accept(answers: QuestionResult[]): void;
}

function record(value: unknown): value is Record<string, unknown> {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}

/** Validate the complete batch before accepting any answer. Indices preserve duplicate labels. */
export function parseAnswers(
	value: unknown,
	questions: Questions,
): QuestionResult[] | undefined {
	if (!Array.isArray(value) || value.length !== questions.length)
		return undefined;
	const byId = new Map<string, Record<string, unknown>>();
	for (const answer of value) {
		if (!record(answer) || typeof answer.id !== "string" || byId.has(answer.id))
			return undefined;
		if (
			Object.keys(answer).some(
				(key) => !["id", "selected", "customInput"].includes(key),
			)
		)
			return undefined;
		byId.set(answer.id, answer);
	}
	const results: QuestionResult[] = [];
	for (const q of questions) {
		const answer = byId.get(q.id);
		if (!answer || !Array.isArray(answer.selected)) return undefined;
		const indices: number[] = [];
		for (const index of answer.selected) {
			if (
				typeof index !== "number" ||
				!Number.isInteger(index) ||
				index < 0 ||
				index >= q.options.length ||
				indices.includes(index)
			)
				return undefined;
			indices.push(index);
		}
		const customInput = answer.customInput;
		if (
			customInput !== undefined &&
			(typeof customInput !== "string" || !customInput.trim())
		)
			return undefined;
		if (!indices.length && customInput === undefined) return undefined;
		if (
			!q.multi &&
			(indices.length > 1 || (indices.length > 0 && customInput !== undefined))
		)
			return undefined;
		results.push({
			id: q.id,
			question: q.question,
			options: q.options.map((option) => option.label),
			multi: q.multi ?? false,
			selectedOptions: indices.map((index) => q.options[index]!.label),
			...(customInput !== undefined ? { customInput } : {}),
		});
	}
	return results;
}

/** Shared by extension instances in one OMP process; each instance owns its lifecycle. */
class QuestionBridge {
	#owners = new Set<symbol>();
	#pending = new Map<string, PendingQuestion>();
	#server?: Server<undefined>;
	#socket?: { path: string; dev: number; ino: number };
	#onExit = () => this.#close();

	connect(owner: symbol): void {
		this.#owners.add(owner);
		if (this.#server) return;
		const uid = process.getuid?.();
		if (uid === undefined)
			throw new Error("Unix question transport is unavailable");
		const runtime = process.env.XDG_RUNTIME_DIR;
		if (runtime) {
			const stat = fs.lstatSync(runtime);
			if (
				!path.isAbsolute(runtime) ||
				!stat.isDirectory() ||
				stat.uid !== uid ||
				(stat.mode & 0o022) !== 0
			)
				throw new Error("Unsafe XDG runtime directory");
		}
		const directory = runtime
			? path.join(runtime, "omp-questions")
			: `/tmp/omp-questions-${uid}`;
		try {
			fs.mkdirSync(directory, { mode: 0o700 });
		} catch (error) {
			if ((error as NodeJS.ErrnoException).code !== "EEXIST") throw error;
		}
		const stat = fs.lstatSync(directory);
		if (
			!stat.isDirectory() ||
			stat.uid !== uid ||
			(stat.mode & 0o777) !== 0o700
		)
			throw new Error("Unsafe question socket directory");
		const target = path.join(directory, `${process.pid}.sock`);
		// Never unlink a pre-existing endpoint: another loaded bridge may own it.
		const server = Bun.serve<undefined>({
			unix: target,
			maxRequestBodySize: 1024 * 1024,
			fetch: (request) => this.#handle(request),
		});
		this.#server = server;
		try {
			const socket = fs.lstatSync(target);
			this.#socket = { path: target, dev: socket.dev, ino: socket.ino };
			fs.chmodSync(target, 0o600);
			server.unref();
			process.once("exit", this.#onExit);
		} catch (error) {
			this.#close();
			throw error;
		}
	}

	disconnect(owner: symbol): void {
		this.#owners.delete(owner);
		if (this.#owners.size === 0) this.#close();
	}

	register(
		toolCallId: string,
		questions: Questions,
		accept: PendingQuestion["accept"],
	): () => void {
		if (
			!this.#server ||
			new Set(questions.map((q) => q.id)).size !== questions.length
		)
			return () => {};
		const requestId = crypto.randomUUID();
		this.#pending.set(requestId, { requestId, toolCallId, questions, accept });
		return () => {
			this.#pending.delete(requestId);
		};
	}

	#close(): void {
		this.#pending.clear();
		this.#server?.stop(true);
		this.#server = undefined;
		process.removeListener("exit", this.#onExit);
		const socket = this.#socket;
		this.#socket = undefined;
		if (!socket) return;
		try {
			const stat = fs.lstatSync(socket.path);
			if (stat.isSocket() && stat.dev === socket.dev && stat.ino === socket.ino)
				fs.unlinkSync(socket.path);
		} catch {
			/* The server may already have removed its socket. */
		}
	}

	async #handle(request: Request): Promise<Response> {
		const pathname = new URL(request.url).pathname;
		const json = (body: unknown, status = 200) =>
			Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
		if (request.method === "GET" && pathname === "/questions") {
			return json({
				version: 1,
				pid: process.pid,
				questions: [...this.#pending.values()].map(
					({ requestId, toolCallId, questions }) => ({
						requestId,
						toolCallId,
						questions,
					}),
				),
			});
		}
		if (request.method !== "POST" || pathname !== "/answers")
			return json({ error: "Not found" }, 404);
		let body: unknown;
		try {
			body = await request.json();
		} catch {
			return json({ error: "Invalid JSON" }, 400);
		}
		if (
			!record(body) ||
			typeof body.requestId !== "string" ||
			typeof body.toolCallId !== "string" ||
			Object.keys(body).some(
				(key) => !["requestId", "toolCallId", "answers"].includes(key),
			)
		)
			return json({ error: "Invalid answer request" }, 400);
		const entry = this.#pending.get(body.requestId);
		if (!entry || entry.toolCallId !== body.toolCallId)
			return json({ error: "Question is no longer pending" }, 409);
		const answers = parseAnswers(body.answers, entry.questions);
		if (!answers) return json({ error: "Invalid question answers" }, 400);
		// Identity check, removal and acceptance are synchronous: only one writer wins.
		this.#pending.delete(entry.requestId);
		entry.accept(answers);
		return json({ ok: true });
	}
}

export const questionBridge = new QuestionBridge();

/** Keep both selected labels and free text in model-visible output, including mixed multi answers. */
export function formatAnswers(
	results: QuestionResult[],
): AgentToolResult<AskToolDetails> {
	if (results.length !== 1) {
		const lines = results.map((result) => {
			const suffix = result.timedOut ? " (auto-selected after timeout)" : "";
			const custom =
				result.customInput !== undefined ? `; "${result.customInput}"` : "";
			if (result.selectedOptions.length)
				return `${result.id}: ${result.multi ? `[${result.selectedOptions.join(", ")}]` : result.selectedOptions[0]}${suffix}${custom}`;
			return result.customInput !== undefined
				? `${result.id}: "${result.customInput}"`
				: `${result.id}: (cancelled)`;
		});
		return {
			content: [{ type: "text", text: `User answers:\n${lines.join("\n")}` }],
			details: { results },
		};
	}
	const { id: _id, ...details } = results[0]!;
	const parts: string[] = [];
	if (details.selectedOptions.length) {
		const text = `User selected: ${details.multi ? details.selectedOptions.join(", ") : details.selectedOptions[0]}`;
		parts.push(
			details.timedOut ? `${text} (auto-selected after timeout)` : text,
		);
	}
	if (details.customInput !== undefined)
		parts.push(
			details.customInput.includes("\n")
				? `User provided custom input:\n${details.customInput
						.split("\n")
						.map((line) => `  ${line}`)
						.join("\n")}`
				: `User provided custom input: ${details.customInput}`,
		);
	return {
		content: [
			{
				type: "text",
				text: parts.length ? parts.join("\n") : "User cancelled the selection",
			},
		],
		details,
	};
}

interface LocalAnswer {
	selected: Set<number>;
	customInput?: string;
	timedOut?: boolean;
}

/** Public selector/editor only: no terminal input injection or private UI state. */
export async function askLocally(
	ctx: ExtensionContext,
	questions: Questions,
	signal: AbortSignal,
	timeoutSeconds: number,
): Promise<QuestionResult[]> {
	const answers: LocalAnswer[] = questions.map(() => ({ selected: new Set() }));
	let index = 0;
	while (index < questions.length) {
		signal.throwIfAborted();
		const q = questions[index]!;
		const answer = answers[index]!;
		const title = `${questions.length > 1 ? `[${index + 1}/${questions.length}] ` : ""}${q.question}`;
		const deadline =
			timeoutSeconds > 0 ? Date.now() + timeoutSeconds * 1000 : undefined;
		let cursor =
			q.recommended !== undefined &&
			Number.isInteger(q.recommended) &&
			q.recommended >= 0 &&
			q.recommended < q.options.length
				? q.recommended
				: 0;
		let move: "back" | "next" | undefined;
		while (!move) {
			signal.throwIfAborted();
			// Numbered display labels make duplicate labels and action-looking labels unambiguous.
			const options = q.options.map((option, optionIndex) => ({
				label: `${optionIndex + 1}. ${option.label}${optionIndex === q.recommended ? " (Recommended)" : ""}`,
				...(option.description ? { description: option.description } : {}),
			}));
			const otherIndex = options.length;
			options.push({
				label:
					answer.customInput === undefined
						? "Other (type your own)"
						: "Edit custom answer",
			});
			const doneIndex =
				answer.selected.size || answer.customInput !== undefined
					? options.length
					: -1;
			if (doneIndex >= 0)
				options.push({
					label:
						questions.length > 1 ? "Next question / submit" : "Done selecting",
				});
			const backIndex = index > 0 ? options.length : -1;
			if (backIndex >= 0) options.push({ label: "Previous question" });
			let timedOut = false;
			const remaining =
				deadline === undefined ? undefined : Math.max(1, deadline - Date.now());
			const selected = await ctx.ui.select(title, options, {
				signal,
				timeout: remaining,
				onTimeout: () => {
					timedOut = true;
				},
				initialIndex: cursor,
				outline: true,
				selectionMarker: q.multi ? "checkbox" : "radio",
				checkedIndices: [...answer.selected],
				markableCount: q.options.length,
				helpText: q.multi
					? "Enter toggles an option; Other adds text; Done submits; Esc cancels"
					: "Enter selects; Other opens the editor; Esc cancels",
			});
			signal.throwIfAborted();
			if (selected === undefined) {
				if (!timedOut && (deadline === undefined || Date.now() < deadline))
					throw new DOMException("Ask input was cancelled", "AbortError");
				const auto =
					q.recommended !== undefined &&
					Number.isInteger(q.recommended) &&
					q.recommended >= 0 &&
					q.recommended < q.options.length
						? q.recommended
						: 0;
				if (
					!answer.selected.size &&
					answer.customInput === undefined &&
					q.options.length
				)
					answer.selected.add(auto);
				answer.timedOut = true;
				move = "next";
				continue;
			}
			cursor = options.findIndex((option) => option.label === selected);
			if (cursor === backIndex && backIndex >= 0) {
				move = "back";
				continue;
			}
			if (cursor === doneIndex && doneIndex >= 0) {
				move = "next";
				continue;
			}
			if (cursor === otherIndex) {
				const text = await ctx.ui.editor(
					`${title}\nCustom answer${q.multi ? " (added to checked options)" : ""}`,
					answer.customInput,
					{ signal },
					{ promptStyle: true },
				);
				signal.throwIfAborted();
				if (text === undefined) continue;
				if (!text.trim()) {
					delete answer.customInput;
					continue;
				}
				answer.customInput = text;
				delete answer.timedOut;
				if (!q.multi) {
					answer.selected.clear();
					move = "next";
				}
				continue;
			}
			if (cursor < 0 || cursor >= q.options.length)
				throw new Error("Unrecognized ask selection");
			delete answer.timedOut;
			if (q.multi) {
				if (answer.selected.has(cursor)) answer.selected.delete(cursor);
				else answer.selected.add(cursor);
			} else {
				answer.selected.clear();
				answer.selected.add(cursor);
				delete answer.customInput;
				move = "next";
			}
		}
		index += move === "back" ? -1 : 1;
	}
	return questions.map((q, i) => ({
		id: q.id,
		question: q.question,
		options: q.options.map((option) => option.label),
		multi: q.multi ?? false,
		selectedOptions: [...answers[i]!.selected].map(
			(optionIndex) => q.options[optionIndex]!.label,
		),
		...(answers[i]!.customInput !== undefined
			? { customInput: answers[i]!.customInput }
			: {}),
		...(answers[i]!.timedOut ? { timedOut: true } : {}),
	}));
}
