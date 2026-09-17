// Citation spine for the narrative front door.
//
// Every number on index.html references a data/figures.json row by id. The
// chip that renders carries that row's source tier and "as of" date, and links
// to the row in the Figure Ledger. A missing id throws, which fails the build.
//
// The point: a figure cannot reach the site's most-shared surface stripped of
// its provenance. Only 37 of 164 rows are clean T1; 24% are T4/T5. A narrative
// page that asserted those numbers flatly would misrepresent the research it
// is a front door for.
//
// Tier/staleness are computed by the same functions the ledger table uses, so
// the two surfaces can never disagree about how strong a source is.

import { worstTierNum, isStale, isWeakTier, citationFor } from '../assets/ledger-core.js';

function escapeHtmlText(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return escapeHtmlText(str).replace(/"/g, '&quot;');
}

/** Map of id -> row. Throws on a duplicate id, which would make citations ambiguous. */
export function buildFigureIndex(figuresData) {
  const index = new Map();
  for (const row of figuresData.figures) {
    if (index.has(row.id)) {
      throw new Error(`data/figures.json: duplicate figure id ${row.id}`);
    }
    index.set(row.id, row);
  }
  return index;
}

/** Look up a cited figure, or fail the build with a message that locates the citation. */
export function resolveFigure(index, id, whereDesc) {
  const row = index.get(id);
  if (!row) {
    throw new Error(
      `data/narrative.json: ${whereDesc} cites figure ${id}, which is not in data/figures.json. ` +
      `Figure ids are append-only — if a row was renumbered, the citation now points at the wrong claim.`
    );
  }
  return row;
}

/**
 * The inline chip. Renders the figure as written in narrative.json (so prose
 * reads naturally) followed by the tier, linking into the ledger row.
 * `title` carries the full one-line citation, so provenance survives a
 * copy-paste and is visible to an LLM reading the HTML.
 */
export function renderCitationChip(row, cutoff, displayText) {
  const worst = worstTierNum(row.tier);
  const tierClass = worst <= 2 ? 'fig-safe' : worst === 3 ? 'fig-neutral' : 'fig-warn';
  const stale = isStale(row, cutoff) ? ' is-stale' : '';
  const unverified = row.flags.includes('UNVERIFIED') ? ' is-unverified' : '';
  const text = displayText !== undefined ? displayText : `${row.figure} ${row.unit}`.trim();
  return `<a class="fig-chip ${tierClass}${stale}${unverified}" href="ledger.html#fig-${row.id}"` +
    ` title="${escapeAttr(citationFor(row))}">` +
    `${escapeHtmlText(text)}<span class="fig-tier">${escapeHtmlText(row.tier)}</span></a>`;
}

/**
 * Replace [[fig:N]] and [[fig:N|display text]] tokens in ALREADY-RENDERED HTML.
 *
 * Order matters and is safe: minimark escapes only & < >, and its link regex
 * requires a "(" after "]", so the token passes through renderMarkdown()
 * untouched. Run this after rendering, never before.
 */
export function citeTokens(html, index, cutoff, whereDesc) {
  return html.replace(/\[\[fig:(\d+)(?:\|([^\]]*))?\]\]/g, (_m, idStr, display) => {
    const row = resolveFigure(index, Number(idStr), whereDesc);
    return renderCitationChip(row, cutoff, display);
  });
}

/**
 * Non-fatal build warnings. Citing a weak or stale figure is allowed — a lot of
 * this evidence base is weak and saying so is the point — but it should be a
 * deliberate choice, so it prints.
 */
export function warnOnWeakCitations(html, index, cutoff, whereDesc) {
  const warnings = [];
  for (const m of html.matchAll(/href="ledger\.html#fig-(\d+)"/g)) {
    const row = index.get(Number(m[1]));
    if (!row) continue;
    const why = [];
    if (isWeakTier(row)) why.push(`tier ${row.tier}`);
    if (isStale(row, cutoff)) why.push(`stale (${row.as_of})`);
    if (row.flags.includes('UNVERIFIED')) why.push('UNVERIFIED');
    if (why.length) warnings.push(`  fig ${row.id} in ${whereDesc}: ${why.join(', ')} — ${row.claim}`);
  }
  return warnings;
}
