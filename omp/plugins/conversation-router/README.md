# Conversation router

`conversation` opens the persistent communication-only OMP terminal.
`conversation --pane` creates or reuses a background Herd dock without selecting
it; it never kills other panes. `conversation --print 'MESSAGE'` performs a
noninteractive exchange (piped stdin also works). Use `--model MODEL` to override
the default `@smol` role. Only one process may write the conversation at a time.
Its dock pane carries a display identity: the row reads **Conversation** with
the role `Agent routing` and the `assets/conversation.svg` portrait, and the
expanded pane shows that portrait, live state, model and role above the
terminal. The row's token count covers the private session root.

The router lists existing named agents, chooses by their project/role, and asks
the user when ownership is ambiguous. It has only `list_agents`, `route_request`,
and `request_status`, not shell, filesystem, delegation, or coding tools.
Follow-ups retain the original session identity; unrelated requests select a
freshly discovered target. It does not invent replacements for offline agents.

The terminal shows Conversation's purpose and command hints above the editor.
Use `/routes [topic]` for live responsibilities, `/handoffs` for recent requests,
and `/conversation` for help. These commands do not call a model or send work.
Unknown responsibilities are explicit. `/agents` remains OMP's agent settings
command; it is not the routing roster.

Tool cards show agent names, projects, request text, and readable replies instead
of JSON. The live indicator distinguishes accepted/awaiting reply, reply received,
and uncertain delivery. “Reply received” does not verify the agent's claims.
The dock's idle age measures time since the router started or last saved a
handoff or reply. Reading status does not reset that age.
Follow up by agent or topic; Conversation resolves the internal request ID from
history and asks which topic when ambiguous. Ask for the rest of a long reply
or older handoffs to page through retained history.

When a coordinator's responsibilities are not clear from its name/project,
record them in optional `$CONVERSATION_STATE_DIR/agents.json` (default
`~/src/docked_agents/conversation/agents.json`). Its format is a JSON array of
`{"sessionId": "EXACT_SESSION_ID", "description": "Known responsibilities"}`.
Use the live roster's stable session ID, not a display name or guessed peer ID.
The registry is reread on roster refresh and applies only to the matching live
session. A replacement session needs a new entry; stale entries do not make an
offline agent routable. There is no periodic LLM capability-discovery loop.

Handoffs use the ordinary persistent receiver-side peer channel, which carries
the receiver's role/context but is not its main-terminal user conversation.
Do not describe queue acceptance as completed work or retry uncertain sends.
A timeout leaves the original work running. Keep the router open to receive
late replies; after print-mode exits, inspect the recorded status rather than
assuming success or failure.

Private transcripts and handoff state live under `~/src/docked_agents/conversation`
(`CONVERSATION_STATE_DIR` overrides it). The roster's project root defaults to
the home directory (`CONVERSATION_PROJECT_ROOT` narrows or overrides it), so
long-running bots under `~/.local/state` remain discoverable alongside project
agents under `~/src`. Existing OMP authentication
and model-role configuration are reused. The launcher supplies its own narrow
config overlay and explicit extension path; do not install this plugin globally.
