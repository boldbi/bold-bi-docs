---
layout: post
title: Freshsales – Embedded BI Data Connector | Bold BI Learning
description: Learn how to connect Freshsales web service through REST API endpoint with Bold BI Embedded and create a data source.
canonical: "/cloud-bi/working-with-data-source/data-connectors/freshsales/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Freshsales data source
Bold BI dashboard designer supports connecting Freshsales web services through REST API. 

## Choose Freshsales data source
To configure the Freshsales data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Freshsales** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/freshsales/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/freshsales/ChooseDS_server.png)
   
## Create Freshsales data source
Once you click the data source, the `NEW DATA SOURCE` configuration panel opens. Follow the below steps to create Freshsales data source.
1. Enter a name and description (optional) for the data source.
2. Enter your Freshsales hostname
3. Click the **Api EndPoint** drop-down box and choose the required endpoint.
    ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/freshsales/Select_EndPoint.png)
4. You can also click the **Custom Url** to enter the URL manually. Enter a valid Freshsales REST API endpoint in the URL textbox. Refer to the [Freshsales API documentation](https://www.freshsales.io/api/#getting-started) for more details.

    Example: [https://&lt;:your_domain&gt;.freshsales.io/leads/view/8000328940](https://%3c:your_domain%3e.freshsales.io/leads/view/8000328940)    

5. Select **GET** method for the REST API in **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows to be fetched from the Freshsales data source. This value is used to fetch the data from Freshsales data source via pagination.
7. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
8. Select **JSON** data type in **Data Format** combo box.
9. Replace **&lt;:your_api_token&gt;** under Headers with a valid API token.
10. Choose **None** under **Authentication Type** as authentication is done through header.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/freshsales/DataSource.png)

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get API Token for connecting Freshsales data source?

1. Login to your [Freshsales](https://www.freshworks.com/freshsales-crm/login/) account. Go to *Account -> Settings*.
2. In *Personal setting* page click *API settings* tab.
3. You can find your API key in the field *Your API key*.
4. Use this *API Key* as *&lt;:your_api_token&gt;* in Freshsales data source in Bold BI Dashboard.

![Reveal API Token](/static/assets/embedded/working-with-datasource/data-connectors/images/freshsales/APIToken.png)

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

Replace &lt;:your_domain&gt; with your Freshsales CRM domain.

[https://your_domain.freshsales.io/leads/view/8000328940](https://your_domain.freshsales.io/leads/view/8000328940)   

### Sample queries

**Contacts**

[https://your-domain.freshsales.io/api/contacts/view/8000666352](https://your-domain.freshsales.io/api/contacts/view/8000666352)

**Deals**

[https://your-domain.freshsales.io/api/deals/view/8000666352](https://your-domain.freshsales.io/api/deals/view/8000666352)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Freshsales Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)

[Freshsales API Limits](https://support.freshsales.io/support/solutions/articles/223406-does-freshsales-have-api-request-limits-for-an-account-)

[Freshsales Integration](https://www.boldbi.com/integrations/freshsales?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbifreshsalesintegration)