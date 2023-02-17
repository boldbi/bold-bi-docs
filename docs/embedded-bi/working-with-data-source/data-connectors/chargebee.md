---
layout: post
title: Chargebee – Embedded BI Connector | Bold BI Documentation
description: Learn how to connect Chargebee web service through REST API endpoint with Bold BI Embedded and create data source.
canonical: "/cloud-bi/working-with-data-source/data-connectors/chargebee/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Chargebee data source

Bold BI dashboard designer supports connecting Chargebee web services through REST API.

## Choose Chargebee data source

To configure the Chargebee data source, follow the below steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   
   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.

3. Select the **Chargebee** connection in the connection panel.

    ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/chargebee/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/chargebee/ChooseDS_server.png)

## Create Chargebee data source

Once you click the Chargebee data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Chargebee data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** down drop box and choose the required endpoint.
3. Click the **Custom Url** to enter the URL manually. Refer to the [Chargebee API documentation](https://apidocs.chargebee.com/docs/api)  for more details.
4. Select the **GET** method for the REST API in the **Method** combo box.
5. In **Max Rows**, enter the maximum number of rows to be fetched from the Chargebee data source. This value is used to fetch the data from the Chargebee data source via pagination.
6. Choose a time interval for the **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
7. Select the **JSON** data type in **Data Format** combo box.
8. Choose the **Basic HTTP Authentication** under the **Authentication Type**. 
9. Enter a valid Chargebee API key under the **Account key** textbox.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/chargebee/DataSource.png)

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get Account Key for connecting Chargebee data source?

1. Login to your account. Go to *Settings -> Configure Chargebee*.
2. In Configure Chargebee page, Go to *API Keys and Web hooks*.
3. Use this *API Key* as *Account Key* in Chargebee data source in Bold BI Dashboard.

![Reveal API Key](/static/assets/embedded/working-with-datasource/data-connectors/images/chargebee/APIKey.png)

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

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://apidocs.chargebee.com/docs/api)

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

[Chargebee Integration](https://www.boldbi.com/integrations/chargebee?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbichargebeeintegration)