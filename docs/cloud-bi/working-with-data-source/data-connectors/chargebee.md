---
layout: post
title: Chargebee – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Chargebee web service through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Chargebee data source

Bold BI dashboard designer supports connecting Chargebee web services through REST API.

## Choose Chargebee data source

To configure the Chargebee data source, follow the below steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   
   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.

3. Select the **Chargebee** connection in the connection panel.

    ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/chargebee/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/chargebee/ChooseDS_server.png)

## Create Chargebee data source

Once you click the Chargebee data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Chargebee data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Chargebee REST API endpoint in the URL textbox. Refer the [Chargebee API documentation](https://apidocs.chargebee.com/docs/api) for more details.

   Example: [https://&lt;:site&gt;.chargebee.com/api/v2/subscriptions](https://%3c:site%3e.chargebee.com/api/v2/subscriptions)

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the ActiveCampaign data source. This value is used to fetch the data from ActiveCampaign data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **None** under **Authentication Type** as authentication is done through header. 
8. Enter a valid Chargebee API key under **Account key** textbox.

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get Account Key for connecting Chargebee data source?

1. Login to your account. Go to *Settings -> Configure Chargebee*.
2. In Configure Chargebee page, Go to *API Keys and Web hooks*.
3. Use this *API Key* as *Account Key* in Chargebee data source in Bold BI Dashboard.

![Reveal API Key](/static/assets/cloud/working-with-datasource/data-connectors/images/chargebee/APIKey.png)

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

Replace *&lt;:site&gt;* with your Chargebee site name.

[https://&lt;:site&gt;.chargebee.com/api/v2/subscriptions](https://%3c:site%3e.chargebee.com/api/v2/subscriptions)

### Sample queries

**Customers**

[https://your-site-82112337-test.chargebee.com/api/v2/customers](https://your-site-82112337-test.chargebee.com/api/v2/customers)

**Invoices**

[https://your-site-82112337-test.chargebee.com/api/v2/invoices](https://your-site-82112337-test.chargebee.com/api/v2/invoices)

**Subscriptions**

[https://your-site-82112337-test.chargebee.com/api/v2/subscriptions](https://your-site-82112337-test.chargebee.com/api/v2/subscriptions)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from ActiveCampaign Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/bold-bi-walk-through/)

[Chargebee Integration](https://www.boldbi.com/integrations/chargebee?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbichargebeeintegration)