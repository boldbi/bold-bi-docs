---
layout: post
title: Pipedrive – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Pipedrive service through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Pipedrive data source
Bold BI dashboard designer supports connecting Pipedrive web services through REST API. 

## Choose Pipedrive data source
To configure the Pipedrive data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Pipedrive** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/Pipedrive/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/Pipedrive/ChooseDS_server.png)


## Create Pipedrive data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Pipedrive data source.
1. Enter a name and description (optional) for the data source.
2. Enter the **HostName** for the connected account.
3. Click the **API Endpoints** dropdown box and choose the required endpoint.
4. Enter a valid Pipedrive **API Token** to access the endpoints.
5. Click the **Custom Url** to enter the URL manually. Refer to the [Pipedrive API documentation](https://app.pipelinedeals.com/api/docs) for more details. 
6. Select the **GET** method for the REST API in the **Method** combo box.
7. In **Max Rows**, enter the maximum number of rows to be fetched from the Pipedrive data source. This value is used to fetch the data from the Pipedrive data source using the pagination.
8. Choose a time interval for the **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with your dashboard.  
9. Select the **JSON** data type in the **Data Format** combo box.
10. Choose **None** in the **Authentication Type** combo box.

![Data source preview](/static/assets/cloud/working-with-datasource/data-connectors/images/Pipedrive/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get API Token for connecting Pipedrive data source?
To access endpoints in Pipedrive, you need API Token to be a part of your query.
1. Login to your [Pipedrive](https://www.pipedrive.com/) account.
2. Go to *Settings -> Personal -> Other -> API*. Refer [Pipedrive Documentation](https://pipedrive.readme.io/docs/how-to-find-the-api-token).

> **NOTE:**  If you could not see API in *Other* section, refer [How to enable API for Company Users](https://pipedrive.readme.io/docs/enabling-api-for-company-users).

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

1. For instance, to query the specific deal detail, query the <i>/deals</i> endpoint.
2. From the listed information, get the ID of the specific deal.

Replace it in the URL to query a particular deal:

`https://api.pipedrive.com/v1/deals/<:id>`   

### Sample queries
**All Activities**

`https://api.pipedrive.com/v1/activities`
 
**WebHooks**

`https://api.pipedrive.com/v1/webhooks`

**Stages**

`https://api.pipedrive.com/v1/stages`

**Files**

`https://api.pipedrive.com/v1/files`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Pipedrive Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/bold-bi-walk-through/)

[Pipedrive Requests Limitations](https://pipedrive.readme.io/docs/core-api-concepts-rate-limiting)

[Pipedrive Integration](https://www.boldbi.com/integrations/pipedrive?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbipipedriveintegration)