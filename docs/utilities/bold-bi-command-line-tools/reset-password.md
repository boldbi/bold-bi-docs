---
layout: post
title:  Reset a User Password – Admin Utility | Bold BI Embedded
description: Learn how to use the command line interface to reset the current password of any user in Bold BI Embedded using their email address or user name.
platform: bold-bi
documentation: ug
---

# Reset Password

Please refer to the documentation of your operating system for instructions on how to reset the current password for any user using their email address or username.

[Windows](/utilities/bold-bi-command-line-tools/reset-password/#windows)

[Linux](/utilities/bold-bi-command-line-tools/reset-password/#linux)

## Windows
   
1. Open the command prompt and navigate to the admin utility location. 
~~~
cd C:\BoldServices\utilities\adminutils
~~~
![command](/static/assets/admin-utility/images/cmdforutils-1.png)
 
2. After changing the directory, please run the following command to reset the password:  
~~~
Syncfusion.Server.Commands.Utility.exe reset -u 'user email or username here' -p 'new password here'
~~~  
![reset-command](/static/assets/admin-utility/images/resetcmd-1.png) 

3. Once the password has been successfully reset, the user can log in with the updated password.

## Linux
  
1. Change the directory to the admin utility location.  
~~~
cd /var/www/bold-services/application/utilities/adminutils/
~~~
![command](/static/assets/admin-utility/images/linux-cd.png)
 
2. After changing the directory, please run the following command to reset the password:
~~~
../../../dotnet/dotnet Syncfusion.Server.Commands.Utility.dll reset -u 'user email or username here' -p 'new password here'
~~~  
![reset-command](/static/assets/admin-utility/images/linux-resetcmd.png) 

3. Once the password has been reset successfully, the user can log in with the updated password.

## Docker

### Single image

1. Open the command prompt and Bash the container, then change the directory to the admin utility location.
~~~
docker exec -it <Container ID or Container name>
~~~
~~~
cd /application/utilities/adminutils/
~~~   
![Path-command](/static/assets/admin-utility/images/reset-docker-path-command.png)

2. After changing the directory, run the following command to reset the password: 
~~~
dotnet Syncfusion.Server.Commands.Utility.dll reset -u 'user email or username here' -p 'new password here'   
~~~  
![Database-reset](/static/assets/admin-utility/images/reset-password-docker.png)

3. Once the password has been updated successfully, then restart the application by using the below command:

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
![Path-command](/static/assets/admin-utility/images/reset-docker-path-command.png)

2. After changing the directory, run the following command to reset the password:
~~~
dotnet Syncfusion.Server.Commands.Utility.dll reset -u 'user email or username here' -p 'new password here'   
~~~  

![Database-reset](/static/assets/admin-utility/images/reset-password-docker.png)

3. Once the password has been updated successfully, then restart all containers by using the below command:

~~~
docker ps 
~~~

~~~
docker restart <container ID or container name>
~~~

>**Note**: Restart all seven containers using the above command one by one from the container name or ID.