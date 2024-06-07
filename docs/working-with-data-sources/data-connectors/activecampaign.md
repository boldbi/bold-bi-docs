---
layout: post
title: Active Campaign – Cloud BI Data Connector | Bold BI Docs
description: Learn how to connect Active Campaign data with Bold BI Cloud through REST API endpoint and create data source for dashboard configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to ActiveCampaign data source

The Bold BI dashboard designer supports connecting to ActiveCampaign web services through the REST API.

## Choose ActiveCampaign data source

To choose the ActiveCampaign data source, follow the steps below:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.

3. Select the **ActiveCampaign** connection in the connection panel.

    ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/activecampaign/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/activecampaign/ChooseDS_server.png)

## Create ActiveCampaign data source

Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the steps below to create an ActiveCampaign data source:
1. Enter a name and description (optional) for the data source.
2. Enter a valid ActiveCampaign REST API endpoint in the URL textbox. Refer to the [ActiveCampaign API documentation](https://developers.activecampaign.com/reference) for more details.

   Example: `https://%3cyour-account%3e.api-us1.com/api/3/connections`

3. Select **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the ActiveCampaign data source. This value is used to fetch the data from ActiveCampaign data source via pagination.
5. Choose a time interval for **Refresh Settings** using the dropdown menu to periodically trigger the REST API request to keep the data in sync with the dashboard. 
6. Select **JSON** data type in the **Data Format** dropdown menu.
7. Replace `<:your_app_token>` under Headers with a valid API key.
8. Choose **None** under **Authentication** Type, as authentication is done through the header.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/activecampaign/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get API Key for connecting ActiveCampaign Data source?

1. Login to your [ActiveCampaign](https://www.activecampaign.com/login/) account.
2. Go to *Developer -> My Settings* and get your API key

![Reveal API Key](/static/assets/working-with-datasource/data-connectors/images/activecampaign/APIKey.png)

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
The period of time before the next refresh call is triggered. This will automatically trigger a call to the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
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

1. Login to your account and get your Base URL on the My Settings page under the **Developer** tab.
2. Replace *&lt;:your-account&gt;* with this base URL.
3. Replace *&lt;:resource&gt;* with a valid endpoint.

`https://<your-account>.api-us1.com/api/3/<:resource>`

For more information on API endpoints available for this data source, refer to their official [API Documentation](https://developers.activecampaign.com/reference)

### Sample queries

**Campaigns**

`https://sample-user-api.com/api/3/campaigns`

**Deals**

`https://sample-user-api.com/api/3/deals`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from ActiveCampaign Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/activecampaign/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/activecampaign/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[ActiveCampaign Getting Started](https://help.activecampaign.com/hc/en-us/articles/207317590-Getting-started-with-the-API)

[ActiveCampaign Rate Limits](https://developers.activecampaign.com/reference#rate-limits)

[ActiveCampaign Integration](https://www.boldbi.com/integrations/activecampaign)
