---
layout: post
title: Alchemer – Cloud BI Data Connector | Bold BI Learning
description: Learn how to connect Alchemer web service through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Alchemer data source
Bold BI dashboard designer supports connecting to Alchemer web services through REST API.

## Choose Alchemer data source
To choose an Alchemer data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Alchemer** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Alchemer/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and selecting **Create Data Source**.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Alchemer/ChooseDS_Server.png)


## Create Alchemer data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Alchemer data source.
1. Enter a name and optional description for the data source.
2. Enter a valid Alchemer REST API endpoint in the URL textbox. Refer to the [Alchemer API documentation](https://apihelp.alchemer.com/help) for more details.

    Example: `http://restapi.alchemer.com/v5/<:yourendpoint>?api_token=<:your_api_token>&api_token_secret=<:your_api_secret>`

3. Select **GET** method for the REST API in the **Method** dropdown.
4. Enter the maximum number of rows to be fetched from the Alchemer data source in the **Max Rows** field for pagination.
5. Choose a time interval for **Refresh Settings** to trigger the REST API request periodically to keep the data in sync with the dashboard. 
6. Select **JSON** data type in the **Data Format** dropdown.
7. Choose **None** for **Authentication Type**.

You can also edit the connection information using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get API Token for connecting Alchemer Data source?
1. Login to your [Alchemer](https://www.alchemer.com/) and go to *Account -> Integrations -> API Key* to get your API key and API secret.

    ![API Request Parameters](/static/assets/working-with-datasource/data-connectors/images/Alchemer/APIKey.png)

2. If you don’t have any keys, go to *Account -> Integrations -> Manage API -> Create an API key* to generate a new key.

    ![Manage API keys](/static/assets/working-with-datasource/data-connectors/images/Alchemer/ManageAPI.png)

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
1. You can replace the *API Key* and API Secret in the **URL** field. Otherwise, replace the API Request Parameters in the URL instead of the default parameters in the URL field.

### Sample queries
**Surveys**

`http://restapi.alchemer.com/v5/survey?api_token=kjUnjee3njnWJOniO&api_token_secret=A9WHOxTYs`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Alchemer Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in a grid for preview. Select the required schema(s) from the treeview to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Alchemer/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Alchemer/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.


## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Alchemer API Rate Limits](https://apihelp.alchemer.com/help/api-request-limits)

[Alchemer Restrict API Access](https://apihelp.alchemer.com/help/restrict-api-access)

[Alchemer Integration](https://www.boldbi.com/integrations/alchemer?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbialchemerintegration)