---
layout: post
title: Pipedrive – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Pipedrive service through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Pipedrive data source
The Bold BI dashboard designer supports connecting to Pipedrive web services through the REST API. 

## Choose Pipedrive data source
To configure the Pipedrive data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Pipedrive** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Pipedrive/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Pipedrive/ChooseDS_server.png)

## Create Pipedrive data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Pipedrive data source.
1. Enter a name and description (optional) for the data source.
2. Select The Extract Engine.
3. Enter the **HostName** for the connected account.
4. Click the **API Endpoints** dropdown box and choose the required endpoint.
5. Enter a valid Pipedrive **API Token** to access the endpoints.
6. Click the **Custom Url** to enter the URL manually. Refer to the [Pipedrive API documentation](https://app.pipelinedeals.com/7. Select the **GET** method for the REST API in the **Method** combo box.
8. In **Max Rows**, enter the maximum number of rows to be fetched from the Pipedrive data source. This value is used to fetch the data from the Pipedrive data source using the pagination.
9. Choose a time interval for the **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with your dashboard.  
10. Select the **JSON** data type in the **Data Format** combo box.
11. Choose **None** in the **Authentication Type** combo box.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/Pipedrive/DataSourcesView.png)

## Extract Engine
You can connect to the data source using one of the following extract methods:
- **Bold BI Extract**: Data will be extracted and managed directly within Bold BI.
- **Data Hub**: Data extraction is handled through the Data Hub. An equivalent pipeline is created, utilizing the Data Hub’s Extract, Transform, Load (ETL) capabilities to filter, optimize, or transform the data, and to generate new tables.
- To view the equivalent pipeline created for data extraction, navigate to the Query Designer page and click on View Pipeline.

    ![Refresh Setting](/static/assets/working-with-datasource/images/View_Pipeline.png)

- When the data refresh is configured for data sources that uses the Data Hub Extract Engine, the refresh will be managed within the Data Hub.

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get API Token for connecting Pipedrive data source?
To access endpoints in Pipedrive, you need an API Token to be included in your query.
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

### Setting up the URL

1. For example, if you need to inquire about specific deal details, you can query the <i>/deals</i> endpoint.
2. Obtain the ID of the specific deal from the information provided.

Replace it in the URL to query a particular deal:

`https://api.pipedrive.com/v1/deals/<:id>`   

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://pipedrive.readme.io/docs)

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
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Pipedrive Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Pipedrive/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Pipedrive/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Pipedrive Requests Limitations](https://pipedrive.readme.io/docs/core-api-concepts-rate-limiting)

[Pipedrive Integration](https://www.boldbi.com/integrations/pipedrive?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbipipedriveintegration)