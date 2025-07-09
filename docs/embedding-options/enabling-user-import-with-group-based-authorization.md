---
layout: post
title: Enabling User Import with Group-Based Authorization | Bold BI
description: Learn how to enable automatic user import when embedding Bold BI dashboards with group-based authorization.
platform: bold-bi
documentation: ug
---

# Overview

This article explains how to automatically import users from external identity providers when using [Group-Based Authorization Overview](/embedding-options/group-based-authorization/) approach through SDK embedding. It help you to monitor which users are embedding and accessing the dashboards. 

To enable automatic user import through SDK based embedding, you must configure your identity provider such as Amazon Cognito or Azure Active Directory (Azure AD) in the Bold BI server.

## Identity Provider Configuration

Before enabling user import, follow the instructions specific to your identity provider:

### Azure Active Directory (Azure AD)

To configure Azure AD for user and group import into Bold BI:
- [Configure Azure AD in Bold BI](/site-administration/user-directory-settings/azure-active-directory/#configure-azure-active-directory-details-in-bold-bi-to-import-users-and-groups)

### Amazon Cognito

To configure Amazon Cognito via OAuth 2.0:
- [Configure Amazon Cognito in Bold BI](/security-configuration/single-sign-on/oauth-2.0-support/amazon-cognito/)

Additionally, to understand the overall embedding process with group-based authorization, refer to the following documentation:
- [Getting Started with Embedding](/getting-started/embedding-in-your-application/)
- [Group-Based Authorization Overview](/embedding-options/group-based-authorization/)

## Enabling User Import

When using group-based authorization in embedding, you can enable **automatic user import** by setting the `embed_user_import` parameter to `true` in your embed configuration.

### How to Set the Parameter

Include the `embed_user_import` parameter in your embedding authorization action method. This parameter allows Bold BI to automatically import users from the identity provider's group when they access a dashboard for the first time.

By default, this parameter is set to `false`. It is optional, but required if you want auto-import functionality.

To configure your authorization server for user import via group-based authorization, include the parameters in the `embedQuery`.

<meta charset="utf-8"/>
    <table>
    <thead>
    <tr>
    <th scope="col">Parameter</th>
    <th scope="col">Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td align="left">embed_group_access</td>
    <td align="left">This parameter needs to set as true to enable the group-based authorization.</td>
    </tr>
    <tr>
    <td align="left" rowspan="4">embed_auth_provider</td>
    <td align="left">This parameter value indicates which auth provider you are using in embedding.
      <br>Example: <code>embed_auth_provider=GlobalOAuth</code>
      <br><br>Following are the values for different auth providers:
    </td>
    </tr>
    <tr>
    <td align="left">AzureAD – Set this if you have configured AzureAD</td>
    </tr>
    <tr>
    <td align="left">TenantOAuth – Set this if you have configured OAuth at the tenant level</td>
    </tr>
    <tr>
    <td align="left">GlobalOAuth – Set this if you have configured OAuth at the global level</td>
    </tr>
    <tr>
    <td align="left">embed_user_id</td>
    <td align="left">Need to set your user id, which used in your provider for this user</td>
    </tr>
    <tr>
    <td align="left">embed_user_email</td>
    <td align="left">Need to set your user mail, which used in your provider for this user</td>
    </tr>
    <tr>
    <td align="left">embed_user_import</td>
    <td align="left">The default value is false, and the parameter is optional. This parameter needs to be set as true to enable the auto import of the user into Bold BI from an external group.</td>
    </tr>
    </tbody>
    </table>

**Example:** `&embed_group_access=true&embed_auth_provider=GlobalOAuth&embed_user_id=1212121212&embed_user_email=user@domain.com&embed_user_import=true`

![User Import](/static/assets/javascript/images/User_import_group-based-auth.png)

> **NOTE:** Please use your UserID and UserEmail as follows in the authorization server.

  <meta charset="utf-8"/>
  <table>
  <tbody>
  <tr>
  <td align="left">Amazon Cognito</td>
  <td align="left">Set the user email as embed_user_id and embed_user_email</td>
  </tr>
  <tr>
  <td align="left">Auth0</td>
  <td align="left" >- Set the user id as embed_user_id <br>- Set the user email as embed_user_email</td>
  </tr>
  </tbody>
  </table>