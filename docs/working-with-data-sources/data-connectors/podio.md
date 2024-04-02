---
layout: post
title: Podio - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Podio web service through OAuth-based authentication with cloud-hosted Bold BI and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to the Podio data source
The Bold BI dashboard designer supports connecting the Podio web services using the REST API. 

## Choose Podio data source
To configure the Podio data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Podio** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Podio/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Podio/ChooseDS_server.png)

## Authentication with Podio
Use the following steps to authenticate with Podio web service:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Podio account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.  
> **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.
3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via already connected account, refer to the [Connected Accounts](#connected-accounts-for-the-oauth-data-sources).

     > **NOTE:**  To connect with a new account click **Connect New Account**.


## Connect to Podio
### Create Podio data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a Podio data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** down drop box and choose the required endpoint.
3. Click **Custom Url** to enter the URL manually. Refer the [Podio API documentation](https://developers.podio.com/doc) for more details.
4. Select **GET** method for the REST API in **Method** combo box.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. The authentication type will be set to **Podio** automatically since OAuth is used for authenticating with Podio account.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/Podio/DataSourcesView.png)

You can also edit the connection information set using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
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
1. For instance, to query about the specific notification, query the <i>/notification</i> endpoint.
2. From the listed information, you can get the ID of the specific notification.

Replace it in the URL to query a particular notification:

`https://api.podio.com//notification/<:notification_id>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developers.podio.com/doc)

### Sample queries
**Get Conversations**

https://api.podio.com/conversation

**Get Batches**

https://api.podio.com/batch

**Get files**

https://api.podio.com/file

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Podio Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in the grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag from tree view table in the left pane and drop the table in Query designer page.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for the OAuth data sources
If you have already logged into the account and authenticated with a web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/Podio/OAuthDS.png)

You can edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/Podio/ManageDS.png)

To know more about Connected Accounts, refer [here](/working-with-data-sources/working-with-connected-accounts/).


## Related links

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)
