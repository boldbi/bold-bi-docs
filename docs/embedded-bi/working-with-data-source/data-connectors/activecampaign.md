---
layout: post
title: Active Campaign – Embedded BI Data Connector | Bold BI Docs
description: Learn how to connect Active Campaign data with Bold BI Embedded through REST API endpoint and create data source for dashboard configuration.
canonical: "/cloud-bi/working-with-data-source/data-connectors/activecampaign/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to ActiveCampaign data source

Bold BI dashboard designer supports connecting ActiveCampaign web services through REST API.

## Choose ActiveCampaign data source

To configure the ActiveCampaign data source, follow the below steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   
   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.

3. Select the **ActiveCampaign** connection in the connection panel.

    ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/activecampaign/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/activecampaign/ChooseDS_server.png)

## Create ActiveCampaign data source

Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create ActiveCampaign data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid ActiveCampaign REST API endpoint in the URL textbox. Refer the [ActiveCampaign API documentation](https://developers.activecampaign.com/reference) for more details.

   Example: [https://&lt;your-account&gt;.api-us1.com/api/3/connections](https://%3cyour-account%3e.api-us1.com/api/3/connections)

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the ActiveCampaign data source. This value is used to fetch the data from ActiveCampaign data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Replace `<:your_app_token>` under Headers with a valid API key.
8. Choose **None** under **Authentication** Type, as authentication is done through header.

    ![DataSourcesView](/static/assets/embedded/working-with-datasource/data-connectors/images/activecampaign/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get API Key for connecting ActiveCampaign Data source?

1. Login to your [ActiveCampaign](https://www.activecampaign.com/login/) account.
2. Go to *Developer -> My Settings* and get your API key

![Reveal API Key](/static/assets/embedded/working-with-datasource/data-connectors/images/activecampaign/APIKey.png)

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
<tr>
<td>
API Limits
</td>
<td>
ActiveCampaign API has a rate limit of 5 requests per second per account. Contact them for a custom rate limit solution.
</td>
</tr>
</table>

### Setting up the URL

1. Log in to your account and get your Base URL on the My Settings page under the "Developer" tab.
2. Replace *&lt;:your-account&gt;* with this base URL.
3. Replace *&lt;:resource&gt;* with a valid endpoint.

[https://&lt;your-account&gt;.api-us1.com/api/3/&lt;:resource&gt;](https://%3cyour-account%3e.api-us1.com/api/3/%3c:resource%3e)

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developers.activecampaign.com/reference)

### Sample queries

**Campaigns**

[https://sample-user-api.com/api/3/campaigns](https://sample-user-api.com/api/3/campaigns)


**Deals**

[https://sample-user-api.com/api/3/deals](https://sample-user-api.com/api/3/deals)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from ActiveCampaign Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links

[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[ActiveCampaign Getting Started](https://help.activecampaign.com/hc/en-us/articles/207317590-Getting-started-with-the-API)

[ActiveCampaign Rate Limits](https://developers.activecampaign.com/reference#rate-limits)

[ActiveCampaign Integration](https://www.boldbi.com/integrations/activecampaign?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiactivecampaignintegration)
