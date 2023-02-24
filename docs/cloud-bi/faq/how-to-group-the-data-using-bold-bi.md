---
layout: post
title: How to group data using the code view and views | Bold BI Docs
description: Learn the steps of how to group data using the code view and views in Cloud Bold BI's Web designer to create powerful dashboards.
platform: bold-bi
documentation: ug
---

# How to group the data using Bold BI

You can apply grouping based on specific fields either in the code view mode or by creating views for a required table and accessing the views using the Bold BI.

## Grouping data using the code view mode

1.	Refer to the [Connecting Bold BI to SQL data source](https://help.boldbi.com/cloud-bi/working-with-data-source/data-connectors/sql-data-source/#connecting-bold-bi-to-microsoft-sql-server-data-source) to successfully connect to it.

2.	Drag and drop the table from the table schema in the data design view page. Switch to the code view by enabling the toggle option in the tools pane, as shown in the following image.

    ![Code view mode](/static/assets/cloud/faq/images/patientdb-code-view.png#max-width=100%)

3.	You can find the query editor window in which you can alter the query by using `GROUP BY` with the aggregate functions like SUM(), COUNT(), MAX(), MIN(), and more to group the records based on one or more columns. Here, the data is grouped based on the `PatientID` column.

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

    ![Run icon](/static/assets/cloud/faq/images/patientdb-run-icon.png#max-width=100%)
	
5.	You can view the data for your query at the bottom of the query editor by clicking `Update.`

    ![Resulting data](/static/assets/cloud/faq/images/patientdb-grouping-result.png#max-width=100%)
	
## Grouping data using views:

1.  Create a view for a required table with `GROUP BY` in **Microsoft SQL Server.** Here, we have created a view for grouping data based on the `PatientID` column.

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

2.	You can access the view by [Connecting Bold BI to the SQL data source.](https://help.boldbi.com/cloud-bi/working-with-data-source/data-connectors/sql-data-source/#connecting-bold-bi-to-microsoft-sql-server-data-source) After connecting to the data source, drag and drop the view from the views schema in the data design view page.
    
    ![Drag view](/static/assets/cloud/faq/images/drag-views.png#max-width=100%)
	
3.	Click on the `Update`, and you can find the records based on the grouped column.

    ![Resulting view data](/static/assets/cloud/faq/images/view-data.png#max-width=100%)
	
    