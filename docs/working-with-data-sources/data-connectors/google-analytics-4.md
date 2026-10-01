---
layout: post
title: Google Analytics 4 Connector – Cloud BI | Bold BI Docs
description: Learn how to connect Google Analytics 4 through OAuth-based authentication with Bold BI Cloud and create data sources.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Google Analytics 4 data source
The Bold BI dashboard designer supports connecting to Google Analytics 4 web services through the REST API. 

## Choose Google Analytics 4 data source
To configure the Google Analytics 4 data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click on **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Google Analytics 4** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/GA4_Icon.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/GA4_Server.png)

## Authentication with Google Analytics 4
Use the following steps to authenticate with the Google Analytics 4 web service:

1. Click on the data source, which will prompt a login window. Enter the credentials of your Google Analytics 4 account to authorize.
2. Click on **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If permission is denied, the account will not be accessible from the dashboard.
   
3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. If you want to connect via a previously connected account, refer to the [Connected Accounts.](/working-with-data-sources/data-connectors/google-analytics/#connected-accounts-for-oauth-data-sources).

   > **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Google Analytics 4
### Create Google Analytics 4 data source
After successful authentication, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Google Analytics 4 data source.
1. Enter a name and description (optional) for the data source.
2. Select the account and property value.
3. You can choose a specific start date and end date using the date picker controls provided. If you select the launch date option, the initial launch date of Google Analytics 4 will be considered as the start date for the API. If no end date option is chosen, the current date will be used as the end date to pull data up to date during data source creation and refresh.
4. Choose multiple metrics and dimensions to replace in Raw Body.
5. Click Custom URL to enter the URL and Raw Body manually. Refer to the [Google Analytics 4 API documentation](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1beta/accountSummaries) for more details.
    URL Example:`https://analyticsadmin.googleapis.com/v1beta/{entity=properties/*}:runAccessReport`

    Raw Body Example: `[{"dateRanges":[{"startDate":"2020-11-04","endDate":"2023-05-03"}],"dimensions":[{"name":"deviceCategory"}],"metrics":[{"name":"sessions"}]}]`
    
6. By default, **PUT** method for the REST API in the **Method** combo box.
7. In **Page(s)**, enter the maximum number of rows fetched from the Google Analytics 4 data source. This value is used to fetch the data from the Google Analytics 4 data source via pagination.
8. Choose a time interval for the **Refresh Settings** using the combo box to trigger the Reset API request periodically to keep the data in sync with our dashboard.
9. Select **JSON** data type in the **Data Format** combo box.
10. The authentication type will be automatically set to **Google Analytics 4** since OAuth is used for authenticating with the Google Analytics 4 account.

      ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/GA4_Preview.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

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
A period will pass before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never.’
</td>
</tr>
<tr>
<td><b>Dimensions/Metrics</b></td>
<td>Dimension/Metrics may require additional input sometimes</td>
</tr>
</table>

### Setting up the URL and Raw Body

1. The URL is generated automatically once the properties of your account are selected.

     URL Example:`https://analyticsdata.googleapis.com/v1beta/<GA4_PropertyID>:runReport`
2. Generate Raw Body for Google Analytics 4 by selecting the required start date, end date, Metrics, and Dimensions from the Bold BI.

   Example: [{"dateRanges":[{"startDate":"<:startDate>","endDate":"<:endDate>"}],"dimensions":[{"name":"<:dimensions>"}],"metrics":[{"name":"<:metrics>"}]}]`({"dateRanges":[{"startDate":"2020-11-04","endDate":"2023-05-03"}],"dimensions":[{"name":"eventName"}],"metrics":[{"name":"eventCount"}]})`  

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties)

### Sample Raw Body
**Event Count by Event Name:**

[{"dateRanges":[{"startDate":"2020-11-04","endDate":"2023-05-03"}],"dimensions":[{"name":"eventName"}],"metrics":[{"name":"eventCount"}]}]

**Sessions by Device Type:**

[{"dateRanges":[{"startDate":"2020-11-04","endDate":"2023-05-03"}],"dimensions":[{"name":"deviceCategory"}],"metrics":[{"name":"sessions"}]}]

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
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

>**NOTE**: To obtain the client ID and client secret for the Google-related data sources, Refer to the [Google OAuth Documentation](/working-with-data-sources/data-connectors/gmail/#how-to-obtain-the-google-client-id-and-client-secret).

## Connecting Google Ads Data Source using Google Analytics 4 (GA4)
With the deprecation of Universal Analytics, Google Analytics 4 (GA4) is the standard analytics platform. Google Ads integration is now handled within GA4, and Bold BI retrieves this data via the GA4 connector.

>**NOTE**: Ensure that Google Ads is properly linked to GA4 before attempting to access Ads data in Bold BI.

### Link Google Ads with Google Analytics 4 (GA4)

In order to access Google Ads data in Bold BI, it is necessary to link your Google Ads account with your Google Analytics 4 (GA4) property. This linkage enables GA4 to gather and provide Google Ads campaign information

1. Sign in to Google Analytics 4 (GA4) using the Google account that has access to both the required GA4 property and the associated Google Ads account.

2. From the Google Analytics home page, click **Admin** (gear icon) in the lower-left corner and confirm that the correct GA4 property is selected.

![GA4 Admin Panel](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/GA4_adminpanel.png)

3. Under the **Property** column, click **Google Ads Links** to manage the integration between Google Analytics 4 and Google Ads.

4. Click **Link** to begin the process of linking a Google Ads account with the selected GA4 property.

![Links Google Ads Account](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/ga4linkgoogle.png)

5. Select the appropriate Google Ads account from the list, review the available linking settings, and configure them according to your requirements.

6. Click **Submit** to complete the process and successfully link the Google Ads account with Google Analytics 4.

> **NOTE:** This step is mandatory. Without linking Google Ads to GA4, Google Ads data will not be available in Bold BI.

### Enable Auto-Tagging in Google Ads

1. Sign in to Google Ads using the Google account that has administrative or standard access to the required Google Ads account.

2. Navigate to the **Admin** section and select **Account Settings** to access configuration options for the Google Ads account.

3. Enable **Auto-tagging** to allow Google Analytics 4 to automatically tag and track Google Ads campaign data accurately.
![Auto Tagging Enabled](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/autoTaggingEnabled.png)

> **NOTE:** Auto-tagging is required to ensure accurate campaign tracking and proper attribution of Google Ads data in Google Analytics 4.

### Required Access Permissions for Google Analytics (GA4) and Google Ads
#### Google Analytics (GA4)

1. Sign in to Google Analytics using the Google account that has administrative access to the required GA4 property.

2. Click **Admin** (⚙️ icon) located at the bottom-left corner of the Google Analytics interface.

![GA4 Admin panel](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/PathToAdduser.png)

3. Under the **Property** column, select **Property Access Management** to manage user permissions for the selected GA4 property.

4. Click **Add Users** to begin adding a new user to the property.

![Add user to GA4](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/AddUserGA4.png)

5. Enter the user’s email address and assign an access role of **Viewer** or higher based on the required permission level.

![Provide role to user ](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/AccessAG4User.png)

6. Click **Add** to grant access to the user for the GA4 property.

#### Google Ads

1. Sign in to Google Ads using a Google account with administrator or standard access to the required Google Ads account.

2. Click **Admin** (⚙️ icon) located at the bottom-left corner of the Google Ads interface.

3. Select **Access and Security** to manage user access permissions.

4. Click **Add** to invite a new user to the Google Ads account.

![Add user to Ads ](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/AdduserAds.png)

5. Enter the user’s email address and assign an appropriate role such as **Standard** or **Admin**.

![Add user to Ads ](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/AcessRoleAds.png)

6. Click **Send Invitation** and have the user accept the invitation received via email to complete the access provisioning process.

### Configure Google Ads Data in Google Analytics 4 Data Source

After completing the access permissions and linking setup, you can now configure the Google Analytics 4 connector in Bold BI to retrieve Google Ads data.

> **NOTE:** The connection between Google Analytics 4 and Bold BI is already established in the previous sections. The following steps explain how to configure and retrieve Google Ads data using that connection.

#### Configure Data for Google Ads

To retrieve Google Ads data, you can configure the connector in two ways:

#### Option 1: Standard Dimensions & Metrics

Use the built-in configuration UI in Bold BI to select commonly used fields.

**Dimensions**
- `campaignId`
- `source`
- `medium`

**Metrics**
- `Sessions`
- `totalUsers`

This option is recommended for quick setup and standard reporting.

#### Option 2: Custom URL & Raw Body JSON

If you need more control or want to directly query the GA4 API, use a custom request.

 1. Click Custom URL to enter the URL and Raw Body manually. Refer to the [Google Analytics 4 API documentation](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1beta/accountSummaries) for more details.
    URL Example:`https://analyticsdata.googleapis.com/v1beta/<GA4_PropertyID>:runReport`

    Raw Body Example: `[{"dateRanges":[{"startDate":"2020-11-04","endDate":"2023-05-03"}],"dimensions":[{ "name": "campaignName" },{ "name": "source" },{ "name": "medium" }],"metrics":[{ "name": "Sessions" },{ "name": "totalUsers" }]}]`

    ![Add user to Ads ](/static/assets/working-with-datasource/data-connectors/images/GoogleAnalytics4/config_GA4_WithAdsData.png)
    
> **NOTE:** Replace <GA4_PropertyID> with your actual GA4 property ID. You can modify dateRanges, dimensions, and metrics based on your reporting needs. Use Preview & Connect in Bold BI to validate and load the data.


## Related links

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)


[Google Analytics 4 Integration](https://www.boldbi.com/integrations/google-analytics?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigoolgleanalyticsintegration)

[How to set up OAuth 2.0 authorization to access Google applications in Bold BI](https://www.boldbi.com/kb/security/how-to-set-up-oauth2-authorization-to-access-google-applications)
