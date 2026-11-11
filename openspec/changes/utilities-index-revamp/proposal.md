## Why

The Bold BI Utilities index page (`docs/utilities/index.md`, URL `/utilities/`) opens with the filler sentence "This section provides links..." and its front matter description begins "This section explains...". The title and description name only two of the three utilities, and the body says "Use the following links:", which does not stand alone when quoted. AI assistants quote the first sentence of a section, so the page answers less directly than it could.

## What Changes

- Replace the title so it names Bold BI utilities and the command line tools, keeping the sibling ending `| Bold BI Docs`.
- Replace the front matter description so it says what the reader can do and names all three utilities.
- Replace the opening sentence under the H1 so it names the three utilities directly.
- Replace "Use the following links:" with a line that stands alone.
- No facts added, removed or changed. No headings, link targets, URL slug, layout or front matter fields other than title and description changed.

## Capabilities

### New Capabilities
- None.

### Modified Capabilities
- `ug-page-content-standards` (new delta in this change): sections open with the answer and do not use filler openers. See `specs/ug-page-content-standards/spec.md`.

## Impact

- One file: `docs/utilities/index.md` on branch `fixes/utilities` (PR #81).
- No code, build, navigation, sidebar, template or dependency change.
- Team decisions, not changed here: the title ending for Bold BI (the sibling ending `| Bold BI Docs` is kept; the Bold BI profile lists the title ending as unconfirmed), and the main search term "Bold BI utilities" (no term is stated on the page).
- Out of scope: the three linked pages, their content, the Fine-Tuning Utility facts (the fact sheet has no utility rows), and any change to the link text or link targets.
