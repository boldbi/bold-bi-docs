---
layout: post
title: Secure Dashboard Embedding via Backend Authorization | Bold BI
description: Learn how to securely embed Bold BI dashboards using a backend authorization server with the Embed SDK.
platform: bold-bi
documentation: ug
---

# Secure Dashboard Embedding via Backend Authorization

When embedding Bold BI dashboards using the Embed SDK, the **Authorization URL** plays a crucial role in securely fetching the access token and dashboard data. Here's a step-by-step breakdown of the workflow:

## Overview

The Authorization Server is a secure backend service that acts as the bridge between your client application (where the dashboard is embedded) and the Bold BI server. This is done through a backend endpoint in your application — referred to as the `AuthorizationServer`, configured using the [authorizationServer.url](/embedding-options/embedding-sdk/component-api-v2.0/dashboard/dashboard-members/#url) member in the Embed SDK. You can refer this [link](/security-configuration/authorize-server/) to know more.

Think of it as a bridge:
* The frontend (using BoldBI SDK) sends a request to your backend.
* Your backend (Authorization Server) signs the request and forwards it to Bold BI.
* Bold BI validates the user and dashboard access, then returns an access token.

## How it works

![sdkBased-workflow](/static/assets/javascript/images/javascript-based.png)

1. **SDK Sends Request to Authorization Server**
    - The SDK sends a POST request to the configured `authorizationServer.url`.
    - The request includes dashboard ID, user identity, and site information.

2. **Authorization Server Validates and Prepares Payload**
    - It validates the request.
    - Constructs the payload with user and dashboard details.

3. **Authorization Server Sends Request to Bold BI**
    - The server forwards the payload to Bold BI’s token endpoint.        
    - Bold BI verifies the signature and user permissions.

4. **Bold BI Responds with Token**
    - If valid, Bold BI returns an access token and dashboard metadata.
    - If invalid, it returns an error message.

5. **Authorization Server Forwards Response to SDK**
    - The token and metadata are returned to the client browser.
    - The SDK uses this data to render the embedded dashboard.

## Example Integration
Here’s how you can configure the Embed SDK with an Authorization URL in your client-side code:

```js
var boldbiEmbedInstance = BoldBI.create({
    serverUrl: "http://localhost:60515/bi/site/site1",
    dashboardId: "c5bab292-0ee6-4ee7-9dfa-d6b3cffed7ff",
    embedContainerId: "dashboard_container",
    authorizationServer: {
        url: "https://your-backend.com/authorize"
    }
});

boldbiEmbedInstance.loadDashboard();
```

And a basic example of what your Authorization Server endpoint might look like in your backend ASP.NET Core and Node.js application:

Here the `embedQuerString` received as a JSON object in the HTTP request body from the Embed SDK, and it contains a URL-style query string like below.
![embedclassresponse](/static/assets/javascript/images/embedclass-response.png)

The `embedClass` is a C# class used to convert (deserialize) that JSON into a usable object.

<meta charset="utf-8"/>
<table>
<tbody>
<tr>
<th align="left">Parameter</th>
<th align="left">Value</th>
</tr>
<tr>
<td align="left">dashboardServerApiUrl</td>
<td align="left">http://localhost:60515/bi/api/site/site1</td>
</tr>
<tr>
<td align="left">embedQuerString</td>
<td align="left">embed_nonce=3601299f-541b-4cce-b1f2-aacda277134f&embed_dashboard_id=c5bab292-0ee6-4ee7-9dfa-d6b3cffed7ff&embed_dashboard_ids=&embed_dashboard_path=&embed_dashboard_paths=&pinboard_name=&embed_mode=view&embed_timestamp=1756891690&embed_expirationtime=86400</td>
</tr>
</tbody>
</table>

:::TABS
:::TAB ['active'] ['Node.js'] ['embed.js']
```js
app.post('/authorize', function (req, response) {
  var embedQuerString = req.body.embedQuerString;
  var dashboardServerApiUrl = req.body.dashboardServerApiUrl;

  embedQuerString += "&embed_user_email=" + userEmail;
  embedQuerString += "&embed_server_timestamp=" + Math.round((new Date()).getTime() / 1000);
  var embedSignature = "&embed_signature=" + GetSignatureUrl(embedQuerString);
  var embedDetailsUrl = "/embed/authorize?" + embedQuerString + embedSignature;

  var serverProtocol = url.parse(dashboardServerApiUrl).protocol == 'https:' ? https : http;
  serverProtocol.get(dashboardServerApiUrl + embedDetailsUrl, function(resultContent){
        var str = '';
        resultContent.on('data', function (chunk) {
               str += chunk;
         });
        resultContent.on('end', function () {
             response.send(str);
        });
  });
})

function GetSignatureUrl(queryString)
{
  var keyBytes = Buffer.from(embedSecret);
  var hmac = crypto.createHmac('sha256', keyBytes);
  data = hmac.update(queryString);
  gen_hmac= data.digest().toString('base64');

  return gen_hmac;
}
```
:::ENDTAB
:::TAB ['.NET'] ['EmbedController.cs']
```c#
[HttpPost]
[Route("authorize")]
public string AuthorizationServer([FromBody] object embedQuerString)
{
    var embedClass = Newtonsoft.Json.JsonConvert.DeserializeObject<EmbedClass>(embedQuerString.ToString());

    var embedQuery = embedClass.embedQuerString;
    // User your user-email as embed_user_email
    embedQuery += "&embed_user_email=" + GlobalAppSettings.EmbedDetails.UserEmail;
    //To set embed_server_timestamp to overcome the EmbedCodeValidation failing while different timezone using at client application.
    double timeStamp = (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
    embedQuery += "&embed_server_timestamp=" + timeStamp;
    var embedDetailsUrl = "/embed/authorize?" + embedQuery + "&embed_signature=" + GetSignatureUrl(embedQuery);

    using (var client = new HttpClient())
    {
        client.BaseAddress = new Uri(embedClass.dashboardServerApiUrl);
        client.DefaultRequestHeaders.Accept.Clear();

        var result = client.GetAsync(embedClass.dashboardServerApiUrl + embedDetailsUrl).Result;
        string resultContent = result.Content.ReadAsStringAsync().Result;
        return resultContent;
    }
}

public string GetSignatureUrl(string queryString)
{
    if (queryString != null)
    {
        var encoding = new System.Text.UTF8Encoding();
        var keyBytes = encoding.GetBytes(GlobalAppSettings.EmbedDetails.EmbedSecret);
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
    body = json.loads(request.body.decode('utf-8'))
    embedQuerString = body.get("embedQuerString")
    dashboardServerApiUrl = body.get("dashboardServerApiUrl")
    embedQuerString = embedQuerString +"&embed_user_email=" + models.EmbedProperties.UserEmail
    timeStamp = (datetime.datetime.utcnow() - datetime.datetime(1970, 1, 1)).total_seconds()
    embedQuerString += "&embed_server_timestamp=" + str(timeStamp)
    embedDetailsUrl = "/embed/authorize?" + embedQuerString + "&embed_signature=" + get_signature_url(embedQuerString)
    result_content=requests.get(dashboardServerApiUrl + embedDetailsUrl)
    return HttpResponse(result_content)


def get_signature_url(message):
    EmbedSecret = models.EmbedProperties.EmbedSecret
    keyBytes = bytes(EmbedSecret.encode('utf-8'))
    messageBytes = bytes(message.encode('utf-8'))
    hashMessage = base64.b64encode(hmac.new(keyBytes,messageBytes,digestmod=hashlib.sha256).digest())
    
    return str(hashMessage, "utf-8")
``` -->
:::TAB ['PHP'] ['embed.php']
```php
<?php
function GetEmbedDetails($embedQuerString, $dashboardServerApiUrl){
  global $userEmail;
  global $serverTimeStamp;
  $embedQuerString = $embedQuerString . "&embed_user_email=" . $userEmail;
  $embedQuerString = $embedQuerString . "&embed_server_timestamp=" . $serverTimeStamp;
  $embedSignature = "&embed_signature=" . getSignatureUrl($embedQuerString);
  $embedDetailsUrl = "/embed/authorize?" . $embedQuerString . $embedSignature;

  $curl = curl_init();
  curl_setopt_array($curl, array(
    CURLOPT_URL => $dashboardServerApiUrl . $embedDetailsUrl,
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
  return $response;
}

// Prepare embed_Signature by encrypting with secretCode
function getSignatureUrl($embedQuerString) {
  global $secretCode; 
  $keyBytes = mb_convert_encoding($secretCode, 'UTF-8');
  $messageBytes = mb_convert_encoding($embedQuerString, 'UTF-8');
  $hashMessage = hash_hmac('sha256',$messageBytes, $keyBytes, true);
  $signature = base64_encode($hashMessage);
  return $signature;
}
?>
:::ENDTAB
:::ENDTABS

 Here, it will return the dashboard details in the `resultContent` response in the form of a raw JSON string from the Bold BI server if the provided dashboard is valid. Please find the below image of the resultContent.

![authorizeresponse](/static/assets/javascript/images/authorize-response.png)

:::TABS
:::TAB ['active'] ['JSON'] ['Response']
```json
{
  "ApiStatus": true,
  "Data": {
    "email": "test@boldbi.com",
    "username": "testuser",
    "access_token": "eyJhbGciSI6IjE3NTY4OTEwMDYiLCJjdXN0b21fYXR0cmlidXRlIjOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudWFiYXJuYS5iQHN5bmNmdXNpb24uY29tIiwidXBuIjoiYW51YWJhcm5hIiwibmFtZWlkIjoiMSIsInVuaXF1ZV9uYW1lIjoiNmUxMmVhNjYtMWU3My00NDVmLWJlMzMtNDY5OTg0ZjVkODNiIiwiSVAiOiI6OjEiLCJpc3N1ZWRfZGF0Zoie30iLCJuYmYiOjE3NTYMiOiJodHRwOi8vbG9jYWxob3N0OjYwNTE1L2JpL3NpdGUvc2l0ZTEiLCJ4OTEwMDYsImV4cCI6MTc1Njk3NzQwNiwiaWF0IjoxNzU2ODkxMDA2LCJpc3hdWQiOiJodHRwOi8vbG9jYWxob3N0OjYwNTE1L2JpL3NpdGUvc2l0ZTEifQ.O1SqPb4gpcwCnqKHC1LtAdVWvdMnMKzDt8iz3vmIG-o",
    "token_type": "bearer",
    ".expires":"2/12/2026 12:29:05 PM",
    "UserDetail": "{\"DisplayName\":\"Test user B\",\"Email\":\"test@boldbi.com\",\"Username\":\"testuser\",\"FirstName\":\"Test user\"...}",
    "ItemDetail": "{\"CanClone\":false,\"CanCopy\":false,\"CanCreateItem\":false,\"CanDelete\":false,\"CanWrite\":true,\"CategoryDescription\":null,\"CategoryId\":\"3ae74984-a689-4997-88b9-3c4e77f10dda\",\"CategoryName\":\"Getting Started Tutorial\",\"CreatedByDisplayName\":\"Test user B\",\"CreatedById\":1,\"CreatedDate\":\"08/08/2025 11:18 AM\",\"FailureOccurence\":0,\"Description\":\"This supply chain performance dashboard helps to effectively track supply chain KPIs related to the efficiency of sales orders processing.\",\"Id\":\"c5bab292-0ee6-4ee7-9dfa-d6b3cffed7ff\",\"ItemLocation\":\"c5bab292-0ee6-4ee7-9dfa-d6b3cffed7ff/1\",\"Name\":\"Supply Chain Performance Dashboard\"...}"
  },
  "Status": true
}
```
:::ENDTAB
:::ENDTABS

> **NOTE:** If you're passing a large payload, use the POST method for the authorization call to avoid URL length limitations. See this [KB article](https://support.boldbi.com/kb/article/14274/passing-large-size-filter-parameter-through-the-embeddatasourcefilter-query-parameter-for-filtering) for details.