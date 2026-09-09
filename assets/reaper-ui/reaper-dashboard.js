"use strict";
(() => {
  const $ = id => document.getElementById(id);
  const storageKey = "reaper-dashboard-view-v1";
  const liveStates = new Set(["requested", "reserved", "active", "releasing", "cleanup-failed"]);
  let saved = {};
  try { saved = JSON.parse(sessionStorage.getItem(storageKey) || "{}") || {}; } catch {}
  let scope = ["live", "recent", "history"].includes(saved.scope) ? saved.scope : "live";
  let query = typeof saved.query === "string" ? saved.query : "";
  let selected = typeof saved.selected === "string" ? saved.selected : null;
  const openGroups = new Set(Array.isArray(saved.openGroups) ? saved.openGroups : []);
  let snapshot = null;
  let connectionError = "";
  let receivedAt = null;
  const numeric = value => typeof value === "number" && Number.isFinite(value);
  const unavailable = "Unavailable";
  const bytes = value => {
    if (!numeric(value)) return unavailable;
    const units = ["B", "KiB", "MiB", "GiB", "TiB"];
    let index = 0;
    while (Math.abs(value) >= 1024 && index < units.length - 1) { value /= 1024; index++; }
    return `${value.toFixed(index > 1 ? 1 : 0)} ${units[index]}`;
  };
  const pct = value => numeric(value) ? `${value.toFixed(1)}%` : unavailable;
  const count = value => numeric(value) ? String(value) : unavailable;
  const rate = value => numeric(value) ? `${bytes(value)}/s` : unavailable;
  const date = value => numeric(value) ? new Date(value * 1000).toLocaleString() : "Not recorded";
  const compactDate = value => {
    if (!numeric(value)) return "Not recorded";
    const stamp = new Date(value * 1000);
    return stamp.toDateString() === new Date().toDateString() ? stamp.toLocaleTimeString() : stamp.toLocaleString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  };
  const isLive = resource => resource.endedAt == null && liveStates.has(resource.state);
  const node = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = String(text);
    return element;
  };
  const persist = () => { try { sessionStorage.setItem(storageKey, JSON.stringify({ scope, query, selected, openGroups: [...openGroups] })); } catch {} };
  const owner = id => snapshot.agents.find(agent => agent.id === id) || { id, known: false };
  const label = agent => agent.known === false ? agent.id : agent.label || agent.id || "Unresolved agent";
  const field = (list, name, value, mono = false) => list.append(node("dt", "", name), node("dd", mono ? "mono" : "", value ?? "Not recorded"));
  const section = title => { const el = node("section", "detail-section"); el.append(node("h3", "", title)); return el; };
  const badge = state => node("span", `state ${["cleanup-failed", "denied", "failed"].includes(state) ? "danger" : state === "active" ? "active" : ["released", "reclaimed"].includes(state) ? "ended" : ["reserved", "requested", "unknown"].includes(state) ? "warning" : ""}`, state || "unknown");
  function summary() {
    const live = snapshot.resources.filter(isLive);
    const fragment = document.createDocumentFragment();
    for (const [value, title] of [[new Set(live.map(r => r.ownerId)).size, "live owners"], [live.length, "live requests"]]) {
      const item = node("div"); item.append(node("strong", "", snapshot.health?.registryAvailable === false ? unavailable : value), node("span", "", title)); fragment.append(item);
    }
    const failures = live.filter(resource => resource.state === "cleanup-failed").length;
    if (failures) {
      const item = node("div", "failure-summary");
      item.append(node("strong", "", failures), node("span", "", "cleanup failures"));
      fragment.append(item);
    }
    $("summary").replaceChildren(fragment);
  }
  function renderAgents() {
    if (snapshot.health?.registryAvailable === false) {
      $("agents").replaceChildren(node("p", "empty", "Request registry unavailable. This is not a reading of zero resources."));
      $("result-count").textContent = unavailable;
      return;
    }
    const activeElement = document.activeElement;
    const focusedId = activeElement?.dataset?.resource;
    const focusedGroup = activeElement?.tagName === "SUMMARY" ? activeElement.parentElement.dataset.group : null;
    const words = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const now = numeric(snapshot.sampledAt) ? snapshot.sampledAt : Date.now() / 1000;
    const filtered = snapshot.resources.filter(resource => {
      if (scope === "live" && !isLive(resource)) return false;
      const last = Math.max(...[resource.requestedAt, resource.acquiredAt, resource.endedAt, ...(resource.events || []).map(e => e.ts)].filter(numeric), -Infinity);
      if (scope === "recent" && !isLive(resource) && last < now - 3600) return false;
      const agent = owner(resource.ownerId);
      const haystack = [agent.label, agent.id, agent.project, agent.pane, resource.id, resource.ownerId, resource.name, resource.kind, resource.state].join(" ").toLocaleLowerCase();
      return words.every(word => haystack.includes(word));
    });
    const groups = new Map();
    for (const resource of filtered) { if (!groups.has(resource.ownerId)) groups.set(resource.ownerId, []); groups.get(resource.ownerId).push(resource); }
    const entries = [...groups.entries()].sort(([a, ar], [b, br]) => Number(br.some(isLive)) - Number(ar.some(isLive)) || label(owner(a)).localeCompare(label(owner(b))) || String(a).localeCompare(String(b)));
    const fragment = document.createDocumentFragment();
    let focusTarget = null;
    for (const [id, requests] of entries) {
      const agent = owner(id);
      const card = node("section", "agent");
      card.classList.toggle("unresolved", agent.known === false);
      const heading = node("div", "agent-heading");
      const identity = node("div", "agent-identity");
      identity.append(node("h3", "", label(agent)));
      identity.append(node("p", "agent-meta", [agent.project || "Project not recorded", agent.pane ? `pane ${agent.pane}` : null, agent.known === false ? "Identity unresolved" : null].filter(Boolean).join(" · ")));
      const live = requests.filter(isLive);
      if (live.length) {
        const usage = node("p", "agent-usage", "Shown live usage");
        for (const [key, title, format] of [["cpuPercent", "CPU", pct], ["memoryBytes", "RAM", bytes]]) {
          const measured = live.map(request => request.metrics?.[key]).filter(numeric);
          usage.append(node("span", "", `${title} ${measured.length ? format(measured.reduce((a, b) => a + b, 0)) : unavailable}${measured.length < live.length ? ` (${measured.length}/${live.length} measured)` : ""}`));
        }
        identity.append(usage);
      }
      heading.append(identity, node("span", "request-count", `${requests.length} request${requests.length === 1 ? "" : "s"}`)); card.append(heading);
      requests.sort((a, b) => Number(isLive(b)) - Number(isLive(a)) || (b.requestedAt || 0) - (a.requestedAt || 0));
      const repeats = new Map(), containers = new Map();
      for (const request of requests.filter(request => !isLive(request))) {
        const key = JSON.stringify([id, request.kind, request.name]);
        const previous = repeats.get(key);
        repeats.set(key, { count: (previous?.count || 0) + 1, latest: Math.max(previous?.latest || 0, request.endedAt || request.requestedAt || 0) });
      }
      for (const resource of requests) {
        const button = node("button", "request"); button.type = "button"; button.dataset.resource = resource.id;
        button.setAttribute("aria-pressed", String(selected === resource.id));
        button.setAttribute("aria-label", `${resource.name || "Unnamed request"}, ${resource.kind || "kind not recorded"}, requested by ${label(agent)}, agent ${id}, lease ${resource.id}, ${resource.state || "unknown"}`);
        const top = node("span", "request-top"); const name = node("span", "request-name");
        name.append(node("span", "kind", resource.kind || "Kind not recorded"), node("span", "", resource.name || "Unnamed request"));
        top.append(name, badge(resource.state)); button.append(top);
        const metrics = node("span", "request-metrics");
        if (isLive(resource)) {
          for (const text of [`CPU ${pct(resource.metrics?.cpuPercent)}`, `RAM ${bytes(resource.metrics?.memoryBytes)}`, `Tasks ${count(resource.metrics?.tasks)}`]) metrics.append(node("span", "", text));
        } else {
          metrics.append(node("span", "", numeric(resource.endedAt) ? `Ended ${compactDate(resource.endedAt)}` : ["released", "reclaimed"].includes(resource.state) ? "Ended · time not recorded" : "Outcome not recorded"));
          metrics.append(node("span", "", numeric(resource.observedPeak?.memoryBytes) ? `Observed RAM peak ${bytes(resource.observedPeak.memoryBytes)}` : "Usage not recorded"));
        }
        button.append(metrics);
        button.addEventListener("click", () => {
          selected = resource.id; persist(); renderAgents(); renderDetail();
          if (matchMedia("(max-width: 950px)").matches) {
            const inspector = document.querySelector(".inspector");
            inspector.scrollIntoView({ block: "start" });
            inspector.focus({ preventScroll: true });
          }
        });
        if (focusedId === resource.id) focusTarget = button;
        const key = JSON.stringify([id, resource.kind, resource.name]);
        if (!isLive(resource) && repeats.get(key).count > 1) {
          if (!containers.has(key)) {
            const group = node("details", "request-group");
            group.dataset.group = key;
            group.open = openGroups.has(key);
            const summary = node("summary", "", `${resource.kind} / ${resource.name} ×${repeats.get(key).count} · latest ${compactDate(repeats.get(key).latest || null)}`);
            group.append(summary);
            if (focusedGroup === key) focusTarget = summary;
            group.addEventListener("toggle", () => { if (group.open) openGroups.add(key); else openGroups.delete(key); persist(); });
            containers.set(key, group); card.append(group);
          }
          containers.get(key).append(button);
        } else card.append(button);
      }
      fragment.append(card);
    }
    if (!entries.length) fragment.append(node("p", "empty", query.trim() ? "No requests match this search in the selected period. Try another name, full ID or period." : scope === "live" ? "No live requests. Recent and History contain ended requests and unresolved outcomes." : "No requests recorded in this period."));
    $("agents").replaceChildren(fragment);
    if (focusTarget) focusTarget.focus({ preventScroll: true });
    $("result-count").textContent = `${filtered.length} requests · ${entries.length} agents`;
    $("scope-caption").textContent = scope === "live" ? "Live requests only" : scope === "recent" ? "Live + activity in the last hour" : "All retained requests";
    for (const button of document.querySelectorAll("[data-scope]")) button.setAttribute("aria-pressed", String(button.dataset.scope === scope));
  }
  function spark(samples, key, title) {
    const ordered = (samples || []).filter(sample => numeric(sample.ts)).sort((a, b) => a.ts - b.ts);
    const points = ordered.filter(sample => numeric(sample[key]));
    const figure = node("figure", "chart"); figure.append(node("figcaption", "", title));
    if (points.length < 2) { figure.append(node("p", "note", points.length ? "One sample recorded; trend unavailable." : "Not recorded")); return figure; }
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg"); svg.setAttribute("class", "spark"); svg.setAttribute("viewBox", "0 0 300 50"); svg.setAttribute("preserveAspectRatio", "none"); svg.setAttribute("role", "img");
    const first = points[0].ts, last = points[points.length - 1].ts;
    const peak = Math.max(...points.map(p => p[key]), 1);
    const description = `${title}: ${points.length} samples, ${date(first)} to ${date(last)}. Scale zero to ${key === "cpuPercent" ? pct(peak) : bytes(peak)}.`;
    svg.setAttribute("aria-label", description);
    const svgTitle = document.createElementNS(ns, "title"); svgTitle.textContent = description; svg.append(svgTitle);
    const path = document.createElementNS(ns, "path");
    let drawing = false, previous = null;
    const segments = [];
    for (const point of ordered) {
      if (!numeric(point[key])) { drawing = false; previous = point.ts; continue; }
      if (previous !== null && point.ts - previous > 10) drawing = false;
      segments.push(`${drawing ? "L" : "M"}${(2 + (point.ts - first) / (last - first || 1) * 296).toFixed(2)},${(47 - point[key] / peak * 44).toFixed(2)}`);
      drawing = true; previous = point.ts;
    }
    path.setAttribute("d", segments.join(" "));
    svg.append(path); figure.append(svg, node("p", "note", `Scale 0–${key === "cpuPercent" ? pct(peak) : bytes(peak)} · ${points.length} samples · ${date(first)} → ${date(last)}. Unknown samples and gaps over 10s break the line.`)); return figure;
  }
  function renderDetail() {
    if (snapshot.health?.registryAvailable === false) {
      $("detail-title").textContent = "Registry unavailable";
      $("detail").replaceChildren(node("p", "empty", "Ownership and usage cannot be refreshed. Recorded observations remain cached."));
      return;
    }
    const resource = snapshot.resources.find(r => r.id === selected);
    if (!resource) {
      $("detail-title").textContent = selected ? "Request no longer retained" : "Select a named request";
      $("detail").replaceChildren(node("p", "empty", selected ? `Lease ${selected} is not in this snapshot. Choose another request; your search and period are unchanged.` : "Choose a browser or process under an agent to see its ownership, measured usage and lifecycle.")); return;
    }
    $("detail-title").textContent = resource.name || "Unnamed request";
    const agent = owner(resource.ownerId);
    const fragment = document.createDocumentFragment();
    const request = section("Requested by → named request");
    const banner = node("p", "owner-banner"); banner.append(node("strong", "", label(agent)), document.createTextNode(` → ${resource.kind || "unknown kind"} / ${resource.name || "unnamed"}`)); request.append(banner);
    const identity = node("dl");
    field(identity, "Agent ID", resource.ownerId, true); field(identity, "Project", agent.project); field(identity, "Lease ID", resource.id, true);
    field(identity, "Kind", resource.kind); field(identity, "Purpose / name", resource.name); field(identity, "State", resource.state || "unknown");
    request.append(identity, node("p", "note", "The request names a browser or process; it does not reserve a numeric CPU or RAM amount. Purpose is the recorded name, not an inferred workload. Raw command arguments are not recorded for privacy."));
    if (resource.state === "unknown") request.append(node("p", "note", "No live registry lease or reliable outcome is available. Unknown does not mean still running or successfully released."));
    fragment.append(request);
    const current = isLive(resource);
    const usage = section(current ? "Current measured usage" : "Last recorded usage · not current");
    usage.classList.add("usage-section"); usage.dataset.live = String(current);
    const metrics = (current ? resource.metrics : resource.lastObservedMetrics) || {};
    const missing = current ? unavailable : "Not recorded";
    const grid = node("div", "metric-grid");
    for (const [key, title, format] of [["cpuPercent", "CPU", pct], ["memoryBytes", "RAM", bytes], ["tasks", "Tasks", count]]) {
      const metric = node("div", "metric"); metric.append(node("span", "", title), node("strong", "", numeric(metrics[key]) ? format(metrics[key]) : missing), node("small", "", `peak: ${numeric(resource.observedPeak?.[key]) ? format(resource.observedPeak[key]) : "Not recorded"}`)); grid.append(metric);
    }
    usage.append(grid, node("p", "note", "CPU: 100% = one logical core. Peaks are observed sample maxima."));
    const rates = node("dl"); field(rates, "Read / second", numeric(metrics.readBytesPerSec) ? rate(metrics.readBytesPerSec) : missing); field(rates, "Write / second", numeric(metrics.writeBytesPerSec) ? rate(metrics.writeBytesPerSec) : missing); field(rates, "Last observed", date(resource.lastObservedAt)); usage.append(rates);
    usage.append(spark(resource.samples, "cpuPercent", "CPU observations"), spark(resource.samples, "memoryBytes", "RAM observations"), node("p", "note", "Peaks are observed sample maxima, not lifetime maxima or reserved amounts. Gaps between samples can hide short spikes. When the connection is stale, these are last-received values.")); fragment.append(usage);
    const lifecycle = section("Lifecycle"); const times = node("dl");
    field(times, "Requested", date(resource.requestedAt)); field(times, "Acquired", date(resource.acquiredAt)); field(times, "Ended", date(resource.endedAt)); if (resource.reason) field(times, "Reason", resource.reason); lifecycle.append(times);
    const events = [...(resource.events || [])].sort((a, b) => (b.ts || 0) - (a.ts || 0) || (b.seq || 0) - (a.seq || 0));
    if (events.length) {
      lifecycle.append(node("p", "note", "Recorded events · newest first")); const list = node("ol", "timeline");
      for (const event of events) { const item = node("li"); item.append(node("strong", "", event.action || "Action not recorded"), node("time", "", date(event.ts))); if (event.reason) item.append(node("p", "", event.reason)); list.append(item); } lifecycle.append(list);
    } else lifecycle.append(node("p", "note", "Lifecycle events not recorded."));
    fragment.append(lifecycle); $("detail").replaceChildren(fragment);
  }
  function renderHost() {
    const host = snapshot.host || {}; const fragment = document.createDocumentFragment();
    const metric = (title, value) => { const item = node("div"); item.append(node("span", "", title), node("strong", "", value)); fragment.append(item); return item; };
    metric("Whole-machine CPU", pct(host.cpuPercent));
    const ram = metric("RAM used / total", `${bytes(host.memoryUsedBytes)} / ${bytes(host.memoryTotalBytes)}`);
    const swap = metric("Swap used / total", `${bytes(host.swapUsedBytes)} / ${bytes(host.swapTotalBytes)}`);
    for (const [item, used, total, name] of [[ram, host.memoryUsedBytes, host.memoryTotalBytes, "Whole-machine RAM"], [swap, host.swapUsedBytes, host.swapTotalBytes, "Whole-machine swap"]]) {
      if (numeric(used) && numeric(total) && total > 0) {
        const bar = node("progress"); bar.max = total; bar.value = used; bar.setAttribute("aria-label", name); item.append(bar);
      }
    }
    metric("Load · 1 minute", numeric(host.load1) ? host.load1.toFixed(2) : unavailable);
    if (!Array.isArray(host.gpus) || !host.gpus.length) metric("Whole-host GPU", unavailable);
    for (const gpu of host.gpus || []) metric(`GPU · ${(gpu.name || "Unnamed").replace(/^NVIDIA (GeForce )?/, "")}`, `${pct(gpu.utilizationPercent)} · ${bytes(gpu.memoryUsedBytes)} / ${bytes(gpu.memoryTotalBytes)}`);
    $("host-metrics").replaceChildren(fragment);
  }
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  function freshness() {
    const now = Date.now() / 1000;
    const age = numeric(snapshot?.sampledAt) ? Math.max(0, now - snapshot.sampledAt) : null;
    const stale = Boolean(connectionError) || (snapshot !== null && (age === null || age > 8 || receivedAt === null || now - receivedAt > 8));
    document.body.classList.toggle("stale", stale);
    const usageHeading = document.querySelector(".usage-section[data-live='true'] h3");
    if (usageHeading) usageHeading.textContent = stale ? "Last received usage · stale" : "Current measured usage";
    $("connection").textContent = connectionError ? "Disconnected · stale" : stale ? "Stale snapshot" : snapshot ? "Connected · observing" : "Connecting…";
    $("sample-age").textContent = age === null ? "Sample time unavailable" : `Sample ${Math.floor(age)}s ago · ${new Date(snapshot.sampledAt * 1000).toLocaleTimeString()} ${timeZone}`;
    const errors = Array.isArray(snapshot?.errors) ? snapshot.errors.map(error => typeof error === "string" ? error : error?.message || JSON.stringify(error)) : snapshot?.errors ? [String(snapshot.errors)] : [];
    $("coverage").hidden = !errors.length;
    $("coverage-count").textContent = `${errors.length} notice${errors.length === 1 ? "" : "s"}`;
    $("coverage-errors").textContent = errors.join("\n\n");
    const notices = [connectionError ? `${connectionError} ${snapshot ? "Showing the last received snapshot; usage may no longer be current." : "No snapshot available yet."} Retrying every 2 seconds.` : stale ? "Snapshot is stale. Usage shown is last received, not guaranteed current." : null].filter(Boolean);
    if (snapshot?.health?.registryAvailable === false) notices.push("Lease registry unavailable. This is not an empty-resource reading; ownership and request lists are unavailable.");
    if (snapshot?.health?.identitiesAvailable === false) notices.push("Agent labels could not be refreshed. Exact session IDs remain authoritative.");
    $("notice").hidden = !notices.length; $("notice").textContent = notices.join("\n");
  }
  async function poll() {
    const controller = new AbortController(); const deadline = setTimeout(() => controller.abort(), 6500);
    try {
      const response = await fetch("./api/snapshot", { cache: "no-store", signal: controller.signal, credentials: "same-origin" });
      if (!response.ok) throw new Error(`Snapshot request failed (HTTP ${response.status}).`);
      const next = await response.json();
      if (!next || !Array.isArray(next.agents) || !Array.isArray(next.resources)) throw new Error("Snapshot format unavailable.");
      snapshot = next; receivedAt = Date.now() / 1000; connectionError = "";
      summary(); renderAgents(); renderDetail(); renderHost();
    } catch (error) {
      connectionError = error.name === "AbortError" ? "Snapshot request timed out." : error.message || "Snapshot request failed.";
      if (!snapshot) $("agents").replaceChildren(node("p", "empty", "Cannot load agent requests. The connection will retry automatically."));
    } finally { clearTimeout(deadline); freshness(); setTimeout(poll, 2000); }
  }
  $("search").value = query;
  $("back-to-requests").addEventListener("click", () => {
    const request = [...document.querySelectorAll("[data-resource]")].find(button => button.dataset.resource === selected);
    const target = request || $("agents");
    if (request?.closest("details")) request.closest("details").open = true;
    target.scrollIntoView({ block: "center" });
    target.focus({ preventScroll: true });
  });
  $("search").addEventListener("input", event => { query = event.target.value; persist(); if (snapshot) renderAgents(); });
  for (const button of document.querySelectorAll("[data-scope]")) {
    button.setAttribute("aria-pressed", String(button.dataset.scope === scope));
    button.addEventListener("click", () => { scope = button.dataset.scope; persist(); if (snapshot) renderAgents(); });
  }
  setInterval(freshness, 1000);
  poll();
})();
