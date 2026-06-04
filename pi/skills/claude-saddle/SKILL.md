---
name: claude-saddle
description: Launch and supervise Claude Code in a tmux session, give it the user's task, monitor its output, and guide it interactively to completion. Use when the user asks to use claude-saddle, saddle Claude, delegate to Claude Code through tmux, or have Claude perform a coding task under this agent's supervision.
compatibility: Requires tmux and the Claude Code CLI (`claude`) on PATH, or set CLAUDE_SADDLE_CMD / pass --cmd.
---

# Claude Saddle

Use this skill when the user wants this agent to run Claude Code as a supervised terminal copilot. You are the rider: start Claude in tmux, give it the task, watch what it does, intervene when it drifts or asks questions, and verify the final result yourself.

## Core contract

- Launch Claude in a dedicated tmux session, not as a background one-shot command.
- Drive the session with `tmux send-keys` / the helper script rather than asking the user to interact with Claude.
- Give Claude a concrete task prompt with scope, success criteria, constraints, and validation expectations.
- Keep supervising: capture the pane, read Claude's state, answer prompts, redirect drift, and stop or continue as needed.
- Do not hand off decision authority. Claude may propose or edit, but this agent remains responsible for approving choices, running final checks, and reporting to the user.
- If Claude asks for secrets, credentials, payment, or unapproved sudo/product decisions, pause and ask the user instead of supplying or guessing.

## Structured tools

Prefer the Pi extension tools from `.pi/extensions/claude-saddle.ts`; this repository force-includes that extension from `.pi/settings.json` so the tools should be exposed by default after Pi starts or `/reload` runs:

- `claude_saddle_start` — launch Claude Code in tmux and optionally send the initial prompt.
- `claude_saddle_send` — paste follow-up guidance or answers into the running Claude session.
- `claude_saddle_capture` — read recent tmux pane output.
- `claude_saddle_stop` — stop the tmux session, optionally capturing final output first.
- `claude_saddle_list` — list active `claude-saddle` tmux sessions.
- `claude_saddle_copy` — copy recent saddle pane text to the clipboard; users can also run `/claude-saddle-copy [session] [lines]`.

`claude_saddle_start` opens a live color picture-in-picture overlay by default in interactive Pi: a small non-capturing pane anchored at the middle-right of the TUI, showing the recent Claude tmux pane plus a short log of the parent agent's driving actions. The active pane is restored automatically after `/reload` if its tmux session still exists. Set `pictureInPicture: false` only when the user does not want the live view. The pane can be reopened with `/claude-saddle-pip <session>`, hidden with `/claude-saddle-pip stop`, scrolled with the mouse wheel, and copied from by dragging a selection inside the PiP; releasing the mouse copies selected text. Command fallbacks are `/claude-saddle-pip up`, `/claude-saddle-pip down`, `/claude-saddle-pip top`, or `/claude-saddle-pip bottom`.

Use a session name like `claude-saddle-<short-task>`. By default Claude is launched as `claude --dangerously-skip-permissions` so the saddle session does not stop for Claude Code permission prompts. If `claude` is not on PATH, pass `claudeCommand` to `claude_saddle_start` or set `CLAUDE_SADDLE_CMD`.

## Helper script fallback

If the extension tools are unavailable, first tell the user the Pi extension did not load and suggest `/reload` for future turns. Then use the bundled helper at `scripts/claude-saddle` relative to this skill directory. Resolve it to an absolute path before use:

```bash
# $PISADDLE_DIR is the pisaddle checkout (see .env.example); defaults to ~/src/pisaddle
"$PISADDLE_DIR"/.pi/skills/claude-saddle/scripts/claude-saddle --help
```

It supports `start`, `send`, `capture`, `attach`, and `stop` subcommands.

## Workflow

1. **Prepare the task prompt**
   - Write a concise prompt to `/tmp/claude-saddle-<task>.md`.
   - Include: goal, repository/path, allowed scope, constraints, validation commands, expected summary, and stop rules.
   - Tell Claude to ask before destructive actions, sudo, secrets, broad refactors, or product/API decisions not already approved.

2. **Start the tmux session**
   - Use a stable, descriptive session name such as `claude-saddle-auth-fix`.
   - Start in the relevant working directory.
   - Send the prompt with `claude_saddle_start`:

   ```json
   {
     "taskName": "auth fix",
     "sessionName": "claude-saddle-auth-fix",
     "cwd": "/path/to/repo",
     "promptFile": "/tmp/claude-saddle-auth-fix.md",
     "pictureInPicture": true
   }
   ```

3. **Monitor and guide**
   - Repeatedly capture output with:

   ```json
   {
     "sessionName": "claude-saddle-<task>",
     "lines": 240
   }
   ```

   - If Claude is waiting for permission or input, answer explicitly with `claude_saddle_send`.
   - If Claude drifts, redirect it to the approved scope.
   - If Claude reports a failure, ask it to inspect or run the next focused check; do not assume success.

4. **Verify independently**
   - Inspect the diff and touched files yourself.
   - Run the agreed validation commands when feasible.
   - Ask Claude for a final handoff only after it has completed its own checks.

5. **Close out**
   - Stop the tmux session when no longer needed, unless the user asks to keep it open for review.
   - Summarize to the user: changed files, what Claude did, what you verified, failures or risks, and any remaining decisions.

## Prompt template

```markdown
You are being supervised from a tmux session by the parent Pi agent.

Goal:
- <specific task>

Working directory:
- <path>

Approved scope:
- <files/features in scope>

Constraints:
- Do not use sudo, secrets, destructive git commands, or broad refactors unless you ask first.
- Preserve existing behavior outside the approved scope.
- If you hit an unapproved product/API/architecture decision, stop and ask.

Validation:
- Run: <commands>
- If a command cannot run, explain why and run the next-best focused check.

Handoff required:
- Files changed
- Summary of implementation
- Commands run and results
- Remaining risks or TODOs
- Any decisions needing parent/user approval
```

## Reload workflow

When edits to this extension or related Pi resources need a reload, prefer the `reload_and_resume` tool instead of asking the user to run `/reload`. Provide a concise reason and a concrete `resumeMessage` describing the next action. The extension persists the resume intent, queues `/agent-reload-and-resume`, restores the active PiP if possible, and sends the resume message after reload. Avoid reload loops: only call it when a reload is actually needed.

## Notes

- Prefer file-based prompts and tmux paste buffers over shell-quoted long prompts.
- Use distinct session names for concurrent saddles.
- Do not run multiple write-capable agents against the same dirty worktree unless the user explicitly accepts that risk.
- Claude's output is advisory until this agent verifies it.
