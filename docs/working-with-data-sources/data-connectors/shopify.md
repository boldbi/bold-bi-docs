---
layout: post
title: Shopify - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Shopify web service through basic http authentication with cloud-hosted Bold BI and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to the Shopify data source
The Bold BI dashboard designer supports connecting the Shopify web services using the REST API. 

## Choose Shopify data source
To configure the Shopify data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Shopify** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Shopify/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Shopify/ChooseDS_Server.png)

## Advanced
In Advanced category, It will Redirect to the Bold ETL. Refer [Bold ETL](/managing-resources/manage-data-sources/#advanced-category).

## Basic
In Basic Category, It will act as the connector in Bold BI. And need to follow the below steps.

## Create a Shopify data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a Shopify data source.
1. Enter a name and description (optional) for the data source.
2. Enter the **Shop Domain** for the connected account.
3. Click the **Resources** down dropbox and choose the required endpoint.
4. Enter a valid REST API endpoint in the URL textbox. Refer to the [Shopify API documentation](https://shopify.dev/docs/admin-api/rest/reference) for more details.
5. Click **Custom Url** to enter the URL manually.
6. Select **GET** method for the REST API in **Method** combo box.
7. In **Max Rows**, enter the maximum number of rows to be fetched from the Shopify data source. This value is used to fetch the data from the Shopify data source using the pagination.
8. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
9. Select **JSON** data type in the **Data Format** combo box.
10. Choose **Basic HTTP Authentication** in the **Authentication Type** combo box.
11. Enter a valid Shopify **API Key** and **API Password** to access the endpoints. Refer to more details on<a href ="#GenerateAPIKey"> Generate Shopify API Key and API Password</a>

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/Shopify/DataSourcesView.png)

You can also edit the connection information set using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most of the REST APIs return only fewer data on a single API request. To pull the amount of data you need, set a value in this field.  
Pagination is handled internally and it will fetch the amount of data you need.
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

1. Query the <i>Show Customer</i> endpoint.
2. From the listed information, you can get the customer id for the connected account.

Replace it in the URL to query a particular conversations:

https://<yourstore.myshopify.com>/admin/api/2020-04/customers/<:customer_id>.json

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://shopify.dev/docs/admin-api/rest/reference)

### Sample queries

**All Customers**

[(https://<yourstore.myshopify.com>/admin/api/2020-04/customers.json]

**Price Rules**

[(https://<yourstore.myshopify.com>/admin/api/2020-04/price_rules.json)]

**All Events**

[(https://<yourstore.myshopify.com>/admin/api/2020-04/events.json)]


### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Shopify Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in the grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag from tree view table in the left pane and drop the table in Query designer page.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Shopify/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Shopify/Dashboardparameter.png)

>**Note:** Refer the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

<p id="GenerateAPIKey"></a>

### How to Obtain the Shopify API Key and Password

1. Log in to your Shopify account [shopify.com](https://accounts.shopify.com/store-login).
   ![login shopify](/static/assets/working-with-datasource/data-connectors/images/Shopify/login.png)
   ![login shopify](/static/assets/working-with-datasource/data-connectors/images/Shopify/password.png)
2. Choose your store from the listed stores.
   ![Choose Stores](/static/assets/working-with-datasource/data-connectors/images/Shopify/Choose_Stores.png)
3. Go to **Apps > App and sales channel settings**.
   ![Choose App Settings](/static/assets/working-with-datasource/data-connectors/images/Shopify/App_Settings.png)
4. Choose the **Develop apps** option.
   ![Choose Develop apps](/static/assets/working-with-datasource/data-connectors/images/Shopify/Develop_Apps.png)
5. Click on the **Create an app** button.
   ![Choose Develop apps](/static/assets/working-with-datasource/data-connectors/images/Shopify/create_app.png)
6. Agree to the Shopify Private App Terms and Conditions.
   ![Choose Develop apps](/static/assets/working-with-datasource/data-connectors/images/Shopify/allow.png)
   ![Choose Develop apps](/static/assets/working-with-datasource/data-connectors/images/Shopify/allowstep.png)
7. Provide a name for your private app in the **App details** section.
   ![Choose Develop apps](/static/assets/working-with-datasource/data-connectors/images/Shopify/create_appName.png)
8. Click on the **API credentials** and then select the **Configure Admin API scopes**.
   ![Choose Develop apps](/static/assets/working-with-datasource/data-connectors/images/Shopify/admin_conig.png)
9. Check the required **Admin API access scopes** and click on the **Save** button.
   ![Choose Develop apps](/static/assets/working-with-datasource/data-connectors/images/Shopify/save_admin.png)
10. Click on the **Install App** button for the private app.
   ![Choose Develop apps](/static/assets/working-with-datasource/data-connectors/images/Shopify/install_app.png)
11. After the installation, you can access your **API key** and **API Password** (Admin API access token) on the API credentials page.
   ![Choose Develop apps](/static/assets/working-with-datasource/data-connectors/images/Shopify/apikey.png)

> **NOTE:** The Admin API access token will be displayed only once. To view the API access token, click on the **Reveal token once**.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)
