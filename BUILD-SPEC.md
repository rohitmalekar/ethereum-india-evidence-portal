# Build Spec — Ethereum/India Institutional Evidence Portal (internal, local)

You are building a **local, static, zero-build micro-portal** that presents a six-module research base plus a reconciliation tab and a figure ledger. It runs from `file://` or a trivial local server (`python3 -m http.server`). No framework, no build step, no external network calls, no dependencies fetched at runtime. The audience is an internal core team that is git-comfortable; a public build will be forked later, so keep internal-only content clearly fenced.

Do not change any prose in the content files. Your job is structure, navigation, and the interactive ledger — not editing the research.

---

## 0. Hard constraints

- **No build tooling.** Plain HTML, CSS, and vanilla JS (ES modules are fine). No npm, no bundler, no framework, no CDN. Everything must work opened as a local file or via `python3 -m http.server 8000`.
- **No network at runtime.** All assets local. If you need a markdown parser, vendor a single small MIT-licensed parser file into `/vendor/` (e.g. a minimal marked.js build) and load it locally — do NOT fetch from a CDN. If you would rather avoid a parser dependency entirely, pre-render the markdown to HTML at author time is NOT allowed (the team edits markdown directly); instead vendor the parser. Pick the smallest reliable option and note your choice in the README.
- **Content is markdown, edited directly.** The site reads the `.md` files at runtime and renders them. The team must be able to edit a `.md` file and see the change on reload with no build step.
- **Tone.** This is an understatement-persuades-skeptics document. The UI must read as a serious internal reference tool, not a product launch. No animation beyond instant show/hide, no gradients-as-decoration, no marketing chrome. Restrained typography, generous whitespace, high legibility. Think "a regulator's technical staff would not roll their eyes at this."

---

## 1. File and directory layout

Expect this repository layout (content files already exist under `content/`, and `data/figures.json` will be present — do not generate it, do not parse prose into it):

```
/index.html
/assets/
   app.js            # all app logic (ES module ok)
   styles.css        # all styles
   ledger.js         # figure-ledger logic (may be a module imported by app.js)
/vendor/
   <markdown-parser>.js   # vendored, local, MIT-licensed
/content/
   intro.md
   module-a.md
   module-b.md
   module-c.md
   module-d.md
   module-e.md
   module-f.md
   reconciliation.md
/data/
   figures.json      # already provided; schema in section 6
/README.md            # you write this
```

---

## 2. Tabs and navigation

A single-page app with a persistent left sidebar (or top tab bar on narrow screens) listing these tabs **in this order**, labelled by the reader's question, not the module letter:

| Tab label | Source file | Notes |
|---|---|---|
| Overview | `content/intro.md` | Landing tab. Default on load. |
| What shipped | `content/module-a.md` | |
| What's legal in India | `content/module-b.md` | |
| Where the value is | `content/module-c.md` | |
| Ethereum vs alternatives | `content/module-d.md` | |
| The objections | `content/module-e.md` | |
| How adoption happens | `content/module-f.md` | |
| Figure Ledger | `data/figures.json` | Interactive table, section 6. |
| Reconciliation | `content/reconciliation.md` | **INTERNAL-ONLY — see section 7.** |
| The Devcon pitch | (you create a stub) | See section 8. Separate closing tab, NOT in the intro. |

Navigation requirements:
- Deep-linkable: each tab has a URL hash (e.g. `#/what-shipped`, `#/ledger`). Reload and back/forward must work. Copying the URL and reopening lands on the same tab.
- The active tab is visually indicated in the sidebar.
- Keyboard: sidebar items are focusable and activate on Enter.

---

## 3. The three depth tiers (the core interaction)

Every module file AND the intro file is split into three tiers by HTML-comment delimiters that already exist in the markdown:

```
<!-- TIER:30s -->
<!-- TIER:5min -->
<!-- TIER:full -->
```

Everything before the first `<!-- TIER:30s -->` is the tab **header** (the `# H1` and the `**Question:**` line) — render it once, above the tier control, always visible.

Split the remaining markdown on those three delimiters into three segments. Render a **tier switcher** — a segmented control / three buttons labelled **"30 seconds" · "5 minutes" · "Full report"** — directly under the header. Selecting a tier shows that segment and hides the others.

Behaviour:
- Default tier on entering any module tab is **30 seconds**.
- The chosen tier is **per-tab and remembered within the session** (e.g. in a JS object; do NOT use localStorage/sessionStorage — this runs from `file://` where storage may be blocked, and the team explicitly does not want browser storage. Keep tier state in an in-memory object keyed by tab. It resets on full reload, which is fine.)
- The tier switcher is sticky/always reachable while scrolling a long full report.
- `reconciliation.md`, the Overview's non-tier content, the Ledger and the Devcon tabs: the Reconciliation and Devcon files may not contain tier delimiters — if a file has no `<!-- TIER: -->` markers, render it whole with no tier switcher. The Overview DOES have tiers; treat it like a module.
- The delimiters are HTML comments, so a plain markdown renderer would drop them silently. You must split the RAW markdown text on the delimiter strings BEFORE passing each segment to the parser. Split first, parse each segment separately.

---

## 4. Copy-context-to-LLM buttons

Two granularities:

**(a) Per-tab copy.** At the top of each module/intro tab (near the tier switcher), a button: **"Copy this module for an LLM"**. It copies to clipboard the **full report tier** of that module (not the currently-selected tier — always the full text, since that is the useful context payload), prefixed with a short provenance header:

```
[Source: <Tab label> — <module file name> — Ethereum/India institutional evidence base]
[Every figure carries a source tier (T1 primary … T5 crypto media) and an "as of" date. Treat T4/T5 figures as unverified for volumes/adoption. This subject moves monthly; re-check anything dated more than six months ago.]

<full markdown of the module's full-report tier>
```

**(b) Per-finding copy.** Many modules have a bolded finding or a clearly delimited claim. Implement a lightweight version: render a small "copy" affordance on each `##`/`###` section within the full-report tier that, when clicked, copies that section's markdown **plus** the same provenance header above. Keep it unobtrusive (a small icon that appears on hover/focus of the heading). If per-section copy proves fiddly with the parser, it is acceptable to scope (b) to top-level `##` sections only. Do not skip (b) entirely — per-finding copy is a stated requirement.

Both copy actions must carry the provenance/tier caveat header. The point is that a figure never leaves this portal stripped of its tier warning.

Clipboard: use the async Clipboard API with a `document.execCommand('copy')` fallback for `file://`. Show a brief inline "Copied" confirmation (text change, no toast library).

---

## 5. Rendering rules for module content

- Render standard markdown: headings, bold, tables (the perimeter table in B and the matrices in C/D must render as real HTML tables), lists, blockquotes, inline code.
- The `**Question:**` line at the top of each file renders as a distinct, styled callout above the tier switcher (it is the tab's anchor question).
- Blockquotes (`>`) are used in `reconciliation.md` for the INTERNAL-ONLY banner and in some modules for the connective note — style them as a visible callout (left border, muted background).
- Tables must be horizontally scrollable on narrow screens rather than breaking layout.
- Do not syntax-highlight; there is no code to highlight beyond inline contract addresses.
- Preserve the italic connective notes at the top of each full-report tier (they point readers to the Reconciliation tab) — they are load-bearing, not decoration.

---

## 6. The Figure Ledger tab (the reusable spine)

Read `data/figures.json`. Its shape (already provided — do not regenerate):

```json
{
  "meta": {
    "generated": "2026-09-01",
    "staleness_cutoff": "2026-03-01",
    "flag_legend": { "WEAK_TIER": "...", "STALE": "...", "HISTORICAL": "...", "CURRENT": "...", "CONFLICT": "...", "UNVERIFIED": "...", "DERIVED": "...", "VAGUE": "...", "DUP": "..." },
    "tier_legend": { "T1": "...", "T2": "...", "T3": "...", "T4": "...", "T5": "..." },
    "row_count": 138
  },
  "figures": [
    { "id": 1, "module": "A", "claim": "...", "figure": "...", "unit": "...",
      "as_of": "Dec 2025", "as_of_sort": "2025-12-01", "source": "...",
      "tier": "T4", "flags": ["WEAK_TIER"] },
    ...
  ]
}
```

Render an interactive table with columns: **ID · Module · Claim · Figure · Unit · As of · Source · Tier · Flags**.

Required behaviour:
- **Filter by module** (A–F, plus "all"): a row of toggle buttons or a select.
- **Filter by tier** (T1–T5, plus "all").
- **Filter by flag**: at minimum, a "show only weak-tier (T4/T5)" toggle and a "show only stale" toggle and a "show only conflicts" toggle. These are the three the team will use most.
- **Free-text search** across `claim` and `source`.
- **Sort** by clicking column headers (at least ID, As of via `as_of_sort`, Tier, Module).
- **Auto-staleness flag (do this in JS, not from the data):** a row is "stale" if `as_of_sort` is earlier than `meta.staleness_cutoff` AND its flags do NOT include `HISTORICAL` or `CURRENT`. Paint an **amber dot / amber left-border** on such rows and show an amber "STALE" chip. Do not hardcode which rows are stale — compute it from dates so the flagging stays correct as the cutoff or dates change. (Rows already carrying a `STALE` flag in the data should agree with your computation; if they diverge, trust the computed one and note it — but they were generated to match.)
- **Tier chips**: colour-code T1/T2 (safe — cool/neutral), T3 (neutral), T4/T5 (warn — amber/red). A row whose flags include `WEAK_TIER`, `UNVERIFIED`, or `DERIVED` gets a visible warning treatment. `UNVERIFIED` should be the most prominent (this is the "do not ship externally" set).
- **Legend**: render `meta.flag_legend` and `meta.tier_legend` as a small always-visible or toggle-open key.
- **Row count**: show "showing N of 139" that updates with filters.
- **Copy a row**: each row has a copy affordance that copies a one-line citation — `<claim>: <figure> <unit> (as of <as_of>) — <source> [<tier>]<, flags>` — so a team member can paste a properly-attributed figure straight into a doc. This is the ledger's whole reason for existing; make it one click.
- The ledger is data-driven: adding or editing a row in `figures.json` must reflect on reload with no code change.

Note there are 139 rows (the audited 138 plus one FX-reconciliation row, id 139). Use the actual array length, do not hardcode 138.

---

## 7. Internal-only fencing

`content/reconciliation.md` is internal-only and its first blockquote says so. For this **internal local build**, render it normally as the Reconciliation tab. But make removal for a future public build a one-line operation:

- Drive the tab list from a single config array at the top of `app.js`, where each entry has `{ id, label, file, internalOnly: true|false }`.
- Mark the Reconciliation tab `internalOnly: true`.
- Add a single constant `const BUILD = 'internal'` (or `'public'`). When `BUILD === 'public'`, tabs with `internalOnly: true` are omitted from the nav and their route 404s to Overview. Default to `'internal'`.
- Also honour an inline fence convention in ANY content file: content between `<!-- INTERNAL-ONLY:START -->` and `<!-- INTERNAL-ONLY:END -->` is stripped from the rendered output when `BUILD === 'public'`. (No module currently uses this, but wire it so the team can fence a paragraph later without touching code.)

This lets the team flip one constant to produce a public-safe build later, exactly as planned. Do not build a second site; one codebase, one flag.

---

## 8. The Devcon pitch tab

Create `content/devcon-pitch.md` as a **short stub** the team will fill in — do not write the pitch yourself. Put a one-line `**Question:**` header, a single `<!-- TIER:full -->` section, and a placeholder paragraph:

```
# The Devcon Pitch

**Question:** Why should this audience engage at a developer conference in Mumbai, and in what format?

<!-- TIER:full -->
> Placeholder — to be written by the team. Anchor this on Module F's format recommendations (closed regulator-anchored roundtable; standards-and-interoperability session; policy panel co-hosted with an existing Indian convener) and set expectations honestly: a conference convenes and aligns, it does not procure. Do not open the portal with this pitch — it is deliberately the closing tab so the evidence earns it.
```

Render it like any other single-tier tab.

---

## 9. Styling specifics

- A readable serif or high-quality system sans for body; one typeface, two weights. Max content width ~760px for prose; the ledger table may use full width.
- Restrained palette: near-black text on off-white, one muted accent for links/active-tab, plus the semantic amber/red reserved strictly for staleness and weak-tier warnings (so a warning never competes with decoration).
- Sticky header showing the portal title and the current tab; sticky tier switcher within module tabs.
- Print stylesheet: printing a module tab should print the currently-selected tier cleanly (the leave-behind use case). Hide nav chrome in print.
- Fully responsive: sidebar collapses to a top bar or hamburger under ~800px; tables scroll horizontally.
- Accessibility: semantic HTML, focus states, sufficient contrast, `aria-current` on the active tab, table headers as `<th scope>`.

---

## 10. README

Write `/README.md` covering: how to run locally (`python3 -m http.server 8000` then open `localhost:8000`, and the `file://` caveat for clipboard); the content model (edit `content/*.md` directly, tiers are split on `<!-- TIER: -->` comments, the `**Question:**` line is the header); how to add/edit a ledger figure (edit `data/figures.json`, one object per row, staleness auto-computed); which markdown parser was vendored and its licence; and the `BUILD = 'internal' | 'public'` flag plus the `internalOnly` tab config and the `<!-- INTERNAL-ONLY:START/END -->` fence, i.e. exactly what to flip to produce a public-safe build (and that the Reconciliation tab must be excluded from public builds).

---

## 11. Acceptance checklist

Before you call it done, verify:
1. Opens via `python3 -m http.server` with all ten tabs navigable and deep-linkable by hash.
2. Every module + the Overview split correctly into 30s / 5min / full, defaulting to 30s, switcher sticky, state per-tab and in-memory only (no browser storage anywhere in the codebase — grep to confirm no `localStorage`/`sessionStorage`).
3. Editing a word in `content/module-a.md` and reloading shows the change with no build step.
4. "Copy this module for an LLM" copies the full-report tier with the provenance/tier header; per-section copy works for at least top-level `##` sections; both carry the header.
5. Figure Ledger loads all 139 rows, filters by module/tier/flag, free-text searches, sorts, computes staleness from dates (amber), colour-codes tiers, flags UNVERIFIED prominently, and copies a one-line citation per row.
6. Tables in B/C/D render as real, horizontally-scrollable HTML tables.
7. Setting `BUILD = 'public'` removes the Reconciliation tab from nav and strips any `INTERNAL-ONLY` fenced content; default `'internal'` shows everything.
8. Print a module tab → clean single-tier output, no nav chrome.
9. No network requests at runtime (check the network panel — only local files).
10. README explains running, editing content, editing the ledger, and flipping to a public build.

Build it, then give me a one-paragraph summary of the parser you vendored, any requirement you had to interpret, and anything in the acceptance checklist you could not fully meet.
