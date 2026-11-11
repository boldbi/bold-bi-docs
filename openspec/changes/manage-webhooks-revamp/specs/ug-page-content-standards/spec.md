## ADDED Requirements

### Requirement: Webhook page facts without a source are flagged
Webhook behavior, event, payload, header, authentication and signing statements that no fact sheet row confirms SHALL be replaced with a `[NEEDS FACT: ...]` marker on the manage-webhooks page, and listed for the product owner.

#### Scenario: Unconfirmed event description
- **WHEN** the Events section states which webhook events are supported and no fact sheet row confirms it
- **THEN** the statement is replaced with a `[NEEDS FACT: ...]` marker and the marker is listed in the pull request

#### Scenario: Unconfirmed header table
- **WHEN** the System headers table lists header values that no fact sheet row confirms
- **THEN** the table is replaced with a `[NEEDS FACT: ...]` marker

### Requirement: Create section opens with the task
The Create Webhook section SHALL open with a sentence that states what the reader does, without the banned opener "This section explains".

#### Scenario: Banned opener removed
- **WHEN** the section opener begins with "This section explains"
- **THEN** it is rewritten to state the task directly

### Requirement: Image alt text is unique
Each image on the manage-webhooks page SHALL have alt text that describes that image, and no two images SHALL share alt text.

#### Scenario: Duplicate alt text
- **WHEN** two images on the page have the same alt text
- **THEN** each alt text is rewritten to describe its own image

### Requirement: Scope is limited
A content change under this capability SHALL NOT change headings, anchors, UI labels, image paths, front matter title, or the sibling page `docs/manage-webhooks/webhook-payload.md`.
