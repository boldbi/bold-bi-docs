---
layout: post
title: How to create data source for Avochato Web Service | Bold BI Docs
description: Learn how to connect Avochato web service through basic HTTP authentication with Bold BI and create a data source for the dashboards in Enterprise application.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Avochato data source
The Bold BI dashboard designer connects the Avochato web services through REST API.

> **Note:** Avochato data source is available in Bold BI Embedded Analytics but not in Cloud Analytics Server.

## Choose Avochato data source

To configure the Avochato data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Avochato** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/avochato/AvochatoDS.png)

   > **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/avochato/AvochatoDS_server.png)

## Create Avochato data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a Avochato data source:
1.  Enter a name and description (optional) for the data source.
2.  Click the **API Endpoints** from drop box and choose the required Endpoints.
3.  Enter your **authId**  and **authsecret** for the datasource. Refer to [Avochato API Access documentation](https://www.avochato.com/docs)
4.  Click **Custom Url** to enter the URL manually. Refer to the [Avochato API documentation](https://www.avochato.com/docs)
5.  Select the **GET** method for the REST API in the **Method** combo box.
6.  In **Max Rows**, enter the maximum number of rows fetched from the Avochato data source. This value is used to fetch the data from the Avochato data source using the pagination.
7.  Choose a time interval for the **Refresh Settings** using the combo box to periodically trigger the Rest API request to keep the data in sync with your dashboard.
8.  Select the **JSON** data type in the **Data Format** combo box.
9.  Choose **None** in the **Authentication Type** combo box.

   ![Data source preview](/static/assets/working-with-datasource/data-connectors/images/avochato/DataSourcesView.png)

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

### Setting up Custom URL
1. For instance, to get the specific account details, query or show the Account endpoint.
2. From the listed information get the ID of the specific account.
3. Replace it in the URL to query particular conversations:

   `https://www.avochato.com/v1/accounts/<:id>?auth_id=<:yourauthid>&auth_secret=<:yourauthsecret>`

### Sample queries
1. To get all the accounts details, you need to replace your **authid** and **authsecret** in the below given URL

   `https://www.avochato.com/v1/accounts?auth_id=<:yourauthid>&auth_secret=<:yourauthsecret>`

2. To get all links details, you need to enter your **authid** and **authsecret** in the below given URL

   `https://www.avochato.com/v1/links?auth_id=<:yourauthid>&auth_secret=<:yourauthsecret>`


### Preview and data import
* Click the **Preview & Connect** to connect with the configurations set.
* The Choose Table(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Avochato Rest API request. This dialog displays a list of schema(s) in the tree view and their corresponding values in the grid for preview. Select required schemas from the tree view to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table on the Query designer page.

   ![QueryEditor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)