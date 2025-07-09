---
layout: post
title: Transformation Ticket Status Validation | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to validate the ticket status and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Status Verification Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, validate ticket status through transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**  

[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Ticket Status Validation  

### Overview  

To ensure data consistency, tickets marked as **"Resolved"** should have a valid resolution time, and tickets marked as **"Open"** should not have one. Any inconsistencies are flagged for correction.  

### Approach  

We use a **`CASE`** statement to classify ticket status validity:  

- **"Invalid"** → Resolved tickets with missing or non-positive resolution time  
- **"Conflict"** → Open tickets with a resolution time  
- **"Valid"** → All other cases  

### SQL Query for Ticket Status Validation  

```sql
SELECT 
    Ticket_ID, 
    Ticket_Status, 
    Resolution_Time, 
    CASE 
        WHEN Ticket_Status = 'Resolved' AND (Resolution_Time IS NULL OR Resolution_Time <= 0) THEN 'Invalid' 
        WHEN Ticket_Status = 'Open' AND Resolution_Time IS NOT NULL THEN 'Conflict' 
        ELSE 'Valid' 
    END AS Status_Validation 
FROM {pipeline_name}.sample_csc_data;
```
![Tranformation Use Case](/static/assets/transformation-use-case/data-validation/images/ticket_status.png#max-width=100%)
