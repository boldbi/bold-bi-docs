---
layout: post
title: Transformation Create Derived Columns | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to create derived columns and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Create Derived Columns and Transforming Data Using Bold Data Hub 
 
In this article, we will demonstrate how to import tables from a CSV file, to create derived columns using transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**  

[Tickets](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/tickets.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Creating Derived Columns

### Overview 
 
Derived columns are new columns created based on existing data. They allow us to gain more granular insights by combining or transforming existing variables. For example, we can combine customer status (new vs. returning) with ticket priority to understand how these two factors influence support ticket trends.

### Approach  

We can create a new column that combines customer status (e.g., determined by the first ticket date) with ticket priority. This combination can help us analyze the support needs of new versus returning customers and how ticket priority impacts their service experience.

### SQL Query for Creating Derived Columns  

```sql
SELECT *, 
       CASE 
           WHEN CAST(SUBSTR(Customer_ID, 5) AS INTEGER) % 2 = 0 THEN 'Returning' 
           ELSE 'New' 
       END AS Customer_Status,
       CASE 
           WHEN CAST(SUBSTR(Customer_ID, 5) AS INTEGER) % 2 = 0 
           THEN 'Returning - ' || Priority 
           ELSE 'New - ' || Priority 
       END AS Customer_Status_Priority
FROM {pipeline_name}.tickets;
```