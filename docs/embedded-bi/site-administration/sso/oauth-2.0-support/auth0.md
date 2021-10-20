---
layout: post
title: Single Sign-On with Auth0 Provider of OAuth 2.0 | Bold BI
description: Learn how to configure Bold BI Embedded with Auth0 identity provider for Single Sign-on authentication using OAuth 2.0.
platform: bold-bi
documentation: ug
---

# Auth0 support for SSO authentication

Bold BI application supports adding users using the Auth0 provider. By importing them, you can share the dashboards and email exported dashboards with them.

## How to register the Bold BI application in Auth0

This section explains how to perform Single Sign-On for users in Auth0 with the Bold BI application.

> **NOTE:**  This configuration has to be done in Auth0 website.

#### Prerequisites

* An admin account in Auth0.
* Install Bold BI application.

### Steps to register the Bold BI application

1. Login to the Auth0 website with an admin account.

    ![Admin page](/static/assets/embedded/site-administration/oauth-support/images/Authadmin.png)

2. Click `Applications` in the left menu and then click `CREATE APPLICATION` button.

    ![Add application](/static/assets/embedded/site-administration/oauth-support/images/authAddapp.png)

3. Click `Regular Web Applications` and proceed with `Next`.

    ![Application page](/static/assets/embedded/site-administration/oauth-support/images/authregisterapp.png)

    > **NOTE:**  For mobile application , click `Native` and proceed with `Next`.

4. The application will be registered and directed to the application details page. Use the `Client ID` and `Client Secret` in the Bold BI application. 

    ![Application details](/static/assets/embedded/site-administration/oauth-support/images/authclientdetails.png)

5. Scroll down and save the `Allowed Callback URLs`.

    ![Callback URI](/static/assets/embedded/site-administration/oauth-support/images/auth0-callback-uri.png)

6. This URL must be the redirect URI in the settings of your Bold BI application as in the following screenshot.

    ![Redirect URI](/static/assets/embedded/site-administration/oauth-support/images/redirecturi.png)
    
Fill the details and save the changes.

After successful registration in Auth0, save these settings in Bold BI settings page to enable this authentication.

## Enable Auth0 support for authentication in Bold BI

Configure the settings in Bold BI as in the following snap to enable the authentication using Auth0.

![Auth0 settings](/static/assets/embedded/site-administration/oauth-support/images/auth0-sample-value.png)

The fields to be saved in the Bold BI to enable the Auth0 for authentication is explained as follows.

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
<td>It should be in the format <span style="color:#0c9dd1">https://YOUR_DOMAIN/authorize</span> <br>Please refer <a href="https://auth0.com/docs/flows/guides/auth-code/add-login-auth-code#authorize-the-user">here</a> for more details.</td>
</tr>

<tr>
<td>Token Endpoint Method</td>
<td>POST</td>
</tr>

<tr>
<td>Token Endpoint</td>
<td>It should be in the format <span style="color:#0c9dd1">https://YOUR_DOMAIN/oauth/token</span> <br>Please refer <a href="https://auth0.com/docs/flows/guides/auth-code/add-login-auth-code#request-tokens">here</a> for more details.</td>
</tr>

<tr>
<td>User Information Endpoint Method</td>
<td>GET</td>
</tr>

<tr>
<td>User Information Endpoint</td>
<td>It should be in the format <span style="color:#0c9dd1">https://YOUR_DOMAIN/userinfo</span> <br>Please refer <a href="https://auth0.com/docs/api/authentication?http#get-user-info">here</a> for more details.</td>
</tr>

<tr>
<td>Client ID</td>
<td>The Client ID you get after registered the Bold BI application in Auth0 website.</td>
</tr>

<tr>
<td>Client Secret</td>
<td>The Client Secret you get after registered the Bold BI application in Auth0 website.</td>
</tr>

<tr>
<td>Scopes</td>
<td>openid, profile, email</td>
</tr>

<tr>
<td>Logout Endpoint</td>
<td>It is the endpoint in the Auth0 website that signs the user out.</td>
</tr>

<tr>
<td>Email</td>
<td>This must be the field name, in which email will be present when deserializing the token.</td>
</tr>

</table>

## Configure Auth0 Group Import Settings in Bold BI

Configure group import setting in Bold BI using Auth0 as shown in the below image.

![Auth0 Group](/static/assets/embedded/site-administration/oauth-support/images/Auth0-group.png)

> **IMPORTANT:**  For managing groups in Auth0, we need to install `Authorization Extension`. Follow the link for more details https://auth0.com/docs/extensions/authorization-extension/v2

For `Audience` and `Extension URL` refer the link https://auth0.com/docs/api/authorization-extension#get-all-groups

