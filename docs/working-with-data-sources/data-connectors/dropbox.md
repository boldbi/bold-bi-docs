---
layout: post
title: Dropbox – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect your Dropbox account with Bold BI Cloud, read CSV, JSON, XML and XLSX files and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Dropbox data source
The Bold BI dashboard designer supports connecting to Dropbox web services through the REST API. 

## Choose Dropbox data source
To configure the Dropbox data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click on **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Dropbox** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Dropbox/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Dropbox/ChooseDS_server.png)

## Authentication with Dropbox
Use the following steps to authenticate with the Dropbox web service:

1. Click on the data source, which will prompt a login window. Enter the credentials of your Dropbox account to authorize.
2. Click on **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If permission is denied, the account will not be accessible from the dashboard.

3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via an already connected account, refer to [Connected Accounts](/working-with-data-sources/data-connectors/dropbox/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**

## Connect to Dropbox
### Create Dropbox data source
After successful authentication, the File Explorer panel opens. Follow the below steps to create Dropbox data source.
1. Enter a name for the data source.
2. Explorer will list out all the folders and files with extension `csv`, `json`, `xml` and `xlsx`.
3. Select the file you wish to preview and connect the data.
4. Choose a time interval for **Refresh Settings** using the combo box, to trigger the request periodically to keep the data in sync with our dashboard. 

    ![Explorer View](/static/assets/working-with-datasource/data-connectors/images/Dropbox/Explorer.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

For more information on the API endpoints available for this data source, refer to the official [Dropbox API documentation](https://www.dropbox.com/developers/reference/getting-started#app%20console) 

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose 'Never'.
</td>
</tr>
</table>

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of data retrieved from Dropbox Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/ExcelPreview/Preview.png)

> **NOTE:**  The sheets in the `xlsx` file will be listed in a drop-down menu at the top-right corner, as shown in the image. Additionally, please be aware that the maximum file size allowed for extraction is `75 megabytes`.

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/ExcelPreview/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/Dropbox/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/Dropbox/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Dropbox Integration](https://www.boldbi.com/integrations/dropbox)
