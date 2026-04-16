import React from "react";
import '../assets/css/style.css';

export default class BreadCrumb extends React.Component {
	// Walk the treeData structure to find a path of nodes (with names and ids)
	findTrailInTree(treeData, targetId) {
		if (!treeData) return null;

		const normalize = s => (s || '').replace(/\/+$/g, '').replace(/^\/+/, '');

		function searchNodes(nodes, ancestors) {
			if (!nodes || !nodes.length) return null;
			for (let node of nodes) {
				const currentAnc = ancestors.slice();
				if (node.name) currentAnc.push({ name: node.name, id: node.id || null });
				if (node.id && normalize(node.id) === normalize(targetId)) {
					return currentAnc;
				}
				const children = node.child || node.pages || node.children || [];
				const found = searchNodes(children, currentAnc);
				if (found) return found;
			}
			return null;
		}

		for (let [sectionName, items] of Object.entries(treeData)) {
			const startAnc = [{ name: sectionName, id: null }];
			const found = searchNodes(items, startAnc);
			if (found) return found;
		}
		return null;
	}

	renderBreadcrumbContent() {
		const { routerData, pathName, indexPageMapper, pathPrefix, treeData } = this.props;

		if (!routerData || !routerData[pathName]) {
			return null;
		}

		const breadCrumbData = routerData[pathName];
		const basePrefix = pathPrefix ? pathPrefix : '';

		const toggleButton = (
			<button type="button" className="breadcrumb-toggle" aria-label="Open left menu" onClick={() => this.props.onToggleMobileToc && this.props.onToggleMobileToc()}>
				<span className="bd-icon bd-icon-unorderedlist"></span>
			</button>
		);

		const sepLine = (<div className="seperator-line" key="sep-line" />);

		const homeIcon = (
			<a href="/" className="breadcrumb-home" aria-label="Home">
				<span className="bd-icon bd-icon-home-agent"></span>
			</a>
		);

		const separator = <span className="bd-icon bd-icon-chevronright"></span>;

		// Try to derive a full trail from treeData (preferred), fallback to routerData.title
		const trail = this.findTrailInTree(treeData, pathName) || (Array.isArray(breadCrumbData.title) ? breadCrumbData.title.map(t => ({ name: t, id: null })) : []);

		const items = [
			<React.Fragment key="toggle">{toggleButton}</React.Fragment>,
			<React.Fragment key="sep">{sepLine}</React.Fragment>,
			<React.Fragment key="homeIcon">{homeIcon}</React.Fragment>
		];

		if (!trail || !trail.length) {
			return (
				<>
					{toggleButton}
					{sepLine}
					{homeIcon}
					<span className="breadcrumb-home-title"><a href="/">Home</a></span>
				</>
			);
		}

		// Render only parent nodes (exclude the current/active page)
		const parents = trail.slice(0, -1);
		if (!parents.length) {
			// if there are no parents, show Home text
			return (
				<>
					{toggleButton}
					{sepLine}
					{homeIcon}
					<span className="breadcrumb-home-title"><a href="/">Home</a></span>
				</>
			);
		}

		parents.forEach((node, idx) => {
			items.push(<React.Fragment key={`separator-${idx}`}>{separator}</React.Fragment>);
			const isImmediateParent = idx === parents.length - 1;
			const isFirstParent = idx === 0;
			let href = '#';
			if (node && node.id) {
				href = node.id;
			} else if (idx === 0 && indexPageMapper && indexPageMapper[node.name]) {
				href = `${basePrefix}/${indexPageMapper[node.name]}/`.replace(/\/\/+/g, '/');
			}
			const className = `doc-bread-nav${isImmediateParent ? ' breadcrumb-subsection' : ''}${isFirstParent ? ' doc-bread-nav-first' : ''}`;
			if (href && href !== '#') {
				items.push(
					<a key={`crumb-${idx}`} className={className} href={href} aria-label={`Navigate to ${node.name}`}>
						{node.name}
					</a>
				);
			} else {
				items.push(
					<span key={`crumb-${idx}`} className={className} aria-label={node.name}>
						{node.name}
					</span>
				);
			}
		});

		return <>{items}</>;
	}

	componentDidMount() {
		this.handleScroll = this.handleScroll.bind(this);
		window.addEventListener('scroll', this.handleScroll, { passive: true });

		// Sync hover between Home icon and Home text so either hover highlights both
		this._breadcrumbHoverAdd = () => {
			const nav = document.getElementById('doc-breadcrumb');
			if (nav) nav.classList.add('doc-breadcrumb-hover');
		};
		this._breadcrumbHoverRemove = () => {
			const nav = document.getElementById('doc-breadcrumb');
			if (nav) nav.classList.remove('doc-breadcrumb-hover');
		};
		const nav = document.getElementById('doc-breadcrumb');
		if (nav) {
			const home = nav.querySelector('.breadcrumb-home');
			const titleLink = nav.querySelector('.breadcrumb-home-title a');
			if (home) {
				home.addEventListener('mouseenter', this._breadcrumbHoverAdd);
				home.addEventListener('mouseleave', this._breadcrumbHoverRemove);
			}
			if (titleLink) {
				titleLink.addEventListener('mouseenter', this._breadcrumbHoverAdd);
				titleLink.addEventListener('mouseleave', this._breadcrumbHoverRemove);
			}
		}

		// apply initial state
		this.handleScroll();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
		const nav = document.getElementById('doc-breadcrumb');
		if (nav) {
			const home = nav.querySelector('.breadcrumb-home');
			const titleLink = nav.querySelector('.breadcrumb-home-title a');
			if (home) {
				home.removeEventListener('mouseenter', this._breadcrumbHoverAdd);
				home.removeEventListener('mouseleave', this._breadcrumbHoverRemove);
			}
			if (titleLink) {
				titleLink.removeEventListener('mouseenter', this._breadcrumbHoverAdd);
				titleLink.removeEventListener('mouseleave', this._breadcrumbHoverRemove);
			}
		}
	}

	handleScroll() {
		const el = document.getElementById('breadcrumb-container');
		if (!el) return;
		if (window.pageYOffset && window.pageYOffset > 0) {
			el.classList.add('scrolled');
		} else {
			el.classList.remove('scrolled');
		}
	}

	render() {
		return (
			<div id="breadcrumb-container">
				<nav id="doc-breadcrumb">
					{this.renderBreadcrumbContent()}
				</nav>
				<div className="focus-mode-controls" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
				</div>
			</div>
		);
	}
}
