---
layout: post
title: RavenDB - Embedded BI Connector | Bold BI Documentation
description: Learn how to connect RavenDB database with Bold BI deployed in your server and create data source for dashboard configuration.
canonical: "/cloud-bi/working-with-data-source/data-connectors/ravendb/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to RavenDB data source
The Bold BI dashboard designer supports connecting the RavenDB database using the RavenDB client. 

## Choose RavenDB data source
To configure the RavenDB data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **RavenDB** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/RavenDB/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/RavenDB/ChooseDS_server.png)

## Create RavenDB data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a RavenDB data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid URL in the `RavenDB ServiceBase URL` text box.
3. Select the database in the listed database associated with the given RavenDB Server in **Database** combo box.
4. Enter the valid query in **RQL Query** text box.
5. In **Max Rows**, enter the maximum number of rows to be fetched from the RavenDB data source. This value is used to fetch the data from the RavenDB data source using the pagination.
6. Choose a time interval for **Refresh Settings** using the combo box, to trigger a request to RavenDB server periodically to keep the data in sync with our dashboard.
7. Choose **Enable SSL**, if the given RavenDB server configured with SSL Encryption.

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
<tr>
<td>
Pagination
</td>
<td>
On initial connect RavenDB will extract a maximum of 1000 records. Configure the Refresh option and it will extract all the tables and data for the chosen database on every refresh call.
</td>
</tr>
</table>

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the collection list that is retrieved from the RavenDB server.   This dialog displays a list of schemas in the treeview and its corresponding values in the grid for preview. Select required schema(s) from the treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag from tree view table in the left pane and drop the table in Query designer page.

   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)

[RavenDB Integration](https://www.boldbi.com/integrations/ravendb?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiravendbintegration)