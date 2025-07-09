---
layout: post
title: Transformation Service Level Adherence| Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to monitor the service level adherence and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Monitoring Service Analysis Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, monitor service level adherence using transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**  

[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv`)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Service Level Adherence  

### Overview  

Monitoring service level adherence ensures that customer support meets defined **Service Level Agreement (SLA)** thresholds. This query tracks the number of tickets resolved within **24 hours** per agent.  

### Approach  

We count tickets that meet the SLA condition:  

- **Resolved within SLA** → Tickets closed in **≤ 24 hours**  
- **Grouped by Agent** → To assess individual performance  

### SQL Query for Tracking SLA Adherence  

```sql
SELECT 
    Agent_ID, 
    COUNT(Ticket_ID) AS Tickets_Resolved_Within_SLA 
FROM {pipeline_name}.sample_csc_data 
WHERE Ticket_Status = 'Resolved' 
    AND "Resolution_Time (hrs)" <= 24 
GROUP BY Agent_ID 
ORDER BY Tickets_Resolved_Within_SLA DESC;
```

![Tranformation Use Case](/static/assets/transformation-use-case/aggregation-and-summarization/images/ticket_sla.png#max-width=100%)
