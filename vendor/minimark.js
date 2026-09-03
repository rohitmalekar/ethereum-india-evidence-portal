/*!
 * minimark.js — a minimal Markdown-to-HTML renderer.
 *
 * Supports exactly the subset of Markdown used by this portal's content
 * files: headings (#/##/###), bold, italic, inline code, unordered and
 * ordered lists (single level), pipe tables, blockquotes, horizontal
 * rules, inline links, and paragraphs. Nothing else is attempted — no
 * nested lists, no fenced code blocks, no images, no reference links.
 *
 * Written for this project because the build spec forbids fetching a
 * parser from a CDN at runtime and requires everything to be vendored
 * locally. Original code, no third-party source.
 *
 * MIT License
 *
 * Copyright (c) 2026
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Inline-level formatting: code spans, then links, then bold, then italic.
function renderInline(text) {
  let s = escapeHtml(text);

  // Inline code: `text`
  s = s.replace(/`([^`]+)`/g, (_, code) => `<code>${code}</code>`);

  // Inline links: [label](url). Only http(s), page-relative and fragment
  // targets are linked; anything else (javascript:, data:, a stray quote in
  // the URL) is left as literal text rather than rendered as an anchor.
  // `escapeHtml` above has already turned & into &amp;, which is what the
  // href attribute wants. External links open in a new tab.
  s = s.replace(/\[([^\]\n]+)\]\(([^)\s]+)\)/g, (whole, label, url) => {
    if (/["'<>`]/.test(url)) return whole;
    if (!/^(https?:\/\/|\/|#|\.{0,2}\/|[\w-]+\.html)/.test(url)) return whole;
    const rel = /^https?:\/\//.test(url)
      ? ' target="_blank" rel="noopener noreferrer"'
      : '';
    return `<a href="${url}"${rel}>${label}</a>`;
  });

  // Bold: **text**
  s = s.replace(/\*\*(.+?)\*\*/g, (_, inner) => `<strong>${inner}</strong>`);

  // Italic: *text* (single asterisks only, not already consumed by bold)
  s = s.replace(/\*([^*]+?)\*/g, (_, inner) => `<em>${inner}</em>`);

  return s;
}

function isTableSeparator(line) {
  const cells = line.trim().replace(/^\||\|$/g, '').split('|');
  return cells.length > 0 && cells.every(c => /^\s*:?-{2,}:?\s*$/.test(c));
}

function splitTableRow(line) {
  return line.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());
}

function renderTable(lines) {
  const headerCells = splitTableRow(lines[0]);
  const bodyRows = lines.slice(2).map(splitTableRow);

  let html = '<div class="table-scroll"><table>';
  html += '<thead><tr>';
  headerCells.forEach(cell => {
    html += `<th scope="col">${renderInline(cell)}</th>`;
  });
  html += '</tr></thead><tbody>';
  bodyRows.forEach(row => {
    html += '<tr>';
    row.forEach(cell => {
      html += `<td>${renderInline(cell)}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table></div>';
  return html;
}

/**
 * Render a Markdown string to an HTML string.
 * @param {string} markdown
 * @returns {string}
 */
export function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Blank line: skip
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Horizontal rule: a line of three or more dashes, nothing else
    if (/^-{3,}\s*$/.test(line.trim())) {
      out.push('<hr>');
      i++;
      continue;
    }

    // Heading
    const headingMatch = line.match(/^(#{1,4})\s+(.*)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      out.push(`<h${level}>${renderInline(headingMatch[2].trim())}</h${level}>`);
      i++;
      continue;
    }

    // Table: current line starts with |, next line is a separator row
    if (line.trim().startsWith('|') && i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
      const tableLines = [line];
      let j = i + 1;
      tableLines.push(lines[j]);
      j++;
      while (j < lines.length && lines[j].trim().startsWith('|')) {
        tableLines.push(lines[j]);
        j++;
      }
      out.push(renderTable(tableLines));
      i = j;
      continue;
    }

    // Blockquote: contiguous lines starting with >
    if (line.trim().startsWith('>')) {
      const quoteLines = [];
      let j = i;
      while (j < lines.length && lines[j].trim().startsWith('>')) {
        quoteLines.push(lines[j].trim().replace(/^>\s?/, ''));
        j++;
      }
      out.push(`<blockquote>${renderMarkdown(quoteLines.join('\n'))}</blockquote>`);
      i = j;
      continue;
    }

    // Unordered list: contiguous lines starting with "- "
    if (/^-\s+/.test(line.trim())) {
      const items = [];
      let j = i;
      while (j < lines.length && /^-\s+/.test(lines[j].trim())) {
        items.push(lines[j].trim().replace(/^-\s+/, ''));
        j++;
      }
      out.push('<ul>' + items.map(it => `<li>${renderInline(it)}</li>`).join('') + '</ul>');
      i = j;
      continue;
    }

    // Ordered list: contiguous lines starting with "1. " etc.
    if (/^\d+\.\s+/.test(line.trim())) {
      const items = [];
      let j = i;
      while (j < lines.length && /^\d+\.\s+/.test(lines[j].trim())) {
        items.push(lines[j].trim().replace(/^\d+\.\s+/, ''));
        j++;
      }
      out.push('<ol>' + items.map(it => `<li>${renderInline(it)}</li>`).join('') + '</ol>');
      i = j;
      continue;
    }

    // Paragraph: contiguous plain lines until a blank line or a new block starts
    {
      const paraLines = [];
      let j = i;
      while (
        j < lines.length &&
        lines[j].trim() !== '' &&
        !/^(#{1,4})\s+/.test(lines[j]) &&
        !/^-{3,}\s*$/.test(lines[j].trim()) &&
        !lines[j].trim().startsWith('>') &&
        !/^-\s+/.test(lines[j].trim()) &&
        !/^\d+\.\s+/.test(lines[j].trim()) &&
        !(lines[j].trim().startsWith('|') && j + 1 < lines.length && isTableSeparator(lines[j + 1]))
      ) {
        paraLines.push(lines[j]);
        j++;
      }
      if (paraLines.length > 0) {
        out.push(`<p>${renderInline(paraLines.join(' ').trim())}</p>`);
        i = j;
      } else {
        // Safety valve: shouldn't happen, but avoid infinite loop
        i++;
      }
    }
  }

  return out.join('\n');
}
