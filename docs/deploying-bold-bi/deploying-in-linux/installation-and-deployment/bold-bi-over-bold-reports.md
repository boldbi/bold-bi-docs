---
layout: post
title: Installing Bold BI Over Bold Reports on Linux with Nginx | Docs
description: Read this guide to know how to install Bold BI on top when Bold Reports is installed already on Linux with Nginx.
platform: bold-bi
documentation: ug
---

# Install Bold BI when Bold Reports exists

1. Register and download the Bold BI Linux package from [here](/deploying-bold-bi/overview/#registration-and-download).

2. Download the Bold BI Linux package by running the following command.

    ~~~shell
    sudo wget {Bold BI Linux package link}
    ~~~

3. Extract the zip file.

    ~~~shell
    sudo unzip {Bold BI Linux package zip file}
    ~~~ 

4. Change the directory to `BoldBIEnterpriseEdition-Linux` by running the following command. 

    ~~~shell
    cd BoldBIEnterpriseEdition-Linux
    ~~~ 
 
5. Execute the following command to deploy Bold BI in your Linux machine. 
 
    ~~~shell
    sudo bash install-boldbi.sh -i {new} -u {user} -h {host URL} -n {true} 
    ~~~

* **i :** Installation type - Specifies it is a new installation.

* **u :** Specify the user or group that manages the service which is used for the Bold Reports application.

* **h :** Same Domain or IP address of the machine with http protocol used for Bold Reports application. 

* **n :** Setting this to “true” will automatically configure the Bold BI with the Nginx front-end server. 

    Example for new installation,
    ~~~shell
    sudo bash install-boldbi.sh -i new -u www-data -h http://linux.example.com -n true
    ~~~ 

    > Note: Here, pass the same host URL which you used to deploy Bold Reports.

6.	After executing the above installation command, give `yes` and Press `enter`.
     ![confirmation](/static/assets/installation-and-deployment/images/bold-reports-confirm.png)

7. Now, Bold BI is installed on the same machine as Bold reports.

8. Follow [this](/application-startup/latest/#activate-bold-bi-license) document to activate the Bold BI license and create a site for the Bold BI application.

   > **Note:** If you are facing any issues in site creation, restart all services using the following command.
   
   ~~~sh
   sudo systemctl restart bold-*
   ~~~
   