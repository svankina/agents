# Agent resources

This repository manages shared agent instructions, skills, commands, and Pi
extensions. Remote: `github.com/svankina/agents`. It is not an installable package.

## Project map

### Architecture

`bin/agents-sync` composes each global instruction file from `shared/AGENTS.md`,
`shared/USER.md`, and `<agent>/local.md`. All four agents use the shared base.
The generator supports an explicit per-agent fork, but none is currently used.
Generated-file ownership is tracked outside prompt content by the sync tool.
Skills, commands, and executable helpers are linked into their live locations.

### Where things live

- `bin/agents_sync.py`: composition, ownership checks, links, and configuration.
  `tests/`: isolated generator and sync behavior checks.
- `docs/agent-workflows.md`: on-demand command procedures and source maintenance.
  `docs/machine-operations.md`: task-specific machine configuration.
- `pi/extensions/README.md`: extension catalog and activation flags; read before
  changing an extension. Most extensions are opt-in. `pi/prompts/` contains
  slash prompts; `pi/skills/` contains curated Pi resources.
- `shared/skills/`, `shared/commands/`, `shared/agents/`: shared resources.
  `claude/local.md`, `codex/local.md`, `pi/local.md`, `omp/local.md`: agent deltas.
- `bin/project-map`: project instruction format checks. `shared/commands/wq.md`:
  wrap-up procedure. `scripts/warpfork/`: terminal session forking.

### Invariants & gotchas

- This repository is public. Use home-relative paths and environment variables;
  keep secrets and machine-specific endpoints in the ignored `.env`.
- Executable non-`.py` files in `bin/` are installed by `agents-sync`.
- `.env`, `agent.json`, `*.disabled`, and `*.bak` are ignored. Do not add the
  ignored `pi/skills/browser-harness/` external symlink mirror.

### Decisions

Shared policies have one source. Agent-specific behavior belongs in local
deltas. Detailed procedures stay outside automatically loaded context.
Current behavior belongs in code and focused documentation, not catch-all notes.
