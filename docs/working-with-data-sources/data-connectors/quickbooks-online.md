---
layout: post
title: QuickBooks Online – Cloud BI Connector | Bold BI Docs
description: QuickBooks Online – Cloud BI Connector | Bold BI Documentation	Learn how to connect QuickBooks Online using OAuth-based authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to QuickBooks Online data source
The Bold BI dashboard designer supports connecting to QuickBooks Online web services through the REST API. 

## Choose QuickBooks Online data source
To configure the QuickBooks Online data source, follow these steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **QuickBooks Online** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/QuickBooksOnline/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/QuickBooksOnline/ChooseDS_server.png)

## Authentication with QuickBooks Online
To authenticate with the QuickBooks Online web service, follow these steps:
 
1. Click on the data source, which will prompt a login window. Enter the credentials of your QuickBooks Online account to authorize.
 
2. Click **Allow** in the authorization window, to accept the scopes requested by the Bold BI dashboards.
> **NOTE:** If permission is denied, the account will not be accessible from the dashboard.
 
3. Provide a name to identify the account and click **Next**. 
 
4. You have successfully authorized your connection. Click **Connect** to continue with the data source connection.
 
5. To connect through an already connected account, refer to the [Connected Accounts](#connected-accounts-for-oauth-data-sources).
> **NOTE:** To connect another account, click **Connect New Account.**


## Connect to QuickBooks Online
### Create QuickBooks Online data source
After successful authentication, the NEW DATA SOURCE configuration panel will open. Follow these steps to create a QuickBooks Online data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** down dropbox and choose the required endpoint.
3. Enter your **Realm Id** in the realm id text box for your account QuickBooks online account.
4. Click **Custom Url** to enter the URL manually. Refer to the [QuickBooks Online API documentation](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account) for more details.
5. Select the **GET** method for the REST API in **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows to be fetched from the QuickBooks Online data source. This value is used to fetch the data from the QuickBooks Online data source using pagination.
7. Choose a time interval for the **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
8. Select **JSON** data type in the **Data Format** combo box.
9. The authentication type will be set to **QuickBooks Online** automatically since the OAuth is used for authenticating with the QuickBooks Online account.


![Data source preview](/static/assets/working-with-datasource/data-connectors/images/QuickBooksOnline/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most REST APIs return only a limited amount of data on a single API request. To retrieve the desired amount of data, you can set a value in this field. Pagination is handled internally and will fetch the necessary data accordingly.
</td>
</tr>
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call to the API configured in the data source to keep the data up to date.
</td>
</tr>
<tr>
<td>
Data Formats 
</td>
<td>
By default, the data is retrieved in <i>JSON</i> format. Additionally, QuickBooks Online supports <i>XML</i>.
</td>
</tr>
</table>

### Setting up the URL

1. For example, if you want to inquire about a specific bill, you can query the <i>/Read a bill</i> endpoint.
2. By checking the provided information, you can obtain the ID of the particular bill.

Replace it in the URL to query a particular account:

   `https://quickbooks.api.intuit.com/v3/company/<:realmID>/query?query= select * from bill`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account)

### Sample queries
**Query an account**

   `https://quickbooks.api.intuit.com/v3/company/<:realmID>/query?query= select * from account`

**Query a bill**

   `https://quickbooks.api.intuit.com/v3/company/<:realmID>/query?query= select * from bill`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the QuickBooks Online Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in the grid for preview. Select required schema(s) from the treeview to use in designer and click **Connect**.
   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/QuickBooksOnline/OAuthDSOnline.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/QuickBooksOnline/ManageDS.png)


## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Blog post](https://www.boldbi.com/blog/quickbooks-dashboard-example-for-exploring-financial-data-with-bold-bi)