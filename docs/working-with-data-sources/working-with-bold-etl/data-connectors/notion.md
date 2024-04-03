---
layout: post
title: Notion ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Notion ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Notion

[Notion](https://www.notion.so/) is a flexible workspace tool for organizing personal and professional tasks, offering customizable notes, documents, databases, and more.

## Grab Credentials

1. If you don't have a Notion account, please create one.
2. Access your Notion account and navigate to My Integrations.
3. Click "New Integration" on the left and name it appropriately.
4. Finally, click on "Submit" located at the bottom of the page.

## Add a Connection to the Database

1. Open the database that you want to load to the destination.
2. Click on the three dots located in the top right corner and choose "Add connections".
3. From the list of options, select the integration you previously created and click on "Confirm".

## Connection Properties

In a YAML file, the `config` section contains the following properties:

```yaml
connector_name: Notion
api_key: API key
```

### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Notion_data
      connectorname: Notion
      config:
        api_key: <API KEY>
      properties:
        selected_database_ids: <SELECTED DATABASE ID>
```
