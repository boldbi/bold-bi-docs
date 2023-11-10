---
layout: post
title:  Building dashboard app with Go and Vue.js | Bold BI Docs
description: Explore the dashboard embedded web application built with Go and Vue.js supported since v4.1.36 of Bold BI.
platform: bold-bi
documentation: ug

---

# Building dashboard app in VueJs with Go using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/vue-with-go-sample) the sample application, which demonstrates the rendering of dashboard available in your Bold BI server and followed by steps to create a new embedding application in the `VueJs` with `Go` on your own. 

> **NOTE:** The best way to get started would be reading the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation. The `Getting Started` guide gives you enough information that you need to know before working on the sample.  

## How to run the sample

 1. Please [get](https://github.com/boldbi/vue-with-go-sample) the VueJS with Go Application.       

 2. Here, the VueJS application act as a client, and the Go application act as a server since you need to set the following properties in the `App.vue` file in the VueJS app as follows.
    ![Embed Properties in VueJS](/static/assets/javascript/sample/images/vuejs-go-props.png)  

    <meta charset="utf-8"/>
    <table>
    <tbody>
      <tr>
          <td align="left">siteIdentifier</td>
          <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be an empty string.</td>
      </tr>
      <tr>
          <td align="left">rootUrl</td>
          <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
      </tr>
      <tr>
          <td align="left">authorizationUrl</td>
          <td align="left">Url of the GetDetails action in the Go application(http://localhost:8086/getDetails). Learn more about authorize server in this <a href='/security-configuration/authorize-server/'>link.</a></td>
      </tr>
      <tr>
          <td align="left">environment</td>
          <td align="left">Your Bold BI application environment. (If Cloud, you should use <code>cloud</code>, if  Enterprise, you should use <code>on-premise</code>)</td>
      </tr>
      <tr>
          <td align="left">DashboardId</td>
          <td align="left">Set the item id of the dashboard to embed from the BI server.</td>
      </tr>
    </tbody>
    </table>

 3. Get the item id of the dashboard from the BI server. Please refer to this [link](/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the following screenshot.  
    ![Get Dashboard Id](/static/assets/javascript/sample/images/get-dashboard-id.png#max-width=55%)

 4. In the`main.go` of the Go application, you need to set the UserEmail and EmbedSecret properties. 
    ![Embed Properties in GO](/static/assets/javascript/sample/images/react-go-main.png)

    <meta charset="utf-8"/>
    <table>
      <tbody>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard details from the BI server</td>
        </tr>
        <tr>
            <td align="left">EmbedSecret</td>
            <td align="left">You could get your EmbedSecret key from the Embed tab by enabling the Enable embed authentication in the  <a href='/site-administration/embed-settings/'> Administration page</a></td>
        </tr>
      </tbody>
    </table>
    
 5. Then, run your Go application and as well as the VueJS App.

 6. The dashboard can be rendered in design mode or created with the following changes in the `App.Vue` method.

    ```js
    let dashboard = BoldBI.create({
      serverUrl: rootUrl + siteIdentifier,
      dashboardId: dashboardId,//Provide item id to render it in design mode,to create dashboard remove this property
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
    <td align="left">Url of the 'GetEmbedDetails' action in the go application.</td>
    </tr>
    </tbody>
    </table>

## How this sample works

 1. Based on the `dashboard` provided in the `App.vue`, you will authorize the server by calling the GetEmbedDetails function using the `AuthorizeURL(http://localhost:8086/getDetails)` with the provided `EmbedProperties` values. 
    ![Get Embed Details](/static/assets/javascript/sample/images/react-go-authorize.png)

 2. In the above authorization, the `SignatureURL` has been generated with the provided `EmbedSecret key` and embed details which can be validated in the Bold BI Server API and returns the token. Based on the returned token, the dashboard will start to render. 
    ![Get Signature Url](/static/assets/javascript/sample/images/react-go-signature.png)

 3. In the `App.vue`, change the dashboard Id of the respective dashboard based on your requirement.  
    ![Set Dashboard Id](/static/assets/javascript/sample/images/vuejs-go-dashboard.png)  

 ## Steps to create new VueJs with Go application to embed dashboard

 1. Create the Vue application by running the command `vue create my-app`. Here `my-app` is the folder name of the Vue application.

 2. Open the created folder in the visual studio code, and change the directory by running the command `cd my-app.`

 3. Download the VueJs with Go sample and open the VueJS in the visual studio code using the `EmbedBIWrapper.js` file and import it in the `App.vue` as follows.
    ![WrapperFileInclusion](/static/assets/javascript/sample/images/vue_wrapper_inclusion.png)
   
 4. In the `App.vue` file, create a DOM element with the id `dashboard` including the mandatory cdn files and properties to render the dashboard.

    ```js
     mounted: function() {
    var scripts = [
      "https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js",
      "https://cdn.boldbi.com/embedded-sdk/v6.16.12/boldbi-embed.js"
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
  
 5. Install the `Go` with the [link](https://go.dev/dl/). Install the visual studio code extension as follows.
    ![go_install](/static/assets/javascript/sample/images/go_install.png)

 6. Create a folder in the desired location and open it in the visual studio code. Create a file `main.go` and `launch.json`, include the following code.

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

 7. In the `main.go` file,  include the following code to contact the BOLD BI server.

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

 8. Initialize the variables `embedSecret` and `userMail` for authorization purpose.

 9. Initialize the API `/getDetails` to get the particular dashboard details from the server.

 10. This API uses the method `getSignatureUrl()` to generate the algorithm. In the `getEmbedDetails(`) API, the `embedQuerString`, `userEmail`, and the value from the `GetSignatureUrl()` method are appended as query parameters in the URL to get details of a particular dashboard.

 11. Then, run the Go application. And the VueJs by `npm run serve` to render the dashboard.