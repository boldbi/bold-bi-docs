---
layout: post
title: Configure Azure AD SSO with OAuth 2.0 | Bold BI Documentation
description: Learn how to set up Azure AD SSO using OAuth 2.0 in Bold BI Embedded. Follow this step-by-step guide to enable secure, seamless authentication for your users.
platform: bold-bi
documentation: ug
---

# Azure AD support for SSO authentication

Azure Active Directory (Azure AD) OAuth is a powerful tool for securing your Bold BI applications. This guide will walk you through the process of configuring Azure AD OAuth in your Bold BI site.

## How to register the Bold BI application in Azure AD

This section explains how to perform Single Sign-On for users in Azure AD with the Bold BI application.

1. Navigate to the `Azure Portal` and select `Microsoft Entra ID`.

2. From the navigation, choose the App registrations and then select the `New Registration` option.

    ![Application page](/static/assets/site-administration/oauth-support/images/azure-ad-app-registration.png)

3. Fill in the following details in the form and click Register:

	*  Application Name
	*  Supported account types -> Accounts in any organizational directory (Any Azure AD directory - Multitenant). If other Azure directory users don’t need to login, select Single tenant.
	*  Redirect URI -> https://{yourdomain}/signin-oauth

    ![Add Application](/static/assets/site-administration/oauth-support/images/azure-ad-form.png)

4. Once the application is created, navigate to Certificates & secrets and select `New client secret` option to create a new secret. Once the client secret is created, please copy the secret from the Value column.

    ![Client Secret](/static/assets/site-administration/oauth-support/images/azure-ad-client-secret.png).

5.  Get `client ID` value from the registered application overview page.

    ![Client ID](/static/assets/site-administration/oauth-support/images/azure-ad-client-id.png).

## Enable Azure AD support for authentication in Bold BI

Configure the settings in Bold BI, as shown in the following screenshot, to enable authentication using Azure AD.

![Azure AD settings](/static/assets/site-administration/oauth-support/images/azure-ad-configuration.png)

The fields that need to be saved in Bold BI to enable Azure AD for authentication are explained as follows.

<table>

<tr>
<td>Provider Name</td>
<td>It represents the name of the authentication provider to be displayed in the login page.</td>
</tr>

<tr>
<td>Provider Logo</td>
<td>It represents the logo of the authentication provider to be displayed in the login .</td>
</tr>

<tr>
<td>Authorization Endpoint</td>
<td>It should be in the format <span style="color:#0c9dd1">https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize</span>
</tr>

<tr>
<td>Token Endpoint Method</td>
<td>POST</td>
</tr>

<tr>
<td>Token Endpoint</td>
<td>It should be in the format <span style="color:#0c9dd1">https://login.microsoftonline.com/organizations/oauth2/v2.0/token</span>
</tr>

<tr>
<td>User Information Endpoint Method</td>
<td>POST</td>
</tr>

<tr>
<td>User Information Endpoint</td>
<td>It should be in the format <span style="color:#0c9dd1">https://graph.microsoft.com/oidc/userinfo</span>
</tr>

<tr>
<td>Client ID</td>
<td>The Client ID you get after registered the Bold BI application in Azure AD website.</td>
</tr>

<tr>
<td>Client Secret</td>
<td>The Client Secret you get after registered the Bold BI application in Azure AD website.</td>
</tr>

<tr>
<td>Scopes</td>
<td>openid, profile, email</td>
</tr>

<tr>
<td>Logout Endpoint</td>
<td>It is the endpoint in the Azure AD website that signs the user out.</td>
</tr>

<tr>
<td>Email</td>
<td>This must be the field name in which email will be present when deserializing the token.</td>
</tr>

</table>

## Login with Azure AD

1. Please go to the login page and select the Azure AD option to log in.

   ![Azure AD Login Option](/static/assets/site-administration/oauth-support/images/azure-ad-login.png)

2. Please enter your username and password in the Azure AD SSO login screen and proceed to sign in.

3. By following these steps, you can successfully configure Azure AD OAuth in Bold BI. This will enhance the security of your Bold BI applications and provide a seamless login experience for your users.