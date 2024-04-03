---
layout: post
title: Upgrading Bold BI Server in Azure VM | Bold BI Documentation
description: Learn how to upgrade Bold BI Server in Azure VM to the latest version to get benefited with new feature and fix updates.
platform: bold-bi
documentation: ug
---

# Upgrade to latest Bold BI Enterprise Edition latest version

To upgrade the Bold BI Server VM to the latest source from older versions, follow these steps:

1. Connect to the Bold BI Server VM using a Remote Desktop Connection (RDP) by clicking on **Connect** in the virtual machine window. A Remote Desktop Protocol (`.rdp`) file will be downloaded from the Azure portal.

    ![Connect](/static/assets/installation-and-deployment/images/vm-connect.png)

2. Open the downloaded .rdp file and click on **Connect** when prompted with the unknown publisher warning.

    ![RDP Warning](/static/assets/installation-and-deployment/images/rdp-warn.png)

3. Enter the credentials provided when deploying the VM and click `OK`.

    ![VM Credentials.png](/static/assets/installation-and-deployment/images/vm-credentials.png)

4. Upon successful connection, an identity verification window will appear. Click on `Yes` to accept the certificate problems and connect to the virtual machine.

    ![verify the identity of the virtual machine](/static/assets/installation-and-deployment/images/cert-warning.png)

5. Once connected to the virtual machine, follow the provided [steps](/deploying-bold-bi/deploying-in-windows/upgrade-to-latest/) to upgrade the Bold BI Server to the latest version. 