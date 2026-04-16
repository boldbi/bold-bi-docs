import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import summaryDocs from '../../docs/summary-docs.json';
import summaryAdmin from '../../docs/summary-admin.json';
import summaryDeployment from '../../docs/summary-deployment.json';
import summaryApi from '../../docs/summary-api.json';
import summaryConnect from '../../docs/summary-connect.json';
import summaryEmbedding from '../../docs/summary-embedding.json';

import '../assets/css/mobile-lefttoc.css';
import '../assets/css/lefttoc.css';

function removeMisc(s) {
    if (!s) return '';
    if (typeof s !== 'string') return '';
    return s.split('?')[0].replace(/\.md$/, '').trim();
}

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

export default function MobileLeftTocOverlay({ open, onClose }) {
    const [activeTab, setActiveTab] = useState('Docs');
    const [openMap, setOpenMap] = useState({});

    const summaryMap = {
        'Docs': summaryDocs,
        'Deploy & Setup': summaryDeployment,
        'Connect Data': summaryConnect,
        'Embedding': summaryEmbedding,
        'Admin': summaryAdmin,
        'API Reference': summaryApi,
    };

    const toc = useMemo(() => generateToc((summaryMap[activeTab] || {})), [activeTab]);

    const topLevelPaths = useMemo(() => toc.filter((t) => t.type === 'section').map((t) => t.path), [toc]);

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

    // Grouping helper: match section titles case-insensitively and normalize whitespace
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

        return null;
    }, [toc, activeTab]);

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const searchRef = useRef(null);

    useEffect(() => {
        function onKey(e) {
            if (e.key === 'Escape') onClose && onClose();
        }
        if (open) document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open, onClose]);

    useEffect(() => {
        if (open) {
            document.body.classList.add('mobile-toc-open');
        } else {
            document.body.classList.remove('mobile-toc-open');
        }
    }, [open]);

    // When overlay opens, set the active tab to the one matching the current pathname
    useEffect(() => {
        if (!open) return;
        try {
            const pathname = (typeof window !== 'undefined' && window.location) ? window.location.pathname : '/';
            let matched = 'Docs';
            Object.keys(summaryMap).forEach((k) => {
                const json = summaryMap[k] || {};
                const t = generateToc(json);
                const paths = [];
                function walk(n) {
                    if (!n) return;
                    if (n.path) paths.push(n.path);
                    if (n.children && n.children.length) n.children.forEach(walk);
                }
                t.forEach(walk);
                if (paths.some(p => p && (pathname === p || pathname.startsWith(p)))) matched = k;
            });
            setActiveTab(matched);
            setQuery('');
            setSuggestions([]);
        } catch (e) {
            // ignore
        }
    }, [open]);

    // mobile overlay no longer includes its own theme toggle (header handles theme)

    // initialize open state for sections whose path is a prefix of current pathname
    useEffect(() => {
        try {
            const pathname = (typeof window !== 'undefined' && window.location) ? window.location.pathname : '/';
            const m = {};
            function visit(node) {
                if (!node || !node.path) return;
                if (node.children && node.children.length) {
                    m[node.path] = pathname.startsWith(node.path);
                    node.children.forEach(visit);
                }
            }
            toc.forEach(t => { if (t && t.type === 'section') visit(t); });
            setOpenMap(m);
        } catch (_) {}
    }, [toc]);

    const toggleOpen = (path, level = 0) => {
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

    function handleNavigate(path) {
        if (!path) return;
        onClose && onClose();
        // use navigate for SPA routing
        try { navigate(path); } catch (_) { window.location.href = path; }
    }

    const RenderNode = ({ node, level = 0 }) => {
        const hasChildren = node.children && node.children.length;
        return (
            <li className={`mobile-toc-item level-${level}`} key={node.path}>
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
                            <Link to={node.path} className={level === 0 ? 'left-toc-section-link mobile-toc-section-link' : 'left-toc-sublink mobile-toc-link'} onClick={() => onClose && onClose()}>{node.title}</Link>
                        </div>
                        {openMap[node.path] && (
                            <ul className={level === 0 ? 'mobile-toc-children left-toc-children' : 'mobile-toc-subchildren left-toc-subchildren'}>
                                {node.children.map(c => <RenderNode key={c.path} node={c} level={level + 1} />)}
                            </ul>
                        )}
                    </>
                    ) : (
                    <Link to={node.path} className="mobile-toc-link left-toc-sublink" onClick={() => onClose && onClose()}>{node.title}</Link>
                )}
            </li>
        );
    };
                const [dropdownOpen, setDropdownOpen] = useState(false);
                const dropdownRef = useRef(null);
                    useEffect(() => {
                        function handleClickOutside(e) {
                            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                            setDropdownOpen(false);
                            }
                        }
                        document.addEventListener('mousedown', handleClickOutside);
                        return () => document.removeEventListener('mousedown', handleClickOutside);
                        }, []);
    return (
        <div className={`mobile-lefttoc-backdrop ${open ? 'open' : ''}`} onClick={onClose} role="presentation">
            <button
                type="button"
                className="mobile-lefttoc-backdrop-close"
                aria-label="Close overlay"
                onClick={(e) => { e.stopPropagation(); onClose && onClose(); }}
            >
                ×
            </button>
            <aside className={`mobile-lefttoc ${open ? 'open' : ''}`} onClick={(e) => e.stopPropagation()} aria-hidden={!open}>
                <div className="mobile-lefttoc-header">
                        {/* logo and overlay theme button removed to rely on header theme toggle */}
                    <div
                    className={`mobile-lefttoc-dropdown-wrapper ${dropdownOpen ? 'open' : ''}`}
                    ref={dropdownRef}
                    >
                    {/* Header */}
                    <div
                        className="mobile-lefttoc-dropdown-trigger"
                        onClick={() => setDropdownOpen(prev => !prev)}
                    >
                        {activeTab}
                    </div>

                    {/* Dropdown list */}
                    {dropdownOpen && (
                        <ul className="mobile-lefttoc-dropdown-menu">
                        {Object.keys(summaryMap).map((k) => (
                            <li
                            key={k}
                            className={`mobile-lefttoc-dropdown-item ${activeTab === k ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab(k);
                                setDropdownOpen(false);
                            }}
                            >
                            <span>{k}</span>
                            </li>
                        ))}
                        </ul>
                    )}
                    </div>
                    <div className="mobile-lefttoc-search">
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
                                const matches = flattened.filter(i => i.title.toLowerCase().indexOf(lower) !== -1).slice(0, 20);
                                setSuggestions(matches);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && suggestions.length) {
                                    e.preventDefault();
                                    handleNavigate(suggestions[0].path);
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
                        { (suggestions.length > 0 || (query && query.trim() !== '')) && (
                            <ul className="mobile-left-toc-search-suggestions">
                                {suggestions.length > 0 ? suggestions.map(s => (
                                    <li key={s.path}>
                                        <button className="mobile-search-suggestion" onClick={() => handleNavigate(s.path)}>{s.title}</button>
                                    </li>
                                )) : (<li className="no-results">No results</li>)}
                            </ul>
                        ) }
                    </div>
                </div>

                <nav className="mobile-lefttoc-nav" aria-label="Mobile left TOC">
                    <ul>
                        {groupedToc ? (
                            groupedToc.map((g, gi) => (
                                <li key={`group-${gi}`} className="left-toc-group">
                                    <div className="left-toc-group-title">{g.title}</div>
                                    <ul className="left-toc-group-list">
                                        {g.items.map((item) => (
                                            item.type === 'link'
                                                ? (<li key={item.path} className="left-toc-item link"><Link to={item.path} className="left-toc-link" onClick={() => onClose && onClose()}>{item.title}</Link></li>)
                                                : (<RenderNode key={item.path} node={item} level={0} />)
                                        ))}
                                    </ul>
                                </li>
                            ))
                        ) : (
                            toc.map((item) => (
                                item.type === 'link'
                                    ? (<li key={item.path} className="left-toc-item link"><Link to={item.path} className="left-toc-link" onClick={() => onClose && onClose()}>{item.title}</Link></li>)
                                    : (<RenderNode key={item.path} node={item} level={0} />)
                            ))
                        )}
                    </ul>
                </nav>
            </aside>
        </div>
    );
}
