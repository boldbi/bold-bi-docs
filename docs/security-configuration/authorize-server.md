---
layout: post
title:  Authorization in Embed Application | Bold BI Documentation
description: Know about the authorization server in embedding application to authenticate with Bold BI server through sending user email, group details and embed signature.
platform: bold-bi
documentation: ug

---

# What is Authorization Server

Any application that embeds Bold BI dashboard and widget needs to be authenticated with Bold BI server and this authentication flow requires sending the confidential information like user email, group details, and embed signature to the Bold BI server. So, you need to implement this authentication flow in your server application and provide the URL for connecting to your server in Bold BI embed instance.

![AuthorizeServer](/static/assets/javascript/images/authorize-server.png)

> **NOTE:**  Authorization Server is nothing but an endpoint implemented in the embedding application, this will receive the details from embed SDK instance and send this to the Bold BI server to get this validated. This endpoint will take care of authorizing the Bold BI embedding by communicating with Bold BI Server, so we call this as Authorization Server.

## How the Authorization Server works

1. Bold BI embed instance call the authorization end point implemented in Embedding application with details like dashboard id, dashboard path, expiration time, and more. 

2. Authorization Server, which receive details from embed instance will update the secure information like user email, group details, and embed signature. This information will send to the Bold BI server for authorization.

3. Bold BI server will use the user email, dashboard path, and embed signature to validate the following information.
    * Whether dashboard is valid or not.
    * Whether user is valid or not.
    * Whether user has access to that dashboard or not.
    * Whether this application is allowed to embed this dashboard or not.

4. After validating previous details, Bold BI server would send the following response to Authorization Server.  Authorization Server will send the received details back to Bold BI embed instance without any modification.
    * If details are valid, then it will send the access token and other internal embed details
    * If details are invalid, then it will sent the error details.

5. Bold BI embed instance either render the dashboard or show the error message based on the response received from the Authorization Server.

> **NOTE:**  Any application that send the valid embed signature will be accepted as the authorization application to embed.

## Why the user email is needed

1. User email is needed for rendering the dashboard, because Bold BI server will always validate the user and check whether the user has permission for that dashboard.

2. Dashboard can be configured to show the user specific information. Bold BI server would validate the user and render the dashboard data based on logged user. The dashboard data would be different from one user to another.

3. The dashboard collaboration and views are supported only for authorized user. Authorized user only can see the comments, apply filtering, and handling the views in the dashboard without the problem.