---
layout: post
title: How to execute R scripts as stored procedure? | Bold BI Docs
description: Learn the steps how to execute the R language scripts as Microsoft SQL stored procedure in Bold BI in Cloud mode of Web designer.
platform: bold-bi
documentation: ug
---

# How to execute R language scripts using MS SQL data source in Bold BI

You can execute R language scripts in Bold BI by creating a stored procedure in the **Microsoft SQL Server.** Bold BI allows you to connect the SQL stored procedure with the R script by following these steps.

## Creating a stored procedure with R scripts in MS SQL Server

You need to create a stored procedure with R scripts in the **Microsoft SQL Server** using the following steps to execute the script in Bold BI.

1.	Launch the `Microsoft SQL Server Management Studio` in `Administrator` mode and execute the following queries to enable running R scripts in the Microsoft SQL Server.

        EXEC sp_configure 'show advanced options', 1
        GO
	<!-- -->
        sp_configure 'external_scripts_enabled', 1
        GO
        RECONFIGURE;
		
2.  After executing the above queries, open `Services` and Right-click the `SQL Server`, and click `Restart` to restart the Microsoft SQL Server.

    ![Restart SQL server](/static/assets/cloud/faq/images/restart-sql-server.png#max-width=100%)

Now, you can create stored procedures with R scripts in the Microsoft SQL Server.

3.	Here, a stored procedure is created with an R script for fetching records from the `Releases` table.

      **Example query:**
    
	       CREATE PROCEDURE ReleaseDetails
           AS EXECUTE sp_execute_external_script @language = N'R',
             @script = N'OutputDataSet<-InputDataSet',
             @input_data_1 = N'SELECT ReleaseId, ReleaseVersion, StartDate FROM Releases;'
           WITH RESULT SETS(([ID] INT, [Version] VARCHAR(MAX), [Date] DATETIME));
           GO

## Connecting stored procedure in Bold BI

1.	Refer to the [Connecting Bold BI to SQL data source](https://help.boldbi.com/cloud-bi/working-with-data-source/data-connectors/sql-data-source/#connecting-bold-bi-to-microsoft-sql-server-data-source) to successfully connect to it.

2.	Drag and drop the created stored procedure from the [stored procedure](https://help.boldbi.com/cloud-bi/working-with-data-source/data-connectors/sql-data-source/#connecting-to-stored-procedure-in-sql-server-database) schema in the data design view page. 

3.	While dragging the stored procedure, select the `Internal Cache` option in the `Parameters` window and click `OK.`

    ![Internal cache option](/static/assets/cloud/faq/images/internal-cache.png#max-width=65%)

4.	You can view the fetched data in the data grid by clicking `Update.`

    ![Update option](/static/assets/cloud/faq/images/update-R-records.png#max-width=100%)

5.	Click `Save` to save the data source with a relevant name to proceed with [designing a dashboard.](https://help.boldbi.com/cloud-bi/working-with-dashboards/)

    ![Save option](/static/assets/cloud/faq/images/save-option-r.png#max-width=100%)
