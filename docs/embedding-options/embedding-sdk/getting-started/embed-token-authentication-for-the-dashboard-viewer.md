---
layout: post
title: Bold BI dashboard - JavaScripts Embedding | Bold BI Docs
description: Learn to embed Bold BI dashboards seamlessly in your business application using SDK, enhancing data visualization and decision-making capabilities.
platform: bold-bi
documentation: ug

---
# Embed Token Authentication for the dashboard viewer

This section outlines the use case for embedding Bold BI dashboards using `embedToken` authentication.

## How to embed Bold BI dashboard using javascript

1. Include the Bold BI Embed SDK in the `<head>` tag of your HTML page.
2. Create a `<div>` element in the `<body>` tag with a unique ID to serve as the dashboard container.

    ```js
    <head>
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v15.2.6/boldbi-embed.js"></script>
    </head>
    <body>
        <div id="dashboard_container"></div>
    </body>
    ```

3. In the body tag, define functions to handle embed token generation and create a BoldBI instance, then call the initialization function using the `onload` attribute. This ensures secure dashboard loading with user-specific access.

   ## Embed Using Dashboard ID with Embed Token Authentication
        
    Use the following example to embed a dashboard using its ID and a dynamically generated embed token:

    ```js
     <body onload="embedSample()">
        <div id="dashboard_container"></div>
        <script>
            function embedSample(dashboardId) {
               var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: rootUrl,
                    dashboardId: dashboardId,
                    embedContainerId: "dashboard_container",
                    embedToken: token
                });
                boldbiEmbedInstance.loadDashboard();
            }
        </script>
    </body>
    ```

## How to Generate an embedToken

To securely embed a Bold BI dashboard, you must first generate an embedToken. This process involves constructing an embed query string, sending it to the authorization server, and using the returned token to render the dashboard.
 1. **Construct the Embed Query String**: Begin by creating a query string that includes the dashboard ID, access mode, expiration time, and a unique nonce. This ensures each request is secure and time-bound.

    ```js
        function getDashboardAccessToken(dashboardId, mode, expirationTime) {
            const queryString = generateEmbedQueryString(dashboardId, mode, expirationTime);
            const payload = buildRequestPayload(queryString);
            sendAuthorizationRequest(payload, dashboardId);
        }
        function generateEmbedQueryString(dashboardId, mode, expirationTime) {
        return [
            `embed_nonce=${generateUUID()}`,
            `embed_dashboard_id=${dashboardId}`,
            `embed_mode=${mode}`,
            `embed_timestamp=${Math.floor(Date.now() / 1000)}`,
            `embed_expirationtime=${expirationTime}`
        ].join('&');
        }

    ```

2. **Generate a UUID**: A UUID is used as a nonce to uniquely identify each request.
    ```js
        function generateUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                const r = Math.random() * 16 | 0;
                const v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

    ```

 3. **Build the Request Payload**: The payload includes the query string and the API URL of the Bold BI server.

    ```js       
        function buildRequestPayload(queryString) {
          return {
            embedQuerString: queryString,
            dashboardServerApiUrl: `${rootUrl}/api/${siteIdentifier}`
          };
        }
    ```
 4. **The Authorization Request**: Send the payload to your backend authorization server, which will generate the token and return it to the client.
    
    ```js
    function sendAuthorizationRequest(payload, dashboardId) {
      $.ajax({
        url: authorizationServerUrl,
        type: "POST",
        async: true,
        data: JSON.stringify(payload),
        contentType: "application/json",
        success: function (response) {
          try {
            const parsed = typeof response === 'string' ? JSON.parse(response) : response;
            let accessToken;

            if (Array.isArray(parsed?.Data)) {
              for (const item of parsed.Data) {
                if (item.access_token) {
                  accessToken = item.access_token;
                  isMultiTab = true;
                  break;
                }
              }
            } else {
              accessToken = parsed.Data.access_token;
            }

            if (accessToken) {
              token = accessToken;
              renderDashboard(dashboardId);
            } else {
              alert("Access token not found in response.");
            }
          } catch (error) {
            alert("Error parsing response:", error);
          }
        }
      });
    }


 5. **Backend Token Generation Logic:** On the server side, the embed query is signed and sent to the Bold BI server to retrieve the token.

    ```c#
        [HttpPost]
        [Route("AuthorizationServer")]
        public string AuthorizationServer([FromBody] object embedQuerString)
        {
            var embedClass = JsonConvert.DeserializeObject<EmbedClass>(embedQuerString.ToString());
            var embedQuery = embedClass.embedQuerString;

            embedQuery += "&embed_user_email=" + GlobalAppSettings.EmbedDetails.UserEmail;

            double timeStamp = (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
            embedQuery += "&embed_server_timestamp=" + timeStamp;

            var embedDetailsUrl = "/embed/authorize?" + embedQuery + "&embed_signature=" + GetSignatureUrl(embedQuery);

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(embedClass.dashboardServerApiUrl);
                client.DefaultRequestHeaders.Accept.Clear();

                var result = client.GetAsync(embedClass.dashboardServerApiUrl + embedDetailsUrl).Result;
                return result.Content.ReadAsStringAsync().Result;
            }
        }
    ```
 4. The renderDashboard() method utilizes the generated token through the embedToken property to securely load the dashboard.
 5. For best practices on using this token efficiently, refer to [this guide](/embedding-options/embedding-sdk/retrieve-dashboard-listing/).


## Supported Scenarios with embedToken
* For Bold BI users
    * Dashboard viewer
    * Dashboard Designer
    * Multi-tab dashboard
* For anonymous users
    * Dashboard viewer
   
> Note: To render multi tab dashboard we have to set the **isMultiTabDashboard** as true in the BoldBI.Create method 