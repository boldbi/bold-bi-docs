---
title: Registering Bold BI with Azure AD – Embedded BI | Bold BI Docs
description: Know about the required Azure Active Directory details and how to import users and groups by registering Bold BI with Azure Active Directory.
canonical: "/cloud-bi/site-administration/azure-active-directory/"
platform: bold-bi
documentation: ug
---

# Azure Active Directory Settings

This section explains what are the [Azure Active Directory](https://azure.microsoft.com/en-us/services/active-directory/) details needed and how to configure Azure Active Directory with the Bold BI to import users and groups from the Azure Active Directory.

## Steps to register Bold BI application in Azure Active Directory to import users and groups

1. Login to the [Azure Portal](https://portal.azure.com).

2. Go to the respective Azure Active Directory. Click `App registrations` in the left side menu and then click `New registration` to add a new application.

    ![Create new application](/static/assets/embedded/site-administration/images/add-application.png) 

3. Enter the name of the application and choose the following options.

    * Accounts in any organizational directory (Any Azure AD directory - Multitenant) as `Supported account types`.
    * Web under the `Redirect URI(optional)` section for Bold BI web and Public client/native(mobile & desktop) for the Bold BI mobile application. Enter the Redirect URI and then click `Register`.

    ![Application type](/static/assets/embedded/site-administration/images/add-application-type.png)

    The application will be added to the directory and you can view the details of the application in the `App registrations`.

4. Select `Branding` in the left side menu and enter the `Home page URL` and click `Save`.

    ![Save homepage](/static/assets/embedded/site-administration/images/azurehomepageurl.png)

5. Select `Certificates & secrets` to add client secret by clicking the `New client secret` as in the following screenshot.

    ![Secret code](/static/assets/embedded/site-administration/images/certificates.png)

    > **NOTE:**  Save the client secret value generated.

6. Go to `API permissions`, click `Add a permission`, and then select the `APIs my organization uses`. Then, click  `Microsoft Graph`.

    <table>
     <tr>
     <th><b>Application Permissions</b></th>
     <th></th>
     </tr>
     <tr>
     <td> Directory <td>Read directory data</td></td>
     </tr>
     <tr>
     <th><b>Delegated Permissions</b></th>
     <th></th>
     </tr>
     <tr>
     <td> 1. Directory <td>Read directory data, Access directory as the signed in user</td></td>
     </tr>
     <tr>
     <td>2. Group <td>Read all groups</td></td>
     </tr>
     <tr>
     <td>3. User <td>Read and write access to user profile</td></td>
     </tr>
      <tr>
     <td>4. OpenId permissions <td>View user's basic profile</td></td>
     </tr>
     </table>
    
    Select the above listed permissions and add it.

7. After adding the permissions, click `Grant admin consent` to grant the admin consent for the same.
 
    ![Grant admin consent](/static/assets/embedded/site-administration/images/grant-admin-consent.png)

## Configure Azure Active Directory details in Bold BI to import users and groups

You will need the following Azure Active Directory details to configure Bold BI with your Azure Active Directory.

![Azure Active Directory Settings](/static/assets/embedded/site-administration/images/azure-active-directory-settings.png#width=70%)

> **NOTE:** Enabling `Import users from groups` setting, will import and synchronize users, when importing and synchronizing groups with Azure AD. Enable this setting if you need to import users from your Azure AD groups.

* **Tenant Name**: It is the default domain name of your Active Directory. Go to the created `Azure Active Directory` and copy the domain name.

    ![Tenant name](/static/assets/embedded/site-administration/images/tenant-name.png)
 
* **Client ID**: It is the Client Id of the Bold BI application in your Azure Active Directory. Go to the registered application and then copy the `Application Id` in the `Overview` and paste it here.

    ![Client ID](/static/assets/embedded/site-administration/images/app-id.png)
 
* **Client Secret Code**: It is the secure key of the Bold BI application you created in your Azure Active Directory. Go to the `Certificates & secrets` and search for the Keys you saved for the application and then choose the `Value`.

    ![Properties](/static/assets/embedded/site-administration/images/keys.png)

## Set Azure Active Directory as Default Authentication
Azure active directory can be set as default authentication when [Azure Active Directory](/embedded-bi/site-administration/azure-active-directory/#configure-azure-active-directory-details-in-bold-bi-to-import-users-and-groups) is enabled and saved. Follow these steps:

1. In settings page, click **Authentication** tab and select **General**.

2. Enable the **Enable Default Authentication** option and select the **Azure Active Directory** in default authentication provider as shown in the following screenshot.

    ![Enable  Azure Active Directory Default Authentication](/static/assets/embedded/site-administration/images/enable-azure-active-directory.png)
