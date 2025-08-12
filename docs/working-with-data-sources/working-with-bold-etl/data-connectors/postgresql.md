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

## Configure the ETL to connect PostgreSQL

  1. Click the `Bold ETL` icon on the Navigation Pane.

  ![PostgreSQL ETL- BoldBI](/static/assets/working-with-etl/images/pgetl_clicketl.png#max-width=100%)

  2. Click `Add Project` and provide the new project's name.
  
   ![PostgreSQL ETL- BoldBI](/static/assets/working-with-etl/images/pgetl_addproject.png#max-width=100%)
  
  3. Select the newly created project and add the `PostgreSQL` template.

  ![PostgreSQL ETL- BoldBI](/static/assets/working-with-etl/images/pgetl_addtemp.png#max-width=100%)
  
### Configuration Parameters

|  Parameters |        Description                                     |
|--------------------------|---------------------------------------------|
| **Host:**                | Specify the hostname of the PostgreSQL server. |
| **Port:**                | Specify the port number of the PostgreSQL server (default is 5432). |
| **Username:**            | Provide the username to authenticate with the PostgreSQL server. |
| **Password:**            | Provide the password to authenticate with the PostgreSQL server. |
| **Database:**            | Specify the name of the PostgreSQL database from which data will be extracted. |
| **Driver Name:**         | Specify the driver name for connecting to PostgreSQL (e.g., postgresql+pg8000). |
| **Select:**                  |    **Tablename(s):**         Specify the name list to load tables from the PostgreSQL server. |
| [**Metadata:**](#metadata-properties)  (Optional)             |   **Replication Method:** Specify the replication method for the table(s). Options include FULL or INCREMENTAL. |
|| **Replication Key:**     Specify the replication key for incremental replication. This key helps in identifying new or updated records. |
|| **Replication Value:**   Specify the replication value to start the incremental replication from a particular point. |

  4. Update the details required in the template. and save it to the BoldBI Data Store.

  ![PostgreSQL ETL- BoldBI](/static/assets/working-with-etl/images/pgetl_update.png#max-width=100%)

### Schedule ETL Job

1. Click `Schedules` and select the created `postgresql` project.

![PostgreSQL ETL- BoldBI](/static/assets/working-with-etl/images/pgetl_schedule.png#max-width=100%)

2. For an on-demand refresh, click `Run Now`.

![PostgreSQL ETL- BoldBI](/static/assets/working-with-etl/images/pgetl_run.png#max-width=100%)  

3. After, Complete the on-demand refresh.

![PostgreSQL ETL- BoldBI](/static/assets/working-with-etl/images/pgetl_runcomplete.png#max-width=100%)  

4. Click the `Schedule` option to schedule the refresh hourly.

![PostgreSQL ETL- BoldBI](/static/assets/working-with-etl/images/pgetl_schedule_refresh.png#max-width=100%)  

5. The data source was created by ETL in Bold BI.

![PostgreSQL ETL- BoldBI](/static/assets/working-with-etl/images/pgetl_newds.png#max-width=100%)  

6. Click the `Edit DataSource` Option to view the created table(s), such as the 'votes' table.

![PostgreSQL ETL- BoldBI](/static/assets/working-with-etl/images/pgetl_table.png#max-width=100%)  

## Metadata Properties

In the `metadata` section, define the mode of data refresh. There are two modes: `INCREMENTAL` and `FULL_TABLE`. It only supports Date/DateTime datatype columns.

<table>
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
        <td>This mode fetches data from the date column specified in the replication key starting from the date specified in the replication value. Once scheduled, the replication value is updated according to the interval_type and interval_value from the imported data. For example, if the interval_type is set to 'year' and the interval_value is set to '1', the first schedule will fetch records from January 1, 2000 to December 31, 2000. In the next schedule, it will fetch records from January 1, 2001 to December 31, 2001, and so on.</td>
    </tr>
</table>

### Example Configuration

#### Incremental

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
#### FULLTABLE

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
