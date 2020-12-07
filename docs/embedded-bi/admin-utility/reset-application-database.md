---
layout: post
title:  Reset Application Database – Admin Utility | Bold BI
description: Learn how to reset the application database of Bold BI server application through the command line interface.
platform: bold-bi
documentation: ug
---

# Reset Application Database	 
You can reset the database of the Bold BI application using this command. Follow the below steps:
   
1. Open the command prompt and change the directory to the Admin Utility location.  
~~~
cd C:\Bold BI\Utilities\AdminUtils
~~~  
![command](/static/assets/embedded/admin-utility/images/utilscmd.png)  
 
2. After changing the directory, run the following command to reset database.  
~~~
AdminUtils.exe dbconfig -servername "localhost" -databasename "BoldBIMasterDatabase" -u "Admin" -p "Admin@12345" -iswindowsauthentication false -sslenabled false   
~~~  
> **IMPORTANT:**  command details:  
servername – SQL server hostname/IP  
databasename – SQL database name  
u – SQL server username  
p – SQL server password  
iswindowsauthentication – Is windows authentication required (this is optional)  
sslenabled – Is encrypted connection required (this is optional)
  
![reset-command](/static/assets/embedded/admin-utility/images/reset-con-string.png)  

3. Once the database has been updated successfully, then restart the application in IIS.
