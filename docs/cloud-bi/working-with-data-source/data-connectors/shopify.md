---
layout: post
title: Shopify - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Shopify web service through basic http authentication with cloud-hosted Bold BI and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to the Shopify data source
The Bold BI dashboard designer supports connecting the Shopify web services using the REST API. 

## Choose Shopify data source
To configure the Shopify data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Shopify** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/Shopify/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/Shopify/ChooseDS_Server.png)

## Create a Shopify data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a Shopify data source.
1. Enter a name and description (optional) for the data source.
2. Enter the **Shop Domain** for the connected account.
3. Click the **Resources** down dropbox and choose the required endpoint.
4. Enter a valid REST API endpoint in the URL textbox. Refer to the [Shopify API documentation](https://shopify.dev/docs/admin-api/rest/reference) for more details.
5. Click **Custom Url** to enter the URL manually.
6. Select **GET** method for the REST API in **Method** combo box.
7. In **Max Rows**, enter the maximum number of rows to be fetched from the Shopify data source. This value is used to fetch the data from the Shopify data source using the pagination.
8. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
9. Select **JSON** data type in the **Data Format** combo box.
10. Choose **Basic HTTP Authentication** in the **Authentication Type** combo box.
11. Enter a valid Shopify **API Key** and **API Password** to access the endpoints.

![Data source preview](/static/assets/cloud/working-with-datasource/data-connectors/images/Shopify/DataSourcesView.png)

You can also edit the connection information set using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most of the REST APIs return only fewer data on a single API request. To pull the amount of data you need, set a value in this field.  
Pagination is handled internally and it will fetch the amount of data you need.
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

1. Query the <i>Show Customer</i> endpoint.
2. From the listed information, you can get the customer id for the connected account.

Replace it in the URL to query a particular conversations:

https://<yourstore.myshopify.com>/admin/api/2020-04/customers/<:customer_id>.json

### Sample queries

**All Customers**

[(https://<yourstore.myshopify.com>/admin/api/2020-04/customers.json]

**Price Rules**

[(https://<yourstore.myshopify.com>/admin/api/2020-04/price_rules.json)]

**All Events**

[(https://<yourstore.myshopify.com>/admin/api/2020-04/events.json)]


### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Shopify Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in the grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag from tree view table in the left pane and drop the table in Query designer page.

   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)
