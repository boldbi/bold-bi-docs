---
layout: post
title: Connecting Files Online with Bold BI | Bold BI Documentation
description: Learn how to connect files such as CSV, JSON, XML and Excel available online with Bold BI dashboard.
platform: bold-bi
documentation: ug
---

# How to connect a live file(CSV/JSON/XML/Excel) in Bold BI Dashboard?

Bold BI dashboard designer supports to connect live file(CSV/JSON/XML/Excel) using either web services like `Google Drive`, `DropBox`, `Microsoft OneDrive`, `Microsoft SharePoint` or using `REST API`

## Steps to connect a live file(CSV/JSON/XML/Excel) using Web Services 

1. Connect your [Google Drive](/embedded-bi/working-with-data-source/data-connectors/google-drive/) or [Dropbox](/embedded-bi/working-with-data-source/data-connectors/dropbox/) or [Microsoft OneDrive](/embedded-bi/working-with-data-source/data-connectors/ms-one-drive/) or [Microsoft SharePoint](/embedded-bi/working-with-data-source/data-connectors/ms-sharepoint/) account in which you are having your live file(CSV/JSON/XML/Excel).

2. Once connected the account, select the account name and click Connect button.

   ![select-account](/static/assets/embedded/faq/images/select-account.png)
    
3. In the Data source text box, enter the name for data source and select a live file(CSV/JSON/XML/Excel)  to connect.

   ![select-file](/static/assets/embedded/faq/images/select-file.png)

4. Click Refresh Settings button to update your data periodically. This will automatically trigger a call for the API configured in the data source to keep the data up to date.

   ![select-refresh](/static/assets/embedded/faq/images/select-refresh.png)


5. Choose the schema from the tree view to design your dashboard and click Connect button. 

   ![select-schema](/static/assets/embedded/faq/images/select-schema.png)

6. Now the design canvas is open with select table schema. Drag and drop the table in design canvas and save your data source.
    ![design-canvas](/static/assets/embedded/faq/images/design-canvas.png)

## Steps to connect live file(CSV/JSON/XML) through Restful Web services 

1. If the live data is in CSV/JSON/XML format in your REST API, then connect the API in designer using [**Web API**](/embedded-bi/working-with-data-source/data-connectors/restful-web-services/) connection type.

2. In the Data Format combo box select the format (CSV, JSON, XML) based on the response of your provided API.
   
    ![select-format](/static/assets/embedded/faq/images/select-format.png)

3. To update your data automatically, click Refresh Settings button.

    ![web-refresh](/static/assets/embedded/faq/images/web-refresh.png)

4.  Now you can connect that data source to design the dashboard.
