---
layout: post
title: Google Ads – Cloud BI Data Connector | Bold BI Learning
description: Learn how to connect your Google Ads service account through OAuth-based authentication with Bold BI Cloud and create data source. 
platform: bold-bi
documentation: ug
---

# Google Ads Data Source
Bold BI dashboard designer supports connecting Google Ads web services through REST API.

> **NOTE:**  If you want to connect **Google Ads** data source, your account must be linked to Google Analytics.

## Choose Google Ads Data Source
To configure the Google Ads data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

  ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **Create New** to launch a new connection from the connection panel.
3. Select the **Google Ads** connection in the connection panel.

  ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleAds/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Sources** from the data sources page.

  ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleAds/ChooseDS_server.png)

## Authentication with Google Ads
Use the following steps to authenticate with the Google Ads web service:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Google Ads account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.

3. Set a name to identify the account and then click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect through an already connected account, refer to the [Connected Accounts](/cloud-bi/working-with-data-source/data-connectors/google-ads/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Google Ads
### Create Google Ads data source
After the successful authentication, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create a Google Ads data source.
1. Enter a name and description (optional) for the data source.
2. Choose your metrics and dimension or enter valid URL in the custom URL textbox. Refer the [Google Ads API documentation](https://developers.google.com/analytics/devguides/config/mgmt/v3/mgmtReference/) for more details.

    Example: [https://www.googleapis.com/analytics/v3/data/ga?ids=&lt;:id&gt;&start-date=&lt;:startDate&gt;&end-date=&lt;:endDate&gt;&metrics=ga:users,ga:sessions,ga:pageviews&dimensions=ga:month,ga:year&sort=-ga:month](https://www.googleapis.com/analytics/v3/data/ga?ids=%3c:id%3e&start-date=%3c:startDate%3e&end-date=%3c:endDate%3e&metrics=ga:users,ga:sessions,ga:pageviews&dimensions=ga:month,ga:year&sort=-ga:month)
3. Select the **GET** method for the REST API in the **Method** combo box.
4. In-**Page(s)**, enter the maximum number of pages to be fetched from the Google Ads data source. This value is used to fetch the data from Google Ads data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select the **JSON** data type in the **Data Format** combo box.
7. The authentication type will be set to **Google Ads** automatically because OAuth is used for authenticating with the Google Ads account.

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

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

  <b>Simple mode </b>: Provides an interface to build a query that retrieves data from the Google Ads account.<br>
  <b>Advanced mode </b>: You can create your query or make use of the [Google Analytics Graph API Query Explorer](https://ga-dev-tools.appspot.com/query-explorer/).

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
Period before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data,then choose ‘Never’.
</td>
</tr>
<tr>
<td><b>Dimensions or Metrics</b></td>
<td>Dimension or Metrics may require additional input sometimes</td>
</tr>
</table>

> **NOTE:**  If you have any modification in the prepared URL, Select the Custom URL check box and edit the URL. You can use the Google query explorer tool to prepare the URL **Query Explorer** .

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of the JSON data retrieved from the Google Ads Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in the grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

 ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleAds/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleAds/ManageDS.png)

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[Google Ads Limitations to build query](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#largeDataResults)

[Google Ads Integration](https://www.boldbi.com/integrations/google-ads?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigoogleadsintegration)