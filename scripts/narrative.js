// Renders index.html: the narrative front door.
//
// THE BUILD MUST NEVER READ THE CLOCK. No Date.now(), no bare new Date().
// CI runs `node scripts/build.js` then `git diff --exit-code`; a clock read
// makes the output differ on every run and fails every push forever. The
// Devcon countdown is computed client-side in assets/narrative.js. Any date
// arithmetic the build needs derives from figures.json meta.generated or a
// literal in narrative.json, the same rule stalenessCutoff() already follows.
//
// Second rule, from README: every page is real HTML on first byte. Every
// claim, card back and sorted item below is in the served bytes and visible
// by default. JS restructures and animates; it never reveals.

import { renderMarkdown } from '../vendor/minimark.js';
import { stalenessCutoff } from '../assets/ledger-core.js';
import { buildFigureIndex, citeTokens, warnOnWeakCitations } from './citations.js';
import { renderLandingPromptCta } from './llm-prompt.js';

function escapeHtmlText(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return escapeHtmlText(str).replace(/"/g, '&quot;');
}

/** Markdown -> HTML -> citation chips. Order matters: minimark leaves [[fig:N]] alone. */
function prose(md, ctx, where) {
  return citeTokens(renderMarkdown(md), ctx.index, ctx.cutoff, where);
}

/** Inline markdown for a single line (headline, label) with no <p> wrapper. */
function inline(md, ctx, where) {
  const html = renderMarkdown(md).replace(/^<p>/, '').replace(/<\/p>\s*$/, '');
  return citeTokens(html, ctx.index, ctx.cutoff, where);
}

function sceneHeader(scene, ctx) {
  const where = `scene "${scene.id}"`;
  const num = scene.number ? `<span class="scene-num" aria-hidden="true">${escapeHtmlText(scene.number)}</span>` : '';
  const eyebrow = scene.eyebrow ? `<p class="scene-eyebrow">${num}${escapeHtmlText(scene.eyebrow)}</p>` : '';
  const headline = scene.headline ? `<h2 class="scene-headline">${inline(scene.headline, ctx, where)}</h2>` : '';
  return eyebrow + headline;
}

/** The one-line admission each scene carries. Rule 2 of "what must survive". */
function couldNotEstablish(scene, ctx) {
  if (!scene.couldNotEstablish) return '';
  return `<aside class="scene-limit">
        <span class="scene-limit-label">What this could not establish</span>
        <p>${inline(scene.couldNotEstablish, ctx, `scene "${scene.id}" limit`)}</p>
      </aside>`;
}

function deeperLink(scene) {
  if (!scene.deeper) return '';
  // The arrow glyph is UI chrome, not prose. The house style's "type ->"
  // rule targets writing; a literal -> on a designed page reads as unstyled
  // markup. aria-hidden keeps it out of the accessibility tree.
  return `<p class="scene-deeper"><a href="${escapeAttr(scene.deeper.page)}">${escapeHtmlText(scene.deeper.label)}<span aria-hidden="true"> →</span></a></p>`;
}

// --- Scene renderers -------------------------------------------------------

function renderHero(scene, ctx) {
  const where = `scene "${scene.id}"`;
  const d = ctx.narrative.meta.devcon;
  return `<header class="hero" id="${escapeAttr(scene.id)}">
      <div class="hero-inner">
        <p class="hero-eyebrow">${escapeHtmlText(scene.eyebrow)}</p>
        <h1 class="hero-headline">${inline(scene.headline, ctx, where)}</h1>
        <p class="hero-sub">${inline(scene.sub, ctx, where)}</p>
        <div class="hero-lede">${prose(scene.lede, ctx, where)}</div>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#${escapeAttr(ctx.narrative.scenes[1].id)}">Start reading</a>
          <a class="btn btn-ghost" href="evidence.html">Skip to the evidence base</a>
        </div>
        <p class="hero-devcon">Built ahead of <a href="${escapeAttr(d.url)}">${escapeHtmlText(d.name)}</a> — ${escapeHtmlText(d.city)}, ${escapeHtmlText(d.date_label)}</p>
      </div>
    </header>`;
}

function renderProse(scene, ctx) {
  return `<section class="scene scene-prose" id="${escapeAttr(scene.id)}">
      <div class="scene-inner">
        ${sceneHeader(scene, ctx)}
        <div class="scene-body">${prose(scene.body, ctx, `scene "${scene.id}"`)}</div>
        ${couldNotEstablish(scene, ctx)}
        ${deeperLink(scene)}
      </div>
    </section>`;
}

/**
 * Two labelled columns, every item already in its correct column with the
 * real answer visible. JS lifts the items into a pool and runs the guess.
 * With JS off this reads as a labelled comparison, which is the actual content.
 */
function renderSplitSort(scene, ctx) {
  const where = `scene "${scene.id}"`;
  const w = scene.widget;
  const columns = w.sides.map(side => {
    const items = w.items.filter(it => it.side === side.id).map(it => `
            <li class="sort-item" data-side="${escapeAttr(side.id)}">
              <span class="sort-item-text">${escapeHtmlText(it.text)}</span>
              <span class="sort-item-status">${escapeHtmlText(it.status)}</span>
              <span class="sort-item-authority">${escapeHtmlText(it.authority)}</span>
            </li>`).join('');
    return `<div class="sort-col" data-side="${escapeAttr(side.id)}">
            <h3 class="sort-col-label">${escapeHtmlText(side.label)}</h3>
            <p class="sort-col-sub">${escapeHtmlText(side.sub)}</p>
            <ul class="sort-list">${items}
            </ul>
          </div>`;
  }).join('\n          ');

  return `<section class="scene scene-sort" id="${escapeAttr(scene.id)}">
      <div class="scene-inner">
        ${sceneHeader(scene, ctx)}
        <div class="scene-body">${prose(scene.body, ctx, where)}</div>
        <div class="sort-widget" data-widget="split-sort">
          <p class="sort-prompt">${escapeHtmlText(w.prompt)}</p>
          ${columns}
        </div>
        ${couldNotEstablish(scene, ctx)}
        ${deeperLink(scene)}
      </div>
    </section>`;
}

function renderCta(scene, ctx) {
  const where = `scene "${scene.id}"`;
  const d = ctx.narrative.meta.devcon;
  const tiers = d.tiers.map(t => `<li class="tier">
              <span class="tier-price">${escapeHtmlText(t.price)}</span>
              <span class="tier-label">${escapeHtmlText(t.label)}</span>
              <span class="tier-note">${escapeHtmlText(t.note)}</span>
            </li>`).join('\n            ');

  const secondary = scene.asks.filter(a => a.kind === 'secondary').map(a =>
    `<li><a href="${escapeAttr(a.href)}">${escapeHtmlText(a.label)}</a> <span>${escapeHtmlText(a.note)}</span></li>`
  ).join('\n            ');

  // Static: the absolute dates, which are the durable fact. The day count is
  // filled in client-side; see the clock rule at the top of this file.
  return `<section class="scene scene-cta" id="${escapeAttr(scene.id)}">
      <div class="scene-inner">
        ${sceneHeader(scene, ctx)}
        <div class="scene-body">${prose(scene.body, ctx, where)}</div>
        <aside class="scene-limit scene-limit-strong">
          <span class="scene-limit-label">The concession that comes first</span>
          <p>${inline(scene.concession, ctx, `${where} concession`)}</p>
        </aside>
        <div class="cta-card">
          <p class="cta-kicker">${escapeHtmlText(d.name)}</p>
          <p class="cta-when"><time datetime="${escapeAttr(d.start)}">${escapeHtmlText(d.date_label)}</time><span class="countdown" data-countdown-to="${escapeAttr(d.start)}"></span></p>
          <p class="cta-where">${escapeHtmlText(d.venue)}, ${escapeHtmlText(d.city)}</p>
          <ul class="tier-list">
            ${tiers}
          </ul>
          <!-- Arrow is UI chrome; see the note above renderDeeperLink. -->
          <a class="btn btn-primary btn-lg" href="${escapeAttr(d.tickets_url)}">Get a ticket<span aria-hidden="true"> →</span></a>
          <p class="cta-fineprint">Ticket tiers and prices are Devcon's and change in waves — check the store for what is open now.</p>
        </div>
        <div class="cta-secondary">
          <p class="cta-secondary-label">Whether or not you come</p>
          <ul>
            ${secondary}
          </ul>
          ${renderLandingPromptCta()}
        </div>
      </div>
    </section>`;
}

const RENDERERS = {
  hero: renderHero,
  prose: renderProse,
  'split-sort': renderSplitSort,
  cta: renderCta,
};

// --- Page shell ------------------------------------------------------------

/** Every portal page as a real link, so a crawler or LLM can traverse from "/". */
function renderFooterNav(tabs) {
  const items = tabs.filter(t => !t.isNarrative).map(t => {
    const letter = t.module ? `<span class="foot-letter" aria-hidden="true">${t.module}</span>` : '';
    return `        <li><a href="${escapeAttr(t.page)}">${letter}${escapeHtmlText(t.label)}</a></li>`;
  }).join('\n');
  return `<nav class="foot-nav" aria-label="The evidence base">
      <h2>The evidence base</h2>
      <ul>
${items}
      </ul>
    </nav>`;
}

function narrativeShell({ meta, bodyHtml, tabs, generated, assets }) {
  const base = meta.site_base;
  const title = `${meta.title}: ${meta.tagline}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtmlText(title)}</title>
<meta name="description" content="${escapeAttr(meta.description)}">
<link rel="canonical" href="${escapeAttr(base)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${escapeAttr(base)}">
<meta property="og:title" content="${escapeAttr(title)}">
<meta property="og:description" content="${escapeAttr(meta.description)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeAttr(title)}">
<meta name="twitter:description" content="${escapeAttr(meta.description)}">
<link rel="stylesheet" href="${assets.tokens}">
<link rel="stylesheet" href="${assets.narrativeCss}">
</head>
<body class="narrative">
<a class="skip-link" href="#main-content">Skip to content</a>
<main id="main-content" tabindex="-1">
    ${bodyHtml}
  </main>
<footer class="site-foot">
    ${renderFooterNav(tabs)}
    <p class="foot-note">Every quantitative claim on this page links to the Figure Ledger, which carries its source, date and source tier (T1 primary … T5 crypto media). Roughly a quarter of the figures in this base rest on the weakest two tiers, and the ledger flags them rather than hiding them. Figures current as of ${escapeHtmlText(generated)}; this subject moves monthly.</p>
    <p class="foot-note">Prose and data CC BY 4.0. Code MIT. <a href="reconciliation.html">Every place two modules disagreed is logged here.</a></p>
  </footer>
<script type="module" src="${assets.narrativeJs}"></script>
</body>
</html>
`;
}

export function renderNarrativePage({ narrative, figuresData, tabs, assets }) {
  const ctx = {
    narrative,
    index: buildFigureIndex(figuresData),
    cutoff: stalenessCutoff(figuresData.meta),
  };

  const parts = [];
  const warnings = [];
  for (const scene of narrative.scenes) {
    const render = RENDERERS[scene.kind];
    if (!render) {
      throw new Error(`data/narrative.json: scene "${scene.id}" has unknown kind "${scene.kind}". Known kinds: ${Object.keys(RENDERERS).join(', ')}`);
    }
    const html = render(scene, ctx);
    warnings.push(...warnOnWeakCitations(html, ctx.index, ctx.cutoff, `scene "${scene.id}"`));
    parts.push(html);
  }

  if (warnings.length) {
    console.log(`\nNarrative cites ${warnings.length} weak or stale figure(s) — deliberate, but check the framing:`);
    warnings.forEach(w => console.log(w));
    console.log('');
  }

  return narrativeShell({
    meta: narrative.meta,
    bodyHtml: parts.join('\n\n    '),
    tabs,
    generated: figuresData.meta.generated,
    assets,
  });
}
