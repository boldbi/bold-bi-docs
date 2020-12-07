---
layout: post
title: IIS Features to run Bold BI in Windows Client OS | Bold BI
description: Learn what are all the features need to be enabled in IIS to run Bold BI application in Windows Client OS.
platform: bold-bi
documentation: ug
---

# Features to be enabled in IIS to run Bold BI in Windows Client OS
Bold BI Enterprise Edition can be hosted in an IIS express and IIS. To run the Bold BI in IIS, enable the IIS along with IIS features and roles.

## Steps to enable the IIS and features that are needed to run the Bold BI Server in Windows Client OS:

1. Open `Control Panel` and click `Programs and Features > Turn Windows features on or off`.  

2. Enable `Internet Information Services`.

   ![Control Panel](/static/assets/embedded/faq/images/windows-features.png)  

3. Expand the `.NET Framework 4.5 Advanced Services` and enable the ASP.NET 4.5 feature.

   > **NOTE:**  You should use Microsoft .NET Framework 4.5 or higher version. Learn more [here](/bold-bi/on-premise/overview#prerequisites).  

   ![Roles and Features](/static/assets/embedded/faq/images/ms-framework.png)

4. Expand the `Internet Information Services` feature and verify that the required IIS component listed [here](/embedded-bi/faq/features-needed-to-enable-in-iis-to-run-bold-bi-in-win-client-os/#required-web-server-components) are selected. Click `OK`.

   ![Roles and Features](/static/assets/embedded/faq/images/iis-features-client.png)

## Required web server components

The IIS components listed below satisfy the minimum requirements to run the Bold BI. If other IIS components are enabled, they do not need to be removed.

<meta charset="utf-8"/>
<table>
  <thead>
    <tr>
      <th scope="col" bgcolor="#416187">Section</th>
      <th scope="col" bgcolor="#416187">IIS Components</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td rowspan="5">World Wide Web Services</td>
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
            <br>- .NET Extensibility 4.8
            <br>- ASP.NET 4.8
            <br>- ISAPI Extensions  
            <br>- ISAPI Filters</td>
    </tr>
    <tr>
        <td>Web Management Tools</td>
        <td>IIS Management Console</td>
    </tr>
  </tbody>
</table>

## See Also

* [What are the features needed to be enabled in IIS to run Bold BI Application in **Windows Server OS**](/embedded-bi/faq/features-needed-to-enable-in-iis-to-run-bold-bi-in-win-server-os/)



  