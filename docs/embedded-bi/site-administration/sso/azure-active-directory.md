---
layout: post
title: Single Sign-On with Azure AD Users | Bold BI Embedded
description: Learn how to setup Azure Active Directory for Single Sign-on authentication in Bold BI. This configuration must be done in Azure portal.
platform: bold-bi
documentation: ug
---

# How to set up Azure Active Directory for SSO authentication in Bold BI

This section explains how to perform Single Sign-On (SSO) for users in the Azure Active Directory with Bold BI application.

> **NOTE:**  This configuration has to been done in [Azure Portal.](https://portal.azure.com/)

## Prerequisites

* An Azure account with Active Directory support.
* Install Bold BI application and log in with administrator account.

### Steps to set up Bold BI to perform Single Sign-On 

1. Login with the URL `{Bold BI URL}/ums/administration/saml-settings` using admin credential.

2. Click on `Settings` in the left menu.

    ![Application Id](/static/assets/embedded/site-administration/images/sso-settings.png)

3.  Click on `SSO` and save the following fields in UMS settings. 

    ![Azure Active Directory Settings](/static/assets/embedded/site-administration/images/enable-sso.png)  

    > **NOTE:**  Refer to this following link to register the [Bold BI web application](/embedded-bi/faq/how-to-register-bold-bi-web-application-with-azure-active-directory/) and [Bold BI mobile application](/embedded-bi/faq/how-to-register-bold-bi-mobile-application-with-azure-active-directory/) in Azure Active Directory.

   * **Application Id**: Go to the registered application and click the `Overview`, and then copy the `Application Id` and paste it.

      ![Application Id](/static/assets/embedded/site-administration/images/app-id.png)

   * **Application Id URI**: Go to the registered application and click the `Overview`, and then copy the `Application Id URI` and paste it.

      ![Application Id URI](/static/assets/embedded/site-administration/images/app-id-uri.png)

   * **Tenant Name**: Go to the created `Azure Active Directory` and copy the domain name in the `Overview`.

      ![Tenant name](/static/assets/embedded/site-administration/images/tenant-name.png)
 
   * **Mobile App Client ID**: Go to the registered application for Bold BI mobile application. Copy the `Application Id` and paste it.

      ![Client ID](/static/assets/embedded/site-administration/images/app-id-1.png)

4. Now, click save. After the values are saved, the application will be `Restarted` to apply the settings.

