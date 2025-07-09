---
layout: post
title: Zendesk Talk ETL/Bold Data Hub Connector – Bold BI Learning
description: Learn how to use the Zendesk Talk ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
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
In this section, two modes of data refresh are defined: INCREMENTAL and ``FULL_TABLE``. It only supports DateTime datatype columns.

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
        <td>This mode retrieves data from the date column specified in the replication key starting from the designated start date in the replication value. Once scheduled, the replication value is automatically updated based on the imported data.</td>
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
        <td>This mode retrieves data from the date column specified in the replication key starting from the specified start date in the replication value. Once scheduled, the replication value is automatically updated from the imported data.</td>
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
        subdomain: subdomain
        email: mail
        password: password
        token: <>
        Oauth token: <>
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
        subdomain: subdomain
        email: mail
        password: password
        token: <>
        Oauth token: <>
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

## Configure the Data Hub to connect Zendesk Talk

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Zendesk Talk Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Zendesk Talk Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Zendesk Talk` template.

  ![Zendesk Talk Data Hub - BoldBI](/static/assets/working-with-etl/images/talk_addtemplate.png#max-width=100%)
  
  4. Update the subdomain, email address, password or token (API or OAuth) in the template. Also, Update the resources on the `select` property and save it to the BoldBI Data Store.

  ![Zendesk Talk Data Hub - BoldBI](/static/assets/working-with-etl/images/talk_yaml.png#max-width=100%)
  
  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

<table>
<tr>
The available resources are supported in Zendesk Support 
- calls 
- addresses 
- greeting_categories 
- greetings 
- ivrs
- phone_numbers
- settings
- lines
- agents_activity 
</tr>
</table>

>**Warning:**
    1. The <b> Encrypt_Credentials </b> property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the <b> Encrypt_Credentials </b> property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Zendesk Talk - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Zendesk Talk - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click Run Now button.

![Zendesk Talk - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Zendesk Talk - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Zendesk Talk - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

5. Click `Edit DataSource` Option to view the created tables.
