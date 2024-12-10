---
layout: post
title: Install & Uninstall  – Embedded BI | Bold BI Learning
description: Learn  proper procedures for installing and uninstalling Bold ETL in conjunction with the installation of Bold BI and Bold Reports.
platform: bold-bi
documentation: ug
---

# Install Data Hub

## Make Data Hub optional during installation of Bold BI / Bold Reports.

Users have the option to install the Data Hub Application in conjunction with Bold BI or Bold Reports by following the outlined steps provided for their convenience.

1. During the installation process, users have the option to incorporate Data Hub Application by checking the box labeled "Install Data Application" in the installer wizard interface.
![Source](/static/assets/working-with-etl/images/etl_install.png)   

2. On the other hand, individuals who desire to skip the Data Hub application during the configuration process have the option to uncheck the specified checkbox.

3. Users have the option to install the Data Hub application after the initial setup by accessing the ``BoldETL.msi`` file found within the installation directories of either Bold Reports or Bold BI.
   
4. In order to properly install the Data Hub service and application pool, it is necessary for users to access the command prompt in administrative mode and run the BoldETL.msi file. 
  
    Example,
    Bold Reports & Bold BI Locations: 
    ```
    “C:\Program Files (x86) \Bold Reports\Enterprise Reporting\BoldETL>BoldETL.msi”
    “C:\Program Files (x86) \Bold BI Enterprise Edition\BoldETL>BoldETL.msi”
    ```
---

Failure to follow this procedure and instead attempting to install the Data Hub service by simply double-clicking on the MSI file may lead to potential service configuration issues within the Internet Information Services (IIS) environment

---



## UnInstall Data Hub in Bold BI / Bold Reports.
1. To properly remove the Data Hub Application, users are recommended to access the system registry and locate the ``Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall``` key associated with the application for uninstallation.  
![Source](/static/assets/working-with-etl/images/etl_install2.png)

2. Users can locate the precise Data Hub version or application by conducting a search within the provided key. Once identified, they can access the Uninstall string and proceed to execute the required command in the Command Prompt, ensuring administrative privileges are granted.
![Source](/static/assets/working-with-etl/images/etl_install3.png)
 

3. To access the complete uninstall string for MSIExec.exe, double click on the UninstallString. Subsequently, modify the /I to /X in the obtained string.

    For example:
    ```
    From: MsiExec.exe /I{7B84657A-23E5-479E-9241-16A2B3743A6F}
    To: MsiExec.exe /X{7B84657A-23E5-479E-9241-16A2B3743A6F}
    ```

4. Next, proceed to execute the specified command in the command prompt while ensuring administrator privileges are active. The Data Hub application will then be uninstalled as directed. 
    For example:
    ``` msiExec.exe /X{7B84657A-23E5-479E-9241-16A2B3743A6F} ```


> **Note:** It is imperative to acknowledge that the removal of ``BoldETL.msi`` through the Windows Control Panel may not adequately eliminate the application pool and etlservice application components.




