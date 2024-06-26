---
layout: post
title: How to Install Bold BI application in silent mode | Bold BI Docs
description: This page summarizes how to install and deploy the Bold BI Enterprise Edition installer in silent mode.
platform: bold-bi
documentation: ug
---

# How to install and deploy the Bold BI Enterprise Edition in silent mode

You can install and deploy the Bold BI Enterprise Edition in silent mode. This silent installer can be included in your existing installation process.

Follow these steps to install the Bold BI Enterprise Edition in silent mode:

1. [Download](/deploying-bold-bi/overview/#registration-and-download) the `BoldBIEnterpriseEdition.exe` from your account. 

2. Run the downloaded `BoldBIEnterpriseEdition.exe` by double-clicking it. The installer wizard will automatically open and extract the installer package into the `%temp%` folder.

3. In the **Run** command box, type `%temp%` and press enter. The Temp folder will open. The **boldbienterpriseedition_(version)_(timestamp).exe** file will be present in one of the **is-xxxx** folders.

    ![Temp Location](/static/assets/faq/images/temp-location.png)

4. Copy the extracted **boldbienterpriseedition_(version)_(timestamp).exe** file to any local drive.

5. Exit the Wizard.

6. Now, run the Windows Command Prompt in **Administrator** mode and pass the following arguments in the command line to the above Bold BI Enterprise Edition installer to install it in silent mode.

    **Parameter:**

    <table>
   <tr><td>               
                
        boldbienterpriseedition_(verion)_(timestamp).exe /Install Silent /InstallPath:{Location to install} /IISPortNo:{Port_No} /IISSiteName:{siteName} /IsSetFirewall:{true/false} /IsDesktopShortcut:{true/false} /IsStartMenuShortcut: {true/false}  /IsSilentStartUp:{true/false} /JsonFilePath:{Location of the Startup JSON file path}
   </td></tr>
   </table>

7. You can install and configure the Bold BI Enterprise Edition in two ways.

    **a. Configure the application during the installation**

    If you need to configure the Bold BI application during the silent installation itself, you can use the following command.

     <table>
   <tr><td>               
                
        boldbienterpriseedition_5.1.55_0534.exe /Install Silent /InstallPath:C:\Program Files (x86)\Bold BI Enterprise Edition\ /IISPortNo:56561 /IISSiteName:"BoldBIEnterpriseEdition" /IsSetFirewall:TRUE /IsDesktopShortcut:TRUE /IsStartMenuShortcut:TRUE /IsSilentStartUp:True /JsonFilePath: C:\Users\BuildAutomation\Desktop\v2_application_startup.json
   </td></tr>
   </table>

   **Example:**
   ![Run Command with Parameters](/static/assets/faq/images/run-command-with-parameters.png)

   Once the setup installation is completed, the Bold BI application will be configured, and ready to start dashboarding. 

   To configure the application during the installation process, you need to provide the database server information. Download the `v2_application_startup` JSON file and enter all the required inputs. Once you have completed the input, pass the file path to the JsonFilePath parameter.

   Please refer to this [document](/site-administration/api-reference/v2.0/api-reference) to learn more about the application configuration arguments.

   **b. Install the application alone and configure the application using UI**

    If you do not want to configure the application during the silent installation, then set `IsSilentStartUp` to **false** and proceed with the installation

    <table>
   <tr><td>   
          
        boldbienterpriseedition_5.1.55_0534.exe /Install Silent /InstallPath: C:\Program Files (x86) \Bold BI Enterprise Edition\ /IISPortNo:56561 /IISSiteName:"BoldBIEnterpriseEdition" /IsSetFirewall: TRUE /IsDesktopShortcut: TRUE /IsStartMenuShortcut: TRUE /IsSilentStartUp: False
   </td></tr>
   </table>

   **Example:**

   ![Slient Start Up False](/static/assets/faq/images/silen-start-up-false.png)

   Once the setup installation is completed, you can enter the configuration details in the Bold BI application user interface. Refer to this [document](/application-startup/latest/) to learn more about starting the application.