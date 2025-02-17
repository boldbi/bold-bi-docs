---
layout: post
title: MySQL Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the MySQL Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
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

## Configure the Bold Data Hub to connect MySQL

  1. Click the `Data Hub` icon on the Navigation Pane.

  ![MySQL Data Hub- BoldBI](/static/assets/working-with-etl/images/clickdatahub.png#max-width=100%)

  2. Click `Add Project` and provide the new project's name.
  
   ![MySQL Data Hub- BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `MySQL` template.

  ![MySQL Data Hub- BoldBI](/static/assets/working-with-etl/images/mysql_addtemplate.png#max-width=100%)
  
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

  4. Update the details required in the template and Click Save, choose the desired destination to save the pipeline.

  ![MySQL Data Hub- BoldBI](/static/assets/working-with-etl/images/mysql_yaml.png#max-width=100%)
  
 5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)


### Schedule Bold Data Hub Job
1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![MySql - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![MySql - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![MySql - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![MySql - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![MySql - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.


## Metadata Properties

In the metadata section, define the mode of data refresh. There are two modes: INCREMENTAL and FULL_TABLE. It only supports DateTime datatype columns.

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
