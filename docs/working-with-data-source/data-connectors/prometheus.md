---
layout: post
title: Prometheus - Embedded BI Connector | Bold BI Documentation
description: Learn how to connect Prometheus web service through REST API endpoint with Bold BI deployed in your server and create data source for widget configuration.
canonical: "/cloud-bi/working-with-data-source/data-connectors/prometheus/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to the Prometheus data source
The Bold BI dashboard designer supports connecting the Prometheus web services using the REST API. 

## Choose Prometheus data source
To configure the Prometheus data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Prometheus** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/prometheus/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/prometheus/ChooseDS_server.png)

## Create a Prometheus data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a Prometheus data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Prometheus REST API endpoint in the URL textbox. Refer to the [Prometheus API documentation](https://prometheus.io/docs/prometheus/latest/querying/api/) for more details.

    Example: [http://<:your_domain>/api/v1/query?query=up](http://<:your_domain>/api/v1/query?query=up)

3. Select **GET** method for the REST API in **Method** combo box.
4. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
5. Select **JSON** data type in **Data Format** combo box.
6. Replace **&lt;:your_domain&gt;** at the URL with a valid API account domain.
7. Choose **None** under **Authentication Type** as authentication is done using the header.

![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/prometheus/DataSourcesView.png)

You can also edit the connection information set using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### Additional information
<table width="600">
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
**Sample Scraped**

[http://<:your_domain>/api/v1/query?query=scrape_samples_scraped](http://<:your_domain>/api/v1/query?query=scrape_samples_scraped)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Prometheus Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in the grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag from tree view table in the left pane and drop the table in Query designer page.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[Prometheus Integration](https://www.boldbi.com/integrations/prometheus)