---
layout: post
title: Zendesk Chart ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Zendesk Chart ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Zendesk Chat:

## Grab Subdomain:
Log into Zendesk to find your subdomain in the URL. For example, for ``www.yourhub.zendesk.com``, the subdomain is `yourhub`.

## Grab Zendesk Chat OAuth token:
1. Access Zendesk Chat directly or through the top right "Chat" option in Zendesk product.
2. Navigate to "Settings" > "Account" > "API" > "Add API client".
3. Fill in client name, company, and redirect URLs (default: ``localhost:8080``).
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
This section defines the mode of data refresh. There are two modes: INCREMENTAL and ``FULL_TABLE``. It only supports Date/DateTime datatype columns.


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
        <td>This mode fetches data from the date column specified in the replication key starting from the date specified in the replication value. Once scheduled, the replication value is updated according to the interval_type and interval_value from the imported data. For example, if the interval_type is set to 'year' and the interval_value is set to '1', the first schedule will fetch records from January 1, 2000 to December 31, 2000. In the next schedule, it will fetch records from January 1, 2001 to December 31, 2001, and so on.</td>
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
        <td>This mode fetches data from the date column mentioned in the replication key from the start date as mentioned in the replication value. Once it is scheduled, the replication value is updated based on the interval_type and interval_value from the imported data. For ex  set interval_type as 'year' and intervalue value as '1'.In first schedule, will fetch the record from Jan 1, 2000 to Dec 31, 2000. In next schedule, will fetch the record from Jan 1, 2001 to Dec 31, 2001 and so on.</td>
    </tr>
</table>

### Examples:
#### INCREMENTAL:

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

#### FULL_TABLE:
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
