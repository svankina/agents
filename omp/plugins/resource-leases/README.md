# Resource leases

The resource lease plugin lives in `omp/plugins/resource-leases`. Install its
helpers with `omp-install`, then link the package with
`omp plugin link ~/src/agents/omp/plugins/resource-leases`. Restart OMP to load
it; do not rebuild or replace OMP core. Disable it with
`omp plugin disable @svankina/omp-resource-leases`.

The `resources` tool acquires processes or dedicated headless browsers and
lists/releases session-owned leases. Browser acquisition returns `cdpUrl`;
attach with Eval `browser.open({app:{cdp_url:cdpUrl}})`. Close managed tab
handles, then call `resources` cleanup before completion. The plugin guards
successful quit/yield and the main-session stop hook. Bash receives owner
environment variables for `agent-gui`; no process-global owner variable is set.
Raw Bash/Eval subprocesses and browsers opened without broker acquisition are
not intercepted. Subagent stop hooks are not available; explicit release,
terminal yield interception, shutdown and owner-process death provide cleanup.

`agent-resource` contains descendants in Linux user-systemd cgroups, with
eight live leases per owner and 32 per user. A separate watchdog reclaims
dead owners using PID plus process start time. Failed cleanup retains its
lease. Browser profile directories are broker-owned and removed after cgroup
shutdown. User browsers and unrelated processes are not adopted. The watchdog
is intentional persistent infrastructure; logs and released rows are retained.
When upgrading broker schema or cleanup logic, stop
`agent-resource-watchdog.service` before the first new acquisition; acquisition
starts the updated watchdog. Do not remove its source worktree while it runs.

`reaper --pane` opens Reaper's background web dashboard in Herd's dock.
It does not select the pane or create a duplicate. Use `--restart` after an
update; the new dashboard must answer before the old pane is removed.
Agent cards group named requests. Live, Recent and History scopes and search
filter the list. Select a request for its exact owner and lease IDs, usage,
observed peaks, charts and lifecycle. On narrow screens, Back to requests
returns to the selected row. Measurement coverage expands accounting errors.
Whole-machine readings stay separate from request usage.

The dashboard uses a token-gated loopback HTTP server owned by its pane.
Herd's Terminal output button shows service diagnostics. Herd shortcuts returns
keyboard focus to Herd; shortcuts do not cross the iframe boundary.
`--serve` prints a standalone local dashboard URL. `--watch` retains the
terminal view (`p` pauses, `j`/`k` scroll history, `q` exits).
`--once --json` prints a read-only collector snapshot.
The avatar is `assets/reaper.svg`.

Requests name a browser or process; they do not reserve CPU or RAM quantities.
Raw command arguments are not recorded. The broker retains 2,000 lifecycle
events; the dashboard reads all of them and the terminal reads 40.
Registry state takes precedence over incomplete event history. Missing release
outcomes remain unknown, not live. Exact session IDs remain authoritative.
Resolved labels and up to 120 observed samples for each of 256 resources are
cached privately under `~/src/docked_agents/reaper` (`REAPER_STATE_DIR` overrides it).
Peaks are sampled observations, not lifetime maxima. Released requests retain
last-observed usage, never a claim of current consumption. Observations from
before Reaper watched a request are unavailable, not reconstructed.

Consumption includes per-agent and per-lease CPU, RAM, tasks, and I/O rates
where the kernel delegates accounting. CPU is 100% per logical core for
leases and 100% for the whole machine in the host row. Host RAM, swap, load,
and NVIDIA GPU/VRAM/temperature/power are separate machine-wide readings.
GPU attribution to individual leases is not available. Missing counters and
first-sample rates show Unavailable (`--` in the terminal), not zero. This machine currently delegates CPU,
memory and PIDs but not I/O to user cgroups, so per-lease I/O is unavailable.
Processes outside leased cgroups are included only in host totals.
