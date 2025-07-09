---
layout: post
title: Transformation Mapping Priority Levels | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to map the data based on the priority levels and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Mapping Priority Levels and Transforming Data Using Bold Data Hub 
 
In this article, we will demonstrate how to import tables from a CSV file, map priority levels through transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:** 
 
[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Mapping Priority Levels  

### Overview  

Standardizing ticket priority levels into numeric values ensures consistency and simplifies processing. Common mappings include:  

- **Low → 1**  
- **Medium → 2**  
- **High → 3**  

### Approach 
 
We use a **`CASE`** statement to assign numeric values to the priority levels.  

### SQL Query for Mapping Priority Levels  

```sql
SELECT 
    t.*, 
    CASE 
        WHEN t.priority = 'Low' THEN 1 
        WHEN t.priority = 'Medium' THEN 2 
        WHEN t.priority = 'High' THEN 3 
        ELSE NULL 
    END AS Mapped_Priority 
FROM {pipeline_name}.sample_csc_data t;
```

![Tranformation Use Case](/static/assets/transformation-use-case/categorization-and-mapping/images/ticket-based.png#max-width=100%)