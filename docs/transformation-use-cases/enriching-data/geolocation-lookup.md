---
layout: post
title: Transformation Geo Location Lookup | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to look up geo-location and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Geolocation Lookup and Transforming Data Using Bold Data Hub  

In this article, we will demonstrate how to import tables from a CSV file, perform geolocation lookup through transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:**  

[Sample Customers Data](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/sample_customers_data.csv) </br>
[Geo Lookup](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/geo_lookup.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Geolocation Lookup  

### Overview  

Enhancing customer data with geographic details using **IP addresses** or **zip codes** helps in location-based analysis, fraud detection, and personalized customer experiences.  

### Approach  

We use a **`LEFT JOIN`** to match customer IP addresses against a geolocation lookup table. The **`BETWEEN`** condition ensures that the IP falls within a known IP range.  

### SQL Query for Geolocation Lookup  

```sql
SELECT 
    c.customer_id, 
    c.name, 
    c.email, 
    c.ip_address, 
    g.country, 
    g.state, 
    g.city 
FROM {pipeline_name}.sample_customers_data c 
LEFT JOIN {pipeline_name}.geo_lookup g 
ON c.ip_address BETWEEN g.ip_start AND g.ip_end;
```

![Tranformation Use Case](/static/assets/transformation-use-case/enriching-data/images/geo_location.png#max-width=100%)


