## ADDED Requirements

### Requirement: The page opens by answering its question
The opening paragraph of the White-Labeling in Bold BI page SHALL state that the reader can white-label Bold BI and SHALL name the settings that change, without promotional wording.

#### Scenario: Opening rewritten
- **WHEN** the opening paragraph contains "prominently featured" or "ensuring that your clients enjoy"
- **THEN** it is replaced with a sentence that names Bold BI and the settings, using facts R506 and R507 only

### Requirement: Approved names only
The page SHALL use "Cloud Edition" instead of "Cloud BI" and SHALL NOT introduce any name outside the approved list.

#### Scenario: Cloud BI renamed
- **WHEN** the body contains "Cloud BI"
- **THEN** it is replaced with "Cloud Edition", including in bold sub-headings

### Requirement: Link text names its destination
Link text SHALL say where the link goes and SHALL NOT be "this link", "here" or "the links below".

#### Scenario: Please refer to this link
- **WHEN** a sentence reads "Please refer to this [link]"
- **THEN** the link text is replaced with the destination name, and the link target is unchanged

### Requirement: Facts are limited to the fact sheet
Statements added to the page SHALL come from Verified or Updated rows of the Bold BI fact sheet, Whitelabel section. Statements with no row SHALL stay as written and be listed as NEEDS FACT for the product owner.

#### Scenario: Unconfirmed statement left as written
- **WHEN** a statement such as the default time zone rule has no fact row
- **THEN** it stays as written and appears in the review copy under NEEDS FACT

#### Scenario: Conflict not resolved in copy
- **WHEN** a statement conflicts with another official page (R503, R510, multi-tenancy on Cloud)
- **THEN** the statement is not changed and the conflict is listed for a team decision

### Requirement: Images have unique descriptive alt text
Every image on the page SHALL have alt text that is unique on the page and describes what the screenshot shows, based on the text around it.

#### Scenario: Duplicate alt text
- **WHEN** two images share alt text such as "Font Settings Cloud BI"
- **THEN** each alt text names its own edition and setting
