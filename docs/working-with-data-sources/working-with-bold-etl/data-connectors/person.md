---
layout: post
title: Personio ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Personio ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# ``Personio``

``Personio`` is a ``human resources management software`` that helps businesses streamline ``HR`` processes, including recruitment, employee data management, and payroll, in one platform.

## Grab Credentials

To load data from ``Personio``, you need to obtain API credentials, `client_id` and `client_secret`:

1. Sign in to your ``Personio`` account, and ensure that your user account has API access rights.
2. Navigate to Settings > Integrations > API credentials.
3. Click on "Generate new credentials."
4. Assign necessary permissions to credentials. This is read access.

## Connection Properties

In a YAML file, the `config` section contains the following properties:

```yaml
Connectorname: Personio
Client_id: ID of the client
Client_secret: Client secret
```

### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Personio_data
      connectorname: Personio
      config:
        client_id: <CLIENT ID>
        client_secret: <CLIENT SECRET>
      select:
        - TABLE1
        - TABLE2
```