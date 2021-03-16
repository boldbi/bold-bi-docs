---
layout: post
title:  Embed SDK v3.3.40 ASP.NET Core Framework Sample | Bold BI
description: Explore the JavaScript-based sample embedded in ASP.NET Core application supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards Embedding in ASP.NET Core Sample with Embedded SDK

We have created an ASP.NET Core sample with Embedded SDK. Here, we could list all the dashboards and render the dashboard based on your selection after passing the authorization.

> **NOTE:** The best way to get started would be reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation to start using first. The [Getting Started](/embedded-bi/javascript-based/getting-started/) guide gives you enough information that you need to know before working on the sample.  

## How to run the sample

1. Please download the ASP.NET Core sample from [here](https://onpremise-demo.boldbi.com/getting-started/asp-net-core-v3.3/sample.zip).  

2. In the ASP.NET Core sample, you can find the EmbedProperties class file in the Models folder.
![Embed Properties](/static/assets/embedded/javascript/sample/images/prop-core.png)

3. In `EmbedProperties.cs`, you need to set the following properties.  
<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <td align="left">RootUrl</td>
        <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
    </tr>
    <tr>
        <td align="left">SiteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
        <td align="left">Environment</td>
        <td align="left">Your Bold BI application environment. (If Cloud, you should use `cloud`, if  Enterprise, you should use `enterprise`)</td>
    </tr>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboards list</td>
    </tr>
    <tr>
        <td align="left">UserPassword</td>
        <td align="left">Password of the Admin in Bold BI, which would be used to get the dashboards list</td>
    </tr>
    <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">You could get your EmbedSecret key from Embed tab by enabling `Enable embed authentication` in Administration page as mentioned in next step</td>
    </tr>
  </tbody>
</table>


4. You can get your Embed Secret key from the administrator setting section. Please refer to this [link](/embedded-bi/site-administration/embed-settings/) for more details.  

5. Then, run your ASP.NET Core sample.

## How this sample works

1. Based on the values provided in the `EmbedProperties.cs`, we would get the user token and validate it and then we could get the dashboards list from the server.

2. In `HomeController.cs`, we have added the GetToken() method and GetDashboards() action, which has been called when initializing the DOM in `Index.html`.
![Get Dashboards](/static/assets/embedded/javascript/sample/images/core-home-getdash.png)

3. When you are selecting the dashboard to render, we would authorize the server URL by calling the GetEmbedDetails action with the provided EmbedProperties values.
![Get Embed Details](/static/assets/embedded/javascript/sample/images/core-home-getdetails.png)

4. In the above authorization, we have generated a SignatureUrl with the provided EmbedSecret key and validate embed details in Bold BI. Then only the dashboard would be rendered in the viewer-section of `index.cshtml`.

