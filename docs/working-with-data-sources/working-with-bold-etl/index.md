---
layout: post
title: Working with ETL in Bold BI – Embedded BI | Bold BI Learning
description: Learn how to working with ETL  Working with Projects, Scheduling ETL Jobs and Working with Connectors in Bold BI deployed in your server.
canonical: "/working-with-data-sources/working-with-the-bold-extract/"
platform: bold-bi
documentation: ug
---

# Working with ``Bold ETL`` in our Bold BI

## Getting Started


### Overview

Bold ETL application is to load data from various data sources into  Bold BI Data Store database, ``PostgreSQL``, ``MSSQL``, ``MySQL`` and ``Apache Doris``. Provides options to schedule the job at regular interval to pull data from data sources. Supports transformation using SQL scripts.

For Windows OS, Python 3.9 version is installed along with Bold BI Enterprise Edition for Bold ETL. If Python 3.9 version is installed already, please specify the Python path in ``{Drive}:\BoldServices\etl\etlservice\appsettings.json`` and restart the app in the IIS server.

![Source](/static/assets/working-with-etl/images/etl_python.png)


## Using the ETL Application In Bold BI

This section explains working with projects, scheduling jobs, and creating Bold BI data sources.

You can explore about working with ETL in detail here.

Click on the Bold ETL icon. The bold ETL site opens in a new tab.

![Source](/static/assets/working-with-etl/images/etl_boldetl.png)

![Source](/static/assets/working-with-etl/images/etl_homepage.png)

Bold BI and Bold ETL applications can use the same login credentials. The Bold BI and Bold ETL applications are integrated with our Identity Provider (IdP).


[Working with Projects](/working-with-data-sources/working-with-bold-etl/working-with-projects/)

[Scheduling ETL Jobs](/working-with-data-sources/working-with-bold-etl/schedule/)

[Data Store](/working-with-data-sources/working-with-bold-etl/data-store/)

[Transformation and Preview](/working-with-data-sources/working-with-bold-etl/transformation-preview/)
