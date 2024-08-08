---
layout: post
title: MongoDB ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the MongoDB ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# MongoDB

[MongoDB](https://www.mongodb.com/) is a NoSQL database that stores JSON-like documents.

## Connection Properties

The `config` section in a YAML file includes the following properties:

  ```yaml
  connectorname: MongoDB
      config:
        connection_url: mongodb://dbuser:passwd@host:port
        database: databasenmae
      select:
        - tablename
  ```


Here are the typical ways to configure MongoDB and their connection URLs:

| Name                | Description                                                                           | Connection URL Example                            |
| ------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Local Installation  | Install on ``Windows``, ``macOS``, ``Linux`` using official packages.                             | ``mongodb://dbuser:passwd@host.or.ip:27017``        |
| Docker              | Deploy using the MongoDB Docker image.                                                | ``mongodb://dbuser:passwd@docker.host:27017``|
| MongoDB Atlas       | MongoDB’s managed service on AWS, Azure, and Google Cloud.                            | ``mongodb+srv://dbuser:passwd@cluster.mongodb.net`` |
| Managed Cloud       | AWS ``DocumentDB``, ``Azure Cosmos DB``, and others offer ``MongoDB`` as a managed database.      | ``mongodb://dbuser:passwd@managed.cloud:27017``     |
| Configuration Tools | Use ``Ansible``, ``Chef``, or ``Puppet`` for automation of setup and configuration.               | ``mongodb://dbuser:passwd@config.tool:27017``      |
| Replica Set         | Set up for high availability with data replication across multiple MongoDB instances. | ``mongodb://dbuser:passwd@replica.set:27017``    |
| ``Sharded Cluster ``    | Scalable distribution of datasets across multiple MongoDB instances.                  | ``mongodb://dbuser:passwd@shard.cluster:27017``     |
| Kubernetes          | Deploy on Kubernetes using Helm charts or operators.                                  | ``mongodb://dbuser:passwd@k8s.cluster:27017``      |
| Manual Tarball      | Install directly from the official MongoDB tarball, typically on Linux.               | ``mongodb://dbuser:passwd@tarball.host:27017``      |


## Configure the ETL to connect Web

  1. Click the `Bold ETL` icon on the Navigation Pane.

  ![MongoDB ETL- BoldBI](/static/assets/working-with-etl/images/mongodbetl_clicketl.png#max-width=100%)

  2. Click `Add Project` and provide the new project's name.
  
   ![MongoDB ETL- BoldBI](/static/assets/working-with-etl/images/mongodbetl_addproject.png#max-width=100%)
  
  3. Select the newly created project and add the `MongoDB` template.

  ![MongoDB ETL- BoldBI](/static/assets/working-with-etl/images/mongodbetl_addtemplete.png#max-width=100%)


### Configuration Parameters

|Parameters | Description          |
|--------------------------|----------------------------------------------|
| **Name:**                | MongoDB                                      |
| **Connector Name:**      | MongoDB |
| **Connection URL:**      | Specify the connection URL for the MongoDB server in the format `mongodb://dbuser:passwd@host:port`. |
| **Database:**            | Specify the name of the MongoDB database from which data will be extracted. |
| **Select**: | **Tablename(s):** Specify the table name list to load tables from the MongoDB server. |

  4. Update the details required in the template. and save it to the BoldBI Data Store.

  ![MongoDB ETL- BoldBI](/static/assets/working-with-etl/images/mongodbetl_updatetemplete.png#max-width=100%)

### Schedule ETL Job

1. Click `Schedules` and select the created `MongoDB` project.

![MongoDB ETL- BoldBI](/static/assets/working-with-etl/images/mongodbetl_schedule.png#max-width=100%)

2. For an on-demand refresh, click `Run Now`.

![MongoDB ETL- BoldBI](/static/assets/working-with-etl/images/mongodbetl_run.png#max-width=100%)  

3. After, Complete the on-demand refresh.

![MongoDB ETL- BoldBI](/static/assets/working-with-etl/images/mongodbetl_runcomplete.png#max-width=100%)

4. Click the `Schedule` option to schedule the refresh hourly.

![MongoDB ETL- BoldBI](/static/assets/working-with-etl/images/mongodbetl_schedulerefresh.png#max-width=100%)  

5. The data source was created by ETL in Bold BI.
   
![MongoDB ETL- BoldBI](/static/assets/working-with-etl/images/mongodbetl_newds.png#max-width=100%)

6. Click `Edit DataSource` Option to view the created table(s), such as 'products' table.

![MongoDB ETL- BoldBI](/static/assets/working-with-etl/images/mongodbetl_table.png#max-width=100%)

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

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: MongoDB
      connectorname: MongoDB
      config:
        connection_url: mongodb://dbuser:passwd@host:port
        database: databasename
      select:
        - tablename
```


#### INCREMENTAL

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: tap_postgres
      connectorname: PostgreSQL
      config:
        connection_url: "<connectionurl>"
        database: <databasename>
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

#### FULL_TABLE

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: tap_postgres
      connectorname: PostgreSQL
      config:
        connection_url: "<connectionurl>"
        database: <databasename>
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
