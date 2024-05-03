---
layout: post
title: Deploying PhantomJS WebKit | Bold BI Documentation
description: Learn how to download PhantomJS application, an open source webkit and deploy it on your machine manually.
platform: bold-bi
documentation: ug
---

# How to deploy PhantomJS WebKit manually in Bold BI?
PhantomJS is a headless WebKit script capable of running JavaScript. It is free software/open source that may be licensed under MIT, BSD, LGPL, GPL, or other similar licenses. It contains third-party code. This executable file is necessary to enable Image and PDF export functionalities in dashboards, widgets, and schedules. Without it, the Image and PDF export options in dashboards, widgets, and schedules are no longer available. It is up to you to decide whether to download PhantomJS, but you must accept all of their terms and conditions if you want to use it with Syncfusion’s products.

To download and install the PhantomJS application on your machine, you must accept the terms of the [LICENSE](https://github.com/ariya/phantomjs/blob/master/LICENSE.BSD) and [Third-Party](https://github.com/ariya/phantomjs/blob/master/third-party.txt) documents. Then, you can download PhantomJS for [Windows](http://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-windows.zip), [Linux](https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2) and [Azure App Service](http://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.0.0-windows.zip).

Once the download is completed, extract the zip file, and then copy the PhantomJS application from the location mentioned above.

| Operating System      | Extracted Location                                            |
|-----------------------|-----------------------------------------------                |
| Windows               | **`{Extracted Location}`**\PhantomJS-2.1.1-windows\bin        |
| Linux                 | **`{Extracted Location}`**\phantomjs-2.1.1-linux-x86_64\bin   |
| Azure App Service     | **`{Extracted Location}`**\phantomjs-2.0.0-windows\bin        |

And paste it in the deploy location mentioned below.

| Bold BI Version           | Location                                                  |
|---------------------------|-----------------------------------------------------------|
| Below 4.1.36              | **`{Deployed Location}`**\Dashboard Designer              |
| 4.1.36 or above           | **`{Deployed Location}`**\app_data\bi\dataservice         |

> **NOTE:** If you are using Bold BI version 4.2 or higher, please install the [chromium](/faq/how-to-install-chromium-packages-manually/) package instead of PhantomJS.