---
layout: post
title:  Dashboard Widget iFrame Embedding | Bold BI Documentation
description: Learn how to embed widget from a dashboard individually in any application using the iFrame embed code URL.
platform: bold-bi
documentation: ug
---

# Embed the widget of the dashboard using the iFrame

Any widget from the dashboard can be embedded individually in any application using the URL. For widget embedding, you need to enable widget mode and use widget id in the embed URL. The following steps need to be followed for widget embedding.
* Find the Id of the widget to be embedded.
* Get the dashboard URL.
* Use the widget id and dashboard URL together to embed widget. 

## How to get the Embed Widget Url

1. Open the desired dashboard and select the `More` option under the widget you want to embed. Then, select `Get Embed Code` from the drop-down menu.
![InspectElement](/static/assets/iFrame-based/images/Widget-GetEmbedCode.png)

2. Copy the iframe code from the embed code pop-up page. 
![InspectElement](/static/assets/iFrame-based/images/Widget-EmbedCode.png) 


## How to embed the widget using the URL

1. Now, use copied iframe code in the HTML page to render the particular widget of the dashboard as follows.    
![EmbedWidgetCode](/static/assets/iFrame-based/images/embed-widget-code.png)

2. Embed the above embed URL into any web application.    

3. Run the web application, it will show the login window or dashboard based on the type of the dashboard. Click the login and enter the valid user credentials and the widget will render automatically.  
![EmbedLogin](/static/assets/iFrame-based/images/iframeLoginPage.png#max-width=45%)  
![EmbedViewDashboard](/static/assets/iFrame-based/images/embedded-widget.png)  

> **NOTE:**  You can make dashboard public and access it anonymously without need for login.
