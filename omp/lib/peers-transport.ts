import * as fs from "node:fs/promises";
import { createConnection } from "node:net";
import * as path from "node:path";
import type { Server } from "bun";

export interface PeerDescriptor {
	id: string;
	localId: string;
	instanceId: string;
	sessionId: string;
	displayName: string;
	kind: "main" | "sub";
	status: "running" | "idle" | "parked";
	parentId?: string;
	cwd: string;
	pid: number;
	pane?: string;
	lastActivity: number;
	activity?: string;
}

export interface PeerMessage {
	from: string;
	to: string;
	body: string;
	replyTo?: string;
	expectsReply?: boolean;
	/** Session identity survives transport restarts; used only for channel history routing. */
	senderSessionId?: string;
	senderName?: string;
	/** Replies must not launch another request worker. */
	kind?: "request" | "reply";
	/** Preserve wake-relay suppression across process boundaries to avoid reply loops. */
	wakeRelay?: boolean;
}

export interface PeerDeliveryReceipt {
	to: string;
	outcome: "injected" | "woken" | "revived" | "failed";
	error?: string;
}

export interface PeerDiscovery {
	peers: PeerDescriptor[];
	errors: string[];
}

const INSTANCE = /^[a-f0-9]{32}$/;
const SOCKET = /^([a-f0-9]{32})\.sock$/;
const MESSAGE_LIMIT = 64 * 1024;
const REQUEST_LIMIT = 128 * 1024;
const RESPONSE_LIMIT = 1024 * 1024;
const TIMEOUT_MS = 3000;

export function peerDirectory(): string | null {
	if (process.platform === "win32" || !process.getuid || process.env.OMP_PEERS_DIR === "off") return null;
	if (process.env.OMP_PEERS_DIR) return path.resolve(process.env.OMP_PEERS_DIR);
	return process.env.XDG_RUNTIME_DIR
		? path.join(process.env.XDG_RUNTIME_DIR, "omp-peers")
		: `/tmp/omp-peers-${process.getuid()}`;
}

export function qualifyPeer(instanceId: string, localId: string): string {
	if (!INSTANCE.test(instanceId) || !validLocalId(localId)) throw new Error("Invalid peer identity");
	return `omp:${instanceId}/${encodeURIComponent(localId)}`;
}

export function parsePeerId(id: string): { instanceId: string; localId: string } | null {
	const match = /^omp:([a-f0-9]{32})\/([^/]+)$/.exec(id);
	if (!match) return null;
	try {
		const localId = decodeURIComponent(match[2]!);
		if (!validLocalId(localId) || encodeURIComponent(localId) !== match[2]) return null;
		return { instanceId: match[1]!, localId };
	} catch {
		return null;
	}
}

function validLocalId(id: string): boolean {
	return id.length > 0 && id.length <= 1024 && id !== "." && id !== ".." && !/[\x00-\x1f\x7f]/.test(id);
}

function code(error: unknown): string | undefined {
	return typeof error === "object" && error !== null && "code" in error ? String(error.code) : undefined;
}

function errorText(error: unknown): string {
	return error instanceof Error ? error.message : "Peer transport failed";
}

async function checkDirectory(directory: string, create = false): Promise<void> {
	if (!process.getuid || process.platform === "win32") throw new Error("Unix peers are unavailable");
	if (create) {
		try {
			await fs.mkdir(directory, { mode: 0o700 });
		} catch (error) {
			if (code(error) !== "EEXIST") throw error;
		}
	}
	const stat = await fs.lstat(directory);
	if (!stat.isDirectory() || stat.uid !== process.getuid() || (stat.mode & 0o7777) !== 0o700) {
		throw new Error(`Unsafe peer directory: ${directory} (requires an owned real directory with mode 0700)`);
	}
	if ((await fs.realpath(directory)) !== path.resolve(directory))
		throw new Error(`Unsafe symlinked peer directory: ${directory}`);
}

async function checkSocket(socket: string): Promise<void> {
	const stat = await fs.lstat(socket);
	if (!stat.isSocket() || stat.uid !== process.getuid?.() || (stat.mode & 0o077) !== 0) {
		throw new Error(`Unsafe peer socket: ${socket}`);
	}
}

function record(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

function validMessage(value: unknown): value is PeerMessage {
	return (
		record(value) &&
		typeof value.from === "string" &&
		(value.from === "external:herd" || parsePeerId(value.from) !== null) &&
		typeof value.to === "string" &&
		parsePeerId(value.to) !== null &&
		typeof value.body === "string" &&
		Buffer.byteLength(value.body, "utf8") <= MESSAGE_LIMIT &&
		(value.replyTo === undefined || (typeof value.replyTo === "string" && value.replyTo.length <= 1024)) &&
		(value.expectsReply === undefined || typeof value.expectsReply === "boolean") &&
		(value.senderSessionId === undefined || (typeof value.senderSessionId === "string" && value.senderSessionId.length > 0 && value.senderSessionId.length <= 1024)) &&
		(value.senderName === undefined || (typeof value.senderName === "string" && value.senderName.length <= 256)) &&
		(value.kind === undefined || value.kind === "request" || value.kind === "reply") &&
		(value.wakeRelay === undefined || typeof value.wakeRelay === "boolean")
	);
}

function validReceipt(value: unknown, to: string): value is PeerDeliveryReceipt {
	return (
		record(value) &&
		value.to === to &&
		typeof value.outcome === "string" &&
		["injected", "woken", "revived", "failed"].includes(value.outcome) &&
		(value.error === undefined || typeof value.error === "string")
	);
}

function validDescriptor(value: unknown, instanceId: string): value is PeerDescriptor {
	if (!record(value) || value.instanceId !== instanceId || typeof value.id !== "string") return false;
	const parsed = parsePeerId(value.id);
	return (
		parsed !== null &&
		parsed.instanceId === instanceId &&
		parsed.localId === value.localId &&
		typeof value.sessionId === "string" &&
		typeof value.displayName === "string" &&
		(value.kind === "main" || value.kind === "sub") &&
		(value.status === "running" || value.status === "idle" || value.status === "parked") &&
		(value.parentId === undefined || (typeof value.parentId === "string" && parsePeerId(value.parentId) !== null)) &&
		typeof value.cwd === "string" &&
		path.isAbsolute(value.cwd) &&
		typeof value.pid === "number" &&
		Number.isSafeInteger(value.pid) &&
		value.pid > 0 &&
		typeof value.lastActivity === "number" &&
		Number.isFinite(value.lastActivity) &&
		(value.pane === undefined || typeof value.pane === "string") &&
		(value.activity === undefined || typeof value.activity === "string")
	);
}

async function bounded<T>(operation: Promise<T>, onTimeout?: () => void): Promise<T> {
	const deadline = Promise.withResolvers<T>();
	const timer = setTimeout(() => {
		onTimeout?.();
		deadline.reject(new Error("Peer request timed out; delivery may be unknown, do not retry automatically"));
	}, TIMEOUT_MS);
	try {
		return await Promise.race([operation, deadline.promise]);
	} finally {
		clearTimeout(timer);
	}
}

async function readJson(source: Request | Response, limit: number): Promise<unknown> {
	const length = source.headers.get("content-length");
	if (length !== null && (!/^\d+$/.test(length) || Number(length) > limit)) {
		await source.body?.cancel();
		throw new Error("Peer JSON exceeds size limit");
	}
	if (!source.body) throw new Error("Missing peer JSON");
	const reader = source.body.getReader();
	try {
		return await bounded(
			(async () => {
				const chunks: Uint8Array[] = [];
				let size = 0;
				while (true) {
					const { done, value } = await reader.read();
					if (done) break;
					size += value.byteLength;
					if (size > limit) throw new Error("Peer JSON exceeds size limit");
					chunks.push(value);
				}
				try {
					return JSON.parse(
						new TextDecoder("utf-8", { fatal: true }).decode(Buffer.concat(chunks, size)),
					) as unknown;
				} catch {
					throw new Error("Malformed peer JSON");
				}
			})(),
			() => {
				void reader.cancel().catch(() => {});
			},
		);
	} finally {
		await reader.cancel().catch(() => {});
		reader.releaseLock();
	}
}

function json(value: unknown, status = 200): Response {
	const body = JSON.stringify(value);
	if (Buffer.byteLength(body, "utf8") > RESPONSE_LIMIT)
		return json({ error: "Peer response exceeds size limit" }, 500);
	return new Response(body, { status, headers: { "content-type": "application/json", connection: "close" } });
}

async function request(socket: string, endpoint: string, message?: PeerMessage): Promise<unknown> {
	await checkSocket(socket);
	const body = message === undefined ? undefined : JSON.stringify(message);
	if (body !== undefined && Buffer.byteLength(body, "utf8") > REQUEST_LIMIT)
		throw new Error("Peer request exceeds size limit");
	const controller = new AbortController();
	// A fresh connection and no redirect prevent implicit replays or escape to TCP.
	return bounded(
		(async () => {
			const response = await fetch(`http://localhost${endpoint}`, {
				unix: socket,
				method: message === undefined ? "GET" : "POST",
				body,
				headers: { "content-type": "application/json", connection: "close" },
				redirect: "error",
				keepalive: false,
				signal: controller.signal,
			});
			if (!response.ok) {
				await response.body?.cancel();
				throw new Error(`Peer server returned HTTP ${response.status}`);
			}
			return readJson(response, RESPONSE_LIMIT);
		})(),
		() => controller.abort(),
	);
}

async function staleSocket(error: unknown, socket: string): Promise<boolean> {
	if (["ENOENT", "ECONNREFUSED"].includes(code(error) ?? "")) return true;
	if (code(error) !== "FailedToOpenSocket") return false;
	// Bun fetch collapses Unix connect errors into FailedToOpenSocket. Probe
	// the connection without sending HTTP to distinguish refusal from resource
	// exhaustion or other real failures. Never replay a message request.
	const result = Promise.withResolvers<boolean>();
	const connection = createConnection(socket);
	connection.once("connect", () => result.resolve(false));
	connection.once("error", failure => result.resolve(["ENOENT", "ECONNREFUSED"].includes(code(failure) ?? "")));
	connection.setTimeout(TIMEOUT_MS, () => result.resolve(false));
	try {
		return await result.promise;
	} finally {
		connection.destroy();
	}
}

async function discover(directory: string, exclude?: string): Promise<PeerDiscovery> {
	const result: PeerDiscovery = { peers: [], errors: [] };
	let names: string[];
	try {
		await checkDirectory(directory);
		names = await fs.readdir(directory);
	} catch (error) {
		if (code(error) !== "ENOENT") result.errors.push(errorText(error));
		return result;
	}
	const sockets = names.filter(name => SOCKET.test(name) && name !== exclude).sort();
	let next = 0;
	await Promise.all(
		Array.from({ length: Math.min(6, sockets.length) }, async () => {
			while (next < sockets.length) {
				const name = sockets[next++]!;
				const instanceId = name.slice(0, -5);
				try {
					const value = await request(path.join(directory, name), "/peers");
					if (
						!record(value) ||
						value.version !== 1 ||
						value.instanceId !== instanceId ||
						!Array.isArray(value.peers) ||
						!value.peers.every(peer => validDescriptor(peer, instanceId))
					)
						throw new Error("Invalid peer discovery response");
					const ids = new Set(value.peers.map(peer => peer.id));
					if (ids.size !== value.peers.length) throw new Error("Duplicate peer identity in discovery response");
					result.peers.push(...value.peers);
				} catch (error) {
					if (!(await staleSocket(error, path.join(directory, name))))
						result.errors.push(`${name}: ${errorText(error)}`);
				}
			}
		}),
	);
	result.peers.sort((a, b) => a.id.localeCompare(b.id));
	result.errors.sort();
	return result;
}

export function discoverPeers(directory: string): Promise<PeerDiscovery> {
	return discover(path.resolve(directory));
}

/** Same-UID local transport, not a security boundary against other processes of this user. */
export class PeerNetwork {
	readonly instanceId = crypto.randomUUID().replaceAll("-", "");
	#directory: string;
	#socket: string;
	#peers: (instanceId: string) => PeerDescriptor[];
	#receive: (message: PeerMessage) => Promise<PeerDeliveryReceipt>;
	#server?: Server<undefined>;
	#starting?: Promise<void>;
	#closing?: Promise<void>;
	#closed = false;

	constructor(options: {
		directory: string;
		peers: (instanceId: string) => PeerDescriptor[];
		receive: (message: PeerMessage) => Promise<PeerDeliveryReceipt>;
	}) {
		this.#directory = path.resolve(options.directory);
		this.#socket = path.join(this.#directory, `${this.instanceId}.sock`);
		this.#peers = options.peers;
		this.#receive = options.receive;
	}

	async start(): Promise<void> {
		if (this.#closed) throw new Error("Peer network is closed; create a new connection identity");
		if (this.#server) return;
		this.#starting ??= this.#start();
		try {
			await this.#starting;
		} finally {
			this.#starting = undefined;
		}
	}

	async #start(): Promise<void> {
		await checkDirectory(this.#directory, true);
		// Never unlink an existing filename, even in the astronomically unlikely ID collision.
		try {
			await fs.lstat(this.#socket);
			throw new Error("Peer socket already exists");
		} catch (error) {
			if (code(error) !== "ENOENT") throw error;
		}
		const server = Bun.serve<undefined>({
			unix: this.#socket,
			maxRequestBodySize: REQUEST_LIMIT,
			fetch: request => this.#handle(request),
			error: () => json({ error: "Peer request failed" }, 500),
		});
		this.#server = server;
		server.unref();
		try {
			await fs.chmod(this.#socket, 0o600);
			await checkSocket(this.#socket);
		} catch (error) {
			await server.stop(true);
			this.#server = undefined;
			throw error;
		}
	}

	async close(): Promise<void> {
		this.#closed = true;
		this.#closing ??= this.#close();
		await this.#closing;
	}

	async #close(): Promise<void> {
		await this.#starting?.catch(() => {});
		const server = this.#server;
		this.#server = undefined;
		if (!server) return;
		await server.stop(true);
		// Bun normally unlinks the socket on stop. Only our exact owned socket may be removed.
		try {
			await checkDirectory(this.#directory);
			await checkSocket(this.#socket);
			await fs.unlink(this.#socket);
		} catch (error) {
			if (code(error) !== "ENOENT") throw error;
		}
	}

	discover(): Promise<PeerDiscovery> {
		return discover(this.#directory, `${this.instanceId}.sock`);
	}

	async send(message: PeerMessage): Promise<PeerDeliveryReceipt> {
		try {
			if (!validMessage(message)) throw new Error("Invalid peer message or body exceeds 64 KiB");
			await checkDirectory(this.#directory);
			const target = parsePeerId(message.to)!;
			const receipt = await request(path.join(this.#directory, `${target.instanceId}.sock`), "/messages", message);
			if (!validReceipt(receipt, message.to))
				throw new Error("Invalid peer delivery receipt; delivery may be unknown");
			return receipt;
		} catch (error) {
			return { to: message.to, outcome: "failed", error: errorText(error) };
		}
	}

	async #handle(request: Request): Promise<Response> {
		const url = new URL(request.url);
		if (url.pathname === "/peers" && request.method === "GET") {
			const peers = this.#peers(this.instanceId);
			if (!peers.every(peer => validDescriptor(peer, this.instanceId)))
				return json({ error: "Invalid local peer descriptors" }, 500);
			return json({ version: 1, instanceId: this.instanceId, peers });
		}
		if (url.pathname !== "/messages" || request.method !== "POST")
			return json({ error: "Unknown peer endpoint" }, 404);
		let message: unknown;
		try {
			message = await readJson(request, REQUEST_LIMIT);
		} catch (error) {
			return json({ error: errorText(error) }, 400);
		}
		if (!validMessage(message)) return json({ error: "Invalid peer message or body exceeds 64 KiB" }, 400);
		if (parsePeerId(message.to)!.instanceId !== this.instanceId)
			return json({ to: message.to, outcome: "failed", error: "Wrong peer instance" });
		try {
			// external:herd stays explicitly attributed; it is never converted into user input.
			const receipt = await bounded(this.#receive(message));
			if (!validReceipt(receipt, message.to)) throw new Error("Invalid local delivery receipt");
			return json(receipt);
		} catch {
			return json({
				to: message.to,
				outcome: "failed",
				error: "Peer delivery failed or timed out; acceptance may be unknown, do not retry automatically",
			});
		}
	}
}
