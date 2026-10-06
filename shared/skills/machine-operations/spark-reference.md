# Spark reference

Recorded configuration and benchmarks. Verify live state before acting on any of it.

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

## Benchmark interpretation (2026-08-17)

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
