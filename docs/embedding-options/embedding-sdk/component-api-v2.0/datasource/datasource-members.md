---
layout: post
title: API Reference – Datsource Members -JavaScript Embedding | Bold BI
description: Explore the datasource JavaScript API reference for members that can be used for embedding in Bold BI deployed in your server.
platform: bold-bi
documentation: UG
---
# Members
<h2 class="doc-prop-wrapper" id="datasourceid" data-Path="datasourceid-datasourceId">
<a href="#datasourceid" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>datasourceId</span>

<span class="doc-prop-type"> `string`
</span>

</h2>
    
Defines the ID of the dashboard to be embedded from your Bold BI application.
- **Required**: Yes
- **Default**: `""` (empty)

**Example**
   
```js  
var dashboard = BoldBI.create({
     datasourceId: "5cb065f7-dabb-4b0c-9b45-c60a5730e963"                
});
dashboard.loadDatasource();
```   
  
<h2 class="doc-prop-wrapper" id="datasourcename" data-Path="datasourcename-datasourceName">
<a href="#datasourcename" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>datasourceName</span>

<span class="doc-prop-type"> `string`
</span>
</h2>     

The name of the datasource, which needs to be embedded in a page from your Bold BI application, is required.
- **Default**: `""` (empty)

**Example** 
   
```js   
var dashboard = BoldBI.create({
     datasourceName: "Sample Datasource"
});
dashboard.loadDatasource();
```
<h2 class="doc-prop-wrapper" id="embedcontainerid" data-Path="embedcontainerid-embedContainerId">
<a href="#embedcontainerid" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>embedContainerId</span>

<span class="doc-prop-type"> `string`
</span>
</h2>

The ID of a div element in which the dashboard will be initialized and rendered.
- **Required**: Yes
- **Default**: `""` (empty)

**Example** 
   
```js
<div id="container"></div> 
<script> 
     var dashboard = BoldBI.create({
          embedContainerId: "container",        
     });
     dashboard.loadDatasource();
</script>
```

<h2 class="doc-prop-wrapper" id="environment" data-Path="environment-environment">
<a href="#environment" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>environment</span>

<span class="doc-prop-type"> `object`
</span>
</h2>

Specifies the type of Bold BI application, either Cloud or Enterprise edition.
- **Possible Values**:
  - `BoldBI.Environment.Cloud`
  - `BoldBI.Environment.Enterprise`
- **Default**: `BoldBI.Environment.Enterprise`

**Example** 
   
```js
var dashboard = BoldBI.create({
     environment: BoldBI.Environment.Enterprise,        
});
dashboard.loadDatasource();
```
<h2 class="doc-prop-wrapper" id="expirationtime" data-Path="expirationtime-expirationTime">
<a href="#expirationtime" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>expirationTime</span>

<span class="doc-prop-type"> `number`
</span>
</h2>

This property allows you to set the expiration time for the access token, in seconds. You can customize the duration based on your application's needs. The maximum allowed value is 604800 seconds (7 days). The minimum recommended value depends on your security and session requirements.

- **Required**: No
- **Default**: `86400` (24 hours)

**Example** 
   
```js
var dashboard = BoldBI.create({
     expirationTime:100000,          
});
dashboard.loadDatasource();
```
<h2 class="doc-prop-wrapper" id="height" data-Path="height-height">
<a href="#height" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>height</span>

<span class="doc-prop-type"> `string`
</span>
</h2>

Defines the height of the embedding module in percentages or pixels.
- **Optional**: Yes
- **Default**: Inherits from the parent container

**Example** 
```js
var dashboard = BoldBI.create({
     height:"800px", //The dashboard is now rendered with a height of 800px
});
dashboard.loadDatasource();
```
<h2 class="doc-prop-wrapper" id="mode" data-Path="mode-mode">
<a href="#mode" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>mode</span>

<span class="doc-prop-type"> `object`
</span>
</h2>

Defines the datasource rendering mode.
- **Possible Values**:
  - `BoldBI.Mode.View`
  - `BoldBI.Mode.Design`
  - `BoldBI.Mode.Connection`
  - `BoldBI.Mode.DataSource`
  - `BoldBI.Mode.AIAssistant`
- **Default**: `BoldBI.Mode.View`

**Example** 
   
```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.DataSource,        
});
dashboard.loadDatasource();
```
<h2 class="doc-prop-wrapper" id="serverurl" data-Path="serverurl-serverUrl">
<a href="#serverurl" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>serverUrl</span>

<span class="doc-prop-type"> `string`
</span>
</h2>    

The URL of the Bold BI application.
- **Required**: Yes
- **Default**: `""` (empty)

**Example** 
   
```js
var dashboard = BoldBI.create({
     serverUrl: "https://mydashboard.com/bi/site/site1",
});
dashboard.loadDatasource();
```
<h2 class="doc-prop-wrapper" id="token" data-Path="token-token">
<a href="#token" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>token</span>

<span class="doc-prop-type"> `string`
</span>
</h2>

Authenticates the dashboard without implementing the [Authorization server](/embedding-options/embedding-sdk/component-api-v2.0/dashboard/dashboard-members/#url) endpoint. Required only if the Authorization url API is not configured. Refer to the [token generation documentation](/embedding-options/embedding-sdk/token-generation/) for details.

- **Default**: `""` (empty)

**Example**
```js   
var dashboard = BoldBI.create({
     token: "NjQ2ZDgwZjgtN2Q3MS00ZDQwLWFkNTItYTdkNDRhOGE2NmVi", // Use the generated API key
});
dashboard.loadDatasource();
```  
To learn about the available limited [supporting methods](/embedding-options/embedding-sdk/authorization-options/api-key-authentication/#following-embedding-modules-is-achievable-by-using-token-api-member) in embedding.

<h2 class="doc-prop-wrapper" id="width" data-Path="width-width">
<a href="#width" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>width</span>

<span class="doc-prop-type"> `string`
</span>
</h2>

Defines the width of the embedding module in percentages or pixels.
- **Optional**: Yes
- **Default**: Inherits from the parent container

**Example** 
   
```js
var dashboard = BoldBI.create({
     width:"1200px", //The dashboard is now rendered with a width of 1200px.
});
dashboard.loadDatasource();
```
## authorizationServer
<h3 class="doc-prop-wrapper" id="url" data-Path="authorizationserverurl-authorizationServer.url">
<a href="#url" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>url</span>

<span class="doc-prop-type"> `string`
</span>
</h3>
    
Any application that embeds a Bold BI dashboard and widget needs to authenticate with the Bold BI server. This authentication flow requires sending confidential information such as user email, group details, and embed signature to the Bold BI server. Therefore, you must implement this authentication flow in your server application and provide the URL for connecting to your server in the Bold BI embed instance. Refer to the [authorization server documentation](/security-configuration/authorize-server/) for details.
- **Required**: Yes
- **Default**: `""` (empty)

**Example** 
   
```js
var dashboard = BoldBI.create({
     authorizationServer: {
          url:"https://serversample.com/embed-details/get",
     }
});
dashboard.loadDatasource();
```
<h3 class="doc-prop-wrapper" id="headers" data-Path="authorizationserverheaders-authorizationServer.headers">
<a href="#headers" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>headers</span>

<span class="doc-prop-type"> `object`
</span>
</h3>

Transmits custom data or header values to the embedding application's Authorization Server. As a result, you may find this value in the headers of the Authorization Server API.
- **Optional**: Yes
- **Default**: `{}` (empty object)
- **Note**:  Please refer to the [Knowledge Base](https://support.boldbi.com/kb/article/12507/how-to-pass-custom-data-to-authorization-server) article to know more.

**Example** 
   
```js
var dashboard = BoldBI.create({
     authorizationServer:{
          headers: {
               "Cookie": "Set-Cookie: sessionId=38afes7a8",
          }
     }
});
dashboard.loadDatasource();
```