---
layout: post
title: Flurry – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Flurry data through REST API endpoint with Bold BI Cloud and create data source for dashboard configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Flurry data source

  You can connect to web services of popular site like `Flurry` connection type. To enable this connection, follow the given steps.
  
  Click the `Data Source` button in the configuration panel to add a new data connection.
   
   ![Data button](/static/assets/working-with-datasource/data-connectors/images/common/databutton.png)
   
   Click `CREATE NEW` to launch a new connection from the connection type panel. 
   
   ![Data source button](/static/assets/working-with-datasource/data-connectors/images/common/datasourcebutton.png)
  
  Select `Flurry` connection button in the connection type panel.

  ![Flurry button](/static/assets/working-with-datasource/data-connectors/images/flurry/flurry_button.png)

  The `NEW DATA SOURCE` configuration window opens.

  ![Flurry panel](/static/assets/working-with-datasource/data-connectors/images/flurry/flurry_panel.png)

  Enter an API in the URL text box which must be a valid REST API.

  Refer to the [Flurry API documentation](https://developer.yahoo.com/flurry/docs/)

  ![URL](/static/assets/working-with-datasource/data-connectors/images/flurry/URL_flurry.png)

  Choose an appropriate method for the REST API; it can be either `GET` or `POST` in the type combo box.

  ![Method Flurry](/static/assets/working-with-datasource/data-connectors/images/flurry/Method_flurry.png)

  Add header information by clicking `ADD`, if required.

  ![Header Flurry](/static/assets/working-with-datasource/data-connectors/images/flurry/Header_flurry.png)
  
  Choose an appropriate `Refresh Settings` for the REST API; it can be any one of the time intervals shown in the combo box.

  ![Refresh web data connection](/static/assets/working-with-datasource/data-connectors/images/flurry/Refresh_webdataconnection.png)

  Choose an appropriate `Data Format` for the REST API; it can be either `JSON` or `CSV` in the type combo box.

  ![Data web data connection](/static/assets/working-with-datasource/data-connectors/images/flurry/Data_webdataconnection.png)

  Choose an appropriate authentication type for the REST API; it can be either `Basic HTTP Authentication` or `None` (No Authentication) in the type combo box.

  ![Authentication web data connection](/static/assets/working-with-datasource/data-connectors/images/flurry/Authentication_webdataconnection.png)
  
  Click the `Preview & Connect` button in the `NEW DATA SOURCE`configuration panel. 
  
  ![Connection type](/static/assets/working-with-datasource/data-connectors/images/flurry/flurry_connectiontype.png)

  `Choose Schema(s)` window opens. You can select the schema and click `Connect`.
  
  ![Schema window](/static/assets/working-with-datasource/data-connectors/images/flurry/asknicelyschemawindow.png)
  
  Now, you can get into the data design view window with selected table schema. Drag and drop the table.
  
  ![Data view](/static/assets/working-with-datasource/data-connectors/images/flurry/dataview_asknicely.png)

  Click `Save` button to save the data source with valid name.

   ![Save](/static/assets/working-with-datasource/data-connectors/images/flurry/save_asknicely.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

  







  
































