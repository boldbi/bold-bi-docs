## Context

The page is a short reference page (about 244 words in the body) with five support article links and eight health check endpoint paths. The Bold BI fact sheet has no row for health check endpoints or their default behavior. The only monitoring rows in the fact sheet (R203 and R219) are Cloud SLA-type statements and are not used as product claims.

## Decisions

- **Endpoints kept as written.** The paths were not shown to be wrong. Their behavior is marked [NEEDS FACT] for product-owner review, not removed.
- **Example endpoint labelled.** The intro example `/api/health-check` is now marked "for IDP-API", which matches the endpoint list. This answers the review note on PR #69 without adding a new claim.
- **Unverified behavior as markers.** Statements the fact sheet does not confirm are replaced by [NEEDS FACT: what is needed] text. Per the shared rules, these markers must be resolved before the page is marked ready.
- **Link fix only.** The Datadog link is updated to the address returned by the 301 redirect. All other KB links returned 200 from this machine.
- **Title and H1 unchanged.** The title keeps the sibling ending "| Bold BI Docs". The H1 "Monitoring Bold BI Application" is the main search term; the title's phrase "Monitoring the Health of Bold BI Services" differs and is a team decision.
- **Interim page status.** Because of the [NEEDS FACT] markers, the page is not ready for publication until those are confirmed or removed.

## Risks

- The [NEEDS FACT] markers are visible on the rendered page if merged before confirmation. The PR is a draft and must stay a draft until they are resolved.
- The Datadog redirect target could change again; it was checked on the date of this change.
