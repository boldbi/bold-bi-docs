---
layout: post
title: Transformation Pivoting Data | Bold Data Hub Learning
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to pivot the data and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Pivoting Data Transformation Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, to pivot the table using transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**  

[Sample Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/data.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Pivot Tables for Reshaping Data

### Overview  

Pivot tables allow us to restructure data by summarizing it in a way that is easy to analyze.

### Approach  

We can create a transformation table to pivot the equipment’s status into separate column based on its status and the values are aggregated counts based on its status. 

This helps to identify purchase state and action need to be taken,

### SQL Query for Creating a Pivot Table  

```sql

SELECT row_number() OVER() AS id, * 
FROM (
   PIVOT (
Select "Hospital_ID",
"Location",
"Equipment",
"Status",
"Count"
       FROM healthcare_equipmentdata.data2
   ) ON "Status" 
   USING MAX(Count)
) ct;

```

### Preview:

Click on Run button to view the results of the given query.

![Tranformation Use Case](/static/assets/transformation-use-case/pivot-tables/preview.png#max-width=100%)

After finishing the transformation, users should click the Save and Transform button. The tables will be transferred to the destination database during this process. Now the data will be transformed and moved to the destination.

![Tranformation Use Case](/static/assets/transformation-use-case/pivot-tables/transformationoutput.png#max-width=100%)