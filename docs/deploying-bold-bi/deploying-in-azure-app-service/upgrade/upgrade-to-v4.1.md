---
layout: post
title: Upgrading Bold BI to version 4.1 in Azure App Service
description: Learn more about how to upgrade Bold BI Azure App to version 4.1 using the Azure Resource Manager template.
platform: bold-bi
documentation: ug
---

# Upgrade to v4.1

Follow these steps to upgrade the Bold BI Azure App service to the version 4.1:

1. Log in to [Azure Portal](https://portal.azure.com) and select the Bold BI Azure App Service in Microsoft Azure Services.

2. In the **Overview** section, click **Stop**.

    ![Stop Bold BI Azure App Service](/static/assets/installation-and-deployment/images/stopappservice.png)

3. Choose **Deployment Center** in the left panel of the Bold BI Azure App service.

    ![Deployment center](/static/assets/installation-and-deployment/images/arm-upgrade-deployment-center.png)

4. To upgrade v4.1.36, you need to migrate the v3.3.40 or v3.3.88 UMS blob resources to a new blob structure. For that, click **Sync** in the deployment center blade.

     ![Deployment center utility sync](/static/assets/installation-and-deployment/images/sync-migration-utility.png)

     ![Deployment center utility redeployment](/static/assets/installation-and-deployment/images/redeployment-confirmation-utility.png)

5. Check the deployment status in logs. Once, the deployment is completed successfully, the logs will show a **success** status.

     ![Deployment center utility success](/static/assets/installation-and-deployment/images/utility-files-success.png)

6. After successful deployment, navigate to **WebJobs** in the left panel of the Bold BI Azure App service.

     ![Webjobs options](/static/assets/installation-and-deployment/images/webjobs-option.png)

7. In the **WebJobs**, the migration utility will be available. Click ‘Run’ and wait to complete the migration.

     ![Webjobs run](/static/assets/installation-and-deployment/images/migration-webjob-run.png)

     ![Webjobs success](/static/assets/installation-and-deployment/images/migration-utility-completed-status.png)

8. To ensure migration success, go to the blob container is used in the Bold BI Azure App service and check whether the following **boldservices** Blob is created or not.

     ![Blob migration confirmation](/static/assets/installation-and-deployment/images/migration-confirmation.png)

9. After the migration is completed, choose **Advanced Tools** in the left panel of the Bold BI Azure App service and then click **Go**. It will open the **KUDU console**.

     ![Kudu Console options](/static/assets/installation-and-deployment/images/kudu-console-tool.png)

10. In **KUDU console**, click **Debug Console** and choose **PowerShell**.

     ![Kudu Console poweshell options](/static/assets/installation-and-deployment/images/powershell-option.png)

11. In PowerShell, navigate to the path `C:\home\site\repository\.git`.

     ![Kudu Console repository path](/static/assets/installation-and-deployment/images/powershell-repository-path.png)

12. Run the git command `git remote rm origin`.

     ![Git command](/static/assets/installation-and-deployment/images/remove-origin-command.png)

13. After running the command, go to the deployment center and click **Disconnect**. Now, the deployment option will open.

    ![Choose Source](/static/assets/installation-and-deployment/images/arm-upgrade-disconnect-existing-v3-3-88.png)

14. Select the **External Git** in the source option.

    ![External Repository](/static/assets/installation-and-deployment/images/arm-upgrade-select-external.png)


15. Now, in the **External Git**, fill out the following information:

    **Repository** - [URL](https://github.com/boldbi/azure-arm-template.git)

    **Branch** - v4.1.36

    **Repository Type** - Public

    ![Deployment option for External repository](/static/assets/installation-and-deployment/images/arm-upgrade-choose-repo-and-branch-v4-1-36.png)

16. Next, click **Save**. The **Successfully set up deployment** notification will be shown in the notification blade.

    ![Finish Deployment](/static/assets/installation-and-deployment/images/arm-upgrade-review-and-finish-v4-1-36.png)

    ![Success notification of Deployment option](/static/assets/installation-and-deployment/images/setup-success.png)

17. After completing the deployment setup, click **Sync** in the deployment center blade.

    ![Sync Repository](/static/assets/installation-and-deployment/images/arm-upgrade-sync-v4-1-36.png)

    ![Deployment confirmation](/static/assets/installation-and-deployment/images/redeployment-confirmation-upgrade.png)

18. Synchronization progress is shown in the deployment options blade.

    ![Synchronization Status](/static/assets/installation-and-deployment/images/arm-upgrade-sync-request-status.png)

19. Please wait until synchronization is completed.

    ![Synchronization Success](/static/assets/installation-and-deployment/images/arm-upgrade-sync-request-success.png)

20. Once the synchronization is completed, **Save** the below configuration settings.
    * Add the following application settings key.
        <table>
        <tr>
         <th>Key</th>
         <th>Value</th>
        </tr>

        <tr>
        <td>WEBSITE_LOAD_USER_PROFILE</td>
        <td>1</td>
        </tr>
        </table>

    ![Application Settings](/static/assets/installation-and-deployment/images/application-settings.png)
    * Change the below value in General Settings.
        <table>
        <tr>
         <th>Settings</th>
         <th>Value</th>
        </tr>

        <tr>
        <td>.NET version</td>
        <td>.NET Core(3.1,2.1)</td>
        </tr>
        </table>

    ![General Settings](/static/assets/installation-and-deployment/images/general-settings.png)
    * Change Physical Path in Path Mappings
        <table>
        <tr>
         <th>Virtual Path </th>
         <th>Physical Path (v3.3.40, v3.3.88)</th>
         <th>Physical Path (v4.1.36)</th>
        </tr>

        <tr>
        <td>/</td>
        <td>site\wwwroot\IDP</td>
        <td>site\wwwroot\idp\web</td>
        </tr>

        <tr>
        <td>/bi</td>
        <td>site\wwwroot\Dashboard Server</td>
        <td>site\wwwroot\bi\web</td>
        </tr>

        <tr>
        <td>/bi/api</td>
        <td>site\wwwroot\Dashboard Server\api</td>
        <td>site\wwwroot\bi\api</td>
        </tr>

        <tr>
        <td>/bi/jobs</td>
        <td>site\wwwroot\Dashboard Server\jobs</td>
        <td>site\wwwroot\bi\jobs</td>
        </tr>

        <tr>
        <td>/bi/designer</td>
        <td>site\wwwroot\Dashboard Designer</td>
        <td>site\wwwroot\bi\dataservice</td>
        </tr>
        </table>

    ![Path Mappings](/static/assets/installation-and-deployment/images/path-mappings.png)


21. Then, click **Start** in the **Overview** section to start the Bold BI Azure App service.

    ![Start Bold BI Azure App Service](/static/assets/installation-and-deployment/images/start-app-service.png)