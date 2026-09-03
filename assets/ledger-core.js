// Pure data helpers for the Figure Ledger, shared between the build script
// (scripts/build.js, which renders the static fallback table) and the
// browser (ledger.js, which renders the interactive version). Keeping this
// logic in one place means the static and JS-enhanced tables can never
// disagree on staleness or tier severity.

export function tierComponents(tierStr) {
  return tierStr.match(/T[1-5]/g) || [];
}

export function worstTierNum(tierStr) {
  const nums = tierComponents(tierStr).map(t => Number(t[1]));
  return nums.length ? Math.max(...nums) : 0;
}

export function isStale(row, stalenessCutoff) {
  if (!row.as_of_sort) return false;
  if (row.flags.includes('HISTORICAL') || row.flags.includes('CURRENT')) return false;
  return row.as_of_sort < stalenessCutoff;
}

export function isWeakTier(row) {
  const comps = tierComponents(row.tier);
  return comps.includes('T4') || comps.includes('T5');
}

export function citationFor(row) {
  const flagsPart = row.flags.length ? `, ${row.flags.join(', ')}` : '';
  return `${row.claim}: ${row.figure} ${row.unit} (as of ${row.as_of}) — ${row.source} [${row.tier}]${flagsPart}`;
}
