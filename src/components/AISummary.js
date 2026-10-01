import React, { useState, useRef } from 'react';
import { marked } from 'marked';
import "../assets/css/ai-summary.css"

const SUMMARY_API_URL = 'https://help.boldbi.com/prod/assistant';
const SUMMARY_DOMAIN = 'https://help.boldbi.com';

function buildLivePageUrl() {
    const path = window.location.pathname;
    return `${SUMMARY_DOMAIN}${path}`;
}

// Convert the AI response md into HTML
function renderSummaryMarkdown(markdown) {
    if (!markdown || typeof markdown !== 'string') {
        return '';
    }

    return marked.parse(markdown);
}

export default function ExpandableSummary() {
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [summaryHtml, setSummaryHtml] = useState('');
    const [error, setError] = useState('');

    // Persists across hide/expand, resets only on page refresh.
    const cachedSummaryRef = useRef('');

    const handleSummarize = async () => {
        setExpanded(true);

        if (cachedSummaryRef.current) {
            setSummaryHtml(cachedSummaryRef.current);
            setError('');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const liveUrl = buildLivePageUrl();

            const response = await fetch(SUMMARY_API_URL, {
                method: 'POST',
                body: JSON.stringify({ content: `summarize ${liveUrl}` })
            });

            if (!response.ok) {
                throw new Error(`Summary request failed (${response.status})`);
            }

            const data = await response.json();
            const summaryText = data.summary || '';

            if (!summaryText) {
                throw new Error('The AI service returned an empty summary.');
            }

            const html = renderSummaryMarkdown(summaryText);

            cachedSummaryRef.current = html;
            setSummaryHtml(html);
        } catch (err) {
            setError(err.message || 'Unable to summarize this article.');
        } finally {
            setLoading(false);
        }
    };

    const handleHide = () => setExpanded(false);

    return (
        <div id="ai-summary" className="ai-summary">
            {!expanded && (
                <button
                    id="ai-summary-button"
                    type="button"
                    className="ai-summary-button"
                    data-test-id="ai-summary-button"
                    data-bi-name="ai-summary-cta"
                    onClick={handleSummarize}
                    disabled={false}
                >
                    <span className="ai-summary-button__icon" aria-hidden="true"></span>
                    <span className="ai-summary-button__text">
                        Summarize this article
                    </span>
                </button>
            )}

            {error && (
                <div className="ai-summary-error" role="alert">
                    {error || 'Unable to summarize this article.'}
                </div>
            )}

            {expanded && (
                <section
                    id="ai-summary-card"
                    className="ai-summary-card"
                    aria-labelledby="ai-summary-title"
                >
                    <header className="ai-summary-card__header">
                        <h2 id="ai-summary-title" className="ai-summary-card__title">
                            <span className="ai-summary-card__title-icon" aria-hidden="true"></span>
                            <span>AI Summary</span>
                        </h2>

                        <button
                            type="button"
                            className="ai-summary-hide-button"
                            data-test-id="ai-summary-hide"
                            data-bi-name="toggle-ai-summary-button"
                            onClick={handleHide}
                        >
                            Hide
                        </button>
                    </header>

                    <div
                        id="ai-summary-content"
                        className="ai-summary-card__content"
                        data-test-id="ai-summary-content"
                    >
                        {loading || !summaryHtml ? (
                            <div
                                className="ai-summary-card__loading"
                                role="status"
                                aria-live="polite"
                            >
                                Generating...
                            </div>
                        ) : (
                            <>
                                <div
                                    className="ai-summary-card__text"
                                    dangerouslySetInnerHTML={{ __html: summaryHtml }}
                                />

                                <footer className="ai-summary-card__footer">
                                    <span className="ai-summary-card__disclaimer">
                                        AI-generated content may be inaccurate.
                                    </span>
                                </footer>
                            </>
                        )}
                    </div>
                </section>
            )}
        </div>
    );
}