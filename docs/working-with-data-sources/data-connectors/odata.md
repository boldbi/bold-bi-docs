---
layout: post
title: OData – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect OData web service through REST API endpoint with Bold BI Cloud and create data source for dashboard configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to OData data source
The Bold BI dashboard designer supports connecting to OData web services through the REST API. 

## Choose OData data source
To configure the OData data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **OData** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/OData/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/OData/ChooseDS_server.png)


## Create OData data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create OData data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid OData REST API endpoint in the URL textbox. Refer to the [OData API documentation](https://www.odata.org/documentation/) for more details.

    Example: `https://services.odata.org/V4/Northwind/Northwind.svc/Orders`

3. Select the **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the OData data source. This value is used to fetch the data from OData data source via pagination.
5. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
6. Choose the **Data Format** based on your OData service (JSON / XML). 
7. Choose one of the **Authentication Type** from the dropdown.
8. To connect based on the chosen Authentication, refer [Supported Authentication Types](/working-with-data-sources/data-connectors/odata/#authentication-for-odata).

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/OData/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

## Fetching table with single entity and multiple entities

### To fetch single entity

To pull data from a particular table use the odata table endpoint directly.

Example, `https://services.odata.org/V4/Northwind/Northwind.svc/Customers`

Only the Customers table will be extracted into Bold BI.
 
  ![Preview Single Table ](/static/assets/working-with-datasource/data-connectors/images/OData/SingleTable.png)
  
### To fetch multiple entities

You can use the service root URL to extract multiple tables into Bold BI at once.

Example [service](https://services.odata.org/V4/Northwind/Northwind.svc/) root URL.

1. Choose the tables needed to be extracted into Bold BI and click Connect.

  ![Preview Multiple Tables ](/static/assets/working-with-datasource/data-connectors/images/OData/MultipleTables.png)
  
2. Once multiple tables are moved, you can perform join on the available tables, if required, to gain insights. 

  ![Preview Join Table ](/static/assets/working-with-datasource/data-connectors/images/OData/JoinTable.png)
 
### Authentication for OData 

#### *None*
1. To connect to OData services without any authentication, choose this type. If necessary, you can also pass the API token in the header.

#### *Basic http Authentication*
1. Enter a valid username and password of your OData service.

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

### Sample queries

`https://services.odata.org/V4/Northwind/Northwind.svc/Order_Details`

`https://services.odata.org/V4/Northwind/Northwind.svc/Customers`

`https://services.odata.org/V4/Northwind/Northwind.svc/Regions`

`https://services.odata.org/V4/Northwind/Northwind.svc/Orders`

`https://services.odata.org/TripPinRESTierService`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from OData Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/OData/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/OData/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## How to connect ODATA live in Bold BI
The Bold BI dashboard designer supports connecting to OData live web services through the REST API.

Please refer this documentation for more information [Generic Web Connector](https://help.boldbi.com/working-with-data-sources/data-connectors/live-web/)

You can also check the sample OData queries here:
[Sample Queries](/working-with-data-sources/data-connectors/odata/#sample-queries)

![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/OData/Web-Live.png)

### Pagination

By default, OData supports Offset-based pagination in Bold BI.

![offset image](/static/assets/working-with-datasource/data-connectors/images/OData/offset.png)

For more details, refer to the documentation:
[Pagination types](/working-with-data-sources/data-connectors/web/#pagination-types)


## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[OData Integration](https://www.boldbi.com/integrations/odata?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiodataintegration)