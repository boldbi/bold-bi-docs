---
layout: post
title: SSO with Amazon Cognito Provider of OAuth 2.0 | Bold BI
description: Learn how to configure Bold BI Embedded with Amazon Cognito identity provider for Single Sign-on authentication using OAuth 2.0.
platform: bold-bi
documentation: ug
---

# Amazon Cognito support for SSO authentication

Bold BI application supports adding users using the Amazon Cognito provider. By importing them, you can share the dashboards and email exported dashboards with them.

## How to register the Bold BI application in Amazon Cognito

This section explains how to perform Single Sign-On for users in Amazon Cognito with the Bold BI application.

> **NOTE:**  This configuration has to be done in Amazon Cognito website.

#### Prerequisites

* An admin account in Amazon Cognito.
* An user pool in Amazon Cognito.
* Install Bold BI application.

### Steps to register the Bold BI application

1. Login to the Amazon Cognito website with an admin account and open the console and then click `Manage User pool`.

    ![Manage user pool](/static/assets/embedded/site-administration/oauth-support/images/amazon-user-pool.png)

2. Click `App Clients` under `General Settings` in the left side menu, and then add the application.

    ![Add application](/static/assets/embedded/site-administration/oauth-support/images/amazonaddapp.png)

3. Save the `App client name` and click on `Create app client`.

    ![Create client](/static/assets/embedded/site-administration/oauth-support/images/amazonapp.png)

4. Click on `Show details` to know the `Client Secret`.

    ![Application details](/static/assets/embedded/site-administration/oauth-support/images/checkamazoncredential.png)

5. Make use of the `App client id` and `App client secret` as in the following screenshot.

    ![Client details](/static/assets/embedded/site-administration/oauth-support/images/amazonclientcredential.png)

6. Click on `App client settings` under `App integration` in the left side menu and add the `Callback URL(s)`.

    ![Application redirect uri](/static/assets/embedded/site-administration/oauth-support/images/amazonredirecturi.png)

7. The `Callback URL(s)` must be the URI in the settings of your Bold BI application as in the following screenshot.

    ![Redirect URI](/static/assets/embedded/site-administration/oauth-support/images/redirecturi.png)

After successful registration in Amazon Cognito, save these settings in Bold BI settings page to enable this authentication.

## Enable Amazon Cognito support for authentication in Bold BI

Configure the settings in Bold BI as in the following snap to enable the authentication using Amazon Cognito.

![Amazon settings](/static/assets/embedded/site-administration/oauth-support/images/amazon-sample-value.png)

The fields to be saved in the Bold BI to enable the Amazon Cognito for authentication is explained as below.

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
<td>It should be in the format <span style="color:#0c9dd1">https://AUTH_DOMAIN/oauth2/authorize</span> <br>Please refer <a href="https://aws.amazon.com/blogs/mobile/understanding-amazon-cognito-user-pool-oauth-2-0-grants/">here</a> for more details.</td>
</tr>

<tr>
<td>Token Endpoint Method</td>
<td>POST</td>
</tr>

<tr>
<td>Token Endpoint</td>
<td>It should be in the format <span style="color:#0c9dd1">https://AUTH_DOMAIN/oauth2/token</span> <br>Please refer <a href="https://aws.amazon.com/blogs/mobile/understanding-amazon-cognito-user-pool-oauth-2-0-grants/">here</a> for more details.</td>
</tr>

<tr>
<td>User Information Endpoint Method</td>
<td>GET</td>
</tr>

<tr>
<td>User Information Endpoint</td>
<td>It should be in the following format <span style="color:#0c9dd1">https://AUTH_DOMAIN/oauth2/userinfo</span>. Please refer <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/userinfo-endpoint.html">here</a>, for more details.</td>
</tr>

<tr>
<td>Client ID</td>
<td>The Client ID you get after registered the Bold BI application in Amazon Cognito website.</td>
</tr>

<tr>
<td>Client Secret</td>
<td>The Client Secret you get after registered the Bold BI application in Amazon Cognito website.</td>
</tr>

<tr>
<td>Scopes</td>
<td>openid, profile, email</td>
</tr>

<tr>
<td>Logout Endpoint</td>
<td>It is the endpoint in the Amazon Cognito website that signs the user out.</td>
</tr>

<tr>
<td>Email</td>
<td>This must be the field name, in which email will be present when deserializing the token.</td>
</tr>

</table>

## Configure Amazon Cognito Group Import Settings in Bold BI

Configure group import setting in Bold BI using Cognito AWS as shown in the below image,

![Cognito AWS](/static/assets/embedded/site-administration/oauth-support/images/AWS-group.png)

> **NOTE:**  Only `IAM User` can import Cognito AWS groups.

`User Pool Id` and `Region` can be found in general settings of your user pool in Cognito AWS console.

![AWS User Pool Id](/static/assets/embedded/site-administration/oauth-support/images/AWS-userpool.png)

For generating an Access Key and Access Secret follow the link https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey