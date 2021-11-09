---
layout: post
title: Login Failure in Windows Authentication – Solved | Bold BI
description: Learn how to resolve the user login failure when connecting SQL Server database in Bold BI in windows authentication mode.
platform: bold-bi
documentation: ug
---
 
# Login failed for user in Windows Authentication mode
When connecting the SQL Server Windows Authentication mode in Bold BI, it will throw the following error
![login-failed](/static/assets/embedded/faq/images/login-failed-user.png)
 
## Why this issue occurred
`NT AUTHORITY/SYSTEM` is not added in IIS/IIS EXPRESS  to access SQL Server Windows Authentication mode.
 
### The steps for adding `NT AUTHORITY/SYSTEM` to access SQL Server Windows Authentication mode in IIS or IIS EXPRESS
 
In Microsoft SQL Server Management Studio, do the following in the Server.
 
1.  Right click on "Login" and select `New Login` to add respective login into SQL Server.
    ![add-login](/static/assets/embedded/faq/images/add-new-login.png)
 
2.  Click on "Search" button, then select `Advanced -> Find Now -> SYSTEM` in the newly opened windows. 
    ![login-search](/static/assets/embedded/faq/images/login-window.png)
 
    ![authority-system-add](/static/assets/embedded/faq/images/add-system.png)  
 
3.  Then click "OK" to add the login `NT AUTHORITY/SYSTEM`. Once it was added, we can access Windows authentication mode in Bold BI. 