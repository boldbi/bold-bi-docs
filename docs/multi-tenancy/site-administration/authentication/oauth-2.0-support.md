---
layout: post
title: SSO with OAuth 2.0 Identities in User Management Server | Bold BI
description: Learn how to configure User Management Server with an OAuth 2.0 identity provider for Single Sign-On authentication using OAuth 2.0.
platform: bold-bi
documentation: ug
---

# OAuth 2.0 support in User Management Server

The User Management Server can be configured to support OAuth 2.0 for Single Sign-On (SSO), allowing users to log in directly to the User Management Server after authenticating using OAuth 2.0.

## Prerequisites

1. An account with an OAuth 2.0 provider.

2. Register the User Management Server in the OAuth 2.0 provider.

## Steps to configure OAuth 2.0 in User Management Server

1. Log in to the User Management Server with the admin credential.

2. In the left side menu, click `Settings`, then `Authentication`, and finally `OAuth 2.0`.

    ![Authentication OAuth settings](/static/assets/multi-tenancy/images/oauth-setting-page.png)

4. Provide the following details in the `OAuth 2.0` settings of User Management Server.

    <table>

    <tr>
    <td>Provider Name</td>
    <td>It represents the name of the authentication provider that will be displayed on the login page.</td>
    </tr>

    <tr>
    <td>Provider Logo</td>
    <td>It represents the logo of the authentication provider that will be displayed on the login page.</td>
    </tr>

    <tr>
    <td>Authorization Endpoint</td>
    <td>It is the endpoint in the provider to authorize the user.</td>
    </tr>

    <tr>
    <td>Token Endpoint Method</td>
    <td>It represents the request type to access the token endpoint.</td>
    </tr>

    <tr>
    <td>Token Endpoint</td>
    <td>It is the endpoint in the provider that generates the token.</td>
    </tr>

    <tr>
    <td>User Information Endpoint Method</td>
    <td>It is the endpoint in the provider to get the user details.</td>
    </tr>

    <tr>
    <td>User Information Endpoint</td>
    <td>It represents the request type to access the user information endpoint.</td>
    </tr>

    <tr>
    <td>Client ID</td>
    <td>It is a unique identifier provided to each of the applications while registering in the providers.</td>
    </tr>

    <tr>
    <td>Client Secret</td>
    <td>It is a secret key that is used to authorize the applications.</td>
    </tr>

    <tr>
    <td>Scopes</td>
    <td>It is comma separated lists of identifiers that specifies the access privileges that are being requested from the provider.</td>
    </tr>

    <tr>
    <td>Email</td>
    <td>This must be the email of an admin account of the providers.</td>
    </tr>

    </table>

    ![OAuth settings](/static/assets/multi-tenancy/images/oauth-setting-configuration.png)

If you need to import the OAuth 2.0 groups, you must configure the group details while saving the OAuth authentication settings.

  ![OAuth setting provider option](/static/assets/multi-tenancy/images/oauth-setting-provider-option.png)

The following list of OAuth 2.0 providers explains how to connect with the User Management Server. 

* [Amazon Cognito](/security-configuration/single-sign-on/oauth-2.0-support/amazon-cognito/)
* [Auth0](/security-configuration/single-sign-on/oauth-2.0-support/auth0/)
* [Okta](/security-configuration/single-sign-on/oauth-2.0-support/okta/)
* [OneLogin](/security-configuration/single-sign-on/oauth-2.0-support/onelogin/)

## Set OAuth 2.0 as default authentication
OAuth 2.0 can be set as default authentication when [OAuth 2.0 settings](/multi-tenancy/site-administration/authentication/oauth-2.0-support/#steps-to-configure-oauth-20-in-user-management-server) is enabled.

Follow these steps to configure default authentication:

1. In settings page, click `Authentication` tab and select `General`.

2. Enable the **Enable Default Authentication** option and select the **OAuth 2.0** as default authentication provider, as shown in the following screenshot.

    ![Enable OAuth Default Authentication](/static/assets/multi-tenancy/images/default-oauth.png)

## Disabling OAuth 2.0 settings

Disable the **Enable Default Authentication** option and then clicking `Save` will disable the [OAuth 2.0 default authentication](/multi-tenancy/site-administration/authentication/oauth-2.0-support/#set-oauth-20-as-default-authentication).

![Disable Default Authentication](/static/assets/multi-tenancy/images/oauth-default-authentication.png)
