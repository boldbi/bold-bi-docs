---
layout: post
title: PythonScript Bold Data Hub Connector – Bold BI Learning
description: Learn how to use the PythonScript Bold Data Hub connector in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---
# PythonScript

PythonScript is a file with a .py extension that contains a sequence of instructions written in the Python programming language to perform tasks such as automation, data processing or analysis.

## Example Configuration

```yaml
version: 1.0.1
encrypt_credentials: false
union_all_tables: true
add_dbname_column: false
use_snake_casing: true
plugins:
  extractors:
  - name: pyscript1
    connectorname: PythonScript
    schemaname:
    config:
      filePath: C:\BoldServices\app_data\elt\connectors\csvreaders.py
    properties:
    metadata:
    select:
```

## Configure the Bold Data Hub to connect PythonScript

  1. Click the `Data Hub` icon on the Navigation Pane.

  ![PythonScript Data Hub- BoldBI](/static/assets/working-with-etl/images/clickdatahub.png#max-width=100%)

  2. Click `Add Pipeline` and provide the new pipeline's name.
  
   ![PythonScript Data Hub- BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created pipeline and add the `PythonScript` template.

  ![PythonScript Data Hub- BoldBI](/static/assets/working-with-etl/images/PythonTemplate.png#max-width=100%)

  4. In your Python Script, ensure you have a `data frame` object. Add the following line after the dataframe object that is moved to tables using `Bold ETL`.

  ```js
pipeline.run(yourdataframename, table_name="yourtablename")
 ```

Replace `yourdataframename` with dataframe name & `yourtablename` with desired table name in your destination database.

  5. Click the “Upload File” button to upload your Python file.

  ![PythonScript - BoldBI](/static/assets/working-with-etl/images/uploadfile.png#max-width=100%)
 
  6. Copy the filepath and replace in filePath property.
  
  ![PythonScript - BoldBI](/static/assets/working-with-etl/images/PythonCopyfilepath.png#max-width=100%)
   
  ![PythonScript - BoldBI](/static/assets/working-with-etl/images/Pythonshowfilepath.png#max-width=100%)
 
  7. Click Save and choose the desired destination to save the pipeline.
  
  ![PythonScript - BoldBI](/static/assets/working-with-etl/images/csv_destination.png#max-width=100%)
   
  8. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

  ![PythonScript- BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

### Schedule Bold Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![PythonScript - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![PythonScript - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![PythonScript - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%)

3. The Schedule history can be checked using the history option as well as logs.

![PythonScript - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI.

![PythonScript - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

5. Click `Edit DataSource` Option to view the created tables.

![PythonScript - BoldBI](/static/assets/working-with-etl/images/PythonTablesCreated.png#max-width=100%)