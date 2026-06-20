# omp resources

Custom resources for [omp / Oh My Pi](omp://) — the analogue of `pi/` for the
omp coding agent. Where pi gates things per-folder with `agent.json` + the
`.pi/` discovery dirs, omp uses its **native** per-folder mechanisms:

- **`<folder>/.omp/settings.json`** — project-scoped settings (model, thinking
  level, fast mode, skill toggles). omp loads it automatically when launched
  from that folder.
- **`<folder>/.omp/plugins/installed_plugins.json`** — project-scoped plugin
  installs, written by `omp plugin install --scope project`.

Both are read by omp out of the box, so nothing here is load-bearing for them to
work — the extension below only adds ergonomics.

## Per-folder model / thinking / fast

### How omp does it natively

Drop a `<folder>/.omp/settings.json`:

```json
{
  "modelRoles": { "default": "anthropic/claude-opus-4-8:medium" },
  "defaultThinkingLevel": "high",
  "serviceTier": "priority"
}
```

When you launch omp **from that folder**, it applies the model, thinking level,
and fast mode (`serviceTier: "priority"` == fast on). `serviceTier: "none"` ==
fast off. This is the durable store — it keeps working even with the extension
below disabled.

Limit: native project-settings discovery is **cwd-only** — it does not walk up
to a parent `.omp/`. Launch from a subdirectory and the folder config is missed.

### The `agent-folder` extension (`extensions/agent-folder.ts`)

Adds the two things native omp lacks, mirroring pi's `agent-folder-config`:

1. **Ancestor-walk apply** — on session start it finds the nearest ancestor
   `.omp/settings.json` above your cwd and applies its `model` +
   `defaultThinkingLevel` live (the cwd case is already handled natively).
2. **Slash commands** to write the folder file without hand-editing JSON:

   | Command | Effect |
   |---|---|
   | `/folder` or `/folder show` | Show the nearest folder config + values |
   | `/folder save` | Save the current session's model + thinking level to `<cwd>/.omp/settings.json` |
   | `/folder model <provider/id\|role>` | Apply now + save model |
   | `/folder thinking <off\|minimal\|low\|medium\|high\|xhigh\|auto>` | Apply now + save thinking level |
   | `/folder fast <on\|off>` | Save `serviceTier` (applies on next launch from this folder) |
   | `/folder clear` | Remove model/thinking/fast from the folder file |

   **Fast caveat:** omp's extension API exposes `setModel` / `setThinkingLevel`
   but **not** service-tier, so `/folder fast` only *persists* the setting —
   it takes effect the next time you launch omp from that folder. For a live
   toggle in the current session use the built-in `/fast`. At folder root,
   native config applies `serviceTier` on launch anyway.

Storage is the native `.omp/settings.json`, deliberately — not pi's `agent.json`
— so omp applies it automatically at folder root. (pi keeps using `agent.json`;
the two are independent.)

Wired via `~/.omp/agent/agent` config: `extensions: ["~/src/agents/omp/extensions"]`.

## Plugins gated by folder

omp installs marketplace plugins at two scopes:

- **user** (default) — every project.
- **project** — only the folder you install from (and its subfolders); stored in
  `<folder>/.omp/plugins/installed_plugins.json`.

This repo ships a marketplace catalog (`.omp-plugin/marketplace.json`) exposing
the personal skill library as the `personal-skills` plugin, so it can be gated
per-folder:

```bash
omp plugin marketplace add ~/src/agents      # one-time (already done)
cd /some/project
omp plugin install --scope project personal-skills@agents
omp plugin list                              # shows it here, (project)
# in any other folder it is absent
```

Marketplace installs **copy** the plugin into `~/.omp/plugins/cache` at install
time, so edits to `pi/skills/` need `omp plugin upgrade personal-skills@agents`
to propagate. For skills you actively edit and want live, an alternative is to
add them per-folder without a copy via `<folder>/.omp/settings.json`:

```json
{ "skills": { "customDirectories": ["~/src/agents/pi/skills"] } }
```

## Layout

- **`extensions/`** — omp extension modules (`.ts`), loaded via the global
  `extensions:` setting. `agent-folder.ts` lives here.
- **`../.omp-plugin/marketplace.json`** — marketplace catalog for `omp plugin`.
