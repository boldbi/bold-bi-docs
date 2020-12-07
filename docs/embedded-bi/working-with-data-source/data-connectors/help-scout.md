---
layout: post
title: Help Scout – Embedded BI Data Connector | Bold BI Docs
description: Learn how to connect Help Scout web service through REST API endpoint with Bold BI Embedded and create data source for dashboard configuration.
canonical: "/cloud-bi/working-with-data-source/data-connectors/help-scout/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Help Scout data source

  You can connect to web services of popular site like `Help Scout` connection type. To enable this connection, follow the given steps.
  
  Click the `Data Source` button in the configuration panel to add a new data connection.
   
   ![Data button](/static/assets/embedded/working-with-datasource/data-connectors/images/common/databutton.png)
   
   Click `CREATE NEW` to launch a new connection from the connection type panel. 
   
   ![Data source button](/static/assets/embedded/working-with-datasource/data-connectors/images/common/datasourcebutton.png)
  
  Select `Help Scout` connection button in the connection type panel.

  ![Help scout button](/static/assets/embedded/working-with-datasource/data-connectors/images/help-scout/helpscout_button.png)

  The `NEW DATA SOURCE` configuration window opens.

  ![Help scout panel](/static/assets/embedded/working-with-datasource/data-connectors/images/help-scout/helpscout_panel.png)

  Enter an API in the URL text box which must be a valid REST API.

  Refer to the [Help Scout API documentation](https://developer.helpscout.com/)

  ![URL](/static/assets/embedded/working-with-datasource/data-connectors/images/help-scout/URL_helpscout.png)

  Choose an appropriate method for the REST API; it can be either `GET` or `POST` in the type combo box.

  ![Method Help scout](/static/assets/embedded/working-with-datasource/data-connectors/images/help-scout/Method_helpscout.png)

  Add header information by clicking `ADD`, if required.

  ![Header Help scout](/static/assets/embedded/working-with-datasource/data-connectors/images/help-scout/Header_helpscout.png)
  
  Choose an appropriate `Refresh Settings` for the REST API; it can be any one of the time intervals shown in the combo box.

  ![Refresh web data connection](/static/assets/embedded/working-with-datasource/data-connectors/images/help-scout/Refresh_webdataconnection.png)

  Choose an appropriate `Data Format` for the REST API; it can be either `JSON` or `CSV` in the type combo box.

  ![Data web data connection](/static/assets/embedded/working-with-datasource/data-connectors/images/help-scout/Data_webdataconnection.png)

  Choose an appropriate authentication type for the REST API; it can be either `Basic HTTP Authentication` or `None` (No Authentication) in the type combo box.

  ![Authentication web data connection](/static/assets/embedded/working-with-datasource/data-connectors/images/help-scout/Authentication_webdataconnection.png)
  
  Click the `Preview & Connect` button in the `NEW DATA SOURCE`configuration panel. 
  
  ![Connection type](/static/assets/embedded/working-with-datasource/data-connectors/images/help-scout/helpscout_connectiontype.png)

  `Choose Schema(s)` window opens. You can select the schema and click `Connect`.
  
  ![Schema window](/static/assets/embedded/working-with-datasource/data-connectors/images/help-scout/asknicelyschemawindow.png)
  
  Now, you can get into the data design view window with selected table schema. Drag and drop the table.
  
  ![Data view](/static/assets/embedded/working-with-datasource/data-connectors/images/help-scout/dataview_asknicely.png)

  Click `Save` button to save the data source with valid name.

   ![Save](/static/assets/embedded/working-with-datasource/data-connectors/images/help-scout/save_asknicely.png)

## Related Links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)

[Help Scout Integration](https://www.boldbi.com/integrations/help-scout?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbihelpscoutintegration)
  







  
































