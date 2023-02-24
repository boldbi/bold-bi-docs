---
layout: post
title: How to create Alma data source in Embedded BI | Bold BI Docs
description: Learn how to create a data source by connecting the Alma data through its REST API endpoint in Dashboard Designer with the Bold BI Embedded data connector.
platform: bold-bi 
documentation: ug
---

# Connecting Bold BI to Alma data source
The Bold BI dashboard designer connects the Alma web services through REST API.

## Choose Alma data source

To configure the Alma data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Alma** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Alma/Almapng.png)

   > **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/Alma/AlmaDS_server.png)

## Create Alma data source
Once you click the Alma data source, the Alma data source configuration panel opens. Follow these steps to create a Alma data source:
1.  Enter the name and description (optional) for the data source.
2.  Enter the **Host Name** for the connected account. For example. `<:your_alma_domain>.api.getalma.com`
3.  Enter the **Application key** for the connected account.
4.  Click the **Resources** dropdown box and choose the required endpoint.
5.  Enter the **API KEY** and **Auth Secret** for the connected account in textbox.
6.  Click the **Custom Url** to enter the URL manually. For more details you  can refer this documentation https://dev.api.getalma.com/docs/api/v2/.
7.  Select **Method** from the method drop-down box.
8.  In **Max Rows**, enter the maximum number of rows fetched from the Alma data source. This value is used to fetch the data from the Alma data source using pagination.
9.  Choose a time interval for the **Refresh Settings** using the combo box to periodically trigger the Rest API request to keep the data in sync with your dashboard.
10. Select the **JSON** data type in the **Data Format** combo box.
11. Choose **None** in the **Authentication Type** combo box.  

 ![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/Alma/AlmaDS.png)  

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
Period before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up Custom URL
1. For instance, to view the parents details, connect to the parents endpoint, which will return information to the parents.  
2. To view parents details,here replace the application. 

   `https://yourhostname/v2/<:application>/parents`

For more information on the API endpoints available for this data source, refer to their official [API Documentation]( https://dev.api.getalma.com/docs/api/v2/)
   

### Sample queries

1. To get all school details in a district, you need to use the below-given URL.

   `https://yourhostname/v2/<:application>/district/schools`

2. To get event types of schools, you need to replace the id of the school in the below-given URL.

   `https://yourhostname/v2/<:application>/school/calendar/event-types/<:id>`


### Preview and data import
* Click the **Preview & Connect** to connect with the configurations set.
* The Choose Table(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Alma Rest API request. This dialog displays a list of schema(s) in the tree view and their corresponding values in the grid for preview. Select the required schemas from the tree view to use in the designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table on the Query designer page.

   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)
