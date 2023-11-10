---
layout: post
title: Connecting ChartMogul Data with Bold BI | Bold BI Docs
description: Learn how to create a data source by connecting the ChartMogul data through its REST API endpoint in Dashboard Designer with the Bold BI application.
platform: bold-bi
documentation: ug

---

# Connecting Bold BI to ChartMogul data source
The REST API is used by the Bold BI dashboard designer to connect to the ChartMogul web services.

## Choose ChartMogul data source

To configure the ChartMogul data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **ChartMogul** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/chartmogul/ChartMogul.png)

> **NOTE:** From the home page, you can also create a data source by selecting the **Data Sources** menu from the left menu panel and then selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/chartmogul/ChartMogul_server.png)

## Create ChartMogul data source

The NEW DATA SOURCE setup screen appears when you click the ChartMogul data source. To build a ChartMogul data source, follow the instructions below.

1. Enter the name and description (optional) for the data source.
2. Enter an API in the URL text box which must be a valid REST API. Refer to the [Chart Mogul API documentation](https://dev.chartmogul.com/reference).

    Example: `https://api.chartmogul.com/v1/metrics/arr?start-date=<:enter_start_date>&end-date=<:enter_end_date>`

3. Select **GET** method for the REST API in **Method** combo box.
4. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.
5. Enter a valid **API Key** to access the endpoint in your account. To obtain an API key in ChartMogul, Refer to more details on<a href ="#GenerateAPIKey"> Generate ChartMogul API Key</a>

   ![Data source preview](/static/assets/working-with-datasource/data-connectors/images/chartmogul/ChartMogul_view.png)  

Edit the connection information set using the [Edit Connection](/working-with-data-source/editing-a-data-connection/) option.


<p id="GenerateAPIKey"></a>

#### How to get APIKEY from ChartMogul

1. Log in to your ChartMogul account [chartmogul.com](https://app.chartmogul.com/users/sign_in).

   ![login chartmogul](/static/assets/working-with-datasource/data-connectors/images/chartmogul/login.png)

2. Navigating to **Profile to View Profile.**

   ![Choose profile](/static/assets/working-with-datasource/data-connectors/images/chartmogul/profile.png)

3. Go to **API keys** and then click on **Add API key**.

   ![Add API Key](/static/assets/working-with-datasource/data-connectors/images/chartmogul/Add_Apikey.png)

4. Enter a unique name for the key in the **Name** field and set the **Access Level** to either Read-only or Read & Write.

   ![Choose Develop apps](/static/assets/working-with-datasource/data-connectors/images/chartmogul/apikey_name.png)

5. Click **ADD** to create the key. Once the API key is added, you can see it under the **API Keys section**.

   ![API Key List](/static/assets/working-with-datasource/data-connectors/images/chartmogul/keyList.png)


#### Additional Information
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
The period before the next refresh call is triggered. It will automatically initiate a call for the API configured in the data source to keep the data up to datelick. The DataSources button in the configuration panel to add a new data connection.
</td>
</tr>
</table>

### Preview and Data Import
* Click the **Preview & Connect** to connect with the configurations set.
* The Choose Table(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Alma Rest API request. This dialog displays a list of the schema(s) in the tree view and their corresponding values in the grid for preview. Select the required schemas from the tree view for the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table on the Query Designer page.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[ChartMogul API Limits](https://dev.chartmogul.com/docs/rate-limits)