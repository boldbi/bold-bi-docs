---
layout: post
title: Deploying Bold BI Server in AWS EC2 Instance | Documentation
description: Learn how to self-deploy a virtual machine in the Amazon Web Service portal and install the Bold BI server application into it.
platform: bold-bi
documentation: ug
---

# Self-deploy a Bold BI Server on Amazon Web Service.

Install and run the Bold BI server on an AWS EC2 instance by following these steps.

## Set up an AWS EC2 instance

* Sign into the [aws portal](https://console.aws.amazon.com/ec2/.).
* From the EC2 console dashboard, choose "Launch instance" from the options that appear.
  ![Create](/static/assets/installation-and-deployment/images/create-aws-vm.png)
* Enter a descriptive "Name" and "Tags" for your instance.
  ![Create](/static/assets/installation-and-deployment/images/giving-name.png)
* Choose "Windows" under Application and OS Images (Amazon Machine Image).
  ![Create](/static/assets/installation-and-deployment/images/os-choosing.png)
* From the Instance type list, select the hardware configuration for your instance. You can find the minimum required hardware configuration  [here](https://help.boldbi.com/deploying-bold-bi/deploying-in-windows/prerequisites-windows/#hardware-requirements).
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
  
## Connect to EC2 Instance

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

## Installing and running the Bold BI Server

This section provides instructions on how to install and run the Bold BI server in a virtual machine (VM).

* Install the Bold BI server on the created virtual machine (VM) in the AWS portal using [help link](/deploying-bold-bi/deploying-in-windows/installation-and-deployment/). 
* Launch your application either by default or through your Desktop shortcut menu item. For example, `Start Bold BI in IIS`

![Start up](/static/assets/installation-and-deployment/images/boldbi-startup.png)

* Follow the steps in the link to do the [application startup](/application-startup/).