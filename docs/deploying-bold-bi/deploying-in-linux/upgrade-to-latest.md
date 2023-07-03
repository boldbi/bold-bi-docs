---
layout: post
title: Upgrading Bold BI Linux Server - On-Premises | Bold BI Docs
description: Read this guide to know how to upgrade the existing Bold BI Linux package in your machine to latest version.
platform: bold-bi
documentation: ug
---

# Upgrading Bold BI Linux package to the Latest Version

This section explains how to upgrade Bold BI Linux package from any version to the latest version.

> **NOTE:** Upgrading to the latest version does not require a license key. Our services, on the other hand, will retrieve the license in the backend after upgrading to the latest version. 

1. Register and download the latest Bold BI Linux package from [here](/deploying-bold-bi/overview/#registration-and-download).

2. Install the `pv` tool by running the following command.

    ~~~shell
    sudo yum -y install pv
    ~~~ 

3. Download the latest Bold BI Linux package by running the following command.

    ~~~shell
    sudo wget {Bold BI Linux package link}
    ~~~

4. Extract the zip file.

    ~~~shell
    sudo unzip {Bold BI Linux package zip file}
    ~~~ 

5. Change the directory to `BoldBIEnterpriseEdition-Linux` by running the following command. 

    ~~~shell
    cd BoldBIEnterpriseEdition-Linux
    ~~~ 
 
6. Execute the following command to deploy Bold BI in your Linux machine. 
 
    ~~~shell
    sudo bash install-boldbi.sh -i {upgrade}
    ~~~
 

* **i :** Installation type - Specifies either it is a new or upgrade installation. 

* **u :** Specify the user or group that manages the service. Please ensure that this user exists in your Linux server. 

* **h :** Domain or IP address of the machine with http protocol.  

    Example for upgrading the installation,

    ~~~shell
    sudo bash install-boldbi.sh -i upgrade
    ~~~ 

7. Refer to this [link](/deploying-bold-bi/deploying-in-linux/install-optional-libraries/) and install the optional client libraries, after the installation completed.

8. Now, you can open the host URL in the browser and use the latest features of Bold BI.

>**NOTE:** Bold BI Linux package backup file will be available in the following location.
`/var/www/`