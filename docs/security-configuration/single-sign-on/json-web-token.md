---
layout: post
title: Single Sign-On with Custom JWT Embedded BI | Bold BI Doc
description: Learn to configure & authenticate users with SSO using custom JSON Web Tokens at the site level in Bold BI Embedded with step-by-step settings & implementation.
platform: bold-bi
documentation: ug
---

# How to set up JWT for SSO authentication in Bold BI site

This section provides a step-by-step guide to configuring Single Sign-On (SSO) for users at the site level in the Bold BI application using Custom JSON Web Tokens (JWT).

## Steps to configure JWT in Bold BI

1. Login with this URL `{domain}/bi/site/{site_identifier}/administration` using the admin credentials.

2. Click on `Authentication` and then `JWT`.

    ![JWT Configuration](/static/assets/site-administration/images/jwt_authentication_tab.png)

3. Enable the JWT settings.

4. Provide the following details in the `JWT` settings.

    <table>

    <tr>
    <td>Name</td>
    <td>It represents the name of the JWT provider to be displayed in the login page.</td>
    </tr>

    <tr>
    <td>Provider Logo</td>
    <td>It represents the logo of the JWT provider to be displayed in the login page.</td>
    </tr>

    <tr>
    <td>Remote Login URL</td>
    <td>It is the endpoint of the JWT provider to send the authorization request from Bold BI application.</td>
    </tr>

    <tr>
    <td>Remote Logout URL</td>
    <td>It is the endpoint of the JWT provider to send the logout request once user logged out in the Bold BI application.</td>
    </tr>

    </table>

5. After the values are saved, the application will generate a `Signing Key`. This signing key must be used for signing JSON Web Tokens from your application.

6. The `Signing Key` can be copied, viewed, and reset using the following options:

    ![Copy](/static/assets/site-administration/images/copy_edit_regenerate_token.png)

    
7. You can enable JWT token encryption by selecting `Enable Encryption`. Once activated, a public key is generated, which is used to encrypt the JWT token. This enhances security by ensuring that token payloads remain confidential and protected from unauthorized access. By default, encryption remains disabled

    ![Enable Encryption](/static/assets/site-administration/images/enable-jwt-encryption.png)

8. The `JWT Encryption Key` can be copied, viewed, and reset using the following options:

    ![Copy](/static/assets/site-administration/images/jwt-encryption-menu.png)

For more details on how JWT works with Bold BI, [click here](/multi-tenancy/site-administration/authentication/json-web-token/#how-jwt-works-with-bold-bi)

## JWT Callback URL

  The JWT callback URL will validate the JWT response from the configured application.

  After a user successfully logs into your configured application, you can redirect them to the specific URL provided.

 `{Bold BI URL}/sso/jwt/callback?jwt={token}&site_identifier={site identifier}&redirect_to={redirecturl}`

  <table>
    <tr>
    <th>Parameter</th>
    <th>Required</th>
    <th>Comments</th>
  </tr>

   <tr>
   <td>jwt</td>
   <td>Yes</td>
   <td>JSON Web Token will be passed in this parameter. It will contain the JWT Payload</td>
   </tr>

   <tr>
   <td>site_identifier</td>
   <td>Yes</td>
   <td>This parameter will be used to grant site access for the JWT user. 

   If the JWT login accessed from the tenant, Bold BI login URL will redirect to your application with tenant site identifier in URL query string. You can use this identifier in JWT response URL.

   Example Url`{Remote login URL}?site_identifier={site identifier}`

   > **NOTE:** Should pass one site identifier. More than one identifier not allowed. 
   </td>
   </tr>
   <tr>
   <td>redirect_to</td>
   <td>No</td>
   <td>If this parameter is included in the JWT response, then the user will be redirected to that page by validating with the site identifier, after the login process completed.</td>
   </tr>
   </table>

Creating a JSON Web Token (JWT)
To get started with SSO, you need to create a valid JSON Web Token (JWT). Follow the instructions outlined [here](/multi-tenancy/site-administration/authentication/json-web-token/#create-json-web-token) to generate a JWT for your Bold BI application.