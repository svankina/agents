"""Behavioral boundaries for durable imports and image observations (stdlib only)."""
import hashlib
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest

_spec = importlib.util.spec_from_file_location('designer_history', Path(__file__).resolve().parents[1] / 'lib/designer_history.py')
_module = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_module)
History = _module.History


class HistoryBoundaries(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix='designer-history-')
        self.root = Path(self.temp.name)
        self.sessions = self.root / 'sessions'
        self.sessions.mkdir()
        self.channels = self.root / 'channels'
        self.file = self.sessions / 'main.jsonl'
        self.write(self.file, {'type': 'session', 'id': 'designer-session'})
        self.history = self.open()

    def tearDown(self):
        self.history.close()
        self.temp.cleanup()

    def open(self):
        return History(self.root / 'state', self.sessions, self.channels, self.root)

    @staticmethod
    def write(path, *rows):
        with path.open('ab') as stream:
            for row in rows:
                stream.write((json.dumps(row) + '\n').encode())

    @staticmethod
    def incoming(body='Review this', record='incoming', peer='omp:old/Main', session='peer-session'):
        return dict(type='custom_message', customType='peer-message', id=record,
                    timestamp='2026-01-01T00:00:00Z', details=dict(
                        **{'from': peer, 'to': 'omp:designer/Main'}, body=body,
                        replyTo=record, senderSessionId=session, senderName='Design collaborator'))

    def restart(self):
        self.history.close()
        self.history = self.open()

    def test_partial_line_restart_and_late_receipt_preserve_both_directions(self):
        self.write(self.file, self.incoming(), dict(type='message', id='assistant', message=dict(
            role='assistant', content=[dict(type='toolCall', name='functions.hub', id='send-call',
                arguments=dict(op='send', to='omp:old/Main', message='Change the spacing'))])))
        receipt = dict(type='message', id='receipt', message=dict(role='toolResult', toolName='hub',
            toolCallId='send-call', details=dict(peerHub=dict(id='thread', receipt=dict(outcome='injected')))))
        encoded = json.dumps(receipt).encode()
        with self.file.open('ab') as stream:
            stream.write(encoded[:30])
        self.history.sync([])
        self.assertEqual({e['direction'] for e in self.history.snapshot()['events']}, {'in', 'out'})
        self.restart()
        with self.file.open('ab') as stream:
            stream.write(encoded[30:] + b'\n')
        self.history.sync([])
        self.history.sync([])
        snapshot = self.history.snapshot()
        self.assertEqual(len(snapshot['events']), 2)
        self.assertEqual(next(e for e in snapshot['events'] if e['direction'] == 'out')['delivery'], 'injected')
        self.assertEqual(len(snapshot['contacts']), 1)

    def test_channel_reply_excludes_thinking_and_tool_commentary(self):
        channel = self.channels / hashlib.sha256(b'designer-session').hexdigest() / ('a' * 64)
        channel.mkdir(parents=True)
        (channel / 'channel.json').write_text(json.dumps(dict(peerName='Collaborator', state='idle', pending=[])))
        request = self.incoming()['details']
        self.write(channel / 'session.jsonl', dict(type='session', id='worker-session'),
            dict(type='custom_message', id='request', customType='peer-channel-request', details=dict(peerMessage=request)),
            dict(type='message', id='working', message=dict(role='assistant', stopReason='toolUse', content=[
                dict(type='text', text='Working'), dict(type='thinking', thinking='Private'),
                dict(type='toolCall', name='read', id='read', arguments={})])),
            dict(type='message', id='final', message=dict(role='assistant', stopReason='stop', content=[
                dict(type='thinking', thinking='Private'), dict(type='text', text='Use larger labels')])) )
        self.history.sync([])
        self.restart()
        self.history.sync([])
        events = self.history.snapshot()['events']
        self.assertEqual([e['body'] for e in events if e['direction'] == 'out'], ['Use larger labels'])
        self.assertEqual(next(e for e in events if e['direction'] == 'out')['delivery'], 'recorded')

    def test_queued_request_gains_timestamp_without_duplicate_on_start(self):
        channel = self.channels / hashlib.sha256(b'designer-session').hexdigest() / ('b' * 64)
        channel.mkdir(parents=True)
        request = self.incoming()['details']
        (channel / 'channel.json').write_text(json.dumps(dict(
            peerName='Collaborator', state='queued', pending=[dict(id='queued', message=request)])))
        self.history.sync([])
        self.assertIsNone(self.history.snapshot()['events'][0]['timestamp'])
        self.write(channel / 'session.jsonl', dict(type='session', id='worker'),
            dict(type='custom_message', id='request', timestamp='2026-01-01T00:00:00Z',
                 customType='peer-channel-request', details=dict(peerMessage=request)))
        self.history.sync([])
        events = self.history.snapshot()['events']
        self.assertEqual(len(events), 1)
        self.assertEqual(events[0]['timestamp'], 1767225600.0)

    def test_observation_not_historical_recovery_and_immutable_bytes(self):
        image = self.root / 'review.svg'
        first = b'<svg xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10"/></svg>'
        second = first.replace(b'10', b'20')
        image.write_bytes(first)
        self.write(self.file, self.incoming(str(image)), self.incoming(str(image), record='later'))
        self.history.sync([])
        snapshot = self.history.snapshot()
        self.assertEqual(len(snapshot['revisions']), 1)
        revision = snapshot['revisions'][0]
        self.assertGreater(revision['capturedAt'], revision['sourceTimestamp'])
        archived, _ = self.history.image_path(revision['imageUrl'].split('/')[-1])
        image.write_bytes(second)
        self.history.sync([])
        self.history.sync([])
        self.assertEqual(len(self.history.snapshot()['revisions']), 2)
        image.write_bytes(first)
        self.history.sync([])
        reverted = self.history.snapshot()['revisions']
        self.assertEqual([r['number'] for r in reverted], [1, 2, 3])
        self.assertEqual(reverted[0]['imageUrl'], reverted[2]['imageUrl'])
        self.assertNotEqual(reverted[0]['id'], reverted[2]['id'])
        image.unlink()
        self.restart()
        self.history.sync([])
        self.assertEqual(archived.read_bytes(), first)
        self.assertEqual(len(self.history.snapshot()['revisions']), 3)
        self.assertTrue(any('historical bytes not recovered' in w for w in self.history.snapshot()['warnings']))
        self.assertIsNone(self.history.image_path('../history.sqlite3'))

    def test_alias_restart_and_unsafe_images(self):
        self.write(self.file, self.incoming())
        self.history.sync([])
        cid = self.history.snapshot()['contacts'][0]['id']
        self.write(self.file, self.incoming('New transport', 'next', peer='omp:new/Main'))
        self.history.sync([])
        self.assertEqual([c['id'] for c in self.history.snapshot()['contacts']], [cid])
        image = self.root / 'unsafe.svg'
        image.write_text('<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>')
        with self.assertRaises(ValueError):
            self.history.add_revision(cid, 'logo', image)
        image.write_text('<svg xmlns="http://www.w3.org/2000/svg"/>')
        linked = self.root / 'linked.svg'
        linked.symlink_to(image)
        with self.assertRaises((OSError, ValueError)):
            self.history.add_revision(cid, 'logo', linked)
        with self.assertRaises(ValueError):
            self.history.add_revision(cid, 'logo', Path('/etc/passwd'))


if __name__ == '__main__':
    unittest.main()
