---
layout: post
title:  Reset Application Database – Admin Utility | Bold BI
description: Learn how to reset the application database of Bold BI server application through the command line interface.
platform: bold-bi
documentation: ug
---

# Reset Application Database

Please refer your operating system’s documentation for how to reset the database of the Bold BI application.

[Windows](/embedded-bi/admin-utility/reset-application-database/#windows)

[Linux](/embedded-bi/admin-utility/reset-application-database/#linux)

## Windows
   
1. Open the command prompt and change the directory to the admin utility location.
~~~
cd C:\BoldServices\utilities\adminutils
~~~  
![command](/static/assets/embedded/admin-utility/images/utilscmd-1.png)  
 
2. After changing the directory, run the following command to reset the database.  
~~~
Syncfusion.Server.Commands.Utility.exe dbconfig -servername "localhost" -databasename "BoldBIMasterDatabase" -u "Admin" -p "Admin@12345" -iswindowsauthentication false -sslenabled false -port "5432" -additionalparameters "Pooling=True"   
~~~  
> **IMPORTANT:**  command details:  
servername – SQL server hostname/IP  
databasename – SQL database name  
u – SQL server username  
p – SQL server password  
port - Port number required for PostgreSQL and MySQL  
iswindowsauthentication – Is windows authentication required (Required for MSSQL only)  
sslenabled – Is encrypted connection required (this is optional)  
additionalparameters - Additional parameters required for database connection (this is optional)   
  
![reset-command](/static/assets/embedded/admin-utility/images/reset-con-string-2.png)  

3. Once the database has been updated successfully, restart the application by following this [link](/embedded-bi/faq/how-to-restart-the-bold-bi-embedded-application/#windows).

## Linux
   
1. Open the command prompt and change the directory to the admin utility location.
~~~
cd /var/www/bold-services/application/utilities/adminutils/
~~~   
![command](/static/assets/embedded/admin-utility/images/linux-cd.png)
 
2. After changing the directory, run the following command to reset the database.  
~~~
../../../dotnet/dotnet Syncfusion.Server.Commands.Utility.dll dbconfig -servername "localhost" -databasename "BoldBIMasterDatabase" -u "Admin" -p "Admin@12345" -iswindowsauthentication false -sslenabled false -port "5432" -additionalparameters "Pooling=True"   
~~~  
> **IMPORTANT:**  command details:  
servername – SQL server hostname/IP  
databasename – SQL database name  
u – SQL server username  
p – SQL server password  
port - Port number required for PostgreSQL and MySQL  
iswindowsauthentication – Is windows authentication required (Required for MSSQL only)  
sslenabled – Is encrypted connection required (this is optional)  
additionalparameters - Additional parameters required for database connection (this is optional)  
  
![reset-command](/static/assets/embedded/admin-utility/images/linux-reset-con-string.png)  

3. Once, the database has been updated successfully, then restart the application by following this [link](/embedded-bi/faq/how-to-restart-the-bold-bi-embedded-application/#linux).

