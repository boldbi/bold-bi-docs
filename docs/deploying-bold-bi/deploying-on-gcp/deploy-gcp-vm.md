---
layout: post
title: Install Bold BI on GCP VM Instance | Bold BI Documentation
description: Learn how to create a VM instance in the Google Cloud Platform portal and install the Bold BI server application on it.
platform: bold-bi
documentation: ug
---
# Self-deploy a Bold BI Server on Google Cloud Platform
The following steps guide you through deploying Bold BI on GCP VM instance. Follow the steps according to your instance type.
<ul>

1. [Deploying Bold BI on a GCP Windows instance](/deploying-bold-bi/deploying-on-gcp/deploy-gcp-vm/#deploying-bold-bi-on-a-gcp-windows-instance)
2. [Deploying Bold BI on a GCP Linux instance](/deploying-bold-bi/deploying-on-gcp/deploy-gcp-vm/#deploying-bold-bi-on-a-gcp-linux-instance) 
</ul>

## Deploying Bold BI on a GCP Windows Instance
### Set up a GCP Windows Instance 
* Go to [Google Cloud Console](https://console.cloud.google.com/) and log in to your GCP account.
* Navigate to `Compute Engine` and click on `VM Instances`.

  ![VM-Instance](/static/assets/installation-and-deployment/images/vm-instance.png)

* On the VM Instances page, click on the `Create Instance` button to start creating a new VM instance.

  ![Create-instance](/static/assets/installation-and-deployment/images/create-instance.png)
*  Enter a `name` for your VM instance. Select the `region` and `zone` where you want to create the VM instance. Select the `machine type` for your VM instance.

    ![Machine configuration](/static/assets/installation-and-deployment/images/Machine-configuration.png)
    ![Machine Type](/static/assets/installation-and-deployment/images/machine-type.png)
* Click on `Change` in the Boot disk section to begin configuring your boot disk. Select `Windows Server` from the Operating system list on the Public images tab. Choose `Windows Server 2019` or `later` from the Version list. [Please refer to this link](/deploying-bold-bi/deploying-on-windows/recommended-system-configuration/) for system configuration for Bold BI application. Click on `Select`.

  ![Boot disk changes](/static/assets/installation-and-deployment/images/boot-disk.png)
* Within the Firewall section, allow specific network traffic. Then click on `Create` to create the VM.

  ![Firewall setting and create](/static/assets/installation-and-deployment/images/Create-gcp-vm.png)
* Wait a short while for the VM instance to start. Once it's ready, its status will change to `running`.

  ![VM ready](/static/assets/installation-and-deployment/images/status-running.png)

### Connect to Windows Instance using RDP
* Find your Windows VM instance and make note of its external IP address.
* On your local machine (Windows), search for `Remote Desktop Connection` in the Start menu and open the application.
* In the `Remote Desktop Connection` window, enter the external IP address of your Windows VM. Click `Connect` to establish the RDP connection.

  ![RDP](/static/assets/installation-and-deployment/images/RDP.png)
* You may be prompted for credentials, so enter the username and password for the Windows user account on the VM, then click `Yes` in the prompted window.

  ![Credentials](/static/assets/installation-and-deployment/images/credentials.png)
  ![Verification](/static/assets/installation-and-deployment/images/RDP-verification.png)
* Once connected, you will see the Windows desktop of your VM, allowing you to interact with it as if you were using a local Windows machine.
* Other methods are available for connecting to your Windows instance. Please refer to this [Connecting windows](https://cloud.google.com/compute/docs/instances/connecting-to-windows)

### Installing and Running the Bold BI Server on Windows
This section provides instructions on how to install and run the Bold BI server in a virtual machine (VM).
* Install the Bold BI server on the created Windows virtual machine (VM) in the GCP portal using [help link](https://help.boldbi.com/deploying-bold-bi/deploying-on-windows/installation-and-deployment/)
* Launch your application either by default or through your Desktop shortcut menu item. For example, Start Bold BI in IIS.

  ![Start up](/static/assets/installation-and-deployment/images/boldbi-startup.png)
* Follow the steps in the link to do the [application startup](https://help.boldbi.com/application-startup/).
## Deploying Bold BI on a GCP Linux Instance
### Set up a GCP Linux Instance
* Go to [Google Cloud Console](https://console.cloud.google.com/) and log in to your GCP account.
* Navigate to `Compute Engine` and click on `VM Instances`.

  ![VM-Instance](/static/assets/installation-and-deployment/images/vm-instance.png)
* On the VM Instances page, click on the `Create Instance` button to start creating a new VM instance.

  ![Create-instance](/static/assets/installation-and-deployment/images/create-instance.png)
*  Enter a `name` for your VM instance, select the `region` and `zone` where you want to create the VM instance, and choose the `machine type` for your VM instance.

    ![Machine configuration](/static/assets/installation-and-deployment/images/Machine-configuration.png)
    ![Machine Type](/static/assets/installation-and-deployment/images/machine-type.png)
* Click on `Change` in the Boot disk section to begin configuring your boot disk. Under the Public images tab, choose `Ubuntu` from the Operating system list. Select `Ubuntu 20.04 LTS` from the Version list. Refer to the [Recommended System Configuration](/deploying-bold-bi/deploying-on-windows/recommended-system-configuration/) for system configuration for Bold BI application. Click on `Select`.

  ![Boot disk ubuntu](/static/assets/installation-and-deployment/images/bootdisk-ubuntu.png)
* Within the Firewall section, allow specific network traffic. Then click on `Create` to create the VM.

  ![Firewall setting and create](/static/assets/installation-and-deployment/images/Create-gcp-vm.png)
* Wait a short while for the VM instance to start. Once it's ready, its status will change to `running`.

  ![VM ready](/static/assets/installation-and-deployment/images/status-running.png)

### Connect to Linux Instance SSH
* Navigate to the `VM instances` page.
* Locate the VM instance you want to connect to and click on the `SSH` button next to it. Click on `Open in browser window`. This will open a new browser window with an SSH connection to your VM.

  ![Click on SSH](/static/assets/installation-and-deployment/images/connect-VM-linux.png)
* When connecting to the VM instance for the first time, SSH will prompt you to confirm the connection by typing `yes` and then entering the password for the user specified during VM creation.

  ![Connect to VM](/static/assets/installation-and-deployment/images/ssh-connection.png)
* Once connected, you will have a terminal window open that allows you to interact with your Linux VM.
* Other methods are available for connecting to your Linux instance. Please refer to the [Connect to Linux VM](https://cloud.google.com/compute/docs/connect/standard-ssh)

### Installing and Running the Bold BI Server on Linux
This section provides instructions on how to install and run the Bold BI server on a Linux virtual machine (VM).
* Install the Bold BI server on the created Linux virtual machine (VM) in the GCP portal using [help link](https://help.boldbi.com/deploying-bold-bi/deploying-on-linux/installation-and-deployment/bold-bi-on-ubuntu/).
* After the installation, when you access the IP address or domain name in the web browser, you will see the same interface as shown in the image below.

  ![Start up](/static/assets/installation-and-deployment/images/boldbi-startup.png)
* Follow the steps in the link to do the [application startup](https://help.boldbi.com/application-startup/).