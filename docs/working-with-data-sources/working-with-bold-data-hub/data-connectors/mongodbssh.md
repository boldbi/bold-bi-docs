---
layout: post
title: MongoDB Data Hub Connector with SSH Support | Bold Data Hub
description: Learn how to use the MongoDB with SSH, Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# MongoDB SSH

[MongoDB](https://www.mongodb.com/) is a NoSQL database that stores JSON-like documents.

## Connection Properties

The `config` section in a YAML file includes the following properties:

  ```yaml
  connectorname: MongoDBSSH
      config:
        connection_url: mongodb://dbuser:passwd@host:port
        database: databasename
        ssh_host: ssh_hostname
        ssh_port: ssh_port
        ssh_user: ssh_username
        ssh_private_key_path: privatekey
      select:
        - tablename
  ```


Here are the typical ways to configure MongoDB and their connection URLs:

### Typical Ways to Configure MongoDB and Their Connection URLs

| Name                | Description                                                                           | Connection URL Example                            | SSH Considerations |
| ------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------- |
| Local Installation  | Install on `Windows`, `macOS`, `Linux` using official packages.                      | `mongodb://dbuser:passwd@host.or.ip:27017`        | Not needed if local |
| Docker              | Deploy using the MongoDB Docker image.                                                | `mongodb://dbuser:passwd@docker.host:27017`      | Use SSH to access a remote Docker host |
| MongoDB Atlas       | MongoDB’s managed service on AWS, Azure, and Google Cloud.                           | `mongodb+srv://dbuser:passwd@cluster.mongodb.net` | SSH is not required (TLS used) |
| Managed Cloud       | AWS `DocumentDB`, `Azure Cosmos DB`, and others offer `MongoDB` as a managed database. | `mongodb://dbuser:passwd@managed.cloud:27017`     | Typically accessed via VPC; SSH if required |
| Configuration Tools | Use `Ansible`, `Chef`, or `Puppet` for automated setup and configuration.             | `mongodb://dbuser:passwd@config.tool:27017`      | SSH may be required for remote execution |
| Replica Set         | Set up for high availability with data replication across multiple MongoDB instances. | `mongodb://dbuser:passwd@replica.set:27017`      | SSH needed for secure remote access |
| Sharded Cluster    | Scalable distribution of datasets across multiple MongoDB instances.                  | `mongodb://dbuser:passwd@shard.cluster:27017`     | SSH needed for secure remote access |
| Kubernetes          | Deploy on Kubernetes using Helm charts or operators.                                  | `mongodb://dbuser:passwd@k8s.cluster:27017`      | Use `kubectl port-forward` or SSH to cluster nodes |
| Manual Tarball      | Install directly from the official MongoDB tarball, typically on Linux.               | `mongodb://dbuser:passwd@tarball.host:27017`     | SSH typically required for remote servers |




## Configure the Bold Data Hub to connect MongoDB via SSH

  1. Click the `Data Hub` icon on the Navigation Pane.

  ![MongoDBSSH Data Hub- BoldBI](/static/assets/working-with-etl/images/clickdatahub.png#max-width=100%)

  2. Click `Add Project` and provide the new project's name.
  
   ![MongoDBSSH Data Hub- BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `MongoDBSSH` template.

  ![MongoDBSSH Data Hub- BoldBI](/static/assets/working-with-etl/images/mongossh_addtemplate.png#max-width=100%)


### Configuration Parameters

|Parameters | Description          |
|--------------------------|----------------------------------------------|
| **Name:**                | MongoDBSSH                                      |
| **Connector Name:**      | MongoDBSSH |
| **Connection URL:**      | Specify the connection URL for the MongoDB server in the format `mongodb://dbuser:passwd@host:port`. |
| **Database:**            | Specify the name of the MongoDB database from which data will be extracted. |
| **Select**: | **Tablename(s):** Specify the table name list to load tables from the MongoDB server. |
| **SSH Host:**        | Specify the SSH hostname for connecting to the MongoDB server.                          |
| **SSH Port:**        | Specify the SSH port number.                                                            |
| **SSH User:**        | Specify the SSH username.                                                               |
| **SSH Private Key:** | Specify the path to the SSH private key file for authentication.

**Note:** MongoDBSSH doesn't support Incremental or Full Table Refresh

  4. Update the details required in the template and Click Save, choose the desired destination to save the pipeline.

  ![MongoDBSSH Data Hub- BoldBI](/static/assets/working-with-etl/images/mongossh_yaml.png#max-width=100%)
  
  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI]

(https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

### Schedule Bold Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![MongoDBSSH - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![MongoDBSSH - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![MongoDBSSH - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![MongoDBSSH - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![MongoDBSSH - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.

**Note:** `isdatapersist` and `previous_intervalmin` are not applicable in mongodb.


### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: MongoDBSSH
      connectorname: MongoDBSSH
      config:
        connection_url: mongodb://dbuser:passwd@host:port
        database: databasename
        ssh_host: ssh_hostname
        ssh_port: ssh_port
        ssh_user: ssh_username
        ssh_private_key_path: privatekey
      select:
        - tablename
```

## Related Links

[Extract Data from MongoDBSSH using query in Bold Data hub](https://support.boldbi.com/kb/article/15953/extracting-data-from-mongodb-using-query-in-bold-etl)

[Flatten MongoDBSSH objects in Bold BI using Bold Data Hub](https://support.boldbi.com/kb/article/16161/flattening-mongodb-objects-in-bold-bi-using-bold-etl)

[Connect MongoDB with SSH Tunneling and Passwordless using in Bold Data Hub](https://support.boldbi.com/kb/article/16555/connect-mongodb-with-ssh-tunneling-passwordless-using-bold-etl)
