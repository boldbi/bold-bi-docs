---
layout: post
title: HubSpot – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect HubSpot data using basic http authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to HubSpot data source
The Bold BI dashboard designer supports connecting to HubSpot web services through the REST API. 

## Choose HubSpot data source

To configure the HubSpot data source, follow these steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **HubSpot** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/HubSpot/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/HubSpot/ChooseDS_Server.png)

## Create a HubSpot data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow these steps to create a HubSpot data source.
1. Enter a name and description (optional) for the data source.
2. Choose The Extract Engine.
3. Click the **API Endpoints** dropdown box and choose the required endpoint.
4. Enter your **API KEY** in the API key text box.
5. Click the **Custom Url** to enter the URL manually. Refer to the [HubSpot API documentation](https://developers.hubspot.com/docs/api/overview) for more details. 
6. Select the **GET** method for the REST API in the **Method** combo box.
7. In **Max Rows**, enter the maximum number of rows to be fetched from the HubSpot data source. This value is used to fetch the data from the HubSpot data source using pagination.
8. Configure **Refresh Settings** for choosing the time interval for triggering the Rest API request periodically to keep the data in sync with our dashboard.  
9. Select the **JSON** data type in the **Data Format** combo box.
10. Choose **Basic HTTP Authentication** in the **Authentication Type** combo box.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/HubSpot/DataSourcesView.png)

## Extract Engine
You can connect to the data source using one of the following extract methods:
- **Bold BI Extract**: Data will be extracted and managed directly within Bold BI.
- **Data Hub**: Data extraction is handled through the Data Hub. An equivalent pipeline is created, utilizing the Data Hub’s Extract, Transform, Load (ETL) capabilities to filter, optimize, or transform the data, and to generate new tables.
- To view the equivalent pipeline created for data extraction, navigate to the Query Designer page and click on View Pipeline.

    ![Refresh Setting](/static/assets/working-with-datasource/images/View_Pipeline.png)

- When the data refresh is configured for data sources that uses the Data Hub Extract Engine, the refresh will be managed within the Data Hub.

You can also edit the connection information set using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

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
Period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

1. For example, in order to retrieve the specific deal details, query the <i>/Show Deal</i> endpoint.
2. Obtain the id of the specific user from the information listed.

Replace it in the URL to query particular conversations:

`https://api.hubapi.com/crm/v3/objects/deals/<:dealId>?hapikey=<:yourhapikey>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation]( https://developers.hubspot.com/docs)

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

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag the table from the tree view table in the left pane and drop it onto the Query designer page.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/HubSpot/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/HubSpot/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)