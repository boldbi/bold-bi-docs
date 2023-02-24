---
layout: post
title: Install Client libraries in Azure App Service | Bold BI Docs 
description: Learn more about how to install optional client libraries in Azure App Service deployment to connect with respective SQL database variants of Bold BI.
platform: bold-bi
documentation: ug
---

# Install client libraries 

Bold BI Enterprise Edition uses client libraries such as Oracle, MySQL, Snowflake, and MongoDB to connect with their respective SQL database variants. You need to read and accept client's library licenses to install client's libraries.

Follow the given steps to install the client's libraries:

1. Open <b>kudu PowerShell</b> console for Bold BI Azure App service. You can access the Kudu service through the portal by navigating to the <b>Web App dashboard > Advanced Tools > Click on Go</b>. 
  ![Advanced tool - kudu](/static/assets/embedded/setup/images/Advancetool.png)


2. Select<b> PowerShell</b> console.  
  ![Kudu powershell window](/static/assets/embedded/setup/images/Kudu-Powershell.png)
 
 
3. Go to client library location. 
   ```
   {drive}\home\site\wwwroot\ClientLibraries 
   ```
4. Here, you can see the client library consent document consent-to-deploy-client-libraries.txt. Read the client library's <b>LICENSE</b> details and execute the following command to install client libraries:
   ```
   .\install-optional-libs.ps1 “mongodb,influxdb,snowflake,mysql,oracle,google,clickhouse” 
   ```

   ![client-lib-install-command](/static/assets/embedded/setup/images/client-lib-install-command.png)

