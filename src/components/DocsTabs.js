import React from 'react';
import summaryDocs from '../../docs/summary-docs.json';
import summaryAdmin from '../../docs/summary-admin.json';
import summaryDeployment from '../../docs/summary-deployment.json';
import summaryApi from '../../docs/summary-api.json';
import summaryConnect from '../../docs/summary-connect.json';
import summaryEmbedding from '../../docs/summary-embedding.json';

class DocsTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: (typeof window !== 'undefined' && window.localStorage.getItem('docsTab')) || 'Docs'
    };
  }

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

  componentDidMount() {
    // Determine active tab from pathname (mirror Header behavior)
    try {
      const map = {
        'Docs': summaryDocs,
        'Deploy & Setup': summaryDeployment,
        'Connect Data': summaryConnect,
        'Embedding': summaryEmbedding,
        'Admin': summaryAdmin,
        'API Reference': summaryApi,
      };

      const pathname = (typeof window !== 'undefined' && window.location && window.location.pathname) ? window.location.pathname : '/';
      let matched = null;
      Object.keys(map).forEach((tabKey) => {
        try {
          const summaryJson = map[tabKey] || {};
          const singleToc = this.generateToc({ temp: summaryJson });
          const paths = [];
          function collect(n) {
            if (!n) return;
            if (n.path) paths.push(n.path);
            if (n.children && n.children.length) n.children.forEach(collect);
          }
          singleToc.forEach(collect);
          if (paths.some(p => p && (pathname === p || pathname.startsWith(p)))) matched = tabKey;
        } catch (_) {}
      });
      if (matched) {
        this.setState({ activeTab: matched });
        try { window.localStorage.setItem('docsTab', matched); } catch (e) {}
        try { window.dispatchEvent(new CustomEvent('docsTabChanged', { detail: matched })); } catch (e) {}
      }
    } catch (e) { /* ignore */ }
  }

  setTab = (tab) => {
    if (typeof window !== 'undefined') {
      try { window.localStorage.setItem('docsTab', tab); } catch (e) {}
      try { window.dispatchEvent(new CustomEvent('docsTabChanged', { detail: tab })); } catch (e) {}
    }
    this.setState({ activeTab: tab });
  }

  render() {
    const tabs = ['Docs', 'Deploy & Setup', 'Connect Data', 'Embedding', 'Admin', 'API Reference'];
    return (
      <div className="docs-tab-wrap">
        <div className="container docs-tab-container">
          <div className="docs-tab-bar" role="tablist" aria-label="Documentation sections">
            {tabs.map((t) => (
              <button
                key={t}
                className={`docs-tab ${this.state.activeTab === t ? 'active' : ''}`}
                onClick={() => this.setTab(t)}
                role="tab"
                aria-selected={this.state.activeTab === t}
                aria-label={`${t} documentation`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DocsTabs;
