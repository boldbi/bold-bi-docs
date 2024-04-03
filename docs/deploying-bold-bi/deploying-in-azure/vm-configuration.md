---
layout: post
title: Recommended Azure VM Configuration | Bold BI Embedded Docs
description: Learn the recommended Azure VM configuration to install the Bold BI server in test, development and production environments for embedded use.
platform: bold-bi
documentation: ug
---

# Recommended VM configuration to use Bold BI server on Microsoft Azure

This section outlines the recommended VM configuration for the installation of the Bold BI server on Microsoft Azure. Selecting the correct VM configuration is crucial to experiencing optimal performance with Bold BI. For a comprehensive list of all VM types and sizes, please refer to this link: [Windows Virtual Machine Types](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes).

## VM types for test, development and production environments

Virtual Machines of the General Purpose type are ideally suited for test and development environments, as well as for production environments that process low to medium levels of traffic data. For detailed information regarding the sizes of General Purpose virtual machines, please refer to our comprehensive guide on [General Purpose VM sizes](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-general).

## Recommended specifications for test, development environments

<table>
 <tr>
    <td>
       <span style="font-weight:bold">Component</span>
    </td>
     <td>
        <span style="font-weight:bold">Azure Virtual Machine</span>
    </td>
 </tr>
 <tr>
 <td> Recommended Series </td>
 <td> B, DCv2, Dv2, DSv2, Dv3, DSv3, Dav4, Dasv4 </td>
 </tr>
 <tr>
 <td> CPU </td>
 <td> 4+ vCPU </td>
 </tr>
 <tr>
 <td> Operating System </td>
 <td>  Windows Server OS 2012 R2+ </td>
 </tr>
 <tr>
 <td> Memory </td>
 <td> 16+ GB RAM </td>
 </tr>
 <tr>
 <td> Storage </td>
 <td> 100 GB or larger volume for Bold BI server storage </td>
 </tr>
 </table>

 > **NOTE:**  The above-recommended configuration machine can also be used for low-traffic production servers. 

Optimized type VM is suitable for high traffic and large data processing production environments. For details on Memory Optimized VM sizes, refer to the [Memory Optimized VM sizes section](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-memory).

## Recommended specifications for production environment

<table>
 <tr>
    <td>
       <span style="font-weight:bold">Component</span>
    </td>
     <td>
        <span style="font-weight:bold">Azure Virtual Machine</span>
    </td>
 </tr>
 <tr>
 <td> Recommended Series </td>
 <td> Dv2, DSv2, Ev3, Esv3, Eav4, Easv4, Edv4, Edsv4 </td>
 </tr>
 <tr>
 <td> CPU </td>
 <td> 16+ vCPU </td>
 </tr>
 <tr>
 <td> Operating System </td>
 <td> Windows Server OS 2012 R2+ </td>
 </tr>
 <tr>
 <td> Memory </td>
 <td> 64+ GB RAM </td>
 </tr>
 <tr>
 <td> Storage </td>
 <td> 100 GB or larger volume for Bold BI server storage </td>
 </tr>
 </table>