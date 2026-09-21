// Progressive enhancement for the narrative front door. Mirrors assets/app.js:
// one enhanceX() per widget, each returning early if its root is absent.
//
// Nothing here may be what makes content appear. Every claim, every sorted
// item and every status line is already in the served HTML and visible with
// this file blocked — see the note at the top of scripts/narrative.js. The
// reveal animations below work by ADDING a class that opts an element into
// being hidden, so a no-JS reader is never left with a blank page.
//
// No localStorage or sessionStorage anywhere: the site must run from file://.

/** Devcon countdown. The absolute date is already in the HTML; this adds the
 *  day count, which is the only part that has to come from the client clock. */
function enhanceCountdown() {
  document.querySelectorAll('[data-countdown-to]').forEach(el => {
    const target = new Date(el.dataset.countdownTo + 'T00:00:00');
    if (Number.isNaN(target.getTime())) return;
    const today = new Date();
    const days = Math.ceil((target - today) / 86400000);
    if (days > 1) el.textContent = `${days} days away`;
    else if (days === 1) el.textContent = 'Tomorrow';
    else if (days === 0) el.textContent = 'Today';
    else el.textContent = 'This one has been and gone';
  });
}

/**
 * Split sort: the static HTML has every item already in its correct column
 * with the real status visible. This collapses the two columns into one
 * shuffled grid, hides the answers, and lets the reader call each one. A card
 * resolves IN PLACE — tapping it must not move it somewhere off-screen, or
 * the feedback is invisible on a phone.
 *
 * "Show me the answers" resolves the rest, which returns the reader to exactly
 * what a no-JS reader sees.
 */
function enhanceSplitSort() {
  document.querySelectorAll('[data-widget="split-sort"]').forEach(widget => {
    const cols = Array.from(widget.querySelectorAll('.sort-col'));
    if (cols.length !== 2) return;

    const sides = cols.map(col => ({
      id: col.dataset.side,
      label: col.querySelector('.sort-col-label').textContent,
      sub: col.querySelector('.sort-col-sub').textContent,
    }));

    const items = Array.from(widget.querySelectorAll('.sort-item')).map(el => ({
      el,
      side: el.dataset.side,
      placed: null,
    }));
    if (!items.length) return;

    widget.classList.add('is-enhanced');

    // A legend, so the two categories are still named once the columns go.
    const legend = document.createElement('ul');
    legend.className = 'sort-legend';
    sides.forEach(side => {
      const li = document.createElement('li');
      li.dataset.side = side.id;
      li.innerHTML = '<strong></strong><span></span>';
      li.querySelector('strong').textContent = side.label;
      li.querySelector('span').textContent = side.sub;
      legend.appendChild(li);
    });

    const grid = document.createElement('ul');
    grid.className = 'sort-list sort-grid';

    const controls = document.createElement('div');
    controls.className = 'sort-controls';
    const score = document.createElement('p');
    score.className = 'sort-score';
    const reveal = document.createElement('button');
    reveal.type = 'button';
    reveal.className = 'btn btn-ghost btn-sm';
    reveal.textContent = 'Show me the answers';
    controls.append(score, reveal);

    // Score and "show me the answers" sit above the tiles: the reader should
    // see the way out before committing to nine guesses, not after scrolling
    // past them.
    widget.querySelector('.sort-prompt').after(legend, controls, grid);
    cols.forEach(col => col.remove());

    items.slice().sort(() => Math.random() - 0.5).forEach(item => {
      item.el.classList.add('is-pending');
      item.el.removeAttribute('data-side');
      const actions = document.createElement('div');
      actions.className = 'sort-actions';
      sides.forEach(side => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'sort-btn';
        b.textContent = side.label;
        b.addEventListener('click', () => resolve(item, side.id));
        actions.appendChild(b);
      });
      item.el.appendChild(actions);
      grid.appendChild(item.el);
    });

    function resolve(item, guess) {
      if (item.placed !== null) return;
      item.placed = guess;
      item.el.classList.remove('is-pending');
      item.el.dataset.side = item.side;
      const actions = item.el.querySelector('.sort-actions');
      const verdict = document.createElement('p');
      verdict.className = 'sort-verdict';
      if (guess === null) {
        verdict.textContent = sides.find(s => s.id === item.side).label;
      } else if (guess === item.side) {
        item.el.classList.add('is-right');
        verdict.textContent = 'Right — ' + sides.find(s => s.id === item.side).label;
      } else {
        item.el.classList.add('is-wrong');
        // No .toLowerCase() here: it mangles acronyms like "DLT".
        verdict.textContent = 'Actually \u2014 ' + sides.find(s => s.id === item.side).label;
      }
      if (actions) actions.replaceWith(verdict); else item.el.appendChild(verdict);
      update();
    }

    reveal.addEventListener('click', () => {
      items.filter(i => i.placed === null).forEach(i => resolve(i, null));
    });

    function update() {
      const guessed = items.filter(i => i.placed !== null && i.placed !== undefined);
      const scored = items.filter(i => i.placed !== null && i.placed === i.side);
      const left = items.filter(i => i.placed === null).length;
      score.textContent = left
        ? (guessed.length ? `${scored.length} of ${guessed.length} right — ${left} to go` : '')
        : `${scored.length} of ${items.length} right. The status line on each card is the real answer.`;
      if (!left) reveal.remove();
    }

    update();
  });
}


/* --- "Explore with your own LLM" widget -------------------------------------
   Mirrors enhanceLandingPrompt() in assets/app.js. The markup is identical
   (both come from scripts/llm-prompt.js), but this page loads narrative.js
   instead of app.js, so the behaviour has to exist here too. Without JS the
   textarea still holds the prompt and a reader can select and copy it by hand;
   only the {{BASE_URL}} substitution and the one-click button are lost, and the
   hint text says so. */

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try { await navigator.clipboard.writeText(text); return true; } catch (e) { /* fall through */ }
  }
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
  document.body.removeChild(ta);
  return ok;
}

function flashCopied(el, message) {
  const original = el.textContent;
  el.textContent = message;
  el.classList.add('copied');
  setTimeout(() => { el.textContent = original; el.classList.remove('copied'); }, 2000);
}

function pageBaseUrl() {
  let base = location.href.split(/[?#]/)[0];
  base = base.replace(/[^/]*\.html$/, '');
  if (!base.endsWith('/')) base += '/';
  return base;
}

function enhanceLlmPrompt() {
  // index.html carries this widget twice, in the hero and in the closing CTA,
  // so every instance gets the substitution and its own button.
  document.querySelectorAll('.landing-prompt-details').forEach(details => {
    const textarea = details.querySelector('.copy-textarea');
    const summary = details.querySelector('.landing-prompt-summary');
    if (!textarea) return;

    // The build ships a placeholder; only the browser knows the real address.
    textarea.value = textarea.value.split('{{BASE_URL}}').join(pageBaseUrl());

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.textContent = 'Copy to clipboard';
    btn.addEventListener('click', async () => {
      const ok = await copyToClipboard(textarea.value);
      flashCopied(btn, ok ? 'Copied' : 'Copy failed');
    });
    textarea.parentNode.insertBefore(btn, textarea);

    if (summary) {
      summary.addEventListener('click', async () => {
        if (details.open) return; // copy only on the click that opens it
        const ok = await copyToClipboard(textarea.value);
        flashCopied(summary, ok ? 'Copied \u2014 go paste it into your LLM' : 'Copy failed \u2014 use the box below');
      });
    }
  });
}

/** Opt sections into a fade-up on scroll. The hiding rule lives under
 *  .js-reveal, which only exists once this runs — so JS-off keeps everything. */
function enhanceReveal() {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const targets = document.querySelectorAll('.scene-inner');
  if (!targets.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  targets.forEach(el => {
    el.classList.add('js-reveal');
    io.observe(el);
  });
}

function init() {
  enhanceCountdown();
  enhanceLlmPrompt();
  enhanceSplitSort();
  enhanceReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
