---
layout: post
title: Connecting TDengine Data with Bold BI | Bold BI Docs
description: Learn how to create a data source by connecting the TDengine data through its REST API endpoint in Dashboard Designer with the Bold BI application.
platform: bold-bi
documentation: ug

---

# Connecting Bold BI to TDengine data source
The Bold BI dashboard designer connects the TDengine web services through the REST API.

## Choose TDengine data source

To configure the TDengine data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **TDengine** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/TDengine/tdengine.png)

   > **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/TDengine/tdengineserver.png)

## Create TDengine data source
Once you click the TDengine data source, the TDengine data source configuration panel opens. Follow these steps to create a TDengine data source:
1.  Enter the name and description (optional) for the data source.
2.  Choose either the TDengine Cloud or TDengine Server radio button to select the required API connection.
3.  If you select the TDengine Cloud radio button, enter the **Cloud Token** and **Host Name** from your cloud TDengine account. To obtain the cloud token and host name, refer to the [cloud console documentation](https://console.cloud.tdengine.com/programming/docs/connector/REST%20API). 
![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/TDengine/tdenginecloud.png)
4. Select the TDengine Server radio button and enter the **Host Name**, **Port**, **User Name**, and **Password** from your local TDengine application.

    > **Note:** Ensure the taosAdapter is running in our local machine to connect the TDengine to our Bold BI.

      ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/TDengine/tdengineonpremise.png)
5. Click on the **Database** dropdown box and choose the required Database from your TDengine account.
6. Click on the **Table** dropdown box and choose the required table from your connected database.
7. Click on the **Relative Date** dropdown box and choose the required relative date range such as Today, Past Week, Past Month, Custom, etc.
8. If the Custom option is selected in the **Relative Date** dropdown, select the **Start** date and **End** date value from the date picker.
9. Click on the **Custom Url** to enter the URL manually. For more details refer to this documentation [TDengine API documentation](https://docs.tdengine.com/reference/rest-api/#installation).
10. Choose a time interval for the **Refresh Settings** using the combo box to periodically trigger the Rest API request to keep the data in sync with your dashboard.

    ![Data source preview](/static/assets/working-with-datasource/data-connectors/images/TDengine/tdenginepreview.png)  

You can also edit the connection information set using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period before the next refresh call is triggered. This will automatically start a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

1. To enter the URL manually, click on **Custom URL** and then enter the URL. Refer to the  [TDengine API documentation](https://docs.tdengine.com/reference/rest-api/#installation/) for more details.

2. For example, if you need to change the URL, replace your URL in the Custom URL section of the API.

3. Replace it in the URL to query particular conversations:

    `https://<:your-Hostname>/rest/sql/<:your-Database>?token=<:your-CloudToken>`

For more information on the API available for this data source, refer to their official [API Documentation](https://docs.tdengine.com/reference/rest-api/#installation/)

### Preview and data import
* Click the **Preview & Connect** to connect with the configurations that have been set.
* The Choose Table(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Alma Rest API request. This dialog displays a list of the schema(s) in the tree view and their corresponding values in the grid for preview. Select the required schemas from the tree view for the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema is opened. Drag the table from the tree view table in the left pane and drop it onto the Query Designer page.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/TDengine/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/TDengine/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[TDengine API Documentation](https://docs.tdengine.com/reference/rest-api/)