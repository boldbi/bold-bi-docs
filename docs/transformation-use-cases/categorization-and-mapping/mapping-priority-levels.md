---
layout: post
title: Transformation Mapping Customer Regions | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to map the data based on the regions and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Mapping Customer Regions and Transforming Data Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, map customer regions through transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**  

[Sample CSC Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_csc_data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Mapping Customer Regions  

### Overview
  
If the customer’s region is stored as a text field (e.g., a city name or abbreviation), mapping it to a standardized region or country code ensures uniformity in data representation.  

### Approach
  
We use a **`CASE`** statement to map region abbreviations to full country names.  

### SQL Query for Mapping Customer Regions  

```sql
SELECT 
    t.*, 
    CASE 
        WHEN t.Region = 'CA' THEN 'CANADA' 
        WHEN t.Region = 'UK' THEN 'United Kingdom' 
        WHEN t.Region = 'USA' THEN 'United States' 
        ELSE 'Other' 
    END AS Standardized_Region 
FROM {pipeline_name}.sample_csc_data t;
```

![Tranformation Use Case](/static/assets/transformation-use-case/categorization-and-mapping/images/region-based.png#max-width=100%)
