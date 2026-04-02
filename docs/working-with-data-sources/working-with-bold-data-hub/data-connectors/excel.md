---
layout: post
title: Excel Bold Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Excel Bold Data Hub connector in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---
# Excel

Excel is a spreadsheet tool used to store and organize data in tables. It helps you analyze information using formulas, filters, and functions. You can also visualize your data through charts, graphs, and pivot tables.

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
        type: excel
        sheetname: Sheet1
        range: B6:H20
        include_header: true
        filePath: C:\BoldServices\app_data\elt\connectors\orderdata.xlsx
      metadata:
      select:
```

## Configure the Bold Data Hub to connect Excel

  1. Click the `Data Hub` icon on the Navigation Pane.

  ![Excel Data Hub- BoldBI](/static/assets/working-with-etl/images/clickdatahub.png#max-width=100%)

  2. Click `Add Pipeline` and provide the new pipeline's name.

  ![Excel Data Hub- BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)

  3. Select the newly created pipeline and add the `Excel` template.

  ![Excel Data Hub- BoldBI](/static/assets/working-with-etl/images/exceltemplate.png#max-width=100%)

### Configuration Parameters

|  Parameters |  Description                                     |
|--------------------------------|---------------------------------------------|
| **sheetname:**                | Specify the name of the Excel sheet from which the data should be read. |
| **range:**                 | Specify the cell range to extract data from a specific area of the sheet. If include_header is true, the first row from the specified range will be treated as column header. It is useful when headers are not in  first row. |
| **include_header:**             |Controls whether the first row should be treated as column names. If it is set to true,the first row is read as column headers. By default it is false and the first row is treated as data, and generic column names are assigned. |

  4. Click the “Upload File” button to upload your Excel file.

  ![Excel Data Hub - BoldBI](/static/assets/working-with-etl/images/uploadfile.png#max-width=100%)

  5. Copy the filepath and replace in filePath property. Also Provide the appropriate sheet name.

  ![Excel Data Hub - BoldBI](/static/assets/working-with-etl/images/copypathExcel.png#max-width=100%)

  ![Excel Data Hub - BoldBI](/static/assets/working-with-etl/images/showpathexcel.png#max-width=100%)

  6. Click Save and choose the desired destination to save the pipeline.

  ![Excel Data Hub - BoldBI](/static/assets/working-with-etl/images/csv_destination.png#max-width=100%)

  7. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

  ![Excel Data Hub- BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

### Schedule Bold Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Excel Data Hub - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Excel Data Hub - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Excel Data Hub - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%)

3. The Schedule history can be checked using the history option as well as logs.

![Excel Data Hub - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI.

![Excel Data Hub - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

5. Click `Edit DataSource` Option to view the created tables.