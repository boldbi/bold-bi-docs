import React from 'react';
import { navigate } from 'gatsby';
import summaryDocs from '../../docs/summary-docs.json';
import summaryAdmin from '../../docs/summary-admin.json';
import summaryDeployment from '../../docs/summary-deployment.json';
import summaryApi from '../../docs/summary-api.json';
import summaryConnect from '../../docs/summary-connect.json';
import summaryEmbedding from '../../docs/summary-embedding.json';
import { initDarkThemeToggle } from './darktheme';
import '../assets/css/dark-mode.css';
import '../assets/css/tabs.css';
import '../assets/css/focus.css';
import '../assets/css/header.css';
import FocusButton from "../components/FocusButton";

class MainHeader extends React.Component {
	// Tooltip helpers (match FocusMode behavior)
	showTooltip(e, id) {
		const tip = typeof document !== 'undefined' && document.getElementById(id);
		if (!tip) return;
		// If this is the theme tooltip, update text based on current theme
		try {
			if (id === 'theme_tooltip') {
				const isDark = typeof document !== 'undefined' && document.body && document.body.classList.contains('dark-mode');
				tip.textContent = isDark ? 'Light theme' : 'Dark theme';
			}
		} catch (_) { }
		const offset = 24;
		tip.style.left = (e.clientX) + "px";
		tip.style.top = (e.clientY + offset) + "px";
		tip.style.transform = "translateX(-38%)";
		tip.style.opacity = "1";
	}

    hideTooltip(id) {
        const tip = typeof document !== 'undefined' && document.getElementById(id);
        if (tip) tip.style.opacity = "0";
    }
    componentDidMount() {
        // ensure the dark-theme toggle is wired when header mounts
        try { initDarkThemeToggle('.theme-switch-btn'); } catch (_) { }
        // build combined search index
        try {
            const map = {
                'Docs': summaryDocs,
                'Deploy & Setup': summaryDeployment,
                'Connect Data': summaryConnect,
                'Embedding': summaryEmbedding,
                'Admin': summaryAdmin,
                'API Reference': summaryApi,
            };
            const toc = this.generateToc(map);
            const flattened = [];
            function walk(node) {
                if (!node) return;
                if (node.title && node.path) flattened.push({ title: node.title, path: node.path });
                if (node.children && node.children.length) node.children.forEach(walk);
            }
            toc.forEach(t => walk(t));
            this.setState({ searchIndex: flattened });
			// Determine active tab from current pathname so refresh highlights correct section
			try {
				const pathname = (typeof window !== 'undefined' && window.location && window.location.pathname) ? window.location.pathname : '/';
				let matched = null;
				Object.keys(map).forEach((tabKey) => {
					try {
						const summaryJson = map[tabKey] || {};
						// generateToc for this single summary by wrapping it in a temp map
						const singleToc = this.generateToc({ temp: summaryJson });
						const paths = [];
						function collect(n) {
							if (!n) return;
							if (n.path) paths.push(n.path);
							if (n.children && n.children.length) n.children.forEach(collect);
						}
						singleToc.forEach(collect);
						if (paths.some(p => p && (pathname === p || pathname.startsWith(p)))) matched = tabKey;
					} catch (_) { /* ignore per-tab errors */ }
				});
				if (matched) {
					this.setState({ activeTab: matched });
					try { window.localStorage.setItem('docsTab', matched); } catch (e) { }
					try { window.dispatchEvent(new CustomEvent('docsTabChanged', { detail: matched })); } catch (e) { }
				}
			} catch (e) { /* ignore */ }
        } catch (e) { this.setState({ searchIndex: [] }); }

		// click outside to close popup
		this._onDocClick = (e) => {
			const wrap = this._searchWrap;
			if (wrap && !wrap.contains(e.target)) {
				this.setState({ suggestions: [] });
			}
			// also close article options popup if click outside of it
			if (this._articleOptionsWrap && !this._articleOptionsWrap.contains(e.target)) {
				this.setState({ showArticleOptions: false });
			}
		};
		window.addEventListener('click', this._onDocClick);
	}

	componentWillUnmount() {
		if (this._onDocClick) window.removeEventListener('click', this._onDocClick);
	}

	constructor(props) {
		super(props);
		this.state = {
			activeTab: (typeof window !== 'undefined' && window.localStorage.getItem('docsTab')) || 'Docs',
			query: '',
			suggestions: [],
			searchIndex: [],
			showArticleOptions: false,
		};
		this._searchWrap = null;
		this._articleOptionsWrap = null;
	}

	toggleArticleOptions = (state) => {
		if (typeof state === 'boolean') this.setState({ showArticleOptions: state });
		else this.setState((s) => ({ showArticleOptions: !s.showArticleOptions }));
	}

	// --- helpers copied/adapted from LeftToc.js to build normalized paths ---
	removeMisc(s) {
		if (!s) return '';
		if (typeof s !== 'string') return '';
		return s.split('?')[0].replace(/\.md$/, '').trim();
	}

	buildNode(title, node, parentBase) {
		if (typeof node === 'string') {
			const path = this.removeMisc(node) === '/' ? '/' : `/${this.removeMisc(node)}/`;
			return { title, path };
		}

		const base = (node && node.slug) ? this.removeMisc(node.slug) : title.toLowerCase().replace(/\s+/g, '-');
		const path = `${parentBase}/${base}/`.replace(/\/\/+/g, '/');

		const children = [];

		if (node && typeof node.pages === 'object') {
			Object.keys(node.pages).forEach((childTitle) => {
				const childVal = node.pages[childTitle];
				if (typeof childVal === 'string') {
					const childPath = `${path}${this.removeMisc(childVal)}/`.replace(/\/\/+/g, '/');
					children.push({ title: childTitle, path: childPath });
				} else {
					children.push(this.buildNode(childTitle, childVal, path));
				}
			});
		}

		Object.keys(node || {}).forEach((k) => {
			if (k === 'slug' || k === 'pages') return;
			const v = node[k];
			children.push(this.buildNode(k, v, path));
		});

		return { title, path, children };
	}

	generateToc(map) {
		const result = [];
		Object.keys(map || {}).forEach((k) => {
			const json = map[k];
			Object.keys(json || {}).forEach((kk) => {
				const node = json[kk];
				if (typeof node === 'string') {
					const path = this.removeMisc(node) === '/' ? '/' : `/${this.removeMisc(node)}/`;
					result.push({ type: 'link', title: kk, path });
				} else {
					const built = this.buildNode(kk, node, '');
					result.push({ type: 'section', ...built });
				}
			});
		});
		return result;
	}

	// search handlers
	onSearchChange = (e) => {
		const v = e.target.value;
		this.setState({ query: v });
		if (!v) return this.setState({ suggestions: [] });
		const lower = v.toLowerCase();
		const matches = (this.state.searchIndex || []).filter(i => i.title.toLowerCase().indexOf(lower) !== -1).slice(0, 10);
		this.setState({ suggestions: matches });
	}

	onSearchKeyDown = (e) => {
		const { suggestions } = this.state;
		if (e.key === 'Enter' && suggestions.length) {
			e.preventDefault();
			navigate(suggestions[0].path);
			this.setState({ suggestions: [], query: '' });
		}
		if (e.key === 'Escape') {
			this.setState({ query: '', suggestions: [] });
		}
	}

	onSuggestionClick = (path) => {
		navigate(path);
		this.setState({ suggestions: [], query: '' });
	}

	clearHeaderSearch = () => {
		this.setState({ query: '', suggestions: [] }, () => {
			try {
				const input = this._searchWrap && this._searchWrap.querySelector('input[type="search"]');
				if (input) input.focus();
			} catch (_) {}
		});
	}

	setTab(tab) {
		if (typeof window !== 'undefined') {
			window.localStorage.setItem('docsTab', tab);
			try { window.dispatchEvent(new CustomEvent('docsTabChanged', { detail: tab })); } catch (e) { }
		}
		this.setState({ activeTab: tab });
	}

	render() {
		const tabs = ['Docs', 'Deploy & Setup', 'Connect Data', 'Embedding', 'Admin', 'API Reference'];
		return (
			<header id="header">
				<div className="container">

					{/* Logo */}
					<div id="header-left-side">
						<a href='/' className='header-home-link'><img className='header-logo' src="/img/boldbi-logo.svg" alt="Bold BI Logo" /></a>
						<span className='header-docs-text'><a href="/">Documentation</a></span>
					</div>

					{/* Search and ASK button*/}
					<div id="header-middle-side">					
						<div className="search-box" ref={(el) => { this._searchWrap = el; }}>
							<span className="bd-icon bd-icon-search search-icon"></span>
							<input
								type="search"
								placeholder="Search..."
								value={this.state.query}
								onChange={this.onSearchChange}
								onKeyDown={this.onSearchKeyDown}
								aria-label="Search documentation"
							/>
							{this.state.query && (
								<button
									type="button"
									className="search-clear-btn"
									aria-label="Clear search"
									onClick={this.clearHeaderSearch}
								>
									×
								</button>
							)}
							{(this.state.suggestions && this.state.suggestions.length > 0) || (this.state.query && this.state.query.trim() !== '') ? (
								<ul className="left-toc-search-suggestions header-search-suggestions">
									{this.state.suggestions && this.state.suggestions.length > 0 ? (
										this.state.suggestions.map(s => (
											<li key={s.path}>
												<button
													className="search-suggestion-btn"
													role="option"
													aria-selected={false}
													onClick={() => this.onSuggestionClick(s.path)}
													onKeyDown={(e) => { if (e.key === 'Enter') this.onSuggestionClick(s.path); }}
												>
													{s.title}
												</button>
											</li>
										))
									) : (
										<li className="no-results">No results</li>
									)}
								</ul>
							) : null}
						</div>

						<div className="ask-container">
							<div className="ask-split-button">
								<button className="ask-main">Ask AI</button>
							</div>
						</div>
					</div>

					<div id="header-right-side">
						<div className="ask-container ask-container-mobile">
							<div className="ask-split-button">
								<button className="ask-main">Ask AI</button>
							</div>
						</div>

						{/* Forum / KB links (visible on wide screens >=1025px) */}
						<div className="header-links">
							<a href="https://www.boldbi.com/forums/" className="header-menu-link" target="_blank">Forum</a>
							<a href="https://support.boldbi.com/kb" className="header-menu-link" target="_blank">KB</a>
						</div>
						<a href="https://app.boldid.net/register/bi/embedded?evaluation=v2" className="header-try-it-free-btn" target="_blank">Try it Free</a>

						{/* Theme icon */}
						<button
							className="theme-switch-btn"
							aria-label="Toggle theme"
							aria-describedby="theme_tooltip"
							data-tooltip-id="theme_tooltip"
							onMouseMove={(e) => this.showTooltip(e, 'theme_tooltip')}
							onMouseLeave={() => this.hideTooltip('theme_tooltip')}
						>
							<img className="theme-toggle-icon" src="/img/moon-icon.svg" alt="Toggle theme" width="16" height="16" />
						</button>

								<div id="article-options-wrap" ref={(el) => { this._articleOptionsWrap = el; }}>
									
<div
  id="article-options"
  role="button"
  tabIndex={0}
  aria-label="Open menu"
  onClick={() => this.toggleArticleOptions()}
  onKeyDown={(e) => { if (e.key === 'Enter') this.toggleArticleOptions(); }}
>
<svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="12" cy="5" r="2.4" fill="#667085" />
    <circle cx="12" cy="12" r="2.4" fill="#667085" />
    <circle cx="12" cy="19" r="2.4" fill="#667085" />
  </svg>


</div>
									{this.state.showArticleOptions && (
										<div className="menu-popup-overlay" onClick={() => this.toggleArticleOptions(false)}>
											<div className="menu-popup-box" onClick={(e) => e.stopPropagation()}>
												<button className="menu-popup-close" aria-label="Close" onClick={() => this.toggleArticleOptions(false)}>×</button>
												<div className="menu-popup-item"><a href="https://www.boldbi.com/forums/">Forum</a></div>
												<div className="menu-popup-item"><a href="https://support.boldbi.com/kb">KB</a></div>
												<div className="menu-cta">
													<div className="menu-cta-item">
														<a href="https://app.boldid.net/register/bi/embedded?evaluation=v2" className="menu-try-it-free-btn">Try it Free</a>
													</div>
												</div>
											</div>
										</div>
									)}
								</div>
						{/* Tooltip for theme toggle (mirrors FocusMode tooltip) */}
						<div id="theme_tooltip" className="custom-tooltip">Dark theme</div>
					</div>
				</div>

			</header>
		)
	}
}

export default MainHeader;
