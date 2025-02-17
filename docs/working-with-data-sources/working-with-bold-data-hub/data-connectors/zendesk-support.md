---
layout: post
title: Zendesk Support ETL/Bold Data Hub Connector – Bold BI Learning
description: Learn how to use the Zendesk Support ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
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

In this section, the mode of data refresh is defined. There are two modes: INCREMENTAL and `FULL_TABLE`. It supports only columns with DateTime datatype.

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

## Configure the Data Hub to connect Zendesk Support

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Zendesk Support Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Zendesk Support Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Zendesk Support` template.

  ![Zendesk Support Data Hub - BoldBI](/static/assets/working-with-etl/images/support_addtemplate.png#max-width=100%)
  
  4. Update the subdomain, email address, password or token (API or OAuth) in the template. Also, Update the resources on the `select` property and save it to the BoldBI Data Store.

  ![Zendesk Support Data Hub - BoldBI](/static/assets/working-with-etl/images/support_yaml.png#max-width=100%)

  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

```
The available resources are supported in Zendesk Support 
- users 
- sla_policies 
- groups 
- organizations 
- brands 
 ```

>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Zendesk Support - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Zendesk Support - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Zendesk Support - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Zendesk Support - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Zendesk Support - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.
