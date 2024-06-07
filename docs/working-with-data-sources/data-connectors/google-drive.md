---
layout: post
title: Google Drive – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect your Google Drive account with Bold BI Cloud, read CSV, JSON, XML and XLSX files and create data source for widget configuration.
platform: bold-bi
documentation: ug
---
   
# Connecting Bold BI to Google Drive data source
`What is Google Drive?` Google Drive is a storage service offered by `Google` to store files and folders in a web-based cloud drive. It also provides support for synchronization services with your local devices, keeping files synced with Google Drive and adding benefits for a backup system and reducing local storage usage.

## Connecting to a Google Drive
The Bold BI dashboard designer allows you to connect files that are uploaded to `Google Drive`. It supports xlsx, xml, csv, and json format files.
  
To enable this connection, follow the given steps:

1. Click the `Data Source` button in the configuration panel to add a new data connection.
![Data Source panel](/static/assets/working-with-datasource/data-connectors/images/GoogleDrive/datasource.png)
   
2. Click `CREATE NEW` to launch a new connection from the connection type panel. 
![Create Data source](/static/assets/working-with-datasource/data-connectors/images/GoogleDrive/createdatasource.png)

3. Click `Google Drive` connection button in the connection panel. 
![Google Drive icon](/static/assets/working-with-datasource/data-connectors/images/GoogleDrive/driveicon.png)

4. A new window will appear. Here, you can select your account or click on `Connect New Account` if the window opens.
![Connect to account](/static/assets/working-with-datasource/data-connectors/images/GoogleDrive/createaccount_googledrive.png)
   
5. The login window opens to authorize the user. Please enter the appropriate username and password for the account that you want to use to access the `Google Drive` data.
![Sign in](/static/assets/working-with-datasource/data-connectors/images/GoogleDrive/sign_in.png)

6. The authorization window will open. Click `Allow` to authorize the Bold BI application to download your `Google Drive` files and view metadata for your files.
![Allow Access](/static/assets/working-with-datasource/data-connectors/images/GoogleDrive/allow_access.png)

7. Now, the Google Drive window appears. Set a data source name and choose a file as shown in the following image.
![File Storage](/static/assets/working-with-datasource/data-connectors/images/GoogleDrive/file_storage.png)

8. Bold BI allows for different `Import` type for Excel files. Click [here](/working-with-data-sources/data-connectors/excel/#importing-data) to learn more.
![Import File](/static/assets/working-with-datasource/data-connectors/images/GoogleDrive/import.png)

9. You can schedule refreshes to keep the data on your dashboard up to date by using the `Refresh Settings` option and click [here](/working-with-data-sources/data-connectors/excel/#refreshing-cloud-excel-data-source) to learn more.
![Refresh Settings](/static/assets/working-with-datasource/data-connectors/images/GoogleDrive/refresh_settings.png)

10. Now, click `Select` and a preview window will appear. Here, you can choose your preferred `tables and columns`.
![File Preview](/static/assets/working-with-datasource/data-connectors/images/GoogleDrive/file_preview.png)

11. Click `Connect` and you will be navigated to the data source designer page. Here, the `worksheets/tables` are listed in a tree view on the left side of the editing window.

12. Now, drag and drop the `worksheet/table` you want to analyze, and preview the data by clicking `Update`.
![Data Preview](/static/assets/working-with-datasource/data-connectors/images/GoogleDrive/data_preview.png)

13. Click `Save` to save the data source.

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developers.google.com/identity/protocols/OAuth2)

>**NOTE**: To obtain the client ID and client secret for the Google-related data sources, Refer to the [Google OAuth Documentation](/working-with-data-sources/data-connectors/gmail/#how-to-obtain-the-google-client-id-and-client-secret). 


## Related Links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Google Drive Integration](https://www.boldbi.com/integrations/google-drive?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigoolgledriveintegration)

[How to set up OAuth 2.0 authorization to access Google applications in Bold BI](https://www.boldbi.com/kb/security/how-to-set-up-oauth2-authorization-to-access-google-applications)

[Create and Embed Dashboards with Data Stored in Google Drive](https://www.boldbi.com/blog/create-and-embed-dashboard-with-google-drive-data)




  
  












  
































