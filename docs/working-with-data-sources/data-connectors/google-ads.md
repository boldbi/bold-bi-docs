---
layout: post
title: Google Ads – Cloud BI Data Connector | Bold BI Learning
description: Learn how to connect your Google Ads service account through OAuth-based authentication with Bold BI Cloud and create data source. 
platform: bold-bi
documentation: ug
---

# Google Ads Data Source
The Bold BI dashboard designer supports connecting to Google Ads web services through the REST API.

> **NOTE:**  If you want to connect a **Google Ads** data source, your account must be linked to Google Analytics.

## Choose Google Ads Data Source
To configure the Google Ads data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

  ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **Create New** to launch a new connection from the connection panel.
3. Select the **Google Ads** connection in the connection panel.

  ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/GoogleAds/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Sources** from the data sources page.

  ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/GoogleAds/ChooseDS_server.png)

## Authentication with Google Ads
Use the following steps to authenticate with the Google Ads web service:

1. Click on the data source, which will prompt a login window. Enter the credentials of your Google Ads account to authorize.
2. Click on **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If permission is denied, the account will not be accessible from the dashboard.

3. Set a name to identify the account and then click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect through an already connected account, refer to the [Connected Accounts](/working-with-data-sources/data-connectors/google-ads/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Google Ads
### Create Google Ads data source
After successful authentication, the configuration panel for the NEW DATA SOURCE opens. Follow the steps below to create a Google Ads data source.
1. Enter a name and description (optional) for the data source.
2. Select **account**, **properties**, and **view** value.
3. Choose a specific **start date** and **end date** using the date picker controls. If you select the launch date option, the initial launch date of the Google Ads will be considered as the start date for the API. If no end date option is selected, the current date will be used as the end date to pull data up to date during data source creation and refresh.
4. Select your **metrics** and **dimensions** or enter a valid URL in the **custom URL** text box. Refer to the [Google Ads API documentation](https://developers.google.com/analytics/devguides/config/mgmt/v3/mgmtReference/) for more details.

    Example: [https://www.googleapis.com/analytics/v3/data/ga?ids=&lt;:id&gt;&start-date=&lt;:startDate&gt;&end-date=&lt;:endDate&gt;&metrics=ga:users,ga:sessions,ga:pageviews&dimensions=ga:month,ga:year&sort=-ga:month](https://www.googleapis.com/analytics/v3/data/ga?ids=%3c:id%3e&start-date=%3c:startDate%3e&end-date=%3c:endDate%3e&metrics=ga:users,ga:sessions,ga:pageviews&dimensions=ga:month,ga:year&sort=-ga:month)
5. Select the **GET** method for the REST API in the **Method** combo box.
6. Enter the maximum number of pages to be fetched from the Google Ads data source in the **In-Page(s)** field. This value is used for data retrieval via pagination.
7. Choose a time interval for the **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
8. Select the **JSON** data type in the **Data Format** combo box.
9. The authentication type will be set to **Google Ads** automatically because OAuth is used for authenticating with the Google Ads account.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/GoogleAds/DataSourcesView.png)

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

  <b>Simple mode </b>: This interface allows users to construct a query that retrieves data from the Google Ads account.<br>
  <b>Advanced mode </b>: You can create your query or make use of the [Google Analytics Graph API Query Explorer](https://ga-dev-tools.appspot.com/query-explorer/).

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
A period will pass before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data,then choose ‘Never’.
</td>
</tr>
<tr>
<td><b>Dimensions or Metrics</b></td>
<td>Dimension or Metrics may require additional input sometimes</td>
</tr>
</table>

> **NOTE:**  If you need to make any modifications to the prepared URL, select the Custom URL checkbox and edit the URL. You can use the Google Query Explorer tool to prepare the URL.

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of the JSON data retrieved from the Google Ads Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in the grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

 ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/GoogleAds/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/GoogleAds/ManageDS.png)

>**NOTE**: To obtain the client ID and client secret for the Google-related data sources, Refer to the [Google OAuth Documentation](/working-with-data-sources/data-connectors/gmail/#how-to-obtain-the-google-client-id-and-client-secret).

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Google Ads Limitations to build query](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#largeDataResults)

<a href="https://www.boldbi.com/integrations/google-ads?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigoogleadsintegration" target="_blank">Google Ads Integration</a>

<a href="https://www.boldbi.com/blog/monitoring-ad-performance-in-a-google-ads-dashboard" target="_blank">Monitoring Ad Performance in a Google Ads Dashboard</a>
