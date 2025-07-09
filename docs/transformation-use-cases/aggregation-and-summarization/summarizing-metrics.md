---
layout: post
title: Transformation Customer Satisfaction Summary | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to summarize the customer satisfaction and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Customer Satisfaction Summary and Transforming Data Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, generate a customer satisfaction summary through transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**

[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Apply Transformations

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Customer Satisfaction Summary  

### Overview  

Measuring **customer satisfaction** helps evaluate service quality, agent performance, and regional trends. This query calculates the **average satisfaction score** (or NPS) by **region**, **agent**, and **ticket category**.  

### Approach  

We aggregate **Customer Satisfaction Scores** for resolved tickets using:  

- **By Region** → Understand satisfaction trends across locations  
- **By Agent** → Assess individual agent performance  
- **By Ticket Category** → Identify service types needing improvement  

### SQL Query for Customer Satisfaction by Region  

```sql
SELECT 
    Region, 
    AVG(Customer_Satisfaction) AS Avg_Satisfaction_Score 
FROM {pipeline_name}.sample_csc_data 
WHERE Ticket_Status = 'Resolved' 
GROUP BY Region 
ORDER BY Region;
```
![Tranformation Use Case](/static/assets/transformation-use-case/aggregation-and-summarization/images/satisfaction_by_region.png#max-width=100%)

### SQL Query for Customer Satisfaction by Agent_ID
```sql
SELECT 
    Agent_ID, 
    AVG(Customer_Satisfaction) AS Avg_Satisfaction_Score 
FROM {pipeline_name}.sample_csc_data 
WHERE Ticket_Status = 'Resolved' 
GROUP BY Agent_ID 
ORDER BY Agent_ID;
```

![Tranformation Use Case](/static/assets/transformation-use-case/aggregation-and-summarization/images/satisfaction_by_agent.png#max-width=100%)



### SQL Query for Customer Satisfaction by Ticket_Category
```sql
SELECT 
    Ticket_Category, 
    AVG(Customer_Satisfaction) AS Avg_Satisfaction_Score 
FROM {pipeline_name}.sample_csc_data 
WHERE Ticket_Status = 'Resolved' 
GROUP BY Ticket_Category 
ORDER BY Ticket_Category;
```
![Tranformation Use Case](/static/assets/transformation-use-case/aggregation-and-summarization/images/satisfaction_by_ticket.png#max-width=100%)