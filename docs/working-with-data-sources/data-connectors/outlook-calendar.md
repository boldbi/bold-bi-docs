---
layout: post
title: Outlook Calendar – Cloud BI Connector | Bold BI DocS
description: Learn how to connect Microsoft Outlook Calendar web service using OAuth-based authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Microsoft Outlook calendar data source
The Bold BI dashboard designer supports connecting to Microsoft Outlook calendar web services through the REST API. 

## Choose Microsoft Outlook calendar data source
To configure the Microsoft Outlook calendar data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Microsoft Outlook calendar** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/OutlookCalendar/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/OutlookCalendar/ChooseDS_Server.png)

## Authentication with Microsoft Outlook calendar
Use the following steps to authenticate with the Microsoft Outlook calendar web service:

1. Click on the data source, which will prompt a login window. Enter the credentials of your Microsoft Outlook Calendar account to authorize.
2. Click on **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:** If permission is denied, the account will not be accessible from the dashboard.

3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect using an existing connected account, refer [Connected Accounts](/working-with-data-sources/data-connectors/outlook-calendar/#connected-accounts-for-oauth-data-sources).

> **NOTE:** To connect to another account click **Connect New Account.**


## Connect to Microsoft Outlook calendar
### Create Microsoft Outlook calendar data source
After successful authentication, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Microsoft Outlook calendar data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Microsoft Outlook calendar REST API endpoint in the URL textbox. Refer to the [Microsoft Outlook calendar API documentation](https://docs.microsoft.com/en-us/graph/api/resources/event?view=graph-rest-1.0) for more details.

    Example: `https://graph.microsoft.com/v1.0/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location`

3. Select the **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Microsoft Outlook calendar data source. This value is used to fetch the data from Microsoft Outlook calendar data source via pagination.
5. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. The authentication type will be set to **Microsoft Outlook calendar** automatically since OAuth is used for authenticating with Microsoft Outlook Calendar account.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/OutlookCalendar/DataSourcesView.png)

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
1. For instance, to query the calendar details, query the <i>/calendarGroups</i> endpoint.
3. From the listed information get the specific *calendar id*.

Replace it in the URL to query *Events* of particular calendar object `https://graph.microsoft.com/v1.0/me/calendars/calendar_id/events`.

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/event)

### Sample queries
**List Calendar Groups**

`https://graph.microsoft.com/v1.0/me/calendarGroups`

**List Views of a specific calendar from Calendar Groups**

`https://graph.microsoft.com/v1.0/me/calendarGroups/hcn65wnxinHbsk/calendars/ksnkew872whsjs/calendarView?startDateTime=2015-11-08T19:00:00.0000000&endDateTime=2015-11-09T19:00:00.0000000`

**List Events**

`https://graph.microsoft.com/v1.0/me/calendars/events`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Microsoft Outlook Calendar Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/OutlookCalendar/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/OutlookCalendar/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Graph API Throttling Limits](https://docs.microsoft.com/en-us/graph/throttling?toc=.%2Fref%2Ftoc.json&view=graph-rest-1.0)

[Outlook calendar Integration](https://www.boldbi.com/integrations/outlook-calendar?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbimsoutlookcalendarintegration)