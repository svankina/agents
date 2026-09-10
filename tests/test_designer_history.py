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
        self.sessions = self.root / 'private/designer/sessions'
        self.sessions.mkdir(parents=True)
        self.channels = self.root / 'channels'
        self.file = self.sessions / 'main.jsonl'
        self.write(self.file, {'type': 'session', 'id': 'designer-session'})
        self.history = self.open()

    def tearDown(self):
        self.history.close()
        self.temp.cleanup()

    def open(self):
        return History(self.root / 'state', self.sessions, self.channels, self.root,
                       contact_sessions_dir=self.root)

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

    def turn(self, prompt, record, reply='Done', calls=(), results=(), exit=True):
        """A Designer transcript turn: prompt, tool calls with results, final reply, process exit."""
        rows = [dict(type='message', id=record, timestamp='2026-01-01T00:10:00Z',
                     message=dict(role='user', content=[dict(type='text', text=prompt)]))]
        for index, (call, result) in enumerate(zip(calls, results)):
            rows.append(dict(type='message', id=f'{record}-call{index}', timestamp='2026-01-01T00:11:00Z', message=dict(
                role='assistant', stopReason='toolUse', content=[dict(type='toolCall', id=f'{record}-c{index}', **call)])))
            rows.append(dict(type='message', id=f'{record}-result{index}', message=dict(
                role='toolResult', toolCallId=f'{record}-c{index}', toolName=call['name'], content=[dict(type='text', text=result)])))
        rows.append(dict(type='message', id=f'{record}-final', timestamp='2026-01-01T00:12:00Z', message=dict(
            role='assistant', stopReason='stop', content=[dict(type='text', text=reply)])))
        if exit:
            rows.append(dict(type='custom', customType='session_exit', id=f'{record}-exit', data=dict(reason='dispose')))
        return rows

    def contact_transcript(self, cwd, session):
        directory = self.root / str(cwd).removeprefix(str(Path.home())).replace('/', '-')
        directory.mkdir(parents=True, exist_ok=True)
        return directory / f'2026-01-01T00-00-00-000Z_{session}.jsonl'

    def test_one_shot_prompt_is_attributed_only_with_proof_from_the_sender(self):
        peer_cwd = self.root / 'peer'
        self.history.sync([dict(id='omp:peer/Main', sessionId='0a0a', displayName='deathnote', cwd=str(peer_cwd), status='idle')])
        brief = 'Design a stamp.\n\nRead ' + str(self.image('skull.svg'))
        self.write(self.file, *self.turn(brief, 'peer-turn', reply='Spec written', calls=[
            dict(name='write', arguments=dict(path=str(peer_cwd / 'DESIGN.md'), i='Writing the spec', content='#')),
            dict(name='bash', arguments=dict(command='git add DESIGN.md && git commit -qm "Designer spec" && git log --oneline -1', cwd=str(peer_cwd)))],
            results=['wrote', 'a42280c Designer spec']))
        self.write(self.file, *self.turn('Tidy the mock for me', 'human-turn', reply='Tidied', calls=[
            dict(name='edit', arguments=dict(input='[mock.html#AB12]\nPUT 1.=1:\n+x'))], results=['ok']))
        self.history.sync([])
        self.assertEqual(self.history.snapshot()['events'], [])
        self.write(self.contact_transcript(peer_cwd, '0a0a'), dict(type='session', id='0a0a'),
            dict(type='message', id='launch', timestamp='2026-01-01T00:09:00Z', message=dict(role='assistant', content=[
                dict(type='toolCall', id='start', name='hub', arguments=dict(op='start', name='designer', application='/opt/bin/omp',
                     args=['--resume', str(self.file), '--print', 'Design  a stamp.\nRead ' + str(self.image('skull.svg'))]))])))
        self.history.sync([])
        self.restart()
        self.history.sync([])
        snapshot = self.history.snapshot()
        self.assertEqual([(e['direction'], e['from'], e['body'][:6]) for e in snapshot['events']],
                         [('in', 'omp:peer/Main', 'Design'), ('out', 'designer-session', 'Spec w')])
        self.assertEqual(snapshot['contacts'][0]['lastFeedback'], brief)
        self.assertEqual([(c['kind'], c['paths'], c['summary'], c['hash']) for c in snapshot['changes']],
                         [('write', [str(peer_cwd / 'DESIGN.md')], 'Writing the spec', None),
                          ('commit', [], 'Designer spec', 'a42280c')])
        self.assertEqual([r['sourcePath'] for r in snapshot['revisions']], [str(self.image('skull.svg'))])
        self.assertEqual(snapshot['contacts'][0]['changes'], 2)

    def test_user_turn_about_one_peer_is_recorded_as_user_originated(self):
        self.write(self.file, self.incoming(body='Hello', session='peer-session'))
        self.write(self.file, *self.turn('Ask the collaborator to widen the header', 'user-turn', reply='Sent', calls=[
            dict(name='hub', arguments=dict(op='send', to='omp:old/Main', message='Widen the header')),
            dict(name='write', arguments=dict(path='mock.html', i='Header mock', content='<h1>'))], results=['{}', 'wrote']))
        self.write(self.file, *self.turn('Tell both of them', 'broadcast', reply='Sent', calls=[
            dict(name='hub', arguments=dict(op='send', to='omp:old/Main', message='One')),
            dict(name='hub', arguments=dict(op='send', to='omp:other/Main', message='Two'))], results=['{}', '{}']))
        self.history.sync([])
        snapshot = self.history.snapshot()
        prompts = [e for e in snapshot['events'] if e['id'].startswith('prompt:')]
        self.assertEqual([(e['from'], e['body']) for e in prompts], [('user', 'Ask the collaborator to widen the header')])
        self.assertEqual(snapshot['contacts'][0]['lastFeedback'], 'Hello')
        self.assertEqual([c['paths'] for c in snapshot['changes']], [[str(self.root / 'mock.html')]])
        self.assertEqual(self.history.db.execute("SELECT COUNT(*) FROM turns WHERE contact=''").fetchone()[0], 1)

    def test_channel_worker_changes_attach_to_its_reply(self):
        channel = self.channels / hashlib.sha256(b'designer-session').hexdigest() / ('c' * 64)
        channel.mkdir(parents=True)
        (channel / 'channel.json').write_text(json.dumps(dict(peerName='Collaborator', state='idle', pending=[])))
        self.write(channel / 'session.jsonl', dict(type='session', id='worker'),
            dict(type='custom_message', id='request', customType='peer-channel-request', details=dict(peerMessage=self.incoming()['details'])),
            dict(type='message', id='work', message=dict(role='assistant', stopReason='toolUse', content=[
                dict(type='toolCall', id='e1', name='edit', arguments=dict(input='[dist/ui/app.css#1A2B]\nPUT 1.=1:\n+x\n[dist/ui/app.js#3C4D]\nPUT 2.=2:\n+y'))])),
            dict(type='message', id='final', message=dict(role='assistant', stopReason='stop', content=[dict(type='text', text='Shipped')])))
        self.history.sync([])
        snapshot = self.history.snapshot()
        reply = next(e for e in snapshot['events'] if e['direction'] == 'out')
        self.assertEqual([(c['eventId'], c['kind'], c['paths']) for c in snapshot['changes']],
                         [(reply['id'], 'edit', [str(self.root / 'dist/ui/app.css'), str(self.root / 'dist/ui/app.js')])])

    def test_existing_records_are_rescanned_once_without_duplicates(self):
        self.write(self.file, self.incoming(), *self.turn('Prompt', 'turn', calls=[
            dict(name='hub', arguments=dict(op='send', to='omp:old/Main', message='Reply'))], results=['{}']))
        self.history.sync([])
        before = self.history.snapshot()
        self.history.db.execute("UPDATE metadata SET value='1' WHERE key='importVersion'")
        self.history.db.execute('DELETE FROM turns'); self.history.db.commit()
        self.restart()
        self.history.sync([])
        after = self.history.snapshot()
        self.assertEqual([e['id'] for e in after['events']], [e['id'] for e in before['events']])
        self.assertEqual(self.history.db.execute('SELECT COUNT(*) FROM turns').fetchone()[0], 1)

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

    def image(self, relative, width=10):
        path = self.root / relative
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(f'<svg xmlns="http://www.w3.org/2000/svg"><rect width="{width}"/></svg>')
        return path

    def test_relative_sender_cwd_and_explicit_siblings(self):
        first = self.image('manager/shots/dock-rows.svg')
        second = self.image('manager/shots/dock-detail.svg')
        self.write(self.file, self.incoming(
            f'~170 KiB of previews: `{first}` and `dock-detail.svg` and `shots/dock-rows.svg`'))
        peers = [dict(id='omp:old/Main', cwd=str(self.root / 'manager'))]
        self.history.sync(peers)
        snapshot = self.history.snapshot()
        self.assertEqual({r['sourcePath'] for r in snapshot['revisions']}, {str(first), str(second)})
        self.assertEqual(snapshot['totals']['unrecovered'], 0)

    def test_outgoing_relative_path_uses_designer_not_contact_cwd(self):
        own = self.image('shots/dock.svg')
        self.image('manager/shots/dock.svg', 20)
        cid = self.history._contact('manager', cwd=str(self.root / 'manager'))
        self.history._event('out', cid, 'out', 'shots/dock.svg', 1, 'test', 'Designer', cid)
        self.history.sync([])
        self.assertEqual([r['sourcePath'] for r in self.history.snapshot()['revisions']], [str(own)])

    def test_braces_specific_glob_remote_and_generic_patterns(self):
        paths = [self.image(f'shepherd-density-{name}.svg', index + 1)
                 for index, name in enumerate(('before', 'after', 'later'))]
        self.image('omp-sshots-other-agent.svg')
        self.write(self.file, self.incoming(
            f'{self.root}/shepherd-density-{{before,after}}.svg '
            f'{self.root}/shepherd-density-*.svg '
            f'https://example.com{paths[0]} '
            f'{self.root}/omp-sshots-*.svg'))
        self.history.sync([])
        snapshot = self.history.snapshot()
        self.assertEqual({r['sourcePath'] for r in snapshot['revisions']}, set(map(str, paths)))
        self.assertEqual(snapshot['totals']['unrecovered'], 1)
        self.assertTrue(any('generic or unbounded' in warning for warning in snapshot['warnings']))
        self.assertTrue(all(r['capturedAt'] > r['sourceTimestamp'] for r in snapshot['revisions']))

    def test_ambiguous_sibling_is_warning_and_missing_reference_retries(self):
        left = self.image('left/anchor.svg')
        right = self.image('right/anchor.svg')
        self.image('left/detail.svg')
        self.image('right/detail.svg', 20)
        self.write(self.file, self.incoming(f'{left} {right} detail.svg missing.svg'))
        self.history.sync([])
        snapshot = self.history.snapshot()
        self.assertEqual(snapshot['totals']['unrecovered'], 2)
        self.assertTrue(any('ambiguous image reference' in warning for warning in snapshot['warnings']))
        self.assertEqual({r['sourcePath'] for r in snapshot['revisions']}, {str(left), str(right)})
        (self.root / 'right/detail.svg').unlink()
        missing = self.image('missing.svg')
        self.history.sync([])
        snapshot = self.history.snapshot()
        self.assertEqual(snapshot['totals']['unrecovered'], 0)
        self.assertIn(str(missing), {r['sourcePath'] for r in snapshot['revisions']})

    def test_reference_migration_preserves_grouped_captures_and_cursors(self):
        first = self.image('shepherd-density-before.svg')
        second = self.image('shepherd-density-after.svg', 20)
        self.write(self.file, self.incoming(f'{self.root}/shepherd-density-{{before,after}}.svg'))
        # Seed a deployed event and explicit series without running derived observation.
        self.history._import(self.file)
        event = self.history.snapshot()['events'][0]
        for image in (first, second):
            self.history.add_revision(event['contactId'], 'density-review', image, event_id=event['id'])
        before = self.history.snapshot()
        cursors = list(map(tuple, self.history.db.execute('SELECT * FROM cursors')))
        self.history._warn('Image unavailable at observation; historical bytes not recovered: /bogus.svg')
        self.history._warn('Invalid history record: retained diagnostic')
        self.history.db.commit()
        self.restart()
        self.history.sync([])
        self.assertEqual(self.history.snapshot()['revisions'], before['revisions'])
        self.assertEqual(self.history.snapshot()['events'], before['events'])
        self.assertEqual(list(map(tuple, self.history.db.execute('SELECT * FROM cursors'))), cursors)
        self.assertEqual(self.history.snapshot()['warnings'], ['Invalid history record: retained diagnostic'])
        self.restart()
        self.history.sync([])
        self.assertEqual(self.history.snapshot()['revisions'], before['revisions'])

    def test_unchanged_images_are_not_reread(self):
        image = self.image('stable.svg')
        self.write(self.file, self.incoming(str(image)))
        self.history.sync([])
        original = self.history._read_image
        def refuse_read(path):
            raise AssertionError('unchanged image reread')
        self.history._read_image = refuse_read
        try:
            self.history.sync([])
        finally:
            self.history._read_image = original


if __name__ == '__main__':
    unittest.main()
