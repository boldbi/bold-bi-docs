---
layout: post
title: MongoDB Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the MongoDB Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
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


## Configure the Bold Data Hub to connect MongoDB

  1. Click the `Data Hub` icon on the Navigation Pane.

  ![MongoDB Data Hub- BoldBI](/static/assets/working-with-etl/images/clickdatahub.png#max-width=100%)

  2. Click `Add Project` and provide the new project's name.
  
   ![MongoDB Data Hub- BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `MongoDB` template.

  ![MongoDB Data Hub- BoldBI](/static/assets/working-with-etl/images/mongo_addtemplate.png#max-width=100%)


### Configuration Parameters

|Parameters | Description          |
|--------------------------|----------------------------------------------|
| **Name:**                | MongoDB                                      |
| **Connector Name:**      | MongoDB |
| **Connection URL:**      | Specify the connection URL for the MongoDB server in the format `mongodb://dbuser:passwd@host:port`. |
| **Database:**            | Specify the name of the MongoDB database from which data will be extracted. |
| **Select**: | **Tablename(s):** Specify the table name list to load tables from the MongoDB server. |

  4. Update the details required in the template and Click Save, choose the desired destination to save the pipeline.

  ![MongoDB Data Hub- BoldBI](/static/assets/working-with-etl/images/mongo_yaml.png#max-width=100%)
  
  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

### Schedule Bold Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![GitHub - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![GitHub - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![GitHub - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![GitHub - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![GitHub - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.

## Metadata Properties

In the metadata section, define the mode of data refresh. There are two modes: INCREMENTAL and FULL_TABLE. It supports datetime and Unix format.

|Properties | Description          |
|--------------------------|----------------------------------------------|
| **replication_method:**     | mode of data refresh - INCREMENTAL and FULL_TABLE                                      |
| **replication_key:**        | Specifies the column in the source data used to track and fetch records during replication                                     |
| **replication_value:**      | Specifies the starting value for the replication_key column during the replication process. It acts as a reference point to fetch data.                                      |
| **replication_endvalue:**   | Specifies maximum value for the data that can be fetched based on the replication_key                                      |
| **interval_type:**          | Specifies the duration of each replication interval in full table replication (e.g., daily).                                      |
| **interval_value:**         | Specifies how many units (e.g., years) should be included in each replication run during full table                                      |
| **timezone:**               | Specifies the time zone to be used for interpreting and handling date and time values during the replication process.<br>**UNIX:** UNIX is used when the data is stored in epoch(eg., 1622520000) format<br>**UTC:** UTC is used when working with human-readable timestamps in Coordinated Universal Time. (e.g., 2024-01-01 12:00:00)
  |

**Note:** `isdatapersist` and `previous_intervalmin` are not applicable in mongodb.

## INCREMENTAL

This mode fetches data from the date column mentioned in the replication key from the start date as mentioned in the replication value. Once it is scheduled, the replication value is updated automatically from the imported data.

```yaml
metadata:
  TableName:
    replication_method: INCREMENTAL
    replication_key: Column name
    replication_value: column value that data starts from
    timezone: UNIX/UTC
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
    timezone: UNIX/UTC

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

##### UTC FORMAT

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
          timezone: UTC
        TABLE2:
          replication_method: INCREMENTAL
          replication_key: last_modified_on
          replication_value: 2023-07-19 00:00:00
          timezone: UTC
```

##### UNIX FORMAT

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
          replication_value: 1689748200
          timezone: UNIX
        TABLE2:
          replication_method: INCREMENTAL
          replication_key: last_modified_on
          replication_value: 1689748200
          timezone: UNIX
          
```

#### FULL_TABLE

##### UTC FORMAT
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
          timezone: UTC
        TABLE2:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: 2023-07-19 00:00:00
          interval_type: days
          interval_value: 6
          timezone: UTC
```

##### UNIX FORMAT

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
          replication_value: 1689748200
          interval_type: days
          interval_value: 6
          timezone: UNIX
        TABLE2:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: 1689748200
          interval_type: days
          interval_value: 6
          timezone: UNIX
```

## Related Links

[Extract Data from MongoDB using query in Bold Data hub](https://support.boldbi.com/kb/article/15953/extracting-data-from-mongodb-using-query-in-bold-etl)

[Flatten MongoDB objects in Bold BI using Bold Data Hub](https://support.boldbi.com/kb/article/16161/flattening-mongodb-objects-in-bold-bi-using-bold-etl)

[Connect MongoDB with SSH Tunneling and Passwordless using in Bold Data Hub](https://support.boldbi.com/kb/article/16555/connect-mongodb-with-ssh-tunneling-passwordless-using-bold-etl)
