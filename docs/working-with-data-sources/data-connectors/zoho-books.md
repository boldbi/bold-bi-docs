---
layout: post
title: How to create Zoho Books data source in Cloud BI | Bold BI Docs
description: Learn how to connect Zoho Books web service through OAuth-based authentication and create data source with Bold BI Cloud application.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Zoho Books data source
The Bold BI dashboard designer supports connecting to Zoho Books web services using the REST API. 

## Choose Zoho Books data source
To configure the Zoho Books data source, follow these steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Zoho Books** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/ZohoBooks/DataSource.png)
   
   >**NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/ZohoBooks/DataSourceService.png)
   
## Authentication with Zoho Books
Use the following steps to authenticate with the Zoho Books web service:

1. Click on the data source, which will prompt a login window. Enter the credentials of your Zoho Books account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by the Bold BI dashboards.
   >**NOTE:**  If permission is denied, the account will not be accessible from the dashboard.
3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect using the already connected account, refer to the [Connected Accounts](/working-with-data-sources/data-connectors/zoho-books/#connected-accounts-for-oauth-data-sources).

     > **NOTE:**  To connect with a new account click **Connect New Account**.

## Create a Zoho Books data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow these steps to create a Zoho Books data source.
1. Enter the name and description (optional) for the data source.
2. Enter the Organization Id for the connected account in the **Organization Id** text box. Refer to the documentation for get the [Organization Id](https://www.zoho.com/books/api/v3/introduction/#organization-id).
3. Click the **Resources** dropdown box and choose the required endpoint.
4. Click **Custom Url** to enter the URL manually. Refer to the [Zoho Books API documentation](https://www.zoho.com/books/api/v3/#introduction) for more details.
5. Select the **GET** method for the REST API in the **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows to be fetched from the Zoho Books data source. This value is used to fetch the data from the Zoho Books data source using pagination.
7. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with your dashboard.  
8. Select the **JSON** data type in the **Data Format** combo box.
9. The authentication type will be set to the **Zoho Books** automatically since OAuth is used for authenticating with the Zoho Books account.
 ![Data source preview](/static/assets/working-with-datasource/data-connectors/images/ZohoBooks/PreviewConnect.png)

You can also edit the connection information set using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.


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
</table>

### Setting up the URL

1. For instance, to get the specific bill details, query the <i>/Show Bill</i> resource.
2. From the listed information get the id of the specific bill.

Replace it in the URL to query particular bills:

`https://books.zoho.com/api/v3/bills/<:bill_id>?organization_id=<:Organization Id>`

For more information on the API endpoints available for this data source, refer to their official [API documentation]( https://www.zoho.com/books/api/v3/#introduction)

### Sample queries

**All Invoices**

`https://books.zoho.com/api/v3/invoice?organization_id=<:organization id>`

**All Credit Notes**

`https://books.zoho.com/api/v3/creditnotes?organization_id=<:organization_id>`


### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Table(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Zoho Books Rest API request. This dialog displays a list of schemas in the treeview and its corresponding values in the grid for preview. Select required tables from the treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table in the Query designer page.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with a web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/ZohoBooks/NewAccount.png)

You can edit, delete, and re-authorize this account from the [Connected Accounts](/working-with-data-sources/working-with-connected-accounts/) page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/Zohoinvoice/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)