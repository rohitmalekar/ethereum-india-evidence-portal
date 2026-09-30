// The A-G finding cards on research.html, built from content/intro.md.
//
// The findings list is the overview's router into the seven modules, and as a
// plain <ul> of long paragraphs it read as a wall. Each item opens
// `**A — What shipped.** ...`, so the letter and title are lifted out into a
// linked card head and the rest becomes the card body. The destination comes
// from the module tabs, so the links cannot drift from the pages that exist.
//
// Anything that does not match the pattern is left exactly as markdown
// rendered it, which is also what happens if the list is ever rewritten.

import { renderMarkdown } from '../vendor/minimark.js';
import { escapeHtmlText, escapeAttr } from './meta.js';

/** Everything before the first `## ` heading, and everything from it on. */
function splitBeforeFirstH2(raw) {
  const normalized = raw.replace(/\r\n/g, '\n');
  const m = normalized.match(/\n(?=##\s)/);
  const splitAt = m ? m.index + 1 : normalized.length;
  return { introRaw: normalized.slice(0, splitAt), restRaw: normalized.slice(splitAt) };
}

function renderFindingCards(listHtml, moduleTabs) {
  const byModule = new Map(moduleTabs.map(t => [t.module, t]));
  const items = listHtml.match(/<li>[\s\S]*?<\/li>/g);
  if (!items) return listHtml;

  const cards = items.map(item => {
    const m = item.match(/^<li><strong>([A-G])\s*—\s*([^<]*?)\.?<\/strong>\s*([\s\S]*)<\/li>$/);
    if (!m) return item;
    const [, letter, title, body] = m;
    const tab = byModule.get(letter);
    if (!tab) return item;
    return `<li class="finding">
            <a class="finding-head" href="${escapeAttr(tab.page)}" aria-label="Module ${letter}, ${escapeAttr(title)}">
              <span class="finding-letter" aria-hidden="true">${letter}</span>
              <span class="finding-title">${escapeHtmlText(title)}</span>
            </a>
            <p class="finding-body">${body}</p>
          </li>`;
  });

  return `<ul class="findings">\n          ${cards.join('\n          ')}\n        </ul>`;
}

/**
 * content/intro.md -> { summaryHtml, cardsHtml }. The H1 is dropped: the
 * research page's hero already carries the title. The "What this is" line is
 * the summary; the first list after it becomes the cards.
 */
export function renderFindings(raw, moduleTabs) {
  const { introRaw, restRaw } = splitBeforeFirstH2(raw);
  const summaryHtml = renderMarkdown(introRaw.replace(/^# .*\n/, ''));
  const listMatch = renderMarkdown(restRaw).match(/<ul>[\s\S]*?<\/ul>/);
  if (!listMatch) throw new Error('content/intro.md: no findings list found under the first ## heading.');
  return { summaryHtml, cardsHtml: renderFindingCards(listMatch[0], moduleTabs) };
}
