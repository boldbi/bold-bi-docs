// HelpBot Assistant - client-side only
(function () {
	if (typeof window === 'undefined' || typeof document === 'undefined') return;
	if (window.__helpBotLoaded) return;
	window.__helpBotLoaded = true;

	// State
	let isOpen = false;
	let isLoading = false;
	// Helpers
	function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
	function qsa(sel, ctx) { return (ctx || document).querySelectorAll(sel); }
	function setNoteVisible(visible) {
		try { const note = qs('#helpbot-container .hb-ai-note'); if (note) note.style.display = visible ? 'block' : 'none'; } catch (e) { }
	}

	function updateNoteVisibility() {
		try {
			const msgs = qs('#helpbot-container .hb-messages');
			const note = qs('#helpbot-container .hb-ai-note');
			if (!note) return;
			// Consider persisted/in-memory messages as well as DOM children.
			const hasStored = Array.isArray(storedMessages) && storedMessages.length > 0;
			const hasDomMessages = msgs && msgs.children && msgs.children.length > 0;
			const hasMessages = hasStored || hasDomMessages;
			note.style.display = (!hasMessages && !isLoading) ? 'block' : 'none';
		} catch (e) { }
	}
	function escapeHtml(str) {
		if (str == null) return '';
		return String(str)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;');
	}

	// detect whether this page load is a full reload (not SPA navigation)
	function isPageReload() {
		try {
			if (performance && typeof performance.getEntriesByType === 'function') {
				const nav = performance.getEntriesByType('navigation');
				if (nav && nav.length) return nav[0].type === 'reload';
			}
		} catch (e) {
			// ignore
		}
		return false;
	}
	// Minimal markdown -> HTML renderer (supports headings, lists, code blocks, links)
	function renderMarkdown(md) {
		if (!md) return '';
		// Work on a string copy
		md = String(md);
		// Escape HTML to avoid injection
		md = md.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

		// Code blocks with optional language: ```lang\ncode``` or ```code```
		md = md.replace(/```(\w+)?\n([\s\S]*?)```/g, function (m, lang, code) {
			const cls = lang ? (' class="language-' + lang + '"') : '';
			return '<pre class="hb-code"><code' + cls + '>' + code.replace(/\n$/, '') + '</pre>';
		});

		// Headings
		md = md.replace(/^######\s+(.*)$/gim, '<h6>$1</h6>');
		md = md.replace(/^#####\s+(.*)$/gim, '<h5>$1</h5>');
		md = md.replace(/^####\s+(.*)$/gim, '<h4>$1</h4>');
		md = md.replace(/^###\s+(.*)$/gim, '<h3>$1</h3>');
		md = md.replace(/^##\s+(.*)$/gim, '<h2>$1</h2>');
		md = md.replace(/^#\s+(.*)$/gim, '<h1>$1</h1>');

		// Blockquotes
		md = md.replace(/(^|\n)>\s?(.*?)(?=\n|$)/g, function (m, p1, content) { return p1 + '<blockquote>' + content + '</blockquote>'; });

		// Images ![alt](url) - render as actual img tags
		md = md.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, function (m, alt, url) {
			const altText = (alt && alt.trim()) ? alt.trim() : 'image';
			return '<img src="' + url + '" alt="' + altText + '"" />';
		});

		// Links [text](url)
		md = md.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

		// Ordered lists (lines starting with `1. `)
		md = md.replace(/^\s*\d+\.\s+(.+)$/gm, '<li style="white-space:normal; word-break:break-word;">$1</li>');

		// Unordered lists (-, *, +)
		md = md.replace(/^(\s*[-*+]\s+)(.+)$/gm, '<li style="white-space:normal; word-break:break-word;">$2</li>');

		// Wrap consecutive <li> items into <ul>
		md = md.replace(/(?:<li>[\s\S]*?<\/li>\s*)+/g, function (m) {
			if (m.trim().startsWith('<li>')) return '<ul class="hb-list" style="list-style-position: inside; white-space: normal; margin:0 0 1em 0; padding-left:1.2em;">' + m + '</ul>';
			return m;
		});

		// Bold and italic
		md = md.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
		md = md.replace(/__(.*?)__/g, '<strong>$1</strong>');
		md = md.replace(/\*(.*?)\*/g, '<em>$1</em>');
		md = md.replace(/_(.*?)_/g, '<em>$1</em>');

		// Inline code `code`
		md = md.replace(/`([^`]+)`/g, '<code class="hb-inline">$1</code>');

		// Paragraphs for remaining lines that are not block elements
		md = md.replace(/^(?!<h|<ul|<ol|<pre|<li|<blockquote|<code|<p|<img|<br)(.+)$/gim, '<p>$1</p>');

		return md;
	}

	// Create UI
	function createChatContainer() {
		if (qs('#helpbot-container')) return qs('#helpbot-container');
		const container = document.createElement('div');
		container.id = 'helpbot-container';
		container.className = 'hb-hidden';
		container.innerHTML = `
      <div class="hb-panel">
        <div class="hb-header">
          <div class="hb-title">AI Assistant</div>
					<div class="hb-actions">
						<button class="hb-btn hb-clear" data-tooltip="Delete"><img src="https://cdn.boldbi.com/wp/home/clear.svg" alt="Clear" class="hb-icon" style="margin-top:3px;" width="16" /></button>
						<button class="hb-btn hb-close" data-tooltip="Close">✕</button>
					</div>
        </div>
		<div>
		  <div class="hb-ai-note">Responses are generated by AI and may contain inaccuracies.</div>
		</div>
        <div class="hb-body">
          <div class="hb-messages" role="log" aria-live="polite"></div>
        </div>
				<div class="hb-input">
					<input type="text" class="hb-text" placeholder="Ask about this page..." />
					<button class="hb-send" data-tooltip="Send">➤</button>
				</div>
      </div>
    `;
		// Placement: use fixed/right-side overlay so chat sits over the right TOC and is sticky.
		// Always append to body (fallback works on pages without right sidebar).
		document.body.appendChild(container);
		// Add fixed placement class so CSS makes it sticky and overlay the right side TOC.
		container.classList.add('hb-fixed');

		// Ensure helpbot sits below image overlays by default (low z-index)
		try {
			// Place helpbot above site chrome but below image overlays
			container.style.zIndex = '5000';
		} catch (e) { }
		// (No injected stylesheet — styles applied per-message via `applyChatMessageStyles`)
		// Attach listeners
		container.querySelector('.hb-close').addEventListener('click', hideChat);
		container.querySelector('.hb-clear').addEventListener('click', clearMessages);
		container.querySelector('.hb-send').addEventListener('click', onSendClick);
		container.querySelector('.hb-text').addEventListener('keydown', function (e) {
			if (e.key === 'Enter') { e.preventDefault(); onSendClick(); }
		});
		// restore persisted messages (if any)
		try { restoreStoredMessages(); } catch (e) { /* ignore */ }
		return container;
	}

	// Inject global styles to ensure image/lightbox overlays appear above the helpbot
	function ensureOverlayStyles() {
		try {
			if (document.getElementById('helpbot-overlay-fix')) return;
			const s = document.createElement('style');
			s.id = 'helpbot-overlay-fix';
			s.innerHTML = `
/* Keep helpbot underneath image/lightbox overlays so images are visible */
.hb-fixed, #helpbot-container { z-index: 5000 !important; }
.medium-zoom-overlay,
.medium-zoom-image,
.lightbox,
.fancybox-container,
.fancybox-bg,
.pswp,
.pswp__bg,
.react-image-lightbox,
.modal-image,
.zoom-overlay,
.img-zoom-overlay,
.image-lightbox,
.mfp-bg,
.mfp-wrap {
  z-index: 2147483647 !important;
  position: fixed !important;
}
`;
			document.head.appendChild(s);
		} catch (e) { /* ignore */ }
	}

	// Show / Hide
	function showChat() {
		const c = createChatContainer();
		// Do not clear messages on open — preserve conversation across navigation
		c.classList.remove('hb-hidden');
		isOpen = true;
		const input = c.querySelector('.hb-text');
		setTimeout(() => input.focus(), 50);
	}
	function hideChat() {
		const c = qs('#helpbot-container');
		if (!c) return;
		c.classList.add('hb-hidden');
		isOpen = false;
		// leave DOM and messages in place so reopening preserves history
	}
	function clearMessages() {
		const msgs = qs('#helpbot-container .hb-messages');
		if (msgs) msgs.innerHTML = '';
		isLoading = false;
		const input = qs('#helpbot-container .hb-text');
		if (input) input.disabled = false;
		// clear persisted messages too
		storedMessages = [];
		saveStoredMessages();
		// ensure assistant note reappears when no messages
		updateNoteVisibility();
	}
	// message persistence: in-memory + sessionStorage
	let storedMessages = [];

	function saveStoredMessages() {
		try {
			sessionStorage.setItem('helpbot_msgs', JSON.stringify(storedMessages));
		} catch (e) {
			// ignore storage errors
		}
	}

	function loadStoredMessages() {
		try {
			const s = sessionStorage.getItem('helpbot_msgs');
			return s ? JSON.parse(s) : [];
		} catch (e) {
			return [];
		}
	}

	function restoreStoredMessages() {
		const msgs = qs('#helpbot-container .hb-messages');
		if (!msgs) return;
		// Clear existing DOM messages to avoid duplicating messages when this
		// function is called multiple times during SPA navigation.
		msgs.innerHTML = '';
		storedMessages = loadStoredMessages() || [];
		storedMessages.forEach(function (m) {
			const wrapper = document.createElement('div');
			wrapper.className = 'hb-msg ' + (m.side === 'user' ? 'hb-user' : 'hb-assistant');
			// Mark restored assistant messages as processed so we don't re-run updates
			if (m.side === 'assistant') wrapper.setAttribute('data-processed', 'true');
			if (m.meta) {
				if (m.meta.userText) wrapper.setAttribute('data-user-text', m.meta.userText);
				if (m.meta.pageSensitive) wrapper.setAttribute('data-page-sensitive', m.meta.pageSensitive ? 'true' : 'false');
				if (m.meta.pageUrl) wrapper.setAttribute('data-page-url', m.meta.pageUrl);
			}
			wrapper.innerHTML = '<div class="hb-msg-content">' + m.html + '</div>';
			msgs.appendChild(wrapper);
			// Ensure chat-specific inline styles so heading sizes and list indents apply
			try { applyChatMessageStyles(wrapper); } catch (e) { /* ignore */ }
		});
		msgs.scrollTop = msgs.scrollHeight;
		// Update assistant note visibility depending on whether we have messages
		updateNoteVisibility();
	}

	function appendMessage(html, side, meta) {
		const msgs = qs('#helpbot-container .hb-messages');
		if (!msgs) return;
		const wrapper = document.createElement('div');
		wrapper.className = 'hb-msg ' + (side === 'user' ? 'hb-user' : 'hb-assistant');
		if (meta) {
			if (meta.userText) wrapper.setAttribute('data-user-text', meta.userText);
			if (meta.pageSensitive) wrapper.setAttribute('data-page-sensitive', meta.pageSensitive ? 'true' : 'false');
		}
		// If the meta includes a page URL, attach it to the DOM so we can
		// avoid re-running page-sensitive updates for messages from other pages.
		if (meta && meta.pageUrl) wrapper.setAttribute('data-page-url', meta.pageUrl);
		// Mark assistant messages as processed to avoid unnecessary reprocessing later
		if (side === 'assistant') wrapper.setAttribute('data-processed', 'true');
		wrapper.innerHTML = '<div class="hb-msg-content">' + html + '</div>';
		msgs.appendChild(wrapper);
		// Apply inline styles to headings and list items to ensure they render as intended
		try { applyChatMessageStyles(wrapper); } catch (e) { /* ignore */ }
		msgs.scrollTop = msgs.scrollHeight;

		// persist message
		storedMessages.push({ html: html, side: side, meta: meta || null, ts: Date.now() });
		saveStoredMessages();
		// Update assistant note visibility depending on whether we have messages
		updateNoteVisibility();
	}

	// Apply inline chat-specific styles to ensure heading sizes, line-heights and list indents
	function applyChatMessageStyles(wrapper) {
		if (!wrapper) return;
		const content = wrapper.querySelector('.hb-msg-content');
		if (!content) return;
		// Headings
		const h1s = content.querySelectorAll('h1');
		h1s.forEach(h => { h.style.fontSize = '16px'; h.style.lineHeight = '24px'; });
		const h2s = content.querySelectorAll('h2');
		h2s.forEach(h => { h.style.fontSize = '15px'; h.style.lineHeight = '24px'; });
		const h3s = content.querySelectorAll('h3');
		h3s.forEach(h => { h.style.fontSize = '14.5px'; h.style.lineHeight = '24px'; });
		const h4to6 = content.querySelectorAll('h4,h5,h6');
		h4to6.forEach(h => { h.style.fontSize = '14px'; h.style.lineHeight = '24px'; });
		// List items indent
		const lis = content.querySelectorAll('li');
		lis.forEach(li => { li.style.marginLeft = '10px'; li.style.whiteSpace = 'normal'; li.style.wordBreak = 'break-word'; });
		// Anchors: set color and add hover handlers (inline hover since we're removing stylesheet)
		const anchors = content.querySelectorAll('a');
		anchors.forEach(a => {
			a.style.color = '#0366d6';
			a.style.textDecoration = 'none';
			a.style.cursor = 'pointer';
			// Ensure underline on hover via events
			a.addEventListener('mouseenter', function () { a.style.textDecoration = 'underline'; a.style.color = '#024e9a'; });
			a.addEventListener('mouseleave', function () { a.style.textDecoration = 'none'; a.style.color = '#0366d6'; });
		});

		// Add copy buttons for code fences (<pre class="hb-code")
		try {
			const pres = content.querySelectorAll('pre.hb-code');
			pres.forEach(pre => {
				if (pre._hbHasCopy) return;
				// allow absolutely-positioned button inside pre
				if (!pre.style.position) pre.style.position = 'relative';
				const btn = document.createElement('button');
				btn.className = 'hb-copy-btn';
				// Do not set any hover tooltip — only show the transient copied tooltip on click.
				btn.setAttribute('aria-label', 'Copy code');
				// use a simple text button instead of an SVG icon
				btn.textContent = 'Copy';

				btn.addEventListener('click', async function () {
					// perform copy; on success/failure show temporary label change
					const original = btn.textContent;
					try {
						await navigator.clipboard.writeText(pre.innerText);
						btn.textContent = 'Copied';
					} catch (err) {
						try {
							const range = document.createRange();
							range.selectNodeContents(pre);
							const sel = window.getSelection();
							sel.removeAllRanges();
							sel.addRange(range);
							document.execCommand('copy');
							sel.removeAllRanges();
							btn.textContent = 'Copied';
						} catch (e) {
							btn.textContent = 'Failed';
						}
					}
					try { btn.blur(); } catch (e) { }
					setTimeout(function () { try { btn.textContent = original; } catch (e) { } }, 1500);
				});

				// Keep the copy button visually fixed when the <pre> is scrolled horizontally
				try {
					btn.style.willChange = 'transform';
					const updateBtnTransform = function () {
						try { btn.style.transform = 'translateX(' + pre.scrollLeft + 'px)'; } catch (e) { }
					};
					pre.addEventListener('scroll', function () { try { window.requestAnimationFrame(updateBtnTransform); } catch (e) { updateBtnTransform(); } });
					// initialize position
					updateBtnTransform();
				} catch (e) { /* ignore transform errors */ }

				pre.appendChild(btn);
				pre._hbHasCopy = true;
			});
		} catch (e) { /* ignore copy button errors */ }

	}

	function showProcessing() {
		appendMessage('<div class="hb-processing">Processing your request. Please wait<span class="hb-dots">...</span></div>', 'assistant');
	}
	function removeProcessing() {
		const msgs = qsa('.hb-processing');
		msgs.forEach(m => { const p = m.closest('.hb-msg'); if (p) p.remove(); });
		// remove any persisted processing entries
		storedMessages = storedMessages.filter(function (m) { return !(/hb-processing/.test(m.html)); });
		saveStoredMessages();
	}
	async function callApi(query) {
		try {
			const resp = await fetch("https://staginghelp.boldbi.com/dev/assistant", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ query })
			});

			const data = await resp.json().catch(() => ({}));

			if (!resp.ok) {
				// Show backend-friendly error if available
				return data?.error || 'We’re unable to process your request right now. Please try again.';
			}

			// Success response
			return data?.answer ||
				'Sorry, we couldn’t find an answer for your question. Please try rephrasing it.';

		} catch (err) {
			console.error('HelpBot API error', err);

			return 'Something went wrong while connecting to the server. Please try again later.';
		}
	}
	async function submitQuery(text) {
		if (!text || isLoading) return;
		isLoading = true;
		const container = qs('#helpbot-container');
		const input = container.querySelector('.hb-text');
		input.disabled = true;

		// hide the AI assistant note while a request is processing
		try { setNoteVisible(false); } catch (e) { }
		// User message
		appendMessage('<div class="hb-raw">' + escapeHtml(text) + '</div>', 'user');
		// Processing indicator
		showProcessing();
		// // API call
		// const answer = await callApi(text);
		// Build rephrased, self-contained query that includes the documentation page context
		const rephrased = buildRephrasedQuery(text);

		// API call using the rephrased query
		const answer = await callApi(rephrased);
		// Replace processing with answer
		removeProcessing();

		// Append assistant message (store metadata so page-sensitive updates work)
		const assistantHtml = renderMarkdown(answer);
		const pageSensitive = isPageSensitiveQuery(text);
		const meta = { userText: text, pageSensitive: pageSensitive, pageUrl: pageSensitive ? getPageUrl() : null };
		appendMessage(assistantHtml, 'assistant', meta);
		// Re-enable input after assistant response is shown
		try {
			isLoading = false;
			const inputEl = qs('#helpbot-container .hb-text');
			if (inputEl) {
				inputEl.disabled = false;
				inputEl.focus();
			}
			// restore assistant note visibility based on current messages/loading state
			try { updateNoteVisibility(); } catch (e) { }
		} catch (e) { /* ignore */ }
	}

	// Detect whether a user query requests a description/summary of the current page.
	// Matches a variety of phrasings like "what is the page about", "explain the page",
	// "summarize this page", etc.
	function isPageSensitiveQuery(userQuery) {
		if (!userQuery) return false;
		const q = userQuery.trim().toLowerCase();
		const patterns = [
			/^what (is|does) (this )?page( about)?\b/,
			/^(explain|summarize|summary|what is this page|what is the page about|tell me about this page)\b/,
			/^give (me )?a summary\b/,
			/summarize (this|the) page\b/,
			/^what (is|does) .* page about\b/
		];
		return patterns.some(p => p.test(q));
	}

	// Return canonical help.boldbi.com URL for the current path (used to tag page-sensitive messages).
	function getPageUrl() {
		let path = '/';
		try {
			path = window.location && window.location.pathname ? window.location.pathname : '/';
		} catch (e) {
			path = '/';
		}
		if (path.length > 1 && path.endsWith('/')) path = path.replace(/\/+$/, '');
		return 'https://help.boldbi.com' + (path === '/' ? '' : path);
	}

	// click handler for send button and Enter key
	function onSendClick() {
		const input = qs('#helpbot-container .hb-text');
		if (!input) return;
		const v = input.value ? input.value.trim() : '';
		if (!v) return;
		submitQuery(v);
		input.value = '';
		input.focus();
	}
	// Build a self-contained rephrased query including the doc page context.
	// For any page (localhost, staging, prod) we only care about the path
	// and will prefix it with the canonical domain https://help.boldbi.com
	function buildRephrasedQuery(userQuery) {
		if (!userQuery) return userQuery;

		// simple greeting detection: return unchanged
		const greetings = /^(hi|hello|hey|thanks|thank you|bye|how are you|good morning|good evening)\b/i;
		if (greetings.test(userQuery.trim())) return userQuery;

		// capture pathname including nested segments
		let path = '/';
		try {
			path = window.location && window.location.pathname ? window.location.pathname : '/';
		} catch (e) {
			path = '/';
		}
		// normalize: remove trailing slash unless it's root
		if (path.length > 1 && path.endsWith('/')) path = path.replace(/\/+$/, '');

		// Build canonical page URL using help.boldbi.com as base
		const pageUrl = 'https://help.boldbi.com' + (path === '/' ? '' : path);

		// If the user is asking about the page, include a snapshot of the page text
		// so the API can answer without needing to crawl the site.
		const pageSensitive = isPageSensitiveQuery(userQuery);
		let pageContentSection = '';
		if (pageSensitive) {
			try {
				const selectors = ['.docs-content', '.markdown', '.doc-body', '#main', 'main', 'article', '.content'];
				let text = '';
				for (let i = 0; i < selectors.length; i++) {
					const el = qs(selectors[i]);
					if (el && el.innerText && el.innerText.trim()) { text = el.innerText; break; }
				}
				if (!text) text = (document.body && document.body.innerText) ? document.body.innerText : '';
				// normalize whitespace and limit length to avoid huge payloads
				text = text.replace(/\s+/g, ' ').trim().slice(0, 6000);
				if (text) pageContentSection = `\n\nPAGE CONTENT (truncated):\n${text}\n\n`;
			} catch (e) { /* ignore page extraction errors */ }
		}

		// Construct the rephrase instruction similar to Syncfusion's server-side logic,
		// but simplified for Bold BI docs: output only the final standalone query.
		const prompt = `CURRENT PAGE CONTEXT (THIS IS THE MOST IMPORTANT): URL: ${pageUrl}${pageContentSection}
  Please rephrase the following user message into a single, standalone question that is explicit about the documentation page context above. Output ONLY the final rephrased query.
  User message: ${userQuery}`;
		return prompt;
	}

	function updatePageSensitiveResponses() {
		const assistantMsgs = qsa('#helpbot-container .hb-messages .hb-msg.hb-assistant[data-page-sensitive="true"]');
		if (!assistantMsgs || !assistantMsgs.length) return;

		// hide assistant note while updating content
		setNoteVisible(false);
		const currentUrl = getPageUrl();

		assistantMsgs.forEach(async function (el) {

			// Skip messages that have already been processed to avoid re-running
			// network calls when returning to the same page via SPA navigation.
			if (el.getAttribute && el.getAttribute('data-processed') === 'true') return;
			const msgPageUrl = el.getAttribute('data-page-url') || '';
			// Only update messages that were created for THIS page (do not overwrite previous-page summaries)
			if (!msgPageUrl || msgPageUrl !== currentUrl) return;

			const userText = el.getAttribute('data-user-text') || 'what is this page';
			const contentEl = el.querySelector('.hb-msg-content');

			if (contentEl) {
				contentEl.innerHTML = '<div class="hb-processing">Processing... <span class="hb-dots">...</span></div>';
			}

			try {
				const rephrased = buildRephrasedQuery(userText);
				const answer = await callApi(rephrased);

				if (contentEl) {
					contentEl.innerHTML = renderMarkdown(answer);
				}
			} catch (e) {
				if (contentEl) {
					contentEl.innerHTML = '<div class="hb-raw">Sorry, could not update content.</div>';
				}
			}
		});
		// restore assistant note after updates finish (small delay to avoid flicker)
		// Use updateNoteVisibility so stored/in-memory messages are respected
		setTimeout(function () { try { updateNoteVisibility(); } catch (e) { } }, 120);
	}

	// ✅ Global access (for Ask button)
	window.openHelpBotUI = function () {
		// If the in-memory state says open but the DOM container or input is
		// missing (happens during SPA navigation), recreate/show the chat.
		const input = qs('#helpbot-container .hb-text');
		if (!isOpen || !input) {
			showChat();
		} else {
			input.focus();
		}
	};

	(function () {
		const _wr = function (type) {
			const orig = window.history[type];
			return function () {
				const rv = orig.apply(this, arguments);
				window.dispatchEvent(new Event('locationchange'));
				return rv;
			};
		};

		window.history.pushState = _wr('pushState');
		window.history.replaceState = _wr('replaceState');

		window.addEventListener('popstate', function () {
			window.dispatchEvent(new Event('locationchange'));
		});

		window.addEventListener('locationchange', function () {
			// Ensure chat DOM exists on SPA navigation; createChatContainer will
			// restore persisted messages itself, so do not call restoreStoredMessages here.
			try { createChatContainer(); } catch (e) { }
			updatePageSensitiveResponses();
		});
	})();

	// Init
	function init() {
		try {
			// If this is a full page reload, clear persisted messages so chat is fresh
			if (isPageReload()) {
				try {
					storedMessages = [];
					sessionStorage.removeItem('helpbot_msgs');
				} catch (e) { /* ignore */ }
			}
			// Ensure DOM insertion for chat so it can be toggled later
			createChatContainer();
			// Ensure overlay fix styles are present so image overlays render above chat
			ensureOverlayStyles();

			const zoomContainer = document.getElementById('zoom-image-container');
			const zoomImage = document.getElementById('zoom-image');

			document.addEventListener('click', (e) => {
				const img = e.target.closest('.hb-msg-content img');

				if (img && zoomContainer && zoomImage) {
					zoomContainer.style.display = 'flex';
					zoomImage.src = img.src;
				}
			});

		} catch (e) {
			console.error('HelpBot init error', e);
		}
	}

	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		setTimeout(init, 50);
	} else {
		document.addEventListener('DOMContentLoaded', init);
	}
})();