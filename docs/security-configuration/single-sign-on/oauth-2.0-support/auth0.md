---
layout: post
title: Single Sign-On with Auth0 Provider of OAuth 2.0 | Bold BI
description: Learn how to configure Bold BI Embedded with Auth0 identity provider for Single Sign-on authentication using OAuth 2.0.
platform: bold-bi
documentation: ug
---

# Auth0 support for SSO authentication

The Bold BI application supports the addition of users using the Auth0 provider. By importing them, you can share dashboards and email exported dashboards with them.

> **NOTE:** This feature is available in Bold BI Embedded Analytics, but not in Cloud Analytics Server.

## How to register the Bold BI application in Auth0

This section explains how to perform Single Sign-On for users in Auth0 with the Bold BI application.

> **NOTE:**  This configuration must be done on the Auth0 website.

#### Prerequisites

* An admin account in Auth0.
* Install Bold BI application.

### Steps to register the Bold BI application

1. Login to the Auth0 website using an admin account.

    ![Admin page](/static/assets/site-administration/oauth-support/images/Authadmin.png)

2. Click on `Applications` in the left menu and then click the `CREATE APPLICATION` button.

    ![Add application](/static/assets/site-administration/oauth-support/images/authAddapp.png)

3. Click on `Regular Web Applications` and proceed with the `Next` button.

    ![Application page](/static/assets/site-administration/oauth-support/images/authregisterapp.png)

    > **NOTE:**  For the mobile application, click `Native` and proceed with `Next.`

4. The application will be registered and directed to the application details page. Use the `Client ID` and "Client Secret" in the Bold BI application.

    ![Application details](/static/assets/site-administration/oauth-support/images/authclientdetails.png)

5. Please scroll down and save the `Allowed Callback URLs`.

    ![Callback URI](/static/assets/site-administration/oauth-support/images/auth0-callback-uri.png)

6. This URL must be set as the redirect URI in the settings of your Bold BI application, as shown in the following screenshot.

    ![Redirect URI](/static/assets/site-administration/oauth-support/images/redirecturi.png)
    
Please fill in the details and save the changes.

After successfully registering with Auth0, save these settings on the Bold BI settings page in order to enable this authentication.

## Enable Auth0 support for authentication in Bold BI

Configure the settings in Bold BI, as shown in the following snapshot, to enable authentication using Auth0.

![Auth0 settings](/static/assets/site-administration/oauth-support/images/auth0-sample-value.png)

The fields that need to be saved in Bold BI in order to enable Auth0 for authentication are explained as follows.

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

Configure the group import setting in Bold BI using Auth0 as shown in the image below.

![Auth0 Group](/static/assets/site-administration/oauth-support/images/Auth0-group.png)

> **IMPORTANT:**  To manage groups in Auth0, it is necessary to install the `Authorization Extension`. For more details, please follow the link: [Auth0 Authorization Extension Documentation](https://auth0.com/docs/extensions/authorization-extension/v2).

To obtain information about the `Audience` and `Extension URL` , please refer to the following link: [Auth0 API Documentation - Get All Groups](https://auth0.com/docs/api/authorization-extension#get-all-groups).