---
layout: post
title: Buffer – Embedded BI Data Connector | Bold BI Documentation
description: Learn how to connect Buffer web service using OAuth-based authentication through REST API endpoint with Bold BI Embedded.
canonical: "/working-with-data-sources/data-connectors/buffer/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Buffer data source

The Bold BI dashboard designer supports connecting to Buffer web services through the REST API.

> **Note:** The buffer data source is available in On-Premises Deployment but not in the Syncfusion Managed Cloud Server.

## Choose Buffer data source

To configure the Buffer data source, follow the steps below:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Buffer** connection in the connection panel.

    ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/buffer/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/buffer/ChooseDS_server.png)

## Authentication with Buffer
Use the following steps to authenticate with the Buffer web service.

1. Click on the data source, and you will be prompted with a login window. Enter the credentials of your Buffer account to authorize.
2. Click on **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If permission is denied, the account will not be accessible from the dashboard.
   
3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via an existing account, refer to [Connected Accounts](/working-with-data-sources/data-connectors/buffer/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  If you need to connect to another account, click **Connect New Account**.

## Connect to Buffer
### Create Buffer data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow the steps below to create the Buffer data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Buffer REST API endpoint in the URL textbox. Refer to the [Buffer API documentation](https://Buffer.com/developers/api) for more details.

   Example: [https://api.Bufferapp.com/1/user.json](https://api.Bufferapp.com/1/user.json)  

3. Select **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Buffer data source. This value is used to fetch the data from the Buffer data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box to trigger the REST API request periodically to keep the data in sync with our dashboard.
6. Select **JSON** data type in the **Data Format** combo box.
7. The authentication type will be set to **Buffer** automatically since OAuth is used for authenticating with the Buffer account.

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
<tr>
<td>
API Limits
</td>
<td>
The Buffer API is rate limited to 60 authenticated requests per user per minute. If you make more than 60 requests within a 60 seconds window period, you will receive a HTTP code 429 response.
</td>
</tr>
</table>

#### Sample queries

**Profiles**

[https://api.Bufferapp.com/1/profiles.json](https://api.Bufferapp.com/1/profiles.json)

**Users**

[https://api.Bufferapp.com/1/user.json](https://api.Bufferapp.com/1/user.json)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Buffer Rest API request. This dialog displays a list of schemas in a treeview and their corresponding values in a grid for preview. Select the required schema(s) from the treeview to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/buffer/OAuthDS.png)

You can edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/buffer/ManageDS.png)
   
## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Buffer Integration](https://www.boldbi.com/integrations/buffer?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbibufferintegration)