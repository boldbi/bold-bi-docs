---
layout: post
title: Zendesk Talk ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Zendesk Talk ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Zendesk Talk Data Migration Configuration

## Overview
Zendesk Talk fetches data using the Zendesk Talk API. The process for obtaining credentials for Zendesk Talk mirrors that of Zendesk Support. You can use existing Zendesk Support credentials or create new ones.

## Connection Properties
In the YAML file, the `config` section contains the following properties:
```yaml
Connectorname: Zendesk
subdomain: Zendesk sub-domain
Email: Email address used for login
Password: Password for the account
Token: API Token
Oauth_token: OAuth token
```
## Metadata Properties
In this section, two modes of data refresh are defined: INCREMENTAL and ``FULL_TABLE``. It only supports Date/DateTime datatype columns.

<table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>INCREMENTAL</td>
        <td>

```yaml
metadata:
  TableName:
    replication_method: INCREMENTAL
    replication_key: Column name
    replication_value: column value that data starts from
```
</td>
        <td>This mode fetches data from the date column mentioned in the replication key from the start date, as specified in the replication value. Once scheduled, the replication value is updated automatically from the imported data.</td>
    </tr>
    <tr>
        <td>FULL_TABLE</td>
        <td>

```yaml
metadata:
  TableName:
    replication_method: FULL_TABLE
    replication_key: Column name
    replication_value: column value that data starts from
    interval_type: days/hours/minutes/year/month
    interval_value: integer value to add in interval type
```
</td>
        <td>This mode fetches data from the date column mentioned in the replication key from the start date, as specified in the replication value. Once scheduled, the replication value is updated automatically from the imported data.</td>
    </tr>
</table>

### Example Configuration

#### FULL_TABLE

```YAML
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: zendesk_data
      connectorname: zendesk
      config:
        subdomain: <SUBDOMAIN>
        Oauth token: <OAUTH TOKEN>
      Select:
        - TABLE1
        - TABLE2
      metadata:
        TABLE1:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: '2023-07-19 00:00:00'
          interval_type: days
          interval_value: 6
        TABLE2:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: '2023-07-19 00:00:00'
          interval_type: days
          interval_value: 6

```
#### INCREMENTAL
```YAML
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: zendesk_data
      connectorname: zendesk
      config:
        subdomain: <SUBDOMAIN>
        Oauth token: <OAUTH TOKEN>
      Select:
        - TABLE1
        - TABLE2
      metadata:
        TABLE1:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: '2023-07-19 00:00:00'
        TABLE2:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: '2023-07-19 00:00:00'

```

