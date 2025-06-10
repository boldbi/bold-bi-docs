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
 
**Bold BI Extract:** 
  
1. With Bold BI Extract, data is extracted from the source and transferred to the intermediate storage without any modification or optimization. This approach prioritizes speed and simplicity, performing a direct transfer of data. Performance differences between Live Mode and Bold BI Extract are primarily attributed to factors such as server load and resource availability, rather than the extraction process itself.

2. **Use Case:** Suitable for scenarios where a straightforward, unmodified copy of the data is required for analysis or visualization.

- **Data Hub:** 

1. The Data Hub option provides users with the capability to transform and aggregate data during the extraction process. This method offers enhanced flexibility in shaping the data to meet specific analytical requirements. Users can leverage the Extract, Transform, Load (ETL) capabilities of Bold BI to optimize the extracted data.
This includes operations such as:

    Filtering:  Selecting specific subsets of data.

    Cleansing:  Correcting or removing inaccurate or irrelevant data.

    Summarization:  Aggregating data to a higher level (e.g., calculating sums, averages).

2. By applying these transformations, users can streamline analysis workflows, improve query performance, and derive more meaningful insights from the data.

3. **Use Case:** Ideal for scenarios where data requires preparation before analysis, such as combining data from multiple sources, removing noise, or calculating key metrics.

In summary, Bold BI provides users with two distinct modes for connecting to SQL data sources, each offering unique benefits depending on the nature of the analysis and the requirements of the user. Whether opting for real-time access through live mode or leveraging the efficiency of extract mode, users can access and analyze SQL data effectively to drive informed decision-making and achieve their analytical objectives.

You can explore the data source in detail here:

[Creating a New Data Source](/working-with-data-sources/creating-a-new-data-source/)

[Data Modeling](/working-with-data-sources/data-modeling/)

[How Bold BI handles queries from multiple widgets in a dashboard](/working-with-data-sources/how-boldbi-handles-queries-from-multiple-widgets-in-a-dashboard/)