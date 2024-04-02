---
layout: post
title: Box – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect your Box account with Bold BI Cloud, read CSV, JSON, XML and XLSX files and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Box data source
Bold BI dashboard designer supports connecting Box web services through REST API. 

## Choose Box data source
To configure the Box data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Box** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Box/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Box/ChooseDS_server.png)

## Authentication with Box
Use the following steps to authenticate with Box web service:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Box account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.

3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via already connected account, refer [Connected Accounts](/working-with-data-sources/data-connectors/box/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Box
### Create Box data source
After successful authentication, File Explorer panel opens. Follow the below steps to create Box data source.
1. Enter a name for the data source.
2. Explorer will list out all the folders and files with extension `csv`, `json`, `xml` and `xlsx`.
3. Select the file which you wish to preview and connect the data.
4. Choose a time interval for **Refresh Settings** using the combo box, to trigger the request periodically to keep the data in sync with our dashboard. 

    ![Explorer View](/static/assets/working-with-datasource/data-connectors/images/Box/Explorer.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

For more information on the API endpoints available for this data source, refer to their official [Box API documentation](https://developer.box.com/docs/setting-up-an-oauth-app) 

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
* The Choose Schema(s) dialog opens. The schema represents the key fields of data retrieved from Box Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/ExcelPreview/Preview.png)

> **NOTE:**  The sheets in `xlsx` file will be listed in drop down (at right-top end as shown in the image.) Also note that maximum file size allowed to get extract is `75 megabytes`.

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/ExcelPreview/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/Box/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/Box/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

<a href="https://www.boldbi.com/integrations/box" target="_blank">Box Integration</a>