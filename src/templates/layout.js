import React from "react";
import Helmet from "react-helmet";
import Header from '../components/Header';
import DocsTabs from '../components/DocsTabs';
import Footer from "../components/Footer";
import RightToc from "../components/RightToc";
import LeftToc from "../components/LeftToc";
import NavigationButtons from "../components/NavigationButtons";
import MdContents from "../components/MdContents";
import Breadcrumb from "../components/BreadCrumb";
import MobileLeftTocOverlay from "../components/MobileLeftTocOverlay";
import "../assets/css/style.css";
import "../assets/css/prism.css";
import toc from '../../left-toc.json';

export default class LayoutTemplate extends React.Component {
	treeData;
	indexPageMapper;
	accordionData;
	routerData = [];
	accordionInstance;

	leftSideBar;
	rightSideBar;
	pathPrefix;

	constructor() {
		super();
		this.treeData = toc.treeData;
		this.accordionData = toc.accData;
		this.routerData = toc.routerData;
		this.indexPageMapper = toc.indexPageMapper;
		this.pathPrefix = toc.pathPrefix;

		this.state = {
			mobileTocOpen: false
		};

		this.toggleMobileToc = this.toggleMobileToc.bind(this);
		this.closeMobileToc = this.closeMobileToc.bind(this);
	}

	toggleMobileToc() {
		this.setState((s) => ({ mobileTocOpen: !s.mobileTocOpen }));
	}

	closeMobileToc() {
		this.setState({ mobileTocOpen: false });
	}

	componentDidMount() {
		var indexpath = window.location.origin;
		if (indexpath !== "https://help.boldbi.com") {
			var noindex = document.createElement('meta');
			noindex.setAttribute('name', 'robots');
			noindex.content = 'noindex';
			document.getElementsByTagName('head')[0].appendChild(noindex);
		}
		sitevisitorLoad();
		helpBotLoad();
		// boldDeskLiveChat();
		askButtonLoad();

		if (!window.location.hash.length) {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}

		setTimeout(() => {
			if (window.location.hash) {
				const targetElement = document.querySelector(window.location.hash);

				if (targetElement) {
					targetElement.click();
				}
			}

			this.dispatchResizeEvent();
		}, 300);
	}

	shouldComponentUpdate(nextProps, nextState) {
		// Allow updates if it's the first render or props/state changed
		return true;
	}

	dispatchResizeEvent() {
		let resizeEvent = window.document.createEvent('UIEvents');
		resizeEvent.initUIEvent('resize', true, false, window, 0);
		window.dispatchEvent(resizeEvent);
	}

	getPathName() {
		if (typeof window === 'undefined') return '';
		return window.location.pathname.replace(this.pathPrefix || '', '');
	}

	/* eslint-disable */
	render() {
		const postNode = this.props.pageContext;
		const domain = 'https://staginghelp.boldbi.com';
		const canonicalUrl = postNode.frontmatter.canonical ? domain + postNode.frontmatter.canonical : domain + postNode.slug;
		var metaRobot = { name: 'robots', content: 'follow' }
		return (
			<>
				<Helmet>
					<title>{postNode.frontmatter.title}</title>
					<meta name="description" content={postNode.frontmatter.description} />
					<meta name="keywords" content={postNode.frontmatter.keywords} />
					<meta name={metaRobot.name} content={metaRobot.content} />
					<link rel="canonical" key={canonicalUrl} href={canonicalUrl} data-react-helmet="true" />

					{/* Favorite Icon */}
					<link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
					<link rel="icon" href="/favicon-192x192.png" sizes="192x192" />
					<link rel="apple-touch-icon" href="/favicon-180x180.png" />
					<meta name="msapplication-TileImage" content={domain + "/favicon-270x270.png"} />
					
					{/* OG Tags */}
					<meta property="og:title" content={postNode.frontmatter.title} />
					<meta property="og:description" content={postNode.frontmatter.description} />
					<meta property="og:image" content={domain + "/img/og-img.png"} />
					<meta property="og:image:secure_url" content={domain + "/img/og-img.png"} />
					<meta property="og:image:width" content="1200" />
					<meta property="og:image:height" content="630" />
					<meta property="og:image:type" content="image/png" />
					<meta property="og:image:alt" content="Bold BI Documentation" />
					<meta property="og:url" content={canonicalUrl} />
					<meta property="og:type" content="article" />
					<meta property="og:site_name" content="Bold BI Docs" />
					<meta property="og:locale" content="en_US" />

					{/* Twitter */}
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content={postNode.frontmatter.title} />
					<meta name="twitter:description" content={postNode.frontmatter.description} />
					<meta name="twitter:image" content={domain + "/img/og-img.png"} />

					{/* Google Tag Manager */}
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-SRXJZD7EME"></script>
					<script>
						{`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){ dataLayer.push(arguments); }
                            gtag('js', new Date());
                            gtag('config', 'G-SRXJZD7EME');
                        `}
					</script>
				</Helmet>

				<Header />
				<DocsTabs />
				<MobileLeftTocOverlay open={this.state.mobileTocOpen} onClose={this.closeMobileToc} />
				<div id="layout-container">
					<div id="left-side">
						<LeftToc />
					</div>
					<div id="right-side">
						<main>
							<Breadcrumb
								routerData={this.routerData}
								pathName={this.getPathName()}
								indexPageMapper={this.indexPageMapper}
								pathPrefix={this.pathPrefix}
								treeData={this.treeData}
								onToggleMobileToc={this.toggleMobileToc}
							/>
							<div id="content-container">
								<MdContents html={postNode.html} lastUpdated={postNode.lastUpdated} />
								<NavigationButtons />
							</div>
						</main>
						<RightToc html={postNode.html} enableBehavior />
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

function helpBotLoad() {
	if (window.__helpBotLoad) return;
	if (typeof window === 'undefined') return;
	// Dynamically import CSS and JS from src so Gatsby bundles them during develop/build.
	try {
		// Import CSS (handled by webpack/gatsby)
		import('../assets/css/helpbot.css')
			.catch(e => console.error('helpbot css import failed', e));

		const script = document.createElement("script");
		script.src = "/js/helpbot.js";
		script.defer = true;
		script.async = true;
		document.body.appendChild(script);
		window.__helpBotLoad = true;

	} catch (e) {
		console.error('helpBotLoad failed', e);
	}
}

function boldDeskLiveChat() {
	if (window.__boldDeskLoaded || document.getElementById('boldchat-widget')) return;
	const script = document.createElement("script");
	script.src = "https://support.boldbi.com/chatwidget-api/widget/v1/240f11f3-ccc2-4755-8fc5-5a7fa9bc9b1e";
	script.defer = true;
	script.async = true;

	document.body.appendChild(script);
	window.__boldDeskLoaded = true;
}

function askButtonLoad() {
	if (!window.__askButtonLoad) {
		const script = document.createElement("script");
		script.src = "/js/focus-button.js";
		script.defer = true;
		script.async = true;
		document.body.appendChild(script);
		window.__askButtonLoad = true;
	}
}

function sitevisitorLoad() {
	if (!window.__sitevisitorLoad) {
		const script = document.createElement("script");
		script.src = "/js/sitevisitor-tracking.js";
		script.defer = true;
		script.async = true;
		document.body.appendChild(script);
		window.__sitevisitorLoad = true;
	} else {
		setlocalstorage();
		append_query_string();
		storageExpriedate();
		append_query_string_access_demo_link();
		append_request_demo_form_lead_details();
	}
}
