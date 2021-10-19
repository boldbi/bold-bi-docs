---
layout: post
title: SSO with Okta Provider of OpenID Connect | Bold BI Embedded
description: Learn how to configure Bold BI Embedded with Okta identity provider for Single Sign-on authentication using OpenID Connect.
platform: bold-bi
documentation: ug
---

# Okta support for SSO authentication

Bold BI application supports adding users using the Okta provider. By importing them, you can share the dashboards and email exported dashboards with them.

## How to register the Bold BI application in Okta

This section explains how to perform Single Sign-On for users in Okta with the Bold BI application.

> **NOTE:**  This configuration has to be done in Okta website.

#### Prerequisites

* An admin account in Okta.
* Install Bold BI application.

### Steps to register the Bold BI application

1. Login to the Okta website with an admin account.

    ![Admin page](/static/assets/embedded/site-administration/openid-support/images/adminlogin.png)

2. Click `Applications` in the header menu.

    ![Application page](/static/assets/embedded/site-administration/openid-support/images/application.png)

3. Click `Add Application` button.

    ![Add application](/static/assets/embedded/site-administration/openid-support/images/addapp.png)

4. Click `web` and proceed with `Next`.

    ![Application type](/static/assets/embedded/site-administration/openid-support/images/createweb.png)

5. Fill in the following application details in the next page and click `Done`.

*  Name
*  Login Redirect URIs
*  Logout Redirect URIs

    ![Application details](/static/assets/embedded/site-administration/openid-support/images/appdetails.png)   

    > **NOTE:**  Choosing the `Grant type allowed` as `Implicit (Hybrid)` is must in addition to the default.

6. The `Login redirect URIs`  must be the URI in the settings of your Bold BI application as in the below snap.

    ![Redirect URI](/static/assets/embedded/site-administration/openid-support/images/redirecturi.png)

7. In the next page, you will get the `Client ID`  and `Client Secret` at the bottom of the page along with the other details you filled in the previous page.

    ![Client details](/static/assets/embedded/site-administration/openid-support/images/clientdetails.png)

After successful registration in Okta, save these settings in Bold BI settings page to enable this authentication.

## Enable Okta support for authentication in Bold BI

Configure the settings in Bold BI as in the following screenshot to enable the authentication using Okta.

![Okta settings](/static/assets/embedded/site-administration/openid-support/images/okta-sample-value.png)

The fields to be saved in the Bold BI to enable the Okta for authentication is explained as follows.

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
<td>The format is <span style="color:#0c9dd1">https://instancename.okta.com</span> It must be the URL of your Okta instance.</td>
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
<td>Identifier</td>
<td>preferred_username</td>
</tr>

<tr>
<td>Logout Endpoint</td>
<td>It is the endpoint in the Okta website that signs the user out.</td>
</tr>

</table>

## Configure Okta Group Import Settings in Bold BI

Configure group import setting in Bold BI using Okta as shown in the below image.

![Okta Group](/static/assets/embedded/site-administration/openid-support/images/Okta-group.png)

Generate an API token by following the below link, 
https://developer.okta.com/docs/guides/create-an-api-token/create-the-token
