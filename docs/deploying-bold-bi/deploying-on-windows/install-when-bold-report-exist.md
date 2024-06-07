---
layout: post
title: Installing Bold BI Over Bold Reports on Windows | Bold BI Docs
description:  Learn how to install Bold BI on top when Bold Reports is installed already on the Windows environment.
platform: bold-bi
documentation: ug
---

# Install Bold BI when Bold Reports exists

This section explains how to install and deploy Bold BI Enterprise Edition when Bold Reports is already installed on the same machine.

## Installation

This topic explains the steps required to install Bold BI Enterprise:

1. Run the Bold BI Enterprise Installer. 
    
    ![Installer Prompt](/static/assets/installation-and-deployment/images/boldbi-enterprise-installer.png)

2. You can check the License Agreement of the Bold BI Enterprise edition by clicking the `License Terms and Conditions` and clicking `Next`.
    
    ![Installation Prompt](/static/assets/installation-and-deployment/images/installation-prompt.png) 

3. Then a prompt will appear to proceed whether you are going to use the existing Bold ID for Bold BI Enterprise Edition.
    
    ![Bold ID prompt](/static/assets/installation-and-deployment/images/boldid-prompt.png)
    
    If you select `No` to proceed the installation without common login, then Bold BI Enterprise installation will be cancelled.
    
    ![Cancel prompt](/static/assets/installation-and-deployment/images/canceled-prompt.png)
    
    If you select `Yes` to proceed with the installation using a common login for both Bold Reports and Bold BI products, the installer will automatically detect the existing Bold BI hosting details and display them in the following web hosting type. It cannot be modified, so simply verify the details and click `Next`.
    
    ![Installation IIS](/static/assets/installation-and-deployment/images/installation-IIS.png)
    
    > **NOTE:** Bold BI will be installed as a sub-application within the existing Bold Report Site, which is hosted on IIS. The following changes were made on IIS/IIS Express after using the common Bold ID. Normally, Bold Reports is hosted with the site name as `BoldReports_EnterpriseReporting` in IIS, but after using the common login (Bold ID), the site name has been changed to `BoldAppsEnterpriseEdition`. Additionally, Bold BI will be hosted as a sub-app called `bi` under the `BoldAppsEnterpriseEdition` site.
    
    ![IIS for both Reports and Dashboard](/static/assets/installation-and-deployment/images/iis-reports-bi.png) 
    
    > **NOTE:** Bold ID is the common identity provider application in our Bold products that can be used to Single Sign-On (SSO) to both Bold Reports and Bold BI.

4. Then `Deploy Chromium packages` prompt will open. Chromium packages are necessary to enable image and PDF export functionalities in dashboards, widgets, and schedules from Bold BI. Without these packages, the image and PDF export options will be disabled. Agree to `Download Chromium Packages` and click `Next`.
    
    ![Installation Chromium Packages](/static/assets/installation-and-deployment/images/installation-chromium-packages.png)
   
    > **NOTE:** If you encounter any issues with your internet connection or lack one, deselect the Chromium Packages download option and proceed with the installation. For manual installation of the Chromium Packages, refer to [this guide](/faq/how-to-install-chromium-packages-manually/).

5. Then, Client libraries prompt will open. Read and accept the license to ship the selected client libraries and click INSTALL.
   
    ![Installation ClientLibraries](/static/assets/installation-and-deployment/images/installation-clientlibraries.png)
   
    > **IMPORTANT:** Bold BI Enterprise edition uses client libraries such as Oracle, PostgreSQL, MySQL, and MongoDB to connect with their respective SQL database variants. Check the license of each library to give consent for installation. Only the selected client libraries installed.

6. Once the installation is complete, you can launch the application by clicking `Launch Application` and set up your Bold BI site.
    
    ![Launch Application](/static/assets/installation-and-deployment/images/launch-application.png)

7. It will open in your browser. Login with your username and password which is already registered on Bold Reports.
   
    ![Login Page](/static/assets/installation-and-deployment/images/login-page.png)

8. After logging in, this page will open. Click on your profile and select `Manage sites (Admin access)`.
   
    ![Manage sites (Admin access)](/static/assets/installation-and-deployment/images/ums-report.png)

9. The following page opens. Go to `Settings > Manage License > Enterprise BI`. Then click `Login to activate account` to register on the site.
    
    ![Login to activate account](/static/assets/installation-and-deployment/images/ums-server.png)

10. After logging in, your subscription details will be displayed. Now you are ready to use Bold BI Application.
    
    ![Subcription Details](/static/assets/installation-and-deployment/images/subscription-details.png)

11. You have to manually create the site for Bold BI from the site management page by opening the URL as follows:

    `http://{hostname}/ums/sites?action=create-new-site`

    Please set up the Bold BI site by following the steps given to create a [new site](/multi-tenancy/create-new-site/).