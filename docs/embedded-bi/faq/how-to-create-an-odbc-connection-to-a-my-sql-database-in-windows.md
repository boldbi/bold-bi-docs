---
layout: post
title: Creating ODBC DSN in Windows for MySQL | Bold BI Docs
description: This article describes how to create an ODBC DSN using ODBC Data Source Administrator in Windows to a MySQL database.
platform: bold-bi
documentation: ug
---

# How to create an ODBC connection to a MySQL database in Windows?

This topic describes how to create an ODBC connection to a MySQL database in Windows that can be used to connect MySQL database from Bold BI Dashboard.

An ODBC Data Source Name (DSN) stores information for establishing a connection to a database on a remote database server. A system DSN provides access to multiple users, rather than the user only who created it.

## Download and Install MySQL ODBC Driver

Download and install the `32-bit Connector/ODBC driver`
from the [Downloads](http://dev.mysql.com/downloads/connector/odbc/) section of the MySQL website.

> **NOTE:** Bold BI is a `32-bit` application, so it will not support `64-bit ODBC` connector.

## Create a DSN

After installing MySQL ODBC driver, follow these steps to create DSN for MySQL database.

### Open a ODBC Data Source Administration Tool

Open `Control Panel` and select `System and Security`.

![Control Panel Home](/static/assets/embedded/faq/images/control-panel-home.png)

Then, select `Administrative Tools` from the list of options.

![Select Administrative Tools](/static/assets/embedded/faq/images/select-administrative-tools.png)

Next, select `ODBC Data Sources (32-bit)` from the list of options.

![Select ODBC Tool](/static/assets/embedded/faq/images/select-odbc-tool.png)

### Create a DSN with MySQL ODBC Driver

In the `ODBC Datasource Administration (32-bit)` tool, navigate to `System DSN` and click `Add` to add a new DSN.

![Add new DSN](/static/assets/embedded/faq/images/add-new-dsn.png)

Select `MySQL ODBC Driver` from the list of drivers and then click `Finish`.

![Select ODBC Driver](/static/assets/embedded/faq/images/select-driver.png)

The `MySQL Connector/ODBC Configuration` tool will be opened and fill the requested details in the tool.

![MySQL DSN Connection Details](/static/assets/embedded/faq/images/mysql-dsn-connection-details.png)

* Data Source Name – Name of the DSN that will be used to connect MySQL database from Bold BI Dashboard.
* Description – Description of the DSN(Optional).
* TCP/IP Server – Server that holds MySQL Database.
* Port - Port number provided for MySQL Database.
* User – Username that used to connect MySQL.
* Password - Password of the corresponding user.

The created DSN will be listed in the `ODBC Data Source Administration (32-bit)` tool.

![DSN List](/static/assets/embedded/faq/images/dsn-list.png)