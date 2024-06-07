---
layout: post
title: Deploying Bold BI Server in AWS EC2 Instance | Documentation
description: Learn how to self-deploy a virtual machine in the Amazon Web Service portal and install the Bold BI server application into it.
platform: bold-bi
documentation: ug
---

# Self-Deploy a Bold BI Server on an AWS Virtual Machine
The following steps guide you through deploying Bold BI on an AWS EC2 instance. Follow the steps according to your instance type.
<ul>


1. [Deploying Bold BI on an AWS Windows EC2 instance](/deploying-bold-bi/deploying-on-aws/deploy-aws-vm/#deploying-bold-bi-on-an-aws-windows-ec2-instance)
2. [Deploying Bold BI on an AWS Linux EC2 instance](/deploying-bold-bi/deploying-on-aws/deploy-aws-vm/#deploying-bold-bi-on-an-aws-linux-ec2-instance)

</ul>

## Deploying Bold BI on an AWS Windows EC2 instance

### Set up an AWS Windows EC2 instance

* Sign into the [aws portal](https://console.aws.amazon.com/ec2/.).
* From the EC2 console dashboard, choose "Launch instance" from the options that appear.
  ![Create](/static/assets/installation-and-deployment/images/create-aws-vm.png)
* Enter a descriptive "Name" and "Tags" for your instance.
  ![Create](/static/assets/installation-and-deployment/images/giving-name.png)
* Choose "Windows" under Application and OS Images (Amazon Machine Image).
  ![Create](/static/assets/installation-and-deployment/images/os-choosing.png)
* From the Instance type list, select the hardware configuration for your instance. You can find the minimum required hardware configuration  [here](https://help.boldbi.com/deploying-bold-bi/deploying-on-windows/prerequisites-windows/#hardware-requirements).
  ![Create](/static/assets/installation-and-deployment/images/vm-type-choosing.png)
* Under the "Key Pair (login)" section, you can either create a new RSA key pair or select an existing one.
  ![Create](/static/assets/installation-and-deployment/images/select-key-pair.png)
* Next to Network settings, select Edit. For the Security group name, you will notice that the wizard has created and chosen a security group for you. You can either use this security group or choose the one you created during the setup process.
* Keep the default selections for the other configuration settings for your instance.
  ![Create](/static/assets/installation-and-deployment/images/other-settigs.png)
* Review the summary of your instance configuration and then click "Launch instance."
  ![Create](/static/assets/installation-and-deployment/images/click-launch.png)
* A confirmation page will inform you that your instance is launching. To close the confirmation page and return to the console, select "View all instances."
  ![Create](/static/assets/installation-and-deployment/images/launch-confiramation.png)
  ![Create](/static/assets/installation-and-deployment/images/all-instance.png)
* On the Instances List page, you can view the status of instance creation. It takes a few moments for an instance to be created. When you launch an instance, its initial state is pending. After the instance starts, its state changes to running, and it receives a public DNS name. If the Public IPv4 DNS column is hidden, click on the settings icon in the top-right corner, enable Public IPv4 DNS, and click on Confirm.
  ![Create](/static/assets/installation-and-deployment/images/launch-status.png)
* It may take a few minutes for the instance to be ready for you to connect to it. Please ensure that your instance has passed its status check in the status check column.
  ![Create](/static/assets/installation-and-deployment/images/launch-success.png)
  
### Connect to Windows EC2 Instance

* Navigate to the newly created EC2 instance from the AWS console.
  ![Create](/static/assets/installation-and-deployment/images/instance-panel.png)
* In the "Connect" instance section, navigate to the RDP client tab, and select "Get Password".
  ![Create](/static/assets/installation-and-deployment/images/get-passwoed.png)
* Upload the RSA (.pem) key pair that was downloaded during instance creation and click on "Decrypt Password".
  ![Create](/static/assets/installation-and-deployment/images/upload-pem.png)
* Now download the Remote Desktop File(RDP) and copy the admin password.
  ![Create](/static/assets/installation-and-deployment/images/get-password-link.png)
* Open the .rdp file and click "Connect" when prompted with the unknown publisher warning. It will then ask for a password; enter the password that you copied from the AWS EC2 console.
  ![Create](/static/assets/installation-and-deployment/images/get-warning.png)
* On a successful connection, the identity verification window will be displayed as follows. Click OK to accept the certificate problems and connect to the virtual machine.

  ![verification](/static/assets/installation-and-deployment/images/self-vm-connect-verification.png)

### Installing and running the Bold BI Server on Windows

This section provides instructions on how to install and run the Bold BI server in a Windows virtual machine (VM).

* Features to be enabled in IIS to run Bold BI in Windows Server OS. Refer to this [Windows Server OS](/faq/features-needed-to-enable-in-iis-to-run-bold-bi-in-win-server-os/).
* Install the Bold BI server on the created Windows virtual machine (VM) in the AWS portal using [help link](https://help.boldbi.com/deploying-bold-bi/deploying-on-windows/)
  ![Start up](/static/assets/installation-and-deployment/images/boldbi-startup.png)
*  Follow the steps in the link to do the [application startup](https://help.boldbi.com/application-startup/).

## Deploying Bold BI on an AWS Linux EC2 instance

### Set up an AWS Linux EC2 instance

* Sign into the [aws portal](https://console.aws.amazon.com/ec2/.).
* From the EC2 console dashboard, choose "Launch instance" from the options that appear.
  ![Launch Instance](/static/assets/installation-and-deployment/images/aws-launch-instance.png)
* Under "Name and Tags," enter a descriptive name for your instance in the Name field.
  ![Name and Tags](/static/assets/installation-and-deployment/images/aws-name-tags.png)
* Under Application and OS Images (Amazon Machine Image), please follow these steps:

  1. Select Quick Start, and then choose Ubuntu as the operating system (OS) for your instance.

  2. If you want to change the Version of Ubuntu then, choose an HVM version of Ubuntu. 

      ![Ubuntu Image](/static/assets/installation-and-deployment/images/aws-ami-ubuntu.png)

* Under "Instance type," you can select the hardware configuration for your instance from the Instance type list. Choose the instance type as per [System requirements](https://help.boldbi.com/deploying-bold-bi/deploying-on-linux/recommended-system-configuration/) of Bold BI application.

  ![Instance Type](/static/assets/installation-and-deployment/images/aws-instance-type.png)

* Under Key Pair (login), for Key Pair Name, choose the key pair that you created when getting set up. If you don't have a key pair, then create a new key pair by clicking on the "Create New Key Pair" link.

  ![Key Pair](/static/assets/installation-and-deployment/images/aws-key-pair.png)

* In the network settings, configure the firewall settings and common security groups according to your requirements.

  ![Network Setting](/static/assets/installation-and-deployment/images/aws-network-setting.png)

* Keep the default selections for the other configuration settings for your instance.

* Review the summary of your instance configuration in the Summary panel, and when you're ready, select Launch instance.

  ![Review and Launch](/static/assets/installation-and-deployment/images/aws-create-ubuntu.png)

### Connect to Linux EC2 Instance

To connect to an EC2 instance running Linux using SSH, you need to follow these steps:

* Open a terminal on your local machine.

* Use the ssh command to connect to your Linux VM. Replace the public IP address with the actual public IP address of your VM and replace the private key file with the path to your private key file

  ```bash
      ssh -i "neotas.pem" ubuntu@ec2-34-194-36-242.compute-1.amazonaws.com

* Confirm the connection by typing yes when prompted and pressing Enter.

* Make sure that your security group allows inbound SSH traffic (port 22) from your IP address.

* Other methods are available for connecting to your Linux instance. Please refer to the documentation on [connecting to your Linux instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-to-linux-instance.html) for more information.

### Installing and running the Bold BI Server on Linux

This section provides instructions on how to install and run the Bold BI server on a Linux virtual machine (VM).

* Install the Bold BI server on the Linux virtual machine (VM) created in the AWS portal using the [help link](https://help.boldbi.com/deploying-bold-bi/deploying-on-linux/installation-and-deployment/bold-bi-on-ubuntu/)

* After the installation, when you access the IP address or domain name in the web browser, you will see the same interface as shown in the image below.
  ![Start up](/static/assets/installation-and-deployment/images/boldbi-startup.png)
  
* Follow the steps in the link to do the [application startup](https://help.boldbi.com/application-startup/).



