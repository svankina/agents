import type { ExtensionAPI, ToolCallEvent, ToolExecutionStartEvent, ToolExecutionUpdateEvent, ToolExecutionEndEvent } from "@earendil-works/pi-coding-agent";
import http from "node:http";
import https from "node:https";
import { URL } from "node:url";

type SubagentMode = "single" | "parallel" | "chain" | "unknown";

interface TrackedSubagentCall {
	taskId: string;
	mode: SubagentMode;
	metadata: Record<string, unknown>;
	startedAt: number;
}

interface SubagentArgs {
	agent?: string;
	task?: string;
	tasks?: Array<{ agent: string; task: string; cwd?: string }>;
	chain?: Array<{ agent: string; task: string; cwd?: string }>;
	agentScope?: string;
	cwd?: string;
}

function toBool(v: string | undefined): boolean {
	if (!v) return false;
	const value = v.trim().toLowerCase();
	return value === "1" || value === "true" || value === "yes" || value === "on";
}

function normalizeEndpoint(value: string | undefined): string {
	if (!value || !value.trim()) {
		return "http://127.0.0.1:8769";
	}
	return value.replace(/\/$/, "");
}

function truncate(value: unknown, limit = 6000): string {
	if (typeof value !== "string") return "";
	if (value.length <= limit) return value;
	return `${value.slice(0, limit)}\n[truncated]`;
}

function readSubagentArgs(input: Record<string, unknown>): SubagentArgs {
	const safeTasks = Array.isArray((input as { tasks?: unknown }).tasks)
		? (((input as { tasks: unknown }).tasks as Array<Record<string, unknown>>)
				.filter((entry) => entry && typeof entry === "object") as Array<Record<string, unknown>>)
			.map((entry) => ({
				agent: typeof entry.agent === "string" ? entry.agent : "unknown",
				task: typeof entry.task === "string" ? entry.task : "(no task)",
				cwd: typeof entry.cwd === "string" ? entry.cwd : undefined,
			}))
		: undefined;

	const safeChain = Array.isArray((input as { chain?: unknown }).chain)
		? (((input as { chain: unknown }).chain as Array<Record<string, unknown>>)
				.filter((entry) => entry && typeof entry === "object") as Array<Record<string, unknown>>)
			.map((entry) => ({
				agent: typeof entry.agent === "string" ? entry.agent : "unknown",
				task: typeof entry.task === "string" ? entry.task : "(no task)",
				cwd: typeof entry.cwd === "string" ? entry.cwd : undefined,
			}))
		: undefined;

	return {
		agent: typeof input.agent === "string" ? input.agent : undefined,
		task: typeof input.task === "string" ? input.task : undefined,
		tasks: safeTasks,
		chain: safeChain,
		agentScope: typeof input.agentScope === "string" ? input.agentScope : undefined,
		cwd: typeof input.cwd === "string" ? input.cwd : undefined,
	};
}

function inspectMode(args: SubagentArgs): SubagentMode {
	if (args.chain && args.chain.length > 0) return "chain";
	if (args.tasks && args.tasks.length > 0) return "parallel";
	if (args.agent && args.task) return "single";
	return "unknown";
}

function shortText(value: string | undefined, limit = 120): string {
	const text = (value || "").trim();
	return text.length <= limit ? text : `${text.slice(0, limit)}...`;
}

function makeTaskTitle(mode: SubagentMode, args: SubagentArgs): string {
	if (mode === "single") {
		return `${args.agent}: ${shortText(args.task, 80)}`;
	}
	if (mode === "parallel") {
		return `parallel subagent: ${args.tasks?.length ?? 0} tasks`;
	}
	if (mode === "chain") {
		return `subagent chain: ${args.chain?.length ?? 0} steps`;
	}
	return "subagent invocation";
}

function extractTextFromContent(content: unknown): string {
	if (!Array.isArray(content)) return "";
	const parts: string[] = [];
	for (const item of content as any[]) {
		if (item && typeof item === "object" && "text" in item && typeof item.text === "string") {
			parts.push(item.text);
		}
	}
	return parts.join("\n").trim();
}

async function postJson(url: string, token: string | undefined, body: Record<string, unknown>): Promise<void> {
	await new Promise<void>((resolve, reject) => {
		const target = new URL(url);
		const data = JSON.stringify(body);
		const req = (target.protocol === "https:" ? https : http).request(
			{
				method: "POST",
				hostname: target.hostname,
				port: target.port,
				path: `${target.pathname}${target.search}`,
				headers: {
					"content-type": "application/json",
					"content-length": Buffer.byteLength(data),
					...(token ? { authorization: `Bearer ${token}` } : {}),
				},
			},
			(res) => {
				res.resume();
				if (!res.statusCode || (res.statusCode < 200 || res.statusCode >= 300)) {
					reject(new Error(`tracker responded ${res.statusCode}`));
					return;
				}
				resolve();
			},
		);
		req.on("error", reject);
		req.write(data);
		req.end();
	});
}

function toSafeResultSummary(result: unknown): string {
	const fromText = truncate(
		extractTextFromContent((result as { content?: unknown } | undefined)?.content),
		2500,
	);
	if (fromText) return fromText;
	if (result && typeof result === "object" && "details" in result) {
		return truncate(
			typeof (result as { details?: unknown }).details === "string"
				? (result as { details?: unknown }).details
				: JSON.stringify((result as { details?: unknown }).details),
			500,
		);
	}
	return "(no result content)";
}

function createTrackerPayload(
	toolCallId: string,
	mode: SubagentMode,
	args: SubagentArgs,
	metadata: Record<string, unknown>,
	parentSessionId: string,
	parentSessionFile?: string,
) {
	const taskId = `subagent-${toolCallId}`;
	const objective =
		mode === "single"
			? shortText(args.task, 180)
			: mode === "parallel"
				? `parallel subagent call: ${args.tasks?.length || 0} tasks`
				: `subagent chain: ${args.chain?.length || 0} steps`;
	return {
		taskId,
		payload: {
			id: taskId,
			name: taskId,
			title: makeTaskTitle(mode, args),
			model: args.agent || args.chain?.[0]?.agent || args.tasks?.[0]?.agent || "subagent",
			objective,
			assignment: "Pi subagent tool call",
			approval_required: false,
			metadata: {
				...metadata,
				tool_call_id: toolCallId,
				parent_session_id: parentSessionId,
				parent_session_file: parentSessionFile,
			},
		},
	};
}

export default function subagentTrackingExtension(pi: ExtensionAPI): void {
	const enabled = (() => {
		if (process.env.SUBAGENT_TRACKER_ENABLED !== undefined) {
			return toBool(process.env.SUBAGENT_TRACKER_ENABLED);
		}
		return false;
	})();

	if (!enabled) {
		return;
	}

	const endpoint = normalizeEndpoint(process.env.SUBAGENT_DISPATCH_ENDPOINT || process.env.SUBAGENT_TRACKER_ENDPOINT);
	const token = process.env.SUBAGENT_DISPATCH_TOKEN || process.env.SUBAGENT_TRACKER_TOKEN;
	const active = new Map<string, TrackedSubagentCall>();
	const trackerUrl = `${endpoint}/api/tasks`;

	const postBestEffort = (runner: () => Promise<void>) => {
		void runner().catch(() => {
			// Silent failure preserves primary tool behavior when tracker is unavailable.
		});
	};

	const requestPath = (taskId: string, action: "dispatch" | "progress" | "report") =>
		`${trackerUrl}/${encodeURIComponent(taskId)}/${action}`;

	pi.on("tool_call", async (event: ToolCallEvent, ctx) => {
		if (event.toolName !== "subagent") return;

		const args = readSubagentArgs((event as { input?: Record<string, unknown> }).input || {});
		const mode = inspectMode(args);
		if (mode === "unknown") return;

		const calledAgents =
			mode === "single"
				? [args.agent]
				: mode === "parallel"
					? args.tasks?.map((entry) => entry.agent)
					: args.chain?.map((entry) => entry.agent);

		const metadata: Record<string, unknown> = {
			kind: "pi-subagent",
			mode,
			agent_scope: args.agentScope,
			caller_cwd: args.cwd || ctx.cwd,
			tool_call_id: event.toolCallId,
			called_at: new Date().toISOString(),
			agents: calledAgents?.filter((name): name is string => Boolean(name)) || [],
			agent: args.agent,
			task_count: mode === "single" ? 1 : mode === "parallel" ? args.tasks?.length || 0 : args.chain?.length || 0,
		};

		const parentSessionId = (() => {
			try {
				return ctx.sessionManager.getSessionId();
			} catch {
				return "unknown";
			}
		})();

		const parentSessionFile = (() => {
			try {
				return ctx.sessionManager.getSessionFile();
			} catch {
				return undefined;
			}
		})();

		// Enrich metadata with parent session info for dashboard grouping
		const parentCwd = (args.cwd || ctx.cwd) as string;
		const parentDirName = parentCwd.split("/").pop() || "pi";
		let parentSessionName: string | undefined;
		let parentAgentRole: string | undefined;
		try {
			parentSessionName = ctx.sessionManager.getSessionName() ?? undefined;
			// Also get the parent session's agent role from the label
			const label = ctx.sessionManager.getLabel();
			if (label && label !== "main") {
				parentAgentRole = label;
			}
		} catch {
			parentSessionName = undefined;
			parentAgentRole = undefined;
		}

		const enrichedMetadata: Record<string, unknown> = {
			...metadata,
			parent_dir_name: parentDirName,
			parent_session_name: parentSessionName || null,
			parent_agent_role: parentAgentRole || null,
			parent_cwd: parentCwd,
		};

		const { taskId, payload } = createTrackerPayload(
			event.toolCallId,
			mode,
			args,
			enrichedMetadata,
			parentSessionId,
			parentSessionFile,
		);

		active.set(event.toolCallId, {
			taskId,
			mode,
			metadata,
			startedAt: Date.now(),
		});

		postBestEffort(async () => {
			await postJson(trackerUrl, token, payload);
			await postJson(requestPath(taskId, "dispatch"), token, {
				worker: `pi-subagent-${event.toolCallId}`,
				metadata: {
					...metadata,
					subagent_mode: mode,
					input_agent_count:
						mode === "single" ? 1 : mode === "parallel" ? args.tasks?.length ?? 0 : args.chain?.length ?? 0,
				},
			});
			await postJson(requestPath(taskId, "progress"), token, {
				state: "running",
				progress: 15,
				current_step: "Subagent invocation accepted",
				blocked_by: "-",
				worker: `pi-subagent-${event.toolCallId}`,
				status: "START",
				metadata: {
					...metadata,
					created_from: "tool_call",
				},
			});
		});
	});

	pi.on("tool_execution_start", async (event: ToolExecutionStartEvent) => {
		if (event.toolName !== "subagent") return;
		const activeCall = active.get(event.toolCallId);
		if (!activeCall) return;

		postBestEffort(() =>
			postJson(requestPath(activeCall.taskId, "progress"), token, {
				state: "running",
				progress: 30,
				current_step: `Running ${activeCall.mode} subagent invocation`,
				blocked_by: "-",
				worker: `pi-subagent-${event.toolCallId}`,
				status: "START",
				metadata: {
					...activeCall.metadata,
					stage: "execution_start",
				},
			}),
		);
	});

	pi.on("tool_execution_update", async (event: ToolExecutionUpdateEvent) => {
		if (event.toolName !== "subagent") return;
		const activeCall = active.get(event.toolCallId);
		if (!activeCall) return;

		postBestEffort(() =>
			postJson(requestPath(activeCall.taskId, "progress"), token, {
				state: "running",
				progress: 55,
				current_step: "Subagent invocation in progress",
				blocked_by: "-",
				worker: `pi-subagent-${event.toolCallId}`,
				status: "RUNNING",
				metadata: {
					...activeCall.metadata,
					stage: "execution_update",
					partial: truncate(JSON.stringify(event.partialResult || {}), 1200),
				},
			}),
		);
	});

	pi.on("tool_execution_end", async (event: ToolExecutionEndEvent) => {
		if (event.toolName !== "subagent") return;
		const activeCall = active.get(event.toolCallId);
		if (!activeCall) return;

		const summary = toSafeResultSummary(event.result);
		const finalState = event.isError ? "failed" : "done";
		const finalStep = event.isError ? "Subagent invocation failed" : "Subagent invocation completed";

		postBestEffort(async () => {
			await postJson(requestPath(activeCall.taskId, "progress"), token, {
				state: finalState,
				progress: 100,
				current_step: finalStep,
				blocked_by: event.isError ? "subagent error" : "-",
				worker: `pi-subagent-${event.toolCallId}`,
				status: "END",
				metadata: {
					...activeCall.metadata,
					stage: "execution_end",
					elapsed_ms: Date.now() - activeCall.startedAt,
					elapsed_iso: new Date().toISOString(),
				},
			});
			await postJson(requestPath(activeCall.taskId, "report"), token, {
				final: true,
				state: finalState,
				status: "END",
				progress: 100,
				summary,
				details: truncate(summary),
				current_step: finalStep,
				blocked_by: event.isError ? "subagent error" : "-",
				worker: `pi-subagent-${event.toolCallId}`,
				metadata: {
					...activeCall.metadata,
					parent: {
						session_file: activeCall.metadata.parent_session_file as string | undefined,
					},
					final_output: truncate(toSafeResultSummary(event.result), 3000),
				},
				files: [],
				tests: [],
				risks: event.isError ? ["subagent invocation failed"] : [],
			});
		});

		active.delete(event.toolCallId);
	});
}
