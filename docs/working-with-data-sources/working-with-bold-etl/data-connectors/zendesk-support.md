---
layout: post
title: Zenddesk Support ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Zenddesk Support ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Zendesk Support

Zendesk is a cloud-based customer service and support platform, offering features such as ticket management, self-service options, knowledge base management, live chat, customer analytics, and talks.

Zendesk support can be authenticated using one of the following three methods:
1. Method 1 (subdomain + email address + password)
2. Method 2 (subdomain + email address + API token)
3. Method 3 (subdomain + OAuth token)

## Grab Subdomain
Log into Zendesk to find your subdomain in the URL. For example, for `www.yourhub.zendesk.com`, the subdomain is `yourhub`.

## Grab Zendesk Support API Token
1. In Zendesk (top right), select Admin Center.
2. Choose "Apps and Integrations."
3. Navigate to APIs and select Zendesk API. Activate “Password access” & “Token access”.
4. Click on "Add API token" provide a description, and make sure to write down the API token.
5. The token will only be displayed once, so be sure to keep it in a safe place.

## Grab Zendesk Support OAuth Token
1. Obtain the client ID through the Zendesk API: Send this curl request and make a note of the client ID in the response.
2. Alternatively, retrieve the client ID through OAuth using this method.
3. To obtain a complete token using the client ID acquired earlier, refer to the instructions provided here.
4. Upon receiving the aforementioned request, you will receive a complete token that can be utilized to set up Zendesk support.

## Connection Properties
In the ``yaml`` file, the config section contains the following properties:

```yaml
Connector Name: Zendesk
Subdomain: Zendesk sub-domain
Email: Mail id used for login
Password: Password for the account
Token: API Token
OAuth Token: OAuth token
```


## Metadata Properties

In this section, the mode of data refresh is defined. There are two modes: INCREMENTAL and `FULL_TABLE`. It supports only columns with Date/DateTime datatype.

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
        <td>This mode will fetch data from the date column mentioned as the replication key, starting from the date specified in the replication_value. Once it is scheduled, the replication_value will be updated automatically from the imported data.</td>
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
        <td>TThis mode fetches data from the date column mentioned in the replication key from the start date as mentioned in the replication value. Once it is scheduled, the replication value is updated based on the interval_type and interval_value from the imported data. For ex  set interval_type as 'year' and intervalue value as '1'.In first schedule, will fetch the record from Jan 1, 2000 to Dec 31, 2000. In next schedule, will fetch the record from Jan 1, 2001 to Dec 31, 2001 and so on.</td>
    </tr>
</table>

### Example
#### FULL_TABLE

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: zendesk_data
      connectorname: zendesk
      config:
        subdomain: <SUBDOMAIN>
        email: <EMAIL>
        password: <PASSWORD>
        token: <TOKEN>
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

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: zendesk_data
      connectorname: zendesk
      config:
        subdomain: <SUBDOMAIN>
        email: <EMAIL>
        password: <PASSWORD>
        token: <TOKEN>
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

