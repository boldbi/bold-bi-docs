---
layout: post
title: Upgrading Bold BI Linux Server - On-Premises | Bold BI Docs
description: Read this guide to know how to upgrade the existing Bold BI Linux package in your machine to latest version.
platform: bold-bi
documentation: ug
---

# Upgrading Bold BI Linux package to the Latest Version

This section explains how to upgrade Bold BI Linux package from any version to the latest version.

1. Register and download the latest Bold BI Linux package from [here](/embedded-bi/setup/overview/#registration-and-download).

2. Download the latest Bold BI Linux package by running the following command.

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
    sudo bash install-boldbi.sh -i {upgrade} -u {user} -h {host URL}
    ~~~
 

* **i :** Installation type - Specifies either it is a new or upgrade installation. 

* **u :** Specify the user or group that manages the service. 

* **h :** Domain or IP address of the machine with http protocol.  

    Example for upgrading the installation,

    ~~~shell
    sudo bash install-boldbi.sh -i upgrade -u www-data -h http://linux.example.com
    ~~~ 

6. Refer to this [link](/embedded-bi/setup/deploying-in-linux/install-optional-libraries/) and install the optional client libraries, after the installation completed.

7. Now, you can open the host URL in the browser and use the latest features of Bold BI.

>**NOTE:** Bold BI Linux package backup file will be available in the following location.
`/var/www/`