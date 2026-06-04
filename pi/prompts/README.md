# Prompts

Reusable agent-variant slash prompts for Pi. Each `.md` file has YAML frontmatter
(`description`, `argument-hint`) and a body that consumes `$ARGUMENTS`. Drop a file in
Pi's prompts directory to expose it as `/<name>`.

| Prompt | Invocation | Purpose |
|---|---|---|
| `context-surgeon` | `/context-surgeon` | Maintain and troubleshoot the Context Surgeon page (`$CONTEXT_SURGEON_URL`). |
| `herder` | `/herder` | Operate the subagent dispatch server and track the agent roster. |
| `image-gen` | `/image-gen` | Turn a request into image-generation prompts and production plans. |
| `init` | `/init <name> <purpose>` | Instantiate a new Pi agent variant as a reusable slash prompt (uses the `pi-init` skill). |
| `knowledge-map` | `/knowledge-map` | Build or refresh a durable Markdown knowledge map (uses the `knowledge-map` skill). |
| `librarian` | `/librarian` | Knowledgebase-building agent variant. |
| `newsbot` | `/newsbot` | Daily news scout that surfaces interesting, relevant stories. |
| `oracle` | `/oracle` | Resolve uncertainty by finding direct evidence and answering with bounded confidence. |
| `piagent` | `/piagent` | Maintain Pi resources: skills, extensions, prompts, keybindings, support scripts. |
| `planner` | `/planner` | Turn a goal, ambiguity, or proposed change into a sequenced, evidence-grounded plan. |
| `pm` | `/pm` | Project-manager variant that tracks the user's work. |
| `swarm` | `/swarm <task>` | Plan a large task into a dependency graph, parallel waves, and subagent assignments (uses the `parallel-task-planner` skill). |

Several prompts are thin entry points that call a backing [skill](../skills/): `init` →
`pi-init`, `knowledge-map` → `knowledge-map`, `swarm` → `parallel-task-planner`.
