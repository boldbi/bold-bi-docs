---
layout: post
title: Google Analytics – Embedded  BI Connector | Bold BI Learning
description: Learn how to connect Google Analytics through OAuth-based authentication with Bold BI Embedded  and create data source.
canonical: "/cloud-bi/working-with-data-source/data-connectors/google-analytics/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Google Analytics data source
Bold BI dashboard designer supports connecting Google Analytics web services through REST API. 

## Choose Google Analytics data source
To configure the Google Analytics data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Google Analytics** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleAnalytics/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleAnalytics/ChooseDS_Server.png)

## Authentication with Google Analytics
Use the following steps to authenticate with Google Analytics web service:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Google Analytics account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.
   
3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via already connected account, refer [Connected Accounts](/embedded-bi/working-with-data-source/data-connectors/google-analytics/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Google Analytics
### Create Google Analytics data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Google Analytics data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Google Analytics REST API endpoint in the URL textbox. Refer the [Google Analytics API documentation](https://developers.google.com/analytics/devguides/config/mgmt/v3/mgmtReference/) for more details.

    Example: [https://www.googleapis.com/analytics/v3/data/ga?ids=&lt;:id&gt;&start-date=&lt;:startDate&gt;&end-date=&lt;:endDate&gt;&metrics=ga:users,ga:sessions,ga:pageviews&dimensions=ga:month,ga:year&sort=-ga:month](https://www.googleapis.com/analytics/v3/data/ga?ids=%3c:id%3e&start-date=%3c:startDate%3e&end-date=%3c:endDate%3e&metrics=ga:users,ga:sessions,ga:pageviews&dimensions=ga:month,ga:year&sort=-ga:month)    
3. Select **GET** method for the REST API in **Method** combo box.
4. In **Page(s)**, enter the maximum number of rows to be fetched from the Google Analytics data source. This value is used to fetch the data from Google Analytics data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. The authentication type will be set to **Google Analytics** automatically since OAuth is used for authenticating with Google Analytics account.

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td><b>Accessing API</b></td>
<td>

For API access, ensure that you have [Read and Analyze](https://support.google.com/analytics/answer/2884495) permissions

</td>
</tr>
<td><b>Modes</b></td>
<td>

  <b>Simple mode </b>: Provides an interface to build a query that retrieves data from the Google Analytics account.<br>
  <b>Advanced mode </b>: You can create your own query or make use of [Google Analytics Graph API Query Explorer](https://ga-dev-tools.appspot.com/query-explorer/).

</td>
</tr>
<tr>
<td>
Page(s)
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
<tr>
<td><b>Dimensions/Metrics</b></td>
<td>Dimension/Metrics may require additional input sometimes</td>
</tr>
</table>

### Setting up the URL

1. Generate query for Google Analytics using [Query Explorer](https://ga-dev-tools.appspot.com/query-explorer/).
2. Copy the Query and replace in  URL field of Google Analytics data source in Bold BI dashboards.

   Example: [https://www.googleapis.com/analytics/v3/data/ga?ids=&lt;:id&gt;&start-date=&lt;:startDate&gt;&end-date=&lt;:endDate&gt;&metrics=ga:users,ga:sessions,ga:pageviews&dimensions=ga:month,ga:year&sort=-ga:month](https://www.googleapis.com/analytics/v3/data/ga?ids=%3c:id%3e&start-date=%3c:startDate%3e&end-date=%3c:endDate%3e&metrics=ga:users,ga:sessions,ga:pageviews&dimensions=ga:month,ga:year&sort=-ga:month)  

### Sample queries
**Traffic By Channel:**

[https://www.googleapis.com/analytics/v3/data/ga?ids=ga:5645437&dimensions=ga:date,ga:channelGrouping&metrics=ga:sessions&start-date=2013-04-03&end-date=2017-04-04](https://www.googleapis.com/analytics/v3/data/ga?ids=ga:5645437&dimensions=ga:date,ga:channelGrouping&metrics=ga:sessions&start-date=2013-04-03&end-date=2017-04-04)

**Sessions by Device Type:**

[https://www.googleapis.com/analytics/v3/data/ga?ids=ga:126361530&dimensions=ga:deviceCategory,ga:date&metrics=ga:sessions&start-date=2013-04-03&end-date=2017-04-04](https://www.googleapis.com/analytics/v3/data/ga?ids=ga:126361530&dimensions=ga:deviceCategory,ga:date&metrics=ga:sessions&start-date=2013-04-03&end-date=2017-04-04)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Google Analytics Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleAnalytics/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleAnalytics/ManageDS.png)

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[Google Analytics Limitations to build query](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#largeDataResults)

[Google Analytics Integration](https://www.boldbi.com/integrations/google-analytics?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigoolgleanalyticsintegration)
