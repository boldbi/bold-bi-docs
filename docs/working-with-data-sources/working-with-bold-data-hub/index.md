---
layout: post
title: Working with ETL in Bold BI – Embedded BI | Bold BI Learning
description: Learn how to working with ETL  Working with Projects, Scheduling ETL Jobs and Working with Connectors in Bold BI deployed in your server.
canonical: "/working-with-data-sources/working-with-bold-data-hub/"
platform: bold-bi
documentation: ug
---

# Working with Bold Data Hub in our Bold BI / Bold Reports

## Overview

The primary objective of the Bold Data Hub application is to facilitate the extraction, transformation, and loading of data from diverse sources such as file types and web, SQL, and NoSQL data sources. please refer to [Working With Data Hub Connectors](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/data-connectors/). we can conveniently schedule recurring jobs to retrieve data from these sources and utilize SQL scripts for data transformation purposes.

## Integrated Bold Data Hub Architecture
![Source](/static/assets/working-with-etl/images/archietecture.png)


For Windows OS, Python 3.9 version is required along with Bold BI or Bold Reports  for Data Hub. If Python 3.9 version is already installed, please specify the Python path in ``{Drive}:\BoldServices\etl\etlservice\appsettings.json`` and restart the app in IIS server.

```  
"PythonPath": "<Drive>:\\BoldServices\\Python39" 
```


## Using the Bold Data Hub Application In Bold BI / Bold Reports

To access the Data Hub site, please click on the "Data Hub" icon displayed on the page. 

This action will open the site in a new tab. In the Bold BI Server page, the icon can be found under the working-with-etl section as shown in the image.

![Source](/static/assets/working-with-etl/images/etl_datahub.png)

Similarly, in the Bold Reports Server page, the icon is located under the same section as depicted in the image.

![Source](/static/assets/working-with-etl/images/etl_reports.png)

Upon clicking the icon, you will be redirected to the Bold Data Hub site homepage, as illustrated in the image

![Source](/static/assets/working-with-etl/images/datahub_homepage.png)


> **IMPORTANT:** The Bold BI, Bold Reports, and Bold Data Hub applications are seamlessly integrated with our Identity Provider (IdP), allowing users to access them using a single set of login credentials.


This section explains how to work with projects, schedule jobs, and create Bold BI data sources.

For more details on working with Bold Data Hub, click here.

[Relationship Between Bold Data Hub and Bold BI Data Sources ](/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

[Data Store](/working-with-data-sources/working-with-bold-data-hub/data-store/)

[Working with Pipelines](/working-with-data-sources/working-with-bold-data-hub/working-with-pipelines/)

[Transformation and Preview](/working-with-data-sources/working-with-bold-data-hub/transformation-preview/)

[Scheduling ETL Jobs](/working-with-data-sources/working-with-bold-data-hub/schedule/)