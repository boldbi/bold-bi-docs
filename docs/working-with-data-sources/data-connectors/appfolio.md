---
layout: post
title: AppFolio – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect AppFolio web service through basic http authentication with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to AppFolio data source
The Bold BI dashboard designer supports connecting to AppFolio web services through the REST API.

## Choose AppFolio data source

To choose the AppFolio data source, follow these steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **AppFolio** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/AppFolio/ChooseDs.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/AppFolio/ChooseDS_Server.png)

## Create AppFolio data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow these steps to create an AppFolio data source:
1. Enter a name and description (optional) for the data source.
2. Enter the **HostName** for the connected account.
3. Click on the **API Endpoints** dropdown box and choose the required endpoint.
4. Click on the **Custom Url** to manually enter the URL. Refer to the [AppFolio API documentation](https://help.appfolio.com/s/article/Requesting-Data-from-AppFolio-Data-API-V1) for more details. 
5. Select the **GET** method for the REST API in the **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows to be fetched from the AppFolio data source. This value is used to fetch the data from the AppFolio data source using the pagination.
7. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with your dashboard.  
8. Select the **JSON** data type in the **Data Format** combo box.
9. Choose **Basic HTTP Authentication** in the **Authentication Type** combo box.
10. Enter a valid AppFolio **Client ID** and **Client Secret** to access the endpoints.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/AppFolio/DataSourcesView.png)

#### How do I get Client ID and Client Secret for connecting AppFolio data source?

1. Login to your [AppFolio](https://www.appfolio.com/) account. Click your *Account Icon -> General Settings*.
2. Within the *General Settings* page, navigate to the *Manage API settings* tab.
3. Your Client ID and Client Secret can be located here.
4. If your Client ID and Client Secret expire, you can generate new credentials.

![Reveal API Token](/static/assets/working-with-datasource/data-connectors/images/AppFolio/AppfolioCredentials.png)

You can also modify the connection information by using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

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
Period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL for Pagination.

* Set endpoint for pagination.

**Bill Detail**

`https://<your database>.appfolio.com/api/v1/reports/bill_detail.json?paginate_results=true&from_date=01/19/2020&to_date=09/01/2020`

* Set `paginate_results=true` in the query and specify the required range.

For more information on the API endpoints available for this data source, refer to the official [API Documentation](https://help.appfolio.com/s/article/Requesting-Data-from-AppFolio-Data-API-V1)

### Sample queries

**Aged Payables Summary**

`https://<your database>.appfolio.com/api/v1/reports/aged_payables_summary.json`

**Bill Detail**

`https://<your database>.appfolio.com/api/v1/reports/bill_detail.json`

**Chart of Accounts**

`https://<your database>.appfolio.com/api/v1/reports/chart_of_accounts.json`


### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the AppFolio Rest API request. This dialog displays a list of schemas in a treeview and their corresponding values in the grid for preview. Select the required schema(s) from the treeview to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag the table from the tree view in the left pane and drop it into the Query designer page.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/AppFolio/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/AppFolio/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)