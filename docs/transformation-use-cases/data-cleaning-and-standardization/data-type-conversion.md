---
layout: post
title: Transformation Data Type Conversion | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to covert the data type of the columns and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Data Type Conversion and Transforming Data Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, perform data type conversions using transformations, and migrate the cleaned data to the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**  

[Customers](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/customers.csv) 

---
## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Data Type Conversion  

### Overview  

Ensuring data fields have the correct format is crucial for data integrity and analysis. This section covers converting key fields such as dates, amounts, and customer ratings into appropriate data types.  

### Approach 
 
To standardize data formats, we apply the following transformations:  

- **Dates** → Convert text-based dates to `DATE` format.  
- **Amounts** → Convert numeric values like total spend to `DECIMAL(10,2)`.  
- **Customer Ratings** → Ensure ratings are stored as `INTEGER`.  

### SQL Query for Data Type Conversion
  
Use the following query to clean and standardize your dataset:  

```sql
SELECT 
    Customer_ID,
    Customer_Name,
    Age::INTEGER AS Age,
    Gender,
    Income_Level,
    Customer_Segment,
    Loyalty_Program_Status,
    Reward_Points::INTEGER AS Reward_Points,
    Last_Purchase_Date::DATE AS Last_Purchase_Date,
    Total_Spend::DECIMAL(10,2) AS Total_Spend,
    Account_Status,
    Subscription_Type,
    Email,
    Phone,
    Region,
    City,
    Country
FROM {pipeline_name}.customers;
```

![Tranformation Use Case](/static/assets/transformation-use-case/data-cleaning/images/data-format.png#max-width=100%)