---
layout: post
title: Salesforce – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Salesforce using Rest API through OAuth-based authentication with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Salesforce data source
Bold BI dashboard designer supports connecting Salesforce web services through Rest API. 

## Choose Salesforce data source
To configure the Salesforce data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Salesforce** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/Salesforce/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/Salesforce/ChooseDS_Server.png)

## Authentication with Salesforce
Use the following steps to authenticate with Salesforce web service:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Salesforce account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.

3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via already connected account, refer [Connected Accounts](/cloud-bi/working-with-data-source/data-connectors/salesforce/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Salesforce
### Create Salesforce data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Salesforce data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid **SOQL Query** in the Query textbox. Refer the [Salesforce API documentation](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_sosl_intro.htm) for more details.

    Example: `Select IsWon, Name FROM Opportunity LIMIT 5`

3. Click Custom Url if you want to enter the SOQL query manually. Refer the SOQL Query [documentation](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_searches_and_queries.htm) for more details.

 ![Salesforce Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/Salesforce/salesforce-connection.png)

4. Choose a time interval using **Refresh Settings** button to trigger the Rest API request periodically to keep the data in sync with our dashboard.

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
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
* Click **Preview & Connect** to connect with the configurations set.
* The Data Preview dialog opens. This dialog displays the corresponding records which satisfies the provided SOQL query in grid for preview. To use the columns in designer, click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/Salesforce/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/Salesforce/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/cloud/working-with-datasource/data-connectors/images/Salesforce/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/cloud/working-with-datasource/data-connectors/images/Salesforce/ManageDS.png)

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[Salesforce Integration](https://www.boldbi.com/integrations/salesforce?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbisalesforceintegration)

[Blog Post](https://www.boldbi.com/blog/measuring-email-campaign-performance-with-mailchimp-and-salesforce-crm-data-using-bold-bi)