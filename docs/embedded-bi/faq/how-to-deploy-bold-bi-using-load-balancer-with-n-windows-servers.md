---
layout: post
title: Load Balancer with N servers | Bold BI Documentation 
description: Learn how to Deploy Bold BI using Network Load Balancer with N number of Windows Servers using Azure Blob.
platform: bold-bi
documentation: ug
---

# Deploy Bold BI using Load Balancer with N Windows Servers.
Learn how to Deploy Bold BI using the Network Load Balancer with N number of Windows Servers using the Azure Blob.
## Prerequisites:
1. 	Storage account for the blob storage in the azure cloud service.
2. 	The N Windows server machines for deploying the Bold BI instance.
3.  One Windows server machine for configuring the Load balancer.

## Create azure blob in the azure cloud service:
Follow these steps to create an azure blob container.
1.	Go to the <a href="https://portal.azure.com/#home">azure portal</a>, search storage account in the search bar, and `select storage account`. Refer<a href="https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal"> here</a> for how to create a `storage account` in azure portal.
![Azure-key](/static/assets/embedded/faq/images/azure-key.png)
2. Then, click the `Create` icon.
![Create-Icon](/static/assets/embedded/faq/images/create-icon.png)
3. Fill in the needed details and click `review and create`.
![reviewandcreate](/static/assets/embedded/faq/images/reviewandcreate.png)
4. Go to your created storage account and click `container`.
![create-container](/static/assets/embedded/faq/images/create-container.png)
5. Select blob from the drop-down and `click create`.
![create-container-blob](/static/assets/embedded/faq/images/create-container-blob1.png)
6. Find the created Blob inside the container.
![create-container-blob](/static/assets/embedded/faq/images/azure-blob-created.png)

## Deploy Bold BI in any one of the machine:

1. After giving the admin details, you need to select the advanced option.<a href="https://help.boldbi.com/embedded-bi/application-startup/latest/">Refer here</a> for how to configure the start up.
![blob-user-details](/static/assets/embedded/faq/images/start-up-configuration.png)
2. Select advanced and enter your `DB details` on the next page.
![azure-blob-details](/static/assets/embedded/faq/images/azure-blob-details.png)
3. Then, select `azure blob`.
![select-azure](/static/assets/embedded/faq/images/select-azure.png)
## Configure startup with azure blob:
Follow these steps to configure start up page with azure blob.
1.  Give the `blob details` on the next page.
![blob-details](/static/assets/embedded/faq/images/blob-details.png)
2.  Find the access key inside your created storage account. Click the show icon and `copy the Access key`.
![azure-access-key](/static/assets/embedded/faq/images/azure-access-key.png)
3.  After configuring Bold BI, stop the default site, go to the `Bold BI Enterprise Edition` site bindings in the IIS manager, remove the localhost, and put 80 in the port.
![site-bindings](/static/assets/embedded/faq/images/site-bindings.png)
4.  Install or deploy Bold BI in other remaining `N-1 machines` and point to 80 port. However, we should not do any startup configuration in these machines and copy the configuration folder from the default installation location `installeddrive\BoldServices\app_data` in machine 1 and replace it in the other machines in the same location.
![installation-folder](/static/assets/embedded/faq/images/installation-folder.png)
5.  Restart your sites in the `IIS manager` for the files replaced machines and open Bold BI in a private window and Verify the setup works properly by adding a resource.

## Configure Network Load Balancer:
Follow these steps to configure a Network Load Balancer in Windows server machine.
1.  Open the Server Manager. Select `Add Role and Features`.
![add-role-and-features](/static/assets/embedded/faq/images/add-role-and-features.png)
2.  Click on the `Before You Begin` page, select the `Role-based and feature-based` installation and click Next.
![install-and-click-next](/static/assets/embedded/faq/images/install-and-click-next.png)
3.  Select a server from the server pool on which you want to install the `Network Load Balancing feature` and `click Next`.
![select-server-pool](/static/assets/embedded/faq/images/select-server-pool.png)
4.  On the select server roles page, `click Next`and select `Network Load Balancing` checkbox.
![select-network](/static/assets/embedded/faq/images/select-network.png)
5.  A new window will pop up; click on `Add Features` to include required features and management tools for `Network Load Balancing` to work correctly.
![add-features-and-required](/static/assets/embedded/faq/images/add-features-and-required.png)
6.  Make sure that the NLB feature is selected, and `click next` and Click on the `Install button` to start the installation process.
![start-installation](/static/assets/embedded/faq/images/start-installation.png)
7.  Close the window once the installation is completed.

## Configure Network Load Balancer Cluster:
Follow these steps to configure a Network Load Balancer cluster. 
1.  On the Server Manager console of the member server, click Tools and select `Network Load Balancing Manager`.
![server-manager-console](/static/assets/embedded/faq/images/server-manager-console.png)
2.  Right-click `Network Load Balancing Clusters`,`Click New Cluster`.
![click-new-cluster](/static/assets/embedded/faq/images/click-new-cluster.png)
3.  On the New Cluster window, type the `IP address or name` of Machine 1 in the Host field and then `click Connect` and Verify that the Interface name is listed and `proceed to next`.
![enter-ip-address](/static/assets/embedded/faq/images/enter-ip-address.png)
4.  On the next page(Host Parameters page), adjust the priority value as per need. Also, ensure that the default status has been set as Started. When you are ready, `click on Next`.
![host-parameters](/static/assets/embedded/faq/images/host-parameters.png)
5.  Cluster IP `Addresses page`, click `Add` to add a new Cluster IP address.
![cluster-ip-address](/static/assets/embedded/faq/images/cluster-ip-address.png)
6.  Specify a `Cluster IP Address and click OK`.
![cluster-ip-address-and-click](/static/assets/embedded/faq/images/cluster-ip-address-and-click.png)

    > **NOTE:** This IP address is a new NLB Cluster virtual IP address on which the host service will run.

7.  Select an NLB cluster operation mode. You can also specify the FQDN name for the NLB cluster in the Full Internet name field and `click Next`.
![internet-name-filed](/static/assets/embedded/faq/images/internet-name-filed.png)
8.  In the Port Rules page, select the existing `port rule` and click `Edit`.
![Port-rules](/static/assets/embedded/faq/images/port-rules.png)
9.  Type port range from **80 to 80** (As you only want port number 80 for the IIS NLB cluster). Select Affinity mode to none and `click OK`.
![port-rules-range](/static/assets/embedded/faq/images/port-rules-range.png)
10.  Click **Add** to add a new rule for the `port number 443` using the same steps.
![port-rules-range-443](/static/assets/embedded/faq/images/port-rules-range-443.png)
11.  Once the port range is configured, `click Finish`.
![click-finish](/static/assets/embedded/faq/images/click-finish.png)
12.  Wait until the machine is added successfully. The icon color of the added NLB node should be displaying green.
![machines-ready](/static/assets/embedded/faq/images/machines-ready.png)

13.  Verify that the second NLB node is added successfully. The icon color should be  `displaying green`. 

14.  Repeat the same process for adding the remaining machines in NLB, then open the web browser and type the `NLB cluster IP address` in the address bar.



