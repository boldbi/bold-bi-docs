---
layout: post
title: Microsoft SQL Server Bold Data Hub Connector – Bold BI
description: Learn how to use the Microsoft SQL Server Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Microsoft SQL Server

Structured Query Language (SQL) is a programming language for storing and processing information in a relational database. A relational database stores information in tabular form, with rows and columns representing different data attributes and the various relationships between the data values.

## Prerequisite

- ODBC Driver 17+ for SQL Server

## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
Connectorname: SQL
host: Hostname or IP address of the server
port: Server running port
username: Username
password: Password
database: Database
drivername: mssql+pyodbc
```

## Configure the Bold Data Hub to connect MSSQL Server

   1. Click the `Data Hub` icon on the Navigation Pane.

  ![sql Data Hub- BoldBI](/static/assets/working-with-etl/images/clickdatahub.png#max-width=100%)

  2. Click `Add Pipeline` and provide the new pipeline's name.
  
   ![sql Data Hub- BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created pipeline and add the `MSSQL` template.

  ![sql Data Hub- BoldBI](/static/assets/working-with-etl/images/sql_addtemplate.png#max-width=100%)
  
### Configuration Parameters

| Parameters |   Description       |
|--------------------------|----------------------------------------------|
| **Host:**                | Specify the hostname of the MSSQL server.    |
| **Port:**                | Specify the port number of the MSSQL server (default is 1433). |
| **Username:**            | Provide the username to authenticate with the MSSQL server. |
| **Password:**            | Provide the password to authenticate with the MSSQL server. |
| **Database:**            | Specify the name of the MSSQL database from which data will be extracted. |
| **Driver Name:**         | Specify the driver name for connecting to MSSQL (e.g., mssql+pyodbc). |
| **Driver:**              | Specify the ODBC driver to use for connecting to MSSQL (e.g., ODBC+Driver+17+for+SQL+Server). |
| **Select**                 | **Tablename(s):**        Specify the name of the table(s) to load tables from the MSSQL server. |
| [**Metadata**](#metadata-properties)  (Optional) |  **Replication Method:** Specify the replication method for the table(s). Options include FULL or INCREMENTAL. |
|| **Replication Key:** Specify the replication key for incremental replication. This key helps in identifying new or updated records. |
|| **Replication Value:**  Specify the replication value to start the incremental replication from a particular point. |
|| **Primary Key:**  Column(s) that uniquely identify each record in the source table. Used to ensure data consistency during replication. |

  4. Update the details required in the template and Click Save, choose the desired destination to save the pipeline.

  ![sql Data Hub- BoldBI](/static/assets/working-with-etl/images/sql_yaml.png#max-width=100%)

  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI]

(https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

### Schedule Bold Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![SQL - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![SQL - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![SQL - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![SQL - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![SQL - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.

## Metadata Properties

In the metadata section, define the mode of data refresh. There are two modes: ``INCREMENTAL`` and ``FULL_TABLE``.

### INCREMENTAL

In this configuration, data replication is handled using both the primary_key and the replication_key. The replication_key refers to a column that contains date or timestamp values, which is used to determine the point from which incremental data fetching should begin. The primary_key ensures each record is uniquely identified. During each sync, the system uses the date from the replication_key to fetch only the records that are newer than the last imported data, while the primary_key helps maintain data integrity and avoid duplication.

```yaml
metadata:
  TableName:
    replication_method: INCREMENTAL
    replication_key: <Date Column name>
    primary_key: <Primary key column name>
```

### FULL_TABLE

This mode fetches data from the date column mentioned in the replication key from the start date as mentioned in the replication value. Once it is scheduled, the replication value is updated automatically from the imported data.

```yaml
metadata:
  TableName:
    replication_method: FULL_TABLE
    replication_key: Column name
    replication_value: column value that data starts from
    interval_type: days/hours/minutes/year/month
    interval_value: integer value to add in interval type
```

### Example Configuration

#### Incremental

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: tap_postgres
      connectorname: MSSQL
      config:
        host: Hostname or IP address of the server
        port: Server running port
        username: Username
        password: Password
        database: Database
        drivername: mssql+pyodbc
        #if ODBC Driver 18 for SQL Server is installed, use the following driver: ODBC+Driver+18+for+SQL+Server
        driver: ODBC+Driver+17+for+SQL+Server 
      select:
        - TABLE1
        - TABLE2
      metadata:
        TABLE1:
          replication_method: INCREMENTAL
          replication_key: last_modified_on
          primary_key: id
        TABLE2:
          replication_method: INCREMENTAL
          replication_key: last_modified_on
          primary_key: id
```


#### FULLTABLE

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: tap_postgres
      connectorname: MSSQL
      config:
        host: Hostname or IP address of the server
        port: Server running port
        username: Username
        password: Password
        database: Database
        drivername: mssql+pyodbc
        #if ODBC Driver 18 for SQL Server is installed, use the following driver: ODBC+Driver+18+for+SQL+Server
        driver: ODBC+Driver+17+for+SQL+Server 
      select:
        - TABLE1
        - TABLE2
      metadata:
        TABLE1:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: 2023-07-19 00:00:00
          interval_type: days
          interval_value: 6
        TABLE2:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: 2023-07-19 00:00:00
          interval_type: days
          interval_value: 6
```
## WORKING WITH CUSTOM QUERY 

1. To execute a custom SQL query during extraction, add the query field under the properties section.

2. When a custom query is used, the select parameter does not extract data from the table name specified. Instead, the name provided in select is used only to create the destination table where the query result will be stored.

3. Add Query under Properties and include the query. Please note that when using Query in the template, the Select parameter is used to create the table for storing the query result instead of extracting the data from the name given in it.
![sql Data Hub- BoldBI](/static/assets/working-with-etl/images/custom_query.png#max-width=100%)
Note: When using a custom query, data is not extracted from the table name specified. Instead, the query result is used to create and populate the table.

### Example Configuration

```yaml
version: 1.0.1
encrypt_credentials: false
direct_target_import: false
union_all_tables: true
add_dbname_column: false
direct_load_to_destination: true
plugins:
 extractors:
   - name: MSSQL
     connectorname: MSSQL
     schemaname: dbo
     config:
       host: 
       port: 1433
       username: sa
       database: Retail
       password: 
       drivername: mssql+pyodbc
       driver: ODBC+Driver+17+for+SQL+Server
     properties:
       query: SELECT AVG(unit_cost) AS average_unit_cost FROM [Retail].[dbo].[Product_Details];
     metadata: 
     select:
     - aggregated_table 
```

### Incremental Refresh with Custom Query
When using the INCREMENTAL method with a custom query:
  - Ensure the query includes the replication_key column (typically a date or timestamp).
  - The system will apply incremental logic based on the replication_key to fetch only new or updated records.
  - The primary_key ensures uniqueness and prevents duplication.

#### Example Configuration

```yaml
version: 1.0.1
encrypt_credentials: false
direct_target_import: false
union_all_tables: true
add_dbname_column: false
direct_load_to_destination: true
plugins:
  extractors:
    - name: MSSQL
      connectorname: MSSQL
      schemaname: dbo
      config:
        host: 
        port: 1433
        username: sa
        database: Retail
        password: 
        drivername: mssql+pyodbc
        driver: ODBC+Driver+17+for+SQL+Server
      properties:
        query: SELECT id, last_modified_on, product_name FROM [Retail].[dbo].[Product_Details];
      metadata: 
        aggregated_table:
          replication_method: INCREMENTAL
          replication_key: last_modified_on
          primary_key: id
      select:
        - aggregated_table
```