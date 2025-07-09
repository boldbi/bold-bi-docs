---
layout: post
title: Transformation Handling Null Values in Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to handle the null values in data and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Handling  Null Values Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, handle null values using transformations, and migrate the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**  

[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---
## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Handling Null Values

### Overview  

When working with CSC data, missing or null values can impact data accuracy. This section explains how to replace null values with predefined defaults or imputed values to ensure data consistency.  

### Approach
  
To handle null values effectively, we use the `COALESCE` function in DuckDB. This function replaces `NULL` values with specified defaults:  

- **Resolution_Time** → Defaults to `0` if missing  
- **Customer_Satisfaction** → Defaults to `3` if missing  

### SQL Query for Handling Null Values  
Use the following SQL query to clean your data:  

```sql
SELECT 
    Ticket_ID,
    Customer_ID,
    Customer_Name, 
    Ticket_Category, 
    Issue_Description, 
    Ticket_Status,
    Priority, 
    COALESCE(Resolution_Time, 0) AS Resolution_Time, 
    Agent_ID, 
    Agent_Name, 
    COALESCE(Customer_Satisfaction, 3) AS Customer_Satisfaction, 
    Ticket_Creation_Date, 
    Ticket_Resolution_Date, 
    Ticket_Comments, 
    Region, 
    City, 
    Country 
FROM {pipeline_name}.sample_csc_data;
```

![Tranformation Use Case](/static/assets/transformation-use-case/data-cleaning/images/handling-null.png#max-width=100%)
