"""Read Designer's existing OMP records and archive observed local image bytes.

All public calls are serialized by the caller. Source cursors and imported rows
commit together; archives are immutable and may safely outlive a rolled-back row.

Three sources feed one record per contact. Peer transport (peer messages, channel
workers, `hub send`) carries its sender. Designer's own transcript turns do not:
a peer that launches `omp --resume <Designer transcript> --print <brief>` leaves a
plain user turn behind. Those turns are kept aside until proof of their author
arrives -- the identical prompt in that peer's transcript -- or until the turn's
own `hub send` names exactly one peer, in which case the prompt is recorded as
user-originated work about that contact, never as the contact's words.
"""
from __future__ import annotations

import hashlib
import json
import os
from pathlib import Path
import shlex
import re
import sqlite3
import stat
import tempfile
import time
from datetime import datetime
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET

from lib.designer_thumbnails import ensure_thumbnail

MAX_IMAGE_BYTES = 32 * 1024 * 1024
MAX_RECORD_BYTES = 32 * 1024 * 1024
_PATH_TOKEN = re.compile(r"""(?<![\w/.:~-])(?:[^\s<>"`'(){}\[\],;]+|\{[^{}\n]+\})+""")
_IMAGE_END = re.compile(r'\.(?:png|jpe?g|webp|gif|svg)$', re.I)
REFERENCE_VERSION = '2'
IMPORT_VERSION = '2'
MAX_REFERENCE_MATCHES = 64
_HEX = re.compile(r"^[a-f0-9]{64}$")
_EDIT_SECTION = re.compile(r'^\[(.+?)#[0-9A-Fa-f]{4}\]$', re.M)
_GIT_COMMIT = re.compile(r'\bgit\b[^\n|;&]*?\bcommit\b')
_COMMIT_MESSAGE = re.compile(r'''(?:^|\s)-[a-zA-Z]*m(?:\s+|=)(?:"((?:[^"\\]|\\.)*)"|'([^']*)'|(\S+))''')
_COMMIT_HASH = re.compile(r'\b[0-9a-f]{7,40}\b')
# The user turn a peer leaves in Designer's transcript is the prompt it launched,
# whitespace aside; the hash of that text is the join key between the two records.
_SPACE = re.compile(r'\s+')


def _prompt_hash(text):
    return hashlib.sha256(_SPACE.sub(' ', text).strip().encode()).hexdigest()


def _oneshot(tokens, session_dir):
    """The Designer transcript and prompt of an `omp --resume <file> --print <text>` launch, or None."""
    if not all(isinstance(token, str) for token in tokens):
        return None
    resume = None
    for index, token in enumerate(tokens):
        value = token[len('--resume='):] if token.startswith('--resume=') else (
            tokens[index + 1] if token == '--resume' and index + 1 < len(tokens) else None)
        if value is None:
            continue
        if not any(t.rsplit('/', 1)[-1] == 'omp' for t in tokens[:index]):
            return None
        path = Path(value).expanduser()
        if path.parent != session_dir or path.suffix != '.jsonl':
            return None
        resume = index + (1 if token == '--resume' else 0)
        break
    if resume is None:
        return None
    rest = tokens[resume + 1:]
    for index, token in enumerate(rest):
        if token in ('--print', '-p') and index + 1 < len(rest) and not rest[index + 1].startswith('-'):
            return path, rest[index + 1]
    prompt = next((token for token in rest if not token.startswith('-')), None)
    return (path, prompt) if prompt else None


def _hash(value: str | bytes) -> str:
    return hashlib.sha256(value.encode() if isinstance(value, str) else value).hexdigest()


def _time(value):
    if isinstance(value, (int, float)):
        return value / 1000 if value > 100_000_000_000 else value
    if isinstance(value, str):
        try:
            return datetime.fromisoformat(value.replace('Z', '+00:00')).timestamp()
        except ValueError:
            pass
    return None


def _text(content):
    if isinstance(content, str):
        return content
    if isinstance(content, list):
        return '\n'.join(b['text'] for b in content if isinstance(b, dict)
                         and b.get('type') == 'text' and isinstance(b.get('text'), str))
    return ''


def _tool(name):
    return str(name).rsplit('.', 1)[-1].rsplit('/', 1)[-1]


class History:
    def __init__(self, state_dir: Path, session_dir: Path, channels_dir: Path, project_dir: Path,
                 *, contact_sessions_dir: Path | None = None):
        self.state_dir = Path(state_dir).expanduser()
        self.session_dir = Path(session_dir).expanduser()
        self.channels_dir = Path(channels_dir).expanduser()
        self.project_dir = Path(project_dir).expanduser().absolute()
        self.archive = self.state_dir / 'images'
        self.archive.mkdir(parents=True, exist_ok=True, mode=0o700)
        self.thumbnails = self.state_dir / 'thumbnails'
        self.thumbnails.mkdir(parents=True, exist_ok=True, mode=0o700)
        self._thumbnail_attempted = set()
        self._thumbnail_errors = {}
        self.db = sqlite3.connect(self.state_dir / 'history.sqlite3', check_same_thread=False)
        self.db.row_factory = sqlite3.Row
        self.db.executescript('''
            PRAGMA journal_mode=WAL;
            CREATE TABLE IF NOT EXISTS contacts(id TEXT PRIMARY KEY, data TEXT NOT NULL);
            CREATE TABLE IF NOT EXISTS aliases(peer TEXT PRIMARY KEY, contact TEXT NOT NULL);
            CREATE TABLE IF NOT EXISTS events(id TEXT PRIMARY KEY, contact TEXT NOT NULL, data TEXT NOT NULL);
            CREATE TABLE IF NOT EXISTS images(id TEXT PRIMARY KEY, type TEXT NOT NULL, bytes INTEGER NOT NULL);
            CREATE TABLE IF NOT EXISTS revisions(id TEXT PRIMARY KEY, contact TEXT NOT NULL, asset TEXT NOT NULL,
                image TEXT NOT NULL, data TEXT NOT NULL);
            CREATE TABLE IF NOT EXISTS refs(contact TEXT NOT NULL, path TEXT NOT NULL, event TEXT NOT NULL,
                timestamp REAL, PRIMARY KEY(contact,path));
            CREATE TABLE IF NOT EXISTS cursors(path TEXT PRIMARY KEY, inode TEXT NOT NULL, offset INTEGER NOT NULL,
                context TEXT NOT NULL);
            CREATE TABLE IF NOT EXISTS calls(id TEXT PRIMARY KEY, events TEXT NOT NULL);
            CREATE TABLE IF NOT EXISTS sessions(id TEXT PRIMARY KEY);
            CREATE TABLE IF NOT EXISTS warnings(message TEXT PRIMARY KEY);
            CREATE TABLE IF NOT EXISTS metadata(key TEXT PRIMARY KEY, value TEXT NOT NULL);
            CREATE INDEX IF NOT EXISTS revisions_asset ON revisions(contact,asset);
        ''')
        self.db.commit()
        self._observations = {}
        self.db.executescript('''
            CREATE TABLE IF NOT EXISTS reference_specs(event TEXT NOT NULL, path TEXT NOT NULL,
                parents TEXT NOT NULL, PRIMARY KEY(event,path));
            CREATE TABLE IF NOT EXISTS reference_warnings(reference TEXT PRIMARY KEY, message TEXT NOT NULL);
            -- Designer's own transcript turns; `contact` is '' until an author is proven.
            CREATE TABLE IF NOT EXISTS turns(id TEXT PRIMARY KEY, contact TEXT NOT NULL, prompt TEXT NOT NULL,
                data TEXT NOT NULL);
            -- One-shot prompts a contact's transcript shows it launching against Designer.
            CREATE TABLE IF NOT EXISTS prompts(hash TEXT PRIMARY KEY, contact TEXT NOT NULL, data TEXT NOT NULL);
            CREATE TABLE IF NOT EXISTS changes(id TEXT PRIMARY KEY, contact TEXT NOT NULL, event TEXT NOT NULL,
                data TEXT NOT NULL);
        ''')
        # Body-derived specs are rebuilt from event text on a version change; specs
        # taken from Designer's tool calls have no text to rebuild from and are kept.
        if 'origin' not in {row['name'] for row in self.db.execute('PRAGMA table_info(reference_specs)')}:
            self.db.execute("ALTER TABLE reference_specs ADD COLUMN origin TEXT NOT NULL DEFAULT 'body'")
        # Turns and changes are read from transcript regions older records already
        # passed. One rescan from the start recovers them; every imported row has a
        # deterministic id, so the rescan adds and never duplicates.
        version = self.db.execute('SELECT value FROM metadata WHERE key=?', ('importVersion',)).fetchone()
        if not version or version[0] != IMPORT_VERSION:
            self.db.execute('DELETE FROM cursors')
            self.db.execute('INSERT OR REPLACE INTO metadata VALUES (?,?)', ('importVersion', IMPORT_VERSION))
        self.db.commit()
        # Contacts retain their global project stores when Designer uses a private store.
        self.sessions_root = Path(contact_sessions_dir).expanduser() if contact_sessions_dir is not None else self.session_dir.parent

    def _warn(self, message):
        self.db.execute('INSERT OR IGNORE INTO warnings VALUES (?)', (message,))

    def _contact(self, peer, session=None, name=None, cwd=None, activity=None, state=None):
        peer = str(peer or 'unknown')
        row = self.db.execute('SELECT contact FROM aliases WHERE peer=?', (peer,)).fetchone()
        old = row[0] if row else None
        # Main session identity survives transport changes; subagents keep their local identity.
        local = peer.split('/', 1)[1] if peer.startswith('omp:') and '/' in peer else 'Main'
        cid = ('session:' + session + (':' + local if local != 'Main' else '')) if session else (old or peer)
        if old and old != cid:
            self._merge(old, cid)
        existing = self.db.execute('SELECT data FROM contacts WHERE id=?', (cid,)).fetchone()
        data = json.loads(existing[0]) if existing else dict(id=cid, name=peer, peerId=peer,
            sessionId=None, cwd='', lastActivity=None, state='unknown', messages=0, lastFeedback='')
        data['peerId'] = peer
        if session:
            data['sessionId'] = session
        if name:
            data['name'] = str(name)
        if cwd:
            data['cwd'] = str(cwd)
        ts = _time(activity)
        if ts is not None:
            data['lastActivity'] = max(ts, data['lastActivity'] or ts)
        if state:
            data['state'] = state if state in ('running', 'queued', 'idle', 'error') else 'unknown'
        self.db.execute('INSERT OR REPLACE INTO contacts VALUES (?,?)', (cid, json.dumps(data)))
        self.db.execute('INSERT OR REPLACE INTO aliases VALUES (?,?)', (peer, cid))
        return cid

    def _merge(self, old, new):
        prior = self.db.execute('SELECT data FROM contacts WHERE id=?', (old,)).fetchone()
        if prior and not self.db.execute('SELECT 1 FROM contacts WHERE id=?', (new,)).fetchone():
            data = json.loads(prior[0]); data['id'] = new
            self.db.execute('INSERT INTO contacts VALUES (?,?)', (new, json.dumps(data)))
        for table in ('events', 'revisions', 'changes'):
            for row in self.db.execute(f'SELECT * FROM {table} WHERE contact=?', (old,)).fetchall():
                data = json.loads(row['data']); data['contactId'] = new
                self.db.execute(f'UPDATE {table} SET contact=?,data=? WHERE id=?', (new, json.dumps(data), row['id']))
        for row in self.db.execute('SELECT * FROM refs WHERE contact=?', (old,)).fetchall():
            self._reference(new, row['path'], row['event'], row['timestamp'])
        self.db.execute('DELETE FROM refs WHERE contact=?', (old,))
        for table in ('aliases', 'turns', 'prompts'):
            self.db.execute(f'UPDATE {table} SET contact=? WHERE contact=?', (new, old))
        self.db.execute('DELETE FROM contacts WHERE id=?', (old,))

    def _peer(self, peer, live=False):
        if not isinstance(peer, dict) or not peer.get('id'):
            return
        self._contact(peer['id'], peer.get('sessionId'), peer.get('displayName') or peer.get('name'),
                      peer.get('cwd'), peer.get('lastActivity'), peer.get('status') if live else None)

    def _reference(self, cid, path, eid, timestamp):
        self.db.execute('''INSERT INTO refs VALUES (?,?,?,?) ON CONFLICT(contact,path) DO UPDATE
            SET event=excluded.event,timestamp=excluded.timestamp
            WHERE COALESCE(excluded.timestamp,0)>=COALESCE(refs.timestamp,0)''', (cid, path, eid, timestamp))

    def _extract_references(self, eid, body):
        tokens = [match.group().rstrip('.:!?') for match in _PATH_TOKEN.finditer(body)]
        paths, parents = [], set()
        for token in tokens:
            if '://' in token:
                if not token.startswith('file://'):
                    continue
                url = urlsplit(token)
                if url.netloc not in ('', 'localhost'):
                    continue
                token = unquote(url.path)
            if ':' in token or token.startswith('//'):
                continue
            expanded = [token]
            while any('{' in item for item in expanded):
                next_items = []
                for item in expanded:
                    group = re.search(r'\{([^{}]+)\}', item)
                    if not group:
                        continue
                    choices = group[1].split(',')
                    if len(choices) < 2 or any(not choice.strip() or '/' in choice for choice in choices):
                        continue
                    next_items.extend(item[:group.start()] + choice.strip() + item[group.end():] for choice in choices)
                expanded = next_items
                if len(expanded) > MAX_REFERENCE_MATCHES:
                    expanded = [token]
                    break
            for item in expanded:
                is_image = bool(_IMAGE_END.search(item))
                if not is_image and not item.startswith(('/', '~/')):
                    continue
                if item.startswith('~') and not item.startswith('~/'):
                    continue
                path = Path(item).expanduser()
                if is_image:
                    paths.append(str(path))
                    if path.is_absolute() and not any(c in str(path.parent) for c in '*?[]{}'):
                        parents.add(str(path.parent))
                elif path.is_absolute() and not any(c in item for c in '*?[]{}') and path.is_dir():
                    parents.add(str(path))
        for path in dict.fromkeys(paths):
            self.db.execute('INSERT OR REPLACE INTO reference_specs(event,path,parents) VALUES (?,?,?)',
                            (eid, path, json.dumps(sorted(parents))))

    def _resolve_reference(self, ref, event, contact):
        path = Path(ref['path'])
        wildcard = any(c in str(path) for c in '*?[]{}')
        if wildcard:
            prefix = re.split(r'[*?\[{}]', path.name, 1)[0].rstrip('-_.')
            if (any(c in str(path.parent) for c in '*?[]{}') or '{' in str(path)
                    or not re.fullmatch(r'[A-Za-z0-9]+(?:[-_][A-Za-z0-9]+)+', prefix)
                    or prefix.lower().startswith(('omp-sshots', 'screenshot', 'screen-shot', 'capture'))):
                raise ValueError('generic or unbounded image pattern refused')
        cwd = str(self.project_dir) if event['direction'] == 'out' else contact.get('cwd')
        tiers = [[Path(cwd)]] if cwd and Path(cwd).expanduser().is_absolute() else []
        tiers.extend([[Path(parent) for parent in json.loads(ref['parents'])], [self.project_dir]])
        if path.is_absolute():
            tiers = [[Path('/')]]
        for roots in tiers:
            matches = set()
            for root in roots:
                candidate = Path(os.path.abspath(root.expanduser() / path))
                if wildcard:
                    # Only enumerate one explicit directory, with bounded results. The
                    # image reader still enforces sandbox and no-follow restrictions.
                    for match in candidate.parent.glob(candidate.name):
                        matches.add(match)
                        if len(matches) > MAX_REFERENCE_MATCHES:
                            raise ValueError('image pattern exceeds 64 matches')
                elif candidate.exists() or candidate.is_symlink():
                    matches.add(candidate)
            if matches:
                if not wildcard and len(matches) != 1:
                    raise ValueError('ambiguous image reference: ' + ', '.join(map(str, sorted(matches))))
                if wildcard and len(roots) > 1 and len({match.parent for match in matches}) > 1:
                    raise ValueError('ambiguous image pattern directories')
                return sorted(matches)
        raise ValueError('no available image at recorded cwd, explicit message directories, or Designer project')

    def _sync_references(self, observations):
        version = self.db.execute('SELECT value FROM metadata WHERE key=?', ('referenceVersion',)).fetchone()
        if not version or version[0] != REFERENCE_VERSION:
            # References are derived; never rewrite events, cursors, or archived revisions.
            self.db.execute("DELETE FROM reference_specs WHERE origin='body'")
            self.db.execute('DELETE FROM refs')
            for row in self.db.execute('SELECT id,data FROM events').fetchall():
                self._extract_references(row['id'], json.loads(row['data'])['body'])
            self.db.execute('INSERT OR REPLACE INTO metadata VALUES (?,?)', ('referenceVersion', REFERENCE_VERSION))
        self.db.execute("DELETE FROM warnings WHERE message LIKE 'Image unavailable at observation; historical bytes not recovered:%'")
        self.db.execute('DELETE FROM reference_warnings')
        for ref in self.db.execute('''SELECT s.*,e.contact,e.data AS event_data,c.data AS contact_data
                FROM reference_specs s JOIN events e ON e.id=s.event JOIN contacts c ON c.id=e.contact''').fetchall():
            event = json.loads(ref['event_data'])
            errors = []
            try:
                paths = self._resolve_reference(ref, event, json.loads(ref['contact_data']))
            except (OSError, ValueError) as error:
                paths = []
                errors.append(str(error))
            for path in paths:
                try:
                    self._reference(ref['contact'], str(path), ref['event'], event['timestamp'])
                    info = path.stat(follow_symlinks=False)
                    signature = (info.st_dev, info.st_ino, info.st_size, info.st_mtime_ns, info.st_ctime_ns)
                    key = (ref['contact'], str(path))
                    if observations.get(key, self._observations.get(key)) != signature:
                        prior = self.db.execute('''SELECT asset,image FROM revisions WHERE contact=?
                            AND json_extract(data,'$.sourcePath')=? ORDER BY rowid DESC LIMIT 1''',
                            (ref['contact'], str(path))).fetchone()
                        # An explicit series may contain several different paths. Replaying
                        # its older members must not append them after its latest capture.
                        if not prior or prior['asset'] == str(path) or _hash(self._read_image(path)[1]) != prior['image']:
                            self._revision(ref['contact'], prior['asset'] if prior else str(path), path, '', ref['event'])
                    observations[key] = signature
                except (OSError, ValueError) as error:
                    errors.append(f'{path}: {error}')
            if errors:
                self.db.execute('INSERT INTO reference_warnings VALUES (?,?)',
                    (ref['event'] + ':' + ref['path'],
                     f'Image reference unavailable; historical bytes not recovered: {ref["path"]}: ' + '; '.join(errors)))

    def _event(self, eid, peer, direction, body, timestamp, source, sender, to, reply=None,
               session=None, name=None, delivery='recorded'):
        if not isinstance(body, str) or not body:
            return None
        cid = self._contact(peer, session, name, activity=timestamp)
        data = dict(id=eid, contactId=cid, direction=direction, timestamp=timestamp, body=body,
                    **{'from': sender, 'to': to}, replyTo=reply, delivery=delivery, source=source)
        self.db.execute('INSERT OR IGNORE INTO events VALUES (?,?,?)', (eid, cid, json.dumps(data)))
        if timestamp is not None:
            prior = json.loads(self.db.execute('SELECT data FROM events WHERE id=?', (eid,)).fetchone()[0])
            if prior['timestamp'] is None:
                prior.update(timestamp=timestamp, source=source)
                self.db.execute('UPDATE events SET data=? WHERE id=?', (json.dumps(prior), eid))
        self._extract_references(eid, body)
        return eid

    def _incoming(self, payload, timestamp, source, record):
        if not isinstance(payload, dict) or not all(isinstance(payload.get(k), str) for k in ('from','to','body')):
            return None
        # A transport thread plus exact payload identifies duplicate wait/custom-message observations.
        identity = {k: payload.get(k) for k in ('from','to','body','replyTo')}
        eid = 'message:' + _hash(json.dumps(identity, sort_keys=True) if payload.get('replyTo') else record)
        return self._event(eid, payload['from'], 'in', payload['body'], timestamp, source,
            payload['from'], payload['to'], payload.get('replyTo'), payload.get('senderSessionId'), payload.get('senderName'))

    def _details(self, value, timestamp, source, record):
        if not isinstance(value, dict):
            return
        for peer in value.get('peers', []) if isinstance(value.get('peers'), list) else []:
            self._peer(peer)
        if isinstance(value.get('message'), dict):
            self._incoming(value['message'], timestamp, source, record + ':message')
        for key in ('inbox', 'messages'):
            for n, item in enumerate(value.get(key, []) if isinstance(value.get(key), list) else []):
                self._incoming(item, timestamp, source, record + ':' + key + ':' + str(n))
        for key in ('peerHub', 'reply', 'details', 'native', 'waited'):
            self._details(value.get(key), timestamp, source, record + ':' + key)

    def _tool_calls(self, block):
        """(tool name, arguments) for one call block, flattening `parallel`."""
        if not isinstance(block, dict):
            return []
        name = _tool(block.get('name', block.get('recipient_name', '')))
        args = block.get('arguments', block.get('parameters', {}))
        if isinstance(args, str):
            try:
                args = json.loads(args)
            except ValueError:
                return []
        if not isinstance(args, dict):
            return []
        if name == 'parallel' and isinstance(args.get('tool_uses'), list):
            return [pair for child in args['tool_uses'] for pair in self._tool_calls(child)]
        return [(name, args)]

    def _calls(self, block):
        return [args for name, args in self._tool_calls(block) if name == 'hub']

    def _absolute(self, value, cwd=None):
        path = Path(str(value)).expanduser()
        return str(path if path.is_absolute() else Path(cwd).expanduser() / path if cwd else self.project_dir / path)

    def _work(self, block, call_id):
        """The file changes a call block makes and the images it reads or writes.

        Recorded from the call, not its result: a write or edit that the tool refused
        is still what Designer attempted for that contact, and the transcript says so.
        """
        changes, images = [], []
        for name, args in self._tool_calls(block):
            cwd = args.get('cwd') if isinstance(args.get('cwd'), str) else None
            summary = args.get('i') if isinstance(args.get('i'), str) else ''
            paths = []
            if name == 'write' and isinstance(args.get('path'), str):
                paths = [self._absolute(args['path'], cwd)]
                changes.append(dict(kind='write', paths=paths, summary=summary))
            elif name == 'edit' and isinstance(args.get('input'), str):
                paths = [self._absolute(match, cwd) for match in _EDIT_SECTION.findall(args['input'])]
                if paths:
                    changes.append(dict(kind='edit', paths=list(dict.fromkeys(paths)), summary=summary))
            elif name == 'ast_edit' and isinstance(args.get('paths'), list):
                paths = [self._absolute(item, cwd) for item in args['paths'] if isinstance(item, str)]
                if paths:
                    changes.append(dict(kind='edit', paths=paths, summary=summary))
            elif name == 'bash' and isinstance(args.get('command'), str) and _GIT_COMMIT.search(args['command']):
                match = _COMMIT_MESSAGE.search(args['command'])
                changes.append(dict(kind='commit', paths=[], cwd=cwd, call=call_id,
                    summary=next((group for group in match.groups() if group), '') if match else summary,
                    command=args['command'][:1000]))
            elif name == 'read' and isinstance(args.get('path'), str):
                # A selector rides on the path; the image is what is left before it.
                candidate = args['path'] if _IMAGE_END.search(args['path']) else re.sub(r':[^/]*$', '', args['path'])
                if _IMAGE_END.search(candidate):
                    paths = [self._absolute(candidate, cwd)]
            images.extend(path for path in paths if _IMAGE_END.search(path))
        return changes, images

    def _finish_turn(self, context, timestamp=None, reply=None, record=None):
        turn = context.pop('turn', None)
        if not turn:
            return
        turn.update(reply=reply, replyTimestamp=timestamp, replyRecord=record)
        self.db.execute('INSERT OR IGNORE INTO turns VALUES (?,?,?,?)',
                        (turn['id'], '', _prompt_hash(turn['prompt']), json.dumps(turn)))

    def _record(self, row, context, source, offset):
        record = source + ':' + str(row.get('id', offset))
        timestamp = _time(row.get('timestamp'))
        if context.get('contact'):
            self._record_sender(row, context, source, record, timestamp)
            return
        if row.get('type') == 'session' and isinstance(row.get('id'), str):
            context['session'] = row['id']
            if not context.get('channel'):
                self.db.execute('INSERT OR IGNORE INTO sessions VALUES (?)', (row['id'],))
        message = row.get('message', row)
        if not isinstance(message, dict):
            return
        timestamp = timestamp or _time(message.get('timestamp'))
        if message.get('customType') == 'session_exit':
            self._finish_turn(context, timestamp)
        if message.get('customType') in ('peer-message', 'peer-channel-request'):
            details = message.get('details', {})
            payload = details.get('peerMessage', {}) if message['customType'] == 'peer-channel-request' else details
            eid = self._incoming(payload, timestamp, source, record)
            if eid and context.get('channel'):
                context['request'] = payload
                context['requestEvent'] = eid
                context['work'] = dict(changes=[], images=[])
                self._contact(payload['from'], payload.get('senderSessionId'), context.get('peerName'), state=context.get('state'))
        if message.get('role') == 'user' and not message.get('customType') and not context.get('channel'):
            prompt = _text(message.get('content')).strip()
            self._finish_turn(context)
            if prompt:
                context['turn'] = dict(id=_hash(record), source=source, record=record, prompt=prompt,
                    timestamp=timestamp, session=context.get('session'), sends=[], changes=[], images=[])
        work = context.get('turn') or context.get('work')
        if message.get('role') == 'assistant':
            content = message.get('content', [])
            blocks = content if isinstance(content, list) else []
            for block in blocks:
                if not isinstance(block, dict) or block.get('type') != 'toolCall':
                    continue
                call_id = source + ':' + str(block.get('id'))
                ids = []
                for n, args in enumerate(self._calls(block)):
                    if args.get('op') == 'send' and isinstance(args.get('to'), str) and isinstance(args.get('message'), str):
                        eid = self._event('send:' + _hash(record + ':' + str(block.get('id')) + ':' + str(n)),
                            args['to'], 'out', args['message'], timestamp, source, context.get('session', 'Designer'),
                            args['to'], args.get('replyTo'))
                        if eid:
                            ids.append(eid)
                            if context.get('turn'):
                                context['turn']['sends'].append(args['to'])
                if ids:
                    self.db.execute('INSERT OR REPLACE INTO calls VALUES (?,?)', (call_id, json.dumps(ids)))
                if work is not None:
                    changes, images = self._work(block, call_id)
                    for change in changes:
                        change.update(timestamp=timestamp, record=record)
                    work['changes'].extend(changes)
                    work['images'].extend(path for path in images if path not in work['images'])
            final = message.get('stopReason') not in ('toolUse', 'error', 'aborted') and not any(
                isinstance(b, dict) and b.get('type') == 'toolCall' for b in blocks)
            request = context.get('request')
            if final and context.get('channel') and request:
                body = _text(content).strip()
                eid = self._event('reply:' + _hash(record), request['from'], 'out', body, timestamp, source,
                    request['to'], request['from'], request.get('replyTo'), request.get('senderSessionId'),
                    request.get('senderName')) if body else None
                self._emit_work(context.pop('work', None) or dict(changes=[], images=[]),
                                self._contact(request['from'], request.get('senderSessionId')),
                                eid or context.get('requestEvent'))
            elif final and context.get('turn'):
                self._finish_turn(context, timestamp, _text(content).strip() or None, record)
        if message.get('role') == 'toolResult':
            details = message.get('details', {})
            call_id = source + ':' + str(message.get('toolCallId'))
            if work is not None:
                for change in work['changes']:
                    if change.get('call') == call_id and 'hash' not in change:
                        change['hash'] = self._commit_hash(_text(message.get('content')), change['summary'])
            call = self.db.execute('SELECT events FROM calls WHERE id=?', (call_id,)).fetchone()
            if _tool(message.get('toolName', '')) == 'hub' or call:
                self._details(details, timestamp, source, record)
                result = details.get('peerHub', details) if isinstance(details, dict) else {}
                receipt = result.get('receipt', {})
                if call and isinstance(receipt, dict) and isinstance(receipt.get('outcome'), str):
                    for eid in json.loads(call[0]):
                        event = self.db.execute('SELECT data FROM events WHERE id=?', (eid,)).fetchone()
                        if event:
                            data = json.loads(event[0]); data['delivery'] = receipt['outcome']
                            if result.get('id') and not data['replyTo']:
                                data['replyTo'] = result['id']
                            self.db.execute('UPDATE events SET data=? WHERE id=?', (json.dumps(data), eid))

    @staticmethod
    def _commit_hash(output, summary):
        """The hash git printed for this commit, when its output shows one beside the message."""
        for line in output.splitlines():
            match = _COMMIT_HASH.search(line)
            if match and (summary and summary in line or line.startswith('[')):
                return match.group()
        return None

    def _record_sender(self, row, context, source, record, timestamp):
        """A contact's transcript: only the one-shot prompts it launched against Designer."""
        message = row.get('message')
        if not isinstance(message, dict) or message.get('role') != 'assistant':
            return
        timestamp = timestamp or _time(message.get('timestamp'))
        content = message.get('content', [])
        for block in content if isinstance(content, list) else []:
            if not isinstance(block, dict) or block.get('type') != 'toolCall':
                continue
            for name, args in self._tool_calls(block):
                if name == 'hub' and args.get('op') == 'start' and isinstance(args.get('args'), list):
                    tokens = [args.get('application', '')] + args['args']
                elif name == 'bash' and isinstance(args.get('command'), str) and '--resume' in args['command']:
                    try:
                        tokens = shlex.split(args['command'])
                    except ValueError:
                        continue
                else:
                    continue
                launch = _oneshot(tokens, self.session_dir)
                if launch:
                    self.db.execute('INSERT OR IGNORE INTO prompts VALUES (?,?,?)', (_prompt_hash(launch[1]),
                        context['contact'], json.dumps(dict(transcript=str(launch[0]), timestamp=timestamp,
                                                            source=source, record=record))))

    def _emit_work(self, work, cid, eid):
        """Attach a turn's changes and images to the contact it belongs to."""
        if not eid:
            return
        for change in work['changes']:
            change_id = 'change:' + _hash(json.dumps([change['record'], change['kind'], change['paths'], change.get('command', '')]))
            data = dict(id=change_id, contactId=cid, eventId=eid, timestamp=change['timestamp'], kind=change['kind'],
                        paths=change['paths'], summary=change['summary'], cwd=change.get('cwd'),
                        hash=change.get('hash'), source=change['record'].rsplit(':', 1)[0])
            self.db.execute('INSERT OR IGNORE INTO changes VALUES (?,?,?,?)', (change_id, cid, eid, json.dumps(data)))
        for path in work['images']:
            self.db.execute("INSERT OR IGNORE INTO reference_specs(event,path,parents,origin) VALUES (?,?,'[]','tool')",
                            (eid, path))

    def _attribute_turns(self):
        """Turn a stored Designer turn into a contact's record once its author is known."""
        for row in self.db.execute("SELECT id,prompt,data FROM turns WHERE contact=''").fetchall():
            turn = json.loads(row['data'])
            prompt = self.db.execute('SELECT contact FROM prompts WHERE hash=?', (row['prompt'],)).fetchone()
            cid, origin = (prompt['contact'], 'peer') if prompt else (None, 'user')
            if not cid and len(set(turn['sends'])) == 1:
                alias = self.db.execute('SELECT contact FROM aliases WHERE peer=?', (turn['sends'][0],)).fetchone()
                cid = alias['contact'] if alias else None
            contact = self.db.execute('SELECT data FROM contacts WHERE id=?', (cid,)).fetchone() if cid else None
            if not contact:
                continue
            contact = json.loads(contact['data'])
            peer, session = contact['peerId'], contact.get('sessionId')
            designer = turn.get('session') or 'Designer'
            eid = self._event('prompt:' + turn['id'], peer, 'in', turn['prompt'], turn['timestamp'], turn['source'],
                              peer if origin == 'peer' else 'user', designer, session=session)
            reply = self._event('reply:' + turn['id'], peer, 'out', turn['reply'], turn['replyTimestamp'],
                                turn['source'], designer, peer, session=session) if turn.get('reply') else None
            self._emit_work(turn, cid, reply or eid)
            self.db.execute('UPDATE turns SET contact=? WHERE id=?', (cid, row['id']))

    def _import(self, path, defaults=None):
        source = str(path)
        try:
            if path.is_symlink():
                raise ValueError('symlink history refused')
            with path.open('rb') as stream:
                info = os.fstat(stream.fileno())
                inode = f'{info.st_dev}:{info.st_ino}'
                row = self.db.execute('SELECT * FROM cursors WHERE path=?', (source,)).fetchone()
                offset, context = (row['offset'], json.loads(row['context'])) if row else (0, {})
                if row and (row['inode'] != inode or info.st_size < offset):
                    self._warn(f'History replaced or truncated; preserved previous records and rescanning: {source}')
                    offset, context = 0, {}
                context.update(defaults or {})
                stream.seek(offset)
                while True:
                    line = stream.readline(MAX_RECORD_BYTES + 1)
                    if not line:
                        break
                    if len(line) > MAX_RECORD_BYTES:
                        self._warn(f'History record exceeds {MAX_RECORD_BYTES} bytes at {source}:{offset}; import paused')
                        break
                    if not line.endswith(b'\n'):
                        break
                    try:
                        record = json.loads(line)
                        if isinstance(record, dict):
                            self._record(record, context, source, offset)
                    except (ValueError, TypeError, KeyError) as error:
                        self._warn(f'Invalid history record at {source}:{offset}: {error}')
                    offset = stream.tell()
                self.db.execute('INSERT OR REPLACE INTO cursors VALUES (?,?,?,?)',
                                (source, inode, offset, json.dumps(context)))
        except (OSError, ValueError) as error:
            self._warn(f'Cannot import {source}: {error}')

    def sync(self, peers: list[dict]) -> None:
        observations = {}
        with self.db:
            for row in self.db.execute('SELECT id,data FROM contacts').fetchall():
                data = json.loads(row['data']); data['state'] = 'unknown'
                self.db.execute('UPDATE contacts SET data=? WHERE id=?', (json.dumps(data), row['id']))
            for peer in peers:
                self._peer(peer, live=True)
            if not self.session_dir.is_dir():
                self._warn(f'Designer session directory is unavailable: {self.session_dir}')
            for cid, path in self._contact_transcripts():
                self._import(path, {'contact': cid})
            for path in sorted(self.session_dir.glob('*.jsonl')):
                self._import(path)
            for session in self.db.execute('SELECT id FROM sessions').fetchall():
                root = self.channels_dir / _hash(session[0])
                if root.is_symlink():
                    self._warn(f'Symlink channel root refused: {root}'); continue
                for directory in sorted(root.glob('*')):
                    if not _HEX.fullmatch(directory.name) or directory.is_symlink() or not directory.is_dir():
                        continue
                    defaults = {'channel': True}
                    channel = directory / 'channel.json'
                    try:
                        if channel.is_symlink() or channel.stat().st_size > MAX_RECORD_BYTES:
                            raise ValueError('unsafe channel metadata')
                        data = json.loads(channel.read_text())
                        defaults.update(peerName=data.get('peerName'), state=data.get('state'))
                        for item in ([data['active']] if data.get('active') else []) + data.get('pending', []):
                            self._incoming(item.get('message'), None, str(channel), str(channel) + ':' + str(item.get('id')))
                    except (OSError, ValueError, TypeError, KeyError) as error:
                        self._warn(f'Cannot read channel metadata {channel}: {error}')
                    self._import(directory / 'session.jsonl', defaults)
                    # Apply current channel state even when its JSONL has not grown.
                    cursor = self.db.execute('SELECT context FROM cursors WHERE path=?', (str(directory / 'session.jsonl'),)).fetchone()
                    if cursor:
                        request = json.loads(cursor[0]).get('request', {})
                        if request.get('from'):
                            self._contact(request['from'], request.get('senderSessionId'), defaults.get('peerName'), state=defaults.get('state'))
            for peer in peers:
                self._peer(peer, live=True)
            self._attribute_turns()
            # Wildcards and missing paths are retried; unchanged concrete files are not reread.
            self._sync_references(observations)
            for image in self.db.execute('SELECT id,type FROM images').fetchall():
                self._ensure_thumbnail(image['id'], image['type'])
            self.db.execute('INSERT OR REPLACE INTO metadata VALUES (?,?)', ('sampledAt', str(time.time())))
        self._observations = observations

    def _contact_transcripts(self):
        """Each contact's own transcript, found the way OMP files it: by project directory and session id."""
        home = str(Path.home())
        for row in self.db.execute('SELECT id,data FROM contacts').fetchall():
            data = json.loads(row['data'])
            session, cwd = data.get('sessionId'), data.get('cwd')
            if not session or not cwd or not re.fullmatch(r'[0-9a-f-]+', session):
                continue
            directory = self.sessions_root / str(cwd).removeprefix(home).replace('/', '-')
            # Designer's own transcripts are already imported as Designer's, under the same cursor.
            if directory == self.session_dir or directory.is_symlink() or not directory.is_dir():
                continue
            for path in sorted(directory.glob(f'*_{session}.jsonl')):
                yield row['id'], path

    def _read_image(self, path):
        path = Path(os.path.abspath(Path(path).expanduser()))
        roots = (Path.home(), Path('/tmp'), Path('/var/tmp'), self.project_dir)
        hidden_safe = all(not part.startswith('.') or part == '.worktrees' or
                          (part == '.cache' and path.parts[index + 1:index + 2] == ('agent-shots',))
                          for index, part in enumerate(path.parts[1:], 1))
        if not any(path.is_relative_to(root) for root in roots) or not hidden_safe:
            raise ValueError('image path outside permitted project/home/temp image locations')
        # Walk without following any symlink, including intermediate directories. Open only
        # regular files; O_NONBLOCK prevents a FIFO from hanging the sampler.
        fd = os.open('/', os.O_RDONLY | os.O_DIRECTORY)
        try:
            for part in path.parts[1:-1]:
                next_fd = os.open(part, os.O_RDONLY | os.O_DIRECTORY | os.O_NOFOLLOW, dir_fd=fd)
                os.close(fd); fd = next_fd
            image_fd = os.open(path.name, os.O_RDONLY | os.O_NOFOLLOW | os.O_NONBLOCK, dir_fd=fd)
            with os.fdopen(image_fd, 'rb') as stream:
                info = os.fstat(stream.fileno())
                if not stat.S_ISREG(info.st_mode) or info.st_size > MAX_IMAGE_BYTES:
                    raise ValueError('not a regular image or image exceeds 32 MiB')
                content = stream.read(MAX_IMAGE_BYTES + 1)
                if len(content) > MAX_IMAGE_BYTES:
                    raise ValueError('image exceeds 32 MiB')
        finally:
            os.close(fd)
        kind = None
        if content.startswith(b'\x89PNG\r\n\x1a\n') and len(content) >= 33 and content[12:16] == b'IHDR':
            kind = 'image/png'
        elif content.startswith(b'\xff\xd8\xff') and content.rstrip().endswith(b'\xff\xd9'):
            kind = 'image/jpeg'
        elif content[:6] in (b'GIF87a', b'GIF89a') and len(content) >= 13:
            kind = 'image/gif'
        elif content[:4] == b'RIFF' and content[8:12] == b'WEBP' and len(content) >= 20:
            kind = 'image/webp'
        elif path.suffix.lower() == '.svg':
            if b'<!DOCTYPE' in content.upper() or b'<!ENTITY' in content.upper():
                raise ValueError('SVG entities and doctypes refused')
            try:
                root = ET.fromstring(content)
            except ET.ParseError as error:
                raise ValueError('invalid SVG') from error
            if root.tag.split('}')[-1] != 'svg':
                raise ValueError('not SVG')
            for node in root.iter():
                if node.tag.split('}')[-1].lower() in ('script','foreignobject','iframe','object','embed','image','animate','animatetransform','set'):
                    raise ValueError('active or externally referencing SVG refused')
                for key, value in node.attrib.items():
                    if key.split('}')[-1].lower().startswith('on') or ('href' in key.lower() and not value.startswith('#')):
                        raise ValueError('active SVG attributes refused')
                css = ' '.join(node.attrib.values()) + (node.text or '')
                css = re.sub(r"url\(\s*['\"]?#[A-Za-z0-9_-]+['\"]?\s*\)", '', css, flags=re.I)
                if re.search(r'url\s*\(|@import|javascript:|\\', css, re.I):
                    raise ValueError('SVG external/style references refused')
            kind = 'image/svg+xml'
        if kind is None:
            raise ValueError('unrecognized or invalid image bytes')
        return path, content, kind

    def _revision(self, contact_id, asset, image, caption, event_id):
        if not self.db.execute('SELECT 1 FROM contacts WHERE id=?', (contact_id,)).fetchone():
            raise ValueError('unknown contact ID')
        if not isinstance(asset, str) or not asset.strip():
            raise ValueError('asset key must be nonempty')
        event = self.db.execute('SELECT contact,data FROM events WHERE id=?', (event_id,)).fetchone() if event_id else None
        if event_id and (not event or event['contact'] != contact_id):
            raise ValueError('event must belong to the selected contact')
        path, content, kind = self._read_image(image)
        image_id = _hash(content)
        existing = self.db.execute('SELECT image,data FROM revisions WHERE contact=? AND asset=? ORDER BY rowid DESC LIMIT 1',
                                   (contact_id, asset)).fetchone()
        if existing and existing['image'] == image_id:
            self._ensure_thumbnail(image_id, kind)
            return json.loads(existing['data'])
        destination = self.archive / image_id
        temporary = None
        try:
            with tempfile.NamedTemporaryFile(dir=self.archive, prefix='.capture-', delete=False) as stream:
                temporary = Path(stream.name)
                stream.write(content); stream.flush(); os.fsync(stream.fileno())
            try:
                os.link(temporary, destination)
            except FileExistsError:
                if destination.is_symlink() or _hash(destination.read_bytes()) != image_id:
                    raise ValueError('archive integrity failure')
            directory_fd = os.open(self.archive, os.O_RDONLY | os.O_DIRECTORY)
            try:
                os.fsync(directory_fd)
            finally:
                os.close(directory_fd)
        finally:
            if temporary is not None:
                temporary.unlink(missing_ok=True)
        self.db.execute('INSERT OR IGNORE INTO images VALUES (?,?,?)', (image_id, kind, len(content)))
        self._ensure_thumbnail(image_id, kind)
        number = self.db.execute('SELECT COUNT(*) FROM revisions WHERE contact=? AND asset=?', (contact_id, asset)).fetchone()[0] + 1
        revision_id = _hash(json.dumps([contact_id, asset, image_id, time.time_ns()]))
        data = dict(id=revision_id, contactId=contact_id, asset=asset, number=number,
                    capturedAt=time.time(), sourceTimestamp=json.loads(event['data'])['timestamp'] if event else None,
                    caption=caption, eventId=event_id, imageUrl='images/' + image_id, sourcePath=str(path))
        self.db.execute('INSERT INTO revisions VALUES (?,?,?,?,?)',
                        (revision_id, contact_id, asset, image_id, json.dumps(data)))
        return data

    def add_revision(self, contact_id: str, asset: str, image: Path, caption: str = '', event_id: str | None = None) -> dict:
        with self.db:
            return self._revision(contact_id, asset, image, caption, event_id)

    def image_path(self, image_id: str) -> tuple[Path, str] | None:
        if not isinstance(image_id, str) or not _HEX.fullmatch(image_id):
            return None
        row = self.db.execute('SELECT type FROM images WHERE id=?', (image_id,)).fetchone()
        path = self.archive / image_id
        if not row or path.is_symlink() or not path.is_file():
            return None
        return path, row[0]

    def _ensure_thumbnail(self, image_id, content_type):
        if image_id in self._thumbnail_attempted:
            return
        self._thumbnail_attempted.add(image_id)
        try:
            ensure_thumbnail(self.archive / image_id, self.thumbnails / (image_id + '.png'), content_type)
        except Exception as error:
            self._thumbnail_errors[image_id] = f'Thumbnail unavailable for {image_id}: {error}. Original retained.'

    def thumbnail_path(self, image_id: str) -> tuple[Path, str] | None:
        if not isinstance(image_id, str) or not _HEX.fullmatch(image_id):
            return None
        if not self.db.execute('SELECT 1 FROM images WHERE id=?', (image_id,)).fetchone():
            return None
        path = self.thumbnails / (image_id + '.png')
        if path.is_symlink() or not path.is_file():
            return None
        return path, 'image/png'

    def snapshot(self) -> dict:
        contacts = {row['id']: json.loads(row['data']) for row in self.db.execute('''
            SELECT * FROM contacts WHERE id IN (SELECT contact FROM events UNION SELECT contact FROM revisions)''')}
        events = [json.loads(row[0]) for row in self.db.execute('SELECT data FROM events')]
        events.sort(key=lambda event: (event['timestamp'] is not None, event['timestamp'] or 0, event['id']))
        for event in events:
            contact = contacts[event['contactId']]
            contact['messages'] += 1
            # A user-originated prompt about a contact is not that contact's feedback.
            if event['direction'] == 'in' and event['from'] != 'user':
                contact['lastFeedback'] = event['body']
        # Same-second changes keep transcript order: the sort is stable over rowid.
        changes = [json.loads(row[0]) for row in self.db.execute('SELECT data FROM changes ORDER BY rowid')]
        changes.sort(key=lambda change: (change['timestamp'] is not None, change['timestamp'] or 0))
        for contact in contacts.values():
            contact['changes'] = 0
        for change in changes:
            contacts[change['contactId']]['changes'] += 1
        revisions = [json.loads(row[0]) for row in self.db.execute('SELECT data FROM revisions')]
        revisions.sort(key=lambda revision: (revision['contactId'], revision['asset'], revision['capturedAt'], revision['id']))
        counters = {}
        for revision in revisions:
            key = (revision['contactId'], revision['asset'])
            counters[key] = counters.get(key, 0) + 1
            revision['number'] = counters[key]
            image_id = revision['imageUrl'].removeprefix('images/')
            revision['thumbnailUrl'] = ('thumbnails/' + image_id) if self.thumbnail_path(image_id) else None
        sampled = self.db.execute('SELECT value FROM metadata WHERE key=?', ('sampledAt',)).fetchone()
        return dict(sampledAt=float(sampled[0]) if sampled else None,
                    contacts=sorted(contacts.values(), key=lambda contact: (-(contact['lastActivity'] or 0), contact['id'])),
                    events=events, revisions=revisions, changes=changes,
                    warnings=[row[0] for row in self.db.execute('''SELECT message FROM warnings
                        UNION SELECT message FROM reference_warnings ORDER BY message''')] + list(self._thumbnail_errors.values()),
                    totals=dict(contacts=len(contacts), messages=len(events), revisions=len(revisions), changes=len(changes),
                                imageBytes=self.db.execute('SELECT COALESCE(SUM(bytes),0) FROM images').fetchone()[0],
                                unrecovered=self.db.execute('SELECT COUNT(*) FROM reference_warnings').fetchone()[0]))

    def close(self):
        self.db.close()
