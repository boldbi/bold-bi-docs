---
layout: post
title: Google Analytics – Cloud BI Connector | Bold BI Learning
description: Learn how to connect Google Analytics through OAuth-based authentication with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Google Analytics data source
The Bold BI dashboard designer supports connecting to Google Analytics web services through the REST API. 

## Choose Google Analytics data source
To configure the Google Analytics data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Google Analytics** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics/ChooseDS_Server.png)

## Authentication with Google Analytics
Use the following steps to authenticate with the Google Analytics web service:

1. Click on the data source, which will prompt a login window. Enter the credentials of your Google Analytics account to authorize.
2. Click on **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If permission is denied, the account will not be accessible from the dashboard.
   
3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via an already connected account, refer to [Connected Accounts](/working-with-data-sources/data-connectors/google-analytics/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Google Analytics
### Create Google Analytics data source
After successful authentication, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Google Analytics data source.
1. Enter a name and description (optional) for the data source.
2. Select account, properties, and view value.
3. You can choose a specific date as a start date and end date respectively by using the date picker controls given. If you choose the launch date option, Google analytics initial launch date will be considered as the start date for the API. Similarly, if no end date option is selected, current date will be passed as the end date to pull data up to date during data source creation and data source refresh.
4. You can choose multiple metrics and dimensions for which will replace in URL.

> **NOTE:**  Google restricted to connect only up to 7 dimensions in single API call (single data source).

5. Click custom URL if you want to enter URL manually. Refer to the [Google Analytics API documentation](https://developers.google.com/analytics/devguides/config/mgmt/v3/mgmtReference/) for more details.

    Example: `https://www.googleapis.com/analytics/v3/data/ga?ids=<:id>&start-date=<:startDate>&end-date=<:endDate>&metrics=ga:users,ga:sessions,ga:pageviews&dimensions=ga:month,ga:year&sort=-ga:month`
    
6. Select the **GET** method for the REST API in the **Method** combo box.
7. In **Page(s)**, enter the maximum number of rows to be fetched from the Google Analytics data source. This value is used to fetch the data from Google Analytics data source via pagination.
8. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard. 
9. Select **JSON** data type in the **Data Format** combo box.
10. The authentication type will be set to **Google Analytics** automatically since OAuth is used for authenticating with the Google Analytics account.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics/Google-Analytics-UI.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

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

  <b>Simple mode </b>: The interface allows users to construct a query for retrieving data from their Google Analytics account.<br>
  <b>Advanced mode </b>: You can create your own query or make use of [Google Analytics Graph API Query Explorer](https://ga-dev-tools.appspot.com/query-explorer/).

</td>
</tr>
<tr>
<td>
Page(s)
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
<tr>
<td><b>Dimensions/Metrics</b></td>
<td>Dimension/Metrics may require additional input sometimes</td>
</tr>
</table>

### Setting up the URL

1. Generate query for Google Analytics using [Query Explorer](https://ga-dev-tools.appspot.com/query-explorer/).
2. Copy the Query and replace in  URL field of Google Analytics data source in Bold BI dashboards.

   Example: [https://www.googleapis.com/analytics/v3/data/ga?ids=<:id&>&start-date=<:startDate>&end-date=<:endDate>&metrics=ga:users,ga:sessions,ga:pageviews&dimensions=ga:month,ga:year&sort=-ga:month](https://www.googleapis.com/analytics/v3/data/ga?ids=%3c:id%3e&start-date=%3c:startDate%3e&end-date=%3c:endDate%3e&metrics=ga:users,ga:sessions,ga:pageviews&dimensions=ga:month,ga:year&sort=-ga:month)

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developers.google.com/analytics/devguides/reporting/core/v3/)

### Sample queries
**Traffic By Channel**

`https://www.googleapis.com/analytics/v3/data/ga?ids=ga:5645437&dimensions=ga:date,ga:channelGrouping&metrics=ga:sessions&start-date=2013-04-03&end-date=2017-04-04`

**Sessions by Device Type**

`https://www.googleapis.com/analytics/v3/data/ga?ids=ga:126361530&dimensions=ga:deviceCategory,ga:date&metrics=ga:sessions&start-date=2013-04-03&end-date=2017-04-04`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Google Analytics Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics/ManageDS.png)

>**NOTE**: To obtain the client ID and client secret for the Google-related data sources, Refer to the [Google OAuth Documentation](/working-with-data-sources/data-connectors/gmail/#how-to-obtain-the-google-client-id-and-client-secret). 


## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Google Analytics Limitations to build query](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#largeDataResults)

<a href="https://www.boldbi.com/integrations/google-analytics?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigoolgleanalyticsintegration" target="_blank">Google Analytics Integration</a>

<a href="https://www.boldbi.com/kb/security/how-to-set-up-oauth2-authorization-to-access-google-applications" target="_blank">How to set up OAuth 2.0 authorization to access Google applications in Bold BI</a>
