---
layout: post
title: System Configuration For Kubernetes| Bold BI Documentation.
description: Read this guide to know system configuration based on users count and data size for Deploying Bold BI in Kubernetes.
platform: bold-bi
documentation: ug
---

# Recommended System Configuration
 
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
 <b>Node Configuration</b>
 </td>
 <td>
 <b>Deployment Configuration</b>
 </td>
 </tr>
 <tr>
 <td>
 Up to 1000 users
 </td>
 <td>
 Up to 20 million records
 </td>
 <td>

 Node Count - 4

 RAM - 16 GB

 Core - 4 vCPU's
 </td>
 <td>

 For bi-dataservice , bi-web and bi-api Deployments:

 Requested CPU - (1 vCPU)
  
 Requested Memory - (4 GB)
  
 Minimum Replicas - 2
  
 For Other Deployments: 
 
 Requested CPU - (0.5 vCPU)
  
 Requested Memory - (2 GB)
  
 Minimum Replicas - 1
 </td>
 </tr>  
 <tr>
 <td>
 Up to 2000 users
 </td>
 <td>
 Up to 20 million records
 </td>
 <td>

 Node Count - 3

 RAM - 32 GB

 Core - 8 vCPU's
 </td>
 <td>

 For bi-dataservice , bi-web and bi-api Deployments:

 Requested CPU - (1 vCPU)
  
 Requested Memory - (4 GB)
  
 Minimum Replicas - 2
  
 For Other Deployments: 
 
 Requested CPU - (0.5 vCPU)
  
 Requested Memory - (2 GB)
  
 Minimum Replicas - 1
 </tr>