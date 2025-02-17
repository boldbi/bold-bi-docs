---
layout: post
title: Matomo Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Matomo Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# ``Matomo``

``Matomo`` is a free and open-source web analytics platform that provides detailed insights into website and application performance with features like visitor maps, site search analytics, real-time visitor tracking, and custom reports.

## Grab Credentials

1. Sign in to ``Matomo``.
2. Click on the Administration settings icon located at the top right.
3. Navigate to "Personal > Security" on the left menu.
4. Find and select "Auth Tokens > Create a New Token."
5. Verify with your password.
6. Add a descriptive label for your new token.
7. Click "Create New Token."
8. Your token is displayed.
9. Copy the access token.
10. Your ``Matomo`` URL is the web address in your browser when logged into ``Matomo``, typically "https://mycompany.matomo.cloud/".
11. The `site_id` is a unique ID for each monitored site in ``Matomo``, found in the URL or via ``Administration > Measureables > Manage under ID``.

## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
connector_name: Matomo
Api_token: Access token
url: URL
queries: Queries
Site_id: ID of the site
Live_events_site_id: ID of the Live events site
```


### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Matomo_data
      connectorname: Matomo
      config:
        api_token: <API TOKEN>
        url: <URL>
      properties:
        type: <REPORTS/VISITS>
        queries: <QUERIES>
        site_id: <SITE ID>
        initial_load_past_days: <LOAD PAST DAYS>
        live_events_site_id: <LIVE EVENTS SITE ID>
```

## Configure the Data Hub to connect Matomo

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Matomo Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Matomo Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Matomo` template.

  ![Matomo Data Hub - BoldBI](/static/assets/working-with-etl/images/matomo_addtemplate.png#max-width=100%)
  
  4. Update the API token and Url in the template. Also, Update the resources on the `select` property and Click Save, choose the desired destination to save the pipeline.

```js
The available resources are supported in Matomo 
- matomo_reports 
- matomo_visits
 ```
   5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI]

(https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Matomo - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Matomo - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Matomo - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Matomo - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Matomo - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.
