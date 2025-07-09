---
layout: post
title: Transformation Compliance Validation | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to validate the contacts and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Compliance Validation  and Transforming Data Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, validate contacts regions through transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**  

[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Contacts Validation  

### Overview  

To ensure data adheres to internal policies, ticket records should contain valid contact details such as phone numbers. This validation helps maintain data integrity and improves communication accuracy.  

### Approach  

We use a **`CASE`** statement with a **`regexp_matches`** function to check if phone numbers follow a 10-digit numeric format.  

### SQL Query for Contacts Validation  

```sql
SELECT 
    Ticket_ID, 
    Customer_ID, 
    Phone, 
    CASE 
        WHEN regexp_matches(CAST(Phone AS varchar), '^[0-9]{10}$') 
        THEN 'Valid' 
        ELSE 'Invalid Phone' 
    END AS Phone_Validation 
FROM {pipeline_name}.sample_csc_data;
```

![Tranformation Use Case](/static/assets/transformation-use-case/data-validation/images/contact_validation.png#max-width=100%)
