---
layout: post
title: Google BigQuery – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Google BigQuery cloud data warehouse and read its data into the dashboard in Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Google BigQuery data source
Bold BI dashboard designer supports connecting Google BigQuery server using the Live mode.

## Authentication Types:

1. OAuth

2. Service Account

## Connecting with Service Authentication:

**Create a service account:**

1. Go to the Create service account page in the Google Cloud console.

`https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts`

2. Select your project from the dropdown.

![ServiceAuth](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/ChooseProject.png)

3. Click Create Service Account

![ServiceAuth](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/CreateServiceAccount.png)

4. In the Service account name field, enter a name. The Google Cloud console fills in the Service account ID field based on this name.

![ServiceAuth](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/CreateServiceAccountDialog.png)

5. In the Service account description field, enter a description. For example, Service account for quickstart.


6. Click Create and continue.

7. To provide access to your project, grant the following role(s) to your service account: Project > Owner.

![ServiceAuth](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GrantRole.png)

8. In the Select a role list, select a role and Click Continue.

For additional roles, click add Add another role and add each additional role.

> **NOTE:**  The Role field affects which resources your service account can access in your project. You can revoke these roles or grant additional roles later. In production environments, do not grant the Owner, Editor, or Viewer roles in production environments. Instead, grant a predefined role or custom role that meets your needs.

8. Click Done to finish creating the service account. Do not close your browser window. You will use it in the next step.

**Create a service account key:**

1. In the Google Cloud console, click the email address for the service account that you created.

2. Click context menu and select Manage Keys.

![ServiceAuth](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/ManageKeys.png)

3. Click Add key, and then click Create new key.

![ServiceAuth](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/AddKey.png)

4. Click Create. A JSON key file is downloaded to your computer.

![ServiceAuth](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/JsonKey.png)

## Connecting with OAuth:

**1. Go to your personal or organization accounts for Google developer console and create a project or application**

Google BigQuery console link: `https://console.cloud.google.com/bigquery`

You can see the projects list as follows.

   ![Google BigQuery Console Project](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_ConsoleProject.png)

Create a new project as follows.
    
   ![Google BigQuery Create Project](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_CreateProject.png)

**2. Enable a Google BigQuery API**

Go to the following link and enable the Google developers console API.

`https://console.developers.google.com/apis/library/people.googleapis.com` 

   ![Enable Google People API](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/Enable_GooglePeopleAPI.png)

You can edit or view your OAuth grant limit, redirect URI, scope, authorized domains, and more using the following link.

`https://console.cloud.google.com/apis/credentials/consent`

Select OAuth Consent screen tab and choose external user type as shown in the following image.

![Set Application Type](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_UserType.png)

Enter the app's name and user's email address, as shown in the following image.

![Set Application Name](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_AppName.png)

Enter the app domain information for registering the application with Bold BI as follows.

![Set Domain Information](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_AppDomain.png)

Set the authorized domain as **boldbi.com** and enter the **User's email address** mail for development contact information as shown in the following image.

![Set Authorized Information](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_AuthorizedDomain.png)

**Add Test Users**

Click **Add Users** and enter the user's email address and click **Save**, as shown in the following image.

![Set Test Users](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_TestUsers.png)

To Create a new Credentials (Client ID, Client Secret), use the following link.

`https://console.cloud.google.com/apis/credentials`

   ![Google BigQuery Credentials Create](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_CredentialsCreate.png)
 
After creating the credentials, open the corresponding credentials and add your Bold BI Enterprises build hosted URL as the following sample URL format.

`http://localhost:<boldbi-running port>/bi/designer/v1.0/oauth/agent`

   ![Google BigQuery Credentials Page Open](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_CredentialsPageOpen.png)
   ![Google BigQuery Credentials Page Save](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_CredentialsPageSave.png)

**3. Go to Bold BI application and navigate to data connectors settings page**

If intermediate DB is not configured, you will get an error as follows.

   ![IntermediateDB Set Error](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/IntermediateDB_SetError.png)
 
Then, configure the intermediate DB in **Data Store** section.

   ![Data Store Page](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/DataStore_Page.png)
 
Also, configure the client ID and client secret information in **Connectors** section and save the information for Google BigQuery as follows.

   ![Connectors Page](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/Connectors_Page.png)
 
Once the pre-requisites done, you are good to go to work with Google BigQuery.

## Choose a Google BigQuery data source

To configure the Google BigQuery data source, follow these steps: 

1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Google BigQuery** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.
 
   ![Choose data source server](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/ChooseDS_server.png)

## Authentication with Google BigQuery

Use the following steps to authenticate with Google BigQuery server:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Google BigQuery account to authorize.

   ![Google BigQuery Login](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_Login.png)

2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   ![Google BigQuery Login Allow](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_LoginAllow.png)

   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.

3. Set a name to identify the account and click **Next**.
4. Now, you have successfully authorized your connection. Click **Connect** to continue with the data source connection.

   ![Google BigQuery Connect Account](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_ConnectAccount.png)

5. To connect using the already connected account, refer to Connected Accounts.

> **NOTE:**  To connect to another account, click **Connect New Account**.

## Connect to Google BigQuery
### Create a Google BigQuery data source

After successful authentication, the **NEW DATA SOURCE** configuration panel opens. 

Follow these steps to create the Google BigQuery data source. 
1. Enter a name and description (optional) for the data source. 
2. Choose the required projects in **Project** drop down box.
3. The authentication type will be set to Google BigQuery automatically in **Connected as** text box since OAuth is used for authenticating with Google BigQuery account.

   ![Google BigQuery Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_Connection.png)

To edit the connection information, use the [Edit Connection](https://help.syncfusion.com/bold-bi/editing-a-data-connection) option

**For Service Authentication:**

Select the JSON file downloaded from [Connecting with Service Authentication](/cloud-bi/working-with-data-source/data-connectors/google-bigquery/#connecting-with-service-authentication) 

![Google BigQuery Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/ConnectingServiceAccount.png#max-width=100%)

**For OAuth:**

The authentication type will automatically be sent to the Google BigQuery in the **Connected as** text box since the OAuth is used for authenticating with the Google BigQuery account.

Choose the required projects in the **Project** drop-down box. 

To connect the Google Big Query with a particular dataset, enter the property currentdataset={datasetname} or specificdataset={datasetname} in the Additional connection parameters text box.

   ![Google BigQuery Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/ConnectingOAuth.png#max-width=100%)

To edit the connection information, use the [Edit Connection](https://help.syncfusion.com/bold-bi/editing-a-data-connection) option.

### Preview data
1. Click **Connect** to connect the Google BigQuery server with configured details. 
The available schemas list is shown in tree view for the selected projects that are retrieved from the Google BigQuery server.

   ![Treev view](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_Treeview.png)

2. In the data design view page, drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_QueryEditor.png#max-width=100%)

   ![Tree view specific dataset](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_Treeview_specific_dataset.png#max-width=100%)

2. In the data design view page, drag, and drop the table.

   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_QueryEditor.png#max-width=100%)
 
   You can use **Code View** options for passing query to display data.

   ![Code View](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_CodeView.png) 

3. Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources

If you have already logged into the account and authenticated with the data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/OAuthDS.png)
 
You can edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/ManageDS.png)

## Link Google BigQuery data source with Google Analytics
Google BigQuery is a data warehouse and only supports live connection in Bold BI. You can link your Google BigQuery with Google Analytics by following the official documentation steps about [linking Google BigQuery with Google Analytics](https://support.google.com/analytics/answer/3416092?hl=en). 

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/bold-bi-walk-through/)

[Google BigQuery Limitations to build query](https://cloud.google.com/bigquery/quotas)

[Linking Google BigQuery with Google Analytics](https://support.google.com/analytics/answer/3416092?hl=en)

[Google BigQuery Integration](https://www.boldbi.com/integrations/google-big-query?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigoolglebigqueryintegration)
