---
layout: post
title: SparkPost – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect SparkPost through REST API endpoint with Bold BI Cloud and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to SparkPost data source
The Bold BI dashboard designer supports connecting to SparkPost web services through the REST API. 

## Choose SparkPost data source
To configure the SparkPost data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **SparkPost** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/sparkpost/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/sparkpost/ChooseDS_server.png)

## Create SparkPost data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create SparkPost data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid SparkPost REST API endpoint in the URL textbox. Refer to the [SparkPost API documentation](https://developers.sparkpost.com/api/) for more details.

    Example: `https://api.sparkpost.com/api/v1/metrics`

3. Select the **GET** method for the REST API in the **Method** combo box.
4. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
5. Select **JSON** data type in **Data Format** combo box.
6. Replace **&lt;your_api_token&gt;** under **Headers** with a valid API token.
7. Choose *None* under **Authentication Type** as authentication is done through header.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/sparkpost/DataSourcesView.png)

You can also edit the connection information that is set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get API Token for connecting SparkPost data source?

1. Login to your account. Go to *Settings -> API Keys*.
2. Use this *API Key* as **:your_api_token** in SparkPost data source in Bold BI Dashboard.

![Reveal API Key](/static/assets/working-with-datasource/data-connectors/images/sparkpost/APIKey.png)

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose 'Never'.
</td>
</tr>
</table>

### Sample queries

**Events**

`https://api.sparkpost.com/api/v1/events/message`

**Templates**

`https://api.sparkpost.com/api/v1/templates`

**Suppression List**

`https://api.sparkpost.com/api/v1/suppression-list`


### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from SparkPost Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/sparkpost/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/sparkpost/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[SparkPost API Limits](https://developers.sparkpost.com/api/#header-rate-limiting)

[SparkPost Integration](https://www.boldbi.com/integrations/sparkpost?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbisparkpostintegration)