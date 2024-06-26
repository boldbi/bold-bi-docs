---
layout: post
title: Harvest – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Harvest web service through REST API endpoint with Bold BI Cloud and create a data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Harvest data source
The Bold BI dashboard designer supports connecting to Harvest web services through the REST API. 

## Choose Harvest data source
To configure the Harvest data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Harvest** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Harvest/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Harvest/ChooseDS_Server.png)


## Create Harvest data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Harvest data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Harvest REST API endpoint in the URL textbox. Refer to the [Harvest API documentation](https://help.getharvest.com/api-v2/) for more details.

     Example: `https://<:your_sub_domain>.harvestapp.com/projects.json`   

3. Select the **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the harvest data source. This value is used to fetch the data from harvest data source via pagination.
5. Replace your **Access Token** and **Account Id** in the headers
6. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
7. Select **JSON** data type in **Data Format** combo box.
8. Choose one of the **Authentication Type** from the dropdown.
9. To connect based on the chosen Authentication, refer [Supported Authentication Types based on version APIs](/working-with-data-sources/data-connectors/harvest/#authentication-for-harvest).

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/Harvest/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Authentication for Harvest 

#### v1 APIs - Basic Authentication (UserName & Password)
Authenticate your Harvest account like below for v1 APIs:
1. Replace **&lt;:your_sub_domain&gt;** with your [domain name](/working-with-data-sources/data-connectors/harvest/#how-do-i-get-domain-name-for-connecting-harvest-data-source?).
2. Set **Authentication type** as *Basic http Authentication*. Enter a valid **UserName** and **Password**.

#### v2 APIs - Personal Access Token Authentication
Authenticate your Harvest account in one of the below ways:
   - [Personal Access Token in Headers](/working-with-data-sources/data-connectors/harvest/#personal-access-token-in-headers)
   - [Personal Access Token in Query String](/working-with-data-sources/data-connectors/harvest/#personal-access-token-in-query-string)

#### Personal Access Token in Headers
1. Use Headers for authenticating your account of v2 APIs as like below:
   - Set your [Personal Access Token](/working-with-data-sources/data-connectors/harvest/#how-do-i-get-personal-access-token-and-account-id-for-connecting-harvest-data-source) as value for `Authorization` in Header.
   - Set your Account ID for  `Harvest-Account-ID` in Header.
   - Set value for `User-Agent` in Header. Refer [Examples for User-Agent Values](/working-with-data-sources/data-connectors/harvest/#examples-of-user-agent).

      ![Headers](/static/assets/working-with-datasource/data-connectors/images/Harvest/Headers.png)

2. Set **Authentication type** as *None*.

#### Personal Access Token in Query String
1. Use Headers for authenticating your account for v2 APIs as like below:
   - Pass your `access token` and `account ID` in the query string as like below. 
   - Set value for `User-Agent` in Header. Refer [Examples for User-Agent Values](/working-with-data-sources/data-connectors/harvest/#examples-of-user-agent).

    Examples: `https://api.harvestapp.com/v2/users/me?access_token=<:access_token>&account_id=<:account_id>`

2. Set **Authentication type** as *None*.

#### Examples of User Agent 
Harvest requires to include `User-Agent` header in each request with below as values:
   - Name of your application
   - A link to your application or email address.

   Examples:
      - User-Agent : `JohnSmith` (john@abc.com)
      - User-Agent : `DemoApp` (demo@abc.com)

> **NOTE:**  Refer Authentication for [v1 APIs](https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/) and [v2 APIs](https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/).

#### How do I get Domain name for connecting Harvest data source?
1. Login to [Harvest](https://id.getharvest.com/harvest/sign_in) account. 
2. Go to *Settings*. Copy the web address and replace it in URL instead of *&lt;:your_sub_domain&gt;.harvestapp.com* or fetch the domain name from the website URL.

   ![Domain name](/static/assets/working-with-datasource/data-connectors/images/Harvest/DomainName.png)

#### How do I get Personal Access Token and Account ID for connecting Harvest data source?
1. Log in to the [Harvest Developer](https://id.getharvest.com/developers) page and create a Personal Access Token.
2. Once the Personal Access Token has been created, you will be able to see the Access Token, Account ID, and Account name.

   ![Personal Access Token](/static/assets/working-with-datasource/data-connectors/images/Harvest/PAT.png)

#### Additional information
<table width="600">
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

1. For instance, to get the expense_category details, query the <i>/expense_categories</i> endpoint.
2. From the listed information, get the ID of the specific expense_category.

   `https://<:sub_domain_name>.harvestapp.com/v2/expense_categories/<:expense_category_id>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://help.getharvest.com/api-v2/)

### Sample queries
**List of messages for an invoice**

`https://demo.harvestapp.com/v2/invoices/13150403/messages`

**List of Roles**

`https://demo.harvestapp.com/v2/roles`

**List of Tasks**

`https://demo.harvestapp.com/v2/tasks`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Harvest Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Harvest/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Harvest/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Harvest Rate Limits](https://help.getharvest.com/api-v2/introduction/overview/general/#rate-limiting)

[Harvest Integration](https://www.boldbi.com/integrations/harvest?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiharvestintegration)
