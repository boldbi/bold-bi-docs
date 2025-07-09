---
layout: post
title: Transformation Anomaly Flagging Data | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to flag the anomalies and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Anomaly Flagging and Transforming Data Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, flag anomalies through transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.


**Sample Data Source:**  

[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Anomaly Flagging  

### Overview 
 
Identifying anomalies in response and resolution times helps detect inefficiencies and potential service issues. Anomalies can also highlight customer dissatisfaction, requiring further investigation.  

### Approach  

We use statistical thresholds to flag anomalies: 
 
- **"High Resolution Time"** → Tickets with resolution times exceeding **2 standard deviations above the mean**  
- **"Low Satisfaction"** → Tickets with customer satisfaction scores below **2**  
- **"Normal"** → All other cases  

### SQL Query for Anomaly Flagging  

```sql
SELECT 
    Ticket_ID, 
    Customer_ID, 
    Agent_ID, 
    Resolution_Time, 
    Customer_Satisfaction, 
    CASE 
        WHEN Resolution_Time > (
            SELECT AVG(Resolution_Time) + 2 * STDDEV(Resolution_Time) 
            FROM {pipeline}.sample_csc_data
        ) THEN 'High Resolution Time' 
        WHEN Customer_Satisfaction < 2 THEN 'Low Satisfaction' 
        ELSE 'Normal' 
    END AS Anomaly_Flag 
FROM {pipeline_name}.sample_csc_data;
```

![Tranformation Use Case](/static/assets/transformation-use-case/data-anomalies/images/ticket_anomaly.png#max-width=100%)