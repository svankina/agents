---
name: testing-with-tester
description: Use for independent verification of a web app, CLI, TUI, or desktop app before reporting it done, instead of asking the user to test.
---

# Testing with the tester harness

When independent testing is useful — a web app, CLI, TUI, or desktop app,
especially before reporting that a feature is done — hand off to the local
tester harness instead of asking the user to test. It runs in an isolated
environment (own Xvfb display, HOME, TMPDIR, browser profile, logs):

```bash
~/src/tester/bin/tester-run --repo "$PWD" --kind web --url http://127.0.0.1:3000 --task "Test the login flow"

printf '%s\n' '{"schema_version":"tester.v1","target":{"type":"cli","command":"python3","args":["--version"],"cwd":"."},"objective":"Verify the CLI starts","assertions":["Output contains Python"]}' \
  | ~/src/tester/bin/tester-run -
```

`tester-run` prints exactly one JSON result to stdout (progress goes to
stderr) — parse it, and prefer sharing its `environment.run_viewer_url`
(player controls, annotated screenshot, artifact links) over raw artifact
paths under `.tester/runs/<run-id>/`. The full request schema (`target.type`:
`web_url|cli|tui|desktop`, assertions, timeouts) and exit codes are documented
in `~/src/tester`; invalid requests fail fast with a structured error.

Runs default to a per-run detached git worktree so tests never mutate the
caller's checkout; dirty repos block by default — commit first, or set
`worktree.on_dirty` to `head`/`disable` deliberately. For deterministic
GUI/TUI demos prefer `bin/tester-demo` over an exploratory tester agent. For
direct/manual TUI tests use `bin/tester-env tmux-new/tmux-type/tmux-capture`
inside the isolated tmux server, and always finish with `tester-env cleanup`
(`tester-run` cleans up after itself).

Never include unrelated changes merely to satisfy a tester's clean-checkout
requirement.
