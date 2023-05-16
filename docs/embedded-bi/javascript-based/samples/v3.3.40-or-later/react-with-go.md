---
layout: post
title:  Embedded SDK v3.3.40 React with Go Sample | Bold BI Docs
description: Explore the React JS-based embedding with sample application in Go supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in React with Go using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/react-with-go-sample) the sample application, which demonstrates the rendering of dashboard available in your Bold BI server and followed by steps to create a new embedding application in the `React` with `Go` on your own. 

> **NOTE:** The best way to get started would be reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation to start using first. The `Getting Started` guide gives you enough information that you need to know before working on the sample. 
## How to run the sample

1. Please [get](https://github.com/boldbi/react-with-go-sample) the React with Go Application.    

2. Here, the React application act as a client and the Go application act as a server since we need to set the following properties in the `DashboardListing.js` file in the react app as follows.
    ![Embed Properties In App Component](/static/assets/embedded/javascript/sample/images/react-go-props.png)  
    <meta charset="utf-8"/>
    <table>
      <tbody>
        <tr>
            <td align="left">siteIdentifier</td>
            <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
        </tr>
        <tr>
            <td align="left">rootUrl</td>
            <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
        </tr>
        <tr>
            <td align="left">authorizationUrl</td>
            <td align="left">Url of the GetDetails action in the Go application(http://localhost:8086/getDetails). Learn more about authorize server <a href='/embedded-bi/javascript-based/authorize-server/'>here.</a></td>
        </tr>
        <tr>
            <td align="left">environment</td>
            <td align="left">Your Bold BI application environment. (If Cloud, you should use </code>cloud</code>, if  Enterprise, you should use <code>enterprise</code>)</td>
        </tr>
        <tr>
            <td align="left">DashboardId</td>
            <td align="left">Set the item id of the dashboard to embed from BI server. </td>
        </tr>
      </tbody>
    </table>

3. You could get the item id of the dashboard from the BI server. Please refer to this [link](/embedded-bi/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the following screenshot.  
    ![Get Dashboard Id](/static/assets/embedded/javascript/sample/images/get-dashboard-id.png#max-width=55%)

4. In the `main.go` of the Go application, you need to set the UserEmail and EmbedSecret properties.
    ![Embed Properties](/static/assets/embedded/javascript/sample/images/react-go-main.png)

    <meta charset="utf-8"/>
    <table>
      <tbody>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard details from BI server</td>
        </tr>
        <tr>
            <td align="left">EmbedSecret</td>
            <td align="left">You could get your EmbedSecret key from Embed tab by enabling <code>Enable embed authentication</code> in <a href='/embedded-bi/site-administration/embed-settings/'> Administration page</a> </td>
        </tr>
      </tbody>
    </table>

5. Then, run your Go application and as well as the React Application.

6. The dashboard can be rendered in design mode or created with the following changes in the `renderDashboard()` method.

    ```js
      renderDashboard() {
        this.dashboard= BoldBI.create({
          serverUrl: rootUrl + siteIdentifier,
          dashboardId: dashboardId, //Provide the item id to render it in the design mode and create a dashboard to remove this property.
          embedContainerId: "dashboard",
          embedType: BoldBI.EmbedType.Component,
          environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
          mode: BoldBI.Mode.Design,
          width:"100%",
          height: window.innerHeight + 'px',
          expirationTime:100000,
          authorizationServer: {
            url:authorizationUrl
          }
        });
        this.dashboard.loadDesigner();
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
    <td align="left">Url of the 'GetDetails' action in the application.</td>
    </tr>
    </tbody>
    </table>

## How this sample works

1. Based on the `dashboardId` provided in the `DashboardListing.js`, you will authorize the server by calling the `GetEmbedDetails` function using the `AuthorizeURL(http://localhost:8086/getDetails)` with the provided `EmbedProperties` values.  
    ![Get Embed Details](/static/assets/embedded/javascript/sample/images/react-go-authorize.png)

2. In the above authorization, the `SignatureUrl` has been generated with the provided `Embed Secret key` and validated the embed details in Bold BI. Once details are validated, the dashboard starts to render.  
    ![Get Signature Url](/static/assets/embedded/javascript/sample/images/react-go-signature.png)

3. In the `DashboardListing.js`, change the dashboard Id of the respective dashboard as you wish to embed. 
    ![Set Dashboard Id](/static/assets/embedded/javascript/sample/images/react-go-dashboard.png)  

## Steps to create new React with Go application to embed dashboard
 1. Install the `nodeJS` in application using [link](https://nodejs.org/en/download/).

 2. Create a react application using the command `npx create-react-app my-app `. Here `my-app` is the application folder name.

 3. Change the directory by running the command `cd my-app`.

 4. Create the folder `DashboardListing`. Under this folder, create the javascript files `DashboardListing.js`.

 5. In the `DashboardListing.js` file, include the mandatory files and create a DOM element with the id `dashboard` to render dashboard in this container. In the `componentDidMount()`, invoke the `renderDashboard()` method as follows.

     ```js

      const siteIdentifier = "site/site1";

      const rootUrl = "http://localhost:51789/bi/";

      const authorizationUrl = "http://localhost:8086/getDetails"

      const environment = "enterprise";

      const dashboardId = "Enter dashboard id here";
      var BoldBiObj;

      class DashboardListing extends React.Component {
        constructor(props){
            super(props);
            this.state = {toke: undefined, items: []};
            this.BoldBiObj = new BoldBI();
        };

        renderDashboard() {
          this.dashboard= BoldBI.create({
            serverUrl: rootUrl + siteIdentifier,
            dashboardId: dashboardId,
            embedContainerId: "dashboard",
            embedType: BoldBI.EmbedType.Component,
            environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
            mode: BoldBI.Mode.View,
            width:"100%",
            height: window.innerHeight + 'px',
            expirationTime:100000,
            authorizationServer: {
                url:authorizationUrl
            }
        });
        this.dashboard.loadDashboard();
        }

        render() {
          return (
            <div id="DashboardListing">
                <div id="viewer-section">
                  <div id="dashboard"></div>
                </div>
            </div>
          );
        }

        componentDidMount() {
          this.renderDashboard();
        }  
      }
      export default DashboardListing;

     ```

 6. Run the command `npm install`.Once completed, run the command `npm i @boldbi/boldbi-embedded-sdk`. Once completed, import `@boldbi/boldbi-embedded-sdk` in the `DashboardListing.js`.

 7. Install the `Go` application with the [link](https://go.dev/dl/). Install the visual studio code extension as follows.
    ![go_install](/static/assets/embedded/javascript/sample/images/go_install.png)

 8. Create a folder in the desired location, and open it in the visual studio code. Create a file `main.go` and `launch.json`and include the following code.

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

 9. In the `main.go` file, include the following code to contact the BOLD BI server.

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

 10. Initialize the variables `embedSecret` and `userMail` for authorization purpose.

 11. Initialize the API `/getDetails` to get the particular dashboard details from the server.

 12. This API uses the method `getSignatureUrl()` to generate the algorithm. In the `getEmbedDetails()` API, the `embedQuerString`,`userEmail` and value from the `GetSignatureUrl()` method is appended as query parameters in the URL to get details of particular dashboard.

 13. Run the `Go` and `React` applications in the visual studio code by the command `npm start` to render the dashboard.