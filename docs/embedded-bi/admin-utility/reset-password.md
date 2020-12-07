---
layout: post
title:  Reset a User Password – Admin Utility | Bold BI Embedded
description: Learn how to reset the current password of any user in Bold BI Embedded using their email address through command line interface.
platform: bold-bi
documentation: ug
---

# Reset Password	 
You can reset the current password of any user using their email address with this command. Please follow the below steps.
   
1. Open the command prompt and change the directory to the Admin Utility location.  
~~~
cd C:\Bold BI\Utilities\AdminUtils
~~~
![command](/static/assets/embedded/admin-utility/images/cmdforutils.png)
 
2. After changing the directory, please run the below command to reset password.  
~~~
AdminUtils.exe reset -u 'user email here' -p 'new password here'
~~~  
![reset-command](/static/assets/embedded/admin-utility/images/resetcmd.png) 

3. Once the password has been reset successfully, the user can login with the updated password.
