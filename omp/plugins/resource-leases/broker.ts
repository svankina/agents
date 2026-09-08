import { fileURLToPath } from "node:url";

export const brokerPath = fileURLToPath(
	new URL("../../../bin/agent-resource", import.meta.url),
);

export async function broker(
	ownerId: string,
	args: string[],
	signal?: AbortSignal,
): Promise<unknown> {
	signal?.throwIfAborted();
	const proc = Bun.spawn([brokerPath, ...args], {
		env: {
			...process.env,
			AGENT_RESOURCE_OWNER: ownerId,
			AGENT_RESOURCE_PID: String(process.pid),
		},
		stdin: "ignore",
		stdout: "pipe",
		stderr: "pipe",
	});
	// The broker bounds its systemd calls. Never kill an acquisition client
	// before receiving the handle needed for cancellation cleanup.
	const [stdout, stderr, code] = await Promise.all([
		new Response(proc.stdout).text(),
		new Response(proc.stderr).text(),
		proc.exited,
	]);
	if (code !== 0)
		throw new Error(
			stderr.trim() || stdout.trim() || `Resource broker exited ${code}`,
		);
	return JSON.parse(stdout);
}
