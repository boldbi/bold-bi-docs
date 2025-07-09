---
layout: post
title: Deploy Bold BI Using Terraform Script | Bold BI Documentation
description: Deploy Bold BI on Azure, AWS, or GCP using Terraform. This guide automates infrastructure setup and application deployment for a fast, consistent, and hassle-free install.
platform: bold-bi
documentation: ug
---

# Deploying Bold BI on Cloud Platforms Using Terraform

## What is Terraform?

Terraform is an open-source Infrastructure as Code (IaC) tool developed by HashiCorp. It allows you to define and manage cloud infrastructure using a high-level configuration language called HCL (HashiCorp Configuration Language). With Terraform, you can describe the desired state of resources such as servers, storage, networking, and more, and let Terraform automatically provision and manage them across multiple cloud providers like AWS, Azure, and Google Cloud.

### Key Advantages

- **Automation**: Eliminates manual configuration and reduces human error.
- **Consistency**: Ensures identical infrastructure deployments across environments.
- **Repeatability**: Reuse your Terraform scripts for multiple deployments.
- **Version Control**: Track infrastructure changes over time using Git or other tools.

---

## Deploying Bold BI with Terraform

Bold BI can be easily deployed to cloud container services on **Azure**, **AWS**, and **Google Cloud** using our pre-built Terraform scripts. This supports both Kubernetes and ECS-based environments.

### Components Automatically Provisioned

- **Networking**: VPCs, subnets, and related resources
- **Container Orchestration**:
  - Kubernetes: AKS, EKS, or GKE
  - ECS: EC2 or Fargate launch types
- **Database**: PostgreSQL
- **Cloud Storage**: Used for Bold BI application data
- **Load Balancer**: For external access to the application

Terraform simplifies what would otherwise be a complex, multi-step manual process.

### What the Script Does

- Provisions all required infrastructure
- Deploys Bold BI to the selected environment (e.g., Kubernetes, ECS, etc.)
- Applies necessary configurations for storage, database, and networking

### Deployment Outcome

After execution, Bold BI is fully deployed and accessible without any manual steps. The environment is production-ready with high availability and scalability.

---

## Supported Platforms

You can deploy Bold BI using Terraform on the following cloud platforms:

- **[Azure Kubernetes Service (AKS)](https://github.com/boldbi/boldbi-terraform-scripts/blob/master/azure-aks/README.md)**
- **[Amazon Elastic Kubernetes Service (EKS)](https://github.com/boldbi/boldbi-terraform-scripts/blob/master/aws-eks/README.md)**
- **[Amazon Elastic Container Service (ECS)](https://github.com/boldbi/boldbi-terraform-scripts/blob/master/aws-ecs/README.md)**
- **[Google Kubernetes Engine (GKE)](https://github.com/boldbi/boldbi-terraform-scripts/blob/master/gcp-gke/README.md)**

Each link above contains platform-specific deployment instructions and prerequisites.