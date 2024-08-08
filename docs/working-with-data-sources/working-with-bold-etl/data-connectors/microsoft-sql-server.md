---
layout: post
title: Microsoft SQL Server ETL Connector – Embedded BI | Bold BI
description: Learn how to use the Microsoft SQL Server ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
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

## Configure the ETL to connect MSSQL Server

   1. Click the `Bold ETL` icon on the Navigation Pane.

  ![sql ETL- BoldBI](/static/assets/working-with-etl/images/sqletl_clicketl.png#max-width=100%)

  2. Click `Add Project` and provide the new project's name.
  
   ![sql ETL- BoldBI](/static/assets/working-with-etl/images/sqletl_addproject.png#max-width=100%)
  
  3. Select the newly created project and add the `MSSQL` template.

  ![sql ETL- BoldBI](/static/assets/working-with-etl/images/sqletl_addtemplate.png#max-width=100%)
  
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

  4. Update the details required in the template. and save it to the BoldBI Data Store.

  ![sql ETL- BoldBI](/static/assets/working-with-etl/images/sqletl_updatetemplate.png#max-width=100%)

### Schedule ETL Job

1. Click `Schedules` and select the created `sql` project.

![sql ETL- BoldBI](/static/assets/working-with-etl/images/sqletl_schedule.png#max-width=100%)

2. For an on-demand refresh, click `Run Now`.

![sql ETL- BoldBI](/static/assets/working-with-etl/images/sqletl_run.png#max-width=100%)  

3. After, Complete the on-demand refresh.

![sql ETL- BoldBI](/static/assets/working-with-etl/images/sqletl_refreshcomplete.png#max-width=100%)

4. Click the `Schedule` option to schedule the refresh hourly.

![sql ETL- BoldBI](/static/assets/working-with-etl/images/sqletl_schedulerefresh.png#max-width=100%)  

5. The data source was created by ETL in Bold BI.

![sql ETL- BoldBI](/static/assets/working-with-etl/images/sqletl_newds.png#max-width=100%)

6. Click `Edit DataSource` Option to view the created table(s), such as 'sample' table.

![sql ETL- BoldBI](/static/assets/working-with-etl/images/sqletl_table.png#max-width=100%)

## Metadata Properties

In the metadata section, define the mode of data refresh. There are two modes: ``INCREMENTAL`` and ``FULL_TABLE``.

### INCREMENTAL

This mode fetches data from the date column mentioned in the replication key from the start date as mentioned in the replication value. Once it is scheduled, the replication value is updated automatically from the imported data.

```yaml
metadata:
  TableName:
    replication_method: INCREMENTAL
    replication_key: Column name
    replication_value: column value that data starts from
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
          replication_value: 2023-07-19 00:00:00
        TABLE2:
          replication_method: INCREMENTAL
          replication_key: last_modified_on
          replication_value: 2023-07-19 00:00:00
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
