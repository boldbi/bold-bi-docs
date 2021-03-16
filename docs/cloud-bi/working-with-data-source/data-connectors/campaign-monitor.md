---
layout: post
title: Campaign Monitor – Cloud BI Connector | Bold BI Learning
description: Learn how to connect Campaign Monitor web service through basic http authentication with Bold BI Cloud and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Campaign Monitor data source
Bold BI dashboard designer supports connecting Campaign Monitor web services through REST API. 

## Choose Campaign Monitor data source
To configure the Campaign Monitor data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Campaign Monitor** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/campaign-monitor/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/campaign-monitor/ChooseDS_server.png)

## Create Campaign Monitor data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Campaign Monitor data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Campaign Monitor REST API endpoint in the URL textbox. Refer the [Campaign Monitor API documentation](https://www.campaignmonitor.com/api/) for more details.

    Example: [https://&lt;:your-domain&gt;.createsend.com/api/v3.2/clients.json](https://%3c:your-domain%3e.createsend.com/api/v3.2/clients.json)

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Campaign Monitor data source.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **Basic HTTP Authentication** in **Authentication Type** combo box.
7. Enter a valid **Account Key** and **Password** to access the endpoint in your account.

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get Account Key for connecting Campaign Monitor Data source?

1. Login to your Campaign Monitor account. Go to *Profile -> Account settings*.
2. In Account settings page click *API Keys*.
3. Find your Account Key here. Click *Generate API key* if you don't have Account Key.

![Reveal Account Key](/static/assets/cloud/working-with-datasource/data-connectors/images/campaign-monitor/APIKey.png)

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

### Sample queries

**Billing details**

[https://myaccount.createsend.com/api/v3.2/billingdetails.json](https://myaccount.createsend.com/api/v3.2/billingdetails.json)

**Administrators**

[https://myaccount.createsend.com/api/v3.2/admins.json](https://myaccount.createsend.com/api/v3.2/admins.json)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Campaign Monitor Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[Campaign Monitor Integration](https://www.boldbi.com/integrations/campaign-monitor)



























