---
layout: post
title: GoHighLevel – Embedded  BI Connector | Bold BI Learning
description: Learn how to connect the GoHighLevel web service through OAuth-based authentication and create a data source with Bold BI, which is deployed in your server.
canonical: "/cloud-bi/working-with-data-source/data-connectors/gohighlevel/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to GoHighLevel  data source
The Bold BI dashboard designer supports connecting the GoHighLevel web services using the REST API. 

## Choose GoHighLevel data source
To configure the GoHighLevel data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **GoHighLevel** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/GoHighLevel/datasource.png)
   
   > **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/GoHighLevel/designer.png)
   
## Authentication with GoHighLevel
For the BoldBI enterprise version, the site admin should get the [OAuth credentials(Client ID and Client secret)](#steps-to-generate-client-id-and-secret) from GoHighLevel and [set up OAuth](/embedded-biworking-with-data-source/connection-settings/oauth-configuration/) for the GoHighLevel connector in BoldBI.

Use the following steps to authenticate with the GoHighLevel web service:

1. Click the data source, and you will be prompted with a login window. Enter the credentials of your GoHighLevel account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by the Bold BI dashboards. 
   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.
3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect using the already connected account, refer to the [Connected Accounts.](/embedded-bi/working-with-data-source/data-connectors/gohighlevel/#connected-accounts-for-oauth-data-sources). 

     > **NOTE:**  To connect with a new account click **Connect New Account**.

## Create a GoHighLevel data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a GoHighLevel data source.
1. Enter the name and description (optional) for the data source.
2. Click the **Resources** dropdown box and choose the required endpoint.
4. Click **Custom Url** to enter the URL manually. Refer to the [GoHighLevel API documentation](https://highlevel.stoplight.io/docs/integrations) for more details.
5. Select the **GET** method for the REST API in the **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows to be fetched from the GoHighLevel data source. This value is used to fetch the data from the GoHighLevel data source using pagination.
7. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with your dashboard.  
8. Select the **JSON** data type in the **Data Format** combo box.
 
9. The authentication type will be set to the **GoHighLevel** automatically since OAuth is used for authenticating with the GoHighLevel account.

    ![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/GoHighLevel/connect.png)

You can also edit the connection information set using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.


#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most REST APIs return only less data on a single API request. To pull the amount of data you need, set a value in this field. 
Pagination is handled internally and will fetch the amount of data you need.
</td>
</tr>
<tr>
<td>
Refresh Settings
</td>
<td>
Period before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

1. For instance, to get calendar resource details, use the following resource.

`https://services.leadconnectorhq.com/calendars/?locationId=<:locationId>`

### Sample queries

**All Pipelines**

`https://services.leadconnectorhq.com/opportunities/pipelines/?locationId=<:locationId>`

**All Campagins**

`https://services.leadconnectorhq.com/campaigns/?locationId=<:locationId>`


### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Table(s) dialog opens. The schema represents the key fields of JSON data retrieved from the GoHighLevel Rest API request. This dialog displays a list of schemas in the treeview and their corresponding values in the grid for preview. Select the required tables from the treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table in the Query designer page.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with a web data source, the account information will be listed here. You can select one of the accounts or connect to a new report by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/embedded/working-with-datasource/data-connectors/images/GoHighLevel/authenticate.png)

You can edit, delete, and re-authorize this account from the [Connected Accounts](https://help.boldbi.com/cloud-bi/working-with-data-source/working-with-connected-accounts/) page.

   ![Manage Accounts](/static/assets/embedded/working-with-datasource/data-connectors/images/GoHighLevel/ManageDS.png)

### Steps to generate Client ID and Secret.

1. Go to [GoHighLevel Developer Console](https://marketplace.gohighlevel.com).
2. Select the list of marketing application. First, login to your account with your credentials.
![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/GoHighLevel/apps.png)
3. Click on the **create App** button.
4. Enter the application name and select the application type is private or public. To access your account in bold BI, use public and click on save button.
![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/GoHighLevel/createapp.png)
5. Once the application is created, you have to provide the scope by clicking on the add button in the scope category.
![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/GoHighLevel/scope.png)
6. Add the redirect URL to access the application in Bold BI.

   Refer to the following syntax for redirect URL and configure it properly. Any mistakes in redirect URLs affect its connectivity with BoldBI.

    For example:`<portocal>://<hostname:port>/bi/designer/v1.0/oauth/agent`
![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/GoHighLevel/redirect.png)
7. To Generate the client ID and secretes for your account, click on the add button from client keys and provide the name. It will generate the client ID and Secrete.
![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/GoHighLevel/credential.png)

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)