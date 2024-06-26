---
layout: post
title: Infusionsoft – Cloud BI Data Connector | Bold BI Learning
description: Learn how to connect Infusionsoft web service through OAuth-based authentication with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Infusionsoft data source
The Bold BI dashboard designer supports connecting to Infusionsoft web services through the REST API. 

## Choose Infusionsoft data source
To configure the Infusionsoft data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Infusionsoft** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Infusionsoft/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Infusionsoft/ChooseDS_Server.png)

## Authentication with Infusionsoft
To authenticate with the Infusionsoft web service, follow these steps:

1. Click on the data source, which will prompt a login window. Enter the credentials of your Infusionsoft account to authorize.
2. Click on **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If permission is denied, the account will not be accessible from the dashboard.

3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via an already connected account, refer to [Connected Accounts](/working-with-data-sources/data-connectors/infusionsoft/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Infusionsoft
### Create Infusionsoft data source
After successful authentication, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Infusionsoft data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** down drop box and choose the required endpoint.
3. Click the **Custom Url** if you want to enter the URL manually. Refer to the [Infusionsoft API documentation](https://developer.infusionsoft.com/docs/rest/#!/Account_Info/getAccountProfileUsingGET) for more details.  
4. Select the **GET** method for the REST API in the **Method** combo box.
5. In **Max Rows**, enter the maximum number of rows to be fetched from the Infusionsoft data source. This value is used to fetch the data from Infusionsoft data source via pagination.
6. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
7. Select **JSON** data type in **Data Format** combo box.
8. The authentication type will be set to **Infusionsoft** automatically since OAuth is used for authenticating with the Infusionsoft account.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/Infusionsoft/DataSourceView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

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
The period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose 'Never'.
</td>
</tr>
</table>

### Setting up the URL
1. For instance, to query about the specific opportunity, query the <i>/opportunities</i> endpoint.
2. From the listed information, get the ID of the specific opportunity.

Replace it in the URL to query a particular opportunity:

[https://api.infusionsoft.com/crm/rest/v1/opportunities/&lt;:opportunity_id&gt;](https://api.infusionsoft.com/crm/rest/v1/opportunities/%3c:opportunity_id%3e)

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developer.infusionsoft.com/docs/rest/)

### Sample queries
**Campaigns**

`https://api.infusionsoft.com/crm/rest/v1/campaigns`

**Merchants**

`https://api.infusionsoft.com/crm/rest/v1/merchants`

**Specific product detail**

`https://api.infusionsoft.com/crm/rest/v1/products/%3c:product_id%3e`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Infusionsoft Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/Infusionsoft/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/Infusionsoft/ManageDS.png)

## Related links

<a href="https://www.boldbi.com/blog/getting-insights-from-key-infusionsoft-metrics" target="_blank">Blog Post</a>

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

<a href="https://www.boldbi.com/integrations/infusionsoft?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiinfusionsoftintegration" target="_blank">Infusionsoft Integration</a>
