---
layout: post
title: SSO with OneLogin Provider of OpenID Connect | Bold BI
description: Learn how to configure Bold BI Embedded with OneLogin identity provider for Single Sign-on authentication using OpenID Connect.
platform: bold-bi
documentation: ug
---

# OneLogin support for SSO authentication

The Bold BI application supports adding users using the OneLogin provider. By importing them, you can share the dashboards and email exported dashboards with them.

> **NOTE:** This feature is available in Bold BI Embedded Analytics, but it is not available in Cloud Analytics Server.

## How to register the Bold BI application in OneLogin

This section explains how to perform Single Sign-On for users in OneLogin with the Bold BI application.

> **NOTE:**  This configuration needs to be done on the OneLogin website.

#### Prerequisites

* An admin account in OneLogin.
* Install Bold BI application.

### Steps to register the Bold BI application

1. Login to the OneLogin website using an admin account.

2. Click `Applications` in the header menu.

    ![Application page](/static/assets/site-administration/openid-support/images/oneloginadmin.png)

3. Click the `Add App` button.

    ![Add Application page](/static/assets/site-administration/openid-support/images/oneloginaddapp.png)

4. Type the words `OpenId Connect` or `oidc` in the search box and click on the result.

    ![Openidconnect](/static/assets/site-administration/openid-support/images/openidconnect.png)

5. Please enter the application name and click on `Add App.`

6. Please save the application name in the `Display Name.`

    ![Application name](/static/assets/site-administration/openid-support/images/oneloginname.png)

7. If you want to use the Bold BI mobile application, follow the steps above and finally click on `SSO` and change the `Application Type` to `Native.` If not, proceed as it is.

    ![Mobile type](/static/assets/site-administration/openid-support/images/mobile-onelogin.png)

8. Click the `Configuration` tab and save the `Redirect URIs`. For the Bold BI application, use the `Mobile App Redirect URI` and use the `Redirect URI` for the web application.

    ![Redirect URI](/static/assets/site-administration/openid-support/images/oneloginredirect.png)
 
9. The `Redirect URI` and `Login URL` are found under the `OpenID Connect` settings of your Bold BI application, as shown in the following screenshot.

    ![Redirecturi in setting](/static/assets/site-administration/openid-support/images/redirecturi.png#width=55%)

10. Click on the `SSO` tab to find the `Client ID` and `Client Secret`, and use them in the Bold BI application.

    ![OneLoginClient details](/static/assets/site-administration/openid-support/images/oneloginclient.png)

After successfully registering in OneLogin, save these settings on the Bold BI settings page to enable this authentication.

## Enable OneLogin support for authentication in Bold BI

Configure the settings in Bold BI as in the following screenshot to enable the authentication using the OneLogin.

![OneLogin settings](/static/assets/site-administration/openid-support/images/onelogin-sample-value.png#width=55%)

The fields that need to be saved in Bold BI in order to enable OneLogin for authentication are explained as follows.

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
<td>It must be in the form <span style="color:#0c9dd1">https://subdomain.onelogin.com/oidc</span>. Sub domain represents the OneLogin instance.</td>
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
<td>Identifier</td>
<td>preferred_username</td>
</tr>

<tr>
<td>Logout Endpoint</td>
<td>It is the endpoint in the OneLogin website that signs the user out.</td>
</tr>

</table>

## Configure OneLogin Group Import Settings in Bold BI

Configure the group import setting in Bold BI using OneLogin, as shown in the image below.

![OneLogin Group](/static/assets/site-administration/openid-support/images/OneLogin-group.png)

To generate the API client credentials, please follow the link: [OneLogin API Credentials Guide](https://developers.onelogin.com/api-docs/1/getting-started/working-with-api-credentials)

We use the client ID and client secret from the API client credentials to obtain a token for accessing the groups API. In order to access OneLogin APIs, we require the `Region` from the API Domain. Please refer to the image below for the region.

![OneLogin Region](/static/assets/site-administration/openid-support/images/OneLogin-region.png)