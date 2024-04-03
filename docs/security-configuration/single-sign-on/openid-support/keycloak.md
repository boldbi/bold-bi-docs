---
layout: post
title: Configure SSO with Keycloak using Open ID Connect | Bold BI Docs
description: Learn how to configure Bold BI Embedded application with Keycloak identity provider for Single Sign-on authentication using OpenID Connect.
platform: bold-bi
documentation: ug
---

# Keycloak support for SSO authentication

Keycloak is an open-source identity and access management solution designed for modern applications and services.

This section explains how to perform Single Sign-On for users in Keycloak with the Bold BI application using OpenID Connect.

> **NOTE:** This feature is available in Bold BI Embedded Analytics, but not in Cloud Analytics Server.

## How to register the Bold BI application in Keycloak

> **NOTE:**  This configuration needs to be done on the Keycloak website.

#### Prerequisites

* An admin account in Keycloak.
* Install the Bold BI application.

### Steps to register the Bold BI application

1. Login to the Keycloak website using an admin account.

   ![Keycloak Admin console](/static/assets/site-administration/openid-support/images/Keycloak-adminconsole.png)

2. Please navigate to the Security admin console, then go to the `Clients` page and select the `Create` option.

   ![Keycloak Client Option](/static/assets/site-administration/openid-support/images/Keycloak-client.png)

3. On the Add Client page, enter the client ID and select the Client protocol as `openid-connect`, then click `Save`.

   ![Keycloak Application Page](/static/assets/site-administration/openid-support/images/Keycloak-application.png)

4. Once the client has been created, please configure the following in the settings section and save the changes.

    ![Keycloak Settings Option](/static/assets/site-administration/openid-support/images/Keycloak-settings-option.png)

    ![Keycloak Settings](/static/assets/site-administration/openid-support/images/Keycloak-settings.png)

<table>

<tr>
<td>Access Type</td>
<td>Set access type to confidential.</td>
</tr>

<tr>
<td>Implicit Flow Enabled</td>
<td>On</td>
</tr>

<tr>
<td>Valid redirect URIs</td>
<td><strong>URL Format:</strong> https://{domain}/signin-oidc<br><br><strong>Example:</strong> https://example.com/signin-oidc<br><br><strong>Note:</strong> The <strong>Redirect URI</strong> is found under the <strong>OpenID Connect</strong> settings of your Bold BI application, as in the following screenshot.</td>
</tr>

</table>

After successfully registering with Keycloak, save these settings on the Bold BI settings page to enable this authentication.

## Enable Keycloak authentication support in Bold BI

Configure the settings in Bold BI as shown in the following screenshot to enable authentication using Keycloak.

![Keycloak Bi Settings](/static/assets/site-administration/openid-support/images/Keycloak-bi-settings.png)

The fields that need to be saved in Bold BI in order to enable Keycloak for authentication are explained as follows.

<table>

<tr>
<td>Enable Open ID Connect</td>
<td>Enabled</td>
</tr>

<tr>
<td>Provider Name</td>
<td>It represents the name of the authentication provider to be displayed on the login page.</td>
</tr>

<tr>
<td>Provider Logo</td>
<td>It represents the logo of the authentication provider to be displayed on the login page.</td>
</tr>

<tr>
<td>Authority</td>
<td>It must be the URL of your Keycloak instance.<br><br>URL format: https://{host}/auth/realms/{realm}<br><br><strong>Note:</strong>The Authority URL only accepts HTTPS, and Keycloak should be configured in HTTPS.</td>
</tr>

<tr>
<td>Client ID</td>
<td>The Client ID is the one you get after registering the Bold BI application on the Keycloak website.<br><br><strong>Note:  </strong> Client ID is available in the <strong>Clients</strong> page on the Keycloak website.</td>
</tr>

<tr>
<td>Client Secret</td>
<td>The Client Secret is the one you get after registering the Bold BI application on the Keycloak website.<br><br><strong>Note:  </strong> Client Secret is available in the Credentials section of the Client details page.</td>
</tr>

<tr>
<td>Identifier</td>
<td>The Bold BI application requires an email address to login to the application.<br><br>So, please set the identifier as email.<br><br><strong>Note:</strong> All accounts in Keycloak should have a valid email address.</td>
</tr>

<tr>
<td>Logout Endpoint</td>
<td>It is the endpoint in the Keycloak website that signs the user out.</td>
</tr>

</table>

## Login with Keycloak

1. Please navigate to the login page and choose the Keycloak option to log in.

   ![Keycloak Bi Login Option](/static/assets/site-administration/openid-support/images/Keycloak-bi-login-option.png)

2. Fill in the username and password on the Keycloak login screen and then proceed to sign in.

   ![Keycloak Bi Login](/static/assets/site-administration/openid-support/images/Keycloak-login.png)
