---
layout: post
title: Gravity Forms - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Gravity Forms web service through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Gravity Forms data source
The Bold BI dashboard designer supports connecting to the Gravity Forms web services through the REST API.

## Choose Gravity Forms data source

To configure the Gravity Forms data source, follow these steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Gravity Forms** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/GravityForms/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/GravityForms/ChooseDS_Server.png)


## Create Gravity Forms data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow these steps to create a Gravity Forms data source.
1. Enter a name and description (optional) for the data source.
2. Enter the **HostName** for the connected account.
3. Click the **API Endpoints** drop-down box and choose the required endpoint.
4. Click **Custom Url** if you want to enter the URL manually. Refer to the [Gravity Forms API documentation](https://docs.gravityforms.com/rest-api-v2/#api-documentation) for more details.  
5. Select the **GET** method for the REST API in the **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows to be fetched from the Gravity Forms data source. It is used to fetch the data from the Gravity Forms data source using the pagination.
7. Choose a time interval using **Refresh Settings** button to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
8. Select the **JSON** data type in the **Data Format** combo box.
9. Choose **Basic HTTP Authentication** in the **Authentication Type** combo box.
10. Enter a valid Gravity Forms **Client ID** and **Client Secret** to access the endpoints.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/GravityForms/DataSourcesView.png)

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

1. For example, to retrieve specific form details, you can query the **Show Form** endpoint.
2. From the information provided, obtain the ID of the specific form.

Replace it in the URL to query particular form:

`https://<:yoursite.gravityforms.com>/wp-json/gf/v2/forms/<:formId>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://docs.gravityforms.com/rest-api-v2/#api-documentation)

### Sample endpoints

**All Entries**

`https://<:yoursite.gravityforms.com>/wp-json/gf/v2/entries`

**All Forms**

`https://<:yoursite.gravityforms.com>/wp-json/gf/v2/forms`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Gravity Forms Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in a grid for a preview. Select required schema(s) from a treeview to use in the designer and then click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/GravityForms/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/GravityForms/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)
