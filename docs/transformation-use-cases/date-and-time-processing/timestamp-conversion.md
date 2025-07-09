---
layout: post
title: Transformation Converting Timestamps | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to convert time stamps to date time column and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Converting Timestamps and Transforming Data Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, convert timestamps through transformations, and migrate the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**  

[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Converting Timestamps

### Overview
  
Raw timestamps are often stored in UNIX or numeric formats, making them difficult to interpret. Converting them into readable formats and adjusting them to the correct time zone improves data clarity and usability.  

### Approach  

We use **`TO_TIMESTAMP`** to convert raw numeric timestamps into a readable **datetime** format and apply a time zone conversion to **Asia/Kolkata**.  

### SQL Query for Converting Timestamps  

```sql
SELECT 
    Ticket_ID, 
    TO_TIMESTAMP(CAST(Ticket_Allocation_Timestamp AS BIGINT)) 
    AT TIME ZONE 'Asia/Kolkata' AS Ticket_Allocation_DateTime_Asia 
FROM {pipeline_name}.sample_csc_data;
```

![Tranformation Use Case](/static/assets/transformation-use-case/date-time-adjustment/images/timestamp-to-datetime.png#max-width=100%)

