---
layout: post
title: Upgrading Bold BI Server - Embedded BI | Bold BI Docs
description: Read this guide to know how to upgrade the existing Bold BI Server in your machine to the latest version without any hassle.
platform: bold-bi
documentation: ug
---

# Upgrading Bold BI Server to the Latest Version

This section explains how to upgrade the Bold BI Server from any version to the latest version.

Bold BI releases several major versions in a year. Each version includes new features, bug fixes, and other improvements.

The Bold BI Enterprise Edition can be manually upgraded to the latest version at any time, and there are no automatic updates for the Bold BI Server. Before upgrading, you can refer to the features and enhancements from the [Release Notes](https://www.boldbi.com/release-history/).

> **NOTE:** Upgrading to the latest version does not require a license key. On the other hand, our services will retrieve the license in the backend after upgrading to the latest version.

## Upgrading guidelines

Bold BI recommends you follow the below guidelines while upgrading the Bold BI Server from an older version to the latest version. 

* Save all the open settings and the unsaved items.
* Ensure no one is currently working with dashboards.
* Inform users about the maintenance time.
* For databases, make sure you have a valid network connection to the database while upgrading to the new version. 
* The upgrade requires the intermediate database as mandatory, make sure that the database is configured before upgrading. You can refer how to [configure intermediate database](/site-administration/data-process-settings/datastore-settings/).

## Backup the existing data
Before upgrading the Bold BI to the latest version, make sure to take the backup of all the files and folders from the below location.

| Hosted Environment    | APP_Data location                                              	|
|-------------------	  |-----------------------------------------------------------	    |
| Windows            	  | **`{Deployed Location}`**\app_data                              |


> **NOTE:** By default, the Bold BI is deployed in "C:\BoldServices" for Windows.


## Proceeding with upgrade
Bold BI updates the database schema of your current version to the latest version. The upgrade process will retain all the resources and settings from the previous deployment.

You can download the latest version of the Bold BI Enterprise Edition under your account [here](https://www.boldbi.com/account/).

### Unlock the setup

Run the Bold BI Enterprise Installer.

![installation with registered e-mail](/static/assets/installation-and-deployment/images/installation-prompt.png)

You can check the License Agreement of Bold BI Enterprise Edition by clicking the `License Terms and Conditions`.

Then, the upgrading prompt will be shown, click `Yes` to proceed with the installation.

![Upgrade Installation Prompt](/static/assets/installation-and-deployment/images/upgrade-prompt.png)

### Hosting type

Then, click `Next` to upgrade the Bold BI Enterprise using the existing server hosting type, location, and port number.

> **NOTE:** Starting from v4.1, if you have already configured the Bold BI in IIS Express, it will be automatically migrated to IIS.

![Installation Location, IIS Port and Site Name](/static/assets/installation-and-deployment/images/installation-IIS.png)

## Chromium Packages

> **IMPORTANT:** Chromium packages are necessary to achieve image and PDF export functionalities in dashboards, widgets, and schedules from Bold BI. Without these packages, the image and PDF export options in dashboard, widgets, and schedules will no longer be available.

![Installation Chromium Pakages](/static/assets/installation-and-deployment/images/installation-chromium-packages.png)  

### Client libraries

> **IMPORTANT:** The Bold BI Enterprise Edition uses client libraries such as Oracle, PostgreSQL, MySQL, and MongoDB to connect with their respective SQL database variants. Check the license of each library to give consent for installation. Only the selected client libraries installed.

![Installation Client Libraries](/static/assets/installation-and-deployment/images/installation-clientlibraries.png)

Read and accept the license to ship selected client libraries and click INSTALL.

After the installation process is completed, you can launch the application by clicking Launch Application.

![Installation Launch Application](/static/assets/installation-and-deployment/images/launch-application.png)
