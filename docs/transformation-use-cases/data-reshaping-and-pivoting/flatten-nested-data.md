---
layout: post
title: Transformation Flatten Nested Data | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to handle the and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Flatten the nested data and Transforming Data Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, flatten the nested data using transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**  

[Books](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/books.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Flattening Nested Data

### Overview  
Nested data structures, such as JSON, can be difficult to analyze directly in SQL because they do not fit neatly into a table format. Flattening these structures converts them into a more accessible table format, making it easier to query and analyze the data.

### Approach  
We can flatten the nested data by extracting the relevant fields from the JSON structure into separate columns. For example, we can extract values like customer information, ticket details, or support issues into their own columns for easier analysis.

### SQL Query for Flattening Nested Data  

```sql
SELECT  
    title,  
    author,      
    json_extract(metadata, '$.description') AS description, 
    CAST(json_extract(metadata, '$.price') AS DECIMAL) AS price, 
    UNNEST(json_extract(metadata, '$.ages')::int[]) AS age  
FROM {pipeline_name}.books;
```