---
layout: post
title: Overview - Admin Utility | Bold BI Embedded Learning
description: This section explains overview of the admin utility, list of available commands, and how to use those commands in the admin utility. 
platform: bold-bi
documentation: ug
---

# Admin Utility

This section explains about how to use the admin utility and list of command available in the admin utility.

Please refer to the corresponding operating system documentation for how to use this utility.

* [Windows](/embedded-bi/admin-utility/#windows)

* [Linux](/embedded-bi/admin-utility/#linux)

 >**NOTE:** If you installed the Bold BI version 3.3 or older, then check [this section](/embedded-bi/admin-utility/v3.3-or-older/).
 
## Windows

1. Switch the admin utility location to `{Deployed Location}`\utilities\adminutils. 
![folder](/static/assets/embedded/admin-utility/images/folderpath.png)  
> **NOTE:** By default, Bold BI will be deployed on `C:\BoldServices`.

2. Open the command prompt.  
![cmd-window](/static/assets/embedded/admin-utility/images/cmdpmpt1.png) 

3. Change the command prompt directory to the admin utility location. For more information, Please refer the following command.
~~~
cd C:\BoldServices\utilities\adminutils
~~~  
![utils-cmd](/static/assets/embedded/admin-utility/images/utilscmd-1.png)

## Linux

1. Change the directory to the admin utility location. For more information, Please refer to the following command.
~~~
cd /var/www/bold-services/application/utilities/adminutils/
~~~  
![utils-cmd](/static/assets/embedded/admin-utility/images/linux-cd.png)

## Available Commands

Please find the list of commands available in admin utility currently.  
* [**Reset Password**](/embedded-bi/admin-utility/reset-password/)
* [**Update Application Database**](/embedded-bi/admin-utility/reset-application-database/)