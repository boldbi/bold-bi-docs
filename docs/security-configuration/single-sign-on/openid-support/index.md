---
layout: post
title: Single Sign-On with OpenID Connect | Bold BI Embedded
description: Enable seamless and straightforward authentication within the Bold BI application by configuring OpenID through both the intuitive application user interface (UI) and the powerful REST API.
platform: bold-bi
documentation: ug

---

# OpenID Connect support

The Bold BI application can be configured to support OpenID Connect for Single Sign-On (SSO), allowing users to log in directly to the Bold BI application after authenticating using OpenID Connect.

## Configure OpenID Connect provider

1. A user account with an OpenID provider.

2. Register the Bold BI application with the OpenID Connect provider.

## Steps to configure OpenID in Bold BI

1. Please log in to Bold BI using an admin credential.

2. Click on `Settings` in the left-side menu.

    ![Settings](/static/assets/site-administration/openid-support/images/settings.png#width=65%)

3. Click on `Authentication` and then select `OpenID Connect.`

    ![Authentication settings](/static/assets/site-administration/openid-support/images/authentication-settings.png)

4. Please provide the following details on the `OpenID Connect` settings page of the Bold BI application.

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

    ![OpenId settings](/static/assets/site-administration/openid-support/images/openid-settings.png#width=55%)

If we need to import the OpenID Connect groups, we must configure the group details when saving the OpenID authentication settings.

  ![OpenId Group setting](/static/assets/site-administration/openid-support/images/OpenId-group-settings.png)

The previously mentioned similar steps are applicable to configure OpenID support in the User Management Server by logging into the URL `{Bold BI URL}/ums/administration/sso?view=openid-settings` with admin credentials.

Here is a list of a few OpenID Connect providers, along with an explanation of how to connect with the Bold BI application. 

* [Auth0](/security-configuration/single-sign-on/openid-support/auth0/)
* [Okta](/security-configuration/single-sign-on/openid-support/okta/)
* [OneLogin](/security-configuration/single-sign-on/openid-support/onelogin/)

OpenID Connect support is provided in both the Bold BI sites and User Management Server. This support can be managed individually for each site on the settings page by disabling the option, as shown in the following screenshot.

![Enable OpenID Connect support](/static/assets/site-administration/openid-support/images/EnableOpenId.png)

## Set OpenID Connect as Default Authentication

OpenID Connect can be set as the default authentication method [OpenID Connect settings](/security-configuration/single-sign-on/openid-support/#steps-to-configure-openid-in-bold-bi) are enabled and saved. Follow these steps:

1. On the settings page, click on the Authentication tab and then select General.

2. Please enable the **Enable Default Authentication** option and select **OpenID Connect** as the default authentication provider, as shown in the following screenshot.

    ![Enable OpenID Default Authentication](/static/assets/site-administration/openid-support/images/openid-default-authentication.png)

## Disabling OpenID Connect Settings

When OpenID Connect is set as the default authentication and you try to disable the [OpenID Connect settings](/security-configuration/single-sign-on/openid-support/#steps-to-configure-openid-in-bold-bi) , the following pop-up will be displayed. Clicking `Yes` will disable the  [OpenID Connect default authentication](/security-configuration/single-sign-on/openid-support/#set-openid-connect-as-default-authentication).

![Disable Default Authentication](/static/assets/site-administration/images/disable-default-authentication.png#width=60%)

## Configure OpenID authentication using REST API

To configure the OpenID settings using the REST API, refer to this [REST API](/server-api-reference/v5.0/api-reference/#operation/Administration_UpdateOpenIDSettings) document.  
 
In addition to configuring the OpenID settings, you can also configure the group import settings to import the OpenID groups. Include the group settings details based on the provider type to configure the group import settings. For more information on the different group import settings details based on the provider, please refer to this [FAQ](/faq/what-are-the-different-request-object-properties-of-group-imports-setting-for-each-oauth-and-openid-provider-type/) document.