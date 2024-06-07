---
layout: post
title: Deploying Bold BI Server on Azure VM | Bold BI | Docs
description: Learn how to efficiently deploy a virtual machine in the Microsoft Azure portal and seamlessly install the Bold BI server application.
platform: bold-bi
documentation: ug
---
# Self-Deploy a Bold BI Server on Microsoft Azure Virtual Machine

The following steps will guide you through deploying Bold BI on Azure Virtual Machines. Follow the steps according to your instance type.
<ul>

1.[Deploy Bold BI on an Azure Windows Virtual Machine](/deploying-bold-bi/deploying-on-azure/self-deploy-azure-vm/#deploy-bold-bi-on-an-azure-windows-virtual-machine)

2.[Deploy Bold BI on an Azure Linux Ubuntu Virtual Machine](/deploying-bold-bi/deploying-on-azure/self-deploy-azure-vm/#deploy-bold-bi-on-an-azure-linux-ubuntu-virtual-machine)

</ul>

## Deploy Bold BI on an Azure Windows Virtual Machine

### Set up an Azure Windows Virtual Machine
* Sign into the [Azure Portal](https://portal.azure.com/).

* Click on `Create a Resource`.

    ![Create](/static/assets/installation-and-deployment/images/azure-ubuntu-vm-create.png)
 - Click on `virtual machine`.
 
    ![Compute](/static/assets/installation-and-deployment/images/azure-ubuntu-vm.png)

* Provide the necessary administrative information for the new VM on the `Basics` blade.

    ![Basic](/static/assets/installation-and-deployment/images/self-vm-basic.png)

**Virtual Machine Name:** Enter a name for your VM (max 15 characters).

**VM disk type:** Choose SSD/HDD as your convenience (SSD is recommended for better performance).

**Image**  Choose the `Windows Server` Image.

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

### How to Connect the VM through the Remote Desktop Connection

Follow the below steps to connect to the virtual machine.

* Click `Connect` on the virtual machine overview window to download a Remote Desktop Protocol (`.rdp`) file from the Azure portal.

    ![Connect](/static/assets/installation-and-deployment/images/self-vm-connect.png)

* Open the .rdp file and click `Connect` to proceed despite the warning from an unknown publisher.

    ![Unknown publisher](/static/assets/installation-and-deployment/images/self-vm-connect-unknown-publisher.png)

* Enter the credentials that you provided when creating the VM, as shown below, and click OK.

    ![Credentials](/static/assets/installation-and-deployment/images/self-vm-credentials.png)

* After a successful connection, the identity verification window will be displayed as shown below. Click `OK` to accept the certificate problems and connect to the virtual machine.

    ![verification](/static/assets/installation-and-deployment/images/self-vm-connect-verification.png)

### Installation and Running of the Bold BI Server

This section provides instructions on how to install and run the Bold BI server in a virtual machine (VM).

* Install the Bold BI server on the created virtual machine (VM) in the Azure portal using [help link](/deploying-bold-bi/deploying-on-windows/installation-and-deployment/). 
* Launch your application either by default or through your Desktop shortcut menu item. For example, `Start Bold BI in IIS`

    ![Start up](/static/assets/installation-and-deployment/images/azure-ubuntu-vm-boldbi.png)

* Follow the steps in the link to do the [application startup](/application-startup/).


## Deploy Bold BI on an Azure Linux Ubuntu Virtual Machine

### Set up an Azure Linux Virtual Machine
 - Sign into the [Azure Portal](https://portal.azure.com/).
 - Click on `Create a Resource`.

    ![Create Resource](/static/assets/installation-and-deployment/images/azure-ubuntu-vm-create.png)
 - Click on `virtual machine`.

    ![virtual machine](/static/assets/installation-and-deployment/images/azure-ubuntu-vm.png)
 - Provide the necessary administrative information for the new VM on the `Basics` blade.

 - **Virtual Machine Name:** Enter a name for your VM (max 15 characters).
 
 - **Subscription:** This VM should be associated with the Azure subscription.
 
 - **Resource group:** Choose `Create new` and enter the name of a new resource group to host the VM’s resources.
 
 - **Region:** Choose your preferred region for your VM.
    
    ![give value](/static/assets/installation-and-deployment/images/azure-ubuntu-vm-value.png)
 - **Image:** Choose `Ubuntu Server 20.04 LTS-x64 Gen2` image.
 
 - **Size:** Choose the VM size that meets our [system requirement](https://help.boldbi.com/deploying-bold-bi/deploying-on-linux/recommended-system-configuration/). For example, choose the `Standard_D2s_v3`.

    ![image](/static/assets/installation-and-deployment/images/azure-ubuntu-vm-image.png)
 
 - **Username:** Enter your username, which you will use to log in to the VM using Terminal.
 
 - **Password:** Enter your password, as you will need it to log in to the VM using Terminal.
 
 - **Inbound Ports:** Choose All port in check Box `HTTP,HTTPS and SSH`.

    ![authentication](/static/assets/installation-and-deployment/images/azure-ubuntu-vm-authentication.png)
 - Under the `Disks` blade, choose the VM OS disk type (SSD is recommended).
 - Choose OS Disk size `256GiB` 

    ![storage](/static/assets/installation-and-deployment/images/azure-ubuntu-vm-storage.png)
 - Click on `Review + create`

### How to Connect the Linux VM using SSH command
 - Depending on your operating system, open the respective terminal application.
 - Use the SSH command to connect to the VM. The command typically looks like this `ssh username@ipaddress`
 - After running the SSH command, you will be prompted to enter the password for the username you specified.

   ![ssh-connect](/static/assets/installation-and-deployment/images/SSH-connect.png)

 - **Note:**  Please refer to the link for a few more connection options.[help Link](https://learn.microsoft.com/en-us/azure/virtual-machines/linux-vm-connect?tabs=Windows).

### Installation and Running of the Bold BI Server 

 - Install the Bold BI in Linux Environment [help Link](https://help.boldbi.com/deploying-bold-bi/deploying-on-linux/installation-and-deployment/bold-bi-on-ubuntu/).

 - After the installation, when you access the IP address or domain name in the web browser, you will see the same interface as shown in the image below.

    ![boldbi](/static/assets/installation-and-deployment/images/azure-ubuntu-vm-boldbi.png)
 - Follow the steps in the link to do the [application startup](https://help.boldbi.com/application-startup/).