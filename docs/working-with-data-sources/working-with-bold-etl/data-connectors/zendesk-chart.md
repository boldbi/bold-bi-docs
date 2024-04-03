---
layout: post
title: Zendesk Chart ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Zendesk Chart ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Zendesk Chat:

## Grab Subdomain:
Log into Zendesk to find your subdomain in the URL. For example, for https://www.yourhub.zendesk.com, the subdomain is ``yourhub``.

## Grab Zendesk Chat OAuth token:
1. Access Zendesk Chat directly or through the top right "Chat" option in Zendesk product.
2. Navigate to "Settings" > "Account" > "API" > "Add API client".
3. Fill in client name, company, and redirect URLs (default: [http://localhost:8080](http://localhost:8080)).
4. Record the "CLIENT_ID" and "SUBDOMAIN".
5. Format the following URL with your own CLIENT_ID and SUBDOMAIN, paste it into a new browser tab, and press Enter.
6. The call will be made, possibly asking you to log in and select 'Allow' to generate the token.
7. If the call succeeds, your browser's address field will contain your new OAuth token (returned as the `access_token` value).
8. Despite the seeming error message displayed in the browser's main window, if 'access_token' is returned in the browser's URL field, then it worked.
9. Safely store the OAuth token to authenticate Zendesk Chat for retrieving data.
10. There are several other methods to obtain Zendesk chat token as given in the full documentation [here](https://developer.zendesk.com/rest_api/docs/chat/introduction).

## Connection Properties:
In the YAML file, the config section contains the following properties:

```yaml
Connectorname: Zendesk
subdomain: Zendesk sub-domain
Oauth_token: OAuth token

```
**Metadata Properties:**
This section defines the mode of data refresh. There are two modes: INCREMENTAL and ``FULL_TABLE``


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
        <td>This mode fetches data from the date column mentioned in replication_key from the start date as mentioned in replication_value. Once it is scheduled, replication_value is updated automatically from the imported data.</td>
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
        <td>This mode fetches data from the date column mentioned in replication_key from the start date as mentioned in replication_value. Once it is scheduled, replication_value is updated automatically from the imported data.</td>
    </tr>
</table>

### Examples:
### INCREMENTAL:

```yaml
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

### ``FULL_TABLE``:
```yaml
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