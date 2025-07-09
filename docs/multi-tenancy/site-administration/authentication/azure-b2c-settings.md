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

1. In Bold BI Settings, click on `Authentication` and select the `Azure AD B2C` tab.
    ![Authentication settings](/static/assets/multi-tenancy/images/azure-ad-b2c-page.png)

2. `Enable Azure AD B2C` and enter the required details.

    <table>

    <tr>
    <td>Organization Name</td>
    <td>The name of your organization to be displayed on the login page.</td>
    </tr>

    <tr>
    <td>Organization Logo</td>
    <td>The logo of your organization to be displayed on the login page.</td>
    </tr>

    <tr>
    <td>Application Id</td>
    <td>A unique identifier for the Enterprise BI web application registered in Azure AD B2C.</td>
    </tr>

    <tr>
    <td>Tenant Name</td>
    <td>The name of your Azure AD B2C tenant, representing a dedicated instance of the Azure AD B2C service.</td>
    </tr>

    <tr>
    <td>Tenant ID</td>
    <td>The unique identifier (GUID) of your Azure AD B2C tenant.</td>
    </tr>

    <tr>
    <td>Client Secret</td>
    <td>The secret key generated for the Azure AD B2C application, used to authenticate secure communication.</td>
    </tr>

    <tr>
    <td>Sign-in Policy</td>
    <td>The name of the user flow (sign-in/sign-up policy) configured in Azure AD B2C for managing user authentication.</td>
    </tr>

    <tr>
    <td>Enable Single Sign-Out</td>
    <td>Enables single sign-out functionality, ensuring users are logged out of all connected applications when they sign out.</td>
    </tr>

    </table>  

## Where to get Azure AD B2C settings

* In the Azure AD B2C tenant, under `Overview`, select the tenant's name from the domain name.
    ![Azure AD B2C setting tenant name](/static/assets/multi-tenancy/images/azure-ad-b2c-setting-tenant-name.png)

* Select the registered application, obtain the application ID, and provide the created user flow.
    ![Azure AD B2C settings application id](/static/assets/multi-tenancy/images/azure-ad-b2c-setting-application-id.png)

* Select the registered application, obtain the Tenant ID.

    ![Azure AD B2C settings tenant id](/static/assets/multi-tenancy/images/azure-ad-b2c-setting-tenant-id.png)

* Select the registered application, under `Manage`, click the `Certificates & secrets` and copy the value of `Client Secret`.
    ![Azure AD B2C settings client secret](/static/assets/multi-tenancy/images/azure-ad-b2c-setting-client-secret.png)

## Set Azure AD B2C as default authentication

Azure AD B2C can be set as the default authentication when the [Azure AD B2C settings](/multi-tenancy/site-administration/authentication/azure-b2c-settings/#configure-azure-ad-b2c-in-user-management-server) are enabled.
Follow these steps to configure the default authentication.

1. On the settings page, click the `Authentication` tab and select `General`.

2. Enable the **Enable Default Authentication** option and select **Azure AD B2C** as the default authentication provider as shown in the following screenshot.

   ![Enable Azure AD B2C Default Authentication](/static/assets/multi-tenancy/images/azure-ad-b2c-default-authentication.png)

## Disabling Azure AD B2C connect settings

Disabling the Enable Default Authentication option and then clicking `Save` will disable the [Azure AD B2C default authentication](/multi-tenancy/site-administration/authentication/azure-b2c-settings/#set-azure-ad-b2c-as-default-authentication).  

![Disable Default Authentication](/static/assets/multi-tenancy/images/disable-azure-ad-b2c-settings.png)

## Configure Azure AD B2C tenant in Azure portal

You have an Azure subscription for configuring the Azure AD B2C tenant in the Azure portal. If you don't have one, please create [free account](https://azure.microsoft.com/free/).

> **NOTE:** For comprehensive information on configuring Azure AD B2C, refer to the [official B2C documentation](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant), which includes tutorials on creating a B2C tenant, registering applications, and more.

### Create Azure AD B2C Tenant

To create an Azure AD B2C tenant, please refer to the link [Create Azure AD B2C Tenant](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant).

### Register a web application

After creating an Azure AD B2C tenant, please follow these steps to register a new application into the tenant:

1. Select `App registration` in the left side menu, choose `New Registration`, and give your app a new name.

2. Select `Accounts in any identity provider or organizational directory (for authenticating users with user flows)` under Supported account types.

3. Under Redirect URI, select `Web,` then enter the URL of the Bold BI application. Example `https://localhost:5000`.

4. Under Permissions, select the "Grant admin consent to OpenID and offline_access permissions" check box, and then select Register.

5. Select the registered application, under `Manage`, choose `Authentication`, then select the `Access tokens (used for implicit flows)` check box and save the changes.
    ![Register a web application](/static/assets/multi-tenancy/images/azure-b2c-register-web-application.png)

### Create user flow

> **NOTE:** In creating user flow, support is provided for the `sign up and sign in` or `sign in` options.

1. Go to `Policies`, select `User flows`, and then click `+ New user flow`.

2. Select `Sign up and sign in` or `sign in` is `Recommended`, and click `Create`.

    ![Create user flow](/static/assets/multi-tenancy/images/azure-b2c-create-user-flow.png)

3. After that, complete the following configuration of user flow creation:

   Name: Enter a name for the flow, for example, signupsignin1.

   Local accounts: Select Email Sign up.

   User attributes and token claims: Select the listed attributes that will be collected from the user during sign-up and select the claims that will be returned in the token. Please ensure the mentioned claims are selected.
    
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

4. Select the policy and the `application claims` on the left side. Then, ensure that the following items are selected. If they are not, make sure to select and save the changes.
    ![Azure B2C select overview](/static/assets/multi-tenancy/images/azure-b2c-application-claims.png)

### Create Client Secret

> **NOTE:** The client secret is a credential used by your Bold BI application to securely authenticate with Azure AD B2C.

1. Go to `Azure AD B2C`, select `App registrations`, and choose the application you registered (for example, `Boldbi-auth`).

2. In the left panel, click `Certificates & secrets`, then under the **Client secrets** tab, click `+ New client secret`.

3. In the **Add a client secret** pane, configure the following:

   - **Description**: Enter a meaningful description (e.g., `Bold BI Client Secret`).
   - **Expires**: Select a suitable expiry period (e.g., 6 months, 12 months, or 24 months).

4. Click the `Add` button to generate the secret.

![Azure B2C create client secret](/static/assets/multi-tenancy/images/azure-ad-b2c-setting-client-secret-add.png)

5. After creation, **copy the Value immediately**. This is your **Client Secret**, which should be added to the Bold BI Azure B2C settings.

   > ⚠️ **Important:** The client secret value is visible only once, immediately after creation. Save it securely in a password manager or secure vault.

   ![Azure B2C copy client secret](/static/assets/multi-tenancy/images/azure-ad-b2c-setting-client-secret-value.png)

### Add `User.Read.All` Permission to Azure AD B2C App

Follow the steps below to add the `User.Read.All` permission in Azure AD B2C through the Azure portal:

1. Go to `Azure AD B2C`, select `App registrations`, and choose the application you registered (for example, `Boldbi-auth`).
2. In the left pane, select **API permissions**.
3. Click on **+ Add a permission**.
4. In the right pane, choose **Microsoft Graph**.

![Azure B2C microsoft group](/static/assets/multi-tenancy/images/azure-ad-b2c-setting-microsoft-graph.png)

5. Choose **Application permissions**.

![Azure B2C microsoft applicaiton permission](/static/assets/multi-tenancy/images/azure-ad-b2c-setting-microsoft-graph-application-permission.png)

8. In the search box, type `user.read`.
9. Expand the **User** section.
10. Check the box for **User.Read.All** - "Read all users' full profiles".
11. Click on **Add permissions**.

![Azure B2C microsoft group](/static/assets/multi-tenancy/images/azure-ad-b2c-setting-microsoft-graph-user-read.png)

12. After adding, click **Grant admin consent for your tenant name** and confirm to apply the permissions.

![Azure B2C microsoft group](/static/assets/multi-tenancy/images/azure-ad-b2c-setting-microsoft-graph-user-read-grant.png)

> ✅ The `User.Read.All` permission requires admin consent. Ensure that it is granted after adding.
