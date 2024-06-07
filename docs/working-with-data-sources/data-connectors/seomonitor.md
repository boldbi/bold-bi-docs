---
layout: post
title: SEOmonitor – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect SEOmonitor data through REST API endpoint with Bold BI Cloud and create data source for dashboard configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to SEOmonitor data source
The Bold BI dashboard designer supports connecting to SEOmonitor web services through the REST API.

## Choose SEOmonitor data source
To configure the SEOmonitor data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **SEOmonitor** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/seomonitor/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/seomonitor/ChooseDS_server.png)

## Create SEOmonitor data source

Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create SEOmonitor data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid SEOmonitor REST API endpoint in the URL textbox. Refer to the [SEOmonitor API documentation](https://docs.seomonitor.com/api/v1/) for more details.

    Example: `https://api.seomonitor.com/v1/ranks/<:site-id>/<:start-date>/<:end-date>`

3. Select the **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the SEOmonitor data source. This value is used to fetch the data from SEOmonitor data source via pagination.
5. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Replace **&lt;:your_api_token&gt;** under Headers with a valid API token.
8. Choose **None** under **Authentication Type** as authentication is done through header.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/seomonitor/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get API Token for connecting SEOmonitor data source?

1. Login to [SEOmonitor](https://app.seomonitor.com/my_account/login) account. Go to *Profile -> Account settings*.
2. Use this **API Token**  as **&lt;:your_api_token&gt;** in SEOmonitor data source in Bold BI Dashboard.

![Reveal API Token](/static/assets/working-with-datasource/data-connectors/images/seomonitor/APIToken.png)

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most REST APIs return only a limited amount of data on a single API request. To retrieve the necessary amount of data, you can set a value in this field. Pagination is handled internally and will fetch the required data.
</td>
</tr>
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

**Sites**

`https://api.seomonitor.com/v1/sites`

**Devices**

`https://api.seomonitor.com/v1/devices`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from SEOmonitor Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/seomonitor/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/seomonitor/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[SEOmonitor Integration](https://www.boldbi.com/integrations/seomonitor?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiseomonitorintegration)