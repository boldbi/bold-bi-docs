---
layout: post
title: Xero - Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Xero web service through OAuth-based authentication with cloud-hosted Bold BI and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Xero data source
The Bold BI dashboard designer supports connecting Xero web services through REST API. 

## Choose Xero data source
To configure the Xero data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Xero** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Xero/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Xero/ChooseDS_Server.png)


## Create a Xero data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a Xero data source.
1. Enter a name and description (optional) for the data source.
2. Click the **Organizations** down drop box and choose the required organizations.

    ![Choose data from Organizations](/static/assets/working-with-datasource/data-connectors/images/Xero/OrganizationsView.png)

3. Click the **Resources** down drop box and choose the required resources.

    ![Choose data from Resources](/static/assets/working-with-datasource/data-connectors/images/Xero/ResourcesView.png)

4. Enter a valid REST Resources in the URL textbox. Refer to the [Xero API documentation](https://developer.xero.com/documentation/api/api-overview) for more details.
5. Click **Custom Url** to enter the URL manually.
6. Enter **xero-tenant-id** in header panel by clicking the **ADD** above the header, if you select the **Custom Url** checkbox.

    ![Update tenant id](/static/assets/working-with-datasource/data-connectors/images/Xero/XeroTenantIdView.png)

7. Select **GET** method for the REST API in **Method** combo box.
8. In **Max Rows**, enter the maximum number of rows to be fetched from the Xero data source. This value is used to fetch the data from the Xero data source using the pagination.
9. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
10. Select **JSON** data type in **Data Format** combo box.
11. The authentication type will be set to **Xero** automatically since the OAuth is used for authenticating with the Xero account.

    ![Data source preview](/static/assets/working-with-datasource/data-connectors/images/Xero/DataSourcesView.png)

You can also edit the connection information set using the [Edit Connection](/working-with-data-source/editing-a-data-connection/) option.


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
</table>

### Setting up the URL

1. For instance, to get the specific account details, connect to the <i>Show Accounts</i> endpoint which will return all account id and get the specific account id from that result. 
2. Replace it in the URL to query particular account.

`https://api.xero.com/api.xro/2.0/Accounts/<:accountid>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developer.xero.com/documentation/api/api-overview)

### Sample queries
**All Accounts**

https://api.xero.com/api.xro/2.0/Accounts

**All Bank Transactions**

https://api.xero.com/api.xro/2.0/BankTransactions


### Preview and data import

* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Xero Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in the grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag from tree view table in the left pane and drop the table in Query designer page.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with a web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/Xero/OAuthDS.png)

You can edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/Xero/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

<a href="https://www.boldbi.com/blog/unleash-financial-insights-with-xero-data" target="_blank">Unleash Financial Insights with Xero Data</a>
