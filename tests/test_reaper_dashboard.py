"""Observable attribution and observation-history boundaries for Reaper."""
from pathlib import Path
import tempfile
from types import SimpleNamespace
import unittest
from unittest.mock import patch

from lib import reaper_dashboard as dashboard
from lib.resource_monitor import METRICS


class DashboardContracts(unittest.TestCase):
    def setUp(self):
        temporary = tempfile.TemporaryDirectory()
        self.addCleanup(temporary.cleanup)
        self.root = Path(temporary.name)
        self.labels = SimpleNamespace(records={}, error=None)
        self.enterContext(patch.object(dashboard, "PeerLabels", return_value=self.labels))
        self.feed = SimpleNamespace(sample=lambda: self.snapshot)
        self.view = dashboard.Dashboard(lambda: None, collector=self.feed, state_dir=self.root)

    def event(self, seq, action, lease="first", owner="owner-a", name="same purpose"):
        return {"seq": seq, "ts": float(seq), "action": action, "leaseId": lease,
                "ownerId": owner, "kind": "browser", "name": name, "reason": None}

    def publish(self, now, events, leases=()):
        self.snapshot = {"sampledAt": now, "leases": list(leases), "events": list(reversed(events)),
                         "host": {}, "totals": {}, "errors": [], "registryAvailable": True}
        return self.view.sample()

    def test_identical_names_do_not_merge_agents_or_requests(self):
        lease = {"id": "first", "ownerId": "owner-a", "kind": "browser",
                 "name": "same purpose", "state": "active"}
        result = self.publish(10, [self.event(1, "requested"), self.event(2, "acquired"),
            self.event(3, "requested", "second", "owner-b"),
            self.event(4, "denied", "second", "owner-b")], [lease])
        self.assertEqual({item["id"] for item in result["agents"]}, {"owner-a", "owner-b"})
        resources = {item["id"]: item for item in result["resources"]}
        self.assertEqual(resources["first"]["ownerId"], "owner-a")
        self.assertEqual(resources["first"]["state"], "active")
        self.assertEqual(resources["second"]["ownerId"], "owner-b")
        self.assertEqual(resources["second"]["state"], "denied")
        self.assertIsNone(resources["second"]["observedPeak"]["memoryBytes"])
        self.assertEqual([event["action"] for event in resources["first"]["events"]], ["requested", "acquired"])

    def test_release_and_restart_preserve_observations_not_live_usage(self):
        events = [self.event(1, "requested"), self.event(2, "acquired")]
        lease = {"id": "first", "ownerId": "owner-a", "kind": "browser", "name": "same purpose",
                 "state": "active", **dict.fromkeys(METRICS), "cpuPercent": 125.0,
                 "memoryBytes": 1048576, "tasks": 4}
        self.publish(10, events, [lease])
        events += [self.event(11, "released"), self.event(12, "release_requested")]
        closed = self.publish(14, events)["resources"][0]
        self.assertEqual(closed["state"], "released")
        self.assertEqual(closed["endedAt"], 11)
        self.assertIsNone(closed["metrics"]["memoryBytes"])
        self.assertEqual(closed["observedPeak"]["cpuPercent"], 125.0)
        self.assertEqual(closed["lastObservedAt"], 10)
        self.view.save()
        self.view = dashboard.Dashboard(lambda: None, collector=self.feed, state_dir=self.root)
        # The original request has fallen outside broker history. Do not invent it.
        restarted = self.publish(20, events[2:])["resources"][0]
        self.assertIsNone(restarted["requestedAt"])
        self.assertEqual(restarted["lastObservedAt"], 10)
        self.assertEqual(restarted["observedPeak"]["memoryBytes"], 1048576)
        self.assertIsNone(restarted["metrics"]["cpuPercent"])


    def test_missing_release_event_does_not_create_a_ghost_live_lease(self):
        events = [self.event(1, "requested"), self.event(2, "acquired")]
        missing = self.publish(10, events)["resources"][0]
        self.assertEqual(missing["state"], "unknown")
        self.snapshot["historyLeases"] = [{"id": "first", "ownerId": "owner-a", "state": "released"}]
        closed = self.view.sample()["resources"][0]
        self.assertEqual(closed["state"], "released")
        self.assertIsNone(closed["endedAt"])
        self.assertIsNone(closed["metrics"]["memoryBytes"])


    def test_registry_outage_preserves_previously_observed_usage(self):
        events = [self.event(1, "requested"), self.event(2, "acquired")]
        lease = {"id": "first", "ownerId": "owner-a", "kind": "browser",
                 "name": "same purpose", "state": "active", "memoryBytes": 1048576}
        self.publish(10, events, [lease])
        self.snapshot = {"sampledAt": 12, "leases": [], "events": [], "host": {},
                         "totals": {}, "errors": ["registry unavailable"], "registryAvailable": False}
        self.assertFalse(self.view.sample()["health"]["registryAvailable"])
        recovered = self.publish(14, [*events, self.event(13, "released")])["resources"][0]
        self.assertEqual(recovered["observedPeak"]["memoryBytes"], 1048576)
        self.assertEqual(recovered["lastObservedAt"], 10)


if __name__ == "__main__":
    unittest.main()
