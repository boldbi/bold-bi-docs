---
layout: post
title: how to add custom theme in Azure app service | Bold BI Docs
description: This page summarizes how to add custom theme into Azure app service deployment location by creating a new Custom Theme file in JSON format for Bold BI apps. 
platform: bold-bi
documentation: ug
---

# How to add custom theme into Azure app service deployment location

Follow these steps to add a custom theme in the Azure app service deployment location:

1. Log in to your [Azure portal](https://portal.azure.com/#home) account and navigate to the created Azure app service resources. For example, we have created an app service named **azurearmsite**

    ![Azure App Service Page](/static/assets/faq/images/azure-app-service-page.png)

2. Select the required app service from the list of resources. Once the app service page is loaded, search and select the **Advanced Tools** option and click **Go**.

    ![Select Advanced Tools option](/static/assets/faq/images/select-advanced-tools-option.png)    

3. From the new page, select the option **CMD** from the **Debug console** dropdown.

    ![Select CMD option](/static/assets/faq/images/select-cmd-option.png)  

4. Page like below will be loaded up.

    ![Debug console page](/static/assets/faq/images/debug-console-page.png)  

5. Go to the dashboard theme location `site/wwwroot/bi/dataservice/dashboardthemes`

    ![Dashboard Themes page](/static/assets/faq/images/dashboard-themes-page.png) 

6. **Download** any default theme files from the above-highlighted path and modify theme property values as per your requirement and **Save** the modified theme file.

7. Select and hold the saved custom theme file, drag, & drop it to the `dashboardthemes` location like below.

    ![Drag and Drop Saved Theme File](/static/assets/faq/images/drad-and-drop-saved-theme-file.png) 

8. Wait till the file is uploaded to the `dashboardthemes` folder.

    ![New Theme File added](/static/assets/faq/images/new-theme-file-added.png)

9. Refresh the browser page of the Bold BI site and open the theme drop-down in a banner. Now, you can see that added custom theme file name is listed in it.

    ![Theme Drop down](/static/assets/faq/images/theme-drop-down.png)