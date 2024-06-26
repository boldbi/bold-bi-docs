---
layout: post
title: Facebook – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Facebook web service using OAuth-based authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Facebook data source
The Bold BI dashboard designer supports connecting to Facebook web services through the REST API. 

## Choose Facebook data source
To configure the Facebook data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Facebook** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/facebook/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/facebook/ChooseDS_Server.png)

### How to Obtain the Facebook Client ID and Client Secret

> **Note:** Facebook OAuth credentials are required for the On-Premises Deployment but not needed in Syncfusion Managed Cloud Server.

1. Log in to your Facebook account [Facebook login](https://developers.facebook.com/).

    ![LogIn](/static/assets/working-with-datasource/data-connectors/images/facebook/logIn.png)
2. Click on **My Apps**.
    ![MyApps](/static/assets/working-with-datasource/data-connectors/images/facebook/my_apps.png)
3. Click on **Create App**.
    ![CreateApp](/static/assets/working-with-datasource/data-connectors/images/facebook/create_app.png)
4. Select the **Facebook Login** option and click on the **Next** button.
    ![CreateApp](/static/assets/working-with-datasource/data-connectors/images/facebook/create_next.png)
5. Fill in the **App Name** and click **Create app**.
    ![AppName](/static/assets/working-with-datasource/data-connectors/images/facebook/app_name.png)
6. Once the app is created, click on the **Facebook Login** button located on the left-hand side of the app dashboard. Then, navigate to the **settings** section.
7. Insert the following URLs in the **Valid OAuth Redirect URIs**, replacing {{HOST_URL}} with your base URL. The Bold BI redirect URL should be added in the proper format as required. Please refer to this URL for more information structure, `https://<:yourdomain>/bi/designer/v1.0/oauth/agent`.
    ![Redirect](/static/assets/working-with-datasource/data-connectors/images/facebook/Redirect.png)
8. Navigate to the **Settings** tab on the left-hand side in the app dashboard and go to the **Basic** section.
    ![AppDashboard](/static/assets/working-with-datasource/data-connectors/images/facebook/basic.png)
9. The **App ID** and **App Secret**s are displayed at the top of the "Basic" section. These are your **client ID** and **client secret**, respectively.
    ![AppId](/static/assets/working-with-datasource/data-connectors/images/facebook/app_Id.png)
> **NOTE:** Save the client ID and client secret in Bold BI by following the [OAuth Configuration](/site-administration/data-connector-settings/oauth-configuration/) guide for more details.

## Authentication with Facebook
Follow these steps to authenticate with the Facebook web service:

1. Click on the data source, which will prompt a login window. Enter the credentials of your Facebook account to authorize.
2. Click on **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:** If permission is denied, the account will not be accessible from the dashboard.

3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to proceed with the data source connection.
5. To connect using an existing connected account, refer to [Connected Accounts](/working-with-data-sources/data-connectors/facebook/#connected-accounts-for-oauth-data-sources).

> **NOTE:** To connect to another account click **Connect New Account.**


## Connect to Facebook
### Create Facebook data source
After successful authentication, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Facebook data source.
1. Enter a name and description (optional) for the data source.
2. Choose either **Insights** or **Graph API** from the radio button options to select the required API Endpoints.
3. Click on the **Insights** radio button to choose the **Pages** in your Facebook account and the **Insights** API Endpoints.
4. Click on the **Graph API** radio button to choose the **Pages** in your Facebook account and the **Graph API** API Endpoints.
5. Enter a valid Facebook REST API endpoint in the URL textbox. Refer to the [Facebook API documentation](https://developers.facebook.com/docs/graph-api/reference/) for more details.
6. Click **CUSTOMURL** to enter the URL manually.   
7. Select the **GET** method for the REST API in the **Method** combo box.
8. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
9. Select **JSON** data type in the **Data Format** combo box.
10. The authentication type will be set to **Facebook** automatically since OAuth is used for authenticating with Facebook account.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/facebook/DataSourcesView.png)

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
1. For instance, to query about the specific daily reach details, query the <i>/ACCESS_TOKEN</i> endpoint with required parameters as specified in [Facebook Documentation](https://developers.facebook.com/docs/graph-api/reference/).

Replace it in the URL to query for reach details.

`https://graph.facebook.com/v6.0/page-id/insights?metric=page_impressions_unique&period=day&access_token=<ACCESS_TOKEN>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developers.facebook.com/docs/graph-api/reference/)

### Sample queries
**Feeds**
	
`https://graph.facebook.com/v6.0/page-id/feed?fields=from,id,title,unshimmed_url,likes.summary(true),privacy,message,created_time,picture,comments.summary(true)&access_token=<ACCESS_TOKEN>`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Facebook Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/facebook/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/facebook/ManageDS.png)

## Related links

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Facebook Integration](https://www.boldbi.com/integrations/facebook)

[Connecting to Facebook from Syncfusion Dashboard](https://www.syncfusion.com/kb/8010/connecting-to-twitter-and-facebook-from-syncfusion-dashboard)