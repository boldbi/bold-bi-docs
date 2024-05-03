---
layout: post
title: Migration from ECS to EKS Instance | Bold BI Documentation
description: This page demonstrates how to migrate from the ECS instance Bold BI server to the EKS instance Bold BI server.
platform: bold-bi
documentation: ug
---

# Migrate Bold BI from Amazon ECS instance to EKS instance

1. To migrate Bold BI from the AWS ECS instance to the AWS EKS instance, we need to transfer the ECS Bold BI application's `app_data` folder into EFS storage. Follow the steps below to move the ECS `app_data` folders into EFS storage.
2. Connect to the ECS instance through SSH and install Docker in the ECS instance (CentOS/RedHat Environment). You can use the following commands to install Docker in the ECS instance:
    ~~~shell 
    sudo yum update -y

    sudo amazon-linux-extras install docker
    ~~~
3. Now, you need to copy the `app_data` (#application/app_data) folder from the Bold BI container and paste it to any location (outside of the container) in the EC2 Linux instance. Use the following command to bash into the container and copy the app_data from the container to the instance.

    >Note: Do not stop the ECS container while copying the `app_data` folder.

    Docker bash and copy app_data command:

    ~~~shell
    docker exec -it <Bold BI container id/container name> bash
    ~~~

    ~~~shell
    docker cp <Bold BI container id/container name>:/application/app_data <Save location in EC2 instance>
    ~~~
4. Create a new S3 bucket or use the existing s3 bucket for copying `app_data` from ECS. Follow [this](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html) URL to create a new s3 bucket.

5. Now, run the command below in the EC2 instance CLI to copy the `app_data` to the S3 bucket.
   ~~~shell
   aws s3 cp --recursive <Source folder location> s3://<S3 bucket name> 
   ~~~

   Example for copying `app_data` to an S3 bucket,
   ~~~shell
   aws s3 cp --recursive /var/BoldBi/app_data s3://migrate-testing
   ~~~

6. We need the EKS cluster and EFS (Elastic File System) for deploying Bold BI in the EKS cluster. Please follow [this](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html) document to create the EKS cluster.

7. Then create an Elastic File System (EFS) and migrate all data from the S3 bucket to the EFS. Follow the instructions in [this](https://docs.aws.amazon.com/efs/latest/ug/gs-step-two-create-efs-resources.html) document to create the EFS.

   > Note: Please use the same security group for the EKS cluster and EFS file system.

8. After creating the EFS, use `DataSync` to migrate all data to the EFS. You need to create a task in DataSync and set the source file as an S3 bucket and the destination file as DataSync. Follow the instructions in [this]( https://docs.aws.amazon.com/efs/latest/ug/trnsfr-data-using-datasync.html ) document to create a task in `DataSync`.

9. Now, we need to deploy Bold BI in the EKS cluster. Follow [this](https://github.com/boldbi/boldbi-kubernetes/blob/main/docs/amazon-eks.md ) document to deploy Bold BI in EKS.

   >Note: Please ensure that we are using the same file share name (where we backup the app_data from ECS) to deploy Bold BI in EKS.

10. After deploying Bold BI on EKS, it will directly redirect to the `login page`. Once logged in to the dashboard page, the page will be running on the ECS instance DNS or IP address.

11. Now, we need to map the EKS instance's DNS or IP address in the UMS administration. Follow the steps below to map the EKS DNS for the application URL.

12. Navigate to `[DNS or IP address]/ums/administration`.
Example: `https://example.com/ums/administration`

13. From the image above, you need to enter the DNS or IP address that is used for EKS. Use the command below to obtain the DNS for the EKS.

    ~~~shell
    kubectl get ingress -n <namespace> 
    ~~~

14. Save the changes, and now the application is mapped to the EKS DNS.

15. Additionally, you will need to replace the DNS in the `config.json` and `product.json` files. You must bash into the data service pod in order to replace the EKS DNS in the config.json and product.json files.

    >**Note:** Starting from version 6.19.14, utilize the config.json and config.xml files for versions that came before this.

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
20. Now, the ECS instance hosting the Bold BI application has been migrated to the EKS cluster.

    > Note: We assume that your ECS instance startup and IMDB database are available online.

