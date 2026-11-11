## MODIFIED Requirements

### Requirement: Sections open with the answer
A user guide section SHALL open with a sentence that states what the reader can do, and SHALL NOT open with "This section explains" or similar filler. Opening paragraphs SHALL NOT use hype words such as "critical" or "essential".

#### Scenario: Overview opener rewritten
- **WHEN** the opening paragraph under the Overview heading begins with "Disaster recovery (DR) is a critical part of Bold BI Server applications"
- **THEN** it is rewritten to answer how to back up and restore Bold BI, with no added facts

#### Scenario: Section intro without filler
- **WHEN** a section intro begins with "This section explains" or "This guide outlines"
- **THEN** it is rewritten to name the task directly

### Requirement: Sentences read alone when quoted
A section SHALL NOT rely on "the following", "below", "above", "the next section" or "as shown above" to point to content. The reference SHALL name the heading or item.

#### Scenario: Pointer replaced by heading name
- **WHEN** a sentence says "The next section provides guidance"
- **THEN** it names the heading, for example "The Backup and Restore Persistent Data section explains"

### Requirement: Facts without a source are flagged, not changed
Behavior statements that no verified fact sheet row confirms SHALL be left unchanged and listed as NEEDS FACT items for the product owner.

#### Scenario: Unverified procedure on the disaster recovery page
- **WHEN** a restore step or database list has no fact sheet row
- **THEN** the statement stays as written and appears under NEEDS FACT in the review copy and the PR

### Requirement: Scope is limited to the approved wording
A content change under this capability SHALL NOT change headings, UI labels, code samples, vendor or KB link targets, front matter structure or page structure. The only link target change allowed is making a link to an existing page in this repo root-relative.

#### Scenario: Link to an existing repo page
- **WHEN** a link points to `https://help.boldbi.com/utilities/...` and the page exists in this repo
- **THEN** the target becomes the root-relative path with the same text

### Requirement: Image alt text is descriptive and unique
Every image SHALL have alt text that names what the image shows, and no two images on a page SHALL share the same alt text.

#### Scenario: Screenshot alt text names the screen
- **WHEN** the alt text is "IDP URL Binding" or "File storage"
- **THEN** it is replaced with text that names the screen or choice shown in the image
