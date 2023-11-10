---
layout: post
title: Excel – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Excel file data with Bold BI Cloud and create data source for dashboard configuration.
platform: bold-bi
documentation: ug


---

# Connecting Bold BI to Excel Data Source
Bold BI dashboard designer allows you to connect Excel files from both local and cloud storage.

## File Prerequisites
* Bold BI supports connecting Excel workbooks created with version 2007 and later with `.xlsx` and `.xls` file extensions. 

* Prepared workbook should be a structured one. It should be created with unique column names and the value in a row must be in same data type for the corresponding columns. 

* The first row' values of your worksheet will be considered as column names by default in Bold BI. So, provide a unique and meaningful column name in your spreadsheet that will make it easy to identify your data.

* You can upload a maximum of file size 200 MB.

## Connecting an Excel file from Local Storage
To connect an Excel file from local storage, follow the below steps:

1. Click the **Data Sources** icon in the configuration panel to add a new data connection.
![Add new connection](/static/assets/working-with-datasource/data-connectors/images/Excel/add-new-connection.png)
 
2. Click **CREATE NEW** to launch a new connection from the connection panel.

3. Select `Excel` data source from the connection panel.
![Choose excel](/static/assets/working-with-datasource/data-connectors/images/Excel/choose-excel.png)
            
4. Now the Excel connection window will be opened. Provide a unique name for the data source.
 ![Add excel datasource](/static/assets/working-with-datasource/data-connectors/images/Excel/add-excel-datasource.png)

5. Choose the excel file from local storage by clicking the **browse** button and then file will be uploaded.
![Browse excel file](/static/assets/working-with-datasource/data-connectors/images/Excel/browse-excel-file.png)

6. Here, Bold BI allows different `Import Type` and click [here](/working-with-data-source/data-connectors/excel/#importing-data) to know more.
![Import type](/static/assets/working-with-datasource/data-connectors/images/Excel/import-type.png)

7. Now, click **Preview & Connect** and then preview window will appear. Here, you can choose your preferred `Tables and Columns`.
  ![Data preview](/static/assets/working-with-datasource/data-connectors/images/Excel/data-preview.png)

8. Click **Connect** and you will be navigated to data source designer page. Here,the `worksheets/tables` are listed in a tree view on the left side of the editing window.

9. Now, drag and drop the worksheet/table you want to analyze, and preview the data by clicking **Update**.
![Data design page](/static/assets/working-with-datasource/data-connectors/images/Excel/data-design-page.png)
 
10. You can also `refresh` the Excel data and click [here](/working-with-data-source/data-connectors/excel/#refreshing-local-excel-data-source) to know more.

11. Click **Save** to save the data source.

## Connecting an Excel file from Cloud Storage
To connect an Excel file from cloud storage, follow the below steps:

1. Click the **Data Sources** icon in the configuration panel to add a new data connection.
 ![Add new connection](/static/assets/working-with-datasource/data-connectors/images/Excel/add-new-connection.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.

3. Choose the `Cloud Storage` from the category and for example, choose the data source as `Microsoft SharePoint`.
 ![Choose cloud storage](/static/assets/working-with-datasource/data-connectors/images/Excel/choose-cloud-storage.png)

4. New window will appear. Here select your account and click **Connect** as shown in the following image.
![MS sharepoint account](/static/assets/working-with-datasource/data-connectors/images/Excel/ms-sharepoint-account.png)
 
5. Now, Microsoft SharePoint window appears. Set a data source name, select site and navigate through the folders to choose file as shown in the following image.
 ![Choose cloud excel](/static/assets/working-with-datasource/data-connectors/images/Excel/choose-cloud-excel.png)
             
6. Here, Bold BI allows different `Import Type` and click [here](/working-with-data-source/data-connectors/excel/#importing-data) to know more.
![Import type](/static/assets/working-with-datasource/data-connectors/images/Excel/import-type.png)
 
7. You can schedule refreshes to keep your data on the dashboard up to date using `Refresh Settings` option and click [here](/working-with-data-source/data-connectors/excel/#refreshing-cloud-excel-data-source) to know more. 
           
8. Now, click **Select** and then preview window will appear. Here, you can choose your preferred `Tables and Columns`.
![Cloud excel preview](/static/assets/working-with-datasource/data-connectors/images/Excel/cloud-excel-preview.png)
             
9. Click **Connect** and you will be navigated to data source designer page. Here, the `worksheets/tables` are listed in a tree view on the left side of the editing window. 

10. Now, drag and drop the worksheet/table you want to analyze, and preview the data by clicking **Update**.
![Cloud excel datadesign](/static/assets/working-with-datasource/data-connectors/images/Excel/cloud-excel-datadesign.png)

11. Click **Save** to save the data source.

## Importing data
Bold BI allows you to import excel as `Worksheets` and `Tables`.Choose Tables to fetch tables from Excel worksheets. Choose Worksheets to fetch an entire worksheet of data along with tables.

> **NOTE:**  The import type feature is only available for the version 2007 and later with .xlsx extension format.

## Importing Worksheets
Bold BI `Excel` data connector allows you to connect data from different worksheets.

Follow the below steps to connect data from different tables:

1. To connect entire worksheet along with tables, choose `Worksheets` in Import type.
![Import worksheets](/static/assets/working-with-datasource/data-connectors/images/Excel/import-worksheets.png)

2. Click **Preview & Connect** button and then preview window will appear.

3. Here, the sheets are listed in the left pane. To see the data preview of a sheet in the right pane, choose specific sheet from the drop-down list at top right corner of the window as shown in the following image. 
![Import worksheets preview](/static/assets/working-with-datasource/data-connectors/images/Excel/import-worksheets-preview.png)

## Importing Tables
Bold BI `Excel` data connector allows you to connect multiple tables across the worksheets. In the following workbook, `Order Details` worksheet has two different tables. Now, you can connect both tables in the designer.
![Spreadsheet tables](/static/assets/working-with-datasource/data-connectors/images/Excel/spreadsheet-tables.png)
 
Follow the below steps to connect data from different tables:

1. To connect one or more tables from your worksheets, choose `Tables` in Import type.
![Import tables](/static/assets/working-with-datasource/data-connectors/images/Excel/import-tables.png)

2. Click **Preview & Connect** button and then preview window will appear.

3. Here, the tables are listed in the left pane. To see the data preview of a table in the right pane, choose specific table from the drop-down list at top right corner of the window as shown in the following image.
![Import table preview](/static/assets/working-with-datasource/data-connectors/images/Excel/import-table-preview.png)

## Joining Excel data source with other data source
Bold BI allows you to join tables from two or more different data sources. To combine multiple data sources, use the `Shared Tables` panel at the bottom of the data source designer.

Click [here](/working-with-data-source/shared-table/) to know more.

## Refreshing Local Excel Data Source
Bold BI allows you to `refresh` the excel data in your dashboard. You can update this by editing the data source connection.

Follow the below steps to edit data source connection:

1. Click on **Edit Connection** button in data source designer page.
![Refresh local excel](/static/assets/working-with-datasource/data-connectors/images/Excel/refresh-local-excel.png)
             
2. In the Edit Connection dialog, browse your `Excel file` from local storage, which should be the same source file with updates or a different file name but with the same schema.

![Edit connection window](/static/assets/working-with-datasource/data-connectors/images/Excel/edit-connection-window.png)
 
3. Click **Reconnect** button and now your data gets updated.

## Refreshing Cloud Excel Data Source
Bold BI allows you to `refresh` the cloud-stored excel data in your dashboard. You can update this by creating a schedule to move data from your cloud location to an intermediate database location.

Follow the below steps to refresh the data:

1. Click **Refresh Settings** button in data source designer page.
![Refresh cloud excel](/static/assets/working-with-datasource/data-connectors/images/Excel/refresh-cloud-excel.png)
 
2. Select the recurrence type, recurrence, start and end dates in the `Refresh Settings` dialog box.
    * Data refresh can be scheduled hourly, daily, weekly and monthly.
    * Application Time Zone is displayed below the date picker. Start time of the schedule is converted to client Time Zone and shown in the right side for the user's convenience.

    ![Refresh settings window](/static/assets/working-with-datasource/data-connectors/images/Excel/refresh-settings-window.png) 
             
3. Now click **Schedule** button.

> **NOTE:**  In cloud storage, you may either replace the latest file with one of the same name or edit your existing file and save it with the modified content before refresh triggered. If schema changed in uploaded file, then data will be lost in your dashboard.

> **NOTE:**  You can also schedule refresh for already created data source. Click [here](/managing-resources/manage-data-sources/#refresh-setting) to know more. 

## Limitations
Below are the limitations for connecting excel file in Bold BI,

* You couldn't connect an excel file with the formats other than .xls and .xlsx extensions.
* You couldn't connect an empty worksheet.
* Inserted image, charts, shapes or non-data elements in the file will not be shown.
* You couldn't connect the password protected worksheet.

## Related Links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

<a href="https://www.boldbi.com/integrations/excel" target="_blank">Excel Integration</a>

[Tutorial Video](https://www.youtube.com/watch?v=fdDpy05G7Qg)

<a href="https://www.boldbi.com/blog/creating-custom-dashboards-with-excel-metrics-and-kpis" target="_blank">Blog Post</a>


