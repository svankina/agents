---
name: knowledge-map
description: Build and maintain durable Markdown knowledge maps for repositories or personal projects. Use when asked to create llmwiki-style repo maps, Obsidian-compatible notes, architecture/topic indexes, backlinks, decision records, or agent-friendly documentation that stays close to the source.
---

# Knowledge Map

Use this skill to create practical, durable knowledge maps: small Markdown indexes that humans can browse in Obsidian and agents can reliably retrieve.

## Principles

- Keep source-of-truth maps close to the thing they describe.
- Prefer plain Markdown links over tool-specific syntax; add Obsidian `[[wikilinks]]` only when the target knowledgebase already uses them.
- Separate verified facts from inferences and open questions.
- Optimize for freshness and retrieval, not graph aesthetics.
- Do not create large generated inventories unless the user asks; stale maps are worse than small accurate maps.

## Default layouts

For a software repository, prefer:

```text
docs/knowledge/
  index.md
  architecture.md
  decisions/
    YYYY-MM-DD-short-title.md
librarian/.ai/knowledge/
  repo-map.md
  workflows.md
  open-questions.md
```

For a personal/project Obsidian vault, prefer:

```text
Knowledge Maps/
  Home.md
  Projects/
    <project>.md
  People/
  Topics/
  Decisions/
```

If the repo already has docs, ADRs, or notes, extend the existing structure instead of creating a parallel one.

## Workflow

1. **Scope** — identify audience, target directory, and whether the map is human-facing, agent-facing, or both.
2. **Inventory** — inspect only relevant files first: `README*`, `AGENTS.md`, docs indexes, package/build files, and obvious source directories.
3. **Choose layout** — use the default repository layout unless an existing convention is present.
4. **Create small maps** — start with index, module/topic summaries, workflows, decisions, and open questions.
5. **Preserve provenance** — cite paths for every repo claim and date externally sourced notes.
6. **Validate** — run link/path checks where practical; otherwise manually verify referenced paths exist.
7. **Report** — summarize created maps, sources inspected, validation, and recommended next pass.

## File templates

### Human-facing index

```markdown
# Knowledge Map

Purpose: <what this map helps with>
Audience: <humans, agents, or both>
Last reviewed: YYYY-MM-DD

## Start here

- [Architecture](architecture.md) — system shape and major concepts.
- [Decisions](decisions/) — durable decisions and tradeoffs.
- [Agent repo map](../../../../librarian/.ai/knowledge/repo-map.md) — concise map for coding agents.

## Key areas

- `<path>` — <what lives there and when to edit it>.

## Workflows

- <workflow> — <entry point docs or commands>.

## Open questions

- <unknown or stale area needing verification>.
```

### Agent-facing repo map

```markdown
# Agent Repo Map

Last reviewed: YYYY-MM-DD

## What this repo is

<1-3 sentences grounded in repo evidence.>

## Source of truth

- `<path>` — <authoritative for...>

## Important paths

- `<path>` — <purpose>.

## Common tasks

- <task>: <files/commands to inspect first>.

## Conventions

- <naming/link/style/build/test convention>.

## Open questions

- <unknowns, stale areas, or facts needing confirmation>.
```

### Decision record

```markdown
# YYYY-MM-DD: <decision title>

Status: proposed | accepted | superseded
Date: YYYY-MM-DD

## Context

<What forced the decision?>

## Decision

<What was decided?>

## Consequences

- Positive: <benefit>
- Negative: <cost/tradeoff>
- Follow-up: <work to revisit>

## Sources

- `<path>` or <conversation/source>
```

## When using Obsidian

- Keep files valid Markdown for Git and agents.
- Use frontmatter only if the vault already uses it.
- Tags should be sparse and stable, e.g. `#project`, `#decision`, `#reference`.
- Prefer one durable note over many tiny low-signal notes.

## When using llmwiki-style generation

- Treat generated summaries as drafts.
- Require a `Last reviewed` line and source paths.
- Keep generated maps under `librarian/.ai/knowledge/` or another clearly agent-facing directory.
- Do not overwrite hand-written docs without showing a diff or preserving content.
