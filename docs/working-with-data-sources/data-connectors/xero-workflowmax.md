---
layout: post
title: How to connect Xero WorkflowMax data in Cloud app | Bold BI Docs
description: Learn how to connect Xero WorkflowMax web service through the OAuth-based authentication and create a data source with the Bold BI Cloud application.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Xero WorkflowMax data source
The Bold BI dashboard designer supports connecting to Xero WorkflowMax web services through the REST API. 

## Choose Xero WorkflowMax data source
To configure the Xero WorkflowMax data source, follow these steps:
1. Click on Data Sources in the configuration panel to add a new data connection.
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Xero WorkflowMax** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/XeroWorkflowMax/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/XeroWorkflowMax/ChooseDS_Server.png)

## Authentication with Xero WorkflowMax
Use the following steps to authenticate with the Xero WorkflowMax web service:

1. Click data source, and you will be prompted with a login window. Enter the credentials of your Xero WorkflowMax account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by the Bold BI dashboards.
   >**NOTE:**  If permission is denied, the account will not be accessible from the dashboard.
3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect using the already connected account, refer to the [Connected Accounts](/working-with-data-sources/data-connectors/xero-workflowmax/#connected-accounts-for-oauth-data-sources).

     > **NOTE**:  To connect with a new account, click Connect New Account.

## Create a Xero WorkflowMax data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow these steps to create a Xero WorkflowMax data source.
1. Enter a name and description (optional) for the data source.
2. Click the **Organizations** down drop box and choose the required organization.
3. Click on the **Resources** down drop box and choose the required resource.
4. Click on Custom URL to manually enter a URL into the URL textbox. Refer to [setting up a custom URL](/working-with-data-sources/data-connectors/xero-workflowmax/#setting-up-custom-url).
5. Select the **GET** method for the REST API in the Method combo box.
6. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with the Syncfusion dashboard.
7. Select **XML** data type in the Data Format combo box.
8. The authentication type will be automatically set to **Xero WorkflowMax** since OAuth is used for authenticating with the Xero WorkflowMax account.

    ![Data source preview](/static/assets/working-with-datasource/data-connectors/images/XeroWorkflowMax/DataSourcesView.png)

Edit the connection information set using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Preview and Data Import

* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Table(s) dialog opens. The schema represents the key fields of the JSON data retrieved from the Xero WorkflowMax Rest API request. This dialog displays a list of schemas in treeview and their corresponding values in the grid for preview. Select the required schema(s) from the treeview to use in the designer and click **Connect**.

    ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table in the Query designer page.
     ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Additional Information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
A period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

## Setting up custom URL
Apart from predefined Xero workflow max resources, import data for custom resources by providing the relevant API. Get the custom Xero workflow max APIs from their documentation [Xero WorkflowMax API documentation](https://www.workflowmax.com/api/overview)

1. For instance, to get the specific Lead details, connect to the <i>View Lead</i> endpoint which will return all Lead id and Detailed information for a specific Lead from that result. 
2. Change the URL to include the lead id.

`https://api.xero.com/workflowmax/3.0/lead.api/get/<:UUID>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://www.workflowmax.com/api/overview)

#### Sample queries
**All Client**

`https://api.xero.com/workflowmax/3.0/client.api/list`

**All Supplier**

`https://api.xero.com/workflowmax/3.0/supplier.api/list`

**All Staff**

`https://api.xero.com/workflowmax/3.0/staff.api/list`

**All Invoice**

`https://api.xero.com/workflowmax/3.0/invoice.api/current`

## Connected accounts for OAuth data sources
The account information will be listed here if you have already logged into the account and authenticated with a web data source. Select one of the accounts or connect to a new account by clicking **Connect New Account**.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/XeroWorkflowMax/OAuthDS.png)

Edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/XeroWorkflowMax/manageDS.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)
