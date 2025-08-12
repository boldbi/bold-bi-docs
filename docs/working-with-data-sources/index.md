---
layout: post
title: Working with Data sources – Embedded BI | Bold BI Learning
description: Learn how to work with a data source like connecting to data, creating a data source, transforming data, etc. in Bold BI deployed in your server.
canonical: "/working-with-data-sources/"
platform: bold-bi
documentation: ug

---

# Working with Data Sources

In Bold BI, users have the flexibility to connect to SQL data sources through two primary modes, each offering distinct advantages based on the specific requirements of their analysis:
 
1. **Live Mode:** This mode provides users with a direct, real-time connection to the server hosting the SQL database. By establishing a live connection, users can access the most up-to-date data available within the database, ensuring that their analyses reflect the latest information at all times. Live mode is ideal for scenarios where real-time data access and analysis are critical, enabling users to make informed decisions based on the freshest insights.
 
2. **Extract Mode:** In contrast to live mode, extract mode involves extracting data from the production database and storing it in an intermediate database for further analysis. This approach offers several advantages, including improved performance and reduced load on the production server. Extracting data allows users to work with a subset of the database, making it easier to manage and analyze large volumes of information efficiently.
 
Within extract mode, users can choose between two methods of connecting to the data source:
 
  1. **Basic:** In basic extract mode, data extraction occurs without any optimization. The extracted data is transferred to the intermediate database as-is, without any additional processing or transformation. Any differences in performance between live mode and basic extract mode are typically attributed to server load and resource availability.
 
  2. **Advanced:** Advanced extract mode offers users the ability to perform data transformation and aggregation before transferring it to the intermediate database. This allows for greater flexibility in shaping the data to meet specific analysis requirements, such as filtering, cleansing, or summarizing datasets. Users can leverage the transformation capabilities provided by Bold ETL (Extract, Transform, Load) to optimize the extracted data and enhance its suitability for analysis. By applying transformations, users can streamline their analysis workflows and derive deeper insights from the data.
 
In summary, Bold BI provides users with two distinct modes for connecting to SQL data sources, each offering unique benefits depending on the nature of the analysis and the requirements of the user. Whether opting for real-time access through live mode or leveraging the efficiency of extract mode, users can access and analyze SQL data effectively to drive informed decision-making and achieve their analytical objectives.

You can explore the data source in detail here:

[Creating a New Data Source](/working-with-data-sources/creating-a-new-data-source/)

[Data Modeling](/working-with-data-sources/data-modeling/)

[How Bold BI handles queries from multiple widgets in a dashboard](/working-with-data-sources/how-boldbi-handles-queries-from-multiple-widgets-in-a-dashboard/)