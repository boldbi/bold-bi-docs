---
layout: post
title: Strapi ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Strapi ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# ``Strapi``

Strapi is a headless CMS (Content Management System) that allows developers to create API-driven content management systems without writing much custom code.

## Grab API Token

1. Log in to ``Strapi``.
2. Click the settings icon in the sidebar.
3. Go to API tokens under global settings.
4. Create a new API token.
5. Fill in Name, Description, and Duration.
6. Choose a token type: Read Only, Full Access, or custom.
7. Save to view your API token.
8. Copy it for configuration.

## Connection Properties

In the YAML file, the configuration section contains the following properties:

```yaml
Connectorname: Strapi
Api_secret_key: API secret key
Domain: Domain
```

### Example

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Strapi_data
      connectorname: Strapi
      config:
        api_secret_key: <API SECRET KEY>
        domain: <DOMAIN>
      select:
        - TABLE1
        - TABLE2
```
