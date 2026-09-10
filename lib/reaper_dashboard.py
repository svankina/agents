"""Local, read-only Reaper dashboard; broker history and observed usage stay distinct."""
from __future__ import annotations

from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import importlib
import json
import os
from pathlib import Path
import secrets
import signal
import threading
import time

from lib.resource_monitor import Collector, METRICS


class PeerLabels:
    """Resolve session IDs off the sampling thread, retaining departed identities."""

    def __init__(self, loader, records=None):
        self.loader = loader
        self.records = records or {}
        self.names = {key: value["label"] for key, value in self.records.items()}
        self.error = None
        self.stop = threading.Event()
        self.thread = threading.Thread(target=self.run, daemon=True, name="reaper-identities")
        self.thread.start()

    def run(self):
        try:
            peers = self.loader()
        except (ImportError, RuntimeError) as error:
            self.error = str(error)
            return
        while not self.stop.is_set():
            try:
                result = peers.discover_peers()
                panes_by_pid = {}
                try:
                    with importlib.import_module("herd.brokerclient").Client() as client:
                        for pane in client.list_panes():
                            for pid in (pane.get("pid"), pane.get("fg_pid")):
                                if pid:
                                    panes_by_pid[pid] = pane["id"]
                except (ImportError, OSError, RuntimeError):
                    pass  # Session names remain useful without a running Herd broker.
                records = dict(self.records)
                for peer in result["peers"]:
                    project = peer["cwd"]
                    label = peer["displayName"]
                    if label.lower() == "main":
                        label = Path(project).name or label
                    records[peer["sessionId"]] = {
                        "id": peer["sessionId"], "label": label, "project": project,
                        "pane": peer.get("pane") or panes_by_pid.get(peer["pid"], ""), "known": True,
                    }
                self.records = dict(list(records.items())[-2000:])
                self.names = {key: value["label"] + (f" [{value['pane']}]" if value["pane"] else "")
                              for key, value in self.records.items()}
                self.error = "; ".join(result.get("errors", [])[:1]) or None
            except Exception as error:
                self.error = f"Peer labels unavailable: {error}"
            self.stop.wait(10)


def resource(row):
    return {
        "id": row.get("leaseId") or row["id"], "ownerId": row["ownerId"],
        "kind": row["kind"], "name": row["name"], "state": "requested",
        "requestedAt": None, "acquiredAt": None, "endedAt": None,
        "reason": None, "events": [], "metrics": dict.fromkeys(METRICS),
    }


class Dashboard:
    def __init__(self, loader, *, state_dir=None, collector=None):
        self.collector = collector or Collector(event_limit=2000, include_history=True)
        self.state_dir = Path(state_dir) if state_dir else Path.home() / "src/docked_agents/reaper"
        self.cache_path = self.state_dir / "observations.json"
        self.observations = {}
        self.cache_error = None
        records = {}
        try:
            if self.cache_path.exists():
                if self.cache_path.stat().st_size > 8 * 1024 * 1024:
                    raise ValueError("observation cache exceeds 8 MiB")
                cached = json.loads(self.cache_path.read_text())
                if cached.get("version") != 1:
                    raise ValueError("unsupported observation cache")
                records = {key: value for key, value in cached["agents"].items()
                           if isinstance(value, dict) and all(isinstance(value.get(field), str)
                           for field in ("id", "label", "project", "pane"))}
                self.observations = {key: value for key, value in cached["observations"].items()
                                     if isinstance(value, dict) and isinstance(value.get("samples"), list)}
        except (OSError, ValueError, KeyError, TypeError, AttributeError) as error:
            self.cache_error = f"Prior observations unavailable: {error}"
        self.labels = PeerLabels(loader, records)
        self.last_save = 0.0
        self.payload = b"{}"
        self.stopping = threading.Event()

    def sample(self):
        snapshot = self.collector.sample()
        now = snapshot["sampledAt"]
        resources = {}
        for event in reversed(snapshot["events"]):
            # Denied operations on unknown IDs are not acquisition requests.
            if not event.get("leaseId") or not event.get("kind"):
                continue
            item = resources.setdefault(event["leaseId"], resource(event))
            if item["ownerId"] != event["ownerId"]:
                continue
            item["events"].append({key: event.get(key) for key in ("seq", "ts", "action", "reason")})
            action = event["action"]
            if action == "requested":
                item["requestedAt"] = event["ts"]
            elif action == "acquired":
                item["acquiredAt"] = event["ts"]
                item["state"] = "active"
            elif action in ("released", "reclaimed", "denied"):
                item["state"] = action
                item["endedAt"] = event["ts"]
            elif action == "failed":
                item["state"] = "failed"
            elif action == "release_requested" and item["endedAt"] is None:
                item["state"] = "releasing"
            if event.get("reason"):
                item["reason"] = event["reason"]
        registered = {row["id"]: row for row in snapshot.get("historyLeases", [])}
        live_ids = {row["id"] for row in snapshot["leases"]}
        for item in resources.values():
            row = registered.get(item["id"])
            if row and row["ownerId"] == item["ownerId"] and row["state"] == "released":
                if item["state"] != "reclaimed":
                    item["state"] = "released"
            elif item["id"] not in live_ids and item["state"] in ("active", "reserved", "releasing"):
                item["state"] = "unknown"
                item["reason"] = "No current lease; the retained history does not establish its release outcome."
        for lease in snapshot["leases"]:
            item = resources.setdefault(lease["id"], resource(lease))
            item.update(state=lease["state"], metrics={key: lease.get(key) for key in METRICS},
                        pid=lease.get("pid"), unit=lease.get("unit"), ownerPid=lease.get("ownerPid"))
            observed = self.observations.setdefault(lease["id"], {
                "samples": [], "observedPeak": dict.fromkeys(("cpuPercent", "memoryBytes", "tasks")),
                "lastObservedAt": None, "lastObservedMetrics": dict.fromkeys(METRICS),
            })
            # Unknown intervals remain gaps, not interpolated zeroes.
            observed["samples"].append({"ts": now, "cpuPercent": lease.get("cpuPercent"),
                                         "memoryBytes": lease.get("memoryBytes")})
            observed["samples"] = observed["samples"][-120:]
            if any(lease.get(key) is not None for key in METRICS):
                observed["lastObservedAt"] = now
                observed["lastObservedMetrics"] = dict(item["metrics"])
            for key in ("cpuPercent", "memoryBytes", "tasks"):
                value = lease.get(key)
                previous = observed["observedPeak"].get(key)
                if value is not None:
                    observed["observedPeak"][key] = value if previous is None else max(previous, value)
        # Keep live leases even if very old; cap stored observations, not broker history.
        recent_ids = sorted(self.observations, key=lambda key: (
            key in live_ids, self.observations[key].get("lastObservedAt") or 0), reverse=True)[:256]
        if snapshot["registryAvailable"]:
            self.observations = {key: self.observations[key] for key in recent_ids if key in resources}
        for item in resources.values():
            item.update(self.observations.get(item["id"], {
                "samples": [], "observedPeak": dict.fromkeys(("cpuPercent", "memoryBytes", "tasks")),
                "lastObservedAt": None, "lastObservedMetrics": dict.fromkeys(METRICS),
            }))
        owners = {item["ownerId"] for item in resources.values()}
        labels = self.labels.records
        agents = [labels.get(owner, {"id": owner, "label": "Unresolved agent", "project": "",
                                     "pane": "", "known": False}) for owner in sorted(owners)]
        errors = list(snapshot["errors"])
        if self.labels.error:
            errors.append(self.labels.error)
        if self.cache_error:
            errors.append(self.cache_error)
        result = {
            "sampledAt": now, "host": snapshot["host"], "totals": snapshot["totals"],
            "errors": errors, "agents": agents,
            "health": {"registryAvailable": snapshot["registryAvailable"], "identitiesAvailable": not self.labels.error},
            "resources": sorted(resources.values(), key=lambda item: item["requestedAt"] or item["acquiredAt"] or 0, reverse=True),
            "history": {"events": len(snapshot["events"]), "limit": 2000,
                        "observedSamplesPerResource": 120, "observationsAreLifetimeTotals": False},
        }
        self.payload = json.dumps(result, allow_nan=False, separators=(",", ":")).encode()
        if time.monotonic() - self.last_save >= 10:
            self.save()
        return result

    def save(self):
        try:
            self.state_dir.mkdir(parents=True, mode=0o700, exist_ok=True)
            cache = {"version": 1, "agents": self.labels.records, "observations": self.observations}
            temporary = self.cache_path.with_suffix(f".{os.getpid()}.tmp")
            with open(temporary, "w", opener=lambda path, flags: os.open(path, flags, 0o600)) as stream:
                json.dump(cache, stream, allow_nan=False, separators=(",", ":"))
            temporary.replace(self.cache_path)
            self.cache_error = None
        except (OSError, ValueError) as error:
            self.cache_error = f"Observed history could not be saved: {error}"
        self.last_save = time.monotonic()

    def run(self, interval):
        while not self.stopping.wait(interval):
            try:
                self.sample()
            except Exception as error:
                # Preserve the timestamp of the last good sample: the UI marks it stale.
                print(f"Reaper sampling failed: {error}", flush=True)


def make_server(root, dashboard, *, port=0, token):
    """Build the capability-scoped dashboard server."""
    prefix = f"/{token}/"
    assets = {
        "": ("reaper-ui/index.html", "text/html; charset=utf-8"),
        "reaper-dashboard.css": ("reaper-ui/reaper-dashboard.css", "text/css; charset=utf-8"),
        "reaper-dashboard.js": ("reaper-ui/reaper-dashboard.js", "text/javascript; charset=utf-8"),
        "reaper.svg": ("reaper.svg", "image/svg+xml"),
    }

    class Handler(BaseHTTPRequestHandler):
        def do_GET(self):
            # Exact Host + unguessable path; no CORS, directory browsing, broker token or control API.
            if self.headers.get("Host") != f"127.0.0.1:{self.server.server_port}" or not self.path.startswith(prefix):
                self.send_error(404)
                return
            endpoint = self.path[len(prefix):]
            if endpoint == "api/snapshot":
                body, content_type = dashboard.payload, "application/json"
            elif endpoint in assets:
                filename, content_type = assets[endpoint]
                body = (root / "assets" / filename).read_bytes()
            else:
                self.send_error(404)
                return
            self.send_response(200)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.send_header("X-Content-Type-Options", "nosniff")
            self.send_header("Referrer-Policy", "no-referrer")
            self.send_header("Content-Security-Policy", "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors file: http://127.0.0.1:* http://localhost:*")
            try:
                self.end_headers()
                self.wfile.write(body)
            except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
                # A peer can close after a valid request and before buffered headers flush.
                pass

        def log_message(self, *_):
            pass

    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    server.daemon_threads = True
    return server


def serve(root, loader, *, port=0, interval=2, state_dir=None):
    dashboard = Dashboard(loader, state_dir=state_dir)
    token = os.environ.get("REAPER_TOKEN") or secrets.token_urlsafe(24)
    server = make_server(root, dashboard, port=port, token=token)
    server.timeout = 0.5
    signal.signal(signal.SIGTERM, lambda *_: dashboard.stopping.set())
    signal.signal(signal.SIGINT, lambda *_: dashboard.stopping.set())
    signal.signal(signal.SIGHUP, lambda *_: dashboard.stopping.set())
    dashboard.sample()
    worker = threading.Thread(target=dashboard.run, args=(interval,), daemon=True, name="reaper-sampler")
    worker.start()
    if os.isatty(1):
        print("\033]2;Reaper\007", end="", flush=True)
    print(f"Reaper dashboard ready: http://127.0.0.1:{server.server_port}/{token}/", flush=True)
    try:
        while not dashboard.stopping.is_set():
            server.handle_request()
    finally:
        dashboard.stopping.set()
        dashboard.labels.stop.set()
        worker.join(timeout=5)
        dashboard.save()
        server.server_close()
