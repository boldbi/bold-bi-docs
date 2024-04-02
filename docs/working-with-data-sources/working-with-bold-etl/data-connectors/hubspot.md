---
layout: post
title: Hubspot ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Hubspot ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# HubSpot

HubSpot is a customer relationship management (CRM) software and inbound marketing platform that helps businesses to attract visitors, engage customers, and close leads.

## Grab Credentials

>**Note**: As of November 30, 2022, HubSpot API Keys are being deprecated and are no longer supported. Instead, it is recommended to authenticate using a private app access token or OAuth access token. Follow these steps to create a private app and get an authentication token before running the pipeline:

1. In HubSpot, click the settings icon to access settings.
2. Under `Account Setup` in the left sidebar, choose `Integrations` > `Private Apps`.
3. Select `Create a private app`.
4. In the `Basic Info` tab, provide a name and description.
5. In the `Scopes` tab, grant:
   - Read scopes for CMS, CRM, and Settings.
   - Permissions for: `business-intelligence`, `actions`, `crm.export`, `e-commerce`, `oauth`, `tickets`.
6. Click `Create app` > `Continue Creating`.
7. Click `Show token` and copy it.

## Connection Properties

In a YAML file, the `config` section contains the following properties:

```yaml
ConnectorName: HubSpot
api_key: API key
```


### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: HubSpot_data
      connectorname: HubSpot
      config:
         api_key: <API KEY>
      select:
        -Table1
        -Table2
      properties:
         includehistory: <true/false>
      
```
