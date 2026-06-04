# Agents

This repository tracks custom agent work, including local Pi skills, prompts, extensions, and related workflow changes that should be preserved outside the working Pi resource checkout.

## Repository layout

- `pi/extensions/` — Pi coding-agent extensions (slash commands, tools, hooks). See [`pi/extensions/README.md`](pi/extensions/README.md).
- `pi/prompts/` — reusable agent-variant slash prompts.
- `pi/skills/` — project-local Pi skills (each a `SKILL.md` plus any scripts/templates).

## Configuration

Machine-specific paths and URLs are not hardcoded. Copy [`.env.example`](.env.example) to `.env` (gitignored) and fill in values for your machine; prompts and skills reference these as `$VARS`.

## Source checkouts

- Primary local Pi resource checkout: `~/src/pagent`
- Active project-local Pi skills there: `~/src/pagent/.pi/skills/*/SKILL.md`
- Packaged browser-harness skill: `~/src/pagent/extensions/browser-harness/SKILL.md`
- Packaged pisaddle skill mirror: `~/src/pagent/extensions/pisaddle/.pi/skills/claude-saddle/SKILL.md`
