# Pi Extensions

Custom [Pi](https://www.npmjs.com/package/@earendil-works/pi-coding-agent) (`pi-coding-agent`)
extensions developed for this agent setup. Each `.ts` file is a self-contained Pi
extension that registers slash commands, tools, editor behaviour, or background
hooks. Drop a file in Pi's extensions directory (or point Pi at this folder) and it
loads on startup.

Most behaviour is **off by default** and gated behind an environment variable, so
nothing here changes Pi's behaviour until you opt in.

## At a glance

| Extension | What it adds | Type |
|---|---|---|
| `agent-folder-config.ts` | Shared helpers for per-folder `agent.json` (model, provider, thinking level, fast mode) | library |
| `agent-folder-session.ts` | Applies the nearest `agent.json` to each session, restoring global defaults afterward | session hook |
| `fast-command.ts` | `/fast on\|off\|toggle\|status` — OpenAI/Codex Priority Processing fast mode | command |
| `thinking-command.ts` | `/thinking none\|low\|medium\|high\|xhigh` — set thinking level | command |
| `clear-screen-shortcut.ts` | `Ctrl+L` clears the visible TUI like a terminal, keeping the session intact | editor |
| `voice/` | Push-to-talk voice input + TTS rewrite of replies (via a Hermes Agent helper) | command |
| `wfork.ts` | `/warpfork` — fork the current Pi session into a new Warp window or split pane | command |
| `user-bash-aliases.ts` | Runs the Bash tool through your shell so `~/.bash_aliases` are available | bash hook |
| `sudo-handoff.ts` | `request_sudo_handoff` tool — runs sudo in an attached tmux session instead of asking for a password in chat | tool |
| `settings-git-autocommit.ts` | Auto-commits changes to the nearest `.pi/settings.json` | background |
| `claude-saddle.ts` | Launch and supervise Claude Code in a tmux session with a live picture-in-picture widget | tool + commands |
| `subagent-tracking.ts` | Reports subagent tool calls (single/parallel/chain) to a dispatch server | background |
| `dispatch-session-registration.ts` | Registers the Pi session with a local dispatch server | background |
| `dispatch-callback-watcher.ts` | Surfaces dispatch-server task notifications as in-conversation popups | background |
| `context-capture.ts` | Appends conversation/tool events to JSONL for debugging and analysis | background |
| `eager-skills.ts.disabled` | Experiment for eager skill loading — **disabled**, kept for reference | — |

## Model & session configuration

**`agent-folder-config.ts`** — library of helpers for a per-folder `agent.json`
(`model`, `provider`, `defaultModel`, `thinkingLevel`, `fastMode`, …). It also
snapshots and restores Pi's *global* defaults so applying a folder config never
leaks into other folders. Imported by the three extensions below.

**`agent-folder-session.ts`** — on session start (and cwd change) loads the nearest
`agent.json`, resolves the model/provider/thinking level, applies them, then restores
the global defaults Pi may have rewritten. This is what makes a folder "remember" the
model and thinking level it should run with.

**`fast-command.ts`** — `/fast on|off|toggle|status`. Toggles OpenAI/Codex
**Priority Processing** (`service_tier: "priority"`) by writing `fastMode` into the
cwd `agent.json`. Status reports whether the current model is a fast candidate.

**`thinking-command.ts`** — `/thinking none|low|medium|high|xhigh`. Sets the thinking
level and persists it to the folder config.

## Terminal & editor UX

**`clear-screen-shortcut.ts`** — rebinds `Ctrl+L` to clear the visible conversation
above the editor (like a real terminal clear) without dropping session state; old
messages return on the next reload/rebuild.

**`voice/`** — push-to-talk voice input and optional text-to-speech rewriting of
assistant replies. `index.ts` is the Pi extension; `helper.py` is a long-lived JSONL
bridge to Hermes Agent voice primitives. Registers `/voice`
and a record-key toggle (default `alt+r`).

| Env | Purpose |
|---|---|
| `PI_VOICE_PYTHON` | Python interpreter for the helper (default: `~/.hermes/hermes-agent/venv/bin/python`) |
| `PI_VOICE_RECORD_KEY` | Push-to-talk key (default `alt+r`) |
| `PI_VOICE_TTS_REWRITE_MODEL` | Model used to rewrite replies for speech |
| `HERMES_AGENT_DIR` | Hermes Agent checkout (default `~/.hermes/hermes-agent`) |

**`wfork.ts`** — `/warpfork`. Forks the current Pi session into Warp. Delivery via
`PI_WFORK_MODE`: `window` (new window, default), `pane` (xdotool split-pane on X11,
`PI_WFORK_PANE=1`), `split` (native `warp://action/split_pane` deep link), or `auto`.

## Shell & system integration

**`user-bash-aliases.ts`** — replaces Pi's Bash operations with a wrapper that sources
your shell init (default `$HOME/.bash_aliases`, `shopt -s expand_aliases`) so aliases
and functions resolve inside the Bash tool. When `PI_TRACK_TERMINAL_AGENTS=1`, it also
wraps recognized terminal-agent launches (e.g. `codex exec`) with `agent_track.py`.

| Env | Purpose |
|---|---|
| `PI_USER_BASH_SHELL` | Shell to run commands through (default `/bin/bash`) |
| `PI_USER_BASH_INIT` | File to source for aliases (default `$HOME/.bash_aliases`) |
| `PI_TRACK_TERMINAL_AGENTS` | `1` to wrap terminal-agent commands with tracking |

**`sudo-handoff.ts`** — registers the `request_sudo_handoff` tool. Instead of asking
for a sudo password in chat, it runs the command via `sudo bash -lc` inside a
user-attached tmux session and notifies the agent only when the command exits. The
user runs `psudo` locally and enters their password there.

**`settings-git-autocommit.ts`** — polls the nearest `.pi/settings.json` and auto-commits
changes (hash-based change detection). Enable with `PI_SETTINGS_GIT_AUTOCOMMIT=1`.

## Subagent & dispatch orchestration

These integrate Pi with a local **dispatch server** that tracks subagents and
terminal-launched workers. They share `SUBAGENT_TRACKER_ENABLED=1` as a master flag.

**`subagent-tracking.ts`** — observes subagent tool calls (single / parallel / chain),
and POSTs dispatch, progress, and report events to the tracker endpoint.

**`dispatch-session-registration.ts`** — registers the active Pi session with the
dispatch server (default `http://127.0.0.1:8769`) so it appears in the roster.

**`dispatch-callback-watcher.ts`** — polls a shared notification file
(default `~/.pi/agent/dispatch-notifications.jsonl`) and raises an in-conversation
popup when a tracked task reaches a significant state (done / failed / needs-review / …).

| Env | Purpose |
|---|---|
| `SUBAGENT_TRACKER_ENABLED` | Master flag for the dispatch extensions |
| `SUBAGENT_TRACKER_ENDPOINT` / `SUBAGENT_DISPATCH_ENDPOINT` | Dispatch server URL |
| `SUBAGENT_TRACKER_TOKEN` / `SUBAGENT_DISPATCH_TOKEN` | Bearer token for the server |
| `SUBAGENT_CALLBACK_EVENTS_FILE` | Notification JSONL path |
| `DISPATCH_SESSION_REGISTRATION_ENABLED` / `DISPATCH_CALLBACK_WATCHER_ENABLED` | Per-extension opt-in |

## Supervision

**`claude-saddle.ts`** — launch and supervise **Claude Code** from inside Pi. Starts
Claude in a dedicated tmux session, optionally sends an initial prompt, and shows a
live **picture-in-picture** widget of Claude's pane plus the driving log. Provides
tools and commands to send follow-up guidance, capture pane output, copy to clipboard,
list sessions, stop a session, and reload/resume Pi resources mid-run.

- Commands: `/claude-saddle-copy`, `/claude-saddle-pip`, `/claude-saddle-sessions`,
  `/agent-reload-and-resume`
- `CLAUDE_SADDLE_CMD` overrides the Claude CLI command (default `claude`).

## Diagnostics

**`context-capture.ts`** — appends conversation and tool-execution events to JSONL for
later inspection. Enable with `PI_CONTEXT_CAPTURE_ENABLED=1`; output directory via
`PI_CONTEXT_CAPTURES_DIR`.

---

> `eager-skills.ts.disabled` is an inactive experiment kept for reference; rename it to
> `.ts` to try it.
