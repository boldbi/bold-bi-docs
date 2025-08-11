---
layout: post
title: Dashboard iframe embedding using external SSO | Bold BI Docs
description: Explore how to embed a dashboard into other web applications using the external Single Sign-On authentication in the iframe.
platform: bold-bi
documentation: ug
---

# Embed Dashboards using external SSO authentication

Bold BI supports embedding the dashboards into other web applications using external Single Sign-On authentication in the iframe-based embedding. The Bold BI application can be configured to support `Windows Active Directory`, `Azure Active Directory`, `OAuth 2.0`, and `OpenID Connect` authentications.

## Embed using Windows AD Authentication

The Bold BI application has been configured with the **Windows Active Directory**. The following steps demonstrate how to obtain the embed code using the `Windows Active Directory SSO` settings. Learn more about configuring [Windows Active Directory settings](/site-administration/user-directory-settings/active-directory/active-directory/).

1. Please click on the context menu of the corresponding dashboard and select the `Get Embed code` option. 

    ![EmbedCodeOption](/static/assets/iFrame-based/images/embed-option.png)
    
2. In the Embed Code dialog box, choose `View`as the mode. Then, enable the `SSO` and select the `Windows Active Directory` option, as shown in the image below.

    ![EmbedSSOWindows](/static/assets/iFrame-based/images/embed-sso-windows.png)

3. Copy the embed URL by clicking the `copy` icon from the Embed Code dialog and paste it into a web application that has configured the Windows Active Directory.

4. To use the web application, please run it and sign in with your Windows Active Directory credentials. Once signed in, the dashboard will automatically display based on the permissions assigned to your Windows user account.

## Embed using Azure AD Authentication

The Bold BI application has been configured with the **Azure Active Directory**. The following steps show how to get the embed code with the `Azure Active Directory SSO` settings. Learn more about the configure [Azure Active Directory settings](/security-configuration/single-sign-on/azure-active-directory/).

1. Click on the context menu of the corresponding dashboard and select the option `Get Embed code`. 

    ![EmbedCodeOption](/static/assets/iFrame-based/images/embed-option.png)
    
2. In the Embed Code dialog box, select `View` as the mode. `SSO` feature and choose `Azure Active Directory`, as demonstrated in the image below.

    ![EmbedSSOAzure](/static/assets/iFrame-based/images/embed-sso-azure.png)

3. To copy the embed URL, click the `copy` icon in the Embed Code dialog, and then paste it into a web application that has configured the Azure Active Directory.

4. To access the web application, sign in with Azure Active Directory. Once signed in, the dashboard will automatically render based on the user's permissions in Azure.

## Embed using OAuth 2.0 Authentication

The Bold BI application has been configured with the **OAuth 2.0**. The following steps show how to get the embed code with the `OAuth SSO` settings. Learn more about the configure [OAuth 2.0 settings](/security-configuration/single-sign-on/oauth-2.0-support/).

1. Click the context menu of the respective dashboard and choose the `Get Embed code` option. 

    ![EmbedCodeOption](/static/assets/iFrame-based/images/embed-option.png)
    
2. In the Embed Code dialog box, select mode as `View`. Enable the `SSO` and select  the `OAuth 2.0` option as shown in the following image.

    ![EmbedSSOOAuth](/static/assets/iFrame-based/images/embed-sso-oauth.png)

3. To copy the embed URL, click on the `copy` icon in the Embed Code dialog. Then, paste the URL into a web application that has configured OAuth 2.0 authentication.

4. To properly run the web application, sign in with the configured OAuth provider. Once signed in, the dashboard will automatically render based on the permissions granted to the OAuth user.

## Embed using OpenID Connect Authentication

The Bold BI application has been configured with **OpenID Connect**. The following steps demonstrate how to obtain the embed code using the `OpenID SSO` Settings. Learn more about configuring [OpenID settings](/security-configuration/single-sign-on/openid-support/) in a concise manner.


1. Click on the context menu of the respective dashboard and select `Get Embed code` option. 

    ![EmbedCodeOption](/static/assets/iFrame-based/images/embed-option.png)
    
2. In the Embed Code dialog, choose the `View` mode and enable the `SSO` feature. Select the `OpenID` option as shown in the image below:

    ![EmbedSSOOpenID](/static/assets/iFrame-based/images/embed-sso-openid.png)

3. Copy the embed URL by clicking on the `copy` icon in the Embed Code dialog. Paste this URL into a web application that has OpenID Connect authentication configured.

4. Run the web application and sign in using the configured OpenID credentials. The dashboard will now be rendered automatically based on the permissions assigned to the OpenID user.  
