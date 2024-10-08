---
layout: post
title: Google Calendar – Cloud BI Data Connector | Bold BI Docs
description: Learn how to connect Google Calendar data using OAuth-based authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Google Calendar data source
The Bold BI dashboard designer supports connecting to Google Calendar web services through the REST API. 

## Choose Google Calendar data source
To configure the Google Calendar data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Google Calendar** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/GoogleCalendar/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/GoogleCalendar/ChooseDS_server.png)

## Authentication with Google Calendar
To authenticate with the Google Calendar web service, follow these steps:

1. Click on the data source, which will prompt a login window. Enter the credentials of your Google Calendar account to authorize.
2. Click on **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:**  If permission is denied, the account will not be accessible from the dashboard.

3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect using an existing connected account, refer to [Connected Accounts](/working-with-data-sources/data-connectors/google-calendar/#connected-accounts-for-oauth-data-sources).

> **NOTE:**  To connect to another account click **Connect New Account.**


## Connect to Google Calendar
### Create Google Calendar data source
After successful authentication, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Google Calendar data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Google Calendar REST API endpoint in the URL textbox. Refer to the [Google Calendar API documentation](https://developers.google.com/calendar/v3/reference/) for more details.

    Example: `https://www.googleapis.com/calendar/v3/calendars/%3c:calendarId%3e/events` 
3. Select the **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Google Calendar data source. This value is used to fetch the data from Google Calendar data source via pagination.
5. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. The authentication type will be set to **Google Calendar** automatically since OAuth is used for authenticating with the Google Calendar account.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/GoogleCalendar/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
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
</table>

### Setting up the URL
1. For instance, to query about the specific calendar details, query the <i>/calendarList</i> endpoint.
2. From the listed group information, get the particular calendar ID.

Replace it in the URL to query a particular calendar details:

`https://www.googleapis.com/calendar/v3/calendars/<:calendarId>`

### Sample queries
**CalendarList**

`https://www.googleapis.com/calendar/v3/users/me/calendarList`

**Access Control List (ACL)**

`https://www.googleapis.com/calendar/v3/calendars/hdbj27bdnsHBJ/acl`

**Events of specific calendar**

`https://www.googleapis.com/calendar/v3/calendars/%3c:calendarId%3e/events`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developers.google.com/calendar/v3/reference/)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Google Calendar Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/GoogleCalendar/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/GoogleCalendar/ManageDS.png)

>**NOTE**: To obtain the client ID and client secret for the Google-related data sources, Refer to the [Google OAuth Documentation](/working-with-data-sources/data-connectors/gmail/#how-to-obtain-the-google-client-id-and-client-secret). 


## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Google Calendar Limitations on batch request](https://developers.google.com/calendar/batch)

[Google Calendar Integration](https://www.boldbi.com/integrations/google-calendar?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigoolglecalendarintegration)

[How to set up OAuth 2.0 authorization to access Google applications in Bold BI](https://www.boldbi.com/kb/security/how-to-set-up-oauth2-authorization-to-access-google-applications)
