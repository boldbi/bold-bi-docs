---
layout: post
title: PostgresSQL ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the PostgresSQL ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---
# PostgreSQL

[PostgreSQL](https://www.postgresql.org/) is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance.


## Connection Properties

In a YAML file, the `config` section contains the following properties:

```yaml
Connectorname: PostgreSQL
host: Hostname or IP address of the server
port: Server running port
username: Username
password: Password
database: Database
drivername: postgresql+pg8000
```

## Select Properties

In the `select` section, specify the table name list to load tables from the PostgreSQL server.

## Metadata Properties

In the `metadata` section, define the mode of data refresh. There are two modes: `INCREMENTAL` and `FULL_TABLE`.

<table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>INCREMENTAL</td>
        <td>

```yaml
metadata:
  TableName:
    replication_method: INCREMENTAL
    replication_key: Column name
    replication_value: column value that data starts from
```
</td>
        <td>This mode fetches data from the date column mentioned in the replication key from the start date as mentioned in the replication value. Once it is scheduled, the replication value is updated automatically from the imported data.</td>
    </tr>
    <tr>
        <td>FULL_TABLE</td>
        <td>

```yaml
        metadata:
  TableName:
    replication_method: FULL_TABLE
    replication_key: Column name
    replication_value: column value that data starts from
    interval_type: days/hours/minutes/year/month
    interval_value: integer value to add in the interval type

```
</td>
        <td>This mode fetches data from the date column mentioned in the replication key from the start date as mentioned in the replication value. Once it is scheduled, the replication value is updated automatically from the imported data.</td>
    </tr>
</table>

### Example Configuration
### ``FULL_TABLE``

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: tap_postgres
      connectorname: PostgreSQL
      config:
        host: <HOSTNAME>
        port: <PORT>
        username: <USERNAME>
        database: <DATABASENAME>
        password: <PASSWORD>
        drivername: postgresql+pg8000
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

### Incremental

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: tap_postgres
      connectorname: PostgreSQL
      config:
        host: <HOSTNAME>
        port: <PORT>
        username: <USERNAME>
        database: <DATABASENAME>
        password: <PASSWORD>
        drivername: postgresql+pg8000
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



