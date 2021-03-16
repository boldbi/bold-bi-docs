---
layout: post
title: Zendesk Sunshine - Embedded BI Connector | Bold BI Docs
description: Learn how to connect Zendesk Sunshine service through basic http authentication with Bold BI deployed in your server and create data source.
canonical: "/cloud-bi/working-with-data-source/data-connectors/zendesk-sunshine/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Zendesk Sunshine data source
Bold BI dashboard designer supports connecting Zendesk Sunshine web services through REST API. 

## Choose Zendesk Sunshine data source

To configure the Zendesk Sunshine data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Zendesk Sunshine** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Zendesksunshine/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/Zendesksunshine/ChooseDS_Server.png)

## Create Zendesk Sunshine data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a Zendesk Sunshine data source.
1. Enter a name and description (optional) for the data source.
2. Enter the **HostName** for the connected account.
3. Click the **API Endpoints** down drop box and choose the required endpoint.
4. Click **Custom Url** to enter the URL manually. Refer to the [Zendesk Sunshine API documentation](https://developer.zendesk.com/rest_api/docs/sunshine/introduction) for more details. 
5. Select the **GET** method for the REST API in the **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows to be fetched from the Zendesk Sunshine data source. This value is used to fetch the data from the Zendesk Sunshine data source using the pagination.
7. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with your dashboard.  
8. Select the **JSON** data type in the **Data Format** combo box.
9. Choose **Basic HTTP Authentication** in the **Authentication Type** combo box.
10. Enter a valid Zendesk Sunshine **Username** and **Password** to access the endpoints.

![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/Zendesksunshine/DataSourcesView.png)

You can also edit the connection information set using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

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

1. For instance, to get the specific job details, query the <i>/Show Job</i> endpoint.
2. From the listed information get the id of the specific job.

Replace it in the URL to query a particular conversations:

`https://<:yoursubdomain.zendesk.com>/api/sunshine/jobs/<:job_id>`

### Sample queries

**All Users**

`https://<:yoursubdomain.zendesk.com>/api/v2/users.json`

**All relationship types**

`https://<:yoursubdomain.zendesk.com>/api/sunshine/relationships/types`

**All Jobs**

`https://<:yoursubdomain.zendesk.com>/api/sunshine/jobs`


### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Zendesk Sunshine Rest API request. This dialog displays a list of schemas in the treeview and its corresponding values in the grid for preview. Select required schema(s) from the treeview to use in designer and click **Connect**

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from tree view table in the left pane and drop the table in the Query designer page.

   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)