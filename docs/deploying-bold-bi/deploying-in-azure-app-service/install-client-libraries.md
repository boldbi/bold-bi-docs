---
layout: post
title: Install Client libraries in Azure App Service | Bold BI Docs 
description: Learn more about how to install optional client libraries in Azure App Service deployment to connect with respective SQL database variants of Bold BI.
platform: bold-bi
documentation: ug
---

# Install client libraries 

Bold BI Enterprise Edition utilizes client libraries such as Oracle, MySQL, Snowflake, and MongoDB to establish connections with their respective SQL database variants. To install these client libraries, it is necessary to read and accept the licenses associated with each one.

Please follow the provided steps to proceed with the installation of the client libraries:

1. Open the <b>kudu PowerShell</b> console for Bold BI Azure App service. You can access the Kudu service through the portal by navigating to the <b>Web App dashboard > Advanced Tools > Click on Go</b>. 

  ![Advanced tool - kudu](/static/assets/installation-and-deployment/images/Advancetool.png)

2. Select the <b>PowerShell</b> console.  
  ![Kudu powershell window](/static/assets/installation-and-deployment/images/Kudu-Powershell.png)
 
3. Go to the client library location. 
   ```
   {drive}\home\site\wwwroot\ClientLibraries 
   ```
4. In this location, you will find the client library consent document "consent-to-deploy-client-libraries.txt". Read the client library's <b>LICENSE</b> details and execute the following command to install the client libraries:
   ```
   .\install-optional-libs.ps1 "mongodb,influxdb,snowflake,mysql,oracle,google,clickhouse” 
   ```

   ![client-lib-install-command](/static/assets/installation-and-deployment/images/client-lib-install-command.png)