---
layout: post
title: Bold BI dashboard viewer - JavaScript Embedding | Bold BI Docs
description:  Learn how to seamlessly embed the Bold BI dashboard into your business application using the SDK, enhancing data visualization and decision-making capabilities.
platform: bold-bi
documentation: ug

---
# Embed a Dashboard using an Embed token
Once an [embed authorization token](/embedding-options/embedding-sdk/token-generation/) has been generated on the backend server side, use it on the frontend to securely render a Bold BI dashboard.

## Install the Bold BI Embedded SDK
You can install the Bold BI Embedded SDK in two ways:

### Using NPM
To install the SDK, use the npm package manager by executing the command below in your command-line interface. Using npm is advised as it allows convenient access to the latest SDK updates when they are released.

```bash
npm install --save @boldbi/boldbi-embedded-sdk
```

Then, import the SDK into your application:

```js
import {BoldBI} from '@boldbi/boldbi-embedded-sdk';
```

> **Note:** The SDK uses ES6 syntax and provides `BoldBI` as a named export (not a default export).

### Using a CDN link
If your application does not use npm or a package manager, include the minified SDK via CDN:

```html
<script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v15.2.6/boldbi-embed.js"></script>
```

## Embed the Bold BI Dashboard
1. Add a container `<div>` with a unique ID where the dashboard will be rendered.
2. Use the embed SDK to create a Bold BI instance with your server details, dashboard ID, and the embed token retrieved from your backend.

    ```html
    <div id="dashboard_container_id"></div>
    <script>
        var boldbiEmbedInstance = BoldBI.create({
            serverUrl: "<Bold BI Server URL>",
            dashboardId: "<Dashboard Id>",
            embedContainerId: "<Embed Container Id>", // Div ID where dashboard will render
            embedToken: "<Embed token generated from backend server>"
        });
        boldbiEmbedInstance.loadDashboard();
    </script>
    ```

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <th style="width: 20%;">Property</th>
    <th style="width: 20%;">Type</th>
    <th style="width: 60%;">Description</th>
    </tr>
    <tr>
    <td align="left">serverUrl</td>
    <td align="left"><i>string</i></td>
    <td align="left">Your Bold BI Server URL (e.g., https://localhost:[portno]/bi/site/site1)</td>
    </tr>
    <tr>
    <td align="left">dashboardId</td>
    <td align="left"><i>string</i></td>
    <td align="left">Unique ID of the dashboard to embed.</td>
    </tr>
    <tr>
    <td align="left">embedContainerId</td>
    <td align="left"><i>string</i></td>
    <td align="left">ID of the <b>div</b> where the dashboard will be rendered.</td>
    </tr>
    <tr>
    <td align="left">embedToken</td>
    <td align="left"><i>string</i></td>
    <td align="left">Embed token generated from your backend server.</td>
    </tr>
    </tbody>
    </table>

> **Note:** For advanced configuration (methods, events, theming), see the [Dashboard Component Reference](/embedding-options/embedding-sdk/component-api-v2.0/).

## How to Get and Use an Embed Token
Here is a simple example of how to get the access token from the server-side `/tokenGeneration` API call and use it in our BoldBI.create method.

:::TABS
:::TAB ['active'] ['HTML'] ['index.html']
```html
<body onload="embedDashboard();">
    <div id="dashboard_container_id"></div>
    <script>
        function embedDashboard() {
            getEmbedToken().then(accessToken => {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "<Bold BI Server URL>",
                    dashboardId: "<Dashboard Id>",
                    embedContainerId: "dashboard_container_id",
                    embedToken: accessToken
                });
                boldbiEmbedInstance.loadDashboard();
            }).catch(error => {
                console.error("Failed to get embed token:", error);
            });
        }
        function getEmbedToken() {
            return fetch('/tokenGeneration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            })
            .then(response => {
                if (!response.ok) throw new Error("Token fetch failed");
                return response.text();
            });
        }
    </script>
</body>
```
:::ENDTAB
:::TAB ['Angular'] ['Dashboard.js']
```js
import { OnInit } from '@angular/core';

export class Dashboard implements OnInit {
    ngOnInit() { 
        this.renderDashboard();
    }

    getEmbedToken() {
        return fetch('/tokenGeneration', {
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json' 
          },
          body: JSON.stringify({})
        })
        .then(response => {
          if (!response.ok) throw new Error("Token fetch failed");
          return response.text();
        });
    }

    renderDashboard() {
        this.getEmbedToken()
          .then(accessToken => {
            const dashboard = BoldBI.create({
              serverUrl: "<Bold BI Server URL>",
              dashboardId: "<Dashboard Id>",
              embedContainerId: "dashboard_container_id",
              embedToken: accessToken
            });

            dashboard.loadDashboard();
          })
          .catch(err => {
            console.error("Error rendering dashboard:", err);
          });
    };
}
```
:::ENDTAB
:::TAB ['React'] ['Dashboard.js']
```js
import React from 'react';

class Dashboard extends React.Component {
    getEmbedToken() {
        return fetch('/tokenGeneration', {
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json' 
          },
          body: JSON.stringify({})
        })
        .then(response => {
          if (!response.ok) throw new Error("Token fetch failed");
          return response.text();
        });
    }

    renderDashboard() {
        this.getEmbedToken()
          .then(accessToken => {
            const dashboard = BoldBI.create({
              serverUrl: "<Bold BI Server URL>",
              dashboardId: "<Dashboard Id>",
              embedContainerId: "dashboard_container_id",
              embedToken: accessToken
            });

            dashboard.loadDashboard();
          })
          .catch(err => {
            console.error("Error rendering dashboard:", err);
          });
    };

    render() {
        return (
            <div id="dashboard_container_id"></div>
        );
    }

    componentDidMount() {
       this.renderDashboard();
    }
}
```
:::ENDTAB
:::TAB ['Vue'] ['App.vue']
```js
export default ({
  name: 'App',
  async mounted() {
     function getEmbedToken() {
      return fetch(tokenGenerationUrl, {  // Backend application URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      })
      .then(response => {
        if (!response.ok) throw new Error("Token fetch failed");
        return response.text();
      });
  }

  function renderDashboard(data) {
    getEmbedToken()
      .then(accessToken => {
        const dashboard = BoldBI.create({
          serverUrl: data.ServerUrl + "/" + data.SiteIdentifier,
          dashboardId: data.DashboardId,
          embedContainerId: "dashboard",
          embedToken: accessToken
        });

        dashboard.loadDashboard();
      })
      .catch(err => {
        console.error("Error rendering dashboard:", err);
      });
    }
  }
});
```
:::ENDTAB
:::ENDTABS

## How to achieve RLS below Bold BI v13

> **Note:** We enhanced a newer approach of RLS in the token generation using object model structure. Please refer to this [link](/embedding-options/embedding-sdk/row-level-security/).

> **Note:** Only the filter details need to be added in the existing query string concatenation. These are the common required details needed to generate a token: serverUrl, siteIdentifier, userEmail, dashboardId, and embedSecret, which you can refer to in the [Generate Embed Token (below v13)](/embedding-options/embedding-sdk/authorization-options/token-generation-lower-version/) page.

### Data Filter

:::TABS
:::TAB ['active'] ['Node.js'] ['tokengeneration.js']
```js
app.post('/tokenGeneration', function (req, res) {
  // Define row-level filter
  const filter = "[{shipCountry=India}]";
  
  // Build query string
  let queryString = "embed_nonce=" + crypto.randomUUID();
  queryString += "&embed_dashboard_id=" + dashboardId;
  queryString += "&embed_user_email=" + userEmail;

  // Add filter
  queryString += "&embed_datasource_filter=" + filter;
});
```
:::ENDTAB
:::TAB ['.NET'] ['TokenController.cs']
```cs
[HttpPost]
[Route("TokenGeneration")]
public string TokenGeneration()
{
  // Define row-level filter
  var filter = "[{shipCountry=India}]";
  
  // Build query string
  var queryString = "embed_nonce=" + Guid.NewGuid().ToString();
  queryString += "&embed_dashboard_id=" + dashboardId;
  queryString += "&embed_user_email=" + userEmail;

  // Add filter
  queryString += "&embed_datasource_filter=" + filter;
}
```
:::ENDTAB
<!-- ```py
@api_view(['POST'])
def TokenGeneration(request):
    # Define row-level filter
    filter = "[{shipCountry=India}]"

    # Build query string
    embedQuerString = "embed_nonce=" + str(uuid.uuid4())
    embedQuerString += "&embed_dashboard_id=" + dashboardId
    embedQuerString += "&embed_user_email=" + userEmail

    # Add filter
    embedQuerString += "&embed_datasource_filter=" + filter
``` -->
:::TAB ['PHP'] ['tokengeneration.php']
```php
<?php
echo getToken();

function getToken() {
  // Define row-level filter
  $filter = "[{shipCountry=India}]";
  
  // Build query string
  $embedQuerString = "embed_nonce=" . generate_uuid_v4();
  $embedQuerString = $embedQuerString . "&embed_dashboard_id=" . $dashboardId;
  $embedQuerString = $embedQuerString . "&embed_user_email=" . $userEmail;

  // Add filter
  $embedQuerString = $embedQuerString . "&embed_datasource_filter=" . $filter;
}
```
:::ENDTAB
:::ENDTABS

**Filter Syntax Examples**  
<table>
  <thead>
    <tr>
      <th style="width: 30%;">Scenario</th>
      <th>Query</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Single Filter</td>
      <td><code>&amp;embed_datasource_filter=[{&amp;Param=Value}]</code></td>
    </tr>
     <tr>
      <td>Multiple Filters</td>
      <td><code>&amp;embed_datasource_filter=[{&amp;Param1=Value1&amp;Param2=Value2}]</code></td>
    </tr>
    <tr>
      <td>List Format (IN)</td>
      <td><code>&amp;embed_datasource_filter=[{&amp;Param=IN(Value1,Value2)}]</code></td>
    </tr>   
  </tbody>
</table>

>**Note**: Filters must be enclosed in [] square brackets and {} curly braces. You can also achieve RLS for custom columns using [dashboard parameters](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameter/).

### Custom Attribute

Custom Attributes are name–value pairs that can be defined at the user, group, or site level. It can be enforced by passing an `embed_custom_attribute` attribute in the [embed token](/embedding-options/embedding-sdk/authorization-options/token-generation-lower-version/). They allow dashboards to dynamically adjust queries, expressions, or data source connections to enforce RLS.

:::TABS
:::TAB ['active'] ['Node.js'] ['tokengeneration.js']
```js
app.post('/tokenGeneration', function (req, res) {
    // Define custom attribute
    const customAttribute = '[{"database_name":"DB2"}]';

    let queryString = "embed_nonce=" + crypto.randomUUID();
    queryString += "&embed_dashboard_id=" + dashboardId;
    queryString += "&embed_user_email=" + userEmail;

    // Add custom attribute
    queryString += "&embed_custom_attribute=" + customAttribute;
});
```
:::ENDTAB
:::TAB ['.NET'] ['TokenController.cs']
```cs
[HttpPost]
[Route("TokenGeneration")]
public string TokenGeneration()
{
  // Define custom attribute
  var customAttribute = '[{"database_name":"DB2"}]';
  
  // Build query string
  var queryString = "embed_nonce=" + Guid.NewGuid().ToString();
  queryString += "&embed_dashboard_id=" + dashboardId;
  queryString += "&embed_user_email=" + userEmail;

  // Add custom attribute
  queryString += "&embed_custom_attribute=" + customAttribute;
}
```
:::ENDTAB
<!-- ```py
@api_view(['POST'])
def TokenGeneration(request):
    # Define custom attribute
    customAttribute = '[{"database_name":"DB2"}]'

    # Build query string
    embedQuerString = "embed_nonce=" + str(uuid.uuid4())
    embedQuerString += "&embed_dashboard_id=" + dashboardId
    embedQuerString += "&embed_user_email=" + userEmail

    # Add custom attribute
    embedQuerString += "&embed_custom_attribute=" + customAttribute
``` -->
:::TAB ['PHP'] ['tokengeneration.php']
```php
<?php
echo getToken();

function getToken() {
  // Define custom attribute
  $customAttribute = '[{"database_name":"DB2"}]';
  
  // Build query string
  $embedQuerString = "embed_nonce=" . generate_uuid_v4();
  $embedQuerString = $embedQuerString . "&embed_dashboard_id=" . $dashboardId;
  $embedQuerString = $embedQuerString . "&embed_user_email=" . $userEmail;

  // Add custom attribute
  $embedQuerString = $embedQuerString . "&embed_custom_attribute=" . $customAttribute;
}
```
:::ENDTAB
:::ENDTABS

**Examples:Custom Attribute Syntax**  
<table>
  <thead>
    <tr>
      <th style="width: 15%;">Scenario</th>
      <th style="width: 40%;">Syntax</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Single Attribute</td>
      <td><code>[{"Attribute_Name":"Value"}]</code></td>
      <td><code>&amp;embed_custom_attribute='[{"database_name":"DB1"}]'</code></td>
    </tr>
      <tr>
      <td>Multiple Attributes</td>
      <td><code>[{"Attr1":"Value1","Attr2":"Value2"}]</code></td>
      <td><code>&amp;embed_custom_attribute='[{"department":"IT","name":"David"}]'</code></td>
    </tr>
    <tr>
      <td>List Format (IN)</td>
      <td><code>[{"Attribute_Name":"IN('Value1','Value2')"}]</code></td>
      <td><code>&amp;embed_custom_attribute='[{"department":"IN('CSE','EEE')"}]'</code></td>
    </tr>  
  </tbody>
</table>