---
layout: post
title: Installation of Bold BI on Kubernetes | Bold BI Documentation
description: Learn more about the installation and deployment of the Bold BI application in the Kubernetes environment.
platform: bold-bi
documentation: ug
---

# Bold BI on Kubernetes

Multi-node deployment has been achieved in Bold BI using Kubernetes, which provides high availability, scalability, and auto-healing. The following diagram illustrates the Bold BI container architecture that runs in a Kubernetes cluster.
  
  ![boldbi architectural diagram kubernetes](/static/assets/installation-and-deployment/images/architecture-diagram-k8s.png)

A) The **user** sends a request to the public endpoint **(Ingress Controller)** of the cluster.

B) The **Ingress Controller** validates the request and forwards it to the respective application services. This ingress controller also acts as a load balancer and distributes the incoming traffic across the application services in the cluster.

C) The Bold BI application resource data (App Data) is stored in **Persistent Volume**. PV is used to share application information between app instances during scaling or pod restart.

D) The Bold BI application metadata information is saved in the **Database**. While you can run your own database inside the Kubernetes cluster, it is recommended to use a managed database service for easier configuration and built-in backups and scaling.

## Deployments and their uses

The table below shows the Bold BI deployments and their usage:

|Name of the deployment | Usage of the deployment|
|-------------------|-----------------------|
| bi-api-deployment | Provides the Application Programming Interface (API) to configure Bold BI functionality by calling the REST API.|
| bi-web-deployment | Provides the Application User Interface for all Bold BI functionality where the user will log in to Bold BI from the browser and design and view the dashboard. |
| bi-dataservice-deployment| Takes care of the rendering of the dashboard - Communicates with the data servers through query and returns the results to the widgets configured in the dashboard. |
| bi-job-deployment | Takes care of scheduled dashboard export, data refresh, windows Ad, Azure AD, and database user synchronization. |
| id-api-deployment | Provides REST API for managing tenants and users, and for communicating between BI and Reports applications. |
| id-web-deployment | Acts as an Identity Provider for the Bold BI and Bold Reports applications.|
| id-ums-deployment | Provides a user interface for managing users, tenants, and rebranding applications. |

## How to achieve high availability in Bold BI using Kubernetes?

1. **Containerized Architecture** – Bold BI runs as a multi-instance containerized application. If any of the instances crashes, the entire application will not go down. If one instance is down, the request is automatically redirected to the next instance.
2. **Load Balancing** – Network traffic is evenly distributed across available pods. 
3. **Auto Scaling** – HPA (Horizontal Pod Scaling) is enabled by default in Bold BI. Based on traffic, the pods are automatically scaled up or down. This ensures consistent response time even with rapidly changing loads. 
4. **Auto Healing** – Kubernetes closely monitors the health status of the pods and restarts them automatically in case of crashes or issues.

## How to deploy Bold BI in Kubernetes

You can follow the [Kubernetes](https://github.com/boldbi/boldbi-kubernetes) deployment for Bold BI in a specific cloud environment.