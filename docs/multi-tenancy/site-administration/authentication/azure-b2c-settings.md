---
layout: post
title: SSO with Azure AD B2C in User Management Server | Bold BI Docs
description: Learn how to configure the Bold BI application with Azure Active Directory B2C Single Sign-on authentication in User Management Server.
platform: bold-bi
documentation: ug
---

# Azure Active Directory B2C

This section explains steps to configure Azure AD B2C Single Sign-On (SSO) in the Bold BI application.
Before integrating Azure AD B2C with Bold BI, ensure the [Configure Azure AD B2C tenant in Azure portal](/multi-tenancy/site-administration/authentication/azure-b2c-settings/#configure-azure-ad-b2c-tenant-in-azure-portal) is done.
 

## Configure Azure AD B2C in User Management Server

1. In Bold BI Settings, Click `Authentication` and Select the `Azure AD B2C` tab.
    ![Authentication settings](/static/assets/multi-tenancy/images/azure-ad-b2c-page.png)

3. `Enable Azure AD B2C` and provide the following details.

    <table>

    <tr>
    <td>Organization Name</td>
    <td>It represents the name of the Oganization that will be displayed in the login page.</td>
    </tr>

    <tr>
    <td>Organization Logo</td>
    <td>It represents the logo of the Organization that will be displayed in the login page.</td>
    </tr>

    <tr>
    <td>Application Id</td>
    <td>A unique identifier of the Embedded BI web app created in Azure AD B2C.</td>
    </tr>

    <tr>
    <td>Tenant Name</td>
    <td>A dedicated instance of the Azure AD B2C service.</td>
    </tr>

    <tr>
    <td>Sign in Polciy</td>
    <td>The name of the Sign in/Sign up user flow created in Azure AD B2C.</td>
    </tr>

    <tr>
    <td>Enable single sign out</td>
    <td>The name of the Sign in/Sign up user flow created in Azure AD B2C.</td>
    </tr>

    </table>  

## Where to get Azure AD B2C settings

* In the Azure AD B2C tenant, under the `Overview`, select the tenant’s name from the domain name.
    ![Azure AD B2C setting tenant name](/static/assets/multi-tenancy/images/azure-ad-b2c-setting-tenant-name.png)

* Select the registered application, get the application id, and Provide the created user flow name as the policy name.
    ![Azure AD B2C settings application id](/static/assets/multi-tenancy/images/azure-ad-b2c-setting-application-id.png)

## Set Azure AD B2C as default authentication

Azure AD B2C can be set as default authentication when the [Azure AD B2C settings](/multi-tenancy/site-administration/authentication/azure-b2c-settings/#configure-azure-ad-b2c-in-user-management-server) is enabled.

Follow these steps to configure the default authentication.

1. In the settings page, click the `Authentication` tab and select `General`.

2. Enable the **Enable Default Authentication** option and select the **Azure AD B2C** as default authentication provider as shown in the following screenshot.

   ![Enable Azure AD B2C Default Authentication](/static/assets/multi-tenancy/images/azure-ad-b2c-default-authentication.png)

## Disabling Azure AD B2C connect settings

Disabling the Enable Default Authentication option and then clicking `Save` will disable the [Azure AD B2C default authentication](/multi-tenancy/site-administration/authentication/azure-b2c-settings/#set-azure-ad-b2c-as-default-authentication).  

![Disable Default Authentication](/static/assets/multi-tenancy/images/disable-azure-ad-b2c-settings.png)

## Configure Azure AD B2C tenant in Azure portal

You have an Azure subscription for configuring the Azure AD B2C tenant in the Azure portal. If you don't have one, create a [free account](https://azure.microsoft.com/free/).

> **NOTE:** For complete information on configuring Azure AD B2C, check the [official B2C documentation](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant) which includes tutorials on creating a B2C tenant, registering applications, and more.

### Create Azure AD B2C Tenant

To create an Azure AD B2C tenant, please refer to the link [Create Azure AD B2C Tenant](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant)

### Register a web application

After creating an Azure AD B2C tenant, please follow these steps to register a new application into the tenant.

1. Select `App registration` in the left side menu, select `New Registration` and give your app a new name.

2. Select `Accounts in any identity provider or organizational directory (for authenticating users with user flows)` under Supported account types.

3. Under Redirect URI, select `Web,` then enter the URL of the Bold BI application. Example `https://localhost:5000`.

4. Under Permissions, select the Grant admin consent to OpenID and offline_access permissions check box and select Register.

5. Select the registered application, under `Manage,` select `Authentication,` then select the `Access tokens (used for implicit flows)` check box and save the changes.
    ![Register a web application](/static/assets/multi-tenancy/images/azure-b2c-register-web-application.png)

### Create user flow

> **NOTE:** In creating user flow, support is provided for the `sign up and sign in` or `sign in` options.

1. Go to `Policies,` select `User flows,` and then Click `+ New user flow`.

2. Select `Sign up and sign in` or `sign in` is `Recommended,` and click `Create.`

    ![Create user flow](/static/assets/multi-tenancy/images/azure-b2c-create-user-flow.png)

3. After that, complete the following configuration of user flow creation.

   Name: Enter a name for the flow, for example, signupsignin1.

   Local accounts: Select Email Sign up.

   User attributes and token claims: Select the following listed attributes that will be collected from the user during sign-up and select the claims that will be returned in the token. Please ensure the following mentioned claims are selected.
    
    <table>

    <tr>
    <td>Email Address</td>
    <td>Email address of the user.</td>
    </tr>

    <tr>
    <td>Email Addresses</td>
    <td>Email addresses of the user.</td>
    </tr>

    <tr>
    <td>Given Name</td>
    <td>The user's given name (also known as first name).</td>
    </tr>

    <tr>
    <td>Surname</td>
    <td>The user's surname (also known as family name or last name).</td>
    </tr>

    <tr>
    <td>User's Object ID</td>
    <td>Object identifier (ID) of the user object in Azure AD.</td>
    </tr>

    </table>  
    
    ![Azure B2C select attribute](/static/assets/multi-tenancy/images/select-attribute.png)

4. Select the policy and the `application claims` on the left side. Then ensure the following items are selected. If not, select and save the changes.
    ![Azure B2C select overview](/static/assets/multi-tenancy/images/azure-b2c-application-claims.png)
