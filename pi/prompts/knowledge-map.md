---
description: 'Build or refresh a durable Markdown knowledge map for a repo, project, or Obsidian vault'
argument-hint: "[target and scope]"
---
Use the `knowledge-map` skill for this task.

Task payload:
$ARGUMENTS

Create or refresh a practical knowledge map that is useful to both humans and future agents.

Defaults unless the user says otherwise:
- For repositories, keep human-facing maps in `docs/knowledge/` and agent-facing maps in `librarian/.ai/knowledge/`.
- Prefer plain Markdown links that also work in Obsidian.
- Start small: index, repo/topic map, workflows, decisions, and open questions.
- Cite source paths for factual claims.
- Mark unknowns explicitly instead of inventing details.

Deliver:
```markdown
Summary: <what map was created or refreshed>
Sources inspected: <paths>
Files changed: <paths>
Validation: <checks run>
Next: <recommended follow-up>
```
