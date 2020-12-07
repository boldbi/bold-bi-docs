---
layout: post
title: Azure Tables - Embedded BI Connector | Bold BI Documentation
description: Learn how to connect Azure Table storage service with Bold BI deployed in your server and create data source for dashboard configuration.
canonical: "/cloud-bi/working-with-data-source/data-connectors/azure-tables/"
platform: bold-bi
documentation: ug
---

# Azure Tables data source
The Bold BI dashboard designer supports connecting the Azure Tables web services using the REST API. 

## Choose Azure Tables data source
To configure the Azure Tables data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Azure Tables** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureTables/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureTables/ChooseDS_Server.png)

## Create Azure Tables data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create an Azure Tables data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid **Storage Account Name** and **Storage Account Access Key**. To know more about the [Access Keys](/embedded-bi/working-with-data-source/data-connectors/azure-tables/#how-do-i-get-storage-account-name-and-storage-account-access-key-for-connecting-azure-tables-data-source), refer to the [Azure Tables API documentation](https://docs.microsoft.com/en-us/rest/api/storageservices/querying-tables-and-entities).
3. Select a table from the **Tables** dropdown.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Azure Tables data source. This value is used to fetch the data from the Azure Tables data source using the pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

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

#### How do I get the Storage Account Name and Storage Account Access Key for connecting Azure Tables data source?
1. In the [Azure Portal](https://portal.azure.com/), click *Storage accounts* and select the storage account.
2. Go to *Settings -> Access keys* and get the access keys.

 ![Account key](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureTables/AccountKey.png)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Azure Tables Rest API request. This dialog displays a list of schemas in the treeview and its corresponding values in the grid for preview. Select required schema(s) from treeview to use it in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)
