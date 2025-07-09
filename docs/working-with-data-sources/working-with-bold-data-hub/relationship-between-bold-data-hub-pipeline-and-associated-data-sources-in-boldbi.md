---
layout: post
title:  Relationship between Data Hub and associated Data Sources
description: Learn about the is the Relationship between Bold Data Hub Pipeline and associated Data Sources in Bold BI
canonical: "/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/"
platform: bold-bi
documentation: ug
keywords: append, append data source, data source
---

# Relationship Between Bold Data Hub and Bold BI Data Sources 

The **Bold Data Hub** is an ETL component within the Bold BI platform that enables data movement from various sources into a centralized data store. It supports data transformation, allowing only processed and aggregated data to be used in Bold BI for efficient reporting and visualization.

## Bold Data Hub Pipelines

Bold Data Hub Pipelines are primarily responsible for the **data processing** and **data transformation** workflows, enabling users to manage, transform, and load data into a format optimized for visualization in Bold BI.

 The core functionalities of Bold Data Hub Pipelines include,

1. **Data Connectivity**: Bold Data Hub supports a variety of file types and web, SQL, and NoSQL data sources. please refer to [Working With Data Hub Connectors](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/data-connectors/)
2. **Data Transformation**: Data can be cleaned, filtered, and transformed using pipelines to prepare it for analysis.
3. **Data Integration**: Different datasets from multiple sources can be integrated into one consolidated dataset.
4. **Automation**: Pipelines can be automated to run at specific intervals, ensuring that data in Bold BI is kept up to date.
5. **Data Aggregation**: Data from multiple sources can be aggregated into a unified format, optimizing it for reporting and visualization.
6. **Destination Support**: Data Hub Supports wide range of Destinations. please refer to [Working With Data Store](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/data-store/)

You can configure multiple datastore destinations of the same server type and load data into them for each pipeline. This is useful for scenarios where multiple databases of the same type (e.g., multiple MySQL or PostgreSQL databases) are used for different environments like development, testing, staging, or production, or for different segments of business operations.

## Bold BI Data Sources

Bold BI Data Sources, on the other hand, are the **origin points** of the data that is visualized within the Bold BI platform. These data sources provide the raw data or aggregated data (when query mode is used) that users need for creating dashboards, and visualizations. The functionalities handled by Bold BI Data Sources include:

1. **Data Connectivity**: They enable connection to various data stores such as SQL databases, files, or APIs. please refer to [Working With Bold BI Connectors](https://help.boldbi.com/working-with-data-sources/data-connectors/)
2. **Querying**: Bold BI Data Sources can query the data directly from the connected source to retrieve data for visulization.
3. **Data Modeling**: Some modeling and basic transformations may be handled within the data source level before being used in dashboards.
4. **Data Refresh**: Data sources in Bold BI are also responsible for periodic refreshes, pulling in new data for analysis when configured.
5. **Direct Query Mode**: Bold Data Hub relies on extracted data; Bold BI supports querying SQL based live connectors.

## Key Differences in Functionality

- **Data Hub Pipelines** focus on data processing, transforming, cleaning, and integrating data from various sources into the data store.  The transformed data can be stored in the datastore along with or without the original dataset. This extracted data will be **created as a data source in Bold BI** for further operations. Also, Bold Data Hub supports Open API and the Python connector, allowing users to write scripts and move data into Bold Data Hub.

- **Bold BI Data Sources** supports querying connectors using live mode as well as extracted mode and display the data in the dashboards. Bold Data Hub does not support modeling via UI as like Bold BI's calculated fields and relationship. 
  However these options can be utilized using Bold BI with the help of Bold Data Store data sources once after extracting in Data Hub.


## Can Multiple Bold BI Data Sources Be Associated with a Pipeline in Bold Data Hub?
No, **multiple Bold BI Data Sources cannot be associated with a pipeline in Bold Data Hub**. But the data from multiple pipelines can be combined in data source created from Data Hub as it is a live connection.

