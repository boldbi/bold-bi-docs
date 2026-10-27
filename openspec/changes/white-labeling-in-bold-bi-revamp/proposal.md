## Why

The White-Labeling in Bold BI page (`docs/white-labeling-in-bold-bi.md`) opens with filler and promotional wording ("prominently featured", "consistent and integrated experience"), uses "It is used" sentences that an AI assistant cannot quote on their own, uses "this [link]" link text, and names Cloud and Embedded editions with names that are not on the approved list. Its title ends with "| Bold BI Documentation", not the sibling ending "| Bold BI Docs". Its meta description runs 153 characters and does not say what the reader can do.

## What Changes

- Rewrite the front matter title to 59 characters ending "| Bold BI Docs", and the meta description to 146 characters.
- Rewrite the opening paragraph to answer the page question directly and name Bold BI, using only the Whitelabel facts R506 and R507.
- Replace "It is used" sentences with sentences that name the logo or setting.
- Replace "Please refer to this [link]" link text with link text that names the destination.
- Rename "Cloud BI" to "Cloud Edition" (approved name). Keep "Embedded BI" pending a team decision.
- Remove the hype phrase in the domain section and state custom domain mapping (R502, R509).
- Split one long NOTE sentence; replace "Here is" and "Please find the links below" lead-ins; make image alt text unique and descriptive.

## Capabilities

### New Capabilities
- `white-label-page-content`: Rules for the White-Labeling in Bold BI page: answer-first opening, approved names, link text that names its target, unique alt text, and facts limited to the Whitelabel section of the fact sheet.

### Modified Capabilities
- None. No existing spec in `openspec/specs/` covers this page.

## Impact

- One file: `docs/white-labeling-in-bold-bi.md`, branch `fixes/white-labeling-in-bold-bi`, PR #82.
- No change to headings, H1, UI labels, URLs, image paths, code samples, front matter keys, sidebar, navigation, template, styling, or any file under `src/` or `static/`.
- Out of scope: the Powered by and copyright scope against R503, SSO scope against R510, multi-tenancy on Cloud, the Okta conflict, the "Common Branding for Multi-Tenants" heading, "Embedded BI" naming, title suffix choice across the site, and any pricing, trial, licensing, SLA or certification claim.
