---
layout: post
title: Overview - Admin Utility | Bold BI Embedded Learning
description: This section explains an overview of the admin utility, list of available commands, and how to use those commands in the admin utility. 
platform: bold-bi
documentation: ug

---

# Admin Utility

This section explains how to use the admin utility and lists the commands available in the admin utility.

Please refer to the appropriate operating system documentation to learn how to use this utility.

* [Windows](/utilities/bold-bi-command-line-tools/#windows)

* [Linux](/utilities/bold-bi-command-line-tools/#linux)

 >**NOTE:** If you have installed Bold BI version 3.3 or older, please refer to [this section](/utilities/bold-bi-command-line-tools/v3.3-or-older/). The admin utility is not applicable for use in Syncfusion Managed Cloud Server.
 
## Windows

1. Please switch the admin utility location to `{Deployed Location}`\utilities\adminutils. 
![folder](/static/assets/admin-utility/images/folderpath.png)  
> **NOTE:** By default, Bold BI will be deployed on `C:\BoldServices`.

2. Please open the command prompt.
![cmd-window](/static/assets/admin-utility/images/cmdpmpt1.png) 

3. Please change the command prompt directory to the admin utility location. For more information, please refer to the following command:
~~~
cd C:\BoldServices\utilities\adminutils
~~~  
![utils-cmd](/static/assets/admin-utility/images/utilscmd-1.png)

## Linux

1. Please change the directory to the admin utility location. For more information, please refer to the following command:
~~~
cd /var/www/bold-services/application/utilities/adminutils/
~~~  
![utils-cmd](/static/assets/admin-utility/images/linux-cd.png)

## Available Commands

Please find below the list of commands available in the admin utility currently: 
* [**Reset Password**](/utilities/bold-bi-command-line-tools/reset-password/)
* [**Update Application Database**](/utilities/bold-bi-command-line-tools/reset-application-database/)