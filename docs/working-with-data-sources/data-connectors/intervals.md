---
layout: post
title: Intervals – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Intervals web service using basic http authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Intervals data source
The Bold BI dashboard designer supports connecting to Intervals web services through the REST API.

## Choose Intervals data source
To configure the Intervals data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Intervals** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/intervals/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/intervals/ChooseDS_server.png)

## Create Intervals data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Intervals data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Intervals REST API endpoint in the URL textbox. Refer to the [Intervals API documentation](https://www.myintervals.com/api/) for more details.

    Example: [https://api.myintervals.com/project/](https://api.myintervals.com/project/)

3. Select the **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Intervals data source.
5. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **Basic HTTP Authentication** under **Authentication Type** combo box.
8. Enter valid API key in **Username** text box, and leave **Password** field as empty.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/intervals/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get API Key for connecting Intervals data source?

1. Login to [Intervals](https://www.myintervals.com/login/) account. Go to *Profile -> My Account*.
2. Find the Access Token under *API Access* tab.
3. Use this Access Token as *&lt;your_api_key&gt;* in Intervals data source in Bold BI Dashboard.
4. Click *Generate Token*, if you don't have any valid *Access Token*.

   ![Reveal Access Token Key](/static/assets/working-with-datasource/data-connectors/images/intervals/AccessToken.png)

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
<tr>
<td>
API Limits
</td>
<td>
Intervals API requests are limited to 100 requests per minute for a single IP. Daily API requests for a customer account is 6000.
</td>
</tr>
</table>

### Sample queries

**Clients**

`https://api.myintervals.com/client/`

**Tasks**

`https://api.myintervals.com/task/`

**Invoices**

`https://api.myintervals.com/invoice/`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Intervals Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/intervals/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/intervals/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Intervals API Limits](https://www.myintervals.com/api/introduction.php)

[Intervals Integration](https://www.boldbi.com/integrations/intervals?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiintervalsintegration)