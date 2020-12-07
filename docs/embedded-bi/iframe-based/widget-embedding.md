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

## How to get the Widget Id

1. Open the dashboard and use the inspect element to find the widget id. Then select the widget, which you want to embed.  
![InspectElement](/static/assets/embedded/iFrame-based/images/inspect-element.png)

2. Copy and keep the `data-widget-id`, which needs to be added in the embed URL in next section.  

## How to get the dashboard URL

1. To get the embed URL, click the Share icon of the respective dashboard.  
![DashboardShare](/static/assets/embedded/iFrame-based/images/dashboard-share.png)  

2. Click the `Get Embed Code` link in the share dialog box.  
![EmbedCodeOption](/static/assets/embedded/iFrame-based/images/embedcode-option.png)

3. Copy the embed URL by clicking the copy icon from the Embed Code dialog.    
![CopyEmbedCode](/static/assets/embedded/iFrame-based/images/copy-embedcode.png)


## How to embed the widget using the URL

1. Get the copied `data-widget-id` value from first section, which value needs to be set for `widgetId` parameter and set `true` for `isWidgetMode` parameter in the dashboard URL as follows.    
![EmbedWidgetCode](/static/assets/embedded/iFrame-based/images/embed-widget-code.png)

2. Embed the above embed URL into any web application.    

3. Run the web application, it will show the login window or dashboard based on the type of the dashboard. Click the login and enter the valid user credentials and the widget will render automatically.  
![EmbedLogin](/static/assets/embedded/iFrame-based/images/embed-widget-login.png)  
![EmbedViewDashboard](/static/assets/embedded/iFrame-based/images/embedded-widget.png)  

> **NOTE:**  You can make dashboard public and access it anonymously without need for login.
