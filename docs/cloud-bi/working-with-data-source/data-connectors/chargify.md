---
layout: post
title: Chargify – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Chargify web service using basic http authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Chargify data source
Bold BI dashboard designer supports connecting Chargify web services through REST API. 

## Choose Chargify data source
To configure the Chargify data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Chargify** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/Chargify/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/Chargify/ChooseDS_Server.png)


## Create Chargify data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Chargify data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Chargify REST API endpoint in the URL textbox. Refer the [Chargify API documentation](https://reference.chargify.com/v1/basics/introduction) for more details.

    Example: [https://&lt;:your_account_name&gt;.chargify.com/&lt;:api_end_point&gt;](https://%3c:your_account_name%3e.chargify.com/%3c:api_end_point%3e)    

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Chargify data source. This value is used to fetch the data from Chargify data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **Basic http Authentication** under **Authentication Type** and input a valid **Account Key**.

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get Account Key for connecting Chargify data source?
1. Login to Chargify account. Go to *Config -> Integrations*.
2. Use this *API key* as `Account key` in Chargify data source, refer [about API Keys](https://help.chargify.com/integrations/api-keys-chargify-direct.html).

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

1. Replace your *Account Name* and *endpoint* in the URL field.

Replace it in the URL to query a particular payment:

[https://&lt;:account_name&gt;.chargify.com/&lt;:end_point&gt;](https://%3c:account_name%3e.chargify.com/%3c:end_point%3e)

### Sample queries
**Subscriptions**

[https://testaccount.chargify.com/subscriptions.json](https://testaccount.chargify.com/subscriptions.json)

**Customers**

[https://testaccount.chargify.com/customers.json](https://testaccount.chargify.com/customers.json)

**Events**

[https://testaccount.chargify.com/events.json](https://testaccount.chargify.com/events.json)

**Transactions**

[https://testaccount.chargify.com/transactions.json](https://testaccount.chargify.com/transactions.json)

**Payment Profiles**

[https://testaccount.chargify.com/payment_profiles.json](https://testaccount.chargify.com/payment_profiles.json)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Chargify Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[Chargify API Access Limitations](https://reference.chargify.com/v1/basics/api-access-limitations)

[Chargify Integration](https://www.boldbi.com/integrations/chargify)