# Pi resources

Custom resources for [Pi](https://www.npmjs.com/package/@earendil-works/pi-coding-agent)
(`pi-coding-agent`): extensions, agent-variant prompts, and project-local skills.

## Layout

- **[`extensions/`](extensions/)** — Pi extensions that register slash commands, tools,
  editor behaviour, or background hooks. Each `.ts` file is self-contained and most are
  off by default behind an env var. See [`extensions/README.md`](extensions/README.md)
  for the full catalog.
- **`prompts/`** — reusable agent-variant slash prompts. Each `.md` file has YAML
  frontmatter (`description`, `argument-hint`) and a body that consumes `$ARGUMENTS`;
  drop it in Pi's prompts directory to expose it as `/<name>`.
- **`skills/`** — project-local Pi skills. Each skill is a directory with a `SKILL.md`
  plus any supporting `scripts/`, `references/`, or `templates/`. The `.ignore` file is
  a discovery allowlist for explicitly slash-invoked skills.

## Configuration

Machine-specific paths and URLs are not hardcoded here. Copy the repo-root
[`.env.example`](../.env.example) to `.env` (gitignored) and fill in values for your
machine; prompts and skills reference them as `$VARS`.
