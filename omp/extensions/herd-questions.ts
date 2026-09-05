import type {
	AgentToolResult,
	ExtensionAPI,
	ExtensionContext,
} from "@oh-my-pi/pi-coding-agent";
import type {
	AskToolDetails,
	QuestionResult,
} from "@oh-my-pi/pi-coding-agent/tools/ask";
import {
	askLocally,
	formatAnswers,
	questionBridge,
	type Questions,
} from "../lib/herd-questions";

/** Standalone public-extension override; the installed OMP binary stays unchanged. */
export default function herdQuestionsExtension(pi: ExtensionAPI) {
	pi.setLabel("Herd Questions");
	const owner = Symbol("herd-questions");
	const active = new Set<AbortController>();
	let connected = false;

	function stop(): void {
		for (const controller of active) controller.abort();
		questionBridge.disconnect(owner);
		connected = false;
	}

	function start(ctx: ExtensionContext): void {
		stop();
		if (!ctx.hasUI) return;
		try {
			questionBridge.connect(owner);
			connected = true;
		} catch (error) {
			questionBridge.disconnect(owner);
			ctx.ui.notify(
				`Herd question bridge unavailable; terminal answers still work: ${error instanceof Error ? error.message : String(error)}`,
				"warning",
			);
		}
	}

	pi.on("session_start", (_event, ctx) => start(ctx));
	pi.on("session_switch", (_event, ctx) => start(ctx));
	pi.on("session_branch", () => {
		for (const controller of active) controller.abort();
	});
	pi.on("session_tree", () => {
		for (const controller of active) controller.abort();
	});
	pi.on("session_shutdown", stop);

	const { z } = pi.zod;
	const parameters = z.object({
		questions: z
			.array(
				z.object({
					id: z.string().describe("question id"),
					question: z.string().describe("question text"),
					options: z
						.array(
							z.object({
								label: z.string().describe("display label"),
								description: z
									.string()
									.optional()
									.describe(
										"optional explanatory text displayed below the label",
									),
							}),
						)
						.describe("available options"),
					multi: z.boolean().optional().describe("allow multiple selections"),
					recommended: z
						.number()
						.optional()
						.describe("recommended option index"),
				}),
			)
			.min(1)
			.describe("questions to ask"),
	});

	const tool = {
		name: "ask",
		label: "Ask",
		approval: "read" as const,
		description:
			"Ask the user clarifying questions. Supply one or more questions with unique ids and labeled options (optional descriptions). Set multi to allow multiple selections and recommended to a zero-based option index. The user can also provide custom text. Wait for their answers before proceeding.",
		parameters,
		renderCall(args: { questions?: unknown }) {
			const lines = ["Ask"];
			if (Array.isArray(args.questions)) {
				for (const raw of args.questions) {
					if (!raw || typeof raw !== "object") continue;
					const q = raw as Record<string, unknown>;
					if (typeof q.question !== "string") continue;
					lines.push(
						`${typeof q.id === "string" ? `[${q.id}] ` : ""}${q.question}`,
					);
					if (!Array.isArray(q.options)) continue;
					for (const [index, option] of q.options.entries()) {
						if (
							!option ||
							typeof option !== "object" ||
							typeof option.label !== "string"
						)
							continue;
						lines.push(
							`  ${q.multi ? "[ ]" : "( )"} ${option.label}${index === q.recommended ? " (Recommended)" : ""}`,
						);
						if (typeof option.description === "string")
							lines.push(`      ${option.description}`);
					}
				}
			}
			return new pi.pi.Text(lines.join("\n"), 0, 0);
		},
		renderResult(result: AgentToolResult<AskToolDetails>) {
			const lines = ["Ask"];
			const details = result.details;
			const answers = details?.results ?? (details?.question ? [details] : []);
			for (const answer of answers) {
				lines.push(answer.question ?? "");
				for (const label of answer.options ?? []) {
					const selected = answer.selectedOptions?.includes(label) ?? false;
					lines.push(
						`  ${answer.multi ? (selected ? "[x]" : "[ ]") : selected ? "(x)" : "( )"} ${label}`,
					);
				}
				if (answer.customInput !== undefined)
					lines.push(
						`  Custom answer:\n${answer.customInput
							.split("\n")
							.map((line) => `    ${line}`)
							.join("\n")}`,
					);
				if (answer.timedOut) lines.push("  Auto-selected after timeout");
			}
			if (!answers.length) {
				for (const block of result.content)
					if (block.type === "text") lines.push(block.text);
			}
			return new pi.pi.Text(lines.join("\n"), 0, 0);
		},
		async execute(
			toolCallId: string,
			params: { questions: Questions },
			signal: AbortSignal | undefined,
			_onUpdate: unknown,
			ctx: ExtensionContext,
		): Promise<AgentToolResult<AskToolDetails>> {
			if (!ctx.hasUI) {
				ctx.abort();
				throw new Error("Ask tool requires interactive mode");
			}
			signal?.throwIfAborted();
			// Extension tools have no public concurrency declaration. Guard the one shared
			// selector surface rather than allowing simultaneous calls to orphan a dialog.
			if (active.size)
				throw new Error(
					"An ask question is already pending; wait for its answer before asking again",
				);
			const controller = new AbortController();
			active.add(controller);
			let settled = false;
			let withdraw = () => {};
			const result = Promise.withResolvers<AgentToolResult<AskToolDetails>>();
			const finish = (answers?: QuestionResult[], error?: unknown) => {
				if (settled) return;
				settled = true;
				withdraw();
				controller.signal.removeEventListener("abort", cancel);
				signal?.removeEventListener("abort", abort);
				if (answers) result.resolve(formatAnswers(answers));
				else
					result.reject(
						error ?? new DOMException("Ask input was cancelled", "AbortError"),
					);
				// Resolve remote result before aborting, so selector cancellation cannot win.
				controller.abort();
			};
			const cancel = () =>
				finish(
					undefined,
					new DOMException("Ask input was cancelled", "AbortError"),
				);
			const abort = () => controller.abort();
			controller.signal.addEventListener("abort", cancel, { once: true });
			signal?.addEventListener("abort", abort, { once: true });
			if (connected)
				withdraw = questionBridge.register(
					toolCallId,
					params.questions,
					(answers) => finish(answers),
				);
			// Public settings singleton retains project/user/runtime ask timeout settings.
			// ExtensionContext exposes no plan-mode state; never inspect private session state.
			const local = Promise.resolve().then(() => {
				controller.signal.throwIfAborted();
				if (pi.pi.settings.get("ask.notify") !== "off") {
					ctx.ui.notify("Waiting for input", "info");
				}
				return askLocally(
					ctx,
					params.questions,
					controller.signal,
					pi.pi.settings.get("ask.timeout"),
				);
			});
			void local.then(
				(answers) => finish(answers),
				(error) => {
					if (settled) return;
					const userCancelled =
						error instanceof Error &&
						error.name === "AbortError" &&
						!controller.signal.aborted;
					finish(undefined, error);
					if (userCancelled) ctx.abort();
				},
			);
			try {
				return await result.promise;
			} finally {
				withdraw();
				signal?.removeEventListener("abort", abort);
				controller.signal.removeEventListener("abort", cancel);
				controller.abort();
				// Wait for the actual dialog's cleanup before another tool may acquire the UI.
				await local.catch(() => {});
				active.delete(controller);
			}
		},
	};
	pi.registerTool(tool);
	return tool;
}
