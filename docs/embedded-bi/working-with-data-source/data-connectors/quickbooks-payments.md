---
layout: post
title:  QuickBooks Payments – Embedded BI Connector | Bold BI Docs
description: Learn how to connect QuickBooks Payments using OAuth-based authentication through REST API endpoint with Bold BI Embedded.
canonical: "/cloud-bi/working-with-data-source/data-connectors/quickbooks-payments/"
documentation: ug
---

# Connecting Bold BI to the QuickBooks Payments data source
The Bold BI dashboard designer supports connecting the QuickBooks Payments web services through REST API. 

## Choose QuickBooks Payments data source
To configure the QuickBooks Payments data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel, to add a new data connection.
   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **QuickBooks Payments** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/QuickBooksPayments/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/QuickBooksPayments/ChooseDS_server.png)

## Authentication with QuickBooks Payments
Use the following steps to authenticate with QuickBooks Payments web service:
 
1. Click the data source, you will be prompted with a login window. Enter the credentials of your QuickBooks Payments account to authorize.
 
2. Click **Allow** in the authorization window, to accept the scopes requested by the Bold BI dashboards. 
> **NOTE:** If the permission is denied, the account will not be accessible from the dashboard.
 
3. Set a name to identify the account and click **Next**. 
 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
 
5. To connect through already connected account, refer to the [Connected Accounts](#connected-accounts-for-oauth-data-sources). 
> **NOTE:** To connect another account, click **Connect New Account.**


## Connect to QuickBooks Payments
### Create a QuickBooks Payments data source
After the successful authentication, the NEW DATA SOURCE configuration panel will open. Follow these steps to create a QuickBooks Payments data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** down dropbox and choose the required endpoint.
3. Click the **Custom URL**, to enter the URL manually. Refer to the [QuickBooks Payments API documentation](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account) for more details.
4. Select the **GET** method for the REST API in the **Method** combo box.
5. In **Max Rows**, enter the maximum number of rows to be fetched from the QuickBooks Payments data source. This value is used to fetch the data from the QuickBooks Payments data source using pagination.
6. Choose a time interval for the **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
7. Select the **JSON** data type in the **Data Format** combo box.
8. The authentication type will be set to the **QuickBooks Payments** automatically since the OAuth is used for authenticating with QuickBooks Payments account.

![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/QuickBooksPayments/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

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
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
<tr>
<td>
Data Formats 
</td>
<td>
By default, the data is retrieved in the <i>JSON</i> format. Additionally, <i>XML</i> is supported in QuickBooks Payments.
</td>
</tr>
</table>

1. For instance, to query about the account, query the <i>/Get bank account</i> endpoint.
2. From the listed information, you can get the ID of the specific account.

Replace it in the URL to query a particular account:

   `https://api.intuit.com/quickbooks/v4/customers/<:id>/bank-accounts/<:bankaccount_id>`

### Sample queries
**Get all bank accounts associated with a customer**

   `https://api.intuit.com/quickbooks/v4/customers/<:id>/bank-accounts`

**Get all cards associated with a customer**

   `https://api.intuit.com/quickbooks/v4/customers/<:id>/cards`

### Preview and data import
* Click **Preview & Connect**, to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the QuickBooks Payments Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in the grid for preview. Select the required schema(s) from the treeview to use in the designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save**, to save the data source with a relevant name..

## Connected accounts for the OAuth data sources
If you have already logged into the account and authenticated with a web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/embedded/working-with-datasource/data-connectors/images/QuickBooksPayments/OAuthDSPayments.png)

You can edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/embedded/working-with-datasource/data-connectors/images/QuickBooksPayments/ManageDS.png)


## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)

[Blog post](https://www.boldbi.com/blog/quickbooks-dashboard-example-for-exploring-financial-data-with-bold-bi)