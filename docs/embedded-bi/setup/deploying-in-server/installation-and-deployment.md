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

To see the system requirements for deploying Bold BI Enterprise in a business environment, see [System Requirements](/embedded-bi/setup/overview/#prerequisites).

Run the Bold BI Enterprise Installer and sign in with your registered email address to unlock the setup.

![installation with registered e-mail](/static/assets/embedded/setup/images/installation-sign-in.png)


You can check the license agreement of Bold BI Enterprise edition by clicking the `License Terms and Conditions`.

## Select portal license

After reading the license agreement, you can agree by placing the tick mark in the checkbox. Click Next to choose your portal license. This step can be skipped if you have only one portal license.

![portal selection](/static/assets/embedded/setup/images/portal-plans-selection.png)

After selecting the portal license, click Next to select the installation server type, location, and port number to host the Bold BI Enterprise.

## Hosting type

You have been provided Bold BI Enterprise Edition to be hosted in the following two web-server types:

* IIS Express
* IIS

### IIS Express
You can select IIS Express hosting type for evaluation purpose. We recommend that you choose `IIS hosting type` for production use.

![Installation Location and IIS Express](/static/assets/embedded/setup/images/installation-IISExpress.png)

### IIS

You need to provide the port number, location, and site name to host Bold BI Enterprise in the IIS.

![Installation Location, IIS Port Changes and Site Name](/static/assets/embedded/setup/images/installation-IIS.png)

## PhantomJS

> **IMPORTANT:** PhantomJS is a headless WebKit scriptable with JavaScript. This is free software or open source, and it may contain MIT, BSD, LGPL, GPL, or other similar licenses that contain third-party code. This executable file is necessary to achieve an image and PDF export functionalities in the dashboard and widgets. Without this file, the image and PDF export options in the dashboard and widgets will no longer be available. If you choose to download PhantomJS, then you must accept all terms and conditions to use it with Syncfusion products.

Read and accept the license and third-party terms and conditions by checking the options `LICENSE` and `Third-party` for install PhantomJS and click `INSTALL`.

![Installation PhantomJS](/static/assets/embedded/setup/images/installation-phantomjs.png)  

> **NOTE:** If you have any problem with internet connection or do not have internet connection, unselect the PhantomJS download option and continue to install. To manually install the PhantomJS, refer to [this](/embedded-bi/faq/how-to-install-phantomjs-manually/).

## Client libraries

> **IMPORTANT:** Bold BI Enterprise Edition uses client libraries such as Oracle, PostgreSQL, MySQL, Snowflake, and MongoDB to connect with their respective SQL database variants. Check license of each library to give consent for installation. The selected client libraries alone will be shipped into the product.

![Installation Client Libraries](/static/assets/embedded/setup/images/installation-clientlibraries.png)

Read and accept the license to ship the selected client libraries and click `Next`.

After the installation process is completed, you can launch the application by clicking `Launch Application`.

![Installation Launch Application](/static/assets/embedded/setup/images/installation-launchapplication.png)

If you did not install the client libraries during this installation, then after installed the Bold BI setup, you can install it using `ClientLibrary.msi` setup.  The following steps to install the client libraries.
1.	Go to the location `C:\Program Files (x86)\Bold BI Enterprise Edition\Client Library`. And double click the setup file named `ClientLibrary.msi`.

    ![Installation Client Libraries Setup](/static/assets/embedded/setup/images/installation-clientlibraries_setup.png)

2.	Now, the client libraries dialog will open. Then, you can choose and install the required client libraries.

    ![Installation Client Libraries Setup Dialog](/static/assets/embedded/setup/images/installation-clientlibraries_setup_dialog.png)

## See Also

* [**Application Setup**](/embedded-bi/application-startup/)