---
layout: post
title:  Reset Application Database – Admin Utility | Bold BI
description: Learn how to reset the application database of Bold BI server application through the command line interface.
platform: bold-bi
documentation: ug
---

# Reset Application Database

Please refer to your operating system's documentation for instructions on how to reset the database of the Bold BI application.

[Windows](/utilities/bold-bi-command-line-tools/reset-application-database/#windows)

[Linux](/utilities/bold-bi-command-line-tools/reset-application-database/#linux)

[Docker](/utilities/bold-bi-command-line-tools/reset-application-database/#docker)

[Kubernetes](/utilities/bold-bi-command-line-tools/reset-application-database/#kubernetes)

## Windows
   
1. Open the command prompt and change the directory to the admin utility location.
~~~
cd C:\BoldServices\utilities\adminutils
~~~  
![command](/static/assets/admin-utility/images/utilscmd-1.png)  
 
2. After changing the directory, run the following command to reset the database: 
~~~
Syncfusion.Server.Commands.Utility.exe dbconfig -servername "localhost" -databasename "BoldBIMasterDatabase" -u "Admin" -p "Admin@12345" -iswindowsauthentication false -sslenabled false -port "5432" -additionalparameters "Pooling=True"   
~~~  
> **IMPORTANT:**  command details:  
> servername – SQL server hostname/IP  
> databasename – SQL database name  
> u – SQL server username  
> p – SQL server password  
> port - Port number required for PostgreSQL and MySQL  
> iswindowsauthentication – Is windows authentication required (Required for MSSQL only)  
> sslenabled – Is encrypted connection required (this is optional)  
> additionalparameters - Additional parameters required for database connection (this is optional)   
  
![reset-command](/static/assets/admin-utility/images/reset-con-string-2.png)  

3. Once the database has been updated successfully, restart the application by following this [link](/faq/how-to-restart-the-bold-bi-embedded-application/#windows).

## Linux
   
1. Open the command prompt and change the directory to the admin utility location.
~~~
cd /var/www/bold-services/application/utilities/adminutils/
~~~   
![command](/static/assets/admin-utility/images/linux-cd.png)
 
2. After changing the directory, run the following command to reset the database:
~~~
../../../dotnet/dotnet Syncfusion.Server.Commands.Utility.dll dbconfig -servername "localhost" -databasename "BoldBIMasterDatabase" -u "Admin" -p "Admin@12345" -iswindowsauthentication false -sslenabled false -port "5432" -additionalparameters "Pooling=True"   
~~~  
> **IMPORTANT:**  command details:  
> servername – SQL server hostname/IP  
> databasename – SQL database name  
> u – SQL server username  
> p – SQL server password  
> port - Port number required for PostgreSQL and MySQL  
> iswindowsauthentication – Is windows authentication required (Required for MSSQL only)  
> sslenabled – Is encrypted connection required (this is optional)  
> additionalparameters - Additional parameters required for database connection (this is optional)  
  
![reset-command](/static/assets/admin-utility/images/linux-reset-con-string.png)  

3. Once, the database has been updated successfully, then restart the application by following this [link](/faq/how-to-restart-the-bold-bi-embedded-application/#linux).

## Docker

### Single image

1. Open the command prompt and Bash the container, then change the directory to the admin utility location.
~~~
docker exec -it <Container ID or Container name>
~~~
~~~
cd /application/utilities/adminutils/
~~~   
![Path-command](/static/assets/admin-utility/images/path-command.png)
2. After changing the directory, run the following command to reset the database: 
~~~
dotnet Syncfusion.Server.Commands.Utility.dll dbconfig -servername "localhost" -databasename "BoldBIMasterDatabase" -u "Admin" -p "Admin@12345" -iswindowsauthentication false -sslenabled false -port "5432" -additionalparameters "Pooling=True"   
~~~  
![Database-reset](/static/assets/admin-utility/images/database-reset.png)
3. Once the database has been updated successfully, then restart the application by using the below command:

~~~
docker restart <container ID or container name>
~~~
### Multi container Image

1. Open the command prompt and Bash the <b>id_web_container</b> container then change the directory to the admin utility location.
~~~
docker exec -it <Container ID or Container name>
~~~
~~~
cd /application/utilities/adminutils/
~~~   
![Path-command](/static/assets/admin-utility/images/path-command.png)
2. After changing the directory, run the following command to reset the database:
~~~
dotnet Syncfusion.Server.Commands.Utility.dll dbconfig -servername "localhost" -databasename "BoldBIMasterDatabase" -u "Admin" -p "Admin@12345" -iswindowsauthentication false -sslenabled false -port "5432" -additionalparameters "Pooling=True"   
~~~  

> **IMPORTANT:**  command details:  
> servername – SQL server hostname/IP  
> databasename – SQL database name  
> u – SQL server username  
> p – SQL server password  
> port - Port number required for PostgreSQL and MySQL  
> iswindowsauthentication – Is windows authentication required (Required for MSSQL only)  
> sslenabled – Is encrypted connection required (this is optional)  
> additionalparameters - Additional parameters required for database connection (this is optional)  

![Database-reset](/static/assets/admin-utility/images/database-reset.png)

3. Once the database has been updated successfully, then restart all containers by using the below command:

~~~
docker ps 
~~~

~~~
docker restart <container ID or container name>
~~~

>**Note**: Restart all seven containers using the above command one by one from the container name or ID.

## Kubernetes

1. Open the command prompt and Bash the id_web_deployment pod, then change the directory to the admin utility location.
~~~
 kubectl exec -it <id-web-deployment-pod> -n namespace -- bash
~~~
~~~
cd /application/utilities/adminutils/
~~~   
![Path-command](/static/assets/admin-utility/images/path-command.png)

2. After changing the directory, run the following command to reset the database:  
~~~
dotnet Syncfusion.Server.Commands.Utility.dll dbconfig -servername "localhost" -databasename "BoldBIMasterDatabase" -u "Admin" --p "Admin@12345" -iswindowsauthentication false -sslenabled false -port "5432" -additionalparameters "Pooling=True"   
~~~  

> **IMPORTANT:**  command details:  
> servername – SQL server hostname/IP  
> databasename – SQL database name  
> u – SQL server username  
> p – SQL server password  
> port - Port number required for PostgreSQL and MySQL  
> iswindowsauthentication – Is windows authentication required (Required for MSSQL only)  
> sslenabled – Is encrypted connection required (this is optional)  
> additionalparameters - Additional parameters required for database connection (this is optional)

![Database-reset](/static/assets/admin-utility/images/kubernete-database-reset.png)

3. Once the database has been updated successfully, restart the application using the below command:

~~~
kubectl rollout restart deploy -n <namespace>
~~~