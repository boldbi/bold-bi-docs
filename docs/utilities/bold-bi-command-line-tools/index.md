---
layout: post
title: Overview - Admin Utility | Bold BI Embedded Learning
description: This section explains an overview of the admin utility, list of available commands, and how to use those commands in the admin utility. 
platform: bold-bi
documentation: ug

---

# Admin Utility

This section explains about how to use the admin utility and list of command available in the admin utility.

Please refer to the corresponding operating system documentation for how to use this utility.

* [Windows](/utilities/bold-bi-command-line-tools/#windows)

* [Linux](/utilities/bold-bi-command-line-tools/#linux)

 >**NOTE:** If you installed the Bold BI version 3.3 or older, then check [this section](/utilities/bold-bi-command-line-tools/v3.3-or-older/). Admin utility is not applicable to use in Cloud Analytics Server.
 
## Windows

1. Switch the admin utility location to `{Deployed Location}`\utilities\adminutils. 
![folder](/static/assets/admin-utility/images/folderpath.png)  
> **NOTE:** By default, Bold BI will be deployed on `C:\BoldServices`.

2. Open the command prompt.  
![cmd-window](/static/assets/admin-utility/images/cmdpmpt1.png) 

3. Change the command prompt directory to the admin utility location. For more information, Please refer the following command.
~~~
cd C:\BoldServices\utilities\adminutils
~~~  
![utils-cmd](/static/assets/admin-utility/images/utilscmd-1.png)

## Linux

1. Change the directory to the admin utility location. For more information, Please refer to the following command.
~~~
cd /var/www/bold-services/application/utilities/adminutils/
~~~  
![utils-cmd](/static/assets/admin-utility/images/linux-cd.png)

## Available Commands

Please find the list of commands available in admin utility currently.  
* [**Reset Password**](/utilities/bold-bi-command-line-tools/reset-password/)
* [**Update Application Database**](/utilities/bold-bi-command-line-tools/reset-application-database/)