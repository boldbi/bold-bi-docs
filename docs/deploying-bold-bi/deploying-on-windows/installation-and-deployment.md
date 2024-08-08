---
layout: post
title: Installation and Deployment – Embedded BI | Bold BI Learning
description: Read this guide on installation and deployment of Bold BI Embedded in your own servers or private cloud. 
platform: bold-bi
documentation: ug
---

# Installation and Deployment 

This section explains how to install and deploy Bold BI Enterprise.

## Unlock the setup

This topic outlines the steps necessary for installing Bold BI Enterprise.

To view the system requirements for deploying Bold BI Enterprise in a business setting, refer to the [System Requirements](/deploying-bold-bi/overview/#prerequisites).

Run the Bold BI Enterprise Installer.

![installation with registered e-mail](/static/assets/installation-and-deployment/images/installation-step-1.png)

You can review the license agreement for the Bold BI Enterprise edition by clicking on the `License Terms and Conditions`.

## Hosting type

You have been provided with the Bold BI Enterprise Edition for hosting in the IIS web-server type.

### IIS

You need to input the port number, location, and site name to host Bold BI Enterprise in the IIS.

![Installation Location, IIS Port Changes and Site Name](/static/assets/installation-and-deployment/images/installation-IIS.png)

## Chromium Packages

> **IMPORTANT:** Chromium packages are necessary to enable image and PDF export functionalities in dashboards, widgets, and schedules from Bold BI. Without these packages, the image and PDF export options will be disabled.

![Installation Chromium Packages](/static/assets/installation-and-deployment/images/installation-chromium-packages.png)  

> **NOTE:** If you encounter any issues with your internet connection or lack one, deselect the Chromium Packages download option and proceed with the installation. For manual installation of the Chromium Packages, refer to [this guide](https://support.boldbi.com/kb/article/16581/how-to-install-chromium-packages-manually).

## Client libraries

> **IMPORTANT:** Bold BI Enterprise Edition uses client libraries such as Oracle, PostgreSQL, MySQL, Snowflake, and MongoDB to connect with their respective SQL database variants. Review and accept the license for each library to consent to its installation. Only the selected client libraries installed.

![Installation Client Libraries](/static/assets/installation-and-deployment/images/installation-clientlibraries.png)

Read and accept the license to ship the selected client libraries, then click `Next`.

Once the installation is complete, you can launch the application by clicking `Launch Application`.

![Installation Launch Application](/static/assets/installation-and-deployment/images/installation-launchapplication.png)

If you didn't install the client libraries during this installation, you can do so later using the `ClientLibrary.msi` setup after installing the Bold BI setup. Follow these steps to install the client libraries:

1.	Navigate to the location `C:\Program Files (x86)\Bold BI Enterprise Edition\Client Library` and double-click the setup file named `ClientLibrary.msi`.

    ![Installation Client Libraries Setup](/static/assets/installation-and-deployment/images/installation-clientlibraries_setup.png)

2.	The client libraries dialog will then open, allowing you to choose and install the necessary client libraries.

    ![Installation Client Libraries Setup Dialog](/static/assets/installation-and-deployment/images/installation-clientlibraries_setup_dialog.png)

## See Also

* [**Application Setup**](/application-startup/)