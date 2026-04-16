import React from 'react';
import { createRoot } from 'react-dom/client';
import FocusMode from './FocusMode';
import '../assets/css/content.css';

class MdContents extends React.Component {

	componentDidMount() {
		this.initHeaderClicks();
		this.insertReadTime();
		// run inline code->tabs transformer safely (can be disabled via window.__disableInlineCodeTabs)
		try {
			if (typeof window === 'undefined' || !window.__disableInlineCodeTabs) this.initInlineCodeTabs();
		} catch (err) {
			// prevent transformer errors from bubbling up and breaking page render
			if (typeof console !== 'undefined') console.error('initInlineCodeTabs error:', err);
		}
		this.initTabs();
		this.initCopyButtons();
		this.initImageZoom();
		// initialize advanced tab runtime and attach handlers for tab-containers
		if (typeof window !== 'undefined') {
			this.initDocTabsRuntime();
			// this.renderTab();
		}
		// content search (gcse) helpers available but not auto-started here
	}

	insertReadTime() {
		if (typeof document === 'undefined') return;
		const mdCnt = document.getElementById('md-content');
		if (!mdCnt) return;
		try {
			const text = (mdCnt.innerText || '').trim();
			const words = text ? text.split(/\s+/).length : 0;
			const wpm = 200; // words per minute
			const mins = Math.max(1, Math.round(words / wpm));
			const h1 = mdCnt.querySelector('h1');
			if (!h1) return;
			// remove existing read-time element if any
			const existing = mdCnt.querySelector('.read-time');
			if (existing) existing.parentNode.removeChild(existing);

			const el = document.createElement('div');
			el.className = 'read-time';
			const minsText = mins > 1 ? `${mins} mins read` : `${mins} min read`;

			const lastUpdated = this.props.lastUpdated;

			let updatedText = '';
			if (lastUpdated) {
				const formatted = new Date(lastUpdated).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
					day: '2-digit'
				});
				updatedText = `<span class="last-updated-text">Updated: ${formatted}</span>`;
			}

			// Only show the date icon and container when we have an updated date
			const dateHtml = lastUpdated ? (`<span class="bd-icon bd-custom-date"></span><span class="date">${updatedText}</span>`) : '';

			el.innerHTML = `
							<div class="read-time-left">
								<span class="bd-icon bd-icon-clock"></span>
								<span class="read-time-text">${minsText}</span>
								${dateHtml}
							</div>
							<div class="read-time-right">
								<div class="focus-mode-placeholder"></div>
							</div>
						`;

			// insert after the H1
			if (h1.nextSibling) h1.parentNode.insertBefore(el, h1.nextSibling);
			else h1.parentNode.appendChild(el);

			// mount FocusMode into placeholder
			try {
				const placeholder = el.querySelector('.focus-mode-placeholder');
				if (placeholder && FocusMode) {
					try {
						const root = createRoot(placeholder);
						root.render(React.createElement(FocusMode, null));
						this.__cleanups = (this.__cleanups || []).concat([() => {
							try {
								// Defer unmount to avoid race conditions during render
								Promise.resolve().then(() => root.unmount());
							} catch (_) { }
							if (el.parentNode) el.parentNode.removeChild(el);
						}]);
					} catch (_) { /* ignore */ }
				} else {
					this.__cleanups = (this.__cleanups || []).concat([() => { if (el.parentNode) el.parentNode.removeChild(el); }]);
				}
			} catch (err) {
				this.__cleanups = (this.__cleanups || []).concat([() => { if (el.parentNode) el.parentNode.removeChild(el); }]);
			}
		} catch (err) {
			if (typeof console !== 'undefined') console.warn('insertReadTime error', err);
		}
	}

	componentWillUnmount() {
		// remove any attached listeners added by the helpers
		if (this.__cleanups) {
			try { this.__cleanups.forEach(fn => fn && fn()); } catch (_) { }
		}
	}

	initHeaderClicks() {
		const mdCnt = document.getElementById('md-cnt') || document.getElementById('md-content');
		if (!mdCnt) { console.warn('MdContents: no #md-cnt or #md-content container found'); return; }
		const heads = mdCnt.querySelectorAll('h1, h2, h3, h4');
		const handlers = [];

		// ensure a single tooltip element for anchor copy actions
		if (typeof document !== 'undefined') {
			let at = document.getElementById('anchor_tooltip');
			if (!at) {
				at = document.createElement('div');
				at.id = 'anchor_tooltip';
				at.className = 'custom-tooltip anchor-tooltip';
				at.style.position = 'fixed';
				at.style.opacity = '0';
				at.style.pointerEvents = 'none';
				at.style.transition = 'opacity 150ms ease';
				document.body.appendChild(at);
				this.__cleanups = (this.__cleanups || []).concat([() => { const el = document.getElementById('anchor_tooltip'); if (el && el.parentNode) el.parentNode.removeChild(el); }]);
			}
		}

		heads.forEach(h => {
			const fn = (e) => {
				const a = h.querySelector('a') || (e.srcElement && e.srcElement.querySelector && e.srcElement.querySelector('a'));
				if (a && a.click) a.click();
			};
			h.addEventListener('click', fn);
			handlers.push(() => h.removeEventListener('click', fn));

			// if the heading contains an anchor link (the visible link icon),
			// intercept direct user clicks on that anchor to copy the full URL to clipboard
			const anchor = h.querySelector('a');
			if (anchor) {
				// per-anchor state for copied timeout
				let copiedTimer = null;
				let lastMouseEvent = null;
				const showTip = (text, e) => {
					const tip = document.getElementById('anchor_tooltip');
					if (!tip || !e) return;
					const offset = 24;
					tip.textContent = text;
					tip.style.left = e.clientX + 'px';
					tip.style.top = (e.clientY + offset) + 'px';
					tip.style.transform = 'translateX(-38%)';
					tip.style.opacity = '1';
				};
				const hideTip = () => { const tip = document.getElementById('anchor_tooltip'); if (tip) tip.style.opacity = '0'; };
				const onAnchorMouseMove = (ev) => { lastMouseEvent = ev; showTip('Copy link', ev); };
				const onAnchorMouseLeave = () => { if (copiedTimer) { clearTimeout(copiedTimer); copiedTimer = null; } lastMouseEvent = null; hideTip(); };
				const onAnchorClick = (ev) => {
					try {
						if (!ev || ev.isTrusted === false) return;
						ev.preventDefault();
						ev.stopPropagation();
						const href = anchor.getAttribute('href') || anchor.href || '';
						const full = (href.indexOf('http') === 0) ? href : (window.location.origin + window.location.pathname + href);
						if (navigator.clipboard && navigator.clipboard.writeText) {
							navigator.clipboard.writeText(full).catch(() => {});
						} else {
							const ta = document.createElement('textarea');
							ta.value = full; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (_) {} ta.parentNode.removeChild(ta);
						}
						// show copied tooltip briefly at last mouse position (fallback to event)
						showTip('Copied', lastMouseEvent || ev);
						if (copiedTimer) clearTimeout(copiedTimer);
						copiedTimer = setTimeout(() => { hideTip(); copiedTimer = null; }, 1400);
					} catch (_) { }
				};
				anchor.addEventListener('click', onAnchorClick);
				anchor.addEventListener('mousemove', onAnchorMouseMove);
				anchor.addEventListener('mouseleave', onAnchorMouseLeave);
				handlers.push(() => anchor.removeEventListener('click', onAnchorClick));
				handlers.push(() => anchor.removeEventListener('mousemove', onAnchorMouseMove));
				handlers.push(() => anchor.removeEventListener('mouseleave', onAnchorMouseLeave));
			}
		});
		this.__cleanups = (this.__cleanups || []).concat(handlers);
	}

	initTabs() {
		// simple tab activation for any .tab-container inside content
		const containers = document.querySelectorAll('.tab-container');
		const handlers = [];
		containers.forEach(container => {
			const tabs = container.querySelectorAll('.tab');
			const contents = container.querySelectorAll('.tab-content');
			const clickFns = [];
			tabs.forEach(tab => {
				const fn = () => {
					tabs.forEach(t => t.classList.remove('active'));
					contents.forEach(c => c.classList.remove('active'));
					tab.classList.add('active');
					const id = tab.getAttribute('data-tab');
					const content = container.querySelector('#' + id);
					if (content) content.classList.add('active');
				};
				tab.addEventListener('click', fn);
				clickFns.push(() => tab.removeEventListener('click', fn));
			});
			handlers.push(...clickFns);
		});
		this.__cleanups = (this.__cleanups || []).concat(handlers);
	}

	// Transform inline heading + list + consecutive code-blocks into a .tab-container
	initInlineCodeTabs() {
		if (typeof document === 'undefined') return;
		const mdCnt = document.getElementById('md-cnt') || document.getElementById('md-content');
		if (!mdCnt) { console.warn('MdContents: no #md-cnt or #md-content container found'); return; }
		const headings = mdCnt.querySelectorAll('h2, h3, h4');
		let processed = 0;
		const MAX_PROCESS = 200;
		headings.forEach(h => {
			if (++processed > MAX_PROCESS) return; // safety limit
			const ul = h.nextElementSibling;
			if (!ul || ul.tagName !== 'UL') return;
			const liEls = Array.from(ul.querySelectorAll('li'));
			if (!liEls.length) return;

			// collect consecutive code-block wrappers or <pre> elements after the list
			const blocks = [];
			let cursor = ul.nextElementSibling;
			while (cursor && blocks.length < liEls.length) {
				if (cursor.classList && cursor.classList.contains('code-block-wrapper')) blocks.push(cursor);
				else if (cursor.tagName === 'PRE') {
					// wrap plain pre in a temporary wrapper so markup stays consistent
					const wrap = document.createElement('div');
					wrap.className = 'code-block-wrapper';
					cursor.parentNode.insertBefore(wrap, cursor);
					wrap.appendChild(cursor);
					blocks.push(wrap);
				}
				cursor = cursor.nextElementSibling;
			}
			if (blocks.length !== liEls.length) return; // must match counts

			// create tab container
			const container = document.createElement('div');
			container.className = 'tab-container';

			// header with tabs (tabs aligned right)
			const header = document.createElement('div');
			header.className = 'tab-header';
			const left = document.createElement('div');
			left.className = 'tab-file-header';
			// use heading text as file title if sensible
			const fileIcon = document.createElement('span');
			fileIcon.className = 'file-icon';
			const fileNameSpan = document.createElement('span');
			fileNameSpan.className = 'file-name';
			fileNameSpan.textContent = h.textContent.trim() || 'File';
			left.appendChild(fileIcon);
			left.appendChild(fileNameSpan);
			const tabsWrap = document.createElement('div');
			tabsWrap.className = 'tabs';

			// contents container
			const contents = document.createElement('div');
			contents.className = 'tab-contents';

			// populate tabs and contents
			const unique = String(Math.random()).slice(2);
			liEls.forEach((li, idx) => {
				const tab = document.createElement('button');
				tab.className = 'tab';
				const id = `tab-${unique}-${idx}`;
				tab.setAttribute('data-tab', id);
				tab.setAttribute('type', 'button');
				// sanitize label: remove common bullet characters and trim whitespace
				const raw = li.textContent || '';
				const label = raw.replace(/^[\u2022\u00B7\u2023\u2024\u2027\u00A7*\-\u2028\s]+/, '').trim();
				tab.textContent = label || `tab-${idx}`;
				tabsWrap.appendChild(tab);

				const panel = document.createElement('div');
				panel.className = 'tab-content';
				panel.id = id;

				// move corresponding block into panel
				panel.appendChild(blocks[idx]);
				contents.appendChild(panel);
			});

			header.appendChild(left);
			header.appendChild(tabsWrap);
			container.appendChild(header);
			container.appendChild(contents);

			// insert the container before the first block and remove the original list
			const firstBlock = blocks[0];
			firstBlock.parentNode.insertBefore(container, firstBlock);
			// move each panel (already contains block) is enough; the original blocks were moved
			ul.parentNode.removeChild(ul);
			// keep heading (h) but if needed we can remove it. For now keep it as title.

			// mark first tab active
			const firstTab = container.querySelector('.tab');
			const firstPanel = container.querySelector('.tab-content');
			if (firstTab) firstTab.classList.add('active');
			if (firstPanel) firstPanel.classList.add('active');
		});
	}

	/* Tab runtime: moved here from layout to keep tab-related behavior with md content */
	initDocTabsRuntime(retry = 0) {
		if (typeof window === 'undefined' || typeof document === 'undefined') return;

		const updateActiveTab = (tabEl) => {
			const container = tabEl.closest('.tab-container');
			if (!container) return;
			const allTabs = container.querySelectorAll('.tab-header .tabs .tab');
			const allPanels = container.querySelectorAll('.tab-contents .tab-content');
			const fileNameSpan = container.querySelector('.tab-file-header .file-name');
			const fileIcon = container.querySelector('.tab-file-header .file-icon');
			const selectEl = container.querySelector('.tab-header .tab-dropdown-wrap select.tab-dropdown');

			allTabs.forEach(t => {
				t.classList.remove('active');
				if (!container.__hasMultipleMarkedActive) t.classList.remove('active-marked');
				t.setAttribute('aria-selected', 'false');
				t.setAttribute('tabindex', '-1');
			});
			allPanels.forEach(p => {
				p.classList.remove('active');
				p.setAttribute('aria-hidden', 'true');
			});

			tabEl.classList.add('active');
			tabEl.setAttribute('aria-selected', 'true');
			tabEl.setAttribute('tabindex', '0');

			const targetId = tabEl.getAttribute('data-tab');
			const targetPanel = container.querySelector(`#${CSS.escape(targetId)}`);
			if (targetPanel) {
				targetPanel.classList.add('active');
				targetPanel.setAttribute('aria-hidden', 'false');
			}

			const fileName = tabEl.getAttribute('data-file') || '';
			if (fileNameSpan) fileNameSpan.textContent = fileName;

			if (selectEl) {
				const tabsArr = Array.from(allTabs);
				const idx = tabsArr.indexOf(tabEl);
				if (idx > -1) selectEl.value = String(idx);
			}

			const rawLang = (tabEl.getAttribute('data-lang') || '').toLowerCase().trim();
			const shellLangs = ['sh', 'shell', 'bash', 'cmd', 'powershell'];
			const iconClass = shellLangs.includes(rawLang) ? 'icon-terminal' : 'icon-doc';
			if (fileIcon) fileIcon.className = 'file-icon ' + iconClass;
		};

		const buildDropdownInHeader = (container) => {
			if (container.querySelector('.tab-header .custom-dropdown')) return;
			const header = container.querySelector('.tab-header');
			const tabs = container.querySelectorAll('.tab-header .tabs .tab');
			// if there's only one tab, don't create a dropdown — show the tab normally
			if (!header || tabs.length <= 1) return;
			const wrap = document.createElement('div');
			wrap.className = 'tab-dropdown-wrap';
			const dropdown = document.createElement('div');
			dropdown.className = 'custom-dropdown';
			const selected = document.createElement('div');
			selected.className = 'custom-dropdown-selected';
			const firstActiveTab = Array.from(tabs).find(t => t.classList.contains('active')) || tabs[0];
			selected.textContent = firstActiveTab.textContent.trim();
			const ul = document.createElement('ul');
			ul.className = 'custom-dropdown-options';
			tabs.forEach((tab, idx) => {
				const li = document.createElement('li');
				li.textContent = tab.textContent.trim();
				li.dataset.index = idx;
				if (tab.classList.contains('active')) li.classList.add('active');
				li.addEventListener('click', () => {
					updateActiveTab(tab);
					dropdown.classList.remove('open');
					ul.querySelectorAll('li').forEach(o => o.classList.remove('active'));
					li.classList.add('active');
					selected.textContent = li.textContent;
				});
				ul.appendChild(li);
			});
			selected.addEventListener('click', (e) => { e.stopPropagation(); dropdown.classList.toggle('open'); });
			dropdown.appendChild(selected);
			dropdown.appendChild(ul);
			wrap.appendChild(dropdown);
			header.appendChild(wrap);
			// mark header so CSS only hides tabs when dropdown exists
			header.classList.add('has-dropdown');
			document.addEventListener('click', () => dropdown.classList.remove('open'));
		};

		const wireTabGroup = (container) => {
			if (container.__tabsWired) return;
			container.__tabsWired = true;
			const tabs = container.querySelectorAll('.tab-header .tabs .tab');
			if (!tabs.length) return;
			const markedActiveTabs = container.querySelectorAll('.tab-header .tabs .tab.active-marked');
			container.__hasMultipleMarkedActive = markedActiveTabs.length > 1;
			buildDropdownInHeader(container);
			const handlers = new Map();
			tabs.forEach(tab => {
				const onClick = () => updateActiveTab(tab);
				const onKeyDown = (e) => {
					const key = e.key; const tabsArr = Array.from(tabs); const idx = tabsArr.indexOf(tab);
					if (key === 'ArrowRight' || key === 'ArrowLeft') {
						e.preventDefault();
						const nextIdx = key === 'ArrowRight' ? (idx + 1) % tabsArr.length : (idx - 1 + tabsArr.length) % tabsArr.length;
						tabsArr[nextIdx].focus(); updateActiveTab(tabsArr[nextIdx]);
					} else if (key === 'Home') { e.preventDefault(); tabsArr[0].focus(); updateActiveTab(tabsArr[0]); }
					else if (key === 'End') { e.preventDefault(); tabsArr[tabsArr.length - 1].focus(); updateActiveTab(tabsArr[tabsArr.length - 1]); }
					else if (key === 'Enter' || key === ' ') { e.preventDefault(); updateActiveTab(tab); }
				};
				tab.addEventListener('click', onClick);
				tab.addEventListener('keydown', onKeyDown);
				handlers.set(tab, { onClick, onKeyDown });
			});
			const active = container.querySelector('.tab-header .tabs .tab.active') || tabs[0];
			if (active) updateActiveTab(active);
			container.__tabHandlers = handlers;
		};

		const wireAll = () => { document.querySelectorAll('.tab-container').forEach(wireTabGroup); };
		wireAll();

		window.__cleanupDocTabsRuntime = function () {
			document.querySelectorAll('.tab-container').forEach(container => {
				const handlers = container.__tabHandlers;
				if (handlers) {
					handlers.forEach((h, tab) => { tab.removeEventListener('click', h.onClick); tab.removeEventListener('keydown', h.onKeyDown); });
					delete container.__tabHandlers;
				}
					const wrap = container.querySelector('.tab-header .tab-dropdown-wrap');
					if (wrap && wrap.parentNode) wrap.parentNode.removeChild(wrap);
					const header = container.querySelector('.tab-header');
					if (header) header.classList.remove('has-dropdown');
				const old = container.querySelector('.tab-contents .tab-dropdown-wrap');
				if (old && old.parentNode) old.parentNode.removeChild(old);
			});
		};
	}

	initCopyButtons() {
		const mdCnt = document.getElementById('md-cnt') || document.getElementById('md-content');
		if (!mdCnt) { console.warn('MdContents: no #md-cnt or #md-content container found'); return; }
		const pres = mdCnt.querySelectorAll('pre');
		const handlers = [];
		pres.forEach(pre => {
			const wrapper = document.createElement('div');
			wrapper.className = 'code-block-wrapper';

			// create copy button container (kept separate for positioning)
			const btn = document.createElement('div');
			btn.className = 'copy-button';
			btn.innerHTML = '<span class="copy-button-tooltip">Copy</span>';

			// insert wrapper and move the <pre> inside it, then append the button
			pre.parentNode.insertBefore(wrapper, pre);
			wrapper.appendChild(pre);
			wrapper.appendChild(btn);

			const onClick = async (e) => {
				if (btn.dataset.locked) return;
				btn.dataset.locked = 'true';
				const text = pre.innerText;
				try {
					await navigator.clipboard.writeText(text);
					const tip = btn.querySelector('.copy-button-tooltip');
					if (tip) tip.textContent = 'Copied';
					btn.classList.add('copied');
				} catch (_) { /* ignore */ }
				setTimeout(() => {
					delete btn.dataset.locked;
					const tip = btn.querySelector('.copy-button-tooltip');
					if (tip) tip.textContent = 'Copy';
					btn.classList.remove('copied');
				}, 1500);
			};
			const onEnter = () => {
				const tip = btn.querySelector('.copy-button-tooltip');
				if (tip && !btn.classList.contains('copied')) tip.textContent = 'Copy';
			};
			const onLeave = () => {
				const tip = btn.querySelector('.copy-button-tooltip');
				if (tip && !btn.classList.contains('copied')) tip.textContent = 'Copy';
			};
			btn.addEventListener('click', onClick);
			btn.addEventListener('mouseenter', onEnter);
			btn.addEventListener('mouseleave', onLeave);
			handlers.push(() => btn.removeEventListener('click', onClick));
			handlers.push(() => btn.removeEventListener('mouseenter', onEnter));
			handlers.push(() => btn.removeEventListener('mouseleave', onLeave));
		});
		this.__cleanups = (this.__cleanups || []).concat(handlers);
	}

	initImageZoom() {
		var imageZoom = '<div id="zoom-image-container">' +
							'<div id="zoom-image-center">' +
								'<span id="zoom-image-close">&#10006;</span>' +
								'<img id="zoom-image">' +
							'</div>' +
						'</div>';
		
		document.body.insertAdjacentHTML('beforeend', imageZoom);

		var getImage = document.querySelectorAll("#md-content img");
		var zoomImageContainer = document.getElementById("zoom-image-container");
		var zoomImage = document.getElementById("zoom-image");
		var zoomImageClose = document.getElementById("zoom-image-close");

		Array.from(getImage).forEach(getImage => {
			getImage.onclick = function () {
				zoomImageContainer.style.display = "flex";
				zoomImage.src = this.src;
			}
		});

		zoomImageClose.onclick = function () {
			zoomImageContainer.style.display = "none";
		}
	}

	render() {
		const { html } = this.props;
		return (
			<>
				<article id="md-content" dangerouslySetInnerHTML={{ __html: html }} />
			</>
		);
	}
}

export default MdContents;
