---
layout: post
title: Gmail Data Connector – Cloud BI | Bold BI Documentation
description: Learn how to connect your Gmail account data with Bold BI Cloud dashboard editor and create data source. 
platform: bold-bi
documentation: ug
---
   
# Connecting Bold BI to Gmail data source

  `What is Gmail` Gmail offers free cloud storage for storing emails in the web. Gmail makes emailing, chatting, drafting and archiving your mails and conversations easy and convenient. It's necessary to create a Gmail account.

## Connecting to a Gmail 

   You can connect to web services of popular site like `Gmail` connection type. To enable this connection, follow the given steps.

   Click the `Data Source` button in the configuration panel to add a new data connection.
   
   ![Data source panel](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
   Click `CREATE NEW` to launch a new connection from the connection type panel. 
   
   ![Add data source](/static/assets/cloud/working-with-datasource/data-connectors/images/common/datasourcebutton.png)

   Click `Gmail` connection button in the connection panel. 

   ![Gmail icon](/static/assets/cloud/working-with-datasource/data-connectors/images/gmail/gmailicon.png)

   Click `Connect an Account` in the window opens.

   ![Create account](/static/assets/cloud/working-with-datasource/data-connectors/images/gmail/createaccount_gmail.png)
   
   The login window opens to authorize the user.
   
   Enter an appropriate username and password. The authorization window opens.

   ![Sign in](/static/assets/cloud/working-with-datasource/data-connectors/images/gmail/gmail.png)

   Click `Allow` in the authorization window. The datasource window opens.

   ![Allow access](/static/assets/cloud/working-with-datasource/data-connectors/images/gmail/allowbuttongmail.png)

   To get data through datasource window, follow the given steps:

   * Enter an API in URL text box which must be the valid REST API.

> **IMPORTANT:** Refer to the [Gmail API Documentation](https://developers.google.com/gmail/api/) to build a query for discovering more data requests. Test the query before entering it in the URL text box. Use [Google APIs Explorer](https://developers.google.com/apis-explorer/#p/gmail/v1//), to build the query.

   * Choose appropriate method for the API. Refer API documentation link given below URL text box to get appropriate API.

   * Add Header information, if necessary.

   * Choose appropriate refresh settings for API.

   * Choose appropriate data format.

   * Authentication type will be set as `Gmail` automatically, if the login gets success.

   Click connect to get data.
   
   ![API](/static/assets/cloud/working-with-datasource/data-connectors/images/gmail/gmailweb.png)

   The choose schema(s) window opens as follows. You can select the schema and click `Connect`.
   
   ![Choose Schema](/static/assets/cloud/working-with-datasource/data-connectors/images/gmail/schemawindow.png)

   Now, you can get into the data design view window with selected table schema.

   ![Table](/static/assets/cloud/working-with-datasource/data-connectors/images/gmail/dataview.png)

   Drag and drop the table and click `Save` button to save the data source with valid name.

   ![Save button](/static/assets/cloud/working-with-datasource/data-connectors/images/gmail/save.png)


## Gmail reference

<table>
<tr>
<td><b>API documentation</b></td>
<td>

[Gmail API documentation](https://developers.google.com/gmail/api/)

</td>
</tr>
<tr>
<td><b>API explorer</b></td>
<td>

[Google APIs explorer](https://developers.google.com/apis-explorer/#p/gmail/v1//)

</td>
</tr>
<tr><td><b>Sample query</b></td>
<td>

`https://www.googleapis.com/gmail/v1/users/abc4052%40gmail.com/messages?includeSpamTrash=false&fields=messages%2CnextPageToken%2CresultSizeEstimate&key={DEFAULT}`

</td>
</tr>
</table>

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

   











  
































