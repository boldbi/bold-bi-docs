---
layout: post
title:  Embedded SDK v3.3.40 Ruby on Rails Sample | Bold BI Docs
description: Explore the JavaScript-based sample embedded in Ruby on Rails application supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Ruby on Rails using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/ruby-on-rails-sample)  the sample application, which demonstrates the rendering of dashboard available in your Bold BI server and followed by steps to create a new embedding application in the `Ruby on Rails ` on your own.  

> **NOTE:** The best way to get started would be reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation to start using first. The `Getting Started` guide gives you enough information that you need to know before working on the sample. 

    
## How to run the sample

 1. Please [get](https://github.com/boldbi/ruby-on-rails-sample) the Ruby on Rails sample.    

 2. You need to set your embed property details in the `Index.html.erb` and `Authorizes_Controller.rb`.  
    ![Embed Properties](/static/assets/embedded/javascript/sample/images/ruby-index-props.png)
    ![Embed Properties In Authorize Controller](/static/assets/embedded/javascript/sample/images/ruby-authorize-props.png)
    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
        <td align="left">ServerUrl</td>
        <td align="left">Bold BI Server URL (ex: http://localhost:5000/bi/site/site1, http://dashboard.syncfusion.com/bi/site/site1)</td>
    </tr>
    <tr>
        <td align="left">DashboardID</td>
        <td align="left">Provide the dashboard id of the dashboard you want to embed.</td>
    </tr>
    <tr>
        <td align="left">authorizationUrl</td>
        <td align="left">URL pointing to AuthorizeServer API file. We are running ruby sample in 3000 port(http://localhost:3000/api/v1/authorizes).</td>
    </tr>
    <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">You could get your EmbedSecret key from Embed tab by enabling Enable embed authentication in <a href ='https://help.boldbi.com/embedded-bi/site-administration/embed-settings/'>Administration page</a></td>
    </tr>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to authorize the server </td>
    </tr>
    </tbody>
    </table>

 3. Get the item id of the dashboard from the BI server. Please refer to this [link](/embedded-bi/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the following screenshot. 
    ![Get Dashboard Id](/static/assets/embedded/javascript/sample/images/get-dashboard-id.png)

 4. Then, run your Ruby on Rails sample.
 
 5. Dashboard can be rendered in design mode or created with the following changes in the `embedSample()` method.

     ```js
     function embedSample() {
        var boldbiEmbedInstance = BoldBI.create({
            serverUrl: "http://localhost:5000/bi/site/site1",
            dashboardId: "", //Provide item id to render it in design mode,to create dashboard remove this property
            embedContainerId: "dashboard",
            embedType: BoldBI.EmbedType.Component,
            environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
            mode: BoldBI.Mode.Design,
            height: "800px",
            width: "1200px",
            authorizationServer: {
                url: "http://localhost:3000/api/v1/authorizes"
            },
            expirationTime: "100000",
        });
        boldbiEmbedInstance.loadDesigner();
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
    <td align="left">Url of the 'GetEmbedDetails' action in the application.</td>
    </tr>
    </tbody>
    </table>

## How this sample works

 1. Based on the dashboard provided in the embed properties, you will authorize the server URL by calling the GetEmbedDetails function by API(http://localhost:3000/api/v1/authorizes) call with the provided EmbedProperties values.
    ![Get Embed Details](/static/assets/embedded/javascript/sample/images/ruby-authorize.png)

 2. In the above authorization, the `SignatureUrl` has been generated with the provided `EmbedSecret key` and validated the embed details in Bold BI. Once the details are validated, the dashboard starts to render in the `index.html.erb`.

 3. In the `Index.html.erb`, change the dashboard Id of the respective dashboard as you wish to embed.
    ![Set Dashboard Id](/static/assets/embedded/javascript/sample/images/ruby-dashboard.png)

## Steps to create new Ruby on Rails application to embed dashboard

 1. Install the ruby using [link](https://rubyinstaller.org/) by accepting the license.

 2. Once installed, check the version of the ruby using the command prompt `ruby -v`.

 3. To install the `rails`, run the command `gem install rails`. To check the rails version, run the command `rails -v`.

 4. To create a new application, run the command `rails new myApp --database-postgresql`. Here, `myApp` is the folder name, and `postgresql` is the data base used. Ruby on rails uses `SQLite` as a default database, other than this need to be specified in command.

 5. Change the file directory by the command `cd myApp` and run a command `rails s` to run the application. Open the browser and go to the `localhost://3000`, you are able to view the Ruby on Rails welcome page.

 6. In the `index.html.erb` file, include the mandatory file in the `<head>` tag. In the `<body>` tag, invoke the method `embedSample()` and create a DOM element with id `dashboard` as follows.

     ```js
        <head>
            <title>Demo</title>
            <%= javascript_include_tag "https://cdn.boldbi.com/embedded-sdk/v6.4.6/boldbi-embed.js", "data-turbolinks-track" => true  %>
        </head>

        <body onload="embedSample();">
            <div id="dashboard"></div>
            <script>
            function embedSample() {
                    var boldbiEmbedInstance = BoldBI.create({
                        //Bold BI server URL (ex: http://localhost:5000/bi/site/site1, http://demo.boldbi.com/bi/site/site1)
                        serverUrl: "http://localhost:64503/bi/site/site1",
                        //Get and set the item id of the dashboard to embed from BI server(https://help.syncfusion.com/bold-bi/enterprise-bi/share-dashboards/get-dashboard-link#get-link).
                        dashboardId: "",
                        embedContainerId: "dashboard",
                        embedType: BoldBI.EmbedType.Component,
                        environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
                        height: "800px",
                        width: "1200px",
                        authorizationServer: {
                        //URL pointing to AuthorizeServer API file. We are running ruby sample in 3000 port(http://localhost:3000/api/v1/authorizes). Learn more about authorize server(https://help.syncfusion.com/bold-bi/embedded-bi/javascript/authorize-server)
                            url: "http://localhost:3000/api/v1/authorizes"
                        },
                        expirationTime: "100000",//Set the duration for the token to be alive.
                    });
                    boldbiEmbedInstance.loadDashboard();
                }
            </script>
        </body>
     ```

 7. In the `embedSample()` method, create an instance to render the dashboard using the `loadDashboard()` method.

 8. In the `authorize_controller.rb` file, define the variables `embedSecret` and `userEmail` for authorization purpose. Invoke the method `getEmbedDetails()`, which uses the method `getSignatureUrl()` to generate the algorithm.
    
    In `getEmbedDetails()` API, the `embedQuerString`,`userEmail` and the value from the `GetSignatureUrl()` method is appended as query parameters in the URL to get details of particular dashboard. Then run the application.

     ```js
        class Api::V1::AuthorizesController < ApplicationController
        skip_before_action :verify_authenticity_token
        def create 
            #Get the EmbedSecret key from Bold BI(https://help.syncfusion.com/bold-bi/on-premise/site-settings/embed-settings)
            @embedSecret = ""
            #Enter your Bold BI credentials
            @userEmail = ""
            @EmbedQueryString = params[:embedQuerString]
            @DashboardServerApiUrl = params[:dashboardServerApiUrl]
            getEmbedDetails
            render :json => Net::HTTP.get(URI.parse(@ApiUrl))
        end

            private
        def getEmbedDetails
            @EmbedQueryString = @EmbedQueryString << "&embed_user_email=" << @userEmail
            getSignatureUrl
            @EmbedSignature = "&embed_signature=" + @signature;
            @EmbedDetailsUrl = "/embed/authorize?" + @EmbedQueryString.downcase + @EmbedSignature;
            @ApiUrl = @DashboardServerApiUrl << @EmbedDetailsUrl
        end
        def getSignatureUrl
            @EmbedQueryString = @EmbedQueryString.downcase
            @hmac = OpenSSL::HMAC.digest('sha256', @embedSecret, @EmbedQueryString)
            @signature = Base64.strict_encode64(@hmac)
        end
        end
     ```