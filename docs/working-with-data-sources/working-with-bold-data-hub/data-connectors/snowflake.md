---
layout: post
title: Snowflake Data Hub Connector – Bold Data Hub Embedded Learning
description: Learn how to connect Snowflake to Bold BI using Data Hub connectors. Follow easy steps to bring in your data and start analyzing it quickly.
platform: bold-bi
documentation: ug
---
# Snowflake
Snowflake is a cloud-based data warehouse that uses SQL to manage and analyze large amounts of data. It is popular for its speed, easy scaling, and ability to handle big data. Snowflake is often used in business reporting, data analytics, and machine learning.
## Connection Properties
In a YAML file, the `config` section contains the following properties:
```yaml
Connectorname: Snowflake
user: <>
password: <>
database: <>
account: <>
```
### Example Configuration
```yaml
version: 1.0.1
encrypt_credentials: true
union_all_tables: true
add_dbname_column: false
plugins:
  extractors:
    - name: Snowflake
      connectorname: Snowflake
      schemaname: 
      config:
        user: <>
        password: <>
        account: <>
        database: <>
      properties: 
      metadata: 
      select:
      - tablename
```
## Configure the Bold Data Hub to connect Snowflake
  1. Click the `Data Hub` icon on the Navigation Pane.
  ![Snowflake Hub- BoldBI](/static/assets/working-with-etl/images/clickdatahub.png#max-width=100%)
  2. Click `Add Pipeline` and provide the new pipeline's name.
  
   ![Snowflake Hub- BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created pipeline and add the `MySQL` template.
  ![Snowflake Hub- BoldBI](/static/assets/working-with-etl/images/snowflake_template.png#max-width=100%)
  
### Configuration Parameters
  
  |Parameters |    Description                                          |
|--------------------------|----------------------------------------------|
| **Username:**                |  Provide the username to authenticate with the Snowflake server.    |
| **Password:**            | Provide the password to authenticate with the Snowflake server. |
| **Account:**                | Specify the Snowflake account identifier (e.g., `xy12345-kc60294`). |
| **Database:**            | Specify the name of the Snowflake database from which data will be extracted. |
| **Schema:**            | Define the schema within the database where the tables reside. |
|    **Select:**     |                                  **Tablename(s):**       Specify the table name list to load tables from the Snowflake server.|
  4. Update the details required in the template and Click Save, choose the desired destination to save the pipeline.
  ![Snowflake Hub- BoldBI](/static/assets/working-with-etl/images/snowflake_yaml.png#max-width=100%)
  
 5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)
### Schedule Bold Data Hub Job
1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.
![Snowflake - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)
![Snowflake - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)
2. For on-demand refresh, click `Run Now` button.
![Snowflake - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).
3. The Schedule history can be checked using the history option as well as logs.
![Snowflake - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)
4. Click on Logs to see if the run is completed and data source is created in Bold BI. 
![Snowflake - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)
5. Click `Edit DataSource` Option to view the created tables.