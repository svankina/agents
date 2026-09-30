---
name: running-privileged-commands
description: Use when a step needs root, sudo, or another account: psudo handoff procedure, batching, least privilege, and subagent rules.
---

# Running privileged commands

Passwordless sudo is **not** available, and agents have no terminal/askpass —
`sudo ...` fails with "a password is required". Do not ask for or handle my
sudo password in chat, and do not ask me to run `! sudo ...` myself. Use
privileged handoffs sparingly and deliberately:

1. Before asking for sudo, pause and map the likely remaining privileged
   steps. Batch related privileged operations into one reviewable
   command/script when doing so is safe, clear, and narrowly scoped.
2. Consider whether the real need is to run commands as a specific non-root
   account instead of using root. If so, prefer an explicit least-privilege
   approach such as `sudo -u <user> -- <command>`, `runuser`,
   `machinectl shell`, or a service/account-specific tool, and explain why
   that identity is needed.
3. Prepare the exact command, or for anything nontrivial write a reviewable
   script such as `/tmp/pi-sudo-<task>.sh`. Keep the scope minimal; do not
   create broad root shells or open-ended privileged sessions just to avoid
   future prompts.
4. Hand off with `psudo`. As a terminal agent, use the **blocking** form so
   the call returns when sudo exits:
   `psudo --wait --name <task> --why "<why sudo is needed>" <command> ...`
   or, for anything nontrivial,
   `psudo --wait --name <task> --why "<why>" --script /tmp/pi-sudo-<task>.sh`.
   Add `--wait-timeout SECONDS` to bound the wait.
5. Tell me to run `psudo` to attach if there is one pending handoff, or
   `psudo --list` / `psudo --attach <session>` if multiple agents have
   pending sudo requests.
6. The tmux session will show the sudo handoff review and handle local sudo
   prompting.
7. After I complete the prompt, inspect the results normally. Leave the
   session output visible for review.

**Subagents must never run sudo or psudo themselves** (they either lack the
completion listener and would hang, or would spam approval requests the user
can't trace). When a subagent needs root, it must bubble the request up to
the parent — stop and return a result stating the exact command/script and
why — so the top-level agent runs the handoff and then continues or
re-invokes the subagent. When dispatching a subagent for a task that may need
privileges, tell it explicitly: "do NOT use sudo/psudo; if a step needs root,
STOP and report exactly which command needs it so the main agent runs it."

**Docker specifically needs NO sudo here** — the user is in the `docker`
group, so `docker ...` works unprivileged. Do not tell subagents "docker
requires sudo." (Note the `docker`→`sudo docker` alias is interactive-shell
only; call the binary as `docker` / `/usr/bin/docker` in scripts.)
