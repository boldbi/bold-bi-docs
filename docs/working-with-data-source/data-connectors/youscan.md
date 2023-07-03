---
layout: post
title: Connecting YouScan Data with Bold BI | Bold BI Docs
description: Learn how to create a data source by connecting the YouScan data through its REST API endpoint in Dashboard Designer with the Bold BI application.
platform: bold-bi
documentation: ug

---

# Connecting Bold BI to YouScan data source
The Bold BI dashboard designer connects the YouScan web services through the REST API.

## Choose YouScan data source

To configure the YouScan data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **YouScan** connection in the connection panel.
   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/youscan/youscan.png)
> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.
![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/youscan/youscan_server.png)

## Create YouScan data source
Once you click the YouScan data source, the YouScan data source configuration panel opens. Follow these steps to create a YouScan data source:
1.  Enter the name and description (optional) for the data source.
2.  Click the **Resources** dropdown box and choose the required endpoint.
3.  Click the Relative Date dropdown box and choose the required relative date range such as Today, Past Week, Past Month, Custom, etc.,
4.  If the Custom option is selected in the **Relative Date** dropdown, select the **Start** date and **End** date value from the date picker.
5.  Enter the **API KEY** for the connected account in the textbox.
6.  By default, the Max size of Youscan pagination size is 10K for all endpoints. However, if you need to increase the pagination size for the **mention** endpoint with a date range, you can utilize the **SinceSeq Filter** checkbox. Using the SinceSeq anchors filter is the most helpful way to retrieve large results in this case. For more details and specific instructions, please refer to the provided documentation [SinceSeq API documentation](https://youscan.docs.apiary.io/#reference/mention-stream/fetching-mentions).
7.  Click the **Custom Url** to enter the URL manually. For more details you  can refer this documentation [YouScan API documentation](https://youscan.docs.apiary.io/).
8.  Choose a time interval for the **Refresh Settings** using the combo box to periodically trigger the Rest API request to keep the data in sync with your dashboard.

   ![Data source preview](/static/assets/working-with-datasource/data-connectors/images/youscan/youscan_view.png)  

You can also edit the connection information set using the  [Edit Connection](/working-with-data-source/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

1. For entering the URL manually, click the **Custom URL**, then enter the URL. Refer to the [YouScan API documentation](https://youscan.docs.apiary.io/) for more details.

2. For instance, if you need to get the specific topic, you need to replace your Topic Id in the following API in Custom URL.

3. Replace it in the URL to query particular conversations:

    `https://api.youscan.io/api/external/topics/<:topicId>/`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://youscan.docs.apiary.io/)

### Preview and data import
* Click the **Preview & Connect** to connect with the configurations set.
* The Choose Table(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Alma Rest API request. This dialog displays a list of the schema(s) in the tree view and their corresponding values in the grid for preview. Select the required schemas from the tree view for the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table on the Query Designer page.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[YouScan API Limits](https://youscan.docs.apiary.io/#introduction/rate-limits)