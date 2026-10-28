## ADDED Requirements

### Requirement: Sections open with the answer
A user guide section SHALL open with a sentence that states what the reader can do, and SHALL NOT open with "This section explains" or similar filler.

#### Scenario: Opening sentence rewritten
- **WHEN** the opening sentence under the page H1 begins with "This section explains"
- **THEN** it is rewritten to state the task directly, with no added facts

#### Scenario: Note restates the task
- **WHEN** a NOTE block begins with "This section explains"
- **THEN** it is rewritten to state the task and the steps the section gives below

### Requirement: Facts without a source are flagged, not changed
Behavior statements that no verified fact sheet row confirms SHALL be left unchanged and listed as [NEEDS FACT] items for the product owner.

#### Scenario: Unverified behavior on the manage-users page
- **WHEN** a statement such as the 2-day activation link validity is not confirmed by the fact sheet
- **THEN** the statement stays as written and appears in the review copy under [NEEDS FACT]

### Requirement: Scope is limited to the approved wording
A content change under this capability SHALL NOT change headings, UI labels, code samples, links, front matter or page structure.

#### Scenario: Heading left unchanged
- **WHEN** the H1 reads awkwardly
- **THEN** the H1 is not changed, because changing it changes the heading anchor
