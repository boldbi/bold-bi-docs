---
layout: post
title: Connecting to Stored Procedures – Embedded BI | Bold BI Docs
description: Learn how to connect to the stored procedures in the SQL Server database with Bold BI Embedded Dashboard.
canonical: /working-with-data-source/connecting-to-stored-procedures/
platform: bold-bi
documentation: ug
---

# Connecting to Stored Procedures in SQL Server database

The Bold BI allows you to use the stored procedure defined in the SQL Server database using the `Microsoft SQL` connection.

> **NOTE:** You can connect to a database hosted in the Microsoft SQL Server whose version should be 2012 or above.

Bold BI supports the following connection modes for the stored procedure connection.
1. OpenQuery
2. Internal Cache

## OpenQuery
In this OpenQuery mode, Bold BI executes the stored procedure queries on the specified linked server for every execution in the stored procedure data source.

### Prerequisites
 
Enable the Data Access for the stored procedure in SQL Server by executing the following query.
 
`EXEC sp_serveroption 'SQLServerName', 'DATA ACCESS', TRUE`

> **NOTE:** If you did not enable the Data Access in SQL Server, you cannot access the stored procedure with OpenQuery option in Bold BI.

### Supported server

This OpenQuery only supports the Microsoft SQL Server and Azure SQL Database (Managed Instance only). All other servers like Azure SQL Database, Azure SQL Data Warehouse (Azure Synapse Analytics), and Parallel Data Warehouse does not support this OpenQuery.

## Internal Cache
In Internal Cache mode, Bold BI executes the stored procedure completely and moving the result into a temporary table. After that, Bold BI uses the created temporary table for every action execution in the stored procedure's data source.

## Connecting to SQL Server database
1. To connect the SQL Server database, refer to this link [Microsoft SQL](/working-with-data-source/data-connectors/sql-data-source/).
     
2. If it succeeds, you can get into the data design view with the available stored procedure displayed on the left pane of the tree view. The available parameters can also be displayed while expanding the procedures.

   ![Stored procedure treeview](/static/assets/working-with-datasource/images/storedprocedure_treeview.png)

3. You can drag the desired stored procedure into the canvas area to create a table view with the supplied parameters.

   ![Stored procedure parameters](/static/assets/working-with-datasource/images/storedprocedure_parameters.png)

    Here, you can choose either OpenQuery or Internal Cache for your stored procedure connection.

4. The Dashboard Designer allows you to edit the supplied parameters by using the edit parameters available in the created table.

   ![Stored procedure settings](/static/assets/working-with-datasource/images/storedprocedure_settings.png)
