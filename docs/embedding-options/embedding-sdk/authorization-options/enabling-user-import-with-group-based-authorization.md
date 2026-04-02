---
layout: post
title: Enabling User Import with Group-Based Authorization | Bold BI
description: Learn how to enable automatic user import when embedding Bold BI dashboards with group-based authorization.
platform: bold-bi
documentation: ug
---

# Overview

This guide explains how to automatically import users from external identity providers when embedding dashboards using the [Group-Based Authorization Overview](/embedding-options/embedding-sdk/authorization-options/group-based-authorization/) approach through SDK embedding. This helps track which users are accessing embedded dashboards.

To enable this feature, configure your identity provider (e.g., Azure AD or Amazon Cognito) in the Bold BI server.

## Identity Provider Configuration

Before enabling user import, follow the instructions specific to your identity provider:

### Azure Active Directory (Azure AD)

To configure Azure AD for user and group import into Bold BI:
- [Configure Azure AD in Bold BI](/site-administration/user-directory-settings/azure-active-directory/#configure-azure-active-directory-details-in-bold-bi-to-import-users-and-groups)

### Amazon Cognito

To configure Amazon Cognito via OAuth 2.0:
- [Configure Amazon Cognito in Bold BI](/security-configuration/single-sign-on/oauth-2.0-support/amazon-cognito/)

Additionally, to understand the overall embedding process with group-based authorization, refer to the following documentation:
- [Getting Started with Embedding](/getting-started/embedding-in-your-application/)
- [Group-Based Authorization Overview](/embedding-options/embedding-sdk/authorization-options/group-based-authorization/)

## Enabling User Import

To enable automatic user import, set the  embed_user_import  parameter to true in your embedding configuration.

### How to Set the Parameter

Include the `embed_user_import` parameter in your embedding authorization action method. This parameter allows Bold BI to automatically import users from the identity provider's group when they access a dashboard for the first time.

By default, this parameter is set to `false`. It is optional, but required if you want auto-import functionality.

To configure your authorization server for user import via group-based authorization, include the parameters in the `embedQuery`.

**v13.1**

:::TABS
:::TAB ['active'] ['Node.js'] ['tokengeneration.js']
```js
const express = require('express');
const crypto = require('crypto');
const https = require('https');
const http = require('http');

const app = express();

app.post('/tokenGeneration', function (req, res) {
  // Required details
  const serverUrl = "<Bold BI Server URL>";
  const siteIdentifier = "<Site Identifier>";
  const serverApiUrl = serverUrl + "/api/" + siteIdentifier;
  const dashboardId = "<Dashboard Id>";
  const embedSecret = "<Embed Secret Key>";

  // Other required details
  const useremail = "<User Email>";  // Email of the third party user (not in Bold BI)
  const authProviderName = "<Auth Provider Name>";
  const userId = "<User Id>";

  // Build query string
  let queryString = "embed_nonce=" + crypto.randomUUID();
  queryString += "&embed_dashboard_id=" + dashboardId;

  // Add group-based authorization details to the query string
  queryString += "&embed_group_access=true";  // This property enables group-based authorization embedding
  queryString += "&embed_auth_provider=" + authProviderName;  // Provide auth provider name
  queryString += "&embed_user_id=" + userId;  // User id of the user
  queryString += "&embed_user_email=" + useremail;
  queryString += "&embed_user_import=true"; // This property enables user import in group-based authorization

  // Sign query string
  const embedSignature = "&embed_signature=" + getSignatureUrl(queryString, embedSecret);
  const embedDetailsUrl = "/embed/authorize?" + queryString + embedSignature;

  // Request token from Bold BI server
  const serverProtocol = new URL(serverApiUrl).protocol === 'https:' ? https : http;
  serverProtocol.get(serverApiUrl + embedDetailsUrl, function (resultContent) {
    let str = '';
    resultContent.on('data', chunk => { str += chunk; });
    resultContent.on('end', function () {
      const resultJson = JSON.parse(str);
      if (resultJson?.ApiStatus && resultJson.Data?.access_token) {
        res.json({ access_token: resultJson.Data.access_token });
      } else {
        res.status(500).json({ error: "Failed to generate embed token" });
      }
    });
  });
});

// Helper function: Sign query string using embedSecret
function getSignatureUrl(queryString, embedSecret) {
  const hmac = crypto.createHmac('sha256', Buffer.from(embedSecret));
  return hmac.update(queryString).digest('base64');
}
```
:::ENDTAB
:::TAB ['.NET'] ['TokenController.cs']
```cs
[HttpPost]
[Route("TokenGeneration")]
public string TokenGeneration()
{
    // Required details
    var serverUrl = "<Bold BI Server URL>";
    var siteIdentifier = "<Site Identifier>";
    var serverApiUrl = serverUrl + "/api/" + siteIdentifier;
    var dashboardId = "<Dashboard Id>";
    var embedSecret = "<Embed Secret Key>";

    // Other required details
    var userEmail = "<User Email>";  // Email of the third party user (not in Bold BI)
    var authProviderName = "<Auth Provider Name>";  // Provide auth provider name
    var userId = "<User Id>";  // User id of the user

    // Build query string
    var queryString = "embed_nonce=" + Guid.NewGuid().ToString();
    queryString += "&embed_dashboard_id=" + dashboardId;

    // Add group-based authorization details to the query string
    queryString += "&embed_group_access=true";  // This property enables group-based authorization embedding
    queryString += "&embed_auth_provider=" + authProviderName;
    queryString += "&embed_user_id=" + userId;
    queryString += "&embed_user_email=" + userEmail;
    queryString += "&embed_user_import=true"; // This property enables user import in group-based authorization

    var embedDetailsUrl = "/embed/authorize?" + queryString + "&embed_signature=" + GetSignatureUrl(queryString, embedSecret);

    using (var client = new HttpClient())
    {
        client.BaseAddress = new Uri(serverApiUrl);
        client.DefaultRequestHeaders.Accept.Clear();

        var result = client.GetAsync(serverApiUrl + embedDetailsUrl).Result;
        string resultContent = result.Content.ReadAsStringAsync().Result;
        return JsonConvert.DeserializeObject<dynamic>(resultContent).Data.access_token;
    }
}

public string GetSignatureUrl(string queryString, string embedSecret)
{
    if (queryString != null)
    {
        var encoding = new System.Text.UTF8Encoding();
        var keyBytes = encoding.GetBytes(embedSecret);
        var messageBytes = encoding.GetBytes(queryString);
        using (var hmacsha1 = new HMACSHA256(keyBytes))
        {
            var hashMessage = hmacsha1.ComputeHash(messageBytes);
            return Convert.ToBase64String(hashMessage);
        }
    }
    return string.Empty;
}
```
:::ENDTAB
<!-- ```py
@api_view(['POST'])
def get_embed_details(request):
    # Required details
    serverUrl = "<Bold BI Server URL>"
    siteIdentifier = "<Site Identifier>"
    serverApiUrl = serverUrl + "/api/" + siteIdentifier
    dashboardId = "<Dashboard Id>"
    embedSecret = "<Embed Secret Key>"

    # Build query string
    embedQuerString = "embed_nonce=" + str(uuid.uuid4())
    embedQuerString += "&embed_dashboard_id=" + dashboardId

    # Add group-based authorization details to the query string
    embedQuerString += "&embed_group_access=true";  # This property enables group-based authorization embedding
    embedQuerString += "&embed_auth_provider=" + authProviderName
    embedQuerString += "&embed_user_id=" + userId
    embedQuerString += "&embed_user_email=" + userEmail
    embedQuerString += "&embed_user_import=true";  # This property enables user import in group-based authorization

    embedDetailsUrl = "/embed/authorize?" + embedQuerString + "&embed_signature=" + get_signature_url(embedQuerString, embedSecret)
    result_content = requests.get(serverApiUrl + embedDetailsUrl)
   
    # parse JSON and return only the access token
    try:
        data = result_content.json()
        token = data["Data"]["access_token"]
        return HttpResponse(token)
    except (ValueError, KeyError, TypeError) as e:
        return HttpResponse(f"Failed to extract token: {e}", status=502)
    except requests.RequestException as e:
        return HttpResponse(f"Embed server request failed: {e}", status=502)

def get_signature_url(message, embedSecret):
    keyBytes = bytes(embedSecret.encode('utf-8'))
    messageBytes = bytes(message.encode('utf-8'))
    hashMessage = base64.b64encode(hmac.new(keyBytes,messageBytes,digestmod=hashlib.sha256).digest())
    
    return str(hashMessage, "utf-8")
``` -->
:::TAB ['PHP'] ['tokengeneration.php']
```php
<?php
echo getToken();

function getToken() {
    // Required details
    $serverUrl = "<Bold BI Server URL>";
    $siteIdentifier = "<Site Identifier>";
    $serverApiUrl = serverUrl . "/api/" . siteIdentifier;
    $dashboardId = "<Dashboard Id>";
    $embedSecret = "<Embed Secret Key>";

    // Other required details
    $userEmail = "<User Email>";  // Email of the third party user (not in Bold BI)
    $authProviderName = "<Auth Provider Name>";  // Provide auth provider name
    $userId = "<User Id>";  // User id of the user

    // Build query string
    $embedQuerString = "embed_nonce=" . generate_uuid_v4();
    $embedQuerString = $embedQuerString . "&embed_dashboard_id=" . $dashboardId;

    // Add group-based authorization details to the query string
    $embedQuerString = $embedQuerString . "&embed_group_access=true";  // This property enables group-based authorization embedding
    $embedQuerString = $embedQuerString . "&embed_auth_provider=" + $authProviderName;
    $embedQuerString = $embedQuerString . "&embed_user_id=" + $userId;
    $embedQuerString = $embedQuerString . "&embed_user_email=" + $userEmail;
    $embedQuerString = $embedQuerString . "&embed_user_import=true";  # This property enables user import in group-based authorization

    $embedDetailsUrl = "/embed/authorize?" . $embedQuerString . "&embed_signature=" . getSignatureUrl($embedQuerString, $embedSecret);

    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL => $serverApiUrl . $embedDetailsUrl,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_TIMEOUT => 50000,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "Content-Type: application/json"
      ),
    ));
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);

    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);

    // Decode JSON and extract token
    $decoded = json_decode($response, true);
    return $decoded['Data']['access_token'] ?? "Error: Token not found";
}

// Prepare embed_Signature by encrypting with embed secret
function getSignatureUrl($embedQuerString, $embedSecret) {
    $keyBytes = mb_convert_encoding($embedSecret, 'UTF-8');
    $messageBytes = mb_convert_encoding($embedQuerString, 'UTF-8');
    $hashMessage = hash_hmac('sha256',$messageBytes, $keyBytes, true);
    $signature = base64_encode($hashMessage);
    return $signature;
}

function generate_uuid_v4() {
  return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
    mt_rand(0, 0xffff), mt_rand(0, 0xffff),
    mt_rand(0, 0xffff),
    mt_rand(0, 0x0fff) | 0x4000,
    mt_rand(0, 0x3fff) | 0x8000,
    mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
  );
}
?>
```
:::ENDTAB
:::ENDTABS

**Example:** <br>
For GlobalOAuth:
`&embed_group_access=true&embed_auth_provider=GlobalOAuth&embed_user_id=1212121212&embed_user_email=user@domain.com&embed_user_import=true`

**v14.1**

:::TABS
:::TAB ['active'] ['Node.js'] ['tokengeneration.js']
```js
var http = require("http");
var https = require("https");
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.post('/tokenGeneration', function (request, response) {
  const embedDetails = {
    serverurl: "<Bold BI Server URL>",
    siteidentifier: "<Site Identifier>",
    dashboard: {
      id: "<Dashboard Id>"
    },
    embedsecret: "<Embed Secret Key>",
    email: "<Third Party User Email>",  
    groupbasedauthorization: {
        isenabled: true,  // This property enables group-based authorization embedding.
        userid: "<User Id>",  // User id of the user
        authprovidername: "<Auth Provider Name>",  // Provide auth provider name
        isenableduserimport: true  // This property enables user import in group-based authorization
    }
  }

  const parsedUrl = new URL(embedDetails.serverurl);
  const postData = JSON.stringify(embedDetails);
  const client = parsedUrl.protocol === 'https:' ? https : http;
  const options = {
    hostname: parsedUrl.hostname,
    port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
    path: `${parsedUrl.pathname}/api/${embedDetails.siteidentifier}/embed/authorize`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const authRequest = client.request(options, authResponse => {
    let result = '';
    authResponse.setEncoding('utf8');
    authResponse.on('data', chunk => result += chunk);
    authResponse.on('end', () => {
      const resultparse = JSON.parse(result);
      response.send(resultparse?.Data?.access_token);
    });
  });

  authRequest.on('error', (e) => {
    console.error("Error fetching embed token:", e.message);
  });

  authRequest.write(postData);
  authRequest.end();
});
```
:::ENDTAB
:::TAB ['.NET'] ['TokenController.cs']
```cs
[HttpPost]
[Route("TokenGeneration")]
public string TokenGeneration()
{
    var embedDetails = new
    {
        serverurl = "<Bold BI Server URL>",
        siteidentifier = "<Site Identifier>",
        embedsecret = "<Embed Secret Key>",
        dashboard = new {
          id = "<Dashboard Id>"
        },
        // Group-Based details
        email = "<Third Party User Email>",
        groupbasedauthorization = new {
            isenabled = true,  // This property enables group-based authorization embedding.
            userid = "<User Id>",  // User id of the user
            authprovidername = "<Auth Provider Name>"  // Provide auth provider name
            isenableduserimport: true  // This property enables user import in group-based authorization
        }
    };

    //Post call to Bold BI server
    var client = new HttpClient();
    var requestUrl = $"{embedDetails.serverurl}/api/{embedDetails.siteidentifier}/embed/authorize";

    var jsonPayload = JsonConvert.SerializeObject(embedDetails);
    var httpContent = new StringContent(jsonPayload, Encoding.UTF8, "application/json");

    var result = client.PostAsync(requestUrl, httpContent).Result;
    var resultContent = result.Content.ReadAsStringAsync().Result;

    return JsonConvert.DeserializeObject<dynamic>(resultContent).Data.access_token;
}
```
:::ENDTAB
<!-- ```py
@api_view(['POST'])
def get_embed_details(request):
    embed_details = {
        "serverurl": "<Bold BI Server URL>",
        "siteidentifier": "<Site Identifier>",
        "embedsecret": "<Embed Secret Key>",
        "dashboard": {  # Dashboard ID property is mandatory only when using BoldBI version 14.1.11.
            "id": "<Dashboard Id>" 
        },
        # Group-Based details
        "email": "<Third Party User Email>",
        "groupbasedauthorization": {
            "isenabled": true,  # This property enables group-based authorization embedding.
            "userid": "<User Id>",  # User id of the user
            "authprovidername": "<Auth Provider Name>"  # Provide auth provider name
            "isenableduserimport": true  # This property enables user import in group-based authorization
        }
    }

    request_url = f"{embed_details['serverurl']}/api/{embed_details['siteidentifier']}/embed/authorize"
    headers = {"Content-Type": "application/json"}

    result = requests.post(request_url, headers=headers, data=json.dumps(embed_details), timeout=30)
    result.raise_for_status()

    data = result.json()
    try:
        return HttpResponse(data["Data"]["access_token"])
    except (KeyError, TypeError):
        return HttpResponse(f"Unexpected response format: {data}", status=502)
``` -->
:::TAB ['PHP'] ['tokengeneration.php']
```php
<?php
echo getToken();

function getToken() {
    $embedDetails = [
      "serverurl" => "<Bold BI Server URL>",
      "siteidentifier" => "<Site Identifier>",
      "embedsecret" => "<Embed Secret Key>",
      "dashboard" => [
        "id" => "<Dashboard Id>"
      ],
      // Group-Based details
      "email" => "<Third Party User Email>",  
      "groupbasedauthorization" => [
          "isenabled" => true,  // This property enables group-based authorization embedding.
          "userid" => "<User Id>",  // User id of the user
          "authprovidername" => "<Auth Provider Name>"  // Provide auth provider name
          "isenableduserimport" => true  // This property enables user import in group-based authorization
      ]
    ]

    // Send POST request to Bold BI server
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $embedDetails["serverurl"] . "/api/" . $embedDetails["siteidentifier"] . "/embed/authorize");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
      'Content-Type: application/json'
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($embedDetails));
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

    $response = curl_exec($ch);
    
    if (curl_errno($ch)) {
      curl_close($ch);
      return "Error: " . curl_error($ch);
    }

    curl_close($ch);

    // Decode JSON and extract token
    $decoded = json_decode($response, true);
    return $decoded['Data']['access_token'] ?? "Error: Token not found";
}
```
:::ENDTAB
:::ENDTABS

**Example:** <br>
For GlobalOAuth:
```js
email: "user@domain.com",
groupbasedauthorization: {
    isenabled: true,
    userid: "1212121212",
    authprovidername: "GlobalOAuth",
    isenableduserimport: true
}
```

<meta charset="utf-8"/>
    <table>
    <thead>
    <tr>
    <th style="width: 20%;">Parameter (v13.1)</th>
    <th style="width: 20%;">Parameter (v14.1)</th>
    <th style="width: 60%;">Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td align="left">embed_group_access</td>
    <td align="left">groupbasedauthorization: { isenabled: }</td>
    <td align="left">This parameter needs to set as true to enable the group-based authorization.</td>
    </tr>
    <tr>
    <td align="left" rowspan="4">embed_auth_provider</td>
    <td align="left" rowspan="4">groupbasedauthorization: { authprovidername: }</td>
    <td align="left">This parameter value indicates which auth provider you are using in embedding.
      <br><br>Following are the values for different auth providers:
    </td>
    </tr>
    <tr>
    <td align="left">AzureAD – Set this if you have configured AzureAD</td>
    </tr>
    <tr>
    <td align="left">TenantOAuth – Set this if you have configured OAuth at the tenant level</td>
    </tr>
    <tr>
    <td align="left">GlobalOAuth – Set this if you have configured OAuth at the global level</td>
    </tr>
    <tr>
    <td align="left">embed_user_id</td>
    <td align="left">groupbasedauthorization: { userid: }</td>
    <td align="left">Need to set your user id, which used in your provider for this user</td>
    </tr>
    <tr>
    <td align="left">embed_user_email</td>
    <td align="left">email</td>
    <td align="left">Need to set your user mail, which used in your provider for this user</td>
    </tr>
    <tr>
    <td align="left">embed_user_import</td>
    <td align="left">groupbasedauthorization: { isenableduserimport: }</td>
    <td align="left">The default value is false, and the parameter is optional. This parameter needs to be set as true to enable the auto import of the user into Bold BI from an external group.</td>
    </tr>
    </tbody>
    </table>

> **NOTE:** Please use your UserID and UserEmail as follows below.

  <meta charset="utf-8"/>
  <table>
  <thead>
    <tr>
    <th scope="col">Provider</th>
    <th scope="col">Parameter (v13.1)</th>
    <th scope="col">Parameter (v14.1)</th>
    </tr>
    </thead>
  <tbody>
  <tr>
  <td align="left">Amazon Cognito</td>
  <td align="left">Set the user email as embed_user_id and embed_user_email</td>
  <td align="left">Set the user email as userid and email</td>
  </tr>
  <tr>
  <td align="left">Auth0</td>
  <td align="left" >- Set the user id as embed_user_id <br>- Set the user email as embed_user_email</td>
  <td align="left" >- Set the user id as userid <br>- Set the user email as email</td>
  </tr>
  </tbody>
  </table>