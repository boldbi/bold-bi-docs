---
layout: post
title: Transpose the data columns and rows in SQL server| Bold BI Docs
description: Learn the steps a user has to transpose the data columns and rows in SQL data source in Bold BI for embedded analytics.
canonical: "/cloud-bi/faq/how-to-transpose-the-data-columns-and-rows-in-sql-data-source/"
platform: bold-bi
documentation: ug
---

# How to transpose the data columns and rows in MS SQL data source

Bold BI allows you to transpose the data columns and rows using the Code view mode in the MS SQL data source by following these steps.

## Transposing data columns and rows in Bold BI

1.	Refer to the [Connecting Bold BI to SQL data source](https://help.boldbi.com/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#connecting-bold-bi-to-microsoft-sql-server-data-source) to successfully connect to it.

2.	After dragging and dropping the required table in the data design view page, switch to code the view mode in Bold BI as follows.

    ![Code view mode](/bold-bi-docs/static/assets/embedded/faq/images/code-view.png)

3.	After switching to the code view mode, you can find the query designer page in which you can alter the query to transpose the below highlighted column to rows.

    ![Table rows](/bold-bi-docs/static/assets/embedded/faq/images/table-column.png)

4.	Alter the input query with `PIVOT()`, to transpose the data columns and rows using the code view mode as follows.

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

    ![Run icon](/bold-bi-docs/static/assets/embedded/faq/images/run-icon.png)
	
6.	Click on the `Update` button and you can find the result where the row is changed to a column.

    ![Transposed data](/bold-bi-docs/static/assets/embedded/faq/images/transposed-rows.png)
