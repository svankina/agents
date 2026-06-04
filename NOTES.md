# Notes for agents

Use this file for durable facts and investigation summaries about this repository. Keep standing instructions elsewhere.

## 2026-06-04 Pi skills inventory

Looked through `~/src/pagent` for developed Pi skills. Active project-local skills are under `~/src/pagent/.pi/skills/`: `browser-harness`, `claude-design`, `terminal-fix`, `filetree`, `parallel-task-planner`, `claude-saddle`, `dogfood`, `knowledge-map`, and `pi-init`.

Skills created locally by our commits: `browser-harness`, `claude-design`, `claude-saddle`, `dogfood`, `knowledge-map`, `parallel-task-planner`, `pi-init`, and `terminal-fix`. `filetree` is a Pi port/adaptation of `nekocode/filetree-skill`.

Additional skill surfaces in the same checkout include `extensions/browser-harness/SKILL.md` (`browser` skill for CDP/browser-harness workflows) and `extensions/pisaddle/.pi/skills/claude-saddle/SKILL.md` (packaged mirror of `claude-saddle`). Browser-harness also has non-Pi interaction playbooks under `extensions/browser-harness/interaction-skills/` and opt-in domain playbooks under `extensions/browser-harness/agent-workspace/domain-skills/`.

## 2026-06-04 `/warpfork` Warp pane default

`pi/extensions/wfork.ts` now treats `PI_WFORK_MODE=auto` as pane-first when invoked from Warp and `xdotool` is present, falling back to a new Warp window outside Warp. Warp detection accepts `TERM_PROGRAM=WarpTerminal`, `WARP_TERMINAL_SESSION_UUID`, `WARP_IS_LOCAL_SHELL_SESSION`, or `WARP_SESSION_ID`. Force the old new-window behavior with `PI_WFORK_MODE=window`.
