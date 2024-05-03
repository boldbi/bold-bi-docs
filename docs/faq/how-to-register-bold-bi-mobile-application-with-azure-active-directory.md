---
layout: post
title: Registering Bold BI Mobile Application with Azure AD | Bold BI
description: Learn how to register Bold BI application with Azure Active Directory for authenticating Bold BI Embedded Server through browser.
canonical: "/faq/how-to-register-bold-bi-mobile-application-with-azure-active-directory/"
platform: bold-bi
documentation: ug
---

# Register Bold BI mobile application with Azure Active Directory

1. Go to the Azure Active Directory. In the directory, you should add two applications: one that acts as a Web API to authenticate the Bold BI Server, and another application that acts as a native client application to authenticate the Bold BI mobile app.

2. Enter the respective directory. Click on `App registrations` in the left side menu, and then click on `New registration` to add a new application.

    ![Create new application](/static/assets/faq/images/add-application.png) 

3. Enter the name of the application and select the following options,

    * Accounts in any organizational directory (such as any Azure AD directory - Multitenant) are considered as `supported account types`.
    * Select Public client/native (mobile & desktop) under the `Redirect URI (optional)` section and enter the Redirect URI. Then, click `Register`.

    ![Application type](/static/assets/faq/images/application-type.png) 

    The application will be added to the directory and you can view the details of the application in the `App registrations`.

4. Select `Branding` in the left side menu, then enter the `Home page URL` and click `Save`.

    ![Save homepage](/static/assets/faq/images/azurehomepageurl.png)

5. Select `Authentication` in the left side menu and save the `Implicit grant` and `Supported account types` as highlighted in the following screenshot.

    ![Authentication](/static/assets/faq/images/authentication.png)

6. Select `Expose an API` in the left side menu and save the `Application ID URI`.

    ![Application ID URI](/static/assets/faq/images/azureappid.png)

7. The `Application ID URI` must be in the format `http://{directory domain name}/{application id}`

    ![appiduri](/static/assets/faq/images/appiduri.png)

    > **NOTE:**  The Redirect URI and Home page URL should be the URL of the Bold BI application.

> **NOTE:**  The Azure user and groups can be imported into the Bold BI application. Refer to the following links to [Import Azure Active Directory Users](/managing-resources/manage-users/import-active-directory-users/) and [Import Azure Active Directory Groups](/managing-resources/manage-groups/import-azure-active-directory-groups/).
