---
layout: post
title: Sendible - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Sendible web service through basic http authentication with cloud-hosted Bold BI and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to the Sendible data source
The Bold BI dashboard designer supports connecting to Sendible web services using the REST API.

## Choose Sendible data source
To configure the Sendible data source, follow these steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Sendible** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Sendible/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Sendible/ChooseDS_server.png)

## Create a Sendible data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow these steps to create a Sendible data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Sendible REST API endpoint in the URL textbox. Refer to the 'Sendible API documentation' for more details.

    Example: `https://api.sendible.com/api/v2/profile` 

3. Select the **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Sendible data source. This value is used to fetch the data from the Sendible data source using the pagination.
5. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **Basic HTTP Authentication** in Authentication Type combo box.
8. Enter a valid **User Name** and **Password** to access the endpoint in your account.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/Sendible/DataSourcesView.png)

You can also edit the connection information set using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

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

### Sample queries

**Contacts**

`https://api.sendible.com/api/v2/contacts.json?`

**Service**

`https://api.sendible.com/api/v2/service_types.json`

**Company**

`https://api.sendible.com/api/v2/company.json`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Sendible Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in the grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

*  Now, the data design view page with the selected table schema opens. Drag the table from the tree view on the left pane and drop it onto the Query designer page.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Sendible/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Sendible/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Sendible Integration](https://www.boldbi.com/integrations/sendible)