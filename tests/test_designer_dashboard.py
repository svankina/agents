"""The dock exposes recorded history, never arbitrary files or a guessed live identity."""
import http.client
import json
from pathlib import Path
import tempfile
import threading
import unittest

from lib.designer_dashboard import Dashboard, Settings, make_server, runtime_state


class DesignerDashboardBoundary(unittest.TestCase):
    def setUp(self):
        temporary = tempfile.TemporaryDirectory()
        self.addCleanup(temporary.cleanup)
        self.root = Path(temporary.name)
        self.settings = Settings(self.root / "state", self.root / "sessions", self.root / "channels", self.root / "project")
        self.settings.session_dir.mkdir()
        self.board = Dashboard(self.settings, discover=lambda: {"peers": [], "errors": []})
        self.addCleanup(self.board.close)
        self.board.sample()
        self.token = "test-capability-1234567890123456"
        self.server = make_server(Path(__file__).resolve().parents[1], self.board, 0, self.token)
        self.worker = threading.Thread(target=self.server.serve_forever, daemon=True)
        self.worker.start()
        self.addCleanup(self.stop)

    def stop(self):
        self.server.shutdown()
        self.worker.join()
        self.server.server_close()

    def get(self, path, host=None, etag=None):
        connection = http.client.HTTPConnection("127.0.0.1", self.server.server_port, timeout=3)
        self.addCleanup(connection.close)
        headers = {"Host": host} if host else {}
        if etag:
            headers["If-None-Match"] = etag
        connection.request("GET", path, headers=headers)
        response = connection.getresponse()
        return response.status, response.getheaders(), response.read()

    def test_history_requires_capability_and_exact_loopback_host(self):
        path = f"/{self.token}/api/snapshot"
        status, headers, body = self.get(path)
        self.assertEqual(status, 200)
        self.assertEqual(json.loads(body)["runtime"]["status"], "offline")
        self.assertEqual(self.get(path, "attacker.invalid")[0], 404)
        self.assertEqual(self.get("/api/snapshot")[0], 404)
        self.assertEqual(self.get("/wrong-capability/api/snapshot")[0], 404)
        self.assertNotIn("Access-Control-Allow-Origin", dict(headers))
    def test_reviews_endpoint_serves_reviews_html(self):
        status, headers, body = self.get(f"/{self.token}/reviews")
        self.assertEqual(status, 200)
        self.assertIn(b"Visual History & Reviews", body)


    def test_traversal_does_not_expose_private_state(self):
        for suffix in ("../snapshot.json", "images/../../snapshot.json", "images/%2e%2e%2fsnapshot.json", "snapshot.json"):
            with self.subTest(suffix=suffix):
                self.assertEqual(self.get(f"/{self.token}/{suffix}")[0], 404)

    def test_conditional_snapshot_refreshes_age_without_resending_history(self):
        path = f"/{self.token}/api/snapshot"
        _, headers, body = self.get(path)
        etag = dict(headers)["ETag"]
        self.board.sample()
        status, headers, body = self.get(path, etag=etag)
        self.assertEqual((status, body), (304, b""))
        self.assertGreater(float(dict(headers)["X-Sampled-At"]), 0)
        incoming = {"type": "custom_message", "customType": "peer-message", "id": "new-message",
                    "timestamp": "2026-01-01T00:00:00Z",
                    "details": {"from": "omp:reviewer/Main", "to": "omp:designer/Main",
                                "body": "Increase the contrast.", "replyTo": "request"}}
        (self.settings.session_dir / "new.jsonl").write_text(json.dumps(incoming) + "\n")
        self.board.sample()
        status, headers, body = self.get(path, etag=etag)
        self.assertEqual(status, 200)
        self.assertNotEqual(dict(headers)["ETag"], etag)
        self.assertEqual(json.loads(body)["events"][0]["body"], "Increase the contrast.")

    def test_manual_view_keeps_security_boundary(self):
        status, headers, body = self.get(f"/{self.token}/?manual=1")
        self.assertEqual(status, 200)
        self.assertIn(b"designer.js", body)
        self.assertIn("object-src 'none'", dict(headers)["Content-Security-Policy"])

    def test_duplicate_project_sessions_are_not_silently_selected(self):
        peer = {"kind": "main", "cwd": str(self.settings.project_dir), "status": "idle", "displayName": "Designer"}
        peers = [dict(peer, id="one", sessionId="first"), dict(peer, id="two", sessionId="second")]
        state = runtime_state(peers, self.settings.project_dir)
        self.assertEqual(state["status"], "ambiguous")
        self.assertIsNone(state["peerId"])
        # Similar display names in another project do not make this session ambiguous.
        peers[1]["cwd"] = str(self.root / "other")
        self.assertEqual(runtime_state(peers, self.settings.project_dir)["peerId"], "one")

    def test_hosted_process_is_the_identity_regardless_of_project_siblings(self):
        peer = {"kind": "main", "cwd": str(self.settings.project_dir), "status": "idle", "displayName": "Designer"}
        peers = [dict(peer, id="one", sessionId="first", pid=41), dict(peer, id="two", sessionId="second", pid=42)]
        state = runtime_state(peers, self.settings.project_dir, pid=42)
        self.assertEqual((state["status"], state["peerId"], state["pid"]), ("idle", "two", 42))
        # The hosted process not yet registered is offline, not a sibling borrowed by project.
        state = runtime_state(peers[:1], self.settings.project_dir, pid=42)
        self.assertEqual((state["status"], state["peerId"]), ("offline", None))


if __name__ == "__main__":
    unittest.main()
