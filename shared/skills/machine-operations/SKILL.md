---
name: machine-operations
description: Use before loading models, changing services, GPU drivers, clocks, or memory limits on Spark or the workstation, or running heavy benchmarks. Not needed for ordinary coding or read-only diagnostics.
---

# Machine operations

These are recorded configurations, not live probes; check current service and
config state before changing it. For Spark model-stack recipes, launcher
flags, benchmarks, or the chemistry stack, read `spark-reference.md` in this
skill directory.

## Privilege boundary

The workstation has no passwordless sudo: the parent agent uses the `psudo`
handoff in the `running-privileged-commands` skill. Spark has passwordless sudo
for its login account: the top-level agent runs `ssh spark sudo <cmd>` directly,
without `psudo`. Subagents report privileged commands to their parent rather
than run sudo/psudo themselves. Docker on the workstation needs no sudo.

## Spark safety (2026-08-13 to 2026-08-18)

NVIDIA DGX Spark: GB10 Grace Blackwell, 128 GB unified memory, aarch64,
DGX OS 7. Connect with `ssh spark` (LAN alias to `spark.local`; Tailscale
MagicDNS `spark` and Tailscale SSH are also enabled).

- Run **one model at a time**. Stop the resident model unit first and check
  `free` before loading. Switch models with
  `ssh spark sudo systemctl start spark-<name>`; the units' `Conflicts=` stops
  the others. Do not bypass that with a separate model process.
- Keep combined usage below approximately **121 GiB**. A large allocation can
  wedge the machine, lose SSH, and require a physical power-cycle.
- Keep the NVIDIA driver on **580.x**: 590.x deadlocks CUDAGraphs on GB10.
- Keep GPU clocks locked to **2200 MHz** via `spark-gpu-clock.service` and
  `nvidia-smi -lgc 0,2200`. This fixes sudden shutdown under load. Decode is
  bandwidth-bound; do not unlock the clocks for performance.

## Workstation GPUs (2026-08-05)

- Compute GPU: NVIDIA RTX 3090 Ti, 24 GB VRAM, driver 580, PCI `42:00.0`.
  Put GPU-suited ML work here; CPU-only tools and small jobs may stay on the
  CPU. Check `nvidia-smi` before assuming it is busy. A `kokoro-tts` service
  under another account may occupy it and can be stopped if appropriate.
- Display GPU: AMD RX 580, PCI `08:00.0`, X11 display `:1`. Never use it for
  compute.

Heavy jobs still follow the shared `fair-run` policy; GPU availability does not
waive CPU/RAM fairness.
