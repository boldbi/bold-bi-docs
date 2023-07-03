---
layout: post
title:  Reset a User Password – Admin Utility | Bold BI Embedded
description: Learn how to use the command line interface to reset the current password of any user in Bold BI Embedded using their email address or user name.
platform: bold-bi
documentation: ug
---

# Reset Password

Please refer to your operating system’s documentation for how to reset the current password of any user using their email address or username.

[Windows](/utilities/bold-bi-command-line-tools/reset-password/#windows)

[Linux](/utilities/bold-bi-command-line-tools/reset-password/#linux)

## Windows
   
1. Open the command prompt and change the directory to the admin utility location.  
~~~
cd C:\BoldServices\utilities\adminutils
~~~
![command](/static/assets/admin-utility/images/cmdforutils-1.png)
 
2. After changing the directory, please run the following command to reset the password.  
~~~
Syncfusion.Server.Commands.Utility.exe reset -u 'user email or username here' -p 'new password here'
~~~  
![reset-command](/static/assets/admin-utility/images/resetcmd-1.png) 

3. Once, the password has been reset successfully, the user can log in with the updated password.

## Linux
  
1. Change the directory to the admin utility location.  
~~~
cd /var/www/bold-services/application/utilities/adminutils/
~~~
![command](/static/assets/admin-utility/images/linux-cd.png)
 
2. After changing the directory, please run the following command to reset the password.  
~~~
../../../dotnet/dotnet Syncfusion.Server.Commands.Utility.dll reset -u 'user email or username here' -p 'new password here'
~~~  
![reset-command](/static/assets/admin-utility/images/linux-resetcmd.png) 

3. Once the password has been reset successfully, the user can log in with the updated password.

