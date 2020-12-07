---
layout: post
title: Overview - Admin Utility | Bold BI Embedded Learning
description: This section explains overview of the admin utility, list of available commands, and how to use those commands in the admin utility. 
platform: bold-bi
documentation: ug
---

# Admin Utility

This section explains about how to use the admin utility and list of command available in the admin utility.

## How to use this utility

1. Switch the admin utility location `{Deployed Location}`\Utilities\AdminUtils. 
![folder](/static/assets/embedded/admin-utility/images/folder.png)  
> **NOTE:**  By default, Bold BI will be deployed on `C:\Bold BI`

2. Open the command prompt.  
![cmd-window](/static/assets/embedded/admin-utility/images/cmdpmpt.png)  

3. Change command prompt directory to the admin utility location. Please refer the command given below.   
~~~
cd C:\Bold BI\Utilities\AdminUtils
~~~  
![utils-cmd](/static/assets/embedded/admin-utility/images/displaycmd.png)  

4. Please refer below for the syntax of admin utility commands
**`'Utility Name' 'command' 'options'`**  
~~~
AdminUtils.exe reset -u 'user email here' -p 'new password here'
~~~ 

## Available Commands

Please find the list of commands available in admin utility currently.  
* [**Reset Password**](/embedded-bi/admin-utility/reset-password/)
* [**Update Application Database**](/embedded-bi/admin-utility/reset-application-database/)