---
layout: post
title: Deployment on Kubernetes Cluster | Bold BI Documentation
description: Learn how to deploy Bold BI on Kubernetes. You can create Kubernetes cluster on either cloud or on-premise infrastructure.
platform: bold-bi
documentation: ug
---

# Bold BI in Kubernetes

Multi-node deployment was achieved in Bold BI using Kubernetes which provides high availability, scalability, and auto-healing. The following diagram shows the Bold BI container architecture that runs in a Kubernetes cluster.
  
  ![boldbi architectural diagram kubernetes](/static/assets/embedded/setup/images/architecture-diagram-k8s.png)

A) The **user** sends a request to the public endpoint **(Ingress Controller)** of the cluster.

B) The **Ingress Controller** validates the request and forwards the request to the respective application services. This ingress controller also acts as a load balancer and shares the incoming traffic across the respective application services in the cluster.

C) The Bold BI application resource data(App Data) is saved in **Persistent Volume**. PV is used to share the application information between app instances during scaling or pod restart.

D) The Bold BI application metadata information is saved in the **Database**. You can run your own database inside the Kubernetes cluster, but using a managed database service is recommended to configure and it provides built-in backups and scaling.

## Deployments and it's usages

The following table shows the Bold BI deployments and its usage:

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

1. **Containerized Architecture** – Bold BI runs as a multi-instance containerized application. So, if any of the instances is crashing then the entire application won’t be down. If one instance is down, then the request is automatically redirected to the next instance. 
2. **Load Balancing** – Network traffic is shared equally across available pods. 
3. **Auto Scaling** – HPA(Horizontal Pod Scaling) is enabled by default in Bold BI, so based on traffic the pods are scaled up/down automatically. So, we are always getting the same response time even if the load increases/decreases rapidly. 
4. **Auto Healing** – Kubernetes closely monitors the pods health status and restarts the pods automatically when there is a crash or problem. 

## Deployment Prerequisites

The following requirements are necessary to run the Bold BI solution.

* Kubernetes cluster
* File storage
* Microsoft SQL Server 2012+ | PostgreSQL | MySQL
* Load balancer: [Nginx](https://docs.nginx.com/nginx-ingress-controller/installation/installation-with-manifests/) or [Istio](https://istio.io/latest/docs/setup/getting-started/)
* Web Browser: Microsoft Edge, Mozilla Firefox, and Chrome.

## How to deploy Bold BI in Kubernetes

You can follow the [link](https://github.com/boldbi/boldbi-kubernetes) for Bold BI `Kubernetes` deployment in a specific cloud environment.
