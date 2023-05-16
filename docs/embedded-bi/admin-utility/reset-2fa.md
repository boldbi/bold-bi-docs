---
layout: post
title:  How to Remove 2FA using Admin Utility | Bold BI Docs
description: Learn how to use the command line interface to reset the Two-Factor Authentication (2FA) of any user in Bold BI Embedded using their email address or user name.
platform: bold-bi
documentation: ug
---

# Reset Two Factor Authentication

Please refer to your operating system’s documentation for resetting the Two-Factor Authentication of any user using their email address or username.

[Windows](/embedded-bi/admin-utility/reset-2fa/#windows)

[Linux](/embedded-bi/admin-utility/reset-2fa/#linux)

## Windows
   
1. Open the command prompt and change the directory to the admin utility location.  
~~~
cd C:\BoldServices\utilities\adminutils
~~~
![command](/static/assets/embedded/admin-utility/images/reset2fa-path.png)
 
2. After changing the directory, please run the following command to reset the Two Factor Authentication.  
~~~
Syncfusion.Server.Commands.Utility.exe reset2fa -u 'user email or username here'
~~~  
![reset command](/static/assets/embedded/admin-utility/images/reset2fa-cmd.png) 

3. Once the Two-Factor Authentication has been reset successfully, the user can log in without Two Factor Authentication.

## Linux
  
1. Change the directory to the admin utility location.  
~~~
cd /var/www/bold-services/application/utilities/adminutils/
~~~
![command linux](/static/assets/embedded/admin-utility/images/reset2fa-linux.png)
 
2. After changing the directory, please run the following command to reset the Two-Factor Authentication.
~~~
../../../dotnet/dotnet Syncfusion.Server.Commands.Utility.dll reset2fa -u 'user email or username here'
~~~  
![reset command linum](/static/assets/embedded/admin-utility/images/reset2fa-cmd-linux.png) 

3. Once the Two-Factor Authentication has been reset successfully, the user can log in without it.
