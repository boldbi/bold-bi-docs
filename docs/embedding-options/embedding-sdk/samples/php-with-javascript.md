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

2. In the `Index.php`, set your server details in the EmbedProperties as follows.
    ![Embed Properties](/static/assets/javascript/sample/images/php-props.png#max-width=95%)
        
    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">serverUrl</td>
    <td align="left">Dashboard Server BI URL Enterprise Edition- http://localhost:5000/bi/site/site1Cloud -http://dashboard.syncfusion.com/bi
    </td>
    </tr>
    <td align="left">dashboardId</td>
    <td align="left">Dashboard id of the dashboard you want to embed here. Here dashboard id first dashboard in list will be assigned, if you click particular dashboard from list, that particular dashboard id will be passed.</td>
    </td>
    </tr>
    <tr>
    <td align="left">authorizeServerUrl</td>
    <td align="left">URL pointing to AuthorizeServer API file. We have running PHP sample in 8080 port.
    Ex: <code> http://localhost:8080/rest/authorizeserver.php</code>
    </td>
    </tr>
    </tbody>
    </table>

3. In the `AuthorizeServer.php` set the UserEmail and Embed Secret key. These keys are used to create an embed signature and authorize the server in the PHP sample. You can learn more about the [authorization server](/security-configuration/authorize-server/).

    ![Authorize Server](/static/assets/javascript/sample/images/authorize-server-php.png#max-width=80%)
    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboards list</td>
    </tr>
    <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">You could get your EmbedSecret key from Embed tab by enabling Enable embed authentication in <a href='/site-administration/embed-settings/'>Administration page </a></td>
    </tr>
    </tbody>
    </table>

4. Please run the PHP sample.

5. The dashboard can be rendered in design mode or created with the following changes in the `embedSample()` method.

     ```js
        function embedSample() {
            var dashboardemb = BoldBI.create({
                serverUrl: '<?php echo $serverUrl;?>',
                dashboardId: '<?php echo $dashboardId;?>', //Provide the item id to render it in the design mode and create a dashboard to remove this property.
                embedContainerId: "dashboard",
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
                mode: BoldBI.Mode.Design,
                height: "700px",
                width: "1500px",
                authorizationServer: {
                    url: '<?php echo $authorizeServerUrl;?>'
                },
                expirationTime: "100000",
            });
            dashboardemb.loadDesigner();
        }
     ```

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">serverUrl</td>
    <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://dashboard.syncfusion.com/bi/site/site1)</td>
    </tr>
    <tr>
    <td align="left">dashboardId</td>
    <td align="left">Provide the dashboard id of the dashboard you want to embed in view or edit mode. Ignore this property to create new dashboard.</td>
    </tr>
    <tr>
    <td align="left">embedContainerId</td>
    <td align="left">Container Id in which dashboard renders.It should not contain hypen.</td>
    </tr>
    <tr>
    <td align="left">mode</td>
    <td align="left">In which mode you want to render dashboard. It can either be 'View' or 'Design' mode. </td>
    </tr>
    <tr>
    <td align="left">expirationTime</td>
    <td align="left">Set the duration for the token to be alive.</td>
    </tr>
    <tr>
    <td align="left">authorizationServer</td>
    <td align="left">Url of the 'GetEmbedDetails' method in the 'authorizeserver.php' file.</td>
    </tr>
    </tbody>
    </table>

## How this sample works
 1. When embedding a dashboard for rendering, you need to authorize the server URL by making an API call to the `GetEmbedDetails` function with the provided `EmbedProperties` values.
    ![Getdetails](/static/assets/javascript/sample/images/embeddetails-php.png#max-width=80%)

 2. In the above authorization, the `SignatureUrl` has been generated using the provided `EmbedSecret` key and has validated the embed details in Bold BI. Only then will the embedded widget be rendered in the `Index.php`.

 3. In the `Index.php`, change the dashboard Id as you desire to embed.
    ![Embed Properties](/static/assets/javascript/sample/images/php-props.png#max-width=95%)
    
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
    <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v8.3.17/boldbi-embed.js"></script>
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