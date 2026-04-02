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

## Prerequisites

 * [Node.js](https://nodejs.org/en/)
 * [Ruby installer](https://rubyinstaller.org/)
 * [Visual Studio Code](https://code.visualstudio.com/download)

## How to run the sample

1. Please [get](https://github.com/boldbi/ruby-on-rails-sample) the Ruby on Rails sample.    

2. Please ensure that you have enabled embed authentication on the `embed settings` settings page. If it is not currently enabled, please refer to the provided image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.

   ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

3. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the image below for visual guidance.

   ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
   ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
4. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/ruby-on-rails-sample/tree/master) within the application. Make sure that you have placed it correctly in the application, as shown in the image.

   ![EmbedConfig image](/static/assets/javascript/sample/images/ruby-embed-config.png)

    <meta charset="utf-8"/>
       <table>
       <tbody>
       <tr>
          <td align="left">ServerUrl</td>
          <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, https://demo.boldbi.com/bi)</td>
       </tr>
       <tr>
          <td align="left">SiteIdentifier</td>
          <td align="left">For the Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be an empty string.</td>
       </tr>
       <tr>
          <td align="left">UserEmail</td>
          <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard list.</td>
       </tr>
       <tr>
          <td align="left">EmbedSecret</td>
          <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='/site-administration/embed-settings/'>Administration page</a> </td>
       </tr>
       <tr>
          <td align="left">Environment</td>
          <td align="left">Your Bold BI application environment. (If it is a cloud analytics server, use `BoldBI.Environment.Cloud`; if it is your server, use `BoldBI.Environment.Enterprise`)</td>
       </tr>
       <tr>
          <td align="left">DashboardId</td>
          <td align="left">Item ID of the dashboard to be embedded in your application.</td>
       </tr>
       <tr>
          <td align="left">ExpirationTime</td>
          <td align="left">Token expiration time. (In the EmbedConfig.json file, the default token expiration time is 10000 seconds)</td>
       </tr>
       </tbody>
       </table>

5. To install all dependent packages by using the following command `bundle install`.

6. Then, run your Ruby on Rails sample using the following command `rails s`.

## How this sample works

 1. The `renderDashboard` method will be invoked based on the configured embedConfig values in the `index.html.erb` file.
    ![render dashboard](/static/assets/javascript/sample/images/ruby_dashboard.png)

 2. Before rendering, call the `tokenGenerationUrl`, which redirects to the `token_generation` action in the `home_controller.rb`. This action generates the access token using the provided `embedDetails`.
    ![Get Embed Details](/static/assets/javascript/sample/images/ruby-authorize.png)  

 3. Once the token is generated, it will be returned to the `index.html.erb` file and the dashboard will start to render it.

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
            <%= javascript_include_tag "https://cdn.boldbi.com/embedded-sdk/v15.2.6/boldbi-embed.js", "data-turbolinks-track" => true  %>
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