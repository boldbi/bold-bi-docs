---
layout: post
title: Registering Bold BI with Azure AD - Embedded BI | Bold BI Docs
description: Learn how to register Bold BI application with Azure Active Directory for authenticating Bold BI Embedded Server through browser.
canonical: "/cloud-bi/faq/how-to-register-bold-bi-mobile-application-with-azure-active-directory/"
platform: bold-bi
documentation: ug
---

# Register Bold BI mobile application with Azure Active Directory

1. Go to the Azure Active Directory. In the directory, you should add two applications in which one acts as a Web API for authenticate the Bold BI Server, and an other application that acts as a native client application for authenticate Bold BI mobile app.

2. Enter into the respective directory. Click `App registrations` in the left side menu and then click `New registration` to add a new application.

    ![Create new application](/static/assets/embedded/faq/images/add-application.png) 

3. Enter the name of the application and choose the following options,

    * Accounts in any organizational directory (Any Azure AD directory - Multitenant) as `Supported account types`.
    * Public client/native(mobile & desktop) under the `Redirect URI(optional)` section and enter the Redirect URI. And then click `Register`.

    ![Application type](/static/assets/embedded/faq/images/application-type.png) 

    The application will be added to the directory and you can view the details of the application in the `App registrations`.

4. Select `Branding` in the left side menu and enter the `Home page URL` and click `Save`.

    ![Save homepage](/static/assets/embedded/faq/images/azurehomepageurl.png)

5. Select `Authentication` in the left side menu and save the `Implicit grant` and `Supported account types` as highlighted in the following screenshot.

    ![Authentication](/static/assets/embedded/faq/images/authentication.png)

6. Select `Expose an API` in the left side menu and save `Application ID URI`.

    ![Application ID URI](/static/assets/embedded/faq/images/azureappid.png)

7. The `Application ID URI` must be in the format `http://{directory domain name}/{application id}`

    ![appiduri](/static/assets/embedded/faq/images/appiduri.png)

    > **NOTE:**  The Redirect URI and Home page URL should be the URL of the Bold BI application.

> **NOTE:**  The Azure user and groups can be imported into the Bold BI application. Refer to this following link to [Import Azure Active Directory Users](/embedded-bi/managing-resources/manage-users/import-active-directory-users/) and [Import Azure Active Directory Groups](/embedded-bi/managing-resources/manage-groups/import-azure-active-directory-groups/).
