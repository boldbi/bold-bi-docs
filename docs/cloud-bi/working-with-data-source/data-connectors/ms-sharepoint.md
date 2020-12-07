---
layout: post
title: Microsoft SharePoint – Cloud BI Connector | Bold BI Learning
description: Learn how to connect your Microsoft SharePoint account with Bold BI Cloud, read CSV, JSON, XML and XLSX files and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Microsoft SharePoint data source
Bold BI dashboard designer supports connecting Microsoft SharePoint web services through REST API. 

## Choose Microsoft SharePoint data source
To configure the Microsoft SharePoint data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Microsoft SharePoint** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/SharePoint/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/SharePoint/ChooseDS_server.png)

## Authentication with Microsoft SharePoint
Use the following steps to authenticate with Microsoft SharePoint web service:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Microsoft SharePoint account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.

3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via already connected account, refer [Connected Accounts](/cloud-bi/working-with-data-source/data-connectors/ms-sharepoint/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Microsoft SharePoint
### Create Microsoft SharePoint data source
After successful authentication, File Explorer panel opens. Follow the below steps to create Microsoft SharePoint data source.
1. Enter a name for the data source and select the site from the dropdown.
2. Explorer will list out all the folders and files with extension `csv`, `json`, `xml` and `xlsx` of selected site.
3. Select the file which you wish to preview and connect the data.
4. Choose a time interval for **Refresh Settings** using the combo box, to trigger the request periodically to keep the data in sync with our dashboard. 

    ![Explorer View](/static/assets/cloud/working-with-datasource/data-connectors/images/SharePoint/Explorer.png)

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

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
* The Choose Schema(s) dialog opens. The schema represents the key fields of data retrieved from Microsoft SharePoint Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/ExcelPreview/Preview.png)

> **NOTE:**  The sheets in `xlsx` file will be listed in drop down (at right-top end as shown in the image.) Also note that maximum file size allowed to get extract is `75 megabytes`.

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/ExcelPreview/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/cloud/working-with-datasource/data-connectors/images/SharePoint/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/cloud/working-with-datasource/data-connectors/images/SharePoint/ManageDS.png)

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/bold-bi-walk-through/)

[Microsoft SharePoint Integration](https://www.boldbi.com/integrations/microsoft-sharepoint?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbimssharepointintegration)
