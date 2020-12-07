---
layout: post
title: Stripe – Embedded BI Data Connector | Bold BI Documentation
description: Learn how to connect Stripe service using basic http authentication through REST API endpoint with Bold BI Embedded.
canonical: "/cloud-bi/working-with-data-source/data-connectors/stripe/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Stripe data source
Bold BI dashboard designer supports connecting Stripe web services through REST API. 

## Choose Stripe data source
To configure the Stripe data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Stripe** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Stripe/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/Stripe/ChooseDS_Server.png)


## Create Stripe data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Stripe data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Stripe REST API endpoint in the URL textbox. Refer the [Stripe API documentation](https://stripe.com/docs/api) for more details.

    Example: [https://api.stripe.com/v1/charges](https://api.stripe.com/v1/charges)    

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Stripe data source. This value is used to fetch the data from Stripe data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **Basic http Authentication** under **Authentication Type** and input a valid **Account Key**.

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get Account Key for connecting Stripe Data source?
1. Login to [Stripe](https://dashboard.stripe.com/login) account. Go to *Developers -> API Keys*.
2. Use this *Secret Key* as **Account Key** in Stripe data source in Bold BI Dashboard.

   ![Reveal API Key](/static/assets/embedded/working-with-datasource/data-connectors/images/Stripe/APIKey.png)

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

1. For instance, to get the specific payments_intents details, query the <i>/payments_intents</i> endpoint.
2. From the listed information get the id of the specific payment_intents.

Replace it in the URL to query a particular payment:

[https://api.stripe.com/v1/payment_intents/&lt;:payment_intents_id&gt;](https://api.stripe.com/v1/payment_intents/%3c:payment_intents_id%3e)

### Sample queries
**Charges**

[https://api.stripe.com/v1/charges](https://api.stripe.com/v1/charges)

**Balance**

[https://api.stripe.com/v1/balance](https://api.stripe.com/v1/balance)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Stripe Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)

[Stripe Integration](https://www.boldbi.com/integrations/stripe?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbistripeintegration)