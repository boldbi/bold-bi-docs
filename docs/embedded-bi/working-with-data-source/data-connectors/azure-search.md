---
layout: post
title: Azure Search - Embedded BI Connector | Bold BI Documentation
description: Learn how to connect Azure Search web service through REST API endpoint with Bold BI deployed in your server and create data source for widget configuration.
canonical: "/cloud-bi/working-with-data-source/data-connectors/azure-search/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Azure Search data source

Bold BI dashboard designer supports connecting Azure Search web services through REST API.

## Choose Azure Search data source
To configure the Azure Search data source, follow the below steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.
![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Azure Search** connection in the connection panel.

![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Azuresearch/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.
     ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/Azuresearch/ChooseDS_server.png)

## Create Azure Search data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Azure Search data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Azure Search REST API endpoint in the URL textbox. Refer the [Azure Search API documentation](https://docs.microsoft.com/en-us/azure/search/search-get-started-postman) for more details.

     Example: `[https://<:service-name>.search.windows.net/indexes/<:index-name>/docs?api-version=2017-11-11]`

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Azure Search data source. This value is used to fetch the data from Azure Search data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Replace **<:your_api_key>** with your **api-key** under Headers with a valid API key.
8. Choose **None** under **Authentication** Type, as authentication is done through header.

![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/Azuresearch/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get API Key for connecting Azure Search Data source?

Azure Search authentication supports API Key authentication.

1. Sign in to the **Azure portal**, and in your search service Overview page.

2. You can get the **API key** for the specific service as mentioned in below image.
![Reveal API Key](/static/assets/embedded/working-with-datasource/data-connectors/images/Azuresearch/APIKey.png)
3. For more information, you can refer to the mentioned link [Azure Search API Key information](https://docs.microsoft.com/en-us/azure/search/search-security-api-keys)

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
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
</td>
</tr>
</table>

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Azure Search Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

 ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
  
 ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links

[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)