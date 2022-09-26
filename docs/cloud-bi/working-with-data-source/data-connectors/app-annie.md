---
layout: post
title: App Annie – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect App Annie data through REST API endpoint with Bold BI Cloud and create data source for dashboard configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to App Annie data source

Bold BI dashboard designer supports connecting App Annie web services through REST API.

## Choose App Annie data source

To configure the App Annie data source, follow the below steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   
   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **App Annie** connection in the connection panel.

    ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/app-annie/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/app-annie/ChooseDS_server.png)

## Create App Annie data source
Once you click the App Annie data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create App Annie data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid App Annie REST API endpoint in the URL textbox. Refer the [App Annie API documentation](https://support.appannie.com/hc/en-us) for more details.

    Example: `https://api.appannie.com/v1.3/accounts`

3. Select **GET** method for the REST API in **Method** combo box.
4. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with your dashboard.  
5. Select **JSON** data type in **Data Format** combo box.
6. Replace **&lt;:your_api_token&gt;** under **Headers** with a valid bearer token.
7. Choose **None** under **Authentication Type** as authentication is done through header.

    ![DataSourcesView](/static/assets/cloud/working-with-datasource/data-connectors/images/app-annie/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get Bearer Key for connecting App Annie data source?

1. Login in to App Annie [Dashboard.](https://www.data.ai/account/login/?_ref=header)
2. Select **Account -> API Key** and find the API Key under **'Your API Key'** section.

![Bearer token](/static/assets/cloud/working-with-datasource/data-connectors/images/app-annie/BearerToken.png)

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
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from App Annie Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[App Annie API Limits](https://www.appannie.com/en/legal/terms/#analytics)

[App Annie Integration](https://www.boldbi.com/integrations/app-annie)