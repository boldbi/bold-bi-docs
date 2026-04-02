---
layout: post
title: JavaScript Embedding with Embedded SDK | Bold BI Docs
description: Study the overview of SDK-based embedding with Bold BI Embedded SDK. This embedding reduces the amount of code and effort needed to embed the dashboards.
platform: bold-bi
documentation: ug
---

# Overview of JavaScript-Based Embedding Authentication Methods
Bold BI’s Embedded SDK supports two primary authentication methods for securely embedding dashboards using JavaScript: Embed Secret and API Key. Each method is suited for different use cases based on security, complexity, and application needs.

## Embed Secret Authentication

**What It Is**

Uses a secret key to generate a signature via HMACSHA256, which is validated by an Authorization Server to grant dashboard access. There are two approaches to implement this:

### Approach 1: Token Generation per Rendering

**How It Works:**

- The backend generates a signature using the Embed Secret, `userEmail`, and `embedQueryString`.
- For each dashboard load, the signature is sent to the Bold BI Server’s endpoint to obtain a new access token.
- The token is passed to the client-side SDK via the `authorizationServer` property.

Want to dive deeper? Check out this [link!](/embedding-options/embedding-sdk/authorization-options/authorization-server-url-work-flow/)

### Approach 2: Token Reuse with `embedToken`

**How It Works:**

- The backend generates a token once using the Embed Secret, `userEmail`, and `embedQueryString`.
- The token is stored securely (e.g., in client application).
- It is reused for multiple dashboard renderings via the `embedToken` property, reducing server calls.

Want to dive deeper? Check out this [link!](https://support.boldbi.com/kb/article/20407/embedding-bold-bi-dashboard-in-asp-net-core-applications-with-embed-token-authentication#how-the-sample-works) 

## Token-Based Embedding (API Key)

<strong>What It Is:</strong>

Uses a user-generated API Key from the Bold BI Server to authenticate dashboard access, passed directly in the client-side code.

**How It Works:**

- The user generates an API Key in the Bold BI Server.
- The key is passed in the `token` property of `BoldBI.create()`.


Want to dive deeper? Check out this [link!](/embedding-options/embedding-sdk/authorization-options/api-key-authentication/)

## Flowchart Summary

- **Need user-specific filtering or secure access?** → Use **Embed Secret**
- **Need performance for repeated access?** → Use **embedToken**
- **Need simple, no backend logic?** → Use **API Key**
