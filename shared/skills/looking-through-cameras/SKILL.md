---
name: looking-through-cameras
description: Look through the house cameras — grab a still or short clip from the closet (Tapo), kitchen (Imou), CP Plus/EZYKam or TrueView units, without the vendor apps or cloud. Use whenever the user asks what a camera sees ("can you see through the cp-plus?", "check the kitchen camera", "is anyone in the closet?"), or wants a snapshot/clip to look at.
compatibility: Requires the `cameras` repo checkout (default ~/src/cameras) with its .env credentials, `camera-snap` on PATH, ffmpeg, and a host on the cameras' LAN (192.168.68.0/22). serve-report needed only for --serve.
---

# Looking through the cameras

One command. It picks the right vendor client, reuses the live dashboard when
that already holds the camera's only session, re-finds cameras whose DHCP lease
moved, and prints a JPEG (or MP4) path.

```bash
camera-snap                       # all cameras, in parallel
camera-snap cpplus                # one camera
camera-snap closet1 imou --serve  # publish + print URLs for the user
camera-snap ezykam --clip --seconds 15
camera-snap --list                # who is online, capture nothing (~5s)
camera-snap imou --json           # {camera, ok, path, source, host, error}
```

Then **`read` the JPEG** — that is how you actually see through the camera.
Deliver to the user with `--serve` (a link, not a path; see
`skill://serving-reports`).

## The cameras

|Key|Aliases|What it sees|Family / transport|
|---|---|---|---|
|`closet1`|`tapo1`, `1`|walk-in closet|TP-Link Tapo, TCP/8800 AES-CBC|
|`closet2`|`tapo2`, `2`|walk-in closet, 2nd angle|same|
|`imou`|`ranger`, `dahua`|kitchen / living area|Imou Ranger 2, RTSP/554|
|`ezykam`|`cpplus`, `cp-plus`, `ezy`|room with the ceiling AC, PTZ|CP-E25Q (Tuya), TCP/6668 + KCP/AES-GCM|
|`truecloud`|`trueview`, `juan`|outdoor/PTZ unit|JuanVision TUTK, TCP/10000|

"cp plus", "cp-e25q" and "ezykam" are the **same camera** — the vendor sells it
under both brands.

## Reading the output

`camera-snap` prints `<camera> <path-or-url>` per line, diagnostics on stderr,
and exits non-zero only if *every* camera failed. `source` tells you where the
pixels came from:

- `direct` — this process talked to the camera itself.
- `dashboard-hls` — the live dashboard was running, so the frame came from
  `http://127.0.0.1:18771/<cam>.m3u8`. **This is deliberate**: each camera
  allows exactly one session, and the dashboard's supervisor already owns it.
  Never bypass it with `--direct` while the dashboard is up — you get a failed
  capture *and* you knock the tile offline.

Stills are picked as the largest JPEG out of frames sampled across the window,
because these streams routinely emit torn/grey frames (the Tuya transport loses
HEVC fragments). A single-frame grab is how you end up handing the user a grey
rectangle.

## When a camera fails

- **`nothing on the LAN answering :<port>`** — the unit is powered off or on
  another network. It already swept the whole /22 (twice — these cameras drop
  SYNs when idle) before saying that. Tell the user it is off; do not retry in
  a loop.
- **`no camera discovered` (truecloud)** — same thing, via its UDP :9015
  discovery.
- **A camera moved** — handled: the sweep finds it and writes the new IP into
  the repo `.env` (`EZY_CAMERA_IP`, `IMOU_HOST`, `TAPO_CLOSET1_HOST`,
  `TRUECLOUD_HOST`), so the dashboard picks it up too.
- **Two Tapos, one IP** — the Tapo client accepts either camera's deviceId, so
  a swept IP cannot be attributed by protocol. The sweep never hands a camera an
  IP already claimed by its sibling; if both moved at once, check the picture.
- **Timeouts / partial video** — normal for these units; just re-run. The
  vendor client's own log is at `~/.cache/camera-snaps/<cam>.client.log`.

## Rules

- Never point a bare `ffmpeg`/vendor client at a camera while the dashboard or
  Frigate is running — one session per camera, and you will steal it.
- These are cameras inside someone's home. Capture what was asked for, keep the
  frames out of shared/served locations unless the user asked for a link, and
  do not leave a clip loop running.
- Snapshots land in `~/.cache/camera-snaps/` (`$CAMERA_SNAP_DIR`); they are not
  cleaned automatically, so delete large clips you no longer need.
- Continuous viewing is not this script's job — start the dashboard instead:
  `scripts/live-cameras-hls.sh` (`:18771`, PTZ on `:18772`), stop it with
  `scripts/stop-cameras-hls.sh`. Frigate NVR: `cd frigate && docker compose up -d`.

## Where the machinery lives

Canonical script: `scripts/camera-snap` in the `cameras` repo (set
`CAMERAS_REPO`/`CAMERA_ENV_FILE` if the checkout is not `~/src/cameras`); it is
symlinked onto PATH via `~/src/agents/bin/camera-snap`. It shells out to the
per-vendor clients in that repo (`tapo-direct-stream.py`,
`ezykam-direct-stream.py`, `truecloud-lan-stream.py`, ffmpeg for RTSP) and reads
credentials from the repo's gitignored `.env` — treat those digests like
passwords. Protocol details and the reverse-engineering story: that repo's
`README.md`, `WRITEUP.md` and `AGENTS.md`.
