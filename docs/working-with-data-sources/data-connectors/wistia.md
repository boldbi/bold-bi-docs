---
layout: post
title: Wistia – Cloud BI Data Connector | Bold BI Learning
description: Learn how to connect Wistia service through OAuth-based authentication with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Wistia data source
The Bold BI dashboard designer supports connecting to Wistia web services through the REST API. 

> **NOTE:** Wistia data source is available in Syncfusion Managed Cloud Server and it is not available in On-Premises Deployment.

## Choose Wistia data source
To configure the Wistia data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Wistia** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Wistia/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Wistia/ChooseDS_Server.png)

## How to Obtain the Wistia Client ID and Client Secret
1. Log in to your Wistia account [Wistia login](https://auth.wistia.com/session/new).
2. Go to **Account** > **Settings**.
    ![account](/static/assets/working-with-datasource/data-connectors/images/Wistia/account.png)
3. Click the **OAuth Applications** tab in the sidebar.
    ![OauthApp](/static/assets/working-with-datasource/data-connectors/images/Wistia/OauthApp.png)
4. Click **New Application**.
    ![new_app](/static/assets/working-with-datasource/data-connectors/images/Wistia/new_app.png)
5. On the New Application menu, enter the necessary information, such as **Name**, **Description**, and **Callback URL**.
6. Paste the specified URLs into the **Callback URL** field, substituting {{HOST_URL}} with your base URL. Include the Bold BI redirect URL in the correct format as outlined here:`https://<yourdomain>/bi/designer/v1.0/oauth/agent`.
7. Activate the necessary scopes and then proceed to click on the **Save** button.
    ![Oauth](/static/assets/working-with-datasource/data-connectors/images/Wistia/Oauth.png)
8. Once the app is created, click on the app to find the **Client ID** and **Client Secret** displayed.
    ![client_ID](/static/assets/working-with-datasource/data-connectors/images/Wistia/client_ID.png)

> **NOTE:** Save the Client ID and Client secret in Bold BI by following the [OAuth Configuration](/site-administration/data-connector-settings/oauth-configuration/).
## Authentication with Wistia
Use the following steps to authenticate with the Wistia web service:

1. Click on the data source, which will prompt a login window. Enter the credentials of your Wistia account to authorize.
2. Click on **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If permission is denied, the account will not be accessible from the dashboard.

3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect using an existing connected account, refer  [Connected Accounts](/working-with-data-sources/data-connectors/wistia/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Wistia
### Create Wistia data source
After successful authentication, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Wistia data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Wistia REST API endpoint in the URL textbox. Refer to the [Wistia API documentation](https://wistia.com/support/developers/data-api) for more details.

    Example: [https://api.wistia.com/v1/&lt;:your_end_point&gt;](https://api.wistia.com/v1/%3c:your_end_point%3e)    
3. Select the **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Wistia data source. This value is used to fetch the data from Wistia data source via pagination.
5. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. The authentication type will be set to **Wistia** automatically since OAuth is used for authenticating with Wistia account.

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
1. For instance, to query the specific project details, query the <i>/projects.json</i> endpoint.
2. From the listed information get the specific `project hash id`.

Replace it in the URL to query a particular project:

[https://api.wistia.com/v1/projects/&lt;:project_hash_id&gt;.json](https://api.wistia.com/v1/projects/%3c:project_hash_id%3e.json)

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://wistia.com/support/developers/data-api)

### Sample queries
**Specific Project**

`https://api.wistia.com/v1/projects/e0z35ocrhk1.json`

**Medias**

`https://api.wistia.com/v1/medias.json`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Wistia Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/Wistia/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/Wistia/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Wistia API Rate limits](https://wistia.com/support/developers/data-api#rate)

[Wistia Integration](https://www.boldbi.com/integrations/wistia)
