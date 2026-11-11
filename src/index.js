import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import DocsTabs from './components/DocsTabs'
import LeftToc from './components/LeftToc'
import Footer from './components/Footer'
import MobileLeftTocOverlay from './components/MobileLeftTocOverlay'
import MdContents from './components/MdContents'
import Breadcrumb from './components/BreadCrumb'
import Helmet from 'react-helmet'
import toc from '../left-toc.json'
import { visitorUidScript } from './templates/layout'
import './assets/css/mobile-lefttoc.css'
import './assets/css/content.css'
import './assets/css/style.css'
import './assets/css/homepage.css'

const homeHtml = `
  <h1>Welcome to the Bold BI documentation</h1>
  <p>
    Bold BI is Syncfusion's business intelligence and embedded analytics platform for building interactive dashboards and embedding them in your own applications. It connects to 145 data connectors across 23 categories, offers 41 Modern visualization widgets, and runs on Cloud or On-Premises, including Windows, Linux, Docker and Kubernetes. This documentation covers Bold BI v17.1.30, released October 1, 2026.
  </p>
  <p>
    Use this documentation to configure your environment, build dashboards, manage users, and integrate analytics into your applications.
  </p>

  <section id="categories">
    <h2>Set Up Your Environment</h2>
    <p class="categories-desc">Before creating dashboards, configure your environment and access settings:</p>

    <div class="categories-cards">
      <div class="categories-card"><a href="/site-administration/">
      <div class="home-card-icon"><img class="no-zoom" src="/img/configure-site-settings.svg" alt="Configure site settings" width="54" height="54"/></div>
        <h3>Configure site settings</h3>
        <p>Set up general configuration, authentication, and system preferences.</p>
      </a>
      </div>

      <div class="categories-card"><a href="/managing-resources/">
        <div class="home-card-icon"><img class="no-zoom" src="/img/manage-users-and-roles.svg" alt="Manage users and roles" width="54" height="54"/></div>
        <h3>Manage users and roles</h3>
        <p>Add users, assign roles, and control access permissions.</p>
        </a>
      </div>
    </div>
  </section>

  <section id="categories">
    <h2>Work with Dashboards</h2>
    <p class="categories-desc">Build a Bold BI dashboard in three steps: connect to one of 145 data connectors, prepare the data, then add widgets from 41 Modern visualization types.</p>

    <div class="categories-cards">
      <div class="categories-card"><a href="/getting-started/creating-dashboard/">
        <div class="home-card-icon"><img class="no-zoom" src="/img/create-a-dashboard.svg" alt="Create a dashboard" width="54" height="54"/></div>
        <h3>Create a dashboard</h3>
        <p>Create a dashboard by connecting to a data source, preparing data, and adding widgets.</p>
      </a>
      </div>

      <div class="categories-card"><a href="/working-with-data-sources/creating-a-new-data-source/">
        <div class="home-card-icon"><img class="no-zoom" src="/img/connect-to-data.svg" alt="Connect to data" width="54" height="54"/></div>
        <h3>Connect to data</h3>
        <p>Create and configure data sources to retrieve data for dashboards.</p>
        </a>
      </div>

      <div class="categories-card"><a href="/working-with-data-sources/">
        <div class="home-card-icon"><img class="no-zoom" src="/img/prepare-data.svg" alt="Prepare data" width="54" height="54"/></div>
        <h3>Prepare data</h3>
        <p>Clean, transform, and structure your data before visualization.</p>
        </a>
      </div>
    </div>
  </section>

  <section id="categories">
    <h2>AI-powered Analytics</h2>
    <p class="categories-desc">Bold BI AI Copilot, AI Agent and AI Assistant answer questions and create widgets from plain-language prompts. On-premises sites can bring their own key for OpenAI, Azure OpenAI or Anthropic.</p>

    <div class="categories-cards">
      <div class="categories-card"><a href="/artificial-intelligence-and-machine-learning/">
        <div class="home-card-icon"><img class="no-zoom" src="/img/use-ai-copilot.svg" alt="Use AI Copilot" width="54" height="54"/></div>
        <h3>Use AI Copilot</h3>
        <p>Generate insights and assist dashboard creation using AI features.</p>
      </a>
      </div>

    </div>
  </section>

  <section id="categories">
    <h2>Build and Integrate Analytics</h2>
    <p class="categories-desc">Embed Bold BI dashboards in your application with the embedding SDKs. The embed token is generated on your server. Automate administration with the Server REST API.</p>

    <div class="categories-cards">
      <div class="categories-card"><a href="/getting-started/embedding-in-your-application/">
        <div class="home-card-icon"><img class="no-zoom" src="/img/embed-dashboards.svg" alt="Embed dashboards" width="54" height="54"/></div>
        <h3>Embed dashboards</h3>
        <p>Embed dashboards into applications using secure embedding options and customization features.</p>
      </a>
      </div>

      <div class="categories-card"><a href="/server-api-reference/">
        <div class="home-card-icon"><img class="no-zoom" src="/img/use-rest-api.svg" alt="Use REST APIs" width="54" height="54"/></div>
        <h3>Use REST APIs</h3>
        <p>Manage dashboards, users, and permissions programmatically.</p>
        </a>
      </div>
    </div>
  </section>

  <section id="categories">
    <h2>Learning Resources and Updates</h2>
    <p class="categories-desc">Explore additional resources and stay updated:</p>

    <div class="categories-cards">
      <div class="categories-card"><a href="https://www.boldbi.com/self-help-demo/" target="_blank">
        <div class="home-card-icon"><img class="no-zoom" src="/img/demos.svg" alt="Demos" width="54" height="54"/></div>
        <h3>Demos</h3>
        <p>View interactive examples demonstrating dashboard capabilities.</p>
        </a>
      </div>
      <div class="categories-card"><a href="https://samples.boldbi.com/solutions" target="_blank">
        <div class="home-card-icon"><img class="no-zoom" src="/img/sample-dashboards.svg" alt="Sample dashboards" width="54" height="54"/></div>
        <h3>Sample dashboards</h3>
        <p>Explore pre-built dashboards for various business scenarios.</p>
        </a>
      </div>
    </div>

    <div class="categories-cards">
      <div class="categories-card"><a href="https://academy.boldbi.com/" target="_blank">
        <div class="home-card-icon"><img class="no-zoom" src="/img/academy.svg" alt="Academy" width="54" height="54"/></div>
        <h3>Academy</h3>
        <p>Access structured training and learning materials.</p>
        </a>
      </div>
      <div class="categories-card"><a href="https://www.boldbi.com/resources/release-history/" target="_blank">
        <div class="home-card-icon"><img class="no-zoom" src="/img/release-updates.svg" alt="Release updates" width="54" height="54"/></div>
        <h3>Release updates</h3>
        <p>Review the latest features and version updates.</p>
      </a>
      </div>
    </div>
  </section>

  <section id="faq">
    <h2>Frequently asked questions</h2>

    <h3>Which data sources does Bold BI connect to?</h3>
    <p>Bold BI has 145 documented data connectors across 23 categories, including SQL databases, files (CSV, Excel, JSON, XML, EDI, Parquet), NoSQL, cloud storage and SaaS apps such as Salesforce and HubSpot.</p>

    <h3>Where can I deploy Bold BI?</h3>
    <p>Bold BI runs on Cloud or On-Premises. On-Premises runs on Windows, Linux (RHEL, Ubuntu), Docker and Kubernetes.</p>

    <h3>How do I embed Bold BI dashboards in my application?</h3>
    <p>Use the embedding SDKs or APIs. The embed token is generated on your server.</p>

    <h3>Which AI providers can Bold BI use?</h3>
    <p>Bold BI offers four provider choices: Bold AI Service, OpenAI, Anthropic and Azure AI. Bringing your own key is available only for on-premises users. Anthropic BYOK needs Bold BI v16.1.90 or later.</p>

    <h3>What is the current version of Bold BI?</h3>
    <p>The current release is v17.1.30, released October 1, 2026. Bold BI ships a main release every 3 months and a service pack every month.</p>
  </section>
`;

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Bold BI',
      url: 'https://www.boldbi.com/',
      logo: 'https://help.boldbi.com/img/boldbi-logo.svg',
      parentOrganization: { '@type': 'Organization', name: 'Syncfusion, Inc.' },
    },
    {
      '@type': 'WebSite',
      name: 'Bold BI Documentation',
      url: 'https://help.boldbi.com/',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Bold BI',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Windows, Linux',
      softwareVersion: '17.1.30',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Bold BI Documentation', item: 'https://help.boldbi.com/' },
      ],
    },
  ],
};

export default function Home(props) {
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const ctx = (props && props.pageContext) || {};
  const html = ctx.html || homeHtml;
  const lastUpdated = ctx.lastUpdated;

  const toggleMobileToc = () => setMobileTocOpen(s => !s);
  const closeMobileToc = () => setMobileTocOpen(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      if (!window.__askButtonLoad) {
        const script = document.createElement('script');
        script.src = '/js/focus-button.js';
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
        window.__askButtonLoad = true;
      }

      // Ensure home page does not remain in focus mode when navigated from content pages
      try {
        if (typeof document !== 'undefined' && document.body && document.body.classList.contains('focus-mode')) {
          document.body.classList.remove('focus-mode');
        }
      } catch (e) { }
      try { window.localStorage && window.localStorage.setItem('site_focus_mode', '0'); } catch (e) { }
    } catch (e) { /* ignore */ }

	function loadTrackingScript() {
		const script = document.createElement("script");
		script.src = `https://cdn.boldbi.com/website/js/tracking.js?v=${Date.now()}`;
		script.async = true;
		document.head.appendChild(script);
	}

	loadTrackingScript();
  }, []);

  // derive pathName similarly to layout (strip pathPrefix if present)
  const pathPrefix = toc.pathPrefix || '';
  const pathName = (typeof window !== 'undefined') ? window.location.pathname.replace(pathPrefix, '') : '';

  const domain = 'https://help.boldbi.com';
  const metaTitle = 'Bold BI Documentation - AI-Powered Embedded Analytics';
  const metaDesc = 'Learn how to build dashboards, embed analytics, configure AI, and manage Bold BI with step-by-step guides for users, admins, and developers.';
  const canonicalUrl = domain + '/';

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content="Bold BI documentation, AI-powered analytics documentation, Embedded analytics dashboards, Self-service BI dashboards, Bold BI embedding guide, BI dashboard creation guide, Analytics SDK documentation, AI analytics dashboards, Bold BI administration guide" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(homeSchema)}</script>

        {/* Favorite Icon */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon-180x180.png" />
        <meta name="msapplication-TileImage" content={domain + "/favicon-270x270.png"} />

        {/* OG Tags */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={domain + "/img/og-img.png"} />
        <meta property="og:image:secure_url" content={domain + "/img/og-img.png"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Bold BI Documentation" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Bold BI Docs" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={domain + "/img/og-img.png"} />

        {/* UUID Passing to GTM */}
        <script>{visitorUidScript}</script>

        {/* Google Tag Manager / gtag */}
        <script>
          {`
            (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-5PHX5HL');
          `}
        </script>
      </Helmet>
      <Header />
      <DocsTabs />
      <MobileLeftTocOverlay open={mobileTocOpen} onClose={closeMobileToc} />
      <div id="layout-container" class="home-layout-container">
        <div id="left-side">
          <LeftToc />
        </div>
        <div id="right-side">
          <main>
            <Breadcrumb
              routerData={toc.routerData}
              pathName={pathName}
              indexPageMapper={toc.indexPageMapper}
              pathPrefix={pathPrefix}
              treeData={toc.treeData}
              onToggleMobileToc={toggleMobileToc}
            />
            <div id="content-container">
              <MdContents html={html} lastUpdated={lastUpdated} />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}