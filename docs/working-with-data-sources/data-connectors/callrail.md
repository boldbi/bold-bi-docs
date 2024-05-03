---
layout: post
title: CallRail – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect CallRail data through REST API endpoint with Bold BI Cloud and create data source for dashboard configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to CallRail data source

  You can connect to web services of popular sites like CallRail using the `CallRail` connection type. To enable this connection, follow the given steps:
  
  Click the `Data Source` button in the configuration panel to add a new data connection.
   
   ![Data button](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
   Click `CREATE NEW` to launch a new connection from the connection type panel. 
   
   ![Data source button](/static/assets/working-with-datasource/data-connectors/images/common/datasourcebutton.png)
  
  Select the `CallRail` connection button in the connection type panel.

  ![Call rail button](/static/assets/working-with-datasource/data-connectors/images/call-rail/callrail_button.png)

  The `NEW DATA SOURCE` configuration window will open.

  ![Call rail panel](/static/assets/working-with-datasource/data-connectors/images/call-rail/callrail_panel.png)

  Enter an API in the URL text box, which must be a valid REST API.

  Refer to the [CallRail API documentation](https://apidocs.callrail.com/)

  ![URL](/static/assets/working-with-datasource/data-connectors/images/call-rail/URL_callrail.png)

  Choose an appropriate method for the REST API; it can either be `GET` or `POST` in the type combo box.

  ![Method Callrail](/static/assets/working-with-datasource/data-connectors/images/call-rail/Method_callrail.png)

  Add header information by clicking `ADD`, if required.

  ![Header CallRail](/static/assets/working-with-datasource/data-connectors/images/call-rail/Header_callrail.png)
  
  Choose an appropriate `Refresh Setting` for the REST API; it can be any one of the time intervals shown in the combo box.

  ![Refresh web data connection](/static/assets/working-with-datasource/data-connectors/images/call-rail/Refresh_webdataconnection.png)

  Please choose an appropriate `Data Format` for the REST API; it can be either `JSON` or `CSV` in the type combo box.

  ![Data web data connection](/static/assets/working-with-datasource/data-connectors/images/call-rail/Data_webdataconnection.png)

  Choose an appropriate authentication type for the REST API; it can be either `Basic HTTP Authentication` or `None` (No Authentication) in the type combo box.

  ![Authentication web data connection](/static/assets/working-with-datasource/data-connectors/images/call-rail/Authentication_webdataconnection.png)
  
  Click the `Preview & Connect` button in the `NEW DATA SOURCE` configuration panel. 
  
  ![Connection type](/static/assets/working-with-datasource/data-connectors/images/call-rail/callrail_connectiontype.png)

  The `Choose Schema(s)` window will open. You can select the schema and click `Connect`.
  
  ![Schema window](/static/assets/working-with-datasource/data-connectors/images/call-rail/asknicelyschemawindow.png)
  
  Now, you can enter the data design view window with the selected table schema. Drag and drop the table.
  
  ![Data view](/static/assets/working-with-datasource/data-connectors/images/call-rail/dataview_asknicely.png)

  Click the `Save` button to save the data source with a valid name.

   ![Save](/static/assets/working-with-datasource/data-connectors/images/call-rail/save_asknicely.png)

## Related links

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)