# Skills

Project-local Pi skills. Each skill is a directory with a `SKILL.md` plus any supporting
`scripts/`, `references/`, or `templates/`. The [`.ignore`](.ignore) file is a discovery
allowlist: skills listed there are registered as explicit slash-invoked skills
(`/skill:<name>`), and those skills also set `disable-model-invocation: true` in their
frontmatter so they stay out of the model system prompt until invoked.

| Skill | Purpose |
|---|---|
| `claude-design` | Prepare, consume, and validate Claude Design handoffs using browser captures, screenshot inventories, exported assets, and browser-based audits. |
| `claude-saddle` | Launch and supervise Claude Code in a tmux session with live picture-in-picture, interactive guidance, and independent verification. |
| `dogfood` | Exploratory QA of web apps: find bugs, capture evidence screenshots, and write structured bug reports. |
| `filetree` | Maintain `FILETREE.md`, a repo-root per-file purpose index with content hashes for drift checks. Pi port of `nekocode/filetree-skill`. |
| `knowledge-map` | Build and maintain durable Markdown / Obsidian-friendly knowledge maps, repo maps, topic indexes, and decision records. |
| `parallel-task-planner` | Plan large tasks into a dependency graph, separate read-only planning from single-writer implementation, and produce execution-ready subagent assignments. |
| `pi-init` | Scaffold a new project-local Pi agent variant (slash prompt + optional backing skill) from a name and purpose, including Mattermost bot runtime setup. |
| `terminal-fix` | AI-powered terminal command correction. |

Machine-specific paths/URLs referenced by these skills come from the repo-root
[`.env.example`](../../.env.example) (copied to a gitignored `.env`) as `$VARS`.
