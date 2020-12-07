---
layout: post
title: Single Sign-On with OAuth 2.0 Identities | Bold BI Embedded
description: Learn how to configure Bold BI Embedded with OAuth 2.0 identity provider for Single Sign-on authentication using OAuth 2.0.
platform: bold-bi
documentation: ug
---

# OAuth 2.0 support in Bold BI application 

The Bold BI application can be configured to support OAuth 2.0 for Single Sign-On (SSO), so that the users can log in directly to Bold BI application after authenticating using the OAuth 2.0.

## Prerequisites

1. An account with an OAuth 2.0 provider.

2. Register the Bold BI application in the OAuth 2.0 provider.

## Steps to configure OAuth 2.0 in Bold BI

1. Login to the Bold BI with the admin credential.

2. Click `Settings` in the left side menu.

    ![Settings](/static/assets/embedded/site-administration/oauth-support/images/settings.png)

3. Click `Authentication` and then `OAuth 2.0`

    ![Authentication settings](/static/assets/embedded/site-administration/oauth-support/images/authentication-settings.png)

4. Provide the following details in the `OAuth 2.0` settings of Bold BI application.

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
    <td>Email</td>
    <td>This must be the email of an admin account of the providers.</td>
    </tr>

    </table>

    ![OAuth settings](/static/assets/embedded/site-administration/oauth-support/images/OAuth-settings.png)

If we need to import the OAuth 2.0 groups, we have to configure the group details while saving the OAuth authentication settings.

  ![OAuth Group setting](/static/assets/embedded/site-administration/oauth-support/images/OAuth-group-settings.png)

The previous mentioned similar steps are applicable to configure the OAuth 2.0 support in User Management Server by logging into the URL `{Bold BI URL}/ums/administration/saml-settings` with admin credential.

The following are the list of few OAuth 2.0 providers and that explains how to connect with the Bold BI application. 

* [Amazon Cognito](/embedded-bi/site-administration/sso/oauth-2.0-support/amazon-cognito/)
* [Auth0](/embedded-bi/site-administration/sso/oauth-2.0-support/auth0/)
* [Okta](/embedded-bi/site-administration/sso/oauth-2.0-support/okta/)
* [OneLogin](/embedded-bi/site-administration/sso/oauth-2.0-support/onelogin/)

The OAuth 2.0 support is provided in both the Bold BI sites and User Management Server. This support can be handled for each sites individually in the settings page by disabling the option as in the following screenshot.

![Enable OAuth support](/static/assets/embedded/site-administration/oauth-support/images/EnableOAuth.png)
