import type { ExtensionAPI, ExtensionContext } from "@oh-my-pi/pi-coding-agent";
import { broker } from "./broker";
import { acquireBrowser } from "./browser";

interface Lease {
	id: string;
	ownerId: string;
	state: string;
	kind: string;
	name: string;
}

export default function resourceLeases(pi: ExtensionAPI) {
	pi.setLabel("Resource Leases");
	const z = pi.zod;
	const leaseSchema = z.object({
		id: z.string(),
		ownerId: z.string(),
		state: z.string(),
		kind: z.string(),
		name: z.string(),
	});
	const leasesSchema = z.array(leaseSchema);
	const owners = new Set<string>();
	const reminders = new Map<string, number>();
	const owner = (ctx: ExtensionContext) => {
		const id = ctx.sessionManager.getSessionId();
		owners.add(id);
		return id;
	};
	const list = async (id: string) =>
		leasesSchema.parse(await broker(id, ["list", "--owner", id, "--json"]));
	const cleanup = async (id: string) => {
		await broker(id, ["cleanup", "--owner", id, "--json"]);
		const remaining = await list(id);
		if (remaining.length)
			throw new Error(
				`Resource cleanup incomplete: ${remaining.length} leases remain`,
			);
		reminders.delete(id);
		return remaining;
	};
	const describe = (leases: Lease[]) =>
		leases.map((l) => `${l.kind}/${l.name} (${l.id}, ${l.state})`).join("\n");

	pi.registerTool({
		name: "resources",
		label: "Resources",
		loadMode: "essential",
		approval: "exec",
		description:
			"Acquire owned processes or a dedicated headless browser; list, release, or clean up this session's leases. For browser use op=browser, then attach the existing Eval browser facade with app.cdp_url from the result. Use broker acquisition for persistent processes and GUI applications. Completion requires cleanup. Borrowed user browsers are never killed. Direct unmanaged subprocess/browser launches are outside this plugin's enforcement.",
		parameters: z.object({
			op: z.enum(["acquire", "browser", "list", "release", "cleanup"]),
			name: z.string().optional(),
			command: z.array(z.string()).optional(),
			id: z.string().optional(),
		}),
		async execute(_callId, args, signal, _update, ctx) {
			const id = owner(ctx);
			let result: unknown;
			if (args.op === "list") result = await list(id);
			else if (args.op === "cleanup") result = await cleanup(id);
			else if (args.op === "release") {
				if (!args.id) throw new Error("release requires id");
				result = await broker(
					id,
					["release", args.id, "--owner", id, "--json"],
					signal,
				);
			} else {
				if (!args.name?.trim()) throw new Error("acquisition requires a name");
				if (args.op === "browser")
					result = await acquireBrowser(id, args.name, signal);
				else {
					if (!args.command?.length)
						throw new Error("acquire requires a command argv array");
					result = await broker(
						id,
						[
							"acquire",
							"--owner",
							id,
							"--name",
							args.name,
							"--kind",
							"process",
							"--json",
							"--",
							...args.command,
						],
						signal,
					);
					const acquired = leaseSchema.parse(result);
					if (signal?.aborted) {
						await broker(id, ["release", acquired.id, "--owner", id, "--json"]);
						signal.throwIfAborted();
					}
				}
			}
			return {
				content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
				details: { resources: result },
			};
		},
	});

	pi.on("tool_call", async (event, ctx) => {
		const id = owner(ctx);
		if (event.toolName === "bash") {
			const input = event.input;
			const existing =
				typeof input.env === "object" && input.env !== null ? input.env : {};
			return {
				input: {
					...input,
					env: {
						...existing,
						AGENT_RESOURCE_OWNER: id,
						AGENT_RESOURCE_PID: String(process.pid),
					},
				},
			};
		}
		if (event.toolName !== "quit_session" && event.toolName !== "yield") return;
		if (event.toolName === "yield" && event.input.key !== undefined) return;
		const leases = await list(id);
		if (leases.length)
			return {
				block: true,
				reason: `Completion blocked: ${leases.length} outstanding resource leases. Use resources op=cleanup, then retry.\n${describe(leases)}`,
			};
	});

	pi.on("session_stop", async (_event, ctx) => {
		const id = owner(ctx);
		const leases = await list(id);
		if (!leases.length) {
			reminders.delete(id);
			return;
		}
		const count = reminders.get(id) ?? 0;
		if (count >= 2) {
			await cleanup(id);
			pi.sendMessage(
				{
					customType: "resource-cleanup",
					content:
						"Resource plugin reclaimed outstanding leases after two cleanup reminders.",
					display: true,
				},
				{ triggerTurn: false },
			);
			return;
		}
		reminders.set(id, count + 1);
		return {
			continue: true,
			additionalContext: `Completion blocked: ${leases.length} outstanding resource leases. Close attached Eval tab handles, then use resources op=cleanup and verify resources op=list returns [].\n${describe(leases)}`,
		};
	});

	const releaseSession = async (_event: unknown, ctx: ExtensionContext) => {
		await cleanup(owner(ctx));
	};
	pi.on("session_before_switch", releaseSession);
	pi.on("session_before_branch", releaseSession);
	pi.on("session_before_tree", releaseSession);
	pi.on("session_shutdown", async () => {
		const results = await Promise.allSettled([...owners].map(cleanup));
		const failures = results.filter((r) => r.status === "rejected");
		if (failures.length)
			throw new AggregateError(
				failures.map((r) => r.reason),
				"Resource plugin shutdown cleanup failed",
			);
		owners.clear();
	});
}
