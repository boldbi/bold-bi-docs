## Why

The Monitoring page (`docs/monitoring/index.md`, URL `/monitoring/`) opens with a banned filler sentence ("This article describes..."), so an AI assistant that quotes the opening does not get a direct answer. The page also states endpoint behavior ("By default...", "verify that the services are online and functioning correctly") that the Bold BI fact sheet does not confirm. The title and description also need to match what the page covers.

## What Changes

- Rewrite the opening sentence under the H1 so it answers how to monitor Bold BI application services, and names the product and the three tools.
- Rewrite the description (meta description) to 142 characters, naming Bold BI and the reader task.
- Replace the unconfirmed "By default" claim and the unconfirmed "verify ... functioning correctly" claim with [NEEDS FACT] markers for product-owner confirmation.
- Replace "the following" and "refer to" wording in the three lead-in sentences with direct instructions.
- Update the Datadog support link to the address it redirects to (same article).
- Rewrite the closing sentence to name Bold BI support.
- Keep the H1, title, endpoint paths, the five support article links, and the front matter keys unchanged.

## Capabilities

### New Capabilities
- `ug-page-content-standards`: answer-first section openings, [NEEDS FACT] handling for unconfirmed behavior, and the scope limits on headings, endpoints and links. The same rules are used in the `manage-users-aeo` change; this branch has no `openspec/specs/` entry yet.

### Modified Capabilities
- None.

## Impact

- Affects one file: `docs/monitoring/index.md` on branch `fixes/monitoring` (PR #69).
- Body word count changes from 244 to 249 (+2.0%), within the 10% limit.
- No code, build, navigation, sidebar, template or dependency change.
- Out of scope: title ending and H1 wording (flagged as team decisions), the main search term, the sibling title ending ("| Bold BI Docs" kept), internal links to other Bold BI pages (none added without confirmed targets), and the pre-existing `gulp seo-validation` failure on the branch.
