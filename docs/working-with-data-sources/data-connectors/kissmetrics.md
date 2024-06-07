---
layout: post
title: Kissmetrics – Cloud BI Data Connector | Bold BI Learning
description: Learn how to connect Kissmetrics web service through basic http authentication with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Kissmetrics data source
The Bold BI dashboard designer supports connecting to Kissmetrics web services through the REST API.

## Choose Kissmetrics data source

To configure the Kissmetrics data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Kissmetrics** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/kissmetrics/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/kissmetrics/ChooseDS_server.png)

## Create Kissmetrics data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Kissmetrics data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Kissmetrics REST API endpoint in the URL textbox. Refer to the [Kissmetrics API documentation](https://developers.kissmetrics.com/reference#overview) for more details.

    Example: `https://query.kissmetrics.com/v3/products/{product_id}/reports`

3. Select the **GET** method for the REST API in the **Method** combo box.
4. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
5. Select **JSON** data type in **Data Format** combo box.
6. Choose **Basic HTTP Authentication** in **Authentication Type** combo box.
7. Enter the valid credentials associated with your account in **Username & Password** text boxes.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/kissmetrics/DataSourcesView.png)


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

1. Query the <i>/Products</i> endpoint.
2. From the listed information get the id of the specific Product.

Replace it in the URL to query a particular reports: `https://query.kissmetrics.io/v3/products/{product_id}/reports`.

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developers.kissmetrics.com/reference#overview)

### Sample queries

**Properties**

`https://query.kissmetrics.com/v3/products/{product_id}/properties`

**Events**

`https://query.kissmetrics.io/v3/products/{product_id}/events`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Kissmetrics Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/kissmetrics/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/kissmetrics/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Kissmetrics Integration](https://www.boldbi.com/integrations/kissmetrics?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbikissmetricsintegration)