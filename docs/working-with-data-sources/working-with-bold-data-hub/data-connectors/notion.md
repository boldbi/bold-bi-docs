---
layout: post
title: Notion Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Notion Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Notion

[Notion](https://www.notion.so/) is a flexible workspace tool for organizing personal and professional tasks, offering customizable notes, documents, databases, and more.

## Grab Credentials

1. If you don't have a Notion account, please create one.
2. Access your Notion account and navigate to My Integrations.
3. Click on "New Integration" on the left and name it appropriately.
4. Finally, click on "Submit" located at the bottom of the page.

## Add a Connection to the Database

1. Open the database that you want to load to the destination.
2. Click on the three dots located in the top right corner and choose "Add connections".
3. From the list of options, select the integration you previously created and click on "Confirm".

## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
connector_name: Notion
api_key: API key
```

### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Notion_data
      connectorname: Notion
      config:
        api_key: <API KEY>
      properties:
        selected_database_ids: <SELECTED DATABASE ID>
```

## Configure the Data Hub to connect Notion

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Notion Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Notion Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Notion` template.

  ![Notion Data Hub - BoldBI](/static/assets/working-with-etl/images/notion_addtemplate.png#max-width=100%)
  
  4. Update the api key in the template. Also, Update the resources on the `select` property and Click Save, choose the desired destination to save the pipeline.
  
  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI]

(https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)


>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Notion - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Notion - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Notion - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Notion - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Notion - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.
