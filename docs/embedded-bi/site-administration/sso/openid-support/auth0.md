---
layout: post
title: SSO with Auth0 Provider of OpenID Connect | Bold BI Embedded
description: Learn how to configure Bold BI Embedded with Auth0 identity provider for Single Sign-on authentication using OpenID Connect.
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

    ![Admin page](/static/assets/embedded/site-administration/openid-support/images/Authadmin.png)

2. Click `Applications` in the left menu and the click `CREATE APPLICATION` button.

    ![Application page](/static/assets/embedded/site-administration/openid-support/images/authAddapp.png)

3. Click `web` and proceed with `Next`.

    ![Application type](/static/assets/embedded/site-administration/openid-support/images/authregisterapp.png)

4. The application will be registered and directed to the application details page. Use the `Client ID` and `Client Secret` in the Bold BI application. 

    ![Client details](/static/assets/embedded/site-administration/openid-support/images/authclientdetails.png)

5. Scroll down and save the `Allowed Callback URLs`.

    ![Callback URI](/static/assets/embedded/site-administration/openid-support/images/auth0-callback-uri.png)

6. This URL must be the redirect URI in the settings of your Bold BI application as in the following screenshot.

    ![Redirect URI](/static/assets/embedded/site-administration/openid-support/images/redirecturi.png)
    
Fill the details and save the changes.

After successful registration in Auth0, save these settings in Bold BI settings page to enable this authentication.

## Enable Auth0 support for authentication in Bold BI

Configure the settings in Bold BI as in the following snap to enable the authentication using the Auth0.

![Auth0 settings](/static/assets/embedded/site-administration/openid-support/images/auth0-sample-value.png)

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
<td>Authority</td>
<td>The format is <span style="color:#0c9dd1">https://instancename.auth0.com</span> It must be the URL of your Auth0 instance.</td>
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
<td>Identifier</td>
<td>email</td>
</tr>

<tr>
<td>Logout Endpoint</td>
<td>It is the endpoint in the Auth0 website that signs the user out.</td>
</tr>

</table>

## Configure Auth0 Group Import Settings in Bold BI

Configure group import setting in Bold BI using Auth0 as shown in the below image.

![Auth0 Group](/static/assets/embedded/site-administration/openid-support/images/Auth0-group.png)

> **IMPORTANT:**  For managing groups in Auth0, we need to install `Authorization Extension`. Follow the link for more details https://auth0.com/docs/extensions/authorization-extension/v2

For `Audience` and `Extension URL` refer the link https://auth0.com/docs/api/authorization-extension#get-all-groups