---
layout: post
title: Installing Bold BI Over Bold Reports on Linux with Nginx | Docs
description: Read this guide to know how to install Bold BI on top when Bold Reports is installed already on Linux with Nginx.
platform: bold-bi
documentation: ug
---

# Install Bold BI when Bold Reports already exists

1. Please register and [download](https://www.boldbi.com/account) the Bold BI Linux package.

2. Download the Bold BI Linux package by executing the following command:

    ~~~shell
    sudo wget {Bold BI Linux package link}
    ~~~

3. Extract the zip file by executing the following command:

    ~~~shell
    sudo unzip {Bold BI Linux package zip file}
    ~~~ 

4. Change the directory to `BoldBIEnterpriseEdition-Linux` by executing the following command: 

    ~~~shell
    cd BoldBIEnterpriseEdition-Linux
    ~~~ 
 
5. Deploy Bold BI on your Linux machine by executing the following command:
 
    ~~~shell
    sudo bash install-boldbi.sh -i {new} -u {user} -h {host URL} -n {true} 
    ~~~

* **i :** Installation type - Specifies it is a new installation.

* **u :** Specify the user or group that manages the service used for the Bold Reports application.

* **h :** Same Domain or IP address of the machine with http protocol used for Bold Reports application. 

* **n :** Setting this to “true” will automatically configure Bold BI with the Nginx front-end server. 

    Example for new installation:
    ~~~shell
    sudo bash install-boldbi.sh -i new -u www-data -h http://linux.example.com -n true
    ~~~ 

    > Note: Use the same host URL that you used to deploy Bold Reports.

6.	After executing the above installation command, give `yes` and press `enter`.
     ![confirmation](/static/assets/installation-and-deployment/images/bold-reports-confirm.png)

7. Bold BI is now installed on the same machine as Bold Reports.

8. Refer to [this](/application-startup/latest/#activate-bold-bi-license) document to activate the Bold BI license and create a site for the Bold BI application.

   > **Note:** If you encounter any issues during site creation, restart all services using the following command:
   
   ~~~sh
   sudo systemctl restart bold-*
   ~~~