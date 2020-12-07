---
layout: post
title: Deploying Bold BI Docker Container in AWS ECS | Bold BI Docs
description: Learn how to deploy the Bold BI Docker container available in docker hub into AWS ECS. Need a valid AWS account with access to IAM, ECS, EC2 services.
platform: bold-bi
documentation: ug
---

# Running Bold BI Docker container in AWS ECS

This section explains how to deploy the Bold BI Docker container available in the docker hub into AWS ECS. 

## Prerequisites

You will need a valid AWS Account with access to IAM, ECS, EC2 services before starting this.

## Setting up the ECS Cluster

* Go to the [ECS Dashboard](https://console.aws.amazon.com/ecs/home?region=us-east-1#/clusters). 

* Click on `Create Cluster`.

  ![Create Cluster](/static/assets/embedded/setup/images/aws-create-cluster.png)

* Select the `EC2 Windows + Networking` cluster template and go to `Next Step`.

  ![Template](/static/assets/embedded/setup/images/aws-ecs2-template.png)

* Type in a cluster name, for example, I have chosen `bold-bi-mar-2020` and check `Create an empty cluster`. We will create the EC2 instance, services and task definitions separately.

  ![Empty Cluster](/static/assets/embedded/setup/images/aws-empty-cluster.png)

* Click on `Create` and the cluster will be created. You can see a page like the below screenshot.

  ![Launch Status](/static/assets/embedded/setup/images/aws-launch-status.png)

* Click on `View Cluster` to go to the cluster.

## Setting up the EC2 instance

Now, we will setup the EC2 instance, services and task definitions for our cluster.

* Go to the [EC2 instances](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#Instances:sort=tag:Name) page.

* Click on `Launch Instance`.

  ![Launch Instance](/static/assets/embedded/setup/images/aws-launch-instances.png)

* Choose `Community AMI` from the left side panel.

  ![Community AMI](/static/assets/embedded/setup/images/aws-community-ami.png)

* Search for `Windows_Server-2016-English-Full-Containers` and select it. 
For example, `Windows_Server-2016-English-Full-Containers-2020.02.12 (ami-0fe34df37e28deb02)`

  ![Windows Server](/static/assets/embedded/setup/images/aws-windows-server-select.png)

* Choose the instance type based on your load. We recommend going with the below chosen instance type – `m5a.2xlarge`.

  ![Instance Type](/static/assets/embedded/setup/images/aws-instance-type.png)

* Click on `Configure Instance Details` to configure the Public IP and Roles for this EC2 instance.
Change the highlighted values as in the below screenshot. Others can be left as it is.

  ![Configure Instance](/static/assets/embedded/setup/images/aws-configure-instance.png)

* For the IAM role, if you don’t have an `ecsInstanceRole` already, you can create using the guide [here](https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html).

* Click on `Add Storage` and increase the Root disk size to 300 GiB which is recommended by us.

  ![Add Storage](/static/assets/embedded/setup/images/aws-add-storage.png)

* Click on `Add Tags` and add tags as you need.

* Click on `Configure Security Group` and choose `Create a new security group` and ensure you have RDP rule as like below. Set the `Source` value with your IP to restrict the RDP connection within your network.

  ![Configure Security Group](/static/assets/embedded/setup/images/aws-configure-security.png)

* Click on `Review and Launch`.

* Click on `Launch` in the next page to launch the EC2 instance. This will give you a prompt to setup a key-pair for setting the password for the RDP connection.

* Select `Create a new key pair` and type in a key pair name. Click on `Download Key Pair` to download the `.pem` file. Save this file in a protected folder as this will get you the password for the EC2 instance.

  ![Create key pair](/static/assets/embedded/setup/images/aws-key-pair.png)

* Once you downloaded the key pair, you can click on `Launch Instances` to launch the instance.

  ![Launch Instances](/static/assets/embedded/setup/images/aws-final-launch-instances.png)

* Click on `View Instances` to go to the instance's dashboard. You should initializing the instances as like in the below screenshot

  ![View Instances](/static/assets/embedded/setup/images/aws-view-instances.png)

* This might take 5 to 10 minutes. You will see the status as `2/2 checks` after the completion.

  ![Status Checks](/static/assets/embedded/setup/images/aws-instance-status.png)

* Now we must connect to the EC2 instance via RDP and link the EC2 instance with the ECS Cluster we created earlier.

* Follow the instructions to connect to the Windows instance [here](https://docs.amazonaws.cn/en_us/AWSEC2/latest/WindowsGuide/connecting_to_windows_instance.html#connect-rdp).

* Once you are in, download the [`ECSTools scripts`](
https://www.syncfusion.com/downloads/support/directtrac/general/ze/ECSTools4112022) inside the Windows machine.

* After downloading, extract and copy the folder in below location,
**`C:\Program Files\WindowsPowerShell\Modules`**

  ![Module location](/static/assets/embedded/setup/images/aws-module-location.png)

* Open `PowerShell` and run the below commands one by one. Replace `bold-bi-mar-2020` with your cluster name.

     a.	Type Import-Module `ECSTools` and press enter.

     b.	Type `Initialize-ECSAgent` -Cluster `bold-bi-mar-2020` -EnableTaskIAMRole and press enter.

  This should start like this…

  ![Command](/static/assets/embedded/setup/images/aws-cmd-start.png)

    and end like below,

  ![Command](/static/assets/embedded/setup/images/aws-cmd-end.png)

* This will link the EC2 instance with our ECS cluster. Now, go to the cluster dashboard and select the cluster we created earlier. Select `ECS Instances` to see our instance listed here.
This will take 15 to 20 minutes to show up.

  ![Instance](/static/assets/embedded/setup/images/aws-cluster-dashboard.png)

## Setting up the Task Definition

Now, We will create the Task Definition.

* Go to [Task Definition dashboard](https://console.aws.amazon.com/ecs/home?region=us-east-1#/taskDefinitions).

* Click `Create new Task Definition`.

* Select `EC2` as the launch type.

  ![Launch Type](/static/assets/embedded/setup/images/aws-ec2-launch.png)

* Click on `Next Step`.

* Click on `Configure via JSON` at the bottom.

* Download the [task definition file](https://www.syncfusion.com/downloads/support/directtrac/general/ze/taskDef-1190847769-1527900108). And Copy the contents from this `task_Def.json` file and paste it in the JSON prompt.

  ![JSON Prompt](/static/assets/embedded/setup/images/aws-json-prompt.png)

* Click on `Save`.

* Click on `Create` to save the task definition.

  ![Save task definition](/static/assets/embedded/setup/images/aws-save-task-definition.png)

* You can see the Task page as like below,

  ![Task Page](/static/assets/embedded/setup/images/aws-task-page.png)

## Setting up the Service

Now, we will setup the Service to start the Bold BI Application.

* Click on `Actions` dropdown and choose `Create Service`.

  ![Create Service](/static/assets/embedded/setup/images/aws-create-service.png)   

* Select the values as shown in the screenshot,

    Launch Type: EC2

    Cluster: `bold-bi-mar-2020` (which is the one we created earlier)

    Service name: (type in a desired name)

    Number of tasks: 1

  ![Configure Service](/static/assets/embedded/setup/images/aws-configure-service.png)

* All other values can be left as it is. Click on `Next Step`.

* We don't have any changes in the `Configure Network` and `Set Auto Scaling` sections as of now.

* You can setup the auto-scaling here if you need.

* Click on `Create Service` to create the service.

* Click on `View Service` to view the task running under it.

* You should see the task running as like in the below screenshot.

  This will take 15 to 30 minutes to move from `PENDING` status to `RUNNING` status.

  ![View Service](/static/assets/embedded/setup/images/aws-view-service.png)

## Configuring the application

* We must update the config.xml files in the Bold BI application with the EC2 machine domain.

* Connect to the EC2 machine via RDP with the instructions provided [here](
https://docs.amazonaws.cn/en_us/AWSEC2/latest/WindowsGuide/connecting_to_windows_instance.html#connect-rdp).

* Create the below folders in the EC2 machine.

    a.	`C:\Docker\IDP\`

    b.	`C:\Docker\DS\`

* Open PowerShell.

* Run the **`docker container ls`** command to get the container ID.

  ![cmd prompt](/static/assets/embedded/setup/images/aws-docker-cmd.png)

* The red-marked box shows the container ID.

* Now, copy the config.xml from 2 different folders by running the below commands.

  **`docker cp "6c249834cd0d:C:\bold bi\idp\ums\configuration\boldbi\config.xml" "C:\docker\idp\"`**

  **`docker cp "6c249834cd0d:C:\bold bi\dashboard server\configuration\config.xml" "C:\docker\ds\"`**

* You will now see the config.xml files in the new folders created at step 3. Change the URLs in these config.xml files with the EC2 domain names.

* Get the EC2 domain name from the Instance.

  ![EC2 Domain name](/static/assets/embedded/setup/images/aws-domain-name.png)

* Change the URL in **`C:\Docker\IDP\config.xml`** from `<InternalAppBIUrl>http://localhost:88/bi </InternalAppBIUrl>`  to  `<InternalAppBIUrl>http://ec2-3-82-154-70.compute-1.amazonaws.com:88/bi</InternalAppBIUrl>`
 
* Similarly, Change the URL in **`C:\Docker\DS\config.xml`** from `<InternalAppDataServiceUrl>http://localhost:88/bi/designer</InternalAppDataServiceUrl>  <InternalAppIdpUrl>http://localhost:88/</InternalAppIdpUrl>`  to  `<InternalAppDataServiceUrl>http://ec2-3-82-154-70.compute-1.amazonaws.com:88/bi/designer</InternalAppDataServiceUrl> <InternalAppIdpUrl>http://ec2-3-82-154-70.compute-1.amazonaws.com:88/</InternalAppIdpUrl>`

* Now copy the edited config.xml files back to the container by running the below commands.

  **`docker cp "C:\docker\idp\config.xml" "6c249834cd0d:C:\bold bi\idp\ums\configuration\boldbi\config.xml"`**

  **`docker cp "C:\docker\ds\config.xml" "6c249834cd0d:C:\bold bi\dashboard server\configuration\config.xml"`**

## Launching the application

* Select the task under the Service we created.

  ![Select Task](/static/assets/embedded/setup/images/aws-task-selection.png)

* Expand the containers section as shown in the screenshot.

  ![Task Container](/static/assets/embedded/setup/images/aws-expand-container.png)

* Click on the `aws-external-link` provided.

  ![External link](/static/assets/embedded/setup/images/aws-external-link.png)

* Bold BI application will launch in this link. As of now, 80 port is occupied by the ECS agent in AWS and we will not be able to run our Bold BI in the 80 port. So, we must open the 88 port in the EC2 instance.

* Follow this [document](https://aws.amazon.com/premiumsupport/knowledge-center/connect-http-https-ec2/) to add inbound rules in the EC2 instance's security group.

* Now open the link and you should see the Bold BI Application in the external link provided.

  ![Bold BI Application](/static/assets/embedded/setup/images/aws-bold-bi-app.png)














