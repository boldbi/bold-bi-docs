---
layout: post
title: Default Authentication Option in User Management Server | Bold BI
description: Learn default authentication functionality and how to configure the default authentication in User Management Server to enable or disable it.
platform: bold-bi
documentation: ug
---

# Default Authentication option in User Management Server 

This topic explains how to enable or disable default authentication in User Management Server. 

This feature allows you to configure any third-party identity provider as your default authentication provider. Once default authentication is configured, the Bold BI application will automatically redirect to the corresponding authentication provider's login page instead of the Bold BI's login page.

You must configure any provider and enable one of the following identity providers to configure default authentication. Otherwise, you will be seeing the following options.

![No configuration](/static/assets/multi-tenancy/images/no-configuration.png) 

You can select any of the following provider as the default authentication provider: 

[Azure Active Directory](/security-configuration/single-sign-on/azure-active-directory/)

[OAuth 2.0 Support](/multi-tenancy/site-administration/authentication/oauth-2.0-support/)

[OpenID Support](/multi-tenancy/site-administration/authentication/openid-settings/)

[JWT SSO](/multi-tenancy/site-administration/authentication/json-web-token/)

[Azure Active Directory B2C](/multi-tenancy/site-administration/authentication/azure-b2c-settings/)

## Enable Default Authentication 

When you enable the default authentication with any provider and then try to log in to the Bold BI application, it will automatically redirect to that provider.

In settings page, click `Authentication` tab and select `General`.

Check the **Enable Default Authentication** option and select any provider in default authentication. 

![Disable default authentication](/static/assets/multi-tenancy/images/enable-default-authentication.png) 

## Disable Default Authentication 

When you disable the default authentication, then it directs you to the normal login page. 

Unchecking the **Enable Default Authentication** option and then clicking Save will disable the [OpenID Connect default authentication](/multi-tenancy/site-administration/authentication/openid-settings/#set-openid-connect-as-default-authentication). 

![Disable default authentication](/static/assets/multi-tenancy/images/disable-default-authentication.png) 

> **NOTE:** If you want to skip default authentication after setting it, then use '`use_default_authentication=false`' in the login URL. (ex: https://testdomain.com/login?use&#95;default&#95;authentication=false).

