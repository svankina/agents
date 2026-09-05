# Machine operations

Read this reference before Spark model/service, benchmark, chemistry, driver,
clock or memory operations, workstation compute configuration, or Claude
cross-limit resumption. These are recorded configurations, not live probes;
check current service/config state before changing it.

## Privilege boundary

The workstation has no passwordless sudo: use the parent agent's `psudo`
handoff procedure in `~/src/agents/docs/agent-workflows.md`. Never request or
handle a password in chat. Spark has passwordless sudo for its login account:
the top-level agent runs `ssh spark sudo <cmd>` directly, without `psudo`.
Subagents must report privileged commands to their parent rather than run
sudo/psudo themselves. Docker on the workstation needs no sudo.

## Spark safety and routing (2026-08-13 to 2026-08-18)

NVIDIA DGX Spark: GB10 Grace Blackwell, 128 GB unified memory, aarch64,
DGX OS 7. Connect with `ssh spark` (LAN alias to `spark.local`; Tailscale
MagicDNS `spark` and Tailscale SSH are also enabled).

- Run **one model at a time**. Never load a second model while another is
  resident. Stop the resident model unit first and check `free` before loading.
- Keep combined usage below approximately **121 GiB**. A large allocation can
  wedge the machine, lose SSH, and require a physical power-cycle.
- Keep the NVIDIA driver on **580.x**: 590.x deadlocks CUDAGraphs on GB10.
- Keep GPU clocks locked to **2200 MHz** via `spark-gpu-clock.service` and
  `nvidia-smi -lgc 0,2200`. This fixes sudden shutdown under load. Decode is
  bandwidth-bound; do not unlock the clocks for performance.

## Spark model stack (2026-08-17)

Conflicting systemd units on Spark serve one model at a time on port 8089.
Recorded default: `spark-vllm.service`, using Docker image
`vllm/vllm-openai:v0.27.1-aarch64`, target
`aday777/Qwen3.8-27B-ARA-abliterated-NVFP4-MTP` (heretic-ara lineage,
0/100 refusals, KL 0.054), with external DSpark drafter
`Doopeworld/Qwen3.8-27B-DSpark-vLLM`, k=14. Context is 262K with prefix caching.
Launcher: `spark:~/bin/serve-qwen38-vllm.sh`. Recipe:
https://github.com/0xBakeer/Qwen3.8-27B-4-bit-on-a-single-DGX-Spark

SM121 requirements baked into that launcher:

- `VLLM_MARLIN_USE_ATOMIC_ADD=1`: omission silently corrupts results.
- `VLLM_USE_FLASHINFER_MOE_FP4=0` and `--attention-backend TRITON_ATTN`:
  FlashInfer mis-drafts and has FP8 bugs on SM121.
- `--kv-cache-dtype fp8`: doubles KV capacity; NVFP4 KV is SM100-only.
- Explicit `--enable-prefix-caching`: otherwise silently off for hybrid models.
- `--reasoning-parser qwen3 --tool-call-parser qwen3_xml`.
- `--max-num-batched-tokens 16384`: required for k=14.
- Mount `~/.cache/{triton,flashinfer,vllm}` into the container for JIT/compile
  caches. Startup still takes approximately 11–14 minutes due to torch.compile.

Fallback llama.cpp units:

| Unit | Model | Recorded performance |
| --- | --- | --- |
| `spark-qwen38.service` | Qwen3.8-27B RVN heretic Q4_K_M | ~12 tok/s |
| `spark-qwen.service` | Qwen3.6-27B heretic-v2 BF16, MTP | — |
| `spark-gemma.service` | gemma-4-31B heretic BF16 | — |

After stopping the resident unit and checking memory, select a service with
`ssh spark sudo systemctl start spark-<name>`; `Conflicts=` stops the others.
Do not bypass that protection with a separate model process.

omp selector: `spark/qwen3.8-27b-ara-uncensored`. Pi provider: `spark`, model
ID `qwen3.8-27b-ara-uncensored`. DeepSeek and LFM2.5-VL vision sidecar units
are disabled. Their models, the AEON BF16 GGUF and RVN GGUFs remain in
`spark:~/models`.

### Benchmark interpretation (2026-08-17)

Recorded default throughput: ~56 tok/s on edit-heavy work and ~15 tok/s on
fresh prose. Drafter acceptance depends on workload and checkpoint: the
base-distilled drafter accepts ~98% on edits but ~13% on fresh prose against
this abliterated target. Native MTP k=3 A/B produced 26 edit / 18 fresh tok/s;
it was worse overall and is not used.

Community solo results of 34–46 tok/s use non-abliterated 27B with
SGLang+DSpark. Claims of 75 tok/s are edit-workload numbers on base checkpoints.
The recorded configuration is at parity for an abliterated target; compare
matching workloads/checkpoints rather than chasing the headline rate.
BF16 27B is bandwidth-capped at ~4.7 tok/s (~273 GB/s / 54 GB); quantize for speed.

## Spark chemistry (2026-08-18)

Read the README in `spark:~/chem/` before changing that stack.
It combines RDKit, PubChem, and OpenStax-textbook RAG
(Chroma, 5171 chunks, CPU-only) for the local abliterated model. omp on Spark
uses MCP server `chem`, configured in `~/.omp/agent/mcp.json` on Spark.
Pi and shells use `chem info|sub|sim|rxn|draw|pubchem|search`. Recorded end-to-end
verification used `spark/qwen3.8-27b-ara-uncensored`; it is not proof of current
runtime health.

## Workstation hardware (2026-08-05)

- Compute GPU: NVIDIA RTX 3090 Ti, 24 GB VRAM, driver 580, CUDA 12.0,
  PCI `42:00.0`. Dedicated to CUDA/ML; run ML/compute on it, not the CPU.
  Check `nvidia-smi` before assuming it is busy. A `kokoro-tts` service under
  another service account may occupy it and can be stopped if appropriate.
- Display GPU: AMD RX 580, PCI `08:00.0`, X11 display `:1`. Never use it for
  compute.
- CPU: AMD Threadripper 1920X, 12 cores / 24 threads. RAM: 64 GB.
- Storage: 2 TB Sabrent Rocket Q NVMe, one root/home filesystem.
- Desktop: i3, tmux, zsh. User-visible agent GUIs go to workspace 9;
  inspection-only GUIs use the headless agent display.

Heavy jobs must still follow the shared `fair-run` policy; GPU availability
does not waive CPU/RAM fairness.

## Claude long-run resumption

Recorded subscription limits use a rolling 5-hour window and a weekly
(7-day) limit. At a limit, the session pauses and shows the reset timestamp.
There is no built-in self-resume: an in-session timer cannot wake the model
across a blocked model call. Do not sleep until reset or retry in a tight loop.

Cross-limit resumption requires an external wrapper or cron process around
`claude`. **This file does not establish that a resumer is installed.** Inspect
actual configuration before relying on one or promising automatic resumption.
A configured external process can relaunch with `claude --continue` after reset.

For work that genuinely needs cross-session recovery, use the project's
existing durable state mechanism or a concise task-specific checkpoint with
completed work, remaining work, and context required to resume. When a limit
is known, record the reset timestamp and stop cleanly. Do not create
`PROGRESS.md` routinely, duplicate state, or assume an external resumer exists.
