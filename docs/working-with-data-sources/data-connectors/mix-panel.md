---
layout: post
title: Mixpanel – Cloud BI Data Connector | Bold BI Learning
description: Learn how to connect Mixpanel service with Bold BI Cloud and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Mixpanel data source

  You can connect to web services of popular sites like `Mixpanel` by selecting the connection type. To enable this connection, follow the given steps.
  
  Click the `Data Source` button in the configuration panel to add a new data connection.
   
   ![Data button](/static/assets/working-with-datasource/data-connectors/images/common/databutton.png)
   
   Click `CREATE NEW` to launch a new connection from the connection type panel. 
   
   ![Data source button](/static/assets/working-with-datasource/data-connectors/images/common/datasourcebutton.png)
  
  Select `Mixpanel` connection button in the connection type panel.

  ![Mixpanel button](/static/assets/working-with-datasource/data-connectors/images/mixpanel/mixpanel_button.png)

  The `NEW DATA SOURCE` configuration window opens.

  ![Mixpanel panel](/static/assets/working-with-datasource/data-connectors/images/mixpanel/mixpanel_panel.png)

  Enter a valid REST API into the URL text box. 

  Refer to the [Mixpanel API documentation](https://mixpanel.com/help/reference/data-export-api) for more information

  ![URL](/static/assets/working-with-datasource/data-connectors/images/mixpanel/URL_mixpanel.png)

  Select the appropriate method for the REST API from the type combo box, which can be either `GET` or `POST`.

  ![Method Mixpanel](/static/assets/working-with-datasource/data-connectors/images/mixpanel/Method_mixpanel.png)

  Add header information by clicking `ADD`, if required.

  ![Header Mixpanel](/static/assets/working-with-datasource/data-connectors/images/mixpanel/Header_mixpanel.png)
  
  Choose an appropriate `Refresh Settings` for the REST API; it can be any one of the time intervals shown in the combo box.

  ![Refresh web data connection](/static/assets/working-with-datasource/data-connectors/images/mixpanel/Refresh_webdataconnection.png)

  Choose an appropriate `Data Format` for the REST API; it can be either `JSON` or `CSV` in the type combo box.

  ![Data web data connection](/static/assets/working-with-datasource/data-connectors/images/mixpanel/Data_webdataconnection.png)

  Choose an appropriate authentication type for the REST API; it can be either `Basic HTTP Authentication` or `None` (No Authentication) in the type combo box.

  ![Authentication web data connection](/static/assets/working-with-datasource/data-connectors/images/mixpanel/Authentication_webdataconnection.png)
  
  Click the `Preview & Connect` button in the `NEW DATA SOURCE`configuration panel. 
  
  ![Connection type](/static/assets/working-with-datasource/data-connectors/images/mixpanel/mixpanel_connectiontype.png)

  `Choose Schema(s)` window opens. You can select the schema and click `Connect`.
  
  ![Schema window](/static/assets/working-with-datasource/data-connectors/images/mixpanel/schemawindow.png)
  
  Now, you can enter the data design view window with the selected table schema. Drag and drop the table.
  
  ![Data view](/static/assets/working-with-datasource/data-connectors/images/mixpanel/dataview.png)

  Click `Save` button to save the data source with valid name.

   ![Save](/static/assets/working-with-datasource/data-connectors/images/mixpanel/save.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

  







  
































