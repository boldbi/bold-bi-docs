---
layout: post
title: Square - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect to the Square data source using token-based authentication through REST API endpoint with cloud-hosted Bold BI.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to SquareUp data source
Bold BI dashboard designer supports connecting the SquareUp web services through REST API.

## Choose SquareUp data source

To configure the SquareUp data source, follow these steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **SquareUp** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/SquareUp/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/SquareUp/ChooseDS_Server.png)


## Create SquareUp data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a SquareUp data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** drop-down box and choose the required endpoint.
3. Enter your **API Token** in headers. Refer to the [Get Access Token](https://developer.squareup.com/docs/build-basics/access-tokens) for more details.
   ![Add Header](/static/assets/cloud/working-with-datasource/data-connectors/images/SquareUp/AddHeader.png)   
   
4. If you want to enter the endpoint manually, click **Custom Url** and then enter the URL manually. Refer to the [SquareUp API documentation](https://developer.squareup.com/reference/square) for more details.
5. Select the **GET** method for the REST API in the **Method** combo box.
6. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with our dashboard. 
7. Select the **JSON** data type in the **Data Format** combo box.

![Data source preview](/static/assets/cloud/working-with-datasource/data-connectors/images/SquareUp/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

1. For instance, to get the specific payment details, query the <i>All Payments</i> endpoint.
2. From the listed information, get the id of the specific payment.

Replace it in the URL to query particular payment:

`https://connect.squareup.com/v2/payments/<:payment_id>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developer.squareup.com/reference/square)

### Sample queries

**All Payments**

`https://connect.squareup.com/v2/payments`

**All Payments Refunds**

`https://connect.squareup.com/v2/refunds`

**All Disputes**

`https://connect.squareup.com/v2/disputes`

**All Locations**

`https://connect.squareup.com/v2/invoices?location_id=<:location_id>`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the SquareUp Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in a grid for a preview. Select required schema(s) from a treeview to use in the designer and then click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/bold-bi-walk-through/)
