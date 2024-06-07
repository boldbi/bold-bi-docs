---
layout: post
title: Azure Blob – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Azure Blob web service through REST API endpoint with Bold BI Cloud and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Azure Blob data source
The Bold BI dashboard designer supports connecting to Azure Blob web services through REST API.

## Choose Azure Blob data source
To configure the Azure Blob data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Azure Blob** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/AzureBlob/ChooseDS.png)

> **NOTE:**  You can also create a **data source** from the home page by clicking the Data Sources menu from the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/AzureBlob/ChooseDS_server.png)


## Create Azure Blob data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Azure Blob data source.
1. Enter a name and optional description for the data source.
2. Enter a valid Azure Blob REST API endpoint in the URL textbox. Refer to the [Azure Blob API documentation](https://docs.microsoft.com/en-us/rest/api/storageservices/blob-service-rest-api) for more details.

    Example: `https://<:your_storage_account_name>.blob.core.windows.net<:your_end_point>`    

3. Select the **GET** method for the REST API in the **Method** combo box.
4. The default value for **x-ms-version** in the *Headers* section is **2014-02-14**. Refer to other [available versions](https://docs.microsoft.com/en-us/rest/api/storageservices/previous-azure-storage-service-versions#version-2012-02-12-and-later).
5. Choose a time interval for **Refresh Settings** using the combo box to periodically trigger the REST API request to keep the data in sync with the dashboard. 
6. Choose the data type based on the file extension (JSON / CSV / XML) that you have in the REST API endpoint.
7. Choose **Basic http Authentication** under **Authentication Type** and input a valid [Account Key](/working-with-data-sources/data-connectors/azure-blob/#how-do-i-get-storage-account-key-for-connecting-azure-blob-data-source).

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/AzureBlob/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get Storage Account Key for connecting Azure Blob data source?
1. In the [Azure Portal](https://portal.azure.com/), click on *Storage accounts* and select the storage account.
2. Go to *Settings -> Access keys* and retrieve the access keys.

 ![Account key](/static/assets/working-with-datasource/data-connectors/images/AzureBlob/AccountKey.png)

#### How do I get Container name?
1. In the [Azure Portal](https://portal.azure.com/), click on *Storage accounts* and select the desired storage account.
2. Navigate to *Overview -> Services -> Blobs* and select the container that contains the file you wish to extract.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call to the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
</td>
</tr>
</table>

### Setting up the URL
1. Replace `<:your_storage_account_name>` in the URL with the account name.

   `https://<:your_storage_account_name>.blob.core.windows.net/`

For more information on the API endpoints available for this data source, please refer to the official [API Documentation](https://docs.microsoft.com/en-us/rest/api/storageservices/blob-service-rest-api).

### Sample queries
**Data of a specific file from a container**

`https://<:your_storage_account_name>.blob.core.windows.net/mycontainer/customers.csv`

`https://<:your_storage_account_name>.blob.core.windows.net/mycontainer/orders.json`

`https://<:your_storage_account_name>.blob.core.windows.net/mycontainer/salesdata.xml`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of data retrieved from the Azure Blob Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in a grid for preview. Select the required schema(s) from the treeview to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/AzureBlob/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/AzureBlob/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Azure Blob Integration](https://www.boldbi.com/integrations/azure-blob)