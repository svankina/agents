# About the user

Durable facts about Sravan, the human these agents work for. Facts, not
workflow rules — standing instructions belong in `shared/AGENTS.md`. Keep
entries concise, and date anything likely to change.

Source file: `~/src/agents/shared/USER.md`. It is concatenated into every
agent's generated global instructions by `agents-sync`, so it is always in
context; do not edit the generated copies.

## Working style

- Prefers to do minimal work. If an agent can safely run something itself
  instead of handing the user a command, it runs it.
- Prefers changes made explicitly in code and committed, over behaviour added
  only through agent instructions.
- Has ADHD. Responses must be actionable without holding state in the head:
  lead with the action, restate where we are, one concrete next step. See
  "Output style" in `shared/AGENTS.md` for the full rules.

## Location & timezone (2026-08-10)

- Lives in **Hyderabad, India** (Financial District, Nanakramguda, 500032).
- Timezone: **Asia/Kolkata (IST, UTC+5:30)** — the workstation clock is set to
  it. For anything date- or time-sensitive ("today", delivery days, schedules,
  deadlines), use the system's local time (`date`), never an assumed or UTC
  date.
- Shopping/deliveries happen on **amazon.in** (not .com).

## Deliverables

- Hates raw Markdown as a deliverable. Anything meant to be *looked at* is
  polished, self-contained HTML served over the shared report server.
- Wants actual code changes shown in chat as fenced diffs, not summarised away.

## CAD (2026-08-06)

- **Model in build123d. Never OpenSCAD.** Stated flatly mid-project after a
  run of `.scad` parts: "Stop using openscad. Use build123d." This is not a
  per-repo preference — it holds for every part, including throwaway mock
  geometry that only ever shows up in a render. Existing `.scad` files get
  ported, not extended.
- **Render with three.js in the browser tool. Never Blender/Cycles.** Same
  conversation, one instruction later: "stop using blender to render stuff
  takes forever use threejs". He is right about the cost — a cold Cycles run
  spent 7 minutes compiling CUDA kernels before drawing a pixel, and 1-3
  minutes per subsequent batch, against about a second for a WebGL frame. Put
  the meshes in a three.js page, drive the camera from the browser tool, and
  screenshot it.
- Parts are delivered as an interactive viewer link (`serve-cad`), never a raw
  STL path or a static render.
- Prints go through the gatekeeper: `@slicer print <path under ~/src/3dp>
  [--printer p1s|ender3]` in the Mattermost `~3d-printing` channel. Agents do
  not call `ender3.sh print`/`upload` themselves.

## Environment

- Single Linux workstation (i3, tmux, zsh). Agent-launched GUIs go to
  workspace 9.
- No passwordless sudo; privileged work goes through `psudo` handoffs.
- Reachable on Android via `homer-notify`, for genuinely blocking events only.

## DGX Spark (2026-08-13)

- Second machine: **NVIDIA DGX Spark** (GB10 Grace Blackwell, 128 GB unified
  memory, aarch64, DGX OS 7). Hostname `spark` — reach it as `ssh spark`
  (alias → `spark.local` on LAN) or via Tailscale (`100.73.19.73`, MagicDNS
  `spark`, Tailscale SSH enabled).
- **Passwordless sudo IS enabled on the spark** for `svankina`
  (`/etc/sudoers.d/90-svankina-nopasswd`). Agents needing root there run
  `ssh spark sudo <cmd>` directly — NO psudo handoff, no password. The psudo
  workflow applies only to the workstation.
- Runs the local-LLM stack (2026-08-17): ONE model at a time on `:8089` via
  conflicting systemd units on the spark itself — `spark-qwen38.service`
  (Qwen3.8-27B RVN heretic abliterated Q4_K_M, ~12 tok/s, active default;
  llama.cpp master, `qwen35` arch), `spark-qwen.service` (Qwen3.6-27B
  uncensored heretic-v2 BF16, MTP) and `spark-gemma.service` (gemma-4-31B
  uncensored heretic BF16). Swap: `ssh spark sudo systemctl start
  spark-<name>` (Conflicts= stops the rest). omp selector:
  `spark/qwen3.8-27b-rvn-uncensored` (also `qwen3.6-27b-uncensored-bf16`,
  `gemma-4-31b-uncensored-bf16`); pi provider `spark`, same model ids.
  DeepSeek and the LFM2.5-VL vision sidecar units are disabled; their models
  (plus the AEON Qwen3.8 BF16 GGUF, RVN-Q6_K, and mmprojs) remain in
  `spark:~/models`. BF16 27B is bandwidth-capped at ~4.7 tok/s (~273 GB/s /
  54 GB) — quantize for speed. Keep combined usage under ~121 GiB — unified
  memory; a big malloc can wedge the box hard (2026-08-16: starting a 52 GB
  load while another BF16 model was resident froze SSH for 1h+ and needed a
  physical power-cycle — always stop the resident model unit first and check
  `free`).
- GPU clocks are locked to 2200 MHz (`spark-gpu-clock.service`,
  `nvidia-smi -lgc 0,2200`) — the known GB10 sudden-shutdown-under-load fix;
  decode is bandwidth-bound so the cap costs ~nothing. Don't unlock for
  "performance".

## Hardware (2026-08-05)

- **GPU for compute: NVIDIA RTX 3090 Ti, 24 GB VRAM** (driver 580, CUDA 12.0,
  PCI `42:00.0`). It is dedicated to CUDA/ML — the display runs on a separate
  AMD RX 580, so the 3090 Ti is normally idle and free. **Run ML/compute work
  on the GPU, not the CPU.** Verify with `nvidia-smi` before assuming it's
  busy. (Known squatter: a `kokoro-tts` service run by user `ai-server` may be
  parked on it; it can be stopped.)
- Display GPU: AMD RX 580 (PCI `08:00.0`), X11 on display `:1`. Never target
  it for compute.
- CPU: AMD Threadripper 1920X — 12 cores / 24 threads.
- RAM: 64 GB.
- Storage: 2 TB NVMe (Sabrent Rocket Q) as the single root/home filesystem.

## Projects and systems

- Durable user queue: `~/src/user/user-queue.sqlite3`, managed with the global
  `user-queue` command. `user-queue view` publishes the readable HTML view.
- Agent instruction sources: `~/src/agents` (see "How these files are
  maintained" in `shared/AGENTS.md`).

## Decisions

- 2026-07-25: user-facing profile material lives here rather than in
  `~/src/user/NOTES.md`, because that file is only read when an agent happens
  to be working in that directory.
