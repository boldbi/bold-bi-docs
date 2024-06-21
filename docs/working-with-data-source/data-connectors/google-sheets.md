---
layout: post
title: Google Sheets - Embedded BI Connector | Bold BI Docs
description: Learn how to connect Google Sheets with Bold BI deployed in your server and create data source for dashboard preparation.
canonical: "/cloud-bi/working-with-data-source/data-connectors/google-sheets/"
platform: bold-bi
documentation: ug
---
   
# Connecting Bold BI to Google Sheets data source
**What is Google Sheets** - Google Sheets is a spreadsheet program which is a collaborative tool for cooperative editing of spreadsheets in real-time.

## Connecting to a Google Sheets
Bold BI dashboard designer allows you to connect files which is uploaded in **Google Sheets**. It supports spreadsheet format files.
   
To enable this connection, follow the given steps:

1. Click the **Data Source** button in the configuration panel to add a new data connection.![Data Source panel](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleSheets/datasource.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection type panel.![Create Data source](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleSheets/createdatasource.png)

3. Click **Google Sheets** connection button in the connection panel.![Google Sheets icon](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleSheets/Sheetsicon.png)

4. New window will appear. Here, select your account or click **Connect New Account** in the window opens.![Connect to account](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleSheets/createaccount_googleSheets.png)
   
5. The login window opens to authorize the user. Enter appropriate username and password for your account from which you want to access the **Google Sheets** data.
![Sign in](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleSheets/sign_in.png)

6. The authorization window opens. Here, click **Allow** to authorize Bold BI application for downloading your **Google Sheets** files and view meta data for your files.![Allow Access](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleSheets/allow_access.png)

7. Now, Google Sheets window appears. Set a data source name and choose file as shown in the following image.![File Storage](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleSheets/file_storage.png)

8. You can schedule refreshes to keep your data on the dashboard up to date using **Refresh Settings** option and click [here](/embedded-bi/working-with-data-source/data-connectors/excel/#refreshing-cloud-excel-data-source) to know more.![Refresh Settings](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleSheets/refresh_settings.png)

9. Now, click **Select** and then preview window will appear. Here, you can choose your preferred **Tables and Columns**.![File Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleSheets/file_preview.png)

10. Click **Connect** and you will be navigated to data source designer page. Here, the **worksheets/tables** are listed in a tree view on the left side of the editing window.

11. Now, drag and drop the **worksheet/table** you want to analyze, and preview the data by clicking **Update**.![Data Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleSheets/data_preview.png)

12. Click **Save** to save the data source.

> **NOTE:** When the configured Google Sheets is deleted or renamed from your account, an extract mode data source refresh will get failed and the configured dashboard will still work with the old data.

## Related Links

[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[Google Sheets Integration](https://www.boldbi.com/integrations/google-sheets?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigoolglesheetsintegration)
