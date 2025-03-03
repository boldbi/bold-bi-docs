---
layout: post
title: Install Bold BI Enterprise Edition in Silent Mode | Bold BI Docs
description: Read this documentation to learn how to install the Bold BI Enterprise Edition in silent mode into another installer and embed the dashboards in an application.
platform: bold-bi
documentation: ug
---

# Install the Bold BI Enterprise Edition in silent mode
 
This section outlines how to install and deploy the Bold BI Enterprise Edition in silent mode. This silent installer can be integrated into your existing installation process.

## Installing the Bold BI Enterprise Edition in command line

To install the Bold BI Enterprise Edition in silent mode, follow the steps below.

1.	First, download the `BoldBIEnterpriseEdition.exe` from your [account](https://www.boldbi.com/account/).  

2.  Run the downloaded `BoldBIEnterpriseEdition.exe` by double-clicking it. The installer wizard automatically opens and extracts the package into the `%temp%` folder.

3.	The file `boldbienterpriseedition`_(version)_(timestamp).exe file will be extracted into the `%temp%` directory.

4.	Run `%temp%.` The Temp folder will be opened. The `boldbienterpriseedition`(version)(timestamp).exe file will be present in one of the temp folders. The folder name will start as `is`.

    ![Temp-folder](/static/assets/installation-and-deployment/images/temp-folder.png)

5. Copy the extracted `boldbienterpriseedition`_(version)_(timestamp).exe file to any local drive, then exit the Wizard.

6.	Now, run the windows command prompt in **Administrator** mode and pass the following arguments in the command line to the `Bold BI Enterprise Edition` installer to install it in silent mode.

      **parameters:**
     ~~~
    boldbienterpriseedition_(version)_(timestamp).exe /Install Silent /InstallPath:{Location to install} /IISPortNo:{Port_No}/IISSiteName:{siteName} /IsSetFirewall:{true/false} /IsDesktopShortcut:{true/false} /IsStartMenuShortcut:{true/false}  /IsSilentStartUp:{true/false} /JsonFilePath:{Location of the Startup JSON file path}
    ~~~

7.	You can install the Bold BI Enterprise Edition installer in three ways.

     a. [Configuring the application startup details during the installation](#configuring-the-application-startup-details-during-the-installation)

     b. [Silent installation alone without providing the application startup details](#silent-installation-alone-without-providing-the-application-startup-details)

     c. [Execute a silent installation of Bold BI as sub application](#execute-a-silent-installation-of-Bold-BI-as-sub-application)

### Configuring the application startup details during the installation

If you need to set the application configuration details during the setup installation itself, you can use this parameter list.

Once the setup installation is completed, your application will be configured by default, and you can proceed to use the Bold BI dashboards.

Download the [v2_application_startup](https://github.com/boldbi/api-payload/blob/main/v2/application_startup.json) JSON file and provide all the necessary inputs. After providing your inputs in the file, pass it to the installer as an argument.

![Silent-startUp-true](/static/assets/installation-and-deployment/images/silent-startup-true.png)

**Example,**

![Command-line-startUp-true](/static/assets/installation-and-deployment/images/command-line-startup-true.png)

**IsUpgrade** - Option is set to 'False' during a fresh installation. It can be true if you are upgrading to newer version.
- **IISSiteName** – Newer site will be created based on this Name.
- **IISPortNo** – Created Site to be hosted within this port number.

![Bold-BI-application](/static/assets/installation-and-deployment/images/bold-bi-application.png)


### Silent installation alone without providing the application startup details

If you don’t want to provide the application startup configuration details during the silent installation, then set **IsSilentStartUp** to **false** and proceed with the installation.

![Silent-startUp-false](/static/assets/installation-and-deployment/images/silent-startup-false.png)

**Example,**

![Command-line-startUp-false](/static/assets/installation-and-deployment/images/command-line-startup-false.png)

Once the setup installation is completed, you can provide the startup details in the Bold BI application itself and configure it. Refer to the [application startup](/application-startup/latest/) for more information.

### Execute a silent installation of Bold BI as sub application

To install Bold BI as a sub-application silently without providing the application startup configuration details during installation, set **IsSilentStartUp** to **false** and proceed with the installation. After the installation is completed, you can configure the startup details in the Bold BI application.

**parameters:**

     boldbienterpriseedition_(version)_(timestamp).exe /InstallPath:{Location to install} /DeploymentPath:{Deployment path} /IISSiteName:{siteName} /IISSubAppName:{Sub app name} /IISSubAppDomainName:{Sub app domain name} /IsSetFirewall:{true/false} /IsUpgrade:FALSE /IsDesktopShortcut:{true/false} /IsStartMenuShortcut:{true/false} /IsSilentStartUp:{true/false}


- **IISSiteName** – Name of the site was already present in IIS. BoldBI will hosted as child site of this site.
- **IsUpgrade** – False during fresh installation.
- **IISSubAppName** – Sub application name of Bold BI site.
- **IISSubAppDomainName** – Domain name of Bold BI site http://localhost:80.

**Example,**

![Silent-startup-sup-apps](/static/assets/installation-and-deployment/images/command-line-subapps.png)

If you are hosting the Bold BI over Bold Reports and wants to host in common login then you can include /IsCommonLogin:TRUE.


### Details about the Silent Installation Parameters:

This command is for installing a BoldBI application in a specific environment, where each parameter tailors the installation process to the user's needs. Here's a breakdown of each parameter:

- **boldbienterpriseedition_(version)_(timestamp).exe** – This is the executable file for installing the software. The version and timestamp are dynamically added, which suggests the file has a version number and a timestamp to uniquely identify it for each build.  
- **/InstallPath:{Location to install}** - Specifies the directory where the application should be installed. Replace {Location to install} with the actual path (e.g., C:\Program Files\My Application). It defines the installation directory for the software.
- **/IISPortNo:{Port No}** – Sets the port number for IIS (Internet Information Services), a web server on Windows. This parameter assigns a custom port for the web application to run on. Replace {Port No} with the desired port (e.g., 8080).   

    **Note:** This field is not required when hosting as sub application.
- **/IISSiteName:{site name}** - Defines the name of the IIS site where the application will be hosted. Replace {Site Name} with the actual name you want to assign to the site (e.g., My Application Site).
- **/IISSubAppName:{Sub Application Name}** - Specifies the name of the sub-application within the IIS site. If the application is part of a larger site or project, this parameter helps assign a name to the specific sub-application. Replace {Sub Application Name} with the name of your sub-application. 

    **Note:** Only needed if the application is going to be a sub-application (like a child app under a IIS site). 
- **/IISSubAppDomainName:{Domain Name}** - Defines the domain name or virtual directory for the sub-application within IIS. This is useful if the application is going to run under a specific domain or URL. Replace {Domain Name} with the appropriate domain (e.g., example.com or myapp.local).

    **Note:** Only needed if the application is going to be a sub-application (like a child app under a IIS site).
- **/IsSetFirewall:{TRUE/FALSE}** - This option determines whether to configure the firewall during installation.
    - TRUE: The installer will set up the necessary firewall rules.
    - FALSE: No firewall changes will be made.
- **/IsUpgrade:TRUE** - This flag indicates that the installation is an upgrade of an existing version. The installer will overwrite the older version of the application with the new one. If you set this to FALSE, the installer might attempt a fresh installation instead of upgrading. 
- **/IsDesktopShortcut:{TRUE/FALSE}** - Specifies whether or not to create a shortcut on the desktop for the installed application.
    - TRUE: A shortcut will be placed on the desktop.
    - FALSE: No shortcut will be created on the desktop.
- **/IsStartMenuShortcut:{TRUE/FALSE}** - Specifies whether or not to create a shortcut in the Windows Start Menu for the installed application.
    - TRUE: A shortcut will be added to the Start Menu.
    - FALSE: No shortcut will be added to the Start Menu.
- **/IsSilentStartUp:FALSE** - This indicates whether the application should start silently (i.e., without any user interface showing when the application starts).
    - FALSE: The application will not start silently; it will show the usual user interface when launched.
    - TRUE (if set): The application would start silently without showing the user interface.
- **/JsonFilePath: {JSON FIle}** - JSON file will contain database and IIS Site details that need to 
/IsSilentStartUp is set to TRUE, and you want to include additional parameters for specifying the path to a JSON file (which could be used for configuring startup settings or other initialization tasks), you would need to add the /JsonFilePath parameter in your command.


In summary, the command provides various installation configurations for setting up a software package, including options for silent installation, IIS setup, firewall management, shortcuts, and upgrade behavior.