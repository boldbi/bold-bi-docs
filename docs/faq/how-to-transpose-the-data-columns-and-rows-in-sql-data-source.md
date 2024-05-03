---
layout: post
title: Transpose the data columns and rows in SQL server| Bold BI Docs
description: Learn the steps a user has to transpose the data columns and rows in SQL data source in Bold BI for embedded analytics.
canonical: "/faq/how-to-transpose-the-data-columns-and-rows-in-sql-data-source/"
platform: bold-bi
documentation: ug
---

# How to transpose the data columns and rows in MS SQL data source

Bold BI allows you to transpose the data columns and rows using the Code view mode in the MS SQL data source by following these steps.

## Transposing data columns and rows in Bold BI

1.	Refer to the [Connecting Bold BI to the SQL data source](/working-with-data-sources/data-connectors/sql-data-source/#connecting-bold-bi-to-microsoft-sql-server-data-source) in order to successfully connect to it.

2.	After dragging and dropping the required table onto the data design view page, switch to the code view mode in Bold BI as follows.

    ![Code view mode](/static/assets/faq/images/code-view.png)

3.	After switching to code view mode, you can locate the query designer page where you can modify the query to transpose the highlighted column below into rows.

    ![Table rows](/static/assets/faq/images/table-column.png)

4.	Alter the input query using `PIVOT()` to transpose the data columns and rows in code view mode as shown below.

      **Example query:**
	
        SELECT * FROM (SELECT
          [Patient_details_db].[Date] AS [Date],
          [Patient_details_db].[PatientID] AS [PatientID],
          [Patient_details_db].[HeartRate] AS [HeartRate],
          [Patient_details_db].[BloodPressure] AS [BloodPressure],
          [Patient_details_db].[BodyTemperature] AS [BodyTemperature],
          [Patient_details_db].[SleepHours] AS [SleepHours],
          [Patient_details_db].[DeepSleepHours] AS [DeepSleepHours],
          [Patient_details_db].[DistanceWalked] AS [DistanceWalked],
          [Patient_details_db].[TargetDistance] AS [TargetDistance]
        FROM [dbo].[Patient_details_db] AS [Patient_details_db]) [Sheet]
        PIVOT(
        SUM([HeartRate])
        FOR [PatientID] IN (
           [PATIENT_1],
           [PATIENT_2],
           [PATIENT_3],
           [PATIENT_4],
           [PATIENT_5])
        ) AS pivot_table
	
5.	Click on the `Run` button to execute the altered query.

    ![Run icon](/static/assets/faq/images/run-icon.png)
	
6.	Click on the `Update` button to see the result where the row is changed to a column.

    ![Transposed data](/static/assets/faq/images/transposed-rows.png)
