---
layout: post
title: Transformation Segement Hour Of The Day | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to segment hour of the day and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Time-based Segmentation Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, segment the hour of the day through transformations, and migrate the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**
 
[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Hour-of-Day Segmentation  

### Overview  

Analyzing ticket allocation by **hour of the day** and **day of the week** helps identify service center load patterns. This allows businesses to optimize staffing and resource allocation.  

### Approach  

We extract:  

- **Hour of the day (`%H`)** to analyze peak hours  
- **Day of the week (`%w`)** to understand weekday vs. weekend trends  

### SQL Query for Hour-of-Day Segmentation  

```sql
SELECT 
    Ticket_ID, 
    Ticket_Status, 
    Priority, 
    Region, 
    City, 
    Country, 
    TO_TIMESTAMP(CAST(Ticket_Allocation_Timestamp AS BIGINT)) AS Ticket_Allocation_DateTime, 
    STRFTIME(TO_TIMESTAMP(CAST(Ticket_Allocation_Timestamp AS BIGINT)), '%H') AS Hour_Of_Day, 
    STRFTIME(TO_TIMESTAMP(CAST(Ticket_Allocation_Timestamp AS BIGINT)), '%w') AS Day_Of_Week 
FROM {pipeline_name}.sample_csc_data;
```

![Tranformation Use Case](/static/assets/transformation-use-case/date-time-adjustment/images/hour-of-day.png#max-width=100%)