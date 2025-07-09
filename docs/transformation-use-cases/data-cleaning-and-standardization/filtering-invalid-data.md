---
layout: post
title: Transformation Remove Invalid Data in Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to remove the invalid data and make the most of your analytics.
platform: bold-bi
documentation: ug

---


# Filtering Invalid Entries Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, remove invalid data using transformations, and migrate the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**  

[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---
## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Removing Invalid or Inconsistent Data in DuckDB  

### Overview  

Data quality issues such as invalid phone numbers or negative ticket costs can impact analysis and decision-making. This guide explains how to filter out inconsistent records using DuckDB queries.  

### Approach  

We use **regular expressions** (`regexp_matches`) to validate phone numbers and apply **conditional filtering** (`WHERE ticket_cost >= 0`) to ensure only valid data is retained.  

### SQL Queries  

#### **Filter Out Invalid Phone Numbers**  
Ensures phone numbers contain exactly 10 digits (numeric only).  

```sql
SELECT 
    Ticket_ID, 
    Customer_ID, 
    Customer_Name, 
    Ticket_Category, 
    Issue_Description, 
    Ticket_Status, 
    Priority, 
    Agent_ID, 
    Agent_Name, 
    Customer_Satisfaction, 
    Ticket_Creation_Date, 
    Ticket_Resolution_Date, 
    Ticket_Comments, 
    Region, 
    City, 
    Country 
FROM {pipeline_name}.sample_csc_data 
WHERE regexp_matches(CAST(Phone AS VARCHAR), '^[0-9]{10}$');
```
![Tranformation Use Case](/static/assets/transformation-use-case/data-cleaning/images/remove-invalid-data2.png#max-width=100%)


#### **Filter Out Negative Costs**  
Removes records where ticket_cost is negative, ensuring only valid financial data is retained.

```sql
SELECT 
    Ticket_ID, 
    Customer_ID, 
    Customer_Name, 
    Ticket_Category, 
    Issue_Description, 
    Ticket_Status, 
    Priority, 
    Agent_ID, 
    Agent_Name, 
    Customer_Satisfaction, 
    Ticket_Creation_Date, 
    Ticket_Resolution_Date, 
    Ticket_Comments, 
    Region, 
    City, 
    Country 
FROM {pipeline_name}.sample_csc_data 
WHERE ticket_cost >= 0;
```

![Tranformation Use Case](/static/assets/transformation-use-case/data-cleaning/images/remove-invalid-data1.png#max-width=100%)
