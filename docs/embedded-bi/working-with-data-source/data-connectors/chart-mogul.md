---
layout: post
title: ChartMogul – Embedded BI Data Connector | Bold BI Learning
description: Learn how to connect ChartMogul service through REST API endpoint with Bold BI Embedded and create data source.
canonical: "/cloud-bi/working-with-data-source/data-connectors/chart-mogul/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to ChartMogul data source

  You can connect to web services of popular site like `ChartMogul` connection type. To enable this connection, follow the given steps.
  
  Click the `Data Source` button in the configuration panel to add a new data connection.
   
   ![Data button](/static/assets/embedded/working-with-datasource/data-connectors/images/chartmogul/databutton.png)
   
   Click `CREATE NEW` to launch a new connection from the connection type panel. 
   
   ![Data source button](/static/assets/embedded/working-with-datasource/data-connectors/images/chartmogul/datasourcebutton.png)
  
  Select `Chart Mogul` connection button in the connection type panel.

  ![ChartMogul button](/static/assets/embedded/working-with-datasource/data-connectors/images/chartmogul/chartmogul_button.png)

  The `NEW DATA SOURCE` configuration window opens.

  ![ChartMogul panel](/static/assets/embedded/working-with-datasource/data-connectors/images/chartmogul/chartmogul_panel.png)

  Enter an API in the URL text box which must be a valid REST API.

  Refer to the [Chart Mogul API documentation](https://dev.chartmogul.com/reference)

  ![URL](/static/assets/embedded/working-with-datasource/data-connectors/images/chartmogul/URL_chartmogul.png)

  Choose an appropriate method for the REST API; it can be either `GET` or `POST` in the type combo box.

  ![Method ChartMogul](/static/assets/embedded/working-with-datasource/data-connectors/images/chartmogul/Method_chartmogul.png)

  Add header information by clicking `ADD`, if required.

  ![Header ChartMogul](/static/assets/embedded/working-with-datasource/data-connectors/images/chartmogul/Header_chartmogul.png)
  
  Choose an appropriate `Refresh Settings` for the REST API; it can be any one of the time intervals shown in the combo box.

  ![Refresh web data connection](/static/assets/embedded/working-with-datasource/data-connectors/images/chartmogul/Refresh_webdataconnection.png)

  Choose an appropriate `Data Format` for the REST API; it can be either `JSON` or `CSV` in the type combo box.

  ![Data web data connection](/static/assets/embedded/working-with-datasource/data-connectors/images/chartmogul/Data_webdataconnection.png)

  Choose an appropriate authentication type for the REST API; it can be either `Basic HTTP Authentication` or `None` (No Authentication) in the type combo box.

  ![Authentication web data connection](/static/assets/embedded/working-with-datasource/data-connectors/images/chartmogul/Authentication_webdataconnection.png)
  
  Click the `Preview & Connect` button in the `NEW DATA SOURCE`configuration panel. 
  
  ![Connection type](/static/assets/embedded/working-with-datasource/data-connectors/images/chartmogul/chartmogul_connectiontype.png)

  `Choose Schema(s)` window opens. You can select the schema and click `Connect`.
  
  ![Schema window](/static/assets/embedded/working-with-datasource/data-connectors/images/chartmogul/schemawindow.png)
  
  Now, you can get into the data design view window with selected table schema. Drag and drop the table.
  
  ![Data view](/static/assets/embedded/working-with-datasource/data-connectors/images/chartmogul/dataview.png)

  Click `Save` button to save the data source with valid name.

   ![Save](/static/assets/embedded/working-with-datasource/data-connectors/images/chartmogul/save.png)

## Related links 
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)

[ChartMogul Integration](https://www.boldbi.com/integrations/chartmogul?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbichartmogulintegration)






  
































