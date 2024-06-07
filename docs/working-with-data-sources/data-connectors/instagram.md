---
layout: post
title: Instagram Data Connector for Embedded Dashboards | Bold BI Docs
description: Learn how to connect Instagram web service using OAuth-based authentication through REST API with Bold BI to prepare the dashboards and embed them in your app.
platform: bold-bi
documentation: ug
---

# Connect Bold BI to Instagram data source
The Bold BI dashboard designer supports connecting to Instagram web services through the REST API. 

> **Note:** The Instagram data source is available in On-Premises Deployment, but not in the Syncfusion Managed Cloud Server.

## Choose Instagram data source
To configure the Instagram data source, follow the given steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Instagram** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Instagram/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Instagram/ChooseDS_Server.png)

## Authenticate with Instagram
Follow these steps to authenticate with the Instagram web service:

1. Click on the Data Source to open a login window. Enter your Instagram account credentials to authorize access.
2. Click on **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:** If permission is denied, the account will not be accessible from the dashboard.

3. Assign a name to the account for identification purposes and click **Next**.
4. You have successfully authorized your connection. Click **Connect** to proceed with the data source connection.
5. For connect using an existing connected account, refer to [Connected Accounts](/working-with-data-sources/data-connectors/instagram/#connected-accounts-for-oauth-data-sources).

> **NOTE:** To connect to another account click **Connect New Account.**


## Connect to Instagram
### Create Instagram data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow the given steps to create Instagram data source.
1. Enter a name and description for the data source (optional).
2. Choose the radio button **Insights** or **Media** to select the required API Endpoints.
3. Click the **Insights** radio button to choose the **Pages** in your Instagram account and the **Insights** API Endpoints.
4. Click the **Media** radio button to choose the **Pages** in your Instagram account and the **Media Id** API Endpoints.
5. Enter a valid Instagram REST API endpoint in the URL textbox. Refer to the [Instagram API documentation](https://developers.facebook.com/docs/instagram-api/#instagram-graph-api) for more details.
6. Click the **Custom Url** to enter the URL manually.   
7. Select the **GET** method for the REST API in the **Method** combo box.
8. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
9. Select the **JSON** data type in **Data Format** combo box.
10. The authentication type will be set to **Instagram** automatically since OAuth is used for authenticating with Instagram account.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/Instagram/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call to the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL
1. For instance, to query about the specific daily reach details, query the <i>/ACCESS_TOKEN</i> endpoint with required parameters as specified in [Instagram Documentation](https://developers.facebook.com/docs/instagram-api/#instagram-graph-api).

Replace it in the URL for query reach details:

`https://graph.facebook.com/v6.0/<:business-account-id>/insights?metric=reach&period=day`

### Sample queries
1. Use the below query to retrieve the **Business Info** information for your connected account.
	
   `https://graph.facebook.com/v6.0/?fields=biography,id,followers_count,ig_id,follows_count,media_count,name,profile_picture_url,username,website,media,recently_searched_hashtags,stories,tags`

2. Use the below query to retrieve the **Audience City** information for your connected account.

   `https://graph.facebook.com/v6.0//insights?metric=audience_city&period=lifetime`

### Preview and data import
* Click the **Preview & Connect** to connect with the configurations that have been set.
* The Choose Tables(s) dialog opens. The schema represents the key fields of JSON data retrieved from Instagram Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/Instagram/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/Instagram/ManageDS.png)

## Related links

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Instagram Integration](https://www.boldbi.com/integrations/instagram)
