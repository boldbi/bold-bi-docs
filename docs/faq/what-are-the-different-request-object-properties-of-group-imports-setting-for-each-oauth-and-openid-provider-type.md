---
layout: post
title: OAuth & OpenID Group Import Properties - Embedded BI | Bold BI
description: Learn about the distinct group import properties needed to set up group import configurations in the REST API for providers such as Auth0, Okta, OneLogin, and Cognito AWS.
platform: bold-bi
documentation: ug
---

# Group Import 

You can configure the OAuth 2.0 and OpenID settings using the REST API. While configuring OAuth 2.0 and OpenID settings, you can also configure the group import settings to import the OAuth and OpenID groups. Please refer to this document to learn more about how to configure [OAuth 2.0](/security-configuration/single-sign-on/oauth-2.0-support/) or [OpenID](/security-configuration/single-sign-on/openid-support/) settings using the REST API.

The group import has two properties:

1. <b>ProviderType</b> – This property specifies the provider type to import the groups. The possible values for this property are:
   `CognitoAWS, Auth0, Okta, and OneLogin`
 
2. <b>Setting</b> – The properties of this object will vary depending on the type of provider mentioned above. Please refer to the following information to know the specific setting properties for each provider type.
   
## Cognito AWS

Configure the provider type as `CognitoAWS` and the `Setting` object with the following properties to import groups from Cognito AWS. This provider type is applicable only for OAuth.

<table>
<td><b>UserPoolId</b></td>
<td> The User Pool ID is a unique identifier for the user pool you created in Amazon Cognito. You can use this User Pool ID to authenticate users in your app.</td>
</tr>
<tr>
<td><b>AWSAccessKeyId</b></td>
<td> Specifies an AWS access key associated with an IAM user or role.</td>
</tr>
<tr>
<td><b>AWSAccessKeySecret</b></td>
<td>AWS secret key is like private key or password.</td>
</tr>
<tr>
<td><b>Region</b></td>
<td>In AWS Cognito, "Region" sets the deployment geography for data compliance and optimized performance. For group import in OAuth providers, it ensures efficient and compliant management within a specific geographic area.</td>
</tr>
</table>

The final Group Import Object for Cognito AWS will look as follows.
```js
{
  "ProviderType": "CognitoAWS",
  "Setting": {
    "UserPoolId": "us-east-2_BNvufwedvc",
    "AwsAccessKeyId": "AKIAZGJY3P2I7464523OP",
    "AwsAccessKeySecret": "phdXyrYJdsWvhqp+idp7QsTlwerwetwwbol45o",
    "Region": "usi-north"
  }
}
```
## Auth0

Configure the provider type as `Auth0` and the `Setting` object with the following properties to import groups from Auth0. This provider type is applicable for both OAuth and OpenID.

<table>
<tr>
<td><b>Audience</b></td>
<td>The audience (presented as the aud claim in the access token) specifies and defines the intended consumer of the token.</td>
</tr>
<tr>
<td><b>ExtensionURl</b></td>
<td>Extension URL of Auth0 to import groups.</td>
</tr>
</table>

The final Group Import Object for Auth0 will look as follows.
```js
{
  "ProviderType": "Okta",
  "Setting": {
    "ApiToken": "00YIf3KCR35F79IxEDpKasdfZgzLoCvKwIO2swe7"
  }
}
```
## Okta

Configure the provider type as `Okta` and the `Setting` object with the following properties to import groups from Okta. This provider type is applicable for OAuth and OpenID.

<table>
<tr>
<td><b>APIToken</b></td>
<td>The API token you generated in your Okta app allows you to authenticate requests to the Okta API.
</td>
</tr>
</table>

The final Group Import Object for Okta will look as follows.
```js
{
  "ProviderType": "Okta",
  "Setting": {
    "ApiToken": "00YIf3KCR35F79IxEDpKasdfZgzLoCvKwIO2swe7"
  }
}
```

## OneLogin

Configure the provider type as `OneLogin` and the `Setting` object with the following properties to import groups from OneLogin. This provider type is applicable for both OAuth and OpenID.

<table>
<tr>
<td><b>APIClientID</b></td>
<td> Specifies the OneLogin Client ID is needed for Token Endpoint Authentication.</td>
</tr>
<tr>
<td><b>APIClientSecret</b></td>
<td>Specified OneLogin Client Secret is needed for Token Endpoint Authentication.</td>
</tr>
<tr>
<td><b>Region</b></td>
<td>Regions, which allows administrators to specify the geographic regions where users can log in from.</td>
</tr>
</table>

The final Group Import Object for OneLogin will look as follows.
```js
{
  "ProviderType": "OneLogin",
  "Setting": {
    "ApiClientId": "6342c4d9381b44sdfas165fcb274e9d6748dsfadfba63acfb22b43d9ff81",
    "ApiClientSecret": "f73csdfa67adfgsdfertrhbfgj23e0fa8b2c5c150883511c422813e",
    "Region": "us"
  }
}
```