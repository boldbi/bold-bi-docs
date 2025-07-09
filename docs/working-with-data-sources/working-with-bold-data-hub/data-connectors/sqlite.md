---
layout: post
title: SQLite Data Hub Connector – Bold BI Integration Guide & Tutorial
description: Learn how to use the SQLite Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to connect, import, and analyze your SQLite database files with ease.
platform: bold-bi
documentation: ug

---

# SQLite Source

SQLite is a lightweight, file-based database used for storing and managing data locally. It’s easy to use and perfect for small to medium datasets, making it ideal for quick setup and offline analysis.

### Connect to a SQLite Database File

To connect to a SQLite database file in Bold BI, follow these steps:

1. Make sure your .db or .sqlite file is ready and accessible.
2. In Bold BI, go to the Data Source section.
3. Choose SQLite from the available connectors.
4. Browse and select your SQLite database file.
5. Test the connection and proceed to import your data.

## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
filePath: Path to your SQLite database file (e.g., `.db` or `.sqlite`)
```

### Example Configuration

```yaml
version: 1.0.1
encrypt_credentials: false
union_all_tables: true
add_dbname_column: false
plugins:
  extractors:
    - name: SQLite
      connectorname: SQLite
      schemaname: 
      config:
        filePath: <Path-to-your-SQLite-file>
      properties: 
      metadata: 
      select:
        - tablename
```
## Configure the Data Hub to connect SQLite

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![SQLite - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Pipeline` and provide the name for the new pipeline.
  
   ![SQLite - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created pipeline and choose the SQLite connector. Double click or Click on Add Template option to add template.

  ![SQLite - BoldBI](/static/assets/working-with-etl/images/SQLite_yaml.png#max-width=100%)

  ### Configuration Parameters

|  Parameters |  Description                                     |
|--------------------------------|---------------------------------------------|
| **File Path:**                | Provide the full local path to your SQLite database file (e.g., .db, .sqlite). |
| **Select:**                  |    **Tablename(s):**         Provide one or more table names from which to load data in the BigQuery dataset. |
  
  4. Click the “Upload File” button to upload your credentials Json file

  ![SQLite - BoldBI](/static/assets/working-with-etl/images/uploadfile.png#max-width=100%)
 
  5. Copy the filepath and replace in credentials_path property. If it’s an Json file.
  
   ![SQLite - BoldBI](/static/assets/working-with-etl/images/sqlite_copypath.png#max-width=100%) 

  ![SQLite - BoldBI](/static/assets/working-with-etl/images/sqlite_final_template.png#max-width=100%)

  6. Click Save and choose the desired destination to save the pipeline.
  
   ![SQLite - BoldBI](/static/assets/working-with-etl/images/csv_destination.png#max-width=100%)
  
  7. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/).

   ![SQLite - BoldBI](/static/assets/working-with-etl/images/pipeline_DScreated.png#max-width=100%)

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![SQLite - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![SQLite - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![SQLite - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![SQLite - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![SQLite - BoldBI](/static/assets/working-with-etl/images/pipeline_DScreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.
