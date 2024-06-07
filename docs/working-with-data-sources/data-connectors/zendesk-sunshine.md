---
layout: post
title: Zendesk Sunshine - Cloud BI Connector | Bold BI Docs
description: Learn how to connect Zendesk Sunshine service through basic http authentication with cloud-hosted Bold BI and create data source for dashboard preparation.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Zendesk Sunshine data source
The Bold BI dashboard designer supports connecting to Zendesk Sunshine web services through the REST API. 

## Choose Zendesk Sunshine data source

To configure the Zendesk Sunshine data source, follow these steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Zendesk Sunshine** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Zendesksunshine/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Zendesksunshine/ChooseDS_Server.png)

## Create Zendesk Sunshine data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow these steps to create a Zendesk Sunshine data source.
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

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/Zendesksunshine/DataSourcesView.png)

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
The period of time before the next refresh call is triggered. This will automatically trigger a call to the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

1. For example, to retrieve the specific job details, use the <i>/Show Job</i> endpoint.
2. Obtain the id of the specific job from the listed information.

Replace it in the URL to query a particular conversations:

`https://<:yoursubdomain.zendesk.com>/api/sunshine/jobs/<:job_id>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developer.zendesk.com/rest_api/docs/sunshine/introduction)

### Sample queries

**All Users**

`https://<:yoursubdomain.zendesk.com>/api/v2/users.json`

**All relationship types**

`https://<:yoursubdomain.zendesk.com>/api/sunshine/relationships/types`

**All Jobs**

`https://<:yoursubdomain.zendesk.com>/api/sunshine/jobs`


### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Zendesk Sunshine Rest API request. This dialog displays a list of schemas in the treeview and its corresponding values in the grid for preview. Select required schema(s) from the treeview to use in designer and click **Connect**

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from tree view table in the left pane and drop the table in the Query designer page.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Zendesksunshine/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Zendesksunshine/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)