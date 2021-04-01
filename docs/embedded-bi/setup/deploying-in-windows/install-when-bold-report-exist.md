---
layout: post
title: Installing Bold BI Over Bold Reports | Bold BI Documentation
description: Read this guide to know how to install Bold BI on top when Bold Reports installed already in that server.
platform: bold-bi
documentation: ug
---

# Install Bold BI when Bold Reports exists

This section explains how to install and deploy the Bold BI Enterprise Edition when Bold Reports already installed in the same machine. 

## Installation

This topic explains the steps required to install the Bold BI Enterprise:

Run the Bold BI Enterprise Installer and sign-in with your registered e-mail address to unlock the setup.

![installation with registered e-mail](/static/assets/embedded/setup/images/installation-sign-in.png)

Agree the License Agreement of Bold BI Enterprise Edition and click `Next`, then prompt will appear to proceed whether you are going to use the existing or new Bold ID for Bold BI Enterprise Edition.

> **NOTE:**  Bold ID is the common identity provider application in our Bold products that can be used to Single Sign-On (SSO) to both Bold Reports and Bold BI.  

![Bold ID prompt](/static/assets/embedded/setup/images/boldid-prompt.png)

## Proceed installation without Common Login

If you select `No` to  proceed the installation without common login, then Bold BI will be hosted as `New Site` in IIS/IIS Express with its own Bold ID.

You can continue your Bold BI installation from portal license selection by following steps from [here](/embedded-bi/setup/deploying-in-windows/installation-and-deployment/#select-portal-license).  

## Proceed installation with common login

If you select `Yes` to proceed the installation with common login for both Bold Reports and Bold BI products, then installation will host the Bold BI as one of sub application inside the existing Bold Report Site hosted on IIS/IIS Express for common login to work.

### Select portal license

On the next installation wizard, choose your portal license. This step can be skipped if you have only one portal license.

![portal selection](/static/assets/embedded/setup/images/portal-plans-selection.png)

After selecting the portal license, click the Next button.

### Hosting type

Installer will automatically detect the existing Bold Report hosting details and show in any one of the following web hosting types:

1. IIS Express
2. IIS.

> **IMPORTANT:**  In common login case, `you have to proceed with existing values`, because modifying the existing hosting details during the common login setup will stop the application from working.

![Installation Location, IIS Port and Site Name](/static/assets/embedded/setup/images/installation-IIS.png)

### PhantomJS

> **IMPORTANT:** PhantomJS is a headless WebKit scriptable with JavaScript. This is a free software/open source, and it may contain MIT, BSD, LGPL, or GPL, or other similar licenses that contain third-party code. This executable file is necessary to achieve Image and PDF export functionalities in the Dashboard and widgets. Without this file, the image and PDF export options in the Dashboard and widgets will no longer be available. If you choose to download PhantomJS, must accept all terms and conditions to use it with Syncfusion products.

Read and accept the license and third-party terms and conditions through checking the option `LICENSE` and `Third-party` for install PhantomJS and click `Next`.

![Installation PhantomJS](/static/assets/embedded/setup/images/installation-phantomjs.png)  

> **NOTE:** If you have any problem with internet connection or do not have internet connection, unselect the PhantomJS download option and continue to install. To manually install the PhantomJS, please refer [this](/embedded-bi/faq/how-to-install-phantomjs-manually/).

### Client Libraries

> **IMPORTANT:** Bold BI Enterprise edition uses client libraries such as Oracle, PostgreSQL, MySQL, and MongoDB to connect with their respective SQL database variants. Check license of each library to give consent for installation. Selected client libraries alone will be shipped into the product.

![Installation ClientLibraries](/static/assets/embedded/setup/images/installation-clientlibraries.png)

Read and accept the license to ship selected client libraries and click INSTALL.

After installation process is completed, you can launch the application by clicking `Launch Application` and setup the your Bold BI site.

### Registering Bold BI site

You cannot setup the Bold BI application directly by clicking `Launch Application` when common login selected. You have to manually create the site for Bold BI from site management page by opening URL as follows.

`http://{hostname}/ums/sites?action=create-new-site` 

Please setup the Bold BI site by following the steps given [here](/embedded-bi/multi-tenancy/create-new-site/).

### Application structure when common login selected

The following changes were made on IIS/IIS Express after proceeding with common Bold ID.  

Normally, Bold Reports hosted with the site name as `BoldReportsOnPremiseEdition` in IIS, but after proceeded with common login (Bold ID), the site name has been renamed as `BoldAppsEnterpriseEdition` and also Bold BI will be hosted as sub-app as `bi` under the `BoldAppsEnterpriseEdition` as follows.

![IIS for both Reports and Dashboard](/static/assets/embedded/setup/images/iis-reports-bi.png)  