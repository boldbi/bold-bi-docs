---
layout: post  
title: Anonymous User – JavaScript Embedding | Bold BI Docs  
description: Learn how to use anonymous users in JavaScript-based embedding of Bold BI dashboards in your business or web applications.  
platform: bold-bi  
documentation: ug  
---

# Anonymous User Embedding

Anonymous embedding is an ideal solution for applications with a large number of users, where managing each user individually within Bold BI would be inefficient. Instead, anonymous embedding allows you to seamlessly integrate dashboards with a predefined, permission-based group on the BI server, providing a streamlined experience for your users.

## Steps to Implement Anonymous Embedding

* Enable the **System User** option in the **UMS Accounts** page. This allows you to manage anonymous users without creating individual accounts for each user.
  ![Systemuser](/static/assets/javascript/images/enable-systemuser-ums.png)

* Create a [new group](/managing-resources/manage-groups/#add-new-group) and assign the necessary [permissions](/managing-resources/manage-groups/#manage-permissions) for this group to access the necessary dashboards.
  ![grouplist](/static/assets/javascript/images/grouplist-site.png)

  ![grouppermission](/static/assets/javascript/images/grouppermission.png)

### Generate Embed Token for Anonymous User from v14

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
    dashboard: { // Dashboard ID property is mandatory only when using BoldBI version 14.1.11.
      id: "<Dashboard Id>"
    },
    embedsecret: "<Embed Secret Key>",
    // Anonymous details
    email: "<Anonymous User Email>",
    anonymous: {
        isenabled: true,
        groupname: "<Group Name>"
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
      dashboard = new {  // Dashboard ID property is mandatory only when using BoldBI version 14.1.11.
        id = "<Dashboard Id>"
      },
      // Anonymous details
      email = "<Anonymous  User Email>",  // Email of the anonymous user (not in Bold BI)
      anonymous = new
      {
          isenabled = true,  // This property enables anonymous embedding.
          groupname = "<Group Name>"  // The group name under which the anonymous user will be authorized
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
def TokenGeneration(request):
    embed_details = {
        "serverurl": "<Bold BI Server URL>",
        "siteidentifier": "<Site Identifier>",
        "embedsecret": "<Embed Secret Key>",
        "dashboard": {  # Dashboard ID property is mandatory only when using BoldBI version 14.1.11.
            "id": "<Dashboard Id>" 
        },
        # Anonymous details
        "email": "<Anonymous User Email>",  # Email of the anonymous user (not in Bold BI)
        "anonymous": {
            "isenabled": true,
            "groupname": "<Group Name>"  # The group name under which the anonymous user will be authorized
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
    "dashboard" => [ // Dashboard ID property is mandatory only when using BoldBI version 14.1.11.
      "id" => "<Dashboard Id>"
    ],
    // Anonymous details
    "email" => "<Anonymous User Email>",  // Email of the anonymous user (not in Bold BI)
    "anonymous" => [
      "isenabled" => true,  // This property enables anonymous embedding.
      "groupname" => "<Group Name>"  // The group name under which the anonymous user will be authorized
    ]
 ];

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
?>
```
:::ENDTAB
:::ENDTABS

  <table>
    <thead>
      <tr>
        <th style="width: 25%;" align="left">Parameter</th>
        <th style="width: 75%;" align="left">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>email</td>
        <td>Email of the anonymous user (not in Bold BI)</td>
      </tr>
      <tr>
        <td>anonymous: { groupname: }</td>
        <td>The group name under which the anonymous user will be authorized</code></td>
      </tr>  
    </tbody>
  </table>

### Generate Embed Token for Anonymous User below v14

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
  const useremail = "<Anonymous User Email>";  // Email of the anonymous user (not in Bold BI)
  const groupName = "<Group Name>";  // The group name under which the anonymous user will be authorized

  // Build query string
  let queryString = "embed_nonce=" + crypto.randomUUID();
  queryString += "&embed_dashboard_id=" + dashboardId;

  // Add anonymous embedding and group details to the query string
  queryString += "&embed_anonymous_token=true";  // This property enables anonymous embedding.
  queryString += "&embed_authorize_group=" + groupName;  // Authorize the user with a specific group
  queryString += "&embed_user_email=" + useremail;  // The email associated with the anonymous user

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
    var useremail = "<Anonymous User Email>";  // Email of the anonymous user (not in Bold BI)
    var groupName = "<Group Name>";  // The group name under which the anonymous user will be authorized

    // Build query string
    var queryString = "embed_nonce=" + Guid.NewGuid().ToString();
    queryString += "&embed_dashboard_id=" + dashboardId;

    // Add anonymous embedding and group details to the query string
    queryString += "&embed_anonymous_token=true";  // This property enables anonymous embedding.
    queryString += "&embed_authorize_group=" + groupName;  // Authorize the user with a specific group
    queryString += "&embed_user_email=" + useremail;  // The email associated with the anonymous user

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
def TokenGeneration(request):
    # Required details
    serverUrl = "<Bold BI Server URL>"
    siteIdentifier = "<Site Identifier>"
    serverApiUrl = serverUrl + "/api/" + siteIdentifier
    dashboardId = "<Dashboard Id>"
    embedSecret = "<Embed Secret Key>"

    # Other required details
    userEmail = "<Anonymous User Email>" # Email of the anonymous user (not in Bold BI)
    groupName = "<Group Name>" # The group name under which the anonymous user will be authorized

    # Build query string
    embedQuerString = "embed_nonce=" + str(uuid.uuid4())
    embedQuerString += "&embed_dashboard_id=" + dashboardId

    # Add anonymous embedding and group details to the query string
    embedQuerString += "&embed_anonymous_token=true"
    embedQuerString += "&embed_authorize_group=" + groupName
    embedQuerString += "&embed_user_email=" + userEmail

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
  $serverApiUrl = $serverUrl . "/api/" . $siteIdentifier;
  $dashboardId = "<Dashboard Id>";
  $embedSecret = "<Embed Secret Key>";

  // Other required details
  $useremail = "<Anonymous User Email>";  // Email of the anonymous user (not in Bold BI)
  $groupName = "<Group Name>";  // The group name under which the anonymous user will be authorized

  // Build query string
  $embedQuerString = "embed_nonce=" . generate_uuid_v4();
  $embedQuerString = $embedQuerString . "&embed_dashboard_id=" . $dashboardId;
  
  // Add anonymous embedding and group details to the query string
  $embedQuerString = $embedQuerString . "&embed_user_email=" . $useremail;
  $embedQuerString = $embedQuerString . "&embed_anonymous_token=true";
  $embedQuerString = $embedQuerString . "&embed_authorize_group=" . $groupName;

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

  <table>
    <thead>
      <tr>
        <th style="width: 20%;" align="left">Property</th>
        <th style="width: 80%;" align="left">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>embed_user_email</td>
        <td>Email of the anonymous user (not in Bold BI)</td>
      </tr>
      <tr>
        <td>embed_authorize_group</td>
        <td>The group name under which the anonymous user will be authorized</code></td>
      </tr>  
    </tbody>
  </table>

## Embed the Dashboard for the Anonymous User

After generating the embed token, you can embed the dashboard into your frontend application using the Bold BI Embed SDK. The token will authorize the anonymous user based on the group assignment.

```html
<div id="dashboard_container_id"></div>
<script>
    var boldbiEmbedInstance = BoldBI.create({
        serverUrl: "<Bold BI Server URL>",
        dashboardId: "<Dashboard Id>",
        embedContainerId: "dashboard_container_id",
        embedToken: "<Embed token generated from backend server>"
    });
    boldbiEmbedInstance.loadDashboard();  
</script>
```

> **Important:** Anonymous user support is available only for the single dashboard viewer starting from Bold BI Version 10.1.18. It also supports Row-Level Security (RLS) for dynamic data filtering. You can find more details on implementing RLS [here.](/embedding-options/embedding-sdk/row-level-security/)