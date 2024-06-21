---
layout: post
title: Azure DevOps – Embedded BI Data Connector | Bold BI Documentation
description: Learn how to connect Azure DevOps projects using OAuth-based authentication through REST API with Bold BI at your server or embedded in your application.
canonical: "/cloud-bi/working-with-data-source/data-connectors/azure-devops/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Azure DevOps data source
Bold BI dashboard designer supports connecting Azure DevOps web services through REST API. 

## Choose Azure DevOps data source
To configure the Azure DevOps data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Azure DevOps** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureDevOps/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureDevOps/ChooseDS_server.png)

## Authentication with Azure DevOps
Use the following steps to authenticate with Azure DevOps web service:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Azure DevOps account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:** If the permission is denied, the account will not be accessible from the dashboard.

3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect using the already connected account, refer to the [Connected Accounts](/embedded-bi/working-with-data-source/data-connectors/azure-devops/#connected-accounts-for-oauth-data-sources).

> **NOTE:** To connect to another account, click **Connect New Account.**


## Connect to Azure DevOps
### Create Azure DevOps data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow these steps to create an Azure DevOps data source:

In Azure DevOps, fetch data using the [**Boards**](/embedded-bi/working-with-data-source/data-connectors/azure-devops/#fetch-data-based-on-board-items) (choosing one from the Board Items) or [**Raw Query**](/embedded-bi/working-with-data-source/data-connectors/azure-devops/#fetch-data-using-raw-query) (REST endpoints).

#### Fetch data based on board items

1. Enter a name and description (optional) for the data source.
2. Enter your **Account** name and **Team Project** name.
3. Select one of the **Board Items** from the dropdown list. The options are based on categories in work items like Tasks, Bugs, and Stories.

   ![Configuration](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureDevOps/AzureBoardsConfiguration.png)

4. In **Max Rows**, enter the maximum number of rows to be fetched from the Azure DevOps data source. This value is used to fetch the data from Azure DevOps data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with Bold BI dashboard. 

    ![DataSourcesView](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureDevOps/DataSourcesView.png)

#### Fetch data using Raw Query

1. Enter a name and description (optional) for the data source.
2. Enter a valid Azure DevOps REST API endpoint in the URL textbox. Refer to the [Azure DevOps API documentation](https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-5.0) for more details.

    Example: [https://dev.azure.com/<:Account>/_apis/projects](https://dev.azure.com/%3c:Account%3e/_apis/projects)

   > **NOTE:** With this you can extract the data from other Azure DevOps services - Azure Pipelines, Azure Repos, Azure Test Plans, and Azure Artifacts with the endpoint prepared.

3. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with Bold BI dashboard. 
4. Select the **GET** method for the REST API in **Method** combo box.

You can also edit the connection information set here using the [Edit Connection](embedded-bi/working-with-data-source/editing-a-data-connection/) option.

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
Period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
</td>
</tr>
</table>

> **NOTE:** **Raw Query** option returns only the default records per query.

### How to create Azure DevOps OAuth App?
1. Login to [Azure DevOps](https://app.vsaex.visualstudio.com/app/register) to register your app.
2. Enter the company information and Application information.
3. Select the scopes for accessing your data and then click the create application button.

    > **NOTE:** Please only select these scopes in your application: `vso.build,vso.code,vso.dashboards,vso.entitlements,vso.extension, vso.extension.data,vso.gallery,vso.graph,vso.identity,vso.loadtest,vso.machinegroup_manage,vso.memberentitlementmanagement,vso.notification,vso.packaging,vso.project,vso.release,vso.security_manage,vso.serviceendpoint,vso.symbols,vso.taskgroups_read,vso.test, vso.tokenadministration,vso.tokens,vso.variablegroups_read,vso.wiki,vso.work`.

4. Your registered app is available from your [profile](https://app.vssps.visualstudio.com/profile/view).

### Setting up the URL
1. Login to [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/).
2. Get the Account name from the listed accounts under *My Organization*.

    ![AccountName](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureDevOps/Accountname.png)

3. Replace **<:Account>** in the URL with the account name from the above step.

### Sample queries
**Projects**

[https://dev.azure.com/TestAccount/_apis/projects](https://dev.azure.com/TestAccount/_apis/projects)

**Test Plans**

[https://dev.azure.com/MyOrganization/TestProject/_apis/testplan/plans](https://dev.azure.com/MyOrganization/TestProject/_apis/testplan/plans)

**Builds**

[https://dev.azure.com/MyOrganization/TestProject/_apis/build/builds](https://dev.azure.com/MyOrganization/TestProject/_apis/build/builds)

## Preview and Data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Azure DevOps Rest API request. This dialog displays a list of schemas in treeview and their corresponding values in a grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureDevOps/OAuthDS.png)

You can edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureDevOps/ManageDS.png)

## Related links
[Blog Post](https://www.boldbi.com/blog/monitoring-azure-devops-project-performance)

[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[Azure DevOps Integration](https://www.boldbi.com/integrations/azure-devops)