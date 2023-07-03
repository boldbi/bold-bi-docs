---
layout: post
title: Working with Bold BI REST APIs - Embedded | Bold BI Docs
description: Work with Bold BI Embedded REST APIs through the interactive API documentation. Just get the access token to authenticate the API endpoint and get the response.
canonical: "/server-api-reference/interact-with-rest-api/"
platform: bold-bi
documentation: ug
---

# Interact with our REST API

This section explains you how to play with our interactive API documentation.

You need to get the access token to authenticate with the API endpoints to get the responses.

## Get Access Token
Each user has their own unique token to authenticate the requests which should be added in header of the request.

To get the `User Token` follow the below steps:

1. Navigate to the respective interactive Rest API documentation link.
     * [v1.0](/server-api-reference/v1.0/try-it-now/)
     * [v2.0](/server-api-reference/v2.0/try-it-now/)
     * [v3.0](/server-api-reference/v3.0/try-it-now/)
     * [v4.0](/server-api-reference/v4.0/try-it-now/)
2. Expand the `Authentication` and click `Try it out`.
![Authentication](/static/assets/rest-api-reference/images/authentication.png)
3. We already have hosted the Bold BI Server for public demo with [this](https://onpremise-demo.boldbi.com/) domain. Using the public demo, you have to get the access token with the below sample credential.

     **Username** - [`guest@boldbi.com`](guest@boldbi.com)

     **grant_type** - `password`

     **password** - `Demo759!`
     
![Demo credential](/static/assets/rest-api-reference/images/demo-credential.png)
4. Click `Execute` and you will get the response as like below. Get the `access_token` from the Response body.
![Response](/static/assets/rest-api-reference/images/demo-response.png)
5. Now you have to add the access_token for further API calls as Authorization header.
6. Click the `Authorize` button which is placed in top right corner of the page.
![Authorize button](/static/assets/rest-api-reference/images/authorize-button.png)
7. A dialog will open and enter the access token in the `Value` box with this format, **'Bearer' + access_token** and click `Authorize` button.
![Authorize dialog](/static/assets/rest-api-reference/images/authorization-dialog.png)
8. Now, you can interact with the other REST APIs with the needed respective parameters which mentioned in each API.

> **NOTE:**  In this interactive document, API Responses and its Code descriptions are also mentioned.
