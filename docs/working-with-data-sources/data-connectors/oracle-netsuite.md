---
layout: post
title: Oracle NetSuite – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Oracle NetSuite web service using OAuth-based authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Oracle NetSuite data source
The Bold BI dashboard designer supports connecting to Oracle NetSuite web services through the REST API.

## Choose Oracle NetSuite data source
To configure the Oracle NetSuite data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.
![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Oracle NetSuite** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/ChooseDS_Server.png)

### How to Obtain the Oracle NetSuite Client ID and Client Secret
**Note:** Oracle NetSuite OAuth credentials are required for the On-Premises Deployment but not needed in Syncfusion Managed Cloud Server.

**1**. Log in to your **Oracle NetSuite account** 
[Oracle NetSuite Login](https://system.NetSuite.com/)

![LogIn](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/Login.png)

**2. Enable Required Features**

   Navigate to **Setup > Company > Enable Features**.

   ![Enable Feature](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/Enable_feature.png)

**3. Enable SuiteTalk (WebServices)**

   Under the **SuiteCloud** section, locate the **SuiteTalk (WebServices)** section and enable the required features (SOAP Web Services and Rest web Services) as shown in the image.
   ![Enable suitetalk](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/Enable_suitetalk.png)

**4. Enable Authentication Methods**

   Under the **Manage Authentication** section, enable **Token-Based Authentication** and **OAuth 2.0**, as shown in the image.
   ![Enable Authentication](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/Enable_authentication.png)

**5. Manage Integration**

   Navigate to **Manage Integration**.

   ![Manage integration](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/Manage_integration.png)

**6.** The **Name** field must be provided and cannot be left empty.
     ![Validate Name](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/Integration_name.png)

**7.** Enable the **Authorization Code Grant** under OAuth 2.0 and enable **REST Web Services** and **RESTLETS**.
   ![Enable Oauth 2.0](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/Enable_Oauth.png)

**8.** Provide the **Redirect URL** (e.g., https://localhost) as shown in the image.
   ![Provide Redirect URL](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/Provide_redirect_url.png)

**9.** Finally **Save** it.
   ![Save Oauth](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/Save_Oauth.png)

**10.** Get **Client ID** and **Client Secret.**
   ![Client ID and Client Secret](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/ClientID_and_ClientSecret.png)


> **NOTE:** Save the client ID and client secret in Bold BI by following the [OAuth Configuration](/site-administration/data-connector-settings/oauth-configuration/) guide for more details.

## Updating the OAuth Configuration File

   **a)	Navigate to the OAuth Configuration File**
   1.	Access the following directory on the server:
   BoldServices\bi\dataservice\app_data\OAuthConfiguration.json

   **b)	Update the NetSuite Account ID**
   1. Open the file in a text editor (e.g., Notepad++, VS Code).
   2.	Locate the placeholder: **accountID**
   3.	Replace it with your **actual NetSuite account ID** (e.g., "1234567_SB1").

  **c)**	Replace <account_ID> with your actual NetSuite account ID respectively.
  ![Oauth accountID](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/Account_ID.png)
  **d)	Save the Changes**
   1.	Ensure the file retains its original .json format after editing.
   2.	Restart the Bold BI service for changes to take effect, if required.

## Connect the NetSuite connector in Bold BI.
**Note:** Oracle NetSuite supports two primary methods for establishing a connection:

1. **Resources** – Access individual record types through RESTful endpoints.

2. **SuiteQL** – Execute SQL-like queries to retrieve complex or filtered data across multiple records.

### Connect to Oracle NetSuite using Resources
#### Create Oracle NetSuite data source
After successful authentication, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Oracle NetSuite data source.
1. Enter a name and description (optional) for the data source.
2. Click on the **Resources** radio button to choose the Host Name and the Resources API Endpoints.
3. The **Host Name** should be in the format: **accountid.suitetalk.api.netsuite.com**, where **accountid** is your actual NetSuite Account ID.
4. Choose the **Resources** from the drop-down list provided.
5. Enter a valid Oracle NetSuite REST API endpoint in the URL textbox Typically, this is: `https://<ACCOUNT_ID>.suitetalk.api.netSuite.com/services/rest/record/v1`. Refer to the [Oracle NetSuite API documentation](https://system.netsuite.com/help/helpcenter/en_US/APIs/REST_API_Browser/record/v1/2024.2/index.html#) for more details.
6. Click **CUSTOM URL** to enter the URL manually.
7. Select the **GET** method for the REST API in the **Method** combo box.

   ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/DataSourceView_Resources.png)

8. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
9. Select **JSON** data type in the **Data Format** combo box.
10. The authentication type will be set to **Oracle NetSuite** automatically since OAuth is used for authenticating with Oracle NetSuite account.
   ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/DataSourceView_connectedas_Resources.png)

### Connect to Oracle NetSuite using SuiteQL
#### Create Oracle NetSuite data source
After successful authentication, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Oracle NetSuite data source.
1. Enter a name and description (optional) for the data source.
2. Click on the **SuiteQL** radio button to choose the Host Name or to enable the custom URL.
3. The **Host Name** should be in the format: **accountid.suitetalk.api.netsuite.com**, where **accountid** is your actual NetSuite Account ID.
4. Enter the SuiteQL endpoint URL in the URL textbox.    Typically, this is: `https://<ACCOUNT_ID>.suitetalk.api.NetSuite.com/services/rest/query/v1/suiteql`. Refer to the [Getting Started with SuiteQL in Oracle NetSuite](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158394344595.html) for more details.
5. Click **CUSTOM URL** to enter the URL manually.
6. The query body must be passed in JSON format using the q key. For example:
   ```
   {
      "q": "SELECT name FROM customer"
   }
   ```

7. Select the **GET** method for the REST API in the **Method** combo box.

   ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/DataSourceView_SuiteQL.png)

8. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
9. Select **JSON** data type in the **Data Format** combo box.
10. The authentication type will be set to **Oracle NetSuite** automatically since OAuth is used for authenticating with Oracle NetSuite account.
   ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/DataSourceView_connectedas_SuiteQL.png)
You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.


#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call to the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

#### Accessing Resource Endpoints
1. For instance, to query about the specific daily reach details, query the appropriate Oracle NetSuite REST endpoint with the required parameters, as specified in the  [Oracle NetSuite Api Documentation](https://system.netsuite.com/help/helpcenter/en_US/APIs/REST_API_Browser/record/v1/2024.2/index.html#).

Replace it in the URL to query for reach details.

`https://<accountid>.suitetalk.api.NetSuite.com/services/rest/record/v1`
For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://system.netsuite.com/help/helpcenter/en_US/APIs/REST_API_Browser/record/v1/2024.2/index.html#)

#### Executing SuiteQL Queries
1. For instance, to query specific data using SuiteQL, use the SuiteQL endpoint along with the required SQL query in the Query field, as specified in the [Getting Started with SuiteQL in Oracle NetSuite](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158394344595.html).

Replace it in the URL to query for reach details.

`https://<ACCOUNT_ID>.suitetalk.api.NetSuite.com/services/rest/query/v1/suiteql`

For complete details on the SuiteQL query endpoint and supported operations, refer to the official [NetSuite SuiteTalk REST Web Services documentation](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158394344595.html)

### Sample queries

#### Accessing Resource Endpoints
**Account**
	
`https://<ACCOUNT_ID>.suitetalk.api.NetSuite.com/services/rest/record/v1/account`

#### Executing SuiteQL Queries
```
   {
      "q": "SELECT tranid, entity, amount FROM transaction"
   }
```


### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Facebook Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/oracle-netsuite/ManageDS.png)

## Related links

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)