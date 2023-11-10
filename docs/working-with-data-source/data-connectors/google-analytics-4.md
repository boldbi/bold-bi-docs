---
layout: post
title: Google Analytics 4 Connector – Cloud BI | Bold BI Docs
description: Learn how to connect Google Analytics 4 through OAuth-based authentication with Bold BI Cloud and create data sources.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Google Analytics 4 data source
Bold BI dashboard designer supports connecting Google Analytics 4 web services through REST API. 

## Choose Google Analytics 4 data source
To configure the Google Analytics 4 data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Google Analytics 4** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/GA4_Icon.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/GA4_Server.png)

## Authentication with Google Analytics 4
Use the following steps to authenticate with Google Analytics 4 web service:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Google Analytics 4 account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.
   
3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect via an already connected account, refer to the [Connected Accounts.](/working-with-data-source/data-connectors/google-analytics/#connected-accounts-for-oauth-data-sources).

   > **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Google Analytics 4
### Create Google Analytics 4 data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Google Analytics 4 data source.
1. Enter a name and description (optional) for the data source.
2. Select the account and property value.
3. You can choose a specific date as a start date and end date, respectively, using the date picker controls given. If you choose the launch date option, Google Analytics 4 initial launch date will be considered as the start date for the API. Similarly, if no end date option is selected, the current date will be passed as the end date to pull data up to date during data source creation and refresh.
4. You can choose multiple metrics and dimensions which will replace in Raw Body.
5. Click Custom URL to enter the URL and Raw Body manually. Refer to the [Google Analytics 4 API documentation](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1beta/accountSummaries))) for more details.
    URL Example:[https://analyticsdata.googleapis.com/v1beta/<GA4_PropertyID>:runReport](https://analyticsdata.googleapis.com/v1beta/<GA4_PropertyID>:runReport)

    Raw Body Example: `[{"dateRanges":[{"startDate":"2020-11-04","endDate":"2023-05-03"}],"dimensions":[{"name":"deviceCategory"}],"metrics":[{"name":"sessions"}]}]`
    
6. By default, **PUT** method for the REST API in the **Method** combo box.
7. In **Page(s)**, enter the maximum number of rows fetched from the Google Analytics 4 data source. This value is used to fetch the data from the Google Analytics 4 data source via pagination.
8. Choose a time interval for the **Refresh Settings** using the combo box to trigger the Reset API request periodically to keep the data in sync with our dashboard.
9. Select **JSON** data type in the **Data Format** combo box.
10. The authentication type will be automatically set to **Google Analytics 4** since OAuth is used for authenticating with the Google Analytics 4 account.

      ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/GA4_Preview.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-source/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td><b>Accessing API</b></td>
<td>

For API access, ensure you have the [Read and Analyze](https://support.google.com/analytics/answer/2884495) permissions.

</td>
</tr>
<td><b>Modes</b></td>
<td>

  <b>Simple mode </b>: Provides an interface to build a query that retrieves data from the Google Analytics 4 account.<br>
 
</td>
</tr>
<tr>
<td>
Page(s)
</td>
<td>
Most REST APIs return only fewer data on a single API request. To pull the amount of data you need, set a value in this field. 
Pagination is handled internally and will fetch the amount of data you need.
</td>
</tr>
<tr>
<td>
Refresh Settings
</td>
<td>
Period before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never.’
</td>
</tr>
<tr>
<td><b>Dimensions/Metrics</b></td>
<td>Dimension/Metrics may require additional input sometimes</td>
</tr>
</table>

### Setting up the URL and Raw Body

1. URL is prepared automatically once the properties of your account are selected.

     URL Example:[https://analyticsdata.googleapis.com/v1beta/<GA4_PropertyID>:runReport](https://analyticsdata.googleapis.com/v1beta/<GA4_PropertyID>:runReport)
2. Generate Raw Body for Google Analytics 4 by selecting the required start date, end date, Metrics, and Dimensions from the Bold BI.

   Example: [{"dateRanges":[{"startDate":"<:startDate>","endDate":"<:endDate>"}],"dimensions":[{"name":"<:dimensions>"}],"metrics":[{"name":"<:metrics>"}]}]`({"dateRanges":[{"startDate":"2020-11-04","endDate":"2023-05-03"}],"dimensions":[{"name":"eventName"}],"metrics":[{"name":"eventCount"}]})`  

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties)

### Sample Raw Body
**Event Count by Event Name:**

[{"dateRanges":[{"startDate":"2020-11-04","endDate":"2023-05-03"}],"dimensions":[{"name":"eventName"}],"metrics":[{"name":"eventCount"}]}]

**Sessions by Device Type:**

[{"dateRanges":[{"startDate":"2020-11-04","endDate":"2023-05-03"}],"dimensions":[{"name":"deviceCategory"}],"metrics":[{"name":"sessions"}]}]

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Google Analytics 4 Rest API request. This dialog displays a list of schemas in Treeview and their corresponding values in the grid for preview. Select the required schema(s) from Treeview to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
    ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/GA4_Account.png)

You can edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics/ManageDS.png)

>**NOTE**: To obtain the client ID and client secret for the Google-related data sources, Refer to the [Google OAuth Documentation](/working-with-data-source/data-connectors/gmail/#how-to-obtain-the-google-client-id-and-client-secret).

## Related links

[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)


[Google Analytics 4 Integration](https://www.boldbi.com/integrations/google-analytics?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigoolgleanalyticsintegration)

[How to set up OAuth 2.0 authorization to access Google applications in Bold BI](https://www.boldbi.com/kb/security/how-to-set-up-oauth2-authorization-to-access-google-applications)
