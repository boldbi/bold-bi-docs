---
layout: post
title: Transformation Generate Time Intervals | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to generate time intervals using date time columns and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Generating Time Intervals and Transforming Data Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, generate time intervals through transformations, and migrate the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**  

[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Generating Time Intervals  

### Overview  

Categorizing service request response times helps in performance analysis and identifying efficiency gaps. We classify response times into predefined thresholds:  

- **"Fast"** → Resolved within **1 day**  
- **"Medium"** → Resolved within **3 days**  
- **"Slow"** → Resolved after **3 days**  

### Approach  

We use a **`CASE`** statement to categorize response times based on the difference between ticket creation and resolution dates.  

### SQL Query for Generating Time Intervals  

```sql
SELECT 
    Ticket_ID, 
    Ticket_Creation_Date, 
    Ticket_Resolution_Date, 
    CASE 
        WHEN (CAST(Ticket_Resolution_Date AS DATE) - CAST(Ticket_Creation_Date AS DATE)) <= 1 THEN 'Fast' 
        WHEN (CAST(Ticket_Resolution_Date AS DATE) - CAST(Ticket_Creation_Date AS DATE)) <= 3 THEN 'Medium' 
        ELSE 'Slow' 
    END AS Response_Time_Category 
FROM {pipeline_name}.sample_csc_data;
```

![Tranformation Use Case](/static/assets/transformation-use-case/date-time-adjustment/images/time-intervals.png#max-width=100%)

