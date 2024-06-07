---
layout: post
title:  QuickBooks Payments – Cloud BI Connector | Bold BI Docs
description: Learn how to connect QuickBooks Payments using OAuth-based authentication through REST API endpoint with Bold BI Cloud.
documentation: ug
---

# Connecting Bold BI to the QuickBooks Payments data source
The Bold BI dashboard designer supports connecting to QuickBooks Payments web services through the REST API. 

## Choose QuickBooks Payments data source
To configure the QuickBooks Payments data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel, to add a new data connection.
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **QuickBooks Payments** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/QuickBooksPayments/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/QuickBooksPayments/ChooseDS_server.png)

## Authentication with QuickBooks Payments
Follow these steps to authenticate with the QuickBooks Payments web service:
 
1. Click on the data source, which will prompt a login window. Enter the credentials of your QuickBooks Payments account to authorize.
 
2. Click **Allow** in the authorization window, to accept the scopes requested by the Bold BI dashboards.
> **NOTE:** If permission is denied, the account will not be accessible from the dashboard.
 
3. Provide a name to identify the account and click **Next**. 
 
4. You have now successfully authorized your connection. Click on **Connect** to proceed with the data source connection.
 
5. To connect through an already connected account, refer to the [Connected Accounts](#connected-accounts-for-the-oauth-data-sources). 
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
8. The authentication type will be automatically set to **QuickBooks Payments** since OAuth is used for authenticating with the QuickBooks Payments account.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/QuickBooksPayments/DataSourcesView.png)

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
The period of time before the next refresh call is triggered. This will automatically trigger a call to the API configured in the data source to keep the data up to date.
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

1. For example, if you want to inquire about the account, you can query the <i>/Get bank account</i> endpoint.
2. You can obtain the ID of the specific account from the information provided.

Replace it in the URL to query a particular account:

   `https://api.intuit.com/quickbooks/v4/customers/<:id>/bank-accounts/<:bankaccount_id>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts)

### Sample queries
**Get all bank accounts associated with a customer**

   `https://api.intuit.com/quickbooks/v4/customers/<:id>/bank-accounts`

**Get all cards associated with a customer**

   `https://api.intuit.com/quickbooks/v4/customers/<:id>/cards`

### Preview and data import
* Click **Preview & Connect**, to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the QuickBooks Payments Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in the grid for preview. Select the required schema(s) from the treeview to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save**, to save the data source with a relevant name..

## Connected accounts for the OAuth data sources
If you have already logged into the account and authenticated with a web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/QuickBooksPayments/OAuthDSPayments.png)

You can edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/QuickBooksPayments/ManageDS.png)


## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Blog post](https://www.boldbi.com/blog/quickbooks-dashboard-example-for-exploring-financial-data-with-bold-bi)