---
layout: post
title: How to execute MS SQL table-valued function | Bold BI Docs
description: Learn the steps how to execute the Microsoft SQL table-valued function in Bold BI with MS SQL data source in embedded mode of Web designer.
canonical: "/faq/how-to-execute-the-ms-sql-table-valued-function-in-bold-bi/"
platform: bold-bi
documentation: ug
---

# How to execute the Microsoft SQL table-valued function in Bold BI

Bold BI allows you to execute the table-valued function using the `Microsoft SQL data` source code view by following these steps.

## Creating a table-valued function in the Microsoft SQL server

Create a table-valued function in the `Microsoft SQL Server` before connecting the data source in Bold BI. 

**Sample query:**

      CREATE FUNCTION tableValuedReleases (
        @ReleaseId INT
        )
        RETURNS TABLE
        AS
        RETURN
        SELECT
        ReleaseId,
        ReleaseDate,
        ReleaseVersion,
        LastModifiedDate,
        IsActive
        FROM
        Releases
        WHERE
        ReleaseId = @ReleaseId;

## Executing the table-valued function in Bold BI

1.	Refer to the instructions for  [Connecting Bold BI to SQL data source](/working-with-data-sources/data-connectors/sql-data-source/#connecting-bold-bi-to-microsoft-sql-server-data-source) in order to successfully establish the connection.

2.	After connecting to the data source, [switch to the code view](/working-with-data-sources/data-connectors/sql-data-source/#switch-to-code-view) by enabling the slider option in the tools pane in the data design view. You will then find the query editor window where you can execute custom queries.

	![Code view mode](/static/assets/faq/images/tablevalued-code-view.png#max-width=100%)
	
3.	Here, you can enter the query to retrieve data from the `tableValuedReleases` table-valued function by providing the value for the `ReleaseId` parameter. Once you have entered the query, click on the `Run` button to execute it.

	![Alter query](/static/assets/faq/images/table-valued-query.png#max-width=100%)
	
4.	You can view the data for your query at the bottom of the query editor by clicking `Update.`
    
	![Preview data](/static/assets/faq/images/table-valued-data.png#max-width=100%)
	