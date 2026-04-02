---
layout: post
title: Embedding Analytics with PHP and JavaScript | Bold BI Docs
description: Learn how to embed an analytics dashboard with ASP.NET Core and JavaScript application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Embedding Bold BI Dashboards in PHP using the Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/php-sample) get the sample application, which demonstrates the rendering of the dashboard available on your Bold BI server. After that, there are steps to create a new embedding application in `PHP` on your own.

> **NOTE:** Reading the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation is the best way to begin. The `Getting Started` guide provides you with enough information that you need to know before working on the sample.

## How to run the sample

1. Please [get](https://github.com/boldbi/php-sample) the PHP sample.    

2. Please ensure that you have enabled embed authentication on the `embed settings` settings page. If it is not currently enabled, please refer to the provided image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.

   ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

3. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the image below for visual guidance.

   ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
   ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
4. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/php-sample/tree/master/rest) within the application. Make sure that you have placed it correctly in the application, as shown in the image.

   ![EmbedConfig image](/static/assets/javascript/sample/images/php-embed-config.png)
        
    <meta charset="utf-8"/>
       <table>
       <tbody>
       <tr>
          <td align="left">ServerUrl</td>
          <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, https://demo.boldbi.com/bi)</td>
       </tr>
       <tr>
          <td align="left">SiteIdentifier</td>
          <td align="left">For the Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be an empty string.</td>
       </tr>
       <tr>
          <td align="left">UserEmail</td>
          <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard list.</td>
       </tr>
       <tr>
          <td align="left">EmbedSecret</td>
          <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='/site-administration/embed-settings/'>Administration page</a> </td>
       </tr>
       <tr>
          <td align="left">Environment</td>
          <td align="left">Your Bold BI application environment. (If it is a cloud analytics server, use `BoldBI.Environment.Cloud`; if it is your server, use `BoldBI.Environment.Enterprise`)</td>
       </tr>
       <tr>
          <td align="left">DashboardId</td>
          <td align="left">Item ID of the dashboard to be embedded in your application.</td>
       </tr>
       <tr>
          <td align="left">ExpirationTime</td>
          <td align="left">Token expiration time. (In the EmbedConfig.json file, the default token expiration time is 10000 seconds)</td>
       </tr>
       </tbody>
       </table>

5. To run sample in `Visual Studio Code`, Right-click the `index.php` file and select `PHP Server: Serve project`.

6. The dashboard can be edited in design mode, allowing users to create a new dashboard with the following changes in the `renderDashboard()` method.

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">dashboardId</td>
    <td align="left">Provide the dashboard ID of the dashboard you want to embed in view or edit mode. Ignore this property to create a new dashboard.</td>
    </tr>
    <tr>
    <td align="left">mode</td>
    <td align="left">In which mode do you want to render the dashboard? It can either be 'BoldBI.Mode.View' or 'BoldBI.Mode.Design' mode. </td>
    </tr>
    <tr>
    <td align="left">embedToken</td>
    <td align="left">Provide the access token which you get from the 'TokenGeneration' API action in the application.</td>
    </tr>
    </tbody>
    </table>

## How this sample works

 1. To generate an access token, call the `tokengeneration.php` with the provided `embedConfig` values.
    ![Get token Details](/static/assets/javascript/sample/images/php-token.png)

 2. Once the token is generated, it will be returned to the `index.php` file and the dashboard will start to render it.
    ![Render dashboard](/static/assets/javascript/sample/images/php-dashboard.png)
    
## Steps to create new PHP application to embed dashboard

 1. To install the `PHP Intelephense` and `PHP Server` extensions in Visual Studio Code.
    ![PHP intelephence](/static/assets/javascript/sample/images/php_install.png#max-width=60%)
    ![PHP Server](/static/assets/javascript/sample/images/php_server.png#max-width=60%)

 2. [Download](https://windows.php.net/download/) the PHP from the official website mentioned below and include the path in the system environment variable.

 3. In the desired location, create a folder for this project and open it in Visual Studio Code.

 4. Create an `index.php` file inside the folder and define variables as follows.

     ```js
     <?php
    // The ServerURL, DashboardPath, and AuthorizeSeverURL to embed the widget.
    $serverUrl = "http://localhost:55106/bi/site/site1";
    $dashboardId ="a3042415-5c57-4f66-b475-8502be4987e8";
    $authorizeServerUrl = "http://localhost:8070/boldbi/dashboard/rest/authorizeserver.php";
    ?>
     ```

 5. Refer to the mandatory CDN file in the `<head>` tag as follows.
     ```js
    <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v15.2.6/boldbi-embed.js"></script>
     ```

 6. In the `<body>` tag, create the DOM element with the id `dashboard` and initialize the `embedSample()` method. The `embedSample()` method is implemented in the `<script>` tag as follows.

     ```js
        <div id="dashboard">
        </div>
        <script>
            function embedSample() {
                var dashboardemb = BoldBI.create({
                    serverUrl: '<?php echo $serverUrl;?>', //Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://demo.boldbi.com/bi/site/site1)
                    dashboardId: '<?php echo $dashboardId;?>', //Dashboard id of the dashboard you want to embed here.
                    embedContainerId: "dashboard",
                    embedType: BoldBI.EmbedType.Component,
                    environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
                    mode: BoldBI.Mode.View,
                    height: "700px",
                    width: "1500px",
                    authorizationServer: {
                        url: '<?php echo $authorizeServerUrl;?>' //URL from which particular dashboard details is obtained from server.
                    },
                    expirationTime: "100000", //Set the duration for the token to be alive.
                });
                dashboardemb.loadDashboard();
            }
        </script>
     ```
    
 7. Create a file named `authorizeserver.php` inside a folder called `rest`, and define the variables `secretCode` and `userEmail` for authorization purposes.

     ```js
            $secretCode = "";// Use your SecretCode here.
            $userEmail = ""; // Email address of the user.

            $data = json_decode(file_get_contents('php://input'), true);

           // Getting the embedQuerString and dashboardServerApiUrl from the BoldBI wrapper
            if ($data != null && $data["embedQuerString"] !="" && $data["dashboardServerApiUrl"]!="") {
            $embedQuerString = $data["embedQuerString"];
            $dashboardServerApiUrl= $data["dashboardServerApiUrl"];
            $dashdetails = GetEmbedDetails($embedQuerString, $dashboardServerApiUrl);
             header('Content-type: application/json');
            echo json_encode($dashdetails);
            }
 
            // This function used to get dashboard details from the Bold BI Server. 
            function GetEmbedDetails($embedQuerString, $dashboardServerApiUrl){
            global $userEmail;
            $embedQuerString = $embedQuerString . "&embed_user_email=" . $userEmail. "&embed_datasource_filter=[{&&StoreName=Trousers','Jackets}]";
            $embedSignature = "&embed_signature=" . getSignatureUrl($embedQuerString);
            //echo $embedSignature;
            $embedDetailsUrl = "/embed/authorize?" . $embedQuerString . $embedSignature;
	        //echo   $dashboardServerApiUrl . $embedDetailsUrl;
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
            $response = curl_exec($curl);
            $err = curl_error($curl);
            curl_close($curl);

            return $response;
            }

            //// Prepare embed_Signature by encrypting with secretCode ////
            function getSignatureUrl($embedQuerString) {
            global $secretCode; 
            $keyBytes = utf8_encode($secretCode);            
            $messageBytes = utf8_encode($embedQuerString);
            $hashMessage = hash_hmac('sha256',$messageBytes, $keyBytes, true);
            $signature = base64_encode($hashMessage);
            return $signature;
            }
     ```

 8. To obtain specific dashboard details, you should implement the `GetDetails()` function, which utilizes the `GetSignatureUrl()` method to generate the algorithm. In this API, the `embedQuerString`,`userEmail`, and the value from the `GetSignatureUrl()` method are appended as query parameters in the URL to retrieve the details of a specific dashboard.

 9. Now, right-click and select the `PHP Server: Server project`.
    ![Authorize Server](/static/assets/javascript/sample/images/php_run.png#max-width=30%)