---
layout: post
title: SSO with Amazon Cognito Provider of OAuth 2.0 | Bold BI
description: Learn how to configure Bold BI Embedded with Amazon Cognito identity provider for Single Sign-on authentication using OAuth 2.0.
platform: bold-bi
documentation: ug
---

# Amazon Cognito support for SSO authentication

The Bold BI application supports the addition of users using the Amazon Cognito provider. By importing them, you can share the dashboards and email exported dashboards to them.

> **NOTE:** This feature is available in Bold BI Embedded Analytics but not in Cloud Analytics Server.

## How to register the Bold BI application in Amazon Cognito

This section explains how to perform Single Sign-On for users in Amazon Cognito using the Bold BI application.

> **NOTE:**  This configuration needs to be done on the Amazon Cognito website.

#### Prerequisites

* An admin account in Amazon Cognito.
* An user pool in Amazon Cognito.
* Install Bold BI application.

### Steps to register the Bold BI application

1. Please login to the Amazon Cognito website using an admin account. Once logged in, open the console and click on `Manage User Pool`.

    ![Manage user pool](/static/assets/site-administration/oauth-support/images/amazon-user-pool.png)

2. Please click on `App Clients` located under `General Settings` in the left side menu, and proceed to add the application.

    ![Add application](/static/assets/site-administration/oauth-support/images/amazonaddapp.png)

3. Please save the `App client name` and click on `Create app client.`

    ![Create client](/static/assets/site-administration/oauth-support/images/amazonapp.png)

4. Click on the `Show details` button to access the `Client Secret`.

    ![Application details](/static/assets/site-administration/oauth-support/images/checkamazoncredential.png)

5. Please use the `App client id` and `App client secret` as shown in the screenshot below.

    ![Client details](/static/assets/site-administration/oauth-support/images/amazonclientcredential.png)

6. Click on `App client settings` under `App integration` in the left side menu and add the `Callback URL(s)`.

    ![Application redirect uri](/static/assets/site-administration/oauth-support/images/amazonredirecturi.png)

7. The `Callback URL(s)` must be the URI in the settings of your Bold BI application, as shown in the following screenshot.

    ![Redirect URI](/static/assets/site-administration/oauth-support/images/redirecturi.png)

After successfully registering in Amazon Cognito, save these settings on the Bold BI settings page to enable this authentication..

## Enable Amazon Cognito support for authentication in Bold BI

Configure the settings in Bold BI, as shown in the following snapshot, to enable authentication using Amazon Cognito.

![Amazon settings](/static/assets/site-administration/oauth-support/images/amazon-sample-value.png)

The fields that need to be saved in Bold BI to enable Amazon Cognito for authentication are explained below.

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

Configure the group import setting in Bold BI using Cognito AWS, as shown in the image below,

![Cognito AWS](/static/assets/site-administration/oauth-support/images/AWS-group.png)

> **NOTE:**  Only the `IAM User` can import Cognito AWS groups.

The `User Pool Id` and `Region` can be found in the general settings of your user pool in the Cognito AWS console.

![AWS User Pool Id](/static/assets/site-administration/oauth-support/images/AWS-userpool.png)

To generate an Access Key and Access Secret, please follow the link https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey