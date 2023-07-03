---
layout: post
title: Help Scout – Data Connector | Bold BI Documentation
description: Learn how to connect Help Scout web service through REST API endpoint with Bold BI Embedded and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Help Scout data source
Bold BI dashboard designer supports connecting Help Scout web services through REST API.

## Choose HelpScout data source
To configure the HelpScout data source, follow the below steps:
1. Click the `Data Source` button in the configuration panel to add a new data connection.

   ![Data button](/static/assets/working-with-datasource/data-connectors/images/common/databutton.png)

2. Click `CREATE NEW` to launch a new connection from the connection type panel.

   ![Data source button](/static/assets/working-with-datasource/data-connectors/images/common/datasourcebutton.png)

3. Select `Help Scout` connection button in the connection type panel.

  ![Help scout button](/static/assets/working-with-datasource/data-connectors/images/help-scout/helpscout_button.png)

  > **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

  ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/help-scout/ChooseDS.png)

## Authentication with Help Scout
For the BoldBI enterprise version, the site admin should get the [OAuth credentials(Client ID and Client secret)](#steps-to-generate-client-id-and-secret) from Help Scout and [set up OAuth](/working-with-data-source/connection-settings/oauth-configuration/) for the HelpScout connector in BoldBI.

Use the following steps to authenticate with the Help Scout web service:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Help Scout account to authorize.
2. Click **Authorize** in the authorization window to accept the scopes requested by the Bold BI dashboards. 
   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.
3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect using the already connected account, refer to the [Connected Accounts](/cloud-bi/working-with-data-source/data-connectors/help-scout/#connected-accounts-for-oauth-data-sources).
   > **NOTE:**  To connect with a new account click **Connect New Account**.
## Create a Help Scout data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a Help Scout data source.
1. Enter the name and description (optional) for the data source.
2. Click the **Resources** dropdown box and choose the required endpoint.
4. Click the **Custom Url** to enter the URL manually. Refer to the [Help Scout API documentation](https://developer.helpscout.com/mailbox-api/) for more details.
5. Select the **GET** method for the REST API in the **Method** combo box.
6. In the **Max Rows**, enter the maximum number of rows fetched from the Help Scout data source. This value is used to bring the data from the Help Scout data source using pagination.
7. Choose a time interval for the **Refresh Settings** using the combo box to periodically trigger the Rest API request to keep the data in sync with your dashboard. 
8. Select the **JSON** data type in the **Data Format** combo box.

9. The authentication type will automatically be set to the **Help Scout** since OAuth is used for authenticating with the Help Scout account.

    ![Data source preview](/static/assets/working-with-datasource/data-connectors/images/help-scout/connect.png)

You can also edit the connection information set using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

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

1. For instance, to get customer resource details, use the following resource.

`https://api.helpscout.net/v2/customers/<:customerId>`

### Sample queries

**All Customers**

`https://api.helpscout.net/v2/customers`

**All Mailboxes**

`https://api.helpscout.net/v2/mailboxes`

### Preview and data import
* Click the **Preview & Connect** to connect with the configurations set.
* The Choose Table(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Help Scout Rest API request. This dialog displays a list of schemas in the treeview and their corresponding values in the grid for preview. Select the required tables from the treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table in the Query designer page.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with a web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/help-scout/authenticate.png)

You can edit, delete, and re-authorize this account from the [Connected Accounts](https://help.boldbi.com/cloud-bi/working-with-data-source/working-with-connected-accounts/) page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/help-scout/ManageDS.png)

### Steps to generate Client ID and Secret
1. Login to Help Scout.
2. You need to create an OAuth application before you can use the API. Create one by navigating to Your Profile > My apps and click Create My App. A redirection URL is necessary when using the Authorization Code flow.
3. Create a new App by entering information such as App name and redirect URL.

   Refer to the below syntax for redirect URL and configure it properly. Any mistakes in redirect URLs affect its connectivity with BoldBI.

    For example:`<protocol>://<hostname:port>/bi/designer/v1.0/oauth/agent`

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/help-scout/createmyapp.png)

4. you will find the generated Client ID and Secret credential.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/help-scout/appcredentials.png)

## Related Links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[Help Scout Integration](https://www.boldbi.com/integrations/help-scout?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbihelpscoutintegration)