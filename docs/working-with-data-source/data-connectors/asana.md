---
layout: post
title: Asana – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Asana web service using OAuth-based authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Asana data source

Bold BI dashboard designer supports connecting Asana web services through REST API.

## Choose Asana data source

To configure the Asana data source, follow the below steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Asana** connection in the connection panel.

    ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/asana/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/asana/ChooseDS_server.png)

### How to Obtain the Asana Client ID and Client Secret
> **Note:** Asana OAuth credentials are required for the Bold BI Embedded Analytics but not needed in Cloud Analytics Server.
1. Log in to your Asana account [Asana Login](https://app.asana.com/-/login).
2. Click on the User icon and select **My Settings** category.

    ![userIcon](/static/assets/working-with-datasource/data-connectors/images/asana/userIcon.png)

3. In the **My Settings** menu, go to the **Apps** tab and click on the **Manage developer Apps** at the bottom.
    ![mySettings](/static/assets/working-with-datasource/data-connectors/images/asana/mySettings.png)
4. On the **My Apps** menu, select **Create new app**.
    ![create_app](/static/assets/working-with-datasource/data-connectors/images/asana/create_app.png)
5. Fill in the **App Name**, enable the API terms and conditions, and click on the **Create new app**.
    ![app_name](/static/assets/working-with-datasource/data-connectors/images/asana/app_name.png) 
6. Once the app is created, the **Client ID** and **Client secret** will be displayed.
    ![client_ID](/static/assets/working-with-datasource/data-connectors/images/asana/client_ID.png)
7. Go to the **OAuth** page and click on the **Add Redirect URL**. 
    ![Oauth](/static/assets/working-with-datasource/data-connectors/images/asana/Oauth.png)
8. Add the Redirect URL as mentioned here and click **Add**. The Bold BI redirect URL should be added in the proper format required. Please refer to this URL structure, `https://<yourdomain>/bi/designer/v1.0/oauth/agent`. 
    ![url](/static/assets/working-with-datasource/data-connectors/images/asana/url.png)

> **NOTE:** Save the Client ID and Client secret in Bold BI by following the [OAuth Configuration](/site-administration/data-connector-settings/oauth-configuration/).
## Authentication with Asana
Use the following steps to authenticate with Asana web service.

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Asana account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:** If the permission is denied, the account will not be accessible from the dashboard.
   
3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via existing account, refer [Connected Accounts](/working-with-data-source/data-connectors/asana/#connected-accounts-for-oauth-data-sources).

> **NOTE:** If you need to connect to another account click **Connect New Account.**

## Connect to Asana
### Create Asana data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Asana data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Asana REST API endpoint in the URL textbox. Refer the [Asana API documentation](https://asana.com/developers/documentation/getting-started/quick-start) for more details.

   Example: `https://app.asana.com/api/1.0/projects`

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Asana data source. This value is used to fetch the data from Asana data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. The authentication type will be set to **Asana** automatically since OAuth is used for authenticating with Asana account.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/asana/DataSourcesView.png)

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
<tr>
<td>
API Limits
</td>
<td>
To keep it available for all users and stability Asana enforces multiple kinds of limitations. The free domain have 150 request per minute and the premium domain have 1500 request per minute.

In addition **Search APIs** are limited to 60 requests per minute.
</td>
</tr>
</table>

#### Sample queries

**Projects**

`https://app.asana.com/api/1.0/projects`

**Plans**

`https://app.asana.com/api/1.0/plan`

**Project Section**

 `https://app.asana.com/api/1.0/projects/<:project_gid>/sections`

  **NOTE:** The project id can be found in the URL of the project in the Asana application. Example: Open the project in the Asana application and find the project id in the address bar like 
  
  `https://app.asana.com/0/**1111094557386982**/list`.
  
  To fetch specific project data, you need to replace the project id in the API endpoint of data source creation.

  `https://app.asana.com/api/1.0/projects/**1111094557386982**/sections`

**Tasks (Search)**

 `https://app.asana.com/api/1.0/workspaces/<:workspace_gid>/tasks/search`

  **NOTE:** The workspace id can be found in the URL of the workspace in the Asana application. Example: Open the workspace in the Asana application and find the workspace id in the address bar like 
  
  `https://app.asana.com/0/**850617776313575**/list`.
  
  To fetch specific workspace data, you need to replace the workspace id in the API endpoint of data source creation.
  
  `https://app.asana.com/api/1.0/workspaces/**850617776313575**/tasks/search`

**Projects from Team**

 `https://app.asana.com/api/1.0/teams/<:team_gid>/projects`
  
   **NOTE:** The team id can be found in the URL of the team in the Asana application. Example: Open the team in the Asana application and find the team id in the address bar like

   `https://app.asana.com/0/**1200407026130215**/list`.
  
   To fetch specific team data, you need to replace the team id in the API endpoint of data source creation.

  `https://app.asana.com/api/1.0/teams/**1200407026130215**/projects`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Asana Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/asana/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/asana/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Asana API Rate Limits](https://asana.com/developers/documentation/getting-started/rate-limits)

<a href="https://www.boldbi.com/integrations/asana" target="_blank">Asana Integration</a>

<a href="https://www.boldbi.com/blog/make-better-decisions-with-an-asana-dashboard" target="_blank">Blog Post</a>