---
layout: post
title: Google Drive – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect your Google Drive account with Bold BI Cloud, read CSV, JSON, XML and XLSX files and create data source for widget configuration.
platform: bold-bi
documentation: ug
---
   
# Connecting Bold BI to Google Drive data source
`What is Google Drive` - Google Drive is a storage service offered by `Google` to store files and folders in the web based cloud drive. It also provides support for synchronization service with your local devices that will keep the files sync with the Google Drive and add benefit for backup system and reduce the local storage usage. 

## Connecting to a Google Drive
Bold BI dashboard designer allows you to connect files which is uploaded in `Google Drive`. It supports xlsx, xml, csv and json format files.
  
To enable this connection, follow the given steps:

1. Click the `Data Source` button in the configuration panel to add a new data connection.
![Data Source panel](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleDrive/datasource.png)
   
2. Click `CREATE NEW` to launch a new connection from the connection type panel. 
![Create Data source](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleDrive/createdatasource.png)

3. Click `Google Drive` connection button in the connection panel. 
![Google Drive icon](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleDrive/driveicon.png)

4. New window will appear. Here, select your account or click `Connect New Account` in the window opens.
![Connect to account](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleDrive/createaccount_googledrive.png)
   
5. The login window opens to authorize the user. Enter appropriate username and password for your account from which you want to access the `Google Drive` data.
![Sign in](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleDrive/sign_in.png)

6. The authorization window opens. Here, click `Allow` to authorize Bold BI application for downloading your `Google Drive` files and view meta data for your files.
![Allow Access](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleDrive/allow_access.png)

7. Now, Google Drive window appears. Set a data source name and choose file as shown in the following image.
![File Storage](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleDrive/file_storage.png)

8. Bold BI allows different `Import` type for Excel files. Click [here](/cloud-bi/working-with-data-source/data-connectors/excel/#importing-data) to know more.
![Import File](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleDrive/import.png)

9. You can schedule refreshes to keep your data on the dashboard up to date using `Refresh Settings` option and click [here](/cloud-bi/working-with-data-source/data-connectors/excel/#refreshing-cloud-excel-data-source) to know more.
![Refresh Settings](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleDrive/refresh_settings.png)

10. Now, click `Select` and then preview window will appear. Here, you can choose your preferred `Tables and Columns`.
![File Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleDrive/file_preview.png)

11. Click `Connect` and you will be navigated to data source designer page. Here, the `worksheets/tables` are listed in a tree view on the left side of the editing window.

12. Now, drag and drop the `worksheet/table` you want to analyze, and preview the data by clicking `Update`.
![Data Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleDrive/data_preview.png)

13. Click `Save` to save the data source.

## Related Links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[Google Drive Integration](https://www.boldbi.com/integrations/google-drive?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigoolgledriveintegration)






  
  












  
































