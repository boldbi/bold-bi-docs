---
layout: post
title: Azure DevOps – Cloud BI Data Connector | Bold BI Docs
description: Learn how to connect Azure DevOps projects, test plan and builds using OAuth-based authentication through REST API endpoint with cloud-hosted Bold BI.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Azure DevOps data source
Bold BI dashboard designer supports connecting Azure DevOps web services through REST API. 

## Choose Azure DevOps data source
To configure the Azure DevOps data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Azure DevOps** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/AzureDevOps/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/AzureDevOps/ChooseDS_server.png)

## Authentication with Azure DevOps
Use the following steps to authenticate with Azure DevOps web service:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Azure DevOps account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:** If the permission is denied, the account will not be accessible from the dashboard.

3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via already connected account, refer  [Connected Accounts](/cloud-bi/working-with-data-source/data-connectors/azure-devops/#connected-accounts-for-oauth-data-sources).

> **NOTE:** To connect to another account, click **Connect New Account.**


## Connect to Azure DevOps
### Create Azure DevOps data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Azure DevOps data source:

In Azure DevOps, fetch data through [**Boards**](/cloud-bi/working-with-data-source/data-connectors/azure-devops/#fetch-data-based-on-board-items) (choosing one from the Board Items) or [**Raw Query**](/cloud-bi/working-with-data-source/data-connectors/azure-devops/#fetch-data-using-raw-query) (REST endpoints).

#### Fetch data based on board items

1. Enter a name and description (optional) for the data source.
2. Enter your **Account** name and **Team Project** name.
3. Select one of the **Board Items** from dropdown list. The options are based on categories in work items like Tasks, Bugs, and Stories.

   ![Configuration](/static/assets/cloud/working-with-datasource/data-connectors/images/AzureDevOps/AzureBoardsConfiguration.png)

4. In **Max Rows**, enter the maximum number of rows to be fetched from the Azure DevOps data source. This value is used to fetch the data from Azure DevOps data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with Bold BI dashboard. 

    ![DataSourcesView](/static/assets/cloud/working-with-datasource/data-connectors/images/AzureDevOps/DataSourcesView.png)

#### Fetch data using Raw Query

1. Enter a name and description (optional) for the data source.
2. Enter a valid Azure DevOps REST API endpoint in the URL textbox. Refer to the [Azure DevOps API documentation](https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-5.0) for more details.

    Example: [https://dev.azure.com/&lt;:Account&gt;/_apis/projects](https://dev.azure.com/%3c:Account%3e/_apis/projects)

   > **NOTE:** With this you can extract data from other Azure DevOps services - Azure Pipelines, Azure Repos, Azure Test Plans, Azure Artifacts with the endpoint prepared.

3. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with Bold BI dashboard. 
4. Select **GET** method for the REST API in **Method** combo box. 

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

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

> **NOTE:** **Raw Query** option returns only the default records per query.

### Setting up the URL
1. Login to [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/).
2. Get the Account name from listed accounts under *My Organization*.

    ![AccountName](/static/assets/cloud/working-with-datasource/data-connectors/images/AzureDevOps/Accountname.png)

3. Replace **&lt;:Account&gt;** in the URL with the account name from the above step.

### Sample queries
**Projects**

[https://dev.azure.com/TestAccount/_apis/projects](https://dev.azure.com/TestAccount/_apis/projects)

**Test Plans**

[https://dev.azure.com/MyOrganization/TestProject/_apis/testplan/plans](https://dev.azure.com/MyOrganization/TestProject/_apis/testplan/plans)

**Builds**

[https://dev.azure.com/MyOrganization/TestProject/_apis/build/builds](https://dev.azure.com/MyOrganization/TestProject/_apis/build/builds)

## Preview and Data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Azure DevOps Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/cloud/working-with-datasource/data-connectors/images/AzureDevOps/OAuthDS.png)

You can edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/cloud/working-with-datasource/data-connectors/images/AzureDevOps/ManageDS.png)

## Related links
[Blog Post](https://www.boldbi.com/blog/monitoring-azure-devops-project-performance)

[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[Azure DevOps Integration](https://www.boldbi.com/integrations/azure-devops)