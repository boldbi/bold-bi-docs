---
layout: post
title: Nutshell – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect the Nutshell service using the basic HTTP authentication through REST API endpoint with cloud-hosted Bold BI.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Nutshell data source
The Bold BI dashboard designer supports connecting to the Nutshell web services through the REST API.

## Choose Nutshell data source
To configure the Nutshell data source, follow these steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Nutshell** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Nutshell/ChooseDS.PNG)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Nutshell/ChooseDS_server.PNG)

## Create Nutshell data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow these steps to create a Nutshell data source.
1. Enter a name and description (optional) for the data source.
2. Choose the **Nutshell Method** drop-down box and the required endpoint.
3. Click the **Custom Raw Body** if you want to enter the Nutshell Method and Params manually. Refer to the [Nutshell API documentation](https://developers.nutshell.com/#http-post-api) for more details.

    **Example**: `{"jsonrpc":"2.0","method":"findLeads","params":{<:key>:<:value>},"id":"BoldBI"}`

4. In **Max Rows**, enter the maximum number of rows to be fetched from the Nutshell data source.
5. Choose a time interval for the **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with our dashboard.
6. Select the **JSON** data type in the **Data Format** combo box.
7. Choose **Basic HTTP Authentication** in the **Authentication Type** combo box.
8. Enter a valid Nutshell **Username** and **API KEY** to access the endpoints.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/Nutshell/DataSourcesView.PNG)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose 'Never'.
</td>
</tr>
</table>

### Setting up the Raw Body

**jsonrpc**

It specifies the JSON-RPC version. This member is mandatory.

**method**

Refer to the [Nutshell API documentation](https://developers.nutshell.com/#http-post-api) for details on the **methods**.  This member is mandatory.

**params**

A Structured value that holds the parameter values to be used during the invocation of the method. This member MAY be omitted.

**id**

This membership is mandatory and must contain a String, Number, or NULL value.

**Example:** 

`{"jsonrpc":"2.0","method":"findLeads","params":{"query": {}},"id":"BoldBI"}`

`{"jsonrpc":"2.0","method":"findLeads","params":{"query": {"status": 0}},"id":"BoldBI"}`

### Sample queries

**All Contacts**

`{"jsonrpc":"2.0","method":"findContacts","params":{},"id":"BoldBI"}`

**All Accounts**

`{"jsonrpc":"2.0","method":"findAccounts","params":{},"id":"BoldBI"}`

**All Leads**

`{"jsonrpc":"2.0","method":"findLeads","params":{"query": {}},"id":"BoldBI"}`

`{"jsonrpc":"2.0","method":"findLeads","params":{"query": {"status": 0}},"id":"BoldBI"}`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Nutshell Rest API request. This dialog displays a list of schemas in a treeview and their corresponding values in the grid for preview. Select the required schema(s) from the treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Nutshell/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Nutshell/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Nutshell API Limits](https://developers.nutshell.com/#rate-limits)