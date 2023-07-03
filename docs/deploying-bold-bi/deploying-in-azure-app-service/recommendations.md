---
layout: post
title: DEV, TEST and PROD Environments – App Service | Bold BI Docs
description: Learn the recommended Azure App service configuration to install the Bold BI application in test, development, and production environments for embedding use.
platform: bold-bi
documentation: ug
---

# Recommended Azure App service configuration to use Bold BI on Microsoft Azure App service

This section will explain the recommended Azure App service configuration to install the Bold BI application. For a complete list of Azure App service plans, refer to this [Windows Azure App service plans](https://azure.microsoft.com/en-in/pricing/details/app-service/windows).

You have to choose the correct Azure App service configuration to better experience with Bold BI.

## Azure App service plans for test, development, and production environments

 The Basic service plan can be used for the test or development environment. Also, you can use the same basic service plan for production environment, if your app receive only low or medium level traffic.

## Recommended specifications for test and development environments

<table>
 <tr>
    <td>
       <span style="font-weight:bold">Component</span>
    </td>
     <td>
        <span style="font-weight:bold">Azure App Service</span>
    </td>
 </tr>
 <tr>
 <td> App Service Plan </td>
 <td> B3 </td>
 </tr>
 <tr>
 <td> CPU </td>
 <td> 4+ vCPU </td>
 </tr>
 <td> Memory </td>
 <td> 7+ GB RAM </td>
 </tr>
 <tr>
 <td> Storage </td>
 <td> 10 GB or larger volume for Bold BI server storage </td>
 </tr>
 </table>

 > **NOTE:**  Also, you can use the above-recommended configuration Azure App service plan for the low traffic production servers.

The Premium service plan can be used in the high traffic and large data processing production environment. For more information about the Premium service plan, refer to this [App service plans](https://azure.microsoft.com/en-in/pricing/details/app-service/windows/).

## Recommended specifications for production environment

<table>
 <tr>
    <td>
       <span style="font-weight:bold">Component</span>
    </td>
     <td>
        <span style="font-weight:bold">Azure App Service</span>
    </td>
 </tr>
 <tr>
 <td> App Service Plan </td>
 <td> P3v2 </td>
 </tr>
 <tr>
 <td> CPU </td>
 <td> 4+ vCPU </td>
 </tr>
 <tr>
 <td> Memory </td>
 <td> 14+ GB RAM </td>
 </tr>
 <tr>
 <td> Storage </td>
 <td> 50 GB or larger volume for Bold BI server storage </td>
 </tr>
 </table>