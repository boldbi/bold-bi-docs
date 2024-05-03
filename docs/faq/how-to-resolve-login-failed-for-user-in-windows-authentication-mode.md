---
layout: post
title: Login Failure in Windows Authentication – Solved | Bold BI
description: Learn how to resolve the user login failure when connecting SQL Server database in Bold BI in windows authentication mode.
platform: bold-bi
documentation: ug
---
 
# Login failed for user in Windows Authentication mode
When connecting to SQL Server using Windows Authentication mode in Bold BI, it will throw the following error.
![login-failed](/static/assets/faq/images/login-failed-user.png)
 
## Why this issue occurred
`NT AUTHORITY/SYSTEM` is not added to IIS/IIS EXPRESS for accessing SQL Server in Windows Authentication mode.
 
### The steps for adding `NT AUTHORITY/SYSTEM` to access SQL Server Windows Authentication mode in IIS or IIS EXPRESS
 
In Microsoft SQL Server Management Studio, please perform the following actions on the server.
 
1.  Right click on "Login" and select `New Login` to add respective login into SQL Server.
    ![add-login](/static/assets/faq/images/add-new-login.png)
 
2.  Click on the "Search" button, then select `Advanced -> Find Now -> SYSTEM` in the newly opened window.  
    ![login-search](/static/assets/faq/images/login-window.png)
 
    ![authority-system-add](/static/assets/faq/images/add-system.png)  
 
3.  Then click "OK" to add the login `NT AUTHORITY/SYSTEM`. Once it has been added, we will be able to access Windows authentication mode in Bold BI. 