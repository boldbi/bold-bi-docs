---
layout: post
title: 42matters – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect 42matters data through REST API endpoint with Bold BI Cloud and create data source for dashboard configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to 42matters data source
The Bold BI dashboard designer supports connecting to 42matters web services through REST API.

## Choose 42matters data source
To choose 42matters as a data source, follow the steps below:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/42matters/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **42matters** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/42matters/ChooseDS.png)

> **NOTE:**  To create a data source from the home page, click on the **Data Sources** menu in the left menu panel and select **Create Data Source** from the data sources page

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/42matters/ChooseDS_server.png)

## Create 42matters data source
When you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the steps below to create a 42matters data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid 42matters REST API endpoint in the URL textbox. Refer to the [42matters API documentation](https://42matters.com/docs/overview) for more details.

    Example: `https://data.42matters.com/api/v2.0/android/apps/reviews.json?p=<:package_name>&access_token=<:access_token>`

3. Select **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the 42matters data source. This value is used for fetching data via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box to trigger the REST API request periodically to keep the data in sync with our dashboard.
6. Select **JSON** data type in the **Data Format** combo box.
7. Replace **&lt;:access_token&gt;** at the end of the URL with a valid API access token.
8. Choose **None** under **Authentication Type** as authentication is done through the header.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/42matters/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get API Access Token for connecting 42matters data source?
1. Login to your [42matters](https://42matters.com/launchpad) account. Go to *Profile -> My Account*.
2. Use this *API Access Token* as ***&lt;:access_token&gt;*** in 42matters data source in Bold BI Dashboard.

![Reveal API Access Token](/static/assets/working-with-datasource/data-connectors/images/42matters/APIAccessToken.png)

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
<tr>
<td>
API Limits
</td>
<td>
In 42matters, making requests more than the allowed requests will get an error response. Contact your data source vendor, if you require more throughput.
</td>
</tr>
</table>

### Setting up the URL

The **&lt;:package_name&gt;** is a publicly available Android app package name. Retrieve the package details from the [app market](https://42matters.com/app-market-explorer/android/?view=filter).

Replace it in the below URL, `p=<:package_name> and access_token=<:access_token>`

`https://data.42matters.com/api/v2.0/android/apps/lookup.json?p=<:package_name>&access_token=<:access_token>`

For more information on the API endpoints available for this data source, please refer to their official [API Documentation](https://42matters.com/docs/overview).

### Sample queries 

**Reviews** 

`https://data.42matters.com/api/v2.0/android/apps/reviews.json?p=<:package_name>&access_token=<:access_token>`

**Lookup** 
 
`https://data.42matters.com/api/v2.0/android/apps/lookup.json?p=<:package_name>&access_token=<:access_token>`

**Versions** 
 
`https://data.42matters.com/api/v2.0/android/apps/versions.json?p=<:package_name>&access_token=<:access_token>`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the 42matters Rest API request. This dialog displays a list of schemas in a treeview and their corresponding values in a grid for preview. Select the required schema(s) from the treeview to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/42matters/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/42matters/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/42matters/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/42matters/Dashboardparameter.png)

>**Note:** Please refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[42matters Integration](https://www.boldbi.com/integrations/42matters)