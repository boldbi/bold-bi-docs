---
layout: post
title: QuickBooks – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect QuickBooks Online using OAuth-based authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to QuickBooks data source
Bold BI dashboard designer supports connecting QuickBooks Online and Payments web services through REST API. 

## Choose QuickBooks data source
To configure the QuickBooks data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **QuickBooks** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/QuickBooks/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/QuickBooks/ChooseDS_Server.png)

## Authentication with QuickBooks
Use the following steps to authenticate with QuickBooks web service:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your QuickBooks account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.
   
3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via already connected account, refer  [Connected Accounts](/working-with-data-sources/data-connectors/quickbooks/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to QuickBooks
### Create QuickBooks data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create QuickBooks data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid QuickBooks REST API endpoint in the URL textbox. Refer the [QuickBooks API documentation](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account) for more details.

    Example: [https://quickbooks.api.intuit.com/v3/&lt;:your_end_point&gt;](https://quickbooks.api.intuit.com/v3/%3c:your_end_point%3e)    
3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the QuickBooks data source. This value is used to fetch the data from QuickBooks data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. The authentication type will be set to **QuickBooks** automatically since OAuth is used for authenticating with QuickBooks account.

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

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
<tr>
<td>
Data Formats 
</td>
<td>
By default data is retrieved in <i>JSON</i> format. Additionally <i>XML</i> is supported in QuickBooks.
</td>
</tr>
</table>

### Setting up the URL

1. To find your company id/realm id, refer [here](https://quickbooks.intuit.com/community/Help-Articles/How-do-I-find-my-Company-ID/td-p/185551)

Replace it in the URL to query a particular company:

   [https://quickbooks.api.intuit.com/v3/company/&lt;:company_id&gt;/query?query=your_query](https://quickbooks.api.intuit.com/v3/company/%3c:company_id%3e/query?query=your_query)

### Sample queries
**Companies**

[https://quickbooks.api.intuit.com/v3/company](https://quickbooks.api.intuit.com/v3/company)

**Specific Company details**

[https://quickbooks.api.intuit.com/v3/company/123146143834454/query?query=samplequery](https://quickbooks.api.intuit.com/v3/company/123146143834454/query?query=samplequery)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from QuickBooks Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/QuickBooks/OAuthDSOnline.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/QuickBooks/ManageDS.png)

> **NOTE:**  Switching between QuickBooks Online and Payments will require authorization of the account due to scope changes. Click **Authorize** to proceed.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/QuickBooks/OAuthDSPayments.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[QuickBooks Integration](https://www.boldbi.com/integrations/quickbooks-online?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiquickbooksonlineintegration)

[Blog post](https://www.boldbi.com/blog/quickbooks-dashboard-example-for-exploring-financial-data-with-bold-bi)