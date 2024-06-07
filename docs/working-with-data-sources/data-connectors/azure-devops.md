---
layout: post
title: Azure DevOps – Cloud BI Data Connector | Bold BI Docs
description: Learn how to connect Azure DevOps projects, test plan and builds using OAuth-based authentication through REST API endpoint with cloud-hosted Bold BI.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Azure DevOps data source
Bold BI dashboard designer supports connecting to Azure DevOps web services through REST API. 

## Choose Azure DevOps data source
To configure the Azure DevOps data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Azure DevOps** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/AzureDevOps/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/AzureDevOps/ChooseDS_server.png)

## Authentication with Azure DevOps
Use the following steps to authenticate with Azure DevOps web service:

1. Click on the data source, which will prompt a login window. Enter your Azure DevOps account credentials to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:** If permission is denied, the account will not be accessible from the dashboard.

3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via an already connected account, refer to [Connected Accounts](/working-with-data-sources/data-connectors/azure-devops/#connected-accounts-for-oauth-data-sources).

> **NOTE:** To connect to another account, click **Connect New Account.**


## Connect to Azure DevOps
### Create Azure DevOps data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow the steps below to create an Azure DevOps data source:

In Azure DevOps, you can fetch data through [**Boards**](/working-with-data-sources/data-connectors/azure-devops/#fetch-data-based-on-board-items) by selecting an item from the Board Items, or using [**Raw Query**](/working-with-data-sources/data-connectors/azure-devops/#fetch-data-using-raw-query) with REST endpoints.

#### Fetch data based on board items

1. Enter a name and optional description for the data source.
2. Enter your **Account** name and **Team Project** name.
3. Select one of the **Board Items** from dropdown list. The options are based on categories in work items like Tasks, Bugs, and Stories.

   ![Configuration](/static/assets/working-with-datasource/data-connectors/images/AzureDevOps/AzureBoardsConfiguration.png)

4. In the **Max Rows** field, enter the maximum number of rows to be fetched from the Azure DevOps data source. This value is used to fetch the data from the Azure DevOps data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically and keep the data in sync with the Bold BI dashboard.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/AzureDevOps/DataSourcesView.png)

#### Fetch data using Raw Query

1. Enter a name and optional description for the data source.
2. Please enter a valid Azure DevOps REST API endpoint in the URL textbox. Refer to the [Azure DevOps API documentation](https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-5.0) for more details.

    Example: `https://dev.azure.com/<:Account>/_apis/projects`

   > **NOTE:** With this, you can extract data from other Azure DevOps services such as Azure Pipelines, Azure Repos, Azure Test Plans, and Azure Artifacts using the prepared endpoint.

3. Choose a time interval for the **Refresh Settings** using the combo box to trigger the REST API request periodically and keep the data in sync with the Bold BI dashboard.
4. Select the **GET** method for the REST API in the **Method** combo box. 

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most REST APIs return only a limited amount of data on a single API request. To retrieve the necessary amount of data, you can set a value in this field. Pagination is handled internally and will fetch the required data.
</td>
</tr>
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call to the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
</td>
</tr>
</table>

> **NOTE:** **Raw Query** option returns only the default records per query.

### Setting up the URL
1. Login to [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/).
2. Obtain the account name from the listed accounts under *My Organization*.

    ![AccountName](/static/assets/working-with-datasource/data-connectors/images/AzureDevOps/Accountname.png)

3. Replace **&lt;:Account&gt;** in the URL with the account name from the above step.

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://docs.microsoft.com/en-us/azure/devops/integrate/previous-apis/overview?view=tfs-2018#full-list-of-rest-apis)

### Sample queries
**Projects**

`https://dev.azure.com/TestAccount/_apis/projects`

**Test Plans**

`https://dev.azure.com/MyOrganization/TestProject/_apis/testplan/plans`

**Builds**

`https://dev.azure.com/MyOrganization/TestProject/_apis/build/builds`

## Preview and Data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Azure DevOps Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/AzureDevOps/OAuthDS.png)

You can edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/AzureDevOps/ManageDS.png)

## Related links
<a href="https://www.boldbi.com/blog/monitoring-azure-devops-project-performance" target="_blank">Blog Post</a>


[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

<a href="https://www.boldbi.com/integrations/azure-devops" target="_blank">Azure DevOps Integration</a>
