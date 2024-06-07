---
layout: post
title: Bitly – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Bitly web service through REST API endpoint with Bold BI Cloud and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Bitly data source
The Bold BI dashboard designer supports connecting to Bitly web services through the REST API.

## Choose Bitly data source
To configure the Bitly data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Bitly** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/bitly/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/bitly/ChooseDS_server.png)

## Authentication with Bitly
Use the following steps to authenticate with Bitly web service:

1. Click the data source, and a login window will appear. Enter your Bitly account credentials to authorize.
2. Click on **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If permission is denied, the account will not be accessible from the dashboard.
   
3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect using an existing connected account, refer to [Connected Accounts](/working-with-data-sources/data-connectors/bitly/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Bitly
### Create Bitly data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Bitly data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** drop-down box and choose the required endpoint.
3. Click **Custom URL** if you want to enter the URL manually. Refer to the [Bitly API documentation](https://dev.bitly.com/v4_documentation.html) for more details.  
4. Select **GET** method for the REST API in the **Method** combo box.
5. Enter the maximum number of rows to be fetched from the Bitly data source in **Max Rows**. This value is used for pagination.
6. Choose a time interval for **Refresh Settings** using the combo box to trigger the REST API request periodically and keep the data in sync with the dashboard. 
7. Select **JSON** data type in the **Data Format** combo box.
8. The authentication type will be automatically set to **Bitly** since OAuth is used for authenticating with the Bitly account.

    ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/bitly/DataSourcesView.png)

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
The period of time before the next refresh call is triggered. This will automatically trigger a call to the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
</td>
</tr>
</table>

### Setting up the URL
1. Replace the **<:group_guid>** in the URL with the query to the groups endpoint.
2. For example, to retrieve the Groups data, query the */groups* endpoint.
3. Obtain the guid from the listed group information.

Replace it in the URL to query a specific group:

[https://api-ssl.bitly.com/v4/groups/&lt;:group_guid&gt;/bitlinks](https://api-ssl.bitly.com/v4/groups/%3c:group_guid%3e/bitlinks)

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://dev.bitly.com/v4_documentation.html)

### Sample queries
**Bitlinks**

`https://api-ssl.bitly.com/v4/groups/Bi9c3AFP5Fx/bitlinks`

**Organizations**

`https://api-ssl.bitly.com/v4/organizations/Oi9c3A8HnWZ/shorten_counts`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog will open. The schema represents the key fields of JSON data retrieved from the Bitly Rest API request. This dialog displays a list of schemas in a tree view and its corresponding values in a grid for preview. Select the required schema(s) from the tree view to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* The data design view page with the selected table schema will open. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/bitly/OAuthDS.png)

You can edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/bitly/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Bitly Integration](https://www.boldbi.com/integrations/bitly)