---
layout: post
title: Single Sign-On with OAuth 2.0 Identities | Bold BI Embedded
description: Enable seamless and straightforward authentication within the Bold BI application by configuring OAuth 2.0 through both the intuitive application user interface (UI) and the powerful REST API.
platform: bold-bi
documentation: ug

---

# OAuth 2.0 support in Bold BI application 

The Bold BI application can be configured to support OAuth 2.0 for Single Sign-On (SSO). This allows users to log in directly to the Bold BI application after authenticating using OAuth 2.0.

## Prerequisites

1. A user account with an OAuth 2.0 provider.

2. Register the Bold BI application with the OAuth 2.0 provider.

## Steps to configure OAuth 2.0 in Bold BI

1. Please login to Bold BI using the admin credentials.

2. Click on `Settings` in the left side menu.

    ![Settings](/static/assets/site-administration/oauth-support/images/settings.png#width=65%)

3. Click `Authentication` and then `OAuth 2.0`

    ![Authentication settings](/static/assets/site-administration/oauth-support/images/authentication-settings.png#width=65%)

4. Please provide the following details in the `OAuth 2.0` settings of the Bold BI application.

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
    <td>It is the endpoint in the provider used to get the user details.</td>
    </tr>

    <tr>
    <td>User Information Endpoint</td>
    <td>It represents the request type to access the user information endpoint.</td>
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
    <td>Scopes</td>
    <td>It is comma separated lists of identifiers that specifies the access privileges that are being requested from the provider.</td>
    </tr>

    <tr>
    <td>Logout Endpoint</td>
    <td>It is an end point that logout the thrid-party provider.</td>
    
    </tr>

    <tr>
    <td>Email</td>
    <td>This must be the field name in which email will be present when deserializing the token.</td>
    </tr>

    </table>

    ![OAuth settings](/static/assets/site-administration/oauth-support/images/OAuth-settings.png#width=50%)

    ![OAuth user data](/static/assets/site-administration/oauth-support/images/OAuth-user-data.png)
    
If we need to import the OAuth 2.0 groups, we have to configure the group details when saving the OAuth authentication settings.

  ![OAuth Group setting](/static/assets/site-administration/oauth-support/images/OAuth-group-settings.png)

The previously mentioned similar steps are applicable to configure OAuth 2.0 support in the User Management Server by logging into the URL `{Bold BI URL}/ums/administration/sso?view=oauth-settings` with admin credentials.

The following is a list of a few OAuth 2.0 providers and an explanation of how to connect with the Bold BI application. 

* [Amazon Cognito](/security-configuration/single-sign-on/oauth-2.0-support/amazon-cognito/)
* [Auth0](/security-configuration/single-sign-on/oauth-2.0-support/auth0/)
* [Okta](/security-configuration/single-sign-on/oauth-2.0-support/okta/)
* [OneLogin](/security-configuration/single-sign-on/oauth-2.0-support/onelogin/)

OAuth 2.0 support is provided in both the Bold BI sites and User Management Server. This support can be handled for each site individually on the settings page by disabling the option, as shown in the following screenshot.

![Enable OAuth support](/static/assets/site-administration/oauth-support/images/EnableOAuth.png)

## Set OAuth 2.0 as Default Authentication
To set OAuth 2.0 as the default authentication, enable and save the [OAuth 2.0 settings](/security-configuration/single-sign-on/oauth-2.0-support/#steps-to-configure-oauth-2.0-in-bold-bi) Follow these steps:

1. On the settings page, click the **Authentication** tab and select **General**.

2. Enable the **Enable Default Authentication** option and select **OAuth 2.0** as the default authentication provider, as shown in the following screenshot.

    ![Enable OAuth Default Authentication](/static/assets/site-administration/oauth-support/images/oauth-default-authentication.png)

## Disabling OAuth 2.0 Settings

When OAuth 2.0 is set as the default authentication, trying to disable the [OAuth 2.0 settings](/security-configuration/single-sign-on/oauth-2.0-support/#steps-to-configure-oauth-2.0-in-bold-bi) will display the following pop-up. Proceeding by clicking `Yes` will disable the [OAuth 2.0 default authentication](/security-configuration/single-sign-on/oauth-2.0-support/#set-oauth-2.0-as-default-authentication).

![Disable Default Authentication](/static/assets/site-administration/images/disable-default-authentication.png#width=60%)

## Configure OAuth 2.0 authentication using REST API

Configure the OAuth 2.0 settings using the REST API by referencing the [REST API](/server-api-reference/v5.0/api-reference/#operation/Administration_UpdateOAuthSettings) document. 
 
While configuring OAuth settings, you can also configure the group import settings to import the OAuth groups. You can include the group settings details based on the provider type to configure the group import settings. Please refer to this [FAQ](/faq/what-are-the-different-request-object-properties-of-group-imports-setting-for-each-oauth-and-openid-provider-type/) document to learn about the different group import settings details based on the provider.