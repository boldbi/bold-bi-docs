---
layout: post
title: IIS Features to run Bold BI in Windows Server OS | Bold BI
description: Learn what are all the features need to be enabled in IIS to run Bold BI application in Windows Server OS.
platform: bold-bi
documentation: ug
---

# Features to be enabled in IIS to run Bold BI in Windows Server OS
The Bold BI Enterprise Edition can be hosted in both IIS Express and IIS. To run Bold BI in IIS, enable IIS along with its features and roles.

> **NOTE:**  A pre-installed Bold BI Enterprise Edition and IIS configured Azure VM are available [here](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syncfusion.bold-bi-enterprise-multi-tenant).

## Steps to enable the IIS and features that are needed to run the Bold BI Server in Windows Server OS

1. Open `Server Manager` and click on `Manage > Add Roles and Features`. Then, click Next. 

2. Select `Role-based or feature-based installation` and click on `Next`.    

3. Choose `Select a server from the server pool` and select the server in the Server Pool section, and then click `Next`.

4. On `Server Roles`, enable the `Web Server (IIS)` in the Roles section.  

5. Enable the following .NET Framework features on `Features` and then click `Next`.

   > **NOTE:**  You should use Microsoft .NET Framework 4.5 or higher version. Learn more [here](/overview/).

   ![Roles and Features](/static/assets/faq/images/roles-features.png)

6. On the `Web Server Role (IIS)` dialog box, click Next.

7. On the `Select role services` dialog box, verify that the required web server component listed [here](/faq/features-needed-to-enable-in-iis-to-run-bold-bi-in-win-server-os/#required-web-server-components) are enabled. Click `Next`.
   
   ![Roles and Features](/static/assets/faq/images/role-services.png)

8. Verify that your settings are correct and then click `Install`.
    
9. When the installation is complete, click `Close` to exit the wizard.  

## Required web server components

The IIS components listed below meet the minimum requirements to run Bold BI. If other IIS components are enabled, they do not need to be removed. 

<meta charset="utf-8"/>
<table>
  <thead>
    <tr>
    <th scope="col">Section</th>
    <th scope="col">IIS Components</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td rowspan="5">Web Server</td>
        <td>Common HTTP Features
            <br>- Default Document  
            <br>- Directory Browsing  
            <br>- HTTP Errors 
            <br>- Static Content  
        </td>
    </tr>
    <tr>
        <td>Health and Diagnostics 
            <br>- HTTP Logging
        </td>
    </tr>
    <tr>
        <td>Performance Features
            <br>- Static Content Compression</td>
    </tr>
    <tr>
        <td>Security 
            <br>- Request Filtering  
            <br>- Windows Authentication</td>
    </tr>
    <tr>
        <td>Application Development  
            <br>- .NET Extensibility 4.6
            <br>- ASP.NET 4.6
            <br>- ISAPI Extensions  
            <br>- ISAPI Filters</td>
    </tr>
    <tr>
        <td>Management Tools</td>
        <td>IIS Management Console</td>
    </tr>
  </tbody>
</table>

