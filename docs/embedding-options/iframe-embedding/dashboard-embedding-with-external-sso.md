---
layout: post
title: Dashboard iframe embedding using external SSO | Bold BI Docs
description: Explore how to embed a dashboard into other web applications using the external Single Sign-On authentication in the iframe.
platform: bold-bi
documentation: ug
---

# Embed Dashboards using external SSO authentication

Bold BI supports embedding the dashboards into other web applications using the external Single Sign-On authentication in the iframe based embedding. The Bold BI application can be configured to support the `Windows Active Directory`, `Azure Active Directory`, `OAuth 2.0`, and `OpenID Connect` authentications.

## Embed using Windows AD Authentication

The Bold BI application has been configured with the **Windows Active Directory**. The following steps show how to get the embed code with the `Windows Active Directory SSO` settings. Learn more about the configure [Windows Active Directory settings](/site-administration/user-directory-settings/active-directory/active-directory/).

1. Click the context menu of the respective dashboard and choose the `Get Embed code` option. 

    ![EmbedCodeOption](/static/assets/iFrame-based/images/embed-option.png)
    
2. In the Embed Code dialog box, select mode as `View`.  Enable the `SSO` and select the `Windows Active Directory` option as shown in the following image.

    ![EmbedSSOWindows](/static/assets/iFrame-based/images/embed-sso-windows.png)

3. Copy the embed URL by clicking the `copy` icon from the Embed Code dialog and paste it into a web application that has configured the Windows Active Directory.

4. Run the web application and get sign-in with the windows active directory. Now, the dashboard will be rendered automatically based on the permission given to the windows user.

## Embed using Azure AD Authentication

The Bold BI application has been configured with the **Azure Active Directory**. The following steps show how to get the embed code with the `Azure Active Directory SSO` settings. Learn more about the configure [Azure Active Directory settings](/security-configuration/single-sign-on/azure-active-directory/).

1. Click the context menu of the respective dashboard and choose the `Get Embed code` option. 

    ![EmbedCodeOption](/static/assets/iFrame-based/images/embed-option.png)
    
2. In the Embed Code dialog box, select mode as `View`. Enable the `SSO` and select the `Azure Active Directory` as shown in the following image.

    ![EmbedSSOAzure](/static/assets/iFrame-based/images/embed-sso-azure.png)

3. Copy the embed URL by clicking the `copy` icon from the Embed Code dialog and paste it into a web application that has configured the Azure Active Directory.

4. Run the web application and get sign-in with the Azure Active Directory. Now, the dashboard will be rendered automatically based on the permission given to the azure user.

## Embed using OAuth 2.0 Authentication

The Bold BI application has been configured with the **OAuth 2.0**. The following steps show how to get the embed code with the `OAuth SSO` settings. Learn more about the configure [OAuth 2.0 settings](/security-configuration/single-sign-on/oauth-2.0-support/).

1. Click the context menu of the respective dashboard and choose the `Get Embed code` option. 

    ![EmbedCodeOption](/static/assets/iFrame-based/images/embed-option.png)
    
2. In the Embed Code dialog box, select mode as `View`. Enable the `SSO` and select  the `OAuth 2.0` option as shown in the following image.

    ![EmbedSSOOAuth](/static/assets/iFrame-based/images/embed-sso-oauth.png)

3. Copy the embed URL by clicking the `copy` icon from the Embed Code dialog and paste it into a web application that has configured the OAuth 2.0 authentication.

4. Run the web application and get sign-in with the configured OAuth provider. Now, the dashboard will be rendered automatically based on the permission given to the OAuth user.

## Embed using OpenID Connect Authentication

The Bold BI application has been configured with the **OpenID Connect**. The following steps show how to get the embed code with the `OpenID SSO` Settings. Learn more about the configure [OpenID settings](/security-configuration/single-sign-on/openid-support/).


1. Click the context menu of the respective dashboard and choose the `Get Embed code` option. 

    ![EmbedCodeOption](/static/assets/iFrame-based/images/embed-option.png)
    
2. In Embed Code dialog, select mode as `View`. Enable the `SSO` and select the `OpenID` option as shown in the following image.  

    ![EmbedSSOOpenID](/static/assets/iFrame-based/images/embed-sso-openid.png)

3. Copy the embed URL by clicking the `copy` icon from the Embed Code dialog and paste it into a web application that has configured the OpenID Connect authentication.

4. Run the web application and get sign-in with configured OpenID. Now, the dashboard will be rendered automatically based on the permission given to the OpenID user.
