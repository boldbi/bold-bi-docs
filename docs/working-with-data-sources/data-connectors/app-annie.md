---
layout: post
title: App Annie – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect App Annie data through REST API endpoint with Bold BI Cloud and create data source for dashboard configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to App Annie data source

The Bold BI dashboard designer supports utilizing App Annie web services through the REST API.

## Choose App Annie data source

To choose the App Annie data source and configure it, follow the steps below:

1. Click on the **Data Sources** button in the configuration panel to add a new data connection.
   
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click on **CREATE NEW** to initiate a new connection from the connection panel.
3. Select the **App Annie** connection from the connection panel.

    ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/app-annie/ChooseDS.png)

> **NOTE:**  To create a data source from the home page, click on the **Data Sources** menu in the left menu panel and then select **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/app-annie/ChooseDS_server.png)

## Create App Annie data source
When you click on the App Annie data source, the NEW DATA SOURCE configuration panel will open. Follow the steps below to create an App Annie data source:
1. Enter a name and optional description for the data source.
2. In the URL textbox, enter a valid App Annie REST API endpoint. Refer to the [App Annie API documentation](https://support.appannie.com/hc/en-us) for more details.

    Example: `https://api.appannie.com/v1.3/accounts`

3. Select the **GET** method for the REST API in the **Method** combo box.
4. Choose a time interval for **Refresh Settings** using the combo box to periodically trigger the Rest API request and keep the data in sync with your dashboard.
5. Select **JSON** data type in the **Data Format** combo box.
6. Replace **&lt;:your_api_token&gt;** under **Headers** with a valid bearer token.
7. Choose **None** under **Authentication Type** as authentication is done through headers.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/app-annie/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get Bearer Key for connecting App Annie data source?

1. Login to the App Annie [Dashboard.](https://www.data.ai/account/login/?_ref=header)
2. Select **Account -> API Key** and find the API Key under **'Your API Key'** section.

![Bearer token](/static/assets/working-with-datasource/data-connectors/images/app-annie/BearerToken.png)

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

### Sample queries

**Country List**

`https://api.appannie.com/v1.3/meta/countries`

**Shared Products List**

`https://api.appannie.com/v1.3/sharing/products?page_index=0`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog will open. The schema represents the key fields of the JSON data retrieved from the App Annie Rest API request. This dialog displays a list of schemas in treeview and their corresponding values in a grid for preview. Select the required schema(s) from the treeview to use in the designer and then click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/app-annie/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/app-annie/Dashboardparameter.png)

>**Note:** Please refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[App Annie API Limits](https://www.appannie.com/en/legal/terms/#analytics)

[App Annie Integration](https://www.boldbi.com/integrations/data-ai)