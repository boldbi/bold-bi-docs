---
layout: post
title: Hubspot Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Hubspot Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# HubSpot

HubSpot is a customer relationship management (CRM) software and inbound marketing platform that helps businesses to attract visitors, engage customers, and close leads.

## Grab Credentials

>**Note**: As of November 30, 2022, HubSpot API Keys are being deprecated and are no longer supported. Instead, it is recommended to authenticate using a private app access token or OAuth access token. Follow these steps to create a private app and get an authentication token before running the pipeline:

1. In HubSpot, click the settings icon to access settings.
2. Under `Account Setup` in the left sidebar, choose `Integrations` > `Private Apps`.
3. Select `Create a private app`.
4. In the `Basic Info` tab, provide a name and description.
5. In the `Scopes` tab, grant:
   - Read scopes for CMS, CRM, and Settings.
   - Permissions for: `business-intelligence`, `actions`, `crm.export`, `e-commerce`, `oauth`, `tickets`.
6. Click `Create app` > `Continue Creating`.
7. Click `Show token` and copy it.

## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
ConnectorName: HubSpot
api_key: API key
```


### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: HubSpot_data
      connectorname: HubSpot
      config:
         api_key: <API KEY>
      select:
        -Table1
        -Table2
      properties:
         includehistory: <true/false>
      
```
## Configure the Data Hub to connect Hubspot

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Hubspot Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Hubspot Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Hubspot` template.

  ![Hubspot Data Hub - BoldBI](/static/assets/working-with-etl/images/hubspot_addtemplate.png#max-width=100%)
  
  4. Update the API Key in the template. Also, Update the resources on the `select` property and Click Save, choose the desired destination to save the pipeline.

  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI]

(https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

 ![Google Sheets - Data Hub](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

```js
The available resources are supported in Hubspot 
- contacts 
- companies 
- deals 
- tickets 
- products 
- quotes 
- hubspot_events_for_objects
 ```


>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token.

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Hubspot - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Hubspot - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Hubspot - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Hubspot - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Hubspot - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.