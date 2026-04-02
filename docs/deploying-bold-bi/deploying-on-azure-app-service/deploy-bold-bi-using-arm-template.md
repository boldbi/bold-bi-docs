---
layout: post
title: Deploying Bold BI app using ARM template | Bold BI Docs
description: Learn about the steps for how to deploy Bold BI application in Azure App service using the ARM template.
platform: bold-bi
documentation: ug
---

# Deploy Bold BI Azure web app using the ARM template

To deploy the Bold BI Azure web app using the ARM template, follow these steps:

1. Log in to the [Azure Portal](https://portal.azure.com).

2. Click on **New** in the left menu.

    ![Create new template](/static/assets/installation-and-deployment/images/create-new-template.png)

3. Search for **Template deployment** in the marketplace and select it.

    ![Choose template deployment](/static/assets/installation-and-deployment/images/choose-template-deployment.png)

4. Click on **create**.

    ![Click create template](/static/assets/installation-and-deployment/images/click-create-template.png)

5. In the **Custom deployment** window, select **Build your own template in the editor**.

    ![Choose own template editor](/static/assets/installation-and-deployment/images/choose-own-template-editor.png)

6. Download the [ARM template](https://raw.githubusercontent.com/boldbi/azure-arm-template/master/armtemplates/latest/BoldBIAppServiceTemplate.json) file.

7. Copy the contents of the template file and replace them in the **Edit template** window. Then **save**.

    ![Edit template window](/static/assets/installation-and-deployment/images/edit-template-window.png)

8. Fill out the form with the following parameters to complete the deployment. Provide values for all fields (especially admin and database details) if you want **auto-deployment mode** — this configures Bold BI fully during deployment (database connection + admin user) without manual startup steps afterward. Licensing can still require manual activation if not provided.

   **Mandatory** (always required)
   - **Subscription** — Choose your Azure subscription.[Learn more](https://blogs.msdn.microsoft.com/arunrakwal/2012/04/09/create-windows-azure-subscription/)
   - **Resource group** — Select or create a resource group to organize your resources.[Learn more](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview#resource-groups)
   - **Region** — Choose the Azure region for deployment.
     Recommended: **East US**
   - **Web App Name** — Enter a unique name for the Bold BI App URL (3-24 characters, lowercase letters and numbers only). If taken, deployment fails — choose another.
   - **App Service Plan Size** — Select the App Service SKU.
     Available values:
     - `P1V3_2Core_8GB_DEV`
     - `P2V3_4Core_16GB_PROD`
     - `P3V3_8Core_32GB_PROD`
   - **Storage Account Name** — Unique name (3-24 characters, lowercase letters and numbers only). Optional for **File storage**, mandatory for **Blob storage**.
   - **Storage Account Type** — Choose the type (e.g., `Standard_LRS`). Optional for **File storage**, mandatory for **Blob storage**.[Learn more](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview)

   **Required for auto-deployment mode** (provide these to enable full automatic configuration of database connection and admin user — without manual steps after deployment)
   - **User Email** — Initial administrator email
   - **User Password** — Admin password  
     (The password must meet the following requirements: at least 6 characters, including 1 uppercase letter, 1 lowercase letter, 1 numeric character, and 1 special character)
   - **Database Server Type** — `mssql`, `postgresql`, `mysql`, or `oracle`
   - **Database Host** — Database server hostname or endpoint
   - **Database User** — Database username 
   - **Database Password** — Database password 

   **Optional / Additional database parameters** (only needed in specific cases)
   - **Database Port** — Database port (optional; defaults based on server type)
   - **Postgres Maintenance Database** — For PostgreSQL DB Servers, this is an optional parameter. The system will use the database name `postgres` by default. If your database server uses a different default database, please provide it here.
   - **Database Name** — Existing database name (if omitted, Bold BI creates `bold_services`)
   - **Database Additional Parameters** — If your database server requires additional connection string parameters, include them here. Connection string parameters can be found in the official document:[MySQL](https://dev.mysql.com/doc/connector-net/en/connector-net-8-0-connection-options.html),[PostgreSQL](https://www.npgsql.org/doc/connection-string-parameters.html),[MS SQL](https://docs.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection.connectionstring),[Oracle](https://docs.oracle.com/en/database/oracle/oracle-database/19/odpnt/ConnectionConnectionString.html)
   - **Use Single Tenant Db** — `true` or `false` (default: `false`)

   **Optional licensing & activation** (not required for deployment; defaults allow trial/manual activation post-deployment)
   - **Unlock Key** — Bold BI license key

   **Optional branding & UI settings** (if not provided, defaults are used)
   - **Site Name** — Organization name (default: *Bold BI Enterprise Dashboards*)
   - **Site Identifier** — URL site identifier (default: *site1*)
   - **Main Logo** — URL for header logo (png, jpg, jpeg, svg)
   - **Login Logo** — URL for login page logo (png, jpg, jpeg, svg)
   - **Email Logo** — URL for email template logo (png, jpg, jpeg, svg)
   - **Fav Icon** — URL for browser favicon (png, jpg, jpeg, svg)
   - **Ai Logo** — URL for AI-related logo (png, jpg, jpeg, svg)
   - **Powered By Logo** — URL for footer "Powered by" logo (png, jpg, jpeg, svg)
   - **Show Powered By Syncfusion** — `true` or `false` (default: `false`)
   - **Show Copyright Info** — `true` or `false` (default: `false`)

   Click the agreement checkbox and click **Review + create** to start the deployment.

9. The deployment of the Bold BI Azure App service (web app) will begin, and you can track the progress of the deployment by looking for a green check mark at each successful stage.

    ![Deployment status check](/static/assets/installation-and-deployment/images/deployment-status-check.png)

10. If the deployment of Bold BI is successfully completed, proceed to Step 12.

11. If deployment fails, check the error details and select the **Redeploy** option to deploy Bold BI again (refer to Step 8 to fill in the details). Ensure successful deployment with Step 9.

    ![Deployment failed](/static/assets/installation-and-deployment/images/deployment-failed.png)

    ![Redeploying on failure](/static/assets/installation-and-deployment/images/redeploying-on-failure.png)

    >**NOTE:** <br>1. When redeploying, ensure that you provide a unique Web App name and Storage Account name. <br> 2. If the failed App Service/Storage account/App Service Plan is still present in the resource group, please remove it before proceeding with redeployment.

12. Click on **Go to resource group**. Then, select **App Service**.

    ![Select resource page](/static/assets/installation-and-deployment/images/select-resource-page.png)

    ![App service hosting](/static/assets/installation-and-deployment/images/app-service-hosting.png)

13. On the overview page, copy the **Default Domain** and paste the URL into your browser. Wait for some time for it to load completely before proceeding with the Bold BI application startup.

    ![Default domain URL](/static/assets/installation-and-deployment/images/default-domain-url.png)

14. An app service plan has been created for the web app, which will default to **Basic – B1**. You can learn more about [app service plans](https://docs.microsoft.com/en-us/azure/app-service/azure-web-sites-web-hosting-plans-in-depth-overview). The Bold BI web app does not support Free or Shared app service plans. Instead, it supports Basic, Standard, and Premium App Service plans in Azure. The Basic plan is the minimum recommended App Service plan for running the application. For improved performance, you can scale up the App Service plan from Basic to Standard or Premium plans. Below, you can find documentation links on how to scale up and scale out the App Service plan.

    [Scale up an app in Azure App Service](https://docs.microsoft.com/en-us/azure/app-service-web/web-sites-scale)

    [Scale out an app in Azure App Service](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/insights-how-to-scale)

## Next step
* [**Install Client libraries**](/deploying-bold-bi/deploying-on-azure-app-service/install-client-libraries/)

* [**Application Startup**](/application-startup/)