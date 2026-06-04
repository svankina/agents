# Pi Skills Developed in `~/src/pagent`

Last reviewed: 2026-06-04

This inventory records the Pi skills and closely related skill surfaces found in `~/src/pagent`, so they can be tracked from this `agents` repository.

## Skills we created locally

These skills were added to the local `pagent` checkout by our commits and appear to be custom/local agent workflows rather than straight upstream skill imports.

| Skill | Source path | First local commit | Purpose |
|---|---|---|---|
| `browser-harness` / `browser` | `.pi/skills/browser-harness/SKILL.md` symlink; packaged implementation at `extensions/browser-harness/SKILL.md` | `8ebaba0` — `Add browser harness skill links` | CDP browser-control workflow with browser-harness usage rules, remote profiles, screenshots-first interaction, and reusable interaction playbooks. |
| `claude-design` | `.pi/skills/claude-design/SKILL.md` | `41baf2d` — `Add Claude Design workflow skill` | Prepare Claude Design/browser-capture handoffs, consume design exports, implement against existing app architecture, and audit visual results. |
| `claude-saddle` | `.pi/skills/claude-saddle/SKILL.md` | `3e9dd72` — `Add Claude saddle supervision skill` | Supervise Claude Code in a dedicated tmux session with Pi tools, live PiP, guidance, and independent verification. |
| `dogfood` | `.pi/skills/dogfood/SKILL.md` | `00dbf7e` — `Add dogfood QA skill` | Systematic exploratory QA workflow for web apps using browser tools, evidence screenshots, and structured bug reports. |
| `knowledge-map` | `.pi/skills/knowledge-map/SKILL.md` | `9fbcc0a` — `Add project pi prompts and knowledge-map skill` | Build durable Markdown/Obsidian-friendly knowledge maps, repo maps, workflow notes, and decision records. |
| `parallel-task-planner` | `.pi/skills/parallel-task-planner/SKILL.md` | `c2a1b72` — `Add split planning skill` | Produce dependency-aware parallel plans and subagent/dispatch-server assignments for large work. |
| `pi-init` | `.pi/skills/pi-init/SKILL.md` | `f5a4533` — `Add pi init skill` | Scaffold project-local Pi slash-prompt agent variants and optional backing skills, including Mattermost bot runtime setup. |
| `terminal-fix` | `.pi/skills/terminal-fix/SKILL.md` | `4232636` — `Add terminal fix skill` | Document and invoke the local `fix` terminal-command correction workflow backed by Ollama `qwen2.5:3b`. |

## Ported/adapted skills

| Skill | Source path | First local commit | Origin / adaptation |
|---|---|---|---|
| `filetree` | `.pi/skills/filetree/SKILL.md` | `17f7cd4` — `feat: add Pi filetree skill` | Pi port of `nekocode/filetree-skill`; maintains `FILETREE.md` with per-file purpose summaries and hashes for drift checks. |

## Packaged or mirrored skill surfaces

| Skill surface | Source path | Notes |
|---|---|---|
| `browser` / `browser-harness` | `extensions/browser-harness/SKILL.md` | Packaged CDP browser-control skill with browser-harness usage rules, remote browser profile guidance, and field-tested interaction constraints. |
| `claude-saddle` packaged mirror | `extensions/pisaddle/.pi/skills/claude-saddle/SKILL.md` | Packaged copy of the Claude Saddle skill; mirrors the active project-local version for the standalone pisaddle extension. |

## Related non-Pi skill playbooks

`extensions/browser-harness/interaction-skills/` contains reusable browser interaction playbooks that are not Pi `SKILL.md` files but function as agent skill references:

- `connection.md`
- `cookies.md`
- `cross-origin-iframes.md`
- `dialogs.md`
- `downloads.md`
- `drag-and-drop.md`
- `dropdowns.md`
- `iframes.md`
- `network-requests.md`
- `print-as-pdf.md`
- `profile-sync.md`
- `screenshots.md`
- `scrolling.md`
- `shadow-dom.md`
- `tabs.md`
- `uploads.md`
- `viewport.md`

Domain-specific browser playbooks also exist under `extensions/browser-harness/agent-workspace/domain-skills/` and are opt-in via `BH_DOMAIN_SKILLS=1`.

## Notes for future syncing

- Treat `~/src/pagent/.pi/skills/` as the source of truth for active local Pi skills unless a skill has moved into a packaged extension.
- Exclude `.pi/subagents/` run logs and `.worktrees/` when refreshing this inventory.
- If a skill graduates into a package, list both the active local path and the package path until one is removed.
