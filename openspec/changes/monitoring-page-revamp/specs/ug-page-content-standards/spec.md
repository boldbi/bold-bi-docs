## ADDED Requirements

### Requirement: Sections open with the answer
A user guide section SHALL open with a sentence that states what the reader can do, and SHALL NOT open with "This section explains", "This article describes" or similar filler.

#### Scenario: Opening sentence rewritten on the monitoring page
- **WHEN** the opening sentence under the page H1 begins with "This article describes"
- **THEN** it is rewritten to state the task directly and name the product, with no added facts

### Requirement: Facts without a source are flagged, not changed
Behavior statements that no verified fact sheet row confirms SHALL be replaced with a [NEEDS FACT: what is needed] marker, not kept as statements of fact, and listed for the product owner.

#### Scenario: Endpoint default behavior is unconfirmed
- **WHEN** a statement such as "By default, Bold BI exposes health information" is not confirmed by the fact sheet
- **THEN** the claim is marked [NEEDS FACT: confirm whether these endpoints are enabled by default in each deployment.] and listed in the review copy

### Requirement: Scope is limited to the approved wording
A content change under this capability SHALL NOT change headings, UI labels, code samples, endpoint paths, front matter keys or page structure. A link address MAY be updated only to the address an official redirect returns for the same article.

#### Scenario: Redirecting KB link updated
- **WHEN** a support article link returns 301 to a new address for the same article
- **THEN** the link address is updated and the link text is unchanged

#### Scenario: Heading left unchanged
- **WHEN** the H1 or title does not match the other
- **THEN** it is not changed; the difference is listed as a team decision
