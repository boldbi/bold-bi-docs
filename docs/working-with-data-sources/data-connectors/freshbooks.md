---
layout: post
title: FreshBooks – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect FreshBooks service using OAuth-based authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to FreshBooks data source

The Bold BI dashboard designer supports connecting to FreshBooks web services through the REST API.

## Choose FreshBooks data source

To configure the FreshBooks data source, follow the below steps:

1. Click on the **Data Sources** button in the configuration panel to add a new data connection.
   
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click on **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **FreshBooks** connection in the connection panel.

    ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/freshbooks/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/freshbooks/ChooseDS_Server.png)

## Authentication with FreshBooks
Use the following steps to authenticate with the FreshBooks web service.

1. Click on the data source, which will prompt a login window. Enter the credentials of your FreshBooks account to authorize.
2. Click on **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If permission is denied, the account will not be accessible from the dashboard.
   
3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via an existing account, refer [Connected Accounts](/working-with-data-sources/data-connectors/freshbooks/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  If you need to connect to another account click on **Connect New Account.**

## Connect to FreshBooks
### Create FreshBooks data source
After successful authentication, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create FreshBooks data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid FreshBooks REST API endpoint in the URL textbox. Refer to the [FreshBooks API documentation](https://www.freshbooks.com/api/start) for more details.

   Example: `https://api.freshbooks.com/accounting/account/<:account_id>/items/items`

3. Select the **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the FreshBooks data source. This value is used to fetch the data from FreshBooks data source via pagination.
5. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. The authentication type will be set to **FreshBooks** automatically since OAuth is used for authenticating with FreshBooks account.

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most REST APIs return only a limited amount of data on a single API request. To retrieve the necessary amount of data, you can set a value in this field. Pagination is handled internally and will fetch the required data.
</td>
</tr>
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose 'Never'.
</td>
</tr>
</table>

### Setting up the URL
**Fetch data about specific account - Sample URL**
1. Replace the **<:account_id>** in the URL to query the items endpoint.
2. Query the <i>/users/me</i> endpoint.
3. From the listed information get the account id.

Replace it in the URL to query a specific group:

`https://api.freshbooks.com/accounting/account/<:account_id>/items/items`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://www.freshbooks.com/api/start)

#### Sample queries
**Invoices**

`https://api.freshbooks.com/accounting/account/JNRnzL/invoices/invoices`

**Expenses**

`https://api.freshbooks.com/accounting/account/JNRnzL/expenses/expenses`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from FreshBooks Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/freshbooks/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/freshbooks/ManageDS.png)

## Related links
<a href="https://www.boldbi.com/blog/key-metrics-for-your-business-growth-with-freshbooks" target="_blank">Blog Post</a>


[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[FreshBooks API Limits](https://www.freshbooks.com/api/limits)

<a href="https://www.boldbi.com/integrations/freshbooks" target="_blank">FreshBooks Integration</a>
