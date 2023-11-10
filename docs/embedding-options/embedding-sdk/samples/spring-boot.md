---
layout: post
title: Bold BI Embedding in Java with Spring Boot | Bold BI Docs
description: Learn how to embed an analytics dashboard with Spring Boot application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards Embedding in Java using Spring Boot Sample with Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/spring-boot-sample) the sample application, which demonstrates the dashboard rendering available in your Bold BI server and is followed by steps to create new embedding application in the `Spring Boot` on your own.

> **NOTE:** The best way to get started would be read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation to start using first. The `Getting Started` guide gives you enough information to know before working on the sample.

 ## Prerequisites

 * [Java Development Kit (JDK)](https://www.microsoft.com/openjdk).
 * [Visual Studio Code](https://code.visualstudio.com/download).
   	* [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack).
 	* [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items?itemName=pivotal.vscode-boot-dev-pack).


## How to run the sample

1. Please get the [Spring Boot](https://github.com/boldbi/spring-boot-sample) sample from GitHub.

2. Please ensure you have enabled embed authentication on the `embed settings` page. If it is not enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 3. To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.
     
    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png) 
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
 4. Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/spring-boot-sample/tree/master/src/main/resources) within the application. Please ensure you have placed it in the application as, shown in the following image.

    ![EmbedConfig](/static/assets/javascript/sample/images/springboot-embedconfig.png)

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">ServerUrl</td>
    <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi).</td>
    </tr>
    <tr>
    <td align="left">SiteIdentifier</td>
    <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
    <td align="left">Environment</td>
    <td align="left">Your Bold BI application environment. (If it is cloud analytics server, use <code>BoldBI.Environment.Cloud</code>; if it is your own server, use <code> BoldBI.Environment.Enterprise</code>).</td>
    </tr>
    <tr>
    <td align="left">DashboardId</td>
    <td align="left">Item id of the dashboard to be embedded in your application.</td>
    </tr>
    <tr>
    <td align="left">EmbedSecret</td>
    <td align="left">Get your EmbedSecret key from the Embed tab by enabling the Enable embed authentication in the <a href='/site-administration/embed-settings/'>Administration page.</a></td>
    </tr>
    <tr>
    <td align="left">UserEmail</td>
    <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard.</td>
    </tr>
    <tr>
    <td align="left">ExpirationTime</td>
    <td align="left">Token expiration time. (In the EmbedConfig.json file, the default token expiration time is 10000 seconds).</td>
    </tr>
    </tbody>
    </table>

 5. Run the sample using **Spring Boot Dashboard** in the Activity Bar on the side.

 6. The dashboard can be editable in design mode and create a new dashboard with the following changes in the `renderDashboard()` method.

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <td align="left">mode</td>
    <td align="left">In which mode do you want to render the dashboard? It can either be 'BoldBI.Mode.View' or 'BoldBI.Mode.Design' mode. </td>
    </tr>
    <tr>
    <td align="left">authorizationServer</td>
    <td align="left">Url of the 'authorizationServerAPI' action in the application.</td>
    </tr>
    </tbody>
    </table>

    ```js
        function renderDashboard(data)
        {
            var dashboard = BoldBI.create({
                serverUrl: data.serverUrl + "/" + data.siteIdentifier,
                dashboardId: data.dashboardId,
                embedContainerId: "dashboard",
                embedType: BoldBI.EmbedType.Component,
                environment:data.environment,
                width: window.innerWidth + "px",
                height: window.innerHeight + "px",
                mode: BoldBI.Mode.View,
                expirationTime: 100000,
                authorizationServer: {
                    url: "/authorizationServer" 
                }
            });

            dashboard.loadDashboard();
        }

     ```

## How this sample works

 1. The`renderEmbedConfig()` function is called to send a GET request to the `/getEmbedConfig` API and get JSON data. It then calls the `renderDashboard(data)` to render the dashboard if `embedConfig.json` is provided. If not, it displays an error message.

    ![spring-boot-renderEmbedConfig](/static/assets/javascript/sample/images/spring-boot-renderEmbedConfig.png)


 2. The `/getEmbedConfig` endpoint is handled by the `getEmbedConfig()` method in the `HomeController` class. It reads the contents of the `embedConfig.json` file and returns an EmbedProperties object.

    ![spring-boot-getEmbedConfig](/static/assets/javascript/sample/images/spring-boot-getEmbedConfig.png)

 3. The `renderDashboard(data)` function renders the dashboard using the retrieved data from the `getEmbedConfig()`.

    ![spring-boot-renderDashboard](/static/assets/javascript/sample/images/spring-boot-renderDashboard.png)

 4. Before rendering, the `authorizationUrl` is called, which redirects to the `authorizationServer` action in the `HomeController`, which generates the `EmbedSignature` using the embed secret from the `embedConfig.json`.

    ![spring-boot-authorizationserver](/static/assets/javascript/sample/images/spring-boot-authorizationServer.png)

 5. These details will be sent to the Bold BI server and validated there. Once details are validated, the dashboard starts to render.


## Steps to create Spring Boot application to embed dashboard

 1. Create a new spring boot sample by using this [link](https://code.visualstudio.com/docs/java/java-spring-boot#_create-the-project)

 2. After you create the sample, open the sample in your VS code.

 3. Please ensure you have enabled embed authentication on the `embed settings` page. If it is not enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 4. To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.
     
    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png) 
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
 5. Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/spring-boot-sample/tree/master/src/main/resources) within the application. Please ensure you have placed it in the application as shown in the following image.

    ![EmbedConfig](/static/assets/javascript/sample/images/springboot-embedconfig.png)

 6. Create a new class called `EmbedProperties.java` in `src\main\java\com\example\demo` folder to define the following properties. The `embedConfig.json` file's  data is stored in these properties.

    ```js
    import com.google.gson.annotations.SerializedName;
    public class EmbedProperties
    {
       @SerializedName("DashboardId")
        public String dashboardId;

        @SerializedName("ServerUrl")
        public String serverUrl;

        @SerializedName("UserEmail") 
        public String userEmail;

        @SerializedName("EmbedSecret") 
        public String embedSecret;

        @SerializedName("EmbedType")
        public String embedType;

        @SerializedName("Environment")
        public String environment;

        @SerializedName("ExpirationTime")
        public String expirationTime;

        @SerializedName("SiteIdentifier")
        public String siteIdentifier;

        public String getDashboardId() {
            return dashboardId;
        }
        public void setDashboardId(String DashboardId) {
            this.dashboardId = DashboardId;
        }
        public String getServerUrl() {
            return serverUrl;
        }
        public void setServerUrl(String ServerUrl) {
            this.serverUrl = ServerUrl;
        }
        public String getUserEmail() {
            return userEmail;
        }
        public void setUserEmail(String UserEmail) {
            this.userEmail = UserEmail;
        }
        public String getEmbedSecret() {
            return embedSecret;
        }
        public void setEmbedSecret(String EmbedSecret) {
            this.embedSecret = EmbedSecret;
        }
        public String getEmbedType() {
            return embedType;
        }
        public void setEmbedType(String EmbedType) {
            this.embedType = EmbedType;
        }
        public String getEnvironment() {
            return environment;
        }
        public void setEnvironment(String Environment) {
            this.environment = Environment;
        }
        public String getExpirationTime() {
            return expirationTime;
        }
        public void setExpirationTime(String ExpirationTime) {
            this.expirationTime = ExpirationTime;
        }
        public String getSiteIdentifier() {
            return siteIdentifier;
        }
        public void setSiteIdentifier(String SiteIdentifier) {
            this.siteIdentifier = SiteIdentifier;
        }
    }

    ```

 7. Create a new model class called `EmbedClass.java` in `src\main\java\com\example\demo`, to define the following properties, The dashboard details are obtained from the server using these properties.
    ```js
    public class EmbedClass {

        private String embedQuerString;
        private String dashboardServerApiUrl;
        public String getEmbedQuerString(){
            return embedQuerString;
        }
        public void setEmbedQuerString( String embedQuerString){
            this.embedQuerString = embedQuerString;
        }
        public String getDashboardServerApiUrl(){
            return dashboardServerApiUrl;
        }
        public void setDashboardServerApiUrl( String dashboardServerApiUrl){
            this.dashboardServerApiUrl = dashboardServerApiUrl;
        }
    }
    ```

 8. Create a file called `index.html` in `src\main\resources\static` folder and add the following code in the `<head>` section.

    ```js
    <head> 
        <title>Bold BI</title> 
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/latest/boldbi-embed.js"></script>    
    </head>
    ```
 
 9. In the `<body>` section, include the following code. The dashboard can be rendered using this container.

    ```js
    <body onload="renderEmbedConfig()"> 
        <div id="viewer-section">
            <div id="dashboard"></div>
        </div>
        <div id="error-message" ></div>
    </body>
    ``` 

 10. Add the following in the `<sricpt>` section in the `index.html` file to render the dashboard.

        ```js
        <script>
        function renderEmbedConfig() {
        fetch('/getEmbedConfig')
          .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
         .then(data => {
                renderDashboard(data)
            })
        .catch(error => {
            const content='<div>To compile and run the project, an embed config file needs to be required. Please use the <a href="https://help.boldbi.com/embedded-bi/site-administration/embed-settings/" target="_blank">link</a> to obtain the JSON file from the Bold BI server.</div>';
            const errorMessageElement = document.getElementById('error-message');
            errorMessageElement.innerHTML = content;
            errorMessageElement.style.display = 'block';
        });           
        }
        function renderDashboard(data)
        {
            var dashboard = BoldBI.create({
                serverUrl: data.serverUrl + "/" + data.siteIdentifier,
                dashboardId: data.dashboardId,
                embedContainerId: "dashboard",
                embedType: BoldBI.EmbedType.Component,
                environment:data.environment,
                width: window.innerWidth + "px",
                height: window.innerHeight + "px",
                mode: BoldBI.Mode.View,
                expirationTime: 100000,
                authorizationServer: {
                    url: "/authorizationServer" 
                }
            });

            dashboard.loadDashboard();
        }
	 </script>
        ```

 11. Include the following XML code in the `pom.xml's <dependencies>` section.

     ```js
      <dependency>
        <groupId>com.google.code.gson</groupId>
        <artifactId>gson</artifactId>
        <version>2.8.2</version>
      </dependency>
     ```
    
 12. Create a `HomeController.java` file in `src\main\java\com\example\demo`  to get particular dashboard details, define an API `authorizationServer()`, which uses the `GetSignatureUrl()` method to generate the algorithm. In this API, the `embedQuerString`, `userEmail`, and the value from the `GetSignatureUrl()` method are appended as the query parameters in the URL to get details of the particular dashboard.

     ```js
      @RestController
      @CrossOrigin
      @RequestMapping("/")
      public class HomeController {

        EmbedProperties embedProperties;
        @GetMapping("getEmbedConfig")
        public EmbedProperties getEmbedConfig() throws IOException {
            ClassPathResource resource = new ClassPathResource("embedConfig.json");
            byte[] jsonBytes = StreamUtils.copyToByteArray(resource.getInputStream());
            String jsonContent = new String(jsonBytes, StandardCharsets.UTF_8);
            Gson gson = new Gson();
            embedProperties = gson.fromJson(jsonContent, EmbedProperties.class);
            return embedProperties;
        }

        @PostMapping("authorizationServer")
        public String authorizationServer(@RequestBody EmbedClass embedQueryString) throws Exception {
            String embedQuery = embedQueryString.getEmbedQuerString();
            embedQuery += "&embed_user_email=" + embedProperties.getUserEmail();
            String embedDetailsUrl = "/embed/authorize?" + embedQuery + "&embed_signature=" + GetSignatureUrl(embedQuery);
            RestTemplate restTemplate = new RestTemplate();
            DefaultUriBuilderFactory defaultUriBuilderFactory = new DefaultUriBuilderFactory();
            defaultUriBuilderFactory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.NONE);
            restTemplate.setUriTemplateHandler(defaultUriBuilderFactory);
            String baseAddressString = embedQueryString.getDashboardServerApiUrl();
            String result = restTemplate.getForObject(baseAddressString + embedDetailsUrl, String.class);
            return result;
        }

        public String GetSignatureUrl(String queryString) throws Exception {
            if (queryString != null){
                Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
                SecretKeySpec secret_key = new SecretKeySpec(embedProperties.getEmbedSecret().getBytes("UTF-8"), "HmacSHA256");
                sha256_HMAC.init(secret_key);
                return new String(Base64.getEncoder().encode(sha256_HMAC.doFinal(queryString.getBytes("UTF-8"))));
            }
            return null;
        }
     }

     ```
 
 13. Include these import statements to `HomeConrtoller.java`.

     ```js
        import java.io.IOException;
        import java.nio.charset.StandardCharsets;
        import java.util.Base64;
        import javax.crypto.Mac;
        import javax.crypto.spec.SecretKeySpec;
        import org.springframework.core.io.ClassPathResource;
        import org.springframework.util.StreamUtils;
        import org.springframework.web.bind.annotation.CrossOrigin;
        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.PostMapping;
        import org.springframework.web.bind.annotation.RequestBody;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RestController;
        import org.springframework.web.client.RestTemplate;
        import org.springframework.web.util.DefaultUriBuilderFactory;
        import com.google.gson.Gson;
     ```

 14. Now, you can run the sample using the **Spring Boot Dashboard** in the Activity Bar on the side.
 
 15. You can access your application by opening a web browser and navigating to the this URL (http://localhost:8080).
