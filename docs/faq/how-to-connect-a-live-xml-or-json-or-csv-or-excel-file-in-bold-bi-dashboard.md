---
layout: post
title: Connecting Files Online with Bold BI Embedded | Bold BI Docs
description: Learn how to connect files such as CSV, JSON, XML and Excel available online with Bold BI Embedded dashboard.
canonical: "/faq/how-to-connect-a-live-xml-or-json-or-csv-or-excel-file-in-bold-bi-dashboard/"
platform: bold-bi
documentation: ug
---

# How to connect a live file(CSV/JSON/XML/Excel) in Bold BI Dashboard?

The Bold BI dashboard designer supports connecting to live files (CSV/JSON/XML/Excel) using web services such as `Google Drive`, `Dropbox`, `Microsoft OneDrive`, and `Microsoft SharePoint`, or by using a `REST API`.

## Steps to connect a live file(CSV/JSON/XML/Excel) using Web Services 

1. Connect your [Google Drive](/working-with-data-sources/data-connectors/google-drive/), [Dropbox](/working-with-data-sources/data-connectors/dropbox/), [Microsoft OneDrive](/working-with-data-sources/data-connectors/ms-one-drive/), or [Microsoft SharePoint](/working-with-data-sources/data-connectors/ms-sharepoint/) account where your live file (CSV/JSON/XML/Excel) is stored.

2. Once the account is connected, select the account name and click the Connect button.

   ![select-account](/static/assets/faq/images/select-account.png)
    
3. In the Data source text box, enter the name of the data source and select a live file (CSV/JSON/XML/Excel) to connect to.

   ![select-file](/static/assets/faq/images/select-file.png)

4. Click Refresh Settings button to update your data periodically. This will automatically trigger a call for the API configured in the data source to keep the data up to date.

   ![select-refresh](/static/assets/faq/images/select-refresh.png)


5. Choose the schema from the tree view to design your dashboard and click the Connect button. 

   ![select-schema](/static/assets/faq/images/select-schema.png)

6. Now, the design canvas is open with the selected table schema. Drag and drop the table onto the design canvas and save your data source.
    ![design-canvas](/static/assets/faq/images/design-canvas.png)

## Steps to connect live file(CSV/JSON/XML) through Restful Web services 

1. If the live data is in CSV/JSON/XML format in your REST API, then connect the API in the designer using the [**Web API**](/working-with-data-sources/data-connectors/web/) connection type.

2. In the Data Format combo box select the format (CSV, JSON, XML) based on the response of your provided API.
   
    ![select-format](/static/assets/faq/images/select-format.png)

3. To update your data automatically, click Refresh Settings button.

    ![web-refresh](/static/assets/faq/images/web-refresh.png)

4.  Now you can connect the data source to design the dashboard.
