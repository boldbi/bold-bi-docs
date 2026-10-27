## Context

The page is a user guide page built with Gatsby. Headings are link targets (`#events`, `#webhook-authentication`, `#webhook-signing`, `#payload`), so they stay fixed. The only evidence in the fact sheet for webhooks is R76. Everything else about webhook events, headers, payloads, and authentication or signing is unconfirmed.

## Decisions

- Interpretation: the coordinator rule "webhook events, payloads or setup are [NEEDS FACT] unless another official page confirms it" is applied to behavior and security statements. Procedural UI steps (button names, menu items, page locations) are kept, because they are not fact-sheet claims and the brief says not to change step order or UI labels. This is flagged for the team to confirm.
- The live help.boldbi.com page matches the source, but it is the same page, so it does not count as independent confirmation.
- The title (57 characters, ends with `| Bold BI Docs`) is kept. The meta description is rewritten to 146 characters.
- Word count will fall below the 10% band because unconfirmed claims are removed rather than kept. This is reported as a team decision, not filled with new text.

## Risks

- Readers lose the explanation of headers, payloads and signing until the product owner confirms the facts.
- The `Bold BI Embedded` and `Embedded BI Application` wording is not an approved name. Left as-is because it is a UI label and title text, and changing it needs a team decision.
- The Basic Auth wording for API keys and the `x-signature` versus `X-Signature` capitalization conflict with each other inside the page. Both are flagged.
