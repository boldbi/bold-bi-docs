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
	componentDidMount() {
		if (!isBrowser || !this.props.enableBehavior) return;

		/* Normalize/generate heading IDs so TOC hrefs match DOM targets */
		const content = document.getElementById('md-content');
		if (content) {
			content.querySelectorAll('h2, h3, h4').forEach(h => {
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
			const nodes = toc.querySelectorAll(
				'.doc-anchor-h2, .doc-anchor-h3, .doc-anchor-h4'
			);

			if (!nodes.length) {
				requestAnimationFrame(waitForToc);
				return;
			}

			this.__wired = true;
			this.initTocBehavior(toc, Array.from(nodes));
		};

		waitForToc();
	}

	initTocBehavior(toc, nodes) {
		this.__cleanups = [];

		let suppressUntil = 0;

		const onClick = e => {
			const a = e.target.closest('a');
			if (!a) return;

			const id = (a.getAttribute('href') || '').split('#').pop();
			if (!id) return;

			// Clear all
			nodes.forEach(n => {
				n.classList.remove('active');
				const link = n.querySelector('a');
				if (link) link.classList.remove('active');
			});

			// Activate clicked
			const li = a.closest('.doc-anchor-h2, .doc-anchor-h3, .doc-anchor-h4');
			if (li) {
				li.classList.add('active');
				a.classList.add('active');
				// suppress scroll-spy briefly to preserve clicked active state
				suppressUntil = Date.now() + 400;
				try { a.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' }); } catch (err) { }
			}
		};

		toc.addEventListener('click', onClick);
		this.__cleanups.push(() => toc.removeEventListener('click', onClick));

		const headings = Array.from(
			document.querySelectorAll('#md-content h2, #md-content h3, #md-content h4')
		)
			.filter(h => h.id)
			.map(h => ({
				el: h,
				id: h.id,
				level: h.tagName === 'H2' ? 2 : h.tagName === 'H3' ? 3 : 4
			}));

		const topOffset = 400;

		const onScroll = () => {
			// if a click recently occurred, skip scroll updates briefly so clicked item stays active
			if (suppressUntil && Date.now() < suppressUntil) return;
			let active = null;

			for (let i = 0; i < headings.length; i++) {
				const rect = headings[i].el.getBoundingClientRect();

				// Check if heading is in viewport zone
				if (rect.top <= topOffset && rect.bottom > topOffset) {
					active = headings[i];
					break;
				}
			}

			// If none found → pick last passed heading
			if (!active) {
				for (let i = headings.length - 1; i >= 0; i--) {
					const rect = headings[i].el.getBoundingClientRect();
					if (rect.top <= topOffset) {
						active = headings[i];
						break;
					}
				}
			}

			// fallback to first
			if (!active && headings.length) {
				active = headings[0];
			}

			if (!active) return;

			// Reset all active
			nodes.forEach(n => {
				n.classList.remove('active');
				const a = n.querySelector('a');
				if (a) a.classList.remove('active');
			});

			// Match TOC link
			const link = Array.from(toc.querySelectorAll('a')).find(a =>
				(a.getAttribute('href') || '').split('#').pop() === active.id
			);

			if (!link) return;

			const li = link.closest('.doc-anchor-h2, .doc-anchor-h3, .doc-anchor-h4');
			if (!li) return;

			li.classList.add('active');
			link.classList.add('active');
			try { link.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'nearest' }); } catch (err) { }
		};

		window.addEventListener('scroll', onScroll);
		window.addEventListener('resize', onScroll);

		this.__cleanups.push(() =>
			window.removeEventListener('scroll', onScroll)
		);
		this.__cleanups.push(() =>
			window.removeEventListener('resize', onScroll)
		);

		// Set initial active to the first TOC item so the first heading is highlighted immediately
		const firstLink = toc.querySelector('a');
		if (firstLink) {
			const firstLi = firstLink.closest('.doc-anchor-h2, .doc-anchor-h3, .doc-anchor-h4');
			if (firstLi) {
				firstLi.classList.add('active');
				const fa = firstLi.querySelector('a');
				if (fa) fa.classList.add('active');
			}
		}

		requestAnimationFrame(onScroll);
	}

	componentWillUnmount() {
		if (this.__cleanups) {
			this.__cleanups.forEach(fn => fn && fn());
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

	renderTocItems(items) {
		if (!items || items.length === 0) return null;

		return (
			<ul>
				{items.map(item => {
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

		return (
			<div id='right-sidebar-container'>
				<aside id="right-sidebar">
					<nav id="doc-right-toc">
						<span className="bd-icon bd-icon-inthispage"></span><span className="bd-title-inthispage">In this page</span>
						<div className="header-lists">
							{this.renderTocItems(tree)}
						</div>
					</nav>
				</aside>
			</div>
		);
	}
}
