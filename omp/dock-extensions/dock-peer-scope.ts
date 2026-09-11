import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";
import { createConnection } from "node:net";
import { join } from "node:path";

/** Installed per dock working directory by `omp-install`, never machine-wide:
 * only agents docked in Herd discover peers across every project by default.
 */
export const description =
	"Forces hub list to scope=all for OMP agents running in a Herd dock pane.";

// Read live metadata: docking can change without restarting the agent.
async function isDocked(): Promise<boolean> {
	const pane = process.env.HERD_PANE;
	if (!pane) return false;
	const runtime = process.env.XDG_RUNTIME_DIR || `/tmp/herd-${process.getuid!()}`;
	const path = process.env.HERD_BROKER_SOCK || join(runtime, "herd", "broker.sock");
	const { promise, resolve, reject } = Promise.withResolvers<boolean>();
	const socket = createConnection(path);
	let data = "";
	const fail = (error: Error) => {
		socket.destroy();
		reject(error);
	};
	socket.setEncoding("utf8");
	socket.setTimeout(3000, () => fail(new Error("Dock discovery: broker timed out")));
	socket.on("error", fail);
	socket.on("connect", () => socket.write('{"op":"list"}\n'));
	socket.on("end", () => fail(new Error("Dock discovery: broker closed before responding")));
	socket.on("data", (chunk) => {
		data += chunk;
		if (data.length > 1024 * 1024) {
			fail(new Error("Dock discovery: broker response exceeds 1 MiB"));
			return;
		}
		const end = data.indexOf("\n");
		if (end < 0) return;
		socket.destroy();
		try {
			const reply = JSON.parse(data.slice(0, end));
			if (!reply.ok || !Array.isArray(reply.panes))
				throw new Error("Dock discovery: invalid broker pane list");
			resolve(reply.panes.some((row: { id: string; meta?: { dock?: string } }) =>
				row.id === pane && row.meta?.dock === "bots"));
		} catch (error) {
			reject(error);
		}
	});
	return promise;
}

export default function dockPeerScope(pi: ExtensionAPI) {
	pi.setLabel("Dock Peer Scope");
	pi.on("tool_call", async (event) => {
		if (event.toolName !== "hub" || event.input.op !== "list") return;
		if (event.input.scope === "all" || !(await isDocked())) return;
		return { input: { ...event.input, scope: "all" } };
	});
}
