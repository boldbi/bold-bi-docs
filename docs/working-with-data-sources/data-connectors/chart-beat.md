---
layout: post
title: Chartbeat – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Chartbeat web service through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to ChartBeat data source

  You can connect to web services of popular sites like ChartBeat using the `ChartBeat` connection type. To enable this connection, follow the steps below:
  
  Click the `Data Source` button in the configuration panel to add a new data connection.
   
   ![Data button](/static/assets/working-with-datasource/data-connectors/images/chartbeat/databutton.png)
   
   Click `CREATE NEW` to launch a new connection from the connection type panel. 
   
   ![Data source button](/static/assets/working-with-datasource/data-connectors/images/chartbeat/datasourcebutton.png)
  
  Select the `ChartBeat` connection button in the connection type panel.

  ![ChartBeat button](/static/assets/working-with-datasource/data-connectors/images/chartbeat/chartbeat_button.png)

  The `NEW DATA SOURCE` configuration window will open.

  ![ChartBeat panel](/static/assets/working-with-datasource/data-connectors/images/chartbeat/chartbeat_panel.png)

  Enter an API in the URL text box which must be a valid REST API.

  Refer to the [ChartBeat API documentation](http://support.chartbeat.com/docs/api.html)

  ![URL](/static/assets/working-with-datasource/data-connectors/images/chartbeat/URL_chartbeat.png)

  Choose an appropriate method for the REST API (`GET` or `POST`) in the type combo box.

  ![Method ChartBeat](/static/assets/working-with-datasource/data-connectors/images/chartbeat/Method_chartbeat.png)

  Add header information by clicking `ADD`, if required.

  ![Header ChartBeat](/static/assets/working-with-datasource/data-connectors/images/chartbeat/Header_chartbeat.png)
  
  Choose an appropriate `Refresh Setting` for the REST API from the time intervals shown in the combo box.

  ![Refresh web data connection](/static/assets/working-with-datasource/data-connectors/images/chartbeat/Refresh_webdataconnection.png)

  Choose an appropriate `Data Format` for the REST API (`JSON` or `CSV`) in the type combo box.

  ![Data web data connection](/static/assets/working-with-datasource/data-connectors/images/chartbeat/Data_webdataconnection.png)

  Choose an appropriate authentication type for the REST API (`Basic HTTP Authentication` or `None`) in the type combo box.

  ![Authentication web data connection](/static/assets/working-with-datasource/data-connectors/images/chartbeat/Authentication_webdataconnection.png)
  
  Click the `Preview & Connect` button in the `NEW DATA SOURCE` configuration panel.
  
  ![Connection type](/static/assets/working-with-datasource/data-connectors/images/chartbeat/chartbeat_connectiontype.png)

  The `Choose Schema(s)` window will open. You can select the schema and click `Connect`.
  
  ![Schema window](/static/assets/working-with-datasource/data-connectors/images/chartbeat/schemawindow.png)
  
  Now, you can enter the data design view window with the selected table schema. Drag and drop the table.
  
  ![Data view](/static/assets/working-with-datasource/data-connectors/images/chartbeat/dataview.png)

  Click the `Save` button to save the data source with a valid name.

   ![Save](/static/assets/working-with-datasource/data-connectors/images/chartbeat/save.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)