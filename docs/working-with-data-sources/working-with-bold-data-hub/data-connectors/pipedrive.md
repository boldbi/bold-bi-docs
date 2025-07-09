---
layout: post
title: Pipedrive ETL/Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Pipedrive ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---
# Pipedrive

[Pipedrive](https://www.pipedrive.com/) is a cloud-based sales Customer Relationship Management (CRM) tool designed to help businesses manage leads and deals, track communication, and automate sales processes.

## Grab API Token

To obtain the API token for Pipedrive, follow these steps:

1. Set up a Pipedrive account.
2. In Pipedrive, go to your name (in the top right corner).
3. Select company settings.
4. Go to personal preferences.
5. Select the API tab.
6. Copy your API token.

## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
Connectorname: Pipedrive
Pipedrive_api_key: Pipedrive API key
```

### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Pipedrive_data
      connectorname: Pipedrive
      config:
        pipedrive_api_key: <PIPEDRIVE API KEY>
      select:
        - TABLE1
        - TABLE2
      properties:
        since_timestamp: <SINCE TIME STAMP>
```
      
## Configure the Data Hub to connect Pipedrive

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Pipedrive Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Pipedrive Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Pipedrive` template.

  ![Pipedrive Data Hub - BoldBI](/static/assets/working-with-etl/images/pipedrive_addtemplate.png#max-width=100%)
  
  4. Update the pipedrive api key in the template. Also, Update the resources on the `select` property and Click Save, choose the desired destination to save the pipeline.

  ![Pipedrive Data Hub - BoldBI](/static/assets/working-with-etl/images/pipedrive_yaml.png#max-width=100%)

  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

```js
The available resources are supported in Pipedrive
- activity 
- organization 
- person 
- product 
- deal 
- pipeline 
- stage 
- user
 ```

>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Pipedrive - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Pipedrive - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Pipedrive - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Pipedrive - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Pipedrive - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.
