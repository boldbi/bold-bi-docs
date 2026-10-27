## ADDED Requirements

### Requirement: Sections open with the answer
A user guide section SHALL open with a sentence that states what the reader can do or what the section covers, and SHALL NOT open with "This section explains", "This section provides" or similar filler.

#### Scenario: Index opening rewritten
- **WHEN** the opening sentence under the page H1 begins with "This section provides"
- **THEN** it is rewritten to name the utilities directly, with no added facts

#### Scenario: Description names the tasks
- **WHEN** the front matter description begins with "This section explains"
- **THEN** it is rewritten to say what the reader can do and to name every linked utility

### Requirement: Lead-in lines stand alone
A lead-in line before a list of links SHALL be readable when quoted alone, and SHALL NOT use "the following" as a pointer.

#### Scenario: Lead-in replaced
- **WHEN** a lead-in line reads "Use the following links:"
- **THEN** it is replaced with a line that says what the reader will open

### Requirement: Facts without a source are flagged, not changed
Behavior statements that no verified fact sheet row confirms SHALL be left unchanged and listed as [NEEDS FACT] items for the product owner.

### Requirement: Scope is limited to the approved wording
A content change under this capability SHALL NOT change headings, UI labels, code samples, link targets, URL slugs or front matter fields other than title and description.
