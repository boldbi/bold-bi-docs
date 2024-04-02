---
layout: post
title: SSO with Okta Provider of OpenID Connect | Bold BI Embedded
description: Learn how to configure Bold BI Embedded with Okta identity provider for Single Sign-on authentication using OpenID Connect.
platform: bold-bi
documentation: ug
---

# Okta support for SSO authentication

The Bold BI application supports the addition of users using the Okta provider. By importing them, you can share the dashboards and email exported dashboards with these users.

> **NOTE:** This feature is available in Bold BI Embedded Analytics, but not in Cloud Analytics Server.

## How to register the Bold BI application in Okta

This section explains how to perform Single Sign-On for users in Okta with the Bold BI application.

> **NOTE:**  This configuration needs to be done on the Okta website.

#### Prerequisites

* An admin account in Okta.
* Install Bold BI application.

### Steps to register the Bold BI application

1. Please login to the Okta website using an admin account.

    ![Admin page](/static/assets/site-administration/openid-support/images/adminlogin.png)

2. Please click on `Applications` in the header menu.

    ![Application page](/static/assets/site-administration/openid-support/images/application.png)

3. Click the `Add Application` button.

    ![Add application](/static/assets/site-administration/openid-support/images/addapp.png)

4. Click on `web` and proceed to the `Next` step.

    ![Application type](/static/assets/site-administration/openid-support/images/createweb.png)

5. Please complete the application details on the next page and then click `Done`.

*  Name
*  Login Redirect URIs
*  Logout Redirect URIs

    ![Application details](/static/assets/site-administration/openid-support/images/appdetails.png)   

    > **NOTE:**  Choosing the `Grant type allowed` as `Implicit (Hybrid)` is a must in addition to the default.

6. The `Login redirect URIs` must be the URI specified in the settings of your Bold BI application, as shown in the snapshot below.

    ![Redirect URI](/static/assets/site-administration/openid-support/images/redirecturi.png#width=55%)

7. On the next page, you will receive the `Client ID` and `Client Secret` at the bottom along with the other details you provided on the previous page.

    ![Client details](/static/assets/site-administration/openid-support/images/clientdetails.png)

After successful registration in Okta, save these settings in Bold BI settings page to enable this authentication.

## Enable Okta support for authentication in Bold BI

Please configure the settings in Bold BI, as shown in the following screenshot, to enable authentication using Okta.

![Okta settings](/static/assets/site-administration/openid-support/images/okta-sample-value.png#width=50%)

The fields that need to be saved in Bold BI in order to enable Okta for authentication are explained as follows.

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

Configure the group import setting in Bold BI using Okta, as shown in the image below.

![Okta Group](/static/assets/site-administration/openid-support/images/Okta-group.png)

Generate an API token by following the link below,
https://developer.okta.com/docs/guides/create-an-api-token/create-the-token
