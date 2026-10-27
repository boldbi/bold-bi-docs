## 1. Edit the page
- [x] 1.1 Rewrite the opening sentence under the H1. Current: "Webhooks are user-defined HTTP callbacks that deliver real-time data to other applications when specific events occur. Bold BI supports webhook notifications for `Time-Driven` dashboard export and `Alert-Driven` dashboard export." Replacement: "You can add, edit, delete, and deactivate webhooks in the Bold BI embedded application from the Webhooks section of the profile page. [NEEDS FACT: what a webhook is in Bold BI, and which dashboard export events support webhook notifications]"
- [x] 1.2 Rewrite the Create Webhook opener. Current: "This section explains how to create a webhook in the Bold BI embedded application." Replacement: "Follow these steps to add a webhook in the Bold BI embedded application."
- [x] 1.3 Remove the purpose clauses in Add Webhook step 2 (authentication, signing). Current: "Enable authentication to verify the webhook sent by Bold BI." Replacement: "Enable authentication." Current: "Enable signing to verify the integrity of the payload at the receiver end." Replacement: "Enable signing."
- [x] 1.4 Replace unconfirmed statements under Deactivate, Events, Time-Driven and Alert-Driven export, Headers, Payload, Webhook Security, Webhook authentication, Password, API Key and Webhook Signing with [NEEDS FACT] markers, as listed in the review copy.
- [x] 1.5 Remove the System headers table (values not in the fact sheet) and replace it with a [NEEDS FACT] marker.
- [x] 1.6 Make image alt text unique. Duplicates "Webhook Details Page" and "Save Webhook" are replaced with page-specific descriptions.
- [x] 1.7 Add a link in the Payload section. Current: none. Replacement: "For the payload properties used in dashboard export events, see [Webhook payload for dashboard scheduled events](/manage-webhooks/webhook-payload/)."
- [x] 1.8 Update front matter description. Current: "Learn how to add, edit, delete, and deactivate webhooks in the Bold BI application. Also learn about webhook payloads, events, headers, and security features." (155 characters) Replacement: "Add, edit, delete, and deactivate webhooks in Bold BI. Find steps for webhook events, headers, payloads, and authentication settings in one guide." (146 characters)

## 2. Checks
- [x] 2.1 Run gulp typo (943 files pass)
- [x] 2.2 Run gulp file-validation (pass)
- [ ] 2.3 Run gulp seo-validation (task does not signal completion; the failure is in build/seo.js and is not caused by this page)
- [ ] 2.4 Local preview and local page audit at http://localhost:8001/manage-webhooks/

## 3. Review
- [x] 3.1 Write review copy outside docs/ with [NEEDS FACT] items
- [ ] 3.2 Product owner confirms the [NEEDS FACT] behaviors
- [ ] 3.3 Team decides the title ending (`| Bold BI Docs` kept) and the Embedded naming
