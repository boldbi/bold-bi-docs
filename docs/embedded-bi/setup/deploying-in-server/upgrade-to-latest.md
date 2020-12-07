---
layout: post
title: Upgrading Bold BI Server - Embedded BI | Bold BI Docs
description: Read this guide to know how to upgrade the existing Bold BI Server in your machine to the latest version without any hassle.
platform: bold-bi
documentation: ug
---

# Upgrading Bold BI Server to Latest Version

This section explains how to upgrade Bold BI Server from any version to the latest version.

Bold BI releases several major versions in a year. Each version includes new features, bug fixes, and other improvements.

Bold BI Enterprise Edition can be upgraded to latest version at any time manually, and there are no automatic updates for Bold BI Server. Before upgrading, you can refer to the features and enhancements from the [Release Notes](https://www.boldbi.com/release-history/enterprise/).

## Upgrading guidelines

Bold BI recommends you to follow below guidelines while upgrading the Bold BI Server from an older version to latest version.

* Save all the open settings and the unsaved items.
* Ensure no one is currently working with dashboards.
* Inform about the maintenance time to the users.
* For databases, make sure you have a valid network connection to the database while upgrading to the new version. 

## Backup the existing data
Before upgrading the Bold BI to latest version, make sure to take the backup of all the files and folders from below location.
<table>
    <tr>
      <td>
       Bold ID
      </td>
      <td>
      {Deployed Location}\IDP\App_Data
      </td>
    </tr>
    <tr>
      <td>
       Bold BI
      </td>
      <td>
       {Deployed Location}\Dashboard Server\App_Data
      </td>
    </tr>
    </table>

> **NOTE:**  By default, Bold BI will be deployed in "C:\Bold BI\"


## Proceeding with upgrade
Bold BI updates the database schema of your current version to the latest version. The upgrade process will retain all the resources and settings from the previous deployment.

You can download the latest version of the Bold BI Enterprise Edition under your account [here](https://www.boldbi.com/account/downloads/embedded).

### Unlock the setup
Run the Bold BI Enterprise Installer and sign-in with your registered e-mail address to unlock the setup.

![installation with registered e-mail](/static/assets/embedded/setup/images/installation-sign-in.png)


You can check the License Agreement of Bold BI Enterprise Edition by clicking the `License Terms and Conditions`.

### Select portal license

After you read the license agreement, click `Next` to choose your portal license. This step can be skipped if you have only one portal license.

![portal selection](/static/assets/embedded/setup/images/portal-plans-selection.png)


### Hosting type

After selecting the portal license, click `Next` to continue upgrading the Bold BI Enterprise using the existing server hosting type, location, and the port number.

The installer will automatically detect the existing hosting details and show in any one of the following web hosting types:

1. IIS Express
2. IIS

> **IMPORTANT:**  In upgrading case, `you have to proceed with existing values`, because modifying the existing hosting details when upgrading the process will stop the application from working.

![Installation Location, IIS Port and Site Name](/static/assets/embedded/setup/images/installation-IIS.png)

### PhantomJS

> **IMPORTANT:** PhantomJS is a headless WebKit scriptable with JavaScript. This is a free software/open source, and it may contain MIT, BSD, LGPL, or GPL, or other similar licenses that contain third-party code. This executable file is necessary to achieve Image and PDF export functionalities in the Dashboard and widgets. Without this file, the image and PDF export options in the Dashboard and widgets will no longer be available. If you choose to download PhantomJS, must accept all terms and conditions to use it with Syncfusion products.

Read and accept the license and third-party terms and conditions by checking the option `LICENSE` and `Third-party` to install PhantomJS and click `Next`.

![Installation PhantomJS](/static/assets/embedded/setup/images/installation-phantomjs.png)  

> **NOTE:**  If you have any problem with internet connection or do not have internet connection, unselect the PhantomJS download option and continue to install. To manually install the PhantomJS, please refer [this](/embedded-bi/faq/how-to-install-phantomjs-manually/).

### Client libraries

> **IMPORTANT:** Bold BI Enterprise edition uses client libraries such as Oracle, PostgreSQL, MySQL, and MongoDB to connect with their respective SQL database variants. Check license of each library to give consent for installation. Selected client libraries alone will be shipped into the product.

![Installation Client Libraries](/static/assets/embedded/setup/images/installation-clientlibraries.png)

Read and accept the license to ship selected client libraries and click INSTALL.

Then, upgrading prompt will be shown, click `Yes` button to proceed the installation.

![Upgrade Installation Prompt](/static/assets/embedded/setup/images/upgrade-prompt.png)

After installation process is completed, you can launch the application by clicking Launch Application.

![Installation Launch Application](/static/assets/embedded/setup/images/installation-launchapplication.png)
