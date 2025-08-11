---
layout: post
title: MySQL ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the MySQL ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# MySQL

[MySQL](https://www.mysql.com/) is a relational database management system based on SQL – Structured Query Language. The application is used for a wide range of purposes, including data warehousing, e-commerce, and logging applications.

## Connection Properties

In a YAML file, the `config` section contains the following properties:

```yaml
Connectorname: MySQL
host: Hostname or IP address of the server
port: Server running port
username: Username
password: Password
database: Database
drivername: mysql+pymysql
```

## Configure the ETL to connect MySQL

  1. Click the `Bold ETL` icon on the Navigation Pane.

  ![MySQL ETL- BoldBI](/static/assets/working-with-etl/images/mysqletl_clicketl.png#max-width=100%)

  2. Click `Add Project` and provide the new project's name.
  
   ![MySQL ETL- BoldBI](/static/assets/working-with-etl/images/mysqletl_addproject.png#max-width=100%)
  
  3. Select the newly created project and add the `MySQL` template.

  ![MySQL ETL- BoldBI](/static/assets/working-with-etl/images/mysqletl_addTemplete.png#max-width=100%)
  
### Configuration Parameters
  
  |Parameters |    Description                                          |
|--------------------------|----------------------------------------------|
| **Host:**                | Specify the hostname of the MySQL server.    |
| **Port:**                | Specify the port number of the MySQL server (default is 3306). |
| **Username:**            | Provide the username to authenticate with the MySQL server. |
| **Password:**            | Provide the password to authenticate with the MySQL server. |
| **Database:**            | Specify the name of the MySQL database from which data will be extracted. |
| **Driver Name:**         | Specify the driver name for connecting to MySQL (e.g., mysql+pymysql). |
|    **Select:**     |                                  **Tablename(s):**       Specify the table name list to load tables from the MySQL server.|
| [**Metadata:**](#metadata-properties) (Optional)  | **Replication Method:**  Specify the replication method for the table(s). Options include FULL or INCREMENTAL. |
|| **Replication Key:**   Specify the replication key for incremental replication. This key helps in identifying new or updated records.| 
|| **Replication Value:**  Specify the replication value to start the incremental replication from a particular point. |

  4. Update the details required in the template and save it to the BoldBI Data Store.

  ![MySQL ETL- BoldBI](/static/assets/working-with-etl/images/mysqletl_update.png#max-width=100%)

### Schedule ETL Job

1. Click `Schedules` and select the created `mysql` project.

![MySQL ETL- BoldBI](/static/assets/working-with-etl/images/mysqletl_schedule.png#max-width=100%)

2. For an on-demand refresh, click `Run Now`.

![MySQL ETL- BoldBI](/static/assets/working-with-etl/images/mysqletl_run.png#max-width=100%)  

3. After, Complete the on-demand refresh.

![MySQL ETL- BoldBI](/static/assets/working-with-etl/images/mysqletl_refreshcomplete.png#max-width=100%) 

4. Click the `Schedule` option to schedule the refresh hourly.

![MySQL ETL- BoldBI](/static/assets/working-with-etl/images/mysqletl_schedulerefresh.png#max-width=100%)  

5. The data source was created by ETL in Bold BI.

![MySQL ETL- BoldBI](/static/assets/working-with-etl/images/mysqletl_newds.png#max-width=100%)

6. Click the `Edit DataSource` Option to view the created table(s), such as the 'votes' table.

![MySQL ETL- BoldBI](/static/assets/working-with-etl/images/mysqletl_table.png#max-width=100%)

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

## FULL_TABLE

This mode fetches data from the date column mentioned in the replication key from the start date as mentioned in the replication value. Once it is scheduled, the replication value is updated based on the interval_type and interval_value from the imported data. For ex set interval_type as 'year' and intervalue value as '1'.In first schedule, will fetch the record from Jan 1, 2000 to Dec 31, 2000. In next schedule, will fetch the record from Jan 1, 2001 to Dec 31, 2001 and so on.

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

### INCREMENTAL

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: tap_postgres
      connectorname: MySQL
      config:
        host: Hostname or IP address of the server
        port: Server running port
        username: Username
        password: Password
        database: Database
        drivername: mysql+pymysql
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

### FULL_TABLE

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: tap_postgres
      connectorname: MySQL
      config:
        host: Hostname or IP address of the server
        port: Server running port
        username: Username
        password: Password
        database: Database
        drivername: mysql+pymysql
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
