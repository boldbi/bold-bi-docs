---
title: Registering Bold BI with Azure AD – Embedded BI | Bold BI Docs
description: Know about the required Azure Active Directory details and how to import users and groups by registering Bold BI with Azure Active Directory.
canonical: "/site-administration/user-directory-settings/azure-active-directory/"
platform: bold-bi
documentation: ug
---

# Azure Active Directory Settings

This section explains the [Azure Active Directory](https://azure.microsoft.com/en-us/services/active-directory/) details needed and how to configure Azure Active Directory with Bold BI to import users and groups from Azure Active Directory.

> **NOTE:** This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

## Steps to register Bold BI application in Azure Active Directory to import users and groups

1. Login to the [Azure Portal](https://portal.azure.com).

2. Go to the respective Azure Active Directory. Click on `App registrations` in the left side menu and then click on `New registration` to add a new application.

    ![Create new application](/static/assets/site-administration/images/add-application.png) 

3. Enter the name of the application and choose the following options:

    * Accounts in any organizational directory (Any Azure AD directory - Multitenant) as `Supported account types`.
    * Web under the `Redirect URI (optional)` section for Bold BI web and Public client/native (mobile & desktop) for the Bold BI mobile application. Enter the Redirect URI and then click on `Register`.

    ![Application type](/static/assets/site-administration/images/add-application-type.png)

    The application will be added to the directory and you can view the details of the application in the `App registrations`.

4. Select `Branding` in the left side menu, enter the `Home page URL`, and click `Save`.

    ![Save homepage](/static/assets/site-administration/images/azurehomepageurl.png)

5. Select `Certificates & secrets` to add a client secret by clicking on `New client secret` as shown in the following screenshot.

    ![Secret code](/static/assets/site-administration/images/certificates.png)

    > **NOTE:**  Save the client secret value generated.

6. Go to `API permissions`,

    ![API permission](/static/assets/site-administration/images/api-permission.png)

    click on `Add a permission`,

    ![Add permission](/static/assets/site-administration/images/add-permission.png)

    select the `APIs my organization uses`, and click on `Microsoft Graph`.

    ![Select api organization uses](/static/assets/site-administration/images/api-organization-uses.png)

 7. In `Microsoft Graph`, click on `Application Permissions`.

    ![Application Permissions](/static/assets/site-administration/images/application-permission.png)

    In search option, find the `Directory`, expand the `Directory` option, and select `Read directory data`.

    ![Application Permissions - Directory](/static/assets/site-administration/images/directory-application-permission.png)

 8. Click `Delegated Permissions`, find the `Directory`, and expand the `Directory` option, and select `Read directory data` and `Access directory as the signed in user`.

    ![Delegated Permissions - Directory](/static/assets/site-administration/images/delegated-permission-directory.png)

    After that, find the `Group`, expand the `Group` option, and select `Read all groups`.

    ![Delegated Permissions - Group](/static/assets/site-administration/images/delegated-permission-group.png)

    After that, find the `User`, expand the `User` option, and select `Read and write access to user profile`.

    ![Delegated Permissions - User](/static/assets/site-administration/images/delegated-permission-user.png)

    ![Delegated Permissions - User](/static/assets/site-administration/images/delegated-permission-user2.png)

    After that, find the `OpenId permissions`, expand the `OpenId permissions` option, select `View user's basic profile`, and finally click on the `Add permissions`.

    ![Delegated Permissions - OpenId permissions](/static/assets/site-administration/images/delegated-permission-openid-permissions.png)

9. After adding the permissions, click on `Grant admin consent` to grant admin consent for the same.
 
    ![Grant admin consent](/static/assets/site-administration/images/grant-admin-consent.png)

## Configure Azure Active Directory details in Bold BI to import users and groups

You will need the following Azure Active Directory details to configure Bold BI with your Azure Active Directory.

![Azure Active Directory Settings](/static/assets/site-administration/images/azure-active-directory-settings.png#width=70%)

> **NOTE:** Enabling the `Import users from groups` setting will import and synchronize users when importing and synchronizing groups with Azure AD. Enable this setting if you need to import users from your Azure AD groups.

* **Tenant Name**: It is the default domain name of your Active Directory. Go to the created `Azure Active Directory` and copy the domain name.

    ![Tenant name](/static/assets/site-administration/images/tenant-name.png)
 
* **Client ID**: It is the Client Id of the Bold BI application in your Azure Active Directory. Go to the registered application and copy the `Application Id` in the `Overview` and paste it here.

    ![Client ID](/static/assets/site-administration/images/app-id.png)
 
* **Client Secret Code**: It is the secure key of the Bold BI application you created in your Azure Active Directory. Go to `Certificates & secrets` and search for the Keys you saved for the application, then choose the `Value`.

    ![Properties](/static/assets/site-administration/images/keys.png)

## Set Azure Active Directory as Default Authentication
Azure Active Directory can be set as the default authentication when [Azure Active Directory](/site-administration/user-directory-settings/azure-active-directory/#configure-azure-active-directory-details-in-bold-bi-to-import-users-and-groups) is enabled and saved. Follow these steps:

1. In the settings page, click on the **Authentication** tab and select **General**.

2. Enable the **Enable Default Authentication** option and select **Azure Active Directory** as the default authentication provider as shown in the following screenshot.

    ![Enable  Azure Active Directory Default Authentication](/static/assets/site-administration/images/enable-azure-active-directory.png)
