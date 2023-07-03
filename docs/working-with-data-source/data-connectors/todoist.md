---
layout: post
title: Todoist – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Todoist web service using OAuth-based authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Todoist data source
Bold BI dashboard designer supports connecting Todoist web services through REST API. 

## Choose Todoist data source
To configure the Todoist data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Todoist** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Todoist/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Todoist/ChooseDS_Server.png)

## Authentication with Todoist
Use the following steps to authenticate with Todoist web service:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Todoist account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.

3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect using existing connected account, refer [Connected Accounts](/working-with-data-source/data-connectors/todoist/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  If you need to connect to another account click **Connect New Account.**


## Connect to Todoist
### Create Todoist data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Todoist data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Todoist Sync API endpoint in the URL textbox. Refer the [Todoist API documentation](https://developer.todoist.com/sync/v8/#overview) for more details.

    Example: [https://developer.todoist.com/sync/v8/](https://developer.todoist.com/sync/v8/)  

3. Select **POST** method for the REST API in **Method** combo box.
4. Select either *Parameter(s)* or *Raw* under **Request Body**. Set `resource_types` as key and one of the Todoist Sync API resource types as its value. `e.g. items, labels, projects, day_orders, collaborators, etc`.   
5. In **Max Rows**, enter the maximum number of rows to be fetched from the Todoist data source. This value is used to fetch the data from Todoist data source via pagination.
6. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
7. Select **JSON** data type in **Data Format** combo box.
8. The authentication type will be set to **Todoist** automatically since OAuth is used for authenticating with Todoist account.

You can also edit the connection information set here using the [Edit Connection](/working-with-data-source/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most of the REST APIs return only fewer data on a single API request. To pull the amount of data you need, set a value in this field.  
Pagination is handled internally and will fetch the amount of data you need.
</td>
</tr>
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
</td>
</tr>
</table>

### Sample Queries
All Sync API requests share the same endpoint URL: https://developer.todoist.com/sync/v8/ . Make a Sync API request with the *resource_types* in **Request Body** to retrieve your user resources.

**Retrieve items of Sync API**

resource_types: "items"

**Retrieve all resource types**

resource_types: "all"

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Todoist Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/Todoist/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/Todoist/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Limit on commands per request](https://developer.todoist.com/sync/v8/#request-limits)

[Batching Commands](https://developer.todoist.com/sync/v8/#batching-commands)

[Todoist Integration](https://www.boldbi.com/integrations/todoist?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbitodoistintegration)