---
layout: post
title: Google Sheets - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Google Sheets with cloud-hosted Bold BI and create data source for dashboard preparation.
platform: bold-bi
documentation: ug
---
   
# Connecting Bold BI to Google Sheets data source
**What is Google Sheets?** Google Sheets is a spreadsheet program that serves as a collaborative tool for editing spreadsheets together in real-time.

## Connecting to a Google Sheets
The Bold BI dashboard designer allows you to connect files that are uploaded in **Google Sheets**. It supports files in spreadsheet format.
   
To establish this connection, follow the steps below:

1. Click on the **Data Source** button in the configuration panel to add a new data connection.
![Data Source panel](/static/assets/working-with-datasource/data-connectors/images/GoogleSheets/datasource.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection type panel.![Create Data source](/static/assets/working-with-datasource/data-connectors/images/GoogleSheets/createdatasource.png)

3. Click **Google Sheets** connection button in the connection panel.![Google Sheets icon](/static/assets/working-with-datasource/data-connectors/images/GoogleSheets/Sheetsicon.png)

## Advanced
In the Advanced category, it will redirect to the Bold ETL. Please refer to the [Bold ETL](/managing-resources/manage-data-sources/#advanced-category).

## Basic
In the Basic category, it will serve as the connector in Bold BI. You will need to follow the steps outlined below.

4. A new window will appear. Here, you can select your account or click on **Connect New Account** if the window opens.![Connect to account](/static/assets/working-with-datasource/data-connectors/images/GoogleSheets/createaccount_googleSheets.png)
   
5. The login window opens to authorize the user. Please enter the appropriate username and password for the account you wish to use to access the **Google Sheets** data.
![Sign in](/static/assets/working-with-datasource/data-connectors/images/GoogleSheets/sign_in.png)

6. The authorization window will open. Click **Allow** here to authorize the Bold BI application to download your **Google Sheets** files and view the metadata for your files.![Allow Access](/static/assets/working-with-datasource/data-connectors/images/GoogleSheets/allow_access.png)

7. Now, the Google Sheets window appears. Set a data source name and choose the file as shown in the following image. ![File Storage](/static/assets/working-with-datasource/data-connectors/images/GoogleSheets/file_storage.png)

8. You can schedule refreshes to keep the data on your dashboard up to date by using the **Refresh Settings** option. click [here](/working-with-data-sources/data-connectors/excel/#refreshing-cloud-excel-data-source) to learn more.![Refresh Settings](/static/assets/working-with-datasource/data-connectors/images/GoogleSheets/refresh_settings.png)

9. Now, click **Select** and then preview window will appear. Here, you can choose your preferred **Tables and Columns**.![File Preview](/static/assets/working-with-datasource/data-connectors/images/GoogleSheets/file_preview.png)

10. Click **Connect** and you will be directed to the data source designer page. Here, the **worksheets/tables** are listed in a tree view on the left side of the editing window.

11. Now, drag and drop the **worksheet/table** you want to analyze, and preview the data by clicking **Update**.![Data Preview](/static/assets/working-with-datasource/data-connectors/images/GoogleSheets/data_preview.png)

12. Click **Save** to save the data source.

> **NOTE:** If the configured Google Sheets is deleted or renamed from your account, the refresh of the data source in extract mode will fail, and the configured dashboard will continue to work with the old data.

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developers.google.com/identity/protocols/OAuth2)

>**NOTE**: To obtain the client ID and client secret for the Google-related data sources, Refer to the [Google OAuth Documentation](/working-with-data-sources/data-connectors/gmail/#how-to-obtain-the-google-client-id-and-client-secret). 


## Related Links

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Google Sheets Integration](https://www.boldbi.com/integrations/google-sheets?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigoolglesheetsintegration)

[How to set up OAuth 2.0 authorization to access Google applications in Bold BI](https://www.boldbi.com/kb/security/how-to-set-up-oauth2-authorization-to-access-google-applications)

[Create and Embed Dashboards with Google Sheets Data](https://www.boldbi.com/blog/create-and-embed-dashboard-with-google-sheets-data)