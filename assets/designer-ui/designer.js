(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const storageKey = 'designer-dock-selection-v1';
  let saved;
  try { saved = JSON.parse(sessionStorage.getItem(storageKey) || '{}'); } catch { saved = {}; }
  const selection = { contact: typeof saved?.contact === 'string' ? saved.contact : '', search: typeof saved?.search === 'string' ? saved.search : '', assets: saved?.assets && typeof saved.assets === 'object' ? saved.assets : {}, pairs: saved?.pairs && typeof saved.pairs === 'object' ? saved.pairs : {} };
  let snapshot = null;
  let failure = '';
  const text = value => value == null ? '--' : String(value);
  const date = value => typeof value === 'number' && Number.isFinite(value) ? new Date(value * 1000).toLocaleString() : '--';
  const save = () => { try { sessionStorage.setItem(storageKey, JSON.stringify(selection)); } catch { /* History remains usable when browser storage is disabled. */ } };
  const key = (...values) => JSON.stringify(values);
  function el(tag, content, className) {
    const node = document.createElement(tag);
    if (content != null) node.textContent = String(content);
    if (className) node.className = className;
    return node;
  }
  function keyed(node, value) { node.dataset.key = String(value); return node; }
  // Keep live DOM nodes: polling must not close details, move focus, or reset scroll.
  function patch(old, fresh) {
    if (old.nodeType !== fresh.nodeType || old.nodeName !== fresh.nodeName) { old.replaceWith(fresh); return fresh; }
    if (old.nodeType === Node.TEXT_NODE) { if (old.data !== fresh.data) old.data = fresh.data; return old; }
    if (old.dataset.static && old.dataset.static === fresh.dataset.static) return old;
    for (const attr of [...old.attributes]) {
      if (old.tagName === 'DETAILS' && attr.name === 'open') continue;
      if (!fresh.hasAttribute(attr.name)) old.removeAttribute(attr.name);
    }
    for (const attr of fresh.attributes) if (old.getAttribute(attr.name) !== attr.value) old.setAttribute(attr.name, attr.value);
    reconcile(old, [...fresh.childNodes]);
    return old;
  }
  function reconcile(parent, freshNodes) {
    const prior = [...parent.childNodes];
    const byKey = new Map(prior.filter(n => n.nodeType === 1 && n.dataset.key != null).map(n => [n.dataset.key, n]));
    const used = new Set();
    freshNodes.forEach((fresh, index) => {
      const identity = fresh.nodeType === 1 ? fresh.dataset.key : undefined;
      let old = identity != null ? byKey.get(identity) : prior[index];
      if (old && (used.has(old) || (identity == null && old.nodeType === 1 && old.dataset.key != null))) old = null;
      const node = old ? patch(old, fresh) : fresh;
      used.add(node);
      if (parent.childNodes[index] !== node) parent.insertBefore(node, parent.childNodes[index] || null);
    });
    for (const child of [...parent.childNodes]) if (!used.has(child)) child.remove();
  }
  const states = new Set(['running', 'queued', 'idle', 'error', 'unknown', 'offline', 'ambiguous']);
  function stateNode(value) { const state = states.has(value) ? value : 'unknown'; const node = el('span', state, 'state'); node.dataset.state = state; return node; }
  function validImage(url) { return typeof url === 'string' && /^images\/[a-f0-9]+$/i.test(url); }
  function image(revision, full = false) {
    const wrap = el(full ? 'div' : 'button', null, full ? 'full-image' : 'image-button');
    if (!full) { wrap.type = 'button'; wrap.dataset.preview = revision.id; wrap.setAttribute('aria-label', `Open ${text(revision.asset)} revision ${text(revision.number)} full image`); }
    wrap.dataset.static = key(revision.id, revision.imageUrl, full);
    if (!validImage(revision.imageUrl)) {
      const blocked = el('div', 'Image unavailable: blocked or invalid archive URL.', 'image-failure');
      blocked.dataset.static = wrap.dataset.static;
      return blocked;
    }
    const img = el('img');
    img.src = revision.imageUrl;
    img.alt = `${text(revision.asset)} · revision ${text(revision.number)}`;
    if (!full) img.loading = 'lazy';
    const error = el('span', 'Image unavailable: the archived image could not be loaded.', 'image-failure');
    error.hidden = true;
    wrap.append(img, error);
    return wrap;
  }
  document.addEventListener('error', event => {
    if (event.target instanceof HTMLImageElement && event.target.parentElement?.querySelector('.image-failure')) {
      event.target.hidden = true;
      event.target.nextElementSibling.hidden = false;
    }
  }, true);
  function revisionInfo(revision) {
    return `Captured: ${date(revision.capturedAt)}\nSource message: ${date(revision.sourceTimestamp)}\nSource path: ${text(revision.sourcePath)}\nEvent: ${text(revision.eventId)}`;
  }
  function contactNode(contact) {
    const button = keyed(el('button', null, 'contact'), contact.id);
    button.type = 'button'; button.dataset.contact = contact.id;
    button.setAttribute('aria-pressed', String(selection.contact === contact.id));
    const project = contact.cwd ? contact.cwd.replace(/\/$/, '').split('/').pop() : 'Project unknown';
    button.title = `Peer: ${text(contact.peerId)}\nSession: ${text(contact.sessionId)}\nProject: ${text(contact.cwd)}`;
    button.append(el('span', text(contact.name), 'contact-name'), stateNode(contact.state), el('span', project, 'meta'), el('span', `${text(contact.messages)} messages · ${date(contact.lastActivity)}`, 'meta'), el('span', contact.lastFeedback || 'No recorded incoming feedback.', 'feedback'));
    return button;
  }
  function messageNode(event) {
    const article = keyed(el('article', null, 'message'), event.id);
    const heading = el('div', null, 'message-heading');
    const contact = snapshot.contacts.find(item => item.id === event.contactId);
    const name = contact?.name || (event.direction === 'in' ? event.from : event.to);
    heading.append(el('strong', event.direction === 'in' ? `${text(name)} → Designer` : `Designer → ${text(name)}`), el('time', date(event.timestamp), 'meta'), el('span', `Transport: ${text(event.delivery)}`, 'meta'));
    const body = text(event.body);
    const details = el('details'); details.dataset.event = event.id;
    details.append(el('summary', 'Full message and record details'), el('pre', body));
    const metadata = el('dl');
    for (const [label, value] of [['From', event.from], ['To', event.to], ['Reply to', event.replyTo], ['Source', event.source], ['Event', event.id]]) metadata.append(el('dt', label), el('dd', text(value)));
    details.append(metadata);
    article.append(heading, el('p', body.length > 280 ? `${body.slice(0, 280)}…` : body, 'message-summary'), details);
    return article;
  }
  function options(select, entries, selected) {
    reconcile(select, entries.map(([value, label]) => { const option = keyed(el('option', label), value); option.value = value; return option; }));
    if (select.value !== selected) select.value = selected;
  }
  function selectedRevisions() { return snapshot ? snapshot.revisions.filter(r => r.contactId === selection.contact) : []; }
  function assetKey() { return key(selection.contact); }
  function pairKey() { return key(selection.contact, selection.assets[assetKey()]); }
  function drawAssets() {
    const revisions = selectedRevisions();
    const assets = [...new Set(revisions.map(r => r.asset))];
    let asset = selection.assets[assetKey()];
    if (!assets.includes(asset)) asset = assets.find(a => revisions.filter(r => r.asset === a).length > 1) || assets[0] || '';
    selection.assets[assetKey()] = asset;
    options($('asset-select'), assets.map(a => [a, a]), asset);
    $('asset-select').disabled = assets.length === 0;
    const group = revisions.filter(r => r.asset === asset).sort((a, b) => a.number - b.number);
    $('revision-empty').hidden = group.length !== 0;
    $('comparison-controls').hidden = group.length === 0;
    let pair = selection.pairs[pairKey()];
    if (!Array.isArray(pair)) pair = [];
    pair = [group.some(r => r.id === pair[0]) ? pair[0] : group[0]?.id || '', group.some(r => r.id === pair[1]) ? pair[1] : group[group.length - 1]?.id || ''];
    selection.pairs[pairKey()] = pair;
    const labels = group.map(r => [r.id, `Revision ${text(r.number)} · ${date(r.capturedAt)}`]);
    options($('before-select'), labels, pair[0]); options($('after-select'), labels, pair[1]);
    reconcile($('revision-strip'), group.map(r => {
      const card = keyed(el('div', null, 'revision'), r.id);
      card.append(image(r), el('p', `Revision ${text(r.number)}`, 'revision-title'), el('p', r.caption || 'No caption recorded.', 'meta'), el('p', `Captured: ${date(r.capturedAt)}\nSource message: ${date(r.sourceTimestamp)}`, 'meta'));
      return card;
    }));
    reconcile($('comparison'), group.length ? pair.map((id, index) => {
      const r = group.find(item => item.id === id);
      const figure = keyed(el('figure'), index);
      figure.append(image(r), el('figcaption', `${index === 0 ? 'Before' : 'After'} · Revision ${text(r.number)}\n${r.caption || 'No caption recorded.'}`), el('p', revisionInfo(r), 'image-info'));
      return figure;
    }) : []);
  }
  function draw() {
    if (!snapshot) return;
    const contacts = snapshot.contacts;
    if (!contacts.some(c => c.id === selection.contact)) selection.contact = (contacts.find(c => snapshot.revisions.some(r => r.contactId === c.id)) || contacts[0])?.id || '';
    const query = selection.search.toLocaleLowerCase();
    const filtered = contacts.filter(c => [c.name, c.peerId, c.sessionId, c.cwd, c.id].some(value => String(value ?? '').toLocaleLowerCase().includes(query)));
    $('result-count').textContent = `${filtered.length} of ${contacts.length} contacts`;
    reconcile($('contacts'), filtered.length ? filtered.map(contactNode) : [el('p', contacts.length ? 'No contacts match your search.' : 'No recorded conversations yet', 'empty')]);
    const contact = contacts.find(c => c.id === selection.contact);
    $('contact-title').textContent = contact ? text(contact.name) : 'Choose a contact';
    $('contact-meta').textContent = contact ? `Project: ${text(contact.cwd)}\nPeer: ${text(contact.peerId)}\nSession: ${text(contact.sessionId)}` : '';
    $('contact-empty').hidden = Boolean(contact); $('contact-content').hidden = !contact;
    $('contact-empty').textContent = contacts.length ? 'Select a contact to browse attributable feedback and recorded images.' : 'No recorded conversations yet';
    if (contact) {
      const events = snapshot.events.filter(e => e.contactId === contact.id).sort((a, b) => (a.timestamp ?? Infinity) - (b.timestamp ?? Infinity));
      $('message-count').textContent = `(${events.length})`;
      reconcile($('messages'), events.length ? events.map(messageNode) : [el('p', 'No recorded messages for this contact.', 'empty')]);
      drawAssets();
    }
    const runtime = snapshot.runtime || {};
    const status = states.has(runtime.status) ? runtime.status : 'unknown';
    $('runtime').textContent = `Designer ${status}`; $('runtime').dataset.state = status;
    $('runtime-detail').textContent = `Session: ${text(runtime.sessionId)} · Peer: ${text(runtime.peerId)}\nProject: ${text(runtime.cwd)}${runtime.error ? `\nRuntime: ${runtime.error}` : ''}`;
    const totals = snapshot.totals || {};
    const bytes = typeof totals.imageBytes === 'number' ? (totals.imageBytes >= 1048576 ? `${(totals.imageBytes / 1048576).toFixed(1)} MiB` : `${(totals.imageBytes / 1024).toFixed(1)} KiB`) : '--';
    reconcile($('totals'), [['contacts', 'Contacts'], ['messages', 'Messages'], ['revisions', 'Revisions'], ['imageBytes', 'Archived images']].map(([field, label]) => { const item = keyed(el('div', null, 'total'), field); item.append(el('strong', field === 'imageBytes' ? bytes : text(totals[field])), el('span', label)); return item; }));
    const warnings = Array.isArray(snapshot.warnings) ? snapshot.warnings : [];
    $('warnings').hidden = !warnings.length;
    reconcile($('warning-list'), warnings.map((warning, index) => keyed(el('li', text(warning)), index)));
    save(); health();
  }
  function health() {
    const sample = snapshot?.sampledAt;
    const age = typeof sample === 'number' && Number.isFinite(sample) ? Math.max(0, Date.now() / 1000 - sample) : null;
    const stale = snapshot && (age == null || age > 15);
    $('sample-age').textContent = age == null ? 'Sample time: --' : `Sampled ${Math.floor(age)}s ago · ${date(sample)}`;
    $('connection').textContent = failure ? 'Snapshot error' : stale ? 'Snapshot stale' : snapshot ? 'Snapshot current' : 'Connecting…';
    $('connection').className = 'state'; $('connection').dataset.state = failure ? 'error' : stale ? 'stale' : 'idle';
    $('notice').hidden = !failure && !stale;
    $('notice').dataset.error = String(Boolean(failure));
    $('notice').textContent = failure ? `${failure}${snapshot ? ' Showing the last good snapshot.' : ' No snapshot has been loaded.'}${stale ? ' Recorded data is stale (over 15 seconds old or timestamp unavailable).' : ''}` : stale ? 'Recorded data is stale (over 15 seconds old or timestamp unavailable). Runtime status is the last observation, not a live guarantee.' : '';
  }
  window.render = function render(data) {
    if (!data || !Array.isArray(data.contacts) || !Array.isArray(data.events) || !Array.isArray(data.revisions)) throw new Error('Invalid history snapshot');
    snapshot = data; failure = ''; draw();
  };
  $('search').value = selection.search;
  $('search').addEventListener('input', () => { selection.search = $('search').value; save(); draw(); });
  $('contacts').addEventListener('click', event => { const button = event.target.closest('[data-contact]'); if (button) { selection.contact = button.dataset.contact; draw(); } });
  $('asset-select').addEventListener('change', () => { selection.assets[assetKey()] = $('asset-select').value; drawAssets(); save(); });
  for (const [id, index] of [['before-select', 0], ['after-select', 1]]) $(id).addEventListener('change', () => { selection.pairs[pairKey()][index] = $(id).value; drawAssets(); save(); });
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-preview]');
    if (!button) return;
    const revision = snapshot?.revisions.find(r => r.id === button.dataset.preview);
    if (!revision) return;
    $('preview-title').textContent = `${text(revision.asset)} · revision ${text(revision.number)}`;
    $('preview-meta').textContent = `${revision.caption || 'No caption recorded.'}\n${revisionInfo(revision)}`;
    $('preview-image').replaceChildren(image(revision, true));
    $('image-preview').showModal();
  });
  $('preview-close').addEventListener('click', () => $('image-preview').close());
  async function poll() {
    try {
      const response = await fetch('api/snapshot', { cache: 'no-store', signal: AbortSignal.timeout(10000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      window.render(await response.json());
    } catch (error) { failure = `Unable to refresh history: ${error.message || 'request failed'}.`; health(); }
    finally { setTimeout(poll, 2000); }
  }
  setInterval(health, 1000);
  if (new URLSearchParams(location.search).get('manual') !== '1') poll();
})();
