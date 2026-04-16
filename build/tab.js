const { marked } = require("marked");
const Prism = require("prismjs");
const loadLanguages = require("prismjs/components/index.js");

// Load Prism Languages
loadLanguages([
    "javascript",
    "typescript",
    "bash",
    "html",
    "css",
    "csharp",
    "php",
    "java",
    "python",
    "ruby",
    "powershell",
    "json",
    "yaml",
    "sql",
    "cpp",
    "c",
    "clike"
]);

// Language Aliases
const LANGUAGE_ALIASES = {
    sh: "bash",
    shell: "bash",
    cmd: "bash",
    js: "javascript",
    node: "javascript",
    ts: "typescript",
    py: "python",
    rb: "ruby",
    yml: "yaml",
    cs: "csharp",
    "c#": "csharp",
    dotnet: "csharp"
};

// Normalize Language
function normalizeLanguage(lang) {
    if (!lang) return "javascript";
    return lang.toLowerCase().replace(/\./g, "").split(/\s+/)[0];
}

// Custom Marked Renderer for Prism Highlighting
const customRenderer = new marked.Renderer();

customRenderer.code = (codeBlock, language) => {
    // Ensure codeBlock is always a string (Marked v5+)
    if (typeof codeBlock !== "string") {
        codeBlock = codeBlock?.text || String(codeBlock);
    }

    const normalizedLang = normalizeLanguage(language);
    const prismLang = LANGUAGE_ALIASES[normalizedLang] || normalizedLang;
    if (!Prism.languages[prismLang]) {
        return `<pre><code>${codeBlock}</code></pre>`;
    }
    const highlightedCode = Prism.highlight(codeBlock, Prism.languages[prismLang], prismLang);
    return `
<pre class="language-${prismLang}">
  <code class="language-${prismLang}">
${highlightedCode}
  </code>
</pre>`;
};
// Marked Configuration
marked.setOptions({
    renderer: customRenderer,
    gfm: true,
    headerIds: false,
    mangle: false
});
// Process Markdown inside a Tab
function processTabMarkdown(content) {
    return marked.parse(content);
}
function convertSingleTabsBlock(tabsBlock, tabGroupIndex) {
  const tabMatches = [...tabsBlock.matchAll(
    /:::TAB\s*(?:\[\s*['"](active)['"]\s*\])?\s*\[\s*['"]([^'"\n]+)['"]\s*\]\s*(?:\[\s*['"]([^'"\n]+)['"]\s*\])?\s*\n([\s\S]*?):::ENDTAB/g
  )];

  if (!tabMatches.length) return "";

  // Determine first [active] tab (fallback to first tab)
  let defaultActiveIndex = 1;
  for (let i = 0; i < tabMatches.length; i++) {
    if (tabMatches[i][1] === 'active') {
      defaultActiveIndex = i + 1; // 1-based index
      break;
    }
  }

  let tabHeadersHtml = "";
  let tabContentsHtml = "";
  let tabIndex = 0;

  let initialFileName = "";
  let groupLangForIcon = "";

  // Use first tab language as icon hint
  for (let i = 0; i < tabMatches.length; i++) {
    const [, , langRaw] = tabMatches[i];
    if (!groupLangForIcon) groupLangForIcon = (langRaw || "").trim().toLowerCase();
  }

  for (const match of tabMatches) {
    tabIndex++;

    const [, , langRaw, fileRaw, tabContentRaw] = match;
    const isMarkedActive = match[1] === 'active'; // comes from ['active']
const isActive = tabIndex === defaultActiveIndex ? "active" : "";
const activeClass = isMarkedActive ? "active-marked" : "";

    const tabId = `tab-${tabGroupIndex}-${tabIndex}`;
    const lang = (langRaw || "").trim();
    const fileName = (fileRaw || "").trim();

    if (isActive) {
      initialFileName = fileName || "";
    }

    // Tab header
    tabHeadersHtml += `
<li class="tab ${isActive}  ${activeClass}"
    data-tab="${tabId}"
    data-lang="${lang.toLowerCase()}"
    data-file="${escapeHtmlAttr(fileName)}"
    role="tab"
    aria-selected="${isActive ? "true" : "false"}"
    tabindex="${isActive ? "0" : "-1"}">
  ${escapeHtml(lang)}
</li>`.trim();

    // Tab content
    tabContentsHtml += `
<div class="tab-content ${isActive}"
     id="${tabId}"
     role="tabpanel"
     aria-hidden="${isActive ? "false" : "true"}">
  ${processTabMarkdown((tabContentRaw || "").trim())}
</div>`.trim();
  }

  return `
<div class="tab-container" data-tab-group="${tabGroupIndex}">
  <div class="tab-header">
    <div class="tab-file-header" data-lang="${escapeHtmlAttr(groupLangForIcon)}">
      <span class="file-icon"></span>
      <span class="file-name">${escapeHtml(initialFileName)}</span>
    </div>
    <ul class="tabs" role="tablist">
      ${tabHeadersHtml}
    </ul>
  </div>
  <div class="tab-contents">
    ${tabContentsHtml}
  </div>
</div>`.trim();
}

// --- helper to escape text nodes ---
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// --- helper to escape attribute values ---
function escapeHtmlAttr(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Convert all :::TABS blocks in content
 */
function createTab(markdownContent) {
  if (!markdownContent.includes(":::TABS")) return markdownContent;

  let tabGroupCounter = 0;
  return markdownContent.replace(
    /:::TABS[\s\S]*?:::ENDTABS/gm,
    (tabsBlock) => {
      tabGroupCounter++;
      return convertSingleTabsBlock(tabsBlock, tabGroupCounter);
    }
  );
}
// Exports
module.exports = { createTab };