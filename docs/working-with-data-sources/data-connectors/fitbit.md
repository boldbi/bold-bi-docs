---
layout: post
title: Fitbit - Embedded BI Connector | Bold BI Documentation
description: Learn how to connect to the Fitbit data source using OAuth-based authentication through REST API with Bold BI at your server or embedded in your application.
canonical: "/working-with-data-sources/data-connectors/fitbit/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Fitbit data source
Bold BI dashboard designer supports connecting the Fitbit web services through REST API.
> **NOTE:** Fitbit OAuth credentials are required for the On-Premises Deployment but not needed in Syncfusion Managed Cloud Server.
## Choose Fitbit data source

To configure the Fitbit data source, follow these steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Fitbit** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Fitbit/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Fitbit/ChooseDS_Server.png)

### How to Obtain the Fitbit Client ID and Client Secret

1. Log in to your Fitbit account [Fitbit login](https://dev.fitbit.com/login).
2. Click on the **Manage** section and select **Register an App** category.

    ![userIcon](/static/assets/working-with-datasource/data-connectors/images/Fitbit/Manage.png)
3. Fill in the application details, providing the necessary information about your application, including the **name**, **description**, **website**, and **organization**.
4. Enter a valid redirect URL for your application in the **Redirect URL** field. The Bold BI redirect URL should be added in the proper format required. Please refer to this URL structure, `https://<yourdomain>/bi/designer/v1.0/oauth/agent`. 
5. Configure **Read Only** access and Click the **Register** button.

    ![mySettings](/static/assets/working-with-datasource/data-connectors/images/Fitbit/Register_app.png)
7. Once your app is created, the **Client ID** and **Client Secret** will be displayed.

    ![client_ID](/static/assets/working-with-datasource/data-connectors/images/Fitbit/Client_ID.png)
> **NOTE:** Save the Client ID and Client secret in Bold BI by following the [OAuth Configuration](/site-administration/data-connector-settings/oauth-configuration/).

## Create Fitbit data source
After successful authentication, the NEW DATA SOURCE configuration panel opens. Follow these steps to create Fitbit data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** drop-down box and choose the required endpoint.
3. If you want to enter the endpoint manually, click **Custom Url** and then enter the URL manually. Refer to the [Fitbit API documentation](https://dev.fitbit.com/build/reference/web-api/explore/) for more details.
4. Select the **GET** method for the REST API in the **Method** combo box.
5. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with our dashboard. 
6. Select the **JSON** data type in the **Data Format** combo box.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/Fitbit/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

1. For instance, to get the specific activity details, query the <i>All Activities</i> endpoint.
2. From the listed information, get the id of the specific activity.

Replace it in the URL to query particular activity:

`https://api.fitbit.com/1/activities/<:activity-id>.json`
### Sample queries

**All Activities**

`https://api.fitbit.com/1/user/-/activities.json`

**All Activities Types**

`https://api.fitbit.com/1/activities.json`

**Devices**

`https://api.fitbit.com/1/user/-/devices.json`

**Food Locales**

`https://api.fitbit.com/1/foods/locales.json`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Fitbit Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in a grid for a preview. Select required schema(s) from a treeview to use in the designer and then click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)
