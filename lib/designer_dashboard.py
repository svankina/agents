"""Designer webview: hosts the Designer OMP process, keeps durable history, no second identity."""
from __future__ import annotations

from contextlib import contextmanager
from dataclasses import dataclass
import fcntl
import hashlib
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import importlib
import json
import os
from pathlib import Path
import re
import secrets
import shutil
import signal
import subprocess
import sys
import threading
import time
from urllib.parse import urlsplit

from lib.designer_history import History


@dataclass(frozen=True)
class Settings:
    state_dir: Path
    session_dir: Path
    channels_dir: Path
    project_dir: Path
    contact_sessions_dir: Path | None = None

    @classmethod
    def defaults(cls):
        home = Path.home()
        state = Path(os.environ.get("XDG_STATE_HOME", home / ".local/state"))
        root = home / "src/docked_agents/designer"
        project = Path(os.environ.get("DESIGNER_PROJECT_DIR", root / "workspace")).expanduser().resolve()
        return cls(
            Path(os.environ.get("DESIGNER_STATE_DIR", root)).expanduser(),
            Path(os.environ.get("DESIGNER_SESSION_DIR", root / "sessions")).expanduser(),
            state / "omp/peer-channels", project,
            Path(os.environ.get("DESIGNER_CONTACT_SESSIONS_DIR",
                                Path(os.environ.get("PI_CODING_AGENT_DIR", home / ".omp/agent")) / "sessions")).expanduser(),
        )

    def environment(self):
        environment = {"DESIGNER_STATE_DIR": str(self.state_dir), "DESIGNER_SESSION_DIR": str(self.session_dir),
                       "DESIGNER_PROJECT_DIR": str(self.project_dir)}
        if self.contact_sessions_dir is not None:
            environment["DESIGNER_CONTACT_SESSIONS_DIR"] = str(self.contact_sessions_dir)
        return environment


def herd_module(name):
    executable = shutil.which("herd")
    if not executable:
        raise RuntimeError("herd is not installed")
    checkout = str(Path(executable).resolve().parent.parent)
    if checkout not in sys.path:
        sys.path.insert(0, checkout)
    return importlib.import_module(f"herd.{name}")


def runtime_state(peers, project_dir, errors=(), pid=None):
    if pid is None:
        matches = [peer for peer in peers if peer.get("kind") == "main"
                   and Path(peer.get("cwd", "")).resolve() == project_dir.resolve()]
    else:
        # The hosted process is the identity; a sibling session in the same project is not.
        matches = [peer for peer in peers if peer.get("pid") == pid]
    base = {"name": "Designer", "cwd": str(project_dir), "peerId": None, "sessionId": None,
            "pid": pid, "error": None}
    if len(matches) > 1:
        return dict(base, status="ambiguous", error="Multiple Designer sessions are online; no session was selected.")
    if not matches:
        return dict(base, status="offline", error="; ".join(errors) or "Designer is offline. Recorded history is still available.")
    peer = matches[0]
    return dict(base, status=peer["status"], peerId=peer["id"], sessionId=peer["sessionId"],
                name=peer.get("displayName") or "Designer", error="; ".join(errors) or None)


def _encode_snapshot(snapshot):
    # Observation time is freshness metadata, not a change to the recorded history.
    content = {key: value for key, value in snapshot.items() if key != "sampledAt"}
    validator = hashlib.sha256(json.dumps(content, ensure_ascii=False, sort_keys=True).encode()).hexdigest()
    return json.dumps(snapshot, ensure_ascii=False).encode(), f'W/"{validator}"'


class Dashboard:
    def __init__(self, settings, discover=None, pid=None):
        self.settings = settings
        settings.state_dir.mkdir(parents=True, exist_ok=True, mode=0o700)
        self.lock = threading.RLock()
        self.discover = discover or herd_module("peers").discover_peers
        self.stopping = threading.Event()
        self.history = History(settings.state_dir, settings.session_dir, settings.channels_dir, settings.project_dir,
                               contact_sessions_dir=settings.contact_sessions_dir)
        # The OMP process this dashboard hosts; None for CLI imports, which observe the project.
        self.pid = pid
        self.snapshot = None
        self.payload = b"{}"
        self.etag = None

    @contextmanager
    def locked(self):
        with self.lock:
            # CLI imports and the sampler share one writer boundary, not just SQLite's individual statements.
            with (self.settings.state_dir / "history.lock").open("a") as lock:
                fcntl.flock(lock, fcntl.LOCK_EX)
                yield

    def sample(self):
        try:
            discovery = self.discover()
        except (OSError, RuntimeError) as error:
            discovery = {"peers": [], "errors": [str(error)]}
        with self.locked():
            self.history.sync(discovery["peers"])
            snapshot = self.history.snapshot()
            snapshot["runtime"] = runtime_state(discovery["peers"], self.settings.project_dir, discovery.get("errors", []), self.pid)
            snapshot["warnings"] = list(dict.fromkeys(snapshot.get("warnings", []) + discovery.get("errors", [])))
            payload, etag = _encode_snapshot(snapshot)
            # This is a readable durable handoff for agents even when peer delivery is uncertain.
            temporary = self.settings.state_dir / "snapshot.json.tmp"
            temporary.write_bytes(payload)
            temporary.chmod(0o600)
            temporary.replace(self.settings.state_dir / "snapshot.json")
            self.snapshot, self.payload, self.etag = snapshot, payload, etag
        return snapshot

    def run(self, log=sys.stderr):
        # The terminal belongs to the hosted OMP process: nothing is written to it here.
        while not self.stopping.wait(2):
            try:
                self.sample()
            except Exception as error:
                # Preserve the last measured timestamp: the client then marks it stale.
                with self.lock:
                    snapshot = dict(self.snapshot or {})
                    snapshot["warnings"] = [f"History refresh failed: {error}"]
                    self.snapshot = snapshot
                    self.payload, self.etag = _encode_snapshot(snapshot)
                print(f"Designer history refresh failed: {error}", file=log, flush=True)

    def close(self):
        self.history.close()


def make_server(root, board, port, token):
    if not re.fullmatch(r"[A-Za-z0-9_-]{24,128}", token):
        raise ValueError("Dashboard token must contain 24–128 URL-safe characters")
    prefix = f"/{token}/"
    assets = {"": ("index.html", "text/html; charset=utf-8"),
              "designer.css": ("designer.css", "text/css; charset=utf-8"),
              "designer.js": ("designer.js", "text/javascript; charset=utf-8"),
              "designer.svg": ("designer.svg", "image/svg+xml"),
              "reviews": ("reviews.html", "text/html; charset=utf-8"),
              "reviews.html": ("reviews.html", "text/html; charset=utf-8"),
              "reviews.css": ("reviews.css", "text/css; charset=utf-8"),
              "reviews.js": ("reviews.js", "text/javascript; charset=utf-8")}

    class Handler(BaseHTTPRequestHandler):
        def do_GET(self):
            path = urlsplit(self.path).path
            if self.headers.get("Host") != f"127.0.0.1:{self.server.server_port}" or not path.startswith(prefix):
                self.send_error(404)
                return
            endpoint = path[len(prefix):]
            status, etag, sampled = 200, None, None
            if endpoint == "api/snapshot":
                with board.lock:
                    body, content_type = board.payload, "application/json"
                    etag = board.etag
                    sampled = (board.snapshot or {}).get("sampledAt")
                    if etag and self.headers.get("If-None-Match") == etag:
                        status, body = 304, b""
            elif endpoint in assets:
                name, content_type = assets[endpoint]
                body = (root / "assets/designer-ui" / name).read_bytes()
            elif endpoint.startswith(("images/", "thumbnails/")):
                with board.locked():
                    image = (board.history.thumbnail_path(endpoint.removeprefix("thumbnails/"))
                             if endpoint.startswith("thumbnails/") else
                             board.history.image_path(endpoint.removeprefix("images/")))
                    if image is None:
                        self.send_error(404)
                        return
                    file, content_type = image
                    try:
                        body = file.read_bytes()
                    except OSError:
                        self.send_error(404)
                        return
            else:
                self.send_error(404)
                return
            self.send_response(status)
            self.send_header("Content-Type", content_type)
            if status != 304:
                self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "private, max-age=31536000, immutable"
                             if endpoint.startswith(("images/", "thumbnails/")) else "no-store")
            if etag:
                self.send_header("ETag", etag)
            if sampled is not None:
                self.send_header("X-Sampled-At", str(sampled))
            self.send_header("X-Content-Type-Options", "nosniff")
            self.send_header("Referrer-Policy", "no-referrer")
            self.send_header("Content-Security-Policy", "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors file: http://127.0.0.1:* http://localhost:*")
            if content_type == "image/svg+xml":
                # An archived SVG is safe as an img, but also constrain direct navigation to it.
                self.send_header("Content-Disposition", 'inline; filename="revision.svg"')
                self.send_header("Content-Security-Policy", "sandbox; default-src 'none'; style-src 'unsafe-inline'")
            self.end_headers()
            try:
                self.wfile.write(body)
            except (BrokenPipeError, ConnectionResetError):
                pass

        def log_message(self, *_):
            pass

    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    server.daemon_threads = True
    return server


def serve(root, settings, command, port=0):
    """Run the dashboard around `command`, the Designer OMP process, until it exits."""
    settings.state_dir.mkdir(parents=True, exist_ok=True, mode=0o700)
    with (settings.state_dir / "server.lock").open("a") as lock:
        # A superseded dock is still winding down when its replacement starts.
        deadline = time.monotonic() + 15
        while True:
            try:
                fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
                break
            except BlockingIOError:
                if time.monotonic() >= deadline:
                    raise RuntimeError("Designer dashboard is already running for this state directory") from None
                time.sleep(.2)
        token = os.environ.get("DESIGNER_DOCK_TOKEN") or secrets.token_urlsafe(24)
        environment = {key: value for key, value in os.environ.items() if key != "DESIGNER_DOCK_TOKEN"}
        # OMP owns the terminal from here; the dashboard's own diagnostics go beside its state.
        with (settings.state_dir / "dashboard.log").open("a") as log:
            agent = subprocess.Popen(command, cwd=settings.project_dir, env=environment)
            # Terminal keystrokes reach the agent, not this host; the pane closing does.
            signal.signal(signal.SIGINT, signal.SIG_IGN)
            for sig in (signal.SIGTERM, signal.SIGHUP):
                signal.signal(sig, lambda number, _: agent.send_signal(number))
            try:
                board = Dashboard(settings, pid=agent.pid)
                server = make_server(root, board, port, token)
                board.sample()
            except BaseException:
                agent.terminate()
                agent.wait()
                raise
            print(f"Designer dashboard ready: http://127.0.0.1:{server.server_port}/{token}/", file=log, flush=True)
            worker = threading.Thread(target=board.run, args=(log,), daemon=True, name="designer-history")
            listener = threading.Thread(target=server.serve_forever, daemon=True, name="designer-http")
            worker.start()
            listener.start()
            try:
                return agent.wait()
            finally:
                board.stopping.set()
                server.shutdown()
                worker.join()
                listener.join()
                server.server_close()
                board.close()
