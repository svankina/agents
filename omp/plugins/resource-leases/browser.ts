import { randomUUID } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { broker } from "./broker";

async function discoverEndpoint(
	profile: string,
	signal?: AbortSignal,
): Promise<string> {
	const timeout = new AbortController();
	const timer = setTimeout(
		() =>
			timeout.abort(
				new Error("Chrome CDP readiness timed out after 15 seconds"),
			),
		15_000,
	);
	const readiness = signal
		? AbortSignal.any([signal, timeout.signal])
		: timeout.signal;
	try {
		while (true) {
			readiness.throwIfAborted();
			let activePort: string;
			try {
				activePort = await readFile(
					join(profile, "DevToolsActivePort"),
					"utf8",
				);
			} catch (error) {
				if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
				await delay(100, undefined, { signal: readiness });
				continue;
			}
			const [portText, browserPath] = activePort.trim().split(/\r?\n/);
			const port = Number(portText);
			if (
				/^\d+$/.test(portText ?? "") &&
				Number.isInteger(port) &&
				port > 0 &&
				port <= 65535 &&
				/^\/devtools\/browser\/[A-Za-z0-9-]+$/.test(browserPath ?? "")
			) {
				try {
					const response = await fetch(
						`http://127.0.0.1:${port}/json/version`,
						{
							signal: readiness,
							redirect: "error",
						},
					);
					if (response.ok) {
						const version: unknown = await response.json();
						if (
							typeof version === "object" &&
							version !== null &&
							"webSocketDebuggerUrl" in version &&
							typeof version.webSocketDebuggerUrl === "string"
						) {
							const endpoint = new URL(version.webSocketDebuggerUrl);
							if (
								endpoint.protocol === "ws:" &&
								endpoint.hostname === "127.0.0.1" &&
								endpoint.port === portText &&
								endpoint.pathname === browserPath &&
								!endpoint.username &&
								!endpoint.password &&
								!endpoint.search &&
								!endpoint.hash
							) {
								readiness.throwIfAborted();
								return `http://127.0.0.1:${port}`;
							}
						}
					} else {
						await response.body?.cancel();
					}
				} catch {
					// Chrome may publish the port file before its HTTP endpoint is ready.
					readiness.throwIfAborted();
				}
			}
			await delay(100, undefined, { signal: readiness });
		}
	} catch (error) {
		if (readiness.aborted) throw readiness.reason;
		throw error;
	} finally {
		clearTimeout(timer);
	}
}

export async function acquireBrowser(
	ownerId: string,
	name: string,
	signal?: AbortSignal,
): Promise<{ id: string; cdpUrl: string }> {
	signal?.throwIfAborted();
	const chrome = [
		"google-chrome",
		"google-chrome-stable",
		"chromium",
		"chromium-browser",
	]
		.map((candidate) => Bun.which(candidate))
		.find(Boolean);
	if (!chrome)
		throw new Error("No Chrome or Chromium executable found on PATH");
	const runtime = process.env.XDG_RUNTIME_DIR;
	if (!runtime)
		throw new Error("XDG_RUNTIME_DIR is required for an owned browser profile");
	// The broker creates this private directory and reclaims it only after the
	// entire browser cgroup has stopped, including after owner-process death.
	const profile = join(
		runtime,
		"agent-resource",
		`profile-${randomUUID().replaceAll("-", "")}`,
	);
	let id: string | undefined;
	try {
		// Do not interrupt acquire before its lease id is known. Cancellation that
		// races startup is handled below by releasing that exact lease.
		const lease = await broker(ownerId, [
			"acquire",
			"--owner",
			ownerId,
			"--name",
			name,
			"--kind",
			"browser",
			"--json",
			"--cleanup-dir",
			profile,
			"--",
			chrome,
			"--headless=new",
			"--remote-debugging-address=127.0.0.1",
			"--remote-debugging-port=0",
			`--user-data-dir=${profile}`,
			"--no-first-run",
			"--no-default-browser-check",
			"about:blank",
		]);
		if (
			typeof lease !== "object" ||
			lease === null ||
			!("id" in lease) ||
			typeof lease.id !== "string" ||
			!lease.id
		) {
			throw new Error("Resource broker returned no browser lease id");
		}
		id = lease.id;
		signal?.throwIfAborted();
		const cdpUrl = await discoverEndpoint(profile, signal);
		signal?.throwIfAborted();
		return { id, cdpUrl };
	} catch (error) {
		if (id) {
			try {
				const released = await broker(ownerId, [
					"release",
					id,
					"--owner",
					ownerId,
					"--json",
				]);
				if (
					typeof released !== "object" ||
					released === null ||
					!("state" in released) ||
					released.state !== "released"
				) {
					throw new Error(
						`Resource broker did not confirm release of browser lease ${id}`,
					);
				}
			} catch (cleanupError) {
				throw new AggregateError(
					[error, cleanupError],
					`Browser acquisition failed and lease ${id} cleanup failed`,
				);
			}
		}
		throw error;
	}
}
