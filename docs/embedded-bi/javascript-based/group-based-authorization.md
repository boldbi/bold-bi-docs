---
layout: post
title:  Group Based Authorization for OAuth 2.0 and OpenID | Bold BI
description: Learn how to embed Bold BI with group-based authorization for OAuth 2.0 and OpenID identity providers.
platform: bold-bi
documentation: ug
---

# Overview
Bold BI embedding supports group-based authorization for OAuth 2.0 and OpenID providers. Using this support, you can configure and import your OAuth or OpenID groups into Bold BI server without users of the group. But every user from the group can access the dashboard from Bold BI.  

## Why group-based authorization
Group-based authorization is most helpful, who feels and need not import and maintain their users information into other application due to security and redundancy.  

While importing the group, users of that group has not imported into Bold BI server. Based on the group permission, users of group can access and embed the dashboards of Bold BI. As always, you can maintain your users in your provider and getting secured.   

## How to embed with group-based authorization.  
The best way to get started would be to read the following section of the documentation first, which gives enough information that you need to know before stepping into Bold BI embedding with group-based authorization.  
* [Getting Started](/embedded-bi/javascript-based/getting-started/)
* [Authorization Server](/embedded-bi/javascript-based/authorize-server/)

Let us see the configuring settings for OAuth 2.0 and OpenID import, importing the group and providing access to that group.

1. For OAuth 2.0 connect support, you would need to configure the OAuth 2.0 in Bold BI server, follow these steps in the link.

    The following are the list of few OAuth 2.0 providers and that explains how to connect with the Bold BI application.

    * [Amazon Cognito](/embedded-bi/site-administration/sso/oauth-2.0-support/amazon-cognito/)
    * [Auth0](/embedded-bi/site-administration/sso/oauth-2.0-support/auth0/)
    * [Okta](/embedded-bi/site-administration/sso/oauth-2.0-support/okta/)
    * [OneLogin](/embedded-bi/site-administration/sso/oauth-2.0-support/onelogin/)

2. For OpenID connect support, you would need to configure the OpenID in Bold BI server, follow these steps in the link.

   The following are the list of few OpenID connect providers and that explains how to connect with the Bold BI application.
    * [Auth0](/embedded-bi/site-administration/sso/openid-support/auth0/)
    * [Okta](/embedded-bi/site-administration/sso/openid-support/okta/)
    * [OneLogin](/embedded-bi/site-administration/sso/openid-support/onelogin/)

3. After configuring you providers, you need to import you group into Bold BI server, follow these respective link to import the groups.
    * [Import OAuth 2.0 Group](/embedded-bi/managing-resources/manage-groups/import-oauth-groups/)
    * [Import OpenID Connect Group](/embedded-bi/managing-resources/manage-groups/import-openid-groups/)

4. Then, you need to provide access to your imported group. Follow these steps in the link, which permission helps to your users to access and embed the dashboard.  

5. Now, you need to configure your authorization server to use the group-based authorization by adding the marked parameters in the embedQuery. 

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
        <td align="left">embed_auth_provider</td>
        <td align="left">This parameter value indicates, which auth provider you are using in embedding.
           <br>Example: `embed_auth_provider=GlobalOAuth`<br>
           <br>Following the values for different auth providers.
           <br>TenantOAuth – Set this, if you have configured OAuth in tenant level
           <br>TenantOpenID – Set this, if you have configured OpenID in tenant level
           <br>GlobalOAuth – Set this, if you have configured OAuth in global level
           <br>GlobalOpenID – Set this, if you have configured OpenID in global level
           <br>WindowsAD – Set this, if you have configured WindowsAD
           <br>AzureAD – Set this, if you have configured AzureAD
           <br>None – Set this, if you haven’t using any auth providers
        </td>
    </tr>
    <tr>
        <td align="left">embed_user_id</td>
        <td align="left">Need to set your user id, which used in your provider for this user</td>
    </tr>
    <tr>
        <td align="left">embed_user_email</td>
        <td align="left">Need to set your user mail, which used in your provider for this user</td>
    </tr>
  </tbody>
</table>

> **NOTE:**  The previous UserID and UserEmail would be act as password for user of each provider in Bold BI. 

**Example:** `&embed_group_access=true&embed_auth_provider=GlobalOAuth&embed_user_id=1212121212&embed_user_email=user@domain.com`   

![Group Based Authorization](/static/assets/embedded/javascript/images/group-based-auth.png)  

> **NOTE:**  Use your UserID and UserEmail as followed in authorization server.

<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <td align="left">Amazon Cognito</td>
        <td align="left">Set the user email as embed_user_id and embed_user_email</td>
    </tr>
    <tr>
        <td align="left">Auth0</td>
        <td align="left" rowspan="3"><br>- Set the user id as embed_user_id <br>- Set the user email as embed_user_email</td>
    </tr>
    <tr>
        <td align="left">Okta</td>
    </tr>
    <tr>
        <td align="left">OneLogin</td>
    </tr>
  </tbody>
</table>


### Sample links
The sample applications for ASP.NET Core, ASP.NET MVC, and Angular. You can get download from the following links and update your group access, auth provider, user id, and user email in the authorization server code block.
* [ASP.NET Core](/embedded-bi/javascript-based/samples/asp-net-core/)
* [ASP.NET MVC](/embedded-bi/javascript-based/samples/asp-net-mvc/)
* [Angular with ASP.NET Core](/embedded-bi/javascript-based/samples/angular/)
