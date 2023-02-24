---
layout: post
title: Installing Client Libraries for Embedded BI | Bold BI Docs
description: Learn how to install optional client libraries in Linux machine to connect with respective SQL database for the variants of Embedded Bold BI v4.1 or older.
platform: bold-bi
documentation: ug
---

# Install Optional Libraries 

## Client libraries

> **IMPORTANT:** Bold BI Enterprise Edition uses client libraries such as Oracle, PostgreSQL, MySQL, Snowflake, and MongoDB to connect with their respective SQL database variants. You need to read and accept the client library license to install the client libraries.

1. Go to client library location. 
 `/var/www/boldbi-embedded/clientlibrary/`
 
2. Here, you can see the client library consent document `consent-to-deploy-client-libraries.txt.` Read the client libraries `LICENSE` details and execute the following command to install client libraries. 
 

  ~~~js
    $sudo bash install-optional.libs.sh install-optional-libs npgsql,mongodb,influxdb,snowflake,mysql,oracle
  ~~~

> **NOTE:** If you face any issues in designer, please execute the following command. </brsss>

~~~js
    sudo chown -R <current user name> /var/www/boldbi-embedded/boldbi/bi/dataservice
  ~~~

## PhantomJS

> **IMPORTANT:** PhantomJS is a headless WebKit scriptable with JavaScript. This is free software or open-source, and it may contain MIT, BSD, LGPL, GPL, or other similar licenses that contain third-party code. This executable file is necessary to achieve the image and PDF export functionalities in the dashboard and widgets. Without this file, the image and PDF export options in the dashboard and widgets will no longer be available. 

1. Go to client library location. 
 `/var/www/boldbi-embedded/clientlibrary/`
 
2. Create a directory `bi/dataservice` inside the directory `/var/www/boldbi-embedded/boldbi/app_data/` by executing the following command.

  ~~~shell
    $sudo mkdir -p /var/www/boldbi-embedded/boldbi/app_data/bi/dataservice
  ~~~

3. Here, you can see the PhantomJS library consent document `consent-to-deploy-phantomjs-webkit.txt.` Read the PhantomJS `LICENSE` details and execute the following command to install PhantomJS. 
 

  ~~~js
    $sudo bash install-optional.libs.sh install-optional-libs phantomjs
  ~~~


> **NOTE:** PhantomJS needs some dependencies. If your distribution does not contain the dependencies, please install it. https://phantomjs.org/download.html

## Next step

* [**Application Startup**](/embedded-bi/application-startup/)