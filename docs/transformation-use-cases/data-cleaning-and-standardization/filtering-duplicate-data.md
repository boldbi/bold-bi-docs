---
layout: post
title: Transformation Removing duplicate Data | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to remove the duplicates in data and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Filtering Duplicates and Transforming Data Using Bold Data Hub

In this article, we will demonstrate how to import tables from a CSV file, remove duplicate records using transformations, and migrate the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:** 
 
[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)
  
---
## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Removing Duplicate Records

### Overview  

Duplicate records in a dataset can lead to inconsistencies and inaccurate analysis. To ensure data integrity, we can remove duplicates based on unique identifiers such as **`Customer_ID`** and **`Ticket_ID`** while retaining the most recent entry.  

### Approach  

We use the **`DISTINCT ON`** clause to retain only one record per **`Customer_ID`** and **`Ticket_ID`**, prioritizing the latest entry based on **`Ticket_Creation_Date DESC`**.  

### SQL Query for Removing Duplicates  

```sql
WITH Unique_Tickets AS (
    SELECT DISTINCT ON (Customer_ID, Ticket_ID) * 
    FROM {pipeline_name}.sample_csc_data 
    ORDER BY Customer_ID, Ticket_ID, Ticket_Creation_Date DESC
) 
SELECT * FROM Unique_Tickets;
```

![Tranformation Use Case](/static/assets/transformation-use-case/data-cleaning/images/remove-duplicates.png#max-width=100%)
