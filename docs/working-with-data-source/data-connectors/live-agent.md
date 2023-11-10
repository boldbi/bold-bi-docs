---
layout: post
title: Live Agent – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Live Agent web service through REST API endpoint with Bold BI Cloud and create data source for dashboard configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to LiveAgent data source
The Bold BI dashboard designer connects the LiveAgent web services through the REST API.

## Choose LiveAgent data source
  
  To configure the LiveAgent data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
  
3. Select **LiveAgent** connection button in the connection type panel.

  ![LiveAgent button](/static/assets/working-with-datasource/data-connectors/images/live-agent/liveagent_button.png)


 > **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/live-agent/LiveAgent-server.png)



## Create LiveAgent data source

Once you click the LiveAgent data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create LiveAgent data source.

1. Enter a name and description (optional) for the data source.
2. Enter a valid LiveAgent REST API endpoint in the URL textbox. Refer to the [LiveAgent API documentation](https://www.ladesk.com/features/api/) for more details.

    Example: [https://<:your_site>.ladesk.com/api/v3/tickets](https://<:your_site>.ladesk.com/api/v3/tickets)    

3. Select **GET** method for the REST API in **Method** combo box.
4. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  

5. Replace <:your_api_key> under Headers in **apikey** parameter.
6. Choose **None** under **Authentication Type** as authentication is done through header.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/live-agent/liveagent_panel.png)


You can also edit the connection information set here using the [Edit Connection](/working-with-data-source/editing-a-data-connection/) option.

#### How to get APIKEY from LiveAgent
1. Login to your LiveAgent account.
2. Navigate to **Configuration> System> API**.
3. Click on the **ADD API KEY** button.

   ![Configure-api](/static/assets/working-with-datasource/data-connectors/images/live-agent/Configure-api.png)

4. Provide a name, add the required read access, and click on **CREATE**.

   ![Create-APIkey](/static/assets/working-with-datasource/data-connectors/images/live-agent/Create-APIkey.png)

5. Created **APIKEY** will be listed here.

    ![LiveAgent-APIkey](/static/assets/working-with-datasource/data-connectors/images/live-agent/APIkey.png)
 

#### Additional Information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most REST APIs return only fewer data on a single API request. To pull the amount of data you need, set a value in this field.  
Pagination is handled internally and will fetch the amount of data you need.
</td>
</tr>
<tr>
<td>
Refresh Settings
</td>
<td>
The period before the next refresh call is triggered. It will automatically initiate a call for the API configured in the data source to keep the data up to datelick. The DataSources button in the configuration panel to add a new data connection.
</td>
</tr>
</table>

### Preview and Data Import

* Click **Preview & Connect** in order to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of the JSON data retrieved from the LiveAgent Rest API request. This dialog displays a list of schemas in a treeview and their corresponding values in a grid for preview. Select the required schema(s) from the treeview to use in the designer and click **Connect**.

   ![Schema window](/static/assets/working-with-datasource/data-connectors/images/live-agent/asknicelyschemawindow.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
    ![Data view](/static/assets/working-with-datasource/data-connectors/images/live-agent/dataview_asknicely.png)

* Click **Save** to save the data source with a relevant name.

## Related Links

[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[LiveAgent Integration](https://www.boldbi.com/integrations/liveagent?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiliveagentintegration)

  







  
































