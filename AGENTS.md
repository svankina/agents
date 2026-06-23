# Agents Agent Notes

Version control for custom agent resources — Pi extensions/prompts/skills and Claude Code
commands — kept outside the working Pi resource checkout (`~/src/pagent`). Remote
`github.com/svankina/agents`. Not an installable package: files here are symlinked into the
live agent dirs, or copied into `~/src/pagent`.

## Layout
- `pi/extensions/` — Pi (`@earendil-works/pi-coding-agent`) extensions, one self-contained
  `.ts` per file. **Full catalog + env vars in `pi/extensions/README.md`** — read it before
  touching any extension. Most behaviour is **off by default**, gated behind an env var.
- `pi/prompts/` — agent-variant slash prompts (`.md` with YAML frontmatter
  `description`/`argument-hint`, body consumes `$ARGUMENTS`). One file → `/<name>`.
- `pi/skills/` — project-local Pi skills; each is a dir with `SKILL.md` (+ optional
  `scripts/`, `references/`, `templates/`). `pi/skills/.ignore` is a discovery allowlist for
  slash-invoked skills.
- `claude/commands/` — Claude Code slash commands (`.md`), symlinked into `~/.claude/commands/`.
- `scripts/warpfork/warpfork` — bash script to fork a Claude Code session into Warp; installed
  at `~/.local/bin/warpfork` (symlink back to this repo).

## Config (machine-specific values)
- Paths/URLs are **not hardcoded**. Copy `.env.example` → `.env` (gitignored) and fill in;
  prompts/skills reference them as `$VARS`. Keys: `PI_PACKAGE_DIR`, `PISADDLE_DIR`,
  `CLAUDE_DESIGN_*`, `CONTEXT_SURGEON_URL`.

## Conventions
- Install pattern is symlink, not copy: e.g. `ln -s ~/src/agents/claude/commands/X.md ~/.claude/commands/X.md`,
  warpfork → `~/.local/bin/`. Claude Code / Pi auto-discover the target dirs.
- Pi extensions: drop the `.ts` in Pi's extensions dir (or point Pi at the folder); it loads
  on startup. Behaviour stays inert until you set its opt-in env var.
- `NOTES.md` holds **durable investigation facts** (dated entries), not standing instructions.
  Append findings there; keep run-time rules in the extensions/prompts themselves.

## Gotchas
- Active development branch here is `shared-report-server` (not `master`).
- `pi/skills/browser-harness/` is **gitignored** — it's a symlink mirror into an external
  `~/src/browser-harness` checkout packaged as a skill in `~/src/pagent`. Don't expect its
  contents tracked here.
- `.env`, `agent.json`, `*.disabled`, `*.bak` are gitignored. `eager-skills.ts.disabled` is a
  kept-but-inactive experiment.
- Several extensions integrate with **local services**: a dispatch server (`subagent-tracking`,
  `dispatch-*`), a `limitsd` quota service (`claude-ui`), and herdr (`herdr-agent-state.ts`).
  These no-op unless their env flags are set.
- The canonical/working Pi resource checkout is `~/src/pagent` (`.pi/skills/*/SKILL.md`); this
  repo preserves a curated subset.

## Pointers
- `pi/extensions/README.md` — every extension, its trigger/env var, and behaviour.
- `pi/README.md`, `claude/README.md`, `scripts/warpfork/README.md` — per-area setup.
- `NOTES.md` — dated facts (Codex usage headers, claude-ui quota footer, serving-reports, …).

## Hard-won notes (from past sessions)
- **This repo is PUBLIC** (`github.com/svankina/agents`). Before committing, scrub machine-specific
  identifiers: the tailnet hostname, `svankina.com`, and absolute paths — turn `/home/svankina/...` into
  `~/`/`$HOME`-derived forms, or move doc/URL values into the gitignored `.env` (referenced as `$VARS`).
  The bare username `svankina` is fine (public repo owner). Real secrets stay in env vars, never committed.
- **Prompt frontmatter YAML gotcha:** in single-quoted YAML strings apostrophes must be doubled (`user''s`);
  a literal `don't` terminates the string early and breaks the frontmatter (bit `pi/prompts/oracle.md`).
  Validate before committing: `python3 -c "import yaml,sys; yaml.safe_load(open(sys.argv[1]).read().split('---')[1])" <file>`.
- `gh` (GitHub CLI) is **not installed** on this machine — don't rely on it to check repo visibility/state.
- `pi/skills/browser-harness/` holds **absolute symlinks** into `/home/svankina/src/browser-harness/`;
  it's gitignored because committing them would both break on other machines and leak the path. Never
  `git add` it.
