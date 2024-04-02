---
layout: post
title: Microsoft OneDrive – Cloud BI Connector | Bold BI Learning
description: Learn how to connect your OneDrive account with Bold BI Cloud, read CSV, JSON, XML and XLSX files and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Microsoft OneDrive data source
Bold BI dashboard designer supports connecting Microsoft OneDrive web services through REST API. 

## Choose Microsoft OneDrive data source
To configure the Microsoft OneDrive data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Microsoft OneDrive** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/OneDrive/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/OneDrive/ChooseDS_server.png)

## Authentication with Microsoft OneDrive
Use the following steps to authenticate with Microsoft OneDrive web service:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Microsoft OneDrive account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.

3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via already connected account, refer [Connected Accounts](/working-with-data-sources/data-connectors/ms-one-drive/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Microsoft OneDrive
### Create Microsoft OneDrive data source
After successful authentication, File Explorer panel opens. Follow the below steps to create Microsoft OneDrive data source.
1. Enter a name for the data source.
2. Explorer will list out all the folders and files with extension `csv`, `json`, `xml` and `xlsx`.
3. Select the file which you wish to preview and connect the data.
4. Choose a time interval for **Refresh Settings** using the combo box, to trigger the request periodically to keep the data in sync with our dashboard. 

    ![Explorer View](/static/assets/working-with-datasource/data-connectors/images/OneDrive/Explorer.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

For more information on the API endpoints available for this data source, refer to their official [Microsoft OneDrive API documentation](https://docs.microsoft.com/en-us/graph/auth-register-app-v2) 

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
</td>
</tr>
</table>

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of data retrieved from Microsoft OneDrive Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/ExcelPreview/Preview.png)

> **NOTE:**  Multiple sheets in `xlsx` file will be listed in dropdown (at right side as shown in image). Maximum file size for the files to preview is `75 megabytes`.

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/ExcelPreview/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/OneDrive/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/OneDrive/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Microsoft OneDrive Integration](https://www.boldbi.com/integrations/microsoft-onedrive?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbimsonedriveintegration)