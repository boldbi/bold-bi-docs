---
layout: post
title: Custom Theme – JavaScript Embedding | Bold BI Docs
description: Learn how to apply custom theme securely using the JavaScript-based embedding of Bold BI dashboard in any of your business or Web application.
platform: bold-bi
documentation: ug
---

# Custom theme

The custom theme feature enables you to personalize the appearance of the Bold BI embedded dashboard. By selecting the custom theme option, you can modify the dashboard using different themes that are accessible on the Bold BI server.

> **NOTE:** In order to set a custom theme, you should upload the custom theme files in Bold BI Server. Please refer to this [link](/site-administration/look-and-feel-settings-in-embedded-analytics/#custom-theme) for more information on how to upload custom theme files.

* `appearance`   - This member used to configure the custom theme in the embedded dashboard.
* `application`  - This member used to set the custom theme for buttons, menus, and popup areas as the branding color.
* `dashboard`    - This member used to set a custom theme in the dashboard by combining the `appearance` and `application` members.
* `isLocalTheme` - This member needs to be set as true when directly referring to the theme file in your embedding application.

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

Please follow the steps to apply the custom theme to the embedded dashboard.

## How to use Bold BI wrapper inside your html page

1. In your .html page, you need to add the following dependent script in the head tag of your page.

    ```js
    <head>
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.11.24/boldbi-embed.js"></script>
    </head>
     ```

2. In the body tag, you need to create the div element with your own id name. This element will be used for embedding the dashboard.

     ```js
    <body>
        <div id="dashboard_container"></div>
    </body>
     ```

    >**NOTE:** If you use hyphens in ID, your code may become more prone to errors and be harder to read while using Jquery. Instead, use underscores or camelCase if you are in control of the ID.

3. In the body tag, you need to add the function to create a BoldBI instance with the following properties, and call that function in the body using the `onload` attribute as follows. Also, call the `loadDashboard()` function.

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

    When you choose a custom theme for the `application`, you must also select a custom theme for the `appearance` option. Otherwise, the default `light` will be applied to the `appearance` option.

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

    When you choose a custom theme for the `dashboard` option, there is no need to set a custom theme value for the `appearance` and `application` options.

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

The dashboard is rendered in the dark theme as specified in the `appearance` option, and the application buttons and loading indicator are applied with the darkviolet theme as specified in the `application` option.
![EmbedSSOOAuth](/static/assets/javascript/images/dark-violet-application.png#max-width=85%)
![EmbedSSOOAuth](/static/assets/javascript/images/dark-theme.png#max-width=85%)
![EmbedSSOOAuth](/static/assets/javascript/images/dark-violet-button.png#max-width=85%)

## How to refer the custom theme file as external in your embedded application

1. In the .html page of your application, you need to add the `boldbi.theme.definition.min.css` as a custom theme file and the following dependent script in the head tag of your page.
 To demonstrate, we have set the `dark` theme as a custom theme.

     ```js
    <head>  
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.11.24/boldbi-embed.js"></script>
    </head>
     ```     

2. The `isLocalTheme` option should be set to `true` when referencing the custom theme file as an external file.

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

A sample of a custom theme is provided. From this [sample](https://github.com/boldbi/boldbi-themestudio), you can generate the custom theme file ({src directory}/boldbi-themestudio/themes) by following the steps on the [readme page](https://github.com/boldbi/boldbi-themestudio#readme).