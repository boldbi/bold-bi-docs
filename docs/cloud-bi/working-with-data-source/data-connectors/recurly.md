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

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Recurly** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/recurly/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/recurly/ChooseDS_server.png)

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

    ![DataSourcesView](/static/assets/cloud/working-with-datasource/data-connectors/images/recurly/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get Account Key for connecting Recurly data source?
1. Login to your [Recurly](https://app.recurly.com/login) account. Go to *Admin -> Users -> Configure API Access*.
2. Use this *Private API Key* as **Account Key** in Recurly data source in Bold BI Dashboard.

![Reveal API Key](/static/assets/cloud/working-with-datasource/data-connectors/images/recurly/APIKey.png)

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

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[Recurly API Limits](https://dev.recurly.com/docs/rate-limits)

[Recurly Integration](https://www.boldbi.com/integrations/recurly?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbirecurlyintegration)