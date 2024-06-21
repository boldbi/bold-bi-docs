---
layout: post
title: Recommended Azure VM Configuration | Bold BI Embedded Docs
description: Learn the recommended Azure VM configuration to install the Bold BI server in test, development and production environments for embedded use.
platform: bold-bi
documentation: ug
---

# Recommended VM configuration to use Bold BI server on Microsoft Azure

This section will explain the recommended Azure VM configuration to install the Bold BI server. For a complete list of all VM types and sizes, refer this [Windows Virtual Machine Types](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes)

You have to choose the correct VM configuration to experience the performance in Bold BI.

## VM types for test, development and production environments

 General Purpose type VM can be used in the test/development and in low level and medium level traffic data processing production environment. For more information about the sizes of General Purpose virtual machine, see [General Purpose VM sizes](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-general)

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

 > **NOTE:**  We can use the above-recommended configuration machine for the low traffic production servers also.

Memory Optimized type VM can be used in the high traffic and large data processing production environment. For more information about the sizes of Memory Optimized virtual machine, see [Memory Optimized VM sizes](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-memory)

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