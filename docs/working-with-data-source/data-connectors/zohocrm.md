---
layout: post
title: Zoho CRM – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect the Zoho CRM data using the OAuth-based authentication and create a data source in Dashboard Designer with Bold BI Cloud data connector.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Zoho CRM data source
Bold BI dashboard designer supports connecting Zoho CRM web services through REST API. 

## Choose Zoho CRM data source
To configure the Zoho CRM data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Zoho CRM** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/ZohoCRM/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/ZohoCRM/ChooseDS_Server.png)

## Authentication with Zoho CRM
Use the following steps to authenticate with Zoho CRM web service:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Zoho CRM account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.

3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via already connected account, refer to [Connected Accounts](/working-with-data-source/data-connectors/zohocrm/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account, click **Connect New Account.**


## Connect to Zoho CRM
### Create Zoho CRM data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Zoho CRM data source:
1. Enter a name and description (optional) for the data source.
2. Click the **Endpoints** dropdown and choose the required endpoint.

   ![Select module](/static/assets/working-with-datasource/data-connectors/images/ZohoCRM/Module.png)

3. Click the custom URL if you want to enter the URL manually. Refer to the [Zoho CRM API documentation](https://www.zoho.com/crm/help/developer/api/#api-reference) for more details.

    Example: [https://www.zohoapis.com/crm/v2/<:your_end_point>](https://www.zohoapis.com/crm/v2/%3c:your_end_point%3e)    
4. Select the **GET** method for the REST API in the **Method** combo box.
5. In **Max Rows**, enter the maximum number of rows to be fetched from the Zoho CRM data source. This value is used to fetch the data from the Zoho CRM data source via pagination.
6. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
7. Select the **JSON** data type in the **Data Format** combo box.
8. The authentication type will be set to **Zoho CRM** automatically since the OAuth is used for authenticating with the Zoho CRM account.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/ZohoCRM/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-source/editing-a-data-connection/) option.

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

**Fetch data about specific user - Sample URL**
1. For instance, to get the specific role details, query the */roles* endpoint
2. From the listed users information get the ID.

Replace it in the URL to query a particular role.

[https://www.zohoapis.com/crm/v2/settings/roles/<:role_id>](https://www.zohoapis.com/crm/v2/settings/roles/%3c:role_id%3e)

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://www.zoho.com/crm/help/api/v2/#api-reference)

#### Sample queries
**Users**

`https://www.zohoapis.com/crm/v2/users`

**Organizations**

`https://www.zohoapis.com/crm/v2/org`

**Leads**

`https://www.zohoapis.com/crm/v2/Leads`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Zoho CRM Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/ZohoCRM/OAuthDS.png)

You can edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/ZohoCRM/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Zoho CRM API Limits](https://www.zoho.com/crm/help/developer/api/api-limits.html)

[Zoho CRM Integration](https://www.boldbi.com/integrations/zoho-crm?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbizohocrmintegration)

[Blog Post](https://www.boldbi.com/blog/visualize-sales-metrics-with-a-zoho-crm-sales-dashboard)