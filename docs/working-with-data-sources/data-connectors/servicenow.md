---
layout: post
title: ServiceNow – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect ServiceNow web service using basic http authentication with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to ServiceNow data source
The Bold BI dashboard designer supports connecting to ServiceNow web services through the REST API. 

## Choose ServiceNow data source
To configure the ServiceNow data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **ServiceNow** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/servicenow/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/servicenow/ChooseDS_server.png)

## Create ServiceNow data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create ServiceNow data source.
1. Enter a name and description (optional) for the data source.
2. Enter the **Host Name** for the connected account. For example. `<:your_domain>.service-now.com`.
3. Click the **Resources** dropdown box and choose the required endpoint.
4. Click on the **Custom Url** to enter the URL manually. Refer to the [ServiceNow API documentation](https://developer.servicenow.com/app.do#!/rest_api_doc) for more details.
5. Select the **GET** method for the REST API in the **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows to be fetched from the ServiceNow data source. This value is used to fetch the data from ServiceNow data source via pagination.
7. Choose a time interval for **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
8. Select **JSON** data type in **Data Format** combo box.
9. Choose **Basic HTTP Authentication** in the **Authentication Type** combo box.
10. Enter a valid credentials of ServiceNow data source in the **Username & password** text boxes to access the endpoint in your account.
 
    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/servicenow/DataSourcesView.png)

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

1. Login in to your [ServiceNow](https://www.servicenow.com/#) account. Navigate to *Manage -> Instance*, where you will find the *instance URL*, *username*, and *password*.
2. Click *Create Instance* if you don't have any valid ServiceNow instance.
3. Replace the URL to query catalogs

![ServiceNow Instance](/static/assets/working-with-datasource/data-connectors/images/servicenow/InstanceDS.png)

`https://your-servicenow-domain.service-now.com/api/sn_sc/servicecatalog/catalogs`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developer.servicenow.com/app.do#!/rest_api_doc)

### Sample queries

**Problems**

`https://your-servicenow-domain.service-now.com/api/now/table/problem`

**Email**

`https://your-servicenow-domain.service-now.com/api/now/email/06e095427`


### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from ServiceNow Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/servicenow/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/servicenow/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links

[Blog post](https://www.boldbi.com/blog/build-a-servicenow-incident-management-monitoring-dashboard-in-a-minute)

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[ServiceNow Integration](https://www.boldbi.com/integrations/servicenow?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiservicenowintegration)