---
layout: post
title: Chargify – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Chargify web service using basic http authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Chargify data source
Bold BI dashboard designer supports connecting Chargify web services through the REST API.

## Choose Chargify data source
To configure the Chargify data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Chargify** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Chargify/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Chargify/ChooseDS_Server.png)


## Create Chargify data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Chargify data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Chargify REST API endpoint in the URL textbox. Refer to the [Chargify API documentation](https://reference.chargify.com/v1/basics/introduction) for more details.

    Example: `https://<:your_account_name>.chargify.com/%3c:api_end_point%3e`

3. Select **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Chargify data source. This value is used for pagination.
5. Choose a time interval for **Refresh Settings** using the combo box to periodically trigger the Rest API request to keep the data in sync with the dashboard.
6. Select **JSON** data type in the **Data Format** combo box.
7. Choose **Basic http Authentication** under **Authentication Type** and input a valid **Account Key**.

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Chargify/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Chargify/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

#### How do I get Account Key for connecting Chargify data source?
1. Login to your Chargify account. Go to *Config -> Integrations*.
2. Use this *API key* as `Account key` in Chargify data source, refer [about API Keys](https://help.chargify.com/integrations/api-keys-chargify-direct.html).

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
</table>

### Setting up the URL

1. Replace your *Account Name* and *endpoint* in the URL field.

Replace it in the URL to query a particular payment:

`https://<:account_name>.chargify.com/%3c:end_point%3e`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://reference.chargify.com/).

### Sample queries

**Subscriptions**

`https://testaccount.chargify.com/subscriptions.json`

**Customers**

`https://testaccount.chargify.com/customers.json`

**Events**

`https://testaccount.chargify.com/events.json`

**Transactions**

`https://testaccount.chargify.com/transactions.json`

**Payment Profiles**

`https://testaccount.chargify.com/payment_profiles.json`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Chargify Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select the required schema(s) from the treeview to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Chargify API Access Limitations](https://reference.chargify.com/v1/basics/api-access-limitations)

[Chargify Integration](https://www.boldbi.com/integrations/chargify)