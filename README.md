# Agents

This repository tracks custom agent work, including local Pi skills, prompts, extensions, and related workflow changes that should be preserved outside the working Pi resource checkout.

## Repository layout

- `pi/extensions/` — Pi coding-agent extensions (slash commands, tools, hooks). See [`pi/extensions/README.md`](pi/extensions/README.md).
- `pi/prompts/` — reusable agent-variant slash prompts.
- `pi/skills/` — project-local Pi skills (each a `SKILL.md` plus any scripts/templates).
- `omp/extensions/` — standalone OMP extensions; `omp/lib/` contains their shared implementations.

## Configuration

Machine-specific paths and URLs are not hardcoded. Copy [`.env.example`](.env.example) to `.env` (gitignored) and fill in values for your machine; prompts and skills reference these as `$VARS`.

## Default context

All four agents use `shared/AGENTS.md` + `shared/USER.md` + their
`<agent>/local.md`. Detailed procedures live in
[`docs/agent-workflows.md`](docs/agent-workflows.md) and
[`docs/machine-operations.md`](docs/machine-operations.md), not in every prompt.

Run `bin/agents-sync sync` after editing sources, then `bin/agents-sync check`.
Generated text has no maintenance banner. The tool records output hashes in
`~/.local/state/agents-sync/generated.json`; manual edits block replacement.
For migration from legacy generated files, inspect `bin/agents-sync diff`,
then explicitly run `bin/agents-sync sync --force`.

## Herd question answers

`omp/extensions/herd-questions.ts` provides the `ask` tool through OMP's public
extension API. It supports terminal selection and direct answers from Herd's
Android app. It does not patch or replace the OMP executable.

Add `~/src/agents/omp/extensions` to the `extensions` list in OMP's config.
The workstation already uses this directory. New processes load the extension;
existing sessions are not restarted or modified.

The plugin creates a private same-user Unix socket under
`$XDG_RUNTIME_DIR/omp-questions`, or `/tmp/omp-questions-<UID>`.
Herd binds answers to the exact process, transcript, tool call, and request.
Single-choice, multiple-choice, and custom answers are supported.
Expired and duplicate replies are rejected. Normal terminal selection remains
available if the socket cannot start.

The plugin uses the configured `ask.timeout`. Public extension APIs do not
expose plan-mode state, so plan mode does not disable that timeout.
Set `ask.timeout` to `0` to require an explicit answer in every mode.
It does not use OMP's private speech vocalizer.

The same socket exposes `GET /models` and `POST /model` for the interactive
OMP session only. The catalog comes from `ctx.models.list()` and identifies
models by both provider and id. A switch requires the exact absolute session
file reference, an idle session with no queued messages or pending questions,
and available authentication. Competing switches, stale references and busy
sessions receive HTTP 409; unavailable models receive 400, and unavailable
control/authentication receives 503. Success is confirmed against the live
session model after the public `pi.setModel()` call.

The bridge rechecks session identity and idle state around asynchronous work.
OMP's public setter also performs asynchronous authentication internally and
offers no atomic idle/session guard: a terminal action during that internal
await can still race the mutation. A detected race returns an error without
retrying or rolling back against a potentially different session. Source
changes take effect in newly launched OMP processes, not already-loaded
extension instances; no generated instruction files or OMP core files need
editing.

## Source checkouts

- Primary local Pi resource checkout: `~/src/pagent`
- Active project-local Pi skills there: `~/src/pagent/.pi/skills/*/SKILL.md`
- Packaged browser-harness skill: `~/src/pagent/extensions/browser-harness/SKILL.md`
- Packaged pisaddle skill mirror: `~/src/pagent/extensions/pisaddle/.pi/skills/claude-saddle/SKILL.md`
