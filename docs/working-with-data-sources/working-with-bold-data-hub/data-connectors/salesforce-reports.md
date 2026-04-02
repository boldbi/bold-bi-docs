---
layout: post
title: SalesforceReports Bold Data Hub Connector – Bold BI Learning
description: Learn how to use the Salesforce Reports ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Salesforce Reports

Salesforce reports are powerful tools that allow users to analyze data, track performance, and make informed business decisions.They enable users to compile and analyze data from different sources within Salesforce, providing insights that can drive strategic decisions.

## Grab Credentials for OAuth Option

To set up your pipeline, you need the `client_id`and `client_secret`

### Example Configuration

```yaml
version: 1.0.1
encrypt_credentials: false
plugins:
  extractors:
    - name: Salesforce Reports
      connectorname: Salesforce Reports
      config:
        client_id : <Client ID>
        client_secret : <Client Secret>
        report_id : <report ID>
        type: oauth
```

## Grab Credentials for Export Option

To set up your pipeline, you'll need your Salesforce `user_name`, `password`, and `security_token`. Use your login credentials for the `user_name` and `password`.

### Obtain Security Token

Follow these steps to obtain the `security_token`:

1. Log into Salesforce with your credentials.
2. Click your profile picture/avatar at the top-right.
3. Select "Settings" from the drop-down.
4. Under "Personal Setup" in the sidebar, choose "My Personal Information" > "Reset My Security Token".
5. Click "Reset Security Token".
6. Check your email for the token sent by Salesforce.

### Example Configuration

```yaml
version: 1.0.1
encrypt_credentials: false
plugins:
  extractors:
    - name: Salesforce Reports
      connectorname: Salesforce Reports
      config:
        username: <USERNAME>
        password: <PASSWORD>
        security_token: <SECURITY TOKEN>
        instance_url : <Instance URL>
        report_id : <report ID>
        type: export
```

## Configure the Data Hub to connect Salesforce Reports

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![SalesforceReports Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Pipeline` and provide the name for the new pipeline.
  
  ![SalesforceReports Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created pipeline and then double click the `Salesforce Reports` Connector, from the list of available connectors and add template popup appears.

  ![SalesforceReports - BoldBI](/static/assets/working-with-etl/images/salesforcereports_addtemplate.png#max-width=100%)

There are two methods to get authenticated for using Salesforce Reports:
1. OAuth
2. Export

### For OAuth Authentication

1. Click the `Configure OAuth` button. A Popup appears enter client id and client secret button and Click Ok button.

![SalesforceReports - Reports](/static/assets/working-with-etl/images/salesforce_oauth.png#max-width=100%)

2. Now You will be redirected to the salesforce authentication page.
3. Once the redirection is completed. The Salesforce Reports template is added with client Id and secret.

![SalesforceReports - BoldBI](/static/assets/working-with-etl/images/salesforce_templatedetails.png#max-width=100%)

### For Export Option

1. Double click the Salesforce Reports Connector, from the list of available connectors and add template popup appears.
2. Choose the export option and click add template button.

![SalesforceReports - BoldBI](/static/assets/working-with-etl/images/salesforcereports_exportpopup.png#max-width=100%)

  4. Add the necessary details in the YAML template and  Click Save, choose the desired destination to save the pipeline.

  ![SalesforceReports - BoldBI](/static/assets/working-with-etl/images/salesforcereports_exportdetails.png#max-width=100%)

  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

   ![SalesforceReports - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![SalesforceReports- BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![SalesforceReports - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![SalesforceReports - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%)

3. The Schedule history can be checked using the history option as well as logs.

![SalesforceReports - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI.

![SalesforceReports - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

5. Click `Edit DataSource` Option to view the created tables.