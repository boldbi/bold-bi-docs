---
layout: post
title: How to create Yelp data source through REST API | Bold BI Docs
description: Learn how to connect Yelp data through basic HTTP authentication and create a data source for the dashboards using Bold BI & embed them in any Web applications.
platform: bold-bi 
documentation: ug
---

# Connecting Bold BI to Yelp data source
The Bold BI dashboard designer connects the Yelp web services through REST API.

## Choose Yelp data source

To configure the Yelp data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Yelp** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Yelp/yelpDS.png)

   > **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/Yelp/yelpDS_server.png)

## Create Yelp data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a Yelp data source:
1.  Enter a name and description (optional) for the data source.
2.  Click the **API Endpoints** from drop box and choose the required Endpoints.
3.  Click the **Custom Url** to enter the URL manually. Refer to the [Yelp API Documentation](https://www.yelp.com/developers/documentation/v3) for more details.
4.  Select the **GET** method for the REST API in the **Method** combo box.
5.  In **Max Rows**, enter the maximum number of rows fetched from the Yelp data source. This value is used to fetch the data from the Yelp data source using the pagination.
6.  Enter your **appKey** for authorization in the headers. Refer to  [Yelp API key Authentication](https://www.yelp.com/developers/documentation/v3/authentication) for creating **appkey**.
7.  Choose a time interval for the **Refresh Settings** using the combo box to periodically trigger the Rest API request to keep the data in sync with your dashboard.
8.  Select the **JSON** data type in the **Data Format** combo box.
9.  Choose **None** in the **Authentication Type** combo box.  

 ![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/Yelp/DataSourcesView.png)  

You can also edit the connection information set using the  [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

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
1. For instance, to get the specific business details, connect to the Business search endpoint which will return information according to the business you searched.  
2. Here replace the param with name and in value enter the business name you need to search. 

   `https://api.yelp.com/v3/businesses/search?param=value`
   

### Sample queries

1. To get all categories of businesses, you need to use the below given URL.

   `https://api.yelp.com/v3/categories`

2. To view specific businesses, you need to replace the **id** of business in the below given URL.

   `https://api.yelp.com/v3/businesses/<:id>`


### Preview and data import
* Click the **Preview & Connect** to connect with the configurations set.
* The Choose Table(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Yelp Rest API request. This dialog displays a list of schema(s) in the tree view and their corresponding values in the grid for preview. Select required schemas from the tree view to use in the designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table on the Query designer page.

   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)