---
layout: post
title: Quickbase Data Connector for Cloud BI | Bold BI Docs
description: Learn how to connect Quickbase web service through basic HTTP authentication with Bold BI and create a data source for the dashboards in Cloud application.
documentation: ug
---

# Connecting Bold BI to Quickbase data source
The Bold BI dashboard designer supports connecting Quickbase web services through REST API. 

## Choose Quickbase data source

To configure the Quickbase data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Quickbase** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Quickbase/ChooseDS.png)

   > **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Quickbase/ChooseDS_Server.png)

## Create Quickbase data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a Quickbase data source:
1. Enter a name and description (optional) for the data source.
2. Enter the **QB-Realm-Hostname** for the connected account.
3. Enter the **QB-USER-TOKEN** in **Authentication** text box for the connected account.
4. Enter the **App Id** for the connected account.
5. Click the **Table** dropdown box and choose the required table.
6. In **Max Rows**, enter the maximum number of rows fetched from the Quickbase data source. This value is used to fetch the data from the Quickbase data source using the pagination.
7. Choose a time interval for the **Refresh Settings** using the combo box to periodically trigger the Rest API request to keep the data in sync with your dashboard.

   ![Data source preview](/static/assets/working-with-datasource/data-connectors/images/Quickbase/DataSourcesView.png)

You can also edit the connection information set using the [Edit Connection](/working-with-data-source/editing-a-data-connection/) option.

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

### Setting up the URL

1. For entering the URL manually, click the **Custom URL** and select the relevant method type in **Method** combo box, then enter the URL. Refer to the [Quickbase API documentation](https://developer.quickbase.com/) for more details.
2. For instance, if you need to get a list of App Events details, you need to replace your *appId* in the following API in Custom URL.
3. Replace it in the URL to query particular conversations.

`https://api.quickbase.com/v1/apps/<:appId>/events`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developer.quickbase.com/)

### Sample queries

**Get all relationship details**

`https://api.quickbase.com/v1/tables/<:tableId>/relationships`

**Get reports as for tables**

`https://api.quickbase.com/v1/reports?tableId=<:tableId>`


### Preview and data import
* Click the **Preview & Connect** to connect with the configurations set.
* The Choose Tables dialog opens. The schema represents the key fields of JSON data retrieved from the Quickbase Rest API request. This dialog displays a list of schema(s) in the treeview and their corresponding values in the grid for preview. Select required schemas from the treeview to use in the designer and click Connect.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the treeview table in the left pane and drop the table on the Query designer page.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)