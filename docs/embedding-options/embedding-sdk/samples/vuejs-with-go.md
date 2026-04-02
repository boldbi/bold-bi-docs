---
layout: post
title:  Building dashboard app with Go and Vue.js | Bold BI Docs
description: Explore the dashboard embedded web application built with Go and Vue.js supported since v4.1.36 of Bold BI.
platform: bold-bi
documentation: ug
---

# Building dashboard app in VueJs with Go using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/vue-with-go-sample) the sample application, which illustrates the rendering of the dashboard that is accessible on your Bold BI server. This is followed by a set of steps to create a new embedding application in `VueJs` with `Go` on your own. 

> **NOTE:** The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation. The `Getting Started` guide provides you with enough information that you need to know before working on the sample.

## How to run the sample

 1. Please [get](https://github.com/boldbi/vue-with-go-sample) the VueJS with Go Application.       

 2. Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not enabled, please follow the provided [instructions](/site-administration/embed-settings/#get-embed-secret-code) or refer to the image below for guidance on how to enable it.

    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 3. Please use this [link](/site-administration/embed-settings/#get-embed-configuration-file) as a reference to download the `embedConfig.json` file. Additionally, you can refer to the following image for visual guidance.
     
    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png) 
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

  4. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/vue-with-nodejs-sample/tree/master/Nodejs) within the application. Please ensure that you have placed it in the application as shown in the following image.

     ![EmbedConfig Location Image](/static/assets/javascript/sample/images/vue-node-embedconfig.png)

      <meta charset="utf-8"/>
      <table>
      <tbody>
      <tr>
      <td align="left">ServerUrl</td> 
      <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
      </tr>
      <tr>
      <td align="left">SiteIdentifier</td>
      <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
      </tr>
      <tr>
      <td align="left">Environment</td>
      <td align="left">Your Bold BI application environment. (If it is cloud analytics server, use <code>BoldBI.Environment.Cloud</code>; if it is your own server, use <code>BoldBI.Environment.Enterprise</code>).</td>
      </tr>
      <tr>
      <td align="left">DashboardId</td>
      <td align="left">Item id of the dashboard to be embedded in your application.</td>
      </tr>
      <tr>
      <td align="left">EmbedSecret</td>
      <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='/site-administration/embed-settings/'>Administration page</a></td>
      </tr>
      <tr>
      <td align="left">UserEmail</td>
      <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard</td>
      </tr>
      <tr>
      <td align="left">ExpirationTime</td>
      <td align="left">Token expiration time. (In the EmbedConfig.json file, the default token expiration time is 10000 seconds)</td>
      </tr>
      </tbody>
      </table>
    
 5.  Open the `Go` sample in **Visual Studio Code**.

 6. To run the back-end `Go` sample, use the following command `go run tokengeneration.go`.

 7. Open the `Vue` sample in a new window of **Visual Studio Code**.

 8. To install all dependent packages, use the following command: `npm install`.

 9. Please run your `Vue` sample using the following command: `npm run serve`.

## How this sample works

1. When the `mounted` function is triggered in a front-end React application, it invokes the `/getdetails` endpoint. This endpoint fetches data from the `embedConfig.json` file. If the JSON file cannot be found, an error message will be shown.

    ![GetServerDetails](/static/assets/javascript/sample/images/vue-go-getdetails.png)

2. The dashboard will be rendered using the data obtained from the `/getdetails` endpoint.
 
   ![Render Dashboard](/static/assets/javascript/sample/images/vuejs-core-getseverdetails.png)

3. Before rendering, the `tokenGenerationUrl` is called, which redirects to the `tokenGeneration` action. This action generates the response of dashboard details with token.

    ![Authorization Server](/static/assets/javascript/sample/images/react-go-authorizeserver.png)  
  
4. Once the token is generated, it will be returned to the `App.vue` file and the dashboard will start to render it.

 ## Steps to create new VueJs with Go application to embed dashboard

 1. To create the Vue application, run the command `vue create my-app`. In this case, `my-app` refers to the folder name of the Vue application.

 2. Open the created folder in Visual Studio Code and change the directory by running the command `cd my-app.`

 3. Download the VueJs with Go sample and open the VueJS in Visual Studio Code using the `EmbedBIWrapper.js` file. Import it in the `App.vue` as follows.
    ![WrapperFileInclusion](/static/assets/javascript/sample/images/vue_wrapper_inclusion.png)
   
 4. In the `App.vue` file, create a DOM element with the id `dashboard` and include the necessary cdn files and properties to render the dashboard.

    ```js
     mounted: function() {
    var scripts = [
      "https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js",
      "https://cdn.boldbi.com/embedded-sdk/v15.2.6/boldbi-embed.js"
    ];
    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      tag.setAttribute("type", "text/javascript");
      tag.setAttribute("defer", "defer");
      tag.async = true;
      document.head.appendChild(tag);
    }); 

    let rootUrl = "http://localhost:64503/bi";

    let siteIdentifier = "/site/site1";
   
    let dashboardId = "2426b843-bf97-4392-96b1-ef12c007b66f";
    
    let environment = "enterprise";
   
    let authorizationUrl = "http://localhost:8086/getDetails";

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
    }
    ```
  
 5. [To install GO](https://go.dev/dl/), you can then install the Visual Studio Code extension.
    ![go_install](/static/assets/javascript/sample/images/go_install.png)

 6. Please create a folder in the desired location and open it in Visual Studio Code. Next, create a file named `main.go` and `launch.json`, and include the following code.

    ```js
    {
      // Use IntelliSense to learn about possible attributes.
      // Hover to view descriptions of existing attributes.
      // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
      "version": "0.2.0",
      "configurations": [
          {
              "name": "Launch",
              "type": "go",
              "request": "launch",
              "mode": "debug",
              "program": "${workspaceRoot}",
              "env": {"FLASH_PORT": 8086},
              "args": [],
              "showLog": true
          }
      ]
    }
    ```

 7. In the `main.go` file, include the following code to contact the BOLD BI server.

     ```js
        package main

        import (
          "crypto/hmac"
          "crypto/sha256"
          "encoding/base64"
          "encoding/json"
          "io/ioutil"
          "log"
          "net/http"
          "strings"
        )

        //Set EmbedSecret key from Bold BI Server. Please refer this link(https://help.syncfusion.com/bold-bi/on-premise/site-settings/embed-settings)
        var embedSecret = "enter embed secret here"

        //Enter your BoldBI Server credentials.
        var userMail = "enter user email here"

        func main() {
          http.HandleFunc("/getDetails", getEmbedDetails)
          log.Fatal(http.ListenAndServe(":8086", nil))
        }

        func getEmbedDetails(w http.ResponseWriter, r *http.Request) {
          w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
          w.Header().Set("Access-Control-Allow-Origin", "*")
          w.Header().Set("Access-Control-Allow-Methods", "POST")
          w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
          body, err := ioutil.ReadAll(r.Body)
          if err != nil {
            log.Fatalln(err)
          }
          if len(body) > 0 {
            if queryString, err := unmarshal(string(body)); err != nil {
              log.Println("error converting", err)
            } else {
              serverAPIUrl := queryString.(map[string]interface{})["dashboardServerApiUrl"].(string)
              embedQueryString := queryString.(map[string]interface{})["embedQuerString"].(string)
              embedQueryString += "&embed_user_email=" + userMail
              signatureString, err := getSignatureUrl(embedQueryString)
              if err != nil {
                log.Println(err)
              }
              embedDetails := "/embed/authorize?" + embedQueryString + "&embed_signature=" + signatureString
              query := serverAPIUrl + embedDetails
              log.Println(query)
              result, err := http.Get(query)
              if err != nil {
                log.Println(err)
              }
              log.Println(result)
              response, err := ioutil.ReadAll(result.Body)
              if err != nil {
                log.Fatalln(err)
              }
              w.Write(response)
            }
            //w.Write(result.Body)
          }
        }

        func getSignatureUrl(queryData string) (string, error) {
          encoding := ([]byte(embedSecret))
          messageBytes := ([]byte(queryData))
          hmacsha1 := hmac.New(sha256.New, encoding)
          hmacsha1.Write(messageBytes)
          sha := base64.StdEncoding.EncodeToString(hmacsha1.Sum(nil))
          return sha, nil
        }

        func unmarshal(data string) (interface{}, error) {
          var iface interface{}
          decoder := json.NewDecoder(strings.NewReader(data))
          decoder.UseNumber()
          if err := decoder.Decode(&iface); err != nil {
            return nil, err
          }
          return iface, nil
        }
     ```

 8. Initialize the variables `embedSecret` and `userMail` for authorization purposes.

 9. To obtain the specific dashboard details from the server, initialize the API `/getDetails`.

 10. This API uses the method `getSignatureUrl()` to generate the algorithm. In the `getEmbedDetails()` API, the `embedQueryString`, `userEmail`, and the value from the `getSignatureUrl()` method are appended as query parameters in the URL to get details of a particular dashboard.

 11. First, run the Go application. Then, run the VueJs application by using `npm run serve` to render the dashboard.