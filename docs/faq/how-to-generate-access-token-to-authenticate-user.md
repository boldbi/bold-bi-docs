---
layout: post
title: How to generate access token to authenticate users | Bold BI Docs
description: Learn how to generate access token to authenticate users using password authentication and embed secret authentication in Bold BI embedded application.
platform: bold-bi
documentation: ug
---
# Generate access token based on user type
When you sign in to Bold BI Embed, an access token is provided that should be attached to the request header (Authorization) for all subsequent API calls to authenticate the requests. Generate an access token based on the user type. Use **password authentication** for local account users and **embed secret authentication** for both local account users and third-party login users.

## When and How to generate access token using password authentication
Use password authentication to generate an access token when the user's password is stored in the Bold BI Embed Application. The password will be stored in the Bold BI Embed application for **locally added users** who are created with a password in the Bold BI Embed application and for **users imported from CSV and Database**.

> **NOTE:** You cannot use password authentication for users from Azure AD, Windows AD, OAuth 2.0, OpenID Connect, and JWT if their passwords are not maintained in the Bold BI Embed application.

Generate an access token with password authentication by using the `username`, `password`, and `grant_type`.

![Token Generation Body Password Auth](/static/assets/faq/images/access-token-body-pwd.png)

Please refer to this [link](/server-api-reference/v4.0/api-reference/#tag/Password-Authentication) for detailed information on how to generate an access token for a Rest API using password authentication.


## When and How to generate access token using embed secret authentication
Utilize embedded secret authentication to create an access token for **all users of the Bold BI Embed application**.

> **NOTE:** The embedded secret authentication is particularly used for users from Azure AD, Windows AD, OAuth 2.0, OpenID Connect, and JWT whose password is not stored in the Bold BI Embed application.

Generate an access token with an embedded secret authentication using the `username`, `embed_secret`, and `grant_type`.

![Token Generation Body Embed Auth](/static/assets/faq/images/access-token-body-embed.png)

Please obtain the embed secret key from the embed settings page of the Bold BI Embed application. Refer to this [link](/site-administration/embed-settings/#get-embed-secret-code) to learn where to find the embed secret key.

Please refer to this [link](/server-api-reference/v4.0/api-reference/#tag/Embed-Secret-Authentication) for detailed information on how to generate an access token for a Rest API using the embed secret authentication.
