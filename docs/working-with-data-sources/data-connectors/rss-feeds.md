---
layout: post
title: RSS Feeds – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect RSS Feeds data through REST API endpoint with Bold BI Cloud and create data source for dashboard configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to RSS Feeds data source
The Bold BI dashboard designer supports connecting to RSS Feeds web services through the REST API. 

## Choose RSS Feeds data source
To configure the RSS Feeds data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **RSS Feeds** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/RSSFeeds/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/RSSFeeds/ChooseDS_server.png)


## Create RSS Feeds data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create RSS Feeds data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid RSS Feeds REST API endpoint in the URL textbox. Refer to the [RSS Feeds API documentation](http://www.rssboard.org/rss-specification) for more details.

    Example: `http://feeds.bbci.co.uk/news/video_and_audio/world/rss.xml#`

3. Choose the **GET** method for the REST API in the **Method** combo box.
4. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
5. Select **XML** as the data type in the **Data Format** combo box.
6. Select **Authentication Type** as **None**.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/RSSFeeds/DataSourcesView.png)

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

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from RSS Feeds Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/RSSFeeds/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/RSSFeeds/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[RSS Feeds Integration](https://www.boldbi.com/integrations/rss-feeds?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbirssfeedsintegration)