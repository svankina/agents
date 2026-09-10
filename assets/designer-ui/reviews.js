(() => {
  'use strict';

  const $ = id => document.getElementById(id);
  const storageKey = 'designer-reviews-selection-v1';

  let saved;
  try { saved = JSON.parse(sessionStorage.getItem(storageKey) || '{}'); } catch { saved = {}; }

  const state = {
    project: typeof saved?.project === 'string' ? saved.project : '',
    revA: typeof saved?.revA === 'string' ? saved.revA : '',
    revB: typeof saved?.revB === 'string' ? saved.revB : '',
    mode: ['side', 'swipe', 'diff'].includes(saved?.mode) ? saved.mode : 'side',
    zoom: !!saved?.zoom,
    greyscale: !!saved?.greyscale,
    search: '',
  };

  let snapshot = null;
  let validator = null;

  const save = () => {
    try { sessionStorage.setItem(storageKey, JSON.stringify(state)); } catch {}
  };

  const text = v => v == null ? '--' : String(v);
  const dateStr = ts => {
    if (typeof ts !== 'number' || !Number.isFinite(ts)) return '--';
    const d = new Date(ts * 1000);
    return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  };

  function computeVerdict(contact) {
    const feedback = (contact.lastFeedback || '').toLowerCase();
    const messages = (contact.messages || []);
    let allText = feedback;
    if (Array.isArray(messages)) {
      allText += ' ' + messages.map(m => (m.body || '')).join(' ').toLowerCase();
    }
    if (allText.includes('approved') || allText.includes('ship')) return { kind: 'ship', label: 'Ship' };
    if (allText.includes('iterate')) return { kind: 'iterate', label: 'Iterate' };
    if (allText.includes('rethink') || allText.includes('reject')) return { kind: 'rethink', label: 'Rethink' };
    if (contact.revisions && contact.revisions.length > 0) return { kind: 'pending', label: 'Pending' };
    return { kind: 'pending', label: 'Quiet' };
  }

  function getActiveContact() {
    if (!snapshot || !snapshot.contacts) return null;
    return snapshot.contacts.find(c => c.id === state.project || c.name === state.project) || snapshot.contacts[0] || null;
  }

  function getRevisions(contact) {
    if (!contact || !contact.revisions) return [];
    // Sort oldest to newest
    return [...contact.revisions].sort((a, b) => (a.number || 0) - (b.number || 0) || (a.capturedAt || 0) - (b.capturedAt || 0));
  }

  function renderProjects() {
    const list = $('project-list');
    const contacts = (snapshot?.contacts || []).filter(c => {
      const q = state.search.toLowerCase();
      if (!q) return true;
      return (c.name || '').toLowerCase().includes(q) || (c.cwd || '').toLowerCase().includes(q);
    });

    $('project-count').textContent = `${contacts.length} projects`;

    if (!contacts.length) {
      list.innerHTML = '<p class="empty" style="padding:14px;color:var(--dim);text-align:center">No matching projects</p>';
      return;
    }

    list.replaceChildren(...contacts.map(c => {
      const card = document.createElement('div');
      card.className = 'project-card' + ((c.id === state.project || c.name === state.project) ? ' active' : '');
      card.onclick = () => {
        state.project = c.id;
        state.revA = '';
        state.revB = '';
        save();
        renderAll();
      };

      const info = document.createElement('div');
      info.className = 'project-info';

      const name = document.createElement('span');
      name.className = 'project-name';
      name.textContent = c.name || (c.cwd ? c.cwd.split('/').pop() : 'Project');

      const sub = document.createElement('span');
      sub.className = 'project-sub mono';
      const revCount = (c.revisions || []).length;
      sub.textContent = `${revCount} rev${revCount === 1 ? '' : 's'}`;

      info.append(name, sub);

      const verdict = computeVerdict(c);
      const dot = document.createElement('span');
      dot.className = `verdict-dot ${verdict.kind}`;
      dot.title = verdict.label;

      card.append(info, dot);
      return card;
    }));
  }

  function renderFilmstrip(contact) {
    const strip = $('filmstrip');
    const revs = getRevisions(contact);

    $('current-asset').textContent = contact ? (contact.name || contact.cwd?.split('/').pop() || 'Project') : 'Select a project';
    $('current-meta').textContent = revs.length ? `${revs.length} recorded revision${revs.length === 1 ? '' : 's'}` : 'No revisions';

    if (!revs.length) {
      strip.innerHTML = '<p class="empty-inline" style="color:var(--dim);font-size:11px">No image revisions archived for this project.</p>';
      return;
    }

    // Auto-select latest revision if none selected
    if (!state.revA && revs.length) {
      state.revA = revs[revs.length - 1].id;
    }

    strip.replaceChildren(...revs.map(r => {
      const card = document.createElement('div');
      card.className = 'thumb-card';
      if (r.id === state.revA) card.classList.add('active');
      if (r.id === state.revB) card.classList.add('compare-base');

      card.onclick = (e) => {
        if (e.shiftKey) {
          // Toggle B
          state.revB = state.revB === r.id ? '' : r.id;
        } else {
          state.revA = r.id;
        }
        save();
        renderStage(contact);
        renderFilmstrip(contact);
      };

      const box = document.createElement('div');
      box.className = 'thumb-box';

      if (r.thumbnailUrl || r.imageUrl) {
        const img = document.createElement('img');
        img.src = r.thumbnailUrl || r.imageUrl;
        img.alt = `r${text(r.number)}`;
        img.loading = 'lazy';
        box.append(img);
      } else {
        box.textContent = `r${text(r.number)}`;
      }

      const label = document.createElement('span');
      label.className = 'thumb-label mono';
      label.textContent = `r${text(r.number)} · ${dateStr(r.capturedAt || r.sourceTimestamp)}`;

      card.append(box, label);
      return card;
    }));
  }

  function renderStage(contact) {
    const revs = getRevisions(contact);
    const itemA = revs.find(r => r.id === state.revA) || revs[revs.length - 1];
    const itemB = revs.find(r => r.id === state.revB);

    const empty = $('stage-empty');
    const content = $('stage-content');

    if (!itemA) {
      empty.hidden = false;
      content.hidden = true;
      renderVerdict(contact, null);
      return;
    }

    empty.hidden = true;
    content.hidden = false;

    // Apply greyscale
    content.classList.toggle('greyscale', state.greyscale);
    $('toggle-greyscale').classList.toggle('active', state.greyscale);

    // Apply zoom
    content.classList.toggle('zoom-2x', state.zoom);
    $('toggle-zoom').classList.toggle('active', state.zoom);

    // Hide all mode containers
    const side = $('compare-side');
    const swipe = $('compare-swipe');
    const diff = $('compare-diff');
    side.hidden = true;
    swipe.hidden = true;
    diff.hidden = true;
    const singleBtn = $('mode-single');
    const sideBtn = $('mode-side');
    const swipeBtn = $('mode-swipe');
    const diffBtn = $('mode-diff');

    if (!itemB) {
      if (singleBtn) { singleBtn.style.display = ''; singleBtn.classList.add('active'); }
      sideBtn.disabled = true; sideBtn.classList.remove('active');
      swipeBtn.disabled = true; swipeBtn.classList.remove('active');
      diffBtn.disabled = true; diffBtn.classList.remove('active');
    } else {
      if (singleBtn) { singleBtn.style.display = 'none'; singleBtn.classList.remove('active'); }
      sideBtn.disabled = false; sideBtn.classList.toggle('active', state.mode === 'side');
      swipeBtn.disabled = false; swipeBtn.classList.toggle('active', state.mode === 'swipe');
      diffBtn.disabled = false; diffBtn.classList.toggle('active', state.mode === 'diff');
    }
    const makeImg = (rev, isBefore) => {
      const img = document.createElement('img');
      img.src = rev.imageUrl || rev.thumbnailUrl;
      img.alt = `Revision ${text(rev.number)}`;
      img.onclick = () => openModal(rev);
      return img;
    };

    if (state.mode === 'side' || !itemB) {
      side.hidden = false;
      const paneBefore = $('pane-before');
      const wrapBefore = $('wrap-before');
      const labelBefore = $('label-before');
      const wrapAfter = $('wrap-after');
      const labelAfter = $('label-after');

      if (itemB) {
        paneBefore.hidden = false;
        labelBefore.textContent = `r${text(itemB.number)} (Before) · ${dateStr(itemB.capturedAt)}`;
        wrapBefore.replaceChildren(makeImg(itemB, true));
        labelAfter.textContent = `r${text(itemA.number)} (After) · ${dateStr(itemA.capturedAt)}`;
      } else {
        paneBefore.hidden = true;
        labelAfter.textContent = `r${text(itemA.number)} · ${dateStr(itemA.capturedAt)}`;
      }
      wrapAfter.replaceChildren(makeImg(itemA, false));
    } else if (state.mode === 'swipe') {
      swipe.hidden = false;
      const layerBefore = $('swipe-layer-before');
      const layerAfter = $('swipe-layer-after');
      layerBefore.replaceChildren(makeImg(itemB, true));
      layerAfter.replaceChildren(makeImg(itemA, false));

      const slider = $('swipe-slider');
      slider.oninput = () => {
        layerAfter.style.width = `${slider.value}%`;
      };
      slider.oninput();
    } else if (state.mode === 'diff') {
      diff.hidden = false;
      const base = $('diff-base');
      const blend = $('diff-blend');
      base.replaceChildren(makeImg(itemB, true));
      blend.replaceChildren(makeImg(itemA, false));
    }

    renderVerdict(contact, itemA);
  }

  function renderVerdict(contact, rev) {
    const chip = $('verdict-chip');
    const textNode = $('verdict-text');
    const links = $('verdict-links');

    if (!contact) {
      chip.className = 'verdict-chip pending';
      chip.textContent = 'Pending';
      textNode.textContent = 'Select revisions to view design verdict.';
      links.replaceChildren();
      return;
    }

    const verdict = computeVerdict(contact);
    chip.className = `verdict-chip ${verdict.kind}`;
    chip.textContent = verdict.label;

    textNode.textContent = contact.lastFeedback || 'No review verdict recorded yet.';

    links.replaceChildren();
    if (rev && rev.eventId) {
      const a = document.createElement('span');
      a.textContent = `event: ${rev.eventId.slice(0, 8)}`;
      links.append(a);
    }
  }

  function openModal(rev) {
    const modal = $('image-modal');
    const body = $('modal-body');
    const img = document.createElement('img');
    img.src = rev.imageUrl || rev.thumbnailUrl;
    body.replaceChildren(img);
    modal.showModal();
  }
  $('modal-close').onclick = () => $('image-modal').close();

  function renderAll() {
    renderProjects();
    const contact = getActiveContact();
    renderFilmstrip(contact);
    renderStage(contact);
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === '1') { state.mode = 'side'; save(); renderStage(getActiveContact()); }
    else if (e.key === '2') { state.mode = 'swipe'; save(); renderStage(getActiveContact()); }
    else if (e.key === '3') { state.mode = 'diff'; save(); renderStage(getActiveContact()); }
    else if (e.key === '[' || e.key === ']') {
      const contact = getActiveContact();
      const revs = getRevisions(contact);
      if (!revs.length) return;
      const idx = revs.findIndex(r => r.id === state.revA);
      let nextIdx = idx;
      if (e.key === '[') nextIdx = Math.max(0, idx - 1);
      if (e.key === ']') nextIdx = Math.min(revs.length - 1, idx + 1);
      if (nextIdx !== idx) {
        state.revA = revs[nextIdx].id;
        save();
        renderFilmstrip(contact);
        renderStage(contact);
      }
    }
  });

  $('mode-side').onclick = () => { state.mode = 'side'; save(); renderStage(getActiveContact()); };
  $('mode-swipe').onclick = () => { state.mode = 'swipe'; save(); renderStage(getActiveContact()); };
  $('mode-diff').onclick = () => { state.mode = 'diff'; save(); renderStage(getActiveContact()); };
  $('toggle-greyscale').onclick = () => { state.greyscale = !state.greyscale; save(); renderStage(getActiveContact()); };
  $('toggle-zoom').onclick = () => { state.zoom = !state.zoom; save(); renderStage(getActiveContact()); };

  $('project-search').oninput = (e) => {
    state.search = e.target.value.trim();
    renderProjects();
  };

  async function poll() {
    try {
      const headers = validator ? { 'If-None-Match': validator } : {};
      const res = await fetch('api/snapshot', { headers });
      if (res.status === 304) return;
      if (res.ok) {
        validator = res.headers.get('ETag');
        snapshot = await res.json();
        renderAll();
      }
    } catch (err) {
      console.warn('Snapshot poll failed:', err);
    }
  }

  poll();
  setInterval(poll, 15000);
})();
