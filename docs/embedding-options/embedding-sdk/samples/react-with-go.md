---
layout: post
title: Embedding Analytics with React and Go | Bold BI Docs
description: Learn how to embed an analytics dashboard with a React and Go application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in React with Go using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/react-with-go-sample) the sample application, which demonstrates the rendering of a dashboard available on your Bold BI server. This is followed by a series of steps to create a new embedding application in `React` with `Go` on your own.

> **NOTE:** The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation first. The `Getting Started` guide provides you with enough information that you need to know before working on the sample. 

## Requirements/Prerequisites

* [Go installer](https://go.dev/dl/)
* [Visual Studio Code](https://code.visualstudio.com/download)
* [Node.js](https://nodejs.org/en/)

> **NOTE:** Node.js versions 14.16 through 18.18 are supported.

## How to run the sample

1. Please get the [React with Go](https://github.com/boldbi/react-with-go-sample) Application.   

2. Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not enabled, please refer to the following image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.

   ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

3. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, refer to the following image for visual guidance.
    
   ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png) 
   ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

4. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/react-with-go-sample/tree/master/Go) within the application. Please make sure you have placed it in the application as shown in the following image.

    ![EmbedConfig Location Image](/static/assets/javascript/sample/images/react-go-embedconfig.png)

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
    <td align="left">Token expiration time. (In the EmbedConfig.json file, the default token expiration time is 10000 seconds).</td>
    </tr>
    </tbody>
    </table>


5. Open the `Go` sample in Visual Studio Code.

6. To run the back-end `Go` sample, use the following command `go run main.go`.

7. Open the `React` sample in a new window of Visual Studio Code.

8. To install all the necessary packages, use the command `npm install`.

9. Please run your `React` sample using the command `npm start`.

10. The dashboard can be edited in design mode and a new dashboard can be created with the following changes in the `renderDashboard()` method.

     <meta charset="utf-8"/>
     <table>
     <tbody>
     <td align="left">mode</td>
     <td align="left">In which mode do you want to render the dashboard? It can either be <code>BoldBI.Mode.View</code> or <code>BoldBI.Mode.Design</code> mode.         </td>
     </tr>
     <tr>
     <td align="left">authorizationServer</td>
     <td align="left">Url of the <code>authorizationServerAPI</code> action in the application.</td>
     </tr>
      <tr>
      <td align="left">RenderDesigner</td>
      <td align="left">loadDesigner()</td>
        </tr>
     </tbody>
     </table>

     ```js
           renderDashboard(data) {
                 this.dashboard= BoldBI.create({
                 serverUrl: data.ServerUrl+"/" + data.SiteIdentifier,
                 dashboardId: data.DashboardId,
                 embedContainerId: "dashboard",
                 embedType: data.EmbedType,
                 environment: data.Environment,
                 mode:BoldBI.Mode.View,
                 width:"100%",
                 height: window.innerHeight + 'px',
                 expirationTime:100000,
                 authorizationServer: {
                     url: authorizationUrl
                 }
             });
 
             this.dashboard.loadDashboard();                     
         }
 
      ```

> **NOTE:** If you are using a React version lower than v18.0, you can update the `index.js` file by adding the following line. Make sure to replace the existing `createRoot` line with the following line.

  ```js
   import ReactDOM from 'react-dom';
   ReactDOM.render(<App />, document.getElementById('root'));
  ```

## How this sample works

1. When the `componentDidMount` function is triggered in a front-end React application, it invokes the `/getServerDetails` endpoint. This endpoint fetches data from the `embedConfig.json` file. If the JSON file cannot be found, an error message will be shown.

   ![GetServerDetails](/static/assets/javascript/sample/images/react-go-getdetails.png)

2. The dashboard will be rendered using the data obtained from the `/getserverdetails` endpoint.
 
   ![Render Dashboard](/static/assets/javascript/sample/images/react-go-renderDashboard.png)

3. Before rendering, the `authorizationUrl` is called, which redirects to the `AuthorizationServer` action. This action generates the `EmbedSignature` using the embed secret from the `embedConfig.json`.
    ![Authorization Server](/static/assets/javascript/sample/images/react-go-authorizeserver.png)  
  
4. These details will be sent to the Bold BI server and will be validated there. After the details are validated, the dashboard starts to render.

## Steps to create new React with Go application to embed dashboard
1. Please create a folder in the desired location and open it in **Visual Studio Code**. 

2. Open the terminal in **Visual Studio Code.** Please refer to the following image.
 
    ![Terminal Image](/static/assets/javascript/sample/images/react-go-terminal.png)

3. Please make sure that you have enabled embed authentication on the `embed settings` page. If it is currently not enabled, please refer to the following image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

4. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Moreover, you can refer to the accompanying image for visual guidance.

    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)

    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

5. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/react-with-go-sample/tree/master/Go) within the application. Please make sure you have placed it in the application as shown in the following image.

    ![EmbedConfig Location Image](/static/assets/javascript/sample/images/react-go-embed-setting.png)

6. Create a new file called `main.go`. Next, include the provided code to retrieve data from `embedConfig.json`.

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
      "strconv"
      "strings"
      "time"
      "fmt"
    )

    type EmbedConfig struct {
      DashboardId    string `json:"DashboardId"`
      ServerUrl      string `json:"ServerUrl"`
      UserEmail      string `json:"UserEmail"`
      EmbedSecret    string `json:"EmbedSecret"`
      EmbedType      string `json:"EmbedType"`
      Environment    string `json:"Environment"`
      ExpirationTime string `json:"ExpirationTime"`
      SiteIdentifier string `json:"SiteIdentifier"`
    }

    // Create an instance of EmbedConfig struct
    var config EmbedConfig

    func main() {
      fmt.Println("Go server is running on port 8086")
      http.HandleFunc("/authorizationServer", authorizationServer)
      http.HandleFunc("/getServerDetails", getServerDetails)
      log.Fatal(http.ListenAndServe(":8086", nil))	

    }

    func getServerDetails(w http.ResponseWriter, r *http.Request) {
      w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
      w.Header().Set("Access-Control-Allow-Origin", "*")
      w.Header().Set("Access-Control-Allow-Methods", "GET")
      w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

      data, err := ioutil.ReadFile("embedConfig.json")
      if err != nil {
        log.Fatal("Error: embedConfig.json file not found.")
      }

      err = json.Unmarshal(data, &config)
      response, err := json.Marshal(config)
      w.Write(response)
    }
    ```  

7. In `main.go`, include the following code and create a function called `authorizationServer()` that utilizes the `GetSignatureUrl()` method to generate the algorithm. Within this function, append the `embedQueryString`, `userEmail`, and the value obtained from the `GetSignatureUrl()` method as query parameters in the URL to retrieve details of a specific dashboard.

    ```js
     func authorizationServer(w http.ResponseWriter, r *http.Request) {
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
              embedQueryString += "&embed_user_email=" + config.UserEmail
              timeStamp := time.Now().Unix()
              embedQueryString += "&embed_server_timestamp=" + strconv.FormatInt(timeStamp, 10)
              signatureString, err := getSignatureUrl(embedQueryString)
              embedDetails := "/embed/authorize?" + embedQueryString + "&embed_signature=" + signatureString
              query := serverAPIUrl + embedDetails
              result, err := http.Get(query)
              if err != nil {
                log.Println(err)
              }
              response, err := ioutil.ReadAll(result.Body)
              if err != nil {
                log.Fatalln(err)
              }
              w.Write(response)
            }
          }
        }

        func getSignatureUrl(queryData string) (string, error) {
          encoding := ([]byte(config.EmbedSecret))
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

8. Please create another file called `launch.json` and include the code provided below.
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

9. Create a folder in the desired location and open it in **Visual Studio Code**. 

10. To create a new React project as the front-end, we need to run this command in the terminal and navigate to the directory.
    ```js
      npx create-react-app .
    ```

11. Open the `src` folder. Within the `src` folder, create a new folder named `DashboardListing`. Inside the `DashboardListing` folder, create a file named `DashboardListing.js`. In the `DashboardListing.js` file, define the mandatory properties and implement the methods `renderDashboard()` to render the dashboard, `render()` to create the DOM elements, and `componentDidMount()` to contact the server as follows:

     ```js

      import React from 'react';
      import '../index';
      import { BoldBI } from '@boldbi/boldbi-embedded-sdk';

      //Url of the authorizationserver action in the Go application(http://localhost:8086/authorizationserver). 
      const authorizationUrl = "http://localhost:8086/authorizationServer";

      var BoldBiObj;

      class DashboardListing extends React.Component {
        constructor(props) {
          super(props);
          this.state = { toke: undefined, items: [] };
          this.BoldBiObj = new BoldBI();
        };
      }
      export default DashboardListing;

     ```
12. Inside the `DashboardListing.js` file, add the code below to render the dashboard.
    ```js
      renderDashboard(embedConfig) {
          this.dashboard = BoldBI.create({
            serverUrl: embedConfig.ServerUrl + "/" + embedConfig.SiteIdentifier,
            dashboardId: embedConfig.DashboardId,
            embedContainerId: "dashboard",
            embedType: embedConfig.EmbedType,
            environment: embedConfig.Environment,
            width: "100%",
            height: window.innerHeight + 'px',
            expirationTime: 100000,
            authorizationServer: {
              url: authorizationUrl
            }
          });
          this.dashboard.loadDashboard();
        }
    ```
13. Inside the `DashboardListing.js` file, add the following code: Create a DOM element with the ID `dashboard`. This element will be used in the `renderDashboard()` method to render the dashboard within it.
    ```js
     render() {
          return (
            <div id="DashboardListing">
              <div id="viewer-section">
                <div id="dashboard"></div>
              </div>
            </div>
          );
        }
    ```

14. Inside the `DashboardListing.js` file, add the following code: The `componentDidMount()` method contacts the server to retrieve the token. With this token, specific dashboard details are collected and passed to the `renderDashboard()` method for rendering.

    ![Dashboard](/static/assets/javascript/sample/images/react-go-dashboardListing.png)
    ```js
       async componentDidMount() {
          try {
            const response = await fetch('http://localhost:8086/getServerDetails');
            const data = await response.json();
            this.setState({ embedConfig: data });
            const embedConfig = this.state.embedConfig;
            this.renderDashboard(embedConfig);
          } catch (error) {
            console.log("Error: embedConfig.json file not found.");
            this.setState({ toke: "error", items: "error" });
          }
        }
    ```
15. Open the `App.js` folder and replace the following code: The code imports the necessary modules, defines the `App` component, renders the `DashboardListing` component, and exports it for use in other files.

    ```js
      import React from 'react';
      import './App.css';
      import DashboardListing from './DashboardListing/DashboardListing';

      class App extends React.Component {
        render() {
          return (
            <div>
            <DashboardListing/>
            </div>
          );
        }
      }
      export default App;
    ```
16.  Open the `Index.js` file and replace the following code: These lines of code import the necessary modules `React` and `ReactDOM`.They also import the `App` component and use `ReactDOM.render` to render the App component into the specified HTML element.
      
      ```js
      import React from 'react';
      import ReactDOM from 'react-dom';
      import App from './App';

      ReactDOM.render(<App />, document.getElementById('root'));
      ```
17. Please replace the code in `package.json` with the `packages` listed in the following dependencies section. Installing these packages is essential.
   
      ```js
        {
        "name": "react-sample",
        "version": "0.1.0",
        "private": true,
        "dependencies": {
          "@boldbi/boldbi-embedded-sdk": "6.11.10",
          "@testing-library/jest-dom": "^5.17.0",
          "@testing-library/react": "^13.4.0",
          "@testing-library/user-event": "^13.5.0",
          "axios": "^0.19.2",
          "jquery": "^3.5.1",
          "react": "^18.2.0",
          "react-dom": "^18.2.0",
          "react-scripts": "5.0.1"
        },
        "scripts": {
          "start": "react-scripts start",
          "build": "react-scripts build",
          "test": "react-scripts test",
          "eject": "react-scripts eject"
        },
        "eslintConfig": {
          "extends": [
            "react-app",
            "react-app/jest"
          ]
        },
        "browserslist": {
          "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
          ],
          "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
          ]
        }
      }
      ```

 18. Next, execute the `Go` application by running the command `go main.go`.

 19. To begin, open the `React` application and install the required dependencies using the command `npm install`. After installation, run the sample by executing the command `npm run serve` to render the dashboard.
