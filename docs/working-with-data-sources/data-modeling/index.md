---
layout: post
title: Working with Data Sources - Embedded BI | Bold BI Learning
description: Learn how to work with data sources by connecting to data, creating a data source, and transforming data in Bold BI deployed on your server.
canonical: "/working-with-data-sources/"
platform: bold-bi
documentation: ug

---

# Working with Data Sources

In Bold BI, users can connect to SQL data sources through two primary modes. Each mode supports different requirements for analysis:

1. **Live mode:** This mode provides a direct, real-time connection to the server hosting the SQL database. With a live connection, users can access the most up-to-date data available in the database. Live mode is suitable for scenarios where real-time data access and analysis are required.

2. **Extract mode:** Extract mode involves extracting data from the production database and storing it in an intermediate database for analysis. This approach can improve performance and reduce load on the production server. Extracting data also allows users to work with a subset of the database, which can help when managing and analyzing large volumes of information.

Within extract mode, users can choose between two methods of connecting to the data source:

- **Bold BI Extract:**
  1. With Bold BI Extract, data is extracted from the source and transferred to intermediate storage without modification or optimization. This approach prioritizes speed and simplicity through a direct transfer. Performance differences between Live mode and Bold BI Extract are primarily attributed to factors such as server load and resource availability, rather than the extraction process itself.
  2. **Use Case:** Suitable for scenarios where a straightforward, unmodified copy of the data is required for analysis or visualization.

- **Data Hub:**
  1. The Data Hub option provides the capability to transform and aggregate data during the extraction process. This method provides flexibility in shaping the data to meet specific analytical requirements. Users can use the Extract, Transform, Load (ETL) capabilities of Bold BI to optimize the extracted data. This includes operations such as:
     - **Filtering:** Selecting specific subsets of data.
     - **Cleansing:** Correcting or removing inaccurate or irrelevant data.
     - **Summarization:** Aggregating data to a higher level (e.g., calculating sums and averages).
  2. By applying these transformations, users can streamline analysis workflows, improve query performance, and derive meaningful insights from the data.
  3. **Use Case:** Ideal for scenarios where data requires preparation before analysis, such as combining data from multiple sources, removing noise, or calculating key metrics.

In summary, Bold BI provides two modes for connecting to SQL data sources. Each mode supports different requirements, whether you need real-time access through Live mode or improved efficiency through Extract mode.

You can explore the data source in detail here:
[Creating a New Data Source](/working-with-data-sources/creating-a-new-data-source/)

[Data Modeling](/working-with-data-sources/data-modeling/)

[How Bold BI handles queries from multiple widgets in a dashboard](/working-with-data-sources/how-boldbi-handles-queries-from-multiple-widgets-in-a-dashboard/)