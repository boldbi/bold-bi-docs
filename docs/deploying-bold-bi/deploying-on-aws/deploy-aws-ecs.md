---
layout: post
title: Deploy Bold BI on an ECS Fargate cluster | Bold BI Docs
description: Learn how to deploy the Bold BI application on an ECS Fargate cluster using an Application Load Balancer with step-by-step instructions.
platform: bold-bi
documentation: ug
---

# Deploy Bold BI on an ECS Fargate cluster using an Application Load Balancer

## Prerequisites

- **ECS cluster** - [Create an ECS Cluster](https://docs.aws.amazon.com/AmazonECS/latest/userguide/create_cluster.html)  
- **EFS** - [Create EFS Resources](https://docs.aws.amazon.com/efs/latest/ug/gs-step-two-create-efs-resources.html)

 All resources should be in the same security group and VPC.

## Steps to deploy Bold BI application on an ECS Cluster

1. Create the task definition for the Bold BI application using the following details. Follow [this](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html) document to learn more about ECS task definitions.

   * Requires compatibilities - FARGATE
   * Operating system family - Linux
   * Memory - 4 GB RAM
   * CPU - 2-core
   * Volumes - Add the EFS volume details in the Volumes section 
     ![EFS Volume](/static/assets/installation-and-deployment/images/efs-volume.png)
   * Add container - You can refer to [this](https://hub.docker.com/r/syncfusion/boldbi) documentation for Bold BI docker image details.
     * Image - **syncfusion/boldbi**
     * Port mappings - **80** and **tcp**
     * STORAGE AND LOGGING
       Container path - **/application/app_data**
       ![Storage and Logging](/static/assets/installation-and-deployment/images/storage-and-logging.png)
   * Save the template.

2. Go to the Cluster and create the service by following below steps:
   **Navigate to** = Amazon Elastic Container Service --&gt; Clusters --&gt; Cluster name --&gt; Services --&gt; Create
   ### Environment:
   * Launch type - **Fargate** with Latest version
     ![Launch Type](/static/assets/installation-and-deployment/images/fargate-launch-type.png)
   ### Deployment configuration
   * Application type is **service** and select the task definition created in **Step 1**.
   * Desired tasks - 1
     ![EFS Application type](/static/assets/installation-and-deployment/images/efs-application-type.png)
   ### Networking
   * Please use the same VPC, subnet, and security group that are used for the Cluster, Load balancer, and EFS.
     ![EFS VPC Networking](/static/assets/installation-and-deployment/images/efs-vpc-network.png)
   ### Load balancing
   * Follow the document below to create the Load balancer with target group in ECS service

     [https://docs.aws.amazon.com/AmazonECS/latest/userguide/create-load-balancer.html](https://docs.aws.amazon.com/AmazonECS/latest/userguide/create-load-balancer.html)
     ![EFS Load Balancing](/static/assets/installation-and-deployment/images/efs-load-balancing.png)

3. Now, create the service.
   ![Service Status](/static/assets/installation-and-deployment/images/service-status.png)
4. Once service is Up and running you can access the Application using Application Load Balancer DNS.
   ![Review and Launch](/static/assets/installation-and-deployment/images/efs-hosting.png)

## Next Step
* [Application startup](https://help.boldbi.com/application-startup/)