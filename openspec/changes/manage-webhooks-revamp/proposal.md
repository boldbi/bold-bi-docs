## Why

The Manage Webhooks page (`docs/manage-webhooks/index.md`, URL `/manage-webhooks/`) opens its Create section with a banned filler sentence ("This section explains..."). Most of its webhook facts (events, headers, payload contents, authentication and signing behavior) are not in the Bold BI fact sheet. The fact sheet has one webhook row (R76, MCP tool `webhook_list`), which does not cover these behaviors. AI assistants quote section openings and trust facts they can verify, so the page answers less directly and is less verifiable than it should be.

## What Changes

- Rewrite the opening sentence under the H1 to answer "how do I manage webhooks in Bold BI" directly.
- Rewrite the banned opener in the Create Webhook section.
- Replace behavior and setup statements that no fact sheet row confirms with `[NEEDS FACT: ...]` markers, and remove the unconfirmed claim tables and sentences they replace.
- Make image alt text unique and descriptive.
- Add one link to the existing `/manage-webhooks/webhook-payload/` page in the Payload section.
- Keep all headings, UI labels, step order, anchors and front matter title. Update the front matter `description` only.

## Capabilities

### New Capabilities
- None.

### Modified Capabilities
- `ug-page-content-standards`: applies the existing rules (answer first, no banned openers, unconfirmed facts flagged not changed) to the manage-webhooks user guide page. The delta is in `specs/ug-page-content-standards/spec.md`.

## Impact

- One file: `docs/manage-webhooks/index.md` on branch `fixes/manage-webhooks` (PR #67).
- No code, build, navigation, sidebar, template or dependency change.
- Out of scope: `docs/manage-webhooks/webhook-payload.md` (separate page), title ending, the H1 wording ("Embedded BI Application" and "Bold BI Embedded" naming is flagged, not changed), UI labels, image paths, and the Basic Auth wording conflict (flagged, not changed).
