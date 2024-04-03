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

In a YAML file, the `config` section contains the following properties:

- ``connectorname``: MongoDB
- ``connection_url``: MongoDB can be configured in multiple ways. Typically, the connection URL format is:
  ```yaml
  connection_url: "mongodb://dbuser:passwd@host.or.ip:27017"
  ```
- ``database``: Database name

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

## Select Properties
In the select section, specify the table name list to load tables from the MongoDB server.

## Metadata Properties
In the metadata section, define the mode of data refresh. There are two modes: INCREMENTAL and ``FULL_TABLE``.

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

### INCREMENTAL

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



