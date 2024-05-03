---
layout: post
title: Working with ETL in Bold BI – Embedded BI | Bold BI Learning
description: Learn how to working with ETL  Working with Projects, Scheduling ETL Jobs and Working with Connectors in Bold BI deployed in your server.
canonical: "/working-with-data-sources/working-with-the-bold-extract/"
platform: bold-bi
documentation: ug
---

# Working with Bold ETL in our Bold BI / Bold Reports

## Overview

The purpose of the Bold ETL application is to load data from various sources into the Bold BI Data Store database, including ``PostgreSQL``, ``MSSQL``, ``MySQL`` and ``Apache Doris``. It offers options to schedule jobs at regular intervals to pull data from these sources and supports transformation using SQL scripts.

For Windows OS, Python 3.9 version is required along with Bold BI or Bold Reports  for Bold ETL. If Python 3.9 version is already installed, please specify the Python path in ``{Drive}:\BoldServices\etl\etlservice\appsettings.json`` and restart the app in IIS server.

![Source](/static/assets/working-with-etl/images/etl_python.png)

## Make Bold ETL optional during installation of Bold BI / Bold Reports.

To facilitate the optional installation of the Bold ETL Application alongside Bold BI or Bold Reports, users can follow these steps:

1. When running the installer, users can choose to include the Bold ETL Application by selecting the “Install Bold ETL Application” checkbox within the installer wizard interface.
![Source](/static/assets/working-with-etl/images/etl_install.png)

2. Conversely, users who wish to exclude the ETL application during setup can simply deselect the aforementioned checkbox.
   
3. Should users opt to install the ETL application post-setup, they can utilize the BoldETL.msi file located in the installation directories of Bold Reports or Bold BI.
   
4. To successfully install the ETL service and application pool, users must open the command prompt in administrative mode and execute the BoldETL.msi file. Attempting to install the ETL service by directly double-clicking on the MSI file may result in service configuration complications within IIS.
![Source](/static/assets/working-with-etl/images/etl_install1.png)

Example,
Bold Reports & Bold BI Locations: 
“C:\Program Files (x86) \Bold Reports\Enterprise Reporting\BoldETL”
“C:\Program Files (x86) \Bold BI Enterprise Edition\BoldETL”

5. For uninstallation of the Bold ETL Application, users are advised to access the registry and navigate to the  "Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall” key. 
 ![Source](/static/assets/working-with-etl/images/etl_install2.png)

By searching for the specific Bold ETL version or application within this key, users can retrieve the Uninstall string and execute the necessary command in the Command Prompt with administrative privileges.
![Source](/static/assets/working-with-etl/images/etl_install3.png)
 

Double click on the UninstallString to obtain the full string for MSIExec.exe.

For example: MsiExec.exe /I{7B84657A-23E5-479E-9241-16A2B3743A6F}.

Once you have obtained the Uninstall string, change /I to /X.
For example:
From: MsiExec.exe /I{7B84657A-23E5-479E-9241-16A2B3743A6F}
To: MsiExec.exe /X{7B84657A-23E5-479E-9241-16A2B3743A6F}

Then, execute the command "MsiExec.exe /X{7B84657A-23E5-479E-9241-16A2B3743A6F}" in the command prompt with administrator mode. Bold ETL application will be uninstalled now.
For example:
![Source](/static/assets/working-with-etl/images/etl_install4.png)

It is important to note that attempting to uninstall BoldETL.msi via the Windows Control Panel may not effectively remove the application pool and etlservice application components.





## Using the ETL Application In Bold BI / Bold Reports

This section explains how to work with projects, schedule jobs, and create Bold BI data sources.

For more details on working with ETL, click here.

Click on the ``BoldETL`` icon to open the site in a new tab.

![Source](/static/assets/working-with-etl/images/etl_boldetl.png)
![Source](/static/assets/working-with-etl/images/etl_reports.png)
![Source](/static/assets/working-with-etl/images/etl_homepage.png)

Bold BI, Bold Reports and Bold ETL applications can be accessed using the same login credentials, as they are integrated with our Identity Provider (IdP).


[Working with Projects](/working-with-data-sources/working-with-bold-etl/working-with-projects/)

[Scheduling ETL Jobs](/working-with-data-sources/working-with-bold-etl/schedule/)

[Transformation and Preview](/working-with-data-sources/working-with-bold-etl/transformation-preview/)

[Data Store](/working-with-data-sources/working-with-bold-etl/data-store/)
