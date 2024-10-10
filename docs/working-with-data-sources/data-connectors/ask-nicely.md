---
layout: post
title: Ask Nicely – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Ask Nicely web service through REST API endpoint with Bold BI Cloud and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to AskNicely data source
Bold BI dashboard designer supports connecting to Ask Nicely web services through REST API.

## Choose Ask Nicely data source
To choose Ask Nicely as a data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Ask Nicely** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/ask-nicely/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu in the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/ask-nicely/ChooseDS_server.png)

## Create AskNicely data source
Once you click on the data source, the NEW DATA SOURCE configuration panel opens. Follow the steps below to create an Ask Nicely data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Ask Nicely REST API endpoint in the URL textbox. Refer to the [AskNicely API documentation](https://asknicely.asknice.ly/help/apidocs) for more details.

    Example: `https://your_asknicely_domain.asknice.ly/datafeed/v1/line?apikey=your_api_key`

3. Select the **GET** method for the REST API in the **Method** combo box.
4. Choose a time interval for **Refresh Settings** using the combo box to trigger the REST API request periodically to keep the data in sync with our dashboard.
5. Select **JSON** data type in the **Data Format** combo box.
6. Replace `<your_asknicely_domain>` with valid domain name and `<:your_api_key>` with a valid API Key.
7. Choose None under **Authentication Type** as authentication is done through the URL with the API key.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/ask-nicely/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](https://help.syncfusion.com/bold-bi/editing-a-data-connection) option.

#### How do I get API Key for connecting AskNicely Data source?
1. Log in to your *Ask Nicely* account.
2. Go to *Setup -> API* and you can find the API Key.
3. Replace this API Key in `<:your_api_key>` in Ask Nicely data source in Bold BI Dashboard.

![Reveal API Key](/static/assets/working-with-datasource/data-connectors/images/ask-nicely/APIKey.png)


#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call to the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
</td>
</tr>
</table>

### Sample queries

**Sent Stats**

[https://your_asknicely_domain.asknice.ly/datafeed/v1/sentstats/20?apikey=your_api_key](https://your_asknicely_domain.asknice.ly/datafeed/v1/sentstats/20?apikey=your_api_key)

**Historical stats**

`https://your_asknicely_domain.asknice.ly/datafeed/v1/stats?apikey=your_api_key`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog will open. The schema represents the key fields of JSON data retrieved from the Ask Nicely Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select the required schema(s) from the treeview to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema will open. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/ask-nicely/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/ask-nicely/Dashboardparameter.png)

>**Note:** Please refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[AskNicely Integration](https://www.boldbi.com/integrations/asknicely)