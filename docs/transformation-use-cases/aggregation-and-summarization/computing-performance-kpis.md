---
layout: post
title: Transformation Resolution Time Summary | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to analyze the ticket resolution summary and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Computing Performance KPIs Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, analyze the ticket resolution time summary through transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.


**Sample Data Source:**  

[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Ticket Resolution Time Summary  

### Overview  

Analyzing ticket resolution times per service category helps identify efficiency trends and potential areas for improvement. We calculate the **average**, **minimum**, and **maximum** resolution times for each ticket category.  

### Approach  

We aggregate resolution time statistics for resolved tickets:  

- **Average Resolution Time** → Mean time taken to resolve tickets  
- **Minimum Resolution Time** → Fastest resolution recorded  
- **Maximum Resolution Time** → Longest resolution duration  

### SQL Query for Ticket Resolution Time Summary  

```sql
SELECT 
    Ticket_Category, 
    AVG("Resolution_Time (hrs)") AS Avg_Resolution_Time, 
    MIN("Resolution_Time (hrs)") AS Min_Resolution_Time, 
    MAX("Resolution_Time (hrs)") AS Max_Resolution_Time 
FROM {pipeline_name}.sample_csc_data 
WHERE Ticket_Status = 'Resolved' 
GROUP BY Ticket_Category 
ORDER BY Ticket_Category;
```
![Tranformation Use Case](/static/assets/transformation-use-case/aggregation-and-summarization/images/resolution_summary.png#max-width=100%)
