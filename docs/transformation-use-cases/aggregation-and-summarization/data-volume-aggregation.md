---
layout: post
title: Transformation Ticket Count Aggregation | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to aggregate the ticket count based on the columns and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Track Ticket Count by Agent and Transforming Data Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, check ticket count by agent through transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.


**Sample Data Source:**  

[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Ticket Count by Agent  

### Overview  

Tracking the number of tickets resolved by each agent within specific time periods (daily, weekly) helps assess performance, identify workload distribution, and optimize resource allocation.  

### Approach  

We aggregate ticket resolution counts:  

- **Daily Ticket Count** → Grouping by `Agent_ID` and `Ticket_Resolution_Date`  
- **Weekly Ticket Count** → Extracting the **week number** from `Ticket_Resolution_Date`  

### SQL Query for Daily Ticket Count  

```sql
SELECT 
    Agent_ID, 
    Ticket_Resolution_Date, 
    COUNT(Ticket_ID) AS Tickets_Resolved 
FROM {pipeline_name}.sample_csc_data 
WHERE Ticket_Status = 'Resolved'
GROUP BY Agent_ID, Ticket_Resolution_Date 
ORDER BY Ticket_Resolution_Date, Agent_ID;
```

![Tranformation Use Case](/static/assets/transformation-use-case/aggregation-and-summarization/images/daily_ticket_count.png#max-width=100%)

### SQL Query for Weekly Ticket Count  
```sql
SELECT 
    Agent_ID, 
    EXTRACT(week FROM Ticket_Resolution_Date) AS Resolution_Week, 
    COUNT(Ticket_ID) AS Tickets_Resolved 
FROM {pipeline_name}.sample_csc_data 
WHERE Ticket_Status = 'Resolved' 
GROUP BY Agent_ID, EXTRACT(week FROM Ticket_Resolution_Date) 
ORDER BY Resolution_Week, Agent_ID;
```

![Tranformation Use Case](/static/assets/transformation-use-case/aggregation-and-summarization/images/weekly_ticket_count.png#max-width=100%)