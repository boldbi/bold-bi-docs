---
layout: post
title: Upgrading Bold BI to latest version in Azure App Service
description: Learn more about how to upgrade Bold BI Azure App to the latest version using the Azure Resource Manager template.
platform: bold-bi
documentation: ug
---

# Upgrade to the latest version

Follow these steps to upgrade the Bold BI Azure App service to the latest version:

> **NOTE:** Upgrading to the latest version does not require a license key. However, our services will retrieve the license in the backend after upgrading to the latest version.

1. Log in to the [Azure Portal](https://portal.azure.com) and select the Bold BI Azure App Service in Microsoft Azure Services.

2. Choose **Advanced Tools** in the left panel of the Bold BI Azure App service and then click **Go**. This will open the **KUDU console**.

     ![Kudu Console options](/static/assets/installation-and-deployment/images/kudu-console-tool.png)

3. In the **KUDU console**, click **Debug Console** and choose **PowerShell**.

     ![Kudu Console poweshell options](/static/assets/installation-and-deployment/images/powershell-option.png)

4. In PowerShell, navigate to the path `C:\home\site\repository\.git`.

     ![Kudu Console repository path](/static/assets/installation-and-deployment/images/powershell-repository-path.png)

5. In the **Overview** section, click **Stop**.

    ![Stop Bold BI Azure App Service](/static/assets/installation-and-deployment/images/stopappservice.png)

6. Go to the deployment center and click **Disconnect**. This will open the deployment option.

    ![Choose Source](/static/assets/installation-and-deployment/images/arm-upgrade-disconnect-existing-v4-1-36.png)

7. Select the **External Git** in the source option.

    ![External Repository](/static/assets/installation-and-deployment/images/arm-upgrade-select-external.png)


8. In the **External Git**, fill out the following information:

    **Repository** - [URL](https://github.com/boldbi/azure-arm-template.git)

    **Branch** - latest

    **Repository Type** - Public

    ![Deployment option for External repository](/static/assets/installation-and-deployment/images/arm-upgrade-choose-repo-and-branch-v4-2-69.png)

9. Next, click **Save**. The **Successfully set up deployment** notification will be shown in the notification blade.

    ![Finish Deployment](/static/assets/installation-and-deployment/images/arm-upgrade-review-and-finish-v4-2-69.png)

    ![Success notification of Deployment option](/static/assets/installation-and-deployment/images/setup-success.png)

10. After completing the deployment setup, click **Sync** in the deployment center blade.

    ![Sync Repository](/static/assets/installation-and-deployment/images/arm-upgrade-sync-v4-2-69.png)

    ![Deployment confirmation](/static/assets/installation-and-deployment/images/redeployment-confirmation-upgrade.png)

11. The synchronization progress will be shown in the deployment options blade.

    ![Synchronization Status](/static/assets/installation-and-deployment/images/arm-upgrade-sync-request-status.png)

12. Please wait until the synchronization is completed.

    ![Synchronization Success](/static/assets/installation-and-deployment/images/arm-upgrade-sync-request-success.png)

13. Then, click **Start** in the **Overview** section to start the Bold BI Azure App service.

    ![Start Bold BI Azure App Service](/static/assets/installation-and-deployment/images/start-app-service.png)

14. > **Breaking Changes:** This step is applicable only for upgrading Azure App Service from version 9.x to latest.
     * In your Web app, navigate to **Settings --> Configuration --> Path Mapping**.
       
       ![Path mapping](/static/assets/installation-and-deployment/images/pathmapping.png)

    * Click on the **New virtual application or directory** option and add the below Physical Path in **Path Mappings** and **Save** the settings.

      |                  Virtual Path                        |                    Physical Path                     |
      |------------------------------------------------------|------------------------------------------------------|
      | /aiservice                                           | site\wwwroot\ai\aiservice                            |

      ![Path mapping](/static/assets/installation-and-deployment/images/pathdetails.png)
      ![Path mapping](/static/assets/installation-and-deployment/images/pathofservice.png)

15. Refer to this guide on [Integrating Bold Data Hub with Bold BI](https://support.boldbi.com/kb/article/18581/integrating-etl-with-bold-bi-or-bold-reports-in-azure-app-service). This article provides step-by-step instructions to ensure a successful integration of Bold Data Hub with Bold BI.
