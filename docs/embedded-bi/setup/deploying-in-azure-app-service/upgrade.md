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

    ![Deployment center](/static/assets/embedded/setup/images/arm-upgrade-deployment-center.png)

4. To upgrade v4.1.36, you need to migrate the v3.3.40 or v3.3.88 UMS blob resources to a new blob structure. For that, click **Sync** in the deployment center blade.

     ![Deployment center utility sync](/static/assets/embedded/setup/images/sync-migration-utility.png)

     ![Deployment center utility redeployment](/static/assets/embedded/setup/images/redeployment-confirmation-utility.png)

5. Check the deployment status in logs. Once, the deployment is completed successfully, the logs will show a **success** status.

     ![Deployment center utility success](/static/assets/embedded/setup/images/utility-files-success.png)

6. After successful deployment, navigate to **WebJobs** in the left panel of the Bold BI Azure App service.

     ![Webjobs options](/static/assets/embedded/setup/images/webjobs-option.png)

7. In the **WebJobs**, the migration utility will be available. Click ‘Run’ and wait to complete the migration.

     ![Webjobs run](/static/assets/embedded/setup/images/migration-webjob-run.png)

     ![Webjobs success](/static/assets/embedded/setup/images/migration-utility-completed-status.png)

8. To ensure migration success, go to the blob container is used in the Bold BI Azure App service and check whether the following **boldservices** Blob is created or not.

     ![Blob migration confirmation](/static/assets/embedded/setup/images/migration-confirmation.png)

9. After the migration is completed, choose **Advanced Tools** in the left panel of the Bold BI Azure App service and click **Go**. It will open **KUDU console**.

     ![Kudu Console options](/static/assets/embedded/setup/images/kudu-console-tool.png)

10. In **KUDU console**, click **Debug Console** and choose **PowerShell**.

     ![Kudu Console poweshell options](/static/assets/embedded/setup/images/powershell-option.png)

11. In PowerShell, navigate to the path `C:\home\site\repository\.git`.

     ![Kudu Console repository path](/static/assets/embedded/setup/images/powershell-repository-path.png)

12. Run the git command `git remote rm origin`.

     ![Git command](/static/assets/embedded/setup/images/remove-origin-command.png)

13. After running the command, go to the deployment center, click **Disconnect**. Now, the deployment option will open.

    ![Choose Source](/static/assets/embedded/setup/images/arm-upgrade-disconnect-existing.png)

14. Select the **External Git** in the source option.

    ![External Repository](/static/assets/embedded/setup/images/arm-upgrade-select-external.png)


15. Now, in the **External Git**, fill out the following information.

    **Repository** - [URL](https://github.com/boldbi/azure-arm-template.git)

    **Branch** - v4.1.36

    **Repository Type** - Public

    ![Deployment option for External repository](/static/assets/embedded/setup/images/arm-upgrade-choose-repo-and-branch.png)

16. Next, click the **Save** option. The **Successfully set up deployment** notification will be shown in the notification blade.

    ![Finish Deployment](/static/assets/embedded/setup/images/arm-upgrade-review-and-finish.png)

    ![Success notification of Deployment option](/static/assets/embedded/setup/images/setup-success.png)

17. After completing the deployment setup, click **Sync** in the deployment center blade.

    ![Sync Repository](/static/assets/embedded/setup/images/arm-upgrade-sync.png)

    ![Deployment confirmation](/static/assets/embedded/setup/images/redeployment-confirmation-upgrade.png)

18. Synchronization progress is shown in the deployment options blade.

    ![Synchronization Status](/static/assets/embedded/setup/images/arm-upgrade-sync-request-status.png)

19. Please wait until synchronization is completed.

    ![Synchronization Success](/static/assets/embedded/setup/images/arm-upgrade-sync-request-success.png)

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

    ![Application Settings](/static/assets/embedded/setup/images/application-settings.png)
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

    ![General Settings](/static/assets/embedded/setup/images/general-settings.png)
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

    ![Path Mappings](/static/assets/embedded/setup/images/path-mappings.png)


21. Then, click **Start** in the **Overview** section to start the Bold BI Azure App service.

    ![Start Bold BI Azure App Service](/static/assets/embedded/setup/images/start-app-service.png)