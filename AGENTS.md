# Agent resources

This repository installs OMP instructions, skills, commands, agents, and helpers,
and preserves historical Pi and Claude resources.
Remote: `github.com/svankina/agents`. It is not an installable package.

## Project map

### Architecture

`bin/omp-install` links the direct `omp/AGENTS.md` into `~/.omp/agent/AGENTS.md`
and `home/AGENTS.md` into `~/AGENTS.md`. It links shared skills, commands, and
agent definitions into OMP, and executable helpers into `~/.local/bin`.
It also links `omp/dock-extensions/*.ts` into each Herd-docked agent's working
directory under `~/src/docked_agents/`, the only per-session install target.
Source edits take effect through links without generation; run the installer
for added resources. No other harness, OMP configuration, machine-wide
extension, or `managed-skills` is managed, and no `CLAUDE.md` alias is installed.

### Where things live

- `bin/omp-install`: standard-library Python resource installer and read-only
  `check` command. `tests/`: isolated installer behavior checks.
- `docs/agent-workflows.md`: on-demand command procedures and source maintenance.
  `docs/machine-operations.md`: task-specific machine configuration.
- `pi/extensions/README.md`: historical extension catalog and activation flags;
  read before changing an extension. `pi/prompts/`, `pi/skills/`, and
  `claude/commands/` are also preserved historical resources, not install targets.
- `omp/AGENTS.md`: standing instructions and user facts. `home/AGENTS.md`:
  home project context. `shared/skills/`, `shared/commands/`, `shared/agents/`:
  resources installed into OMP. `omp/extensions/` is configured separately;
  `omp/dock-extensions/` is installed per docked-agent cwd, never machine-wide.
- `bin/project-map`: project instruction format checks. `shared/commands/wq.md`:
  wrap-up procedure. `scripts/warpfork/`: terminal session forking.

### Invariants & gotchas

- This repository is public. Use home-relative paths and environment variables;
  keep secrets and machine-specific endpoints in the ignored `.env`.
- Executable non-`.py` files in `bin/` are installed by `omp-install`.
- Installation preflights the whole plan. Foreign destination conflicts block
  without partial changes; `check` reports drift without mutating.
- `.env`, `agent.json`, `*.disabled`, and `*.bak` are ignored. Do not add the
  ignored `pi/skills/browser-harness/` external symlink mirror.
- Every extension declares a one-line summary: `export const description` in
  `omp/extensions/*.ts`, or `description` in a plugin package.json. The OMP
  startup panel lists it next to the name, falling back to the first line of
  the file's leading doc comment.
- Dock extensions must stay dock-only: OMP discovers project extensions in the
  session cwd alone, so an extension for docked agents belongs in
  `omp/dock-extensions/`, not in a linked plugin or `config.yml`.

### Decisions

OMP policies and user facts have one direct source. Historical Pi and Claude
resources remain available but are not installed. Detailed procedures stay
outside automatically loaded context. Historical plans are not current contracts.
Current behavior belongs in code and focused documentation, not catch-all notes.
