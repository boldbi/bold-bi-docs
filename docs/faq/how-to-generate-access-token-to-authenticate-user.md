---
layout: post
title: How to generate access token to authenticate users | Bold BI Docs
description: Learn how to generate access token to authenticate users using password authentication and embed secret authentication in Bold BI embedded application.
platform: bold-bi
documentation: ug
---
# Generate access token based on user type
When you sign in to the Bold BI Embed, an access token is provided that should be attached to the request header(Authorization) for all subsequent API calls to authenticate the requests. Generate an access token based on the user type. Use <b>password authentication</b> for local account users and <b>embed secret authentication</b> for both local account users and third party login users.

## When and How to generate access token using password authentication
Use password authentication to generate an access token when the user password is stored in the Bold BI Embed Application. The password will be stored in the Bold BI Embed application for <b>locally added users</b> who are created with a password in the Bold BI Embed application and <b>users imported from CSV and Database</b>.

> **NOTE:** You cannot use password authentication for the users from Azure AD, Windows AD, OAuth 2.0, OpenID Connect, and JWT whose password is not maintained in the Bold BI Embed application.

Generate an access token with password authentication using the `username`, `password`, and `grant_type`.

![Token Generation Body Password Auth](/static/assets/faq/images/access-token-body-pwd.png)

Please refer to this [link](https://help.boldbi.com/embedded-bi/rest-api-reference/v4.0/api-reference/#tag/Password-Authentication) for detailed information on how to generate an access token for Rest API using password authentication.


## When and How to generate access token using embed secret authentication
Use an embed secret authentication to generate an access token for <b>all users of the Bold BI Embed application</b>.

> **NOTE:** The embed secret authentication is particularly used for the users from Azure AD, Windows AD, OAuth 2.0, OpenID Connect, and JWT whose password is not maintained in the Bold BI Embed application.

Generate an access token with an embed secret authentication using the `username`, `embed_secret`, and `grant_type`.

![Token Generation Body Embed Auth](/static/assets/faq/images/access-token-body-embed.png)

Get the embed secret key from the embed settings page of the Bold BI Embed application. Please refer to this [link](/site-administration/embed-settings/#get-embed-secret-code) to know where to get an embed secret key.

Please refer to this [link](https://help.boldbi.com/embedded-bi/rest-api-reference/v4.0/api-reference/#tag/Embed-Secret-Authentication) for detailed information on how to generate an access token for Rest API using the embed secret authentication.
