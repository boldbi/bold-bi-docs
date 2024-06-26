---
layout: post
title: Use Pivot Tables in Bold BI using PostgreSQL | Bold BI Docs
description: This page summarizes how to use the required tables to create a Pivot table in the PostgreSQL data source using the Crosstab function in Bold BI application.
platform: bold-bi
documentation: ug
---

# How to use Pivot Tables in Bold BI Using PostgreSQL

In the Bold BI application, use the required tables to create a Pivot table in the PostgreSQL data source using the Crosstab function. In this example, the following list of tables are used.

1. Products

    ![Products Table](/static/assets/faq/images/products-table.png#max-width=60%)

2. Customers

    ![Customers Table](/static/assets/faq/images/customers-table.png#max-width=60%)

3. Product_customers

    ![Product and Cutomers Table](/static/assets/faq/images/product-customers-table.png#max-width=60%)

4. V_product_customers

    ![Product and Cutomers View](/static/assets/faq/images/product-customers-view.png#max-width=60%)

Follow these steps to create and use Pivot tables in Bold BI.

1. Enable the **Crosstab** function in the PostgreSQL data source using the following command.

    **CREATE EXTENSION IF NOT EXISTS tablefunc;**

    ![Create Extension](/static/assets/faq/images/create-extension.png#max-width=60%) 

2. Connect to a PostgreSQL data connection in Bold BI.

3. Switch to the code view mode of a data source.

    ![Pivot table in Bold BI](/static/assets/faq/images/pivot-table-in-boldbi.png)

4. Write a query using the Crosstab function in the query designer page to utilize the necessary tables from a data source, then click the highlighted `Run` button to execute the query.

    ![Prepare Query](/static/assets/faq/images/prepare-query.png)

```js    
SELECT * FROM crosstab( 
$$SELECT customers_name, product_name, SUM(cost) AS cost
  FROM v_product_customers
   GROUP BY customers_name, product_name
   ORDER BY customers_name$$,
$$SELECT 'Tweetholdar' UNION ALL
  SELECT 'Promuton' UNION ALL
  SELECT 'Transniollor' UNION ALL
  SELECT 'Cleanputon' UNION ALL
  SELECT 'Tabwoofphone' UNION ALL
  SELECT 'Supceivra' UNION ALL
  SELECT 'Supputommar' UNION ALL
  SELECT 'Mictellar' UNION ALL
  SELECT 'Armlififiator' UNION ALL
  SELECT 'Monoculimry'$$
)
AS ct(customers_name VARCHAR, Tweetholdar NUMERIC,Promuton NUMERIC,Transniollor NUMERIC,Cleanputon NUMERIC,Tabwoofphone NUMERIC,Supceivra NUMERIC,Supputommar NUMERIC,Mictellar NUMERIC,Armlififiator NUMERIC,Monoculimry NUMERIC);

```
5. Now, click `Update` to view the query result of the pivot table. 

    ![Cross tab query result](/static/assets/faq/images/crosstab-query-result.png)