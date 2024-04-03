---
layout: post
title: Migration from ECS to EKS Instance | Bold BI Documentation
description: This page demonstrates how to migrate from the ECS instance Bold BI server to the EKS instance Bold BI server.
platform: bold-bi
documentation: ug
---

# Migrate Bold BI from Amazon ECS instance to EKS instance

1. To migrate Bold BI from the AWS ECS instance to the AWS EKS instance, we need to move the ECS Bold BI application `app_data` folder into EFS storage. Follow the below steps to move ECS `app_data` folders into EFS storage.
2. Connect the ECS instance through SSH and install docker in the ECS instance(CentOS/RedHat Environment). You can use the below commands for installing docker in the ECS instance:
    ~~~shell 
    sudo yum update -y

    sudo amazon-linux-extras install docker
    ~~~
3. Now, you need to copy the `app_data`(#application/app_data) folder from the Bold BI container and paste it to any location(outside of the container) in the EC2 Linux instance. Use the following command to bash a container and copy the app_data from the container to the instance.

    >Note: Don't stop ECS container while copying `app_data` folder

    Docker bash and copy app_data command:

    ~~~shell
    docker exec -it <Bold BI container id/container name> bash
    ~~~

    ~~~shell
    docker cp <Bold BI container id/container name>:/application/app_data <Save location in EC2 instance>
    ~~~
4. Create a new S3 bucket or use the existing s3 bucket for copying `app_data` from ECS. Follow [this](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html) URL to create a new s3 bucket.

5. Now, run the command below in EC2 instance CLI to copy `app_data` to the s3 bucket.
   ~~~shell
   aws s3 cp --recursive <Source folder location> s3://<S3 bucket name> 
   ~~~

   Example for copying `app_data` to s3 bucket,
   ~~~shell
   aws s3 cp --recursive /var/BoldBi/app_data s3://migrate-testing
   ~~~

6. We need the EKS cluster and EFS (Elastic File System) for deploying Bold BI in the EKS cluster. Follow [this](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html ) document to create EKS cluster.

7. Then create an EFS (Elastic File System) and migrate all data from the s3 bucket to the EFS (Elastic File System). Follow [this](https://docs.aws.amazon.com/efs/latest/ug/gs-step-two-create-efs-resources.html) document to create the EFS.

   > Note: Please use same security group for EKS cluster and EFS file system

8. After creating the EFS, use `DataSync` to migrate all data into the EFS. We need to create a task in data sync and set the source file as an s3 bucket and the destination file as DataSync. Follow [this]( https://docs.aws.amazon.com/efs/latest/ug/trnsfr-data-using-datasync.html ) document create task in `DataSync`

9. Now, we need to deploy Bold BI in the EKS cluster. Follow [this](https://github.com/boldbi/boldbi-kubernetes/blob/main/docs/amazon-eks.md ) document to deploy Bold BI in EKS.

   >Note:Please make sure we are using same file share name(where we backup the app_data from ECS) to deploy Bold BI in EKS.

10. After deploying Bold BI in EKS, it will directly redirect to the `login page`. After entering into the dashboard page, the page is running in the ECS instance DNS or IP address.

11. Now, we need to map the EKS instance DNS or IP address in ums administration. Follow the steps below to map the EKS DNS for the application URL.

12. Navigate to `[DNS or IP address]/ums/administration`.
Example: `https://example.com/ums/administration`

13. From the image above, you need to enter the DNS or IP address that is used for EKS. Use the command below to get the DNS for the EKS.

    ~~~shell
    kubectl get ingress -n <namespace> 
    ~~~

14. Save the changes, and now the application is mapped to the EKS DNS.

15. Also, replace the DNS in the `config.json` and `product.json` files. You need to bash into the data service pod to replace the EKS DNS in the config.json and product.json files.

    >**Note:** From version 6.19.14, use the config.json and the config.xml for versions prior to this.

16. Follow the command below to bash a pod to replace an EKS ingress DNS:

    ~~~shell
    kubectl exec -it <dataservice pod name> -n <namespace> -- bash 
    ~~~

17. Follow the below command to edit the `config.json` file inside the pod, replace the EKS ingress DNS, and save the changes.

    ~~~shell
    apt update 

    apt install nano
    ~~~

18. Then follow the command below to edit the `product.json` file inside the pod and replace the EKS ingress DNS, and save the changes.

    ~~~shell
    apt install nano
    ~~~

19. Now restart the pod using the command below:

    ~~~shell
    kubectl rollout restart deploy -n <namespace>
    ~~~
20. Now, the ECS instance Bold BI application is migrated to the EKS cluster.

    > Note: We assume your ECS instance startup and IMDB database are available online.

