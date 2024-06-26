---
layout: post
title: Zoho Invoice - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Zoho Invoice web service through OAuth-based authentication with cloud-hosted Bold BI and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Zoho Invoice data source
The Bold BI dashboard designer supports connecting to Zoho Invoice web services using the REST API. 

## Choose Zoho Invoice data source
To configure the Zoho Invoice data source, follow these steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Zoho Invoice** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Zohoinvoice/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Zohoinvoice/ChooseDS_Server.png)
   
## Authentication with Zoho Invoice
Use the following steps to authenticate with the Zoho Invoice web service:

1. Click on the data source, which will prompt a login window. Enter the credentials of your Zoho Invoice account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by the Bold BI dashboards. 
> **NOTE:**  If permission is denied, the account will not be accessible from the dashboard.
3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect using the already connected account, refer to the [Connected Accounts](/working-with-data-sources/data-connectors/zoho-invoice/#connected-accounts-for-oauth-data-sources).

     > **NOTE:**  To connect with a new account click **Connect New Account**.

## Create a Zoho Invoice data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow these steps to create a Zoho Invoice data source.
1. Enter a name and description (optional) for the data source.
2. Click the **Endpoints** down drop box and choose the required endpoint.
3. Click **Custom Url** to enter the URL manually. Refer to the [Zoho Invoice API documentation](https://www.zoho.com/invoice/api/v3/#introduction) for more details.
4. Select the **GET** method for the REST API in the **Method** combo box.
5. In **Max Rows**, enter the maximum number of rows to be fetched from the Zoho Invoice data source. This value is used to fetch the data from the Zoho Invoice data source using pagination.
6. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with your dashboard.  
7. Select the **JSON** data type in the **Data Format** combo box.
8. The authentication type will be set to the **Zoho Invoice** automatically since OAuth is used for authenticating with the Zoho Invoice account.

    ![Data source preview](/static/assets/working-with-datasource/data-connectors/images/Zohoinvoice/DataSourcesView.png)

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

1. For instance, to get the specific invoice details, query the <i>/Show Invoice</i> endpoint.
2. From the listed information, get the id of the specific invoice.

Replace it in the URL to query particular invoice:

`https://invoice.zoho.com/api/v3/invoices/<:invoice_id>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://www.zoho.com/invoice/api/v3/#introduction)

### Sample queries

**All Invoices**

`https://invoice.zoho.com/api/v3/invoices`

**All Credit Notes**

`https://invoice.zoho.com/api/v3/creditnotes`


### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Zoho Invoice Rest API request. This dialog displays a list of schemas in the treeview and its corresponding values in the grid for preview. Select required schema(s) from the treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table in the Query designer page.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with a web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/Zohoinvoice/OAuthDS.png)

You can edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/Zohoinvoice/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)