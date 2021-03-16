---
layout: post
title: Google BigQuery – Embedded BI Connector | Bold BI Learning
description: Learn how to setup a connected app in Google Cloud Platform with Bold BI Embedded application and connect Google BigQuery data with the dashboard.
canonical: "/cloud-bi/working-with-data-source/data-connectors/google-bigquery/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Google BigQuery data source
Bold BI dashboard designer supports connecting Google BigQuery server using the Live mode.

## Prerequisites for Embedded BI version
> **NOTE:**  This is only applicable for Embedded BI version and if you are using cloud Bold BI product, simply skip this step.

**1. Go to your personal or organization accounts for Google developer console and create a project or application**

Google BigQuery console link: `https://console.cloud.google.com/bigquery`

You can see the projects list as follows.

   ![Google BigQuery Console Project](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_ConsoleProject.png)

Create a new project as follows.
    
   ![Google BigQuery Create Project](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_CreateProject.png)

**2. Enable a Google BigQuery API**

Go to the following link and enable the Google developers console API.

`https://console.developers.google.com/apis/library/people.googleapis.com` 

   ![Enable Google People API](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/Enable_GooglePeopleAPI.png)

You can edit or view your OAuth grant limit, redirect URI, scope, authorized domains, and more using the following link.

`https://console.cloud.google.com/apis/credentials/consent`

   ![Google BigQuery OAuth Consent Screen ](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_OAuthConsentScreen.png)

To Create a new Credentials (Client ID, Client Secret), use the following link.

`https://console.cloud.google.com/apis/credentials`

   ![Google BigQuery Credentials Create](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_CredentialsCreate.png)
 
After creating the credentials, open the corresponding credentials and add your Bold BI Enterprises build hosted URL as the following sample URL format.

`http://localhost:63208/bi/designer/v1.0/oauth/agent`

   ![Google BigQuery Credentials Page Open](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_CredentialsPageOpen.png)
   ![Google BigQuery Credentials Page Save](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_CredentialsPageSave.png)

**3. Go to Bold BI application and navigate to data connectors settings page**

If intermediate DB is not configured, you will get an error as follows.

   ![IntermediateDB Set Error](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/IntermediateDB_SetError.png)
 
Then, configure the intermediate DB in **Data Store** section.

   ![Data Store Page](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/DataStore_Page.png)
 
Also, configure the client ID and client secret information in **Connectors** section and save the information for Google BigQuery as follows.

   ![Connectors Page](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/Connectors_Page.png)
 
Once the pre-requisites done, you are good to go to work with Google BigQuery.

## Choose a Google BigQuery data source
To configure the Google BigQuery data source, follow these steps: 
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Google BigQuery** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.
 
   ![Choose data source server](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/ChooseDS_server.png)

## Authentication with Google BigQuery
Use the following steps to authenticate with Google BigQuery server:
1. Click the data source, you will be prompted with a login window. Enter the credentials of your Google BigQuery account to authorize.

   ![Google BigQuery Login](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_Login.png)

2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   ![Google BigQuery Login Allow](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_LoginAllow.png)

   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.

3. Set a name to identify the account and click **Next**.
4. Now, you have successfully authorized your connection. Click **Connect** to continue with the data source connection.

   ![Google BigQuery Connect Account](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_ConnectAccount.png)

5. To connect using the already connected account, refer to Connected Accounts.

> **NOTE:**  To connect to another account, click **Connect New Account**.

## Connect to Google BigQuery
### Create a Google BigQuery data source
After successful authentication, the **NEW DATA SOURCE** configuration panel opens. 
Follow these steps to create the Google BigQuery data source. 
1. Enter a name and description (optional) for the data source. 
2. Choose the required projects in **Project** drop down box.
3. The authentication type will be set to Google BigQuery automatically in **Connected as** text box since OAuth is used for authenticating with Google BigQuery account.

   ![Google BigQuery Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_Connection.png)

You can also edit the connection information set here using the [Edit Connection](https://help.syncfusion.com/bold-bi/editing-a-data-connection) option.

### Preview data
1. Click **Connect** to connect the Google BigQuery server with configured details. 
The available schemas list is shown in tree view for the selected projects that are retrieved from the Google BigQuery server.

   ![Treev view](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_Treeview.png)

2. In the data design view page, drag and drop the table.

   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_QueryEditor.png)
 
    You can use the **Code View** options for passing query to display data.

   ![Code View](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_CodeView.png) 

3. Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/OAuthDS.png)
 
You can edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleBigQuery/ManageDS.png)

## Link Google BigQuery data source with Google Analytics
Google BigQuery is a data warehouse and only supports live connection in Bold BI. You can link your Google BigQuery with Google Analytics by following the official documentation steps about [linking Google BigQuery with Google Analytics](https://support.google.com/analytics/answer/3416092?hl=en). 

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[Google BigQuery Limitations to build query](https://cloud.google.com/bigquery/quotas)

[Linking Google BigQuery with Google Analytics](https://support.google.com/analytics/answer/3416092?hl=en)

[Google BigQuery Integration](https://www.boldbi.com/integrations/google-big-query?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigoolglebigqueryintegration)