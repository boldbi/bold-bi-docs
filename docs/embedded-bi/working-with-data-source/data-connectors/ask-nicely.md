---
layout: post
title: Ask Nicely – Embedded BI Connector | Bold BI Documentation
description: Learn how to connect Ask Nicely web service through REST API endpoint with Bold BI Embedded and create data source for widget configuration.
canonical: "/cloud-bi/working-with-data-source/data-connectors/ask-nicely/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to AskNicely data source
Bold BI dashboard designer supports connecting Ask Nicely web services through REST API. 

## Choose Ask Nicely data source
To configure the AskNicely data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **AskNicely** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/ask-nicely/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/ask-nicely/ChooseDS_server.png)

## Create AskNicely data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Ask Nicely data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Ask Nicely REST API endpoint in the URL textbox. Refer the [AskNicely API documentation](https://asknicely.asknice.ly/help/apidocs) for more details.

    Example: [https://your_asknicely_domain.asknice.ly/datafeed/v1/line?apikey=your_api_key](https://your_asknicely_domain.asknice.ly/datafeed/v1/line?apikey=your_api_key)

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Ask Nicely data source.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Replace `<:your_api_key>` at the end of URL with a valid API Key.
8. Choose *None* under **Authentication Type** as authentication is done through the URL with API key.

You can also edit the connection information set here using the [Edit Connection](https://help.syncfusion.com/bold-bi/editing-a-data-connection) option.

#### How do I get API Key for connecting AskNicely Data source?
1. Login to your *Ask Nicely* account.
2. Go to *Setup -> API* and you can find the API Key.
3. Replace this API Key in `<:your_api_key>` in Ask Nicely data source in Bold BI Dashboard.

![Reveal API Key](/static/assets/embedded/working-with-datasource/data-connectors/images/ask-nicely/APIKey.png)


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

**Sent Stats**

[https://your_asknicely_domain.asknice.ly/datafeed/v1/sentstats/20?apikey=your_api_key](https://your_asknicely_domain.asknice.ly/datafeed/v1/sentstats/20?apikey=your_api_key)

**Historical stats**

[https://your_asknicely_domain.asknice.ly/datafeed/v1/stats?apikey=your_api_key](https://your_asknicely_domain.asknice.ly/datafeed/v1/stats?apikey=your_api_key)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Ask Nicely Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[AskNicely Integration](https://www.boldbi.com/integrations/asknicely?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiasknicelyintegration)


  
































