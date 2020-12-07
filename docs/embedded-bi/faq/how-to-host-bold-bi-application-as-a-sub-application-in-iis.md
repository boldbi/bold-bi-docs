---
layout: post
title: Hosting Bold BI as sub-application in IIS | Bold BI Docs
description: Learn how to host Bold BI as sub-application in IIS and configure Bold BI to run as sub-application in your server.
platform: bold-bi
documentation: ug
---

# How to host Bold BI Application as a Sub Application in IIS

Bold BI Application can be hosted as sub application in IIS by following the below steps.

## Steps to host Bold BI as Sub Application inside IIS

The following services are needed to sub-host the Bold BI application:
  
  * IDP
  * Dashboard server
  * Dashboard Designer

Refer the following table.
<table>
<th>Location</th>
<th>Application</th>
<th>Under Sub Application</th>
<tr>
<td>C:\Bold BI\IDP</td>
<td>sub-app</td>
<td>-</td>
</tr>
<tr>
<td>C:\Bold BI\Dashboard Server</td>
<td>bi</td>
<td>sub-app</td>
</tr>
<tr>
<td>C:\Bold BI\Dashboard Designer</td>
<td>designer</td>
<td>bi</td>
</tr>
</table>

1. Right-click the website hosted in IIS and choose `Add Application` as shown in the following image.

   ![Add new Application](/static/assets/embedded/faq/images/add-new-application.png)

2. Fill the following details and click `Ok` as shown in the below image.

   * **Alias name** - Enter the name that you wish to be an alias for the domain.

   * **Application pool** - Application Pools are logical groupings of web applications that will execute in a common process.

   * **Physical path** - In the Physical path box, click the browse button to navigate the file system to find the IDP from Bold BI deployed location.  

    ![Saved new Application](/static/assets/embedded/faq/images/new-application-saved.png)	

> **NOTE:**  `Alias` name should be lowercase.

3. The following folders to be converted as an application:

   * API
   * UMS
   * Windows Authentication

   Right-click the folder and choose `Convert to Application` as shown in the following image.

   ![Convert to Application](/static/assets/embedded/faq/images/convert-to-application.png)

4. Now, add a `Dashboard Server` application inside it as shown in the following image.

   ![Dashboard Server Site](/static/assets/embedded/faq/images/dashboard-server-site.png)

5. The following folders to be converted as an application:

    * API
    * Jobs

6. Add a `Dashboard Designer` application inside the `bi` application as shown in the following image.

   ![Dashboard Designer Site](/static/assets/embedded/faq/images/designer-site.png)

7. Finally, sub-application structure are created successfully as shown in the following image.  

   ![final-structure](/static/assets/embedded/faq/images/final-sub-application.png)

## Configure Bold BI to run as the sub-application

Need to change this sub-application URL in the following mentioned file location. 

<table>
<th>File Location</th>
<th>Property</th>
<th>Values</th>
<tr>
<td>C:\Bold BI\IDP\ums\Configuration\bold bi</td>
<td>InternalAppBIUrl</td>
<td>{sub application URL}/bi</td>
</tr>
<tr>
<td>C:\Bold BI\Dashboard Server\Configuration</td>
<td>InternalAppIdpUrl</td>
<td>{sub application URL}</td>
</tr>
<tr>
<td></td>
<td>InternalAppDataServiceUrl</td>
<td>{sub application URL}/bi/designer</td>
</tr>
</table>  

Refer the following images:

![idp-config-file](/static/assets/embedded/faq/images/idp-config-file.png)
 
![server-config-file](/static/assets/embedded/faq/images/server-config-file.png)

> **IMPORTANT:**  Restart your site once all the above steps are completed.
