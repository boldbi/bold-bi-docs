---
layout: post
title: VM image in Azure Marketplace | Bold BI Documentation
description: Learn how to make use of pre-configured VM image of Bold BI in Azure Marketplace and get your Bold BI server setup with no additional steps.
platform: bold-bi
documentation: ug
---

# Bold BI in Microsoft Azure Marketplace
This section explains how to use the Bold BI in the Azure portal to select and create the Bold BI Server virtual machine.

## Pre-configured image via Azure Marketplace
One of the fastest ways to get Bold BI Server up and to run in Azure is based on the pre-configured server image through the Azure [Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syncfusion.bold-bi-enterprise-multi-tenant). 

* Sign in to the [Azure portal](https://portal.azure.com/).
* Click `Create a resource` option in the upper left side.

    ![New resource in Azure portal](/static/assets/embedded/setup/images/portal-new.png)
* Search for “Bold BI Enterprise”.

    ![Search Bold BI server in Azure portal](/static/assets/embedded/setup/images/portal-search.png)
* Select the Bold BI Enterprise - Multi-tenant and click the `Create` button.

    ![Click on Create button](/static/assets/embedded/setup/images/click-create.png)

## Basics blade
The basics blade requests administrative information for the virtual machine.

* **Resource group**: Select an existing resource group or type the name for a new one. To learn more about resource groups click [here](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview#resource-groups).
* **Virtual machine name**: Enter a name for the virtual machine. The name must be within 1-15 characters and it should not contain special characters.
* **Region**: Select an Azure data center location where you want to run the VM.
* **Size**: By default `Standard E2` size plan picked else you could change the size by `Change Size` option.
* **Username**: Enter a user name to create a local account on the VM. The local account is used to sign in and manage the VM. 
* **Password**: Enter strong password to create a local account on the VM. The local account is used to sign in and manage the VM. The password must be within 8-123 characters and meets three out of the four following complexity requirements: one lower case character, one upper case character, one number, and one special character.
* When you are done, click next to continue to the `Disks` blade.  
    ![Basic VM information](/static/assets/embedded/setup/images/vm-rsgroup-detail.png)

    ![Basic VM information](/static/assets/embedded/setup/images/vm-admin-detail.png)

## Settings blade
The settings blade requests storage and network options. You can accept the default settings. Azure creates appropriate entries at required location.
If the required virtual machine size is selected, you can try Azure premium storage by selecting the Premium (SSD) in disk type.

### Disks
* **Storage**: Premium disks (SSD) backed by solid state drives are offer consistent and low-latency performance. They provide the best balance between price and performance, and are ideal for I/O-intensive applications and production workloads. Standard disks (HDD) are backed by magnetic drives and are preferable for applications where data is accessed infrequently.
When all the changes are completed, click OK.
* **Use managed disks**: Enable this feature to automatically manage the availability of disks by Azure to provide data redundancy and fault tolerance, without creating and managing storage accounts on your own. Managed disks can not be available in all regions. To learn more about the managed disk click [here](https://docs.microsoft.com/en-us/azure/storage/storage-managed-disks-overview).
* **Storage account**: Disks for Azure virtual machines are created in storage accounts. To learn more about storage account click [here](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview).
![VM Disks information](/static/assets/embedded/setup/images/vm-disk-detail.png)  

### Networking
* **Virtual network**: The virtual networks are logically isolated from each other in Azure. You can configure their IP address ranges, subnets, route tables, gateways, and security settings like the traditional network in the data center. Virtual machines in the same virtual network can access each other by default.
* **Subnet**: A subnet is a range of IP addresses in the virtual network, that can be used to isolate virtual machines from each other or from the Internet.
* **Public IP address**: Use the public IP address if you want to communicate with the virtual machine from outside the virtual network.
![VM Network information](/static/assets/embedded/setup/images/vm-network-detail.png)

### Management
* **Boot diagnostics**: Capture serial console output and screenshots of the virtual machine running on the host to help diagnose startup issues.
* **Guest OS diagnostics**: Get metrics for every minute of the virtual machine. You can use them to create alerts and stay informed on the applications.
* **Diagnostics storage account**: Metrics are written to the storage account, so that you can analyze them with your own tools.
![VM Management information](/static/assets/embedded/setup/images/vm-mgmt-detail.png)

### Advanced
* **Extensions**: Add new features like configuration management or antivirus protection to the virtual machine using extensions. To learn more about extensions, click [here](https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/features-windows).
![VM Advanced information](/static/assets/embedded/setup/images/vm-advncd-detail.png)

### High availability
* **Availability set**: You can group two or more virtual machines in an availability set to provide redundancy to the application. This configuration ensures the availability of at least one virtual machine and meets the 99.95% Azure SLA, during the planned or unplanned maintenance event. The availability set of the virtual machine can not be changed after it is created.  
![VM Tags information](/static/assets/embedded/setup/images/vm-tags-detail.png)

When all the changes are completed, click `Review and Create` button.

## Review and create
* On the review and create page, click `Create` to start the Bold BI Enterprise - Multi-tenant server virtual machine deployment.

    ![Bold BI Server VM details validation](/static/assets/embedded/setup/images/vm-detail.png)

    ![Deploying Bold BI Server](/static/assets/embedded/setup/images/vm-deploy.png)

## Connect to Bold BI Enterprise Multi-tenant Server virtual machine

Once the deployment progress is completed, Bold BI Server VM can be connected through a Remote Desktop Connection (RDP).
Follow the below steps to connect to the virtual machine:

1. Click the connect on the virtual machine overview window. A Remote Desktop Protocol (.rdp) file will be downloaded from the Azure portal.

    ![Download RDP File](/static/assets/embedded/setup/images/vm-connect.png)
2. Open the .rdp file and click the `Connect` for the unknown publisher warning.
    
    ![RDP warn](/static/assets/embedded/setup/images/rdp-warn.png)
3. Enter the credentials that you have given while deploying the VM as like below and click the OK.  

    ![VM Credentials.png](/static/assets/embedded/setup/images/vm-credentials.png)
4. On successful connection, the identity verification window will be displayed as shown below. Click OK to accept the certificate problems and connect to the virtual machine.

    ![verify the identity of the virtual machine](/static/assets/embedded/setup/images/cert-warning.png)
    
## Run the Bold BI Server
Desktop shortcut to start the Bold BI server can be found once connected to the virtual machine. By default, Bold BI server is hosted in the 80 port in the IIS.
Follow the given steps to run the Bold BI server:
1. Open the `Start Bold BI in IIS` shortcut to run the Bold BI server.
2. As the Bold BI server is not configured yet, application startup page will be shown.  
![BoldBI Startup](/static/assets/embedded/setup/images/boldbi-startup.png)  
3. Follow the steps in the link to do the [application startup](/embedded-bi/application-startup/).  