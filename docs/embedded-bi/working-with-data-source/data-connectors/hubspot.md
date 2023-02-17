---
layout: post
title: HubSpot – Embedded BI Connector | Bold BI Documentation
description: Learn how to connect HubSpot web service through basic http authentication with Bold BI Enterprise and create data source.
canonical: "/cloud-bi/working-with-data-source/data-connectors/hubspot/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to HubSpot data source
The Bold BI dashboard designer supports connecting the HubSpot web services through REST API. 

## Choose HubSpot data source

To configure the HubSpot data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **HubSpot** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/HubSpot/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/HubSpot/ChooseDS_Server.png)

## Create a HubSpot data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a HubSpot data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** dropdown box and choose the required endpoint.
3. Enter your **API KEY** in the API key text box.
4. Click the **Custom Url** to enter the URL manually. Refer to the [HubSpot API documentation](https://developers.hubspot.com/docs/api/overview) for more details. 
5. Select the **GET** method for the REST API in the **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows to be fetched from the HubSpot data source. This value is used to fetch the data from the HubSpot data source using pagination.
7. Configure **Refresh Settings** for choosing the time interval for triggering the Rest API request periodically to keep the data in sync with our dashboard.  
8. Select the **JSON** data type in the **Data Format** combo box.
9. Choose **Basic HTTP Authentication** in the **Authentication Type** combo box.

![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/HubSpot/DataSourcesView.png)

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
Period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

1. For instance, to get the specific deal details, query the <i>/Show Deal</i> endpoint.
2. From the listed information get the id of the specific user.

Replace it in the URL to query particular conversations:

`https://api.hubapi.com/crm/v3/objects/deals/<:dealId>?hapikey=<:yourhapikey>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developers.hubspot.com/docs)

### Sample queries

**All Companies**

`https://api.hubapi.com/crm/v3/objects/companies?hapikey=<:yourhapikey>`

**All Contacts**

`https://api.hubapi.com/crm/v3/objects/contacts?hapikey=<:yourhapikey>`

**All Deals**

`https://api.hubapi.com/crm/v3/objects/deals?hapikey=<:yourhapikey>`


### Preview and data import
Click the Preview & Connect to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the HubSpot Rest API request. This dialog displays a list of schemas in the treeview and its corresponding values in the grid for preview. Select required schema(s) from the treeview to use in the designer and click Connect.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table in the Query designer page.

   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)