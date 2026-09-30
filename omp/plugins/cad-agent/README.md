# Persistent CAD agent

`cad-agent` opens or reuses **CAD** in Herd's background dock without selecting
it. The agent uses `openai-codex/gpt-6-astra` with high thinking. Prewalk is
disabled so editing does not automatically switch to a smaller model.
Use `cad-agent --terminal` to run it in the current terminal instead.
Only one process can write its conversation.
Its dock pane carries a display identity: the row reads **CAD** with the role
`Mechanical CAD` and the `assets/cad.svg` portrait, and the expanded pane shows
that portrait, live state, model and role above the terminal. A restarted dock
is what applies changed identity metadata; a live pane keeps the metadata it
was spawned with.

The agent stays available after each request. Its private coordination workspace
and saved conversations live under `~/src/docked_agents/cad`; override that root
with `CAD_AGENT_STATE_DIR`. After exit, run `cad-agent` to resume the saved
conversation. This is a persistent Herd pane, not a reboot-started system service.
Use the existing Conversation role registry to bind CAD's live session ID when
setting it up for routed requests.

The launcher explicitly loads `omp/plugins/cad-agent/index.ts` for its name and
terminal header. Do not install that extension globally. CAD uses the shared
`modelling-cad` and `serving-cad-files` skills and the existing `cad-workbench`
engine. Model changes belong in the requested project's feature worktree, not
the private coordination workspace. No model polling runs while idle, and
preparing fabrication files does not authorize starting a printer.
