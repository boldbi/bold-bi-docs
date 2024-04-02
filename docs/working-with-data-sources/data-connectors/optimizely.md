---
layout: post
title: Optimizely – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Optimizely data through REST API endpoint with Bold BI Cloud and create data source for dashboard configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Optimizely data source

Bold BI dashboard designer supports connecting Optimizely web services through REST API.

## Choose Optimizely data source

To configure the Optimizely data source, follow the below steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.

3. Select the **Optimizely** connection in the connection panel.

    ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/optimizely/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/optimizely/ChooseDS_server.png)

## Create Optimizely data source

Once you click the Optimizely data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Optimizely data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Optimizely REST API endpoint in the URL textbox. Refer the [Optimizely API documentation](https://developers.optimizely.com/classic/rest/v1/) for more details.

   Example: [https://&lt;your-account&gt;.api-us1.com/api/3/connections](https://%3cyour-account%3e.api-us1.com/api/3/connections)

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Optimizely data source. This value is used to fetch the data from Optimizely data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Replace `<:your_app_token>` under Headers with a valid bearer token.
8. Choose **None** under **Authentication Type** as authentication is done through header.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/optimizely/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get App Token for connecting Optimizely data source?

1. Login to [Optimizely](https://app.optimizely.com/signin) with the valid credentials and go to *Profile -> API Access*.
2. Find your API token here. Click **Generate new token** with an appropriate name, if you don't have an API token yet. 
3. Replace `<:your_app_token>` with this *Personal access token* for Optimizely data source in Bold BI Dashboard.

![Reveal API Token](/static/assets/working-with-datasource/data-connectors/images/optimizely/APIToken.png)

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most of the REST APIs return only fewer data on a single API request. To pull the amount of data you need, set a value in this field.  
Pagination is handled internally and will fetch the amount of data you need.
</td>
</tr>
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
</td>
</tr>
</table>

### Setting up the URL

1. Query the <i>/Projects</i> endpoint.
2. From the listed information get the id of the specific Project.

Replace it in the URL to query a particular experiments:

[https://api.optimizely.com/v2/projects/15269830028/experiments/](https://api.optimizely.com/v2/projects/15269830028/experiments/)

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developers.optimizely.com/classic/rest/v1/)

### Sample queries

**Projects**

[https://api.optimizely.com/v2/projects](https://api.optimizely.com/v2/projects)

**Plans**

[https://api.optimizely.com/v2/plan](https://api.optimizely.com/v2/plan)

**Experiments**

[https://api.optimizely.com/v2/projects/15269830028/experiments/](https://api.optimizely.com/v2/projects/15269830028/experiments/)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Optimizely Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/optimizely/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/optimizely/Dashboardparameter.png)

>**Note:** Refer the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Optimizely Integration](https://www.boldbi.com/integrations/optimizely?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbioptimizelyintegration)