---
layout: post
title: Single Sign-On with Okta Provider of OAuth 2.0 | Bold BI
description: Learn how to configure Bold BI Embedded with Okta identity provider for Single Sign-on authentication using OAuth 2.0.
platform: bold-bi
documentation: ug
---

# Okta support for SSO authentication

The Bold BI application supports the addition of users using the Okta provider. By importing them, you can share the dashboards and email exported dashboards with these users.

> **NOTE:** This feature is available in Bold BI Embedded Analytics, but it is not available in Cloud Analytics Server.

## How to register the Bold BI application in Okta

This section explains how to perform Single Sign-On for users in Okta with the Bold BI application.

> **NOTE:**  This configuration needs to be done on the Okta website.

#### Prerequisites

* An admin account in Okta.
* Install Bold BI application.

### Steps to register the Bold BI application

1. Login to the Okta website using an admin account.

    ![Admin page](/static/assets/site-administration/oauth-support/images/adminlogin.png)

2. Please click on the `Applications` option in the header menu.

    ![Application page](/static/assets/site-administration/oauth-support/images/application.png)

3. Click the `Add Application` button.

    ![Add Application](/static/assets/site-administration/oauth-support/images/addapp.png)

4. Click on `web` and proceed to the `Next` step.

    ![Application type](/static/assets/site-administration/oauth-support/images/createweb.png)

5. Please fill in the following application details on the next page and click `Done`.

	*  Name
	*  Login Redirect URIs
	*  Logout Redirect URIs

    ![Application details](/static/assets/site-administration/oauth-support/images/appdetails.png)

6. The `Login redirect URIs` should be the URI in the settings of your Bold BI application, as shown in the following snapshot.

    ![Redirect URI](/static/assets/site-administration/oauth-support/images/redirecturi.png)

7. On the next page, you will find the `Client ID` and `Client Secret` at the bottom, along with the other details you provided on the previous page.

    ![Client details](/static/assets/site-administration/oauth-support/images/clientdetails.png)

After successfully registering in Okta, save these settings on the Bold BI settings page to enable this authentication.

## Enable Okta support for authentication in Bold BI

Configure the settings in Bold BI, as shown in the following screenshot, to enable authentication using Okta.

![Okta settings](/static/assets/site-administration/oauth-support/images/Okta-sample-value.png)

The fields that need to be saved in Bold BI to enable Okta for authentication are explained as follows.

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

Configure the group import setting in Bold BI using Okta, as shown in the image below.

![Okta Group](/static/assets/site-administration/oauth-support/images/Okta-group.png)

To generate an API token, please click on the following link: [Generate API Token](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token)

