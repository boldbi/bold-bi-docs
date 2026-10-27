## Context

The page is a Bold BI user guide page with a Gatsby build. Its heading anchors are linked from other pages, so headings stay fixed. The fact sheet has no disaster recovery procedure rows, so the procedure statements cannot be confirmed from the fact sheet.

## Decisions

- Keep the same file path, URL slug and main search term ("disaster recovery").
- Keep the sibling title ending "| Bold BI Docs". The old ending "| Bold BI Learning" is flagged for the team as a decision.
- Title has no colon: the seo-validation parser splits front matter at the first colon, so a colon in the title is read as a 17-character title and fails.
- Word count stays within 10% of the original body (1,166 words; 1,106 after).
- Procedure statements with no fact-sheet row stay as written. They appear under NEEDS FACT in the review copy and the PR. Nothing is removed for lack of a row, because removing the procedure would change the page's behavior guidance.
- The AWS restore link points to a third-party blog. Its target is kept as the brief asks, and the team is asked to replace it with an official link.

## Risks

- The page's procedure is unverified, so the Verifiable and Current tests stay Partial. Mitigation: NEEDS FACT list and product owner review before the page is marked ready.
- The live page still shows the older meta description until this branch is deployed.
