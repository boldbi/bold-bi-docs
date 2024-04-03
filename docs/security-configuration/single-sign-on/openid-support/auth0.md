---
layout: post
title: SSO with Auth0 Provider of OpenID Connect | Bold BI Embedded
description: Learn how to configure Bold BI Embedded with Auth0 identity provider for Single Sign-on authentication using OpenID Connect.
platform: bold-bi
documentation: ug
---

# Auth0 support for SSO authentication

The Bold BI application supports the addition of users using the Auth0 provider. By importing them, you can share the dashboards and send exported dashboards to them via email.

> **NOTE:** This feature is available in Bold BI Embedded Analytics but not in Cloud Analytics Server.

## How to register the Bold BI application in Auth0

This section explains how to perform Single Sign-On for users in Auth0 with the Bold BI application.

> **NOTE:**  This configuration needs to be done on the Auth0 website.

#### Prerequisites

* An admin account in Auth0.
* Install Bold BI application.

### Steps to register the Bold BI application

1. To login to the Auth0 website, use an admin account.

    ![Admin page](/static/assets/site-administration/openid-support/images/Authadmin.png)

2. Click on `Applications` in the left menu, and then click on the `CREATE APPLICATION` button.

    ![Application page](/static/assets/site-administration/openid-support/images/authAddapp.png)

3. Click on `web` and proceed to the `Next` step.

    ![Application type](/static/assets/site-administration/openid-support/images/authregisterapp.png)

4. The application will be registered and directed to the application details page. Use the `Client ID` and `Client Secret` in the Bold BI application. 

    ![Client details](/static/assets/site-administration/openid-support/images/authclientdetails.png)

5. Please scroll down and save the `Allowed Callback URLs`.

    ![Callback URI](/static/assets/site-administration/openid-support/images/auth0-callback-uri.png)

6. This URL must be the redirect URI in the settings of your Bold BI application, as shown in the following screenshot.

    ![Redirect URI](/static/assets/site-administration/openid-support/images/redirecturi.png#width=55%)
    
Please fill in the details and save the changes.

After successfully registering in Auth0, save these settings on the Bold BI settings page to enable this authentication.

## Enable Auth0 support for authentication in Bold BI

To enable authentication using Auth0, configure the settings in Bold BI as shown in the following snapshot.

![Auth0 settings](/static/assets/site-administration/openid-support/images/auth0-sample-value.png#width=55%)

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

Configure the group import setting in Bold BI using Auth0, as shown in the image below.

![Auth0 Group](/static/assets/site-administration/openid-support/images/Auth0-group.png)

> **IMPORTANT:**  To manage groups in Auth0, we need to install the `Authorization Extension`. For more details, please follow this link: https://auth0.com/docs/extensions/authorization-extension/v2.

To reference the `Audience` and `Extension URL`, please refer to the link: https://auth0.com/docs/api/authorization-extension#get-all-groups.