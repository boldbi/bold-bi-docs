---
layout: post
title: Azure Search - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Azure Search web service through REST API endpoint with cloud-hosted Bold BI and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Azure Search data source

Bold BI dashboard designer supports connecting to Azure Search web services through the REST API.

## Choose Azure Search data source
To configure the Azure Search data source, follow the below steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.
![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Azure Search** connection in the connection panel.

![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Azuresearch/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu in the left menu panel and selecting **Create Data Source** from the data sources page.
     ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Azuresearch/ChooseDS_server.png)

## Create Azure Search data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow these steps to create the Azure Search data source:
1. Enter a name and optional description for the data source.
2. Enter a valid Azure Search REST API endpoint in the URL text box. Refer to the [Azure Search API documentation](https://docs.microsoft.com/en-us/azure/search/search-get-started-postman) for more details.

     Example: `[https://<:service-name>.search.windows.net/indexes/<:index-name>/docs?api-version=2017-11-11]`

3. Select **GET** method for the REST API in the **Method** combo box.
4. Enter the maximum number of rows to be fetched from the Azure Search data source in the **Max Rows** field. This value is used for pagination.
5. Choose a time interval for **Refresh Settings** using the combo box to periodically trigger the REST API request to keep the data in sync with the dashboard.
6. Select **JSON** data type in the **Data Format** combo box.
7. Replace **<:your_api_key>** with your API key under Headers with a valid API key.
8. Choose **None** under **Authentication** Type, as authentication is done through the header.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/Azuresearch/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get API Key for connecting Azure Search Data source?

Azure Search authentication supports API Key authentication:

1. Sign in to the **Azure portal** and navigate to your search service Overview page.

2. Obtain the **API key** for the specific service as shown in the image below.
![Reveal API Key](/static/assets/working-with-datasource/data-connectors/images/Azuresearch/APIKey.png)
3. For more information, refer to the provided link for [Azure Search API Key information](https://docs.microsoft.com/en-us/azure/search/search-security-api-keys)

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
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog will open. The schema represents the key fields of JSON data retrieved from the Azure Search Rest API request. This dialog displays a list of schemas in a tree view and its corresponding values in a grid for preview. Select the required schema(s) from the tree view to use in the designer and click **Connect**.

 ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema will open. Drag and drop the table.
  
 ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Azuresearch/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Azuresearch/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Azure Search Integration](https://www.boldbi.com/integrations/azure-cognitive-search)