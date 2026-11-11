## Why

The Disaster Recovery page (`docs/disaster-recovery/index.md`, URL `/disaster-recovery/`) opens with a generic, hype-heavy paragraph ("critical part", "Therefore", "essential") and then uses "This section explains", "the following", "below" and "the above" in several places. AI assistants quote one section at a time, so these sentences do not stand alone. The title ends with "| Bold BI Learning" while the other pages end with "| Bold BI Docs". The meta description is 152 characters and does not say what the reader can do.

## What Changes

- Rewrite the opening paragraph under the Overview heading so it answers "how do I back up and restore Bold BI for disaster recovery" and names Bold BI.
- Remove filler and hype words ("critical", "essential", "Therefore", "crucial", "clear overview") and the openers "This section explains" and "This guide outlines".
- Replace "the following", "below", "above" and "The next section" with the named heading or the named reference.
- Change the title to 59 characters with the sibling ending "| Bold BI Docs". The title has no colon, because the seo-validation parser reads a colon as the end of the field.
- Change the meta description to 150 characters that say what the reader can do and name Bold BI.
- Give the three images descriptive alt text.
- Make the reset link root-relative to the existing page in this repo.

## Capabilities

### New Capabilities
- None.

### Modified Capabilities
- `ug-page-content-standards`: applies the existing rules (sections open with the answer, no "This section explains", facts without a source are flagged and not changed, scope limited to approved wording) to the disaster recovery page.

## Impact

- Affects one file: `docs/disaster-recovery/index.md` on branch `fixes/disaster-recovery`.
- Body word count goes from 1,166 to 1,106 (ratio 0.949), within the 10% limit.
- No code, build, navigation, sidebar or dependency change.
- Out of scope: headings, UI labels, code samples, vendor and KB link targets (except the root-relative reset link), table structure, the H1, the procedure steps and their order, any RPO, RTO, retention, SLA, pricing or licensing text (the page has none), and the unverified procedure claims. Those stay as written and are listed as NEEDS FACT for the product owner.
