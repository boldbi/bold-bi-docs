---
layout: post
title: Deployment on Docker Compose | Bold BI Documentation
description: Learn how to deploy Bold BI on Docker Compose. Docker Compose is a tool for defining and running multi-container Docker applications.
platform: bold-bi
documentation: ug
---

# Bold BI in Docker 

Bold BI supports both single-container and multi-container(docker-compose) deployment in Docker. Docker deployment allows you to build, test, and deploy applications quickly.

## Deployment Prerequisites

The following hardware and software requirements are necessary to run the Bold BI application on docker container.

### Hardware requirements

* Operating System: You can use the Bold BI Docker on the following operating systems: 
  * Windows
  * Ubuntu 20.04 LTS
  * Cent OS 7
  * Mac
* CPU: 2-core.
* Memory: 4 GB RAM.
* Disk Space: 8 GB or more.

### Software requirements

* Database: Microsoft SQL Server 2012+ | PostgreSQL | MySQL
* Application: Docker
* Web Browser: Microsoft Edge, Mozilla Firefox, and Chrome

## How to deploy Bold BI in Docker

Please follow the [link](https://github.com/boldbi/boldbi-docker) for deploy Bold BI on `Docker` and `Docker-compose` environment.

## Recommended System Configuration
 
This section helps you to define your production system configuration based on users count and data size.
 
 <table>
 <tr>
 <td>
 <b>Concurrent Users</b>
 </td>
 <td>
 <b>Data Size</b>
 </td>
 <td>
 <b>System  Configuration</b>
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

RAM - 64 GB

Core - 16 vCPU's  

Disk Size - 1024 GB SSD
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

RAM - 192 GB

Core - 24 vCPU's  

Disk Size - 1024 GB SSD
 </td>
 </tr>  
 
