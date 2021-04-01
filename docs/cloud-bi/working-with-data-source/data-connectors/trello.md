---
layout: post
title: Trello - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Trello web service through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Trello data source
Bold BI dashboard designer supports connecting the Trello web services through REST API.

## Choose Trello data source

To configure the Trello data source, follow these steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Trello** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/Trello/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/Trello/ChooseDS_Server.png)


## Create Trello data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a Trello data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** drop-down box and choose the required endpoint.
3. Enter your **API Key** in the API key text box.
4. Enter your **API Token** in the API token text box. 
5. Click **Custom Url** if you want to enter the URL manually. Refer to the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/) for more details. 
6. Select the **GET** method for the REST API in the **Method** combo box.
7. Choose a time interval using **Refresh Settings** button to trigger the Rest API request periodically to keep the data in sync with our dashboard. 
8. Select the **JSON** data type in the **Data Format** combo box.

![Data source preview](/static/assets/cloud/working-with-datasource/data-connectors/images/Trello/DataSourcesView.png)

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

1. For instance, to get the specific member details, query the **Show Member** endpoint.
2. From the listed information, get the id of the specific member.

Replace it in the URL to query particular member:

`https://api.trello.com/1/members/<:id>?key=<:yourapikey>&token=<:yourapitoken>`

### Sample Endpoint

**All Emoji**

`https://api.trello.com/1/emoji?key=<:yourapikey>&token=<:yourapitoken>`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Trello Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in a grid for a preview. Select required schema(s) from a treeview to use in the designer and then click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)