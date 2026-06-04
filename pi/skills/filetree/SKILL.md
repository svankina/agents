---
name: filetree
description: Maintain FILETREE.md, a repo-root per-file purpose index with content hashes. Use via /skill:filetree init, update, or lint when a project needs a cheap AI orientation map or a FILETREE.md drift check.
license: MIT
compatibility: Requires git and Python 3.9+. Ported for Pi from https://github.com/nekocode/filetree-skill.
disable-model-invocation: true
---

# Filetree

Pi port of `nekocode/filetree-skill`. It maintains a repository-root
`FILETREE.md`: one purpose summary per file plus an 8-character
`git hash-object` hash for drift detection.

Use this skill when the user asks to:

- initialize/generate `FILETREE.md` from scratch (`init`)
- update/sync an existing `FILETREE.md` after code changes (`update`)
- check whether `FILETREE.md` is stale without modifying files (`lint`)

Always run the helper from the target repository root, but resolve the script
path relative to this skill directory: `scripts/filetree.py`.

## Mode selection

- If the user says `init`, `generate`, `create`, or no `FILETREE.md` exists:
  follow [Initialize](#initialize).
- If the user says `update`, `sync`, or `refresh`: follow [Update](#update).
- If the user says `lint`, `check`, `verify`, or wants read-only drift output:
  follow [Lint](#lint).
- If ambiguous and `FILETREE.md` exists, prefer `update`; otherwise prefer `init`.

## Shared summary rules

One summary line, max 25 words, describing what the file is **for**: its role or
purpose, not internal implementation details.

- Good: "JWT auth middleware; parses bearer token and injects user_id into request context"
- Bad: "Defines AuthMiddleware class with __init__ and __call__ methods"
- Bad: "Handles auth"

Use present tense. Match the language of existing entries. Avoid marketing
phrases.

## UNCHANGED bias for updates

For changed files, output `"UNCHANGED"` when the old summary still describes the
file's purpose. Refactors, formatting, comments, bug fixes, and small additions
almost always keep the same purpose. In a healthy update, 80%+ of changed files
should become `UNCHANGED`.

Only write a new summary when a major feature meaningfully expands purpose, a
central concern was removed, or the file was substantially rewritten for a
different goal. When in doubt, choose `UNCHANGED`.

## Initialize

1. Resolve the target repo root:

   ```bash
   git rev-parse --show-toplevel
   ```

   Run all subsequent shell commands from that directory.

2. If `FILETREE.md` already exists, ask the user whether to overwrite it. If
   they decline, stop and suggest `update` instead.

3. Wire existing root guidance files before generating the todo list so their
   post-wire hashes enter the manifest. For each of `CLAUDE.md` and `AGENTS.md`
   in the repo root:

   - If absent, skip it; do not create it.
   - If it already contains a real `FILETREE.md` reference, skip it.
   - Otherwise read it fully, propose a style-matched bullet or short section
     saying to read `./FILETREE.md` before broad `ls` / `grep` for the per-file
     purpose index, and ask for confirmation before editing.
   - Record each outcome: wired, absent, already-wired, or declined.

4. Generate the work plan:

   ```bash
   python /absolute/path/to/this/skill/scripts/filetree.py todo
   ```

5. For every `added` path in the JSON, read the file and write one summary using
   the shared summary rules. Do not summarize skipped binary/lock files; the
   script already filters them. If `stats.need_llm > 20`, parallelize in batches
   of about 10 files and instruct each worker to apply this skill's summary
   rules.

6. Apply the decisions by piping JSON to stdin:

   ```bash
   python /absolute/path/to/this/skill/scripts/filetree.py apply
   ```

   Payload shape:

   ```json
   {
     "updates": [{"path": "...", "hash": "...", "summary": "..."}],
     "removals": [],
     "renames": []
   }
   ```

7. Report total files indexed, skipped/wired guidance outcomes, and elapsed time.
   Do not commit `FILETREE.md`; the user reviews and commits it.

## Update

1. Resolve the target repo root and run from there.
2. If `FILETREE.md` does not exist, stop and suggest `init`.
3. Generate the work plan:

   ```bash
   python /absolute/path/to/this/skill/scripts/filetree.py todo
   ```

4. Process the JSON:

   - `added`: read the file and write a fresh summary.
   - `changed`: prefer `git diff HEAD -- <path>` over reading the full file;
     decide `UNCHANGED` unless the file purpose changed.
   - `removed` and `renamed`: no LLM work; pass them through to apply.

5. Apply with this payload shape:

   ```json
   {
     "updates": [{"path": "...", "hash": "...", "summary": "..."}],
     "removals": ["path1"],
     "renames": [{"old_path": "...", "new_path": "..."}]
   }
   ```

6. Report counts: added, removed, renamed, summaries updated, and hashes
   refreshed through `UNCHANGED`. Do not commit.

## Lint

Run the drift check only; do not modify files and do not call subagents.

```bash
python /absolute/path/to/this/skill/scripts/filetree.py lint
```

The script prints JSON and exits 1 when drift exists. Summarize the JSON for the
user by category (`added`, `changed`, `removed`, `renamed`) with counts and paths
(truncate long lists). If any drift is present, suggest `update`.
