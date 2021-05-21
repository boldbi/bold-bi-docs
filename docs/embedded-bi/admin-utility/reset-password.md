---
layout: post
title:  Reset a User Password – Admin Utility | Bold BI Embedded
description: Learn how to use the command line interface to reset the current password of any user in Bold BI Embedded using their email address or user name.
platform: bold-bi
documentation: ug
---

# Reset Password

You can reset the current password of any user using their email address or username with this command. Please follow these steps:
   
1. Open the command prompt and change the directory to the Admin Utility location.  
~~~
cd C:\BoldServices\utilities\adminutils
~~~
![command](/static/assets/embedded/admin-utility/images/cmdforutils-1.png)
 
2. After changing the directory, please run the below command to reset password.  
~~~
Syncfusion.Server.Commands.Utility.exe reset -u 'user email or username here' -p 'new password here'
~~~  
![reset-command](/static/assets/embedded/admin-utility/images/resetcmd-1.png) 

3. Once the password has been reset successfully, the user can login with the updated password.
