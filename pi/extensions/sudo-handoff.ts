import type { ExtensionAPI, ExtensionContext } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { closeSync, existsSync, mkdirSync, openSync, readFileSync, readSync, statSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const POLL_MS = 1_000;
const SESSION_PREFIX = "pi-sudo";
const LISTENER_DIR = resolve("/tmp", "pi-sudo-handoff", "listeners");

type PendingHandoff = {
  id: string;
  taskName: string;
  sessionName: string;
  markerPath: string;
  resultPath: string;
  interval: NodeJS.Timeout;
};

type PsudoCompletionEvent = {
  event?: string;
  sessionName?: string;
  taskName?: string;
  status?: unknown;
  cwd?: string;
  completedAt?: unknown;
};

function shellQuote(value: string): string {
  return `'${value.replaceAll("'", "'\\''")}'`;
}

function sanitizeSessionName(name: string): string {
  return name.replace(/[^A-Za-z0-9_.-]/g, "-").slice(0, 80) || SESSION_PREFIX;
}

function safeTaskSlug(taskName: string): string {
  return taskName.toLowerCase().replace(/[^a-z0-9_.-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "task";
}

function readStatus(resultPath: string): number | null {
  try {
    const parsed = JSON.parse(readFileSync(resultPath, "utf8")) as { status?: unknown };
    return typeof parsed.status === "number" ? parsed.status : null;
  } catch {
    return null;
  }
}

function completionMessage(pending: PendingHandoff): string {
  const status = readStatus(pending.resultPath);
  const statusText = status === null ? "unknown status" : `exit status ${status}`;
  return [
    `The psudo sudo handoff for "${pending.taskName}" completed with ${statusText}.`,
    `Tmux session: ${pending.sessionName}`,
    "Continue the original task now: inspect the sudo task result, verify the requested change, and proceed from where you left off.",
  ].join("\n");
}

function psudoEventMessage(event: PsudoCompletionEvent): string {
  const taskName = event.taskName?.trim() || "psudo task";
  const sessionName = event.sessionName?.trim() || "unknown tmux session";
  const status = typeof event.status === "number" ? event.status : null;
  const statusText = status === null ? "unknown status" : `exit status ${status}`;
  const cwd = event.cwd?.trim();
  return [
    `The psudo sudo handoff for "${taskName}" completed with ${statusText}.`,
    `Tmux session: ${sessionName}`,
    cwd ? `Started from: ${cwd}` : undefined,
    "Continue the original task now: inspect the sudo task result (capture the tmux pane if needed), verify the requested change, and proceed from where you left off.",
  ].filter((line): line is string => Boolean(line)).join("\n");
}

function previewText(params: {
  why: string;
  command?: string;
  scriptPath?: string;
}): string {
  if (params.scriptPath) {
    return [
      `Why sudo is needed: ${params.why}`,
      `Will run with sudo: bash ${params.scriptPath}`,
      "Script contents:",
      readFileSync(params.scriptPath, "utf8")
        .split("\n")
        .map((line, index) => `${String(index + 1).padStart(6)}\t${line}`)
        .join("\n"),
      "",
    ].join("\n");
  }

  return [
    `Why sudo is needed: ${params.why}`,
    `Will run with sudo: bash -lc ${params.command ?? ""}`,
    "",
  ].join("\n");
}

function wrapperScript(params: {
  id: string;
  taskName: string;
  command?: string;
  scriptPath?: string;
  previewPath: string;
  resultPath: string;
  markerPath: string;
}): string {
  const sudoLine = params.scriptPath
    ? `sudo bash ${shellQuote(params.scriptPath)}`
    : `sudo bash -lc ${shellQuote(params.command ?? "")}`;

  return `#!/usr/bin/env bash
set +e
clear
printf '=== psudo handoff review ===\\n'
cat ${shellQuote(params.previewPath)}
printf '\\nWhen prompted, enter your sudo password locally. The agent will be notified when this command exits.\\n\\n'
${sudoLine}
status=$?
sudo -k
mkdir -p ${shellQuote(dirname(params.resultPath))}
printf '{"id":%s,"taskName":%s,"status":%s,"completedAt":%s}\\n' \
  ${shellQuote(JSON.stringify(params.id))} \
  ${shellQuote(JSON.stringify(params.taskName))} \
  "$status" \
  "$(date +%s)" > ${shellQuote(`${params.resultPath}.tmp`)}
mv ${shellQuote(`${params.resultPath}.tmp`)} ${shellQuote(params.resultPath)}
touch ${shellQuote(params.markerPath)}
printf '\\nsudo task exited with %s\\n' "$status"
printf 'The Pi agent has been notified. Press Enter to close.'
read -r _
exit "$status"
`;
}

export default function sudoHandoff(pi: ExtensionAPI) {
  const pending = new Map<string, PendingHandoff>();
  let currentContext: Pick<ExtensionContext, "isIdle"> | null = null;
  let listenerInterval: NodeJS.Timeout | null = null;
  let listenerPath: string | null = null;
  let listenerOffset = 0;

  function clearPending(id: string) {
    const entry = pending.get(id);
    if (!entry) return;
    clearInterval(entry.interval);
    pending.delete(id);
  }

  function sendCompletionFollowUp(entry: PendingHandoff) {
    pi.sendUserMessage(completionMessage(entry), { deliverAs: "followUp" });
  }

  function watchPending(entry: Omit<PendingHandoff, "interval">) {
    const interval = setInterval(() => {
      if (!existsSync(entry.markerPath)) return;
      const pendingEntry = { ...entry, interval };
      clearPending(entry.id);
      sendCompletionFollowUp(pendingEntry);
    }, POLL_MS);
    pending.set(entry.id, { ...entry, interval });
  }

  function clearPsudoListener() {
    if (listenerInterval !== null) {
      clearInterval(listenerInterval);
      listenerInterval = null;
    }
    if (listenerPath && process.env.PSUDO_NOTIFY_FILE === listenerPath) {
      delete process.env.PSUDO_NOTIFY_FILE;
    }
    listenerPath = null;
    listenerOffset = 0;
  }

  function pollPsudoListener(path: string) {
    try {
      const stat = statSync(path);
      if (stat.size <= listenerOffset) return;

      const length = stat.size - listenerOffset;
      const buffer = Buffer.alloc(length);
      const fd = openSync(path, "r");
      try {
        readSync(fd, buffer, 0, length, listenerOffset);
      } finally {
        closeSync(fd);
      }
      listenerOffset = stat.size;

      for (const line of buffer.toString("utf8").split("\n")) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        let event: PsudoCompletionEvent;
        try {
          event = JSON.parse(trimmed) as PsudoCompletionEvent;
        } catch {
          continue;
        }
        if (event.event !== "psudo_completed") continue;
        pi.sendUserMessage(psudoEventMessage(event), { deliverAs: "followUp" });
      }
    } catch {
      listenerOffset = existsSync(path) ? listenerOffset : 0;
    }
  }

  function startPsudoListener(ctx: ExtensionContext) {
    clearPsudoListener();
    mkdirSync(LISTENER_DIR, { recursive: true });
    listenerPath = resolve(LISTENER_DIR, `${process.pid}-${Date.now()}-${safeTaskSlug(ctx.cwd)}.jsonl`);
    writeFileSync(listenerPath, "", { mode: 0o600 });
    listenerOffset = 0;
    process.env.PSUDO_NOTIFY_FILE = listenerPath;
    listenerInterval = setInterval(() => {
      if (listenerPath) pollPsudoListener(listenerPath);
    }, POLL_MS);
    listenerInterval.unref?.();
  }

  pi.on("session_start", async (_event, ctx) => {
    currentContext = ctx;
    startPsudoListener(ctx);
  });

  pi.on("session_shutdown", async () => {
    currentContext = null;
    for (const id of [...pending.keys()]) clearPending(id);
    clearPsudoListener();
  });

  pi.registerTool({
    name: "request_sudo_handoff",
    label: "Request Sudo Handoff",
    description: "Start a psudo/tmux sudo handoff and automatically notify the agent when the sudo command exits. Use this instead of asking for a sudo password in chat.",
    promptSnippet: "Start a psudo/tmux sudo handoff that notifies the agent when complete",
    promptGuidelines: [
      "Use request_sudo_handoff when root privileges are needed: prepare a narrow command or script, explain why sudo is needed, start the psudo tmux session with this tool, tell the user to run psudo, then wait for the automatic follow-up before continuing.",
      "Do not ask for or accept sudo passwords in chat; request_sudo_handoff runs sudo in a user-attached tmux session and reports only completion status back to the agent.",
      "The handoff session uses the same pi-sudo-* naming convention as the psudo helper, so bare `psudo` opens a terminal from GUI launchers, attaches when there is one pending session, and lets the user pick when there are several.",
    ],
    parameters: Type.Object({
      taskName: Type.String({ description: "Short human-readable name for the sudo task." }),
      why: Type.String({ description: "Why sudo is needed. This is shown to the user before sudo runs." }),
      command: Type.Optional(Type.String({ description: "Exact shell command to run as root via sudo bash -lc. Use either command or scriptPath, not both." })),
      scriptPath: Type.Optional(Type.String({ description: "Path to a reviewable script to run as root via sudo bash. Use either scriptPath or command, not both." })),
      sessionName: Type.Optional(Type.String({ description: "Tmux session name. Defaults to a unique pi-sudo-* session visible to the psudo helper." })),
    }),
    async execute(_toolCallId, params, signal, _onUpdate, ctx) {
      currentContext = ctx;
      const hasCommand = typeof params.command === "string" && params.command.trim().length > 0;
      const hasScript = typeof params.scriptPath === "string" && params.scriptPath.trim().length > 0;
      if (hasCommand === hasScript) {
        throw new Error("Provide exactly one of command or scriptPath.");
      }

      const taskName = params.taskName.trim();
      if (!taskName) throw new Error("taskName must not be empty.");

      const why = params.why.trim();
      if (!why) throw new Error("why must not be empty.");

      const id = `${Date.now()}-${process.pid}-${safeTaskSlug(taskName)}`;
      const defaultSessionName = `${SESSION_PREFIX}-${safeTaskSlug(taskName)}-${Date.now()}-${process.pid}`;
      const sessionName = sanitizeSessionName(params.sessionName?.trim() || defaultSessionName);
      const stateDir = resolve("/tmp", "pi-sudo-handoff", id);
      mkdirSync(stateDir, { recursive: true });

      const scriptPath = hasScript ? resolve(ctx.cwd, params.scriptPath!) : undefined;
      if (scriptPath && !existsSync(scriptPath)) {
        throw new Error(`scriptPath does not exist: ${scriptPath}`);
      }

      const wrapperPath = resolve(stateDir, "run.sh");
      const previewPath = resolve(stateDir, "preview.txt");
      const resultPath = resolve(stateDir, "result.json");
      const markerPath = resolve(stateDir, "done");
      writeFileSync(previewPath, previewText({ why, command: hasCommand ? params.command : undefined, scriptPath }));
      writeFileSync(wrapperPath, wrapperScript({
        id,
        taskName,
        command: hasCommand ? params.command : undefined,
        scriptPath,
        previewPath,
        resultPath,
        markerPath,
      }), { mode: 0o700 });

      const tmux = await pi.exec("tmux", ["new-session", "-d", "-s", sessionName, "bash", wrapperPath], {
        signal,
        timeout: 5_000,
      }) as { code?: number; stdout?: string; stderr?: string };

      if (tmux.code !== 0) {
        const output = [tmux.stdout, tmux.stderr].filter(Boolean).join("\n").trim();
        throw new Error(`tmux failed to start sudo handoff${output ? `: ${output}` : ""}`);
      }

      watchPending({ id, taskName, sessionName, markerPath, resultPath });

      return {
        content: [{
          type: "text",
          text: [
            `Started sudo handoff "${taskName}" in tmux session ${sessionName}.`,
            "Ask the user to run `psudo` and enter their sudo password locally.",
            "If multiple handoffs are pending, `psudo` will let the user pick one before attaching.",
            "Stop after telling the user to run `psudo`; the handoff completion will arrive as a queued follow-up user turn, and the user does not need to type done.",
            `Wrapper script: ${wrapperPath}`,
            `Review preview: ${previewPath}`,
          ].join("\n"),
        }],
        details: { id, taskName, sessionName, wrapperPath, previewPath, resultPath, markerPath },
      };
    },
  });
}
