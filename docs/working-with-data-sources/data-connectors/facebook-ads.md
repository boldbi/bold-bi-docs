---
layout: post
title: Facebook Ads – Cloud BI Data Connector | Bold BI Docs
description: Learn how to connect Facebook Ads data using OAuth-based authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Facebook Ads data source
The Bold BI dashboard designer supports connecting to Facebook Ads web services through the REST API. 

## Choose Facebook Ads data source
To configure the Facebook Ads data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Facebook Ads** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/facebookads/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/facebookads/ChooseDS_Server.png)

> **NOTE:** To obtain the client ID and client secret for Facebook Ads, Refer to the [Facebook Ads get configuration](/working-with-data-sources/data-connectors/facebook/#how-to-obtain-the-facebook-client-id-and-client-secret) for more details.

## Advanced
In Advanced category, It will Redirect to the Bold ETL. Refer to [Bold ETL](/managing-resources/manage-data-sources/#advanced-category).

## Basic
In the Basic Category, It will act as the connector in Bold BI. And need to follow the below steps.

## Authentication with Facebook Ads
Use the following steps to authenticate with the Facebook Ads web service:

1. Click on the data source, which will prompt a login window. Enter the credentials of your Facebook Ads account to authorize.
2. Click on **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:** If permission is denied, the account will not be accessible from the dashboard.

3. Provide a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect using an existing connected account, refer to [Connected Accounts](/working-with-data-sources/data-connectors/facebook-ads/#connected-accounts-for-oauth-data-sources).

> **NOTE:** To connect to another account click **Connect New Account.**


## Connect to Facebook Ads
### Create Facebook Ads data source
After successful authentication, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Facebook Ads data source.
1. Enter a name and description (optional) for the data source.
2. Choose the radio button **Insights** or **Graph API** for selecting the required API Endpoints.
3. Click the **Insights** radio button to choose the **Pages** in your Facebook Ads account and the **Insights** API Endpoints.
4. Click the **Graph API** radio button to choose the **Pages** in your Facebook Ads account and the **Graph API** API Endpoints.
5. Enter a valid Facebook Ads REST API endpoint in the URL textbox. Refer to the [Facebook Ads API documentation](https://developers.facebook.com/docs/graph-api/reference/) for more details.
6. Click **CUSTOMURL** to enter the URL manually.   
7. Select the **GET** method for the REST API in the **Method** combo box.
8. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
9. Select **JSON** data type in **Data Format** combo box.
10. The authentication type will be set to **Facebook Ads** automatically since OAuth is used for authenticating with Facebook Ads account.

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
1. For instance, to query about the get multiple metrics of page, query the <i>/ACCESS_TOKEN</i> endpoint with required parameters as specified in [Facebook Documentation](https://developers.facebook.com/docs/graph-api/reference/).

Replace it in the URL to query to get multiple metrics of page: details:

`https://graph.facebook.com/v6.0/page-id/insights?metric=page_impressions_unique&period=day&access_token=<ACCESS_TOKEN>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developers.facebook.com/docs/graph-api/reference/)

### Sample queries
**Get a single metric of page**

`https://graph.facebook.com/{page-id}/insights/page_impressions_unique&access_token={page-access-token}`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Facebook Ads Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/facebookads/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/facebookads/ManageDS.png)

## Related links

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Facebook Ads Integration](https://www.boldbi.com/integrations/facebook-ads)