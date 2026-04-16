---
layout: post
title: Working with Data sources – Embedded BI | Bold BI Learning
description: Learn how to work with a data source like connecting to data, creating a data source, transforming data, etc. in Bold BI deployed in your server.
canonical: "/working-with-data-sources/"
platform: bold-bi
documentation: ug

---

# Working with Data Sources

In Bold BI, users can connect to SQL data sources through two primary modes. Each mode provides distinct advantages based on the requirements of the analysis.
 
1. **Live Mode:** This mode provides users with a direct, real-time connection to the server hosting the SQL database. By establishing a live connection, users can access the most up-to-date data available within the database. This helps ensure analyses reflect the latest available information. Live Mode is intended for scenarios where real-time data access and analysis are required.
 
2. **Extract Mode:** In contrast to Live Mode, Extract Mode involves extracting data from the production database and storing it in an intermediate database for further analysis. This approach offers advantages such as improved performance and reduced load on the production server. Extracting data also allows users to work with a subset of the database, which can help with managing and analyzing large volumes of information more efficiently.
 
Within extract mode, users can choose between two methods of connecting to the data source:
 
- **Bold BI Extract:** 
1. With Bold BI Extract, data is extracted from the source and transferred to the intermediate database without modification or optimization. This approach prioritizes speed and simplicity by performing a direct transfer of data. Performance differences between Live Mode and Bold BI Extract are primarily attributed to factors such as server load and resource availability, rather than the extraction process itself.

2. **Use Case:** Suitable for scenarios where a straightforward, unmodified copy of the data is required for analysis or visualization.
 
- **Data Hub:** 
1. The Data Hub option provides users with the capability to transform and aggregate data during the extraction process. This method provides flexibility in shaping the data to meet specific analytical requirements. Users can leverage the Extract, Transform, Load (ETL) capabilities of Bold BI to optimize the extracted data. This includes operations such as:

    Filtering:  Selecting specific subsets of data.
  
    Cleansing:  Correcting or removing inaccurate or irrelevant data.
  
    Summarization:  Aggregating data to a higher level (e.g., calculating sums, averages).

2. By applying these transformations, users can streamline analysis workflows, improve query performance, and derive more meaningful insights from the data.
3. **Use Case:** Ideal for scenarios where data requires preparation before analysis, such as combining data from multiple sources, removing noise, or calculating key metrics.
 
In summary, Bold BI provides two modes for connecting to SQL data sources, each with benefits depending on the nature of the analysis and user requirements. Whether opting for real-time access through Live Mode or using the efficiency of Extract Mode, users can access and analyze SQL data effectively.

You can explore the data source in detail here:

[Creating a New Data Source](/working-with-data-sources/creating-a-new-data-source/)

[Data Modeling](/working-with-data-sources/data-modeling/)

[How Bold BI handles queries from multiple widgets in a dashboard](/working-with-data-sources/how-boldbi-handles-queries-from-multiple-widgets-in-a-dashboard/)