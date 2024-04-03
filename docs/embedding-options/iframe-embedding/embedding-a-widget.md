---
layout: post
title:  Dashboard Widget iFrame Embedding | Bold BI Documentation
description: Learn how to embed widget from a dashboard individually in any application using the iFrame embed code URL.
platform: bold-bi
documentation: ug
---

# Embed the widget of the dashboard using the iFrame

Any widget from the dashboard can be embedded individually in any application using its URL. To enable widget embedding, you must activate widget mode and utilize the widget ID in the embed URL. The following steps must be followed for widget embedding.
* Find the Id of the widget to be embedded.
* Get the dashboard URL.
* Use the widget id and dashboard URL together to embed widget. 

## How to get the Embed Widget Url

1. To open the desired dashboard and choose the widget you want to embed, select the `More` option. Next, from the drop-down menu, select `Get Embed Code`.
![InspectElement](/static/assets/iFrame-based/images/Widget-GetEmbedCode.png)

2. Please copy the iframe code from the pop-up page that displays the embed code. 
![InspectElement](/static/assets/iFrame-based/images/Widget-EmbedCode.png) 


## How to embed the widget using the URL

1. Now, utilize the copied iframe code in the HTML page to display the specific widget of the dashboard in a concise manner.   
![EmbedWidgetCode](/static/assets/iFrame-based/images/embed-widget-code.png)

2. Please embed the provided URL into any web application.  

3. To use the web application, you need to run it. Depending on the type of dashboard, it will display either the login window or the dashboard itself. Click on the login option and enter the correct user credentials. Once you do that, the widget will automatically render.  
![EmbedLogin](/static/assets/iFrame-based/images/iframeLoginPage.png#max-width=45%)  
![EmbedViewDashboard](/static/assets/iFrame-based/images/embedded-widget.png)  

> **NOTE:**  You can make the dashboard public and access it anonymously without the need for logging in.
