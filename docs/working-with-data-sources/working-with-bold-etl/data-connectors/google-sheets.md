---
layout: post
title: Google sheets ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Google sheets ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Google Sheets

Google Sheets is a cloud-based spreadsheet application offered by Google as part of its Google Workspace suite.


### Service Account Credential

Service account credentials are better suited for server-to-server interactions. Here, we recommend using service account credentials.

#### Google Service Account Credentials

To get API credentials using a GCP service account, follow these steps:

1. Sign in to [https://console.cloud.google.com](https://console.cloud.google.com).
2. Create a service account if needed.
3. Enable "Google Sheets API" (refer to Google documentation for comprehensive instructions).
4. Generate credentials:
   - Navigate to IAM & Admin in the console's left panel, then select Service Accounts.
   - Identify the service account you intend to use, and click on the three-dot menu under the "Actions" column next to it.
   - Create a new JSON key by selecting "Manage Keys" > "ADD KEY" > "CREATE".
   - Download the ".json" file containing the necessary credentials for future use.



## Connection Properties

In a YAML file, the `config` section contains the following properties:

```yaml
Connectorname: GoogleSheets
project_id: Project ID
client_email: Client Email
private_key: Private Key
spreadsheet_url_or_id: Spreadsheet URL or ID
Range_names: Ranges of the names
spreadsheet_identifier: `spreadsheet_identifier = "https://docs.google.com/spreadsheets/d/1VTtCiYgxjAwcIw7UM1_BSaxC3rzIpr0HwXZwd2OlPD4/edit?usp=sharing"`
```
### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Google Sheets
      connectorname: Google Sheets
      config:
        project_id: 
        client_email: 
        private_key: 
      properties:
        spreadsheet_url_or_id: 
        # range_names value should be range_names: "range_name1", "range_name2"
        range_names:
```