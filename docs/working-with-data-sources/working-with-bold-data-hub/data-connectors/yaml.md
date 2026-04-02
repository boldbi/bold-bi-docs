---
layout: post
title: Yaml Bold Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the yaml Bold Data Hub connector in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---
# Yaml

YAML is a human‑readable format used to store and structure data. It is commonly used in configuration files,data storage or transmission in applications. It is easy to write and understand.

## Example Configuration

```yaml
version: 1.0.1
encrypt_credentials: false
union_all_tables: true
add_dbname_column: false
use_snake_casing: true
plugins:
  extractors:
  - name: FileSystem
      connectorname: FileSystem
      schemaname:
      config:
      properties:
        storage: local
        type: yaml
        filePath: C:\BoldServices\app_data\elt\connectors\empdata.yml
      metadata:
      select:
```

## Configure the Bold Data Hub to connect Yaml

  1. Click the `Data Hub` icon on the Navigation Pane.

  ![Yaml Data Hub- BoldBI](/static/assets/working-with-etl/images/clickdatahub.png#max-width=100%)

  2. Click `Add Pipeline` and provide the new pipeline's name.

  ![Yaml Data Hub- BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)

  3. Select the newly created pipeline and add the `Yaml` template.

  ![Yaml Data Hub- BoldBI](/static/assets/working-with-etl/images/yamltemplate.png#max-width=100%)

  4. Click the “Upload File” button to upload your Yaml file.

  ![Yaml Data Hub - BoldBI](/static/assets/working-with-etl/images/uploadfile.png#max-width=100%)

  5. Copy the filepath and replace in filePath property.

  ![Yaml Data Hub - BoldBI](/static/assets/working-with-etl/images/yamlcopypath.png#max-width=100%)

  ![Yaml Data Hub - BoldBI](/static/assets/working-with-etl/images/yamlshowpath.png#max-width=100%)

  6. Click Save and choose the desired destination to save the pipeline.

  ![Yaml Data Hub - BoldBI](/static/assets/working-with-etl/images/csv_destination.png#max-width=100%)

  7. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

  ![Yaml Data Hub- BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

### Schedule Bold Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Yaml Data Hub - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Yaml Data Hub - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Yaml Data Hub - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%)

3. The Schedule history can be checked using the history option as well as logs.

![Yaml Data Hub - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI.

![Yaml Data Hub - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

5. Click `Edit DataSource` Option to view the created tables.