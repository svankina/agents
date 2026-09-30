# Agent resources

This repository installs OMP instructions, skills, commands, agents, and helpers,
and preserves historical Pi and Claude resources.
Remote: `github.com/svankina/agents`. It is not an installable package.

## Project map

### Architecture

`bin/omp-install` links the direct `omp/AGENTS.md` into `~/.omp/agent/AGENTS.md`.
It links shared skills, commands, and agent definitions into OMP, and
executable helpers into `~/.local/bin`.
It also links `omp/dock-extensions/*.ts` into each Herd-docked agent's working
directory under `~/src/docked_agents/`, the only per-session install target.
Source edits take effect through links without generation; run the installer
for added resources. No other harness, OMP configuration, machine-wide
extension, or `managed-skills` is managed, and no `CLAUDE.md` alias is installed.

### Where things live

- `bin/omp-install`: standard-library Python resource installer and read-only
  `check` command. `tests/`: isolated installer behavior checks.
- `shared/skills/maintaining-agent-resources/`: where new guidance belongs,
  installer and dock-extension procedure. Other procedures are skills too.
- `omp/plugins/*/README.md`: plugin setup and operation.
- `pi/extensions/README.md`: historical extension catalog and activation flags;
  read before changing an extension. `pi/prompts/`, `pi/skills/`, and
  `claude/commands/` are also preserved historical resources, not install targets.
- `omp/AGENTS.md`: standing instructions and user facts, under a line budget.
  `shared/skills/`, `shared/commands/`, `shared/agents/`: resources installed
  into OMP. `omp/extensions/` is configured separately.
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
- OMP's shared fuzzy matcher (`ui.select`, `/model`) cannot match cross-word
  abbreviations such as `op55` → `claude-opus-5-5`. Model pickers here filter
  with `omp/lib/model-match.ts` in a `ui.custom` component instead.
- Tests that import `@oh-my-pi/*` values need `node_modules/@oh-my-pi` linked
  to `~/.bun/install/global/node_modules/@oh-my-pi`; the repo has no manifest.

### Decisions

OMP policies and user facts have one direct source. Detailed procedures stay
outside automatically loaded context. Historical plans are not current contracts.
