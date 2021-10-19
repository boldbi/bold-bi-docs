---
layout: post
title: ServiceNow – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect ServiceNow web service using basic http authentication with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to ServiceNow data source
Bold BI dashboard designer supports connecting ServiceNow web services through REST API. 

## Choose ServiceNow data source
To configure the ServiceNow data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **ServiceNow** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/servicenow/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/servicenow/ChooseDS_server.png)

## Create ServiceNow data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create ServiceNow data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid ServiceNow REST API endpoint in the URL textbox. Refer the [ServiceNow API documentation](https://developer.servicenow.com/app.do#!/rest_api_doc) for more details.

    Example: [https://&lt;:your_instance&gt;.service-now.com/api/now/table/problem](https://%3c:your_instance%3e.service-now.com/api/now/table/problem)

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the ServiceNow data source. This value is used to fetch the data from ServiceNow data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **Basic HTTP Authentication** in **Authentication Type** combo box.
8. Enter a valid credentials of ServiceNow data source in  **Username & password** text boxes to access the endpoint in your account.

    ![DataSourcesView](/static/assets/cloud/working-with-datasource/data-connectors/images/servicenow/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

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

1. Login in to [ServiceNow](https://www.servicenow.com/#) account. Go to *Manage -> Instance*, you can find the instance *instance URL* and *Username, Password*.
2. Click *Create Instance* if you don't have any valid ServiceNow instance.
3. Replace in to the URL to query catalogs

![ServiceNow Instance](/static/assets/cloud/working-with-datasource/data-connectors/images/servicenow/InstanceDS.png)

[https://your-servicenow-domain.service-now.com/api/sn_sc/servicecatalog/catalogs](https://your-servicenow-domain.service-now.com/api/sn_sc/servicecatalog/catalogs)

### Sample queries

**Problems**

[https://your-servicenow-domain.service-now.com/api/now/table/problem](https://your-servicenow-domain.service-now.com/api/now/table/problem)

**Email**

[https://your-servicenow-domain.service-now.com/api/now/email/06e095427](https://your-servicenow-domain.service-now.com/api/now/email/06e095427)


### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from ServiceNow Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links

[Blog post](https://www.boldbi.com/blog/build-a-servicenow-incident-management-monitoring-dashboard-in-a-minute)

[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[ServiceNow Integration](https://www.boldbi.com/integrations/servicenow?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiservicenowintegration)