---
layout: post
title: How to group data using the code view and views? | Bold BI Docs
description: Learn the steps of how to group data using the code view and views in Embedded Bold BI's Web designer to create & embed powerful dashboards.
canonical: "/faq/how-to-group-the-data-using-bold-bi/"
platform: bold-bi
documentation: ug
---

# How to group the data using Bold BI

You can apply grouping based on specific fields either in code view mode or by creating views for a required table and accessing the views using Bold BI.

## Grouping data using the code view mode

1.	Refer to the instructions for [Connecting Bold BI to SQL data source](/working-with-data-sources/data-connectors/sql-data-source/#connecting-bold-bi-to-microsoft-sql-server-data-source) in order to successfully establish the connection.

2.	Drag and drop the table from the table schema in the data design view page. Switch to the code view by enabling the toggle option in the tools pane, as shown in the following image.

    ![Code view mode](/static/assets/faq/images/patientdb-code-view.png#max-width=100%)

3.	You can find the query editor window where you can alter the query by using `GROUP BY` with aggregate functions such as SUM(), COUNT(), MAX(), MIN(), and more to group the records based on one or more columns. In this case, the data is grouped based on the `PatientID` column.

     **Example query:**
	 
        SELECT
          RIGHT([Patient_details_db].[PatientID],1) AS [PatientID],
          DATENAME("year",[Patient_details_db].[Date]) AS [Date],
          AVG([Patient_details_db].[HeartRate]) AS [HeartRate],
          AVG([Patient_details_db].[BloodPressure]) AS [BloodPressure],
          AVG([Patient_details_db].[BodyTemperature]) AS [BodyTemperature],
          AVG([Patient_details_db].[SleepHours]) AS [SleepHours],
          SUM([Patient_details_db].[DeepSleepHours]) AS [DeepSleepHours],
          SUM([Patient_details_db].[DistanceWalked]) AS [DistanceWalked],
          SUM([Patient_details_db].[TargetDistance]) AS [TargetDistance]
        FROM [dbo].[Patient_details_db] AS [Patient_details_db]
        GROUP BY PatientID,Date

4.	After entering your query, click the `Run` button in the tools pane.

    ![Run icon](/static/assets/faq/images/patientdb-run-icon.png#max-width=100%)
	
5.	You can view the data for your query at the bottom of the query editor by clicking `Update.`

    ![Resulting data](/static/assets/faq/images/patientdb-grouping-result.png#max-width=100%)
	
## Grouping data using views:

1.	Create a view for a required table with `GROUP BY` in **Microsoft SQL Server**. In this case, a view has been created to group data based on the `PatientID` column.

     **Example view query:**

        CREATE VIEW [dbo].[Patient_details_VIEW] AS
          SELECT
            RIGHT([Patient_details_db].[PatientID],1) AS [PatientID],
            DATENAME("year",[Patient_details_db].[Date]) AS [Date],
            AVG([Patient_details_db].[HeartRate]) AS [HeartRate],
            AVG([Patient_details_db].[BloodPressure]) AS [BloodPressure],
            AVG([Patient_details_db].[BodyTemperature]) AS [BodyTemperature],
            AVG([Patient_details_db].[SleepHours]) AS [SleepHours],
            SUM([Patient_details_db].[DeepSleepHours]) AS [DeepSleepHours],
            SUM([Patient_details_db].[DistanceWalked]) AS [DistanceWalked],
            SUM([Patient_details_db].[TargetDistance]) AS [TargetDistance]
          FROM [dbo].[Patient_details_db] AS [Patient_details_db]
          GROUP BY PatientID,Date

2.	You can access the view by [Connecting Bold BI to the SQL data source.](/working-with-data-sources/data-connectors/sql-data-source/#connecting-bold-bi-to-microsoft-sql-server-data-source) After connecting to the data source, drag and drop the view from the views schema in the data design view page.
    
    ![Drag view](/static/assets/faq/images/drag-views.png#max-width=100%)
	
3.	Click on the `Update` button, and you will be able to find the records based on the grouped column.

    ![Resulting view data](/static/assets/faq/images/view-data.png#max-width=100%)
	
    