---
layout: post
title: Copper – Embedded BI Data Connector | Bold BI Documentation
description: Learn how to connect Copper web service through REST API endpoint with Bold BI Embedded and create data source.
canonical: "/cloud-bi/working-with-data-source/data-connectors/copper/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Copper data source
Bold BI dashboard designer supports connecting Copper web services through REST API. 

## Choose Copper data source
To configure the Copper data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Copper** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Copper/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/Copper/ChooseDS_Server.png)


## Create Copper data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Copper data source.
1. Enter a name and description (optional) for the data source.
2. Click the **Api EndPoints** drop-down box and choose the required endpoint.
3. Click the **Custom Url** if you want to enter the URL manually. Refer the [Copper API documentation](https://developer.copper.com/?version=latest) for more details.
4. Select **POST** method for the REST API in **Method** combo box.
5. Select either *Parameter(s)* or *Raw* under **Request Body**. Set *page_size* as key and set your page size value.
6. Set values for **Headers** section like below key-value pairs:

   ![Headers](/static/assets/embedded/working-with-datasource/data-connectors/images/Copper/Headers.png)
7. In **Max Rows**, enter the maximum number of rows to be fetched from the Freshworks CRM data source. This value is used to fetch the data from Freshworks CRM data source via pagination.
8. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
9. Select **JSON** data type in **Data Format** combo box.
10. Choose **None** under **Authentication Type**.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Copper/DataSource.png)

    ![DataSourcesView](/static/assets/embedded/working-with-datasource/data-connectors/images/Copper/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get API Key for connecting Copper data source?
1. Login to [Copper](https://www.copper.com/) account. Go to *Settings -> API Keys*.
2. Use this *API key* as value for **X-PW-AccessToken** in Copper data source in Bold BI Dashboard.

   ![Reveal API Key](/static/assets/embedded/working-with-datasource/data-connectors/images/Copper/APIKey.png)

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

1. For instance, to get the specific task details, query the <i>/tasks/search</i> endpoint.
2. From the listed information get the ID of the specific task.

> **NOTE:**  To get the specific task detail, set the **Method Type** as *GET*. Set Method Type based on endpoint. 

Replace it in the URL to query a particular payment:

[https://api.prosperworks.com/developer_api/v1/tasks/&lt;:task_id&gt;](https://api.prosperworks.com/developer_api/v1/tasks/%3c:task_id%3e)

### Sample queries
**List Contact Types**

[https://api.prosperworks.com/developer_api/v1/contact_types](https://api.prosperworks.com/developer_api/v1/contact_types)

**List Lead Statuses**

[https://api.prosperworks.com/developer_api/v1/lead_statuses](https://api.prosperworks.com/developer_api/v1/lead_statuses)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Copper Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[Copper Rate Limits](https://developer.copper.com/?version=latest#requests)

[Copper Integration](https://www.boldbi.com/integrations/copper?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbicopperintegration)