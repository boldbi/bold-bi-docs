---
layout: post
title: Reset Application Database – Utility for v3.3 | Bold BI Docs
description: "Learn how to reset the application database of a Bold BI server running version 3.3 or older through the command line interface, with the commands to run."
platform: bold-bi
documentation: ug
---

# Reset Application Database for Bold BI Version 3.3 or Older

You can reset the database of the Bold BI application using this command. Follow these steps:
   
1. Open the command prompt and change the directory to the admin utility location:
~~~
cd C:\Bold BI\Utilities\AdminUtils
~~~  
![command](/static/assets/admin-utility/images/utilscmd.png)  
 
2. After changing the directory, run the following command to reset the database:
~~~
AdminUtils.exe dbconfig -servername "localhost" -databasename "BoldBIMasterDatabase" -u "Admin" -p "Admin@12345" -iswindowsauthentication false -sslenabled false   
~~~  
> **IMPORTANT:** Command details:  
> servername – SQL server hostname/IP  
> databasename – SQL database name  
> u – SQL server username  
> p – SQL server password  
> port – Port number of the server (required for PostgreSQL only)  
> iswindowsauthentication – Is Windows authentication required (this is optional)  
> sslenabled – Is encrypted connection required (this is optional)

![reset-command](/static/assets/admin-utility/images/reset-con-string.png)  

3. Once the database has been updated successfully, restart the application in IIS.