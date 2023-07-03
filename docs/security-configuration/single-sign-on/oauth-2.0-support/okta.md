---
layout: post
title: Single Sign-On with Okta Provider of OAuth 2.0 | Bold BI
description: Learn how to configure Bold BI Embedded with Okta identity provider for Single Sign-on authentication using OAuth 2.0.
platform: bold-bi
documentation: ug
---

# Okta support for SSO authentication

Bold BI application supports adding users using the Okta provider. By importing them, you can share the dashboards and email exported dashboards with them.

> **NOTE:** This feature is available in Bold BI Embedded Analytics but not in Cloud Analytics Server.

## How to register the Bold BI application in Okta

This section explains how to perform Single Sign-On for users in Okta with Bold BI application.

> **NOTE:**  This configuration has to be done in Okta website.

#### Prerequisites

* An admin account in Okta.
* Install Bold BI application.

### Steps to register the Bold BI application

1. Login to the Okta website with an admin account.

    ![Admin page](/static/assets/site-administration/oauth-support/images/adminlogin.png)

2. Click `Applications` in the header menu.

    ![Application page](/static/assets/site-administration/oauth-support/images/application.png)

3. Click `Add Application` button.

    ![Add Application](/static/assets/site-administration/oauth-support/images/addapp.png)

4. Click `web` and proceed with `Next`.

    ![Application type](/static/assets/site-administration/oauth-support/images/createweb.png)

5. Fill in the following application details in the next page and click `Done`.

	*  Name
	*  Login Redirect URIs
	*  Logout Redirect URIs

    ![Application details](/static/assets/site-administration/oauth-support/images/appdetails.png)

6. The `Login redirect URIs` must be the URI in the settings of your Bold BI application as in the following snap.

    ![Redirect URI](/static/assets/site-administration/oauth-support/images/redirecturi.png)

7. In the next page, you will get the `Client ID` and `Client Secret` at the bottom of the page along with the other details you filled in the previous page.

    ![Client details](/static/assets/site-administration/oauth-support/images/clientdetails.png)

After successful registration in Okta, save these settings in Bold BI settings page to enable this authentication.

## Enable Okta support for authentication in Bold BI

Configure the settings in Bold BI as in the following snap to enable the authentication using Okta.

![Okta settings](/static/assets/site-administration/oauth-support/images/Okta-sample-value.png)

The fields to be saved in the Bold BI to enable the Okta for authentication is explained as follows.

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
<td>It should be in the format <span style="color:#0c9dd1">${baseUrl}/v1/authorize</span> <br>Please refer <a href="https://developer.okta.com/docs/reference/api/oidc/#authorize">here</a> for more details.</td>
</tr>

<tr>
<td>Token Endpoint Method</td>
<td>POST</td>
</tr>

<tr>
<td>Token Endpoint</td>
<td>It should be in the format <span style="color:#0c9dd1">${baseUrl}/v1/token</span> <br>Please refer <a href="https://developer.okta.com/docs/reference/api/oidc/#token">here</a> for more details.</td>
</tr>

<tr>
<td>User Information Endpoint Method</td>
<td>POST</td>
</tr>

<tr>
<td>User Information Endpoint</td>
<td>It should be in the format <span style="color:#0c9dd1">${baseUrl}/v1/token</span> <br>Please refer <a href="https://developer.okta.com/docs/reference/api/oidc/#userinfo">here</a> for more details.</td>
</tr>

<tr>
<td>Client ID</td>
<td>The Client ID you get after registered the Bold BI application in Okta website.</td>
</tr>

<tr>
<td>Client Secret</td>
<td>The Client Secret you get after registered the Bold BI application in Okta website.</td>
</tr>

<tr>
<td>Scopes</td>
<td>openid, profile, email</td>
</tr>

<tr>
<td>Logout Endpoint</td>
<td>It is the endpoint in the Okta website that signs the user out.</td>
</tr>

<tr>
<td>Email</td>
<td>This must be the field name in which email will be present when deserializing the token.</td>
</tr>

</table>

## Configure Okta Group Import Settings in Bold BI

Configure group import setting in Bold BI using Okta as shown in the below image.

![Okta Group](/static/assets/site-administration/oauth-support/images/Okta-group.png)

Generate an API token by following the below link,
https://developer.okta.com/docs/guides/create-an-api-token/create-the-token
