---
layout: post
title: Freshworks CRM – Embedded BI Data Connector | Bold BI 
description: Learn how to connect Freshworks CRM data through REST API endpoint with Bold BI Embedded and create data source.
canonical: "/cloud-bi/working-with-data-source/data-connectors/freshwork-crm/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Freshworks CRM data source
Bold BI dashboard designer supports connecting Freshworks CRM web services through REST API. 

## Choose Freshworks CRM data source
To configure the Freshworks CRM data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Freshworks CRM** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/freshworks-CRM/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/freshworks-CRM/ChooseDS_server.png)
   
## Create Freshworks CRM data source
Once you clicked the data source, the `NEW DATA SOURCE` configuration panel opens. Follow these steps to create a Freshworks CRM data source.
1. Enter a name and description (optional) for the data source.
2. Enter your Freshworks CRM hostname
3. Click the **Api EndPoints** dropdown box and choose the required endpoint.
    ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/freshworks-CRM/Select_EndPoint.png)
4. Click the **Custom Url** if you want to enter the URL manually. Refer to the [Freshworks CRM API documentation](https://developers.freshworks.com/crm/api/#getting-started) for more details.
5. Select the **GET** method for the REST API in the **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows to be fetched from the Freshworks CRM data source. This value is used to fetch the data from the Freshworks CRM data source via pagination.
7. Choose a time interval using the **Refresh Settings** button to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
8. Select the **JSON** data type in the **Data Format** combo box.
9. Replace **&lt;:your_api_token&gt;** under Headers with a valid API token.
10. Choose **None** under **Authentication Type** as authentication is done through header.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/freshworks-CRM/DataSource.png)

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get API Token for connecting Freshworks CRM data source?

1. Login to your [Freshworks CRM](https://www.freshworks.com/freshsales-crm/login/) account. Go to *Account -> Settings*.
2. In *Personal setting* page click *API settings* tab.
3. You can find your API key in the field *Your API key*.
4. Use this *API Key* as *&lt;:your_api_token&gt;* in the Freshworks CRM data source in the Bold BI Dashboard.

![Reveal API Token](/static/assets/embedded/working-with-datasource/data-connectors/images/freshworks-CRM/APIToken.png)

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
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

Replace &lt;:your_domain&gt; with your Freshworks CRM domain.

[https://your_domain.freshsales.io/leads/view/8000328940](https://your_domain.freshsales.io/leads/view/8000328940)   

### Sample endpoints

**Contacts**

[https://your-domain.freshsales.io/api/contacts/view/8000666352](https://your-domain.freshsales.io/api/contacts/view/8000666352)

**Deals**

[https://your-domain.freshsales.io/api/deals/view/8000666352](https://your-domain.freshsales.io/api/deals/view/8000666352)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of the JSON data retrieved from the Freshworks CRM Rest API request. This dialog displays a list of schemas in a treeview and their corresponding values in a grid for preview. Select required schema(s) from a treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)

[Freshworks CRM API Limits](https://support.freshsales.io/support/solutions/articles/223406-does-freshsales-have-api-request-limits-for-an-account-)

[Freshworks CRM Integration](https://www.boldbi.com/integrations/freshsales?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbifreshsalesintegration)