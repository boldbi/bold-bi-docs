---
layout: post
title: FileSystem(Csv,Excel,Json,Yaml) Data Hub Connectors – Embedded BI
description: Learn how to use the Reader source and FileSystem Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# ``FileSystem``:

This data source can easily stream files from the local ``filesystem`` using the reader source.

***The Reader source supports three types of file extension:**
- Csv files
- Excel files
- Json files
- yaml files

## Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: FileSystem
      connectorname: FileSystem
      config:
      properties:
        type: <csv/excel/jsonl>
        filepath: <Paste the copied file path>
        # sheetname is required for excel type
        sheetname:
```

## Configure the Data Hub to connect FileSystem/csv/excel/json/yaml Files 

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![FileSystem - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Pipeline` and provide the name for the new pipeline.
  
   ![FileSystem - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created pipeline and choose the Filesystem / CSV / Excel / JSON / YAML connector. Double click or Click on Add Template option to add template.

  ![FileSystem - BoldBI](/static/assets/working-with-etl/images/csv_addtemplate.png#max-width=100%)
  
  4. Click the “Upload File” button to upload your Excel or CSV file

  ![FileSystem - BoldBI](/static/assets/working-with-etl/images/uploadfile.png#max-width=100%)
 
  5. Copy the filepath and replace in filePath property. If it’s an Excel file, add the sheet name, otherwise remove it, if using Filesystem connector.
  
   ![FileSystem - BoldBI](/static/assets/working-with-etl/images/csv_copypath.png#max-width=100%) 
   
  ![FileSystem - BoldBI](/static/assets/working-with-etl/images/csv_finaltemplate.png#max-width=100%)
 
  6. Click Save and choose the desired destination to save the pipeline.
  
   ![FileSystem - BoldBI](/static/assets/working-with-etl/images/csv_destination.png#max-width=100%)
   
  7. Now the pipeline will be saved and started automatically. Click on Logs to see if the run is completed and data source is created in Bold BI.
  
   ![FileSystem - BoldBI](/static/assets/working-with-etl/images/csv_logs.png#max-width=100%)
  
  8. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/).

   ![FileSystem - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![FileSystem - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![FileSystem - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![FileSystem - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![FileSystem - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![FileSystem - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.

![FileSystem - BoldBI](/static/assets/working-with-etl/images/editdatasource.png#max-width=100%)  



