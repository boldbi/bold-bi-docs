---
layout: post
title: Freshservice – Cloud BI Data Connector | Bold BI Docs
description: Learn how to connect Freshservice data using basic http authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Freshservice data source
The Bold BI dashboard designer supports connecting to Freshservice web services through the REST API.

## Choose Freshservice data source
To configure the Freshservice data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Freshservice** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/freshservice/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/freshservice/ChooseDS_server.png)

## Create Freshservice data source
Once you click the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Freshservice data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Freshservice REST API endpoint in the URL textbox. Refer to the [Freshservice API documentation](https://api.freshservice.com/) for more details.

    Example: `https://<:your_domain>.freshservice.com/helpdesk`

3. Select the **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Freshservice data source. This value is used to fetch the data from Freshservice data source via pagination.
5. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **Basic http Authentication** under **Authentication Type** combo box.
8. Enter a valid **API Key** to access the endpoint in your account. To obtain an API key in Freshservice , refer to the [Freshservice API documentation](https://support.freshservice.com/en/support/solutions/articles/50000000306-where-do-i-find-my-api-key-) for more details.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/freshservice/DataSourcesView.png)

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

1. Login to your Freshservice account. Go to *Get-Started -> Help desk URL*.
2. Replace the domain name in *<:your_domain>* to query the help desk

`https://your_domain.freshservice.com/helpdesk`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://api.freshservice.com/)

### Sample queries

**Changes**

`https://your_domain.freshservice.com/itil/changes.json`

**Departments**

`https://your_domain.freshservice.com/itil/departments.json`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Freshservice Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/freshservice/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/freshservice/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Freshservice Integration](https://www.boldbi.com/integrations/freshservice)