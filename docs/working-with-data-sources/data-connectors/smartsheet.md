---
layout: post
title: Smartsheet – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Smartsheet web service using OAuth-based authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Smartsheet data source

Bold BI dashboard designer supports connecting Smartsheet web services through REST API.

## Choose Smartsheet data source

To configure the Smartsheet data source, follow the below steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Smartsheet** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/smartsheet/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/smartsheet/ChooseDS_server.png)

## How to Obtain the Smartsheet Client ID and Client Secret
> **Note:** Smartsheet OAuth credentials are required for the On-Premises Deployment but not needed in Syncfusion Managed Cloud Server.

1. Go to the [Smartsheet home page](https://www.smartsheet.com/) and log in to your account.
2. Click the User icon and select **Developer Tools** from the menu.
 ![Developertools](/static/assets/working-with-datasource/data-connectors/images/smartsheet/Developertools.png)

3. Provide the necessary details and click **Save** to create your **Developer profile**.
 ![Developerprofile](/static/assets/working-with-datasource/data-connectors/images/smartsheet/developerprofile.png)

4. On the Developer Tools menu, click the **Create New App** button to create a new app.
 ![Createapp](/static/assets/working-with-datasource/data-connectors/images/smartsheet/Createapp.png)

5. Enter the required details and the **App redirect URL**, then click the **Save** button.
   ![saveapp](/static/assets/working-with-datasource/data-connectors/images/smartsheet/saveapp.png)

>**NOTE**: The Bold BI redirect URL should be added in the proper format. Please refer to this URL structure, https://hostname/bi/designer/v1.0/oauth/agent.

6. The **Client ID and Client Secret** for your app will be displayed once the app is created.
   ![Appcredientals](/static/assets/working-with-datasource/data-connectors/images/smartsheet/Appcredientals.png)

>**NOTE**: Save the client ID and client secret in Bold BI by following the [OAuth Configuration](/site-administration/data-connector-settings/oauth-configuration/) guide for more details.

## Authentication with Smartsheet
Use the following steps to authenticate with Smartsheet web service.

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Smartsheet account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.
   
3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via existing account, refer  [Connected Accounts](/working-with-data-sources/data-connectors/smartsheet/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  If you need to connect to another account click **Connect New Account.**

## Connect to Smartsheet
### Create Smartsheet data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Smartsheet data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Smartsheet REST API endpoint in the URL textbox. Refer the [Smartsheet API documentation](https://smartsheet-platform.github.io/api-docs/) for more details.

   Example: `https://api.smartsheet.com/2.0/sheets/<:sheet_id>/`  

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Smartsheet data source. This value is used to fetch the data from Smartsheet data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. The authentication type will be set to **Smartsheet** automatically since OAuth is used for authenticating with Smartsheet account.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/smartsheet/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

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

1. Login to Smartsheet. Open a sheet.
2. Click **File -> Properties** to get the sheet id and sheet link.

   ![Sheet id](/static/assets/working-with-datasource/data-connectors/images/smartsheet/SmartSheet_SheetID.png)

Replace it in the URL to query a particular sheet:

`https://api.smartsheet.com/2.0/sheets/<:sheet_id>/`

For more information on the API endpoints available for this data source, refer to their official [API documentation](https://smartsheet-platform.github.io/api-docs/)

#### Sample queries
**Reports**

`https://api.smartsheet.com/2.0/reports/Bi9c3AFP5Fx/`


**Sheet**

`https://api.smartsheet.com/2.0/sheets/1201906853930884/`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Smartsheet Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/smartsheet/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/smartsheet/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Smartsheet Integration](https://www.boldbi.com/integrations/smartsheet?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbismartsheetintegration)