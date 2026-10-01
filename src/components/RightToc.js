import React from 'react';
import '../assets/css/righttoc.css';

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

const getHeadersFromHtml = (html) => {
	if (!html || !isBrowser) return [];

	const temp = document.createElement('div');
	temp.innerHTML = html;

	const headers = [];
	temp.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((el) => {
		headers.push({
			id: el.id || '',
			text: (el.textContent || '').trim(),
			level: Number((el.tagName || 'H1').replace('H', ''))
		});
	});

	return headers;
};

export default class RightToc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openSections: {},
			modernPathKey: ''
		};
		this.modernAncestorMap = {};
	}

	isModernWidgetsPage() {
		if (!isBrowser) return false;
		return window.location.pathname.includes('/visualizing-data/visualization-v2-widgets/');
	}

	getPathKey() {
		if (!isBrowser) return '';
		return window.location.pathname;
	}

	initializeModernSections(tree) {
		if (!this.isModernWidgetsPage() || !tree?.length) return;
		const currentPath = this.getPathKey();
		if (this.state.modernPathKey === currentPath) return;

		const firstSectionId = tree[0]?.id;
		const openSections = firstSectionId ? { [firstSectionId]: true } : {};
		this.setState({
			openSections,
			modernPathKey: currentPath
		});
	}

	openModernSection(sectionId) {
		if (!sectionId || !this.isModernWidgetsPage()) return;
		this.setState((prev) => ({
			openSections: {
				...prev.openSections,
				[sectionId]: true
			}
		}));
	}

	openModernBranch(sectionId) {
		if (!sectionId || !this.isModernWidgetsPage()) return;
		const ancestorIds = this.modernAncestorMap?.[sectionId] || [];
		this.setState((prev) => {
			const openSections = { ...prev.openSections };
			[...ancestorIds, sectionId].forEach((id) => {
				if (id) openSections[id] = true;
			});
			return { openSections };
		});
	}

	toggleModernSection(sectionId) {
		if (!sectionId || !this.isModernWidgetsPage()) return;
		this.setState((prev) => ({
			openSections: {
				...prev.openSections,
				[sectionId]: !prev.openSections[sectionId]
			}
		}));
	}

	componentDidMount() {
		if (!isBrowser || !this.props.enableBehavior) return;
		const headers = this.extractHeadersFromHtml(this.props.html);
		const tree = this.buildTocTree(headers);
		this.initializeModernSections(tree);

		const content = document.getElementById('md-content');
		if (content) {
			content.querySelectorAll('h2, h3, h4').forEach((h) => {
				if (!h.id) {
					h.id = h.textContent
						.toLowerCase()
						.replace(/[^a-z0-9]+/g, '-')
						.replace(/^-+|-+$/g, '');
				}
			});
		}

		const toc = document.getElementById('doc-right-toc');
		if (!toc || this.__wired) return;

		const waitForToc = () => {
			const nodes = toc.querySelectorAll('.doc-anchor-h2, .doc-anchor-h3, .doc-anchor-h4');

			if (!nodes.length) {
				requestAnimationFrame(waitForToc);
				return;
			}

			this.__wired = true;
			this.initTocBehavior(toc, Array.from(nodes));
		};

		waitForToc();
	}

	componentDidUpdate() {
		const headers = this.extractHeadersFromHtml(this.props.html);
		const tree = this.buildTocTree(headers);
		this.initializeModernSections(tree);
	}

	initTocBehavior(toc, nodes) {
		this.__cleanups = [];

		let suppressUntil = 0;
		const activeNodeClass = 'current-active';
		const activeLinkClass = 'current-active-link';

		const getCurrentNodes = () =>
			Array.from(toc.querySelectorAll('.doc-anchor-h2, .doc-anchor-h3, .doc-anchor-h4'));

		const clearCurrentState = () => {
			getCurrentNodes().forEach((n) => {
				n.classList.remove('active');
				n.classList.remove(activeNodeClass);
				const link = n.querySelector('a');
				if (link) {
					link.classList.remove('active');
					link.classList.remove(activeLinkClass);
				}
			});
		};

		const onClick = (e) => {
			const a = e.target.closest('a');
			if (!a) return;

			const id = (a.getAttribute('href') || '').split('#').pop();
			if (!id) return;

			clearCurrentState();

			const li = a.closest('.doc-anchor-h2, .doc-anchor-h3, .doc-anchor-h4');
			if (li) {
				li.classList.add(activeNodeClass);
				a.classList.add(activeLinkClass);
				if (this.isModernWidgetsPage()) {
					this.openModernBranch(id);
				}
				suppressUntil = Date.now() + 400;
				try {
					a.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
				} catch (err) {}
			}
		};

		toc.addEventListener('click', onClick);
		this.__cleanups.push(() => toc.removeEventListener('click', onClick));

		const headings = Array.from(document.querySelectorAll('#md-content h2, #md-content h3, #md-content h4'))
			.filter((h) => h.id)
			.map((h) => ({
				el: h,
				id: h.id,
				level: h.tagName === 'H2' ? 2 : h.tagName === 'H3' ? 3 : 4
			}));

		const topOffset = 400;

		const onScroll = () => {
			if (suppressUntil && Date.now() < suppressUntil) return;
			let active = null;

			for (let i = 0; i < headings.length; i++) {
				const rect = headings[i].el.getBoundingClientRect();
				if (rect.top <= topOffset && rect.bottom > topOffset) {
					active = headings[i];
					break;
				}
			}

			if (!active) {
				for (let i = headings.length - 1; i >= 0; i--) {
					const rect = headings[i].el.getBoundingClientRect();
					if (rect.top <= topOffset) {
						active = headings[i];
						break;
					}
				}
			}

			if (!active && headings.length) {
				active = headings[0];
			}

			if (!active) return;

			if (this.isModernWidgetsPage()) {
				this.openModernBranch(active.id);
			}

			clearCurrentState();

			const link = Array.from(toc.querySelectorAll('a')).find(
				(a) => (a.getAttribute('href') || '').split('#').pop() === active.id
			);

			if (!link) return;

			const li = link.closest('.doc-anchor-h2, .doc-anchor-h3, .doc-anchor-h4');
			if (!li) return;

			li.classList.add(activeNodeClass);
			link.classList.add(activeLinkClass);
			try {
				link.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'nearest' });
			} catch (err) {}
		};

		window.addEventListener('scroll', onScroll);
		window.addEventListener('resize', onScroll);

		this.__cleanups.push(() => window.removeEventListener('scroll', onScroll));
		this.__cleanups.push(() => window.removeEventListener('resize', onScroll));

		const firstLink = toc.querySelector('a');
		if (firstLink) {
			const firstLi = firstLink.closest('.doc-anchor-h2, .doc-anchor-h3, .doc-anchor-h4');
			if (firstLi) {
				firstLi.classList.add(activeNodeClass);
				const fa = firstLi.querySelector('a');
				if (fa) fa.classList.add(activeLinkClass);
			}
		}

		requestAnimationFrame(onScroll);
	}

	componentWillUnmount() {
		if (this.__cleanups) {
			this.__cleanups.forEach((fn) => fn && fn());
		}
	}

	extractHeadersFromHtml(html) {
		const parsedHeaders = getHeadersFromHtml(html);

		return parsedHeaders
			.filter(({ id, text, level }) => Boolean(id) && Boolean(text) && level >= 2 && level <= 4)
			.map(({ id, text, level }) => ({
				id,
				name: text.charAt(0).toUpperCase() + text.slice(1),
				level
			}));
	}

	buildTocTree(headers) {
		if (!headers || headers.length === 0) return [];

		const tree = [];
		const stack = [];

		for (let header of headers) {
			const item = {
				...header,
				children: []
			};

			while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
				stack.pop();
			}

			if (stack.length === 0) {
				tree.push(item);
			} else {
				stack[stack.length - 1].children.push(item);
			}

			stack.push(item);
		}

		return tree;
	}

	buildAncestorMap(items, ancestors = [], map = {}) {
		if (!items?.length) return map;

		items.forEach((item) => {
			map[item.id] = ancestors;
			if (item.children?.length > 0) {
				this.buildAncestorMap(item.children, [...ancestors, item.id], map);
			}
		});

		return map;
	}

	renderTocItems(items) {
		if (!items || items.length === 0) return null;

		return (
			<ul>
				{items.map((item) => {
					if (item.level === 2) {
						return (
							<React.Fragment key={item.id}>
								<li className={`doc-anchor-h${item.level}`}>
									<a href={`#${item.id}`}>{item.name}</a>
								</li>
								{item.children?.length > 0 && this.renderTocItems(item.children)}
							</React.Fragment>
						);
					}

					if (item.level === 3) {
						return (
							<React.Fragment key={item.id}>
								<li className={`doc-anchor-h${item.level}`}>
									<a href={`#${item.id}`}>{item.name}</a>
								</li>
								{item.children?.length > 0 && this.renderTocItems(item.children)}
							</React.Fragment>
						);
					}

					return (
						<li key={item.id} className={`doc-anchor-h${item.level}`}>
							<a href={`#${item.id}`}>{item.name}</a>
						</li>
					);
				})}
			</ul>
		);
	}

	renderModernTocItems(items) {
		if (!items || items.length === 0) return null;

		return (
			<ul>
				{items.map((item) => {
					if (item.children?.length > 0) {
						const isOpen = !!this.state.openSections[item.id];
						return (
							<li
								key={item.id}
								data-section-id={item.id}
                                className={`doc-anchor-h${item.level} modern-group ${isOpen ? 'open' : 'closed'}`}
							>
								<div className="righttoc-group-row">
									<a href={`#${item.id}`} onClick={() => this.openModernBranch(item.id)}>
										{item.name}
									</a>
									<button
										type="button"
										className="righttoc-group-toggle"
										aria-label={isOpen ? `Collapse ${item.name}` : `Expand ${item.name}`}
										aria-expanded={isOpen}
										onClick={(e) => {
											e.preventDefault();
											e.stopPropagation();
											this.toggleModernSection(item.id);
										}}
									>
                                        {isOpen ? 'v' : '>'}
									</button>
								</div>
								{isOpen ? this.renderModernTocItems(item.children) : null}
							</li>
						);
					}

					return (
						<li key={item.id} className={`doc-anchor-h${item.level}`}>
							<a href={`#${item.id}`}>{item.name}</a>
						</li>
					);
				})}
			</ul>
		);
	}

	render() {
		const { html } = this.props;

		if (!html) {
			return null;
		}

		const headers = this.extractHeadersFromHtml(html);

		if (!headers || headers.length === 0) {
			return null;
		}

		if (headers.length === 1 && headers[0].level === 2) {
			return null;
		}

		const tree = this.buildTocTree(headers);
		const isModernWidgetsPage = this.isModernWidgetsPage();
		this.modernAncestorMap = isModernWidgetsPage ? this.buildAncestorMap(tree) : {};

		return (
			<div id='right-sidebar-container'>
				<aside id="right-sidebar">
					<nav id="doc-right-toc" className={isModernWidgetsPage ? 'modern-right-toc' : ''}>
						<span className="bd-icon bd-icon-inthispage"></span><span className="bd-title-inthispage">In this page</span>
						<div className="header-lists">
							{isModernWidgetsPage ? this.renderModernTocItems(tree) : this.renderTocItems(tree)}
						</div>
					</nav>
				</aside>
			</div>
		);
	}
}
