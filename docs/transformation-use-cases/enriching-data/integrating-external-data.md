---
layout: post
title: Transformation Join External Customer Data | Bold Data Hub
description: Learn how to use the ETL/Data Hub Transformation section in Bold BI Enterprise Edition. Discover simple steps to join the current data with an external customer data and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Integrating External Data Using Bold Data Hub 
 
In this article, we will demonstrate how to import tables from a CSV file, join with external customer data through transformations, and move the cleaned data into the destination database using **Bold Data Hub**. Follow the step-by-step process below.

**Sample Data Source:** 
 
[Tickets](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/tickets.csv) </br>
[Customers](https://billiondata.s3.us-east-1.amazonaws.com/TestBedSamples/customers.csv)

---

## Creating Pipeline    

Learn about [Pipeline Creation](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

## Applying Transformation

Learn more about transformation [here](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/transformation-preview/#transformation) 

## Joining with External Customer Data  

### Overview  

Integrating **Customer Support Center (CSC)** data with **Customer Relationship Management (CRM)** data enriches support tickets with customer-related attributes. This helps in deeper analysis of customer demographics, spending behavior, and loyalty status.  

### Approach  

We use a **`LEFT JOIN`** to merge ticket data with customer data, ensuring all tickets are retained even if some customers have missing CRM details.  

### SQL Query for Joining with External Customer Data  

```sql
SELECT 
    t.Ticket_ID,
    t.Customer_ID,
    c.Customer_Name,
    c.Age,
    c.Gender,
    c.Income_Level,
    c.Customer_Segment,
    c.Loyalty_Program_Status,
    c.Reward_Points,
    c.Last_Purchase_Date,
    c.Total_Spend,
    c.Account_Status,
    c.Subscription_Type,
    t.Ticket_Category,
    t.Issue_Description,
    t.Ticket_Status,
    t.Priority,
    t.Resolution_Time,
    t.Agent_ID,
    t.Agent_Name,
    t.Customer_Satisfaction,
    t.Ticket_Creation_Date,
    t.Ticket_Resolution_Date,
    t.Ticket_Comments,
    t.Region,
    t.City,
    t.Country,
    t.Ticket_Cost,
    t.Phone
FROM {pipeline_name}.tickets t
LEFT JOIN {pipeline_name}.customers c 
ON t.Customer_ID = c.Customer_ID;
```

![Tranformation Use Case](/static/assets/transformation-use-case/enriching-data/images/external-data.png#max-width=100%)