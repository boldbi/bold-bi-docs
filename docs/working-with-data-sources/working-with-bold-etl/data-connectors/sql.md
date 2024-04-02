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

In a YAML file, the `config` section contains the following properties:

```yaml
Connectorname: SQL
host: Hostname or IP address of the server
port: Server running port
username: Username
password: Password
database: Database
drivername: mssql+pyodbc
```
## Select Properties
In the select section, specify the table name list to load tables from the MSSQL server.

## Metadata Properties
In the metadata section, define the mode of data refresh. There are two modes: ``INCREMENTAL`` and ``FULL_TABLE``.

## INCREMENTAL

This mode fetches data from the date column mentioned in the replication key from the start date as mentioned in the replication value. Once it is scheduled, the replication value is updated automatically from the imported data.
```yaml
metadata:
  TableName:
    replication_method: INCREMENTAL
    replication_key: Column name
    replication_value: column value that data starts from
```
## ``FULL_TABLE``

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

### ``FULL_TABLE``
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

### INCREMENTAL

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
