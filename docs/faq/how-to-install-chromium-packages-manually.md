---
layout: post
title: Deploy Chromium Packages manually for Bold BI | Bold BI Docs
description: Learn how to download Chromium Packages, an open-source WebKit, and deploy it on your machine manually to export PDF functionalities of dashboards in Bold BI.
platform: bold-bi
documentation: ug
---

# How to deploy Chromium Packages manually in Bold BI?
Chromium packages are necessary to achieve **image and PDF export** functionalities in dashboards, widgets, and **schedules** from Bold BI. Without these packages, the image and PDF export options in dashboards, widgets, and schedules will no longer be available.

If you installed the build offline or skipped the packages during the build installation, you can manually install the chromium packages. Please find the download link and location details in the following table. Once the download is complete, extract the zip file and copy the **`chrome-win`** folder for Windows or **`chrome-linux`** folder for Linux from the extracted location.


| Operating System      | Download Link                                           |  Location                          |
|-----------------------|---------------------------------------------------------------|----------------------------------------------|
| Windows 32-bit        | https://storage.googleapis.com/chromium-browser-snapshots/Win/901912/chrome-win.zip   | **`{Deployed Location}`**\app_data\bi\dataservice\\**`puppeteer`**\\**`Win-901912`**\chrome-win|
| Windows 64-bit        | https://storage.googleapis.com/chromium-browser-snapshots/Win_x64/901912/chrome-win.zip  | **`{Deployed Location}`**\app_data\bi\dataservice\\**`puppeteer`**\\**`Win64-901912`**\chrome-win|
| Linux                 | https://storage.googleapis.com/chromium-browser-snapshots/Linux_x64/901912/chrome-linux.zip | /var/www/bold-services/application/app_data/bi/dataservice/**`puppeteer`**/**`Linux-901912`**/chrome-linux  |

After copying the chromium packages into the specified directory above the table, you must restart the designer service. Please refer to this [link](/faq/how-to-restart-the-bold-bi-embedded-application/) for more information.

> **NOTE:**
> * The locations highlighted above do not exist. Please create them manually and move the downloaded packages.
> * If you are using Bold BI version **below 5.1**, install [phantomjs](/faq/how-to-install-phantomjs-manually/) instead of the chromium package.
> * The Chromium packages do not support Azure App Service Environment and Linux ARMx64. Therefore, image and PDF exporting is not supported for those environments.