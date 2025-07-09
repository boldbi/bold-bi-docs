---
layout: post
title: Complete Guide to Asana Data Integration in Bold BI
description: Learn how to use the Asana Data Hub connector in Bold BI Enterprise Edition. Discover simple steps to connect your Asana projects and tasks for seamless tracking and analysis.
platform: bold-bi
documentation: ug
---

# Asana Source

Asana is a work management tool that helps teams plan, organize, and track their tasks and projects in one place. It’s used to improve team collaboration and productivity.

## Grab credentials
### Grab Access Token
To generate a Personal Access Token in Asana:
1. Go to https://app.asana.com/0/developer-console.
2. Click "+ New Access Token".
3. Provide a name (e.g., "Bold BI Integration") and Click Create Token
4. Copy and securely save the token. Use this value for access_token in your YAML

### Grab WorkSpace ID

1. Log in to your Asana account.
2. Open any project or task within the workspace you want to connect.
3. Check the URL in your browser's address bar. The Workspace ID is the number that appears after /0/ in the URL. Example: ``https://app.asana.com/0/{workspaceId}/list``.

### Grab Project ID

1. Navigate to the specific project you want to access in Asana..
2. Look at the URL. The Project ID appears directly after the workspace section.  Example: ``https://app.asana.com/0/850617776313575/1204832734671154``
    (Project ID: 1204832734671154)

### Grab Task ID

1. Open a specific task
2. The last number in the URL is the task ID. Example: ``https://app.asana.com/0/850617776313575/1204832734671160  ``
    (Project ID: 1204832734671160 )


## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
 access_token: <your_access_token>
 workspace_id: <your_workspace_id>
 project_id: <optional_project_id>
 task_id: <optional_task_id>
```


### Example Configuration

```yaml
version: 1.0.1
encrypt_credentials: false
union_all_tables: true
add_dbname_column: false
plugins:
  extractors:
    - name: Asana
      connectorname: Asana
      schemaname:
      config:
        access_token: your-access-token
        workspace_id: your-workspace-id
        project_id: your-project-id
        task_id: your-task-id
      properties:
          metadata:
      select:
        - tablename

```
## Configure the Data Hub to connect Asana

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Asana - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Pipeline` and provide the name for the new pipeline.
  
   ![Asana - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created pipeline and choose the Asana connector. Double click or Click on Add Template option to add template.

  ![Asana - BoldBI](/static/assets/working-with-etl/images/asana_addtemplate.png#max-width=100%)

  ### Configuration Parameters

|  Parameters |  Description                                     |
|--------------------------------|---------------------------------------------|
| **Access Token:**                | Provide your Asana Personal Access Token. This is used for authenticating API requests. |
| **Workspace ID:**                 | Specify the workspace ID in Asana where your project is located. |
| **Project ID:**             |(Optional) Provide the specific project ID within the workspace whose tasks and sections you want to access. |
| **Task  ID:**             |(Optional) Specify a particular task ID if you want to fetch data for a stories. |
| **Select:**                  |    **Tablename(s):**         Provide one object. Valid values are: projects, tasks, sections, stories, tags, teams, users. |
  
 
  5. Copy the access token and replace in access_token property and add the details.

  ![Asana - BoldBI](/static/assets/working-with-etl/images/asana_finaltemplate.png#max-width=100%)

  6. Click Save and choose the desired destination to save the pipeline.
  
   ![Asana - BoldBI](/static/assets/working-with-etl/images/csv_destination.png#max-width=100%)
  
  7. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/).

   ![Asana - BoldBI](/static/assets/working-with-etl/images/pipeline_DScreated.png#max-width=100%)

>**Note:**
  For tasks and sections projectID is required. 
  For stories taskID is required.

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Asana - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Asana - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Asana - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Asana - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Asana - BoldBI](/static/assets/working-with-etl/images/pipeline_bigquery_created.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.
