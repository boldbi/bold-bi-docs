---
layout: post
title: Slack ETL/Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Slack ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Slack

Slack is a popular messaging and collaboration platform for teams and organizations.

## Grab User OAuth Token

To set up the pipeline, you need to create a Slack app in your workspace in order to obtain a user token for accessing the Slack API.

1. Go to your Slack workspace and click on the name at the top-left.
2. Select Tools > Customize Workspace.
3. From the top-left Menu, choose Configure apps.
4. Click on Build (top-right) > Create a New App.
5. Choose "From scratch", enter the "App Name", and select your target workspace.
6. Confirm by clicking on Create App.
7. Go to OAuth and Permissions under the Features section.
8. Assign the following scopes:

   | Name               | Description                                                |
   |--------------------|------------------------------------------------------------|
   | ``admin``              | Administer a workspace                                     |
   | ``channels:history``   | View messages and other content in public channels         |
   | ``groups:history``     | View messages and other content in private channels        |
   | ``im:history``        | View messages and other content in direct messages         |
   | ``mpim:history``       | View messages and other content in group direct messages    |
   | ``channels:read``      | View basic information about public channels in a workspace|
   | ``groups:read``        | View basic information about private channels              |
   | ``im:read``            | View basic information about direct messages                |
   | ``mpim:read``          | View basic information about group direct messages          |
   | ``users:read``         | View people in a workspace                                 |

   >**Note:** These scopes are adjustable; tailor them to fit your needs.

9. From the "OAuth & Permissions" section on the left, add the scopes and copy the User OAuth Token.

## Connection Properties

In the YAML file, the configuration section contains the following properties:

```yaml
Connectorname: Slack
Access_token: Slack Access token
```

### Example

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Slackk_data
      connectorname: Slack
      config:
        access_token: <ACCESS TOKEN>
      select:
        - TABLE1
        - TABLE2
      properties:
        page_size: <>
        start_date: <>
        end_date: <>
```

## Configure the Data Hub to connect Slack

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Slack Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Slack Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Slack` template.

  ![Slack Data Hub - BoldBI](/static/assets/working-with-etl/images/slack_addtemplate.png#max-width=100%)
  
  4. Update the access token in the template. Also, Update the resources on the `select` property and Click Save, choose the desired destination to save the pipeline.

  ![Slack Data Hub - BoldBI](/static/assets/working-with-etl/images/slack_yaml.png#max-width=100%)
  
   
 5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)


```js
The available resources are supported in Slack
- slack 
- channels 
- users 
- get_messages_resource 
- access_logs 
 ```

>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Slack - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Slack - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Slack - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Slack - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Slack - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.
