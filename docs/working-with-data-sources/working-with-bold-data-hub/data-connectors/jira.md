---
layout: post
title: Jira Bold Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Jira Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Jira

Jira by ``atlassian`` helps teams manage projects and tasks efficiently, prioritize work, and collaborate.

## Grab Credentials

1. Log in to your Jira account.
2. Navigate to the Jira project you have created.
3. Click on your profile picture in the top right corner, and choose `Manage Account`.
4. Go to the `Security` tab and select `Create and manage API tokens`.
5. Click `Create API Token`, provide a descriptive name and click the `Create` button.
6. Safely copy the newly generated access token.

## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
connector_name: jira
subdomain: Sub-Domain
email: Email account
api_token: API token
Queries: Queries
```


### Example Configuration

```yaml
version: 
encrypt_credentials: false
plugins:
  extractors:
    - name: jiradb
      connectorname: Jira
      config:
        subdomain: <SUB DOMAIN>
        email: <MAIL ID>
        api_token: <API TOKEN>
      properties:
        # queries: "created >= -30d order by created DESC"
        queries: <QUERY>
```

## Configure the Data Hub to connect Jira

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Jira Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Jira Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Jira` template.

  ![Jira Data Hub - BoldBI](/static/assets/working-with-etl/images/jira_addtemplate.png#max-width=100%)
  
  4. Update the subdomain, email and API token in the template. Also, Update the resources on the `select` property and Click Save, choose the desired destination to save the pipeline.

```js
The available resources are supported in Facebook Ads 
- issues 
- users 
- ad_creatives 
- projects 
 ```
 
  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI]

(https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Jira - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Jira - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Jira - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Jira - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Jira - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.
