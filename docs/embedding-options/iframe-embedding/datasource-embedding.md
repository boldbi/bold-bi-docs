---
layout: post
title: Dashboard Data Source iFrame Embedding | Bold BI Docs
description: Learn how to embed the data source in different modes using the iFrame, copy the embed code URL and use it in any Web application.
platform: bold-bi
documentation: ug
---

# Embed the data source using the iFrame

A data source can be created and edited in any application using the URL. In the data source editor, users have the ability to interact with the data source table by filtering data, adding parameters, and saving the filter values.

## Steps to embed data source using URL 

1. To obtain the embed URL, click on the `More` option icon of the desired data source from the data source listing. Then, select the `Get Embed Code` option from the drop-down menu.
![DataSourceUrl](/static/assets/iFrame-based/images/EmbedCode-DataSource.png#max-width=90%)

2. The SSO options are disabled by default. To enable this option, slide the button provided in the embed dialog.  
![EnableOption](/static/assets/iFrame-based/images/enable-option-datasource.png#max-width=45%)  
<table>
    <tr>
      <td>
       SSO
      </td>
      <td>
      The Single Sign-On authentication is enabled to support embedding the data source into other web applications if the configured authentication is selected as a parameter for authentication.
      </td>
    </tr>
</table>  

3. To copy the embed URL, click on the copy icon in the Embed Code dialog. 
	![CopyEmbedCode](/static/assets/iFrame-based/images/copy-embedcode-datasource.png#max-width=45%)

4. Embed the copied URL into other web applications.

5. To access the web application, run it and the login window will appear. Click on the login button and enter the correct user credentials. This will automatically load the data source design page. Alternatively, you can use single sign-on to bypass the login process.
![EmbedLogin](/static/assets/iFrame-based/images/iframeLoginPage-datasource.png#max-width=45%)  
![EmbedEditDataSource](/static/assets/working-with-datasource/images/editthedatasource.png#max-width=90%) 

## Embed data source using external SSO authentication

Bold BI supports embedding the data source into other web applications using external Single Sign-On authentication in iframe-based embedding. The Bold BI application can be configured to support `Windows Active Directory`, `Azure Active Directory`, `OAuth 2.0` and `OpenID Connect` authentications.

### Embed using Windows AD Authentication
The Bold BI application has been configured with Windows Active Directory. Follow these steps to obtain the embed code using the `Windows Active Directory SSO` settings. To learn more about configuring [Windows Active Directory](/site-administration/user-directory-settings/active-directory/active-directory/) settings.

1. To access the respective data source's context menu, click on it and select the `Get Embed code` option. In the Embed Code dialog box, enable the `SSO` feature and choose the "Windows Active Directory" option, similar to what is illustrated in the provided image.
![EmbedSSOWindows](/static/assets/iFrame-based/images/embed-sso-windows-datasource.png#max-width=45%)

2. To copy the embed URL, click on the copy icon located in the Embed Code dialog. Then, paste it into a web application that has been configured with the Windows Active Directory.

3. Please run the web application and sign in using the Windows Active Directory. The data source will then be automatically rendered according to the permissions granted to the Windows user.

### Embed using Azure AD Authentication
The Bold BI application has been configured with **Azure Active Directory**. Follow these steps to obtain the embed code using the `Azure Active Directory SSO` settings. For more information on configuring [Azure Active Directory](/security-configuration/single-sign-on/azure-active-directory/) settings.

1. Click the context menu of the respective data source and choose `Get Embed code` option. In Embed Code dialog, enable the `SSO` and select `Azure Active Directory` option as shown in the following image.
![EmbedSSOAzure](/static/assets/iFrame-based/images/embed-sso-azure-datasource.png#max-width=45%)

2. Please copy the embed URL by clicking the copy icon from the Embed Code dialog and paste it into a web application that has configured the Azure Active Directory.

3. To properly access the web application, sign in using Azure Active Directory. The data source will then be automatically rendered based on the permissions granted to the Azure user.


### Embed using OAuth 2.0 Authentication
The Bold BI application has been configured with **OAuth 2.0** for Single Sign-On (SSO). Follow these steps to obtain the embed code with the `OAuth SSO` settings. Find additional information about configuring [OAuth 2.0 settings](/security-configuration/single-sign-on/oauth-2.0-support/).

1. Click on the context menu of the respective data source and choose `Get Embed code` option. In Embed Code dialog, enable the `SSO` and select `OAuth 2.0` option as shown in the following image.
![EmbedSSOOAuth](/static/assets/iFrame-based/images/embed-sso-oauth-datasource.png#max-width=45%)

2. To copy the embed URL, click on the copy icon in the Embed Code dialog and then paste it into a web application that has OAuth 2.0 authentication configured.

3. To use the web application, sign in with the configured OAuth provider. The data source will then be automatically rendered based on the user's given permissions.

### Embed using OpenID Connect Authentication
The Bold BI application has been configured with **OpenID Connect** for Single Sign-On (SSO). Follow these steps to obtain the embed code using the `OpenID SSO` Settings. For further information on configuring OpenID settings, please refer to the provided [OpenID Support](/security-configuration/single-sign-on/openid-support/).

1. Click on the context menu of the respective data source and choose `Get Embed code` option. In Embed Code dialog, enable the `SSO` and select `OpenID` option as shown in the following image.  
![EmbedSSOOpenID](/static/assets/iFrame-based/images/embed-sso-openid-datasource.png#max-width=45%)

2. To copy the embed URL, click on the copy icon in the Embed Code dialog and then paste it into a web application that has configured the OpenID Connect authentication.

3. To achieve this, you need to run the web application and sign in using the configured OpenID. Once signed in, the data source will be automatically rendered based on the user's permissions. 


## How to embed the datasource in create mode using the URL

1. Please change the embedded URL to the one provided below in order to create a new data source connection.   
```js
    <html>
    <body>
        <iframe src='http://localhost:51777/bi/site/site1/datasource-designer/connection?isembed=true'
        id='dashboard-frame' width='100%' height='100%' allowfullscreen frameborder='0'></iframe>
    </body>
    </html>
```

2. Please embed the aforementioned embed URL into any web application and change the site identifier and server URL.   

3. To access the web application, run it and the login window will appear. Click on the login button and enter valid user credentials. This will automatically establish the data source connection, allowing you to utilize different connectors for connecting to the data source.
    ![EmbedLogin](/static/assets/iFrame-based/images/iframeLoginPage.png#max-width=45%)  
    ![EmbedCreateConnection](/static/assets/iFrame-based/images/embedded-datasource-create.png#max-width=75%) 
 



