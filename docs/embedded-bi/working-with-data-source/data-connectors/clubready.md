---
layout: post
title: ClubReady Data Connector – Embedded BI | Bold BI Documentation
description: Learn how to connect ClubReady web service using API key and Chain Id with Bold BI Embedded and create data source.
canonical: "/cloud-bi/working-with-data-source/data-connectors/clubready/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to ClubReady data source
Bold BI dashboard designer supports connecting ClubReady web services through REST API. 

## Choose ClubReady data source

To configure the ClubReady data source, follow the below steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **ClubReady** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/ClubReady/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/ClubReady/ChooseDS_Server.png)


## Create ClubReady data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create ClubReady data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** down drop box and choose the required endpoint.
3. Enter your **Api Key** in api key combo box.
4. Enter your **Chain Id** in chain id combo box. 
5. Enter a valid REST API endpoint in the URL textbox. Refer the [ClubReady API documentation](https://www.clubready.com/api/current/metadata) for more details.  
6. Click **Custom Url** to enter the URL manually.
7. Select **GET** method for the REST API in **Method** combo box.
8. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
9. Select **JSON** data type in **Data Format** combo box.

![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/ClubReady/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Sample queries
**Clubs**

`https://www.clubready.com/api/current/corp/{chainId}/clubs?ApiKey=<:apikey>&ChainId=<:chainid>`

**Prospect Types**

`https://www.clubready.com/api/current/club/lead-types?ApiKey=<:apikey>&ChainId=<:chainid>`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from ClubReady Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)