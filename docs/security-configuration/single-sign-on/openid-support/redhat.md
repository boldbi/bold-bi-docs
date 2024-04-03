---
layout: post
title: Configure SSO with Red Hat using Open ID Connect | Bold BI Docs
description: Learn how to configure Bold BI Embedded application with Red Hat identity provider for Single Sign-on authentication (RH-SSO) using OpenID Connect.
platform: bold-bi
documentation: ug
---

# Red Hat support for SSO authentication

Red Hat Single Sign-On (RH-SSO) is based on the Keycloak project and allows you to secure your web applications by providing web single sign-on (SSO) capabilities based on popular standards like SAML 2.0, OpenID Connect, and OAuth 2.0.

> **NOTE:** This feature is available in Bold BI Embedded Analytics, but not in Cloud Analytics Server.

This section explains how to perform Single Sign-On for users in Red Hat with the Bold BI application using Open ID Connect.

## How to register the Bold BI application in Red Hat

> **NOTE:**  This configuration needs to be done on the Red Hat website.

#### Prerequisites

* An admin account in Red Hat.
* Install the Bold BI application.

### Steps to register the Bold BI application

1. Please login to the Red Hat website using an admin account.

    ![RedHat Admin console](/static/assets/site-administration/openid-support/images/Redhat-adminconsole.png)

2. Navigate to the Security admin console, then go to the `Clients` page and select the `Create` option.

    ![RedHat Client Option](/static/assets/site-administration/openid-support/images/Redhat-client.png)

3. On the Add Client page, enter the client ID and select the Client protocol as `openid-connect,` then click `Save.`

    ![RedHat Application Page](/static/assets/site-administration/openid-support/images/Redhat-application.png)

4. Once the client has been created, please configure the following in the settings section and save the changes.

    ![RedHat Settings Option](/static/assets/site-administration/openid-support/images/Redhat-settings-option.png)

    ![RedHat Settings](/static/assets/site-administration/openid-support/images/Redhat-settings.png)

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

After successfully registering with Red Hat, save these settings on the Bold BI settings page to enable this authentication.

## Enable Red Hat authentication support in Bold BI

Configure the settings in Bold BI, as shown in the following screenshot, to enable authentication using Red Hat.

![RedHat Bi Settings](/static/assets/site-administration/openid-support/images/Redhat-bi-settings.png)

The fields that need to be saved in Bold BI in order to enable Red Hat for authentication are explained as follows.

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
<td>It must be the URL of your Red Hat instance.<br><br><strong>URL format:</strong> https://{host}/auth/realms/{realm}<br><br><strong>Note:</strong> The Authority URL only accepts HTTPS, and Red Hat should be configured in HTTPS..</td>
</tr>

<tr>
<td>Client ID</td>
<td>The Client ID is the one you get after registering the Bold BI application on the Red Hat website.<br><br><strong>Note:</strong> Client ID is available in the <strong>Clients</strong> page.</td>
</tr>

<tr>
<td>Client Secret</td>
<td>The Client Secret is the one you get after registering the Bold BI application on the Red Hat website.<br><br><strong>Note:</strong> Client Secret is available in the Credentials section of the Client details page.</td>
</tr>

<tr>
<td>Identifier</td>
<td>The Bold BI application requires an email address to login to the application.<br><br>So, please set the identifier as email.<br><br><strong>Note:</strong> All accounts in Red Hat should have a valid email address.</td>
</tr>

<tr>
<td>Logout Endpoint</td>
<td>It is the endpoint in the Red Hat website that signs the user out.</td>
</tr>

</table>

## Login with Red Hat

1. Please go to the login page and select the Red Hat option to log in.

   ![RedHat Bi Login Option](/static/assets/site-administration/openid-support/images/Redhat-bi-login-option.png)

2. Please enter your username and password in the Red Hat SSO login screen and proceed to sign in.

   ![RedHat Bi Login](/static/assets/site-administration/openid-support/images/Redhat-login.png)
