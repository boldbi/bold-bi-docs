---
layout: post
title: Deploy Bold BI and Reports using ARM Template | Bold BI Docs
description: Learn about the steps for how to deploy Bold BI and Reports application in Azure App service using the ARM template.
platform: bold-bi
documentation: ug
---

# Deploy Bold BI and Bold Reports Azure web app using the ARM template

Please follow the below step to create combined Bold BI and Bold Reports Azure web app using the ARM template.

1.	Login to Azure portal: `https://portal.azure.com`.
    
2.	Click on the **Create a resource** in the left menu.
    
    ![Create resources](/static/assets/installation-and-deployment/images/create-resources.png)

3.	Search **Template deployment** in the marketplace and select Template deployment.

    ![Search template](/static/assets/installation-and-deployment/images/search-template-deployment.png)   

4.	Then click on the **create** button.

    ![template-create](/static/assets/installation-and-deployment/images/template-create.png)

5.	Now select **Build your own template in the editor** in the **Custom deployment** window.

    ![build-own-template](/static/assets/installation-and-deployment/images/build-own-template.png)
    
6.	Click to download the [ARM template](https://raw.githubusercontent.com/boldbi/bi_and_reports_azure-arm-template/main/armtemplates/latest/BoldServicesAppServiceTemplate.json) file.

7.	Copy all the contents in the template file and replace them in the **Edit template** window. Then click on the **save** button.

    ![Edit template and save](/static/assets/installation-and-deployment/images/save-template.png)

8.	Fill the form as instructed below to complete the deployment steps.

	**Subscription**: Choose the Azure subscription you have. Learn more about [subscriptions](https://blogs.msdn.microsoft.com/arunrakwal/2012/04/09/create-windows-azure-subscription/).

	**Resource group**: This is a logical group in Azure to group your resources like a web app, storage account, network, etc. Learn more about resource groups [here](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview#resource-groups).
	
    **Location**: Choose the location on which your app to be deployed. “East US” is our recommended location.
	
	**Web App name**: This is the name of the Bold BI and Reports App that you want to have in the URL. As this is going to be the URL, it should be unique globally. The deployment process will get failed if this is present already and you will need to start once again with another name.
    
    **Storage account name**: This is optional if you have chosen File storage in Storage type and mandatory for Blob storage. This also must be unique as that of the Web App name. Learn more about [storage accounts](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview).

	**Storage account type**: This is optional if you have chosen File storage in Storage type and mandatory for Blob storage. Learn more about [storage account types](https://docs.microsoft.com/en-us/azure/storage/blobs/object-replication-overview).

    Click on the **Review and Create** to deploy the Bold BI and Reports web app.
    
    ![Review and  create](/static/assets/installation-and-deployment/images/reviewandcreate.png)

9.	Bold BI and Reports Azure App service(web app) deployment gets started. This may take 5-10 minutes to complete the deployment.

10. We have created an app service plan for the web app, which will be set to **Basic - B1** by default. For the common deployment (BI and Reports), we require a minimum of 2 vCPU and 8 Memory(GB) of memory. Therefore, we kindly request that you scale the app service plan to either Standard or Premium after the deployment. You can find the recommended Azure app service plans for development and production environments in the following link: ([DEV, TEST, and PROD Environments – App Service | Bold BI Docs]( https://help.boldbi.com/deploying-bold-bi/deploying-on-azure-app-service/recommendations/)). You can learn more about [app service plans]( https://docs.microsoft.com/en-us/azure/app-service/azure-web-sites-web-hosting-plans-in-depth-overview). Additionally, you can refer to the documentation links below for instructions on how to scale up and scale out the App Service plan.

    [Scale up an app in Azure App Service](https://docs.microsoft.com/en-us/azure/app-service-web/web-sites-scale)

    [Scale out an app in Azure App Service](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/insights-how-to-scale)

## Next step
* [**Install Client libraries**](/deploying-bold-bi/deploying-on-azure-app-service/install-client-libraries/)

* [**Application Startup**](/application-startup/)