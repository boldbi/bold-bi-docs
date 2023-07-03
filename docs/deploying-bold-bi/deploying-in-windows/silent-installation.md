---
layout: post
title: Install Bold BI Enterprise Edition in Silent Mode | Bold BI Docs
description: Read this documentation to learn how to install the Bold BI Enterprise Edition in silent mode into another installer and embed the dashboards in an application.
platform: bold-bi
documentation: ug
lang: en
---

# Install the Bold BI Enterprise Edition in silent mode
 
 This section explains how to install and deploy the Bold BI Enterprise Edition in silent mode. This silent installer can be included in your existing installation process.

## Installing the Bold BI Enterprise Edition in command line

To install the Bold BI Enterprise Edition in silent mode, follow the steps below.

1.	First you need to [download](/deploying-bold-bi/overview/#registration-and-download) the `BoldBIEnterpriseEdition.exe` from your account.  

2.  Run the downloaded `BoldBIEnterpriseEdition.exe` by double-clicking it. The installer wizard automatically opens and extracts the package into the `%temp%` folder.

3.	The file `boldbienterpriseedition`_(version)_(timestamp).exe file will be extracted into the `%temp%` directory.

4.	Run `%temp%.` The Temp folder will be opened. The `boldbienterpriseedition`(version)(timestamp).exe file will be present in one of the temp folders. The folder name will start as `is`.

    ![Temp-folder](/static/assets/installation-and-deployment/images/temp-folder.png)

5. Copy the extracted `boldbienterpriseedition`_(version)_(timestamp).exe file in any of the local drive, Exit the Wizard.

6.	Now, run the windows command prompt in **Administrator** mode and pass the following arguments in the command line to the above `Bold BI Enterprise Edition` installer to install it in silent mode.

      **parameters:**
     ~~~
    boldbienterpriseedition_(version)_(timestamp).exe /Install Silent /InstallPath:{Location to install} /IISPortNo:{Port_No}/IISSiteName:{siteName} /IsSetFirewall:{true/false} /IsDesktopShortcut:{true/false} /IsStartMenuShortcut:{true/false}  /IsSilentStartUp:{true/false} /JsonFilePath:{Location of the Startup JSON file path}
    ~~~

7.	You can install the Bold BI Enterprise Edition installer in two ways.

     a. [Configuring the application startup details during the installation](#configuring-the-application-startup-details-during-the-installation)

     b. [Silent installation alone without providing the application startup details](#silent-installation-alone-without-providing-the-application-startup-details)

### Configuring the application startup details during the installation

If you need to set the application configuration details during the setup installation itself, you can use this parameter list.

Once the setup installation is completed, your application will be configured by default, and you can proceed to use the Bold BI dashboards.

Download the [v2_application_startup](https://github.com/boldbi/api-payload/blob/main/v2/application_startup.json) JSON file and provide all the necessary inputs. After providing your inputs in the file, pass it to the installer as an argument.

![Silent-startUp-true](/static/assets/installation-and-deployment/images/silent-startup-true.png)

**Example,**

![Command-line-startUp-true](/static/assets/installation-and-deployment/images/command-line-startup-true.png)

![Bold-BI-application](/static/assets/installation-and-deployment/images/bold-bi-application.png)

### Silent installation alone without providing the application startup details

If you don’t want to provide the application startup configuration details during the silent installation, then set **IsSilentStartUp** to **false** and proceed with the installation.

![Silent-startUp-false](/static/assets/installation-and-deployment/images/silent-startup-false.png)

**Example,**

![Command-line-startUp-false](/static/assets/installation-and-deployment/images/command-line-startup-false.png)

Once the setup installation is completed, you can provide the startup details in the Bold BI application itself and configure it. Refer to the following [link](/application-startup/latest/) for more information on application startup.

    
