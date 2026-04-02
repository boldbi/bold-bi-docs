---
layout: post
title: SSO with Fusion Auth (OAuth 2.0) | Bold BI Documentation
description: Learn how to configure Bold BI Embedded with the Fusion Auth identity provider for Single Sign-On authentication using OAuth 2.0.
platform: bold-bi
documentation: ug
---

# Fusion Auth support for SSO authentication

The Bold BI application supports adding users through the Fusion Auth provider. By importing them, you can share the dashboards and email exported dashboards with them.

> **NOTE:** This feature is available in Bold BI Embedded Analytics but not in Cloud Analytics Server.

## How to register the Bold BI application in Fusion Auth

This section explains how to register the Bold BI application in Fusion Auth to enable Single Sign-On (SSO) for users.

> **NOTE:**  This configuration needs to be done on the Fusion Auth website.

#### Prerequisites

* An admin account in Fusion Auth.
* Install Bold BI application.

### Steps to register the Bold BI application

1. Please log in to the Fusion Auth website using the admin account.

2. Click on `Applications` in the left panel menu.

    ![Application page](/static/assets/site-administration/oauth-support/images/fusion-auth-admin.png)

3. Click on the `Add App` button.

    ![Add Application page](/static/assets/site-administration/oauth-support/images/fusion-auth-addapp.png)

4. Please enter the application name.

    ![Fusion Auth Name](/static/assets/site-administration/oauth-support/images/fusion-auth-name.png)

5. Go to `Oauth` tab and then fill the following fields. click on `Save` icon.
    *  Enable grants
	*  Login Redirect URIs

   ![Fusion Auth Save](/static/assets/site-administration/oauth-support/images/fusion-auth-configuration.png)
 
   ![Fusion Auth Save](/static/assets/site-administration/oauth-support/images/fusion-auth-save.png)
 
6. The `Redirect URI` are found under the `OAuth` settings of your Bold BI application, as shown in the following screenshot.

    ![Redirecturi in setting](/static/assets/site-administration/oauth-support/images/redirecturi.png#width=65%)

After successfully registering in Fusion Auth, save these settings on the Bold BI settings page to enable this authentication.

## Enable Fusion Auth support for authentication in Bold BI

Configure the settings in Bold BI as in the following snap to enable the authentication using Fusion Auth.

![Fusion Auth settings](/static/assets/site-administration/oauth-support/images/fusion-auth-sample-value.png)

The fields that need to be saved in Bold BI in order to enable Fusion Auth for authentication are explained as follows.

<table>

<tr>
<td>Provider Name</td>
<td>It represents the name of the authentication provider to be displayed in the login page.</td>
</tr>

<tr>
<td>Provider Logo</td>
<td>It represents the logo of the authentication provider to be displayed in the login page.</td>
</tr>

<tr>
<td>Authorization Endpoint</td>
<td>It should be in the format <span style="color:#0c9dd1">https://AUTH_DOMAIN/oauth2/authorize</span>
</tr>

<tr>
<td>Token Endpoint Method</td>
<td>POST</td>
</tr>

<tr>
<td>Token Endpoint</td>
<td>It should be in the format <span style="color:#0c9dd1">https://AUTH_DOMAIN/oauth2/token</span>
</tr>

<tr>
<td>User Information Endpoint Method</td>
<td>GET</td>
</tr>

<tr>
<td>User Information Endpoint</td>
<td>It should be in the format <span style="color:#0c9dd1">https://AUTH_DOMAIN/oauth2/userinfo</span>
</tr>

<tr>
<td>Client ID</td>
<td>The Client ID you get after registered the Bold BI application in Fusion Auth website.</td>
</tr>

<tr>
<td>Client Secret</td>
<td>The Client Secret you get after registered the Bold BI application in Fusion Auth website.</td>
</tr>

<tr>
<td>Scopes</td>
<td>openid, profile, email</td>
</tr>

<tr>
<td>Logout Endpoint</td>
<td>It is the endpoint in the Fusion Auth website that signs the user out.</td>
</tr>

<tr>
<td>Email</td>
<td>This must be the field name in which email will be present when deserializing the token.</td>
</tr>

</table>

## Configure Fusion Auth Group Import Settings in Bold BI

Configure the group import setting in Bold BI using Fusion Auth, as shown in the image below.

![Fusion Auth Group](/static/assets/site-administration/oauth-support/images/fusion-auth-group.png)