---
layout: post
title: Single Sign-On with Custom JSON Web Token | Bold BI
description: Learn how to configure the settings and authenticate users with SSO using custom JSON Web Token with Bold BI application.
platform: bold-bi
documentation: ug
---

# How to set up JWT for SSO authentication in Bold BI

This section explains how to perform Single Sign-On (SSO) for users with the Custom JSON Web Token (JWT) in the Bold BI application.

## Steps to configure JWT in Bold BI

1. Login with this URL `{Bold BI URL}/ums/administration` using the admin credentials.

2. Click on `Authentication` and then `JWT`.

    ![JWT Configuration](/static/assets/multi-tenancy/images/jwt-configuration.png)

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

    ![Copy](/static/assets/multi-tenancy/images/jwt-signingkey-options.png)

7. You can enable JWT token encryption by selecting `Enable Encryption`. Once activated, a public key is generated, which is used to encrypt the JWT token. This enhances security by ensuring that token payloads remain confidential and protected from unauthorized access. By default, encryption remains disabled

    ![Enable Encryption](/static/assets/multi-tenancy/images/enable-jwt-encryption.png)

8. The `JWT Encryption Key` can be copied, viewed, and reset using the following options:

    ![Copy Encryption Key](/static/assets/multi-tenancy/images/jwt-encryption-menu.png)

## How JWT works with Bold BI   

1. Once the JWT settings are configured, go to the Bold BI login page and click on the JWT login option.
    ![JWT Login](/static/assets/multi-tenancy/images/jwt_login_page.png)

2. After that, the application will generate the JSON Web Token for user and it will be submitted via an HTTP Form POST to the Bold BI callback URL https://{Bold BI URL}/sso/jwt/callback. The form POST will include the following parameters:

    * jwt
    * site_identifier
    * redirect_to

3. The Bold BI application will validate the JWT and deserialize the user information from the token.

4. Based on the user information, the Bold BI application will check if the user's email already has access in the Bold BI application. If the user is already registered in Bold BI, they will be authenticated.

5. If the user is not yet registered in the Bold BI server, they will be added as a user and authenticated to access the Bold BI application

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
   <td>No</td>
   <td>This parameter will be used to grant site access for the JWT user. 
   
   If the JWT login accessed from the tenant, Bold BI login URL will redirect to your application with tenant site identifier in URL query string. You can use this identifier in JWT response URL.
   
   Example Url`{Remote login URL}?site_identifier={site identifier}`

   > **NOTE:** Should pass one site identifier. More than one identifier not allowed. 
   </td>
   </tr>

   <tr>
   <td>redirect_to</td>
   <td>No</td>
   <td>If this parameter is included in the JWT response, then the user will be redirected to that page, after the login process completed.</td>
   </tr>
   </table>


## Create JSON Web Token

To create the JWT, use `HMAC-SHA256` as the signing algorithm. 


### What parameters can be passed in the payload of JWT

A JWT should contain the following claims:

   <table>
   <tr>
    <th>Parameter</th>
    <th>Parameter Name</th>
    <th>Value Type</th>
    <th>Required</th>
    <th>Comments</th>
   </tr>

   <tr>
    <td>User Id</td>
   <td>sub</td>
   <td>string</td>
   <td>Yes</td>
   <td>Unique identifier of the user.</td>
   </tr>

   <tr>
   <td>Email</td>
   <td>email</td>
   <td>string</td>
   <td>Yes</td>
   <td>Email address of the user.</td>
   </tr>

   <tr>
   <td>First Name</td>
   <td>first_name</td>
   <td>string</td>
   <td>Yes</td>
   <td>First name of the user.</td>
   </tr>

   <tr>
   <td>Last Name</td>
   <td>last_name</td>
   <td>string</td>
   <td>No</td>
   <td>Surname of the user.</td>
   </tr>

   <tr>
   <td>Phone</td>
   <td>phone</td>
   <td>string</td>
   <td>No</td>
   <td>Phone number of the user.</td>
   </tr>
   </table>


### JSON Web Token sample

Please refer to the following sample for instructions on how to generate the JWT.

```c#
private string GenerateJSONWebToken(UserModel userInfo)    
{    
    var signingKey = "signingkey";// Signing key value will copy from JWT Settings page
    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(signingKey));
    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature, SecurityAlgorithms.Sha256Digest);

    var claims = new[] {
        new Claim("sub", "420c5d51-1754-4a9b-b4b5-d5bfebb21b0f")
        new Claim("email", "john.doe@example.com"),
        new Claim("first_name", "Makila"),
        new Claim("last_name", "S"),
        new Claim("phone", "1234567890")
            };

    var token = new JwtSecurityToken(claims: claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);

    return new JwtSecurityTokenHandler().WriteToken(token);
}   
```
