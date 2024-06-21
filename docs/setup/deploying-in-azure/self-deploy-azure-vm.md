---
layout: post
title: Deploying Bold BI Server in Azure VM | Documentation
description: Learn how to deploy a virtual machine in Microsoft Azure portal and install Bold BI server application into it.
platform: bold-bi
documentation: ug
---

# Self-deploy a Bold BI Server on Microsoft Azure

You can install and run the Bold BI server on Microsoft Azure virtual machine by  following the below steps.

## Set up a Microsoft Azure VM

* Sign into the [Azure Portal](https://portal.azure.com/).

* Click `Create a Resource` option.

![Create](/static/assets/embedded/setup/images/self-vm-Create.png)

* Under `Azure Market place` choose `Compute` option and Click the `See all` featured.

![Compute](/static/assets/embedded/setup/images/self-vm-compute.png)

* Search the Windows Server and choose the `Windows Server` option.

![Windows Server](/static/assets/embedded/setup/images/self-vm-windows-server.png)

* Choose the `Windows Server` as a Software plan that meet our [system requirement](/embedded-bi/setup/overview/#hardware-requirements) and then Click `Create`.

![Windows Server Select](/static/assets/embedded/setup/images/self-vm-windows-server-select.png)

* The `Basics` blade requests administrative information for the virtual machine.

![Basic](/static/assets/embedded/setup/images/self-vm-basic.png)

**Virtual Machine Name:** Enter a name for your virtual machine (VM). The name must be 15 or fewer characters.

**VM disk type:** choose SSD/HDD for your convenience(We recommend using SSD for better performance).

**Size:** Choose the VM size that meet our [system requirement](/embedded-bi/setup/overview/#hardware-requirements). For example, choose the `D2s_V3` size, and then click `Select`.

**Username:** Enter your username. You will use this username to log in to the VM using Remote Desktop Protocol (RDP).

**Password:** Enter your password. You will use this password to log in to the VM using RDP.

**Subscription:** The Azure subscription this VM should be associated with.

**Resource group:** Choose `Create new` and then enter the name of a new resource group to host the VM’s resources.

**Region:** Choose your convenient region for your VM.

* Under the `Disks` blade, you can choose the VM OS disk type based on your convenience. (We recommend using `SSD` for better performance).

![Disk](/static/assets/embedded/setup/images/self-vm-disk.png)

* Under the `Networking` blade, select `Advanced` option in `NIC network security group`.

![Networking](/static/assets/embedded/setup/images/self-vm-networking.png)

* Click `Create new` on the `NIC network security group` option to add inbound security rule. Creating an inbound rule that allow specific types of internet traffic to reach your VM.

![Add inbound rule](/static/assets/embedded/setup/images/self-vm-add-inbound-rule.png)

* On the `Add inbound security rule` blade, in the `Service` drop-down list box, choose` HTTP`.

* In the Priority box, give the rule a priority, for example, 100. Lower numbers are processed first. For example, a rule priority of 100 will be processed before a rule priority of 110.

* In the Name box, enter a name for the inbound rule, for example HTTP Port-80, and then click OK.

* Repeat steps to create a Add inbound security rule for the HTTPS service with a priority of 101.

* When complete, the Create network security group dialog should include three rules to allow `RDP, HTTP, and HTTPS` access. Click OK.

* On the `Create` blade, under Summary, review your settings and click `Create`.

![Deployment](/static/assets/embedded/setup/images/self-vm-deployment.png)

## How to Connect the VM through the Remote Desktop Connection

Follow the below steps to connect to the virtual machine.

* Click the `Connect` on the virtual machine overview window. A Remote Desktop Protocol (`.rdp`) file will be downloaded from the Azure portal.

![Connect](/static/assets/embedded/setup/images/self-vm-connect.png)

* Open the .rdp file and click the `Connect` for the unknown publisher warning.

![Unknown publisher](/static/assets/embedded/setup/images/self-vm-connect-unknown-publisher.png)

* Enter the credentials that you have given while creating the VM as like below and click the OK.

![Credentials](/static/assets/embedded/setup/images/self-vm-credentials.png)

* On successful connection, the identity verification window will be displayed as shown below. Click `OK` to accept the certificate problems and connect to the virtual machine.

![verification](/static/assets/embedded/setup/images/self-vm-connect-verification.png)

## Install and run the Bold BI server

This section explains how to install and run the Bold BI server in VM. 

* Install the Bold BI server on the created VM in Azure portal by this [help link](/embedded-bi/setup/deploying-in-windows/installation-and-deployment/). 
* Launch your application by default or your Desktop shortcut menu item. For example, `Start Bold BI in IIS`

![Start up](/static/assets/embedded/setup/images/boldbi-startup.png)

* Follow the steps in the link to do the [application startup](/embedded-bi/application-startup/).