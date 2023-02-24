---
layout: post
title: Dashboard Data Source iFrame Embedding | Bold BI Docs
description: Learn how to embed the data source in different modes using the iFrame, copy the embed code URL and use it in any Web application.
platform: bold-bi
documentation: ug
---

# Embed the data source using the iFrame

A data source can be created and edited in any application using the URL. In the data source edit, users can interact with the data source table by filtering data, adding parameters, and saving the filter values.

## Steps to embed data source using URL 

1. To get the embed URL, click the`More` option icon of the desired data source from the data source listing and Select the `Get Embed Code` option from the drop-down.  
![DataSourceUrl](/static/assets/embedded/iFrame-based/images/EmbedCode-DataSource.png#max-width=90%)

2.  By Default, the SSO options are disabled. Enable this option by sliding the button given in embed dialog.  
![EnableOption](/static/assets/embedded/iFrame-based/images/enable-option-datasource.png#max-width=45%)  
<table>
    <tr>
      <td>
       SSO
      </td>
      <td>
      The Single Sign-On authentication is enabled to support embedding the data source into other web applications if the configured authentication is selected as an authentication parameter.
      </td>
    </tr>
</table>  

3. Copy the embed URL by clicking the copy icon from the Embed Code dialog.  
	![CopyEmbedCode](/static/assets/embedded/iFrame-based/images/copy-embedcode-datasource.png#max-width=45%)

4. Embed the copied URL into other web applications.

5. Run the web application and it will show the login window. Click the login and enter the valid user credentials, the data source design page will render automatically. To avoid login, use the single sign-on.
![EmbedLogin](/static/assets/embedded/iFrame-based/images/iframeLoginPage-datasource.png#max-width=45%)  
![EmbedEditDataSource](/static/assets/embedded/working-with-datasource/images/editthedatasource.png#max-width=90%) 

## Embed data source using external SSO authentication

Bold BI supports embedding the data source into other web applications using the external Single Sign-On authentication in iframe based embedding. The Bold BI application can be configured to support the `Windows Active Directory`, `Azure Active Directory`, `OAuth 2.0` and `OpenID Connect` authentications.

### Embed using Windows AD Authentication
The Bold BI application has been configured with **Windows Active Directory**. Follow these steps to get the embed code with the `Windows Active Directory SSO` settings. Learn more about the configure Window Active Directory settings [here](/embedded-bi/site-administration/active-directory/active-directory).

1. Click the context menu of the respective data source and choose the `Get Embed code` option. In the Embed Code dialog box, enable the `SSO` and select the `Windows Active Directory` option as shown in the following image.
![EmbedSSOWindows](/static/assets/embedded/iFrame-based/images/embed-sso-windows-datasource.png#max-width=45%)

2. Copy the embed URL by clicking the copy icon from the Embed Code dialog, and paste into a web application that has configured the Windows Active Directory.

3. Run the web application and get sign-in with windows active directory. Now, the data source would be rendered automatically based on the permission given to the windows user.

### Embed using Azure AD Authentication
The Bold BI application has been configured with **Azure Active Directory**. Follow these steps to get the embed code with the `Azure Active Directory SSO` settings. Learn more about the configure Azure Active Directory settings [here](/embedded-bi/site-administration/sso/azure-active-directory).

1. Click the context menu of the respective data source and choose `Get Embed code` option. In Embed Code dialog, enable the `SSO` and select `Azure Active Directory` option as shown in the following image.
![EmbedSSOAzure](/static/assets/embedded/iFrame-based/images/embed-sso-azure-datasource.png#max-width=45%)

2. Copy the embed URL by clicking the copy icon from the Embed Code dialog and paste into a web application that has configured the Azure Active Directory.

3. Run the web application and get sign-in with Azure Active Directory. Now, the data source would be rendered automatically based on the permission given to the azure user.


### Embed using OAuth 2.0 Authentication
The Bold BI application has been configured with **OAuth 2.0** for Single Sign-On (SSO). Follow these steps to get the embed code with the `OAuth SSO` settings. Learn more about the configure OAuth 2.0 settings [here](/embedded-bi/site-administration/sso/oauth-2.0-support).

1. Click on the context menu of the respective data source and choose `Get Embed code` option. In Embed Code dialog, enable the `SSO` and select `OAuth 2.0` option as shown in the following image.
![EmbedSSOOAuth](/static/assets/embedded/iFrame-based/images/embed-sso-oauth-datasource.png#max-width=45%)

2. Copy the embed URL by clicking the copy icon from the Embed Code dialog and paste into a web application that has configured the OAuth 2.0 authentication.

3. Run the web application and get sign-in with configured OAuth provider. Now, the data source would be rendered automatically based on the permission given to the user.

### Embed using OpenID Connect Authentication
The Bold BI application has been configured with **OpenID Connect** for Single Sign-On (SSO). Follow these steps to get the embed code with the `OpenID SSO` Settings. Learn more about the configure OpenID settings [here](/embedded-bi/site-administration/sso/openid-support).

1. Click on the context menu of the respective data source and choose `Get Embed code` option. In Embed Code dialog, enable the `SSO` and select `OpenID` option as shown in the following image.  
![EmbedSSOOpenID](/static/assets/embedded/iFrame-based/images/embed-sso-openid-datasource.png#max-width=45%)

2. Copy the embed URL by clicking the copy icon from the Embed Code dialog and paste into a web application that has configured the OpenID Connect authentication.

3. Run the web application and get sign-in with configured OpenID. Now, the data source would be rendered automatically based on the permission given to the user. 


## How to embed the datasource in create mode using the URL

1. Change the embed URL like the below one to create new data source connection.    
    ![EmbedDataSourceCreateCode](/static/assets/embedded/iFrame-based/images/embed-datasource-create-code.png#max-width=70%)

2. Embed the above embed URL into any web application.    

3. Run the web application, it will show the login window. Click the login and enter the valid user credentials and the data source connection will render automatically now you can use various connectors to establish data source connection.
    ![EmbedLogin](/static/assets/embedded/iFrame-based/images/iframeLoginPage.png#max-width=45%)  
    ![EmbedCreateConnection](/static/assets/embedded/iFrame-based/images/embedded-datasource-create.png#max-width=75%) 
 



