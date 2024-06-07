---
layout: post
title: Microsoft Dynamics CRM – Cloud BI Connector | Bold BI
description: Learn how to connect Microsoft Dynamics CRM Sales through OAuth-based authentication with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Microsoft Dynamics CRM Sales and Service

The Bold BI dashboard designer supports connecting to Microsoft Dynamics CRM Sales and Customer Service web services through the REST API.

## Choose Microsoft Dynamics CRM data source

To configure the Microsoft Dynamics CRM data source, follow the below steps:

1. Click on the **Data Sources** button in the configuration panel to add a new data connection.
   
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Microsoft Dynamics CRM** connection in the connection panel.

    ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/dynamicscrm/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/dynamicscrm/ChooseDS_server.png)

## Authentication with Microsoft Dynamics CRM
Use the following steps to authenticate with the Microsoft Dynamics CRM web service.

1. Click on the data source, and a window will prompt you. Enter the Service URL/Organization URL of your Microsoft Dynamics CRM account to proceed.

   ![ServiceUrl](/static/assets/working-with-datasource/data-connectors/images/dynamicscrm/ServiceUrlDS.png)

2. Next, a login window will appear. Enter the credentials of your Microsoft Dynamics CRM account to authorize.
3. If the window prompt requests permission to access your Microsoft Dynamics CRM account, click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If permission is denied, the account will not be accessible from the dashboard.
   
4. Provide a name to identify the account and click **Next**. 
5. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
6. To connect via an existing account, refer  [Connected Accounts](/working-with-data-sources/data-connectors/microsoft-dynamics-crm/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  If you need to connect to another account click on **Connect New Account.**

## Connect to Microsoft Dynamics CRM
### Create Microsoft Dynamics CRM data source

After successful authentication, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Microsoft Dynamics CRM data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Microsoft Dynamics CRM REST API endpoint in the URL textbox. Refer to the [Microsoft Dynamics CRM API documentation](https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/about?view=dynamics-ce-odata-9) for more details.

   Example:<span style="color:#FF4801">https://&lt;:your_organization_url&gt;/api/data/v9.0/reports</span>  

3. Select the **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Microsoft Dynamics CRM data source. This value is used to fetch the data from Microsoft Dynamics CRM data source via pagination.
5. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. The authentication type will be set to **Microsoft Dynamics CRM** automatically since OAuth is used for authenticating with the Microsoft Dynamics CRM account.

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Additional information
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
The period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose 'Never'.
</td>
</tr>
</table>

### Setting up the URL

To find your organization URL refer to the [Microsoft documentation](https://docs.microsoft.com/en-us/dynamics365/customer-engagement/admin/add-instance-subscription).

Replace it in the URL,

`https://sampleorg.crm.dynamics.com/api/data/v9.0/teams`

For more information on the API endpoints available for this data source, refer to their official:
  
  Microsoft dynamic sales [API Documentation]( https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/about?view=dynamics-ce-odata-9)

  Microsoft dynamic service [API Documentation](https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/about?view=dynamics-ce-odata-9)

#### Sample queries
**Teams**

`https://sampleorg.crm.dynamics.com/api/data/v9.0/teams`

**Reports**

`https://sampleorg.crm.dynamics.com/api/data/v9.0/reports`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Microsoft Dynamics CRM Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/dynamicscrm/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/dynamicscrm/ManageDS.png)

> **NOTE:**  Switching between Dynamics CRM Sales and Customer Service will require authorization of the account due to scope changes. Click **Authorize** to proceed.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/dynamicscrm/OAuthDS_service.png)

## Related links

<a href="https://www.boldbi.com/blog/getting-insights-from-dynamics-365-sales-data" target="_blank">Blog Post</a>

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Microsoft Dynamics CRM API Limits](https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/api-limits)

<a href="https://www.boldbi.com/integrations/microsoft-dynamics-crm-sales?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbimicrosoftdynamicscrmsalesintegration" target="_blank">Microsoft Dynamics CRM Integration</a>