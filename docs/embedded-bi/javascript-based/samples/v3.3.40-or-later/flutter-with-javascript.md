---
layout: post
title:  Embed a dashboard in Flutter App with JavaScript | Bold BI Docs
description: Explore and learn the steps for, JavaScript-based dashboard embedding with Flutter application(s), which has been supported by Bold BI since v5.1.55.
platform: bold-bi
documentation: ug
---

# Embedding Bold BI Dashboards in Flutter using the Embedded SDK

The link has been provided to [download](https://onpremise-demo.boldbi.com/getting-started/flutter/sample.zip) the sample application, which demonstrates the dashboard rendering in your Bold BI server and followed by steps to create a new embedding application in the `Flutter` on your own.

> **NOTE:** Reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation is the best way to get started. The `Getting Started` guide gives you enough information that you need to know before working on the sample. 

## How to run the sample
 1. Please [download](https://onpremise-demo.boldbi.com/getting-started/flutter/sample.zip) the Flutter sample from provided link.    

 2. In the `index.html`, set your server details to the `EmbedProperties` as follows.  
    ![Embed Properties](/static/assets/embedded/javascript/sample/images/flutter_EmbedProperties.png#max-width=75%)

    <meta charset="utf-8"/>
 <table>
  <tbody>
    <tr>
        <td align="left">RootUrl</td>
        <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
    </tr>
    <tr>
        <td align="left">SiteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
        <td align="left">Environment</td>
        <td align="left">Your Bold BI application environment. (If Cloud, you should use cloud, if  Enterprise, you should use enterprise)</td>
    </tr>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboards list</td>
    </tr>
    <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">You could get your EmbedSecret key from Embed tab by enabling Enable embed authentication in Administration page as mentioned in next step</td>
    </tr>
    <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">You could get your EmbedSecret key from Embed tab by enabling Enable embed authentication in <a href='https://help.boldbi.com/embedded-bi/site-administration/embed-settings/'>Administration page.</a> </td>
    </tr>
  </tbody>
 </table>

 3. Run your Flutter sample.

 4. The dashboard can be rendered in design mode or created with the following changes in the `renderDashboard()` method.

     ```js
     function renderDashboard(dashboardId) {
     var dashboard = BoldBI.create({
        serverUrl: RootUrl + "/" + SiteIdentifier,
        dashboardId: dashboardId,//Provide item id to render it in design mode,to create dashboard remove this property 
        embedContainerId: "dashboard",
        embedType: BoldBI.EmbedType.Component,
        environment: Environment == "enterprise" ? BoldBI.Environment.Enterprise : BoldBI.Environment.Cloud,
        width: (window.innerWidth - 30)+"px",
        height: (window.innerHeight - 39)+"px",
        mode: BoldBI.Mode.Design,
        expirationTime: 100000,
        authorizationServer: {
            url: "",
            data:data
        }        
         
      });

      dashboard.loadDesigner();
      };
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
    <td align="left">Data from the 'GetEmbedDetails' method in the application.</td>
    </tr>
    </tbody>
    </table>

## How this sample works

 1. Based on the `EmbedProperties` provided in the `index.html`, authorize the server URL by calling the `GetEmbedDetails()` function.

 2. In the above authorization, generate the `SignatureUrl` with the provided `EmbedSecret` key and validate the embed details in Bold BI. Once details are validated, the dashboard starts to render.
 ![Get Dashboards](/static/assets/embedded/javascript/sample/images/flutter-get-details.png)

 3. Change the dashboard Id of the respective dashboard as you wish to embed.

## Steps to create new flutter application to embed dashboard
 1. Install the `Flutter` in the visual studio code.
    ![flutter install](/static/assets/embedded/javascript/sample/images/flutter_install.png#max-width=60%)
 2. Download the android studio from the following official [website](https://developer.android.com/studio),download the flutter SDK from the following official [website](https://docs.flutter.dev/get-started/install/windows), and include the paths in the system environment variable.

 3. In the desired location, create a folder for this project and open it in the visual studio code.

 4. Create the Flutter folder, run a command in the visual studio terminal as `flutter create my_app`. Here `my_app` is the flutter project name and change the directory by running the command `cd my_app`. 

 5. Include the following mandatory files in the `index.html` of the `<head>` tag as follows.

     ```js
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v5.3.53/boldbi-embed.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/hmac-sha256.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/enc-base64.min.js"></script>
     ```

 6. In the `<body>` tag, invoke the `Init()` method, create the DOM element with id `dashboard` as follows.

     ```js
        <div id="viewer-section">
            <div id="dashboard"></div>
        </div>
        <script>
        var RootUrl;
        var SiteIdentifier;
        var Environment;
        var UserEmail;
        var EmbedSecret;
        var data;
        var DashboardId;
        function Init() {
        
        RootUrl = "http://localhost:5000/bi";//Dashboard Server BI URL(ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)

        SiteIdentifier = "site/site1";//For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be empty string.
        
        Environment = "enterprise";
        
        UserEmail =  "";//UserEmail of the Admin in Bold BI
        
        EmbedSecret = "";//Get the embedSecret key from Bold BI.

        DashboardId = "";//Dashboard id of the dashboard you want to embed here.('https://help.boldbi.com/embedded-bi/javascript-based/samples/v3.3.40-or-later/blazor-with-javascript/#get-dashboard-id')
            GetEmbedDetails();
        };
     ```
    Here you need to invoke the `GetEmbedDetails()` method where you get the details of a particular dashboard and invoke the `renderDashboard()` method to render a dashboard.

 7. In this `GetEmbedDetails()`, `embedQuerString`, `userEmail` and the value from  the `GetSignatureUrl()` method is appended as query parameters in the URL to get details of a particular dashboard.

     ```js
        function GetEmbedDetails(){
        var date = new Date();
        var dashboardServerApiUrl = RootUrl + "/api/" +SiteIdentifier;
        var embedQuerString = "embed_nonce=" + uuidv4Generartor()+
        "&embed_dashboard_id="+ DashboardId +
        "&embed_mode=view&embed_timestamp=" + Math.round((new Date()).getTime() / 1000)+"&embed_expirationtime=100000";
        embedQuerString += "&embed_user_email=" +UserEmail;
        var embedDetailsUrl = "/embed/authorize?" + embedQuerString+ 
        "&embed_signature=" + GetSignatureUrl(embedQuerString);
        var url = dashboardServerApiUrl + embedDetailsUrl;
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = 'json';
        http.setRequestHeader("Content-type", "application/json");
        http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
        data = http.response;
        if(data)
            renderDashboard(DashboardId); 
        return  http.response ; }
        else if (http.readyState == 4 && http.status == 404) {
        return ("Server not found"); }
        else if (http.readyState == 4) {
        return (http.statusText)}
        };
        http.send();     
        }
        function GetSignatureUrl(message){
        var hash = CryptoJS.HmacSHA256(message, EmbedSecret);
        var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
        return(hashInBase64);
        }
        function uuidv4Generartor(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
     ```

 8. Implement the `renderdashboard()` to render the dashboard as follows.

     ```js
        function renderDashboard(dashboardId) {
        var dashboard = BoldBI.create({
            serverUrl: RootUrl + "/" + SiteIdentifier,//Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://demo.boldbi.com/bi/site/site1)
            dashboardId: dashboardId, //Dashboard id of the dashboard you want to embed here.
            embedContainerId: "dashboard",//DOM id where the dashboard will be rendered.
            embedType: BoldBI.EmbedType.Component,
            environment: Environment == "enterprise" ? BoldBI.Environment.Enterprise : BoldBI.Environment.Cloud,
            width: (window.innerWidth - 30)+"px",
            height: (window.innerHeight - 39)+"px",
            mode: BoldBI.Mode.View,//Rendering mode of dashboard it can be Design and View for dashboard
            expirationTime: 100000,//Set the duration for the token to be alive.
            authorizationServer: {
                url: "",
                data:data
            }        
            
        });

        dashboard.loadDashboard();
        };
     ```
     
 9. Now, run the project by executing the command `flutter run`.