---
layout: post
title: New Relic – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect New Relic web service through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to New Relic data source
The Bold BI dashboard designer supports connecting to New Relic web services through the REST API.

## Choose New Relic data source
To configure the New Relic data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **New Relic** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/new-relic/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/new-relic/ChooseDS_server.png)

## Create New Relic data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create New Relic data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid New Relic REST API endpoint in the URL textbox. Refer to the [New Relic API documentation](https://docs.newrelic.com/docs/apis/rest-api-v2/get-started/introduction-new-relic-rest-api-v2/) for more details.

    Example: `https://api.newrelic.com/v2/applications`

3. Select the **GET** method for the REST API in the **Method** combo box.
4. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
5. Select **JSON** data type in **Data Format** combo box.
6. Replace **&lt;:your_api_key&gt;** under Headers with a valid API key.
7. Choose **None** under **Authentication Type** as authentication is done through header.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/new-relic/DataSourcesView.png)


You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get API Key for connecting New Relic Data source?
1. Login to [New Relic](https://login.newrelic.com/login) account. Go to *Account Settings -> API keys*.
2. Find the *API key* by clicking the *Show key*.
3. Use this *API key* as **your_api_key** in New Relic data source in Bold BI Dashboard.
4. Click *Create REST API Key* if you don't have any valid API Key.

   ![Reveal API Key](/static/assets/working-with-datasource/data-connectors/images/new-relic/APIKey.png)

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

**Applications**

`https://api.newrelic.com/v2/applications`

**Deployments**

`https://api.newrelic.com/v2/applications/%3cyour_application_id%3e/deployments.json`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from New Relic Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/new-relic/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/new-relic/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[New Relic Integration](https://www.boldbi.com/integrations/new-relic?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbinewrelicintegration)