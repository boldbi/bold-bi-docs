---
layout: post
title: Oracle ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Oracle ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Oracle

[Oracle Database](https://www.oracle.com/database/) is a relational database management system (RDBMS) from Oracle Corporation. This article provides a complete overview of the Oracle database, including features, history, and editions. Before discussing Oracle, let's first understand the basics of a database.

## Connection Properties

In a YAML file, the `config` section contains the following properties:

```yaml
Connectorname: Oracle
host: Hostname or IP address of the server
port: Server running port
username: Username
password: Password
database: Database
service_name: servicename
drivername: oracle+pyoracle
```
## Select Properties
In the select section, specify the table name list to load tables from the Oracle server.

## Metadata Properties
In the metadata section, define the mode of data refresh. There are two modes: INCREMENTAL and FULL_TABLE. It only supports Date/DateTime datatype columns.

## INCREMENTAL

This mode fetches data from the date column mentioned in the replication key from the start date as mentioned in the replication value. Once it is scheduled, the replication value is updated automatically from the imported data.

```yaml
metadata:
  TableName:
    replication_method: INCREMENTAL
    replication_key: Column name
    replication_value: column value that data starts from
```
## FULLTABLE

This mode fetches data from the date column specified in the replication key starting from the date specified in the replication value. Once scheduled, the replication value is updated according to the interval_type and interval_value from the imported data. For example, if the interval_type is set to 'year' and the interval_value is set to '1', the first schedule will fetch records from January 1, 2000 to December 31, 2000. In the next schedule, it will fetch records from January 1, 2001 to December 31, 2001, and so on.


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
#### FULLTABLE
```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: tap_postgres
      connectorname: Oracle
      config:
        host: Hostname or IP address of the server
        port: Server running port
        username: Username
        password: Password
        database: Database
        service_name: servicename
        drivername: oracle+pyoracle
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

#### INCREMENTAL

```yaml
version: 1
encrypt_credentials: true
plugins:
  extractors:
    - name: tap_postgres
      connectorname: Oracle
      config:
        host: Hostname or IP address of the server
        port: Server running port
        username: Username
        password: Password
        database: Database
        service_name: servicename
        drivername: oracle+pyoracle
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
