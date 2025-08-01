---
layout: post
title: Salesforce – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Salesforce using Rest API through OAuth-based authentication with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Salesforce data source
The Bold BI dashboard designer supports connecting to Salesforce web services through the REST API. 

## Choose Salesforce data source
To configure the Salesforce data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Salesforce** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Salesforce/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Salesforce/ChooseDS_Server.png)

## Authentication with Salesforce
To authenticate with the Salesforce web service, follow these steps:

1. Click on the data source, which will prompt a login window. Enter the credentials of your Salesforce account to authorize.
2. Click on **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If permission is denied, the account will not be accessible from the dashboard.

3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via an already connected account, refer to[Connected Accounts](/working-with-data-sources/data-connectors/salesforce/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Salesforce
### Create Salesforce data source
After successful authentication, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Salesforce data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid **SOQL Query** in the Query textbox. Refer to the [Salesforce API documentation](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_sosl_intro.htm) for more details.

    Example: `Select IsWon, Name FROM Opportunity LIMIT 5`

3. Click on Custom Url if you want to enter the SOQL query manually. Refer to the SOQL Query [documentation](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_searches_and_queries.htm) for more details.

 ![Salesforce Connection](/static/assets/working-with-datasource/data-connectors/images/Salesforce/salesforce-connection.png)

4. Choose a time interval by using the **Refresh Settings** button to trigger the Rest API request periodically in order to keep the data in sync with our dashboard.

You can also edit the connection information that is set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

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

### Sample queries

**Aggregate queries**

`select count(id) Total from opportunity`

**Fetch records based on condition including nested columns**

`Select IsWon, Name, Opportunity.Account.Name, Owner.Name, Owner.IsActive, Amount, CloseDate, CreatedDate, LastActivityDate, LastModifiedDate, StageName FROM Opportunity WHERE (CloseDate =THIS_YEAR OR CloseDate =LAST_YEAR) and (StageName = 'Closed Won')`

**Limit queries**

`Select IsWon, Account.Name FROM Opportunity LIMIT 5`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Data Preview dialog opens. This dialog displays the corresponding records which satisfies the provided SOQL query in grid for preview. To use the columns in designer, click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/Salesforce/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/Salesforce/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/Salesforce/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/Salesforce/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[]<a href="https://www.boldbi.com/integrations/salesforce?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbisalesforceintegration" target="_blank">Salesforce Integration</a>

<a href="https://www.boldbi.com/blog/measuring-email-campaign-performance-with-mailchimp-and-salesforce-crm-data-using-bold-bi" target="_blank"> Blog Post</a>

<a href="https://www.boldbi.com/kb/security/how-to-configure-connected-app-in-salesforce" target="_blank">How to configure connected app in Salesforce</a>