---
layout: post
title: Upgrading Bold BI to latest version in Azure App Service
description: Learn more about how to upgrade Bold BI Azure App to the latest version using the Azure Resource Manager template.
platform: bold-bi
documentation: ug
---

# Upgrade to the latest version

Follow these steps to upgrade the Bold BI Azure App service to the latest version:

> **NOTE:** Upgrading to the latest version does not require a license key. On the other hand, our services will retrieve the license in the backend after upgrading to the latest version.

1. Log in to [Azure Portal](https://portal.azure.com) and select the Bold BI Azure App Service in Microsoft Azure Services.

2. Choose **Advanced Tools** in the left panel of the Bold BI Azure App service and then click **Go**. It will open the **KUDU console**.

     ![Kudu Console options](/static/assets/embedded/setup/images/kudu-console-tool.png)

3. In **KUDU console**, click **Debug Console** and choose **PowerShell**.

     ![Kudu Console poweshell options](/static/assets/embedded/setup/images/powershell-option.png)

4. In PowerShell, navigate to the path `C:\home\site\repository\.git`.

     ![Kudu Console repository path](/static/assets/embedded/setup/images/powershell-repository-path.png)

5. In the **Overview** section, click **Stop**.

    ![Stop Bold BI Azure App Service](/static/assets/embedded/setup/images/stopappservice.png)

6. Go to the deployment center and click **Disconnect**. Now, the deployment option will open.

    ![Choose Source](/static/assets/embedded/setup/images/arm-upgrade-disconnect-existing-v4-1-36.png)

7. Select the **External Git** in the source option.

    ![External Repository](/static/assets/embedded/setup/images/arm-upgrade-select-external.png)


8. Now, in the **External Git**, fill out the following information:

    **Repository** - [URL](https://github.com/boldbi/azure-arm-template.git)

    **Branch** - latest

    **Repository Type** - Public

    ![Deployment option for External repository](/static/assets/embedded/setup/images/arm-upgrade-choose-repo-and-branch-v4-2-69.png)

9. Next, click **Save**. The **Successfully set up deployment** notification will be shown in the notification blade.

    ![Finish Deployment](/static/assets/embedded/setup/images/arm-upgrade-review-and-finish-v4-2-69.png)

    ![Success notification of Deployment option](/static/assets/embedded/setup/images/setup-success.png)

10. After completing the deployment setup, click **Sync** in the deployment center blade.

    ![Sync Repository](/static/assets/embedded/setup/images/arm-upgrade-sync-v4-2-69.png)

    ![Deployment confirmation](/static/assets/embedded/setup/images/redeployment-confirmation-upgrade.png)

11. Synchronization progress is shown in the deployment options blade.

    ![Synchronization Status](/static/assets/embedded/setup/images/arm-upgrade-sync-request-status.png)

12. Please wait until synchronization is completed.

    ![Synchronization Success](/static/assets/embedded/setup/images/arm-upgrade-sync-request-success.png)

13. Then, click **Start** in the **Overview** section to start the Bold BI Azure App service.

    ![Start Bold BI Azure App Service](/static/assets/embedded/setup/images/start-app-service.png)
