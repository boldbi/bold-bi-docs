---
layout: post
title: Transformation Categorizing Ticket Types | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to categorize ticket types and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Categorizing Data Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, categorize ticket types through transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:** 
 
[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Categorizing Data

### Overview  

If ticket descriptions or categories are unstructured or inconsistent, standardizing them into predefined categories can improve data clarity and reporting. Common categories include **"Billing Issue," "Technical Support,"** and **"General Inquiry."**  

### Approach  

We use a **`CASE`** statement to categorize tickets based on the **`Ticket_Category`** and **`Issue_Description`** fields. This ensures uniform classification of ticket types for better analysis.  

### SQL Query for Categorizing Ticket Types  

```sql
SELECT 
    Ticket_ID,
    Customer_ID,
    Customer_Name,
    Ticket_Allocation_Timestamp,
    Ticket_Status,
    Priority,
    Region,
    City,
    Country,
    Ticket_Cost,
    Phone,
    CASE 
        WHEN LOWER(Ticket_Category) LIKE '%billing%' THEN 'Billing Issue'
        WHEN LOWER(Ticket_Category) LIKE '%technical%' OR LOWER(Issue_Description) LIKE '%error%' THEN 'Technical Support'
        WHEN LOWER(Ticket_Category) LIKE '%general%' OR LOWER(Issue_Description) LIKE '%inquiry%' THEN 'General Inquiry'
        ELSE 'Other'
    END AS Standardized_Ticket_Category
FROM {pipeline_name}.sample_csc_data;
```
![Tranformation Use Case](/static/assets/transformation-use-case/categorization-and-mapping/images/category-based.png#max-width=100%)