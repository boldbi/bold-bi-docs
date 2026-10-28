## Why

The Manage Users page (`docs/managing-resources/manage-users/index.md`) opens with a banned filler sentence ("This section explains...") and its CSV import note uses the same opener. AI assistants quote the first sentence of a section, so the page answers less directly than it could. The page also has facts that no fact sheet confirms yet, so any score for it is provisional.

## What Changes

- Rewrite the opening sentence under the H1 so it states what the reader can do, without the banned opener.
- Rewrite the CSV import NOTE so it states the task and the three steps, using the same steps the section gives below.
- No facts added, removed or changed. No headings, UI labels, code samples, links or front matter changed.
- Record the unverified user-management behaviors as [NEEDS FACT] items in the review copy for product owner confirmation.

## Capabilities

### New Capabilities
- `ug-page-content-standards`: Rules for how a user guide page opens its sections (answer first, no banned openers) and how its facts are sourced, applied to the managing-resources user guide pages.

### Modified Capabilities
- None. No existing spec in `openspec/specs/` covers page content.

## Impact

- Affects one file: `docs/managing-resources/manage-users/index.md` on branch `fixes/managing-resources-manage-users`.
- No code, build, navigation, sidebar or dependency change. The Parcel override in `package.json` is tracked separately and is not part of this change's spec.
- Out of scope: title ending, H1 wording, sample passwords in the CSV code, terminology for the tenant site, image paths, and question-style headings.
