---
layout: post
title: SEOmonitor – Embedded BI Data Connector | Bold BI Docs
description: Learn how to connect SEOmonitor data through REST API endpoint with Bold BI Embedded and create data source for dashboard configuration.
canonical: "/cloud-bi/working-with-data-source/data-connectors/seomonitor/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to SEOmonitor data source
Bold BI dashboard designer supports connecting SEOmonitor web services through REST API.

## Choose SEOmonitor data source
To configure the SEOmonitor data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **SEOmonitor** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/seomonitor/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/seomonitor/ChooseDS_server.png)

## Create SEOmonitor data source

Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create SEOmonitor data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid SEOmonitor REST API endpoint in the URL textbox. Refer the [SEOmonitor API documentation](https://docs.seomonitor.com/api/v1/) for more details.

    Example: [https://api.seomonitor.com/v1/ranks/&lt;:site-id&gt;/&lt;:start-date&gt;/&lt;:end-date&gt;](https://api.seomonitor.com/v1/ranks/%3c:site-id%3e/%3c:start-date%3e/%3c:end-date%3e) 

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the SEOmonitor data source. This value is used to fetch the data from SEOmonitor data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Replace **&lt;:your_api_token&gt;** under Headers with a valid API token.
8. Choose **None** under **Authentication Type** as authentication is done through header.

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get API Token for connecting SEOmonitor data source?

1. Login to [SEOmonitor](https://app.seomonitor.com/my_account/login) account. Go to *Profile -> Account settings*.
2. Use this **API Token**  as **&lt;:your_api_token&gt;** in SEOmonitor data source in Bold BI Dashboard.

![Reveal API Token](/static/assets/embedded/working-with-datasource/data-connectors/images/seomonitor/APIToken.png)

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

**Sites**

[https://api.seomonitor.com/v1/sites](https://api.seomonitor.com/v1/sites)

**Devices**

[https://api.seomonitor.com/v1/devices](https://api.seomonitor.com/v1/devices)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from SEOmonitor Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links

[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[SEOmonitor Integration](https://www.boldbi.com/integrations/seomonitor?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiseomonitorintegration)