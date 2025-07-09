---
layout: post
title: Transformation Calculate Service Duration | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to calculate service duration and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Calculating Service Duration and Transforming Data Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, calculate service duration through transformations, and migrate the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**  

[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Calculating Service Duration  

### Overview 
 
Understanding the time taken to resolve tickets helps assess efficiency and identify potential bottlenecks in the support process. This query calculates the service duration by measuring the difference between ticket creation and resolution dates.  

### Approach  

We use the **`DATEDIFF`** function to compute the number of days between ticket creation and resolution. Only records with valid resolution dates are considered, and negative durations are excluded.  

### SQL Query for Calculating Service Duration  

```sql
SELECT 
    Ticket_ID, 
    Ticket_Creation_Date, 
    Ticket_Resolution_Date, 
    DATEDIFF('day', CAST(Ticket_Creation_Date AS DATE), CAST(Ticket_Resolution_Date AS DATE)) AS Service_Duration_Days 
FROM {pipeline_name}.sample_csc_data 
WHERE 
    Ticket_Resolution_Date IS NOT NULL 
    AND Ticket_Creation_Date IS NOT NULL 
    AND DATEDIFF('day', CAST(Ticket_Creation_Date AS DATE), CAST(Ticket_Resolution_Date AS DATE)) > 0;
```

![Tranformation Use Case](/static/assets/transformation-use-case/date-time-adjustment/images/service-duration.png#max-width=100%)

