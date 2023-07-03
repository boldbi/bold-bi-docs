---
layout: post
title: Custom Theme – JavaScript Embedding | Bold BI Docs
description: Learn how to apply custom theme securely using the JavaScript-based embedding of Bold BI dashboard in any of your business or Web application.
platform: bold-bi
documentation: ug
---

# Custom theme

Custom theme allows you to customize the appearance of the Bold BI embedded dashboard. Using the custom theme option, the dashboard can be customized with a variety of themes that are available on the Bold BI server.

> **NOTE:** To set custom theme, you should upload the custom theme files in Bold BI Server, please go through this [link](/site-administration/look-and-feel-settings-in-embedded-analytics/#custom-theme) for more details about uploading custom theme files.

* `appearance`   - This member used to set the custom theme in the embedded dashboard.
* `application`  - This member used to set the custom theme for button, menu, popup areas as branding color.
* `dashboard`    - This member used to set custom theme in dashboard with combination of `appearance` and `application` members.
* `isLocalTheme` - This member needs to be set as `true` while you directly refer the theme file in your embedding application.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">appearance</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">This member used to set the custom theme in the embedded dashboard.</td>
</tr>
<tr>
<td class="name">application</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">This member used to set the custom theme for button, menu, popup areas as branding color.</td>
</tr>
<tr>
<td class="name">dashboard</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">This member used to set the custom theme in dashboard with combination of appearance and application.</td>
</tr>
<tr>
<td class="name">isLocalTheme</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">This member needs to be set as true while you directly refer the theme file in your embedding application. <br> <b>Note:</b>Default value is <b>false</b>.</td>
</tr>
</tbody>
</table>

## How to apply custom theme in Bold BI embedded application

Follow the steps to apply the custom theme to the dashboard in embedding.

## How to use Bold BI wrapper inside your html page

1. In your .html page, you need to add the following dependent script in the head tag of your page.

    ```js
    <head>
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v6.7.11/boldbi-embed.js"></script>
    </head>
     ```

2. In the body tag, you need to create the div element with your own id name. This element will be used for dashboard embedding.

     ```js
    <body>
        <div id="dashboard_container"></div>
    </body>
     ```

3. In the body tag, you need to add the function to create BoldBI instance with following properties and call that function in the body using the `onload` attribute as follows. Also, call the `loadDashboard()` function.

    ### How to apply custom theme using appearance option 

    ```js
    <body onload="embedSample()">
        <div id="dashboard_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    dashboardSettings :
                    {
                        themeSettings : {
                            appearance :"dark",//By default light theme would be set.
                            
                        }
                    }
                });
                boldbiEmbedInstance.loadDashboard();
            }
        </script>
    </body>
    ```    

    ### How to apply custom theme using application option

    When you set custom theme for `application` option, you have to set custom theme for `appearance` option too. otherwise `light` theme would be applied for `appearance` option.

    ```js
    <body onload="embedSample()">
        <div id="dashboard_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    dashboardSettings :
                    {
                        themeSettings : {
                            appearance :"dark",
                            application : "darkviolet",//Need to mention the name under which you have saved the application theme file in Bold BI server.
                        }
                    }
                });
                boldbiEmbedInstance.loadDashboard();
            }
        </script>
    </body>
    ``` 

    ### How to apply custom theme using dashboard option

    When you set custom theme for `dashboard` option, you need not to set custom theme value for `appearance` and `application` options.

    ```js
    <body onload="embedSample()">
        <div id="dashboard_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    dashboardSettings :
                    {
                        themeSettings : {
                            dashboard : "greenMist",// Need to mention the name under which you have saved the dashboard theme file in Bold BI server.
                        }
                    }
                });
                boldbiEmbedInstance.loadDashboard();
            }
        </script>
    </body>
    ``` 

Here the dashboard is rendered in dark theme as given in `appearance` option and application buttons, loading indicator are applied with darkviolet theme as specified in `application` option.
![EmbedSSOOAuth](/static/assets/javascript/images/dark-violet-application.png#max-width=85%)
![EmbedSSOOAuth](/static/assets/javascript/images/dark-theme.png#max-width=85%)
![EmbedSSOOAuth](/static/assets/javascript/images/dark-violet-button.png#max-width=85%)

## How to refer the custom theme file as external in your embedded application

1. In your .html page of your application, you need to add `boldbi.theme.definition.min.css` as custom theme file and following dependent script in the head tag of your page.
 For demonstration we have set `dark` theme as custom theme.

     ```js
    <head>  
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v6.7.11/boldbi-embed.js"></script>
    </head>
     ```     

2. Need to set `isLocalTheme` option as `true` while referring the custom theme file as external.

     ```js
    <body onload="embedSample()">
        <div id="dashboard_container"></div>
        <script>
             function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                dashboardSettings: {
                    themeSettings: {
                        isLocalTheme : true, //The default value is false.
                    }
                }
            });
            boldbiEmbedInstance.loadDashboard();
        }
        </script>
    </body>
     ``` 

### How to refer the custom theme file as external.

A custom theme sample is provided. From this [sample](https://github.com/boldbi/boldbi-themestudio), you can generate the custom theme file({src directory}/boldbi-themestudio/themes) by following the steps in [readme page](https://github.com/boldbi/boldbi-themestudio#readme).