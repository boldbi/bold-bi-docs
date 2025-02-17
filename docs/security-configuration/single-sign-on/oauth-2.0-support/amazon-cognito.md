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

1. Please login to the Amazon Cognito website using an admin account. Once logged in, search for the word `Cognito` and click on `User Pool`.

    ![Search for Cognito](/static/assets/site-administration/oauth-support/images/Cognito.png)
    ![Search for Cognito](/static/assets/site-administration/oauth-support/images/UserPool.png)

2. Create a new `User Pool` as shown in the image below. Make sure to provide the <a href="https://help.boldbi.com/security-configuration/single-sign-on/oauth-2.0-support/#steps-to-configure-oauth-20-in-bold-bi">Redirect URL</a> exactly as it appears in the authentication settings page of Bold BI.

    ![Search for Cognito](/static/assets/site-administration/oauth-support/images/CreatingUserPool.png)

    ![Search for Cognito](/static/assets/site-administration/oauth-support/images/Creating-UserPool.png)

3. Click on the Created User Pool, then select the `App Clients` option under `Applications` in the left side menu. After that, click on the created app client.
    ![Add app client](/static/assets/site-administration/oauth-support/images/AppClient.png)

4. Click on the `Edit` button to make the necessary changes, as shown in the below image and save the changes.
    ![Edit app client](/static/assets/site-administration/oauth-support/images/EditAppClient.png)

    ![Edit application](/static/assets/site-administration/oauth-support/images/EditApplication.png)

5. Click on the `Attribute permissions` option, then select `Edit`. After entering edit mode, disable all the options under Write and save the changes.
    ![Edit attributes](/static/assets/site-administration/oauth-support/images/EditAttribute.png)
    
    ![Edit attributes](/static/assets/site-administration/oauth-support/images/Edit-Attribute.png)


6. Click on the `Login Pages` option, then select the `Edit`. After entering edit mode, choose the values as shown in the below image.
    ![Edit Login pages](/static/assets/site-administration/oauth-support/images/LoginPages.png) 
    ![Edit Login pages](/static/assets/site-administration/oauth-support/images/LoginPage.png)

7. Please use this `App client id` and `App client secret` for configuring the AWS Cognito.

    ![Client details](/static/assets/site-administration/oauth-support/images/ClientDetail.png)

8. You can obtain the Endpoints using this link: https://cognito-idp.us-east-1.amazonaws.com/{YourUserPoolID}/.well-known/openid-configuration

9. The `Callback URL(s)` must be the URI in the settings of your Bold BI application, as shown in the following screenshot. If you need to create a new user account, you can enable the option `Enable User Account Creation`.

    ![Redirect URI](/static/assets/site-administration/oauth-support/images/CallbackURL.png)

After successfully registering in Amazon Cognito, enter these details on the <a href="https://help.boldbi.com/security-configuration/single-sign-on/oauth-2.0-support/">Authentication settings page</a> using OAuth option and save the changes.

> **NOTE:**  As mentioned above, we configured the authentication directly on Site level. However, if you want to configure it across all tenants, you would need to apply the same configuration in the <a href="https://help.boldbi.com/multi-tenancy/site-administration/authentication/oauth-2.0-support/"> UMS page.</a>

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
<td>It should be in the format <span style="color:#0c9dd1">https://AUTH_DOMAIN/oauth2/authorize</span> <br>Please refer <a href="https://aws.amazon.com/blogs/mobile/understanding-amazon-cognito-user-pool-oauth-2-0-grants/">blog</a> for more details.</td>
</tr>

<tr>
<td>Token Endpoint Method</td>
<td>POST</td>
</tr>

<tr>
<td>Token Endpoint</td>
<td>It should be in the format <span style="color:#0c9dd1">https://AUTH_DOMAIN/oauth2/token</span> <br>Please refer <a href="https://aws.amazon.com/blogs/mobile/understanding-amazon-cognito-user-pool-oauth-2-0-grants/">blog</a> for more details.</td>
</tr>

<tr>
<td>User Information Endpoint Method</td>
<td>GET</td>
</tr>

<tr>
<td>User Information Endpoint</td>
<td>It should be in the following format <span style="color:#0c9dd1">https://AUTH_DOMAIN/oauth2/userinfo</span>. Please refer <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/userinfo-endpoint.html">this documentation</a>, for more details.</td>
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

![AWS User Pool Id](/static/assets/site-administration/oauth-support/images/AWSUserpool.png)

Please find more information on managing access keys for IAM Users : [AWS IAM User Guide - Creating Access Keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
and you can get the AWS Access Key ID and Key Secret under the `Security credentials` option. For more details, please refer to this <a href="https://aws.amazon.com/blogs/security/how-to-find-update-access-keys-password-mfa-aws-management-console/">blog.</a>
