---
layout: post
title: API Reference – Pinbaord Members - JavaScript Embedding | Bold BI
description: Explore the Pinbaord JavaScript API reference for members that can be used for embedding in Bold BI deployed in your server.
platform: bold-bi
documentation: UG
---
# Members
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
     // Embed Dashboard 
     var dashboard = BoldBI.create({
          embedContainerId: "container",        
     });
     dashboard.loadPinboard();
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
dashboard.loadPinboard();
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
dashboard.loadPinboard();
```
</code></td>
</tr>
</table>
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
dashboard.loadPinboard();
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
    
Defines the dashboard rendering mode.
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
     mode: BoldBI.Mode.View,        
});
dashboard.loadPinboard();
```

<h2 class="doc-prop-wrapper" id="pinboardname" data-Path="pinboardname-pinboardName">
<a href="#pinboardname" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>pinboardName</span>

<span class="doc-prop-type"> `string`
</span>
</h2>
    
The pinboard that needs to be embedded in a page from your Bold BI application needs to be named.
- **Default**: `""` (empty)

**Example**
   
```js  
var pinboard = BoldBI.create({
     pinboardName: "Pinboard Name"                
});
pinboard.loadPinboard();
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
dashboard.loadPinboard();
```

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
dashboard.loadPinboard();
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


- **Required**: Yes (If [token](/embedding-options/embedding-sdk/component-api-v2.0/dashboard/dashboard-members/#token) or [embedToken](/embedding-options/embedding-sdk/component-api-v2.0/dashboard/dashboard-members/#embedtoken) APIs are not used)
- **Default**: `""` (empty)

**Example** 
   
```js
var dashboard = BoldBI.create({
     authorizationServer: {
          url:"https://serversample.com/embed-details/get",
     }
});
dashboard.loadDashboard();
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
dashboard.loadDashboard();
```

## settings

<h2 class="doc-prop-wrapper" id="azurerequired" data-Path="azurerequired-azurerequired">
<a href="#azurerequired" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>azureMapRequired</span>

<span class="doc-prop-type"> `boolean`
</span>

</h2>

Specifies whether Azure Map-related files need to be downloaded.

- **Default**: `false`
- **Note**: Set to `true` if the Pinboard contains a Azure Map widget.

**Example**    

```js
var dashboard = BoldBI.create({
    settings: {
        azureMapRequired: false
    }
});
dashboard.loadPinboard();
```

<h2 class="doc-prop-wrapper" id="settingshideerrormessage" data-Path="settingshideerrormessage-settings.hideErrorMessage">
<a href="#settingshideerrormessage" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>hideErrorMessage</span>

<span class="doc-prop-type"> `boolean`
</span>
</h2>

Specifies whether to show or hide the error messages inside the dashboard container. The `onError` event is a callback function used to catch and handle errors that occur during the dashboard embedding process.

- **Default**: `false`
- **Use Case**: Set to `true` to suppress embedded error UI and handle errors via a custom callback.

**Example**
```js
var dashboard = BoldBI.create({
     settings:{
          hideErrorMessage:true
     },
     events:{
          onError: function (args) {
               var dashboardContainer = document.getElementById("dashboard");
               dashboardContainer.innerHTML = "Provide valid Pinboard Name.";
          },
     }
});
dashboard.loadPinboard();
```

<h2 class="doc-prop-wrapper" id="settingsbingmaprequired" data-Path="settingsbingmaprequired-settings.bingMapRequired">
<a href="#settingsbingmaprequired" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>bingMapRequired</span>

<span class="doc-prop-type"> `boolean`
</span>
</h2>

Specifies whether Bing Map-related files need to be downloaded.
- **Default**: `false`
- **Note**: Set to `true` if the dashboard contains a Bing Map widget.

**Example** 
   
```js
var dashboard = BoldBI.create({
     bingMapRequired: false,
});
dashboard.loadPinboard();
```

## export
<h3 class="doc-prop-wrapper" id="csv" data-Path="settingsexportcsv-settings.export.csv">
<a href="#csv" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>csv</span>

<span class="doc-prop-type"> `boolean`
</span>
</h3>
    
Specifies whether to show or hide the `CSV` export option.
- **Default**: `true`

**Example** 
   
```js
var dashboard = BoldBI.create({
     settings:{
          export: {
               csv: true,
          }
     }
});
dashboard.loadPinboard();
```
<h3 class="doc-prop-wrapper" id="excel" data-Path="settingsexportexcel-settings.export.excel">
<a href="#excel" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>excel</span>

<span class="doc-prop-type"> `boolean`
</span>
</h3>
 
Specifies whether to show or hide the `Excel` export option.
- **Default**: `true`

**Example** 
   
```js
var dashboard = BoldBI.create({
     settings:{
          export: {
               excel: true,
          }
     }
});
dashboard.loadPinboard();
```
     
<h3 class="doc-prop-wrapper" id="image" data-Path="settingsexportimage-settings.export.image">
<a href="#image" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>image</span>

<span class="doc-prop-type"> `boolean`
</span>
</h3>
    
Specifies whether to show or hide the `Image` export option.
- **Default**: `true`

**Example** 
   
```js
var dashboard = BoldBI.create({
     settings: {
          export: {
               image: true
          }
     }
});
dashboard.loadPinboard();
```
<h3 class="doc-prop-wrapper" id="pdf" data-Path="settingsexportpdf-settings.export.pdf">
<a href="#pdf" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>pdf</span>

<span class="doc-prop-type"> `boolean`
</span>
</h3>
    
Specifies whether to show or hide the `PDF` export option.
- **Default**: `true`

**Example** 
   
```js
var dashboard = BoldBI.create({
     settings:{
          export: {
               pdf: true,
          }
     }
});
dashboard.loadPinboard();
```
## pinboard
<h3 class="doc-prop-wrapper" id="header" data-Path="settingspinboardheader-settings.pinboard.header">
<a href="#header" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>header</span>

<span class="doc-prop-type"> `boolean`
</span>
</h3>
    
Specifies whether to show or hide the header panel on the pinboard.
- **Default**: `true`

**Example** 
   
```js
var dashboard = BoldBI.create({
     settings: {
          pinboard: {
               header: true
          }
     }
});
dashboard.loadPinboard();
```
<h3 class="doc-prop-wrapper" id="unpinWidget" data-Path="settingspinboardunpinWidget-settings.pinboard.unpinWidget">
<a href="#unpinWidget" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>unpinWidget</span>

<span class="doc-prop-type"> `boolean`
</span>
</h3>
    
Specifies whether to show or hide the Unpin option on the Pinboard.
- **Default**: `true`

**Example** 
   
```js
var dashboard = BoldBI.create({
     settings: {
          pinboard: {
               unpinWidget: true
          }
     }
});
dashboard.loadPinboard();
```