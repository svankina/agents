---
name: claude-design
description: Prepare, consume, and validate Claude Design handoffs using browser captures, screenshot inventories, exported design assets, and browser-based audits. Use when working with claude.ai/design, Claude Design exports, design handoff zips, screenshots saved for Claude Design, or when turning a live app/page into a Claude Design context bundle and implementation/audit workflow.
---

# Claude Design Workflow

Use this skill when the user wants help with Claude Design, a Claude Design handoff/export, screenshots made for Claude Design, or a browser-harness/browser-automation capture/audit loop for visual redesign work.

## Core lessons from prior work

- Treat Claude Design output as a **design reference**, not production code.
  - Prototype HTML/React/Babel files communicate layout, tokens, motion, state, copy, and interactions.
  - Recreate the design in the target codebase's existing framework and deployment conventions.
- Always preserve a **local previewable export** of Claude Design assets.
- For multi-page redesigns, feed Claude Design a **browser-captured inventory**: route table, titles, URLs, screenshots, constraints, and design direction.
- Validate the final result by what users see through the real entrypoint, not just source files.
- When proxied services are involved, the live route may be served from deployment homes or other processes; audit through the gateway URL.

## Dedicated browser environment

For Claude Design/browser-harness work on this machine, use the dedicated **designer** Linux user/browser session so automation does not steal focus or disturb the user's active screens.

Known setup:

- Linux user: `designer`
- Chrome profile: `$CLAUDE_DESIGN_CHROME_PROFILE`
- Remote-debugging Chrome: `--remote-debugging-port=9333`
- Typical process: `/usr/bin/google-chrome --remote-debugging-port=9333 --user-data-dir=$CLAUDE_DESIGN_CHROME_PROFILE ...`

Rules:

- Prefer `browser-harness` / Chrome DevTools Protocol against the designer Chrome session.
- Do **not** use `xdotool`, visible mouse movement, or native file-picker automation against the user's normal desktop unless the user explicitly authorizes it for that step.
- If browser-harness reports the designer session needs a remote-debugging permission click, stop and ask for that handoff rather than taking over the user's visible screen.
- For file upload flows, prefer CDP/file-input methods. If Claude Design only exposes a native file picker or drag/drop that cannot be automated safely in the designer session, pause and report the prepared zip path for manual upload.
- Keep artifacts under the project directory and preserve URLs/project IDs in the final report.

Useful diagnostics:

```bash
browser-harness --doctor
curl -s http://127.0.0.1:9333/json/list
pgrep -a chrome | grep chrome-designer
```

## Workflow A: Prepare context for Claude Design

Use this when the user wants Claude Design to redesign an existing app/page or suite.

1. Identify the real browser entrypoint.
   - Examples from prior work: `http://127.0.0.1:8888/`, `$CLAUDE_DESIGN_APP_URL` (see .env.example).
   - Prefer localhost/direct service URLs for private dashboards unless the user asks for public URL validation.
2. Capture the important routes/screens.
   - Use browser automation when available: Playwright, Chrome/CDP, or `browser_harness` if installed.
   - Capture at least: final URL, title, viewport size, screenshot path, success/error.
   - Save screenshots in a stable folder such as `design-capture/screenshots/` or `<feature>-swarm/screenshots/`.
3. Write a Claude Design context markdown file.
   - Include global design direction.
   - Include constraints: framework, no-build/static rules, auth, proxy safety, APIs/SSE/video endpoints to preserve.
   - Include a table mapping route → title → kind/source → screenshot path.
   - Include what should and should not be changed.
4. Zip the context folder for handoff to Claude Design if useful.

Suggested files:

```text
<topic>-claude-design/
├── CLAUDE_DESIGN_CONTEXT.md
├── browser-capture.json
├── screenshots/
└── <topic>-context.zip
```

## Workflow B: Consume a Claude Design export/handoff

Use this when the user gives a Claude Design URL, zip, handoff folder, or generated assets.

1. Locate the export/handoff.
   - Search for `claude-design-assets`, `design_handoff_*`, `*Redesign.zip`, `HANDOFF.md`, `README.md`, and recent files in `downloads/`.
2. Preserve assets in a dedicated folder.
   - Prior pattern: `claude-design-assets/` with `README.md`, `index.html`, generated CSS/data/JSX, and captured rendered HTML.
3. Read the handoff first.
   - Prior handoff used docs like `docs/components.md`, `docs/design-tokens.md`, `docs/interactions.md`, `docs/responsive.md`, `docs/sample-data-mapping.md`.
4. Create or verify a local preview command.
   - Example:
     ```bash
     cd /path/to/claude-design-assets
     python3 -m http.server 8799
     # open http://127.0.0.1:8799/index.html
     ```
5. Extract implementation contracts.
   - Tokens: color, type, spacing, radii, shadows.
   - Layout: shell regions, breakpoints, rails, grids.
   - Component states: hover, active, loading, error, empty.
   - Interactions: keyboard shortcuts, search/filter/sort, refresh, command palette, toasts.
   - Data shape: fields the design assumes.

## Workflow C: Implement from Claude Design

1. Map design concepts onto the existing app architecture.
   - Do not import prototype React+Babel into production unless the app already uses that stack appropriately.
   - Prefer lifting framework-agnostic CSS tokens/components when safe.
   - Reimplement state machines in the app's conventions.
2. Keep route/API compatibility.
3. For proxied suites, consider a gateway-side HTML shell injector only when:
   - many routes are independent apps,
   - visual consistency is the goal,
   - individual app deploys are risky,
   - and the injector can safely skip APIs/assets/SSE/video/non-HTML/mutating methods.
4. Avoid unrelated dirty files; report any deployment-vs-source mismatch.

## Workflow D: Browser audit after implementation

Always audit what the user actually sees.

1. Visit the real entrypoint and each route with browser automation.
2. Capture screenshots and computed checks.
3. Build a contact sheet when many screens are involved.
4. Classify pages:
   - matches Claude Design direction,
   - partial/adjacent,
   - does not match,
   - error/offline/auth-gated.
5. Write audit artifacts:

```text
<topic>-redesign-audit/
├── README.md
├── audit-results.json
├── screenshots/
└── <topic>-contact-sheet.jpg
```

6. If changes are not visible, debug in this order:
   - wrong URL/site/route,
   - auth gate or unauthenticated asset fetch,
   - stale process/service not restarted,
   - proxy/gateway serving another deployment home,
   - CDN/browser cache,
   - HTML cached so asset cache-busting did not apply,
   - CSP/content-length/header issues after injection.

## Useful prior locations

These are examples from previous work and may not exist in every repo:

- `$CLAUDE_DESIGN_ASSETS_DIR/claude-design-assets/README.md`
- `$CLAUDE_DESIGN_ASSETS_DIR/dashboard-page-swarm/CLAUDE_DESIGN_CONTEXT.md`
- `$CLAUDE_DESIGN_ASSETS_DIR/dashboard-page-swarm/browser-capture.json`
- `$CLAUDE_DESIGN_ASSETS_DIR/dashboard-redesign-audit/README.md`
- `$CLAUDE_DESIGN_ASSETS_DIR/dashboard-redesign-audit/IMPLEMENTATION_PLAN.md`

## Updating this skill

When a better Claude Design workflow is discovered, update this skill directly. Prefer adding concrete lessons, commands, file layouts, and failure modes over vague memory/context instructions.
