---
layout: post
title: Facebook Ads – Cloud BI Data Connector | Bold BI Docs
description: Learn how to connect Facebook Ads data using OAuth-based authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Facebook Ads data source
Bold BI dashboard designer supports connecting Facebook Ads web services through REST API. 

## Choose Facebook Ads data source
To configure the Facebook Ads data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Facebook Ads** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/facebookads/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/facebookads/ChooseDS_Server.png)

## Authentication with Facebook Ads
Use the following steps to authenticate with Facebook Ads web service:

1. Click the data source, you will be prompted with a login window. Enter the credentials of your Facebook Ads account to authorize.
2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   > **NOTE:** If the permission is denied, the account will not be accessible from the dashboard.

3. Set a name to identify the account and click **Next**. 
4. You have now successfully authorized your connection. Click **Connect** to continue with the data source connection.
5. To connect using existing connected account, refer [Connected Accounts](/cloud-bi/working-with-data-source/data-connectors/facebook-ads/#connected-accounts-for-oauth-data-sources).

> **NOTE:** To connect to another account click **Connect New Account.**


## Connect to Facebook Ads
### Create Facebook Ads data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Facebook Ads data source.
1. Enter a name and description (optional) for the data source.
2. Choose the radio button **Insights** or **Graph API** for selecting the required API Endpoints.
3. Click **Insights** radio button for choosing the **Pages** in your Facebook Ads account and the **Insights** API Endpoints.
4. Click **Graph API** radio button for choosing the **Pages** in your Facebook Ads account and the **Graph API** API Endpoints.
5. Enter a valid Facebook Ads REST API endpoint in the URL textbox. Refer the [Facebook Ads API documentation](https://developers.facebook.com/docs/graph-api/reference/) for more details.
6. Click **CUSTOMURL** to enter the URL manually.   
7. Select **GET** method for the REST API in **Method** combo box.
8. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
9. Select **JSON** data type in **Data Format** combo box.
10. The authentication type will be set to **Facebook Ads** automatically since OAuth is used for authenticating with Facebook Ads account.

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL
1. For instance, to query about the get multiple metrics of page, query the <i>/ACCESS_TOKEN</i> endpoint with required parameters as specified in [Facebook Documentation](https://developers.facebook.com/docs/graph-api/reference/).

Replace it in the URL to query to get multiple metrics of page: details:

`https://graph.facebook.com/v6.0/page-id/insights?metric=page_impressions_unique&period=day&access_token=<ACCESS_TOKEN>`

### Sample queries
**Get a single metric of page**

`https://graph.facebook.com/{page-id}/insights/page_impressions_unique&access_token={page-access-token}`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Facebook Ads Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/cloud/working-with-datasource/data-connectors/images/facebookads/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/cloud/working-with-datasource/data-connectors/images/facebookads/ManageDS.png)

## Related links

[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/bold-bi-walk-through/)

[Facebook Ads Integration](https://www.boldbi.com/integrations/Facebook?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbifacebookntegration)