---
layout: post
title: How to deploy Bold BI on Windows Server manually | Bold BI Docs
description: Learn how to deploy or install Bold BI on a Windows Server machine in IIS manager without using the installer and run the Bold BI application.
canonical: "/faq/Change-the-user-after-installing-Bold-BI-on-Linux/"
platform: bold-bi
documentation: ug
---

# How to install Bold BI on a Windows Server machine without using the installer? 

## Prerequisites

1. [Software and Hardware requirements](/deploying-bold-bi/deploying-on-windows/prerequisites-windows/#software-requirements)  

2. [Features needed to be enabled in IIS](/faq/features-needed-to-enable-in-iis-to-run-bold-bi-in-win-server-os/)

3. [.Net Windows Hosting Bundle](https://download.visualstudio.microsoft.com/download/pr/ff658e5a-c017-4a63-9ffe-e53865963848/15875eef1f0b8e25974846e4a4518135/dotnet-hosting-3.1.3-win.exe
)

## Follow the below steps to deploy Bold BI on a Windows server machine without using the installer.

1. Download the Bold BI deployment file [here](https://s3.amazonaws.com/files2.syncfusion.com/Installs/BoldBI/24-05-2022/BoldServices.zip) or you can also obtain deployment files from another machine where you are permitted to [install.exe](https://www.boldbi.com/account#windows) from <Installed Drive\BoldServices> location.

    > **NOTE:** By default, Bold BI is deployed in the "C:\BoldServices" location for Windows. 

2. Extract the downloaded zip file and move the files to the deployment drive. Then, follow these steps to install Bold BI.
    
    1. Right-click the `Application Pools` and select `Add Application Pool`.

        ![Add Application Pool](/static/assets/faq/images/add-application-pool.png)

    2. Name the application pool and then click `OK`.

        ![Add Application Pool](/static/assets/faq/images/add-app-pool.png#width=55%)

    3. Right-click the newly created application pool and select the `Advanced Settings` option.

        ![Application Pool Advanced Settings](/static/assets/faq/images/application-pool-advanced-settings.png#width=55%)

    4. Change the application pool type to `localSystem` as shown in the following image.

        ![Applicaion Pool Local System](/static/assets/faq/images/application-pool-local-system.png#width=55%)

        Repeat the same procedure for creating application pools for the following Bold BI applications.

        *	BoldIDWeb
        *	BoldBIApi
        *	BoldBIWeb
        *	BoldBIDesigner
        *	BoldBIJob
        *	BoldIDApi
        *	BoldUMS
        *	BoldWinAuth

         Here, I am displaying all of the created application pools.
    
        ![created](/static/assets/faq/images/created-application-pools.png#width=55%)

    5. Right-click the site then click Add Website and fill in the following details.

        * **Alias name** : Enter the name that you would like to use as an alias for the domain.

        * **Application pool** : Application pools are logical groupings of web applications that will execute in a common process.

        * **Physical path** : In the Physical path box, click `Browse` to navigate the file system and locate the IDP - Web from the Bold BI extracted location.

        ![create-site](/static/assets/faq/images/create-site.png#width=150%)
        
        After clicking `OK` you will be able to see the site and its dependencies as shown below.

        ![created-site](/static/assets/faq/images/created-site.png#width=55%)

    6. Add services as an application under the created site. Right-click on the site name and select `Add Application`, then enter the details as shown in the following.

        ![create-application](/static/assets/faq/images/create-application.png)

        Repeat the same procedure for the applications of Bold BI as listed in the following table.
    
        | Application Pool    | Under Application    | Alias Name of the application   |           Physical Path  |
		|-------------------   |-----------------------     |------------------|-------------------------------               |
		|	BoldIDApi		|	BoldBIEnterpriseEdition	|	api						|	**`{Extracted Location}`**\idp\api						|
		|	BoldBIWeb		|	BoldBIEnterpriseEdition	|	bi						|	**`{Extracted Location}`**\bi\web						|
		|	BoldBIApi		|	bi						|	api						|	**`{Extracted Location}`**\bi\api						|
		|	BoldBIDesigner	|	bi						|	designer				|	**`{Extracted Location}`**\bi\dataservice				|
		|	BoldBIJob		|	bi						|	jobs					|	**`{Extracted Location}`**\bi\jobs						|
		|	BoldUMS			|	BoldBIEnterpriseEdition	|	ums						|	**`{Extracted Location}`**\idp\ums						|
		|	BoldWinAuth		|	BoldBIEnterpriseEdition	|	windowsauthentication	|	**`{Extracted Location}`**\idp\windowsauthentication	|

    7. Ensure that the `BI` application has sub-applications, as shown in the following image.
    
        ![bi-apps-ensure](/static/assets/faq/images/bi-app-ensure.png#width=55%)

    8. Finally, the application structure has been successfully created, as shown in the following image.
       
        ![final-application](/static/assets/faq/images/final-application.png#width=55%)
		
	9. Restart the site and access it with the specified port number in any browser.
	
		Example: http://localhost: **mentioned-port-number**

        
    



