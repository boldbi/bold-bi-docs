---
layout: post
title: Single Sign-On with OpenID Connect | Bold BI Embedded
description: Learn how to configure Bold BI Embedded with OpenID based identity provider for Single Sign-on authentication using OpenID Connect.
platform: bold-bi
documentation: ug
---

# OpenID Connect support

The Bold BI application can be configured to support OpenID Connect for Single Sign-On (SSO), so that the users can log in directly to Bold BI application after authenticating using the OpenID Connect.

## Configure OpenID Connect provider

1. An account with an OpenID provider.

2. Register the Bold BI application in the OpenID Connect provider.

## Steps to configure OpenID in Bold BI

1. Login to the Bold BI with an admin credential.

2. Click `Settings` in the left side menu.

    ![Settings](/static/assets/embedded/site-administration/openid-support/images/settings.png)

3. Click `Authentication` and then `OpenID Connect`

    ![Authentication settings](/static/assets/embedded/site-administration/openid-support/images/authentication-settings.png)

4. Provide the following details in the `OpenID Connect` settings page of Bold BI application.

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
    <td>It is the instance created for the user in the provider.</td>
    </tr>

    <tr>
    <td>Client ID</td>
    <td>It is an unique identifier provided to each of the applications while registering in the providers.</td>
    </tr>

    <tr>
    <td>Client Secret</td>
    <td>It is a secret key that is used to authorize the applications.</td>
    </tr>

    <tr>
    <td>Identifier</td>
    <td>It is the property name that holds the email address of the user in the deserialized ID token.</td>
    </tr>

    <tr>
    <td>Logout Endpoint</td>
    <td>It is an end point that logout the thrid-party provider.</td>
    </tr>

    </table>

    ![OpenId settings](/static/assets/embedded/site-administration/openid-support/images/openid-settings.png)

If we need to import the OpenID Connect groups, we have to configure the group details while saving the OpenID authentication settings.

  ![OpenId Group setting](/static/assets/embedded/site-administration/openid-support/images/OpenId-group-settings.png)

The previous mentioned similar steps are applicable to configure the OpenID support in User Management Server by logging into the URL `{Bold BI URL}/ums/administration/sso?view=openid-settings` with admin credential.

Following are the list of few OpenID Connect providers and that explains how to connect with the Bold BI application. 

* [Auth0](/embedded-bi/site-administration/sso/openid-support/auth0/)
* [Okta](/embedded-bi/site-administration/sso/openid-support/okta/)
* [OneLogin](/embedded-bi/site-administration/sso/openid-support/onelogin/)

The OpenID Connect support is provided in both the Bold BI sites and User Management Server. This support can be handled for each sites individually in the settings page by disabling the option as in the following screenshot.

![Enable OpenID Connect support](/static/assets/embedded/site-administration/openid-support/images/EnableOpenId.png)

## Set OpenID Connect as Default Authentication

OpenID Connect can be set as default authentication when [OpenID Connect settings](/embedded-bi/site-administration/sso/openid-support/#steps-to-configure-openid-in-bold-bi) is enabled and saved. Follow these steps:

1. In settings page, click Authentication tab and select General.

2. Enable the **Enable Default Authentication** option and select the **OpenID Connect** in default authentication provider as in the following screenshot.

    ![Enable OpenID Default Authentication](/static/assets/embedded/site-administration/openid-support/images/openid-default-authentication.png)

## Disabling OpenID Connect Settings

When OpenID Connect is set as default authentication and try to disable the [OpenID Connect settings](/embedded-bi/site-administration/sso/openid-support/#steps-to-configure-openid-in-bold-bi) to display the following pop-up. Proceeding by clicking `Yes` will disable the [OpenID Connect default authentication](/embedded-bi/site-administration/sso/openid-support/#set-openid-connect-as-default-authentication).

![Disable Default Authentication](/static/assets/embedded/site-administration/images/disable-default-authentication.png)

<!---
## Bypassing OpenID Connect Authentication

Use the following custom login URL to login as normal user that is not from OAuth, when [OpenID Connect default authentication](/embedded-bi/site-administration/sso/openid-support/#set-openid-connect-as-default-authentication) is enabled.

>{Bold server URL}/bi/site/{tenant-name}/login?use_default_authentication=false
-->