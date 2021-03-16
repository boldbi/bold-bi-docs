---
layout: post
title:  Embed SDK v3.3.40 ASP.NET Framework Sample | Bold BI Docs
description: Explore the JavaScript-based sample embedded in ASP.NET application supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in ASP.NET using Embedded SDK

We have created an ASP.NET application for achieving this embedding. Here, we could set the server and dashboard details as embed details then the dashboard would be rendered after passing the authorization.    

> **NOTE:** The best way to get started would be reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation to start using first. The [Getting Started](/embedded-bi/javascript-based/getting-started/) guide gives you enough information that you need to know before working on the sample.      

## How to run the sample

1. Please download the ASP.NET App from [here](https://onpremise-demo.boldbi.com/getting-started/asp-net-v3.3/sample.zip).    

2. You need to set your embed property details in the `EmbedProperties.cs` and `Site.Master` as follows.  
![Embed Properties](/static/assets/embedded/javascript/sample/images/asp-net-embed.png)
![Embed Properties in Site](/static/assets/embedded/javascript/sample/images/asp-net-site.png)
<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboards list</td>
    </tr>
    <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">You could get your EmbedSecret key from Embed tab by enabling `Enable embed authentication` in Administration page as mentioned in next step</td>
    </tr>
    <tr>
        <td align="left">RootUrl</td>
        <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://demo.boldbi.com/bi/site/site1)</td>
    </tr>
    <tr>
        <td align="left">SiteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
        <td align="left">Environment</td>
        <td align="left">Your Bold BI application environment. (If Cloud, you should use `Cloud`, if  Enterprise, you should use `Enterprise`)</td>
    </tr>
    <tr>
        <td align="left">DashboardId</td>
        <td align="left">Set the item id of the dashboard to embed from BI server.</td>
    </tr>
  </tbody>
</table>


3. You could get the item id of the dashboard from the BI server. Please refer to this [link](/embedded-bi/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the following screenshot.  
![Get Dashboard Id](/static/assets/embedded/javascript/sample/images/get-dashboard-id.png)

4. You can get your Embed Secret key from the administrator setting section. Please refer to this [link](/embedded-bi/site-administration/embed-settings/) for more details.  

5. Then, run your ASP.NET sample.

## How this sample works

1. Based on the provided embed details with dashboardId, we would authorize the server URL by calling the GetEmbedDetails function `(Default.aspx/GetEmbedDetails)` call with provided EmbedProperties values.
Learn more about authorize server [here](/embedded-bi/javascript-based/authorize-server/)
![Authorize Server URL](/static/assets/embedded/javascript/sample/images/asp-net-api.png)
![Get Embed Details](/static/assets/embedded/javascript/sample/images/asp-net-authorize.png)

2. In the above authorization, we have generated SignatureUrl with the provided EmbedSecret key and validate embed details in Bold BI. Once details are validated, the dashboard starts to render.

3. In `Site.Master`, you can change the dashboard Id of the respective dashboard as you wish to embed.
![Set Dashboard Id](/static/assets/embedded/javascript/sample/images/asp-net-dashboard.png)
