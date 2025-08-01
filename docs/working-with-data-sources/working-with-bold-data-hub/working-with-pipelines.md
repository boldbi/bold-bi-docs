---
layout: post
title: Working with Pipeline – Embedded BI | Bold BI Learning
description: Learn how to Working with Pipeline in ETL application in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Working with Pipeline:

This section provides detailed instructions on the process of creating a new Pipeline and importing data into the designated connector. Prior to this, it is essential to properly configure the [Data Store](/working-with-data-sources/working-with-bold-data-hub/data-store/) in order to proceed with the subsequent steps.

## Steps for Creating New Pipeline:

To add a new Pipeline, navigate to the left side panel and click on the "Add Pipeline" button
   
![Add Pipeline](/static/assets/working-with-etl/images/addpipeline.png)  


> **Note:** Pipeline name using only alphanumeric characters and click on the ``tick`` icon to confirm and save the Pipeline details.


Provide the designated Pipeline name and proceed by selecting the confirm icon. Subsequently, select the Pipeline name to proceed with further actions.
   
![Tick](/static/assets/working-with-etl/images/datahub_project_name.png)

You will be directed to the Load page where you can configure the settings for the source connector.
   
![Source](/static/assets/working-with-etl/images/datahub_source.png)

## Load:

The source data source connector can be configured in a **YAML** file format. The data source name is displayed in the Connector list panel, where the user can select the connector name and click on Add Template to access sample configuration details. Multiple connectors can be added to a Pipeline to transfer data to a destination database.

![SourcePage](/static/assets/working-with-etl/images/etl_addtemplate.png)

![Template](/static/assets/working-with-etl/images/mysql_addtemplate.png)


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

![Template1](/static/assets/working-with-etl/images/datahub_savedest.png)

Next, navigate to the "Schedule" page on the platform and select the "Run Now" option to initiate the desired action immediately.
![Template1](/static/assets/working-with-etl/images/schedule_runnow.png)


Upon the completion of the project, a data source will be generated within the platforms of "Bold BI" or "Bold Reports."
![Template1](/static/assets/working-with-etl/images/pipeline_DsCreated.png)

Please refer to the current operational status by accessing the information displayed in the "Logs" tab.
![Template1](/static/assets/working-with-etl/images/datahub_logs.png)

