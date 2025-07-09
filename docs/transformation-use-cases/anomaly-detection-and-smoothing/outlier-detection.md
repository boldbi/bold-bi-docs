---
layout: post
title: Transformation Detecting Outlier | Bold Data Hub Learning
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to detect the outlier and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Outlier Detection and Transforming Data Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, detect outliers through transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.


**Sample Data Source:**  
[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Outlier Detection  

### Overview  

Detecting anomalies in ticket resolution patterns helps identify potential issues such as workload imbalance, inefficiencies, or unusual spikes in customer complaints. This can be achieved by analyzing:  

- The number of tickets resolved by each agent  
- Unusually high service durations  
- Sudden spikes in customer complaints  

### Approach  

We calculate the **daily ticket count** and use a **7-day rolling average** to detect anomalies in ticket volume trends.  

### SQL Query for Outlier Detection  

```sql
SELECT 
    Ticket_Creation_Date, 
    COUNT(Ticket_ID) AS Daily_Ticket_Count, 
    AVG(COUNT(Ticket_ID)) OVER (
        ORDER BY Ticket_Creation_Date 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS Rolling_Avg_7_Days 
FROM {pipeline_name}.sample_csc_data 
GROUP BY Ticket_Creation_Date 
ORDER BY Ticket_Creation_Date;
```

![Tranformation Use Case](/static/assets/transformation-use-case/data-anomalies/images/resolution_outliers.png#max-width=100%)