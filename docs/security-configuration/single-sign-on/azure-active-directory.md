---
layout: post
title: Single Sign-On with Azure AD Users | Bold BI Embedded
description: Learn how to setup Azure Active Directory for Single Sign-on authentication in Bold BI. This configuration must be done in Azure portal.
platform: bold-bi
documentation: ug

---

# How to set up Azure Active Directory for SSO authentication in Bold BI

This section explains how to perform Single Sign-On (SSO) for users in the Azure Active Directory with the Bold BI application.

> **NOTE:**  This configuration has to be done in the [Azure Portal.](https://portal.azure.com/) This feature is available in Bold BI Embedded Analytics but not in Cloud Analytics Server. 

## Prerequisites

* An Azure account with Active Directory support is required.
* Please install the Bold BI application and log in with an administrator account.

### Steps to set up Bold BI to perform Single Sign-On 

1. Login to the URL `{Bold BI URL}/ums/administration/sso?view=azure-ad-settings` using the admin credentials.

2. Click `Settings` in the left menu.

    ![Application Id](/static/assets/site-administration/images/sso-settings.png)

3.  Click on `Authentication` and then navigate to the `Azure AD` tab. Save the provided fields in the UMS settings.

    ![Azure Active Directory Settings](/static/assets/site-administration/images/enable-sso.png)  

    > **NOTE:**  Please refer to the following link to register the [Bold BI web application](/faq/how-to-register-bold-bi-web-application-with-azure-active-directory/) and [Bold BI mobile application](/faq/how-to-register-bold-bi-mobile-application-with-azure-active-directory/) in Azure Active Directory.

   * **Application Id**: Please go to the registered application and click on `Overview`. Then, copy the `Application Id` and paste it.

      ![Application Id](/static/assets/site-administration/images/app-id.png)

   * **Application Id URI**: Please go to the registered application and click on `Overview`. Next, copy the `Application Id URI` and paste it.

      ![Application Id URI](/static/assets/site-administration/images/app-id-uri.png)

   * **Tenant Name**: Please navigate to the created `Azure Active Directory` and copy the domain name from the `Overview` section.

      ![Tenant name](/static/assets/site-administration/images/tenant-name.png)
 
   * **Mobile App Client ID**: Please go to the registered application for the Bold BI mobile application. Copy the `Application Id` and paste it.

      ![Client ID](/static/assets/site-administration/images/app-id-1.png)

4. Now, click save. After the values are saved, the application will be `Restarted` to apply the settings.

