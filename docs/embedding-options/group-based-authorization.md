---
layout: post
title:  Group Based Authorization for OAuth 2.0 and OpenID | Bold BI
description: Learn how to embed Bold BI with group-based authorization for OAuth 2.0 and OpenID identity providers.
platform: bold-bi
documentation: ug
---

# Overview
Bold BI embedding supports group-based authorization for OAuth 2.0 and OpenID providers. With this support, you can configure and import your OAuth or OpenID groups into the Bold BI server without importing the users of the group. However, every user from the group can access the Bold BI dashboard.  

## Why group-based authorization
Group based authorization is most helpful for those who do not want to import and manage their users' information in other applications due to security and redundancy concerns. 

When importing a group, the users of that group are not imported into the Bold BI server. Based on the group permissions, users of the group can access and embed the dashboards of Bold BI. You can continue to maintain your users in your provider and keep them secure.    

## How to embed with group-based authorization.  
To get started, it is recommended to first read the following section of the documentation, which provides enough information that you need to know before using Bold BI embedding with group-based authorization. 
* [Getting Started](/getting-started/embedding-in-your-application/)
* [Authorization Server](/security-configuration/authorize-server/)

Let's take a look at the configuration settings for Azure AD, OAuth 2.0 and OpenID import, importing the group, and granting access to that group.

1. To have Azure AD connect support, you would need to configure the Azure AD in Bold BI server. Please follow these steps provided in the link.

    The following link explains how to connect with the Bold BI application.

    * [Azure Active Directory](/site-administration/user-directory-settings/azure-active-directory/#configure-azure-active-directory-details-in-bold-bi-to-import-users-and-groups)

2. To have support for OAuth 2.0 connect, you will need to configure OAuth 2.0 in the Bold BI server. Please follow the steps provided in the link.

    The following is a list of a few OAuth 2.0 providers, and it explains how to connect with the Bold BI application.

    * [Amazon Cognito](/security-configuration/single-sign-on/oauth-2.0-support/amazon-cognito/)
    * [Auth0](/security-configuration/single-sign-on/oauth-2.0-support/auth0/)
    * [Okta](/security-configuration/single-sign-on/oauth-2.0-support/okta/)
    * [OneLogin](/security-configuration/single-sign-on/oauth-2.0-support/onelogin/)

3. For OpenID connect support, you would need to configure the OpenID in Bold BI server, follow these steps in the link.

   The following is a list of a few OAuth 2.0 providers, and it explains how to connect with the Bold BI application.
    * [Auth0](/security-configuration/single-sign-on/openid-support/auth0/)
    * [Okta](/security-configuration/single-sign-on/openid-support/okta/)
    * [OneLogin](/security-configuration/single-sign-on/openid-support/onelogin/)

4. After configuring your providers, you need to import your group into the Bold BI server. Follow these respective links to import the groups.
    * [Import Azure AD Group](/managing-resources/manage-groups/import-azure-active-directory-groups/)
    * [Import OAuth 2.0 Group](/managing-resources/manage-groups/import-oauth-groups/)
    * [Import OpenID Connect Group](/managing-resources/manage-groups/import-openid-groups/)

5. Then, you need to provide access to your imported group. Follow these steps in the link, which will help your users to access and embed the dashboard. 

6. Now, you need to configure your authorization server to use group-based authorization by adding the marked parameters in the embedQuery.

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
    <td align="left" rowspan="6">embed_auth_provider</td>
    <td align="left">This parameter value indicates which auth provider you are using in embedding.
      <br>Example: <code>embed_auth_provider=GlobalOAuth</code>
      <br><br>Following are the values for different auth providers:
    </td>
    </tr>
    <tr>
    <td align="left">AzureAD – Set this if you have configured AzureAD</td>
    </tr>
    <tr>
    <td align="left">TenantOAuth – Set this if you have configured OAuth at the tenant level<br>TenantOpenID – Set this if you have configured OpenID at the tenant level</td>
    </tr>
    <tr>
    <td align="left">GlobalOAuth – Set this if you have configured OAuth at the global level<br>GlobalOpenID – Set this if you have configured OpenID at the global level</td>
    </tr>
    <tr>
    <td align="left">WindowsAD – Set this if you have configured WindowsAD</td>
    </tr>
    <tr>
    <td align="left">None – Set this if you aren’t using any auth providers</td>
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

    > **NOTE:** The previous UserID and UserEmail would act as the password for users of each provider in Bold BI.

    **Example:** 
    For GlobalOAuth:
    `&embed_group_access=true&embed_auth_provider=GlobalOAuth&embed_user_id=1212121212&embed_user_email=user@domain.com`   

    ![Group Based Authorization for GlobalOAuth](/static/assets/javascript/images/group-based-Oauth.png)  
    For GlobalOpenID:
    `&embed_group_access=true&embed_auth_provider=GlobalOpenID&embed_user_id=auth0|5dbc1ac0835a7c0e18724875&embed_user_email=user@domain.com";`

    ![Group Based Authorization for GlobalOpenID](/static/assets/javascript/images/group-based-openID.png)
    For Azure AD:
    
    `&embed_group_access=true&embed_auth_provider=AzureAD&embed_user_id=cda791a1-3dec-4e52-a70c-38323aafe256&embed_user_email=user@domain.com`

    ![Group Based Authorization for Azure AD](/static/assets/javascript/images/group-based-AzureAD.png)

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

### Enabling user import with group-based authorization

User import should be enabled only when you want to import users from external identity provider groups into Bold BI with the same permissions as the group. This feature does not create users in the Bold BI server. Instead, it dynamically import users only when they access an embedded dashboard using group-based authorization.

The main purpose of enabling user import is to allow users within the authorized group to view embedded dashboards with inherited group permissions and to monitor which users are embedding and accessing the dashboards.

For more details, refer to the [Enabling user import with group-based authorization](/embedding-options/enabling-user-import-with-group-based-authorization/)

### Sample links
The sample applications for ASP.NET Core, ASP.NET MVC, and Angular can be downloaded from the following links. Once downloaded, you can update your group access, authentication provider, user id, and user email in the authorization server code block.
* [ASP.NET Core](/embedding-options/embedding-sdk/samples/asp-net-core/)
* [ASP.NET MVC](/embedding-options/embedding-sdk/samples/asp-net-mvc/)
* [Angular with ASP.NET Core](/embedding-options/embedding-sdk/samples/v3.2.16/angular/)