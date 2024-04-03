---
layout: post
title: Working with Projects – Embedded BI | Bold BI Learning
description: Learn how to Working with Projects in ETL application in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Working with Projects:

This section explains creating a new project and importing data into the destination connector.

## Steps for Creating New Project:

Click Add Project in the left side panel. Enter the name of the project and click ‘+’.
   
![Add Project](/static/assets/working-with-etl/images/etl_add_project.png)  

Enter the project name ('_' only allowed) and click the tick icon. Then click on the project name.
   
![Tick](/static/assets/working-with-etl/images/etl_project_name.png)

It will show to the **Source** page to configure the source and destination connector configuration.
   
![Source](/static/assets/working-with-etl/images/etl_source.png)

## Source Page:

Configure the details of the source data source connector in a YAML file format.

In the Connector list panel, the data source name is listed. Select the connector name and click on the Add Template for sample configuration details and a sample template source configuration will be added. We can add multiple connectors into a single project and move data into a destination database.

![SourcePage](/static/assets/working-with-etl/images/etl_addtemplate.png)

![Template](/static/assets/working-with-etl/images/etl_mysqltemplate.png)

Click Save and Popup window will appear. Click on the dropdown menu Select Destination and select ``DataStoreName`` which configured in the Data Store settings page.
![Template1](/static/assets/working-with-etl/images/etl_savedest.png)

Once project runs completed, it will create data source in ``Bold BI Data Sources``.

![Template1](/static/assets/working-with-etl/images/etl_create_datasource.png)

Example: Configuration File

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: db1
      connectorname: MySQL
      config:
        host: localhost
        port: 3306
        username: username
        database: databasename
        password: password
        drivername: mssql+pymysql
      select:
      - table1
    - name: db2
      connectorname: PostgreSQL
      config:
        host: localhost
        port: 5432
        username: username
        database: databasename
        password: password
        drivername: postgresql+pg8000
      select:
      - table2
```
