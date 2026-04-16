import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import summaryDocs from '../../docs/summary-docs.json';
import summaryAdmin from '../../docs/summary-admin.json';
import summaryDeployment from '../../docs/summary-deployment.json';
import summaryApi from '../../docs/summary-api.json';
import summaryConnect from '../../docs/summary-connect.json';
import summaryEmbedding from '../../docs/summary-embedding.json';

import '../assets/css/lefttoc.css';

function removeMisc(s) {
	if (!s) return '';
	if (typeof s !== 'string') return '';
	return s.split('?')[0].replace(/\.md$/, '').trim();
}

// Build a normalized node structure recursively so we can render arbitrary depth
function buildNode(title, node, parentBase) {
	if (typeof node === 'string') {
		const path = removeMisc(node) === '/' ? '/' : `/${removeMisc(node)}/`;
		return { title, path };
	}

	const base = (node && node.slug) ? removeMisc(node.slug) : title.toLowerCase().replace(/\s+/g, '-');
	const path = `${parentBase}/${base}/`.replace(/\/\/+/, '/');

	const children = [];

	if (node && typeof node.pages === 'object') {
		Object.keys(node.pages).forEach((childTitle) => {
			const childVal = node.pages[childTitle];
			if (typeof childVal === 'string') {
				const childPath = `${path}${removeMisc(childVal)}/`.replace(/\/\/+/g, '/');
				children.push({ title: childTitle, path: childPath });
			} else {
				// nested section object inside `pages`
				children.push(buildNode(childTitle, childVal, path));
			}
		});
	}

	Object.keys(node || {}).forEach((k) => {
		if (k === 'slug' || k === 'pages') return;
		const v = node[k];
		children.push(buildNode(k, v, path));
	});

	return { title, path, children };
}

function generateToc(json) {
	const result = [];
	Object.keys(json || {}).forEach((k) => {
		const node = json[k];
		if (typeof node === 'string') {
			const path = removeMisc(node) === '/' ? '/' : `/${removeMisc(node)}/`;
			result.push({ type: 'link', title: k, path });
		} else {
			const built = buildNode(k, node, '');
			result.push({ type: 'section', ...built });
		}
	});
	return result;
}

const showGlobalTooltip = (e, text) => {
	const tip = document.getElementById('global-tooltip');
	if (!tip) return;

	tip.textContent = text;
	const offset = 24;
	tip.style.left = e.clientX + 'px';
	tip.style.top = (e.clientY + offset) + 'px';
	tip.style.transform = 'translateX(-38%)';
	tip.style.opacity = '1';
};

const hideGlobalTooltip = () => {
	const tip = document.getElementById('global-tooltip');
	if (tip) tip.style.opacity = '0';
};

export default function LeftToc() {
	const [activeTab, setActiveTab] = useState(() => {
		if (typeof window === 'undefined') return 'Docs';
		return window.localStorage.getItem('docsTab') || 'Docs';
	});

    const toc = useMemo(() => {
        const summaryMap = {
            'Docs': summaryDocs,
            'Deploy & Setup': summaryDeployment,
            'Connect Data': summaryConnect,
            'Embedding': summaryEmbedding,
            'Admin': summaryAdmin,
            'API Reference': summaryApi,
        };
        return generateToc((summaryMap[activeTab] || {}) );
    }, [activeTab]);
    const flattened = useMemo(() => {
        const out = [];
        function walk(node) {
            if (!node) return;
            if (node.title && node.path) out.push({ title: node.title, path: node.path });
            if (node.children && node.children.length) node.children.forEach(walk);
        }
        toc.forEach(t => walk(t));
        return out;
    }, [toc]);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const searchRef = useRef(null);


	//const toc = useMemo(() => generateToc((summaryMap[activeTab] || {}) ), [activeTab]);
	const pathname = (typeof window !== 'undefined' && window.location && window.location.pathname) ? window.location.pathname : '/';

	const topLevelPaths = useMemo(() => toc.filter((t) => t.type === 'section').map((t) => t.path), [toc]);

	// Grouping helper: build groups from defs matching section titles.
	// Match is case-insensitive and whitespace-normalized so small title
	// differences (e.g. "In" vs "in") won't break grouping.
	const buildGroupsFromDefs = (sections, defs) => {
		const normalize = (t) => (t || '').toString().trim().replace(/\s+/g, ' ').toLowerCase();
		const remaining = sections.slice();
		const groups = [];
		defs.forEach((def) => {
			const defKeysNorm = (def.keys || []).map(normalize);
			const matched = [];
			for (let i = remaining.length - 1; i >= 0; i--) {
				const s = remaining[i];
				const sNorm = normalize(s && s.title);
				if (defKeysNorm.includes(sNorm)) {
					matched.unshift(s);
					remaining.splice(i, 1);
				}
			}
			if (matched.length) groups.push({ title: def.title, items: matched });
		});
		if (remaining.length) groups.push({ title: 'More', items: remaining });
		return groups;
	};

	// For Docs and Deploy & Setup tabs: build explicit groups based on known
	// section titles so the left TOC matches the requested grouping.
	const groupedToc = useMemo(() => {
		const sections = toc.filter((t) => t.type === 'section');
		if (!sections || !sections.length) return null;

		if (activeTab === 'Docs') {
			const defs = [

				{ title: 'GETTING STARTED', keys: ['Overview', 'Quick Start'] },
				{ title: 'CREATING DASHBOARDS', keys: ['Getting Started', 'Visualizations'] },
				{ title: 'WORKING WITH DASHBOARDS', keys: ['Dashboards'] },
				{ title: 'AI AND MACHINE LEARNING', keys: ['AI and Machine Learning'] },
				{ title: 'RESPONSIVE AND MOBILE ACCESS', keys: ['Responsive Layout', 'Mobile App'] },
				{ title: 'USE CASES', keys: ['Transformation Use Cases'] },
			];
			return buildGroupsFromDefs(sections, defs);
			}

			if (activeTab === 'Deploy & Setup') {
			const defs = [

				{ title: 'GETTING STARTED', keys: ['Deployment', 'Application Startup'] },
				{ title: 'MAINTENANCE AND RECOVERY', keys: ['Utilities', 'Disaster Recovery'] },
			];
			return buildGroupsFromDefs(sections, defs);
			}

			// Admins tab grouping
			if (activeTab === 'Admin') {
			const defs = [

				{ title: 'ADMINISTRATION', keys: ['Site Administration', 'Resource Management'] },
				{ title: 'SECURITY', keys: ['Security Configuration', 'Multi-Tenancy'] },
				{ title: 'CUSTOMIZATION', keys: ['White Labeling', 'Localization',] },
				{ title: 'INTEGRATION & AUTOMATION', keys: ['Webhooks'] },
				{ title: 'MONITORING', keys: ['Monitoring'] },
				{ title: 'MIGRATION', keys: ['Resource Migration'] },
			];
			return buildGroupsFromDefs(sections, defs);
			}

		// For other tabs, don't group specially
		return null;
	}, [toc, activeTab]);

	// initial open state: open nodes whose path is a prefix of current pathname
	const initialOpen = useMemo(() => {
		const m = {};
		function visit(node) {
			if (!node || !node.path) return;
			if (node.children && node.children.length) {
				m[node.path] = Boolean(pathname.startsWith(node.path));
				node.children.forEach(visit);
			}
		}
		toc.forEach((t) => { if (t.type === 'section') visit(t); });
		return m;
	}, [toc, pathname]);

	const [openMap, setOpenMap] = useState(initialOpen);

	// Keep openMap in sync when initialOpen changes (e.g., on tab/pathname changes)
	useEffect(() => {
		setOpenMap(initialOpen);
	}, [initialOpen]);

	// listen for tab changes dispatched from the header
	React.useEffect(() => {
		function onTabChange(e) {
			const newTab = (e && e.detail) ? e.detail : (window.localStorage.getItem('docsTab') || 'Docs');
			setActiveTab(newTab);
		}
		window.addEventListener('docsTabChanged', onTabChange);
		return () => window.removeEventListener('docsTabChanged', onTabChange);
	}, []);

	// On mount, ensure active tab matches the current pathname (handles page refresh)
	React.useEffect(() => {
		if (typeof window === 'undefined') return;
		try {
			const pathname = window.location && window.location.pathname ? window.location.pathname : '/';
			const summaryMap = {
				'Docs': summaryDocs,
				'Deploy & Setup': summaryDeployment,
				'Connect Data': summaryConnect,
				'Embedding': summaryEmbedding,
				'Admin': summaryAdmin,
				'API Reference': summaryApi,
			};
			let matched = null;
			Object.keys(summaryMap).forEach((tabKey) => {
				try {
					const json = summaryMap[tabKey] || {};
					const t = generateToc(json);
					const paths = [];
					function walk(n) {
						if (!n) return;
						if (n.path) paths.push(n.path);
						if (n.children && n.children.length) n.children.forEach(walk);
					}
					t.forEach(walk);
					if (paths.some(p => p && (pathname === p || pathname.startsWith(p)))) matched = tabKey;
				} catch (e) { /* ignore per-tab errors */ }
			});
			if (matched && matched !== activeTab) {
				setActiveTab(matched);
				try { window.localStorage.setItem('docsTab', matched); } catch (e) { }
			}
		} catch (e) { /* ignore */ }
	}, []);

	const toggleOpen = (path, level) => {
		setOpenMap((prev) => {
			const next = { ...prev };
			const isOpen = Boolean(prev[path]);
			if (level === 0) {
				// close other top-level sections
				topLevelPaths.forEach((p) => { next[p] = false; });
				next[path] = !isOpen;
			} else {
				next[path] = !isOpen;
			}
			return next;
		});
	};

	// collapsed state and handlers
	const [collapsed, setCollapsed] = useState(() => {
		try { return localStorage.getItem('leftTocCollapsed') === 'true'; } catch { return false; }
	});

	useEffect(() => {
		if (typeof document === 'undefined') return;
		document.body.classList.toggle('left-hidden', collapsed);
	}, [collapsed]);

	const toggleCollapse = (e) => {
		if (e && e.preventDefault) e.preventDefault();
		const next = !collapsed;
		// ensure tooltip is hidden when toggling
		try { hideGlobalTooltip(); } catch (_) { }
		try { localStorage.setItem('leftTocCollapsed', next ? 'true' : 'false'); } catch { }
		setCollapsed(next);
	};

	// create a floating button appended to body so it remains accessible
	useEffect(() => {
		if (typeof document === 'undefined') return;
		const btn = document.createElement('button');
		btn.id = 'left-toc-floating-toggle';
		btn.className = 'left-toc-floating-toggle';
		btn.innerHTML = `<span class="bd-icon ${collapsed ? 'bd-icon-collapse-1' : 'bd-icon-expand-1'}" aria-hidden="true"></span>`;
		btn.title = collapsed ? 'Expand' : 'Collapse';
		btn.setAttribute('aria-pressed', String(collapsed));
		// dispatch a custom event so the React handler (with up-to-date closures) performs the toggle
		const btnClickHandler = () => window.dispatchEvent(new CustomEvent('leftTocFloatingClicked'));
		btn.addEventListener('click', btnClickHandler);
		// show follow-cursor tooltip like FocusMode
		const btnMouseMove = (e) => showGlobalTooltip(e, collapsed ? 'Expand' : 'Collapse');
		const btnMouseLeave = () => hideGlobalTooltip();
		btn.addEventListener('mousemove', btnMouseMove);
		btn.addEventListener('mouseleave', btnMouseLeave);
		document.body.appendChild(btn);

		// create collapsed-state vertical label (hidden by default)
		const label = document.createElement('div');
		label.id = 'left-collapsed-label';
		label.className = 'left-collapsed-label';
		label.innerHTML = `<span class="left-collapsed-label-text">${activeTab}</span>`;
		// clicking the collapsed label should also toggle expand/collapse
		const labelClickHandler = () => window.dispatchEvent(new CustomEvent('leftTocFloatingClicked'));
		label.addEventListener('click', labelClickHandler);
		const labelMouseMove = (e) => showGlobalTooltip(e, collapsed ? 'Expand' : 'Collapse');
		const labelMouseLeave = () => hideGlobalTooltip();
		label.addEventListener('mousemove', labelMouseMove);
		label.addEventListener('mouseleave', labelMouseLeave);
		document.body.appendChild(label);
		return () => {
			btn.removeEventListener('click', btnClickHandler);
			btn.removeEventListener('mousemove', btnMouseMove);
			btn.removeEventListener('mouseleave', btnMouseLeave);
			if (btn.parentNode) btn.parentNode.removeChild(btn);
			if (document.getElementById('left-collapsed-label')) {
				const el = document.getElementById('left-collapsed-label');
				if (el) el.removeEventListener('click', labelClickHandler);
				if (el) el.removeEventListener('mousemove', labelMouseMove);
				if (el) el.removeEventListener('mouseleave', labelMouseLeave);
				if (el && el.parentNode) el.parentNode.removeChild(el);
			}
		};
	}, [collapsed, activeTab]);

	useEffect(() => {
		if (typeof document === 'undefined') return;

		let tip = document.getElementById('global-tooltip');

		if (!tip) {
			tip = document.createElement('div');
			tip.id = 'global-tooltip';
			tip.className = 'custom-tooltip';
			document.body.appendChild(tip);
		}
	}, []);

	// keep the floating button / collapsed label visuals in sync with state
	useEffect(() => {
		const btn = typeof document !== 'undefined' ? document.getElementById('left-toc-floating-toggle') : null;
		if (btn) {
			btn.innerHTML = `<span class="bd-icon ${collapsed ? 'bd-icon-collapse-1' : 'bd-icon-expand-1'}" aria-hidden="true"></span>`;
			btn.title = collapsed ? 'Expand' : 'Collapse';
			btn.setAttribute('aria-pressed', String(collapsed));
		}
		const label = document.getElementById('left-collapsed-label');
		if (label) {
			const txt = label.querySelector('.left-collapsed-label-text');
			if (txt) txt.textContent = activeTab || 'Documentation';
		}
	}, [collapsed, activeTab]);

	// ensure the active/selected link in the left TOC is visible in the sidebar viewport
	useEffect(() => {
		if (typeof document === 'undefined') return;
		// run after a short delay to allow DOM updates from navigation/openMap
		setTimeout(() => {
			try {
				const list = document.querySelector('.left-toc-list');
				const sidebar = document.getElementById('left-sidebar');
				if (!list) return;
				// try to find exact link by href matching pathname
				let link = list.querySelector(`a[href="${pathname}"]`);
				if (!link) {
					// tolerant match: look for link whose href equals pathname without trailing slash
					const norm = (p) => (p && p.endsWith('/') ? p.slice(0, -1) : p);
					const normPath = norm(pathname);
					const links = Array.from(list.querySelectorAll('a'));
					link = links.find(a => {
						const h = a.getAttribute('href') || '';
						return norm(h) === normPath || normPath.startsWith(norm(h));
					});
				}
				if (link) {
					const li = link.closest('li') || link;

					// ensure parent sections are open (they should be from initialOpen), then scroll
					li.scrollIntoView({ block: 'center', behavior: 'smooth' });
					// avoid jumping the sidebar when the active item is already visible
					if (sidebar && li.getBoundingClientRect) {
						const sidebarRect = sidebar.getBoundingClientRect();
						const liRect = li.getBoundingClientRect();
						const isVisible = liRect.top >= sidebarRect.top && liRect.bottom <= sidebarRect.bottom;
						if (isVisible) return;
					}
					li.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
				}
			} catch (err) {
				// ignore
			}
		}, 120);
	}, [pathname, activeTab]);

	// handle clicks from the floating button/label by toggling collapsed state reliably
	useEffect(() => {
		function handleFloatingClick() {
			// hide tooltip when user clicks the floating control
			try { hideGlobalTooltip(); } catch (_) { }
			setCollapsed((prev) => {
				const next = !prev;
				try { localStorage.setItem('leftTocCollapsed', next ? 'true' : 'false'); } catch { }
				return next;
			});
		}
		window.addEventListener('leftTocFloatingClicked', handleFloatingClick);
		return () => window.removeEventListener('leftTocFloatingClicked', handleFloatingClick);
	}, []);

	// Custom overlay scrollbar for left TOC: hide native scrollbar and show a thumb
	useEffect(() => {
		if (typeof document === 'undefined') return;

		const sidebar = document.getElementById('left-sidebar');
		const list = sidebar ? sidebar.querySelector('.left-toc-list') : null;
		if (!sidebar || !list) return;

		// create track and thumb
		const track = document.createElement('div');
		track.className = 'left-custom-scroll-track';
		const thumb = document.createElement('div');
		thumb.className = 'left-custom-scroll-thumb';
		track.appendChild(thumb);
		sidebar.style.position = sidebar.style.position || 'relative';
		sidebar.appendChild(track);

		let dragging = false;
		let dragStartY = 0;

		function updateThumb() {
			const visible = list.clientHeight;
			const content = list.scrollHeight;
			if (content <= visible) {
				thumb.style.display = 'none';
				track.style.pointerEvents = 'none';
				return;
			}
			thumb.style.display = 'block';
			track.style.pointerEvents = 'auto';
			const ratio = visible / content;
			const thumbHeight = Math.max(32, Math.floor(visible * ratio));
			thumb.style.height = thumbHeight + 'px';
			const maxTop = visible - thumbHeight;
			const scrollRatio = list.scrollTop / (content - visible);
			thumb.style.top = Math.round(scrollRatio * maxTop) + 'px';
		}

		function onScroll() { updateThumb(); }

		function onThumbMouseDown(e) {
			e.preventDefault();
			dragging = true;
			dragStartY = e.clientY;
			document.addEventListener('mousemove', onDocMouseMove);
			document.addEventListener('mouseup', onDocMouseUp);
		}

		function onDocMouseMove(e) {
			if (!dragging) return;
			const visible = list.clientHeight;
			const content = list.scrollHeight;
			const thumbHeight = thumb.offsetHeight;
			const maxTop = visible - thumbHeight;
			const deltaY = e.clientY - dragStartY;
			const thumbTop = Math.min(Math.max(0, (parseInt(thumb.style.top || '0') + deltaY)), maxTop);
			// compute scrollTop from thumbTop
			const scrollRatio = thumbTop / maxTop;
			list.scrollTop = Math.round(scrollRatio * (content - visible));
			dragStartY = e.clientY;
			updateThumb();
		}

		function onDocMouseUp() {
			dragging = false;
			document.removeEventListener('mousemove', onDocMouseMove);
			document.removeEventListener('mouseup', onDocMouseUp);
		}

		// click on track jumps
		function onTrackClick(e) {
			if (e.target === thumb) return;
			const rect = track.getBoundingClientRect();
			const clickY = e.clientY - rect.top;
			const visible = list.clientHeight;
			const content = list.scrollHeight;
			const thumbHeight = thumb.offsetHeight;
			const maxTop = visible - thumbHeight;
			const thumbTop = Math.min(Math.max(0, clickY - thumbHeight / 2), maxTop);
			const scrollRatio = thumbTop / maxTop;
			list.scrollTop = Math.round(scrollRatio * (content - visible));
			updateThumb();
		}

		// attach
		list.addEventListener('scroll', onScroll);
		thumb.addEventListener('mousedown', onThumbMouseDown);
		track.addEventListener('click', onTrackClick);
		window.addEventListener('resize', updateThumb);

		// initial
		updateThumb();

		// cleanup
		return () => {
			list.removeEventListener('scroll', onScroll);
			thumb.removeEventListener('mousedown', onThumbMouseDown);
			track.removeEventListener('click', onTrackClick);
			window.removeEventListener('resize', updateThumb);
			if (track.parentNode) track.parentNode.removeChild(track);
		};
	}, []);
	const TocItem = ({ node, level = 0 }) => {
		const hasChildren = node.children && node.children.length;
		return (
			<li className={`left-toc-item level-${level}`} key={node.path}>
				{hasChildren ? (
					<>
						<div className={level === 0 ? 'left-toc-section-header' : 'left-toc-subsection-header'}>
							<button
								type="button"
								className={level === 0 ? 'left-toc-section-toggle' : 'left-toc-subtoggle'}
								onClick={() => toggleOpen(node.path, level)}
								aria-expanded={!!openMap[node.path]}
								aria-label={openMap[node.path] ? 'Collapse' : 'Expand'}
							>
								{openMap[node.path]
									? (<span className="bd-icon bd-icon-expandable"></span>)
									: (<span className="bd-icon bd-icon-collapsible"></span>)
								}
							</button>
							<Link to={node.path} className={level === 0 ? 'left-toc-section-link' : 'left-toc-sublink'}>{node.title}</Link>
						</div>
						{openMap[node.path] && (
							<ul className={level === 0 ? 'left-toc-children' : 'left-toc-subchildren'}>
								{node.children.map((c) => (
									<TocItem key={c.path} node={c} level={level + 1} />
								))}
							</ul>
						)}
					</>
				) : (
					<Link to={node.path} className={level === 0 ? 'left-toc-section-link' : 'left-toc-sublink'}>{node.title}</Link>
				)}
			</li>
		);
	};

	return (
		<aside id="left-sidebar">
			<nav className="left-toc" aria-label="Left table of contents">
				<div className="left-toc-search" id="left-toc-search">
					<input
						id="auto-complete"
						ref={searchRef}
						type="search"
						placeholder="Filter by title"
						value={query}
						onChange={(e) => {
							const v = e.target.value;
							setQuery(v);
							if (!v) return setSuggestions([]);
							const lower = v.toLowerCase();
							const matches = flattened.filter(i => i.title.toLowerCase().indexOf(lower) !== -1).slice(0, 10);
							setSuggestions(matches);
						}}
						onKeyDown={(e) => {
							if (e.key === 'Enter' && suggestions.length) {
								e.preventDefault();
								navigate(suggestions[0].path);
							}
							if (e.key === 'Escape') {
								setQuery('');
								setSuggestions([]);
							}
						}}
					/>
					{query && (
						<button
							type="button"
							className="search-clear-btn"
							aria-label="Clear search"
							onClick={() => { setQuery(''); setSuggestions([]); searchRef.current && searchRef.current.focus(); }}
						>
							×
						</button>
					)}
					{(suggestions.length > 0 || (query && query.trim() !== '')) && (
						<ul className="left-toc-search-suggestions">
							{suggestions.length > 0 ? (
								suggestions.map(s => (
									<li key={s.path}>
										<button
											className="search-suggestion-btn"
											role="option"
											aria-selected={false}
											onClick={() => navigate(s.path)}
											onKeyDown={(e) => { if (e.key === 'Enter') navigate(s.path); }}
										>
											{s.title}
										</button>
									</li>
								))
							) : (
								<li className="no-results">No results</li>
							)}
						</ul>
					)}
					<button
						id="left-toc-collapse-btn"
						className="left-toc-collapse-btn"
						aria-pressed={collapsed}
						aria-label={collapsed ? 'Expand' : 'Collapse'}

						onMouseMove={(e) =>
							showGlobalTooltip(
								e,
								collapsed ? 'Expand' : 'Collapse'
							)
						}
						onMouseLeave={hideGlobalTooltip}

						onClick={toggleCollapse}
					>
						<span className={`bd-icon ${collapsed ? 'bd-icon-collapse-1' : 'bd-icon-expand-1'}`} aria-hidden="true"></span>
					</button>
				</div>
				<ul className="left-toc-list">
					{groupedToc ? (
						// Render grouped view for Docs: each group has a title and contains up to 2 sections
						groupedToc.map((g, gi) => (
							<li key={`group-${gi}`} className="left-toc-group">
								<div className="left-toc-group-title">{g.title}</div>
								<ul className="left-toc-group-list">
									{g.items.map((item) => (
										item.type === 'link'
											? (<li key={item.path} className="left-toc-item link"><Link to={item.path} className="left-toc-link">{item.title}</Link></li>)
											: (<TocItem key={item.path} node={item} level={0} />)
									))}
								</ul>
							</li>
						))
					) : (
						// Default rendering for other tabs
						toc.map((item) => (
							item.type === 'link'
								? (<li key={item.path} className="left-toc-item link"><Link to={item.path} className="left-toc-link">{item.title}</Link></li>)
								: (<TocItem key={item.path} node={item} level={0} />)
						))
					)}
				</ul>
			</nav>
		</aside>
	);
}