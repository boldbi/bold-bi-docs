---
layout: post
title: Upgrading Bold BI in Azure App Service | Bold BI Docs
description: Learn more about how to upgrade Bold BI Azure App to latest version using the Azure Resource Manager template.
platform: bold-bi
documentation: ug
---

# Upgrade to latest version

Follow these below steps to upgrade the Bold BI Azure App service to the latest version.

1. Login to [Azure Portal](https://portal.azure.com) and select the Bold BI Azure App Service in Microsoft Azure Services.

2. In the **Overview** section, click **Stop**.

    ![Stop Bold BI Azure App Service](/static/assets/embedded/setup/images/stopappservice.png)

3. Choose **Deployment Center** in the left panel of the Bold BI Azure App service.

    ![Deployment options](/static/assets/embedded/setup/images/arm-upgrade-deployment-center.png)

4. Once the deployment center is selected, click **Disconnect**. Now the deployment panel will open.

    ![Choose Source](/static/assets/embedded/setup/images/arm-upgrade-disconnect-existing.png)

5. Select the **External** in the source control tab and click **Continue**.

    ![External Repository](/static/assets/embedded/setup/images/arm-upgrade-select-external.png)

6. Then, select the **App Service Kudu build server** and click **Continue**.

    ![Build provider](/static/assets/embedded/setup/images/arm-upgrade-kudu-build-service.png)

7. Now, fill the following details in the **Configure** tab and click **Continue**.

    **Repository** - [URL](https://github.com/boldbi/azure-arm-template.git)

    **Branch** - v3.3.88

    **Repository Type** - Git

    ![Deployment option for External repository](/static/assets/embedded/setup/images/arm-upgrade-choose-repo-and-branch.png)

8. Next click **Finish** option. The **Successfully set up deployment** notification will be shown in the notification blade.

    ![Finish Deployment](/static/assets/embedded/setup/images/arm-upgrade-review-and-finish.png)

    ![Success notification of Deployment option](/static/assets/embedded/setup/images/setup-success.png)

9. Once the set up deployment and the status has changed to Success as shown in the following image, select the **Sync** button in the deployment center blade.

    ![Sync Repository](/static/assets/embedded/setup/images/arm-upgrade-sync.png)

10. Synchronization request submitted notification is shown in the notification blade and synchronization progress is shown in the deployment options blade.

    ![Synchronization Status](/static/assets/embedded/setup/images/arm-upgrade-sync-request-submitted.png)

11. Please wait until synchronization is completed.

12. Once the synchronization is completed, click **Start** option in the **Overview** section to start the Bold BI Azure App service.

    ![Start Bold BI Azure App Service](/static/assets/embedded/setup/images/start-app-service.png)