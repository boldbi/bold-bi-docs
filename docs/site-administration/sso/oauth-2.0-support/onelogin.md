---
layout: post
title: Single Sign-On with OneLogin Provider of OAuth 2.0 | Bold BI
description: Learn how to configure Bold BI Embedded with OneLogin identity provider for Single Sign-on authentication using OAuth 2.0.
platform: bold-bi
documentation: ug
---

# OneLogin support for SSO authentication

Bold BI application supports adding users through the OneLogin provider. By importing them, you can share the dashboards and email exported dashboards with them.

## How to register the Bold BI application in OneLogin

This section explains how to perform Single Sign-On for users in OneLogin with Bold BI application.

> **NOTE:**  This configuration has to be done in OneLogin website.

#### Prerequisites

* An admin account in OneLogin.
* Install Bold BI application.

### Steps to register the Bold BI application

1. Login to the OneLogin website with the admin account.

2. Click on `Applications` in the header menu.

    ![Application page](/static/assets/embedded/site-administration/oauth-support/images/oneloginadmin.png)

3. Click on `Add App` button.

    ![Add Application page](/static/assets/embedded/site-administration/oauth-support/images/oneloginaddapp.png)

4. Type the word `OpenId Connect`or `oidc` in the search box and click on the result.

    ![Openidconnect](/static/assets/embedded/site-administration/oauth-support/images/openidconnect.png)

5. Type the application name and click on `Add App`

6. Save the application name in the `Display Name`

    ![Applicationname](/static/assets/embedded/site-administration/oauth-support/images/oneloginname.png)

7. If you want to use the Bold BI mobile application, follow the above steps and finally click `SSO` and change the `Application Type` as `Native`. If not, proceed further as it is.

    ![Mobile type](/static/assets/embedded/site-administration/oauth-support/images/mobile-onelogin.png)

8. Click the `Configuration` tab and save the `Redirect URI's` and `Login Url`. For Bold BI mobile application, use the `Mobile App Redirect URI` and use the `Redirect URI` for the web application.

    ![Redirect URI](/static/assets/embedded/site-administration/oauth-support/images/oneloginredirect.png)
 
9. The `Redirect URI` and `Login URL` is found under the `OpenID Connect` settings of your Bold BI application as in the following screenshot.

    ![Redirecturi in setting](/static/assets/embedded/site-administration/oauth-support/images/redirecturi.png#width=65%)

10. Click `SSO` tab, you will find the `Client ID` and `Client Secret` and use it in the Bold BI application.

    ![OneLoginClient details](/static/assets/embedded/site-administration/oauth-support/images/oneloginclient.png)

After successful registration in OneLogin, save these settings in Bold BI settings page to enable this authentication.

## Enable OneLogin support for authentication in Bold BI

Configure the settings in Bold BI as in the following snap to enable the authentication using OneLogin.

![OneLogin settings](/static/assets/embedded/site-administration/oauth-support/images/onelogin-sample-value.png)

The fields to be saved in the Bold BI to enable the OneLogin for authentication is explained as below.

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
<td>It should be in the format <span style="color:#0c9dd1">https://subdomain.onelogin.com/oidc/auth</span> <br>Please refer <a href="https://developers.onelogin.com/openid-connect/api/authorization-code">here</a> for more details.</td>
</tr>

<tr>
<td>Token Endpoint Method</td>
<td>POST</td>
</tr>

<tr>
<td>Token Endpoint</td>
<td>It should be in the format <span style="color:#0c9dd1">https://subdomain.onelogin.com/oidc/token</span> <br>Please refer <a href="https://developers.onelogin.com/openid-connect/api/authorization-code-grant">here</a> for more details.</td>
</tr>

<tr>
<td>User Information Endpoint Method</td>
<td>GET</td>
</tr>

<tr>
<td>User Information Endpoint</td>
<td>It should be in the format <span style="color:#0c9dd1">https://subdomain.onelogin.com/oidc/me</span> <br>Please refer <a href="https://developers.onelogin.com/openid-connect/api/user-info">here</a> for more details.</td>
</tr>

<tr>
<td>Client ID</td>
<td>The Client ID you get after registered the Bold BI application in OneLogin website.</td>
</tr>

<tr>
<td>Client Secret</td>
<td>The Client Secret you get after registered the Bold BI application in OneLogin website.</td>
</tr>

<tr>
<td>Scopes</td>
<td>openid, profile, email</td>
</tr>

<tr>
<td>Logout Endpoint</td>
<td>It is the endpoint in the OneLogin website that signs the user out.</td>
</tr>

<tr>
<td>Email</td>
<td>This must be the field name in which email will be present when deserializing the token.</td>
</tr>

</table>

## Configure OneLogin Group Import Settings in Bold BI

Configure group import setting in Bold BI using OneLogin as shown in the below image.

![OneLogin Group](/static/assets/embedded/site-administration/oauth-support/images/OneLogin-group.png)

For generating the API client credentials follow below link,
https://developers.onelogin.com/api-docs/1/getting-started/working-with-api-credentials 

We use client Id and client Secret from API client credentials to get token for accessing the groups API. We need `Region` from API Domain for accessing OneLogin APIs. Please refer below image for region,

![OneLogin Region](/static/assets/embedded/site-administration/oauth-support/images/OneLogin-region.png)