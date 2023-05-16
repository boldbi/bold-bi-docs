---
layout: post
title:  Building dashboard app with ASP.NET Core and Vue | Bold BI Docs
description: Explore the dashboard embedded web application built with ASP.NET Core and Vue.js supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Building dashboard app in VueJs with ASP.NET core using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/vue-with-aspnet-core-sample) the sample application, which demonstrates the rendering of dashboard available in your Bold BI server and followed by steps to create a new embedding application in the `VueJs` with `ASP.NET Core` on your own. 

> **NOTE:** The best way to get started would be to read the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation. The `Getting Started` guide gives you enough information that you need to know before working on the sample. 

## How to run the sample

 1. Please [get](https://github.com/boldbi/vue-with-aspnet-core-sample) the VueJS with ASP.NET Core Application sample.    

 2. Here, the VueJS application act as a client, and the ASP.NET Core application act as a server since you need to set the following properties in the `App.vue` file in the VueJS app as follows.
    ![Embed Properties](/static/assets/embedded/javascript/sample/images/vuejs-embed-props.png)

 3. In the `EmbedProperties.cs` of the ASP.NET Core application, you need to set the `RootUrl`, `SiteIdentifier`, `UserEmail`, and `EmbedSecret` properties.
    ![Embed Properties in App Component](/static/assets/embedded/javascript/sample/images/asp-net-backend-prop.png)

    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
            <td align="left">siteIdentifier</td>
            <td align="left">For Bold BI Enterprise edition, it should be like `site/site1.` For Bold BI Cloud, it should be an empty string.</td>
        </tr>
        <tr>
            <td align="left">rootUrl</td>
            <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
        </tr>
        <tr>
            <td align="left">authorizationUrl</td>
            <td align="left">Url of the GetDetails action in the Go application(http://localhost:8086/getDetails).</td>
        </tr>
        <tr>
            <td align="left">environment</td>
            <td align="left">Your Bold BI application environment. (If Cloud, you should use cloud, if  Enterprise, you should use onpremise)</td>
        </tr>
        <tr>
            <td align="left">DashboardId</td>
            <td align="left">Set the item id of the dashboard to embed from BI server. </td>
        </tr>
        </tbody>
        </table>

 4. Get the item id of the dashboard from the Bold BI server. Please refer to this [link](/embedded-bi/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the following screenshot.  
    ![Get Dashboard Id](/static/assets/embedded/javascript/sample/images/get-dashboard-id.png#max-width=55%) 

 5. Then, run your ASP.NET application and as well as the VueJS App.  

 6. The dashboard can be rendered in design mode or created with the following changes in the `App.Vue` method.

    ```js
     let dashboard = BoldBI.create({
        serverUrl: rootUrl + siteIdentifier,
        dashboardId: dashboardId,
        embedContainerId: "dashboard",
        embedType: BoldBI.EmbedType.Component,
        environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
        mode: BoldBI.Mode.Design,
        width: "100%",
        height: window.innerHeight + "px",
        expirationTime: 100000,
        authorizationServer: {
            url: authorizationUrl
        }
    });
    dashboard.loadDesigner(); 
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
    <td align="left">Url of the 'GetDetails' action in the ASP.NET application.</td>
    </tr>
    </tbody>
    </table>

## How this sample works

 1. Based on the `dashboardId` provided in the `App.vue,` you will authorize the server by calling the GetEmbedDetails function using the `AuthorizeURL(http://localhost:61377/getDetails)` with the provided EmbedProperties values.  
    ![Get Embed Details](/static/assets/embedded/javascript/sample/images/vuejs-go-authorize.png)

 2. In the above authorization, the `SignatureURL` has been generated with the provided `EmbedSecret key` and embed details, which can be validated in the Bold BI Server API and returns the token. Based on the returned token, the dashboard will start to render.

 3. In the`App.vue`, change the dashboard Id of the respective dashboard as you wish to embed.  
    ![Set Dashboard Id](/static/assets/embedded/javascript/sample/images/vuejs-core-dashboard.png)  

## Steps to create new VueJs with ASP.NET Core application to embed dashboard
 1. Install the `nodeJS`, using the command prompt and type `vue create my-app` in desired location to create angular application. Here, `my-app` is the name of the folder for your application. To run the `vue` application, change the project folder `cd my-app`.

 2. Open the `App.vue` page and refer to the mandatory cdn files in `<head>` tag using `mounted` function as follows.

     ```js
    mounted: function() {
    var scripts = [
      "https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js",
      "https://cdn.boldbi.com/embedded-sdk/v6.4.6/boldbi-embed.js",
    ];
    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      tag.setAttribute("type", "text/javascript");
      tag.setAttribute("defer", "defer");
      tag.async = true;
      document.head.appendChild(tag);
    });
    ```
 
 3. Download the VueJs sample and open the VueJs in visual studio code, use the `EmbedBIWrapper.js` file and import it in `App.vue` like below.
    ![WrapperFileInclusion](/static/assets/embedded/javascript/sample/images/vue_wrapper_inclusion.png)
    
 4. Set the following mandatory variables to contact the server.

     ```js
        let rootUrl = "http://localhost:64503/bi";//Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)
        let siteIdentifier = "/site/site1";//For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be an empty string.
        let dashboardId = "2426b843-bf97-4392-96b1-ef12c007b66f";//Set the item id of the dashboard to embed from BI server.
        let environment = "enterprise";//our Bold BI application environment. (If Cloud, you should use cloud, if  Enterprise, you should use enterprise)
        let authorizationUrl = "http://localhost:61377/getdetails";
     ```

 5. To render a dashboard using the `EmbedWrapper` file, create an instance `dashboard` and call a method `LoadDashboard()` as follows.

     ```js
        let dashboard = BoldBI.create({
            serverUrl: rootUrl + siteIdentifier,
            dashboardId: dashboardId,
            embedContainerId: "dashboard",
            embedType: BoldBI.EmbedType.Component,
            environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
            mode: BoldBI.Mode.View,
            width: "100%",
            height: window.innerHeight + "px",
            expirationTime: 100000,
            authorizationServer: {
                url: authorizationUrl
            }
        });
        dashboard.loadDashboard(); 
     ```

 6. To create an ASP.NET core Web application, start Visual Studio and click `Create a new project`.
    ![SelectProject](/static/assets/embedded/javascript/sample/images/ProjectFramework.png)
    ![SelectFrameworkVersion](/static/assets/embedded/javascript/sample/images/framework_version.png)

 7. Change the project name as you want, then click `Create`.

 8. Select the Web Application (Model-View-Controller) template, then click `Create`.
 
 9. In ASP.NET core, create a model as follows.
    Under the model folder, create the `EmbedProperties.cs` class to define the mandatory properties as follows.

     ```js
        public class EmbedProperties
        {
            public static string UserEmail = "";

            public static string EmbedSecret = "";
        }
     ```

 10. In the `Controllers\HomeController.cs`, define an API `GetDetails()` which uses the method `GetSignatureUrl()` to generate the algorithm. In this API, `embedQuerString`, `userEmail` and value from the `GetSignatureUrl()` method is appended as query parameters in the URL to get details of particular dashboard.

     ```js
      [HttpPost]
        [Route("GetDetails")]
        public string GetDetails([FromBody] object embedQuerString)
        {
            var embedClass = Newtonsoft.Json.JsonConvert.DeserializeObject<EmbedClass>(embedQuerString.ToString());

            var embedQuery = embedClass.embedQuerString;
            // User your user-email as embed_user_email
            embedQuery += "&embed_user_email=" + EmbedProperties.UserEmail;
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
                var keyBytes = encoding.GetBytes(EmbedProperties.EmbedSecret);
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

 11. Then, run the ASP.NET core application. And VueJs by the `npm run serve` command to render the dashboard.