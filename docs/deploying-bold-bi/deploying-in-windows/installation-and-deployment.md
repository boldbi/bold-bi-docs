---
layout: post
title: Installation and Deployment – Embedded BI | Bold BI Learning
description: Read this guide on installation and deployment of Bold BI Embedded in your own servers or private cloud. 
platform: bold-bi
documentation: ug
---

# Installation and Deployment 

This section explains how to install and deploy the Bold BI solution. 

## Unlock the setup

This topic explains the steps required to install Bold BI Enterprise.

To see the system requirements for deploying Bold BI Enterprise in a business environment, see [System Requirements](/deploying-bold-bi/overview/#prerequisites).

Run the Bold BI Enterprise Installer.

![installation with registered e-mail](/static/assets/installation-and-deployment/images/installation-step-1.png)

You can check the license agreement of Bold BI Enterprise edition by clicking the `License Terms and Conditions`.

## Hosting type

You have been provided Bold BI Enterprise Edition to be hosted in the IIS web-server type.

### IIS

You need to provide the port number, location, and site name to host Bold BI Enterprise in the IIS.

![Installation Location, IIS Port Changes and Site Name](/static/assets/installation-and-deployment/images/installation-IIS.png)

## Chromium Packages

> **IMPORTANT:** Chromium packages are necessary to achieve image and PDF export functionalities in dashboards, widgets, and schedules from Bold BI. Without these packages, the image and PDF export options in dashboard, widgets, and schedules will no longer be available.


![Installation Chromium Packages](/static/assets/installation-and-deployment/images/installation-chromium-packages.png)  

> **NOTE:** If you have any problem with internet connection or do not have internet connection, unselect the Chromium Packages download option and continue to install. To manually install the Chromium Packages, refer to [this](/faq/how-to-install-chromium-packages-manually/).

## Client libraries

> **IMPORTANT:** Bold BI Enterprise Edition uses client libraries such as Oracle, PostgreSQL, MySQL, Snowflake, and MongoDB to connect with their respective SQL database variants. Check license of each library to give consent for installation. The selected client libraries alone will be shipped into the product.

![Installation Client Libraries](/static/assets/installation-and-deployment/images/installation-clientlibraries.png)

Read and accept the license to ship the selected client libraries and click `Next`.

After the installation process is completed, you can launch the application by clicking `Launch Application`.

![Installation Launch Application](/static/assets/installation-and-deployment/images/installation-launchapplication.png)

If you did not install the client libraries during this installation, then after installed the Bold BI setup, you can install it using `ClientLibrary.msi` setup.  The following steps to install the client libraries.
1.	Go to the location `C:\Program Files (x86)\Bold BI Enterprise Edition\Client Library`. And double click the setup file named `ClientLibrary.msi`.

    ![Installation Client Libraries Setup](/static/assets/installation-and-deployment/images/installation-clientlibraries_setup.png)

2.	Now, the client libraries dialog will open. Then, you can choose and install the required client libraries.

    ![Installation Client Libraries Setup Dialog](/static/assets/installation-and-deployment/images/installation-clientlibraries_setup_dialog.png)

## See Also

* [**Application Setup**](/application-startup/)