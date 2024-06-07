---
layout: post
title: How to create Yelp data source through REST API | Bold BI Docs
description: Learn how to connect Yelp data through basic HTTP authentication and create a data source for the dashboards using Bold BI & embed them in any Web applications.
platform: bold-bi 
documentation: ug
---

# Connecting Bold BI to Yelp data source
The Bold BI dashboard designer connects to the Yelp web services through the REST API.

> **Note:** Yelp data source is available in On-Premises Deployment, but not in the Syncfusion Managed Cloud Server.

## Choose Yelp data source

To configure the Yelp data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Yelp** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Yelp/yelpDS.png)

   > **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Yelp/yelpDS_server.png)

## Create Yelp data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow these steps to create a Yelp data source:
1.  Enter a name and description (optional) for the data source.
2.  Click on the **API Endpoints** from drop box and choose the necessary Endpoints.
3.  Click on the **Custom Url** to manually enter the URL. Refer to the [Yelp API Documentation](https://www.yelp.com/developers/documentation/v3) for more details.
4.  Select the **GET** method for the REST API in the **Method** combo box.
5.  In **Max Rows**, enter the maximum number of rows fetched from the Yelp data source. This value is used to fetch the data from the Yelp data source using the pagination.
6.  Enter your **appKey** for authorization in the headers. Refer to  [Yelp API key Authentication](https://www.yelp.com/developers/documentation/v3/authentication) for creating **appkey**.
7.  Choose a time interval for the **Refresh Settings** using the combo box to periodically trigger the Rest API request to keep the data in sync with your dashboard.
8.  Select the **JSON** data type in the **Data Format** combo box.
9.  Choose **None** in the **Authentication Type** combo box.  

 ![Data source preview](/static/assets/working-with-datasource/data-connectors/images/Yelp/DataSourcesView.png)  

You can also edit the connection information that is set using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

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
Period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up Custom URL
1. For example, in order to obtain specific business details, you should connect to the Business search endpoint, which will return information based on the business you searched for.
2. Replace the parameter with "name" and enter the business name you need to search into the value field.

   `https://api.yelp.com/v3/businesses/search?param=value`
   

### Sample queries

1. To access all categories of businesses, you need to use the URL provided below.

   `https://api.yelp.com/v3/categories`

2. To view specific businesses, you need to replace the business **ID** in the URL provided below.

   `https://api.yelp.com/v3/businesses/<:id>`


### Preview and data import
* Click the **Preview & Connect** to connect with the configurations that have been set.
* The Choose Table(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Yelp Rest API request. This dialog displays a list of schema(s) in the tree view and their corresponding values in the grid for preview. Select required schemas from the tree view to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table on the Query designer page.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Yelp/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Yelp/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)