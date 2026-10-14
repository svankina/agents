// Interactive assembly animation: play/pause, scrub, step navigation, and
// orbit/pan/zoom at any time. Deep link: animation.html#step=N (1-based).

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { AssemblyView } from './scene.js';
import { prepare, poseAt, stepAt, activeMoves, wiresAt, stepHighlights } from './timeline.js';

const $ = (id) => document.getElementById(id);
const fmtTime = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

export async function startPlayer() {
  const status = $('status');
  let resolveReady;
  const ready = new Promise((r) => { resolveReady = r; });
  window.assemblyPlayer = { ready };
  try {
    const tl = prepare(await (await fetch('./timeline.json')).json());
    document.title = `${tl.title} — assembly animation`;
    $('title').textContent = tl.title;
    $('clearance').textContent = tl.clearance.text;
    $('clearance').classList.toggle('draft', tl.clearance.status !== 'verified');

    const canvas = $('view');
    const view = new AssemblyView(canvas, tl, { pixelRatio: Math.min(window.devicePixelRatio || 1, 2) });
    await view.load(`./${tl.model}`);
    const controls = new OrbitControls(view.camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.screenSpacePanning = true;

    let time = 0;
    let playing = false;
    let speed = 1;
    let loop = false;
    let dirty = true;
    let style = 'shaded';
    let guides = true;
    let lastStep = -1;

    // Fit once to every pose the animation visits, so nothing leaves the frame.
    const allBoxes = () => {
      const boxes = [];
      for (const step of tl.steps) {
        for (const name of step.place ? step.place.parts : []) boxes.push(view.boxAt(name, [0, 0, 0]));
        for (const m of step.moves) for (const name of m.parts) for (const p of m.path) boxes.push(view.boxAt(name, p));
      }
      boxes.push(...view.wireBoxes(Object.values(tl.wires || {})));
      return boxes;
    };
    const fitView = (v = tl.view) => {
      const target = view.fit(allBoxes(), { az: v.az, el: v.el, fill: 0.9 });
      if (target) controls.target.copy(target);
      controls.update();
      dirty = true;
    };

    // UI ---------------------------------------------------------------------
    const scrub = $('scrub');
    scrub.max = String(tl.duration);
    const ticks = $('ticks');
    tl.steps.forEach((s, i) => {
      const tick = document.createElement('div');
      tick.className = 'tick';
      tick.style.left = `${(s.t0 / tl.duration) * 100}%`;
      tick.title = `${i + 1}. ${s.title}`;
      ticks.appendChild(tick);
    });

    const list = $('steps');
    const rows = [];
    tl.sections.forEach((section) => {
      const h = document.createElement('div');
      h.className = 'section';
      h.textContent = section.title;
      list.appendChild(h);
      for (const si of section.steps) {
        const row = document.createElement('button');
        row.className = 'step';
        row.innerHTML = `<span class="n">${si + 1}</span><span class="t"></span>`;
        row.querySelector('.t').textContent = tl.steps[si].title;
        row.addEventListener('click', () => { seek(tl.steps[si].t0); });
        list.appendChild(row);
        rows[si] = row;
      }
    });

    const showStep = (si) => {
      if (si === lastStep) return;
      lastStep = si;
      rows.forEach((r, i) => r.classList.toggle('current', i === si));
      rows[si].scrollIntoView({ block: 'nearest' });
      const step = tl.steps[si];
      $('step-label').textContent = `Step ${si + 1} of ${tl.steps.length} · ${step.title}`;
      const notes = $('notes');
      notes.replaceChildren();
      for (const n of step.notes) {
        const div = document.createElement('div');
        div.className = `note ${n.kind}`;
        const h = document.createElement('h4');
        h.textContent = n.title;
        const p = document.createElement('p');
        p.textContent = n.text;
        div.append(h, p);
        notes.appendChild(div);
      }
      for (const id of step.wires || []) {
        const w = tl.wires[id];
        const div = document.createElement('div');
        div.className = 'wire';
        const sw = document.createElement('span');
        sw.className = 'wswatch';
        sw.style.background = w.hex;
        const p = document.createElement('p');
        p.textContent = `${id}: ${w.from} → ${w.to}${w.gauge ? ` · ${w.gauge}` : ''} · ${w.color}`;
        div.append(sw, p);
        notes.appendChild(div);
      }
      history.replaceState(null, '', `#step=${si + 1}`);
    };

    const update = () => {
      view.setPoses(poseAt(tl, time));
      const si = stepAt(tl, time);
      const step = tl.steps[si];
      view.setHighlight(style === 'line' ? stepHighlights(tl, si) : []);
      view.setGuides(guides ? activeMoves(tl, time) : []);
      view.setWires(wiresAt(tl, time));
      showStep(si);
      scrub.value = String(time);
      $('time').textContent = `${fmtTime(time)} / ${fmtTime(tl.duration)}`;
      $('play').textContent = playing ? 'Pause' : 'Play';
      $('play').setAttribute('aria-pressed', String(playing));
      dirty = true;
    };

    const seek = (t) => { time = Math.min(tl.duration, Math.max(0, t)); update(); };
    const play = () => {
      if (time >= tl.duration) time = 0;
      playing = true;
      update();
    };
    const pause = () => { playing = false; update(); };
    const gotoStep = (si) => seek(tl.steps[Math.min(tl.steps.length - 1, Math.max(0, si))].t0);
    const stepView = () => {
      const step = tl.steps[stepAt(tl, time)];
      fitView(step.view);
    };

    $('play').addEventListener('click', () => (playing ? pause() : play()));
    $('prev').addEventListener('click', () => {
      const si = stepAt(tl, time);
      gotoStep(time - tl.steps[si].t0 > 0.5 ? si : si - 1);
    });
    $('next').addEventListener('click', () => gotoStep(stepAt(tl, time) + 1));
    scrub.addEventListener('input', () => seek(Number(scrub.value)));
    $('speed').addEventListener('change', (e) => { speed = Number(e.target.value); });
    $('loop').addEventListener('change', (e) => { loop = e.target.checked; });
    $('guides').addEventListener('change', (e) => { guides = e.target.checked; update(); });
    $('style').addEventListener('change', (e) => {
      style = e.target.value;
      view.setStyle(style);
      document.body.classList.toggle('line-art', style === 'line');
      update();
    });
    $('fit').addEventListener('click', () => fitView());
    $('stepview').addEventListener('click', stepView);
    $('panel-toggle').addEventListener('click', () => document.body.classList.toggle('panel-hidden'));
    window.addEventListener('keydown', (e) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
      if (e.code === 'Space') { e.preventDefault(); playing ? pause() : play(); }
      else if (e.key === 'ArrowRight') $('next').click();
      else if (e.key === 'ArrowLeft') $('prev').click();
      else if (e.key === 'f') fitView();
      else if (e.key === 'v') stepView();
    });
    controls.addEventListener('change', () => { dirty = true; });

    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      view.setSize(w, h);
      const cam = view.camera;
      const halfH = (cam.top - cam.bottom) / 2;
      cam.left = -halfH * (w / Math.max(1, h));
      cam.right = -cam.left;
      cam.updateProjectionMatrix();
      dirty = true;
    };
    window.addEventListener('resize', resize);
    view.setSize(canvas.clientWidth, canvas.clientHeight);
    fitView();

    const hash = /step=(\d+)/.exec(location.hash);
    if (hash) gotoStep(Number(hash[1]) - 1); else seek(0);

    let last = performance.now();
    view.renderer.setAnimationLoop((now) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      if (playing) {
        time += dt * speed;
        if (time >= tl.duration) {
          if (loop) time = 0; else { time = tl.duration; playing = false; }
        }
        update();
      }
      if (controls.update()) dirty = true;
      if (dirty) { view.render(); dirty = false; }
    });
    status.textContent = '';

    Object.assign(window.assemblyPlayer, {
      timeline: tl, view, controls,
      get time() { return time; },
      get playing() { return playing; },
      duration: tl.duration,
      play, pause, seek, gotoStep, fit: fitView, stepView,
      setStyle(s) { $('style').value = s; $('style').dispatchEvent(new Event('change')); },
      state() {
        const visible = [...view.instances.values()].filter((i) => i.object.visible);
        return {
          time, playing, step: stepAt(tl, time),
          visible: visible.map((i) => i.name),
          offsets: Object.fromEntries(visible.map((i) => [i.name, i.offset])),
          positions: Object.fromEntries(visible.map((i) => [i.name, i.object.position.toArray()])),
          target: controls.target.toArray(),
          camera: view.camera.position.toArray(),
        };
      },
    });
    resolveReady(true);
  } catch (err) {
    status.textContent = `Failed to load: ${err.message}`;
    status.classList.add('error');
    resolveReady(false);
    throw err;
  }
}
