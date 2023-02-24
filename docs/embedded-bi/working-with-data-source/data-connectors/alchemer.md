---
layout: post
title: Alchemer – Embedded BI Data Connector | Bold BI Learning
description: Learn how to connect Alchemer web service through REST API endpoint with Bold BI Embedded and create data source.
canonical: "/cloud-bi/working-with-data-source/data-connectors/alchemer/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Alchemer data source
Bold BI dashboard designer supports connecting Alchemer web services through REST API. 

## Choose Alchemer data source
To configure the Alchemer data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Alchemer** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Alchemer/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/Alchemer/ChooseDS_Server.png)


## Create Alchemer data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Alchemer data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Alchemer REST API endpoint in the URL textbox. Refer the [Alchemer API documentation](https://apihelp.alchemer.com/help) for more details.

    Example: `http://restapi.alchemer.com/v5/<:yourendpoint>?api_token=<:your_api_token>&api_token_secret=<:your_api_secret>`

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Alchemer data source. This value is used to fetch the data from Alchemer data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **None** under **Authentication Type**.

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get API Token for connecting Alchemer Data source?
1. Login to [Alchemer](https://www.alchemer.com/) account. Go to *Account -> Integrations -> API Key* to get your API key and API secret.

    ![API Request Parameters](/static/assets/embedded/working-with-datasource/data-connectors/images/Alchemer/APIKey.png)

2. If you don't find any keys, go to *Account -> Integrations -> Manage API -> Create an API key* to create a new key.

    ![Manage API keys](/static/assets/embedded/working-with-datasource/data-connectors/images/Alchemer/ManageAPI.png)

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

### Setting up the URL
1. You can replace *API Key* and *API Secret* in **URL** field. Else, replace the *API Request Parameters* in URL instead of default parameters in URL field.

### Sample queries
**Surveys**

`http://restapi.alchemer.com/v5/survey?api_token=kjUnjee3njnWJOniO&api_token_secret=A9WHOxTYs`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Alchemer Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[Alchemer API Rate Limits](https://apihelp.alchemer.com/help/api-request-limits)

[Alchemer Restrict API Access](https://apihelp.alchemer.com/help/restrict-api-access)

[Alchemer Integration](https://www.boldbi.com/integrations/alchemer?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbialchemerintegration)