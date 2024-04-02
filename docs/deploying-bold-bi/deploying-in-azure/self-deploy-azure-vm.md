---
layout: post
title: Deploying Bold BI Server in Azure VM | Documentation
description: Learn how to deploy a virtual machine in Microsoft Azure portal and install Bold BI server application into it.
platform: bold-bi
documentation: ug
---

# Self-deploy a Bold BI Server on Microsoft Azure

To install and run the Bold BI server on a Microsoft Azure virtual machine, follow these steps in a concise manner.

## Set up a Microsoft Azure VM

* Sign into the [Azure Portal](https://portal.azure.com/).

* Click on `Create a Resource`.

    ![Create](/static/assets/installation-and-deployment/images/self-vm-Create.png)

* Under `Azure Market place`, select `Compute` option and click on `See all` featured.

    ![Compute](/static/assets/installation-and-deployment/images/self-vm-compute.png)

* Search for `Windows Server` and select it.

    ![Windows Server](/static/assets/installation-and-deployment/images/self-vm-windows-server.png)

* Choose the `Windows Server` software plan that meets our [system requirement](/deploying-bold-bi/overview/#hardware-requirements) and click `Create`.

    ![Windows Server Select](/static/assets/installation-and-deployment/images/self-vm-windows-server-select.png)

* Provide the necessary administrative information for the new VM on the `Basics` blade.

    ![Basic](/static/assets/installation-and-deployment/images/self-vm-basic.png)

**Virtual Machine Name:** Enter a name for your VM (max 15 characters).

**VM disk type:** Choose SSD/HDD as your convenience (SSD is recommended for better performance).

**Size:** Choose the VM size that meets our [system requirement](/deploying-bold-bi/overview/#hardware-requirements). For example, choose the `D2s_V3` size, and then click `Select`.

**Username:** Enter your username, which you will use to log in to the VM using Remote Desktop Protocol (RDP).

**Password:** Enter your password, as you will need it to log in to the VM using RDP.

**Subscription:** This VM should be associated with the Azure subscription.

**Resource group:** Choose `Create new` and enter the name of a new resource group to host the VM's resources.

**Region:** Choose your preferred region for your VM.

* Under the `Disks` blade, choose the VM OS disk type (`SSD` is recommended).

    ![Disk](/static/assets/installation-and-deployment/images/self-vm-disk.png)

* Under the `Networking` blade, select `Advanced` in `NIC network security group`.

    ![Networking](/static/assets/installation-and-deployment/images/self-vm-networking.png)

* Click on `Create new` in the `NIC network security group` option to add an inbound security rule. This rule will allow specific types of internet traffic to reach your VM. 

    ![Add inbound rule](/static/assets/installation-and-deployment/images/self-vm-add-inbound-rule.png)

* Choose `HTTP` from the `Service` drop-down list on the `Add inbound security rule` blade.

* In the "Priority" box, assign a numerical priority to the rule, such as 100. Rules with lower numbers are processed first. For instance, a rule with a priority of 100 will be processed before a rule with a priority of 110.

* In the Name box, type a name for the inbound rule, such as HTTP Port-80, and then click OK.

* Repeat the steps to create an inbound security rule for the HTTPS service with a priority of 101.

* When finished, the Create network security group dialog should have three rules allowing `RDP, HTTP, and HTTPS` access. Click OK.

* On the `Create` blade, review your settings under Summary and click `Create`.

    ![Deployment](/static/assets/installation-and-deployment/images/self-vm-deployment.png)

## How to Connect the VM through the Remote Desktop Connection

Follow the below steps to connect to the virtual machine.

* Click `Connect` on the virtual machine overview window to download a Remote Desktop Protocol (`.rdp`) file from the Azure portal.

    ![Connect](/static/assets/installation-and-deployment/images/self-vm-connect.png)

* Open the .rdp file and click `Connect` to proceed despite the warning from an unknown publisher.

    ![Unknown publisher](/static/assets/installation-and-deployment/images/self-vm-connect-unknown-publisher.png)

* Enter the credentials that you provided when creating the VM, as shown below, and click OK.

    ![Credentials](/static/assets/installation-and-deployment/images/self-vm-credentials.png)

* After a successful connection, the identity verification window will be displayed as shown below. Click `OK` to accept the certificate problems and connect to the virtual machine.

    ![verification](/static/assets/installation-and-deployment/images/self-vm-connect-verification.png)

## Installation and Running of the Bold BI Server

This section provides instructions on how to install and run the Bold BI server in a virtual machine (VM).

* Install the Bold BI server on the created virtual machine (VM) in the Azure portal using [help link](/deploying-bold-bi/deploying-in-windows/installation-and-deployment/). 
* Launch your application either by default or through your Desktop shortcut menu item. For example, `Start Bold BI in IIS`

    ![Start up](/static/assets/installation-and-deployment/images/boldbi-startup.png)

* Follow the steps in the link to do the [application startup](/application-startup/).