---
layout: post
title: Convert Timestamp column in PostgreSQL | Embedded Bold BI Docs
description: Learn the steps how to convert a DateTime (Timestamp) column from one time zone to another in the PostgreSQL data source using Embedded Bold BI's Web designer.
canonical: "/faq/how-to-convert-timestamp-column-from-one-timezone-to-another-in-the-postgresql-datasource/"
platform: bold-bi
documentation: ug
---

# How to convert a timestamp column from one timezone to another in the PostgreSQL data source

The Bold BI application allows you to convert the timestamp column in the PostgreSQL data source from one time zone to another.

## Steps to convert timestamp column to another time zone

1.	Refer to the [Connecting Bold BI to PostgreSQL data source documentation](/working-with-data-sources/data-connectors/postgresql/) for successful connection.

2.	Drag and drop the table from the table schema onto the data design view page.

    ![Drag table](/static/assets/faq/images/drag-timestamp-table.png)

3.	Click on the `Expression` icon and choose the timestamp column that needs to be converted to the local time zone, as shown in the following image.

    ![Expression icon](/static/assets/faq/images/expression-icon.png)
	
	![Datetime column](/static/assets/faq/images/timestamp-column.png)

4.	Then, add the following code to the timestamp column that needs to be converted from Greenwich Mean Time (GMT) to your local time zone in the Expression editor, as shown in the following image, and click `Save`.

        AT TIME ZONE 'GMT' AT TIME ZONE '+05:30'
	  
	The above sample registers the timestamp column in the GMT format and converts the timestamp into Indian Standard Time(IST).
	
	![Create Expression](/static/assets/faq/images/timezone-expression.png)
	
	>**NOTE:** The time difference between GMT and your local time zone should be manually set in the above sample.
	
5.	Click on `Update` and you will find the result, where the created timestamp column in GMT will be converted into Indian Standard Time.

    ![Result preview](/static/assets/faq/images/converted-timezone.png)

    >**Note:**  This documentation is applicable to all web data sources in extract mode only, as well as [PostgreSQL in live](/working-with-data-sources/data-connectors/postgresql/#live-mode-connection) and [extract](/working-with-data-sources/data-connectors/postgresql/#extract-mode-connection) modes in the Bold BI. For [MS SQL Server](/working-with-data-sources/data-connectors/ms-sql-server/) and [MySQL](/working-with-data-sources/data-connectors/mysql/) data sources, the following expressions should be used to convert the GMT date column to the Indian Standard Time zone.
	
	<table>
	<tr>
	<th style="text-align:center">
	Data sources
    </th>
	<th style="text-align:center">
	Expressions
	</th>
	</tr>
	<tr>
	<td>
	MS SQL Server
    </td>
	<td>
	DATEADD(mi,DATEDIFF(mi, GETUTCDATE(), GETDATE()),[last_requested])
	</td>
	</tr>
	<tr>
	<td>
	MySQL
    </td>
	<td>
	CONVERT_TZ([last_requested],'+00:00','+05:30')
	</td>
	</tr>
	</table>



