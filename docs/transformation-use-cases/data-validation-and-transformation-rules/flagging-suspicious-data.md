---
layout: post
title: Transformation Flagging Suspicious Data | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to flag the suspicious data and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Flagging Suspicious Data   and Transforming Data Using Bold Data Hub 
 
In this article, we will demonstrate how to import tables from a CSV file, flag suspicious data through transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**  

[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Flagging Suspicious Data  

### Overview
  
To maintain data accuracy, records with conflicting information should be flagged. For example, an **"Open"** ticket should not have a resolution time, and a **"Resolved"** ticket should have a valid resolution time.  

### Approach  

We use a **`CASE`** statement to identify and flag suspicious records:  

- **"Conflict"** → Open tickets with a resolution time  
- **"Invalid Resolution Time"** → Resolved tickets with missing or non-positive resolution time  
- **"Valid"** → All other cases  

### SQL Query for Flagging Suspicious Data  

```sql
SELECT 
    Ticket_ID, 
    Ticket_Status, 
    Resolution_Time, 
    CASE 
        WHEN Ticket_Status = 'Open' AND Resolution_Time IS NOT NULL THEN 'Conflict' 
        WHEN Ticket_Status = 'Resolved' AND (Resolution_Time IS NULL OR Resolution_Time <= 0) THEN 'Invalid Resolution Time' 
        ELSE 'Valid' 
    END AS Suspicious_Flag 
FROM {pipeline_name}.sample_csc_data;
```

![Tranformation Use Case](/static/assets/transformation-use-case/data-validation/images/suspicious_tickets.png#max-width=100%)