---
layout: post
title: Live Agent – Embedded BI Data Connector | Bold BI Docs
description: Learn how to connect Live Agent web service through REST API endpoint with Bold BI Embedded and create data source for dashboard configuration.
canonical: "/cloud-bi/working-with-data-source/data-connectors/live-agent/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to LiveAgent data source

  You can connect to web services of popular site like `LiveAgent` connection type. To enable this connection, follow the given steps.
  
  Click the `Data Source` button in the configuration panel to add a new data connection.
   
   ![Data button](/static/assets/embedded/working-with-datasource/data-connectors/images/common/databutton.png)
   
   Click `CREATE NEW` to launch a new connection from the connection type panel. 
   
   ![Data source button](/static/assets/embedded/working-with-datasource/data-connectors/images/common/datasourcebutton.png)
  
  Select `Live Agent` connection button in the connection type panel.

  ![LiveAgent button](/static/assets/embedded/working-with-datasource/data-connectors/images/live-agent/liveagent_button.png)

  The `NEW DATA SOURCE` configuration window opens.

  ![LiveAgent panel](/static/assets/embedded/working-with-datasource/data-connectors/images/live-agent/liveagent_panel.png)

  Enter an API in the URL text box which must be a valid REST API.

  Refer to the [LiveAgent API documentation](https://www.ladesk.com/features/api/)

  ![URL](/static/assets/embedded/working-with-datasource/data-connectors/images/live-agent/URL_liveagent.png)

  Choose an appropriate method for the REST API; it can be either `GET` or `POST` in the type combo box.
  
  In **Max Rows**, enter the maximum number of rows to be fetched. This value is used to fetch the data via pagination.

  ![Method Live Agent](/static/assets/embedded/working-with-datasource/data-connectors/images/live-agent/Method_liveagent.png)

  Add header information by clicking `ADD`, if required.

  ![Header LiveAgent](/static/assets/embedded/working-with-datasource/data-connectors/images/live-agent/Header_liveagent.png)
  
  Choose an appropriate `Refresh Settings` for the REST API; it can be any one of the time intervals shown in the combo box.

  ![Refresh web data connection](/static/assets/embedded/working-with-datasource/data-connectors/images/live-agent/Refresh_webdataconnection.png)

  Choose an appropriate `Data Format` for the REST API; it can be either `JSON` or `CSV` in the type combo box.

  ![Data web data connection](/static/assets/embedded/working-with-datasource/data-connectors/images/live-agent/Data_webdataconnection.png)

  Choose an appropriate authentication type for the REST API; it can be either `Basic HTTP Authentication` or `None` (No Authentication) in the type combo box.

  ![Authentication web data connection](/static/assets/embedded/working-with-datasource/data-connectors/images/live-agent/Authentication_webdataconnection.png)
  
  Click the `Preview & Connect` button in the `NEW DATA SOURCE`configuration panel. 
  
  ![Connection type](/static/assets/embedded/working-with-datasource/data-connectors/images/live-agent/liveagent_connectiontype.png)

  `Choose Schema(s)` window opens. You can select the schema and click `Connect`.
  
  ![Schema window](/static/assets/embedded/working-with-datasource/data-connectors/images/live-agent/asknicelyschemawindow.png)
  
  Now, you can get into the data design view window with selected table schema. Drag and drop the table.
  
  ![Data view](/static/assets/embedded/working-with-datasource/data-connectors/images/live-agent/dataview_asknicely.png)

  Click `Save` button to save the data source with valid name.

   ![Save](/static/assets/embedded/working-with-datasource/data-connectors/images/live-agent/save_asknicely.png)

## Related Links

[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[LiveAgent Integration](https://www.boldbi.com/integrations/liveagent?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiliveagentintegration)

  







  
































