---
layout: post
title: Working with Projects – Embedded BI | Bold BI Learning
description: Learn how to Working with Projects in ETL application in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Working with Projects:

This section provides detailed instructions on the process of creating a new project and importing data into the designated connector. Prior to this, it is essential to properly configure the [Data Store](/working-with-data-sources/working-with-bold-etl/data-store/) in order to proceed with the subsequent steps.

## Steps for Creating New Project:

To add a new project, navigate to the left side panel and click on the "Add Project" button
   
![Add Project](/static/assets/working-with-etl/images/etl_add_project.png)  


> **Note:** Project name using only alphanumeric characters and click on the ``tick`` icon to confirm and save the project details.


Please input the designated project title and proceed by selecting the confirm icon. Subsequently, select the project name to proceed with further actions.
   
![Tick](/static/assets/working-with-etl/images/etl_project_name.png)

You will be directed to the Load page where you can configure the settings for the source connector.
   
![Source](/static/assets/working-with-etl/images/etl_source.png)

## Load:

The source data source connector can be configured in a **YAML** file format. The data source name is displayed in the Connector list panel, where the user can select the connector name and click on Add Template to access sample configuration details. Multiple connectors can be added to a project to transfer data to a destination database.

![SourcePage](/static/assets/working-with-etl/images/etl_addtemplate.png)

![Template](/static/assets/working-with-etl/images/etl_mysqltemplate.png)


Example: Configuration File

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
  - name: MySQL
    connectorname: MySQL
    schemaname: 
    config:
      host: localhost
      port: 3306
      username: root
      database: sakila
      password: +NQCHLZ1l/RaR1L0HK+0jg==
      drivername: mysql+pymysql
    select:
    - inventory
    - payment
  - name: PostgreSQL
    connectorname: PostgreSQL
    schemaname: test
    config:
      host: localhost
      port: 5438
      username: postgres
      database: demo
      password: +NQCHLZ1l/RaR1L0HK+0jg==
      drivername: postgresql+pg8000
    select:
    - ticket_metrics
```

After clicking the Save button, a popup window will appear. Within this window, locate and click on the dropdown menu labeled Select ``Destination``. From the options provided, choose the specific ``DataStoreName`` that has been previously configured in the Data Store settings page.

![Template1](/static/assets/working-with-etl/images/etl_savedest.png)

Next, navigate to the "Schedule" page on the platform and select the "Run Now" option to initiate the desired action immediately.
![Template1](/static/assets/working-with-etl/images/etl_s5.png)


Upon the completion of the project, a data source will be generated within the platforms of "Bold BI" or "Bold Reports."
![Template1](/static/assets/working-with-etl/images/etl_create_datasource.png)

Please refer to the current operational status by accessing the information displayed in the "Logs" tab.
![Template1](/static/assets/working-with-etl/images/etl_s6.png)

