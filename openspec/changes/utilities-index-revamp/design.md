## Context

`docs/utilities/index.md` is a 39-word index page. Its body is an opening sentence, a lead-in line and three links to child pages (`bold-bi-command-line-tools/`, `classic-dashboard-migration-tool.md`, `fine-tuning-utility/`). All three link targets return HTTP 200 on help.boldbi.com. The Bold BI fact sheet has no rows about these three utilities, so the page makes no checkable behavior claims and the change is wording only.

## Goals / Non-Goals

Goals:
- The title and description name the three utilities and what the reader can do.
- The opening sentence answers the page's question (which utilities exist) with no filler.
- Body word count stays within 10% of 39 words.

Non-Goals:
- No change to the child pages, link targets, headings, URL slug or template.
- No new facts, no new links, no padding to reach a word count.

## Decisions

- Title is 56 characters including the sibling ending `| Bold BI Docs`, which keeps the repo's sibling pattern. The product name "Bold BI" appears at the start and in the ending.
- The description is 155 characters and names all three utilities. It omits "This section" and does not use the "Admin Utility" wording from the old title.
- The main search term is "Bold BI utilities" (taken from the H1). The page states no term, so this is a team decision to confirm.
- The lead-in line "Open the guide for the utility you need:" replaces "Use the following links:" so it reads alone when quoted.

## Risks / Trade-offs

- The sibling ending is kept. If the team later changes the ending for Bold BI, the title must change again. Flagged in the PR.
- The fact sheet cannot confirm what each utility does. The index makes no such claim, so nothing is asserted. Child pages need their own review.
