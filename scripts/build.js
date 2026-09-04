#!/usr/bin/env node
// Generates the static HTML pages from content/*.md and data/figures.json.
//
// Run `node scripts/build.js` (or `npm run build`) after editing a .md file,
// figures.json, or this script, then reload the page. There is still no
// framework and no bundler — this is the one deliberate build step, traded
// for pages that are real HTML on first byte: readable by a plain HTTP GET
// (an LLM fetching the URL, a crawler, curl) with no JavaScript required.
// See README.md.

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { renderMarkdown } from '../vendor/minimark.js';
import { isStale, worstTierNum } from '../assets/ledger-core.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const TABS = [
  { id: 'overview', label: 'Overview', file: 'content/intro.md', page: 'index.html', hasTiers: false },
  { id: 'what-shipped', label: 'What shipped', module: 'A', file: 'content/module-a.md', page: 'what-shipped.html', hasTiers: true },
  { id: 'whats-legal-in-india', label: "What's legal in India", module: 'B', file: 'content/module-b.md', page: 'whats-legal-in-india.html', hasTiers: true },
  { id: 'where-the-value-is', label: 'Where the value is', module: 'C', file: 'content/module-c.md', page: 'where-the-value-is.html', hasTiers: true },
  { id: 'ethereum-vs-alternatives', label: 'Ethereum vs alternatives', module: 'D', file: 'content/module-d.md', page: 'ethereum-vs-alternatives.html', hasTiers: true },
  { id: 'the-privacy-question', label: 'The privacy question', module: 'E', file: 'content/module-e.md', page: 'the-privacy-question.html', hasTiers: true },
  { id: 'the-objections', label: 'The objections', module: 'F', file: 'content/module-f.md', page: 'the-objections.html', hasTiers: true },
  { id: 'how-adoption-happens', label: 'How adoption happens', module: 'G', file: 'content/module-g.md', page: 'how-adoption-happens.html', hasTiers: true },
  { id: 'ledger', label: 'Figure Ledger', page: 'ledger.html', isLedger: true },
  { id: 'reconciliation', label: 'Reconciliation', file: 'content/reconciliation.md', page: 'reconciliation.html', hasTiers: false },
  { id: 'devcon-pitch', label: 'The Devcon pitch', file: 'content/devcon-pitch.md', page: 'devcon-pitch.html', hasTiers: false },
];

const TIER_ORDER = ['30s', '5min', 'full'];
const TIER_LABELS = { '30s': '30 seconds', '5min': '5 minutes', full: 'Full report' };
const TIER_MARKERS = {
  '30s': '<!-- TIER:30s -->',
  '5min': '<!-- TIER:5min -->',
  full: '<!-- TIER:full -->',
};

function escapeHtmlText(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return escapeHtmlText(str).replace(/"/g, '&quot;');
}

const PROVENANCE_HEADER = (label, file) =>
  `[Source: ${label} — ${file} — Ethereum/India institutional evidence base]\n` +
  `[Every figure carries a source tier (T1 primary … T5 crypto media) and an "as of" date. Treat T4/T5 figures as unverified for volumes/adoption. This subject moves monthly; re-check anything dated more than six months ago.]\n\n`;

/**
 * Split raw markdown into { header, tiers: { '30s'?, '5min'?, full? } } by
 * locating the literal delimiter comment strings, on the RAW text before
 * any markdown parsing (so the HTML comments never reach the renderer).
 */
function splitIntoTiers(raw) {
  const positions = [];
  for (const key of TIER_ORDER) {
    const idx = raw.indexOf(TIER_MARKERS[key]);
    if (idx !== -1) positions.push({ key, idx, len: TIER_MARKERS[key].length });
  }
  positions.sort((a, b) => a.idx - b.idx);

  if (positions.length === 0) return { header: '', tiers: {} };

  const header = raw.slice(0, positions[0].idx);
  const tiers = {};
  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].idx + positions[i].len;
    const end = i + 1 < positions.length ? positions[i + 1].idx : raw.length;
    tiers[positions[i].key] = raw.slice(start, end).trim();
  }
  return { header, tiers };
}

function styleQuestionCallout(headerHtml) {
  return headerHtml.replace(
    /<p><strong>Question:<\/strong>/,
    '<p class="question-callout"><strong>Question:</strong>'
  );
}

/** Split full-tier raw markdown into ### sections for per-finding copy. */
function extractSections(fullRaw) {
  const lines = fullRaw.split('\n');
  const boundaries = [];
  lines.forEach((line, idx) => {
    if (/^###\s+/.test(line)) boundaries.push(idx);
  });
  if (boundaries.length === 0) return [];
  const sections = [];
  for (let i = 0; i < boundaries.length; i++) {
    const start = boundaries[i];
    const end = i + 1 < boundaries.length ? boundaries[i + 1] : lines.length;
    sections.push(lines.slice(start, end).join('\n').trim());
  }
  return sections;
}

/**
 * Stamp each rendered <h3> (in order) with the raw markdown of its section,
 * escaped into a data attribute. app.js reads this to power one-click
 * per-section copy; without JS the attribute is simply inert.
 */
function attachSectionAttrs(html, sections, tab) {
  if (sections.length === 0) return html;
  let i = 0;
  return html.replace(/<h3>/g, () => {
    const section = sections[i];
    i++;
    if (section === undefined) return '<h3>';
    const payload = PROVENANCE_HEADER(tab.label, tab.file) + section;
    return `<h3 data-copy-section="${escapeAttr(payload)}">`;
  });
}

function renderCopyDetails(tab, fullRaw) {
  const payload = PROVENANCE_HEADER(tab.label, tab.file) + fullRaw;
  return `<details class="copy-details js-copy-widget" data-copy-label="this module's full report">
        <summary>Full report — copy for an LLM</summary>
        <textarea class="copy-textarea" readonly rows="6" aria-label="Full report markdown, with source provenance, for pasting into an LLM">${escapeHtmlText(payload)}</textarea>
      </details>`;
}

const OVERVIEW_PROMPT = `Please fetch {{BASE_URL}}llms.txt first. It indexes the eleven pages of "Ethereum and Distributed Settlement Infrastructure in Indian Institutional Finance": seven module reports, a Figure Ledger carrying a source tier and date on every claim, a Reconciliation page, and the Devcon pitch. Then read the Overview at {{BASE_URL}} and open whichever module pages look most relevant.

Before you answer, use what you already know about me from memory and our past conversations: what I work on, what I follow, what I have asked you before. If you know nothing about me, ask me that first.

Then give me a handful of bullet points about Ethereum's institutional potential in India that I'm least likely to already know, each with a line on why it is new or useful for me specifically. Flag the source tier (T1–T5) behind anything surprising; roughly a fifth of this report rests on the weakest two.

Stay ready for my follow-ups: a specific module, a number in the Figure Ledger, or an objection I want pressure-tested.`;

function renderLandingPromptCta() {
  return `<div class="landing-prompt">
    <details class="landing-prompt-details js-copy-widget" data-copy-label="a personalized exploration prompt">
      <summary class="landing-prompt-summary">Copy a personalized prompt — explore this report with your own LLM</summary>
      <div class="landing-prompt-panel">
        <p class="landing-prompt-hint">Paste this into ChatGPT, Claude, Gemini, or any LLM that can fetch a URL. With JavaScript on, the box below already has this page's real address in it. Reading without JavaScript? Swap the <code>{{BASE_URL}}</code> placeholder for this page's address before you paste.</p>
        <textarea class="copy-textarea landing-prompt-textarea" readonly rows="14" aria-label="Personalized prompt for exploring this report with an LLM">${escapeHtmlText(OVERVIEW_PROMPT)}</textarea>
      </div>
    </details>
  </div>`;
}

function splitBeforeFirstH2(raw) {
  const normalized = raw.replace(/\r\n/g, '\n');
  const m = normalized.match(/\n(?=##\s)/);
  const splitAt = m ? m.index + 1 : normalized.length;
  return { introRaw: normalized.slice(0, splitAt), restRaw: normalized.slice(splitAt) };
}

function renderOverviewBody(raw) {
  const { introRaw, restRaw } = splitBeforeFirstH2(raw);
  const introHtml = renderMarkdown(introRaw);
  const restHtml = restRaw ? renderMarkdown(restRaw) : '';
  return `<div class="tab-header"></div>
<div class="tab-body">${introHtml}
${renderLandingPromptCta()}
${restHtml}</div>`;
}

function renderModuleBody(tab, raw) {
  if (tab.id === 'overview') return renderOverviewBody(raw);
  const { header, tiers } = splitIntoTiers(raw);
  const availableTiers = TIER_ORDER.filter(k => tiers[k] !== undefined);
  const headerHtml = `<div class="tab-header">${styleQuestionCallout(renderMarkdown(header))}</div>`;

  if (availableTiers.length === 0) {
    // No tier markers at all: render the whole document, no switcher.
    return `${headerHtml}\n<div class="tab-body">${renderMarkdown(raw)}</div>`;
  }

  const copyDetailsHtml = (tab.hasTiers && tiers.full !== undefined)
    ? renderCopyDetails(tab, tiers.full)
    : '';

  if (availableTiers.length === 1) {
    // Single tier present (e.g. the Devcon stub): no switcher, just render it.
    const only = availableTiers[0];
    let bodyHtml = renderMarkdown(tiers[only]);
    if (only === 'full') bodyHtml = attachSectionAttrs(bodyHtml, extractSections(tiers.full), tab);
    const controls = copyDetailsHtml ? `<div class="tab-controls">${copyDetailsHtml}</div>\n` : '';
    return `${headerHtml}\n${controls}<div class="tab-body tier-panel">${bodyHtml}</div>`;
  }

  const radiosHtml = availableTiers
    .map((k, i) => `<input type="radio" name="tier" id="tier-${k}" class="tier-radio"${i === 0 ? ' checked' : ''}>`)
    .join('\n      ');
  const labelsHtml = availableTiers
    .map(k => `<label for="tier-${k}" class="tier-btn">${TIER_LABELS[k]}</label>`)
    .join('\n        ');
  const panelsHtml = availableTiers
    .map(k => {
      let bodyHtml = renderMarkdown(tiers[k]);
      if (k === 'full') bodyHtml = attachSectionAttrs(bodyHtml, extractSections(tiers.full), tab);
      return `<div class="tier-panel" data-tier="${k}">${bodyHtml}</div>`;
    })
    .join('\n    ');

  return `${headerHtml}
<div class="tier-block">
      ${radiosHtml}
      <div class="tab-controls">
        <div class="tier-switcher" role="tablist" aria-label="Reading depth">
        ${labelsHtml}
        </div>
        ${copyDetailsHtml}
      </div>
      <div class="tab-body">
    ${panelsHtml}
      </div>
    </div>`;
}

function renderLedgerLegend(meta) {
  const tierRows = Object.entries(meta.tier_legend)
    .map(([k, v]) => `<dt>${k}</dt><dd>${escapeHtmlText(v)}</dd>`)
    .join('\n');
  const flagRows = Object.entries(meta.flag_legend)
    .map(([k, v]) => `<dt>${k}</dt><dd>${escapeHtmlText(v)}</dd>`)
    .join('\n');
  return `<details class="ledger-legend">
    <summary>Legend: source tiers and flags</summary>
    <div class="legend-grid">
      <div><h3>Source tiers</h3><dl>${tierRows}</dl></div>
      <div><h3>Flags</h3><dl>${flagRows}</dl></div>
    </div>
  </details>`;
}

function renderLedgerRow(row, stalenessCutoff) {
  const stale = isStale(row, stalenessCutoff);
  const worst = worstTierNum(row.tier);
  const tierClass = worst <= 2 ? 'tier-safe' : worst === 3 ? 'tier-neutral' : 'tier-warn';
  const flagChips = [
    stale ? '<span class="chip flag-stale">STALE</span>' : '',
    ...row.flags
      .filter(f => f !== 'STALE')
      .map(f => {
        const cls = f === 'UNVERIFIED' ? 'flag-chip flag-unverified' : (f === 'WEAK_TIER' || f === 'DERIVED') ? 'flag-chip flag-warn' : 'flag-chip';
        return `<span class="chip ${cls}">${f}</span>`;
      }),
  ].join('');
  const trClasses = ['', stale ? 'row-stale' : '', row.flags.includes('UNVERIFIED') ? 'row-unverified' : ''].filter(Boolean).join(' ');
  return `<tr class="${trClasses}">
      <td>${row.id}</td>
      <td>${row.module}</td>
      <td class="col-claim">${escapeHtmlText(row.claim)}</td>
      <td>${escapeHtmlText(row.figure)}</td>
      <td>${escapeHtmlText(row.unit)}</td>
      <td>${escapeHtmlText(row.as_of)}</td>
      <td class="col-source">${escapeHtmlText(row.source)}</td>
      <td><span class="chip tier-chip ${tierClass}">${row.tier}</span></td>
      <td class="col-flags">${flagChips}</td>
    </tr>`;
}

function renderLedgerBody(data) {
  const meta = data.meta;
  const rows = data.figures;
  const rowsHtml = rows.map(row => renderLedgerRow(row, meta.staleness_cutoff)).join('\n    ');

  // Everything lives inside #ledger-root so the JS enhancement in app.js can
  // do a clean `root.innerHTML = ''` and rebuild the interactive version in
  // its place. If that JS never runs (or its fetch of figures.json fails,
  // e.g. under file://), this static table is the whole ledger — every row,
  // every column, staleness and tier already computed.
  return `<div id="ledger-root">
    <div class="tab-header">
      <h1>Figure Ledger</h1>
      <p class="ledger-intro">Every quantitative claim in this evidence base, with its source tier and "as of" date.</p>
    </div>
    ${renderLedgerLegend(meta)}
    <p class="ledger-count">Showing ${rows.length} of ${rows.length}</p>
    <div class="table-scroll ledger-table-scroll">
      <table class="ledger-table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Module</th>
            <th scope="col">Claim</th>
            <th scope="col">Figure</th>
            <th scope="col">Unit</th>
            <th scope="col">As of</th>
            <th scope="col">Source</th>
            <th scope="col">Tier</th>
            <th scope="col">Flags</th>
          </tr>
        </thead>
        <tbody>
    ${rowsHtml}
        </tbody>
      </table>
    </div>
  </div>`;
}

function renderSidebar(activeId) {
  const items = TABS.map(tab => {
    const active = tab.id === activeId;
    const cls = 'nav-item' + (active ? ' active' : '');
    const currentAttr = active ? ' aria-current="page"' : '';
    const ariaLabel = tab.module ? ` aria-label="Module ${tab.module}, ${tab.label}"` : '';
    const inner = tab.module
      ? `<span class="nav-letter" aria-hidden="true">${tab.module}</span> ${tab.label}`
      : tab.label;
    return `      <a href="${tab.page}" class="${cls}"${currentAttr}${ariaLabel}>${inner}</a>`;
  }).join('\n');
  return `<div class="sidebar-nav">\n${items}\n    </div>`;
}

function pageShell({ tab, bodyHtml }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${tab.label} — Ethereum/India Institutional Evidence Portal</title>
<link rel="stylesheet" href="assets/styles.css">
</head>
<body>
<input type="checkbox" id="nav-toggle-checkbox" class="nav-toggle-checkbox" aria-hidden="true">
<a class="skip-link" href="#main-content">Skip to content</a>

<header class="site-header">
  <label for="nav-toggle-checkbox" class="nav-toggle" aria-label="Toggle navigation">
    <span class="hamburger" aria-hidden="true"></span>
  </label>
  <div class="site-title">
    <span class="portal-name">Ethereum/India Institutional Evidence Portal</span>
    <span class="current-tab">${tab.label}</span>
  </div>
</header>

<div class="layout">
  <nav class="sidebar" aria-label="Portal sections">
    ${renderSidebar(tab.id)}
  </nav>
  <label for="nav-toggle-checkbox" class="nav-scrim" aria-hidden="true"></label>
  <main id="main-content" class="main-content" tabindex="-1">
    ${bodyHtml}
  </main>
</div>

<script type="module" src="assets/app.js"></script>
</body>
</html>
`;
}

async function writeLlmsTxt() {
  const lines = [
    '# Ethereum/India Institutional Evidence Portal',
    '',
    '> A seven-module evidence base on Ethereum and distributed-settlement infrastructure for Indian institutional finance. Every claim carries a source and date; every quantitative figure carries a source tier (T1 primary … T5 crypto media/aggregator) in the Figure Ledger.',
    '',
    '## Pages',
    ...TABS.map(t => `- [${t.label}](${t.page})`),
    '',
    '## Data',
    '- [Figure Ledger data (JSON)](data/figures.json) — every quantitative claim with its claim, figure, unit, source, date, tier and flags.',
  ];
  await writeFile(path.join(ROOT, 'llms.txt'), lines.join('\n') + '\n', 'utf8');
}

async function main() {
  const built = [];
  for (const tab of TABS) {
    let bodyHtml;
    if (tab.isLedger) {
      const raw = await readFile(path.join(ROOT, 'data/figures.json'), 'utf8');
      bodyHtml = renderLedgerBody(JSON.parse(raw));
    } else {
      const raw = await readFile(path.join(ROOT, tab.file), 'utf8');
      bodyHtml = renderModuleBody(tab, raw);
    }
    const html = pageShell({ tab, bodyHtml });
    await writeFile(path.join(ROOT, tab.page), html, 'utf8');
    built.push(tab.page);
  }
  await writeLlmsTxt();
  console.log(`Built ${built.length} pages: ${built.join(', ')}`);
  console.log('Wrote llms.txt');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
