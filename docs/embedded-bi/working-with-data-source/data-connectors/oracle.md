---
layout: post
title: Oracle – Embedded BI Connector | Bold BI Documentation
description: Learn how to connect Oracle database with Bold BI Embedded and create data source for widget configuration.
canonical: "/cloud-bi/working-with-data-source/data-connectors/oracle/"
platform: bold-bi
documentation: ug
---
   
# Connecting Bold BI to Oracle Database

**Supported Server Versions:** Oracle Database `(11g, 12c, 18c, and 19c)`

   Using the `Oracle` connection type, you can connect an Oracle database.

   Click `Data Source` button in the configuration panel to add a new data connection.
   
   ![Data button](/static/assets/embedded/working-with-datasource/data-connectors/images/oracle/datasource.png)
   
   Click `CREATE NEW` to launch a new connection from the connection type panel. 
   
   ![Data source button](/static/assets/embedded/working-with-datasource/data-connectors/images/oracle/datasourcebutton.png)
   
   Click `Oracle` connection button in the connection type panel.
   
   ![Oracle button](/static/assets/embedded/working-with-datasource/data-connectors/images/oracle/Oracle-button.png)
   
   Set the `server Name` and `port number` where the Oracle service is running. 
   
   `Service Instance Name` is an optional parameter. Set the Service Instance Name if you have specific name for Oracle service: otherwise, Oracle connection will be launched with default service name

   > **NOTE:**  What is Service Instance Name – Service Instance Name is a name given for Oracle Cloud Service. For more details refer [Service Instance Name](https://docs.oracle.com/en/cloud/paas/identity-cloud/uaids/service-instances.html)

   Enter the `user name` and `password` to connect to the Oracle.
   
   Select a database from the drop-down list and click the `Connect` button to connect the Oracle.

   ![Oracle connect](/static/assets/embedded/working-with-datasource/data-connectors/images/oracle/Oracle-connect.png)
   
   > **NOTE:**  Initially, data will be extracted based on the Max Rows selected in order to proceed with data model creation. The remaining records (there is no limit) will be extracted during the next refresh.  <br /> 
   ![Max rows option](/static/assets/embedded/working-with-datasource/data-connectors/images/oracle/maxRowOption.png#max-width=45%)		

   The selected database will be opened in the data design view window.

   ![Oracle database](/static/assets/embedded/working-with-datasource/data-connectors/images/oracle/Oracle-database.png)

   Drag and drop the table from table list, and click `Save` button to save the data source with valid name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[Oracle Integration](https://www.boldbi.com/integrations/oracle?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbioracleintegration)
   










  
































