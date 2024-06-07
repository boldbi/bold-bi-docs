---
layout: post
title: Salesforce Reports – Cloud BI Connector | Bold BI Learning
description: Learn how to connect Salesforce Reports using through OAuth-based authentication with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Salesforce Reports data source
The Bold BI dashboard designer supports connecting to Salesforce Reports web services through the REST API. 

## Choose Salesforce Reports data source
To configure the Salesforce Reports data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Salesforce Reports** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/SalesforceReports/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/SalesforceReports/ChooseDS_Server.png)

## Authentication with Salesforce Reports
Follow these steps to authenticate with the Salesforce Reports web service:

1. Click on the data source to open a login window. Enter your Salesforce Reports account credentials to authorize access.
2. Click **Allow** in the authorization window to accept the requested scopes by Bold BI dashboards.

   > **NOTE:** If permission is denied, the account will not be accessible from the dashboard.

3. Provide a name to identify the account and click **Next**. 
4. Your connection has been successfully authorized. Click **Connect** to proceed with the data source connection.
5. To connect using an already connected account, refer to [Connected Accounts](/working-with-data-sources/data-connectors/salesforce-reports/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Salesforce Reports
### Create Salesforce Reports data source
After successful authentication, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Salesforce Reports data source.
1. Enter a name and description (optional) for the data source.
2. Reports that exist in your account will be listed in the dropdown. Select the report from the list. You can also use the search box to filter the reports.
3. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with our dashboard.

> **NOTE:**  Supported report types are - Tabular, Matrix and Summary.

You can also edit the connection information that set here by using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

For more information on the API endpoints that are available for this data source, refer to the official [Salesforce-reports API documentation](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_defining_remote_access_applications.htm) 

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose 'Never'.
</td>
</tr>
</table>

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Salesforce Reports Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/SalesforceReports/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/SalesforceReports/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/SalesforceReports/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/SalesforceReports/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Salesforce Reports Integration](https://www.boldbi.com/integrations/salesforce?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbisalesforcereportsintegration)