# Claude Code specific

Subagent routing: use `gpt-5.6-luna` for mechanical edits, renames, focused
searches, small scripts and data collection; use `gpt-5.6-sol` for multi-file
refactors, debugging, design and sustained reasoning.

Before planning cross-limit resumption, read the Claude long-run section in
`~/src/agents/docs/machine-operations.md`. No built-in self-resume: do not
sleep/retry through a usage limit or assume an external resumer is installed.
Use existing durable task state when recovery is needed, not routine
`PROGRESS.md` files.
