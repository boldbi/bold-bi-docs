---
layout: post
title: HTTP Error 500.19 – How to fix | Bold BI Documentation 
description: Learn how to fix the HTTP Error 500.19 through the IIS manager that occurred when trying to login into Bold BI Server.
platform: bold-bi
documentation: ug
---

# How to resolve the HTTP Error 500.19 - Cannot login locally

Follow the provided steps to change the Physical Path Credentials option for the hosted Bold BI application. 

1. Open Internet Information Services (IIS) Manager (`Start` > `Run` > `type "inetmgr"`).    

   ![IIS Settings](/static/assets/faq/images/iis-command.png)  

2. Use the navigation pane on the left to browse to `Sites` and select your `Bold BI application`.  

3. Right-click the `Bold BI` application and select `Manage Website` > `Advanced Settings`.  

   ![IIS Settings](/static/assets/faq/images/advance-settings.png)   

4. Set the `Physical Path Credentials` field to `Application user (pass-through authentication)`. Click OK to save the path credential changes and then click OK on the Advanced Settings prompt.  

   ![IIS Settings](/static/assets/faq/images/physical-path-credentials.png)   

5. Right-click your Bold BI site and select `Manage Website` > `Restart` to refresh the changes that were just made.   

   ![IIS Settings](/static/assets/faq/images/restart-site.png)  

6. Now, you are able to log in to the Bold BI server.   