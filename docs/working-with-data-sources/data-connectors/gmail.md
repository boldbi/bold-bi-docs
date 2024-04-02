---
layout: post
title: Gmail Data Connector – Embedded BI | Bold BI Documentation
description: Learn how to connect your Gmail account data with Bold BI Embedded dashboard editor and create data source.
canonical: "/working-with-data-sources/data-connectors/gmail/"
platform: bold-bi
documentation: ug
---
   
# Connecting Bold BI to Gmail data source

  `What is Gmail` Gmail offers free cloud storage for storing emails in the web. Gmail makes emailing, chatting, drafting and archiving your mails and conversations easy and convenient. It's necessary to create a Gmail account.

> **Note:** Gmail data source is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

## Connecting to a Gmail 

   You can connect to web services of popular site like `Gmail` connection type. To enable this connection, follow the given steps.

   Click the `Data Source` button in the configuration panel to add a new data connection.
   
   ![Data source panel](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
   Click `CREATE NEW` to launch a new connection from the connection type panel. 
   
   ![Add data source](/static/assets/working-with-datasource/data-connectors/images/common/datasourcebutton.png)

   Click `Gmail` connection button in the connection panel. 

   ![Gmail icon](/static/assets/working-with-datasource/data-connectors/images/gmail/gmailicon.png)

   Click `Connect an Account` in the window opens.

   ![Create account](/static/assets/working-with-datasource/data-connectors/images/gmail/createaccount_gmail.png)
   
   The login window opens to authorize the user.
   
   Enter an appropriate username and password. The authorization window opens.

   ![Sign in](/static/assets/working-with-datasource/data-connectors/images/gmail/gmail.png)

   Click `Allow` in the authorization window. The datasource window opens.

   ![Allow access](/static/assets/working-with-datasource/data-connectors/images/gmail/allowbuttongmail.png)

   To get data through datasource window, follow the given steps:

   * Enter an API in URL text box which must be the valid REST API.

> **IMPORTANT:** Refer to the [Gmail API Documentation](https://developers.google.com/gmail/api/) to build a query for discovering more data requests. Test the query before entering it in the URL text box. Use [Google APIs Explorer](https://developers.google.com/apis-explorer/#p/gmail/v1//), to build the query.

   * Choose appropriate method for the API. Refer API documentation link given below URL text box to get appropriate API.

   * Add Header information, if necessary.

   * Choose appropriate refresh settings for API.

   * Choose appropriate data format.

   * Authentication type will be set as `Gmail` automatically, if the login gets success.

   Click connect to get data.
   
   ![API](/static/assets/working-with-datasource/data-connectors/images/gmail/gmailweb.png)

   The choose schema(s) window opens as follows. You can select the schema and click `Connect`.
   
   ![Choose Schema](/static/assets/working-with-datasource/data-connectors/images/gmail/schemawindow.png)

   Now, you can get into the data design view window with selected table schema.

   ![Table](/static/assets/working-with-datasource/data-connectors/images/gmail/dataview.png)

   Drag and drop the table and click `Save` button to save the data source with valid name.

   ![Save button](/static/assets/working-with-datasource/data-connectors/images/gmail/save.png)

## How to Obtain the Google Client ID and Client Secret

> **Note:** Google OAuth credentials are required for the On-Premises Deployment but not needed in Syncfusion Managed Cloud Server.


1. Go to the Google API Console at [Google API Console](https://console.developers.google.com/).

2. Select the existing project or create a new project by clicking on the **Select Project** dropdown at the top of the page and give your project a name. Then click on **Create**.

      ![New Project](/static/assets/working-with-datasource/data-connectors/images/googleapps/Newproject.png)

3. Click on the menu and select **APIs & services**, and then click on the **Enabled APIs and services** button.

      ![EnableApi](/static/assets/working-with-datasource/data-connectors/images/googleapps/EnableApi.png)

4. To enable the required Google API in Bold BI, click on the **+ENABLE APIS AND SERVICES**.

      ![ApiServices](/static/assets/working-with-datasource/data-connectors/images/googleapps/Apiservices.png)

5. Search and enable the **People API** by clicking the **ENABLE** button.

      ![Oauth Concert screen](/static/assets/working-with-datasource/data-connectors/images/googleapps/peopleapi.png)

>**NOTE**:  Need to enable the required APIs to connect the connector in the Bold BI.
   
   <table>
         <tr>
         <th> Connector</th>
         <th>Required API</th>
         </tr>
         <td>Google Drive</td>
         <td>Google Drive API<br>
         Google Drive Activity API <br>
         Drive Lable API 
         </td>
         <tr>
         <td>Google Sheets</td>
         <td>Google Sheets API
      </td>
         </tr>
         <tr>
         <td>Google AdSense</td>
         <td>
         AdSense Host API<br>
         AdSense Management API </td>
         </tr>
         <tr>
         <td>Google Analytics <br>
         Google Analytics V4 </td>
         <td> 
         Google Analytics API <br>
         Google Analytics Reporting API<br> 
         Google Analytics Data API
      </td>
         </tr>
         <tr>
         <td>Google Ads </td>
         <td>Google Ads API 
         </td>
         </tr>
         <tr><td>Google Search Console</td>
         <td> Google Search Console API
         </tr>
         <tr>
         </td><td>Google Calendar </td>
         <td> Google Calendar API
         </td></tr>
   </table>


6. Click on the **OAuth consent screen** and follow the prompts and provide the required details.

      ![Oauth Concert screen](/static/assets/working-with-datasource/data-connectors/images/googleapps/oauthconcert.png)


7. In the second step, click on  **ADD OR REMOVE SCOPES** and add the required read scopes for the API that needs to be connected in Bold BI. Then click on **Save and Continue**.

      ![Add Scopes](/static/assets/working-with-datasource/data-connectors/images/googleapps/scopes.png)

### Scopes

<table>
   <tr>
   <th> Google Service</th>
   <th>Functions</th>
   </tr>
   <td>Google Drive</td>
   <td>email

   https://www.googleapis.com/auth/userinfo.profile

   https://www.googleapis.com/auth/drive.metadata.readonly

   https://www.googleapis.com/auth/drive.readonly </td>


   <tr>
   <td>Google Sheets</td>
   <td>email

   https://www.googleapis.com/auth/userinfo.profile

   https://www.googleapis.com/auth/drive.metadata.readonly

   https://www.googleapis.com/auth/drive.readonly

   </td>
   </tr>
   <tr>
   <td>Google Adsense</td>
   <td>
   email

   https://www.googleapis.com/auth/userinfo.profile

   https://www.googleapis.com/auth/adsense.readonly

   https://www.googleapis.com/auth/adsensehost

   </td>
   </tr>

   <tr>
   <td>Google Analytics</td>
   <td> email

   https://www.googleapis.com/auth/userinfo.profile

   https://www.googleapis.com/auth/analytics.readonly

   https://www.googleapis.com/auth/adsense.readonly

   https://www.googleapis.com/auth/youtube.readonly

   https://www.googleapis.com/auth/youtubepartner 
   </td>
   </tr>
   <tr>
   <td>Google Analytics V4</td>
   <td> https://www.googleapis.com/auth/analytics.readonly 
   </td>
   </tr>
   <tr>
   <td>Google Ads V4</td>
   <td> https://www.googleapis.com/auth/adwords 
   </td>
   </tr>
   <tr><td>Google Search Console</td>
   <td> email

   https://www.googleapis.com/auth/userinfo.profile

   https://www.googleapis.com/auth/webmasters.readonly 
   </tr>
   <tr>
   </td><td>Google Calendar </td>
   <td> email

   https://www.googleapis.com/auth/userinfo.profile

   https://www.googleapis.com/auth/calendar.readonly

   https://www.googleapis.com/auth/calendar.events.readonly

   </td></tr>
   </table>

8. To create OAuth 2.0 credentials, click the **Credentials** menu item in the left sidebar. Click the **+ CREATE CREDENTIALS** button and select the "OAuth client ID".

   ![Credentials](/static/assets/working-with-datasource/data-connectors/images/googleapps/credentials.png)

9. Choose the **Web application** application type, and enter a name for your OAuth 2.0 app.

10. Add the Redirect URL as mentioned here by clicking **Add URI**.

      ![Redirect uri](/static/assets/working-with-datasource/data-connectors/images/googleapps/Redirecturi.png)

>**NOTE**: The Bold BI redirect URL should be added in the proper format. Please refer to this URL structure, `https://hostname/bi/designer/v1.0/oauth/agent`.

11. After creating your OAuth 2.0 client, you will be able to view and copy your Client ID and Client Secret from the Google API Console.

      ![ClientCredentials](/static/assets/working-with-datasource/data-connectors/images/googleapps/clientcredentials.png)

>**NOTE**: Save the client ID and client secret in Bold BI by following the [OAuth Configuration](/site-administration/data-connector-settings/oauth-configuration/) guide for more details.

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
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

   











  
































