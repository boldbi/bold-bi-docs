---
layout: post
title: Prerequisites – Deploying BoldBI in Kubernetes Environment
description: Learn about the prerequisites to deploy the Bold BI server application in the Kubernetes environment.
platform: bold-bi
documentation: ug
---

# Deployment Prerequisites

* **Kubernetes Cluster: Kubernetes Version – 1.29+**
    * Amazon Elastic Kubernetes Service (EKS) | Google Kubernetes Engine (GKE) | Microsoft Azure Kubernetes Service (AKS) | Alibaba Cloud Kubernetes (ACK) | Oracle Kubernetes Engine (OKE) |On-Premises Cluster 

* **CLI:**
    * Kubectl (installation required)
    * AWS CLI | Azure CLI | Google Cloud CLI | Oracle CLI | Alibaba Cloud CLI

* **Load Balancer:** NLB(Nginx | Istio) | ALB
* **Package Manager:** Helm
* **Node Type & Configuration:**
    * OS – Ubuntu
    * Minimum Node Count – 2
    * Node Configuration – 2 Core and 8 GB 
    * Node Disk - 20 GB
* **File Storage:**
    * 10 GB or more for the Bold BI server storage in a read write many supported storages. 
    * AWS File Share | Azure File Share (NFS) | GCP File Store | Alibaba File System | Oracle File Storage

* **Web Browser:** Microsoft Edge | Mozilla Firefox | Chrome
* **Database:** PostgreSQL 13.0+ | Microsoft SQL Server 2016+ | MySQL 8.0+ | Oracle Database 19c+