#!/usr/bin/env python3
"""Shared static reports with explicit, capability-authorized feedback delivery."""

import argparse
from datetime import datetime, timezone
import functools
import hmac
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import json
import math
import os
from pathlib import Path
import re
import secrets
import socket
import tempfile
from urllib.parse import unquote, urlsplit

MAX_BODY = 1024 * 1024
REVIEW_ID = re.compile(r"[A-Za-z0-9][A-Za-z0-9_-]{0,127}\Z")
SUBMISSION_ID = re.compile(r"[0-9a-f]{32}\.json\Z")


def review_directory(state, review_id):
    if not REVIEW_ID.fullmatch(review_id):
        raise ValueError("invalid review id")
    return state / "feedback" / review_id


def atomic_json(path, data):
    """Publish a complete fsynced file without replacing an existing entry."""
    fd, temporary = tempfile.mkstemp(prefix=".pending-", dir=path.parent)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as stream:
            json.dump(data, stream, ensure_ascii=True, allow_nan=False)
            stream.write("\n")
            stream.flush()
            os.fsync(stream.fileno())
        os.link(temporary, path)
    finally:
        os.unlink(temporary)
    fsync_directory(path.parent)


def fsync_directory(path):
    fd = os.open(path, os.O_RDONLY | os.O_DIRECTORY)
    try:
        os.fsync(fd)
    finally:
        os.close(fd)


def registration(directory):
    with (directory / "config.json").open(encoding="utf-8") as stream:
        config = json.load(stream)
    if not isinstance(config, dict) or not isinstance(config.get("token"), str) or not config["token"]:
        raise ValueError("invalid feedback registration")
    return config


def create_feedback(state, review_id):
    directory = review_directory(state, review_id)
    directory.mkdir(parents=True, mode=0o700, exist_ok=True)
    fsync_directory(directory.parent)
    fsync_directory(state)
    try:
        atomic_json(directory / "config.json", {"token": secrets.token_urlsafe(32)})
    except FileExistsError:
        pass  # Reusing a review must not invalidate the token in its published page.
    config = registration(directory)
    return {"endpoint": f"/_feedback/{review_id}", "token": config["token"], "storage_directory": str(directory)}


def read_feedback(state, review_id):
    directory = review_directory(state, review_id)
    registration(directory)
    submissions = []
    for path in sorted(directory.iterdir()):
        if SUBMISSION_ID.fullmatch(path.name):
            with path.open(encoding="utf-8") as stream:
                submissions.append({"id": path.stem, **json.load(stream)})
    return submissions


def reject_constant(value):
    raise ValueError(f"invalid JSON constant: {value}")


def finite_float(value):
    number = float(value)
    if not math.isfinite(number):
        raise ValueError("JSON number out of range")
    return number


class ReportHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, state, **kwargs):
        self.feedback_root = (state / "feedback").resolve()
        self.state = state
        super().__init__(*args, **kwargs)

    def setup(self):
        super().setup()
        self.connection.settimeout(10)

    def json_response(self, status, data):
        body = json.dumps(data, ensure_ascii=True, allow_nan=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Connection", "close")
        self.end_headers()
        self.close_connection = True
        if self.command != "HEAD":
            self.wfile.write(body)

    def send_head(self):
        # Reserve the API namespace and deny even published symlinks into storage.
        path = unquote(urlsplit(self.path).path)
        target = Path(self.translate_path(self.path)).resolve()
        candidates = [target]
        if target.is_dir():
            candidates.extend((target / index).resolve() for index in ("index.html", "index.htm"))
        if path == "/_feedback" or path.startswith("/_feedback/") or any(candidate == self.feedback_root or self.feedback_root in candidate.parents for candidate in candidates):
            self.json_response(404, {"error": "not found"})
            return None
        return super().send_head()

    def send_error(self, code, message=None, explain=None):
        if unquote(getattr(self, "path", "")).split("?", 1)[0].startswith("/_feedback"):
            self.json_response(code, {"error": message or self.responses.get(code, ("request failed",))[0]})
        else:
            super().send_error(code, message, explain)

    def do_POST(self):
        try:
            self.receive_feedback()
        except (socket.timeout, TimeoutError):
            self.json_response(408, {"error": "request timed out"})
        except (OSError, ValueError, RecursionError):
            self.json_response(500, {"error": "feedback storage unavailable"})

    def receive_feedback(self):
        try:
            route = urlsplit(self.path)
        except ValueError:
            self.json_response(400, {"error": "invalid request path"})
            return
        if route.query or route.fragment or not route.path.startswith("/_feedback/"):
            self.json_response(404, {"error": "not found"})
            return
        review_id = route.path[len("/_feedback/"):]
        try:
            directory = review_directory(self.state, review_id)
        except ValueError:
            self.json_response(400, {"error": "invalid review id"})
            return
        origins = self.headers.get_all("Origin", [])
        hosts = self.headers.get_all("Host", [])
        if len(origins) != 1 or len(hosts) != 1 or origins[0] != "http://" + hosts[0]:
            self.json_response(403, {"error": "same-origin submission required"})
            return
        if len(self.headers.get_all("Content-Type", [])) != 1 or self.headers.get_content_type() != "application/json":
            self.json_response(400, {"error": "application/json required"})
            return
        lengths = self.headers.get_all("Content-Length", [])
        if self.headers.get_all("Transfer-Encoding") or len(lengths) != 1 or not re.fullmatch(r"[0-9]+", lengths[0]):
            self.json_response(400, {"error": "one valid Content-Length required"})
            return
        if len(lengths[0]) > 10 or int(lengths[0]) > MAX_BODY:
            self.json_response(413, {"error": "payload exceeds 1 MiB"})
            return
        length = int(lengths[0])
        try:
            config = registration(directory)
        except FileNotFoundError:
            self.json_response(404, {"error": "unknown review"})
            return
        body = self.rfile.read(length)
        try:
            if len(body) != length:
                raise ValueError("incomplete body")
            data = json.loads(body.decode("utf-8"), parse_constant=reject_constant, parse_float=finite_float)
            if not isinstance(data, dict) or not isinstance(data.get("token"), str) or not isinstance(data.get("payload"), dict):
                raise ValueError("invalid envelope")
        except (ValueError, UnicodeError, RecursionError):
            self.json_response(400, {"error": "invalid JSON feedback envelope"})
            return
        if not hmac.compare_digest(data["token"].encode("utf-8", errors="surrogatepass"), config["token"].encode("utf-8", errors="surrogatepass")):
            self.json_response(403, {"error": "invalid token"})
            return
        submission = {"received_at": datetime.now(timezone.utc).isoformat(), "payload": data["payload"]}
        while True:
            submission_id = secrets.token_hex(16)
            try:
                atomic_json(directory / f"{submission_id}.json", submission)
                break
            except FileExistsError:
                continue
        self.json_response(201, {"id": submission_id})


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("port", type=int, nargs="?", default=8000)
    parser.add_argument("--bind", "-b", default="")
    parser.add_argument("--directory", "-d", default=os.getcwd())
    parser.add_argument("--state", type=Path, required=True)
    commands = parser.add_mutually_exclusive_group()
    commands.add_argument("--feedback-create", metavar="REVIEW_ID")
    commands.add_argument("--feedback-read", metavar="REVIEW_ID")
    args = parser.parse_args()
    state = args.state.resolve()
    try:
        if args.feedback_create is not None:
            print(json.dumps(create_feedback(state, args.feedback_create)))
            return
        if args.feedback_read is not None:
            print(json.dumps(read_feedback(state, args.feedback_read)))
            return
    except (OSError, ValueError) as error:
        parser.exit(1, f"serve-report: {error}\n")
    handler = functools.partial(ReportHandler, directory=args.directory, state=state)
    # Match http.server's address-family selection, including IPv6 binds.
    address = socket.getaddrinfo(args.bind or None, args.port, type=socket.SOCK_STREAM, flags=socket.AI_PASSIVE)[0]
    class ReportServer(ThreadingHTTPServer):
        address_family = address[0]

    with ReportServer(address[4], handler) as server:
        state.mkdir(parents=True, exist_ok=True)
        for name, value in (("server.pid", os.getpid()), ("server.port", server.server_port)):
            fd, temporary = tempfile.mkstemp(prefix=".server-", dir=state)
            try:
                with os.fdopen(fd, "w", encoding="ascii") as stream:
                    stream.write(f"{value}\n")
                    stream.flush()
                    os.fsync(stream.fileno())
                os.replace(temporary, state / name)
            finally:
                if os.path.exists(temporary):
                    os.unlink(temporary)
        fsync_directory(state)
        print(f"Serving HTTP on {args.bind or 'all interfaces'} port {server.server_port}", flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == "__main__":
    main()
