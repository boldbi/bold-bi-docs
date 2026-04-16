import React from 'react';

class FocusButton extends React.Component {
	render() {
		return (
			<div className="focus-container">

				<div className="focus-dropdown">
					<div className="focus-item focus-helpbot">
						<div className="focus-title">Ask HelpBot</div>
						<div className="focus-desc">Ask HelpBot about this page</div>
					</div>

					<div className="focus-divider"></div>

					<div className="focus-item focus-copy-md">
						<div className="focus-title">Copy page</div>
						<div className="focus-desc">Copy as Markdown for LLMs</div>
					</div>

					<div className="focus-item focus-view-md">
						<div className="focus-title">View as Markdown</div>
						<div className="focus-desc">View as plain text</div>
					</div>

					<div className="focus-divider"></div>

					<div className="focus-item focus-open-chatgpt">
						<div className="focus-title">Open in ChatGPT</div>
						<div className="focus-desc">Ask ChatGPT about this page</div>
					</div>

					<div className="focus-item focus-open-claude">
						<div className="focus-title">Open in Claude</div>
						<div className="focus-desc">Ask Claude about this page</div>
					</div>
				</div>
			</div>
		)
	}
}

export default FocusButton;
