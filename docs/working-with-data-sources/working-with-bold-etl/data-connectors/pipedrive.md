---
layout: post
title: Pipedrive ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Pipedrive ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---
# Pipedrive

[Pipedrive](https://www.pipedrive.com/) is a cloud-based sales Customer Relationship Management (CRM) tool designed to help businesses manage leads and deals, track communication, and automate sales processes.

## Grab API Token

To obtain the API token for Pipedrive, follow these steps:

1. Set up a Pipedrive account.
2. In Pipedrive, go to your name (in the top right corner).
3. Select company settings.
4. Go to personal preferences.
5. Select the API tab.
6. Copy your API token.

## Connection Properties

In a YAML file, the `config` section contains the following properties:

```yaml
Connectorname: Pipedrive
Pipedrive_api_key: Pipedrive API key
```

### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Pipedrive_data
      connectorname: Pipedrive
      config:
        pipedrive_api_key: <PIPEDRIVE API KEY>
      select:
        - TABLE1
        - TABLE2
      properties:
        since_timestamp: <SINCE TIME STAMP>
```
      
