---
layout: post
title: Lessonly - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Lessonly web service through basic http authentication with cloud-hosted Bold BI and create data source for widget configuration. 
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Lessonly data source
Bold BI dashboard designer supports connecting Lessonly web services through REST API. 

## Choose Lessonly data source

To configure the Lessonly data source, follow the below steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Lessonly** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Lessonly/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Lessonly/ChooseDS_Server.png)

## Create Lessonly data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Lessonly data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** down drop box and choose the required endpoint.
3. Enter a valid REST API endpoint in the URL textbox. Refer the [Lessonly API documentation](https://docs.lessonly.com/) for more details.
4. Click **Custom Url** to enter the URL manually.
5. Select **GET** method for the REST API in **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows to be fetched from the Lessonly data source. This value is used to fetch the data from Lessonly data source via pagination.
7. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
8. Select **JSON** data type in **Data Format** combo box.
9. Choose **Basic HTTP Authentication** in **Authentication Type** combo box.
10. Enter a valid Lessonly **Subdomain** and **API Key** to access the endpoints.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/Lessonly/DataSourcesView.png)

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

1. Query the <i>Show User</i> endpoint.
2. From the listed information get the user id for the connected account.

Replace it in the URL to query a particular conversations:

https://api.lessonly.com/api/v1/users/<:user_id>

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://docs.lessonly.com/)

### Sample queries

**All User**

[(https://api.lessonly.com/api/v1/users)]

**All Assignments**

[(https://api.lessonly.com/api/v1/assignments)]

**All Tags**

[(https://api.lessonly.com/api/v1/tags)]


### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Lessonly Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag from tree view table in the left pane and drop the table in Query designer page.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)