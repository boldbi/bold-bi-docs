---
layout: post
title: MySQLSSH Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the MySQLSSH Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# MySQL SSH

[MySQL](https://www.mysql.com/) is a relational database management system based on SQL – Structured Query Language. The application is used for a wide range of purposes, including data warehousing, e-commerce, and logging applications.

## Connection Properties

In a YAML file, the `config` section contains the following properties:

```yaml
Connectorname: MySQLSSH
host: Hostname or IP address of the server
port: Server running port
username: Username
password: Password
database: Database
drivername: mysql+pymysql
ssh_host: ssh_hostname
ssh_port: ssh_port
ssh_user: ssh_username
ssh_private_key_path: privatekey
```

## Configure the Bold Data Hub to connect MySQL via SSH

  1. Click the `Data Hub` icon on the Navigation Pane.

  ![MySQLSSH Data Hub- BoldBI](/static/assets/working-with-etl/images/clickdatahub.png#max-width=100%)

  2. Click `Add Project` and provide the new project's name.
  
   ![MySQLSSH Data Hub- BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `MySQLSSH` template.

  ![MySQLSSH Data Hub- BoldBI](/static/assets/working-with-etl/images/mysqlssh_addtemplate.png#max-width=100%)
  
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
| **SSH Host:**        | Specify the SSH hostname for connecting to the MySQL server securely.                    |
| **SSH Port:**        | Specify the SSH port number (default is 22).                                            |
| **SSH User:**        | Provide the SSH username for authentication.                                            |
| **SSH Private Key:** | Specify the path to the SSH private key file for authentication.                        |

  4. Update the details required in the template and Click Save, choose the desired destination to save the pipeline.

  ![MySQLSSH Data Hub- BoldBI](/static/assets/working-with-etl/images/mysqlssh_yaml.png#max-width=100%)
  
  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI]

### Schedule Bold Data Hub Job
1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![MySQLSSH - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![MySQLSSH - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![MySQLSSH - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![MySQLSSH - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![MySQLSSH - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.





### Example Configuration
Exam
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
        ssh_host: ssh_hostname
        ssh_port: ssh_port
        ssh_user: ssh_username
        ssh_private_key_path: privatekey
      select:
        - TABLE1
        - TABLE2
```