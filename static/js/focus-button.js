let baseHelpDomain = location.origin;

if (!baseHelpDomain.includes("boldbi.com")) {
    baseHelpDomain = "https://help.boldbi.com";
}

// Handles clicks on Focus dropdown items using event delegation
async function handleFocusDropdownItemClick(event) {
    const actionHandlers = {
        ".focus-helpbot": () => openHelpBot(),
        ".focus-copy-md": () => copyMarkdownContent(),
        ".focus-view-md": () => openMarkdownInNewTab(),
        ".focus-open-chatgpt": () => openAIChatWindow("https://chat.openai.com/"),
        ".focus-open-claude": () => openAIChatWindow("https://claude.ai/"),
        ".focus-connect-with-mcp": () => copyMcpServerUrl()
    };

    for (const selector in actionHandlers) {
        const clickedItem = event.target.closest(selector);

        if (clickedItem) {
            event.stopPropagation(); // Prevent dropdown close
            actionHandlers[selector]();
            return;
        }
    }
}

// Handles Focus button toggle and outside click close
function handleFocusToggleClick(event) {
    const focusToggleButton = event.target.closest(".focus-toggle");
    const focusDropdown = document.querySelector(".focus-dropdown");

    if (!focusDropdown) return;
    if (focusToggleButton) {
        // toggle open/close and position the dropdown under the clicked toggle
        const isOpen = focusDropdown.classList.contains('is-open');
        if (!isOpen) {
            focusToggleButton.classList.add("focus-arrow-up");
            // move dropdown to body so fixed positioning is reliable
            if (focusDropdown.parentNode !== document.body) {
                focusDropdown.__origParent = focusDropdown.parentNode;
                focusDropdown.__origNext = focusDropdown.nextSibling;
                document.body.appendChild(focusDropdown);
            }
            focusDropdown.classList.add("is-open");
            try {
                const rect = focusToggleButton.getBoundingClientRect();
                // position relative to the document so the dropdown scrolls with the page
                focusDropdown.style.position = 'absolute';
                // compute width fallback
                const ddWidth = focusDropdown.offsetWidth || focusDropdown.getBoundingClientRect().width || 260;
                let left = rect.right - ddWidth;
                left += window.scrollX;
                if (left + ddWidth > window.scrollX + window.innerWidth - 8) left = Math.max(window.scrollX + 8, window.scrollX + window.innerWidth - ddWidth - 8);
                if (left < 8) left = 8;
                focusDropdown.style.left = left + 'px';
                focusDropdown.style.top = (rect.bottom + window.scrollY) + 'px';
            } catch (e) { /* ignore position errors */ }
            return;
        } else {
            focusToggleButton.classList.remove("focus-arrow-up");
            focusDropdown.classList.remove("is-open");
            focusDropdown.style.position = '';
            focusDropdown.style.left = '';
            focusDropdown.style.top = '';
            // move dropdown back to original container if we relocated it
            try {
                if (focusDropdown.__origParent) {
                    if (focusDropdown.__origNext && focusDropdown.__origNext.parentNode === focusDropdown.__origParent) {
                        focusDropdown.__origParent.insertBefore(focusDropdown, focusDropdown.__origNext);
                    } else {
                        focusDropdown.__origParent.appendChild(focusDropdown);
                    }
                    delete focusDropdown.__origParent;
                    delete focusDropdown.__origNext;
                }
            } catch (_) {}
            return;
        }
    }

    if (!event.target.closest(".focus-dropdown")) {
        focusDropdown.classList.remove("is-open"); // Close dropdown
        document.querySelectorAll(".focus-toggle").forEach(b => b.classList.remove('focus-arrow-up'));
        focusDropdown.style.position = '';
        focusDropdown.style.left = '';
        focusDropdown.style.top = '';
        try {
            if (focusDropdown.__origParent) {
                if (focusDropdown.__origNext && focusDropdown.__origNext.parentNode === focusDropdown.__origParent) {
                    focusDropdown.__origParent.insertBefore(focusDropdown, focusDropdown.__origNext);
                } else {
                    focusDropdown.__origParent.appendChild(focusDropdown);
                }
                delete focusDropdown.__origParent;
                delete focusDropdown.__origNext;
            }
        } catch (_) {}
    }
}

// Opens HelpBot in a new tab
function openHelpBot() {
    window.open("https://helpbot.boldbi.com", "_blank");
}

// Copies text to clipboard with modern and fallback support
async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
            return false;
        }
    }

    try {
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = text;
        tempTextarea.style.position = "fixed";
        tempTextarea.style.top = "-9999px";
        document.body.appendChild(tempTextarea);
        tempTextarea.select();

        const copied = document.execCommand("copy");
        document.body.removeChild(tempTextarea);
        return copied;
    } catch {
        return false;
    }
}

let isMarkdownCopying = false;

// Fetches markdown, removes YAML, and copies content
async function copyMarkdownContent() {
    if (isMarkdownCopying) return;
    isMarkdownCopying = true;

    const titleEl = document.querySelector(".focus-copy-md .focus-title");
    const descEl = document.querySelector(".focus-copy-md .focus-desc");

    const defaultTitle = titleEl?.textContent || "Copy Page";
    const defaultDesc = descEl?.textContent || "Copy markdown content";

    try {
        const markdownUrl = baseHelpDomain + location.pathname.replace(/\/$/, "") + ".md";
        const response = await fetch(markdownUrl);

        if (!response.ok) throw new Error("Markdown fetch failed");

        let markdownText = await response.text();

        if (markdownText.startsWith("---")) {
            markdownText = markdownText.replace(/^---[\s\S]*?---\s*/, "");
        }

        const isCopied = await copyText(markdownText);

        if (isCopied && titleEl && descEl) {
            titleEl.textContent = "Copied!";
            descEl.textContent = "Markdown copied to clipboard";

            setTimeout(() => {
                titleEl.textContent = defaultTitle;
                descEl.textContent = defaultDesc;
                isMarkdownCopying = false;
            }, 5000);
        } else {
            isMarkdownCopying = false;
        }
    } catch (error) {
        console.error("Markdown copy error:", error);
        isMarkdownCopying = false;
    }
}

// Opens markdown file in a new browser tab
function openMarkdownInNewTab() {
    const markdownUrl =
        baseHelpDomain + location.pathname.replace(/\/$/, "") + ".md";

    window.open(markdownUrl, "_blank");
}

// Opens AI chat with current page context
function openAIChatWindow(baseUrl) {
    const pageUrl = location.origin + location.pathname;
    const prompt = encodeURIComponent(
        `Read ${pageUrl} and answer questions about the content.`
    );

    window.open(`${baseUrl}?q=${prompt}`, "_blank", "noopener,noreferrer");
}

let isMcpUrlCopying = false;

// Copies MCP server URL to clipboard
async function copyMcpServerUrl() {
    if (isMcpUrlCopying) return;
    isMcpUrlCopying = true;

    const mcpUrl = "https://help.boldbi.com/mcpserver/mcp";
    const isCopied = await copyText(mcpUrl);

    const titleEl = document.querySelector(".focus-connect-with-mcp .focus-title");
    const descEl = document.querySelector(".focus-connect-with-mcp .focus-desc");

    if (isCopied && titleEl && descEl) {
        const originalTitle = titleEl.textContent;
        const originalDesc = descEl.textContent;

        titleEl.textContent = "Copied!";
        descEl.textContent = "MCP URL copied to clipboard";

        setTimeout(() => {
            titleEl.textContent = originalTitle;
            descEl.textContent = originalDesc;
            isMcpUrlCopying = false;
        }, 5000);
    } else {
        isMcpUrlCopying = false;
    }
}

// Updates Focus widget position based on layout changes
function updateFocusButtonPosition() {
    const rightToc = document.querySelector(".doc-body-content #doc-right-toc");
    const focusContainer = document.querySelector(".focus-container");
    const focusDropdown = document.querySelector(".focus-dropdown");

    if (!focusContainer || !focusDropdown) return;

    const isRightTocVisible =
        rightToc && window.getComputedStyle(rightToc).display === "block";

    focusContainer.classList.toggle("right-side", isRightTocVisible);
    focusDropdown.classList.toggle("right-side-show", !isRightTocVisible);
}

// Global event bindings
document.addEventListener("click", handleFocusToggleClick);
document.addEventListener("click", handleFocusDropdownItemClick);

// Header Ask AI button: open HelpBot when header button is clicked
function handleHeaderAskClick(event) {
    const askBtn = event.target.closest('.ask-main');
    if (!askBtn) return;
    event.stopPropagation();
    if (window.openHelpBotUI) {
        window.openHelpBotUI();
    } else {
        openHelpBot();
    }
}

document.addEventListener('click', handleHeaderAskClick);


// Initial positioning of Focus button
updateFocusButtonPosition();

// Recalculate Focus button position on window resize
window.addEventListener("resize", updateFocusButtonPosition);

// Recalculate Focus button position when Search button is clicked
// or Search Result close button is clicked
document.addEventListener("click", function (event) {
    const searchButton = event.target.closest(".gsc-search-button");
    const searchCloseButton = event.target.closest("#close-search-content");

    if (searchButton || searchCloseButton) {
        updateFocusButtonPosition();
    }
});

// Adjust Focus button when Enter is pressed in Search input
document.addEventListener(
    "keydown",
    function (event) {
        const searchInput = event.target.closest(".gsc-input");
        if (!searchInput) return;

        // Only trigger once per key press
        if ((event.key === "Enter" || event.keyCode === 13) && !event.repeat) {
            const focusContainer = document.querySelector(".focus-container");
            if (focusContainer) {
                // Remove 'right-side' class when Enter is pressed
                focusContainer.classList.remove("right-side");
            }
        }
    },
    true // Capture phase to handle Enter before Google CSE intercepts
);

// Export nothing; file runs for side-effects
