---
layout: post
title: Embedding Analytics with Ruby on Rails | Bold BI Docs
description: Learn how to embed an analytics dashboard with Ruby on Rails application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Ruby on Rails using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/ruby-on-rails-sample) the sample application, which demonstrates the rendering of a dashboard available on your Bold BI server. The link is followed by steps to create a new embedding application in `Ruby on Rails ` on your own.  

> **NOTE:** The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) Started section of the documentation first. The `Getting Started` guide provides you with enough information that you need to know before working on the sample.

    
## How to run the sample

 1. Please [get](https://github.com/boldbi/ruby-on-rails-sample) the Ruby on Rails sample.    

 2. You need to set the details of your embed property in the `Index.html.erb` and `Authorizes_Controller.rb`.
    ![Embed Properties](/static/assets/javascript/sample/images/ruby-index-props.png)
    ![Embed Properties In Authorize Controller](/static/assets/javascript/sample/images/ruby-authorize-props.png)
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
        <td align="left">You could get your EmbedSecret key from Embed tab by enabling Enable embed authentication in <a href ='/site-administration/embed-settings/'>Administration page</a></td>
    </tr>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to authorize the server </td>
    </tr>
    </tbody>
    </table>

 3. Please get the item ID of the dashboard from the BI server. Kindly refer to this [link](/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the screenshot provided below.
    ![Get Dashboard Id](/static/assets/javascript/sample/images/get-dashboard-id.png)

 4. Then, run your Ruby on Rails sample.

 5. The dashboard can be rendered in design mode or created with the following changes in the `embedSample()` method.

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

 1. To authorize the server URL, you will call the GetEmbedDetails function using the API (`http://localhost:3000/api/v1/authorizes`) with the provided EmbedProperties values, based on the dashboard provided in the embed properties.
    ![Get Embed Details](/static/assets/javascript/sample/images/ruby-authorize.png)

 2. In the previous authorization, the `SignatureUrl` has been generated using the provided `EmbedSecret key` and the embed details have been validated in Bold BI. After the details are validated, the dashboard starts to render in the `index.html.erb` file.

 3. In the `Index.html.erb`, change the dashboard ID of the respective dashboard as you wish to embed.
    ![Set Dashboard Id](/static/assets/javascript/sample/images/ruby-dashboard.png)

## Steps to create new Ruby on Rails application to embed dashboard

 1. Install [Ruby](https://rubyinstaller.org/) using the provided installer and accept the license.

 2. Once installed, check the version of Ruby by using the command prompt `ruby -v`.

 3. To install `rails`, run the command `gem install rails`. To check the version of rails, run the command `rails -v`.

 4. To create a new application, run the command `rails new myApp --database=postgresql`. Here, `myApp` is the folder name, and `postgresql` is the database used. Ruby on Rails uses `SQLite` as the default database, so any other database needs to be specified in the command.

 5. Change the file directory using the command `cd myApp` and then run `rails s` to start the application. Open your browser and go to `localhost://3000` to view the Ruby on Rails welcome page.

 6. In the `index.html.erb` file, include the required file within the `<head>` tag. Within the `<body>` tag, call the `embedSample()` method and create a DOM element with the id `dashboard` as shown.

     ```js
        <head>
            <title>Demo</title>
            <%= javascript_include_tag "https://cdn.boldbi.com/embedded-sdk/v7.8.18/boldbi-embed.js", "data-turbolinks-track" => true  %>
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
                        //Your Bold BI application environment. (If Cloud, you should use `Cloud`, if Enterprise, you should use `Enterprise`)
                        environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
                        height: "800px",
                        width: "1200px",
                        authorizationServer: {
                        //URL pointing to AuthorizeServer API file. We are running ruby sample in 3000 port(http://localhost:3000/api/v1/authorizes). Learn more about authorize server(https://help.boldbi.com/security-configuration/authorize-server)
                            url: "http://localhost:3000/api/v1/authorizes"
                        },
                        expirationTime: "100000",//Set the duration for the token to be alive.
                    });
                    boldbiEmbedInstance.loadDashboard();
                }
            </script>
        </body>
     ```

 7. In the `embedSample()` method, create an instance to render the dashboard by using the `loadDashboard()` method.

 8. In the `authorize_controller.rb` file, define the variables `embedSecret` and `userEmail` for authorization purposes. Invoke the method `getEmbedDetails()`, which uses the method `getSignatureUrl()` to generate the algorithm.

    In the `getEmbedDetails()` API, the `embedQuerString`, `userEmail`, and the value from the `GetSignatureUrl()` method are appended as query parameters in the URL to get details of a particular dashboard. Then, run the application.

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