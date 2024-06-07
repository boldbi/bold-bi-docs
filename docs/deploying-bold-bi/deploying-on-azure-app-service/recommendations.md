---
layout: post
title: DEV, TEST and PROD Environments – App Service | Bold BI Docs
description: Learn the recommended Azure App service configuration to install the Bold BI application in test, development, and production environments for embedding use.
platform: bold-bi
documentation: ug
---

# Recommended Azure App service configuration to use Bold BI on Microsoft Azure App service

This section will explain the recommended Azure App service configuration for installing the Bold BI application. For a complete list of Azure App service plans, refer to the [Windows Azure App service plans](https://azure.microsoft.com/en-in/pricing/details/app-service/windows).

To have a better experience with Bold BI, you need to choose the correct Azure App service configuration.

## Azure App service plans for test, development, and production environments

For test and development environments, the Basic service plan can be used. You can also use the same basic service plan for the production environment if your app receives low or medium-level traffic.

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

 > **NOTE:**  You can also use the above-recommended configuration Azure App service plan for low traffic production servers.

For high traffic and large data processing production environments, the Premium service plan is recommended. For more information about the Premium service plan, refer to the [App service plans](https://azure.microsoft.com/en-in/pricing/details/app-service/windows/).

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
 <td> P3V2, P3V3 </td>
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

 ## Recommended system configuration based on the concurrent users

 This section helps you define your production system configuration based on the number of concurrent users and the size of data.

 <table>
 <tr>
 <td>
 <b>Concurrent Users</b>
 </td>
 <td>
 <b>Data Size</b>
 </td>
 <td>
 <b>Azure App Service Plan</b>
 </td>
 </tr>
 <tr>
 <td>
 Up to 150 users
 </td>
 <td>
 Up to 20 million records
 </td>
 <td>

 Instance count - 1

 Plan - P2V3

 RAM - 16 GB

 Core - 4 vCPU's
 </td>
 </tr>
 <tr>
 <td>
 Up to 350 users
 </td>
 <td>
 Up to 20 million records
 </td>
 <td>

 Instance count - 1

 Plan - P3V3

 RAM - 32 GB

 Core - 8 vCPU's
 </td>
 </tr> 