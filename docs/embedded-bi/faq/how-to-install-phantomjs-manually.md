---
layout: post
title: Deploying PhantomJS WebKit | Bold BI Documentation
description: Learn how to download PhantomJS application, an open source webkit and deploy it on your machine manually.
platform: bold-bi
documentation: ug
---

# How to deploy PhantomJS WebKit manually?
PhantomJS is a headless WebKit 	script able with JavaScript. It is a free software/open source that may contain MIT, BSD, LGPL or GPL, or other similar licenses It contains third-party code. This executable file is necessary to achieve Image and PDF export functionalities in dashboard, widgets and schedules. Without this, the Image and PDF export options in dashboard, widgets and schedules no longer available. It is your decision if you choose to download Phantom JS, but you must accept all of their terms and conditions if you want to use it with Syncfusion’s products.

To download and install the PhantomJS application on your machine, you must accept the terms of the [LICENSE](https://github.com/ariya/phantomjs/blob/master/LICENSE.BSD) and [Third-Party](https://github.com/ariya/phantomjs/blob/master/third-party.txt) documents. Then, you can download PhantomJS for [Windows](http://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-windows.zip) and [Linux](https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2).

Once the download is completed, extract the zip file and then copy the PhantomJS application from the following mentioned extracted location.

| Operating System      | Extracted Location                                            |
|-----------------------|-----------------------------------------------                |
| Windows               | **`{Extracted Location}`**\PhantomJS-2.1.1-windows\bin        |
| Linux                 | **`{Extracted Location}`**\phantomjs-2.1.1-linux-x86_64\bin   |

 And paste it in the following mentioned deploy location.

| Bold BI Version           | Location                                                  |
|---------------------------|-----------------------------------------------------------|
| Below 4.1.36              | **`{Deployed Location}`**\Dashboard Designer              |
| 4.1.36 or above           | **`{Deployed Location}`**\app_data\bi\dataservice         |
