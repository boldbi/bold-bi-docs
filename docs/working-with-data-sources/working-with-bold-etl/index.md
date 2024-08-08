---
layout: post
title: Working with ETL in Bold BI – Embedded BI | Bold BI Learning
description: Learn how to working with ETL  Working with Projects, Scheduling ETL Jobs and Working with Connectors in Bold BI deployed in your server.
canonical: "/working-with-data-sources/working-with-bold-etl/"
platform: bold-bi
documentation: ug
---

# Working with Bold ETL in our Bold BI / Bold Reports

## Overview

The primary objective of the Bold ETL application is to facilitate the extraction, transformation, and loading of data from diverse sources such as ``PostgreSQL``, ``MSSQL``, ``MySQL``, and ``Apache Doris`` and ``Bold BI Data Store`` database. we can conveniently schedule recurring jobs to retrieve data from these sources and utilize SQL scripts for data transformation purposes.

## Integrated ETL Architecture
![Source](/static/assets/working-with-etl/images/archietecture.png)


For Windows OS, Python 3.9 version is required along with Bold BI or Bold Reports  for Bold ETL. If Python 3.9 version is already installed, please specify the Python path in ``{Drive}:\BoldServices\etl\etlservice\appsettings.json`` and restart the app in IIS server.

```  
"PythonPath": "<Drive>:\\BoldServices\\Python39" 
```


## Using the ETL Application In Bold BI / Bold Reports

To access the Bold ETL site, please click on the "BoldETL" icon displayed on the page. 

This action will open the site in a new tab. In the Bold BI Server page, the icon can be found under the working-with-etl section as shown in the image.

![Source](/static/assets/working-with-etl/images/etl_boldetl.png)

Similarly, in the Bold Reports Server page, the icon is located under the same section as depicted in the image.

![Source](/static/assets/working-with-etl/images/etl_reports.png)

Upon clicking the icon, you will be redirected to the Bold ETL site homepage, as illustrated in the image

![Source](/static/assets/working-with-etl/images/etl_homepage.png)


> **IMPORTANT:** The Bold BI, Bold Reports, and Bold ETL applications are seamlessly integrated with our Identity Provider (IdP), allowing users to access them using a single set of login credentials.


This section explains how to work with projects, schedule jobs, and create Bold BI data sources.

For more details on working with ETL, click here.


[Data Store](/working-with-data-sources/working-with-bold-etl/data-store/)

[Working with Projects](/working-with-data-sources/working-with-bold-etl/working-with-projects/)

[Transformation and Preview](/working-with-data-sources/working-with-bold-etl/transformation-preview/)

[Scheduling ETL Jobs](/working-with-data-sources/working-with-bold-etl/schedule/)
