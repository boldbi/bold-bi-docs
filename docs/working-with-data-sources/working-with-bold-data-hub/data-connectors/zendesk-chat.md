---
layout: post
title: Zendesk Chart ETL/Bold Data Hub Connector – Bold BI Learning
description: Learn how to use the Zendesk Chart ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Zendesk Chat:

## Grab Subdomain:
Log into Zendesk to find your subdomain in the URL. For example, for ``www.yourhub.zendesk.com``, the subdomain is `yourhub`.

## Grab Zendesk Chat OAuth token:
1. Access Zendesk Chat directly or through the "Chat" option located in the top right corner of the Zendesk product.
2. Navigate to "Settings" > "Account" > "API" > "Add API client".
3. Fill in the client name, company, and redirect URLs (default: `http://localhost:8080`).
4. Record the "CLIENT_ID" and "SUBDOMAIN".
5. Format the following URL with your own CLIENT_ID and SUBDOMAIN, paste it into a new browser tab, and press Enter.
6. The call will be made, possibly prompting you to log in and select 'Allow' to generate the token.
7. If the call is successful, your browser's address field will display your new OAuth token (returned as the `access_token` value).
8. Despite any error messages in the browser's main window, if 'access_token' appears in the browser's URL field, then the process was successful.
9. Safely store the OAuth token for authentication purposes when retrieving data from Zendesk Chat.
10. Additional methods for obtaining a Zendesk chat token can be found in the full documentation provided [here](https://developer.zendesk.com/rest_api/docs/chat/introduction).

## Connection Properties:
In the YAML file, the config section contains the following properties:

```yaml
Connectorname: Zendesk
subdomain: Zendesk sub-domain
Oauth_token: OAuth token

```
**Metadata Properties:**

This section defines the mode of data refresh. There are two modes: INCREMENTAL and `FULL_TABLE`. It only supports columns with DateTime data types.

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

## Configure the Data Hub to connect Zendesk Chart

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Zendesk Chart Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Zendesk Chart Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Zendesk Chart` template.

  ![Zendesk Chart Data Hub - BoldBI](/static/assets/working-with-etl/images/chat_addtemplate.png#max-width=100%)
  
  4. Update the subdomain and OAuth token in the template. Also, Update the resources on the `select` property and save it to the BoldBI Data Store.

  ![Zendesk Chart Data Hub - BoldBI](/static/assets/working-with-etl/images/chat_yaml.png#max-width=100%)

  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Zendesk Chart - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Zendesk Chart - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Zendesk Chart - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Zendesk Chart - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Zendesk Chart - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.
