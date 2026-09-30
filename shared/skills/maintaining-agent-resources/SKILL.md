---
name: maintaining-agent-resources
description: Use when editing OMP standing instructions (AGENTS.md), shared skills, commands, agent definitions, dock extensions, plugins, or helpers installed from ~/src/agents.
---

# Maintaining agent resources

OMP standing instructions and durable user facts live directly in
`~/src/agents/omp/AGENTS.md`, linked to `~/.omp/agent/AGENTS.md`. Edit that
source; no composition or generation step is needed. The installer does not
create a `CLAUDE.md` or `~/AGENTS.md` link.

## Where new guidance belongs

Every session pays for the global file and every essential tool definition.
Put guidance at the narrowest level that still reaches the agents that need it:

- Global `omp/AGENTS.md`: only rules that change behavior in most sessions and
  that the harness prompt does not already state. One source per rule.
- A skill in `shared/skills/`: a procedure used in some sessions. Its
  `description` is always loaded, so state the triggering situation precisely.
- A helper's `--help`: command usage. The global file names the helper once.
- A plugin `README.md`: setup, internals, and operator notes for that plugin.
- Project `AGENTS.md`: that repository's map, checked by `project-map lint`.
- Plugin and extension tools: `loadMode: "discoverable"` unless most sessions
  call the tool. A tool usable by one session must stay inactive elsewhere.

## Installing

Run `~/src/agents/bin/omp-install` (or `omp-install install`) to install links
or add new resources, then `omp-install check` to inspect drift without changes.
The default repository is derived from the executable's resolved path.
Use `--repo PATH` and `--home PATH` to select another repository or home.
Edits to already-linked sources take effect without rerunning the installer.

Installed resources:

- `shared/skills/` child directories → `~/.omp/agent/skills/`.
- `shared/commands/*.md` → `~/.omp/agent/commands/`.
- `shared/agents/*.md` → `~/.omp/agent/agents/`.
- Executable non-`.py` files in `bin/` → `~/.local/bin/`.
- `omp/dock-extensions/*.ts` → `<dock cwd>/.omp/extensions/`, for every
  directory under `~/src/docked_agents/` and each `workspace` child.
  `--docks PATH` selects another dock state root.

Shared helpers include `agent-worktree`, `agent-gui`, `agent-shot`,
`agent-display`, and `fair-run`. Prefer implementing a recurring procedure
in a command over adding more etiquette here: add an executable to `bin/`
with a `--help` and run `omp-install`.

The installer leaves correct links unchanged and installs missing links.
It may replace incorrect links pointing lexically within the repository.
Foreign files, directories, or links block installation with exit code 2,
as do missing required instruction sources. The whole plan is checked before
any changes. `check` returns 0 when clean and 1 for drift and never mutates.
It also runs `project-map lint` on the repository map and fails on errors.
Pruning only removes dangling links into the corresponding source subtree
from OMP resource directories and `~/.local/bin`; foreign links are preserved.
Inspect conflicts and resolve them explicitly before rerunning the installer.

OMP configuration, machine-wide extensions, and `~/.omp/agent/managed-skills`
are not managed; dock extensions below are the one extension exception.
Pi and Claude skills, prompts, extensions, and commands remain historical
resources, not install targets; other harness directories are untouched.

## Dock extensions

`omp/dock-extensions/` holds extensions that only Herd-docked agents get.
They are not machine-wide plugins and are not listed in `~/.omp/agent/config.yml`;
OMP discovers project extensions in the session's own cwd only, so the installer
links each file into every docked agent's working directory. Rerun `omp-install`
after adding a dock or a dock extension; `omp-install check` reports the drift.

`dock-peer-scope.ts` reads the current `HERD_PANE` metadata from the broker and
forces `peers list` to `scope=all` for `dock=bots` panes, including explicitly
requested project scope. Ordinary panes and other peers operations are unchanged.
A running session must restart before a newly linked extension loads.
