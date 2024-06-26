---
layout: post
title: ClubReady Data Connector – Cloud BI | Bold BI Documentation
description: Learn how to connect ClubReady web service using API key and Chain Id with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to ClubReady data source
Bold BI dashboard designer supports connecting ClubReady web services through the REST API.

## Choose ClubReady data source

To configure the ClubReady data source, follow the below steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **ClubReady** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/ClubReady/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/ClubReady/ChooseDS_Server.png)


## Create ClubReady data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create ClubReady data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** drop-down box and choose the required endpoint.
3. Enter your **API Key** in the API key combo box.
4. Enter your **Chain ID** in the chain ID combo box.
5. Enter a valid REST API endpoint in the URL textbox. Refer to the [ClubReady API documentation](https://www.clubready.com/api/current/metadata) for more details.  
6. Click **Custom Url** to enter the URL manually.
7. Select **GET** method for the REST API in the **Method** combo box.
8. Choose a time interval for **Refresh Settings** using the combo box to trigger the REST API request periodically to keep the data in sync with our dashboard. 
9. Select **JSON** data type in the **Data Format** combo box.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/ClubReady/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call to the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Sample queries
**Clubs**

`https://www.clubready.com/api/current/corp/{chainId}/clubs?ApiKey=<:apikey>&ChainId=<:chainid>`

**Prospect Types**

`https://www.clubready.com/api/current/club/lead-types?ApiKey=<:apikey>&ChainId=<:chainid>`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens, displaying a list of schemas in tree view and corresponding values in a grid for preview. Select the required schema(s) from the tree view to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* The data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/ClubReady/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/ClubReady/Dashboardparameter.png)

>**Note:** Please refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)