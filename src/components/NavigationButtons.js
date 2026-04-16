import React from 'react';
import summaryDocs from '../../docs/summary-docs.json';
import summaryAdmin from '../../docs/summary-admin.json';
import summaryDeployment from '../../docs/summary-deployment.json';
import summaryApi from '../../docs/summary-api.json';
import summaryConnect from '../../docs/summary-connect.json';
import summaryEmbedding from '../../docs/summary-embedding.json';

class NavigationButtons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prev: null,
			next: null,
		};
	}

	componentDidMount() {
		this.computeLinks();
	}

	// Safe getter for current path without prefix
	getCurrentPath() {
		if (typeof window === 'undefined') return '';
		const full = window.location.pathname || '';
		// normalize to trailing slash form used in summaries
		return full.replace(/\.html?$|\\?\#.*$/, '').replace(/\/+$|^$/g, (m) => (m === '' ? '/' : '/')).replace(/\/+/g, '/') || '/';
	}

	isMobile() {
		if (typeof window === 'undefined' || !window.matchMedia) return false;
		return window.matchMedia('(max-width:480px)').matches;
	}

	getTitle(arr) {
		if (!arr || !Array.isArray(arr)) return '';
		const joined = arr.join(' / ');
		if (this.isMobile()) {
			// Keep only leaf for mobile if there is a slash
			return joined.indexOf('/') !== -1 ? joined.split('/')[1].trim() : joined;
		}
		return joined;
	}

	computeLinks() {
		try {
			// Build ordered list from the summary JSONs, matching the header tab order
			const map = {
				'Docs': summaryDocs,
				'Deploy & Setup': summaryDeployment,
				'Connect Data': summaryConnect,
				'Embedding': summaryEmbedding,
				'Admin': summaryAdmin,
				'API Reference': summaryApi,
			};

			// helpers (mirrors Header.js logic)
			const removeMisc = (s) => {
				if (!s) return '';
				if (typeof s !== 'string') return '';
				return s.split('?')[0].replace(/\.md$/, '').trim();
			};

			function buildNode(title, node, parentBase) {
				if (typeof node === 'string') {
					const path = removeMisc(node) === '/' ? '/' : `/${removeMisc(node)}/`;
					return { title, path };
				}

				const base = (node && node.slug) ? removeMisc(node.slug) : title.toLowerCase().replace(/\s+/g, '-');
				const path = `${parentBase}/${base}/`.replace(/\/\/+/g, '/');

				const children = [];

				if (node && typeof node.pages === 'object') {
					Object.keys(node.pages).forEach((childTitle) => {
						const childVal = node.pages[childTitle];
						if (typeof childVal === 'string') {
							const childPath = `${path}${removeMisc(childVal)}/`.replace(/\/\/+/g, '/');
							children.push({ title: childTitle, path: childPath });
						} else {
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

			function generateToc(mapObj) {
				const result = [];
				Object.keys(mapObj || {}).forEach((k) => {
					const json = mapObj[k];
					Object.keys(json || {}).forEach((kk) => {
						const node = json[kk];
						if (typeof node === 'string') {
							const path = removeMisc(node) === '/' ? '/' : `/${removeMisc(node)}/`;
							result.push({ type: 'link', title: kk, path });
						} else {
							const built = buildNode(kk, node, '');
							result.push({ type: 'section', ...built });
						}
					});
				});
				return result;
			}

			const toc = generateToc(map);
			const flattened = [];
			function walk(node) {
				if (!node) return;
				if (node.title && node.path) flattened.push({ title: node.title, path: node.path });
				if (node.children && node.children.length) node.children.forEach(walk);
			}
			toc.forEach(t => walk(t));

			const current = (typeof window !== 'undefined' && window.location && window.location.pathname) ? window.location.pathname.replace(/\.html?$|\\?\#.*$/, '') : '/';
			const normalizedCurrent = current.endsWith('/') ? current : current + '/';
			let prev = null;
			let next = null;
			for (let i = 0; i < flattened.length; i++) {
				const p = flattened[i].path;
				if (!p) continue;
				const norm = p.endsWith('/') ? p : p + '/';
				if (norm === normalizedCurrent) {
					if (i > 0) {
						prev = { href: flattened[i - 1].path, text: flattened[i - 1].title, target: '_self' };
					}
					if (i < flattened.length - 1) {
						next = { href: flattened[i + 1].path, text: flattened[i + 1].title, target: '_self' };
					}
					break;
				}
			}

			this.setState({ prev, next });
		} catch (e) {
			// noop
		}
	}

	render() {
		const { prev, next } = this.state;
		return (
			<nav id="nav-buttons">
				{prev && (
					<div id="prev-button">
						<a id="prev-link" href={prev.href} target={prev.target} aria-label={`Previous: ${prev.text}`}>
							<div className="doc-icons icon-prev_icon nav-prev-icon previous-icon" aria-hidden="true">
								<span className="bd-icon bd-icon-backarrow font-20"></span>
							</div>
							<div className="nav-prev-text">
								<div className="nav-label">Previous</div>
								<div className="nav-title">{prev.text}</div>
							</div>
						</a>
					</div>
				)}
				{next && (
					<div id="next-button">
						<a id="next-link" href={next.href} target={next.target} aria-label={`Next: ${next.text}`}>
							<div className="doc-icons icon-next_icon nav-next-icon next-icon" aria-hidden="true">
								<span className="bd-icon bd-icon-front-arrow font-20"></span>
							</div>
							<div className="nav-next-text">
								<div className="nav-label">Next</div>
								<div className="nav-title">{next.text}</div>
							</div>
						</a>
					</div>
				)}
			</nav>
		);
	}
}

export default NavigationButtons;

