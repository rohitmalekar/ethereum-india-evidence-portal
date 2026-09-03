# Ethereum/India Institutional Evidence Portal

**Live: https://rohitmalekar.github.io/ethereum-india-evidence-portal/**

The pages are generated from Markdown by a build script; nothing here is
hand-authored HTML. Edit `content/*.md`, not the `.html` files.

A static, multi-page site presenting the six-module Ethereum/India
institutional evidence base, a reconciliation page, and an interactive figure
ledger. Every page is real HTML on first byte — no JavaScript is required to
read any of the content, navigate between pages, switch reading depth, or
read the full Figure Ledger. JavaScript is used only to layer a few
conveniences on top: one-click "copy for an LLM" buttons and the Figure
Ledger's live filter/sort/search.

This matters for two audiences beyond a browser with JS enabled: a plain
`curl`/`fetch` (what most "paste this URL into an LLM chat" integrations
actually do — no JS execution) gets the full module text back immediately,
and a reader with JavaScript disabled or blocked can still read and navigate
everything.

## Running it locally

From the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser. You can also open any of the
generated `.html` files directly as a `file://` URL — navigation, tier
switching, and manual copy (select-all in the textarea) all work the same
way. The one thing that can be blocked under `file://` in some browsers is
the async Clipboard API used by the one-click "Copy to clipboard" buttons and
the Figure Ledger's live JSON fetch; both fall back gracefully (manual
copy-paste from the textarea; the ledger's pre-rendered static table) if so.

## Prerequisites

Node 18 or newer, and nothing else. The project has **zero dependencies** —
there is no `npm install` step, no lockfile, and no `node_modules/`.
`package.json` exists only to declare `"type": "module"` and alias
`npm run build`.

## Forking and publishing your own copy

1. Fork the repo on GitHub, then clone your fork.
2. Enable Pages on the fork: **Settings → Pages → Source: GitHub Actions**.
   Forks start with Pages and Actions disabled, so nothing deploys until you
   turn both on.
3. Edit `content/*.md` or `data/figures.json`.
4. Run `node scripts/build.js`.
5. **Commit the regenerated `.html` files and `llms.txt` in the same commit as
   the Markdown you changed**, and push to `main`.

The generated HTML is committed on purpose — it is what makes the site
readable over `file://`, forkable with no toolchain, and complete on the first
byte of a plain `curl`. The cost is that it can drift from its source, so
`.github/workflows/pages.yml` rebuilds on every push and pull request, on any
branch, and **fails the run if a fresh build differs from what you
committed**. If CI fails with "Generated HTML is out of date", you skipped
step 4. Only pushes to `main` deploy.

That same workflow deploys the whole tree to Pages, `data/figures.json`
included (the Figure Ledger fetches it at runtime) and `content/*.md`
included (useful to anyone reading the sources directly).

## The content model and the build step

Every page's prose still lives in `content/*.md`, hand-edited exactly as
before. The difference from a pure "edit and reload" workflow is one
generation step:

```bash
node scripts/build.js
# or: npm run build
```

Edit a `.md` file (or `data/figures.json`), run the build script, reload the
page. This is the one deliberate build step in the project, traded
specifically so pages are real static HTML rather than an empty shell that
JavaScript fills in at runtime — see "Why a build step" below.

`scripts/build.js` reads `content/*.md` and `data/figures.json` and writes
one `.html` file per page at the repository root (`index.html`,
`what-shipped.html`, `ledger.html`, etc. — see the `TABS` array at the top of
the script for the full list and the tab-label-to-file mapping) plus
`llms.txt`. It needs Node (no other dependency) and does not touch anything
under `content/` or `data/`.

Each of the six module files (`module-a.md` … `module-f.md`) is split into
three depth tiers using HTML comment delimiters that already exist in the
files:

```
<!-- TIER:30s -->
<!-- TIER:5min -->
<!-- TIER:full -->
```

Everything **before** the first delimiter is the page header — the `# H1`
title and the `**Question:**` line — and is always shown above the tier
switcher. The build script splits the raw Markdown text on these delimiter
strings *before* handing each segment to the Markdown parser, so the HTML
comments themselves never reach the renderer, then renders each tier to a
separate `<div class="tier-panel">` in the generated HTML.

Files with no `<!-- TIER: -->` markers at all (`intro.md`, `reconciliation.md`)
render as a single flowing document with no tier switcher. `devcon-pitch.md`
carries a single `<!-- TIER:full -->` marker by design (see its stub content) —
since only one tier exists, it also renders without a switcher, and (per the
original design) without the "copy for an LLM" affordance either.

The `**Question:**` line is detected and styled as a callout automatically;
you don't need to add any markup for it — just keep the line as
`**Question:** ...` at the top of the file, as the existing files already do.

Two things are load-bearing and shouldn't be removed when editing content:

- The italic connective note at the top of each full-report tier (it points
  readers to the Reconciliation page).
- The `<!-- TIER:... -->` delimiters and their exact spelling.

## Why a build step

The site used to be a single-page app: one `index.html` shell, hash-based
routing (`#/what-shipped`), and `assets/app.js` fetching each `content/*.md`
file and rendering it client-side. That works fine for a browser with
JavaScript enabled, but a plain HTTP GET — which is how most "point an LLM at
this URL" integrations actually fetch a page — got back an almost-empty
`<div id="main-content">`, since nothing renders until JS runs and a hash
route resolves.

Rendering each page to real HTML ahead of time fixes that at the cost of a
"run this script after editing" step instead of "just reload." The tier
switcher and the "copy for an LLM" affordance are still no-JS by design: the
former is a CSS radio-button hack (`.tier-radio` + `:checked` sibling
selectors in `assets/styles.css`), and the latter is a `<details>` element
holding a read-only `<textarea>` with the full report text, which any
JavaScript-disabled reader can open and select-all/copy by hand. `assets/app.js`
only adds a one-click "Copy to clipboard" button on top of that textarea, and
does the same for a small per-`###`-section copy button (sourced from a
`data-copy-section` attribute the build script stamps onto each `<h3>`).

## Editing content

Just edit the `.md` files under `content/`, run `node scripts/build.js`, and
reload. Supported Markdown: `#`/`##`/`###` headings, `**bold**`, `*italic*`,
`` `inline code` ``, `[links](https://example.com)`, pipe tables, `-` bullet
lists, `1.` numbered lists, `>` blockquotes, and `---` horizontal rules — the
full subset the vendored parser understands (see below), and the full subset
the existing content actually uses.

Source links follow one convention: an entity is linked on its **first
mention within each tier**, because the 30-second, 5-minute and full-report
tiers render as separate panels and a link in one is invisible from the
others. Prefer a stable primary destination (the regulator's circular, the
statute, the operator's own product page, the data provider's live page) over
a news write-up, and check the URL resolves before committing it. External
links open in a new tab; when a page is printed, each link's destination is
printed after it.

## Editing the Figure Ledger

The ledger page is entirely data-driven from `data/figures.json`. To add or
edit a figure, add or edit an object in the `figures` array, e.g.:

```json
{
  "id": 140,
  "module": "C",
  "claim": "Some claim",
  "figure": "42",
  "unit": "%",
  "as_of": "Jan 2027",
  "as_of_sort": "2027-01-01",
  "source": "Some source",
  "tier": "T2",
  "flags": []
}
```

Run `node scripts/build.js` and reload. A few notes:

- `as_of_sort` must be an ISO date (`YYYY-MM-DD`) or `null` for evergreen/
  undated figures (statutes, current rates). It drives sorting and the
  staleness computation.
- **Staleness is computed from data, not hand-flagged**: a row is flagged
  `STALE` (amber) if its `as_of_sort` is older than `meta.staleness_cutoff`
  and its `flags` do not include `HISTORICAL` or `CURRENT`. Editing
  `meta.staleness_cutoff`, or a row's date, changes the flagging on the next
  build automatically. This logic lives once, in `assets/ledger-core.js`,
  and is imported by both the build script (the static table) and
  `assets/ledger.js` (the JS-enhanced interactive table), so the two can
  never disagree.
- `tier` can be a single tier (`T3`) or a composite (`T1/T2`) where a claim is
  cross-sourced; filtering and the tier chip colour both key off the weakest
  (highest-numbered) tier present in the string.
- `meta.row_count` is informational only — the "Showing N of M" count and all
  filtering always use the actual length of the `figures` array.

`ledger.html` ships with the full table (all rows, all columns, staleness and
tier colouring already computed) statically rendered — so it reads correctly
with no JavaScript at all. When JS is available, `assets/app.js` fetches
`data/figures.json` and replaces that static table with the interactive
version from `assets/ledger.js` (module/tier/flag filters, free-text search,
column sort, and a one-click per-row citation-copy button). If the fetch
fails — e.g. some browsers restrict `fetch()` of local files under
`file://` — the static table stays in place, which is a real (if
less convenient) ledger, not an error message.

## The vendored Markdown parser

`vendor/minimark.js` is a small (~150-line), dependency-free Markdown-to-HTML
renderer written for this project and released under the MIT licence (full
text at the top of the file). It was written in-house rather than pulling in
an existing library because the original build spec required no network
access or CDN fetches at runtime, and no third-party parser could be vendored
without first downloading it from somewhere. It's a pure string-in,
string-out function with no DOM dependency, which is why `scripts/build.js`
can import and run it directly under Node as well as in the browser. It
intentionally covers only the Markdown subset the content actually uses (see
"Editing content" above) — no nested lists, fenced code blocks, images, or
reference links — which keeps it easy to audit. Inline links are rendered
only for `http(s)`, page-relative and fragment targets; anything else (a
`javascript:` or `data:` URL, or a URL carrying a quote character) is left as
literal text rather than turned into an anchor.

## llms.txt

`scripts/build.js` also writes `llms.txt` at the repository root — a plain
Markdown index (following the emerging `llms.txt` convention) listing every
page and the raw Figure Ledger JSON, for any tool that checks for it before
crawling.

## No browser storage

Tier selection is plain CSS radio-button state, which the browser itself
keeps per open tab and resets on reload — there is no `localStorage` or
`sessionStorage` call anywhere in `assets/` or `vendor/`, by design (the team
explicitly didn't want browser storage used, partly because this portal is
also meant to run from `file://`, where storage can be blocked or
partitioned unpredictably).

## Where the research came from

`Research Prompts/` holds the deep-research prompts that produced this
evidence base, one per module plus a master block and a reconciliation pass.
`Research Prompts/README.txt` gives the run order (A and B first, since C and
E depend on them), the two failure modes to check any output against, and the
standing note that **Module B should be re-run periodically** — India's
regulatory perimeter moves month to month while the rest has a longer shelf
life.

`research/raw/` holds the unedited outputs of those runs. They are the source
the tiered `content/*.md` files were cut down from, kept for provenance; the
build script does not read them. To refresh a module: re-run its prompt, save
the output to `research/raw/`, then edit the corresponding `content/module-*.md`
down into the three tiers and update any affected rows in `data/figures.json`.

`BUILD-SPEC.md` is the original brief the portal was built from, kept for
provenance. Two of its sections have since been superseded: the "no build
step" constraint (the site is now pre-rendered — see "Why a build step"), and
the `BUILD = 'internal' | 'public'` flag with its `internalOnly` tab config,
which no longer exists because the whole evidence base, Reconciliation page
included, is published.

## Licence

Code — `scripts/`, `assets/`, `vendor/` — is MIT (see `LICENSE`);
`vendor/minimark.js` carries its own MIT notice. The research prose and data —
`content/`, `data/`, `research/` and `Research Prompts/` — is CC BY 4.0.
