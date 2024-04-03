---
layout: post
title: Stripe ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Stripe ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Stripe

Stripe is an online payment platform that allows businesses to securely process and manage customer transactions over the Internet.

## Grab Credentials

1. Log in to your Stripe account.
2. Click Settings in the top-right.
3. Go to Developers from the top menu.
4. Choose "API Keys".
5. In "Standard Keys", click "Reveal test key" beside the Secret Key.
6. Note down the `API_secret_key` for configuring `secrets.toml`.

## Connection Properties

In the YAML file, the configuration section contains the following properties:

```yaml
Connectorname: Stripe
Stripe_secret_key: Stripe secret key
```

## Metadata Properties

In this section, define the mode of data refresh. There are two modes: `INCREMENTAL` and `FULL_TABLE`.

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
        <td>This mode will fetch data from the date column mentioned in replication key from the start date as mentioned in replication value. Once it is scheduled, the replication value is updated automatically from the imported data.</td>
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
        <td>This mode will fetch data from the date column mentioned in replication key from the start date as mentioned in replication value. Once it is scheduled, the replication value is updated automatically from the imported data.</td>
    </tr>
</table>

## Example
## ``FULL_TABLE``

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: stripe_data
      connectorname: stripe
      config:
        stripe_secret_key: <SECRET KEY>
      select:
         - TABLE1
         - TABLE2
      metadata:
        TABLE1:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: 2023-07-19 00:00:00
          interval_type: days
          interval_value: 6
        TABLE2:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: 2023-07-19 00:00:00
          interval_type: days
          interval_value: 6
```

## INCREMENTAL

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: stripe_data
      connectorname: stripe
      config:
        stripe_secret_key: <SECRET KEY>
      select:
         - TABLE1
         - TABLE2
      metadata:
        TABLE1:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: 2023-07-19 00:00:00
        TABLE2:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: 2023-07-19 00:00:00
```
