// The "explore this with your own LLM" widget, shared by both surfaces:
// evidence.html (via scripts/build.js) and index.html (via scripts/narrative.js).
//
// One copy of the prompt text, so the two pages cannot drift apart. {{BASE_URL}}
// is a placeholder the static build cannot resolve — the real address is only
// known at runtime, so assets/app.js and assets/narrative.js each substitute it
// on load. A reader with JavaScript off gets the placeholder and a one-line
// instruction to replace it by hand.

function escapeHtmlText(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export const OVERVIEW_PROMPT = `Please fetch {{BASE_URL}}llms.txt first. It indexes the twelve pages of "Ethereum and Distributed Settlement Infrastructure in Indian Institutional Finance": seven module reports, a Figure Ledger carrying a source tier and date on every claim, a Reconciliation page, and the Devcon pitch. Then read the Overview at {{BASE_URL}}evidence.html and open whichever module pages look most relevant.

Before you answer, use what you already know about me from memory and our past conversations: what I work on, what I follow, what I have asked you before. If you know nothing about me, ask me that first.

Then give me a handful of bullet points about Ethereum's institutional potential in India that I'm least likely to already know, each with a line on why it is new or useful for me specifically. Flag the source tier (T1–T5) behind anything surprising; roughly a fifth of this report rests on the weakest two.

Stay ready for my follow-ups: a specific module, a number in the Figure Ledger, or an objection I want pressure-tested.`;

export function renderLandingPromptCta() {
  return `<div class="landing-prompt" id="llm">
    <details class="landing-prompt-details js-copy-widget" data-copy-label="a personalized exploration prompt">
      <summary class="landing-prompt-summary">Copy a personalized prompt — explore this report with your own LLM</summary>
      <div class="landing-prompt-panel">
        <p class="landing-prompt-hint">Paste this into ChatGPT, Claude, Gemini, or any LLM that can fetch a URL. With JavaScript on, the box below already has this page's real address in it. Reading without JavaScript? Swap the <code>{{BASE_URL}}</code> placeholder for this page's address before you paste.</p>
        <textarea class="copy-textarea landing-prompt-textarea" readonly rows="14" aria-label="Personalized prompt for exploring this report with an LLM">${escapeHtmlText(OVERVIEW_PROMPT)}</textarea>
      </div>
    </details>
  </div>`;
}
