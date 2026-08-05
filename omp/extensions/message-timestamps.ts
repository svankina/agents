/**
 * message-timestamps — dim wall-clock send time in the omp TUI transcript,
 * under each user prompt and each prose-bearing assistant message.
 *
 * Pure plugin, no omp source changes: appends display-only custom messages
 * (customType "message-timestamp", empty content) and renders them via
 * registerMessageRenderer. On the LLM path an empty custom message converts
 * to an empty developer turn, which providers drop (anthropic.ts skips
 * empty user/developer turns), so the model never sees these entries.
 * Entries persist in the session file, so timestamps survive resume.
 *
 * Tool-call-only assistant messages stay unstamped to avoid one line per
 * intra-turn step. Synthetic user messages (harness-injected) are skipped.
 *
 * Installed via symlink into each profile's agent/extensions/ dir.
 */
import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";
import { Text } from "@oh-my-pi/pi-tui";

const TYPE = "message-timestamp";

interface Stamp {
	at: number;
	who: "user" | "assistant";
}

function formatTime(at: number): string {
	return new Date(at).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
}

export default function messageTimestamps(pi: ExtensionAPI) {
	pi.setLabel("Message Timestamps");

	pi.registerMessageRenderer<Stamp>(TYPE, (message, _options, theme) => {
		const at = message.details?.at;
		if (typeof at !== "number") return undefined;
		return new Text(theme.fg("dim", formatTime(at)), 1, 0);
	});

	// The agent loop re-emits message_start/message_end for a turn's input
	// messages on retry/gate paths (agent-loop.ts emitInputMessages), so the
	// same message can arrive more than once. Key on role+timestamp, the same
	// signature omp's event controller uses to dedupe custom-message display.
	const stamped = new Set<string>();

	const stamp = (who: Stamp["who"], at: number) => {
		const key = `${who}:${at}`;
		if (stamped.has(key)) return;
		stamped.add(key);
		try {
			pi.sendMessage({ customType: TYPE, content: "", display: true, details: { at, who } satisfies Stamp });
		} catch {
			// Headless/print contexts may not wire sendMessage; timestamps are TUI sugar.
		}
	};

	pi.on("message_start", async event => {
		const m = event.message;
		if (m.role !== "user") return;
		if ("synthetic" in m && m.synthetic) return;
		stamp("user", m.timestamp ?? Date.now());
	});

	pi.on("message_end", async event => {
		const m = event.message;
		if (m.role !== "assistant") return;
		const hasProse =
			Array.isArray(m.content) &&
			m.content.some(c => c.type === "text" && typeof c.text === "string" && c.text.trim().length > 0);
		if (hasProse) stamp("assistant", m.timestamp ?? Date.now());
	});
}
