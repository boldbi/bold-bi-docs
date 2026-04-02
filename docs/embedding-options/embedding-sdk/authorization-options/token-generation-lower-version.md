---
layout: post
title: Bold BI Dashboard v13 - JavaScript Embedding | Bold BI Docs
description: Learn how to securely embed Bold BI dashboards into your application using the SDK and embed token authentication below v14.1.
platform: bold-bi
documentation: ug
---

# Embed Token Generation

> **Note:** We enhanced a newer approach to token generation using the object model structure. Please refer to this [link](/embedding-options/embedding-sdk/token-generation/) to learn more.

Below Bold BI v13.2, we used a query string approach to generate a token by calling the token generation endpoint via a GET API call.

The following diagram illustrates the token generation flow:

![Token Generation v13 diagram](/static/assets/javascript/images/v13-token-diagram.png)

:::TABS
:::TAB ['active'] ['Node.js'] ['tokengeneration.js']
```js
/*
  Example: Embed Token Generation (Node.js)
  Requires: express, crypto, https, http
  Install express: npm install express
*/

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
  const userEmail = "<User Email>";
  const embedSecret = "<Embed Secret Key>";

  // Build query string
  let queryString = "embed_nonce=" + crypto.randomUUID();
  queryString += "&embed_dashboard_id=" + dashboardId;
  queryString += "&embed_user_email=" + userEmail;

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
    var userEmail = "<User Email>";
    var embedSecret = "<Embed Secret Key>";

    // Build query string
    var queryString = "embed_nonce=" + Guid.NewGuid().ToString();
    queryString += "&embed_dashboard_id=" + dashboardId;
    queryString += "&embed_user_email=" + userEmail;

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
    userEmail = "<User Email>"
    embedSecret = "<Embed Secret Key>"

    # Build query string
    embedQuerString = "embed_nonce=" + str(uuid.uuid4())
    embedQuerString += "&embed_dashboard_id=" + dashboardId
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
    $serverApiUrl = serverUrl . "/api/" . siteIdentifier;
    $dashboardId = "<Dashboard Id>";
    $userEmail = "<User Email>";
    $embedSecret = "<Embed Secret Key>";

    // Build query string
    $embedQuerString = "embed_nonce=" . generate_uuid_v4();
    $embedQuerString = $embedQuerString . "&embed_dashboard_id=" . $dashboardId;
    $embedQuerString = $embedQuerString . "&embed_user_email=" . $useremail;

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

> **Note:** Here we are generating a token based on the provided user permission and not dashboard embedding specific. This token can be used for all other supported types of embedding. As of now, we have provided the dashboard ID as a mandatory valid property to generate the token. We will remove this dashboard ID mandatory requirement in an upcoming future release.

> **Note:** The supported embeddings are dashboard viewer and dashboard designer.

The following mandatory values must be configured in your backend application to generate an embed token.

<meta charset="utf-8" />
<table>
  <thead>
    <tr>
      <th style="width: 15%;" align="left">Parameter</th>
      <th style="width: 70%;" align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left"><code>serverUrl</code></td>
      <td align="left">
        Base URL of your Bold BI application (e.g.,
        <code>https://your-company.boldbi.com/bi</code>).
      </td>
    </tr>
    <tr>
      <td align="left"><code>siteIdentifier</code></td>
      <td align="left">Unique site/tenant identifier in Bold BI (e.g., site/tenant)</td>
    </tr>
    <tr>
      <td align="left"><code>dashboardId</code></td>
      <td align="left">
        Unique ID of the dashboard<br />
        <b>How To get:</b> Open the dashboard in BI application and copy the ID from the browser's URL.
      </td>
    </tr>
    <tr>
      <td align="left"><code>userEmail</code></td>
      <td align="left">
        Email of the user viewing the dashboard. The user must exist in Bold BI and have permission to access it.
      </td>
    </tr>
    <tr>
      <td align="left"><code>embedSecret</code></td>
      <td align="left">
        Secret key used to sign authorization requests.<br />
        <b>How To get:</b> Retrieve this from the
        <a href="/site-administration/embed-settings/"> Bold BI settings page</a
        >.<br />
        </td> 
    </tr>    
  </tbody>
</table>

> **Important:** Never expose `embedSecret` to the client. Generate tokens only on your backend and return `access_token` to the browser.