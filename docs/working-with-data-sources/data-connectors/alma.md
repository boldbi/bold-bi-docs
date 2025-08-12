---
layout: post
title: How to create Alma data source in Cloud BI | Bold BI Docs
description: Learn how to create a data source by connecting the Alma data through its REST API endpoint in Dashboard Designer with the Bold BI Cloud application.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Alma data source
The Bold BI dashboard designer connects to the Alma web services through the REST API.

## Choose Alma data source

To configure the Alma data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click on **CREATE NEW** to initiate a new connection from the connection panel.
3. Choose the **Alma** connection from the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Alma/Almapng.png)

   > **NOTE:** You can also create a data source from the home page by clicking on the **Data Sources** menu in the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Alma/AlmaDS_server.png)

## Create Alma data source
Once you click on the Alma data source, the Alma data source configuration panel will open. Follow these steps to create an Alma data source:
1.  Enter the name and optional description for the data source.
2.  Enter the **Host Name** for the connected account. For example: `<:your_alma_domain>.api.getalma.com`
3.  Enter the **Application key** for the connected account.
4.  Click on the **Resources** dropdown box and choose the required endpoint.
5.  Enter the **API KEY** and **Auth Secret** for the connected account in the textbox.
6.  Click on Custom URL to manually enter the URL. For more details, refer to this documentation `https://dev.api.getalma.com/docs/api/v2/`.
7.  Select the **Method** from the method drop-down box.
8.  In **Max Rows**, enter the maximum number of rows fetched from the Alma data source. This value is used to fetch the data from the Alma data source using pagination.
9.  Choose a time interval for the **Refresh Settings** using the combo box to periodically trigger the Rest API request and keep the data in sync with your dashboard.
10. Select **JSON** data type in the **Data Format** combo box.
11. Choose **None** in the **Authentication Type** combo box.

 ![Data source preview](/static/assets/working-with-datasource/data-connectors/images/Alma/AlmaDS.png)  

You can also edit the connection information set using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most REST APIs return only fewer data on a single API request. To pull the amount of data you need, set a value in this field.  
Pagination is handled internally and will fetch the amount of data you need.
</td>
</tr>
<tr>
<td>
Refresh Settings
</td>
<td>
A period will pass before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up Custom URL
1. For example, to view parent details, connect to the parents endpoint, which will provide information on the parents. 
2. To view parent details, replace the application with the appropriate information. 

   `https://yourhostname/v2/<:application>/parents`

For more information on the available API endpoints for this data source, refer to their official [API Documentation](https://dev.api.getalma.com/docs/api/v2/)
   

### Sample queries

1. To retrieve all school details in a district, use the provided URL below.

   `https://yourhostname/v2/<:application>/district/schools`

2. To retrieve event types for schools, replace the school id in the URL below.

   `https://yourhostname/v2/<:application>/school/calendar/event-types/<:id>`


### Preview and data import
* Click **Preview & Connect** to connect with the configured settings.
* The Choose Table(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Alma Rest API request. This dialog displays a list of schemas in the tree view and their corresponding values in the grid for preview. Select the required schemas from the tree view to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* The data design view page with the selected table schema will open. Drag the table from the tree view in the left pane and drop it onto the Query designer page.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with an appropriate name.

### Connect using custom attribute and dashboard parameter

We have included support for **custom attributes and dashboard parameters** in the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Alma/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Alma/Dashboardparameter.png)

>**Note:** Please refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

