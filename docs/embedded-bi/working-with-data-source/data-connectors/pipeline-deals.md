---
layout: post
title: PipelineDeals – Embedded BI Connector | Bold BI Learning
description: Learn how to connect PipelineDeals service through REST API endpoint with Bold BI Embedded and create data source.
canonical: "/cloud-bi/working-with-data-source/data-connectors/pipeline-deals/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to PipelineDeals data source
Bold BI dashboard designer supports connecting PipelineDeals web services through REST API. 

## Choose PipelineDeals data source
To configure the PipelineDeals data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **PipelineDeals** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/PipelineDeals/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/PipelineDeals/ChooseDS_Server.png)


## Create PipelineDeals data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create PipelineDeals data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid PipelineDeals REST API endpoint in the URL textbox. Refer the [PipelineDeals API documentation](https://app.pipelinedeals.com/api/docs) for more details.

    Example: [https://api.pipelinedeals.com/api/v3/deals.json?api_key=&lt;:your_api_key&gt;](https://api.pipelinedeals.com/api/v3/deals.json?api_key=%3c:your_api_key%3e)    

3. Select **GET** method for the REST API in **Method** combo box.
4. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
5. Select **JSON** data type in **Data Format** combo box.
6. Choose **None** under **Authentication Type**.

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get Account Key for connecting PipelineDeals data source?
1. Login to [PipelineDeals](https://app.pipelinedeals.com/login) account. Go to *Account Settings -> Pipeline Deals API*. Refer [Access API key](https://help.pipelinedeals.com/article/474-how-do-i-find-my-api-key)
2. Use this *API key* as *api_key* value in URL in PipelineDeals data source in Bold BI Dashboard.

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

### Setting up the URL

1. For instance, to query about the specific deal details, query the <i>/deals</i> endpoint.
2. From the listed information get the id of the specific deal.

Replace it in the URL to query a particular payment:

[https://api.pipelinedeals.com/api/v3/deals/&lt;:deal_id&gt;.json?api_key=iurhuashi65wGF](https://api.pipelinedeals.com/api/v3/deals/%3c:deal_id%3e.json?api_key=iurhuashi65wGF) 

### Sample queries
**List of Calendar Events**

[https://api.pipelinedeals.com/api/v3/companies/1234/deals.json?api_key=iurhuashi65wGF](https://api.pipelinedeals.com/api/v3/companies/1234/deals.json?api_key=iurhuashi65wGF) 

**Retrieve deals associated to a company**

[https://api.pipelinedeals.com/api/v3/calendar_entries.json?api_key=iurhuashi65wGF](https://api.pipelinedeals.com/api/v3/calendar_entries.json?api_key=iurhuashi65wGF) 

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from PipelineDeals Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)

[PipelineDeals API Rate Limits](https://app.pipelinedeals.com/api/docs/request_response)

[PipelineDeals Integration](https://www.boldbi.com/integrations/pipelinedeals?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbipipelinedealsintegration)
