---
layout: post
title: Recurly – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Recurly web service using basic http authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Recurly data source
Bold BI dashboard designer supports connecting Recurly web services through REST API.

## Choose Recurly data source
To configure the Recurly data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Recurly** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/recurly/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/recurly/ChooseDS_server.png)

## Create Recurly data source

Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Recurly data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** down drop box and choose the required endpoint.
3. Click the **Custom Url** to enter the URL manually. Refer to the [Recurly API documentation](https://dev.recurly.com/docs/getting-started) for more details.
4. Select **GET** method for the REST API in **Method** combo box.
5. In **Max Rows**, enter the maximum number of rows to be fetched from the Recurly data source.
6. Choose a time interval for the **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
7. Select the **XML** data type in the **Data Format** combo box.
8. Choose the *Basic HTTP Authentication* under the **Authentication Type**.
9. Enter a valid the **Account Key** to access the endpoints in your account.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/recurly/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get Account Key for connecting Recurly data source?
1. Login to your [Recurly](https://app.recurly.com/login) account. Go to *Admin -> Users -> Configure API Access*.
2. Use this *Private API Key* as **Account Key** in Recurly data source in Bold BI Dashboard.

![Reveal API Key](/static/assets/working-with-datasource/data-connectors/images/recurly/APIKey.png)

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
</td>
</tr>
</table>

### Sample queries

**Accounts**

[https://myaccount.recurly.com/v2/accounts](https://myaccount.recurly.com/v2/accounts)

**Invoices**

[https://myaccount.recurly.com/v2/invoices](https://myaccount.recurly.com/v2/invoices)

**Plans**

[https://myaccount.recurly.com/v2/plans](https://myaccount.recurly.com/v2/plans)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Recurly Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/recurly/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/recurly/Dashboardparameter.png)

>**Note:** Refer the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Recurly API Limits](https://dev.recurly.com/docs/rate-limits)

[Recurly Integration](https://www.boldbi.com/integrations/recurly?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbirecurlyintegration)